describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Should display the countdown', () => {
    cy.get('[data-cy="countdown-section"]').should('be.visible');
  });
});
