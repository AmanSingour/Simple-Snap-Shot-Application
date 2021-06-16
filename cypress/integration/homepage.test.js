describe("renders the app", () => {
  it("renders correctly", () => {
    cy.visit("/");
    cy.get("[data-testid = app]").should("exist");
  });
});
