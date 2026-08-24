// One-time setup script: creates a real PROTECTED share link with audienceType=SPECIFIC_EMAILS
// on consignment id=15 (LLPD-BL-0012), then opens the Manage Audience dialog on it and screenshots
// it directly -- proving the exact click sequence before porting into manifest.mjs.
import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const AUTH_STATE = path.join(__dirname, 'auth-state.json');
const BASE_URL = 'https://app.lumberlinq.com';

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

  await page.locator('input[formcontrolname="search"]').fill('LLPD-BL-0012');
  await page.waitForTimeout(1200);

  const shareBtn = page.locator('tr:has-text("LLPD-BL-0012") button.shp-action-btn[icon="pi pi-share-alt"]').first();
  await shareBtn.click();
  await page.waitForSelector('.share-links-dialog', { state: 'visible', timeout: 10000 });
  await page.waitForTimeout(500);

  const splitDropdown = page.locator('.share-links-toolbar p-splitbutton button.p-splitbutton-menubutton, .share-links-toolbar .p-splitbutton-dropdown').first();
  await splitDropdown.click();
  await page.waitForTimeout(300);
  await page.locator('.menu-protected, li:has-text("Protected")').first().click();

  await page.waitForSelector('.share-dialog', { state: 'visible', timeout: 10000 });
  await page.waitForTimeout(500);

  // Select "Specific Emails" audience type. First attempt clicked the wrapping div's center,
  // which landed on the label text -- p-radioButton's (onClick) only fires for clicks that are
  // descendants of the p-radioButton element itself, not a sibling label. Target the actual
  // PrimeNG radio element (.p-radiobutton, standard class) within that option row instead.
  await page.locator('.share-radio-option:has-text("Specific Email Addresses") .p-radiobutton').click();
  await page.waitForTimeout(300);

  // Add one demo email -- first attempt used a fake email (partner@example.com) and got a real
  // backend 500 ("An unexpected error occurred"), because the field label actually says "Add
  // Lumberlinq email address" -- it requires a REAL registered user's email, not any address.
  // punj@rikexim.com is a real, different registered user (confirmed earlier this session).
  await page.locator('.share-target-box input[pinputtext]').fill('punj@rikexim.com');
  await page.locator('.share-target-box button:has-text("Add")').click();
  await page.waitForTimeout(500);

  // Create the link
  const [response] = await Promise.all([
    page.waitForResponse(r => r.url().includes('/api/v1/share-link/create') && r.request().method() === 'POST', { timeout: 15000 }),
    page.locator('.share-dialog-footer button:has-text("Create")').first().click(),
  ]);
  console.log('CREATE_RESPONSE:', await response.text());
  await page.waitForTimeout(1500);

  await page.screenshot({ path: path.join(__dirname, 'screenshots', '_debug-after-create.png') });

  // Now find the Manage Audience button (icon="pi pi-users", confirmed real DOM attribute) and
  // click it, then screenshot the resulting dialog cropped to just the dialog itself.
  const audienceBtn = page.locator('tr:has-text("Specific Email Addresses") button[icon="pi pi-users"]').first();
  await audienceBtn.click();
  // Component selector app-share-link-audience-dialog is a real DOM tag (Angular component
  // selector) -- more precise than text-matching a generic p-dialog, which double-matched the
  // Shared Links list dialog underneath (that one apparently stays in the DOM, just hidden).
  await page.waitForSelector('app-share-link-audience-dialog .p-dialog', { state: 'visible', timeout: 10000 });
  await page.waitForTimeout(600);
  const dialogEl = page.locator('app-share-link-audience-dialog .p-dialog').first();
  await dialogEl.screenshot({ path: path.join(__dirname, 'screenshots', 'shipments__share-link-manage-audience__01.png') });
  console.log('AUDIENCE_DIALOG_SCREENSHOT_SAVED');

} catch (err) {
  console.error('FAILED:', err.message);
  await page.screenshot({ path: path.join(__dirname, 'create-protected-link-error.png'), fullPage: true }).catch(() => {});
} finally {
  await browser.close();
}
