import {Page} from "@playwright/test"
export default class AddToCartPage{


    constructor(public page:Page){
    }

    async clickCategory(){
        //await this.page.locator("//a[contains(text(),'Desktops')]").nth(3).click;
        await this.page.click("(//a[contains(text(),'Desktops')])[3]")
    }


    async addFirstProdToCart(){
          await this.page.hover("//div[@class='image']/a", {
            strict: false
        });

         await this.page.locator("(//button[@title='Add to Cart'])").nth(0).click();

    }

     async isToastVisible() { 
        // await this.page.waitFor
        const toast = this.page.locator("//a[.='View Cart ']");
        await toast.waitFor({state:"visible"})
        return toast;
    }
}