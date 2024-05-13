import test,{ expect} from "fixtures/BaseFixtures";
import LoginPage from "OrangeCRM/pages/LoginPage";
import Dashboard  from "OrangeCRM/pageLocators/Dashboard";



test("perform login", async({loginPage, page, dashBoard, pimStep})=>{
    await dashBoard.selectMenu(Dashboard.MENU_LIST,"PIM");
    await pimStep.addEmployee();

    //const newPage = await page.context().newPage();
   // await newPage.goto('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions');
    //await newPage.pause();
    //await newPage.close();

}) 


// test('enable pop up ', async({page})=>{
//     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
//     console.log("Enetering user name");
//     await page.getByPlaceholder('Username').fill('Admin');
//     //const popUpPromise = this.page.waitForEvent('popup');
//     console.log("Entering password");
//     await page.getByPlaceholder('Password').fill('admin123');
//     await page.locator("//button[@type='submit']").click();
//     await page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
//     await page.waitForTimeout(7000);
//     page.on("dialog", async(popUp)=>{
//         expect(popUp.type()).toBe("alert");
//         console.log('allet',popUp.message());
//         await popUp.accept();
//     });
//     await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
// })