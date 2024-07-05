const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    // excludeSpecPattern: "**/2-advanced-examples/*",
    chromeWebSecurity: false,
    modifyObstructiveCode: false,
  },
});
