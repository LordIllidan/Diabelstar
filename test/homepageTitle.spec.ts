import { test, expect } from '@playwright/test';

test('Verify homepage title', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle('Example Domain');
});