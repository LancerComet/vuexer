  /**
   * Vue Jsonp By LancerComet at 16:35, 2016.10.17.
   * # Carry Your World #
   *
   * @author: LancerComet
   * @license: MIT.
   */

let inited = false
let vm = null

;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.Index = factory();
  }
}(this, function () {
  const vuexer = {
    install (Vue, options) {
      if (!options || !options.store || !options.actions || !options.getters) {
        window.console && console.warn('[Vuexer] You must provide Vuex modules for Vuexer initialization.')
        return
      }
      if (!inited) {
        vm = new Vue({
          store: options.store,
          vuex: {
            actions: options.actions,
            getters: options.getters
          }
        })
        Vue.vuexer = vm
        Vue.prototype.$vuexer = vm
        inited = true
      }
    }
  }
  return vuexer
}));
