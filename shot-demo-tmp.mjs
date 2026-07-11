import puppeteer from "puppeteer";

const HEADLESS_SHELL =
  "C:\\Users\\PC\\.cache\\puppeteer\\chrome-headless-shell\\win64-150.0.7871.24\\chrome-headless-shell-win64\\chrome-headless-shell.exe";

const outPath = process.argv[2];
const width = parseInt(process.argv[3] || "1440");
const height = parseInt(process.argv[4] || "900");
const clicks = parseInt(process.argv[5] || "0");
const waitMs = parseInt(process.argv[6] || "1500");
const tabLabel = process.argv[7] || "";

const browser = await puppeteer.launch({
  headless: true,
  executablePath: HEADLESS_SHELL,
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

const page = await browser.newPage();
await page.setViewport({ width, height, deviceScaleFactor: 1 });
await page.goto("http://localhost:3000", { waitUntil: "networkidle2", timeout: 30000 });
await new Promise((r) => setTimeout(r, 800));
await page.evaluate(() => {
  document.getElementById("demo").scrollIntoView({ block: "start" });
});
await new Promise((r) => setTimeout(r, 300));

for (let i = 0; i < clicks; i++) {
  await page.evaluate(() => {
    document.querySelector('button[aria-label="Next panel"]').click();
  });
  await new Promise((r) => setTimeout(r, 600));
}

if (tabLabel) {
  await page.evaluate((label) => {
    const btn = [...document.querySelectorAll("button")].find((b) =>
      b.textContent.trim().toLowerCase().includes(label.toLowerCase())
    );
    btn?.click();
  }, tabLabel);
}

await new Promise((r) => setTimeout(r, waitMs));
await page.screenshot({ path: outPath });
console.log("Saved:", outPath);
await browser.close();
