import os
import urllib.request
import zipfile

node_url = "https://nodejs.org/dist/v20.17.0/node-v20.17.0-win-x64.zip"
target_dir = r"C:\Users\Shaivi Lavhe\.node"
zip_path = os.path.join(target_dir, "node.zip")

os.makedirs(target_dir, exist_ok=True)

if not os.path.exists(os.path.join(target_dir, "node-v20.17.0-win-x64", "node.exe")):
    print(f"Downloading Node.js portable zip from {node_url}...")
    urllib.request.urlretrieve(node_url, zip_path)
    print("Extracting Node.js zip...")
    with zipfile.ZipFile(zip_path, 'r') as zip_ref:
        zip_ref.extractall(target_dir)
    print("Node.js portable installation complete!")
else:
    print("Node.js portable zip already downloaded and extracted.")

node_exe = os.path.join(target_dir, "node-v20.17.0-win-x64", "node.exe")
print(f"Node.exe path: {node_exe}")
