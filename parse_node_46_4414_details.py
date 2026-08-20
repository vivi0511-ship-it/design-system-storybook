import json

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

def resolve_color(fill, bound_vars=None, key='fills'):
    bound_list = bound_vars.get(key, []) if bound_vars else []
    if bound_list and bound_list[0].get('type') == 'VARIABLE_ALIAS':
        vid = bound_list[0].get('id')
        if vid in var_id_map:
            return f"var({var_id_map[vid][0]}) [{var_id_map[vid][1]}]"
    if fill and fill[0].get('type') == 'SOLID':
        c = fill[0].get('color', {})
        r, g, b = int(c.get('r', 0)*255), int(c.get('g', 0)*255), int(c.get('b', 0)*255)
        a = fill[0].get('opacity', c.get('a', 1.0))
        return f"#{r:02x}{g:02x}{b:02x}" if a == 1 else f"rgba({r},{g},{b},{a})"
    return "none"

data = json.load(open('node_46_4414_full.json', 'r', encoding='utf-8'))

lines = []
lines.append("=== FIGMA COMPONENT SET NODE 46:4414 (Text fields) ===")
lines.append(f"Name: {data.get('name')}")
lines.append(f"Type: {data.get('type')}")

for child in data.get('children', []):
    vname = child.get('name')
    vid = child.get('id')
    vbounds = child.get('absoluteBoundingBox', {})
    
    lines.append(f"\n---------------- VARIANT: '{vname}' (id: {vid}) ----------------")
    lines.append(f"BoundingBox: width={vbounds.get('width')}, height={vbounds.get('height')}")
    
    def print_node_recursive(node, depth=0):
        name = node.get('name')
        ntype = node.get('type')
        layout = node.get('layoutMode')
        pt = node.get('paddingTop', 0)
        pr = node.get('paddingRight', 0)
        pb = node.get('paddingBottom', 0)
        pl = node.get('paddingLeft', 0)
        spacing = node.get('itemSpacing', 0)
        radius = node.get('cornerRadius', 0)
        bound = node.get('boundVariables', {})
        
        fill_str = resolve_color(node.get('fills', []), bound, 'fills')
        stroke_str = resolve_color(node.get('strokes', []), bound, 'strokes')
        stroke_wt = node.get('strokeWeight', 0)
        
        line = f"{'  '*depth}[{ntype}] '{name}'"
        if layout: line += f" layout:{layout}"
        if radius: line += f" radius:{radius}px"
        if pt or pr or pb or pl: line += f" padding: top={pt} right={pr} bottom={pb} left={pl}"
        if spacing: line += f" gap:{spacing}px"
        line += f" | Fill: {fill_str} | Stroke: {stroke_str} ({stroke_wt}px)"
        
        if ntype == 'TEXT':
            style = node.get('style', {})
            font = style.get('fontFamily')
            size = style.get('fontSize')
            weight = style.get('fontWeight')
            chars = node.get('characters', '')
            line += f" | TEXT: '{chars}' font={font} size={size}px weight={weight}"
            
        lines.append(line)
        
        for c in node.get('children', []):
            print_node_recursive(c, depth + 1)
            
    print_node_recursive(child)

with open('node_46_4414_report.txt', 'w', encoding='utf-8') as f:
    f.write("\n".join(lines))

print("Report saved in UTF-8!")
