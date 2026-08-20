import json

specs = json.load(open('component_colors_clean.json', 'r', encoding='utf-8'))
lines = []

for title, comp in specs.items():
    lines.append(f"\n==================== {title} ====================")
    def walk(node, depth=0):
        fills = [f.get('var') or f.get('hex') for f in node.get('fills', [])]
        strokes = [s.get('var') or s.get('hex') for s in node.get('strokes', [])]
        txt = node.get('text')
        details = []
        if fills: details.append(f"Fills: {fills}")
        if strokes: details.append(f"Strokes: {strokes}")
        if txt: details.append(f"Text: {repr(txt)}")
        if details:
            lines.append(f"{'  '*depth}[{node['type']}] '{node['name']}' -> {' | '.join(details)}")
        for child in node.get('children', []):
            walk(child, depth + 1)
    walk(comp)

with open('color_audit.txt', 'w', encoding='utf-8') as f:
    f.write("\n".join(lines))

print("color_audit.txt written successfully!")
