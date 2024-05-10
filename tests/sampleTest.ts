import test  from "@playwright/test";
import {chromium } from "playwright";


test.describe('Launch Browser', ()=>{
    
    test('open letCode', async ()=>{
       const browser =   await chromium.launch({
        headless: false
       })
       const context = await browser.newContext();
       const page = await context.newPage();
       await page.goto('https://letcode.in/');
       await browser.close()
       
       const allFrames = await page.frames();
       for(const frame of allFrames){

        const frameName = await frame.name();

        const element = await frame.locator('myLocator');
        if(await element.isVisible()){
            await element.click();
            break;
        }
       }
    })
})