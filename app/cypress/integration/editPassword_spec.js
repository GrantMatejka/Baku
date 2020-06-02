describe('Login Screen', function () {

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

     it("Nav to Change Password", function () {
        cy.contains('Change Password').click()
        cy.contains('Old Password');
        cy.contains('New Password');
        /*
        cy.get('[data-testid="fullname"]').clear().type('Abhishu the GOAT')
        cy.get('[data-testid="username"]').clear().type('AbhishuTheGOAT')
        cy.get('[data-testid="number"]').clear().type('696969')
        //Do not want to change my birthday
        //cy.get('[data-testid="birthday"]').clear().type('Abhishu the GOAT')
        cy.get('[data-testid="bio"]').clear().type('Abhishu is indeed the GOAT')
        cy.get('[data-testid="places"]').clear().type('Greatest Of All Time')
        cy.contains('Submit').click()*/
     });

     it("Change Password", function () {
        cy.get('[data-testid="old"]').clear().type('yuhyuh')
        cy.get('[data-testid="new"]').clear().type('password')
        cy.contains('Magic').click()
     });


     it("Logout", function () {
        cy.get('[data-testid="profile-hamburger"]').click();
        cy.contains('Profile')
        cy.contains('Settings')
        cy.contains('Settings').click();
        cy.contains('Back')
        cy.contains('Log Out')
        cy.contains('Log Out').click()
     });


     it("Re-Login to check new Password", function () {
        cy.visit('http://localhost:19006/')
        cy.get('[data-testid="email_text_box"]').type('abhi@test.com')
        cy.get('[data-testid="pass_text_box"]').type('password')
        cy.contains(/login/i).click();
        cy.contains('Feed');
     });

});