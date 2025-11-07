const { test, expect } = require('@playwright/test');
const { POManager } = require('../pageobjects/POManager');
let context;
let page;
let pomanager;

test.describe('test describe block', () => {
    test.beforeAll('This is before all scenario', async ({ browser }) => {
        context = await browser.newContext();
        page = await context.newPage();
    });

    test.beforeEach('Before Each', async ({ page }) => {
        pomanager = new POManager(page);
        //await page.goto("https://rahulshettyacademy.com/AutomationPractice/?utm_source=chatgpt.com");
    });


    test('Amazon check', async ({ page }) => {
        await page.goto("https://www.amazon.in");
        await page.pause();
        await pomanager.amazonHomepage.continueShopping.waitFor();
        await pomanager.amazonHomepage.continueShopping.click();
        await pomanager.amazonHomepage.searchbar.fill("Technical books of java");
        await pomanager.amazonHomepage.goButton.waitFor();
        await pomanager.amazonHomepage.goButton.click();
        await pomanager.amazonHomepage.merchantPay.waitFor();
        const count = await pomanager.amazonHomepage.allItems.count();
        console.log(count);
    })
});