module.exports = {
  'Launch to Telus portal': function(browser) {
      browser
        .url('https://www.telus.com/en/')
        .waitForElementVisible('body')
        .assert.urlContains('telus')
        .assert.titleContains('Phones, Internet and TV on Canada\'s fastest network | TELUS')
  },

  'Select Telus Plan' : function (browser) {
    browser
      .useXpath()
      .click('//button[@id="main-nav-list-item-0"]')
      .waitForElementVisible('//a[contains(text(),"Plans")]',2000)
      .assert.visible('//a[contains(text(),"Plans")]')
      .click('//a[contains(text(),"Plans")]')
  }, 

  'Navigate to Login Page' : function(browser){
    browser
      .useXpath()
      .assert.visible('//span[contains(text(),"Log in")]')
      .click('//span[contains(text(),"Log in")]')
      .waitForElementVisible('//input[@name="IDToken1"]',5000)
      .setValue('//input[@name="IDToken1"]','#$%^*(')
      .waitForElementVisible('//input[@name="IDToken2"]',2000)
      .setValue('//input[@name="IDToken2"]','testing123')
      .keys(browser.Keys.ENTER)
      .waitForElementVisible('//div[contains(text(),"Sorry, the username and password you entered does not match our records.")]')
      .assert.visible('//div[contains(text(),"Sorry, the username and password you entered does not match our records.")]')

  },
  'Finished': function(browser) {
      browser
        .perform(() => {
          console.log('[perform]: Finished Test:', browser.currentTest.name)
        })
        .end();
    }
};