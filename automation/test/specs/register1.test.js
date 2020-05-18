const assert = require('assert');
let RegisterPage;
let registerPageObject;

//hook to set up preconditions and clean up after tests
beforeEach( () => {
    RegisterPage = require('../pageObjects/register.page').default;
    registerPageObject = new RegisterPage();
});

describe('kidsUp, Registration page, Test Cases R-1', () => {
    it('should have the correct title - R-1', () => {
        browser.url('/register');
        
        const title = browser.getTitle();
        const SBTitle = registerPageObject.getSBRegPageTitle();
        
        assert.equal(title, SBTitle);
    });

    it('should successfully change the language to Armenian R-2', () => {
        registerPageObject.clickOnLanguageButton();
        registerPageObject.setLangToArm();

        const regPageHeaderArm = registerPageObject.getRegPageHeader();
        const SBRegHeaderArm = registerPageObject.getSBRegPageHeaderArm();

        assert.equal(regPageHeaderArm, SBRegHeaderArm);
    });

    it('should successfully change the language to English R-2', () => {
        registerPageObject.clickOnLanguageButton();
        registerPageObject.setLangToEng();

        const regPageHeaderEng = registerPageObject.getRegPageHeader();
        const SBRegHeaderEng = registerPageObject.getSBRegPageHeaderEng();

        assert.equal(regPageHeaderEng, SBRegHeaderEng);
    });

    it('should have the correct account message R-3', () => {
        const haveAccMessage = registerPageObject.getHaveAccMessage();
        const SBHaveAccMessage = registerPageObject.getSBHaveAccMessage();

        assert.equal(haveAccMessage, SBHaveAccMessage);
    });

    it('should successfully take to login page R-3', () => {
        registerPageObject.clickOnLoginLink();
        const title = browser.getTitle();
        const SBTitle = registerPageObject.getSBLoginPageTitle();

        assert.equal(title, SBTitle);
    });
});
