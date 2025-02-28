import { test, expect } from '@playwright/test';

test('Search Google for Playwright', async ({ page }) => {
  await page.goto('https://www.google.com');
  await page.fill('input[name="q"]', 'Playwright');
  await page.press('input[name="q"]', 'Enter');
  await expect(page).toHaveTitle(/Playwright - Google Search/);
});