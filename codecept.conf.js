exports.config = {
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://automationpractice.com/index.php',
      browser: 'chrome'
    }
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    }
  },
  tests: './*_test.js',
  name: 'codeceptjs-web-bdd'
}