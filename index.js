//Comando para iniciar o servidor selenium
//java -jar -Dwebdriver.chrome.driver=./chromedriver.exe selenium-server-standalone-3.7.1.jar

const {Builder, By, Key, until} = require('selenium-webdriver');


function sleep(x) {
    return function(cb) {
       setTimeout(cb, x)
    }
 }

let driver = new Builder().forBrowser('chrome').build();

driver.get('https://www.instagram.com');

sleep(5000);


driver.get('https://www.google.com.br');