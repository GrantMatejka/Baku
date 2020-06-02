describe('Profile Tabs', function () {
   it("Login", function () {
      cy.exec('npm run web', { failOnNonZeroExit: false }).then((result) => { })
      cy.visit('http://localhost:19006/');
      cy.get('[data-testid="login-input-email"]').type('test@cypress.com');
      cy.get('[data-testid="login-input-password"]').type('password');
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
   it("Click Hamburger", function () {
      cy.get('[data-testid="profile-hamburger"]').click();
      cy.contains('Profile')
      cy.contains('Settings')
   });
   it("Click Settings", function () {
      cy.contains('Settings').click();
      cy.contains('Back')
      cy.contains('Log Out')
   });
   it("Click Log Out", function () {
      cy.contains('Log Out').click()
   });

});