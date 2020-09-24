Feature: Login
  I as a user
  I want to login to the application
  To do orders

  Scenario: Login with success
    Given I am on the login screen
    When I fill the email field with "joao@teste.com"
    And I fill the password field with "123456"
    And I click on Sign In
    When I see "Joao Silva"

  Scenario: Login with wrong email
    Given I am on the login screen
    When I fill the email field with "teste@teste.com"
    And I fill the password field with "121212"
    And I click on Sign In
    When I see "Authentication failed"