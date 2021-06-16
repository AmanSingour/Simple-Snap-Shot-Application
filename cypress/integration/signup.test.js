describe("app without auth", () => {
    it("app without auth", () => {
      cy.visit("#/signup");
      cy.get("[data-testid = signup]").should("exist");
    });
  
    it("auth check", () => {
      cy.visit("/");
      cy.get("[data-testid = login]").should("exist");
    });
  });
  
  const invalidEmail = (input) => {
      cy.get("[name = email]").focus().focused().type(`${input}{enter}`);
      cy.get("[data-testid = signup]").contains("Please enter valid email address!");
      cy.get("[name = email]").focus().focused().clear();
  }
  
  const invalidPassword = (input) => {
      cy.get("[name = password]").focus().focused().type(`${input}{enter}`);
      cy.get("[data-testid = signup]").contains("Password must be atleast length of 6");
      cy.get("[name = password]").focus().focused().clear();
  }
  
  describe("form validation", () => {
    beforeEach(() => cy.visit("#/signup"));  
    
    it("empty email input", () => {
      cy.get("[name = email]")
      .focus()
      .focused()
      .type("{enter}")
      .blur()
  
      cy.get("[data-testid = signup]").contains("Email required!");
    });
  
    it("invalid email input", () => {
        invalidEmail('a')
        invalidEmail('aman')
        invalidEmail('am an@')
        invalidEmail('aman@mail')
        invalidEmail('aman@.com')
    });
  
    it("empty password input", () => {
      cy.get("[name = password]")
      .focus()
      .focused()
      .type("{enter}")
      .blur()
  
      cy.get("[data-testid = signup]").contains("Password required!");
    });
  
    it("invalid password input", () => {
        invalidPassword('1')
        invalidPassword('12')
        invalidPassword('12345 6')
        invalidPassword('abcd1')
        invalidPassword('abcd 12')
    });
  
  });
  
  describe("signup with existing user", () => {
    beforeEach(() => cy.visit("#/signup"));
  
    it("signup with default credentials", () => {
      cy.get("[name = email]").focus().focused().type("akash@email.com{enter}");

      cy.get("[name = name]").focus().focused().type("Akash{enter}");
  
      cy.get("[name = password]").focus().focused().type("12345678{enter}");

      cy.get("[name = conf_password]").focus().focused().type("12345678{enter}");
  
      cy.get("[data-testid = signup]").contains("User already exist");
    });
  });
  