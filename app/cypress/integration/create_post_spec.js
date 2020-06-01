describe('Create Post', function () {
   // beforeEach(() => {
   // });

   it("Login", function () {
      cy.visit('http://localhost:19006/')
      cy.get('[data-testid="login-input-email"]').type('test@test.com')
      cy.get('[data-testid="login-input-password"]').type('password')
      cy.contains(/login/i).click();
      cy.contains('Feed');
   });

   it("Nav to Create", function () {
      cy.contains('New Post').click()
   });

   it("Assets Load", function () {
      cy.get('img')
      cy.get('[data-testid="create-city"]')
      cy.get('[data-testid="create-country"]')
      cy.get('[data-testid="create-caption"]')
   });

   it("Fill Fields", function () {
      cy.get('[data-testid="create-photo"]').click();
      // cy.get('img').click();
      cy.get('[data-testid="create-city"]').type('Tustin')
      cy.get('[data-testid="create-country"]').type('United States')
      cy.get('[data-testid="create-caption"]').type('Tiny Meeat')
      cy.contains('Preview').click();
   });

   it("Preview Post", function () {
      cy.get('img')
      cy.contains('Hello From')
      cy.contains('Tustin')
      cy.contains('View Itinerary')
      cy.contains('Preview Post Screen')

      // cy.get('[data-testid="preview-city"]').contains('Tustin')
      // cy.get('[data-testid="preview-country"]').contains('United States')
      // cy.get('[data-testid="preview-caption"]').contains('Tiny Meeat')
   });
});