import { expect} from 'chai';
import homePage from '../pageobjects/home.page.js';
import loginPage from '../pageobjects/login.page.js';

describe('E2e', () => {
    it('should login with valid credentials', async () => {
        
        await homePage.openMenu()
        await loginPage.login('testett@test.com', 'Teste@123') 
    })
})

//testett@test.com
//Teste@123