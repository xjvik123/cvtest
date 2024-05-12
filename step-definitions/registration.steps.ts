import { Given, When, Then } from '@cucumber/cucumber';
import { RegistrationPage } from '../pages/registration.page';
import { readYamlFile } from '../utils/common.utils';

const registrationPage = new RegistrationPage(page);
const registrationData = readYamlFile('data/registration.data.yaml');

Given('I navigate to the URL {string}', async (url: string) => {
  await registrationPage.navigateToUrl(url);
});

When('I click on the {string} button', async (buttonText: string) => {
  await registrationPage.clickLoginRegisterButton();
});

When('I switch to the registration tab', async () => {
  await registrationPage.switchToRegistrationTab();
});

When('I click on the {string} -> {string} button', async (option1: string, option2: string) => {
  await registrationPage.clickRegisterAsJobSeeker();
});

When('I click on the {string} button', async (buttonText: string) => {
  await registrationPage.clickRegisterWithEmail();
});

When('I enter valid registration data', async () => {
  await registrationPage.enterValidRegistrationData(registrationData.validData);
});

When('I enter invalid registration data', async () => {
  await registrationPage.enterInvalidRegistrationData(registrationData.invalidData);
});

When('I click on the {string} button', async (buttonText: string) => {
  await registrationPage.clickRegisterButton();
});

Then('I should see a success message', async () => {
  await registrationPage.assertSuccessMessage();
});

Then('I should see validation error messages', async () => {
  await registrationPage.assertValidationErrors();
});
