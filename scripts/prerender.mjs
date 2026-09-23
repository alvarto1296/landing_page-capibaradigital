import { readFileSync, writeFileSync, rmSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root      = resolve(__dirname, '..');
const ssrDir    = resolve(root, 'dist-ssr');
const ssrOut    = resolve(ssrDir, 'entry-server.js');
const indexHtml = resolve(root, 'dist/index.html');

try {
  const { render } = await import(pathToFileURL(ssrOut).href);
  const appHtml    = render();
  const template   = readFileSync(indexHtml, 'utf-8');

  const html = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`,
  );

  writeFileSync(indexHtml, html);
  console.log('[prerender] ✓ /index.html prerendered');
} catch (err) {
  console.error('[prerender] ✗ failed:', err.message);
  process.exit(1);
} finally {
  // Remove SSR build dir so it doesn't get deployed to S3
  if (existsSync(ssrDir)) rmSync(ssrDir, { recursive: true, force: true });
}
