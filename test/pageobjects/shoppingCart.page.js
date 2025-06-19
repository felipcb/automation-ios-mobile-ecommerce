import { $ } from '@wdio/globals';

class ShoppingCartPage {
  // Clica no ícone do carrinho no topo da página
  async abrirCarrinho() {
    await $('.text-skin.cart-icon').click();
  }
}

export default new ShoppingCartPage();
