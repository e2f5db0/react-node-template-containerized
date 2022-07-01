const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5000',
    video: false,
    // Set ridiculously high because deployment
    // pipeline takes a long time and will timeout otherwise
    defaultCommandTimeout: 480 * 1000
  },
})
