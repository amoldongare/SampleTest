describe('Protractor Demo App', function() {
  var fname = element(by.model('rc.data.newContact.firstName'));
  var lname = element(by.model('rc.data.newContact.lastName'));
  var email = element(by.model('rc.data.newContact.email'));
  var mobile = element(by.model('rc.data.newContact.phone'));
  var referButton = element(by.css('.right-button'));
  var getReferButton = element(by.cssContainingText('.button', 'Get referred'));
  var contactButton = element(by.cssContainingText('.button', 'Add new contact'));
  var saveButton = element(by.cssContainingText('.button', 'Save'));
  
  it('Should open add contact modal.', function(){
	  browser.get('http://localhost:8101/#/app/jobs');
	  referButton.click();
	  getReferButton.click();
	  contactButton.click(); 
  });
    it('Should add contact.', function(){
	  browser.sleep(1000);
	  browser.waitForAngular();
	  email.clear();
	  fname.sendKeys("amol");
	  lname.sendKeys("dongare");
	  email.sendKeys("amol.dongare@clariontechnologies.co.in");
	  browser.sleep(1000);
	  browser.waitForAngular();
	  saveButton.click();
	  var myElement = element(by.css('.ion-nifty-modal'));
	  browser.sleep(5000);
	  browser.waitForAngular();
	  expect(myElement.isDisplayed()).toBeFalsy();	
	  browser.sleep(2000);
	  browser.waitForAngular();	  
  });
});
  
  
  
  
 
  /*
  
  it('eight', function(){
	  mobile.sendKeys("123");
	  saveButton.click();
element(anyFinder).isDisplayed().then(function(result) {
    if ( result ) {
        //Whatever if it is true (displayed)
    } else {
        //Whatever if it is false (not displayed)
    }
});

	  //var checkElement = element(by.css('.modal-backdrop active'));
	  var myElement = element(by.css('.modal-backdrop active'));
expect(myElement.isPresent()).toBeFalsy();		
	  //expect(element(by.className('modal-backdrop active')).isDisplayed()).toBe(false);
	  //expect(browser.getCurrentUrl()).toMatch('/app/referrals');
	  //expect(browser.getCurrentUrl()).toMatch('/app/referrals');
  });
  it('nine', function(){
	  mobile.clear();
	  mobile.sendKeys("9209876352");
	  saveButton.click();
	  //var elm = element(by.css('modal-backdrop active'));
	  //expect(by.css('.modal-backdrop active').isPresent()).toBe(true);
	   var myElement = element(by.css('.ion-nifty-modal'));
		expect(myElement.isPresent()).toBeFalsy();
	  //expect(pageHeader.getText()).toMatch(browser.params.regexNotEmpty);
	  //expect(browser.getCurrentUrl()).toMatch('/app/referrals');
  });*/
    /*it('Should not save..All required fields are needed.', function(){
	  browser.get('http://localhost:8100/#/app/jobs');
	  referButton.click();
	  getReferButton.click();
	  contactButton.click();
	  saveButton.click();
	  var myElementOne = element(by.css('.ion-nifty-modal'));
	  expect(myElementOne.isDisplayed()).toBeTruthy();
  });
  /*it('two', function(){
	  getReferButton.click();
	  expect(browser.getCurrentUrl()).toMatch('/app/referrals');
  });
  it('three', function(){
	  contactButton.click();
	  expect(browser.getCurrentUrl()).toMatch('/app/referrals');
  });
  it('four', function(){
	  fname.sendKeys("amol");
	  saveButton.click();
  });
  it('five', function(){
	  lname.sendKeys("dongare"); 
	  saveButton.click();
  });
  it('six', function(){
	  email.sendKeys("asdnalkndadd");
	  saveButton.click();
  });
  it('Should not add contact..Valid email is needed.', function(){
	  getReferButton.click();
	  contactButton.click();
	  fname.sendKeys("amol");
	  lname.sendKeys("dongare");
	  email.sendKeys("amol.dongare@clariontechnologies.co.in");
	  saveButton.click();
	  var myElement = element(by.css('.modal-backdrop active'));
	  //var myElement = element(by.css('.modal-backdrop active'));
	  expect(myElement.isPresent()).toBeTruthy();
  });*/
  
