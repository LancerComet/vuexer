/**
 * Transport data between vue components from npm package and project.
 * Only for Vue 1.
 *
 * 2016.10.17 16:35.
 * # Carry Your World #
 *
 * @author: LancerComet
 * @license: Apache-2.0
 */

let installed = false

const vuexer = {
  install: (Vue: any, options: {
    store: any
    actions: any
    getters: any
  }) => {
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

export default vuexer
