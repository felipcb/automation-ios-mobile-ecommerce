import { generalConf } from './general.conf.js'

export let localConf = {

    runner: 'local',
    port: 4723,
    baseUrl: '/',

    capabilities: process.env.PLATAFORM === "android" ? [
        {
            platformName: 'Android',
            'appium:deviceName': 'Pixel_8a_API_34_Ebac',
            'appium:platformVersion': '14',
            'appium:automationName': 'UiAutomator2',
            'appium:appPackage': 'br.com.lojaebac',
            'appium:appActivity': '.MainActivity'
        }
    ] : [

        {
            platformName: 'iOS',
            'appium:deviceName': 'iPhone Simulator',
            'appium:platformVersion': '17.0',
            'appium:automationName': 'XCUITest',
            'appium:app': 'storage:filename=LojaEBAC.ipa'
        }
    ],
    ...generalConf

}