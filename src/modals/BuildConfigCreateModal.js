const Modal = require('./Modal');

class BuildConfigWizard extends Modal {
 
    /**
     * @param {ElementFinder} openButton
     */
    constructor(openButton) {
        super(openButton);

        this.nextButton = $('#nextButton');

        this.generalForm = {
            name: element(by.model('$ctrl.data.name')),
            description: element(by.model('$ctrl.data.description')),
            environment: element(by.model('$ctrl.data.environment')),
            buildType: element(by.model('$ctrl.data.buildType')),
            buildScript: element(by.model('$ctrl.data.buildScript'))
        };
    }

    /**
     * 
     * @param {Object} values
     * @param {string} values.name
     * @param {string} values.description
     * @param {string} values.environment
     * @param {string} values.buildType
     * @param {string} values.buildScript
     * 
     * @returns {Promise<void>}
     * @async
     */
    async fillGeneralForm(values) {
        await this.generalForm.name.sendKeys(values.name);
        await this.generalForm.description.sendKeys(values.description);
        await this.generalForm.environment.$('input').sendKeys(values.environment);
        await this.generalForm.buildScript.sendKeys(values.buildScript);
        await this.generalForm.buildType.element(by.cssContainingText('option', values.buildType)).click();
    }


}

module.exports = BuildConfigWizard;