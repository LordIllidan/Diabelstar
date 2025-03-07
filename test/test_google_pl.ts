// Playwright test to visit the https://www.google.pl page
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://www.google.pl');

  // Perform any additional actions here, like searching or taking a screenshot

  await browser.close();
})();