describe('Search feature flow', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });

  it('Should show a search bar', () => {
    cy.get('.search-form').contains('Search Movies')
  })

  it('Should be able to type into search bar to find movie', () => {
    cy.get('input[type="text"]')
      .type('Mulan')

    cy.get('[id="337401"]').should('be.visible')
  })

  it('Should be show an message if no movies are found', () => {
    cy.get('input[type="text"]')
      .type('Lord of the Rings')
    cy.contains('.error', 'Sorry, we don\'t have that movie')
  })
})
