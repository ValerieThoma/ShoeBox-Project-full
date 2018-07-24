describe("Loggin in", () => {
  beforeEach(() => {
    cy.visit("/") //todo set baseUrl to localhost:3001
  })

  context("logs in as family member", () => {
    it("logs in with correct credentials", () => {
      cy.get("[data-cy=familyLogin]")
        .click({force:true})

      cy.get("[data-cy=userEmail]")
        .type("shyla@mail.com")

      cy.get("[data-cy=userPass")
        .type("shyla")
      
      cy.get("[data-cy=userSubmit]")
        .click()  

      cy.location("pathname").should("eq", "/users/home");  

  });

    it("logs in with incorrect credentials", () => {
      cy.get("[data-cy=familyLogin]")
        .click({ force: true })

      cy.get("[data-cy=userEmail]")
        .type("shyla@mail.com")

      cy.get("[data-cy=userPass")
        .type("wrongpassword")

      cy.get("[data-cy=userSubmit]")
        .click()

      cy.get(".swal-modal")
        .should('exist')
      
      cy.get(".swal-title")
        .should("contain", "Your password is incorrect")
    });

  });



});