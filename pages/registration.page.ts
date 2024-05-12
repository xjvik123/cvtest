import { Page } from '@playwright/test';
import { readYamlFile } from '../utils/common.utils';

export class RegistrationPage {
  private readonly page: Page;
  private readonly registrationData;

  constructor(page: Page) {
    this.page = page;
    this.registrationData = readYamlFile('data/registration.data.yaml');
  }

  async navigateToUrl(url: string) {
    await this.page.goto(https://test.cv.ee/);
  }

async selectlanguage() {
    // Click on the "select language" button
 await this.page.getByLabel('Select language').click();   
 await this.page.getByRole('button', { name: 'Inglise' }).click();
  }
async clickLoginRegisterButton() {
    // Click on the "Login | Register" button
  await this.page.getByRole('button', { name: 'Login | Register' }).click();
  }

  async switchToRegistrationTab() {
    // Switch to the registration tab
 await this.page.getByRole('button', { name: 'Registration' }).click();
  }

  async clickRegisterAsJobSeeker() {
    // Click on the "Register As" -> "For Job Seekers" button
   await this.age.getByRole('button', { name: 'For job seekers' }).click();
  }

  async clickRegisterWithEmail() {
    // Click on the "Register with email" button
  await this.page.getByRole('button', { name: 'Register with email' }).click();
  }

 await page.locator('label').filter({ hasText: 'I want to receive CV-Online' }).locator('span').first().click();
  await page.locator('label').filter({ hasText: 'I agree to the Terms of use' }).click();
  await page.locator('label').filter({ hasText: 'I agree that my information' }).locator('span').first().click();

 async enterValidRegistrationData() {
    // Enter valid registration data
  await this.page.fill('#firstname', this.registrationData.validData.firstName);
  }

  async enterInvalidRegistrationData() {
    // Enter invalid registration data
  await this.page.fill('#firstname', this.registrationData.invalidData.firstName);
  }




  async clickRegisterButton() {
    // Click on the "Register" button
 await this.page.getByRole('button', { name: 'Register', exact: true }).click();
  }

  async assertSuccessMessage() {
    // Assert that the success message is displayed
  await this.page.waitForSelector('#success-message');
  }

  async assertValidationErrors() {
    // Assert that validation error messages are displayed
  await this.page.waitForSelector('#firstname-error');
  }
}
