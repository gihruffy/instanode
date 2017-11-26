//Comando para iniciar o servidor selenium
//java -jar -Dwebdriver.chrome.driver=./chromedriver.exe selenium-server-standalone-3.7.1.jar

const {Builder, By, Key, until} = require('selenium-webdriver');
const wdConfig = require('./wdio.conf');
const Keys = require("./config/keys");

var webdriverio = require('webdriverio');
var browser = webdriverio.remote(wdConfig);


function login(){
    return new Promise(function(resolve, reject){
        let driver = new Builder().forBrowser('chrome').build();
        driver.get('https://www.instagram.com');
        driver.sleep(2000);
        driver.findElement(By.xpath("//footer[@class='_s5vm9']/div[@class='_g7lf5 _9z659']/nav[@class='_luodr']/ul[@class='_g8wl6']/li[@class='_538w0'][10]/span[@class='_pqycz _hqmnd']/select[@class='_fsoey']/option[text()='English']")).click();
    
        let loginElement = driver.findElement(By.xpath("//article/div/div/p/a[text()='Log in']"));
    
        driver.actions().mouseMove(loginElement).click().perform();   
        let inputUsername = driver.findElement(By.xpath("//input[@name='username']"));
        let inputPassword = driver.findElement(By.xpath("//input[@name='password']"));
        let loginButton = driver.findElement(By.xpath("//form/span/button[text()='Log in']"));
    
        driver.actions().mouseMove(inputUsername).sendKeys(Keys.username).perform();
        driver.sleep(2000);
        driver.findElement(By.xpath("//input[@name='password']")).sendKeys(Keys.password);
        //driver.actions().mouseMove(inputPassword).sendKeys(Keys.password).perform();
        driver.sleep(2000);
        driver.actions().mouseMove(loginButton).click().perform();
        driver.sleep(5000);
        
    
    
        let nav = driver.findElements(By.xpath('//nav')).then((elements)=>{
            console.log(elements);
            if(elements.length == 2){
                resolve("Deu tudo certo =D");
            }else{
                reject("Não conseguiu efetuar o login")
            }
        }).catch((err)=>{
            reject("OCorreu um erro", err);
        })
    });
    
}


login().then((result)=>{
    console.log(result);
    return;
}).catch((err)=>{
    console.log(err);
    return;
});


/*
browser.init();

browser.getUrl('https://www.instagram.com');

sleep(5000);

browser.getText('Faça login').click();
browser.end();
console.log(browser.getTitle());

*/














