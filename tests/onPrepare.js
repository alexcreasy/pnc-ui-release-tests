const JasmineReporters = require('jasmine-reporters');
const Dashboard = require('../src/pages/Dashboard');

/**
 * Test environment bootstrap code that's run once
 * before all tests.
 * 
 * @async
 * @returns {Promise<void>}
 */
module.exports = async () => {

    const dashboard = new Dashboard();

    jasmine.getEnv().addReporter(new JasmineReporters.JUnitXmlReporter({
        savePath: 'reports',
        consolidateAll: false
    }));

    global.conditions = protractor.ExpectedConditions;

    await dashboard.goto();
    await dashboard.login();

};