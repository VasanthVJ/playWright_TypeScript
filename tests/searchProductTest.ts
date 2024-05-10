import test, {expect} from 'fixtures/BaseFixtures';


// test.beforeEach("test Before Each",async({page, searchProduct})=>{
//     console.log('Before each Method');
//     await page.goto('https://www.amazon.co.uk/');
    
// })


test("Search product", async({page, searchProduct})=>{

    await searchProduct.acceptCookies();
    await searchProduct.searchProduct('iPhone');
})


test.describe("Check Product Details Page" , () => {
    test.beforeEach("From test describe  before each method ", async ({page})=>{
        console.log('Before each Method from describe');
        await page.goto('https://playwright.dev/');

    });

    test('describe block test', async({page})=>{
        await expect(page).toHaveTitle(/Playwright/);
    })

    test.afterEach("describe after Each", async()=>{
        console.log( "After Each Method from describe block");
    })
});


// test.afterEach("after Each", async()=>{
//     console.log( "After Each Method");
// })



