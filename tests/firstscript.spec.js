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

    test('Block to check all header tabs ', async ({ page }) => {
        await page.goto("https://rahulshettyacademy.com/AutomationPractice/?utm_source=chatgpt.com");
        await pomanager.loginpage.homeButton.waitFor();
        await expect(pomanager.loginpage.homeButton).toBeVisible();
        await expect(pomanager.loginpage.loginButton).toBeVisible();
        await expect(pomanager.loginpage.practiceButton).toBeVisible();
        await expect(pomanager.loginpage.signUpButton).toBeVisible();
        await pomanager.loginpage.homeButton.click();
    });

    
});