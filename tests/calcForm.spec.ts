import { test, expect } from '@playwright/test';

test.describe('Calculator Form', () => {
    test('should submit the form and display the result', async ({ page }) => {
        await page.goto('https://fake-calculator-byc0fmbgehc4fjeh.polandcentral-01.azurewebsites.net/ssr');

        await page.selectOption('#brand', 'Toyota');
        await page.selectOption('#model', 'Corolla');
        await page.fill('#zip-code', '00-001');
        await page.fill('#owner-first-name', 'Jan');
        await page.fill('#owner-second-name', 'Kowalski');

        await page.click('#show-price-button');

        const result = await page.locator('.result-selector').innerText(); // Replace with actual selector for result
        expect(result).toContain('Expected Result'); // Replace with actual expected result
    });
});
