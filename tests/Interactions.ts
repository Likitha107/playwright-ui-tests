import {expect, test} from "@playwright/test"

test("placeholdervalue", async ({page}) =>
{

    await page.goto("https://demoqa.com/text-box");

    const msg =page.locator("id=userName")
    const msgvalue = await msg.getAttribute("placeholder")
    console.log("Placeholder:"+ msgvalue);
    expect(msg).toHaveAttribute("placeholder","Full Name");
    console.log("Before: "+ await msg.inputValue())
    await msg.type("Bubbly")
    console.log("After:"+ await msg.inputValue())

}
)

test("checkbox", async ({page}) =>
{
    await page.goto("https://demoqa.com/checkbox");
    const checkbox = page.locator("//span//*[local-name()='svg' and contains(@class,'rct-icon rct-icon-uncheck')]")
    expect(checkbox).not.toBeChecked();
    await checkbox.check();
    const checkedbox = page.locator("//span//*[local-name()='svg' and contains(@class,'rct-icon rct-icon-check')]")
    expect(checkedbox).toBeChecked();

}
)