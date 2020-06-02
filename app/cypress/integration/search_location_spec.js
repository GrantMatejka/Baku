

describe('Search Location', function () {
   it("Login", function () {
      cy.exec('npm run web', { failOnNonZeroExit: false }).then((result) => { })
      cy.visit('http://localhost:19006/')
      cy.get('[data-testid="login-input-email"]').type('test@cypress.com')
      cy.get('[data-testid="login-input-password"]').type('password')
      cy.contains(/login/i).click();
      cy.contains('Feed');
   });

   it("View Search", function () {
      cy.contains('Search').click();
      cy.contains('Search');
      cy.contains('Where would you like to go?');
      cy.get('[data-testid="search-input-country"]').get('input').last().focus().type('Uni', { force: true })
      cy.contains('United States').click({ force: true })
      cy.contains('Let\'s Explore').dblclick();
      cy.contains('Tustin').scrollIntoView()

   });
});