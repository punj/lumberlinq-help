// One-time setup script: creates a PRIVATE share link and a PROTECTED/SPECIFIC_EMAILS share
// link on consignment id=15 (encodedId jedR6doeAx6vVplKNnGJuskX, "LLPD-BL-0012"), so the main
// manifest can screenshot the Manage Audience dialog and a logged-out Private-link view.
// Not meant to be kept long-term — delete after the codes are captured and used.
import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BASE_URL = process.env.BASE_URL || 'https://app.lumberlinq.com';
const AUTH_STATE = process.env.AUTH_STATE || path.join(__dirname, 'auth-state.json');

async function main() {
  const browser = await chromium.launch();
  const context = await browser.newContext({ storageState: AUTH_STATE, viewport: { width: 1600, height: 1000 } });
  const page = await context.newPage();

  await page.goto(`${BASE_URL}/consignments/list`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(2000);

  // Filter to our chosen demo record by BL number
  const blFilter = page.locator('.shp-filter-input').first();
  await blFilter.fill('LLPD-BL-0012');
  await page.waitForTimeout(1000);

  const row = page.locator('tr', { hasText: 'LLPD-BL-0012' }).first();
  await row.locator('button:has(.pi-share-alt)').click();
  await page.waitForTimeout(1000);

  const results = {};

  // ---- PRIVATE link ----
  await page.locator('.p-splitbutton-dropdown, .p-splitbutton .p-button-icon-only').last().click();
  await page.waitForTimeout(400);
  await page.locator('.p-menuitem', { hasText: 'Private' }).click();
  await page.waitForTimeout(500);

  const [privateResp] = await Promise.all([
    page.waitForResponse(r => r.url().includes('/api/v1/share-link/create') && r.request().method() === 'POST'),
    page.locator('button:has-text("Create Link")').click(),
  ]);
  results.privateCode = (await privateResp.text()).trim();
  await page.waitForTimeout(1500);

  // ---- PROTECTED / SPECIFIC_EMAILS link (for Manage Audience dialog) ----
  await page.locator('.p-splitbutton-dropdown, .p-splitbutton .p-button-icon-only').last().click();
  await page.waitForTimeout(400);
  await page.locator('.p-menuitem', { hasText: 'Protected' }).click();
  await page.waitForTimeout(500);

  // Select "Specific Emails" radio (3rd protectedAudienceOptions entry)
  await page.locator('.share-radio-option', { hasText: 'Specific Email' }).locator('.p-radiobutton').click();
  await page.waitForTimeout(300);
  await page.locator('.share-target-box input[pInputText]').fill('demo-viewer@example.com');
  await page.locator('.share-target-box button:has-text("Add")').click();
  await page.waitForTimeout(300);

  const [protResp] = await Promise.all([
    page.waitForResponse(r => r.url().includes('/api/v1/share-link/create') && r.request().method() === 'POST'),
    page.locator('button:has-text("Create Link")').click(),
  ]);
  results.protectedCode = (await protResp.text()).trim();
  await page.waitForTimeout(1500);

  fs.writeFileSync(path.join(__dirname, '_share-link-setup-result.json'), JSON.stringify(results, null, 2));
  console.log('RESULT:', JSON.stringify(results));

  await browser.close();
}

main().catch(err => { console.error('SETUP FAILED:', err); process.exit(1); });
