import { Locator } from "@playwright/test";

export default class PimPage{

    static readonly EMPLOYEE_INFORMATION_XPATH = "//h5[text()='Employee Information']";
    static readonly ADD_BUTTON_XPATH = "//button[@class='oxd-button oxd-button--medium oxd-button--secondary']";
    static readonly ADD_EMPLOYEE_HEADER_XPATH = "//h6[text()='Add Employee']"
    static readonly FIRST_NAME_PLACEHOLDER = "First Name"
    static readonly LAST_NAME_PLACEHOLDER = "Last Name"
    static readonly EMPLOYEE_ID_XPATH = "//h6[text()='Add Employee']"
    static readonly CREATE_LOGIN_TOGGLE_XPATH = "//h6[text()='Add Employee']";
}