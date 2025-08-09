import {expect, test} from '@playwright/test'
import RegisterPage from '../pages/registerPage'
import LoginPage from '../pages/loginPage'
import HomePage from '../pages/homePage'
import AddToCartPage from '../pages/addToCart'



const email = "testingdemo7@gmail.com";
const password = "Demo@123";


test("Registration_01",async({page,baseURL}) => {

 //console.log('TITLE: ' + testInfo.title);

        const register = new RegisterPage(page);
        await page.goto(`${baseURL}route=account/register`);
        await register.enterFirstName("Testing");
        await register.enterLastName("Demo")
        await register.enterEmail(email);
        await register.enterTelephone("123456789")
        await register.enterPassword(password);
        await register.enterConfirmpwd(password);
        expect(register.isSubscribeChecked()).toBeChecked();
        await register.clickTerms();
        await register.clickContinue();
        expect(await page.title()).toBe("Your Account Has Been Created!");
       // console.log('STATUS: ' + testInfo.status);

})


test("Login Test_02",async({page,baseURL}) => {

 //console.log('TITLE: ' + testInfo.title);

        const login = new LoginPage(page);
        await page.goto(`${baseURL}route=account/login`);
        await login.enterEmail(email);
        await login.enterPassword(password);
        await login.clickLogin();
        expect(await page.title()).toBe("My Account");

})

test("Add to Cart Test_03",async({page,baseURL}) => {

 //console.log('TITLE: ' + testInfo.title);

        const login = new LoginPage(page);
         const addToCart = new AddToCartPage(page);
         const homePage = new HomePage(page);
        await page.goto(`${baseURL}route=account/login`);
        await login.login(email,password);
        await homePage.clickSpecial();
       await addToCart.clickCategory();
       await addToCart.addFirstProdToCart();
       const isCartVisible = await addToCart.isToastVisible();
        expect(isCartVisible).toBeVisible();

})