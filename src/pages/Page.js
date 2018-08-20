const PATH_PREFIX = '#';
const LOGIN_TIMEOUT = 20000;

/**
 * Base class for other page objects to extend.
 */
class Page {
    
    /**
     * Creates a Page
     * 
     * @param {string} path the path fragment of the url to the page 
     */
    constructor(path) {
        let fullPath = `${PATH_PREFIX}${path}`;
        
        if (browser.params.pncUiAddress.endsWith('/')) {
            fullPath = `/${fullPath}`;
        }
        
        this.url = `${browser.params.pncUiAddress}${fullPath}`;

        
        this.loginButton = element(by.id('login-button'));
        this.loggedInUser = element(by.binding('authCtrl.username'));
    }

    /**
     * Navigates to the page
     * 
     * @returns {Promise} resolved when the redirect has completed
     */
    goto() {
        return browser.get(this.url);
    }

    /**
     * Gets the title of the current page in the browser
     * 
     * @returns {Promise} resolved with the page title
     */
    getTitle() {
        return browser.getTitle();
    }

    /**
     * Logs in as the configured username and password.
     * 
     * @async
     * @returns {void}
     */
    async login() {       
        await browser.waitForAngularEnabled(false);
        
        await this.loginButton.click();

        await browser.wait(conditions.urlContains(browser.params.keycloakAddress), LOGIN_TIMEOUT);

        await element(by.id('username')).sendKeys(browser.params.pncUser);
        await element(by.id('password')).sendKeys(browser.params.pncPassword);
        await element(by.id('kc-login')).click();

        await browser.waitForAngularEnabled(true);
    }
}

module.exports = Page;