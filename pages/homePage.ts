import {Page} from "@playwright/test"
export default class HomePage{


    constructor(public page:Page){
    }

    async clickSpecial(){
        //await this.page.locator("(//span[contains(text(),'Special')])").nth(2).click;
       await this.page.click("(//span[contains(text(),'Special')]/../..)[2]")
    }

}