class Modal {

    /**
     * 
     * @param {ElementFinder} openButton 
     */
    constructor(openButton) {
        this.openButton = openButton;
        this.title = $('div.modal.in').$('.modal-title');
    }

    /**
     * @async
     * @returns {Promise<void>}
     */
    async open() {
        await this.openButton.click();
        await browser.wait(conditions.visibilityOf(this.title), 5000);
    }
}

module.exports = Modal;