const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',

  reporterOptions: {
    charts: true,
    reportPageTitle: 'Automation Test Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },

  e2e: {
    setupNodeEvents(on, config) {
    
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    watchForFileChanges: false,  // cypress will not run automatically now
   
    retries: {
      runMode: 0,
      openMode: 0,  // after failed test it will try 2 more times
      }

  },
});
