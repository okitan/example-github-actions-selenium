exports.config = {
  //
  // ==================
  // Specify Test Files
  // ==================
  specs: ["./tests/*.js"],
  exclude: [
    // 'path/to/excluded/files'
  ],
  //
  // ============
  // Capabilities
  // ============
  maxInstances: 1,
  capabilities: [
    {
      browserName: "chrome",
      desiredCapabilities: {
        name: "chrome" // capabilitiy name (mainly use for screenshot)
      },
      "goog:chromeOptions": {
        args: ["--headless", "--lang=ja_JP"]
      }
    }
    // {
    //   browserName: 'chrome',
    //   desiredCapabilities: {
    //     name: 'chrome-iphonex',
    //   },
    //   'goog:chromeOptions': {
    //     mobileEmulation: {
    //       deviceName: 'iPhone X',
    //     },
    //   },
    // },
  ],
  //
  // ===================
  // Test Configurations
  // ===================
  sync: true,
  // Level of logging verbosity: silent | verbose | command | data | result | error
  logLevel: "verbose",
  coloredLogs: true,
  deprecationWarnings: true,
  bail: 0,
  baseUrl: "https://www.google.com/",
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  // Test runner services
  services: ["chromedriver"],
  port: "9515",
  path: "/",
  // Framework you want to run your specs with.
  framework: "mocha",
  reporters: ["dot"],
  mochaOpts: {
    ui: "bdd"
  },
  //
  // =====
  // Hooks
  // =====
  /**
   * Gets executed once before all workers get launched.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   */
  // onPrepare: function (config, capabilities) {
  // },
  /**
   * Gets executed just before initialising the webdriver session and test framework. It allows you
   * to manipulate configurations depending on the capability or spec.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that are to be run
   */
  // beforeSession: function(config, capabilities, specs) {
  // },
  /**
   * Gets executed before test execution begins. At this point you can access to all global
   * variables like `browser`. It is the perfect place to define custom commands.
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that are to be run
   */
  before: function(capabilities, specs) {
    const chai = require("chai");
    const chaiWebdriver = require("chai-webdriverio").default;
    chai.use(chaiWebdriver(browser));
    global.expect = chai.expect;
  },
  /**
   * Runs before a WebdriverIO command gets executed.
   * @param {String} commandName hook command name
   * @param {Array} args arguments that command would receive
   */
  // beforeCommand: function (commandName, args) {
  // },

  /**
   * Hook that gets executed before the suite starts
   * @param {Object} suite suite details
   */
  // beforeSuite: function (suite) {
  // },
  /**
   * Function to be executed before a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
   * @param {Object} test test details
   */
  // beforeTest: function(test) {
  // },
  /**
   * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
   * beforeEach in Mocha)
   */
  // beforeHook: () => {},
  /**
   * Hook that gets executed _after_ a hook within the suite ends (e.g. runs after calling
   * afterEach in Mocha)
   */
  // afterHook: function () {
  // },
  /**
   * Function to be executed after a test (in Mocha/Jasmine) or a step (in Cucumber) ends.
   * @param {Object} test test details
   */
  // in case of failure, capture screenshot
  afterTest: function(test) {
    const name = browser.desiredCapabilities.desiredCapabilities.name;
    browser.saveScreenshot(`screenshots/${test.fullTitle}-${name}.png`);
  }
  /**
   * Hook that gets executed after the suite has ended
   * @param {Object} suite suite details
   */
  // afterSuite: function (suite) {
  // },

  /**
   * Runs after a WebdriverIO command gets executed
   * @param {String} commandName hook command name
   * @param {Array} args arguments that command would receive
   * @param {Number} result 0 - command success, 1 - command error
   * @param {Object} error error object if any
   */
  // afterCommand: function (commandName, args, result, error) {
  // },
  /**
   * Gets executed after all tests are done. You still have access to all global variables from
   * the test.
   * @param {Number} result 0 - test pass, 1 - test fail
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  // after: function(result, capabilities, specs) {
  // },
  /**
   * Gets executed right after terminating the webdriver session.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  // afterSession: function (config, capabilities, specs) {
  // },
  /**
   * Gets executed after all workers got shut down and the process is about to exit.
   * @param {Object} exitCode 0 - success, 1 - fail
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   */
  // onComplete: function(exitCode, config, capabilities) {
  // }
};
