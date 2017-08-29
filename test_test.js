
Feature('Test testazure.carvana.com');

Scenario('User can create account', (I) => {
  I.amOnPage('https://testazure.carvana.com/account/create');
  I.fillField('#FirstName', 'Al');
  I.fillField('#LastName', 'Smith');
  I.fillField('#Email', '111111@mail.ru');
  I.fillField('#DeliveryZip', '08837');
  I.fillField('#Password', 'Qw123456');
  I.fillField('#ConfirmPassword', 'Qw123456');
  I.click('#createAccountSubmitButton')
  
});


Scenario('User can Login/logout', (I) => {
  I.amOnPage('https://testazure.carvana.com/account/login');
  I.fillField('#EmailAddress', '5072355@mail.ru');
  I.fillField('#Password', 'Qw123456');
  I.click('login');
  I.waitForElement('#account-dropdown-btn',10);
  I.moveCursorTo('//*[@id="account-dropdown-btn"]/span');
  I.wait(10);
  I.click('//*[@id="account-dropdown"]/li[4]/a');
  
});


Scenario('User can Find My Car for Volkswagen', (I) => {
  I.amOnPage('https://testazure.carvana.com/');
  I.wait(10);
  I.fillField('#text-search-input', 'Volkswagen');
  I.wait(2);
  I.click ('//*[@id="viewporter-wrapper"]/div[3]/div[3]/div/ui-view/div/div[1]/div[1]/div[2]/div/div[1]/div[2]/div[2]/ul/li[2]/span');
 
});


Scenario('User can Find My Car for Honda Civic < $15000', (I) => {
  I.amOnPage('https://testazure.carvana.com/');
  I.wait(15);
  I.click('//*[@id="hp-price-ranges"]/div[2]/div/ul/li[1]/div/span');
  I.wait(2);
  I.fillField('#text-search-input', 'Honda Civic');
  I.wait(2);
  I.click ('//*[@id="viewporter-wrapper"]/div[3]/div[3]/div/ui-view/div/div[1]/div[1]/div[2]/div/div[1]/div[2]/div[2]/ul/li[2]/span/span');
  
});