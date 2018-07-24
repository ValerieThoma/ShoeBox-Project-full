describe("Loggin in", () => {
  beforeEach(() => {
    cy.visit("/") //todo set baseUrl to localhost:3001
  });

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

      cy.location("pathname").should("eq", "/users/home")  

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

      // sweet alert tells user they have entered the wrong password  
      cy.get(".swal-modal")
        .should('exist')
      
      cy.get(".swal-title")
        .should("contain", "Your password is incorrect")

      // after entering wrong password, the user remains on the home page
      cy.location("pathname").should("eq", "/users/login")  
    });

  });

  context("logs in as volunteer", () => {
    it("logs in with correct credentials", () => {
      cy.get("[data-cy=volLogin]")
        .click({ force: true })

      cy.get("[data-cy=volEmail]")
        .type("roscoe@mail.com")
        
      cy.get("[data-cy=volPass")
        .type("saycheese")
        
      cy.get("[data-cy=volSubmit")
        .click() 
        
      cy.location("pathname").should("eq", "/volunteers/home")   
    });

    it("logs in with bad credentials", () => {
      cy.get("[data-cy=volLogin]")
        .click({ force: true })

      cy.get("[data-cy=volEmail]")
        .type("phillip@mail.com")

      cy.get("[data-cy=volPass")
        .type("spaceghost")

      cy.get("[data-cy=volSubmit")
        .click()

      cy.get(".swal-modal")
        .should('exist')

      cy.get(".swal-title")
        .should("contain", "That email is not in our system") 
        
      cy.location("pathname").should("eq", "/volunteers/login")  
    });
  });

});