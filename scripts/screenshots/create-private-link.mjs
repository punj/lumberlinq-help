// One-time setup script: creates a real PRIVATE share link for consignment id=15
// (encodedId jedR6doeAx6vVplKNnGJuskX, "LLPD-BL-0012", GreenRiver Sustainable Logs ->
// Continental Veneer GmbH), logged in as shiv@mahadev.com, then prints the real short code.
// Not part of the regular capture pipeline -- run once, note the code, delete/ignore after.
import { chromium } from 'playwright';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const AUTH_STATE = path.join(__dirname, 'auth-state.json');
const BASE_URL = 'https://app.lumberlinq.com';

// Mirrors capture.mjs's own tour/cookie-consent suppression -- without this, driver.js's
// per-page tour overlay intercepts every click (confirmed live: real timeout on the Share
// button click, "driver-overlay ... subtree intercepts pointer events").
const TOUR_KEYS = [
  'header', 'shipments', 'tallysheet', 'reports', 'business-partner', 'products',
  'loading-site', 'users', 'dashboard-v7', 'inventory-overview', 'inventory-in-out',
  'inventory-processing', 'inventory-operators', 'rbac-settings', 'subscription-management',
];

const browser = await chromium.launch();
const context = await browser.newContext({ storageState: AUTH_STATE, viewport: { width: 1600, height: 1000 } });
await context.addInitScript((tourKeys) => {
  tourKeys.forEach((k) => localStorage.setItem(`tms_tour_${k}_v1`, '1'));
  localStorage.setItem('ll_cookie_consent', JSON.stringify({ analytics: true }));
}, TOUR_KEYS);
const page = await context.newPage();

try {
  await page.goto(`${BASE_URL}/consignments/list`, { waitUntil: 'domcontentloaded' });
  await page.waitForSelector('.global-page-loader, .p-skeleton', { state: 'detached', timeout: 15000 }).catch(() => {});
  await page.waitForTimeout(1500);

  // Find the row for BL number LLPD-BL-0012 (search box)
  const search = page.locator('input[type="text"], input[type="search"]').first();
  await search.fill('LLPD-BL-0012');
  await page.waitForTimeout(1200);

  // Click that row's Share icon specifically -- .shp-action-btn matches several row icons
  // (view/edit/share/etc), .first() previously grabbed the "View" eye icon by accident.
  const shareBtn = page.locator('tr:has-text("LLPD-BL-0012") button.shp-action-btn[icon="pi pi-share-alt"]').first();
  await shareBtn.click();
  await page.waitForSelector('.share-links-dialog', { state: 'visible', timeout: 10000 });
  await page.waitForTimeout(500);

  // Open the split-button dropdown and pick Private
  const splitDropdown = page.locator('.share-links-toolbar p-splitbutton button.p-splitbutton-menubutton, .share-links-toolbar .p-splitbutton-dropdown').first();
  await splitDropdown.click();
  await page.waitForTimeout(300);
  await page.locator('.menu-private, li:has-text("Private")').first().click();

  await page.waitForSelector('.share-dialog', { state: 'visible', timeout: 10000 });
  await page.waitForTimeout(500);

  // Intercept the create API response
  const [response] = await Promise.all([
    page.waitForResponse(r => r.url().includes('/api/v1/share-link/create') && r.request().method() === 'POST', { timeout: 15000 }),
    page.locator('.share-dialog-footer button:has-text("Create")').first().click(),
  ]);

  const body = await response.text();
  console.log('RAW_RESPONSE:', body);
} catch (err) {
  console.error('FAILED:', err.message);
  await page.screenshot({ path: path.join(__dirname, 'create-private-link-error.png'), fullPage: true }).catch(() => {});
} finally {
  await browser.close();
}
