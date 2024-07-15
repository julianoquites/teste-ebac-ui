/// <reference types="cypress" />;

describe("Funcionalidade: Login", () => {
    it("Deve fazer login com sucesso", () => {
        cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/");
        cy.get("#username").type("jq.teste@teste.com.br");
        cy.get("#password").type("kabazz123");
        cy.get(".woocommerce-form > .button").click();

        cy.get(".woocommerce-MyAccount-content > :nth-child(2)").should(
          "contain",
          "Olá, jq.teste (não é jq.teste? Sair)"
        );
  });
});
