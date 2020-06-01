describe('View Tabs', function () {
   it("Login", function () {
      cy.visit('http://localhost:19006/')
      cy.get('[data-testid="login-input-email"]').type('test@test.com')
      cy.get('[data-testid="login-input-password"]').type('password')
      cy.contains(/login/i).click();
   });
   it("View Feed", function () {
      cy.contains('Feed');
   });
   it("View Search", function () {
      cy.contains('Search').click();
      cy.contains('Search');
      cy.contains('Where would you like to go?');
      cy.get('[data-testid="search-input-country"]').click()
      cy.contains('Let\'s Explore').click();

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
   });
});