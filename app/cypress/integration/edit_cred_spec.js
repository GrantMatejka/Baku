describe('Edit Credentials', function () {

   it("Login", function () {
      //cy.exec('npm run web', { failOnNonZeroExit: false }).then((result) => { })
      cy.visit('http://localhost:19006/')
      cy.get('[data-testid="email_text_box"]').type('abhi@test.com')
      cy.get('[data-testid="pass_text_box"]').type('yuhyuh')
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

   it("Edit Profile Button", function () {
      cy.contains('Edit Profile').click();
      cy.contains('Full Name');
      cy.contains('Username');
      cy.contains('Phone');
      cy.contains('Birthday');
      cy.contains('BIO');
      cy.contains('Places');
   });

   it("Edit Credentials", function () {
      cy.get('[data-testid="edi-fullname"]').clear().type('Abhishu the GOAT')
      cy.get('[data-testid="edi-username"]').clear().type('AbhishuTheGOAT')
      cy.get('[data-testid="edit-number"]').clear().type('696969')
      //Do not want to change my birthday
      //cy.get('[data-testid="birthday"]').clear().type('Abhishu the GOAT')
      cy.get('[data-testid="edit-bio"]').clear().type('Abhishu is indeed the GOAT')
      cy.get('[data-testid="edit-places"]').clear().type('Greatest Of All Time')
      cy.contains('Submit').click()
   });

   it("Check New Credentials", function () {
      cy.get('[data-testid="edit-fullname"]').should('have.value', 'Abhishu the GOAT')
      cy.get('[data-testid="edit-username"]').should('have.value', 'AbhishuTheGOAT')
      cy.get('[data-testid="edit-number"]').should('have.value', '696969')
      //Did not want to change my birthday
      cy.get('[data-testid="edit-birthday"]').should('have.value', '22/03/1999')
      cy.get('[data-testid="edit-bio"]').should('have.value', 'Abhishu is indeed the GOAT')
      cy.get('[data-testid="edit-places"]').should('have.value', 'Greatest Of All Time')
   });

});