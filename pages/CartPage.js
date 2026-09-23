import BasePage from "./BasePage";
import {test, expect} from '@playwright/test';
export default class CartPage extends BasePage{

    constructor(page){
        super(page);

    this.productCount=page.locator('.cart_item .inventory_item_name');
    // this.productName1=page.getByText('Sauce Labs Onesie');
    // this.productName2=page.getByText('Sauce Labs Bolt T-Shirt');
            this.productName1 = page.locator('.inventory_item_name')
        .filter({ hasText: 'Sauce Labs Onesie' });

    this.productName2 = page.locator('.inventory_item_name')
        .filter({ hasText: 'Sauce Labs Bike Light' });

    this.productPrice1=page.locator('.inventory_item_price').filter({hasText:'7.99' });
    this.productPrice2=page.locator('.inventory_item_price').filter({hasText:'9.99' });
    
    this.checkoutButton=page.locator('#checkout');
}

    

    async productsCount(){
        return await this.productCount.count();
              
    }

    async isProductCount(){
        await expect(this.productCount).toHaveCount(2);
    }

    async verifyProductName(){
       await expect(this.productName1).toBeVisible();
        await expect(this.productName2).toBeVisible();
    }

    async verifyPriceName(){
       await expect(this.productPrice1).toBeVisible();
        await expect(this.productPrice2).toBeVisible();
    }

    async checkoutClick(){
        await this.checkoutButton.click();
    }




}