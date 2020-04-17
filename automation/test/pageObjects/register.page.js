const Base  = require('../pageObjects/base.page').default;
module.exports['default'] = class Register extends Base{
    constructor() {
        super();
    }

    //selectors as getter functions
    get regPageHeader() {return $('[name="regPageHeader"]')};
    get newUserEmail() {return $('[name="newUserEmail"]');}
    get newUserName() { return $('[name="newUserName"]')};
    get newUserPass() {return $('[name="newUserPassword"]')};
    get newUserConfPass() {return $('[name="confirmPassword"]')};
    get registerButton() {return $('[name="registerButton"]')};
    get languageButton() {return $('[name="regLangButton"]')};
    get loginLink() {return $('[name="loginLink"]')};
    get haveAccMessage() {return $('[name="haveAccMessage"]')};
    get langArm() {return $('[class="dropdown-item arm-lang"]')};
    get langEng() {return $('[class="dropdown-item eng-lang"]')};


    getRegPageHeader() {
        return browser.$(this.regPageHeader).getText();
    };
    
    setEmail(email){
        this.newUserEmail.waitForExist();
        this.newUserEmail.setValue(email);
    };

    setName(name){
        this.newUserName.waitForExist();
        this.newUserName.setValue(name);
    };

    setPass(pass){
        this.newUserName.waitForExist();
        this.newUserName.setValue(pass);
    };

    setConfPass(confPass){
        this.newUserName.waitForExist();
        this.newUserName.setValue(confPass);
    };

    clickOnRegisterButton(){
        this.registerButton.waitForExist();
        this.registerButton.click();
    };

    clickOnLanguageButton(){
        this.languageButton.waitForExist();
        this.languageButton.click();
    };

    setLangToArm(){
        this.langArm.waitForExist();
        this.langArm.click();
    };

    setLangToEng(){
        this.langEng.waitForExist();
        this.langEng.click();
    };

    clickOnLoginLink(){
        this.loginLink.waitForExist();
        this.loginLink.click();
    }


    

}
