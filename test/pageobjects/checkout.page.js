const { $ } = require('@wdio/globals');

class CheckoutPage {
  async finalizarPedido() {
    // Botão de checkout (último clique antes de preencher o formulário)
    await $('a.button.checkout.wc-forward').click();

    // Preenche dados obrigatórios
    await $('#billing_first_name').setValue('Rock');
    await $('#billing_last_name').setValue('Balboa');
    await $('#billing_address_1').setValue('Rua das Flores, 123');
    await $('#billing_city').setValue('São Paulo');
    await $('#billing_postcode').setValue('02223-280');
    await $('#billing_phone').setValue('11999999999');
    await $('#billing_email').setValue('testett@test.com');

    // Marca o checkbox "Li e concordo..."
    await $('#terms').click();

    // Clica no botão Finalizar compra
    await $('#place_order').click();
  }
}

module.exports = new CheckoutPage();
