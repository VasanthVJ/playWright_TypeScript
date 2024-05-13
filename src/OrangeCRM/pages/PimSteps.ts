import { Page } from "@playwright/test";
import pimPage from "OrangeCRM/pageLocators/PimPage";

export default class PimSteps{
    private readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }

    public async addEmployee(){
        await this.page.locator(pimPage.ADD_BUTTON_XPATH).click();
        await this.page.getByPlaceholder(pimPage.FIRST_NAME_PLACEHOLDER).fill("John");
        await this.page.getByPlaceholder(pimPage.LAST_NAME_PLACEHOLDER).fill("Davis");
        await this.page.getByRole("button").and(this.page.getByText(" Save ")).click();
        console.log("Clicked on Save" );
    }




}