const Base  = require('../pageObjects/base.page').default;
module.exports['default'] = class Register extends Base{
    constructor() {
        super();
    }

    //selectors as getter functions
    get newUserEmail() {return $('[name="newUserEmail"]');}

    setEmail(email){
        this.newUserEmail.waitForExist();
        this.newUserEmail.setValue(email);
    }
}
