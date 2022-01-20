package uk.co.heartbingo.pages;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.support.PageFactory;

import uk.co.heartbingo.utility.Utility;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;

public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Log In')]")
    WebElement loginLink;

    @CacheLookup
    @FindBy(xpath = "//iframe[@class='oneauth-iframe']")
    WebElement iframe;

    @CacheLookup
    @FindBy(id = "username")
    WebElement userNameField;

    @CacheLookup
    @FindBy(id = "password")
    WebElement passWordField;

    @CacheLookup
    @FindBy(name = "login_submit")
    WebElement loginButton;

    @CacheLookup
    @FindBy(xpath = "//a[normalize-space()='Sign Up']")
    WebElement signUpTab;

    @CacheLookup
    @FindBy(className = "login_errorMessageWrapper__2ZcGx")
    WebElement errorMessage;

    @CacheLookup
    @FindBy(xpath = "//button[contains(text(),'Ok, I Agree')]")
    WebElement acceptCookies;


    public void clickOnLoginLink() throws InterruptedException {
        Thread.sleep(2000);
        clickOnElement(loginLink);
        log.info("Clicking on login link : " + loginLink.toString());
    }
    public void enterUserName(String userName){
        driver.switchTo().frame(iframe);
        sendTextToElement(userNameField,userName);

        log.info("Enter userName : " + userNameField.toString());
    }
    public void enterPassWord(String passWord){
        sendTextToElement(passWordField, passWord);
        log.info("Enter Password :" + passWordField.toString());

    }
    public void clickOnLoginButton(){
        clickOnElement(loginButton);
        log.info("Clicking on login button : " + loginButton.getText());
    }
    public String signUpTabVerify(){
        log.info("Verifying that user back on Home Page Successfully");
        return getTextFromElement(signUpTab);
    }
    public String getErrorMessageVerify(){
        log.info("Verifying error Message on Unsuccessful login");
        return getTextFromElement(errorMessage);
    }
    public void setAcceptCookies(){
        clickOnElement(acceptCookies);
        log.info("Clicking on accept Cookies : " + loginLink.getText());
    }


}
