  /**
   * Vue Jsonp By LancerComet at 16:35, 2016.10.17.
   * # Carry Your World #
   *
   * @author: LancerComet
   * @license: MIT.
   */

'use strict'

var installed = false

const vuexer = {
  install: function (Vue, options) {
    if (!options || !options.store) {
      window.console && console.warn('[Vuexer] You must provide Vuex modules for Vuexer initialization.')
      return
    }

    if (!installed) {
      const vm = new Vue({
        store: options.store,
        vuex: {
          actions: options.actions,
          getters: options.getters
        }
      })
      Vue.vuexer = vm
      Vue.prototype.$vuexer = vm
      installed = true
    }

  }
}

module.exports = vuexer
