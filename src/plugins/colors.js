'use strict'

import colors from 'vuetify/es5/util/colors'
import changeCase from 'case'

const ignored = (colorName) => !['shades'].includes(colorName)

const install = (Vue) => {
  Vue.prototype.$colors = { ...colors }

  Vue.prototype.$colors.names = Object.keys(colors)
    .filter(ignored)

  Vue.prototype.$colors.base = Object.keys(colors)
    .filter(ignored)
    .reduce((result, colorName) => ({ ...result, [colorName]: colors[colorName].base }), {})

  Vue.prototype.$colors.class = (colorName) => {
    if (!colorName in colors) {
      return colorName
    }

    return changeCase.kebab(colorName)
  }

  return Vue
}

export default { install }
