import json

specs = json.load(open('component_colors_clean.json', 'r', encoding='utf-8'))
out_lines = []

def find_by_name(name_substring):
    matched = {}
    for title, comp in specs.items():
        if name_substring.lower() in title.lower():
            matched[title] = comp
    return matched

target_names = [
    'Buttons',
    'Component 20',
    'Switch',
    'Component 1',
    'Navigation bar',
    'Verification code',
    'Hamburger',
    'Dropdown menu',
    'Search bar',
    'Default',
    'Location card',
    'Questionnaire card',
    'Arrival card',
    'Incident heat map card',
    'Component 315',
    'Component 336',
    'Filters',
    'Date filters',
    'Zones',
    'Map'
]

for tname in target_names:
    matches = find_by_name(tname)
    out_lines.append(f"\n==================================================")
    out_lines.append(f"SEARCH TARGET: '{tname}' (Found {len(matches)} matches)")
    out_lines.append(f"==================================================")
    for title, comp in list(matches.items())[:3]:
        out_lines.append(f"--- {title} ---")
        def print_simple(n, d=0):
            f = [x.get('var') or x.get('hex') for x in n.get('fills', [])]
            s = [x.get('var') or x.get('hex') for x in n.get('strokes', [])]
            txt = n.get('text')
            out_lines.append(f"{'  '*d}[{n['type']}] '{n['name']}' | Fills: {f} | Strokes: {s} | Text: {repr(txt) if txt else ''}")
            for c in n.get('children', [])[:5]:
                print_simple(c, d+1)
        print_simple(comp)

with open('target_colors.txt', 'w', encoding='utf-8') as f:
    f.write("\n".join(out_lines))

print("target_colors.txt written successfully!")
