const JasmineReporters = require('jasmine-reporters');
const HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
const testSuites = require('./suites.json');
const testParams = require('./params');

const reporter = new HtmlScreenshotReporter({
    dest: 'reports',
    filename: 'testrun-report.html',
    showSummary: true,
    showQuickLinks: true,
    reportOnlyFailedSpecs: false,
    captureOnlyFailedSpecs: false
});


exports.config = {
    plugins: [
        {
            package: 'protractor-screenshoter-plugin',
            screenshotPath: './REPORTS/e2e',
            screenshotOnExpect: 'failure+success',
            screenshotOnSpec: 'none',
            withLogs: true,
            writeReportFreq: 'asap',
            imageToAscii: 'none',
            clearFoldersBeforeTest: true
        }
    ],
    allScriptsTimeout: 10 * 60 * 1000,
    capabilities: {
        directConnect: true,
        browserName: 'chrome',
        chromeOptions: {
            args: ['--headless', '--disable-gpu', '--window-size=1920x1080']
        }
    },
    directConnect: true,
    framework: 'jasmine',
    getPageTimeout: 20 * 1000,
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 10 * 60 * 1000
    },
    beforeLaunch: () => {
        process.on('uncaughtException', () => {
            reporter.jasmineDone();
            reporter.afterLaunch();
        });

        return new Promise(resolve => {
            reporter.beforeLaunch(resolve);
        });
    },
    onPrepare: () => {
//        jasmine.getEnv().afterAll(done => setTimeout(done, 3000));
        
        jasmine.getEnv().addReporter(new JasmineReporters.JUnitXmlReporter({
            savePath: 'reports',
            consolidateAll: false
        }));

        jasmine.getEnv().addReporter(reporter);
    },
    
    afterLaunch: exitCode => {
        return new Promise(resolve => reporter.afterLaunch(resolve.bind(this, exitCode)));
    },
    params: testParams,
    SELENIUM_PROMISE_MANAGER: false,
    suites: testSuites
};