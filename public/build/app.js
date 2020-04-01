(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/css/app.css":
/*!****************************!*\
  !*** ./assets/css/app.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/images/logo.jpg":
/*!********************************!*\
  !*** ./assets/images/logo.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/build/images/logo.9dd5623f.jpg";

/***/ }),

/***/ "./assets/js/Styles/Theme.js":
/*!***********************************!*\
  !*** ./assets/js/Styles/Theme.js ***!
  \***********************************/
/*! exports provided: theme, useStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theme", function() { return theme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStyles", function() { return useStyles; });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])({
  "palette": {
    "common": {
      "black": "rgba(0, 0, 0, 1)",
      "white": "#fff"
    },
    "background": {
      "paper": "rgba(51, 51, 51, 1)",
      "default": "rgba(153, 153, 153, 1)"
    },
    "primary": {
      "light": "rgba(227, 227, 227, 1)",
      "main": "rgba(51, 51, 51, 1)",
      "dark": "rgba(51, 51, 51, 1)",
      "contrastText": "rgba(227, 227, 227, 1)"
    },
    "secondary": {
      "light": "rgba(252, 252, 252, 1)",
      "main": "rgba(204, 204, 204, 1)",
      "dark": "rgba(112, 112, 112, 1)",
      "contrastText": "rgba(255, 255, 255, 1)"
    },
    "error": {
      "light": "#e57373",
      "main": "rgba(154, 0, 0, 1)",
      "dark": "#d32f2f",
      "contrastText": "#fff"
    },
    "text": {
      "primary": "rgba(243, 243, 243, 0.87)",
      "secondary": "rgba(255, 255, 255, 0.54)",
      "disabled": "rgba(70, 0, 0, 0.38)",
      "hint": "rgba(162, 116, 116, 0.38)"
    }
  },
  "typography": {
    "h4": {
      "fontFamily": ["long_shot"]
    },
    "h5": {
      "fontFamily": ["long_shot"]
    }
  }
});
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(function (theme) {
  return {
    root: {
      flexGrow: 1
    },
    headerOnTop: {
      backgroundColor: 'transparent',
      boxShadow: 'none'
    },
    logoBig: {
      marginRight: theme.spacing(2),
      width: 100,
      height: 100
    },
    logoSmall: {
      marginRight: theme.spacing(2),
      width: 30,
      height: 30
    },
    scrollTop: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2)
    },
    section: {
      marginTop: theme.spacing(8),
      color: theme.palette.primary.dark
    },
    sectionHr: {
      borderColor: theme.palette.primary.dark
    },
    footerBox: {
      padding: 40
    }
  };
});

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/app.css */ "./assets/css/app.css");
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_app_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/App */ "./assets/js/components/App.js");
// any CSS you import will output into a single css file (app.css in this case)




 // Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';

react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_4__["default"], null)), document.getElementById('root'));

/***/ }),

/***/ "./assets/js/components/App.js":
/*!*************************************!*\
  !*** ./assets/js/components/App.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _provider_UserContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../provider/UserContext */ "./assets/js/provider/UserContext.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header */ "./assets/js/components/Header.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _Styles_Theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Styles/Theme */ "./assets/js/Styles/Theme.js");
/* harmony import */ var _NewsList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NewsList */ "./assets/js/components/NewsList.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Footer */ "./assets/js/components/Footer.js");









function App(props) {
  var classes = Object(_Styles_Theme__WEBPACK_IMPORTED_MODULE_6__["useStyles"])();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_provider_UserContext__WEBPACK_IMPORTED_MODULE_3__["UserContextProvider"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_styles__WEBPACK_IMPORTED_MODULE_5__["ThemeProvider"], {
    theme: _Styles_Theme__WEBPACK_IMPORTED_MODULE_6__["theme"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    width: "100%",
    src: "https://battleforvilegis.com/wp-content/uploads/2019/10/battle-for-vilegis.jpg",
    alt: "placeholder image"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NewsList__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: "In Evidenza",
    type: "featured"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NewsList__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: "Tornando Indietro",
    type: "old"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], null))));
}

/***/ }),

/***/ "./assets/js/components/Footer.js":
/*!****************************************!*\
  !*** ./assets/js/components/Footer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _Styles_Theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Styles/Theme */ "./assets/js/Styles/Theme.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");






function Footer(props) {
  var classes = Object(_Styles_Theme__WEBPACK_IMPORTED_MODULE_2__["useStyles"])();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    elevation: 3,
    component: "footer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    className: classes.footerBox
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    direction: "row",
    justify: "center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    md: 4,
    sm: 12
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.title,
    color: "textSecondary",
    gutterBottom: true
  }, "Informazioni"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "h5",
    component: "h2"
  }, "Cane Nero"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "body2",
    component: "p"
  }, "Associazione culturale", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Finalizzata alla promozione", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "ed attuazione del gioco di ruolo dal vivo", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "su tutto il territorio nazionale"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    md: 4,
    sm: 12
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.title,
    color: "textSecondary",
    gutterBottom: true
  }, "Contatti"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "body2",
    component: "p"
  }, "Scrivi una mail a"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "body2",
    component: "p"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    color: "secondary",
    href: 'mailto:presidente@cane-nero.it'
  }, "presidente@cane-nero.it"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    color: "secondary",
    href: 'mailto:presidente@cane-nero.it'
  }, "direttivo@cane-nero.it"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    color: "secondary",
    href: 'mailto:presidente@cane-nero.it'
  }, "staff@cane-nero.it"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    color: "secondary",
    href: 'mailto:presidente@cane-nero.it'
  }, "tech@cane-nero.it"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    md: 4,
    sm: 12
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.title,
    color: "textSecondary",
    gutterBottom: true
  }, "Informazioni"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "h5",
    component: "h2"
  }, "Cane Nero"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "body2",
    component: "p"
  }, "Associazione culturale", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Finalizzata alla promozione", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "ed attuazione del gioco di ruolo dal vivo", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "su tutto il territorio nazionale"))))));
}

/***/ }),

/***/ "./assets/js/components/Header.js":
/*!****************************************!*\
  !*** ./assets/js/components/Header.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowUp */ "./node_modules/@material-ui/icons/KeyboardArrowUp.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ "./node_modules/@material-ui/icons/AccountCircle.js");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_icons_MeetingRoom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/MeetingRoom */ "./node_modules/@material-ui/icons/MeetingRoom.js");
/* harmony import */ var _material_ui_icons_MeetingRoom__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MeetingRoom__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_icons_MonetizationOn__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/MonetizationOn */ "./node_modules/@material-ui/icons/MonetizationOn.js");
/* harmony import */ var _material_ui_icons_MonetizationOn__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MonetizationOn__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _Styles_Theme__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../Styles/Theme */ "./assets/js/Styles/Theme.js");
/* harmony import */ var _images_logo_jpg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../images/logo.jpg */ "./assets/images/logo.jpg");
/* harmony import */ var _images_logo_jpg__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_images_logo_jpg__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _provider_UserContext__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../provider/UserContext */ "./assets/js/provider/UserContext.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");













function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var options = {
  title: 'Cane nero',
  menuLink: [{
    key: 1,
    url: '#',
    label: 'Chi Siamo'
  }, {
    key: 2,
    url: '#',
    label: 'Le Nostre Cronache'
  }, {
    key: 3,
    url: '#',
    label: 'News'
  }, {
    key: 4,
    url: '#',
    label: 'Calendario'
  }, {
    key: 5,
    url: '#',
    label: 'Staff'
  }, {
    key: 6,
    url: '#',
    label: 'Contatti'
  }]
};
function Header(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_12__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      anchorEl = _useState2[0],
      setAnchorEl = _useState2[1];

  var user = Object(react__WEBPACK_IMPORTED_MODULE_12__["useContext"])(_provider_UserContext__WEBPACK_IMPORTED_MODULE_21__["default"]).user;
  var classes = Object(_Styles_Theme__WEBPACK_IMPORTED_MODULE_19__["useStyles"])();
  var trigger = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["useScrollTrigger"])({
    "disableHysteresis": true,
    "threshold": 200
  });

  var handleClick = function handleClick(event) {
    setAnchorEl(event.currentTarget);
  };

  var handleClose = function handleClose() {
    setAnchorEl(null);
  };

  var scrollTop = function scrollTop(event) {
    var anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  var loggedInComponent = function loggedInComponent() {
    if (null === user) {
      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["CircularProgress"], null);
    }

    if (user.isLogged === 1) {
      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["IconButton"], {
        "aria-controls": "loginMenu",
        "aria-haspopup": "true",
        onClick: handleClick,
        color: "primary"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Avatar"], {
        alt: user.username,
        src: user.avatar
      }, user.firstName.slice(0, 1), user.lastName.slice(0, 1))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Menu"], {
        id: "loginMenu",
        elevation: 3,
        getContentAnchorEl: null,
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right'
        },
        transformOrigin: {
          vertical: 'top',
          horizontal: 'right'
        },
        anchorEl: anchorEl,
        keepMounted: true,
        open: Boolean(anchorEl),
        onClose: handleClose
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["MenuItem"], null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_16___default.a, {
        color: "secondary",
        fontSize: "small"
      })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["ListItemText"], {
        primary: "Il tuo Profilo",
        fontSize: "small"
      })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["MenuItem"], {
        divider: true
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_icons_MonetizationOn__WEBPACK_IMPORTED_MODULE_18___default.a, {
        color: "secondary",
        fontSize: "small"
      })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["ListItemText"], {
        primary: "La tua Iscrizione",
        fontSize: "small"
      })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["MenuItem"], {
        dense: true
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_icons_MeetingRoom__WEBPACK_IMPORTED_MODULE_17___default.a, {
        color: "secondary",
        fontSize: "small"
      })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["ListItemText"], {
        primary: "Logout",
        fontSize: "small"
      }))));
    } else {
      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Tooltip"], {
        title: "Accedi al tuo account",
        "aria-label": "add",
        arrow: true
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Button"], {
        color: "inherit"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_16___default.a, null), " Login"));
    }
  };

  var bar = function bar(id, position, logoStyles, options) {
    var className = '';

    if (position === 'top') {
      className = classes.headerOnTop;
    }

    return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["AppBar"], {
      position: "fixed",
      id: id,
      className: className
    }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Toolbar"], null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_22__["default"], {
      container: true
    }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_22__["default"], {
      container: true,
      item: true,
      xs: 12,
      md: 6,
      direction: "row",
      justify: "flex-start",
      alignItems: "center"
    }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_22__["default"], {
      item: true
    }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("img", {
      src: _images_logo_jpg__WEBPACK_IMPORTED_MODULE_20___default.a,
      className: logoStyles,
      alt: "Cane Nero - GDR"
    })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_22__["default"], {
      item: true
    }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Typography"], {
      variant: "h4",
      component: "h1",
      display: "inline"
    }, options.title))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_22__["default"], {
      container: true,
      item: true,
      xs: 12,
      md: 6,
      direction: "row",
      justify: "flex-end",
      alignItems: "center",
      component: "nav"
    }, options.menuLink.map(function (item) {
      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_22__["default"], {
        key: item.key,
        item: true,
        xs: 12,
        md: 2
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Typography"], {
        align: "center"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Link"], {
        href: item.url,
        variant: "body2",
        color: "inherit"
      }, item.label)));
    }))), loggedInComponent()));
  };

  return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_12___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Slide"], {
    "in": !trigger
  }, bar("back-to-top-anchor", "top", classes.logoBig, options)), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Slide"], {
    "in": trigger
  }, bar("back-to-top-anchor-fixed", "fixed", classes.logoSmall, options)), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Zoom"], {
    "in": trigger
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    onClick: scrollTop,
    role: "presentation",
    className: classes.scrollTop
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Fab"], {
    color: "secondary",
    size: "small",
    "aria-label": "scroll back to top"
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_icons_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_15___default.a, null)))));
}

/***/ }),

/***/ "./assets/js/components/Loader.js":
/*!****************************************!*\
  !*** ./assets/js/components/Loader.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Loader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");



function Loader(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    direction: "row",
    justify: "center",
    alignItems: "center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CircularProgress"], null)));
}

/***/ }),

/***/ "./assets/js/components/NewsList.js":
/*!******************************************!*\
  !*** ./assets/js/components/NewsList.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NewsList; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Styles_Theme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Styles/Theme */ "./assets/js/Styles/Theme.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _hooks_UseHttp__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../hooks/UseHttp */ "./assets/js/hooks/UseHttp.js");
/* harmony import */ var _material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/GridList */ "./node_modules/@material-ui/core/esm/GridList/index.js");
/* harmony import */ var _material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/GridListTile */ "./node_modules/@material-ui/core/esm/GridListTile/index.js");
/* harmony import */ var _material_ui_core_GridListTileBar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/GridListTileBar */ "./node_modules/@material-ui/core/esm/GridListTileBar/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/Info */ "./node_modules/@material-ui/icons/Info.js");
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Section */ "./assets/js/components/Section.js");
/* harmony import */ var _material_ui_icons_Autorenew__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/icons/Autorenew */ "./node_modules/@material-ui/icons/Autorenew.js");
/* harmony import */ var _material_ui_icons_Autorenew__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Autorenew__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "./node_modules/@material-ui/core/esm/Tooltip/index.js");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Loader */ "./assets/js/components/Loader.js");












function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }















function NewsList(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      newsList = _useState2[0],
      setNewsList = _useState2[1];

  Object(_hooks_UseHttp__WEBPACK_IMPORTED_MODULE_14__["default"])('/news?type=' + (props.type || 'featured'), {}, setNewsList);
  var classes = Object(_Styles_Theme__WEBPACK_IMPORTED_MODULE_12__["useStyles"])();

  var content = function content() {
    return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
      className: classes.root
    }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_15__["default"], {
      cols: 12,
      cellHeight: 400
    }, newsList.map(function (news, index) {
      var col = index % 3 === 0 ? 12 : 6;
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_16__["default"], {
        key: news.id,
        className: "news-container",
        cols: col
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("img", {
        src: news.image,
        alt: news.title
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_material_ui_core_GridListTileBar__WEBPACK_IMPORTED_MODULE_17__["default"], {
        title: news.title,
        actionIcon: react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_18__["default"], null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_19___default.a, {
          color: "secondary"
        }))
      }));
    }))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_22__["default"], {
      container: true,
      direction: "row",
      justify: "center",
      alignItems: "center"
    }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_22__["default"], {
      item: true
    }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_23__["default"], {
      title: "Vedi Altri",
      "aria-label": "Vedi Altri",
      placement: "bottom",
      arrow: true
    }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_18__["default"], {
      className: "news_load_more"
    }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_material_ui_icons_Autorenew__WEBPACK_IMPORTED_MODULE_21___default.a, {
      color: "secondary"
    }))))));
  };

  if (newsList === null) {
    return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Section__WEBPACK_IMPORTED_MODULE_20__["default"], {
      className: classes.section,
      title: props.title
    }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Loader__WEBPACK_IMPORTED_MODULE_24__["default"], null));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Section__WEBPACK_IMPORTED_MODULE_20__["default"], {
      className: classes.section,
      title: props.title
    }, content());
  }
}

/***/ }),

/***/ "./assets/js/components/Section.js":
/*!*****************************************!*\
  !*** ./assets/js/components/Section.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Section; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _Styles_Theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Styles/Theme */ "./assets/js/Styles/Theme.js");



function Section(props) {
  var classes = Object(_Styles_Theme__WEBPACK_IMPORTED_MODULE_2__["useStyles"])();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: classes.section
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h4",
    component: "h4",
    className: classes.title
  }, props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: classes.sectionHr
  }), props.children);
}

/***/ }),

/***/ "./assets/js/hooks/UseHttp.js":
/*!************************************!*\
  !*** ./assets/js/hooks/UseHttp.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useHttp; });
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function useHttp(url, params, callback, errorCallback) {
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    fetch(url, params).then(function (response) {
      return response.json();
    }).then(function (response) {
      return callback(response);
    })["catch"](function (error) {
      return errorCallback(error);
    });
  }, []);
}

/***/ }),

/***/ "./assets/js/provider/UserContext.js":
/*!*******************************************!*\
  !*** ./assets/js/provider/UserContext.js ***!
  \*******************************************/
/*! exports provided: UserContextProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserContextProvider", function() { return UserContextProvider; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.define-properties */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _hooks_UseHttp__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../hooks/UseHttp */ "./assets/js/hooks/UseHttp.js");



















function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var UserContext = Object(react__WEBPACK_IMPORTED_MODULE_18__["createContext"])([]);
function UserContextProvider(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_18__["useState"])({
    'user': null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  Object(_hooks_UseHttp__WEBPACK_IMPORTED_MODULE_19__["default"])('/user', {}, function (data) {
    setState({
      'user': data.user
    });
  });
  return react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(UserContext.Provider, {
    value: _objectSpread({}, state)
  }, props.children);
}
/* harmony default export */ __webpack_exports__["default"] = (UserContext);

/***/ })

},[["./assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9sb2dvLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvU3R5bGVzL1RoZW1lLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTG9hZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL05ld3NMaXN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2hvb2tzL1VzZUh0dHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3Byb3ZpZGVyL1VzZXJDb250ZXh0LmpzIl0sIm5hbWVzIjpbInRoZW1lIiwiY3JlYXRlTXVpVGhlbWUiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsImZsZXhHcm93IiwiaGVhZGVyT25Ub3AiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3hTaGFkb3ciLCJsb2dvQmlnIiwibWFyZ2luUmlnaHQiLCJzcGFjaW5nIiwid2lkdGgiLCJoZWlnaHQiLCJsb2dvU21hbGwiLCJzY3JvbGxUb3AiLCJwb3NpdGlvbiIsImJvdHRvbSIsInJpZ2h0Iiwic2VjdGlvbiIsIm1hcmdpblRvcCIsImNvbG9yIiwicGFsZXR0ZSIsInByaW1hcnkiLCJkYXJrIiwic2VjdGlvbkhyIiwiYm9yZGVyQ29sb3IiLCJmb290ZXJCb3giLCJwYWRkaW5nIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiQXBwIiwicHJvcHMiLCJjbGFzc2VzIiwiRm9vdGVyIiwidGl0bGUiLCJvcHRpb25zIiwibWVudUxpbmsiLCJrZXkiLCJ1cmwiLCJsYWJlbCIsIkhlYWRlciIsInVzZVN0YXRlIiwiYW5jaG9yRWwiLCJzZXRBbmNob3JFbCIsInVzZXIiLCJ1c2VDb250ZXh0IiwiVXNlckNvbnRleHQiLCJ0cmlnZ2VyIiwidXNlU2Nyb2xsVHJpZ2dlciIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlQ2xvc2UiLCJhbmNob3IiLCJ0YXJnZXQiLCJvd25lckRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsImxvZ2dlZEluQ29tcG9uZW50IiwiaXNMb2dnZWQiLCJ1c2VybmFtZSIsImF2YXRhciIsImZpcnN0TmFtZSIsInNsaWNlIiwibGFzdE5hbWUiLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJCb29sZWFuIiwiYmFyIiwiaWQiLCJsb2dvU3R5bGVzIiwiY2xhc3NOYW1lIiwibG9nbyIsIm1hcCIsIml0ZW0iLCJMb2FkZXIiLCJOZXdzTGlzdCIsIm5ld3NMaXN0Iiwic2V0TmV3c0xpc3QiLCJ1c2VIdHRwIiwidHlwZSIsImNvbnRlbnQiLCJuZXdzIiwiaW5kZXgiLCJjb2wiLCJpbWFnZSIsIlNlY3Rpb24iLCJjaGlsZHJlbiIsInBhcmFtcyIsImNhbGxiYWNrIiwiZXJyb3JDYWxsYmFjayIsInVzZUVmZmVjdCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImVycm9yIiwiY3JlYXRlQ29udGV4dCIsIlVzZXJDb250ZXh0UHJvdmlkZXIiLCJzdGF0ZSIsInNldFN0YXRlIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxJQUFNQSxLQUFLLEdBQUdDLCtFQUFjLENBQy9CO0FBQ0ksYUFBVztBQUNQLGNBQVU7QUFDTixlQUFTLGtCQURIO0FBRU4sZUFBUztBQUZILEtBREg7QUFLUCxrQkFBYztBQUNWLGVBQVMscUJBREM7QUFFVixpQkFBVztBQUZELEtBTFA7QUFTUCxlQUFXO0FBQ1AsZUFBUyx3QkFERjtBQUVQLGNBQVEscUJBRkQ7QUFHUCxjQUFRLHFCQUhEO0FBSVAsc0JBQWdCO0FBSlQsS0FUSjtBQWVQLGlCQUFhO0FBQ1QsZUFBUyx3QkFEQTtBQUVULGNBQVEsd0JBRkM7QUFHVCxjQUFRLHdCQUhDO0FBSVQsc0JBQWdCO0FBSlAsS0FmTjtBQXFCUCxhQUFTO0FBQ0wsZUFBUyxTQURKO0FBRUwsY0FBUSxvQkFGSDtBQUdMLGNBQVEsU0FISDtBQUdjLHNCQUFnQjtBQUg5QixLQXJCRjtBQTBCUCxZQUFRO0FBQ0osaUJBQVcsMkJBRFA7QUFFSixtQkFBYSwyQkFGVDtBQUdKLGtCQUFZLHNCQUhSO0FBSUosY0FBUTtBQUpKO0FBMUJELEdBRGY7QUFrQ0ksZ0JBQWM7QUFDVixVQUFNO0FBQ0Ysb0JBQWMsQ0FDVixXQURVO0FBRFosS0FESTtBQU1WLFVBQU07QUFDRixvQkFBYyxDQUNWLFdBRFU7QUFEWjtBQU5JO0FBbENsQixDQUQrQixDQUE1QjtBQW1EQSxJQUFNQyxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQUgsS0FBSztBQUFBLFNBQUs7QUFDMUNJLFFBQUksRUFBRTtBQUNGQyxjQUFRLEVBQUU7QUFEUixLQURvQztBQUkxQ0MsZUFBVyxFQUFFO0FBQ1RDLHFCQUFlLEVBQUUsYUFEUjtBQUVUQyxlQUFTLEVBQUU7QUFGRixLQUo2QjtBQVExQ0MsV0FBTyxFQUFFO0FBQ0xDLGlCQUFXLEVBQUVWLEtBQUssQ0FBQ1csT0FBTixDQUFjLENBQWQsQ0FEUjtBQUVMQyxXQUFLLEVBQUUsR0FGRjtBQUdMQyxZQUFNLEVBQUU7QUFISCxLQVJpQztBQWExQ0MsYUFBUyxFQUFFO0FBQ1BKLGlCQUFXLEVBQUVWLEtBQUssQ0FBQ1csT0FBTixDQUFjLENBQWQsQ0FETjtBQUVQQyxXQUFLLEVBQUUsRUFGQTtBQUdQQyxZQUFNLEVBQUU7QUFIRCxLQWIrQjtBQWtCMUNFLGFBQVMsRUFBRTtBQUNQQyxjQUFRLEVBQUUsT0FESDtBQUVQQyxZQUFNLEVBQUVqQixLQUFLLENBQUNXLE9BQU4sQ0FBYyxDQUFkLENBRkQ7QUFHUE8sV0FBSyxFQUFFbEIsS0FBSyxDQUFDVyxPQUFOLENBQWMsQ0FBZDtBQUhBLEtBbEIrQjtBQXVCMUNRLFdBQU8sRUFBRTtBQUNMQyxlQUFTLEVBQUVwQixLQUFLLENBQUNXLE9BQU4sQ0FBYyxDQUFkLENBRE47QUFFTFUsV0FBSyxFQUFFckIsS0FBSyxDQUFDc0IsT0FBTixDQUFjQyxPQUFkLENBQXNCQztBQUZ4QixLQXZCaUM7QUEyQjFDQyxhQUFTLEVBQUU7QUFDUEMsaUJBQVcsRUFBRTFCLEtBQUssQ0FBQ3NCLE9BQU4sQ0FBY0MsT0FBZCxDQUFzQkM7QUFENUIsS0EzQitCO0FBOEIxQ0csYUFBUyxFQUFFO0FBQ1BDLGFBQU8sRUFBRTtBQURGO0FBOUIrQixHQUFMO0FBQUEsQ0FBTixDQUE1QixDOzs7Ozs7Ozs7Ozs7QUNwRFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBO0FBQ0E7O0FBRUFDLGdEQUFRLENBQUNDLE1BQVQsQ0FBZ0IsMkRBQUMsOERBQUQsUUFBUSwyREFBQyx1REFBRCxPQUFSLENBQWhCLEVBQTBDQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBMUMsRTs7Ozs7Ozs7Ozs7O0FDWEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR2UsU0FBU0MsR0FBVCxDQUFhQyxLQUFiLEVBQW9CO0FBRS9CLE1BQU1DLE9BQU8sR0FBR2pDLCtEQUFTLEVBQXpCO0FBRUEsU0FDSSwyREFBQyx5RUFBRCxRQUNJLDJEQUFDLGlFQUFEO0FBQWUsU0FBSyxFQUFFRixtREFBS0E7QUFBM0IsS0FDSTtBQUFLLGFBQVMsRUFBRW1DLE9BQU8sQ0FBQy9CO0FBQXhCLEtBQ0ksMkRBQUMsK0NBQUQsT0FESixFQUVJO0FBQUssU0FBSyxFQUFFLE1BQVo7QUFBb0IsT0FBRyxFQUFFLGdGQUF6QjtBQUEyRyxPQUFHLEVBQUU7QUFBaEgsSUFGSixFQUdJLDJEQUFDLDJEQUFELFFBQ0ksMkRBQUMscUVBQUQsT0FESixFQUVJLDJEQUFDLGlEQUFEO0FBQVUsU0FBSyxFQUFFLGFBQWpCO0FBQWdDLFFBQUksRUFBRTtBQUF0QyxJQUZKLEVBR0ksMkRBQUMsaURBQUQ7QUFBVSxTQUFLLEVBQUUsbUJBQWpCO0FBQXNDLFFBQUksRUFBRTtBQUE1QyxJQUhKLENBSEosRUFRSSwyREFBQywrQ0FBRCxPQVJKLENBREosQ0FESixDQURKO0FBZ0JILEM7Ozs7Ozs7Ozs7OztBQy9CRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTZ0MsTUFBVCxDQUFnQkYsS0FBaEIsRUFBdUI7QUFFbEMsTUFBTUMsT0FBTyxHQUFHakMsK0RBQVMsRUFBekI7QUFFQSxTQUNJLDJEQUFDLHVEQUFEO0FBQU8sYUFBUyxFQUFFLENBQWxCO0FBQXFCLGFBQVMsRUFBRTtBQUFoQyxLQUNJLDJEQUFDLDJEQUFEO0FBQVcsYUFBUyxFQUFFaUMsT0FBTyxDQUFDUjtBQUE5QixLQUNJLDJEQUFDLHNEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLGFBQVMsRUFBQyxLQUExQjtBQUFnQyxXQUFPLEVBQUM7QUFBeEMsS0FDSSwyREFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxDQUFmO0FBQWtCLE1BQUUsRUFBRTtBQUF0QixLQUNJLDJEQUFDLHFEQUFELFFBQ0ksMkRBQUMsb0VBQUQ7QUFBWSxhQUFTLEVBQUVRLE9BQU8sQ0FBQ0UsS0FBL0I7QUFBc0MsU0FBSyxFQUFDLGVBQTVDO0FBQTRELGdCQUFZO0FBQXhFLG9CQURKLEVBSUksMkRBQUMsb0VBQUQ7QUFBWSxXQUFPLEVBQUMsSUFBcEI7QUFBeUIsYUFBUyxFQUFDO0FBQW5DLGlCQUpKLEVBT0ksMkRBQUMsb0VBQUQ7QUFBWSxXQUFPLEVBQUMsT0FBcEI7QUFBNEIsYUFBUyxFQUFDO0FBQXRDLCtCQUVJLHNFQUZKLGlDQUlJLHNFQUpKLCtDQU1JLHNFQU5KLHFDQVBKLENBREosQ0FESixFQW9CSSwyREFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxDQUFmO0FBQWtCLE1BQUUsRUFBRTtBQUF0QixLQUNJLDJEQUFDLHFEQUFELFFBQ0ksMkRBQUMsb0VBQUQ7QUFBWSxhQUFTLEVBQUVGLE9BQU8sQ0FBQ0UsS0FBL0I7QUFBc0MsU0FBSyxFQUFDLGVBQTVDO0FBQTRELGdCQUFZO0FBQXhFLGdCQURKLEVBSUksMkRBQUMsb0VBQUQ7QUFBWSxXQUFPLEVBQUMsT0FBcEI7QUFBNEIsYUFBUyxFQUFDO0FBQXRDLHlCQUpKLEVBT0ksMkRBQUMsb0VBQUQ7QUFBWSxXQUFPLEVBQUMsT0FBcEI7QUFBNEIsYUFBUyxFQUFDO0FBQXRDLEtBQ0ksMkRBQUMsc0RBQUQ7QUFBTSxTQUFLLEVBQUUsV0FBYjtBQUEwQixRQUFJLEVBQUU7QUFBaEMsK0JBREosRUFDb0csc0VBRHBHLEVBRUksMkRBQUMsc0RBQUQ7QUFBTSxTQUFLLEVBQUUsV0FBYjtBQUEwQixRQUFJLEVBQUU7QUFBaEMsOEJBRkosRUFFbUcsc0VBRm5HLEVBR0ksc0VBSEosRUFJSSwyREFBQyxzREFBRDtBQUFNLFNBQUssRUFBRSxXQUFiO0FBQTBCLFFBQUksRUFBRTtBQUFoQywwQkFKSixFQUkrRixzRUFKL0YsRUFLSSwyREFBQyxzREFBRDtBQUFNLFNBQUssRUFBRSxXQUFiO0FBQTBCLFFBQUksRUFBRTtBQUFoQyx5QkFMSixFQUs4RixzRUFMOUYsQ0FQSixDQURKLENBcEJKLEVBcUNJLDJEQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLENBQWY7QUFBa0IsTUFBRSxFQUFFO0FBQXRCLEtBQ0ksMkRBQUMscURBQUQsUUFDSSwyREFBQyxvRUFBRDtBQUFZLGFBQVMsRUFBRUYsT0FBTyxDQUFDRSxLQUEvQjtBQUFzQyxTQUFLLEVBQUMsZUFBNUM7QUFBNEQsZ0JBQVk7QUFBeEUsb0JBREosRUFJSSwyREFBQyxvRUFBRDtBQUFZLFdBQU8sRUFBQyxJQUFwQjtBQUF5QixhQUFTLEVBQUM7QUFBbkMsaUJBSkosRUFPSSwyREFBQyxvRUFBRDtBQUFZLFdBQU8sRUFBQyxPQUFwQjtBQUE0QixhQUFTLEVBQUM7QUFBdEMsK0JBRUksc0VBRkosaUNBSUksc0VBSkosK0NBTUksc0VBTkoscUNBUEosQ0FESixDQXJDSixDQURKLENBREosQ0FESjtBQStESCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFFRDtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUMsT0FBTyxHQUFHO0FBQ1pELE9BQUssRUFBRSxXQURLO0FBRVpFLFVBQVEsRUFBRSxDQUNOO0FBQUNDLE9BQUcsRUFBRSxDQUFOO0FBQVNDLE9BQUcsRUFBRSxHQUFkO0FBQW1CQyxTQUFLLEVBQUU7QUFBMUIsR0FETSxFQUVOO0FBQUNGLE9BQUcsRUFBRSxDQUFOO0FBQVNDLE9BQUcsRUFBRSxHQUFkO0FBQW1CQyxTQUFLLEVBQUU7QUFBMUIsR0FGTSxFQUdOO0FBQUNGLE9BQUcsRUFBRSxDQUFOO0FBQVNDLE9BQUcsRUFBRSxHQUFkO0FBQW1CQyxTQUFLLEVBQUU7QUFBMUIsR0FITSxFQUlOO0FBQUNGLE9BQUcsRUFBRSxDQUFOO0FBQVNDLE9BQUcsRUFBRSxHQUFkO0FBQW1CQyxTQUFLLEVBQUU7QUFBMUIsR0FKTSxFQUtOO0FBQUNGLE9BQUcsRUFBRSxDQUFOO0FBQVNDLE9BQUcsRUFBRSxHQUFkO0FBQW1CQyxTQUFLLEVBQUU7QUFBMUIsR0FMTSxFQU1OO0FBQUNGLE9BQUcsRUFBRSxDQUFOO0FBQVNDLE9BQUcsRUFBRSxHQUFkO0FBQW1CQyxTQUFLLEVBQUU7QUFBMUIsR0FOTTtBQUZFLENBQWhCO0FBWWUsU0FBU0MsTUFBVCxDQUFnQlQsS0FBaEIsRUFBdUI7QUFBQSxrQkFFRlUsdURBQVEsQ0FBQyxJQUFELENBRk47QUFBQTtBQUFBLE1BRTNCQyxRQUYyQjtBQUFBLE1BRWpCQyxXQUZpQjs7QUFHbEMsTUFBTUMsSUFBSSxHQUFHQyx5REFBVSxDQUFDQyw4REFBRCxDQUFWLENBQXdCRixJQUFyQztBQUNBLE1BQU1aLE9BQU8sR0FBR2pDLGdFQUFTLEVBQXpCO0FBQ0EsTUFBTWdELE9BQU8sR0FBR0MsMkVBQWdCLENBQUM7QUFDN0IseUJBQXFCLElBRFE7QUFFN0IsaUJBQWE7QUFGZ0IsR0FBRCxDQUFoQzs7QUFLQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFBQyxLQUFLLEVBQUk7QUFDekJQLGVBQVcsQ0FBQ08sS0FBSyxDQUFDQyxhQUFQLENBQVg7QUFDSCxHQUZEOztBQUlBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDdEJULGVBQVcsQ0FBQyxJQUFELENBQVg7QUFDSCxHQUZEOztBQUlBLE1BQU0vQixTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFBc0MsS0FBSyxFQUFJO0FBQ3ZCLFFBQU1HLE1BQU0sR0FBRyxDQUFDSCxLQUFLLENBQUNJLE1BQU4sQ0FBYUMsYUFBYixJQUE4QjNCLFFBQS9CLEVBQXlDNEIsYUFBekMsQ0FBdUQscUJBQXZELENBQWY7O0FBRUEsUUFBSUgsTUFBSixFQUFZO0FBQ1JBLFlBQU0sQ0FBQ0ksY0FBUCxDQUFzQjtBQUFDQyxnQkFBUSxFQUFFLFFBQVg7QUFBcUJDLGFBQUssRUFBRTtBQUE1QixPQUF0QjtBQUNIO0FBQ0osR0FORDs7QUFRQSxNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDNUIsUUFBSSxTQUFTaEIsSUFBYixFQUFtQjtBQUNmLGFBQU8sNERBQUMsbUVBQUQsT0FBUDtBQUNIOztBQUNELFFBQUlBLElBQUksQ0FBQ2lCLFFBQUwsS0FBa0IsQ0FBdEIsRUFBeUI7QUFDckIsYUFDSSx5RUFDSSw0REFBQyw2REFBRDtBQUNJLHlCQUFjLFdBRGxCO0FBRUkseUJBQWMsTUFGbEI7QUFHSSxlQUFPLEVBQUVaLFdBSGI7QUFJSSxhQUFLLEVBQUM7QUFKVixTQU1JLDREQUFDLHlEQUFEO0FBQVEsV0FBRyxFQUFFTCxJQUFJLENBQUNrQixRQUFsQjtBQUE0QixXQUFHLEVBQUVsQixJQUFJLENBQUNtQjtBQUF0QyxTQUNLbkIsSUFBSSxDQUFDb0IsU0FBTCxDQUFlQyxLQUFmLENBQXFCLENBQXJCLEVBQXdCLENBQXhCLENBREwsRUFDaUNyQixJQUFJLENBQUNzQixRQUFMLENBQWNELEtBQWQsQ0FBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FEakMsQ0FOSixDQURKLEVBV0ksNERBQUMsdURBQUQ7QUFDSSxVQUFFLEVBQUMsV0FEUDtBQUVJLGlCQUFTLEVBQUUsQ0FGZjtBQUdJLDBCQUFrQixFQUFFLElBSHhCO0FBSUksb0JBQVksRUFBRTtBQUNWRSxrQkFBUSxFQUFFLFFBREE7QUFFVkMsb0JBQVUsRUFBRTtBQUZGLFNBSmxCO0FBUUksdUJBQWUsRUFBRTtBQUNiRCxrQkFBUSxFQUFFLEtBREc7QUFFYkMsb0JBQVUsRUFBRTtBQUZDLFNBUnJCO0FBWUksZ0JBQVEsRUFBRTFCLFFBWmQ7QUFhSSxtQkFBVyxNQWJmO0FBY0ksWUFBSSxFQUFFMkIsT0FBTyxDQUFDM0IsUUFBRCxDQWRqQjtBQWVJLGVBQU8sRUFBRVU7QUFmYixTQWlCSSw0REFBQywyREFBRCxRQUNJLDREQUFDLCtEQUFELFFBQ0ksNERBQUMsd0VBQUQ7QUFBbUIsYUFBSyxFQUFDLFdBQXpCO0FBQXFDLGdCQUFRLEVBQUM7QUFBOUMsUUFESixDQURKLEVBSUksNERBQUMsK0RBQUQ7QUFBYyxlQUFPLEVBQUMsZ0JBQXRCO0FBQXVDLGdCQUFRLEVBQUM7QUFBaEQsUUFKSixDQWpCSixFQXVCSSw0REFBQywyREFBRDtBQUFVLGVBQU8sRUFBRTtBQUFuQixTQUNJLDREQUFDLCtEQUFELFFBQ0ksNERBQUMseUVBQUQ7QUFBb0IsYUFBSyxFQUFDLFdBQTFCO0FBQXNDLGdCQUFRLEVBQUM7QUFBL0MsUUFESixDQURKLEVBSUksNERBQUMsK0RBQUQ7QUFBYyxlQUFPLEVBQUMsbUJBQXRCO0FBQTBDLGdCQUFRLEVBQUM7QUFBbkQsUUFKSixDQXZCSixFQTZCSSw0REFBQywyREFBRDtBQUFVLGFBQUssRUFBRTtBQUFqQixTQUNJLDREQUFDLCtEQUFELFFBQ0ksNERBQUMsc0VBQUQ7QUFBaUIsYUFBSyxFQUFDLFdBQXZCO0FBQW1DLGdCQUFRLEVBQUM7QUFBNUMsUUFESixDQURKLEVBSUksNERBQUMsK0RBQUQ7QUFBYyxlQUFPLEVBQUMsUUFBdEI7QUFBK0IsZ0JBQVEsRUFBQztBQUF4QyxRQUpKLENBN0JKLENBWEosQ0FESjtBQWtESCxLQW5ERCxNQW1ETztBQUNILGFBQ0ksNERBQUMsMERBQUQ7QUFBUyxhQUFLLEVBQUMsdUJBQWY7QUFBdUMsc0JBQVcsS0FBbEQ7QUFBd0QsYUFBSztBQUE3RCxTQUNJLDREQUFDLHlEQUFEO0FBQVEsYUFBSyxFQUFDO0FBQWQsU0FDSSw0REFBQyx3RUFBRCxPQURKLFdBREosQ0FESjtBQU9IO0FBQ0osR0FoRUQ7O0FBa0VBLE1BQU1rQixHQUFHLEdBQUcsU0FBTkEsR0FBTSxDQUFDQyxFQUFELEVBQUsxRCxRQUFMLEVBQWUyRCxVQUFmLEVBQTJCckMsT0FBM0IsRUFBdUM7QUFDL0MsUUFBSXNDLFNBQVMsR0FBRyxFQUFoQjs7QUFDQSxRQUFJNUQsUUFBUSxLQUFLLEtBQWpCLEVBQXdCO0FBQ3BCNEQsZUFBUyxHQUFHekMsT0FBTyxDQUFDN0IsV0FBcEI7QUFDSDs7QUFDRCxXQUNJLDREQUFDLHlEQUFEO0FBQVEsY0FBUSxFQUFFLE9BQWxCO0FBQTJCLFFBQUUsRUFBRW9FLEVBQS9CO0FBQW1DLGVBQVMsRUFBRUU7QUFBOUMsT0FDSSw0REFBQywwREFBRCxRQUNJLDREQUFDLCtEQUFEO0FBQU0sZUFBUztBQUFmLE9BQ0ksNERBQUMsK0RBQUQ7QUFBTSxlQUFTLE1BQWY7QUFBZ0IsVUFBSSxNQUFwQjtBQUFxQixRQUFFLEVBQUUsRUFBekI7QUFBNkIsUUFBRSxFQUFFLENBQWpDO0FBQW9DLGVBQVMsRUFBRSxLQUEvQztBQUFzRCxhQUFPLEVBQUMsWUFBOUQ7QUFBMkUsZ0JBQVUsRUFBQztBQUF0RixPQUNJLDREQUFDLCtEQUFEO0FBQU0sVUFBSTtBQUFWLE9BQ0k7QUFBSyxTQUFHLEVBQUVDLHdEQUFWO0FBQWdCLGVBQVMsRUFBRUYsVUFBM0I7QUFBdUMsU0FBRyxFQUFDO0FBQTNDLE1BREosQ0FESixFQUlJLDREQUFDLCtEQUFEO0FBQU0sVUFBSTtBQUFWLE9BQ0ksNERBQUMsNkRBQUQ7QUFBWSxhQUFPLEVBQUMsSUFBcEI7QUFBeUIsZUFBUyxFQUFDLElBQW5DO0FBQXdDLGFBQU8sRUFBRTtBQUFqRCxPQUNLckMsT0FBTyxDQUFDRCxLQURiLENBREosQ0FKSixDQURKLEVBV0ksNERBQUMsK0RBQUQ7QUFBTSxlQUFTLE1BQWY7QUFBZ0IsVUFBSSxNQUFwQjtBQUFxQixRQUFFLEVBQUUsRUFBekI7QUFBNkIsUUFBRSxFQUFFLENBQWpDO0FBQW9DLGVBQVMsRUFBRSxLQUEvQztBQUFzRCxhQUFPLEVBQUMsVUFBOUQ7QUFBeUUsZ0JBQVUsRUFBQyxRQUFwRjtBQUE2RixlQUFTLEVBQUU7QUFBeEcsT0FFUUMsT0FBTyxDQUFDQyxRQUFSLENBQWlCdUMsR0FBakIsQ0FBcUIsVUFBQ0MsSUFBRCxFQUFVO0FBQzNCLGFBQ0ksNERBQUMsK0RBQUQ7QUFBTSxXQUFHLEVBQUVBLElBQUksQ0FBQ3ZDLEdBQWhCO0FBQXFCLFlBQUksTUFBekI7QUFBMEIsVUFBRSxFQUFFLEVBQTlCO0FBQWtDLFVBQUUsRUFBRTtBQUF0QyxTQUNJLDREQUFDLDZEQUFEO0FBQVksYUFBSyxFQUFFO0FBQW5CLFNBQ0ksNERBQUMsdURBQUQ7QUFBTyxZQUFJLEVBQUV1QyxJQUFJLENBQUN0QyxHQUFsQjtBQUF1QixlQUFPLEVBQUMsT0FBL0I7QUFBdUMsYUFBSyxFQUFDO0FBQTdDLFNBQXdEc0MsSUFBSSxDQUFDckMsS0FBN0QsQ0FESixDQURKLENBREo7QUFPSCxLQVJELENBRlIsQ0FYSixDQURKLEVBNEJLcUIsaUJBQWlCLEVBNUJ0QixDQURKLENBREo7QUFrQ0gsR0F2Q0Q7O0FBeUNBLFNBQ0ksNERBQUMsNkNBQUQsQ0FBTyxRQUFQLFFBQ0ksNERBQUMsd0RBQUQ7QUFBTyxVQUFJLENBQUNiO0FBQVosS0FDS3VCLEdBQUcsQ0FBQyxvQkFBRCxFQUF1QixLQUF2QixFQUE4QnRDLE9BQU8sQ0FBQzFCLE9BQXRDLEVBQStDNkIsT0FBL0MsQ0FEUixDQURKLEVBSUksNERBQUMsd0RBQUQ7QUFBTyxVQUFJWTtBQUFYLEtBQ0t1QixHQUFHLENBQUMsMEJBQUQsRUFBNkIsT0FBN0IsRUFBc0N0QyxPQUFPLENBQUNyQixTQUE5QyxFQUF5RHdCLE9BQXpELENBRFIsQ0FKSixFQU9JLDREQUFDLHVEQUFEO0FBQU0sVUFBSVk7QUFBVixLQUNJO0FBQUssV0FBTyxFQUFFbkMsU0FBZDtBQUF5QixRQUFJLEVBQUMsY0FBOUI7QUFBNkMsYUFBUyxFQUFFb0IsT0FBTyxDQUFDcEI7QUFBaEUsS0FDSSw0REFBQyxzREFBRDtBQUFLLFNBQUssRUFBQyxXQUFYO0FBQXVCLFFBQUksRUFBQyxPQUE1QjtBQUFvQyxrQkFBVztBQUEvQyxLQUNJLDREQUFDLDBFQUFELE9BREosQ0FESixDQURKLENBUEosQ0FESjtBQWlCSCxDOzs7Ozs7Ozs7Ozs7QUNsTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU2lFLE1BQVQsQ0FBZ0I5QyxLQUFoQixFQUF1QjtBQUVsQyxTQUNJLDJEQUFDLDhEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLGFBQVMsRUFBQyxLQUExQjtBQUFnQyxXQUFPLEVBQUMsUUFBeEM7QUFBaUQsY0FBVSxFQUFDO0FBQTVELEtBQ0ksMkRBQUMsOERBQUQ7QUFBTSxRQUFJO0FBQVYsS0FDSSwyREFBQyxrRUFBRCxPQURKLENBREosQ0FESjtBQU9ILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBUytDLFFBQVQsQ0FBa0IvQyxLQUFsQixFQUF5QjtBQUFBLGtCQUVKVSx1REFBUSxDQUFDLElBQUQsQ0FGSjtBQUFBO0FBQUEsTUFFN0JzQyxRQUY2QjtBQUFBLE1BRW5CQyxXQUZtQjs7QUFHcENDLGlFQUFPLENBQUMsaUJBQWlCbEQsS0FBSyxDQUFDbUQsSUFBTixJQUFjLFVBQS9CLENBQUQsRUFBNkMsRUFBN0MsRUFBaURGLFdBQWpELENBQVA7QUFDQSxNQUFNaEQsT0FBTyxHQUFHakMsZ0VBQVMsRUFBekI7O0FBRUEsTUFBTW9GLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDbEIsV0FDSSw0REFBQyw2Q0FBRCxDQUFPLFFBQVAsUUFDSTtBQUFLLGVBQVMsRUFBRW5ELE9BQU8sQ0FBQy9CO0FBQXhCLE9BQ0ksNERBQUMsbUVBQUQ7QUFBVSxVQUFJLEVBQUUsRUFBaEI7QUFBb0IsZ0JBQVUsRUFBRTtBQUFoQyxPQUNLOEUsUUFBUSxDQUFDSixHQUFULENBQWEsVUFBQ1MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQzNCLFVBQUlDLEdBQUcsR0FBSUQsS0FBSyxHQUFHLENBQVQsS0FBZ0IsQ0FBaEIsR0FBb0IsRUFBcEIsR0FBeUIsQ0FBbkM7QUFDQSxhQUNJLDREQUFDLHVFQUFEO0FBQWMsV0FBRyxFQUFFRCxJQUFJLENBQUNiLEVBQXhCO0FBQTRCLGlCQUFTLEVBQUUsZ0JBQXZDO0FBQXlELFlBQUksRUFBRWU7QUFBL0QsU0FDSTtBQUFLLFdBQUcsRUFBRUYsSUFBSSxDQUFDRyxLQUFmO0FBQXNCLFdBQUcsRUFBRUgsSUFBSSxDQUFDbEQ7QUFBaEMsUUFESixFQUVJLDREQUFDLDBFQUFEO0FBQ0ksYUFBSyxFQUFFa0QsSUFBSSxDQUFDbEQsS0FEaEI7QUFFSSxrQkFBVSxFQUNOLDREQUFDLHFFQUFELFFBQ0ksNERBQUMsK0RBQUQ7QUFBVSxlQUFLLEVBQUU7QUFBakIsVUFESjtBQUhSLFFBRkosQ0FESjtBQWFILEtBZkEsQ0FETCxDQURKLENBREosRUFxQkksNERBQUMsK0RBQUQ7QUFBTSxlQUFTLE1BQWY7QUFBZ0IsZUFBUyxFQUFDLEtBQTFCO0FBQWdDLGFBQU8sRUFBQyxRQUF4QztBQUFpRCxnQkFBVSxFQUFDO0FBQTVELE9BQ0ksNERBQUMsK0RBQUQ7QUFBTSxVQUFJO0FBQVYsT0FDSSw0REFBQyxrRUFBRDtBQUFTLFdBQUssRUFBQyxZQUFmO0FBQTRCLG9CQUFXLFlBQXZDO0FBQW9ELGVBQVMsRUFBQyxRQUE5RDtBQUF1RSxXQUFLO0FBQTVFLE9BQ0ksNERBQUMscUVBQUQ7QUFBWSxlQUFTLEVBQUU7QUFBdkIsT0FDSSw0REFBQyxvRUFBRDtBQUFlLFdBQUssRUFBRTtBQUF0QixNQURKLENBREosQ0FESixDQURKLENBckJKLENBREo7QUFpQ0gsR0FsQ0Q7O0FBb0NBLE1BQUk2QyxRQUFRLEtBQUssSUFBakIsRUFBdUI7QUFDbkIsV0FDSSw0REFBQyxpREFBRDtBQUFTLGVBQVMsRUFBRS9DLE9BQU8sQ0FBQ2hCLE9BQTVCO0FBQXFDLFdBQUssRUFBRWUsS0FBSyxDQUFDRztBQUFsRCxPQUNJLDREQUFDLGdEQUFELE9BREosQ0FESjtBQUtILEdBTkQsTUFNTztBQUNILFdBQ0ksNERBQUMsaURBQUQ7QUFBUyxlQUFTLEVBQUVGLE9BQU8sQ0FBQ2hCLE9BQTVCO0FBQXFDLFdBQUssRUFBRWUsS0FBSyxDQUFDRztBQUFsRCxPQUNNaUQsT0FBTyxFQURiLENBREo7QUFLSDtBQUNKLEM7Ozs7Ozs7Ozs7OztBQ3RFRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTSyxPQUFULENBQWlCekQsS0FBakIsRUFBd0I7QUFFbkMsTUFBTUMsT0FBTyxHQUFHakMsK0RBQVMsRUFBekI7QUFFQSxTQUNJO0FBQVMsYUFBUyxFQUFFaUMsT0FBTyxDQUFDaEI7QUFBNUIsS0FDSSwyREFBQyw0REFBRDtBQUFZLFdBQU8sRUFBQyxJQUFwQjtBQUF5QixhQUFTLEVBQUMsSUFBbkM7QUFBd0MsYUFBUyxFQUFFZ0IsT0FBTyxDQUFDRTtBQUEzRCxLQUNLSCxLQUFLLENBQUNHLEtBRFgsQ0FESixFQUlJO0FBQUksYUFBUyxFQUFFRixPQUFPLENBQUNWO0FBQXZCLElBSkosRUFLS1MsS0FBSyxDQUFDMEQsUUFMWCxDQURKO0FBU0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCRDtBQUVlLFNBQVNSLE9BQVQsQ0FBaUIzQyxHQUFqQixFQUFzQm9ELE1BQXRCLEVBQThCQyxRQUE5QixFQUF3Q0MsYUFBeEMsRUFBdUQ7QUFDbEVDLHlEQUFTLENBQUMsWUFBTTtBQUNaQyxTQUFLLENBQUN4RCxHQUFELEVBQU1vRCxNQUFOLENBQUwsQ0FDS0ssSUFETCxDQUNVLFVBQUNDLFFBQUQ7QUFBQSxhQUFjQSxRQUFRLENBQUNDLElBQVQsRUFBZDtBQUFBLEtBRFYsRUFFS0YsSUFGTCxDQUVVLFVBQUFDLFFBQVE7QUFBQSxhQUFJTCxRQUFRLENBQUNLLFFBQUQsQ0FBWjtBQUFBLEtBRmxCLFdBR1csVUFBQUUsS0FBSztBQUFBLGFBQUlOLGFBQWEsQ0FBQ00sS0FBRCxDQUFqQjtBQUFBLEtBSGhCO0FBS0gsR0FOUSxFQU1OLEVBTk0sQ0FBVDtBQU9ILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkQ7QUFDQTtBQUVBLElBQU1wRCxXQUFXLEdBQUdxRCw0REFBYSxDQUFDLEVBQUQsQ0FBakM7QUFFTyxTQUFTQyxtQkFBVCxDQUE2QnJFLEtBQTdCLEVBQW9DO0FBQUEsa0JBRWJVLHVEQUFRLENBQUM7QUFDL0IsWUFBUTtBQUR1QixHQUFELENBRks7QUFBQTtBQUFBLE1BRWhDNEQsS0FGZ0M7QUFBQSxNQUV6QkMsUUFGeUI7O0FBT3ZDckIsaUVBQU8sQ0FBQyxPQUFELEVBQVMsRUFBVCxFQUFhLFVBQUNzQixJQUFELEVBQVU7QUFDMUJELFlBQVEsQ0FBQztBQUNMLGNBQVFDLElBQUksQ0FBQzNEO0FBRFIsS0FBRCxDQUFSO0FBR0gsR0FKTSxDQUFQO0FBTUEsU0FDSSw0REFBQyxXQUFELENBQWEsUUFBYjtBQUFzQixTQUFLLG9CQUFNeUQsS0FBTjtBQUEzQixLQUNLdEUsS0FBSyxDQUFDMEQsUUFEWCxDQURKO0FBS0g7QUFFYzNDLDBFQUFmLEUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9idWlsZC9pbWFnZXMvbG9nby45ZGQ1NjIzZi5qcGdcIjsiLCJpbXBvcnQge2NyZWF0ZU11aVRoZW1lLCBtYWtlU3R5bGVzfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZShcclxuICAgIHtcclxuICAgICAgICBcInBhbGV0dGVcIjoge1xyXG4gICAgICAgICAgICBcImNvbW1vblwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImJsYWNrXCI6IFwicmdiYSgwLCAwLCAwLCAxKVwiLFxyXG4gICAgICAgICAgICAgICAgXCJ3aGl0ZVwiOiBcIiNmZmZcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcImJhY2tncm91bmRcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJwYXBlclwiOiBcInJnYmEoNTEsIDUxLCA1MSwgMSlcIixcclxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBcInJnYmEoMTUzLCAxNTMsIDE1MywgMSlcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcInByaW1hcnlcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJsaWdodFwiOiBcInJnYmEoMjI3LCAyMjcsIDIyNywgMSlcIixcclxuICAgICAgICAgICAgICAgIFwibWFpblwiOiBcInJnYmEoNTEsIDUxLCA1MSwgMSlcIixcclxuICAgICAgICAgICAgICAgIFwiZGFya1wiOiBcInJnYmEoNTEsIDUxLCA1MSwgMSlcIixcclxuICAgICAgICAgICAgICAgIFwiY29udHJhc3RUZXh0XCI6IFwicmdiYSgyMjcsIDIyNywgMjI3LCAxKVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwic2Vjb25kYXJ5XCI6IHtcclxuICAgICAgICAgICAgICAgIFwibGlnaHRcIjogXCJyZ2JhKDI1MiwgMjUyLCAyNTIsIDEpXCIsXHJcbiAgICAgICAgICAgICAgICBcIm1haW5cIjogXCJyZ2JhKDIwNCwgMjA0LCAyMDQsIDEpXCIsXHJcbiAgICAgICAgICAgICAgICBcImRhcmtcIjogXCJyZ2JhKDExMiwgMTEyLCAxMTIsIDEpXCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnRyYXN0VGV4dFwiOiBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMSlcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcImVycm9yXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibGlnaHRcIjogXCIjZTU3MzczXCIsXHJcbiAgICAgICAgICAgICAgICBcIm1haW5cIjogXCJyZ2JhKDE1NCwgMCwgMCwgMSlcIixcclxuICAgICAgICAgICAgICAgIFwiZGFya1wiOiBcIiNkMzJmMmZcIiwgXCJjb250cmFzdFRleHRcIjogXCIjZmZmXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJ0ZXh0XCI6IHtcclxuICAgICAgICAgICAgICAgIFwicHJpbWFyeVwiOiBcInJnYmEoMjQzLCAyNDMsIDI0MywgMC44NylcIixcclxuICAgICAgICAgICAgICAgIFwic2Vjb25kYXJ5XCI6IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU0KVwiLFxyXG4gICAgICAgICAgICAgICAgXCJkaXNhYmxlZFwiOiBcInJnYmEoNzAsIDAsIDAsIDAuMzgpXCIsXHJcbiAgICAgICAgICAgICAgICBcImhpbnRcIjogXCJyZ2JhKDE2MiwgMTE2LCAxMTYsIDAuMzgpXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ0eXBvZ3JhcGh5XCI6IHtcclxuICAgICAgICAgICAgXCJoNFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImZvbnRGYW1pbHlcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIFwibG9uZ19zaG90XCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiaDVcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJmb250RmFtaWx5XCI6IFtcclxuICAgICAgICAgICAgICAgICAgICBcImxvbmdfc2hvdFwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4pO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICB9LFxyXG4gICAgaGVhZGVyT25Ub3A6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgICAgYm94U2hhZG93OiAnbm9uZScsXHJcbiAgICB9LFxyXG4gICAgbG9nb0JpZzoge1xyXG4gICAgICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgICAgIHdpZHRoOiAxMDAsXHJcbiAgICAgICAgaGVpZ2h0OiAxMDAsXHJcbiAgICB9LFxyXG4gICAgbG9nb1NtYWxsOiB7XHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICAgICAgd2lkdGg6IDMwLFxyXG4gICAgICAgIGhlaWdodDogMzAsXHJcbiAgICB9LFxyXG4gICAgc2Nyb2xsVG9wOiB7XHJcbiAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICAgICAgYm90dG9tOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgICAgIHJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgfSxcclxuICAgIHNlY3Rpb246IHtcclxuICAgICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoOCksXHJcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrLFxyXG4gICAgfSxcclxuICAgIHNlY3Rpb25Icjoge1xyXG4gICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyayxcclxuICAgIH0sXHJcbiAgICBmb290ZXJCb3g6IHtcclxuICAgICAgICBwYWRkaW5nOiA0MFxyXG4gICAgfSxcclxufSkpO1xyXG4iLCJcbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgJy4uL2Nzcy9hcHAuY3NzJztcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcCc7XG5cbi8vIE5lZWQgalF1ZXJ5PyBJbnN0YWxsIGl0IHdpdGggXCJ5YXJuIGFkZCBqcXVlcnlcIiwgdGhlbiB1bmNvbW1lbnQgdG8gaW1wb3J0IGl0LlxuLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuUmVhY3RET00ucmVuZGVyKDxSb3V0ZXI+PEFwcCAvPjwvUm91dGVyPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xyXG5pbXBvcnQge0NvbnRhaW5lcn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7VXNlckNvbnRleHRQcm92aWRlcn0gZnJvbSBcIi4uL3Byb3ZpZGVyL1VzZXJDb250ZXh0XCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XHJcbmltcG9ydCB7VGhlbWVQcm92aWRlcn0gZnJvbSBcIkBtYXRlcmlhbC11aS9zdHlsZXNcIjtcclxuaW1wb3J0IHt0aGVtZSwgdXNlU3R5bGVzfSBmcm9tIFwiLi4vU3R5bGVzL1RoZW1lXCJcclxuaW1wb3J0IE5ld3NMaXN0IGZyb20gXCIuL05ld3NMaXN0XCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHByb3BzKSB7XHJcblxyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFVzZXJDb250ZXh0UHJvdmlkZXI+XHJcbiAgICAgICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyB3aWR0aD17XCIxMDAlXCJ9IHNyYz17XCJodHRwczovL2JhdHRsZWZvcnZpbGVnaXMuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzEwL2JhdHRsZS1mb3ItdmlsZWdpcy5qcGdcIn0gYWx0PXtcInBsYWNlaG9sZGVyIGltYWdlXCJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q3NzQmFzZWxpbmUvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmV3c0xpc3QgdGl0bGU9e1wiSW4gRXZpZGVuemFcIn0gdHlwZT17XCJmZWF0dXJlZFwifS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOZXdzTGlzdCB0aXRsZT17XCJUb3JuYW5kbyBJbmRpZXRyb1wifSB0eXBlPXtcIm9sZFwifS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvb3Rlci8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgICAgIDwvVXNlckNvbnRleHRQcm92aWRlcj5cclxuICAgICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtCb3gsIENvbnRhaW5lciwgR3JpZCwgTGluaywgUGFwZXJ9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQge3VzZVN0eWxlc30gZnJvbSBcIi4uL1N0eWxlcy9UaGVtZVwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZFwiO1xyXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50XCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIocHJvcHMpIHtcclxuXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UGFwZXIgZWxldmF0aW9uPXszfSBjb21wb25lbnQ9e1wiZm9vdGVyXCJ9PlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb290ZXJCb3h9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj1cInJvd1wiIGp1c3RpZnk9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXs0fSBzbT17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfSBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiBndXR0ZXJCb3R0b20+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mb3JtYXppb25pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJoMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhbmUgTmVyb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29tcG9uZW50PVwicFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFzc29jaWF6aW9uZSBjdWx0dXJhbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbmFsaXp6YXRhIGFsbGEgcHJvbW96aW9uZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWQgYXR0dWF6aW9uZSBkZWwgZ2lvY28gZGkgcnVvbG8gZGFsIHZpdm9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1IHR1dHRvIGlsIHRlcnJpdG9yaW8gbmF6aW9uYWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXs0fSBzbT17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfSBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiBndXR0ZXJCb3R0b20+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29udGF0dGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbXBvbmVudD1cInBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTY3JpdmkgdW5hIG1haWwgYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29tcG9uZW50PVwicFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGNvbG9yPXtcInNlY29uZGFyeVwifSBocmVmPXsnbWFpbHRvOnByZXNpZGVudGVAY2FuZS1uZXJvLml0J30+cHJlc2lkZW50ZUBjYW5lLW5lcm8uaXQ8L0xpbms+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgY29sb3I9e1wic2Vjb25kYXJ5XCJ9IGhyZWY9eydtYWlsdG86cHJlc2lkZW50ZUBjYW5lLW5lcm8uaXQnfT5kaXJldHRpdm9AY2FuZS1uZXJvLml0PC9MaW5rPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGNvbG9yPXtcInNlY29uZGFyeVwifSBocmVmPXsnbWFpbHRvOnByZXNpZGVudGVAY2FuZS1uZXJvLml0J30+c3RhZmZAY2FuZS1uZXJvLml0PC9MaW5rPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGNvbG9yPXtcInNlY29uZGFyeVwifSBocmVmPXsnbWFpbHRvOnByZXNpZGVudGVAY2FuZS1uZXJvLml0J30+dGVjaEBjYW5lLW5lcm8uaXQ8L0xpbms+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXs0fSBzbT17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfSBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiBndXR0ZXJCb3R0b20+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mb3JtYXppb25pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJoMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhbmUgTmVyb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29tcG9uZW50PVwicFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFzc29jaWF6aW9uZSBjdWx0dXJhbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbmFsaXp6YXRhIGFsbGEgcHJvbW96aW9uZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWQgYXR0dWF6aW9uZSBkZWwgZ2lvY28gZGkgcnVvbG8gZGFsIHZpdm9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1IHR1dHRvIGlsIHRlcnJpdG9yaW8gbmF6aW9uYWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9QYXBlcj5cclxuICAgICk7XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gICAgQXBwQmFyLCBUb29sYmFyLCBNZW51LCBNZW51SXRlbSwgQnV0dG9uLCBTbGlkZSwgWm9vbSwgQm94LFxyXG4gICAgVG9vbHRpcCwgRmFiLCBJY29uQnV0dG9uLCBUeXBvZ3JhcGh5LCB1c2VTY3JvbGxUcmlnZ2VyLFxyXG4gICAgTGluaywgQ2lyY3VsYXJQcm9ncmVzcywgQXZhdGFyLCBMaXN0SXRlbUljb24sIExpc3RJdGVtVGV4dFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01lbnUnO1xyXG5pbXBvcnQgS2V5Ym9hcmRBcnJvd1VwSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvS2V5Ym9hcmRBcnJvd1VwJztcclxuaW1wb3J0IEFjY291bnRDaXJjbGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BY2NvdW50Q2lyY2xlJztcclxuaW1wb3J0IE1lZXRpbmdSb29tSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWVldGluZ1Jvb20nO1xyXG5pbXBvcnQgTW9uZXRpemF0aW9uT25JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Nb25ldGl6YXRpb25Pbic7XHJcbmltcG9ydCB7dGhlbWUsIHVzZVN0eWxlc30gZnJvbSBcIi4uL1N0eWxlcy9UaGVtZVwiO1xyXG5pbXBvcnQgbG9nbyBmcm9tIFwiLi4vLi4vaW1hZ2VzL2xvZ28uanBnXCI7XHJcbmltcG9ydCBVc2VyQ29udGV4dCBmcm9tIFwiLi4vcHJvdmlkZXIvVXNlckNvbnRleHRcIjtcclxuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcclxuXHJcbmNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICB0aXRsZTogJ0NhbmUgbmVybycsXHJcbiAgICBtZW51TGluazogW1xyXG4gICAgICAgIHtrZXk6IDEsIHVybDogJyMnLCBsYWJlbDogJ0NoaSBTaWFtbyd9LFxyXG4gICAgICAgIHtrZXk6IDIsIHVybDogJyMnLCBsYWJlbDogJ0xlIE5vc3RyZSBDcm9uYWNoZSd9LFxyXG4gICAgICAgIHtrZXk6IDMsIHVybDogJyMnLCBsYWJlbDogJ05ld3MnfSxcclxuICAgICAgICB7a2V5OiA0LCB1cmw6ICcjJywgbGFiZWw6ICdDYWxlbmRhcmlvJ30sXHJcbiAgICAgICAge2tleTogNSwgdXJsOiAnIycsIGxhYmVsOiAnU3RhZmYnfSxcclxuICAgICAgICB7a2V5OiA2LCB1cmw6ICcjJywgbGFiZWw6ICdDb250YXR0aSd9LFxyXG4gICAgXVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKHByb3BzKSB7XHJcblxyXG4gICAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IHVzZXIgPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KS51c2VyO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgdHJpZ2dlciA9IHVzZVNjcm9sbFRyaWdnZXIoe1xyXG4gICAgICAgIFwiZGlzYWJsZUh5c3RlcmVzaXNcIjogdHJ1ZSxcclxuICAgICAgICBcInRocmVzaG9sZFwiOiAyMDBcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gZXZlbnQgPT4ge1xyXG4gICAgICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRBbmNob3JFbChudWxsKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gZXZlbnQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFuY2hvciA9IChldmVudC50YXJnZXQub3duZXJEb2N1bWVudCB8fCBkb2N1bWVudCkucXVlcnlTZWxlY3RvcignI2JhY2stdG8tdG9wLWFuY2hvcicpO1xyXG5cclxuICAgICAgICBpZiAoYW5jaG9yKSB7XHJcbiAgICAgICAgICAgIGFuY2hvci5zY3JvbGxJbnRvVmlldyh7YmVoYXZpb3I6ICdzbW9vdGgnLCBibG9jazogJ2NlbnRlcid9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGxvZ2dlZEluQ29tcG9uZW50ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChudWxsID09PSB1c2VyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8Q2lyY3VsYXJQcm9ncmVzcy8+O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodXNlci5pc0xvZ2dlZCA9PT0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwibG9naW5NZW51XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgYWx0PXt1c2VyLnVzZXJuYW1lfSBzcmM9e3VzZXIuYXZhdGFyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyLmZpcnN0TmFtZS5zbGljZSgwLCAxKX17dXNlci5sYXN0TmFtZS5zbGljZSgwLCAxKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibG9naW5NZW51XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxldmF0aW9uPXszfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRDb250ZW50QW5jaG9yRWw9e251bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuY2hvck9yaWdpbj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWw6ICdib3R0b20nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogJ3RvcCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiAncmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmNob3JFbD17YW5jaG9yRWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtlZXBNb3VudGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW49e0Jvb2xlYW4oYW5jaG9yRWwpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY291bnRDaXJjbGVJY29uIGNvbG9yPVwic2Vjb25kYXJ5XCIgZm9udFNpemU9XCJzbWFsbFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiSWwgdHVvIFByb2ZpbG9cIiBmb250U2l6ZT1cInNtYWxsXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gZGl2aWRlcj17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb25ldGl6YXRpb25Pbkljb24gY29sb3I9XCJzZWNvbmRhcnlcIiBmb250U2l6ZT1cInNtYWxsXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJMYSB0dWEgSXNjcml6aW9uZVwiIGZvbnRTaXplPVwic21hbGxcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBkZW5zZT17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZWV0aW5nUm9vbUljb24gY29sb3I9XCJzZWNvbmRhcnlcIiBmb250U2l6ZT1cInNtYWxsXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJMb2dvdXRcIiBmb250U2l6ZT1cInNtYWxsXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIkFjY2VkaSBhbCB0dW8gYWNjb3VudFwiIGFyaWEtbGFiZWw9XCJhZGRcIiBhcnJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3VudENpcmNsZUljb24vPiBMb2dpblxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYmFyID0gKGlkLCBwb3NpdGlvbiwgbG9nb1N0eWxlcywgb3B0aW9ucykgPT4ge1xyXG4gICAgICAgIGxldCBjbGFzc05hbWUgPSAnJztcclxuICAgICAgICBpZiAocG9zaXRpb24gPT09ICd0b3AnKSB7XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGNsYXNzZXMuaGVhZGVyT25Ub3A7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxBcHBCYXIgcG9zaXRpb249e1wiZml4ZWRcIn0gaWQ9e2lkfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XHJcbiAgICAgICAgICAgICAgICA8VG9vbGJhcj5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHhzPXsxMn0gbWQ9ezZ9IGRpcmVjdGlvbj17XCJyb3dcIn0ganVzdGlmeT1cImZsZXgtc3RhcnRcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtsb2dvfSBjbGFzc05hbWU9e2xvZ29TdHlsZXN9IGFsdD1cIkNhbmUgTmVybyAtIEdEUlwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCIgY29tcG9uZW50PVwiaDFcIiBkaXNwbGF5PXtcImlubGluZVwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbnMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHhzPXsxMn0gbWQ9ezZ9IGRpcmVjdGlvbj17XCJyb3dcIn0ganVzdGlmeT1cImZsZXgtZW5kXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGNvbXBvbmVudD17XCJuYXZcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5tZW51TGluay5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGtleT17aXRlbS5rZXl9IGl0ZW0geHM9ezEyfSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgYWxpZ249e1wiY2VudGVyXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayAgaHJlZj17aXRlbS51cmx9IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwiaW5oZXJpdFwiPntpdGVtLmxhYmVsfTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICB7Lyo8bmF2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51TGlua0xpc3R9PiovfVxyXG4gICAgICAgICAgICAgICAgICAgIHsvKjwvbmF2PiovfVxyXG4gICAgICAgICAgICAgICAgICAgIHtsb2dnZWRJbkNvbXBvbmVudCgpfVxyXG4gICAgICAgICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgICAgICA8L0FwcEJhcj5cclxuICAgICAgICApO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPFNsaWRlIGluPXshdHJpZ2dlcn0+XHJcbiAgICAgICAgICAgICAgICB7YmFyKFwiYmFjay10by10b3AtYW5jaG9yXCIsIFwidG9wXCIsIGNsYXNzZXMubG9nb0JpZywgb3B0aW9ucyl9XHJcbiAgICAgICAgICAgIDwvU2xpZGU+XHJcbiAgICAgICAgICAgIDxTbGlkZSBpbj17dHJpZ2dlcn0+XHJcbiAgICAgICAgICAgICAgICB7YmFyKFwiYmFjay10by10b3AtYW5jaG9yLWZpeGVkXCIsIFwiZml4ZWRcIiwgY2xhc3Nlcy5sb2dvU21hbGwsIG9wdGlvbnMpfVxyXG4gICAgICAgICAgICA8L1NsaWRlPlxyXG4gICAgICAgICAgICA8Wm9vbSBpbj17dHJpZ2dlcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e3Njcm9sbFRvcH0gcm9sZT1cInByZXNlbnRhdGlvblwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5zY3JvbGxUb3B9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGYWIgY29sb3I9XCJzZWNvbmRhcnlcIiBzaXplPVwic21hbGxcIiBhcmlhLWxhYmVsPVwic2Nyb2xsIGJhY2sgdG8gdG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxLZXlib2FyZEFycm93VXBJY29uLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ZhYj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1pvb20+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtDaXJjdWxhclByb2dyZXNzfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvYWRlcihwcm9wcykge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj1cInJvd1wiIGp1c3RpZnk9XCJjZW50ZXJcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcy8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICApO1xyXG59IiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHt0aGVtZSwgdXNlU3R5bGVzfSBmcm9tIFwiLi4vU3R5bGVzL1RoZW1lXCI7XHJcbmltcG9ydCB7Q2lyY3VsYXJQcm9ncmVzcywgR3JvdywgTGluaywgVHlwb2dyYXBoeSwgWm9vbX0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB1c2VIdHRwIGZyb20gXCIuLi9ob29rcy9Vc2VIdHRwXCI7XHJcbmltcG9ydCBHcmlkTGlzdCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZExpc3RcIjtcclxuaW1wb3J0IEdyaWRMaXN0VGlsZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZExpc3RUaWxlXCI7XHJcbmltcG9ydCBHcmlkTGlzdFRpbGVCYXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRMaXN0VGlsZUJhclwiO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xyXG5pbXBvcnQgSW5mb0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0luZm8nO1xyXG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwiLi9TZWN0aW9uXCI7XHJcbmltcG9ydCBBdXRvcmVuZXdJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BdXRvcmVuZXcnO1xyXG5pbXBvcnQgR3JpZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiO1xyXG5pbXBvcnQgVG9vbHRpcCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbHRpcFwiO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuL0xvYWRlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3c0xpc3QocHJvcHMpIHtcclxuXHJcbiAgICBjb25zdCBbbmV3c0xpc3QsIHNldE5ld3NMaXN0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgdXNlSHR0cCgnL25ld3M/dHlwZT0nICsgKHByb3BzLnR5cGUgfHwgJ2ZlYXR1cmVkJyksIHt9LCBzZXROZXdzTGlzdCk7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgY29uc3QgY29udGVudCA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZExpc3QgY29scz17MTJ9IGNlbGxIZWlnaHQ9ezQwMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtuZXdzTGlzdC5tYXAoKG5ld3MsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29sID0gKGluZGV4ICUgMykgPT09IDAgPyAxMiA6IDY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkTGlzdFRpbGUga2V5PXtuZXdzLmlkfSBjbGFzc05hbWU9e1wibmV3cy1jb250YWluZXJcIn0gY29scz17Y29sfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e25ld3MuaW1hZ2V9IGFsdD17bmV3cy50aXRsZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExpc3RUaWxlQmFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17bmV3cy50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbkljb249e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5mb0ljb24gY29sb3I9e1wic2Vjb25kYXJ5XCJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGlzdFRpbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRMaXN0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPVwicm93XCIganVzdGlmeT1cImNlbnRlclwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIlZlZGkgQWx0cmlcIiBhcmlhLWxhYmVsPVwiVmVkaSBBbHRyaVwiIHBsYWNlbWVudD1cImJvdHRvbVwiIGFycm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gY2xhc3NOYW1lPXtcIm5ld3NfbG9hZF9tb3JlXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdXRvcmVuZXdJY29uIGNvbG9yPXtcInNlY29uZGFyeVwifS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gICAgaWYgKG5ld3NMaXN0ID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb259IHRpdGxlPXtwcm9wcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICA8TG9hZGVyIC8+XHJcbiAgICAgICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8U2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbn0gdGl0bGU9e3Byb3BzLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgIHsgY29udGVudCgpIH1cclxuICAgICAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1R5cG9ncmFwaHl9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQge3VzZVN0eWxlc30gZnJvbSBcIi4uL1N0eWxlcy9UaGVtZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VjdGlvbihwcm9wcykge1xyXG5cclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9ufT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCIgY29tcG9uZW50PVwiaDRcIiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLnRpdGxlfVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxociBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbkhyfS8+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApO1xyXG59IiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VIdHRwKHVybCwgcGFyYW1zLCBjYWxsYmFjaywgZXJyb3JDYWxsYmFjaykge1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaCh1cmwsIHBhcmFtcylcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IGNhbGxiYWNrKHJlc3BvbnNlKSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGVycm9yQ2FsbGJhY2soZXJyb3IpKVxyXG4gICAgICAgICAgICA7XHJcbiAgICB9LCBbXSk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7Y3JlYXRlQ29udGV4dCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHVzZUh0dHAgZnJvbSBcIi4uL2hvb2tzL1VzZUh0dHBcIjtcclxuXHJcbmNvbnN0IFVzZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dChbXSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVXNlckNvbnRleHRQcm92aWRlcihwcm9wcykge1xyXG5cclxuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgICd1c2VyJzogbnVsbFxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIHVzZUh0dHAoJy91c2VyJyx7fSwgKGRhdGEpID0+IHtcclxuICAgICAgICBzZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICd1c2VyJzogZGF0YS51c2VyXHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFVzZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7Li4uc3RhdGV9fT5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvVXNlckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyQ29udGV4dDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==