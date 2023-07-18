const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:"/Users/malithheshantha/Documents/mycy/cypress/e2e/my_tests/*.js"
  },
});
