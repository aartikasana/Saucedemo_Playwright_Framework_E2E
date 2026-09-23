import {test, expect} from '@playwright/test';
import BasePage from '../pages/BasePage';
import LoginPage from  '../pages/loginPage';
import ProductPage from '../pages/ProductPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';
import OrderSummaryPage from '../pages/OrderSummaryPage';
import ConfirmationPage from '../pages/ConfirmationPage';

test(' End To End Testing', async ({page})=>{

    // Login Page
    const loginPage=new LoginPage(page);   
    await loginPage.goto('https://www.saucedemo.com/');
    await loginPage.login('standard_user', 'secret_sauce');


  //Product Page
    const productPage=new ProductPage(page);
  // 1. Verify the product Page is Displayed
    await productPage.isProductPageDisplayed();

    // 2. Sort the product by price
    await productPage.sortProductLowtoHigh();
    await productPage.isSorted();
    
    //3. Add first two cheapest product into the cart
    await productPage.AddToCart();
//     console.log(
//     'Cart badge:',
//     await productPage.addToCartButton.textContent()
// );

    // 4. Open cart
await productPage.openCart();

console.log(
    'Cart product names:',
    await page.locator('.inventory_item_name').allTextContents()
);

console.log('Product Price',
    await page.locator('.inventory_item_price').allTextContents());




    // CartPage
    const cartPage=new CartPage(page);
    
    //5. Count of Product
    await cartPage.productsCount();
    await cartPage.isProductCount();

   
    // Verify Product Name
    await cartPage.verifyProductName();
    // Verify Price
    await cartPage.verifyPriceName();

    // Proceed to Checkout
    await cartPage.checkoutClick();

    // CheckOut Page
    const checkOutPage= new CheckoutPage(page);
    await checkOutPage.checkOutInfo('Aarti', 'Kasana','123456');

    // Click on Continue
    await checkOutPage.continueClick();

    //Validate Item Total, tax, final total
    const orderSummary=new OrderSummaryPage(page);
    await orderSummary.validateTotal();
    await orderSummary.finishClick()

    // Confirmation Message
    const confirmationPage=new ConfirmationPage(page);
    await confirmationPage.confirmationMsg();

    

   
 

    



   



});
