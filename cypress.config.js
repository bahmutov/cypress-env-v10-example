const { defineConfig } = require('cypress')

module.exports = defineConfig({
  // our project does not use fixture files
  fixturesFolder: false,
  env: {
    // user values block 1
    level: 1,
    root: true,
  },
  e2e: {
    // our project does not need the support file
    supportFile: false,
    env: {
      // user values block 2
      level: 2,
      e2e: true,
    },
    setupNodeEvents(on, config) {
      console.log(config.env)
      // set any additional user values
      // config.env.registered = true
      // config.env.user = {
      //   name: process.env.USERNAME,
      //   password: process.env.PASSWORD,
      // }
      // // REMEMBER TO RETURN THE CHANGED CONFIG OBJECT
      // return config
    },
  },
})
