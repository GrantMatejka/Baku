const { reloadApp } = require('detox-expo-helpers');
describe('Example', () => {
  beforeEach(async () => {
    await reloadApp();
  });

  it('Initialize login screen', async () => {
    await expect(element(by.id('login'))).toBeVisible();
  });

  it('Type in login credentials', async () => {
    await element(by.id('email_text_box')).typeText('test@test.com');
    await expect(element(by.id('email_text_box'))).toHaveText('test@test.com');
    await element(by.id('pass_text_box')).typeText('password');
    await expect(element(by.id('pass_text_box'))).toHaveText('password');
  });

  // it('should show hello screen after tap', async () => {
  //   await element(by.id('signup_button')).tap();
  //   await expect(element(by.text('signup_sign'))).toBeVisible();
  // });

  // it('should show world screen after tap', async () => {
  //   await element(by.id('messageText')).typeText('New message');
  //   await expect(element(by.text('World!!!'))).toBeVisible();
  //   await expect(element(by.id('messageText'))).toHaveText('');
  // });
});
