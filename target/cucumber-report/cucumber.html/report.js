$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "\r\nAs user I want to login into heart bingo website",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4885414400,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "I want to login using valid credential",
  "description": "",
  "id": "login-test;i-want-to-login-using-valid-credential",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on login tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I input email \"Patel311278@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I input password \"Mytest1231@!\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on LogIn button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I can verify \"Deposit\" Tab",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I click on account tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on logOut tab",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I verify \"Sign Up\" link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 1254918100,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element is not clickable at point (789, 670)\n  (Session info: chrome\u003d97.0.4692.71)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-KDKBGFP\u0027, ip: \u0027172.25.80.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [437dfe45d744b96dcfcd0a880d68c358, clickElement {id\u003dfe4021c9-ed1f-400e-a858-45c9101b2966}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 97.0.4692.71, chrome: {chromedriverVersion: 97.0.4692.71 (adefa7837d02a..., userDataDir: C:\\Users\\Vrajesh\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:53330}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:53330/devtoo..., se:cdpVersion: 97.0.4692.71, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (437dfe45d744b96dcfcd0a880d68c358)] -\u003e xpath: //button[contains(text(),\u0027Ok, I Agree\u0027)]]\nSession ID: 437dfe45d744b96dcfcd0a880d68c358\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:251)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:77)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\r\n\tat com.sun.proxy.$Proxy24.click(Unknown Source)\r\n\tat uk.co.heartbingo.utility.Utility.clickOnElement(Utility.java:28)\r\n\tat uk.co.heartbingo.pages.HomePage.setAcceptCookies(HomePage.java:81)\r\n\tat uk.co.heartbingo.steps.LoginSteps.iAmOnHomepage(LoginSteps.java:15)\r\n\tat ✽.Given I am on homepage(login.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Patel311278@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iInputEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Mytest1231@!",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iInputPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.iClickOnLogInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Deposit",
      "offset": 14
    }
  ],
  "location": "LoginSteps.iCanVerifyTab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.iClickOnAccountTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.iClickOnLogOutTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign Up",
      "offset": 10
    }
  ],
  "location": "LoginSteps.iVerifyLink(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 428129800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "User should not login with invalid credentials.",
  "description": "",
  "id": "login-test;user-should-not-login-with-invalid-credentials.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I click on login tab",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I input email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I input password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on LogIn button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "error message \"The username or password you entered is incorrect. Please try again.\" displayed",
  "keyword": "And "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "login-test;user-should-not-login-with-invalid-credentials.;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "scenario"
      ],
      "line": 25,
      "id": "login-test;user-should-not-login-with-invalid-credentials.;;1"
    },
    {
      "cells": [
        "abc@gmail.com",
        "xyz123@",
        "invalid Username and password"
      ],
      "line": 26,
      "id": "login-test;user-should-not-login-with-invalid-credentials.;;2"
    },
    {
      "cells": [
        "Patel311278@gmail.com",
        "xyz123@",
        "valid username and invalid password"
      ],
      "line": 27,
      "id": "login-test;user-should-not-login-with-invalid-credentials.;;3"
    },
    {
      "cells": [
        "abc@gmail.com",
        "Mytest1231@!",
        "invalid username and valid password"
      ],
      "line": 28,
      "id": "login-test;user-should-not-login-with-invalid-credentials.;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5798235100,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "User should not login with invalid credentials.",
  "description": "",
  "id": "login-test;user-should-not-login-with-invalid-credentials.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I click on login tab",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I input email \"abc@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I input password \"xyz123@\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on LogIn button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "error message \"The username or password you entered is incorrect. Please try again.\" displayed",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 1270698700,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element is not clickable at point (789, 670)\n  (Session info: chrome\u003d97.0.4692.71)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-KDKBGFP\u0027, ip: \u0027172.25.80.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [00f9b5b92a2611e330c31e4fc6c6a4eb, clickElement {id\u003dbf913ff9-b30f-4b08-a57d-604059e0d9f1}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 97.0.4692.71, chrome: {chromedriverVersion: 97.0.4692.71 (adefa7837d02a..., userDataDir: C:\\Users\\Vrajesh\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:53383}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:53383/devtoo..., se:cdpVersion: 97.0.4692.71, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (00f9b5b92a2611e330c31e4fc6c6a4eb)] -\u003e xpath: //button[contains(text(),\u0027Ok, I Agree\u0027)]]\nSession ID: 00f9b5b92a2611e330c31e4fc6c6a4eb\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:251)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:77)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\r\n\tat com.sun.proxy.$Proxy24.click(Unknown Source)\r\n\tat uk.co.heartbingo.utility.Utility.clickOnElement(Utility.java:28)\r\n\tat uk.co.heartbingo.pages.HomePage.setAcceptCookies(HomePage.java:81)\r\n\tat uk.co.heartbingo.steps.LoginSteps.iAmOnHomepage(LoginSteps.java:15)\r\n\tat ✽.Given I am on homepage(login.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "abc@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iInputEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123@",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iInputPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.iClickOnLogInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "The username or password you entered is incorrect. Please try again.",
      "offset": 15
    }
  ],
  "location": "LoginSteps.errorMessageDisplayed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 336490700,
  "status": "passed"
});
formatter.before({
  "duration": 6365469500,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "User should not login with invalid credentials.",
  "description": "",
  "id": "login-test;user-should-not-login-with-invalid-credentials.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I click on login tab",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I input email \"Patel311278@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I input password \"xyz123@\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on LogIn button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "error message \"The username or password you entered is incorrect. Please try again.\" displayed",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 1399922300,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element is not clickable at point (789, 670)\n  (Session info: chrome\u003d97.0.4692.71)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-KDKBGFP\u0027, ip: \u0027172.25.80.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [27256b325eabf7b6af55f498babab4a8, clickElement {id\u003dd1c31533-f7ce-4816-8a40-380c22210e9f}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 97.0.4692.71, chrome: {chromedriverVersion: 97.0.4692.71 (adefa7837d02a..., userDataDir: C:\\Users\\Vrajesh\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:53458}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:53458/devtoo..., se:cdpVersion: 97.0.4692.71, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (27256b325eabf7b6af55f498babab4a8)] -\u003e xpath: //button[contains(text(),\u0027Ok, I Agree\u0027)]]\nSession ID: 27256b325eabf7b6af55f498babab4a8\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:251)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:77)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\r\n\tat com.sun.proxy.$Proxy24.click(Unknown Source)\r\n\tat uk.co.heartbingo.utility.Utility.clickOnElement(Utility.java:28)\r\n\tat uk.co.heartbingo.pages.HomePage.setAcceptCookies(HomePage.java:81)\r\n\tat uk.co.heartbingo.steps.LoginSteps.iAmOnHomepage(LoginSteps.java:15)\r\n\tat ✽.Given I am on homepage(login.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Patel311278@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iInputEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123@",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iInputPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.iClickOnLogInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "The username or password you entered is incorrect. Please try again.",
      "offset": 15
    }
  ],
  "location": "LoginSteps.errorMessageDisplayed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 987582300,
  "status": "passed"
});
formatter.before({
  "duration": 6932017900,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "User should not login with invalid credentials.",
  "description": "",
  "id": "login-test;user-should-not-login-with-invalid-credentials.;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I click on login tab",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I input email \"abc@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I input password \"Mytest1231@!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on LogIn button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "error message \"The username or password you entered is incorrect. Please try again.\" displayed",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 1614614100,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element is not clickable at point (789, 670)\n  (Session info: chrome\u003d97.0.4692.71)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-KDKBGFP\u0027, ip: \u0027172.25.80.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [a382e5df348b02936b9b3068219da4c3, clickElement {id\u003d9619ab1e-e0a7-4874-bf4b-9363b1db1567}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 97.0.4692.71, chrome: {chromedriverVersion: 97.0.4692.71 (adefa7837d02a..., userDataDir: C:\\Users\\Vrajesh\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:53525}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:53525/devtoo..., se:cdpVersion: 97.0.4692.71, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (a382e5df348b02936b9b3068219da4c3)] -\u003e xpath: //button[contains(text(),\u0027Ok, I Agree\u0027)]]\nSession ID: a382e5df348b02936b9b3068219da4c3\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:251)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:77)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\r\n\tat com.sun.proxy.$Proxy24.click(Unknown Source)\r\n\tat uk.co.heartbingo.utility.Utility.clickOnElement(Utility.java:28)\r\n\tat uk.co.heartbingo.pages.HomePage.setAcceptCookies(HomePage.java:81)\r\n\tat uk.co.heartbingo.steps.LoginSteps.iAmOnHomepage(LoginSteps.java:15)\r\n\tat ✽.Given I am on homepage(login.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "abc@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iInputEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Mytest1231@!",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iInputPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.iClickOnLogInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "The username or password you entered is incorrect. Please try again.",
      "offset": 15
    }
  ],
  "location": "LoginSteps.errorMessageDisplayed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1435282200,
  "status": "passed"
});
});