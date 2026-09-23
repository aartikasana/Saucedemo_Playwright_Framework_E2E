import BasePage from "./BasePage"
import {test, expect} from '@playwright/test';


export default class ConfirmationPage extends BasePage{
    constructor(page){
        super(page);


     this.confirmationMessage=page.getByText('Thank you for your order!');
        
    }

    async confirmationMsg(){
        await expect(this.confirmationMessage).toBeVisible();
    }

    }

