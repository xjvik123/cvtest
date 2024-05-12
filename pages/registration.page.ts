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

  async clickLoginRegisterButton() {
    // Click on the "Login | Register" button
  await this.page.click('text=login-register');
  }

  async switchToRegistrationTab() {
    // Switch to the registration tab
  await this.page.click('text=Register');
  }

  async clickRegisterAsJobSeeker() {
    // Click on the "Register As" -> "For Job Seekers" button
  await this.page.click('text= For Job Seekers');
  }

  async clickRegisterWithEmail() {
    // Click on the "Register with email" button
  await this.page.click('text= Register with email');
  }

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
  await this.page.click('#register-btn');
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
