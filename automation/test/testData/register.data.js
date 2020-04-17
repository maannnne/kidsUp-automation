module.exports['default'] = class RegisterData extends Base{
    constructor() {
        super();
    }

    //test data as getter functions
    get testEmailValid() {return 'test1@test.com'};
    get testEmailInvalid1() {return 'testtesttest'};
    get testEmailInvalid2() {return 'testtest@'};
    get testName() {return 'testName'};
    get testPass() {return 'testPass'};
    get confPassValid() {return 'testPass'};
    get confPassInvalid() {return 'testPasssssssss'};

    //methods

    getTestEmailValid() {
        return this.testEmailValid;
    };

    getTestEmailInvalid1() {
        return this.testEmailInvalid1;
    };

    getTestEmailInvalid2() {
        return this.testEmailInvalid2;
    };

    getTestName() {
        return this.testName;
    };

    getTestPass() {
        return this.testPass;
    };

    getConfPassValid() {
        return this.confPassValid;
    };

    getConfPassInvalid() {
        return this.confPassInvalid;
    };
}