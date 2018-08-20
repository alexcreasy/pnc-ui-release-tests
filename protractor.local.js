const testSuites = require('./suites.json');
const testParams = require('./params');
const onPrepareFn = require('./tests/onPrepare');


exports.config = {
    allScriptsTimeout: 10 * 60 * 1000,
    capabilities: {
        directConnect: true,
        browserName: 'chrome',
        chromeOptions: {
            args: ['--headless', '--disable-gpu', '--window-size=1920x1080']
        }
    },
    directConnect: true,
    framework: 'jasmine2',
    getPageTimeout: 20 * 1000,
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 10 * 60 * 1000
    },
    onPrepare: onPrepareFn,
    params: testParams,
    plugins: [
        {
            package: 'protractor-screenshoter-plugin',
            screenshotPath: './reports/e2e',
            screenshotOnExpect: 'failure+success',
            screenshotOnSpec: 'failure+success',
            withLogs: true,
            writeReportFreq: 'asap',
            imageToAscii: 'none',
            clearFoldersBeforeTest: true
        }
    ],
    SELENIUM_PROMISE_MANAGER: false,
    suites: testSuites
};