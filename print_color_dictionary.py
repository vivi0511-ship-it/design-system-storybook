import json

data = json.load(open('all_component_colors.json', 'r', encoding='utf-8'))

for key, comp in data.items():
    pname = comp['page']
    cname = comp['name']
    
    # We want to collect all unique fills and strokes for each top-level component/variant
    top_fills = [f.get('var') or f.get('hex') for f in comp.get('fills', [])]
    top_strokes = [s.get('var') or s.get('hex') for s in comp.get('strokes', [])]
    
    variant_details = []
    for child in comp.get('children', []):
        vname = child.get('name')
        vfills = [f.get('var') or f.get('hex') for f in child.get('fills', [])]
        vstrokes = [s.get('var') or s.get('hex') for s in child.get('strokes', [])]
        
        # Get text fills inside variant
        texts = []
        def find_texts(n):
            if n.get('type') == 'TEXT':
                tf = [f.get('var') or f.get('hex') for f in n.get('fills', [])]
                texts.append((n.get('characters'), tf))
            for c in n.get('children', []):
                find_texts(c)
        find_texts(child)
        variant_details.append((vname, vfills, vstrokes, texts[:2]))
        
    print(f"=== [{pname}] {cname} (Fills: {top_fills}, Strokes: {top_strokes}) ===")
    for vname, vfills, vstrokes, texts in variant_details[:6]:
        print(f"   Variant '{vname}': Fills={vfills}, Strokes={vstrokes}, Texts={texts}")
