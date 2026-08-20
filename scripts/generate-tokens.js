import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '..');
const baseTokensPath = path.join(rootDir, 'base-palette-tokens.json');
const foundTokensPath = path.join(rootDir, 'foundational-tokens.json');
const outputDir = path.join(rootDir, 'src', 'styles');
const outputPath = path.join(outputDir, 'figma-tokens.css');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

let cssLines = [];
cssLines.push('/* Auto-generated Figma Design Tokens CSS */');
cssLines.push('/* Synchronized with com.figma.variableId mappings */');
cssLines.push('');
cssLines.push(':root {');

// Mapping store for Figma variable ID -> CSS variable name
const variableIdMap = {};

function processTokenObject(obj, prefix = 'uedp') {
  for (const key of Object.keys(obj)) {
    const item = obj[key];
    if (item && typeof item === 'object') {
      if (item.value !== undefined) {
        const varName = `--${prefix}-${key}`.toLowerCase().replace(/[^a-z0-9-]/g, '-');
        cssLines.push(`  ${varName}: ${item.value};`);
        if (item['com.figma.variableId']) {
          variableIdMap[item['com.figma.variableId']] = varName;
        }
      } else {
        processTokenObject(item, `${prefix}-${key}`);
      }
    }
  }
}

// Process Base Palette Tokens
if (fs.existsSync(baseTokensPath)) {
  const baseTokens = JSON.parse(fs.readFileSync(baseTokensPath, 'utf8'));
  if (baseTokens.tokens) {
    processTokenObject(baseTokens.tokens, 'uedp');
  }
}

// Process Foundational Tokens
if (fs.existsSync(foundTokensPath)) {
  const foundTokens = JSON.parse(fs.readFileSync(foundTokensPath, 'utf8'));
  if (foundTokens.tokens) {
    processTokenObject(foundTokens.tokens, 'uedp');
  }
}

// Convenience Aliases as required by spec (e.g., --uedp-rounded-3xl, --uedp-gap-4, --uedp-padding-6)
cssLines.push('');
cssLines.push('  /* Aliases for quick binding */');
cssLines.push('  --uedp-rounded-3xl: var(--uedp-radii-3xl, 32px);');
cssLines.push('  --uedp-gap-4: var(--uedp-spacing-4, 16px);');
cssLines.push('  --uedp-padding-6: var(--uedp-spacing-6, 24px);');
cssLines.push('}');

fs.writeFileSync(outputPath, cssLines.join('\n'), 'utf8');
console.log(`Generated CSS tokens at ${outputPath}`);
console.log(`Mapped ${Object.keys(variableIdMap).length} Figma Variable IDs.`);
