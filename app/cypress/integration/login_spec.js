describe('Login Screen', function () {
<<<<<<< HEAD
    beforeEach(() => {
        cy.visit('http://localhost:19006/')
        expect(true).to.equal(true);
    });

    it("Assets Load", function () {
=======
    // beforeEach(() => {
    //     cy.visit('http://localhost:19006/')
    //     expect(true).to.equal(true);
    // });

    it("Assets Load", function () {
        cy.exec('npm run web', { failOnNonZeroExit: false }).then((result) => { })
        cy.visit('http://localhost:19006/')
>>>>>>> c530678a83b63c8ca864c8a903429065e63794e7
        cy.get("img");
        cy.contains(/email/i);
        cy.contains(/password/i);

        cy.contains(/login/i);
        cy.contains(/sign up/i);
        // cy.get('[data-testid="button-login"]')
        // cy.get('[data-testid="button-signup"]')

        // cy.contains(/new user sign up now!/i); //BUG CANT FIND THIS TEXT
        cy.get('[data-testid="new-user"]')
        cy.contains(/forgot password/i);

        cy.get('[data-testid="login-icon-google"]')
        cy.get('[data-testid="login-icon-facebook"]')
    });

    it("Badly formatted Email", function () {
<<<<<<< HEAD
=======
        cy.visit('http://localhost:19006/')
>>>>>>> c530678a83b63c8ca864c8a903429065e63794e7
        cy.get('[data-testid="login-input-email"]').type('testtest.com')
        cy.get('[data-testid="login-input-password"]').type('wrongpassword')
        cy.contains(/login/i).click();
        cy.contains(/the email address is badly formatted./i);
    });

    it("Non-existent Email", function () {
        //EMAIL DOESNT EXIST
<<<<<<< HEAD
=======
        cy.visit('http://localhost:19006/')
>>>>>>> c530678a83b63c8ca864c8a903429065e63794e7
        cy.get('[data-testid="login-input-email"]').type('idontexist@iamnotarealemail.com')
        cy.get('[data-testid="login-input-password"]').type('password')
        cy.contains(/login/i).click();
        cy.contains(/there is no user record corresponding to this identifier. The user may have been deleted./i);
    });

    it("Bad Password", function () {
        //BAD PASSWORD
<<<<<<< HEAD
        cy.get('[data-testid="login-input-email"]').type('test@test.com')
=======
        cy.visit('http://localhost:19006/')
        cy.get('[data-testid="login-input-email"]').type('eric@cypress.com')
>>>>>>> c530678a83b63c8ca864c8a903429065e63794e7
        cy.get('[data-testid="login-input-password"]').type('wrongpassword')
        cy.contains(/login/i).click();
        cy.contains(/the password is invalid or the user does not have a password./i);
    });

    it("FB Icon", function () {
<<<<<<< HEAD
=======
        cy.visit('http://localhost:19006/')
>>>>>>> c530678a83b63c8ca864c8a903429065e63794e7
        cy.get('[data-testid="login-icon-google"]').click()
    });

    it("Google Icon", function () {
<<<<<<< HEAD
=======
        cy.visit('http://localhost:19006/')
>>>>>>> c530678a83b63c8ca864c8a903429065e63794e7
        cy.get('[data-testid="login-icon-facebook"]').click()
    });

    it("Navigate to Sign Up", function () {
<<<<<<< HEAD
=======
        cy.visit('http://localhost:19006/')
>>>>>>> c530678a83b63c8ca864c8a903429065e63794e7
        cy.contains(/sign up/i).click();
        cy.contains(/welcome to baku/i).click();
        cy.get('[data-testid="register-input-fullname"]')
        cy.get('[data-testid="register-input-username"]')
        cy.get('[data-testid="register-input-email"]')
        cy.get('[data-testid="register-input-password"]')
        cy.get('[data-testid="register-input-confirm-password"]')
        cy.contains(/submit/i);
    });

    it("Forgot Password Button", function () {
<<<<<<< HEAD
=======
        cy.visit('http://localhost:19006/')
>>>>>>> c530678a83b63c8ca864c8a903429065e63794e7
        cy.contains(/forgot password/i).click();
        // cy.get('[data-testid="button-forgot-password"]').click()
        cy.contains('Trouble Logging In?');
        cy.contains('Enter your email below and we\'ll send you a link to reset your password.');
        cy.get('[data-testid="reset-input-email"]');
    });

    it("Login with Good Credentials", function () {
        //GOOD LOGIN/PASSWORD
<<<<<<< HEAD
        cy.get('[data-testid="login-input-email"]').type('test@test.com')
        cy.get('[data-testid="login-input-password"]').type('password')
        cy.contains(/login/i).click();
=======
        cy.visit('http://localhost:19006/')
        cy.get('[data-testid="login-input-email"]').type('eric@cypress.com')
        cy.get('[data-testid="login-input-password"]').type('password')
        cy.contains(/login/i).click();
        cy.contains('Feed');
>>>>>>> c530678a83b63c8ca864c8a903429065e63794e7
    });

});