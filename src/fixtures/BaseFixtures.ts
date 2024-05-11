import {test as base, chromium, Page} from '@playwright/test';
import Dashboard from 'pages/DashBoard';
import LoginPage from 'pages/LoginPage';
import SearhProduct from 'pages/searchProduct';
import BrowserLauncher from 'utils/browserUtil';


export type loginDetails={
  userName: string,
  password: string
}

type BaseFixtures = {
  searchProduct: SearhProduct;
  testHooks: void;
  loginPage: LoginPage;
  dashBoard: Dashboard;
  browserLaunch: BrowserLauncher;
};



const test = base.extend<loginDetails & BaseFixtures>({
  page: async({}, use)=>{
    const context = await chromium.launchPersistentContext('',{
      headless:process.env.CI? true: false,
      channel: 'chrome',
      args:['--start-maximized']
    });
    const pages = context.pages();

    const page = pages[0];
    //const page = await browser.newPage();
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await use(page);
    await context.close();
  },
  loginPage: async({page,dashBoard}, use)=>{
    console.time("Script duration");
    console.log('Befgore each');
    const loginPage = new  LoginPage(page);
    await loginPage.performLogin();

    //const page = await context.newPage();

    await use(new  LoginPage(page));
    console.log('After each');
    await dashBoard.logOut();
    console.timeEnd("Script duration");
  },
  dashBoard: async({page},use)=>{
    await use(new Dashboard(page));
  },
  searchProduct: async ({page}, use) => {
    await use(new SearhProduct(page));
}
});


export default test;
export const expect = test.expect;
