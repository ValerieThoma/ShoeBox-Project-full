describe("Loggin in", () => {
  beforeEach(() => {
    cy.visit("/") //todo set baseUrl to localhost:3001
  })

  context("logs in as family member", () => {
    it.("logs in with correct credentials", () => {
      cy.get(".nav-bar > .login > .family-login").click();
    });
  });

});
