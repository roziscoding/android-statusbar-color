const pkg = require('./package')
const colors = require('vuetify/es5/util/colors')

module.exports = {
  sourceMap: false,
  entry: [
    'src/polyfills.js',
    'src/index.js'
  ],
  html: {
    title: pkg.name,
    description: pkg.description,
    themeColor: colors.default.blue.base
  }
}
