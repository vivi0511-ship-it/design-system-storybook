import json

data = json.load(open('all_component_colors.json', 'r', encoding='utf-8'))

for key, comp in data.items():
    pname = comp['page']
    cname = comp['name']
    ctype = comp['type']
    
    print(f"\n******************** {pname} -> [{ctype}] {cname} (id: {comp['id']}) ********************")
    
    # Check top fills/strokes
    if comp.get('fills'):
        print(f"Top Fills: {comp['fills']}")
    if comp.get('strokes'):
        print(f"Top Strokes: {comp['strokes']}")
        
    # Check variant children
    for child in comp.get('children', []):
        vname = child.get('name')
        vfills = [f.get('var') or f.get('hex') for f in child.get('fills', [])]
        vstrokes = [s.get('var') or s.get('hex') for s in child.get('strokes', [])]
        
        # Sub-layer texts and fills
        sub_text_colors = []
        def get_sub(n):
            for c in n.get('children', []):
                if c.get('type') == 'TEXT':
                    t_fills = [f.get('var') or f.get('hex') for f in c.get('fills', [])]
                    sub_text_colors.append((c.get('characters'), t_fills))
                get_sub(c)
        get_sub(child)
        
        print(f"  Variant '{vname}' -> Fills: {vfills} | Strokes: {vstrokes} | SubTexts: {sub_text_colors[:3]}")

