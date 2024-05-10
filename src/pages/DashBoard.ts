
import test, {expect, Page} from '@playwright/test';



export default class Dashboard{

    constructor(private page:Page){
        this.page = page;
    }


    public async selectMenu(){
        console.log('Selecting menu');
        await this.page.screenshot({path:"./screenshot.png"});
        const header = await this.page.locator('h6').textContent();
        console.log(`Header text ${header}`);
 0       //await this.page.locator("//li[@class='oxd-main-menu-item-wrapper']/a").first().click();
        await this.page.locator("//li[@class='oxd-main-menu-item-wrapper']/a").nth(1).click();
        await this.page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
    
        await this.page.locator("//button[text()=' Add ']").click();
        await this.page.pause();

        ///button[text()=' Add ']

        //const elements = this.page.locator("//li[@class='oxd-main-menu-item-wrapper']/a");
        //const count = await elements.count();


    }

    public async logOut(){

        console.log('Performing logout');
        await this.page.locator("//span[@class='oxd-userdropdown-tab']/p").click();
        console.log('clicking on logout');
        await this.page.locator("//ul[@class='oxd-dropdown-menu']//a[text()='Logout']").click();
    } 



}
