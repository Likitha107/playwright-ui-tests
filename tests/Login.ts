import {chromium, test} from '@playwright/test'

test("Login Test", async ()=>{

    const browser = await chromium.launch({
        headless:false
    });

    const context = await browser.newContext();
    const page = await browser.newPage();
    await page.goto("https://ecommerce-playground.Lambdatest.io/")
    await page.hover("(//div[@class='info']//span[contains(.,'My account')])[2]");
    await page.click("'Login'")
    await page.waitForTimeout(5000)

    await page.fill("//input[@id='input-email']","likithasaran@gmail.com")
    await page.fill("//input[@id='input-password']","Likimammu@10")
    await page.click("//input[@type='submit']")

})