/// <reference types="cypress" />
import produtosPage from "../../support/page-objects/produtos.page";

describe("Funcionalidade: Produtos", () => {
  beforeEach(() => {
    produtosPage.visitarURL();
  });

  it("Deve selecionar um produto da lista", () => {
    produtosPage.buscarProdutoLista("Apollo Running Short");
    cy.get("#tab-title-description > a").should("contain", "Descrição");
  });

  it("Deve buscar um produto com sucesso", () => {
    let produto = "Cassius Sparring Tank";
    produtosPage.buscarProduto(produto);
    cy.get(".product_title").should("contain", produto);
  });
  it("Deve visitar a página do produto", () => {
    produtosPage.visitarProduto("Abominable Hoodie");
    cy.get(".product_title").should("contain", "Abominable Hoodie");
  });
  it("Deve adicionar produto ao carrinho", () => {
    let qtd = 7;
    produtosPage.buscarProduto("Abominable Hoodie");
    produtosPage.adicionarAoCarrinho("M", "Green", qtd);

    cy.get(".woocommerce-message").should(
      "contain",
      qtd + " × “Abominable Hoodie” foram adicionados no seu carrinho."
    );
  });

  it.only("Deve adicionar produto ao carrinho buscando da massa de dados", () => {
    cy.fixture("produtos").then((dados) => {
      produtosPage.buscarProduto(dados[1].nomeProduto);
      produtosPage.adicionarAoCarrinho(
        dados[1].tamanho,
        dados[1].cor,
        dados[1].quantidade
      );

      cy.get(".woocommerce-message").should("contain", dados[1].nomeProduto);
    });
  });
});
