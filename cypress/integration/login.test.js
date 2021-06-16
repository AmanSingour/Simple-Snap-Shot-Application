describe("app without auth", () => {
  it("app without auth", () => {
    cy.visit("/");
    cy.get("[data-testid = login]").should("exist");
  });

  it("auth check", () => {
    cy.visit("/home");
    cy.get("[data-testid = login]").should("exist");
  });
});

const invalidEmail = (input) => {
    cy.get("[name = email]").focus().focused().type(`${input}{enter}`);
    cy.get("[data-testid = login]").contains("Please enter valid email address!");
    cy.get("[name = email]").focus().focused().clear();
}

const invalidPassword = (input) => {
    cy.get("[name = password]").focus().focused().type(`${input}{enter}`);
    cy.get("[data-testid = login]").contains("Password must be atleast length of 6");
    cy.get("[name = password]").focus().focused().clear();
}

describe("form validation", () => {
  beforeEach(() => cy.visit("/"));

  
  it("empty email input", () => {
    cy.get("[name = email]")
    .focus()
    .focused()
    .type("{enter}")
    .blur()

    cy.get("[data-testid = login]").contains("Email required!");
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

    cy.get("[data-testid = login]").contains("Password required!");
  });

  it("invalid password input", () => {
      invalidPassword('1')
      invalidPassword('12')
      invalidPassword('12345 6')
      invalidPassword('abcd1')
      invalidPassword('abcd 12')
  });

});

describe("login without signup", () => {
  beforeEach(() => cy.visit("/"));

  it("login with default credentials", () => {
    cy.get("[name = email]").focus().focused().type("abc@email.com{enter}");

    cy.get("[name = password]").focus().focused().type("12345678{enter}");

    cy.get("[data-testid = login]").contains("User not found");
  });
});
