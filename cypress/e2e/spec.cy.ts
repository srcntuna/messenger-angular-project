describe('empty spec', () => {
  const appURL = 'http://localhost:4200/';
  it('passes', () => {
    cy.visit(appURL);

    cy.contains('New Message').click();
    cy.url().should('include', 'contactList');

    cy.contains('Start Message').click();
    cy.url().should('equal', appURL);
  });
});
