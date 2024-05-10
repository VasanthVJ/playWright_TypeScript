import {chromium } from "playwright";
import test from "@playwright/test";


test.describe('Launch Browser', ()=>{
    
    test('open letCode', async ()=>{
       const browser =   await chromium.launch({
        headless: false
       })
       const context = await browser.newContext();
       const page = await context.newPage();
       await page.goto('https://www.amazon.co.uk/');
       await browser.close()
    })
})
