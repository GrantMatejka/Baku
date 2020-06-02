describe('View Tabs', function () {
   it("Login", function () {
      cy.exec('npm run web', { failOnNonZeroExit: false }).then((result) => { })
      cy.visit('http://localhost:19006/')
      cy.get('[data-testid="login-input-email"]').type('test@cypress.com')
      cy.get('[data-testid="login-input-password"]').type('password')
      cy.contains(/login/i).click();
   });
   it("View Feed", function () {
      cy.contains('Feed');
      cy.contains('Los Angeles').scrollIntoView()
   });
   it("View Search", function () {
      cy.contains('Search').click();
      cy.contains('Search');
      cy.contains('Where would you like to go?');
      cy.get('[data-testid="search-input-country"]').get('input').last().focus().type('Uni', { force: true })
      cy.contains('United States').click({ force: true })
      cy.contains('Let\'s Explore').dblclick();
      // cy.contains('Tustin').scrollIntoView

   });
   it("View Create", function () {
      cy.contains('New Post').click();
      cy.contains('Create Post');
   });
   it("View Notifications", function () {
      cy.contains('Notifications').click();
      cy.contains('Notifications');
   });
   it("View Profile", function () {
      cy.contains('Profile').click();
      cy.contains('Post Cards');
      cy.contains('Followers');
      cy.contains('Edit Profile');
      cy.contains('Post Cards');
      cy.contains('Favs');
      cy.contains('Los Angeles').scrollIntoView()

   });
});