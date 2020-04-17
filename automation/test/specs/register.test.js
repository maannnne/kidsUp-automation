const assert = require('assert');
const RegisterPage  = require('../pageObjects/register.page').default;

describe('kidsUp page', () => {
    const registerPageObject = new RegisterPage();

    it('should have the correct title - R-1', () => {
        browser.url('/register');
        const title = browser.getTitle();
        assert.equal(title, 'Register');
    });

    it('should successfully change the language to Armenian R-2', () => {
        // registerPageObject.setEmail(testEmail);
        registerPageObject.clickOnLanguageButton();
        registerPageObject.setLangToArm();
        const regPageHeaderArm = registerPageObject.getRegPageHeader();
        assert.equal(regPageHeaderArm, 'KidsUp! Ստեղծի՛ր քո նոր հաշիվը');
        
    });

    it('should successfully change the language to English R-2', () => {
        registerPageObject.clickOnLanguageButton();
        registerPageObject.setLangToEng();
        const regPageHeaderEng = registerPageObject.getRegPageHeader();
        assert.equal(regPageHeaderEng, 'Create your brand new profile in KidsUp!');
    });
});

