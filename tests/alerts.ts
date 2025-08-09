import {expect, test} from "@playwright/test"

test("alertaccept", async ({page}) =>
{

    await page.goto("https://demoqa.com/alerts");
    page.on("dialog", async (alert)=>
        {
            console.log(alert.message())
            await alert.accept();
        })
        await page.locator("button:has-text('Click me')").nth(0).click();
})

test("alertdismiss", async ({page}) =>
    {
    
        await page.goto("https://demoqa.com/alerts");
        page.on("dialog", async (alert)=>
            {
                console.log(alert.message())
                await alert.dismiss();
            })
            await page.locator("button:has-text('Click me')").nth(2).click();
            expect(page.locator("id=confirmResult")).toContainText("Cancel")
    })
