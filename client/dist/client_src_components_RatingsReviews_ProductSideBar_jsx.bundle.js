"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkjupiter_clothing"] = self["webpackChunkjupiter_clothing"] || []).push([["client_src_components_RatingsReviews_ProductSideBar_jsx"],{

/***/ "./client/src/components/RatingsReviews/ProductSideBar.jsx":
/*!*****************************************************************!*\
  !*** ./client/src/components/RatingsReviews/ProductSideBar.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction ProductSideBar(_ref) {\n  var metadata = _ref.metadata;\n  var characteristics = metadata.characteristics;\n  var arr = Object.keys(characteristics);\n  var obj = {\n    Size: ['small', 'perfect', 'wide'],\n    Width: ['narrow', 'perfect', 'wide'],\n    Comfort: ['poor', 'Ok', 'perfect'],\n    Quality: ['poor', 'Ok', 'perfect'],\n    Length: ['short', 'perfect', 'long'],\n    Fit: ['tight', 'perfect', 'long']\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"p\",\n    style: {\n      marginTop: 10\n    }\n  }, arr.map(function (name) {\n    var value = Number(characteristics[name].value) * 60 - 5;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      key: name,\n      style: {\n        marginBottom: 10\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h5\", null, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"p_breakdown\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"canvas\", {\n      width: \"100\",\n      height: \"7\",\n      className: \"bar\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"canvas\", {\n      width: \"90\",\n      height: \"7\",\n      style: {\n        marginLeft: 5\n      },\n      className: \"bar\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"canvas\", {\n      width: \"100\",\n      height: \"7\",\n      style: {\n        marginLeft: 5\n      },\n      className: \"bar\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n      className: \"fa-solid fa-caret-down movebar\",\n      style: {\n        left: value\n      }\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"text-container\"\n    }, obj[name].map(function (describe) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n        key: describe\n      }, describe);\n    })));\n  }));\n} // (\n//   <div className=\"p\">\n//     <h5>This is product sidebar</h5>\n//     <div className=\"p_breakdown\">\n//       <canvas width=\"100\" height=\"7\" className=\"bar\" />\n//       <canvas width=\"90\" height=\"7\" style={{ marginLeft: 5 }} className=\"bar\" />\n//       <canvas width=\"100\" height=\"7\" style={{ marginLeft: 5 }} className=\"bar\" />\n//       <i className=\"fa-solid fa-caret-down movebar\" />\n//     </div>\n//   </div>\n// );\n\n\nProductSideBar.propTypes = {\n  metadata: prop_types__WEBPACK_IMPORTED_MODULE_1___default().instanceOf(Object).isRequired\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductSideBar);\n\n//# sourceURL=webpack://jupiter-clothing/./client/src/components/RatingsReviews/ProductSideBar.jsx?");

/***/ })

}]);