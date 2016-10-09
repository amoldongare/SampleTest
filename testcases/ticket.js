describe('Protractor Demo App', function() {
  var licensePlate = element(by.model('ticketVm.ticketFormDetails.vehicle.licensePlate'));
  var licenseState = element(by.model('ticketVm.ticketFormDetails.vehicle.licenseState'));
  var make = element(by.model('ticketVm.ticketFormDetails.vehicle.make'));
  var currentZone = element(by.model('ticketVm.currentZone'));
  var registerBtn=element(by.css('.button.button-full.button-calm'));
  var createTicketTab=element(by.css('.icon.ion-plus-circled')); 
  var violationButton=element(by.css('[ng-click="ticketVm.openViolationModal()"]'));

  var selectViolation=element(by.css('[ng-click="toggleSelection(violations)"]'));
  var closeModal=element(by.css('[ng-click="ticketVm.closeModal()"]'));
  
  it('Should go to new ticket..', function(){
	  createTicketTab.click();
  });
  it('Should not register..All compulsary fields needed.', function(){
	  browser.actions().mouseMove(registerBtn).click().perform();
	  expect(browser.getCurrentUrl()).toMatch('/tab/newticket');
    browser.sleep(5000);
    
  });
  it('Should Submit Ticket..', function(){
    browser.actions().mouseMove(licensePlate).perform();
    licensePlate.sendKeys("TS123");
    browser.actions().mouseMove(make).click().perform();
    element(by.css('[ng-click="setOption(option)"]')).click();
    browser.sleep(1000);
    browser.actions().mouseMove(violationButton).click().perform();
    browser.sleep(1000);
    selectViolation.click();
    browser.sleep(3000);
    closeModal.click();
    browser.sleep(1000);
	  browser.actions().mouseMove(registerBtn).click().perform();
    browser.sleep(5000);
	  expect(browser.getCurrentUrl()).toMatch('/tab/reservations');
  });
});
