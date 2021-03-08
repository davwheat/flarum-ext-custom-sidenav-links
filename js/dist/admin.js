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
/******/ 	return __webpack_require__(__webpack_require__.s = "./admin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./admin.js":
/*!******************!*\
  !*** ./admin.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.ts");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./src/admin/components/AddLinkModal.tsx":
/*!***********************************************!*\
  !*** ./src/admin/components/AddLinkModal.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddLinkModal; });
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Modal */ "flarum/common/components/Modal");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/Switch */ "flarum/common/components/Switch");
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Input */ "./src/admin/components/Input.tsx");
/* harmony import */ var _common_models_SideNavLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/models/SideNavLink */ "./src/common/models/SideNavLink.ts");
/* harmony import */ var _isValidUrl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../isValidUrl */ "./src/admin/isValidUrl.ts");










var translate = function translate(key, data) {
  return app.translator.trans("davwheat.custom_sidenav_links.admin.settings_page.new_link_modal." + key, data);
};

var AddLinkModal = /*#__PURE__*/function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(AddLinkModal, _Modal);

  function AddLinkModal() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Modal.call.apply(_Modal, [this].concat(args)) || this;

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "loading", false);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "newLink", new _common_models_SideNavLink__WEBPACK_IMPORTED_MODULE_7__["default"]('', '', '', false));

    return _this;
  }

  var _proto = AddLinkModal.prototype;

  // constructor(public links: SideNavLink[]) {
  //   super()
  // }
  _proto.className = function className() {
    return 'davwheat-sidenav-AddLinkModal Modal--small';
  };

  _proto.title = function title() {
    return translate('title');
  };

  _proto.content = function content() {
    var _this2 = this;

    var validUrl = Object(_isValidUrl__WEBPACK_IMPORTED_MODULE_8__["default"])(this.newLink.url);
    return m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "Form"
    }, m("div", {
      className: "Form-group"
    }, m("div", null, m("label", null, translate('labels.icon'), m("div", {
      "class": "icon-preview-container"
    }, m("span", {
      "class": "icon-preview fa-fw " + this.newLink.icon,
      title: translate('table.icon_preview_tooltip')
    }), m(_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
      value: this.newLink.icon,
      onChange: function onChange(newValue) {
        _this2.newLink.icon = newValue;
      },
      placeholder: translate('placeholders.icon'),
      disabled: false
    })))), m("div", null, m("label", null, translate('labels.text'), m(_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
      value: this.newLink.text,
      onChange: function onChange(newValue) {
        _this2.newLink.text = newValue;
      },
      placeholder: translate('placeholders.text'),
      disabled: false
    }))), m("div", null, m("label", null, translate('labels.url'), m(_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
      "class": !validUrl && 'sidenav-input--invalid',
      value: this.newLink.url,
      onChange: function onChange(newValue) {
        _this2.newLink.url = newValue;
      },
      placeholder: translate('placeholders.url'),
      disabled: false
    }))), m("div", null, m(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_5___default.a, {
      state: this.newLink.internal,
      onchange: function onchange(newValue) {
        _this2.newLink.internal = newValue;
      },
      disabled: false
    }, translate('labels.internal'))), m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
      className: "Button Button--primary",
      type: "submit",
      disabled: !validUrl || this.loading || !this.isValid(),
      loading: this.loading
    }, this.getButtonText(validUrl)))));
  };

  _proto.getButtonText = function getButtonText(validUrl) {
    if (!validUrl) return translate('submit_btn.fix_url');
    if (this.loading) return translate('submit_btn.loading');
    if (!this.isValid()) return translate('submit_btn.invalid_form');
    return translate('submit_btn.add');
  };

  _proto.isValid = function isValid() {
    return this.newLink.icon.trim() !== '' && this.newLink.text.trim() !== '' && this.newLink.url.trim() !== '';
  };

  _proto.onsubmit = function onsubmit(e) {
    e.preventDefault();
    this.loading = true;
    this.hide.bind(this)();
    this.attrs.links.push(this.newLink);
  };

  return AddLinkModal;
}(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_3___default.a);



/***/ }),

/***/ "./src/admin/components/Input.tsx":
/*!****************************************!*\
  !*** ./src/admin/components/Input.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SettingValueInput; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/utils/extractText */ "flarum/common/utils/extractText");
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_2__);




var SettingValueInput = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(SettingValueInput, _Component);

  function SettingValueInput() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = SettingValueInput.prototype;

  _proto.view = function view() {
    return m("input", {
      type: "text",
      "aria-labelled-by": this.attrs.labelId,
      className: "FormControl " + this.attrs["class"],
      placeholder: flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_2___default()(this.attrs.placeholder),
      disabled: !!this.attrs.disabled,
      value: this.attrs.value,
      onchange: this.onChange.bind(this)
    });
  };

  _proto.onChange = function onChange(e) {
    if (typeof this.attrs.onChange === 'function') {
      // @ts-ignore
      var target = e.target;
      this.attrs.onChange(target.value, target);
    }
  };

  return SettingValueInput;
}(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/admin/components/SettingsPage.tsx":
/*!***********************************************!*\
  !*** ./src/admin/components/SettingsPage.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FakeDataPage; });
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/ExtensionPage */ "flarum/components/ExtensionPage");
/* harmony import */ var flarum_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/components/Switch */ "flarum/common/components/Switch");
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/components/LoadingIndicator */ "flarum/common/components/LoadingIndicator");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Input */ "./src/admin/components/Input.tsx");
/* harmony import */ var flarum_common_utils_saveSettings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/common/utils/saveSettings */ "flarum/common/utils/saveSettings");
/* harmony import */ var flarum_common_utils_saveSettings__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_saveSettings__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! flarum/common/utils/extractText */ "flarum/common/utils/extractText");
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _common_models_SideNavLink__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/models/SideNavLink */ "./src/common/models/SideNavLink.ts");
/* harmony import */ var _isValidUrl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../isValidUrl */ "./src/admin/isValidUrl.ts");
/* harmony import */ var _AddLinkModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./AddLinkModal */ "./src/admin/components/AddLinkModal.tsx");














var settingsKey = "davwheat-custom-sidenav-links.link-data";

var translate = function translate(key, data) {
  return flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.translator.trans("davwheat.custom_sidenav_links.admin.settings_page." + key, data);
};

var FakeDataPage = /*#__PURE__*/function (_ExtensionPage) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(FakeDataPage, _ExtensionPage);

  function FakeDataPage() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _ExtensionPage.call.apply(_ExtensionPage, [this].concat(args)) || this;

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "settings", {});

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "loading", false);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "isDirty", false);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "isAnyUrlInvalid", false);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "rawLinkData", flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.data.settings['davwheat-custom-sidenav-links.link-data']);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "linkData", null);

    return _this;
  }

  var _proto = FakeDataPage.prototype;

  _proto.oninit = function oninit(vnode) {
    _ExtensionPage.prototype.oninit.call(this, vnode);

    this.createData();
  };

  _proto.content = function content() {
    var _this2 = this;

    // Non-existant
    if (!this.rawLinkData) {
      return m("p", null, "My settings key (", m("code", null, settingsKey), ") is missing from your database! Make sure you've run the migrations. If that doesn't work, add it to your settings table manually with the content ", m("code", null, "[]"), ".");
    } else if (!this.linkData) {
      return m("div", {
        "class": "davwheat-ext-settings"
      }, m("form", null, m(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_7___default.a, null)));
    }

    var isAnyUrlInvalid = false;
    return m("div", {
      "class": "davwheat-ext-settings"
    }, m("form", null, m("section", {
      "class": "davwheat-sidenav-addlink"
    }, m("h2", null, translate('heading')), m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
      "class": "Button davwheat-sidenav-addlink-btn",
      icon: "fas fa-plus",
      onclick: function onclick() {
        flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.modal.show(_AddLinkModal__WEBPACK_IMPORTED_MODULE_13__["default"], {
          links: _this2.linkData
        });

        _this2.makeDirty();
      }
    }, translate('add_link_btn'))), m("div", {
      "class": "scroll-container"
    }, m("main", null, m("div", {
      id: "davwheat-sidenav--position-heading"
    }, translate('table.header.position')), m("div", {
      id: "davwheat-sidenav--icon-heading"
    }, translate('table.header.icon')), m("div", {
      id: "davwheat-sidenav--text-heading"
    }, translate('table.header.text')), m("div", {
      id: "davwheat-sidenav--url-heading"
    }, translate('table.header.url')), m("div", {
      id: "davwheat-sidenav--internal-heading"
    }, translate('table.header.internal')), m("div", {
      id: "davwheat-sidenav--delete-heading"
    }, translate('table.header.delete')), this.linkData.map(function (link, i) {
      var _this2$linkData;

      var validUrl = Object(_isValidUrl__WEBPACK_IMPORTED_MODULE_12__["default"])(link.url);
      if (!validUrl) isAnyUrlInvalid = true;
      return [m("div", {
        "data-column": "position"
      }, m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
        "class": "Button Button--icon",
        icon: "fas fa-arrow-up",
        title: translate('table.tooltips.move_up'),
        disabled: i === 0,
        onclick: function onclick() {
          if (i === 0) return;
          var temp = link;
          _this2.linkData[i] = _this2.linkData[i - 1];
          _this2.linkData[i - 1] = link;
        }
      }), m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
        "class": "Button Button--icon",
        icon: "fas fa-arrow-down",
        title: translate('table.tooltips.move_down'),
        disabled: i === (((_this2$linkData = _this2.linkData) == null ? void 0 : _this2$linkData.length) || 1) - 1,
        onclick: function onclick() {
          var _this2$linkData2;

          if (i === (((_this2$linkData2 = _this2.linkData) == null ? void 0 : _this2$linkData2.length) || 1) - 1) return;
          var temp = link;
          _this2.linkData[i] = _this2.linkData[i + 1];
          _this2.linkData[i + 1] = link;
        }
      })), m("div", {
        "data-column": "icon"
      }, m("span", {
        "class": "icon-preview fa-fw " + link.icon,
        title: translate('table.tooltips.icon_preview')
      }), m(_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
        value: link.icon,
        onChange: function onChange(newValue) {
          _this2.linkData[i].icon = newValue;

          _this2.makeDirty();
        },
        labelId: "davwheat-sidenav--icon-heading",
        placeholder: translate('table.placeholders.icon'),
        disabled: false
      })), m("div", {
        "data-column": "text"
      }, m(_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
        value: link.text,
        onChange: function onChange(newValue) {
          _this2.linkData[i].text = newValue;

          _this2.makeDirty();
        },
        labelId: "davwheat-sidenav--text-heading",
        placeholder: translate('table.placeholders.text'),
        disabled: false
      })), m("div", {
        "data-column": "url"
      }, m(_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
        "class": !validUrl && 'sidenav-input--invalid',
        value: link.url,
        onChange: function onChange(newValue) {
          _this2.linkData[i].url = newValue;

          _this2.makeDirty();
        },
        labelId: "davwheat-sidenav--url-heading",
        placeholder: translate('table.placeholders.url'),
        disabled: false
      })), m("div", {
        "data-column": "internal"
      }, m(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_6___default.a, {
        state: link.internal,
        onchange: function onchange(newValue) {
          _this2.linkData[i].internal = newValue;

          _this2.makeDirty();
        },
        "aria-labelled-by": "davwheat-sidenav--url-heading",
        disabled: false
      })), m("div", {
        "data-column": "delete"
      }, m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
        "class": "Button Button--icon",
        icon: "fas fa-trash",
        "aria-labelled-by": "davwheat-sidenav--delete-heading",
        onclick: function onclick() {
          if (confirm(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_10___default()(translate('confirm_delete', {
            link: link.text
          })))) {
            var _this2$linkData3;

            // Remove this link
            (_this2$linkData3 = _this2.linkData) == null ? void 0 : _this2$linkData3.splice(i, 1);
          }
        }
      }))];
    }))), m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
      onclick: this.saveSettings.bind(this),
      className: "Button Button--primary",
      loading: this.loading,
      disabled: isAnyUrlInvalid || !this.isDirty || this.loading
    }, this.getButtonText(isAnyUrlInvalid))));
  };

  _proto.getButtonText = function getButtonText(isAnyUrlInvalid) {
    this.isAnyUrlInvalid = isAnyUrlInvalid;
    if (this.isAnyUrlInvalid) return translate('save_btn.fix_errors');
    if (this.loading) return translate('save_btn.saving');
    if (this.isDirty) return translate('save_btn.dirty');
    return translate('save_btn.saved');
  };

  _proto.createData = function createData() {
    var rawData = this.rawLinkData;
    var json;

    try {
      json = Object.freeze(JSON.parse(rawData));
    } catch (_unused) {
      throw "Invalid JSON found in Flarum setting `" + settingsKey + "`. We can't continue. Fix manually, or reset to `[]` in your DB.";
    }

    var finalData = [];
    json.forEach(function (snl) {
      return finalData.push(_common_models_SideNavLink__WEBPACK_IMPORTED_MODULE_11__["default"].fromJsObject(snl));
    });
    this.linkData = finalData;
  };

  _proto.makeDirty = function makeDirty() {
    this.isDirty = true;
  };

  _proto.saveSettings = function saveSettings(e) {
    var _saveSettings2;

    e.preventDefault();

    if (this.isAnyUrlInvalid) {
      flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.alerts.show({
        type: 'error'
      }, translate('alert.fix_errors'));
      return;
    }

    flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.alerts.clear();
    this.loading = true;
    var stringData = JSON.stringify(this.linkData);
    console.log(stringData);
    return flarum_common_utils_saveSettings__WEBPACK_IMPORTED_MODULE_9___default()((_saveSettings2 = {}, _saveSettings2[settingsKey] = JSON.stringify(this.linkData), _saveSettings2)).then(this.onSettingsSaved.bind(this));
  };

  _proto.onSettingsSaved = function onSettingsSaved() {
    this.loading = false;
    this.isDirty = false;
    flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.alerts.show({
      type: 'success'
    }, flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.translator.trans('core.admin.settings.saved_message'));
  };

  return FakeDataPage;
}(flarum_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_4___default.a);



/***/ }),

/***/ "./src/admin/index.ts":
/*!****************************!*\
  !*** ./src/admin/index.ts ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_SettingsPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/SettingsPage */ "./src/admin/components/SettingsPage.tsx");

app.initializers.add('davwheat/custom-sidenav-links', function (app) {
  // Debug line
  // app.data.settings['davwheat-custom-sidenav-links.link-data'] = `[{"icon":"icon1","text":"text1","url":"url1","internal":true}]`
  app.extensionData["for"]('davwheat-custom-sidenav-links').registerPage(_components_SettingsPage__WEBPACK_IMPORTED_MODULE_0__["default"]);
});

/***/ }),

/***/ "./src/admin/isValidUrl.ts":
/*!*********************************!*\
  !*** ./src/admin/isValidUrl.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isValidUrl; });
/**
 * Returns `true` if provided a valid URL, else `false`.
 *
 * A URL is considered valid if it...
 * - uses http or https protocols
 * - contains a `.` in the hostname
 * - is parsable with `new URL(...)`
 *
 * @param str URL string
 */
function isValidUrl(str) {
  var url;

  try {
    url = new URL(str);
  } catch (_) {
    return false;
  }

  return (url.protocol === 'http:' || url.protocol === 'https:') && url.hostname.includes('.');
}

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

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/common/Component":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['common/Component']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/Component'];

/***/ }),

/***/ "flarum/common/components/Button":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Button']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Button'];

/***/ }),

/***/ "flarum/common/components/LoadingIndicator":
/*!***************************************************************************!*\
  !*** external "flarum.core.compat['common/components/LoadingIndicator']" ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/LoadingIndicator'];

/***/ }),

/***/ "flarum/common/components/Modal":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Modal']" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Modal'];

/***/ }),

/***/ "flarum/common/components/Switch":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Switch']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Switch'];

/***/ }),

/***/ "flarum/common/utils/extractText":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/utils/extractText']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/extractText'];

/***/ }),

/***/ "flarum/common/utils/saveSettings":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['common/utils/saveSettings']" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/saveSettings'];

/***/ }),

/***/ "flarum/components/ExtensionPage":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['components/ExtensionPage']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/ExtensionPage'];

/***/ })

/******/ });
//# sourceMappingURL=admin.js.map