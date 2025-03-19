import { test, expect } from '@playwright/test';

test.describe('Calculator Form', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:4200'); // Adjust the URL as necessary
    });

    test('should fill the calculator form and submit', async ({ page }) => {
        await page.selectOption('#brand', 'Toyota'); // Replace with actual brand value
        await page.selectOption('#model', 'Corolla'); // Replace with actual model value
        await page.fill('#zip-code', '00-000');
        await page.fill('#owner-first-name', 'John');
        await page.fill('#owner-second-name', 'Doe');

        await page.click('#show-price-button');

        // Add assertions to verify the result after submission
        const result = await page.locator('.result-selector'); // Adjust selector for result
        await expect(result).toBeVisible();
    });
});