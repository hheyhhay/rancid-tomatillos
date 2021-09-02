describe('Feedback Loop login flows', () => {
  it('Should confirm that true is equal to true', () => {
    expect(true).to.equal(true)
  });
  it('Should be able to visit http://localhost:3000 and see a page with movies displayed', () => {
    cy.visit('http://localhost:3000')
    .contains('Rancid Tomatillos')
  })

  // beforeEach(() => {
  //   cy.visit('http://localhost:3000')
  // });

  it('Should be able to select a move and see the movie details', () => {
    cy.get('[id=718444]')
      .click()
    cy.contains('When the hunter becomes the prey')
  })
  it('Should be able to click back button and return to home page', () => {
    cy.get('.arrow-icon')
      .click()
    cy.contains('.movie-container')
  })
});
