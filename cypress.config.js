const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "4wsx5i",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "vue-cli",
      bundler: "webpack",
    },
  },
});
