const ProjectDetailPage = require('../../src/pages/ProjectDetailPage');

describe('Project detail page', () => {
    const projectDetailPage = new ProjectDetailPage();

    beforeEach(async () => {
        await projectDetailPage.goto(7);
    });


    describe('create Build Config wizard', () => {
        let wizard;

        beforeEach(async () => {
            wizard = await projectDetailPage.openWizard();      
        });

        it('should be visible', async () => {
            const title = await wizard.title.getText();

            expect(title).toEqual('Create Build Config');
        });

        it('should be enabled when general form contains valid required parameters', async () => {
            await wizard.fillGeneralForm({
                name: `test-jboss-modules-${Date.now()}`,
                description: 'Created by test suite',
                environment: 'OpenJDK 1.8.0; Mvn 3.3.9',
                buildType: 'Maven',
                buildScript: 'mvn deploy -Dmaven.test.skip'
            });

            expect(wizard.nextButton.isEnabled()).toBe(true);
        });


        // describe('next button', () => {
        //     it('should be enabled when general form contains valid required parameters', async () => {
        //         await wizard.fillGeneralForm({
        //             name: `test-jboss-modules-${Date.now()}`,
        //             description: 'Created by test suite',
        //             enivronnment: 'OpenJDK 1.8.0; Mvn 3.3.9',
        //             buildType: 'Maven',
        //             buildScript: 'mvn deploy -Dmaven.test.skip'
        //         });
    
        //         expect(wizard.nextButton.isEnabled()).toBe(true);
        //     });
        // });
    });
});