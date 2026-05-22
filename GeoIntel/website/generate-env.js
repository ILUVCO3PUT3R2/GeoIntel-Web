// Simple generator to export select .env vars to a browser-friendly file
// Run: node generate-env.js
import fs from 'fs';
import path from 'path';

const envPath = path.resolve(process.cwd(), '.env');
const outDir = path.resolve(process.cwd(), 'assets', 'js');
const outFile = path.join(outDir, 'env.js');

if (!fs.existsSync(envPath)) {
  console.error('.env file not found. Create .env in the project root with your keys.');
  process.exit(1);
}

const raw = fs.readFileSync(envPath, 'utf8');
const lines = raw.split(/\r?\n/).filter(Boolean);
const obj = {};
for (const line of lines) {
  if (!line || line.trim().startsWith('#')) continue;
  const idx = line.indexOf('=');
  if (idx === -1) continue;
  const key = line.slice(0, idx).trim();
  const val = line.slice(idx + 1).trim();
  obj[key] = val;
}

// Only expose non-sensitive, client-side keys to the browser.
const publicKeys = {
  GOOGLE_MAPS_API_KEY: obj.GOOGLE_MAPS_API_KEY || '',
  // OAuth client ID is safe to expose to the browser (used by Google Sign-In flows).
  GOOGLE_OAUTH_CLIENT_ID: obj.GOOGLE_OAUTH_CLIENT_ID || ''
};

const content = `// Generated from .env — do NOT commit this file to version control.
window.__ENV__ = ${JSON.stringify(publicKeys, null, 2)};
`;

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, content, 'utf8');
console.log(`Wrote ${outFile}`);
