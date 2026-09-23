export default class BasePage{
    constructor(page){
        this.page=page;
    }

     async goto(url){
        await this.page.goto(url);

    }

    async click(element){
        await element.waitFor({state:'visible'});
        await element.click();
    }


    async fill(element,text){
        await element.waitFor({state: 'visible'});
        await element.fill(text);
    }

    async getText(element){
    await element.waitFor({state: 'visible'});
    return await element.textContent();
    }

     async isVisible(element_selector, timeout =5000){
        try{
            await element_selector.waitFor({state:'visible', timeout: timeout}); 
            return true;
        }catch(e){
            return false;
        }    

    }
}





















