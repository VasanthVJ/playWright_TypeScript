import {test, expect} from '@playwright/test';


test("New Tab test", async({context})=>{

    const page = await context.newPage();
    await page.goto('https://demoqa.com/browser-windows');
    //await expect(page).toHaveTitle("Windows Example Test");
    const pageprmise = context.waitForEvent('page');
    await page.locator("[id='windowButton']").click();
    const newPage =await pageprmise;
    await expect(newPage).toHaveURL('https://demoqa.com/sample');

    //await newPage.locator("[name='submitbutton']").click();
})
