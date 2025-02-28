import { test, expect } from '@playwright/test';

test('Navigation menu test', async ({ page }) => {
  await page.goto('https://example.com');
  await page.click('nav >> text=About');
  await expect(page).toHaveURL(/.*about/);
});