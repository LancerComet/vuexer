(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vuexer"] = factory();
	else
		root["vuexer"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	/**
	 * Vue Jsonp By LancerComet at 16:35, 2016.10.17.
	 * # Carry Your World #
	 *
	 * @author: LancerComet
	 * @license: MIT.
	 */

	'use strict';

	var installed = false;

	var vuexer = {
	  install: function install(Vue, options) {
	    if (!options || !options.store) {
	      window.console && console.warn('[Vuexer] You must provide Vuex modules for Vuexer initialization.');
	      return;
	    }

	    if (!installed) {
	      var vm = new Vue({
	        store: options.store,
	        vuex: {
	          actions: options.actions,
	          getters: options.getters
	        }
	      });
	      Vue.vuexer = vm;
	      Vue.prototype.$vuexer = vm;
	      installed = true;
	    }
	  }
	};

	module.exports = vuexer;

/***/ }
/******/ ])
});
;