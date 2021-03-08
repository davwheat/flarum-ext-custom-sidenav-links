module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.tsx");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./src/common/models/SideNavLink.ts":
/*!******************************************!*\
  !*** ./src/common/models/SideNavLink.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SideNavLink; });
var SideNavLink = /*#__PURE__*/function () {
  /**
   * Create instance of SideNavLink
   *
   * @param icon FontAwesome icon classes (e.g. `fas fa-link`)
   * @param text Link text (e.g. `My cool site`)
   * @param url Link URL (e.g. `https://flarum.org/`)
   * @param internal Is link within forum? (e.g. `false`)
   */
  function SideNavLink(icon, text, url, internal) {
    this.icon = icon;
    this.text = text;
    this.url = url;
    this.internal = internal;
  }

  SideNavLink.fromJsObject = function fromJsObject(obj) {
    return new SideNavLink(obj.icon, obj.text, obj.url, obj.internal);
  };

  var _proto = SideNavLink.prototype;

  _proto.toString = function toString() {
    return JSON.stringify({
      icon: this.icon,
      text: this.text,
      url: this.url,
      internal: this.internal
    });
  };

  _proto.toJSON = function toJSON() {
    return {
      icon: this.icon,
      text: this.text,
      url: this.url,
      internal: this.internal
    };
  };

  return SideNavLink;
}();



/***/ }),

/***/ "./src/forum/index.tsx":
/*!*****************************!*\
  !*** ./src/forum/index.tsx ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/components/IndexPage */ "flarum/forum/components/IndexPage");
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_LinkButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/LinkButton */ "flarum/forum/components/LinkButton");
/* harmony import */ var flarum_forum_components_LinkButton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_LinkButton__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_components_Separator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/components/Separator */ "flarum/forum/components/Separator");
/* harmony import */ var flarum_forum_components_Separator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_Separator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_models_SideNavLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/models/SideNavLink */ "./src/common/models/SideNavLink.ts");





app.initializers.add('davwheat/custom-sidenav-links', function (app) {
  var jsonRaw = app.data['davwheat-custom-sidenav-links.link-data'];

  if (jsonRaw && jsonRaw !== '[]') {
    var jsonParsed = JSON.parse(jsonRaw);
    var links = [];
    jsonParsed.forEach(function (l) {
      return links.push(_common_models_SideNavLink__WEBPACK_IMPORTED_MODULE_4__["default"].fromJsObject(l));
    });
    Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'navItems', function (items) {
      items.add('customLinks-separator1', m(flarum_forum_components_Separator__WEBPACK_IMPORTED_MODULE_3___default.a, null), 1);
      links.forEach(function (link, i) {
        var href = link.url;

        if (link.internal) {
          // Replace main part of URL with empty string as it's internal
          href = href.replace(app.forum.attribute('baseUrl'), ''); // If it's a home page link, make sure it has a forward slash

          if (href === '') href = '/';
        }

        items.add('customLink-' + i, m(flarum_forum_components_LinkButton__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: href,
          rel: "noopener noreferrer",
          icon: link.icon
        }, link.text), 0);
      });
      items.add('customLinks-separator2', m(flarum_forum_components_Separator__WEBPACK_IMPORTED_MODULE_3___default.a, null), -1);
    });
  }
});

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/forum/components/IndexPage":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['forum/components/IndexPage']" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/IndexPage'];

/***/ }),

/***/ "flarum/forum/components/LinkButton":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/LinkButton']" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/LinkButton'];

/***/ }),

/***/ "flarum/forum/components/Separator":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['forum/components/Separator']" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/Separator'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map