import {expect, test} from "@playwright/test"
import moment from "moment"

test("placeholdervalue", async ({page}) =>
{

    await page.goto("https://demoqa.com/date-picker");
    await page.fill("id=datePickerMonthYearInput","04/19/2022")
    await page.waitForTimeout(2000)

})

test("placeholdervalue", async ({page}) =>
    {
        await page.goto("https://demoqa.com/date-picker");
        await page.click("id=datePickerMonthYearInput");

        const userInput = "July 1996";
        const[selectMonth,selectYear] = userInput.split(" ")
       
        const monthyear=moment(userInput,"MMMM YYYY").isBefore(moment(), "month");
        if(monthyear){
            console.log("The selected date is in the Past");
        await page.locator("//select[@class='react-datepicker__month-select']").selectOption({
            label:selectMonth
        })
        await page.locator("//select[@class='react-datepicker__year-select']").selectOption({
            label:selectYear
        })
        await page.locator("(//div[@class='react-datepicker__month']//div[contains(text(),'10')])[1]").click()
    }
    else {
        console.log("The selected date is in the future. Skipping selection.");
    }
}
)