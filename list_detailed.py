import json

comps = json.load(open('detailed_components.json', 'r', encoding='utf-8'))

for c in comps:
    print(f"[{c['page']}] {c['type']} : '{c['name']}' (ID: {c['id']}) | Fills: {c['fill_colors']} | Bound: {list(c['boundVariables'].keys())}")
