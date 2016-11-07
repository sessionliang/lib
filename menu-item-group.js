module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(131);


/***/ },

/***/ 131:
/***/ function(module, exports, __webpack_require__) {

	var ElMenuItemGroup = __webpack_require__(132);

	/* istanbul ignore next */
	ElMenuItemGroup.install = function (Vue) {
	  Vue.component(ElMenuItemGroup.name, ElMenuItemGroup);
	};

	module.exports = ElMenuItemGroup;

/***/ },

/***/ 132:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(133)

	/* template */
	var __vue_template__ = __webpack_require__(134)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}

	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	module.exports = __vue_exports__


/***/ },

/***/ 133:
/***/ function(module, exports) {

	
	module.exports = {
	  name: 'ElMenuItemGroup',

	  componentName: 'ElMenuItemGroup',

	  props: {
	    title: {
	      type: String,
	      required: true
	    }
	  },
	  data: function data() {
	    return {
	      paddingLeft: 20
	    };
	  },

	  methods: {
	    initPadding: function initPadding() {
	      var parent = this.$parent;
	      var level = 0;
	      var component = parent.$options.componentName;

	      while (component !== 'ElMenu') {
	        if (component === 'ElSubmenu') {
	          level++;
	        }
	        parent = parent.$parent;
	        component = parent.$options.componentName;
	      }
	      this.paddingLeft += level * 10;
	    }
	  },
	  mounted: function mounted() {
	    this.initPadding();
	  }
	};

/***/ },

/***/ 134:
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('li', {
	    staticClass: "el-menu-item-group"
	  }, [_h('div', {
	    staticClass: "el-menu-item-group__title",
	    style: ({
	      'padding-left': paddingLeft + 'px'
	    })
	  }, [_s(title)]), _h('ul', [_t("default")])])
	}},staticRenderFns: []}

/***/ }

/******/ });