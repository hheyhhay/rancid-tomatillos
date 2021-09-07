describe('Movie details flow', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });

  it('Should be able to visit http://localhost:3000 and see a page with movies displayed', () => {
    cy.get('.nav-bar').contains('Rancid Tomatillos')
    cy.get('.movie-container').should('be.visible')
    cy.url().should('include', '/')
  });

  it('Should display an error message if the movies do not load correctly', () => {
    cy.intercept(
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
    {
      statusCode: 500
    })
    cy.visit('http://localhost:3000/')
      .contains('.error', 'Movies failed to load. Please try again later!')
  })

  it('Should perform a successful GET request for all movies upon page load', () => {
   cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/',
   {
     statusCode: 200
   })
   cy.visit('http://localhost:3000/')
     .get('.movie-container').should('be.visible')
  });

  it('Should be able to select a movie and see the movie details', () => {
    cy.get('[id=718444]')
      .click()
    cy.contains('When the hunter becomes the prey')
  });

  it('As a user, when I click on a movie, the application should perform a successful GET request for a single movie\'s details', () => {
    cy.get('[id=718444]')
      .click()
    cy.intercept({
      method: 'GET',
      url: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/71844/'
    },
    {
      statusCode: 200
    })
    cy.visit('http://localhost:3000/718444')
      .contains('.movie-title', 'Rogue')
  });

  it('Should be able to click back button and return to home page', () => {
    cy.get('[id=718444]')
      .click()
    cy.get('.arrow-icon')
      .click()
    cy.get('.movie-container').should('be.visible')
  });

  it('Should display an error message if user inputs an false id in url', () => {
    cy.intercept({
      method: 'GET',
      url: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/0420/'
    },
    {
      statusCode: 404,
    })
    cy.visit('http://localhost:3000/0420')
      .contains('h2', 'We don\'t have that movie yet, sorry!')
  });

  it('Should be able to return to main page from error page', () => {
    cy.visit('http://localhost:3000/0420')
    cy.get('.arrow-icon')
      .click()
    cy.get('.movie-container').should('be.visible')
  })
});
