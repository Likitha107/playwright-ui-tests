import {Page} from "@playwright/test"
export default class RegisterPage{


    constructor(public page:Page){
    }

    async enterFirstName(firstname: string){
        await this.page.locator("#input-firstname").fill(firstname);
    }

    async enterLastName(lastname: string){
        await this.page.locator("#input-lastname").fill(lastname);
    }

    async enterEmail(email: string){
        await this.page.locator("#input-email").fill(email);
    }

    async enterTelephone(telephone: string){
        await this.page.locator("#input-telephone").fill(telephone);
    }

    async enterPassword(password: string){
        await this.page.locator("#input-password").fill(password);
    }

    async enterConfirmpwd(password: string){
        await this.page.locator("#input-confirm").fill(password);
    }

      isSubscribeChecked() {
        return this.page.locator("#input-newsletter-no");
    }

     async clickTerms(){
        await this.page.click("//label[@for='input-agree']");
    }

    async clickContinue(){
        await this.page.click("input[value='Continue']");
    }
}