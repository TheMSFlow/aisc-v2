import puppeteer from "puppeteer";

const BASE = "http://localhost:3000/personalize";
const OUT = "./screenshots";

async function clickByText(page, text) {
  const clicked = await page.evaluate((t) => {
    const els = [...document.querySelectorAll("button, a")];
    const el = els.find((e) => e.textContent.trim().toLowerCase().includes(t.toLowerCase()));
    if (el) {
      el.click();
      return true;
    }
    return false;
  }, text);
  if (!clicked) throw new Error(`No clickable element with text: ${text}`);
}

async function shot(page, name) {
  await page.screenshot({ path: `${OUT}/walk-${name}.png` });
  console.log(`saved walk-${name}.png`);
}

const HEADLESS_SHELL =
  "C:\\Users\\PC\\.cache\\puppeteer\\chrome-headless-shell\\win64-150.0.7871.24\\chrome-headless-shell-win64\\chrome-headless-shell.exe";

async function run(viewport, tag, currency) {
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: HEADLESS_SHELL,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.setViewport(viewport);
  if (currency) {
    await page.evaluateOnNewDocument((c) => {
      localStorage.setItem("aisc_currency", c);
    }, currency);
  }
  await page.goto(BASE, { waitUntil: "networkidle0" });

  const individual = process.argv[2] === "individual";

  await clickByText(page, "Start");
  await new Promise((r) => setTimeout(r, 400));
  await shot(page, `${tag}-seat`);

  await clickByText(
    page,
    individual ? "I am not leading a team" : "I set the direction",
  );
  await new Promise((r) => setTimeout(r, 600));
  await shot(page, `${tag}-leads`);

  await page.type(
    "textarea",
    individual
      ? "I work in operations at a mid-sized firm. Nobody reports to me but my work touches most departments."
      : "I lead a community of about 5,000 people and sit on two boards. Several thousand look to me for direction every week.",
  );
  await shot(page, `${tag}-leads-filled`);
  await clickByText(page, "Continue");
  await new Promise((r) => setTimeout(r, 400));
  await shot(page, `${tag}-pressing`);

  await page.type(
    "textarea",
    individual
      ? "Everyone around me keeps talking about it and I quietly worry my role could change under me."
      : "I want my people briefed on this shift, and I want a private read on what AI means for everything I am responsible for.",
  );
  await clickByText(page, "Continue");
  await new Promise((r) => setTimeout(r, 400));
  await shot(page, `${tag}-picture`);

  await clickByText(page, "See my path");
  await new Promise((r) => setTimeout(r, 300));
  await shot(page, `${tag}-loading`);

  await page.waitForFunction(
    () => document.body.textContent.includes("Also worth considering"),
    { timeout: 45000 },
  );
  await new Promise((r) => setTimeout(r, 500));
  await shot(page, `${tag}-results-top`);
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await new Promise((r) => setTimeout(r, 400));
  await shot(page, `${tag}-results-bottom`);

  await browser.close();
}

if (process.argv[2] === "individual") {
  await run({ width: 1440, height: 900 }, "desktop-ind");
} else if (process.argv[2] === "ngn") {
  await run({ width: 1440, height: 900 }, "desktop-ngn", "NGN");
  await run({ width: 390, height: 844 }, "mobile-r2");
} else {
  await run({ width: 1440, height: 900 }, "desktop");
  await run({ width: 390, height: 844 }, "mobile");
}
console.log("done");
