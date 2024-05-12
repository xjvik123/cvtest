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
    // Use browser's inspector to find the DOM path
    // Example: await this.page.click('#login-register-btn');
  }

  async switchToRegistrationTab() {
    // Switch to the registration tab
    // Use browser's inspector to find the DOM path
    // Example: await this.page.click('#registration-tab');
  }

  async clickRegisterAsJobSeeker() {
    // Click on the "Register As" -> "For Job Seekers" button
    // Use browser's inspector to find the DOM path
    // Example: await this.page.click('#register-as-job-seeker');
  }

  async clickRegisterWithEmail() {
    // Click on the "Register with email" button
    // Use browser's inspector to find the DOM path
    // Example: await this.page.click('#register-with-email');
  }

  async enterValidRegistrationData() {
    // Enter valid registration data
    // Use browser's inspector to find the DOM paths for input fields
    // Example: await this.page.fill('#firstname', this.registrationData.validData.firstName);
  }

  async enterInvalidRegistrationData() {
    // Enter invalid registration data
    // Use browser's inspector to find the DOM paths for input fields
    // Example: await this.page.fill('#firstname', this.registrationData.invalidData.firstName);
  }

  async clickRegisterButton() {
    // Click on the "Register" button
    // Use browser's inspector to find the DOM path
    // Example: await this.page.click('#register-btn');
  }

  async assertSuccessMessage() {
    // Assert that the success message is displayed
    // Use browser's inspector to find the DOM path for the success message
    // Example: await this.page.waitForSelector('#success-message');
  }

  async assertValidationErrors() {
    // Assert that validation error messages are displayed
    // Use browser's inspector to find the DOM paths for error messages
    // Example: await this.page.waitForSelector('#firstname-error');
  }
}
