import json

data = json.load(open('all_component_colors.json', 'r', encoding='utf-8'))

out_lines = []

def dump_node_brief(node, level=0):
    ntype = node.get('type')
    name = node.get('name')
    fills = node.get('fills', [])
    strokes = node.get('strokes', [])
    chars = node.get('characters', '')
    
    fill_info = [f.get('var') or f.get('hex') for f in fills]
    stroke_info = [s.get('var') or s.get('hex') for s in strokes]
    
    line = f"{'  '*level}[{ntype}] '{name}'"
    if fill_info: line += f" | Fills: {fill_info}"
    if stroke_info: line += f" | Strokes: {stroke_info}"
    if chars: line += f" | Text: '{chars}'"
    out_lines.append(line)
    
    for child in node.get('children', []):
        dump_node_brief(child, level + 1)

for key, comp in data.items():
    cname = comp['name']
    out_lines.append(f"\n==================== {comp['page']} : {cname} (ID: {comp['id']}) ====================")
    dump_node_brief(comp)

with open('full_color_breakdown.txt', 'w', encoding='utf-8') as f:
    f.write("\n".join(out_lines))

print("Breakdown generated!")
