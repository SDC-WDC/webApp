"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkjupiter_clothing"] = self["webpackChunkjupiter_clothing"] || []).push([["client_src_components_RatingsReviews_jsx"],{

/***/ "./client/src/components/RatingsReviews.jsx":
/*!**************************************************!*\
  !*** ./client/src/components/RatingsReviews.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n/* eslint-disable no-unused-vars */\n\n/* eslint-disable react/no-unused-state */\n\n/* eslint-disable no-console */\n\n\n\nvar ReviewList = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_6__.lazy)(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_emotion_react_dist_emotion-react_browser_esm_js-node_modules_babel_runti-b64d34\"), __webpack_require__.e(\"vendors-node_modules_mui_material_Button_Button_js-node_modules_mui_material_Rating_Rating_js\"), __webpack_require__.e(\"vendors-node_modules_mui_icons-material_Star_js-node_modules_mui_material_Box_Box_js-node_mod-c671c6\"), __webpack_require__.e(\"client_src_components_RatingsReviews_ReviewList_jsx\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./RatingsReviews/ReviewList.jsx */ \"./client/src/components/RatingsReviews/ReviewList.jsx\"));\n});\nvar RatingSideBar = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_6__.lazy)(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_emotion_react_dist_emotion-react_browser_esm_js-node_modules_babel_runti-b64d34\"), __webpack_require__.e(\"vendors-node_modules_mui_material_Button_Button_js-node_modules_mui_material_Rating_Rating_js\"), __webpack_require__.e(\"vendors-node_modules_mui_material_LinearProgress_LinearProgress_js\"), __webpack_require__.e(\"client_src_components_RatingsReviews_RatingSideBar_jsx\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./RatingsReviews/RatingSideBar.jsx */ \"./client/src/components/RatingsReviews/RatingSideBar.jsx\"));\n});\nvar ProductSideBar = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_6__.lazy)(function () {\n  return __webpack_require__.e(/*! import() */ \"client_src_components_RatingsReviews_ProductSideBar_jsx\").then(__webpack_require__.bind(__webpack_require__, /*! ./RatingsReviews/ProductSideBar.jsx */ \"./client/src/components/RatingsReviews/ProductSideBar.jsx\"));\n});\n\nvar RatingsReviews = /*#__PURE__*/function (_React$Component) {\n  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(RatingsReviews, _React$Component);\n\n  var _super = _createSuper(RatingsReviews);\n\n  function RatingsReviews(props) {\n    var _this;\n\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, RatingsReviews);\n\n    _this = _super.call(this, props);\n    var _this$props$product = _this.props.product,\n        id = _this$props$product.id,\n        name = _this$props$product.name;\n    _this.state = {\n      product: {\n        pId: id,\n        pName: name\n      },\n      reviews: [],\n      total: 0,\n      metadata: {},\n      sort: 'relevance',\n      count: 2,\n      filters: []\n    };\n    _this.clickHelpful = _this.clickHelpful.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    _this.changeSort = _this.changeSort.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    _this.clickFilters = _this.clickFilters.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    _this.submitReview = _this.submitReview.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    _this.clickReport = _this.clickReport.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    return _this;\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(RatingsReviews, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.fetchReviews();\n    } // * Fetch all reviews and metadata.\n    // * Init state\n\n  }, {\n    key: \"fetchReviews\",\n    value: function fetchReviews() {\n      var _this2 = this;\n\n      var _this$state = this.state,\n          pId = _this$state.product.pId,\n          sort = _this$state.sort;\n      axios__WEBPACK_IMPORTED_MODULE_7___default().get(\"/reviews?product_id=\".concat(pId, \"&sort=\").concat(sort, \"&count=\", 1000)).then(function (_ref) {\n        var data = _ref.data;\n\n        // console.log(data);\n        // let reviews = data.results.slice(0, count);\n        var reviews = _this2.filterSelected(data.results); // console.log(reviews);\n\n\n        _this2.setState({\n          reviews: reviews,\n          total: reviews.length\n        });\n\n        return axios__WEBPACK_IMPORTED_MODULE_7___default().get(\"/reviews/meta?product_id=\".concat(pId));\n      }).then(function (_ref2) {\n        var data = _ref2.data;\n\n        // console.log(data);\n        _this2.setState({\n          metadata: data\n        });\n      });\n    }\n  }, {\n    key: \"filterSelected\",\n    value: function filterSelected(arr) {\n      var filters = this.state.filters;\n      return arr.filter(function (review) {\n        return filters.includes(review.rating) || filters.length === 0;\n      });\n    }\n  }, {\n    key: \"clickFilters\",\n    value: function clickFilters(rating) {\n      var _this3 = this;\n\n      var filters = this.state.filters;\n\n      if (!rating) {\n        this.setState({\n          filters: []\n        }, function () {\n          return _this3.fetchReviews();\n        });\n      } else {\n        // console.log(`rating is ${rating}`);\n        var index = filters.indexOf(rating);\n\n        if (index !== -1) {\n          filters.splice(index, 1);\n          this.setState({\n            filters: filters\n          }, function () {\n            return _this3.fetchReviews();\n          });\n        } else {\n          filters.push(rating);\n          this.setState({\n            filters: filters\n          }, function () {\n            return _this3.fetchReviews();\n          });\n        }\n      }\n    } // *------------------------- For Review List ----------------------\n\n  }, {\n    key: \"clickHelpful\",\n    value: function clickHelpful(id) {\n      var _this4 = this;\n\n      axios__WEBPACK_IMPORTED_MODULE_7___default().put(\"/reviews/\".concat(id, \"/helpful\")).then(function () {\n        // console.log('click update');\n        _this4.fetchReviews();\n      });\n    }\n  }, {\n    key: \"clickReport\",\n    value: function clickReport(id) {\n      var _this5 = this;\n\n      axios__WEBPACK_IMPORTED_MODULE_7___default().put(\"/reviews/\".concat(id, \"/report\")).then(function () {\n        _this5.fetchReviews();\n      });\n    }\n  }, {\n    key: \"changeSort\",\n    value: function changeSort(e) {\n      var _this6 = this;\n\n      // console.log(e.target.value);\n      this.setState({\n        sort: e.target.value\n      }, function () {\n        _this6.fetchReviews();\n      });\n    }\n  }, {\n    key: \"submitReview\",\n    value: function submitReview(review) {\n      var _this7 = this;\n\n      axios__WEBPACK_IMPORTED_MODULE_7___default().post('/reviews', review).then(function (res) {\n        // console.log(res);\n        _this7.fetchReviews();\n      });\n    } // !------------------------- For Review List end ----------------------\n\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$state2 = this.state,\n          product = _this$state2.product,\n          reviews = _this$state2.reviews,\n          metadata = _this$state2.metadata,\n          total = _this$state2.total,\n          filters = _this$state2.filters;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(\"div\", {\n        className: \"review-container\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(\"div\", {\n        className: \"t\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(\"h3\", null, \"Ratings & Reviews\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(ReviewList, {\n        product: product,\n        metadata: metadata,\n        reviews: reviews,\n        total: total,\n        sort: this.changeSort,\n        report: this.clickReport,\n        helpful: this.clickHelpful,\n        submitReview: this.submitReview\n      }), Object.keys(metadata).length !== 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(RatingSideBar, {\n        filters: filters,\n        metadata: metadata,\n        clickFilters: this.clickFilters\n      }) : null, Object.keys(metadata).length !== 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(ProductSideBar, {\n        metadata: metadata\n      }) : null);\n    }\n  }]);\n\n  return RatingsReviews;\n}((react__WEBPACK_IMPORTED_MODULE_6___default().Component));\n\nRatingsReviews.propTypes = {\n  product: prop_types__WEBPACK_IMPORTED_MODULE_8___default().instanceOf(Object).isRequired\n};\nRatingsReviews.displayName = 'RatingsReviews';\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RatingsReviews);\n\n//# sourceURL=webpack://jupiter-clothing/./client/src/components/RatingsReviews.jsx?");

/***/ })

}]);