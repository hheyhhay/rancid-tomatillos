describe('Feedback Loop login flows', () => {

  it('Should be able to visit http://localhost:3000 and see a page with movies displayed', () => {
    cy.visit('http://localhost:3000')
    .contains('Rancid Tomatillos')
    cy.get('.movie-container')
  })

  it('Should be able to select a move and see the movie details', () => {
    cy.get('[id=718444]')
      .click()
    cy.contains('When the hunter becomes the prey')
  })
  it('Should be able to click back button and return to home page', () => {
    cy.get('.arrow-icon')
      .click()
    cy.get('.movie-container')
  })

  it('Should display an error message if user inputs an false id in url', () => {
    cy.intercept({
      method: 'GET',
      url: 'http://localhost:3000/0420'
    },
    {
      statusCode: 404,
    }
  )
  })
});