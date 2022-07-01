const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5000',
    video: false,
    pageLoadTimeout: 1200000
  },
})
