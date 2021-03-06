const Base  = require('../pageObjects/base.page').default;

module.exports['default'] = class Register extends Base{
    constructor() {
        super();
    }

    //selectors as getter functions
    get regPageHeader() {return $('[name="regPageHeader"]')};
    get newUserEmail() {return $('[name="newUserEmail"]');}
    get newUserName() {return $('[name="newUserName"]')};
    get newUserPass() {return $('[name="newUserPassword"]')};
    get newUserConfPass() {return $('[name="confirmPassword"]')};
    get registerButton() {return $('[name="registerButton"]')};
    get languageButton() {return $('[name="regLangButton"]')};
    get loginLink() {return $('[name="loginLink"]')};
    get haveAccMessage() {return $('[name="haveAccMessage"]')};
    get langArm() {return $('[class="dropdown-item arm-lang"]')};
    get langEng() {return $('[class="dropdown-item eng-lang"]')};

    //should be-s
    get SBRegPageHeaderArm() {return 'KidsUp! Ստեղծի՛ր քո նոր հաշիվը'};
    get SBRegPageHeaderEng() {return 'Create your brand new profile in KidsUp!'};
    get SBRegPageTitle() {return 'Register'};
    get SBLoginPageTitle() {return 'Login'};
    get SBWelcomePageTitle() {return 'Home'};
    get SBHaveAccMessage() {return 'Already have an account? Log In!'};

    //should be methods
    getSBRegPageHeaderArm() {
        return this.SBRegPageHeaderArm;
    };
    getSBRegPageHeaderEng() {
        return this.SBRegPageHeaderEng;
    };
    getSBRegPageTitle() {
        return this.SBRegPageTitle;
    };
    getSBLoginPageTitle() {
        return this.SBLoginPageTitle;
    };
    getSBHaveAccMessage() {
        return this.SBHaveAccMessage;
    };
    getSBWelcomePageTitle() {
        return this.SBWelcomePageTitle;
    }

    //methods
    getRegPageHeader() {
        this.regPageHeader.waitForExist();
        //browser.pause(1000);
        return browser.$(this.regPageHeader).getText();
    };

    getHaveAccMessage() {
        this.haveAccMessage.waitForExist();
        //browser.pause(1000);
        return browser.$(this.haveAccMessage).getText();
    };

   setEmail(email) {
        this.newUserEmail.waitForExist();
        this.newUserEmail.setValue(email);
        //browser.pause(1000);
    }; 

    setName(name) {
        this.newUserName.waitForExist();
        this.newUserName.setValue(name);
        //browser.pause(1000);
    };

    setPass(pass) {
        this.newUserPass.waitForExist();
        this.newUserPass.setValue(pass);
        //browser.pause(1000);
    };

    setConfPass(confPass) {
        this.newUserConfPass.waitForExist();
        this.newUserConfPass.setValue(confPass);
        //browser.pause(1000);
    };

    clickOnRegisterButton() {
        this.registerButton.waitForExist();
        this.registerButton.click();
        browser.pause(1000);
    };

    clickOnLanguageButton() {
        this.languageButton.waitForExist();
        this.languageButton.click();
        browser.pause(1000);
    };

    setLangToArm() {
        this.langArm.waitForExist();
        this.langArm.click();
        browser.pause(1000);
    };

    setLangToEng() {
        this.langEng.waitForExist();
        this.langEng.click();
        browser.pause(1000);
    };

    clickOnLoginLink() {
        this.loginLink.waitForExist();
        this.loginLink.click();
        browser.pause(1000);
    };
}
