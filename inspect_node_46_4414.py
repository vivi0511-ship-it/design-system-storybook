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

found = find_node(doc['document'], "46:4414")

if not found:
    print("Node 46:4414 not found directly, searching by substring...")
    def search_sub(n):
        if "46:4414" in str(n.get('id')):
            return n
        for c in n.get('children', []):
            r = search_sub(c)
            if r: return r
        return None
    found = search_sub(doc['document'])

with open('node_46_4414_full.json', 'w', encoding='utf-8') as f:
    json.dump(found, f, indent=2)

print("Dumped node_46_4414_full.json successfully!")
