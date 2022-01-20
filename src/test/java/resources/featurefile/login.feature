Feature: Login Test

  As user I want to login into heart bingo website

  Scenario: I want to login using valid credential
    Given I am on homepage
    When I click on login tab
    And I input email "Patel311278@gmail.com"
    And I input password "Mytest1231@!"
    And I click on LogIn button
    Then I can verify "Deposit" Tab
    And I click on account tab
    Then I click on logOut tab
    And I verify "Sign Up" link


  Scenario Outline: User should not login with invalid credentials.
    Given I am on homepage
    When I click on login tab
    And I input email "<email>"
    And I input password "<password>"
    And I click on LogIn button
    And error message "The username or password you entered is incorrect. Please try again." displayed
    Examples:
      | email                 | password     | scenario                            |
      | abc@gmail.com         | xyz123@      | invalid Username and password       |
      | Patel311278@gmail.com | xyz123@      | valid username and invalid password |
      | abc@gmail.com         | Mytest1231@! | invalid username and valid password |

