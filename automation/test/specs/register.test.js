const assert = require('assert');
const RegisterPage  = require('../pageObjects/register.page').default;

describe('kidsUp page', () => {
    const testEmail = 'test@testttttttttttttttttttttttttttt';
    const registerPageObject = new RegisterPage();


    
    it('should have the correct title - R-1', () => {
        browser.url('/register');
        const title = browser.getTitle();
        assert.equal(title, 'Register');
    });

    it('should find and fill the email', () => {
        registerPageObject.setEmail(testEmail);
    });
});