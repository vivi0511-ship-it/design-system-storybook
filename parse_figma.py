import json

with open('figma-doc.json', 'r', encoding='utf-8') as f:
    doc = json.load(f)

def walk(node, depth=0):
    ntype = node.get('type')
    name = node.get('name')
    nid = node.get('id')
    
    # Check if component or component set or frame with interesting layer name
    if ntype in ['COMPONENT', 'COMPONENT_SET', 'FRAME', 'INSTANCE']:
        padding = f"top:{node.get('paddingTop',0)} right:{node.get('paddingRight',0)} bottom:{node.get('paddingBottom',0)} left:{node.get('paddingLeft',0)}"
        item_spacing = node.get('itemSpacing', 0)
        radii = node.get('cornerRadius', node.get('rectangleCornerRadii', ''))
        bound_vars = node.get('boundVariables', {})
        
        print("  " * depth + f"[{ntype}] '{name}' (id:{nid}) layout:{node.get('layoutMode')} spacing:{item_spacing} radii:{radii} boundVars:{list(bound_vars.keys())}")
        
    for child in node.get('children', []):
        walk(child, depth + 1)

document = doc['document']
for page in document.get('children', []):
    print(f"\n==================== PAGE: {page['name']} ====================")
    walk(page, 0)
