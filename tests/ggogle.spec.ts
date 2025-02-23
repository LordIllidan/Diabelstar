import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.pl/?gws_rd=ssl');
  await page.getByRole('button', { name: 'Zaakceptuj wszystko' }).click();
  await page.getByRole('button', { name: 'Szczęśliwy traf' }).click();
  await page.locator('.hero-tag-carousel__collage').first().click();
  await page.getByRole('button', { name: 'OK, got it' }).click();
  await page.getByRole('button', { name: 'Surprise me' }).click();
});
