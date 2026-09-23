import { test as base ,expect} from '@playwright/test';
import LoginPage from '../pages/loginPage.js';
import ProductPage from '../pages/productPage.js';

export const test = base.extend({

    loggedInPage: async ({ page }, use) => {

        
        const loginPage = new LoginPage(page);

        await loginPage.goto('https://www.saucedemo.com/');
        await loginPage.login('standard_user', 'secret_sauce');
        await use(loginPage);
    },
        ProductPage: async ({ loggedInPage }, use) => {
        const productPage = new ProductPage(loggedInPage.page);
        await use(productPage);
    }
});
    export {expect}




    


