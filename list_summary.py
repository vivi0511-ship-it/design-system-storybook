import json

data = json.load(open('components_summary.json', 'r', encoding='utf-8'))
for k, v in data.items():
    print(f"Page: '{v['page']}' | Type: {v['type']} | Name: '{v['name']}'")
    if v['variants']:
        print(f"   Variants: {v['variants']}")
