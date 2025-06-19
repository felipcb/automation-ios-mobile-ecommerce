import { $ } from '@wdio/globals';

class ProductPage {
  // Seleciona o produto "Circe Hooded Ice Fleece" na listagem
  async selecionarProdutoCirce() {
    await $('a[aria-label="Circe Hooded Ice Fleece"]').click();
  }

  // Seleciona tamanho M
  async selecionarTamanhoM() {
    await $('li[data-value="M"] span').click();
  }

  // Seleciona cor Gray
  async selecionarCorGray() {
    await $('li[data-value="Gray"] span').click();
  }

  // Clica no botão "Comprar"
  async clicarBotaoComprar() {
    await $('.single_add_to_cart_button').click();
  }

  // Fluxo completo: acessar produto + selecionar tamanho/cor + comprar
  async fluxoCompletoDoProdutoCirce() {
    await this.selecionarProdutoCirce();
    await this.selecionarTamanhoM();
    await this.selecionarCorGray();
    await this.clicarBotaoComprar();
  }
}

export default new ProductPage();
