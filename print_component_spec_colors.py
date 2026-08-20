import json

data = json.load(open('all_component_colors.json', 'r', encoding='utf-8'))

def parse_tree_colors(node, depth=0):
    ntype = node.get('type')
    name = node.get('name')
    fills = [f.get('var') or f.get('hex') for f in node.get('fills', [])]
    strokes = [s.get('var') or s.get('hex') for s in node.get('strokes', [])]
    chars = node.get('characters')
    
    line = f"{'  '*depth}[{ntype}] '{name}'"
    if fills: line += f" | Fills: {fills}"
    if strokes: line += f" | Strokes: {strokes}"
    if chars is not None: line += f" | Text: '{chars}'"
    print(line)
    
    # Only recurse up to depth 3 to keep readable
    if depth < 3:
        for child in node.get('children', []):
            parse_tree_colors(child, depth + 1)

for key, comp in data.items():
    if comp.get('type') in ['COMPONENT', 'COMPONENT_SET']:
        print(f"\n==================== PAGE: {comp['page']} | {comp['type']}: {comp['name']} (ID: {comp['id']}) ====================")
        parse_tree_colors(comp)
