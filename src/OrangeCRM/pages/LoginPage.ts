import test, { expect, Page } from '@playwright/test';


export default class LoginPage{


    constructor( private readonly page:Page){

        this.page = page;

    }


//https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
    public async performLogin(){
        // this.page.on("request", (req)=>{
        //     console.log(req.url());
        // });
        // const data =[{
        //     group: "Candidates Shortlisted",
        //     id: 7,
        //     pendingActionCount: 2
        // }],

        // const dataOne = {data: [{id:7,group:"Candidates Shortlisted",pendingActionCount:2}], meta:[], rels:[]};

        // await this.page.route('https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary', async route=>{
        //     const response = await route.fetch();
        //     console.log(`data ${await response.text()} ${await response.body()}`)

            // await route.fulfill({
            //     contentType: 'application/json',
            //     body: JSON.stringify(dataOne)
            // });




                //contentType: 'application/json',
                //body: JSON.stringify(data),
    
        //})


        // for printing the request methods, resourece type and the url
        // this.page.on("request", (req)=>{
        //     console.log(`>>:: ${req.method()} ${req.resourceType()} ${req.url()}`);
        // });

        // await this.page.route("**/*",(route)=>{
        //     if(route.request().resourceType()==='image'){
        //         return route.abort();
        //     }
        //     return route.continue();
        // })
        // this.page.on("response", (res)=>{
        //     console.log(`>>:: ${res.status()} ${res.url()}`);
        // })


      
          //await this.page.route(/(analytics|fonts)/, (route)=> route.abort());

        // this.page.on("dialog", async(popUp)=>{
        //     expect(popUp.type()).toBe("alert");
        //     console.log(popUp.message());
        //     await popUp.accept();
        // })
        //await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        console.log("Enetering user name");
        await this.page.getByPlaceholder('Username').fill('Admin');
        //const popUpPromise = this.page.waitForEvent('popup');
        console.log("Entering password");
        await this.page.getByPlaceholder('Password').fill('admin123');
        await this.page.locator("//button[@type='submit']").click();
        await this.page.context().storageState({path:'state.json'});
        await this.page.waitForTimeout(5000);
        await this.page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
        await this.acceptAlerts();
        await expect(this.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    }


    public async acceptAlerts(){
        this.page.on('dialog', async(popUp)=>{
            expect(popUp.type()).toBe("alert");
            console.log(popUp.message());
            await popUp.accept();
        })
    };





}

// test.beforeAll(async({playwright})=>{
//     await playwright.chromium.launchPersistentContext('');


// })