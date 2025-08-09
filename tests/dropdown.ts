import {expect, test} from "@playwright/test"

test("dropdown", async ({page}) =>
{

    await page.goto("https://www.globalsqa.com/demo-site/select-dropdown-menu/");
    await page.locator('select').selectOption(
        // {label:'Australia'}
        {value:'CHN'}
        // {index:5}
    
    )

}
)