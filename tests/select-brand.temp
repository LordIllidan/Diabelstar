import { test, expect } from '@playwright/test';

test('Select car brand', async ({ page }) => {
    await page.goto('https://fake-calculator-byc0fmbgehc4fjeh.polandcentral-01.azurewebsites.net/ssr');

    // Open the brand select dropdown
    const brandSelect = page.getByRole('combobox', { name: 'Marka auta' });
    await brandSelect.click();

    // Select a brand from the dropdown
    await page.getByText('Marka 1').click();

    // Verify the selected brand
    await expect(page.getByText('Marka 1')).toBeVisible();

});
