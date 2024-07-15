/// <reference types="cypress" />

describe("Funcionalidade: Produtos", () => {
  beforeEach(() => {
    cy.visit("http://lojaebac.ebaconline.art.br/produtos/");
  });

  it("Deve selecionar um produto da lista", () => {
    cy.get(".product-block")
      //first()
      //last()
      // eq(2)
      .contains("Apollo Running Short")
          .click();

      cy.get("#tab-title-description > a").should('contain', "Descrição")
  });
});
