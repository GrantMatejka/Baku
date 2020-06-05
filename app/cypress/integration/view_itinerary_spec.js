describe('View Itinerary Screen', function () {
    it("Login", function () {
        //cy.exec('npm run web', { failOnNonZeroExit: false }).then((result) => { })
        cy.visit('http://localhost:19006/')
        cy.get('[data-testid="login-input-email"]').type('eric@cypress.com')
        cy.get('[data-testid="login-input-password"]').type('password')
        cy.contains(/login/i).click();
        cy.contains('Feed');
     });
    it("Nav to Search Tab", function () {
        cy.contains('Search').click();
        cy.contains('Thinking of Travelling?');
        cy.contains('Let\'s Explore').dblclick();
    });

});