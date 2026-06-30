import puppeteer from 'puppeteer';
const SHELL = 'C:\\Users\\PC\\.cache\\puppeteer\\chrome-headless-shell\\win64-150.0.7871.24\\chrome-headless-shell-win64\\chrome-headless-shell.exe';
const browser = await puppeteer.launch({ headless: true, executablePath: SHELL, args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
await new Promise(r => setTimeout(r, 1500));
const c = await page.$('[style*="aspect-ratio"]');
if (c) { await c.click(); await new Promise(r => setTimeout(r, 600)); }
const dots = await page.$$('[aria-label^="Go to slide"]');
await dots[3].click();
await new Promise(r => setTimeout(r, 500));
await page.screenshot({ path: 'screenshots/r3-s04.png', clip: { x:0,y:0,width:1440,height:900 } });
console.log('done');
await browser.close();
