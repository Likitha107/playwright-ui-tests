import {expect, test} from "@playwright/test"
import path from 'path'

test("uploadsinglefile", async ({page}) =>
{

    await page.goto("https://demoqa.com/upload-download");
    await page.locator("//input[@type='file']").setInputFiles("C:/Users/likitha_armugum/Desktop/invoice.pdf")

})

test("uploadmutiplefile", async ({page}) =>
    {
    
        await page.goto("https://blueimp.github.io/jQuery-File-Upload/");
        await page.locator("//input[@type='file']").setInputFiles([path.join("C:/Users/likitha_armugum/Desktop/invoice.pdf"),
        path.join("C:/Users/likitha_armugum/Desktop/AWS.pdf")])
    
    })