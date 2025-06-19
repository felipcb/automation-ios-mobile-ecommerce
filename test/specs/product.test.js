import { describe, it, expect} from '@wdio/globals';
import homePage from '../pageobjects/home.page.js';
import loginPage from '../pageobjects/login.page.js';



describe('E2e', () => {
    it('should login with valid credentials', async () => {
        
        await homePage.openMenu()
        await loginPage.login('testett@test.com', 'Teste@123')
        await searchPage.buscarProduto('Ice');
        await productPage.selecionarProduto();
        await productPage.fluxoCompletoDoProdutoCirce();
        await shoppingCartPage.abrirCarrinho();
        await checkoutPage.finalizarPedido();

        await expect($('h1.page-title')).toHaveText(expect.stringContaining('Pedido recebido'));
        
    })
})