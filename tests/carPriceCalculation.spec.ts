import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://fake-calculator-byc0fmbgehc4fjeh.polandcentral-01.azurewebsites.net/ssr');
  await page.locator('div').filter({ hasText: 'Marka auta' }).nth(3).click();
  await page.getByRole('option', { name: 'Marka 1' }).click();
  await page.getByRole('combobox', { name: 'Model' }).locator('span').click();
  await page.getByText('Model 1').click();
  await page.getByText('Kod pocztowy').click();
  await page.getByRole('textbox', { name: 'Kod pocztowy' }).click();
  await page.getByRole('textbox', { name: 'Kod pocztowy' }).click();
  await page.getByRole('textbox', { name: 'Kod pocztowy' }).fill('00-000_');
  await page.getByText('Imię właściciela').click();
  await page.getByRole('textbox', { name: 'Imię właściciela' }).fill('Ala');
  await page.locator('div').filter({ hasText: 'Nazwisko właściciela' }).nth(3).click();
  await page.getByRole('textbox', { name: 'Nazwisko właściciela' }).fill('Test');
  await page.getByRole('button', { name: 'Wylicz' }).click();
  await expect(page.getByText('Twoja składka OC na auto')).toBeVisible();
});
