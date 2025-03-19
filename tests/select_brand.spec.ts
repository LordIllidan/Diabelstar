import { test, expect } from '@playwright/test';

test('select brand', async ({ page }) => {
  await page.goto('https://fake-calculator-byc0fmbgehc4fjeh.polandcentral-01.azurewebsites.net/ssr');
  await page.getByRole('combobox', { name: 'Marka auta' }).locator('div.mat-mdc-select-trigger').click();
  await page.getByRole('option', { name: 'Marka 1' }).click();
  await page.getByRole('combobox', { name: 'Marka auta' }).locator('div.mat-mdc-select-value').click();
  await expect(page.getByRole('combobox', { name: 'Marka auta' })).toContainText('Marka 1');
});