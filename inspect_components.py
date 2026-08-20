import json

with open('figma-doc.json', 'r', encoding='utf-8') as f:
    doc = json.load(f)

components_dict = {}

def extract_node_info(node, page_name):
    ntype = node.get('type')
    name = node.get('name')
    nid = node.get('id')
    
    if ntype in ['COMPONENT', 'COMPONENT_SET', 'FRAME']:
        variants = {}
        if ntype == 'COMPONENT_SET':
            for child in node.get('children', []):
                v_str = child.get('name', '')
                if '=' in v_str:
                    parts = v_str.split(',')
                    for p in parts:
                        if '=' in p:
                            k, v = p.split('=', 1)
                            k, v = k.strip(), v.strip()
                            if k not in variants:
                                variants[k] = set()
                            variants[k].add(v)
        
        variants_clean = {k: list(v) for k, v in variants.items()}
        children_names = [c.get('name') for c in node.get('children', [])]
        
        components_dict[nid] = {
            'page': page_name,
            'name': name,
            'type': ntype,
            'id': nid,
            'variants': variants_clean,
            'children_count': len(children_names),
            'children_samples': children_names[:10],
            'boundVariables': node.get('boundVariables', {}),
            'paddingTop': node.get('paddingTop', 0),
            'paddingRight': node.get('paddingRight', 0),
            'paddingBottom': node.get('paddingBottom', 0),
            'paddingLeft': node.get('paddingLeft', 0),
            'itemSpacing': node.get('itemSpacing', 0),
            'cornerRadius': node.get('cornerRadius', 0),
            'fills': node.get('fills', []),
            'strokes': node.get('strokes', []),
            'strokeWeight': node.get('strokeWeight', 0),
        }

document = doc['document']
for page in document.get('children', []):
    page_name = page.get('name')
    for child in page.get('children', []):
        extract_node_info(child, page_name)
        for subchild in child.get('children', []):
            if subchild.get('type') in ['COMPONENT', 'COMPONENT_SET', 'FRAME']:
                extract_node_info(subchild, page_name)

with open('components_summary.json', 'w', encoding='utf-8') as f:
    json.dump(components_dict, f, indent=2)

print(f"Extracted {len(components_dict)} components/frames.")
