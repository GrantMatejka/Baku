describe('Register Screen', function () {
   beforeEach(() => {
      cy.visit('http://localhost:19006/')
      expect(cy.contains("Sign Up").click());
   });

   it("Assets Load", function () {
      cy.contains(/welcome to baku/i).click();
      cy.get('[data-testid="register-input-fullname"]')
      cy.get('[data-testid="register-input-username"]')
      cy.get('[data-testid="register-input-email"]')
      cy.get('[data-testid="register-input-password"]')
      cy.get('[data-testid="register-input-confirm-password"]')
      cy.contains(/submit/i);
   });

   it("No Name", function () {
      cy.get('[data-testid="register-input-username"]').type('test')
      cy.get('[data-testid="register-input-email"]').type('test@test.com')
      cy.get('[data-testid="register-input-password"]').type('password')
      cy.get('[data-testid="register-input-confirm-password"]').type('password')
      cy.contains('Submit').click();
      cy.contains('Necessary to enter name');

   });

   it("No Username", function () {
      cy.get('[data-testid="register-input-fullname"]').type('test')
      cy.get('[data-testid="register-input-email"]').type('test@test.com')
      cy.get('[data-testid="register-input-password"]').type('password')
      cy.get('[data-testid="register-input-confirm-password"]').type('password')
      cy.contains('Submit').click();
      cy.contains('Necessary to enter username');
   });

   it("No Email", function () {
      cy.get('[data-testid="register-input-fullname"]').type('test')
      cy.get('[data-testid="register-input-username"]').type('test')
      cy.get('[data-testid="register-input-password"]').type('password')
      cy.get('[data-testid="register-input-confirm-password"]').type('password')
      cy.contains('Submit').click();
      cy.contains('Invalid Credentials');
   });

   it("Badly Formatted Email", function () {
      cy.get('[data-testid="register-input-fullname"]').type('test')
      cy.get('[data-testid="register-input-username"]').type('test')
      cy.get('[data-testid="register-input-email"]').type('testtest.com')
      cy.get('[data-testid="register-input-password"]').type('password')
      cy.get('[data-testid="register-input-confirm-password"]').type('password')
      cy.contains('Submit').click();
      cy.contains('Invalid Credentials');

   });

   it("No Password", function () {
      cy.get('[data-testid="register-input-fullname"]').type('test')
      cy.get('[data-testid="register-input-username"]').type('test')
      cy.get('[data-testid="register-input-email"]').type('test@test.com')
      cy.get('[data-testid="register-input-confirm-password"]').type('password')
      cy.contains('Submit').click();
      cy.contains('Passwords don\'t match');
   });

   it("Not Matched Passwords", function () {
      cy.get('[data-testid="register-input-fullname"]').type('test')
      cy.get('[data-testid="register-input-username"]').type('test')
      cy.get('[data-testid="register-input-email"]').type('test@test.com')
      cy.get('[data-testid="register-input-password"]').type('password')
      cy.contains('Submit').click();
      cy.contains('Passwords don\'t match');
   });

   it("Password Too Short", function () {
      cy.get('[data-testid="register-input-fullname"]').type('test')
      cy.get('[data-testid="register-input-username"]').type('test')
      cy.get('[data-testid="register-input-email"]').type('test@test.com')
      cy.get('[data-testid="register-input-password"]').type('passw')
      cy.get('[data-testid="register-input-confirm-password"]').type('passw')
      cy.contains('Submit').click();
      cy.contains('Password should be at least 6 characters');
   });

   //ADDITIONAL SCREEN
   it("Submit with good credentials", function () {
      cy.get('[data-testid="register-input-fullname"]').type('test cypress')
      cy.get('[data-testid="register-input-username"]').type('test_cypress')
      cy.get('[data-testid="register-input-email"]').type('test@cypress.com')
      cy.get('[data-testid="register-input-password"]').type('password')
      cy.get('[data-testid="register-input-confirm-password"]').type('password')
      cy.get('img')
      cy.contains('Submit').click();
      cy.contains('Hey test cypress! Let\'s get to know who you really are!');
      cy.contains('Phone-Number').type('911');
      cy.contains('Birthday').type('05/24');
      cy.contains('Short BIO').type('I am not tall');
      cy.contains('Some Places You\'ve Been').type('No Where');
      cy.contains('Create Profile').click();

      //FEED TAB
      cy.contains('Feed Tab');
   });
});