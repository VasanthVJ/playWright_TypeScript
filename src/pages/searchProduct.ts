import {test, Page} from '@playwright/test';


export default class SearhProduct{

    constructor(private page: Page ){
        this.page = page;
    }



    public async acceptCookies(): Promise<void> {
        //await this.page.goto('https://www.amazon.co.uk/');
        await this.page.locator("//input[@name='accept']").click();
    }

    public async searchProduct(productName: string): Promise<void>{
        await this.page.getByPlaceholder('Search Amazon.co.uk').fill(productName);
        await this.page.locator("//input[@type='submit']").click();
    }
}