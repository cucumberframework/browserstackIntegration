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
        await page.goto("https://rahulshettyacademy.com/AutomationPractice/?utm_source=chatgpt.com");
    });

    test('Block to check all header tabs ', async ({ page }) => {
        await pomanager.loginpage.homeButton.waitFor();
        await expect(pomanager.loginpage.homeButton).toBeVisible();
        await expect(pomanager.loginpage.loginButton).toBeVisible();
        await expect(pomanager.loginpage.practiceButton).toBeVisible();
        await expect(pomanager.loginpage.signUpButton).toBeVisible();
        await pomanager.loginpage.homeButton.click();
    });

    test('Block to test all the radio buttons', async ({ page }) => {
        await pomanager.loginpage.radioButton1.click();
        await pomanager.loginpage.radioButton2.click();
        await pomanager.loginpage.dropdownSelect.selectOption('Option1');
        await pomanager.loginpage.nameField.waitFor();
        await pomanager.loginpage.nameField.fill("Rahul reocord");
        await pomanager.loginpage.alertButton.click();
    });
});