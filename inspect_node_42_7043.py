import json

with open('figma-doc.json', 'r', encoding='utf-8') as f:
    doc = json.load(f)

target_id = "42:7043"

def find_node(node, tid):
    if node.get('id') == tid:
        return node
    for child in node.get('children', []):
        res = find_node(child, tid)
        if res:
            return res
    return None

found = find_node(doc['document'], target_id)

if found:
    print(json.dumps(found, indent=2))
else:
    print(f"Node {target_id} not found directly, searching by part...")
    def search_part(node):
        if "42:7043" in str(node.get('id')):
            print("Found matching id:", node.get('id'), node.get('name'))
            print(json.dumps(node, indent=2))
        for child in node.get('children', []):
            search_part(child)
    search_part(doc['document'])
