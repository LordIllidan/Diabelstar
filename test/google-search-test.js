const { test, expect } = require('@playwright/test');

test('should search for Playwright', async ({ page }) => {
  await page.goto('https://www.google.pl');
  await page.fill('input[name="q"]', 'Playwright');
  await page.press('input[name="q"]', 'Enter');
  // Add assertions to verify the search results here
});
