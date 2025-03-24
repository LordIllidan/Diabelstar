import { test, expect } from '@playwright/test';

test('Select address from dropdown', async ({ page }) => {
  await page.goto('https://fake-calculator-byc0fmbgehc4fjeh.polandcentral-01.azurewebsites.net/ssr');
  await page.getByRole('combobox', { name: 'Adres' }).locator('span').click();
  await page.locator('div').filter({ hasText: 'Adres' }).nth(3).click();
  await page.locator('.cdk-overlay-backdrop').click();
  await expect(page.getByRole('combobox', { name: 'Adres' })).toHaveValue('Wybrany adres');
}});