package uk.co.heartbingo.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import uk.co.heartbingo.pages.HomePage;
import uk.co.heartbingo.pages.LoginPage;

public class LoginSteps {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
        new HomePage().setAcceptCookies();
        System.out.println("I am on HomePage");
    }

    @When("^I click on login tab$")
    public void iClickOnLoginTab() throws InterruptedException {
        new HomePage().clickOnLoginLink();
    }

    @And("^I input email \"([^\"]*)\"$")
    public void iInputEmail(String userName) {
        new HomePage().enterUserName(userName);
    }

    @And("^I input password \"([^\"]*)\"$")
    public void iInputPassword(String password) {
        new HomePage().enterPassWord(password);
    }

    @And("^I click on LogIn button$")
    public void iClickOnLogInButton() {
        new HomePage().clickOnLoginButton();
    }


    @Then("^I can verify \"([^\"]*)\" Tab$")
    public void iCanVerifyTab(String depositText) throws InterruptedException {
        String actualText = new LoginPage().depositVerify();
        Assert.assertEquals(actualText,depositText);

    }

    @And("^I click on account tab$")
    public void iClickOnAccountTab() {
        new LoginPage().clickOnAccountTab();
    }

    @Then("^I click on logOut tab$")
    public void iClickOnLogOutTab() throws InterruptedException {
        new LoginPage().clickOnLogout();
    }

    @And("^I verify \"([^\"]*)\" link$")
    public void iVerifyLink(String signUp)   {
        String actualText = new HomePage().signUpTabVerify();
        Assert.assertEquals(actualText, signUp);


    }

    @And("^error message \"([^\"]*)\" displayed$")
    public void errorMessageDisplayed(String message)  {
        String actualMessage = new HomePage().getErrorMessageVerify();
        Assert.assertEquals(actualMessage, message);


    }
}
