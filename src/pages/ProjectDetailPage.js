const Page = require('./Page');
const BuildConfigCreateModal = require('../modals/BuildConfigCreateModal');

class ProjectDetailPage extends Page {
    
    /**
     *  Constructs a new Dashboard
     */
    constructor() {
        super('/projects');

        this.createBuildConfigButton = element(by.partialButtonText('Create'));
    }

    /**
     * 
     * @param {number} id 
     * @returns {Promise} 
     */
    goto(id) {
        return browser.get(`${this.url}/${id}`);
    }

    /**
     * @returns {Promise<BuildConfigCreateModal>}
     */
    async openWizard() {
        const modal = new BuildConfigCreateModal(this.createBuildConfigButton);

        await modal.open();

        return modal;
    }

    /**
     * 
     * @param {Object} properties
     * @param {string} properties.name
     * @returns {Promise<void>} 
     * @async
     */
    async createBuildConfig(properties) {
        const { name } = properties;

        const wizard = await this.openWizard();
    }
}

module.exports = ProjectDetailPage;