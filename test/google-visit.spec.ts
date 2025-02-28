import { test, expect } from '@playwright/test';

test('Visit Google homepage', async ({ page }) => {
  await page.goto('https://www.google.com');
  await expect(page).toHaveTitle(/Google/);
});