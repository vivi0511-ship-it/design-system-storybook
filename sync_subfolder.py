import os
import shutil

src_root = r"c:\Users\Shaivi Lavhe\Anti gravity book"
target_root = r"c:\Users\Shaivi Lavhe\Anti gravity book\design-system-storybook"

items_to_sync = [
  "src",
  ".storybook",
  "scripts",
  "base-palette-tokens.json",
  "foundational-tokens.json",
  "package.json",
  "tsconfig.json",
  "vercel.json",
  "vite.config.ts"
]

for item in items_to_sync:
    s = os.path.join(src_root, item)
    d = os.path.join(target_root, item)
    if os.path.isdir(s):
        if os.path.exists(d):
            shutil.rmtree(d)
        shutil.copytree(s, d)
        print(f"Copied directory {item} to target.")
    elif os.path.isfile(s):
        shutil.copy2(s, d)
        print(f"Copied file {item} to target.")

print("Synchronization to ./design-system-storybook complete!")
