import { driver } from '@wdio/globals';
import fs from 'fs';

function generateScreenshotName(prefix) {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  return `./test/screenshots/${prefix}-${timestamp}.png`;
}

export let hooksConf = {
  beforeTest: async function () {
    let state = await driver.queryAppState('br.com.lojaebac');
    if (state !== 4) {
      await driver.execute('mobile: launchApp', {
        appId: 'br.com.lojaebac'
      });
    }

    const screenshot = await driver.takeScreenshot();
    fs.writeFileSync(generateScreenshotName('before'), screenshot, 'base64');
  },

  afterTest: async function (test, context) {
    const screenshot = await driver.takeScreenshot();
    fs.writeFileSync(generateScreenshotName('after'), screenshot, 'base64');

    await driver.pause(10000);

    await driver.execute('mobile: terminateApp', {
      appId: 'br.com.lojaebac'
    });
  }
};
