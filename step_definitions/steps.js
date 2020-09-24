const { I } = inject();

Given('I am on the login screen', () => {
  I.amOnPage('/')
  I.click('.login')
  I.waitForElement('#email', 10)
});

When('I click on Sign In', () => {
  I.click('#SubmitLogin')
});

When('I fill the email field with {string}', (email) => {
  I.fillField('#email', email)
});

When('I fill the password field with {string}', (password) => {
  I.fillField('#passwd', secret(password))
});

When('I see {string}', (message) => {
  I.see(message)
});
