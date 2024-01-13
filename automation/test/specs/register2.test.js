const assert = require('assert');

let RegisterPage;
let RegisterData;
let registerDataObject;
let registerPageObject;

beforeEach( () => {
    RegisterPage = require('../pageObjects/register.page').default;
    RegisterData =  require('../testData/register.data').default;
    registerPageObject = new RegisterPage();
    registerDataObject = new RegisterData();
});

describe('kidsUp, Registration page, Test Case R-4', () => {

    it('Trying to register, should successfully register only after iteration 5', () => {        
        const testEmailValid = registerDataObject.getTestEmailValid();
        const testEmailInvalid1 =  registerDataObject.getTestEmailInvalid1();
        const testName = registerDataObject.getTestName();
        const testPass = registerDataObject.getTestPass();
        const testConfPassValid = registerDataObject.getConfPassValid();   
        const testConfPassInvalid = registerDataObject.getConfPassInvalid();

        browser.url('/register');

    
        //iteration 1
        registerPageObject.setEmail(testEmailInvalid1);
        registerPageObject.setName(testName);
        registerPageObject.setPass(testPass);
        registerPageObject.setConfPass(testConfPassValid);
        registerPageObject.clickOnRegisterButton();

        //iteration 2
        registerPageObject.setEmail(testEmailValid);
        registerPageObject.setName('');
        registerPageObject.clickOnRegisterButton();

        //iteration 3
        registerPageObject.setName(testName);
        registerPageObject.setPass('       ');
        registerPageObject.setConfPass('       ');
        registerPageObject.clickOnRegisterButton();

        //iteration 4
        registerPageObject.setPass(testPass);
        registerPageObject.setConfPass(testConfPassInvalid);
        registerPageObject.clickOnRegisterButton();

        //iteration 5
        registerPageObject.setConfPass(testConfPassValid);
        registerPageObject.clickOnRegisterButton();

        const title = browser.getTitle();
        const SBTitle = registerPageObject.getSBWelcomePageTitle();

        assert.equal(title, SBTitle);
    });
});


// afterEach( () => {
//     var currentUser = Meteor.userId();
//     Meteor.call('removeUser', currentUser);
// });
