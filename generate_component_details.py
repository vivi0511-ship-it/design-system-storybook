import json

with open('figma-doc.json', 'r', encoding='utf-8') as f:
    doc = json.load(f)

def extract_details(node):
    info = {
        'name': node.get('name'),
        'type': node.get('type'),
        'id': node.get('id'),
        'layoutMode': node.get('layoutMode'),
        'paddingTop': node.get('paddingTop', 0),
        'paddingRight': node.get('paddingRight', 0),
        'paddingBottom': node.get('paddingBottom', 0),
        'paddingLeft': node.get('paddingLeft', 0),
        'itemSpacing': node.get('itemSpacing', 0),
        'cornerRadius': node.get('cornerRadius', 0),
        'boundVariables': node.get('boundVariables', {}),
        'children': []
    }
    
    # Extract fills
    fills = node.get('fills', [])
    info['fill_colors'] = []
    for fill in fills:
        if fill.get('visible', True) and fill.get('type') == 'SOLID':
            color = fill.get('color', {})
            r = int(color.get('r', 0) * 255)
            g = int(color.get('g', 0) * 255)
            b = int(color.get('b', 0) * 255)
            a = fill.get('opacity', color.get('a', 1.0))
            info['fill_colors'].append(f"rgba({r},{g},{b},{a})")
            
    # Extract children names and types
    for child in node.get('children', []):
        info['children'].append({
            'name': child.get('name'),
            'type': child.get('type'),
            'id': child.get('id'),
            'boundVariables': child.get('boundVariables', {})
        })
        
    return info

document = doc['document']
detailed_components = []

for page in document.get('children', []):
    pname = page.get('name')
    for child in page.get('children', []):
        ctype = child.get('type')
        cname = child.get('name')
        if ctype in ['COMPONENT', 'COMPONENT_SET', 'FRAME']:
            details = extract_details(child)
            details['page'] = pname
            detailed_components.append(details)
            
            # Check children
            for subchild in child.get('children', []):
                if subchild.get('type') in ['COMPONENT', 'COMPONENT_SET']:
                    subdetails = extract_details(subchild)
                    subdetails['page'] = pname
                    detailed_components.append(subdetails)

with open('detailed_components.json', 'w', encoding='utf-8') as f:
    json.dump(detailed_components, f, indent=2)

print(f"Dumped {len(detailed_components)} detailed components.")
