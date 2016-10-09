describe('Protractor Demo App', function() {
  var username = element(by.model('LoginVm.userData.username'));
  var userpass = element(by.model('LoginVm.userData.password'));
  var goButton=element(by.css('[type="submit"]'));

  //beforeEach(function() {
	browser.get('http://localhost:8100/#/login');
  //});
  
  it('should not log in..Both username and password are needed.', function() {
	goButton.click();
	expect(browser.getCurrentUrl()).toMatch('/login');
  });
  
  it('should not log in..Need valid email address.', function() {
    username.sendKeys("yogesh.patilclariontechnologies.co.in");
    goButton.click();
	expect(browser.getCurrentUrl()).toMatch('/login');
  });
  it('should not log in..Need password.', function() {
	username.clear();
	username.sendKeys("yogesh.patil@clariontechnologies.co.in");
    goButton.click();
	expect(browser.getCurrentUrl()).toMatch('/login');
  });
  it('should not log in..Need registered Username/password.', function() {
	username.clear();
	username.sendKeys("fghfhh@fdhgfhfgh");
	userpass.sendKeys("test@dfgdfgg123");
    goButton.click();
	expect(browser.getCurrentUrl()).toMatch('/login');
  }); 
  
  it('should log in.', function() {
	userpass.clear();
	username.clear();
	username.sendKeys("jon@simplejoymedia.com");
	userpass.sendKeys("jon-cody-password");
	goButton.click();
	expect(browser.getCurrentUrl()).toMatch('/tab/reservations');
	browser.sleep(2000);
	browser.waitForAngular();
  });
});
