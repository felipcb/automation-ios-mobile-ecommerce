import { $ } from '@wdio/globals';

class LoginPage {
  get isAndroid() {
    return driver.isAndroid;
  }

  get emailField() {
    return this.isAndroid ? $('//android.widget.EditText[@resource-id="email"]') : $('id:email'); // ajustar depois se mudar no iOS
  }

  get passwordField() {
    return this.isAndroid ? $('//android.widget.EditText[@resource-id="password"]') : $('id:password'); // ajustar depois se mudar no iOS
  }

  get loginButton() {
    return this.isAndroid ? $('//android.view.ViewGroup[@content-desc="Login"]') : $('~Login'); // '~' = accessibility id
  }

  async login(email, password) {
    await this.emailField.waitForDisplayed({ timeout: 5000 });
    await this.emailField.setValue(email);

    await this.passwordField.setValue(password);
    await this.loginButton.click();
  }
}

export default new LoginPage();

