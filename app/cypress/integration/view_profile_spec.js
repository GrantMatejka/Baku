describe('Profile Tabs', function () {
   it("Login", function () {
      cy.exec('npm run web', { failOnNonZeroExit: false }).then((result) => { })
      cy.visit('http://localhost:19006/')
      cy.get('[data-testid="login-input-email"]').type('eric@cypress.com')
      cy.get('[data-testid="login-input-password"]').type('password')
      cy.contains(/login/i).click();
      cy.contains('Feed');
   });
   it("Nav to Profile Tab", function () {
      cy.contains('Profile').click();
      cy.contains('PostCards');
      cy.contains('Followers');
      cy.contains('Edit Profile');
      cy.contains('Post Cards');
      cy.contains('Favs');
   });
   it("View Favorites", function () {
      cy.get('[data-testid="profile-favorites"]').click();
      cy.contains('Favorites!');
   });
   // it("View Post Cards", function () {
   //    cy.contains('Post Cards').click();
   //    // cy.get('[data-testid="profile-posts"]').click();
   // });
});