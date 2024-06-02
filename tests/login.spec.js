const {test,expect}=require('@playwright/test')
const LoginPage = require('../pages/loginpage');
const HomePage= require('../pages/homepage')

test('Check demo app login Assignment 1', async ({page}) => {
    await page.goto("https://www.saucedemo.com/");
     const loginPage= new LoginPage(page)
     await loginPage.LoginToPage()
     await loginPage.verifylogin()
    // const homePage= new HomePage()
    // await homePage.selectPriceLowToHighest()
});





/*test('Check demo app login Assignment 1', async ({page}) => {
await page.goto("https://www.saucedemo.com/");
await page.getByPlaceholder("Username").fill('standard');
//await page.getByPlaceholder("Username").fill('standard_user');
await page.locator("input[name='password']").fill('secret');
await page.locator("input[name='login-button']").click();


});*/

/*test('Check demo app login Assignment 2', async ({page}) => {
    await page.goto("https://www.saucedemo.com/");
    await page.getByPlaceholder("Username").fill('standard_user');
    //await page.getByPlaceholder("Username").fill('standard_user');
    await page.locator("input[name='password']").fill('secret_sauce');
    await page.locator("input[name='login-button']").click();
    await expect(page.locator("//div[@class='app_logo']")).toContainText("Swag Labs");
});*/