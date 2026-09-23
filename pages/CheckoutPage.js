import BasePage from "./BasePage"


export default class CheckoutPage extends BasePage{
    constructor(page){
        super(page);


    this.firstNameInput=page.locator('#first-name');
    this.lastNameInput=page.locator('#last-name');
    this.zipCodeInput=page.locator('#postal-code');
    this.continueButton=page.locator('#continue');
    }

    async checkOutInfo(firstname,lastname,zipcode){
        await this.firstNameInput.fill(firstname);
        await this.lastNameInput.fill(lastname);
        await this.zipCodeInput.fill(zipcode);

        }
    async continueClick(){
        await this.continueButton.click();
    }


}