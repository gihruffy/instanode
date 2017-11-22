//Comando para iniciar o servidor selenium
//java -jar -Dwebdriver.chrome.driver=./chromedriver.exe selenium-server-standalone-3.7.1.jar

const {Builder, By, Key, until} = require('selenium-webdriver');
const wdConfig = require('./wdio.conf');
const userConfig = require("./user.conf");

var webdriverio = require('webdriverio');
var browser = webdriverio.remote(wdConfig);



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
driver.sleep(2000);

driver.findElement(By.linkText('Faça login')).click()
driver.sleep(5000);
driver.findElement(By.name("username")).sendKeys(userConfig.username);
driver.sleep(5000);
driver.findElement(By.name("password")).sendKeys(userConfig.password);
driver.sleep(5000);

let buttonXPath = "/html[@class='js not-logged-in client-root']/body/span[@id='react-root']/section[@class='_sq4bv _29u45']/main[@class='_8fi2q _2v79o']/article[@class='_qmq8y']/div[@class='_kbq82']/div[@class='_f9sjj']/div[@class='_1zdb1']/form[@class='_3jvtb']/span[@class='_t38eb _ov9ai'][1]/button[@class='_qv64e _gexxb _4tgw8 _njrw0']";

driver.findElement(By.xpath(buttonXPath)).click();

driver.sleep(5000);










