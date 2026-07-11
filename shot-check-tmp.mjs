import puppeteer from "puppeteer";

const HEADLESS_SHELL =
  "C:\\Users\\PC\\.cache\\puppeteer\\chrome-headless-shell\\win64-150.0.7871.24\\chrome-headless-shell-win64\\chrome-headless-shell.exe";

const browser = await puppeteer.launch({
  headless: true,
  executablePath: HEADLESS_SHELL,
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
await page.goto("http://localhost:3000", { waitUntil: "networkidle2", timeout: 30000 });
await new Promise((r) => setTimeout(r, 1000));

const info = await page.evaluate(() => {
  const el = [...document.querySelectorAll("div")].find((d) =>
    d.className.includes?.("lg:h-[clamp")
  );
  if (!el) return { found: false };
  const cs = getComputedStyle(el);
  return {
    found: true,
    height: cs.height,
    flexBasis: cs.flexBasis,
    flexGrow: cs.flexGrow,
    rectH: el.getBoundingClientRect().height,
    cls: el.className,
  };
});
console.log(JSON.stringify(info, null, 2));
await browser.close();
