import Vue from 'vue'
import App from './App'
import '@mdi/font/css/materialdesignicons.min.css'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'

import colorsPlugin from './plugins/colors'

// Plugins
Vue.use(colorsPlugin)
Vue.use(Vuetify, {
  iconfont: 'mdi',
  theme: {
    primary: colors.blue.base,
    secondary: colors.indigo.darken1,
    accent: colors.amber.base,
  }
})

// Filters
Vue.filter('upper', (value) => {
  return value.toUpperCase
    ? value.toUpperCase()
    : value
})

import router from './router'

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
