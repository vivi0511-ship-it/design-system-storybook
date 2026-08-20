import json

data = json.load(open('all_component_colors.json', 'r', encoding='utf-8'))

out_lines = []

def print_node_colors(node, prefix=""):
    name = node.get('name')
    ntype = node.get('type')
    fills = node.get('fills', [])
    strokes = node.get('strokes', [])
    chars = node.get('characters', '')
    
    color_str = ""
    if fills:
        color_str += f" Fills: {[f.get('var') or f.get('hex') or f.get('gradient') for f in fills]}"
    if strokes:
        color_str += f" Strokes: {[s.get('var') or s.get('hex') or s.get('gradient') for s in strokes]}"
    if chars:
        color_str += f" Text: '{chars}'"
        
    if color_str:
        out_lines.append(f"{prefix}[{ntype}] '{name}' -> {color_str}")
        
    for child in node.get('children', []):
        print_node_colors(child, prefix + "  ")

for key, comp in data.items():
    out_lines.append(f"\n==================== COMPONENT: {comp['name']} ({comp['page']}) ====================")
    print_node_colors(comp)

with open('component_colors_report.txt', 'w', encoding='utf-8') as f:
    f.write("\n".join(out_lines))

print("Color report generated successfully!")
