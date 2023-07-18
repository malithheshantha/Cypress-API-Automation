const { defineConfig } = require("cypress");



module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:"http://coop.apps.symfonycasts.com",
    specPattern:"/Users/malithheshantha/Documents/Cypress-API-Automation/cypress/e2e/my_tests/*.js"
  },
});

