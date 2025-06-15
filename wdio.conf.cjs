require('dotenv').config();

exports.config = {
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    hostname: 'ondemand.us-west-1.saucelabs.com',
    port: 443,
    baseUrl: 'wd/hub',
          
    specs: [
        './test/specs/**/*.js'
    ],

    suites:{
        login: [
            './test/specs/login.test.js'
        ],
        product: [
            './test/specs/product.test.js'
        ],
        search: [
            './test/specs/search.test.js'
        ]
    },
    maxInstances: 1,
    capabilities: [
        {
            platformName: 'iOS',
            'appium:deviceName': 'iPhone Simulator',
            'appium:platformVersion': '17.0',
            'appium:automationName': 'XCUITest',
            'appium:app': 'storage:filename=LojaEBAC-sim.zip',
            'sauce:options': {
                build: 'ebac-ios-build',
                name: 'Teste iOS EBAC Store',
                deviceOrientation: 'PORTRAIT',
                appiumVersion: '2.1.3'
            }
        }
    ],
    logLevel: 'info',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false
        }]
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        await driver.takeScreenshot();
    }
}
