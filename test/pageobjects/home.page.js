import { $, expect, browser, driver } from '@wdio/globals';

class HomePage {
  get profileTabSelector() {
    const isAndroid = driver.isAndroid;
    return isAndroid     
      ? '//android.view.View[contains(@content-desc, "Profile")]'
      : 'id:tab-Account';
  }

  async openMenu() {
    const profileTab = await $(this.profileTabSelector);
    await profileTab.waitForDisplayed({ timeout: 10000 });
    await profileTab.click();
  }
}

export default new HomePage();