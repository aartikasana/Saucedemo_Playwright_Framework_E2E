import BasePage from "./BasePage";
import {test, expect} from '@playwright/test';
export default class ProductPage extends BasePage{

    constructor(page){
        super(page);
    
        // this.addToCart1=page.locator('button.btn_primary.btn_small.btn_inventory  ');
        this.addToCart1 = page.getByRole('button', { name: 'Add to cart' });
        
        
        this.addToCartButton=page.locator('.shopping_cart_badge');
        this.productPageTitle=page.getByText('Swag Labs');
        this.sortProduct=page.locator('.product_sort_container');
        this.openCartButton=page.locator('.shopping_cart_link');
    }


    async isProductPageDisplayed(){
        await expect(this.productPageTitle).toBeVisible();
    }

    // async AddToCart(){
    //      // Get only buttons which currently say "Add to cart"
    //     const addButtons = this.page.getByRole('button', { name: 'Add to cart' });

    //     // First cheapest product
    //     await addButtons.nth(0).click();

    //     // Second cheapest product
    //     await addButtons.nth(1).click();
    
    // }

   async AddToCart() {

    const products = this.page.locator('.inventory_item');

    await products.nth(0).getByRole('button', { name: 'Add to cart' }).click();

    await products.nth(1).getByRole('button', { name: 'Add to cart' }).click();
}

    async sortProductLowtoHigh(){
        await this.sortProduct.click();
        await this.sortProduct.selectOption('lohi');
    }

    async isSorted(){
        await expect(this.sortProduct).toHaveValue('lohi');
    }

    async openCart(){
        await this.openCartButton.click();
    }



}