const ProjectDetailPage = require('../../src/pages/ProjectDetailPage');

describe('Release Test Scenario #1 [Create simple BC & run build]:', () => {
    
    describe('A user', () => {
        const projectDetailPage = new ProjectDetailPage();

        beforeAll(async () => {
            await projectDetailPage.goto(7);
            await projectDetailPage.login();
            await projectDetailPage.goto(7);
        });

        it('should be able to open the BC Create wizard', async () => {
            const wizard = await projectDetailPage.openWizard();

            const title = await wizard.getTitle();

            expect(title).toEqual('Create Build Config');
        });

        it('should create a simple BuildConfiguration', () => {

            fail('Test not yet implemented');
        });

        it('should execute a build that completes successfully', () => {
            fail('Test not yest implemented');
        });
    });
});