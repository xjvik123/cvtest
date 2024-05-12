Feature: Registration Form

  Scenario: Successful registration with valid data
    Given I navigate to the URL "https://test.cv.ee/"
    When I click on the "Login | Register" button
    And I switch to the registration tab
    And I click on the "Register As" -> "For Job Seekers" button
    And I click on the "Register with email" button
    And I enter valid registration data
    And I click on the "Register" button
    Then I should see a success message

  Scenario: Validation failure with invalid data
    Given I navigate to the URL "https://test.cv.ee/"
    When I click on the "Login | Register" button
    And I switch to the registration tab
    And I click on the "Register As" -> "For Job Seekers" button
    And I click on the "Register with email" button
    And I enter invalid registration data
    And I click on the "Register" button
    Then I should see validation error messages
