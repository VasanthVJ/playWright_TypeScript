
import test, {expect, Locator, Page} from '@playwright/test';
import dashboard from 'OrangeCRM/pageLocators/Dashboard';



export default class DashboardSteps{

    constructor(private page:Page){
        this.page = page;
    }


    public async selectMenu(locator: string, menuName: string){
        console.log('Selecting menu');
        await this.page.screenshot({path:"./screenshot.png"});
        const header = await this.page.locator('h6').textContent();
        console.log(`Header text ${header}`);
 0       //await this.page.locator("//li[@class='oxd-main-menu-item-wrapper']/a").first().click();
        const menuItems = await this.page.locator(locator).all();
        for(const menuItem of menuItems){
            const menuText =await menuItem.textContent();
            if(menuText && menuText.trim().includes(menuName)) {
                console.log(`Performing click on menu ${menuItem}`)
                await menuItem.click();
                return;
            } 
        }
        // await this.page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
    
        // await this.page.locator("//button[text()=' Add ']").click();
        // await this.page.pause();
    }

    public async logOut(){

        console.log('Performing logout');
        await this.page.locator("//span[@class='oxd-userdropdown-tab']/p").click();
        console.log('clicking on logout');
        await this.page.locator("//ul[@class='oxd-dropdown-menu']//a[text()='Logout']").click();
    } 



}
