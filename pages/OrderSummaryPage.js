import BasePage from "./BasePage"
import {test, expect} from '@playwright/test';


export default class OrderSummaryPage extends BasePage{
    constructor(page){
        super(page);
    
        this.itemPrices=page.locator('.inventory_item_price');
        this.tax=page.locator('.summary_tax_label');
        this.totalPrice=page.locator('.summary_total_label');
        this.finishButton=page.locator('#finish');

    }

async validateTotal(){

let item=0;
for(let i=0;i<await this.itemPrices.count();i++){
    const price= parseFloat((
        await this.itemPrices.nth(i).innerText()).replace('$',''));
        item=item+price;
    }

const tax= parseFloat((await this.tax.innerText()).replace('Tax: $',''));
const total=parseFloat((await this.totalPrice.innerText()).replace('Total: $',''));

expect(total).toBeCloseTo(item+tax,2);
}



async finishClick(){
    await this.finishButton.click();
}



}



