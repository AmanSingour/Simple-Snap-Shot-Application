describe("home without auth", () => {
  beforeEach(() => cy.visit("/"));
  it("redirect to login page", () => {
    cy.get("[data-testid = login]").should("exist");
  });
});

describe("home page with auth", () => {
  beforeEach(() => cy.visit("/"));

  it("login with default credentials", () => {
    cy.get("[name = email]").focus().focused().type("akash@email.com{enter}");

    cy.get("[name = password]").focus().focused().type("12345678{enter}");

    cy.get("[data-testid = home]").contains("Akash");
  });
});

describe("home page after login", () => {
  beforeEach(() => cy.visit("/"));

  it('empty search query', () =>{
      cy.get("[id = search]")
      .focus().focused()
      .type('{enter}')

      cy.get("[data-testid = home]").contains("No Image Found");

  })

  it('valid search query', () =>{
    cy.get("[id = search]")
    .focus().focused()
    .type('computer')

    cy.get("[data-testid = home]").should('not.have.text', 'No Image Found');

})

  it("after logout", () => {
    cy.get("[data-testid = logout-btn]").should("exist").click();
    cy.get("[data-testid = login]").should("exist");
  });
});
