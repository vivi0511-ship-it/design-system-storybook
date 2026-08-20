import json

with open('figma-doc.json', 'r', encoding='utf-8') as f:
    doc = json.load(f)

def find_node(node, tid):
    if node.get('id') == tid:
        return node
    for child in node.get('children', []):
        res = find_node(child, tid)
        if res:
            return res
    return None

found = find_node(doc['document'], "42:7043")

print("=== NODE 42:7043 DETAILS ===")
print("Name:", found.get('name'))
print("Type:", found.get('type'))

for child in found.get('children', []):
    print(f"\n--- VARIANT: {child.get('name')} (id: {child.get('id')}) ---")
    print("Bounding Box:", child.get('absoluteBoundingBox'))
    for inner in child.get('children', []):
        print("  Inner frame name:", inner.get('name'), "type:", inner.get('type'))
        print("  Layout Mode:", inner.get('layoutMode'))
        print("  Width:", inner.get('absoluteBoundingBox', {}).get('width'))
        print("  Height:", inner.get('absoluteBoundingBox', {}).get('height'))
        print("  Padding Top:", inner.get('paddingTop'))
        print("  Padding Right:", inner.get('paddingRight'))
        print("  Padding Bottom:", inner.get('paddingBottom'))
        print("  Padding Left:", inner.get('paddingLeft'))
        print("  Item Spacing:", inner.get('itemSpacing'))
        print("  Corner Radius:", inner.get('cornerRadius'))
        print("  Bound Variables:", inner.get('boundVariables'))
        for ellipse in inner.get('children', []):
            print("    Thumb name:", ellipse.get('name'), "Bounding box:", ellipse.get('absoluteBoundingBox'))
            print("    Thumb Bound Variables:", ellipse.get('boundVariables'))
