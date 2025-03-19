import { test, expect } from '@playwright/test';

test('should calculate OC/AC correctly', async () => {
    const page = await browser.newPage();
    await page.goto('https://fake-calculator-byc0fmbgehc4fjeh.polandcentral-01.azurewebsites.net/ssr');

    await page.select('#brand', 'Toyota');
    await page.select('#model', 'Corolla');
    await page.fill('#zip-code', '90001');
    await page.fill('#owner-first-name', 'John');
    await page.fill('#owner-second-name', 'Doe');

    await page.click('#show-price-button');
    await page.waitForSelector('.price-display');

    const price = await page.$eval('.price-display', el => el.textContent);
    console.log(`Calculated price: ${price}`);

    await page.close();
});
