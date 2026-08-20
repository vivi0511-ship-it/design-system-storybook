import json

data = json.load(open('all_component_colors.json', 'r', encoding='utf-8'))

lines = []

for key, comp in data.items():
    pname = comp['page']
    cname = comp['name']
    ctype = comp['type']
    
    lines.append(f"\n==================== {pname} -> [{ctype}] {cname} (id: {comp['id']}) ====================")
    
    if comp.get('fills'):
        lines.append(f"Root Fills: {comp['fills']}")
    if comp.get('strokes'):
        lines.append(f"Root Strokes: {comp['strokes']}")
        
    def walk_variant(node, indent=2):
        nname = node.get('name')
        ntype = node.get('type')
        nfills = [f.get('var') or f.get('hex') for f in node.get('fills', [])]
        nstrokes = [s.get('var') or s.get('hex') for s in node.get('strokes', [])]
        chars = node.get('characters', '')
        
        info = f"{' '*indent}[{ntype}] '{nname}'"
        if nfills: info += f" | Fills: {nfills}"
        if nstrokes: info += f" | Strokes: {nstrokes}"
        if chars: info += f" | Text: '{chars}'"
        lines.append(info)
        
        for child in node.get('children', []):
            walk_variant(child, indent + 2)
            
    for child in comp.get('children', []):
        walk_variant(child)

with open('all_variants_color_map.txt', 'w', encoding='utf-8') as f:
    f.write("\n".join(lines))

print("Dumped all_variants_color_map.txt successfully!")
