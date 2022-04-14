"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkjupiter_clothing"] = self["webpackChunkjupiter_clothing"] || []).push([["client_src_components_Overview_StyleSelector_jsx"],{

/***/ "./client/src/components/Overview/StyleSelector.jsx":
/*!**********************************************************!*\
  !*** ./client/src/components/Overview/StyleSelector.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Common_imageNotAvailable_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Common/imageNotAvailable.png */ \"./client/src/components/Common/imageNotAvailable.png\");\n/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */\n\n/* eslint-disable jsx-a11y/click-events-have-key-events */\n\n\n\nvar PropTypes = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n\nfunction StyleSelector(_ref) {\n  var currentStyle = _ref.currentStyle,\n      styles = _ref.styles,\n      changeStyle = _ref.changeStyle;\n\n  var generateTable = function generateTable(list) {\n    var items = [];\n\n    var _loop = function _loop(i) {\n      var style = list[i];\n      var thumb = style.photos[0].thumbnail_url || _Common_imageNotAvailable_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n\n      if (style.style_id === currentStyle.style_id) {\n        items.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"td\", {\n          key: style.style_id,\n          onClick: function onClick() {\n            return changeStyle(style);\n          }\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n          className: \"thumbnailcontainer selected\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n          className: \"stylethumbnail\",\n          src: thumb,\n          alt: style.name\n        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n          className: \"checkmark\"\n        }, \"\\u2713\"))));\n      } else {\n        items.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"td\", {\n          key: style.style_id,\n          onClick: function onClick() {\n            return changeStyle(style);\n          }\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n          className: \"thumbnailcontainer\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n          className: \"stylethumbnail\",\n          src: thumb,\n          alt: style.name\n        }))));\n      }\n    };\n\n    for (var i = 0; i < list.length; i += 1) {\n      _loop(i);\n    }\n\n    var table = [];\n\n    for (var _i = 0; _i < items.length; _i += 4) {\n      var row = items.slice(_i, _i + 4);\n      table.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"tr\", {\n        key: _i\n      }, row));\n    }\n\n    return table;\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"style-selector right-column\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"currentstyle\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"b\", null, 'STYLE > '), currentStyle.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"style-table\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"table\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"tbody\", null, generateTable(styles)))));\n}\n\nStyleSelector.propTypes = {\n  currentStyle: PropTypes.instanceOf(Object).isRequired,\n  styles: PropTypes.instanceOf(Object).isRequired,\n  changeStyle: PropTypes.func.isRequired\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyleSelector);\n\n//# sourceURL=webpack://jupiter-clothing/./client/src/components/Overview/StyleSelector.jsx?");

/***/ }),

/***/ "./client/src/components/Common/imageNotAvailable.png":
/*!************************************************************!*\
  !*** ./client/src/components/Common/imageNotAvailable.png ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"aa5238071308b75780c1deed225c78cf.png\");\n\n//# sourceURL=webpack://jupiter-clothing/./client/src/components/Common/imageNotAvailable.png?");

/***/ })

}]);