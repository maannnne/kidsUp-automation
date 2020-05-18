module.exports["default"] = class Base{
    constructor(selector){
        this.selector = selector;
    }

    setValue(selector, value, index = 0) {
        browser.waitForExist(selector, 10000);
        browser.waitForEnabled(selector, 10000);
        const element = browser.elements(selector).value[index];
        element.waitForExist();
        element.waitForEnabled();
        element.setValue(value);
        return this;
    }
    getValue(selector, index = 0) {
        browser.waitForExist(selector, 10000);
        return browser.elements(selector).value[index].getText();
    }
}
