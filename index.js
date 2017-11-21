//Comando para iniciar o servidor selenium
//java -jar -Dwebdriver.chrome.driver=./chromedriver.exe selenium-server-standalone-3.7.1.jar

const {Builder, By, Key, until} = require('selenium-webdriver');
const wdConfig = require('./wdio.conf');
const userConfig = require("./user.conf");

var webdriverio = require('webdriverio');
var browser = webdriverio.remote(config);

function sleep(x) {
    return function(cb) {
       setTimeout(cb, x)
    }
 }

/*
browser.init();

browser.getUrl('https://www.instagram.com');

sleep(5000);

browser.getText('Faça login').click();
browser.end();
console.log(browser.getTitle());

*/


let driver = new Builder().forBrowser('chrome').build();

driver.get('https://www.instagram.com');
sleep(10000);
driver.findElement(By.linkText('Faça login')).click();
driver.findElement(By.name("username")).sendKeys(userConfig.username);
driver.findElement(By.name("username")).sendKeys(userConfig.password);
driver.findElement(By.()).sendKeys(userConfig.password);





