const assert = require('assert');
const RegisterPage  = require('../pageObjects/register.page').default;
const RegisterData = require('../testData/register.data').default;

describe('kidsUp, Registration page, Test Case R-4', () => {
    const registerPageObject = new RegisterPage();
    const registerDataObject = new RegisterData();

    const testEmailValid = registerDataObject.getTestEmailValid();
    const testEmailInvalid1 =  registerDataObject.getTestEmailInvalid1();
    const testEmailInvalid2 =  registerDataObject.getTestEmailInvalid2();
    const testName = registerDataObject.getTestName();
    const testPass = registerDataObject.getTestPass();
    const testConfPassValid = registerDataObject.getConfPassValid();
    const testConfPassInvalid = registerDataObject.getConfPassInvalid();

    it('Iteration 1', () => {
        browser.url('/register');
        registerPageObject.setEmail(testEmailValid);
        registerPageObject.setName(testName);
        registerPageObject.setPass(testPass);
        registerPageObject.setConfPass(testConfPassValid);
    });


});