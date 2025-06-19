import { $ } from '@wdio/globals';

class SearchPage {
  // Campo de busca
  get inputBusca() {
    return $('input[placeholder="Enter your search ..."]');
  }

  // Botão de pesquisa
  get btnBuscar() {
    return $('.button-search.btn.btn-sm');
  }

  // Método para executar a busca
  async buscarProduto(nomeProduto) {
    await this.inputBusca.setValue(nomeProduto);
    await this.btnBuscar.click();
  }
}

module.exports = new SearchPage();
