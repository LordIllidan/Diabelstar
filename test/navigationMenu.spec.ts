import { test, expect } from '@playwright/test';

test('Navigation menu functionality', async ({ page }) => {
  await page.goto('https://example.com');

  await page.click('text=About');
  await expect(page).toHaveURL(/.*about/);

  await page.click('text=Home');
  await expect(page).toHaveURL('https://example.com/');

  await page.click('text=Contact');
  await expect(page.locator('h1')).toContainText('Contact Us');
});