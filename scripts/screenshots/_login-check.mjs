import { chromium } from 'playwright';
const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1600, height: 1000 }, deviceScaleFactor: 2 });
const page = await context.newPage();
await page.goto('https://app.lumberlinq.com/login', { waitUntil: 'networkidle' });
await page.waitForTimeout(1500);
await page.screenshot({ path: 'screenshots/_login-check.png' });
await browser.close();
console.log('done');
