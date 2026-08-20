import json

data = json.load(open('all_component_colors.json', 'r', encoding='utf-8'))

clean_specs = {}

def extract_node_colors(node):
    info = {
        'name': node.get('name'),
        'type': node.get('type'),
        'id': node.get('id'),
        'fills': node.get('fills', []),
        'strokes': node.get('strokes', []),
        'children': []
    }
    if 'characters' in node:
        info['text'] = node.get('characters')
        
    for child in node.get('children', []):
        info['children'].append(extract_node_colors(child))
        
    return info

for key, comp in data.items():
    cname = comp['name']
    pname = comp['page']
    clean_specs[f"{pname} :: {cname} ({comp['id']})"] = extract_node_colors(comp)

with open('component_colors_clean.json', 'w', encoding='utf-8') as f:
    json.dump(clean_specs, f, indent=2)

print("Saved component_colors_clean.json!")
