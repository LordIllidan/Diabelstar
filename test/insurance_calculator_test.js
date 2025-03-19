import { test, expect } from '@playwright/test';

test('calculate insurance', async ({ page }) => {
    await page.goto('https://fake-calculator-byc0fmbgehc4fjeh.polandcentral-01.azurewebsites.net/ssr');

    // Fill in the form
    await page.selectOption('#brand', 'YourCarBrand');
    await page.selectOption('#model', 'YourCarModel');
    await page.fill('#zip-code', 'YourZipCode');
    await page.fill('#owner-first-name', 'OwnerFirstName');
    await page.fill('#owner-second-name', 'OwnerLastName');

    // Submit the form
    await page.click('#show-price-button');

    // Expect result
    const result = await page.locator('selector-for-result').innerText();
    expect(result).toContain('Expected Price');
});
