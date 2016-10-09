var HtmlScreenshotReporter  = require("protractor-jasmine2-screenshot-reporter");
var reporter = new HtmlScreenshotReporter({
  dest: 'target/screenshots',
  filename: 'my-report.html'
});

exports.config = {
  framework: 'jasmine',
  //seleniumServerJar: './node_modules/protractor/selenium/selenium-server-standalone-2.45.0.jar',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['testcases/login.js','testcases/ticket.js'],
  beforeLaunch: function() {
    return new Promise(function(resolve){
      reporter.beforeLaunch(resolve);
    });
  },

  onPrepare: function() {
    jasmine.getEnv().addReporter(reporter);
  },

  afterLaunch: function(exitCode) {
    return new Promise(function(resolve){
      reporter.afterLaunch(resolve.bind(this, exitCode));
    });
  },
  multiCapabilities: [{
  //   browserName: 'firefox'
  // }, {
    browserName: 'chrome'
  }]
}