import { test, expect } from '@playwright/test';

test('User login test', async ({ page }) => {
  await page.goto('https://example.com/login');

  await page.fill('#username', 'testuser');
  await page.fill('#password', 'password');

  await page.click('#submit');

  await expect(page).toHaveURL('https://example.com/dashboard');
  await expect(page.locator('.welcome-message')).toContainText('Welcome testuser');
});