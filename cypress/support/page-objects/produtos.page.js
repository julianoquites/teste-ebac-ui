class ProdutosPage {
  visitarURL() {
    cy.visit("produtos");
  }

  buscarProduto(nomeProduto) {
    cy.get('[name="s"]').eq(1).type(nomeProduto);
    cy.get(".button-search").eq(1).click();
  }
  buscarProdutoLista(nomeProduto) {
    cy.get(".product-block").contains(nomeProduto).click();
  }

  visitarProduto(nomeProduto) {
    const urlFormatada = nomeProduto.replace(/\s/g, "-");
    cy.visit(`produtos/${urlFormatada}`);
  }

  adicionarAoCarrinho(tamanho, cor, quantidade) {
    cy.get(".button-variable-item-" + tamanho).click();
    cy.get(`.button-variable-item-${cor}`).click();
    cy.get(".input-text").clear().type(quantidade);
    cy.get(".single_add_to_cart_button").click();
  }
}

export default new ProdutosPage();
