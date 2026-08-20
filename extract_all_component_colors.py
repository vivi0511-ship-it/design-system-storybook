import json

with open('figma-doc.json', 'r', encoding='utf-8') as f:
    doc = json.load(f)

# Load variable ID map from tokens
var_id_map = {}

def process_token_dict(d, prefix="uedp"):
    for k, v in d.items():
        if isinstance(v, dict):
            if 'value' in v:
                var_name = f"--{prefix}-{k}".lower().replace(' ', '-').replace('_', '-')
                if 'com.figma.variableId' in v:
                    var_id_map[v['com.figma.variableId']] = (var_name, v['value'])
            else:
                process_token_dict(v, f"{prefix}-{k}")

base_tokens = json.load(open('base-palette-tokens.json'))
found_tokens = json.load(open('foundational-tokens.json'))
if 'tokens' in base_tokens: process_token_dict(base_tokens['tokens'], 'uedp')
if 'tokens' in found_tokens: process_token_dict(found_tokens['tokens'], 'uedp')

def rgba_to_hex(c, opacity=1.0):
    r = int(c.get('r', 0) * 255)
    g = int(c.get('g', 0) * 255)
    b = int(c.get('b', 0) * 255)
    a = c.get('a', 1.0) * opacity
    if a < 0.99:
        return f"rgba({r}, {g}, {b}, {round(a, 2)})"
    return f"#{r:02x}{g:02x}{b:02x}"

def parse_paints(paints, bound_vars=None, bound_key='fills'):
    results = []
    bound_list = bound_vars.get(bound_key, []) if bound_vars else []
    
    for idx, p in enumerate(paints):
        if not p.get('visible', True):
            continue
        p_type = p.get('type')
        
        # Check variable bound
        bound_var_name = None
        bound_hex = None
        if idx < len(bound_list) and bound_list[idx].get('type') == 'VARIABLE_ALIAS':
            vid = bound_list[idx].get('id')
            if vid in var_id_map:
                bound_var_name, bound_hex = var_id_map[vid]
        
        if p_type == 'SOLID':
            c_hex = rgba_to_hex(p.get('color', {}), p.get('opacity', 1.0))
            results.append({
                'hex': c_hex,
                'var': bound_var_name,
                'var_hex': bound_hex
            })
        elif 'GRADIENT' in str(p_type):
            results.append({
                'gradient': p_type,
                'var': bound_var_name
            })
    return results

component_colors = {}

def inspect_component_tree(node, depth=0):
    nid = node.get('id')
    name = node.get('name')
    ntype = node.get('type')
    bound = node.get('boundVariables', {})
    
    fills = parse_paints(node.get('fills', []), bound, 'fills')
    strokes = parse_paints(node.get('strokes', []), bound, 'strokes')
    
    info = {
        'id': nid,
        'name': name,
        'type': ntype,
        'fills': fills,
        'strokes': strokes,
        'children': []
    }
    
    if ntype == 'TEXT':
        info['characters'] = node.get('characters', '')
        
    for child in node.get('children', []):
        info['children'].append(inspect_component_tree(child, depth + 1))
        
    return info

document = doc['document']
for page in document.get('children', []):
    pname = page.get('name')
    for child in page.get('children', []):
        ctype = child.get('type')
        cname = child.get('name')
        if ctype in ['COMPONENT', 'COMPONENT_SET', 'FRAME']:
            tree_info = inspect_component_tree(child)
            tree_info['page'] = pname
            component_colors[cname + "_" + child.get('id')] = tree_info

with open('all_component_colors.json', 'w', encoding='utf-8') as f:
    json.dump(component_colors, f, indent=2)

print(f"Extracted color trees for {len(component_colors)} top-level components/frames.")
