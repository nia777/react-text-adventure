describe('Happy Path', () => {
  it('Head to breakroom', () => {
    cy.visit("http://localhost:3000");
    cy.get('button').last().click();
  });

  it('Snag cake', () => {
    cy.get('button').last().click();
  });

  it('Go to boss deak with cake', () => {
    cy.get('button').last().click();
  });

  it('Tempt with cake', () => {
    cy.get('button').last().click();
  });

  it('Verify game win', () => {
    cy.get('button').should('have.text', 'Play again');
  });
});
