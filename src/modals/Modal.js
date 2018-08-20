const expect = protractor.ExpectedConditions;

class Modal {

    /**
     * 
     * @param {ElementFinder} openButton 
     */
    constructor(openButton) {
        this.openButton = openButton;
        this.title = $('modal-title');
    }

    /**
     * @async
     * @returns {Promise<void>}
     */
    async open() {
        await this.openButton.click();
    }

    /**
     * @async
     * @returns {Promise<void>}
     */
    async getTitle() {
        await browser.wait(expect.visibilityOf(this.title), 5000);
    }
}

module.exports = Modal;