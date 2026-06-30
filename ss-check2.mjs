import puppeteer from 'puppeteer';

const SHELL = 'C:\\Users\\PC\\.cache\\puppeteer\\chrome-headless-shell\\win64-150.0.7871.24\\chrome-headless-shell-win64\\chrome-headless-shell.exe';
const browser = await puppeteer.launch({ headless: true, executablePath: SHELL, args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
await new Promise(r => setTimeout(r, 1500));

const container = await page.$('[style*="aspect-ratio"]');
if (container) { await container.click(); await new Promise(r => setTimeout(r, 600)); }

const dots = await page.$$('[aria-label^="Go to slide"]');
console.log('Dots:', dots.length);

const OUT = 'C:/Users/PC/Desktop/MS/APPS/aisc-v2/screenshots/';
for (const idx of [2, 3, 10]) {
  await dots[idx].click();
  await new Promise(r => setTimeout(r, 500));
  const num = String(idx + 1).padStart(2, '0');
  await page.screenshot({ path: `${OUT}r2-s${num}.png`, clip: { x: 0, y: 0, width: 1440, height: 900 } });
  console.log('Slide', num, 'captured');
}

await browser.close();
