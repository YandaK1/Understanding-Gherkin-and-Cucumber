Feature: Merchant login

  Scenario: Successful login keeps user on login page and shows welcome text
    Given I am on the merchant login page
    When I sign in with valid merchant credentials
    Then I should stay on the login page and see the welcome message
