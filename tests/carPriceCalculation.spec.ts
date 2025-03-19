import { test, expect } from '@playwright/test';

test.describe('Car Price Calculation Form', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://fake-calculator-byc0fmbgehc4fjeh.polandcentral-01.azurewebsites.net/ssr'); // Replace with your app URL
    });

    test('should fill in the car details and submit the form', async ({ page }) => {
        await page.selectOption('#brand mat-select', 'Toyota'); // Example brand
        await page.selectOption('#model mat-select', 'Corolla'); // Example model
        await page.fill('#zip-code input', '12345');
        await page.fill('#owner-first-name input', 'John');
        await page.fill('#owner-second-name input', 'Doe');

        await page.click('#show-price-button');

        // Add assertions here to verify the expected outcome after form submission
        // Example: expect(await page.locator('.result')).toHaveText('Expected Result');
    });
});
