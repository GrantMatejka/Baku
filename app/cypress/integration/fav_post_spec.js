describe('Like Post', function () {
   it("Login", function () {
      cy.exec('npm run web', { failOnNonZeroExit: false }).then((result) => { })
      cy.visit('http://localhost:19006/');
      cy.get('[data-testid="login-input-email"]').type('eric@cypress.com');
      cy.get('[data-testid="login-input-password"]').type('password');
      cy.contains(/login/i).click();
      cy.contains('Feed');
   });

   it("Fav", function () {
      cy.get('[data-testid="fav-icon"]').click();
   });
   it("Click Log Out", function () {
      cy.contains('Log Out').click()
   });

});