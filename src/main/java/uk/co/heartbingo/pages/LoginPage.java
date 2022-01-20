package uk.co.heartbingo.pages;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import uk.co.heartbingo.utility.Utility;

public class LoginPage extends Utility {

    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    public LoginPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//a[normalize-space()='Deposit']")
    WebElement deposit;
    @CacheLookup
    @FindBy (xpath = "//a[@class='site-header__my-account is-unverified']")
    WebElement accountTab;

    @FindBy (xpath = "//button[normalize-space()='Log Out']")
    WebElement logOut;

    public String depositVerify() throws InterruptedException {
        Thread.sleep(5000);
        log.info("Verifying that user login Successfully");
        return getTextFromElement(deposit);
    }
    public void clickOnAccountTab(){
        clickOnElement(accountTab);
        log.info("Clicking on User Account Tab : " + accountTab.getText());
    }
    public void clickOnLogout() throws InterruptedException {
        Thread.sleep(2000);
        clickOnElement(logOut);
        log.info("Clicking on logOut tab : ");
    }

}
