import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '..');
const storybookStaticPath = path.join(rootDir, 'storybook-static');
const vercelConfigPath = path.join(rootDir, 'vercel.json');

console.log('=== Vercel Deployment Verification ===');

if (!fs.existsSync(vercelConfigPath)) {
  console.error('Error: vercel.json is missing.');
  process.exit(1);
}
console.log('✓ vercel.json configuration verified.');

if (!fs.existsSync(storybookStaticPath)) {
  console.warn('Notice: storybook-static directory not yet compiled.');
  console.log('Run "npm run build-storybook" first before deploying to Vercel.');
} else {
  const indexHtml = path.join(storybookStaticPath, 'index.html');
  if (fs.existsSync(indexHtml)) {
    console.log('✓ storybook-static bundle ready for deployment.');
  } else {
    console.error('Error: index.html missing inside storybook-static.');
  }
}

console.log('\nTo deploy to Vercel, execute:');
console.log('  npx vercel --prod');
