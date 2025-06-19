import { generalConf } from './general.conf.js'

export let sauceConf = {
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    hostname: 'ondemand.us-west-1.saucelabs.com',
    port: 443,
    baseUrl: 'wd/hub',
    capabilities: process.env.PLATAFORM === "android" ? [
        {
            platformName: 'android',
            'appium:deviceName': 'android Simulator',
            'appium:platformVersion': '11.0',
            'appium:automationName': 'UiAutomator2',
            'appium:app': 'storage:filename=ebac.apk',
            'sauce:options': {
                build: 'ebac-android-build',
                name: 'Teste android EBAC Store',
                deviceOrientation: 'PORTRAIT',
                appiumVersion: '2.1.3'
            }
        }
    ] : [

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
    ...generalConf
}
