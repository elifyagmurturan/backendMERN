/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
module.exports =
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./client/MainRouter.js":
/*!******************************!*\
  !*** ./client/MainRouter.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _core_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/Home */ \"./client/core/Home.js\");\n/* harmony import */ var _user_Users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/Users */ \"./client/user/Users.js\");\n/* harmony import */ var _user_Signup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/Signup */ \"./client/user/Signup.js\");\n/* harmony import */ var _auth_Signin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/Signin */ \"./client/auth/Signin.js\");\n/* harmony import */ var _user_Profile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/Profile */ \"./client/user/Profile.js\");\n/* harmony import */ var _core_Menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/Menu */ \"./client/core/Menu.js\");\n/* harmony import */ var _auth_PrivateRoute__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/PrivateRoute */ \"./client/auth/PrivateRoute.js\");\n/* harmony import */ var _user_EditProfile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/EditProfile */ \"./client/user/EditProfile.js\");\n/* harmony import */ var _user_EditProfile__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_user_EditProfile__WEBPACK_IMPORTED_MODULE_9__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\n\nconst MainRouter = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_core_Menu__WEBPACK_IMPORTED_MODULE_7__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    exact: true,\n    path: \"/\",\n    component: _core_Home__WEBPACK_IMPORTED_MODULE_2__.default\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    exact: true,\n    path: \"/users\",\n    component: _user_Users__WEBPACK_IMPORTED_MODULE_3__.default\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \"/signup\",\n    component: _user_Signup__WEBPACK_IMPORTED_MODULE_4__.default\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \"/signin\",\n    component: _auth_Signin__WEBPACK_IMPORTED_MODULE_5__.default\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \"/user/:userId\",\n    component: _user_Profile__WEBPACK_IMPORTED_MODULE_6__.default\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_auth_PrivateRoute__WEBPACK_IMPORTED_MODULE_8__.default, {\n    path: \"/user/edit/:userId\",\n    component: (_user_EditProfile__WEBPACK_IMPORTED_MODULE_9___default())\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \"/user/:userId\",\n    component: \"Profile\"\n  })));\n};\n\nconst _default = MainRouter;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(MainRouter, \"MainRouter\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/client/MainRouter.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/client/MainRouter.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-simplesetup/./client/MainRouter.js?");

/***/ }),

/***/ "./client/auth/PrivateRoute.js":
/*!*************************************!*\
  !*** ./client/auth/PrivateRoute.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _auth_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-helper */ \"./client/auth/auth-helper.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\nconst PrivateRoute = ({\n  component: Component,\n  ...rest\n}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, _extends({}, rest, {\n  render: props => _auth_helper__WEBPACK_IMPORTED_MODULE_2__.default.isAuthenticated() ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, props) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Redirect, {\n    to: {\n      pathname: '/signin',\n      state: {\n        from: props.location\n      }\n    }\n  })\n}));\n\nconst _default = PrivateRoute;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(PrivateRoute, \"PrivateRoute\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/client/auth/PrivateRoute.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/client/auth/PrivateRoute.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-simplesetup/./client/auth/PrivateRoute.js?");

/***/ }),

/***/ "./client/auth/Signin.js":
/*!*******************************!*\
  !*** ./client/auth/Signin.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var material_ui_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! material-ui/Card */ \"material-ui/Card\");\n/* harmony import */ var material_ui_Card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(material_ui_Card__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var material_ui_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! material-ui/Button */ \"material-ui/Button\");\n/* harmony import */ var material_ui_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(material_ui_Button__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var material_ui_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-ui/TextField */ \"material-ui/TextField\");\n/* harmony import */ var material_ui_TextField__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(material_ui_TextField__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var material_ui_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n/* harmony import */ var material_ui_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(material_ui_Typography__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var material_ui_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! material-ui/Icon */ \"material-ui/Icon\");\n/* harmony import */ var material_ui_Icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(material_ui_Icon__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(material_ui_styles__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _api_auth_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./api-auth.js */ \"./client/auth/api-auth.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst styles = theme => ({\n  card: {\n    maxWidth: 600,\n    margin: 'auto',\n    textAlign: 'center',\n    marginTop: theme.spacing.unit * 5,\n    paddingBottom: theme.spacing.unit * 2\n  },\n  error: {\n    verticalAlign: 'middle'\n  },\n  title: {\n    marginTop: theme.spacing.unit * 2,\n    color: theme.palette.openTitle\n  },\n  textField: {\n    marginLeft: theme.spacing.unit,\n    marginRight: theme.spacing.unit,\n    width: 300\n  },\n  submit: {\n    margin: 'auto',\n    marginBottom: theme.spacing.unit * 2\n  }\n});\n\nclass Signin extends react__WEBPACK_IMPORTED_MODULE_0__.Component {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      email: '',\n      password: '',\n      error: '',\n      redirectToReferrer: false\n    });\n\n    _defineProperty(this, \"clickSubmit\", () => {\n      const user = {\n        email: this.state.email || undefined,\n        password: this.state.password || undefined\n      };\n      (0,_api_auth_js__WEBPACK_IMPORTED_MODULE_10__.signin)(user).then(data => {\n        if (data.error) {\n          this.setState({\n            error: data.error\n          });\n        } else {\n          _auth_auth_helper__WEBPACK_IMPORTED_MODULE_8__.default.authenticate(data, () => {\n            this.setState({\n              redirectToReferrer: true\n            });\n          });\n        }\n      });\n    });\n\n    _defineProperty(this, \"handleChange\", name => event => {\n      this.setState({\n        [name]: event.target.value\n      });\n    });\n  }\n\n  render() {\n    const {\n      classes\n    } = this.props;\n    const {\n      from\n    } = this.props.location.state || {\n      from: {\n        pathname: '/'\n      }\n    };\n    const {\n      redirectToReferrer\n    } = this.state;\n\n    if (redirectToReferrer) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Redirect, {\n        to: from\n      });\n    }\n\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((material_ui_Card__WEBPACK_IMPORTED_MODULE_1___default()), {\n      className: classes.card\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(material_ui_Card__WEBPACK_IMPORTED_MODULE_1__.CardContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((material_ui_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {\n      type: \"headline\",\n      component: \"h2\",\n      className: classes.title\n    }, \"Sign In\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((material_ui_TextField__WEBPACK_IMPORTED_MODULE_3___default()), {\n      id: \"email\",\n      type: \"email\",\n      label: \"Email\",\n      className: classes.textField,\n      value: this.state.email,\n      onChange: this.handleChange('email'),\n      margin: \"normal\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((material_ui_TextField__WEBPACK_IMPORTED_MODULE_3___default()), {\n      id: \"password\",\n      type: \"password\",\n      label: \"Password\",\n      className: classes.textField,\n      value: this.state.password,\n      onChange: this.handleChange('password'),\n      margin: \"normal\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), \" \", this.state.error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((material_ui_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {\n      component: \"p\",\n      color: \"error\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((material_ui_Icon__WEBPACK_IMPORTED_MODULE_5___default()), {\n      color: \"error\",\n      className: classes.error\n    }, \"error\"), this.state.error)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(material_ui_Card__WEBPACK_IMPORTED_MODULE_1__.CardActions, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((material_ui_Button__WEBPACK_IMPORTED_MODULE_2___default()), {\n      color: \"primary\",\n      variant: \"raised\",\n      onClick: this.clickSubmit,\n      className: classes.submit\n    }, \"Submit\")));\n  }\n\n  // @ts-ignore\n  __reactstandin__regenerateByEval(key, code) {\n    // @ts-ignore\n    this[key] = eval(code);\n  }\n\n}\n\nSignin.propTypes = {\n  classes: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object.isRequired)\n};\n\nconst _default = (0,material_ui_styles__WEBPACK_IMPORTED_MODULE_7__.withStyles)(styles)(Signin);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(styles, \"styles\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/client/auth/Signin.js\");\n  reactHotLoader.register(Signin, \"Signin\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/client/auth/Signin.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/client/auth/Signin.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-simplesetup/./client/auth/Signin.js?");

/***/ }),

/***/ "./client/auth/api-auth.js":
/*!*********************************!*\
  !*** ./client/auth/api-auth.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"signin\": () => /* binding */ signin,\n/* harmony export */   \"signout\": () => /* binding */ signout\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst signin = async user => {\n  return fetch('/auth/signin/', {\n    method: 'POST',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json'\n    },\n    credentials: 'include',\n    body: JSON.stringify(user)\n  }).then(response => {\n    return response.json();\n  }).catch(err => console.log(err));\n};\n\nconst signout = async () => {\n  try {\n    let response = await fetch('/auth/signout/', {\n      method: 'GET'\n    });\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\n\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(signin, \"signin\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/client/auth/api-auth.js\");\n  reactHotLoader.register(signout, \"signout\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/client/auth/api-auth.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-simplesetup/./client/auth/api-auth.js?");

/***/ }),

/***/ "./client/auth/auth-helper.js":
/*!************************************!*\
  !*** ./client/auth/auth-helper.js ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _api_auth_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-auth.js */ \"./client/auth/api-auth.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\nconst auth = {\n  authenticate(jwt, cb) {\n    if (typeof window !== 'undefined') sessionStorage.setItem('jwt', JSON.stringify(jwt));\n    cb();\n  },\n\n  isAuthenticated() {\n    if (typeof window == \"undefined\") return false;\n    if (sessionStorage.getItem('jwt')) return JSON.parse(sessionStorage.getItem('jwt'));else return false;\n  },\n\n  signout(cb) {\n    if (typeof window !== 'undefined') sessionStorage.removeItem('jwt');\n    cb();\n    (0,_api_auth_js__WEBPACK_IMPORTED_MODULE_0__.signout)().then(data => {\n      document.cookie = \"t=; expires= Thu, 01 Jan 1970 00:00:00 UTC; path=/;\";\n    });\n  }\n\n};\nconst _default = auth;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(auth, \"auth\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/client/auth/auth-helper.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/client/auth/auth-helper.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-simplesetup/./client/auth/auth-helper.js?");

/***/ }),

/***/ "./client/core/Home.js":
/*!*****************************!*\
  !*** ./client/core/Home.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(material_ui_styles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var material_ui_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-ui/Card */ \"material-ui/Card\");\n/* harmony import */ var material_ui_Card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(material_ui_Card__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var material_ui_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n/* harmony import */ var material_ui_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(material_ui_Typography__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _assets_unicorn_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../assets/unicorn.jpg */ \"./assets/unicorn.jpg\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\nconst styles = theme => ({\n  card: {\n    maxWidth: 600,\n    margin: 'auto',\n    marginTop: theme.spacing.unit * 5\n  },\n  title: {\n    padding: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 2.5}px ${theme.spacing.unit * 2}px`,\n    color: theme.palette.text.secondary\n  },\n  media: {\n    minHeight: 330\n  }\n});\n\nclass Home extends react__WEBPACK_IMPORTED_MODULE_0__.Component {\n  render() {\n    const {\n      classes\n    } = this.props;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((material_ui_Card__WEBPACK_IMPORTED_MODULE_3___default()), {\n      className: classes.card\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((material_ui_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {\n      variant: \"h6\",\n      className: classes.title\n    }, \"Home Page\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(material_ui_Card__WEBPACK_IMPORTED_MODULE_3__.CardMedia, {\n      className: classes.media,\n      image: _assets_unicorn_jpg__WEBPACK_IMPORTED_MODULE_5__.default,\n      title: \"Unicorn\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(material_ui_Card__WEBPACK_IMPORTED_MODULE_3__.CardContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((material_ui_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {\n      variant: \"body2\",\n      component: \"p\"\n    }, \"Welcome to the MERN Skeleton Home Page.\")));\n  }\n\n  // @ts-ignore\n  __reactstandin__regenerateByEval(key, code) {\n    // @ts-ignore\n    this[key] = eval(code);\n  }\n\n}\n\nHome.propTypes = {\n  classes: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired)\n};\n\nconst _default = (0,material_ui_styles__WEBPACK_IMPORTED_MODULE_2__.withStyles)(styles)(Home);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(styles, \"styles\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/client/core/Home.js\");\n  reactHotLoader.register(Home, \"Home\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/client/core/Home.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/client/core/Home.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-simplesetup/./client/core/Home.js?");

/***/ }),

/***/ "./client/core/Menu.js":
/*!*****************************!*\
  !*** ./client/core/Menu.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var material_ui_AppBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! material-ui/AppBar */ \"material-ui/AppBar\");\n/* harmony import */ var material_ui_AppBar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(material_ui_AppBar__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var material_ui_Toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! material-ui/Toolbar */ \"material-ui/Toolbar\");\n/* harmony import */ var material_ui_Toolbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(material_ui_Toolbar__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Home */ \"@material-ui/icons/Home\");\n/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var material_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! material-ui */ \"material-ui\");\n/* harmony import */ var material_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(material_ui__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\nconst isActive = (history, path) => {\n  if (history.location.pathname == path) return {\n    color: '#ff4081'\n  };else return {\n    color: '#ffffff'\n  };\n};\n\nconst Menu = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.withRouter)(({\n  history\n}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((material_ui_AppBar__WEBPACK_IMPORTED_MODULE_1___default()), {\n  position: \"static\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((material_ui_Toolbar__WEBPACK_IMPORTED_MODULE_2___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(material_ui__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n  variant: \"h6\",\n  color: \"inherit\"\n}, \"MERN Skeleton\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {\n  to: \"/\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(material_ui__WEBPACK_IMPORTED_MODULE_4__.IconButton, {\n  \"aria-label\": \"Home\",\n  style: isActive(history, '/')\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_3___default()), null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {\n  to: \"/users\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(material_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {\n  style: isActive(history, '/users')\n}, \"Users\")), !_auth_auth_helper__WEBPACK_IMPORTED_MODULE_6__.default.isAuthenticated() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {\n  to: \"/signup\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(material_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {\n  style: isActive(history, \"/signup\")\n}, \" Sign Up \")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {\n  to: \"/signin\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(material_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {\n  style: isActive(history, \"/signin\")\n}, \" Sign In \"))), _auth_auth_helper__WEBPACK_IMPORTED_MODULE_6__.default.isAuthenticated() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {\n  to: \"/user/\" + _auth_auth_helper__WEBPACK_IMPORTED_MODULE_6__.default.isAuthenticated().user._id\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(material_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {\n  style: isActive(history, \"/user/\" + _auth_auth_helper__WEBPACK_IMPORTED_MODULE_6__.default.isAuthenticated().user._id)\n}, \"My Profile\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(material_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {\n  color: \"inherit\",\n  onClick: () => {\n    _auth_auth_helper__WEBPACK_IMPORTED_MODULE_6__.default.signout(() => history.push('/'));\n  }\n}, \"Sign out\")))));\nconst _default = Menu;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(isActive, \"isActive\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/client/core/Menu.js\");\n  reactHotLoader.register(Menu, \"Menu\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/client/core/Menu.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/client/core/Menu.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-simplesetup/./client/core/Menu.js?");

/***/ }),

/***/ "./client/user/DeleteUser.js":
/*!***********************************!*\
  !*** ./client/user/DeleteUser.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ DeleteUser\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var material_ui_IconButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! material-ui/IconButton */ \"material-ui/IconButton\");\n/* harmony import */ var material_ui_IconButton__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(material_ui_IconButton__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var material_ui_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! material-ui/Button */ \"material-ui/Button\");\n/* harmony import */ var material_ui_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(material_ui_Button__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-ui/icons/Delete */ \"material-ui/icons/Delete\");\n/* harmony import */ var material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var material_ui_Dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! material-ui/Dialog */ \"material-ui/Dialog\");\n/* harmony import */ var material_ui_Dialog__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(material_ui_Dialog__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n/* harmony import */ var _api_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api-user */ \"./client/user/api-user.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\nfunction DeleteUser(props) {\n  cons[(open, setOpen)] = useStates(false);\n  const [redirect, setRedirect] = useState(false);\n\n  const clickButton = () => {\n    setOpen(true);\n  };\n\n  const handleRequestClose = () => {\n    setOpen(false);\n  };\n\n  const deleteAccount = () => {\n    const jwt = _auth_auth_helper__WEBPACK_IMPORTED_MODULE_5__.default.isAuthenticated();\n    (0,_api_user__WEBPACK_IMPORTED_MODULE_6__.remove)({\n      userId: props.userId\n    }, {\n      t: jwt.token\n    }).then(data => {\n      if (data && data.error) {\n        console.log(data.error);\n      } else {\n        _auth_auth_helper__WEBPACK_IMPORTED_MODULE_5__.default.clearJWT(() => console.log('deleted'));\n        setRedirect(true);\n      }\n    });\n  };\n\n  if (redirect) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Redirect, {\n      to: \"/\"\n    });\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((material_ui_IconButton__WEBPACK_IMPORTED_MODULE_1___default()), {\n    \"aria-label\": \"Delete\",\n    onClick: clickButton,\n    color: \"secondary\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3___default()), null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((material_ui_Dialog__WEBPACK_IMPORTED_MODULE_4___default()), {\n    open: open,\n    onClose: handleRequestClose\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(material_ui_Dialog__WEBPACK_IMPORTED_MODULE_4__.DialogTitle, null, \"Delete Account\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(material_ui_Dialog__WEBPACK_IMPORTED_MODULE_4__.DialogContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(material_ui_Dialog__WEBPACK_IMPORTED_MODULE_4__.DialogContentText, null, \"Confirm to delete your account.\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(material_ui_Dialog__WEBPACK_IMPORTED_MODULE_4__.DialogActions, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((material_ui_Button__WEBPACK_IMPORTED_MODULE_2___default()), {\n    onClick: handleRequestClose,\n    color: \"primary\"\n  }, \"Cancel\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((material_ui_Button__WEBPACK_IMPORTED_MODULE_2___default()), {\n    onClick: deleteAccount,\n    color: \"secondary\",\n    autoFocus: \"autoFocus\"\n  }, \"Confirm\"))));\n}\n\n__signature__(DeleteUser, \"useStates{}\\nuseState{[redirect, setRedirect](false)}\");\n\nDelete.user.propTypes = {\n  userId: PropTypes.string.isRequired\n};\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(DeleteUser, \"DeleteUser\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/client/user/DeleteUser.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-simplesetup/./client/user/DeleteUser.js?");

/***/ }),

/***/ "./client/user/EditProfile.js":
/*!************************************!*\
  !*** ./client/user/EditProfile.js ***!
  \************************************/
/***/ (() => {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/client/user/EditProfile.js: Unexpected token, expected \\\",\\\" (95:36)\\n\\n\\u001b[0m \\u001b[90m 93 | \\u001b[39m        }\\u001b[33m,\\u001b[39m \\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39muserData)\\u001b[33m.\\u001b[39mthen((data) \\u001b[33m=>\\u001b[39m {\\u001b[0m\\n\\u001b[0m \\u001b[90m 94 | \\u001b[39m            \\u001b[36mif\\u001b[39m(data\\u001b[33m.\\u001b[39merror){\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 95 | \\u001b[39m                \\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39msetState({error\\u001b[33m.\\u001b[39mdata\\u001b[33m.\\u001b[39merror})\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m                                    \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 96 | \\u001b[39m            } \\u001b[36melse\\u001b[39m{\\u001b[0m\\n\\u001b[0m \\u001b[90m 97 | \\u001b[39m                \\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39msetState({\\u001b[32m'redirectToProfile'\\u001b[39m\\u001b[33m:\\u001b[39m \\u001b[36mtrue\\u001b[39m})\\u001b[0m\\n\\u001b[0m \\u001b[90m 98 | \\u001b[39m            }\\u001b[0m\\n    at Object._raise (/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/node_modules/@babel/parser/lib/index.js:748:17)\\n    at Object.raiseWithData (/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/node_modules/@babel/parser/lib/index.js:741:17)\\n    at Object.raise (/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/node_modules/@babel/parser/lib/index.js:735:17)\\n    at Object.unexpected (/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/node_modules/@babel/parser/lib/index.js:9101:16)\\n    at Object.expect (/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/node_modules/@babel/parser/lib/index.js:9087:28)\\n    at Object.parseObjectLike (/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/node_modules/@babel/parser/lib/index.js:10923:14)\\n    at Object.parseExprAtom (/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/node_modules/@babel/parser/lib/index.js:10491:23)\\n    at Object.parseExprAtom (/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/node_modules/@babel/parser/lib/index.js:4763:20)\\n    at Object.parseExprSubscripts (/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/node_modules/@babel/parser/lib/index.js:10150:23)\\n    at Object.parseUpdate (/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/node_modules/@babel/parser/lib/index.js:10130:21)\\n    at Object.parseMaybeUnary (/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/node_modules/@babel/parser/lib/index.js:10119:17)\\n    at Object.parseExprOps (/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/node_modules/@babel/parser/lib/index.js:9989:23)\\n    at Object.parseMaybeConditional (/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/node_modules/@babel/parser/lib/index.js:9963:23)\\n    at Object.parseMaybeAssign (/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/node_modules/@babel/parser/lib/index.js:9926:21)\\n    at /Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/node_modules/@babel/parser/lib/index.js:9893:39\\n    at Object.allowInAnd (/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/node_modules/@babel/parser/lib/index.js:11547:12)\\n    at Object.parseMaybeAssignAllowIn (/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/node_modules/@babel/parser/lib/index.js:9893:17)\\n    at Object.parseExprListItem (/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/node_modules/@babel/parser/lib/index.js:11309:18)\\n    at Object.parseCallExpressionArguments (/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/node_modules/@babel/parser/lib/index.js:10350:22)\\n    at Object.parseCoverCallAndAsyncArrowHead (/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/node_modules/@babel/parser/lib/index.js:10258:29)\\n    at Object.parseSubscript (/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/node_modules/@babel/parser/lib/index.js:10194:19)\\n    at Object.parseSubscripts (/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/node_modules/@babel/parser/lib/index.js:10167:19)\\n    at Object.parseExprSubscripts (/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/node_modules/@babel/parser/lib/index.js:10156:17)\\n    at Object.parseUpdate (/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/node_modules/@babel/parser/lib/index.js:10130:21)\\n    at Object.parseMaybeUnary (/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/node_modules/@babel/parser/lib/index.js:10119:17)\\n    at Object.parseExprOps (/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/node_modules/@babel/parser/lib/index.js:9989:23)\\n    at Object.parseMaybeConditional (/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/node_modules/@babel/parser/lib/index.js:9963:23)\\n    at Object.parseMaybeAssign (/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/node_modules/@babel/parser/lib/index.js:9926:21)\\n    at Object.parseExpressionBase (/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/node_modules/@babel/parser/lib/index.js:9871:23)\\n    at /Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/node_modules/@babel/parser/lib/index.js:9865:39\");\n\n//# sourceURL=webpack://mern-simplesetup/./client/user/EditProfile.js?");

/***/ }),

/***/ "./client/user/Profile.js":
/*!********************************!*\
  !*** ./client/user/Profile.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(material_ui_styles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var material_ui_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-ui/Paper */ \"material-ui/Paper\");\n/* harmony import */ var material_ui_Paper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(material_ui_Paper__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var material_ui_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! material-ui/List */ \"material-ui/List\");\n/* harmony import */ var material_ui_List__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(material_ui_List__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var material_ui_Avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! material-ui/Avatar */ \"material-ui/Avatar\");\n/* harmony import */ var material_ui_Avatar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(material_ui_Avatar__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var material_ui_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! material-ui/IconButton */ \"material-ui/IconButton\");\n/* harmony import */ var material_ui_IconButton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(material_ui_IconButton__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var material_ui_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! material-ui/Button */ \"material-ui/Button\");\n/* harmony import */ var material_ui_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(material_ui_Button__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var material_ui_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n/* harmony import */ var material_ui_Typography__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(material_ui_Typography__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Edit */ \"@material-ui/icons/Edit\");\n/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Divider */ \"@material-ui/core/Divider\");\n/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _DeleteUser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./DeleteUser */ \"./client/user/DeleteUser.js\");\n/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n/* harmony import */ var _api_user_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./api-user.js */ \"./client/user/api-user.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/AddCircleOutline */ \"@material-ui/icons/AddCircleOutline\");\n/* harmony import */ var _material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _user_ProfileTabs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./../user/ProfileTabs */ \"./client/user/ProfileTabs.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './../post/api-post.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst styles = theme => ({\n  root: theme.mixins.gutters({\n    maxWidth: 600,\n    margin: 'auto',\n    padding: theme.spacing.unit * 3,\n    marginTop: theme.spacing.unit * 5\n  }),\n  title: {\n    margin: `${theme.spacing.unit * 2}px ${theme.spacing.unit}px 0`,\n    color: theme.palette.protectedTitle,\n    fontSize: '1em'\n  },\n  bigAvatar: {\n    width: 60,\n    height: 60,\n    margin: 10\n  }\n});\n\nclass Profile extends react__WEBPACK_IMPORTED_MODULE_0__.Component {\n  constructor({\n    match: _match\n  }) {\n    super();\n\n    _defineProperty(this, \"init\", userId => {\n      const jwt = _auth_auth_helper__WEBPACK_IMPORTED_MODULE_12__.default.isAuthenticated();\n      (0,_api_user_js__WEBPACK_IMPORTED_MODULE_13__.read)({\n        userId: userId\n      }, {\n        t: jwt.token\n      }).then(data => {\n        if (data.error) {\n          this.setState({\n            redirectToSignin: true\n          });\n        } else {\n          let following = this.checkFollow(data);\n          this.setState({\n            user: data,\n            following: following\n          });\n          this.loadPosts(data._id);\n        }\n      });\n    });\n\n    _defineProperty(this, \"componentWillReceiveProps\", props => {\n      this.init(props.match.params.userId);\n    });\n\n    _defineProperty(this, \"componentDidMount\", () => {\n      this.init(this.match.params.userId);\n    });\n\n    _defineProperty(this, \"checkFollow\", user => {\n      const jwt = _auth_auth_helper__WEBPACK_IMPORTED_MODULE_12__.default.isAuthenticated();\n      const match = user.followers.find(follower => {\n        return follower._id == jwt.user._id;\n      });\n      return match;\n    });\n\n    _defineProperty(this, \"clickFollowButton\", callApi => {\n      const jwt = _auth_auth_helper__WEBPACK_IMPORTED_MODULE_12__.default.isAuthenticated();\n      callApi({\n        userId: jwt.user._id\n      }, {\n        t: jwt.token\n      }, this.state.user._id).then(data => {\n        if (data.error) {\n          this.setState({\n            error: data.error\n          });\n        } else {\n          this.setState({\n            user: data,\n            following: !this.state.following\n          });\n        }\n      });\n    });\n\n    _defineProperty(this, \"loadPosts\", user => {\n      const jwt = _auth_auth_helper__WEBPACK_IMPORTED_MODULE_12__.default.isAuthenticated();\n      Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './../post/api-post.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({\n        userId: user\n      }, {\n        t: jwt.token\n      }).then(data => {\n        if (data.error) {\n          console.log(data.error);\n        } else {\n          this.setState({\n            posts: data\n          });\n        }\n      });\n    });\n\n    _defineProperty(this, \"removePost\", post => {\n      const updatedPosts = this.state.posts;\n      const index = updatedPosts.indexOf(post);\n      updatedPosts.splice(index, 1);\n      this.setState({\n        posts: updatedPosts\n      });\n    });\n\n    this.state = {\n      user: {\n        following: [],\n        followers: []\n      },\n      redirectToSignin: false,\n      following: false,\n      posts: []\n    };\n    this.match = _match;\n  }\n\n  render() {\n    const classes = this.props;\n    const photoUrl = this.state.user._id ? `/api/users/photo/${this.state.user._id}?${new Date().getTime()}` : '/api/users/defaultphoto';\n    const redirectToSignin = this.state.redirectToSignin;\n\n    if (redirectToSignin) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Redirect, {\n        to: \"/signin\"\n      });\n    }\n\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((material_ui_Paper__WEBPACK_IMPORTED_MODULE_3___default()), {\n      className: classes.root,\n      elevation: 4\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((material_ui_Typography__WEBPACK_IMPORTED_MODULE_8___default()), {\n      type: \"title\",\n      className: classes.title\n    }, \"Profile\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((material_ui_List__WEBPACK_IMPORTED_MODULE_4___default()), {\n      dense: true\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(material_ui_List__WEBPACK_IMPORTED_MODULE_4__.ListItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(material_ui_List__WEBPACK_IMPORTED_MODULE_4__.ListItemAvatar, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((material_ui_Avatar__WEBPACK_IMPORTED_MODULE_5___default()), {\n      src: photoUrl,\n      className: classes.bigAvatar\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(material_ui_List__WEBPACK_IMPORTED_MODULE_4__.ListItemText, {\n      primary: this.state.user.name,\n      secondary: this.state.user.email\n    }), \" \", _auth_auth_helper__WEBPACK_IMPORTED_MODULE_12__.default.isAuthenticated().user && _auth_auth_helper__WEBPACK_IMPORTED_MODULE_12__.default.isAuthenticated().user._id == this.state.user._id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(material_ui_List__WEBPACK_IMPORTED_MODULE_4__.ListItemSecondaryAction, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Link, {\n      to: \"/user/edit/\" + this.state.user._id\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((material_ui_IconButton__WEBPACK_IMPORTED_MODULE_6___default()), {\n      \"aria-label\": \"Edit\",\n      color: \"primary\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_9___default()), null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_DeleteUser__WEBPACK_IMPORTED_MODULE_11__.default, {\n      userId: this.state.user._id\n    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_15___default()), {\n      following: this.state.following,\n      onButtonClick: this.clickFollowButton\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_10___default()), null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(material_ui_List__WEBPACK_IMPORTED_MODULE_4__.ListItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(material_ui_List__WEBPACK_IMPORTED_MODULE_4__.ListItemText, {\n      primary: this.state.user.about,\n      secondary: \"Joined: \" + new Date(this.state.user.created).toDateString()\n    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_user_ProfileTabs__WEBPACK_IMPORTED_MODULE_16__.default, {\n      user: this.state.user,\n      posts: this.state.posts,\n      removePostUpdate: this.removePost\n    }));\n  }\n\n  // @ts-ignore\n  __reactstandin__regenerateByEval(key, code) {\n    // @ts-ignore\n    this[key] = eval(code);\n  }\n\n}\n\nProfile.propTypes = {\n  classes: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired)\n};\n\nconst _default = (0,material_ui_styles__WEBPACK_IMPORTED_MODULE_2__.withStyles)(styles)(Profile);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(styles, \"styles\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/client/user/Profile.js\");\n  reactHotLoader.register(Profile, \"Profile\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/client/user/Profile.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/client/user/Profile.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-simplesetup/./client/user/Profile.js?");

/***/ }),

/***/ "./client/user/ProfileTabs.js":
/*!************************************!*\
  !*** ./client/user/ProfileTabs.js ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(material_ui_styles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var material_ui_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-ui/Button */ \"material-ui/Button\");\n/* harmony import */ var material_ui_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(material_ui_Button__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var material_ui_AppBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! material-ui/AppBar */ \"material-ui/AppBar\");\n/* harmony import */ var material_ui_AppBar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(material_ui_AppBar__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var material_ui_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n/* harmony import */ var material_ui_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(material_ui_Typography__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var material_ui_Tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! material-ui/Tabs */ \"material-ui/Tabs\");\n/* harmony import */ var material_ui_Tabs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(material_ui_Tabs__WEBPACK_IMPORTED_MODULE_7__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './../user/FollowGrid'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './../post/PostList'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\n\nclass ProfileTabs extends react__WEBPACK_IMPORTED_MODULE_0__.Component {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      tab: 0,\n      posts: []\n    });\n\n    _defineProperty(this, \"componentWillReceiveProps\", props => {\n      this.setState({\n        tab: 0\n      });\n    });\n\n    _defineProperty(this, \"handleTabChange\", (event, value) => {\n      this.setState({\n        tab: value\n      });\n    });\n  }\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((material_ui_AppBar__WEBPACK_IMPORTED_MODULE_5___default()), {\n      position: \"static\",\n      color: \"default\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((material_ui_Tabs__WEBPACK_IMPORTED_MODULE_7___default()), {\n      value: this.state.tab,\n      onChange: this.handleTabChange,\n      indicatorColor: \"primary\",\n      textColor: \"primary\",\n      fullWidth: true\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(material_ui_Tabs__WEBPACK_IMPORTED_MODULE_7__.Tab, {\n      label: \"Posts\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(material_ui_Tabs__WEBPACK_IMPORTED_MODULE_7__.Tab, {\n      label: \"Following\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(material_ui_Tabs__WEBPACK_IMPORTED_MODULE_7__.Tab, {\n      label: \"Followers\"\n    }))), this.state.tab === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TabContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './../post/PostList'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {\n      removeUpdate: this.props.removePostUpdate,\n      posts: this.props.posts\n    })), this.state.tab === 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TabContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './../user/FollowGrid'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {\n      people: this.props.user.following\n    })), this.state.tab === 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TabContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './../user/FollowGrid'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {\n      people: this.props.user.followers\n    })));\n  }\n\n  // @ts-ignore\n  __reactstandin__regenerateByEval(key, code) {\n    // @ts-ignore\n    this[key] = eval(code);\n  }\n\n}\n\nProfileTabs.propTypes = {\n  user: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired),\n  removePostUpdate: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),\n  posts: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired)\n};\n\nconst TabContainer = props => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((material_ui_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {\n    component: \"div\",\n    style: {\n      padding: 8 * 2\n    }\n  }, props.children);\n};\n\nTabContainer.propTypes = {\n  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired)\n};\nconst _default = ProfileTabs;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(ProfileTabs, \"ProfileTabs\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/client/user/ProfileTabs.js\");\n  reactHotLoader.register(TabContainer, \"TabContainer\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/client/user/ProfileTabs.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/client/user/ProfileTabs.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-simplesetup/./client/user/ProfileTabs.js?");

/***/ }),

/***/ "./client/user/Signup.js":
/*!*******************************!*\
  !*** ./client/user/Signup.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var material_ui_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! material-ui/Card */ \"material-ui/Card\");\n/* harmony import */ var material_ui_Card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(material_ui_Card__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var material_ui_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! material-ui/Button */ \"material-ui/Button\");\n/* harmony import */ var material_ui_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(material_ui_Button__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var material_ui_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-ui/TextField */ \"material-ui/TextField\");\n/* harmony import */ var material_ui_TextField__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(material_ui_TextField__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var material_ui_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n/* harmony import */ var material_ui_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(material_ui_Typography__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var material_ui_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! material-ui/Icon */ \"material-ui/Icon\");\n/* harmony import */ var material_ui_Icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(material_ui_Icon__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(material_ui_styles__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _api_user_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./api-user.js */ \"./client/user/api-user.js\");\n/* harmony import */ var material_ui_Dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! material-ui/Dialog */ \"material-ui/Dialog\");\n/* harmony import */ var material_ui_Dialog__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(material_ui_Dialog__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_10__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst styles = theme => ({\n  card: {\n    maxWidth: 600,\n    margin: 'auto',\n    textAlign: 'center',\n    marginTop: theme.spacing.unit * 5,\n    paddingBottom: theme.spacing.unit * 2\n  },\n  error: {\n    verticalAlign: 'middle'\n  },\n  title: {\n    marginTop: theme.spacing.unit * 2,\n    color: theme.palette.openTitle\n  },\n  textField: {\n    marginLeft: theme.spacing.unit,\n    marginRight: theme.spacing.unit,\n    width: 300\n  },\n  submit: {\n    margin: 'auto',\n    marginBottom: theme.spacing.unit * 2\n  }\n});\n\nclass Signup extends react__WEBPACK_IMPORTED_MODULE_0__.Component {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      name: '',\n      password: '',\n      email: '',\n      open: false,\n      error: ''\n    });\n\n    _defineProperty(this, \"handleChange\", name => event => {\n      this.setState({\n        [name]: event.target.value\n      });\n    });\n\n    _defineProperty(this, \"clickSubmit\", () => {\n      const user = {\n        name: this.values.name || undefined,\n        email: this.values.email || undefined,\n        password: this.values.password || undefined\n      };\n      (0,_api_user_js__WEBPACK_IMPORTED_MODULE_8__.create)(user).then(data => {\n        if (data.error) {\n          this.setState({\n            error: data.error\n          });\n        } else {\n          this.setState({\n            error: '',\n            open: true\n          });\n        }\n      });\n    });\n  }\n\n  render() {\n    const {\n      classes\n    } = this.props;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((material_ui_Card__WEBPACK_IMPORTED_MODULE_1___default()), {\n      className: classes.card\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(material_ui_Card__WEBPACK_IMPORTED_MODULE_1__.CardContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((material_ui_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {\n      type: \"headline\",\n      component: \"h2\",\n      className: classes.title\n    }, \"Sign Up\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((material_ui_TextField__WEBPACK_IMPORTED_MODULE_3___default()), {\n      id: \"name\",\n      label: \"Name\",\n      className: classes.textField,\n      value: this.state.name,\n      onChange: this.handleChange('name'),\n      margin: \"normal\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((material_ui_TextField__WEBPACK_IMPORTED_MODULE_3___default()), {\n      id: \"email\",\n      type: \"email\",\n      label: \"Email\",\n      className: classes.textField,\n      value: this.state.email,\n      onChange: this.handleChange('email'),\n      margin: \"normal\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((material_ui_TextField__WEBPACK_IMPORTED_MODULE_3___default()), {\n      id: \"password\",\n      type: \"password\",\n      label: \"Password\",\n      className: classes.textField,\n      value: this.state.password,\n      onChange: this.handleChange('password'),\n      margin: \"normal\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), \" \", this.state.error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((material_ui_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {\n      component: \"p\",\n      color: \"error\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((material_ui_Icon__WEBPACK_IMPORTED_MODULE_5___default()), {\n      color: \"error\",\n      className: classes.error\n    }, \"error\"), this.state.error)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(material_ui_Card__WEBPACK_IMPORTED_MODULE_1__.CardActions, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((material_ui_Button__WEBPACK_IMPORTED_MODULE_2___default()), {\n      color: \"primary\",\n      variant: \"raised\",\n      onClick: this.clickSubmit,\n      className: classes.submit\n    }, \"Submit\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((material_ui_Dialog__WEBPACK_IMPORTED_MODULE_9___default()), {\n      open: this.state.open,\n      disableBackdropClick: true\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(material_ui_Dialog__WEBPACK_IMPORTED_MODULE_9__.DialogTitle, null, \"New Account\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(material_ui_Dialog__WEBPACK_IMPORTED_MODULE_9__.DialogContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(material_ui_Dialog__WEBPACK_IMPORTED_MODULE_9__.DialogContentText, null, \"New account successfully created.\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(material_ui_Dialog__WEBPACK_IMPORTED_MODULE_9__.DialogActions, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link, {\n      to: \"/signin\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((material_ui_Button__WEBPACK_IMPORTED_MODULE_2___default()), {\n      color: \"primary\",\n      autoFocus: \"autoFocus\",\n      variant: \"raised\"\n    }, \"Sign In\")))));\n  }\n\n  // @ts-ignore\n  __reactstandin__regenerateByEval(key, code) {\n    // @ts-ignore\n    this[key] = eval(code);\n  }\n\n}\n\nSignup.propTypes = {\n  classes: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object.isRequired)\n};\n\nconst _default = (0,material_ui_styles__WEBPACK_IMPORTED_MODULE_7__.withStyles)(styles)(Signup);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(styles, \"styles\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/client/user/Signup.js\");\n  reactHotLoader.register(Signup, \"Signup\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/client/user/Signup.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/client/user/Signup.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-simplesetup/./client/user/Signup.js?");

/***/ }),

/***/ "./client/user/Users.js":
/*!******************************!*\
  !*** ./client/user/Users.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(material_ui_styles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var material_ui_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-ui/Paper */ \"material-ui/Paper\");\n/* harmony import */ var material_ui_Paper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(material_ui_Paper__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var material_ui_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! material-ui/List */ \"material-ui/List\");\n/* harmony import */ var material_ui_List__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(material_ui_List__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var material_ui_Avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! material-ui/Avatar */ \"material-ui/Avatar\");\n/* harmony import */ var material_ui_Avatar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(material_ui_Avatar__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var material_ui_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! material-ui/IconButton */ \"material-ui/IconButton\");\n/* harmony import */ var material_ui_IconButton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(material_ui_IconButton__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var material_ui_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n/* harmony import */ var material_ui_Typography__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(material_ui_Typography__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/ArrowForward */ \"@material-ui/icons/ArrowForward\");\n/* harmony import */ var _material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Person */ \"@material-ui/icons/Person\");\n/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _api_user_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./api-user.js */ \"./client/user/api-user.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst styles = theme => ({\n  card: {\n    maxWidth: 600,\n    margin: 'auto',\n    textAlign: 'center',\n    marginTop: theme.spacing.unit * 5,\n    paddingBottom: theme.spacing.unit * 2\n  },\n  error: {\n    verticalAlign: 'middle'\n  },\n  title: {\n    marginTop: theme.spacing.unit * 2,\n    color: theme.palette.openTitle\n  },\n  textField: {\n    marginLeft: theme.spacing.unit,\n    marginRight: theme.spacing.unit,\n    width: 300\n  },\n  submit: {\n    margin: 'auto',\n    marginBottom: theme.spacing.unit * 2\n  }\n});\n\nclass Users extends react__WEBPACK_IMPORTED_MODULE_0__.Component {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      users: []\n    });\n  }\n\n  componentDidMount() {\n    _api_user_js__WEBPACK_IMPORTED_MODULE_11__.list.then(data => {\n      if (data.error) {\n        console.log(data.error);\n      } else {\n        this.setState({\n          users: data\n        });\n      }\n    });\n  }\n\n  render() {\n    const {\n      classes\n    } = this.props;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((material_ui_Paper__WEBPACK_IMPORTED_MODULE_3___default()), {\n      className: classes.root,\n      elevation: 4\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((material_ui_Typography__WEBPACK_IMPORTED_MODULE_7___default()), {\n      variant: \"h6\",\n      className: classes.title\n    }, \"All Users\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((material_ui_List__WEBPACK_IMPORTED_MODULE_4___default()), {\n      dense: true\n    }, this.state.users.map((item, i) => {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link, {\n        to: \"/user/\" + item._id,\n        key: i\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(material_ui_List__WEBPACK_IMPORTED_MODULE_4__.ListItem, {\n        button: true\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(material_ui_List__WEBPACK_IMPORTED_MODULE_4__.ListItemAvatar, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((material_ui_Avatar__WEBPACK_IMPORTED_MODULE_5___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_9___default()), null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(material_ui_List__WEBPACK_IMPORTED_MODULE_4__.ListItemText, {\n        primary: item.name\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(material_ui_List__WEBPACK_IMPORTED_MODULE_4__.ListItemSecondaryAction, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((material_ui_IconButton__WEBPACK_IMPORTED_MODULE_6___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_8___default()), null)))));\n    })));\n  }\n\n  // @ts-ignore\n  __reactstandin__regenerateByEval(key, code) {\n    // @ts-ignore\n    this[key] = eval(code);\n  }\n\n}\n\nUsers.propTypes = {\n  classes: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired)\n};\n\nconst _default = (0,material_ui_styles__WEBPACK_IMPORTED_MODULE_2__.withStyles)(styles)(Users);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(styles, \"styles\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/client/user/Users.js\");\n  reactHotLoader.register(Users, \"Users\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/client/user/Users.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/client/user/Users.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-simplesetup/./client/user/Users.js?");

/***/ }),

/***/ "./client/user/api-user.js":
/*!*********************************!*\
  !*** ./client/user/api-user.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"create\": () => /* binding */ create,\n/* harmony export */   \"list\": () => /* binding */ list,\n/* harmony export */   \"read\": () => /* binding */ read,\n/* harmony export */   \"update\": () => /* binding */ update,\n/* harmony export */   \"remove\": () => /* binding */ remove\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst create = async user => {\n  try {\n    let response = await fetch('/api/users/', {\n      method: 'POST',\n      headers: {\n        'Accept': 'application/json',\n        'Content-Type': 'application.json'\n      },\n      body: JSON.stringify(user)\n    });\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\n\nconst list = async signal => {\n  try {\n    let response = await fetch('/api/users/', {\n      method: 'GET',\n      signal: signal\n    });\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\n\nconst read = async (params, credentials, signal) => {\n  try {\n    let response = await fetch('/api/users/' + params.userId, {\n      method: 'GET',\n      signal: signal,\n      headers: {\n        'Accept': 'application/json',\n        'Content-Type': 'application/json',\n        'Authorization': 'Bearer' + credentials.t\n      }\n    });\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\n\nconst update = async (params, credentials, user) => {\n  try {\n    let response = await fetch('/api/users/' + params.userId, {\n      method: 'PUT',\n      headers: {\n        'Accept': 'application/json',\n        'Content-Type': 'application/json',\n        'Authorization': 'Bearer' + credentials.t\n      },\n      body: user\n    });\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\n\nconst remove = async (params, credentials) => {\n  try {\n    let response = await fetch('/api/users/' + params.userId, {\n      method: 'DELETE',\n      headers: {\n        'Accept': 'application/json',\n        'Content-Type': 'application/json',\n        'Authorization': 'Bearer' + credentials.t\n      }\n    });\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\n\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(create, \"create\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/client/user/api-user.js\");\n  reactHotLoader.register(list, \"list\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/client/user/api-user.js\");\n  reactHotLoader.register(read, \"read\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/client/user/api-user.js\");\n  reactHotLoader.register(update, \"update\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/client/user/api-user.js\");\n  reactHotLoader.register(remove, \"remove\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/client/user/api-user.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-simplesetup/./client/user/api-user.js?");

/***/ }),

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst config = {\n  env: \"development\" || 0,\n  port: process.env.PORT || 3000,\n  jwtSecret: process.env.JWT_SECRET || \"YOUR_secret_key\",\n  mongoUri: process.env.MONGODB_URI || process.env.MONGO_HOST || 'mongodb://' + (process.env.IP || 'localhost') + ':' + (process.env.MONGO_PORT || '27017') + '/mernproject'\n};\nconst _default = config;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(config, \"config\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/config/config.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/config/config.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-simplesetup/./config/config.js?");

/***/ }),

/***/ "./server/controllers/auth.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/auth.controller.js ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user.model */ \"./server/models/user.model.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express-jwt */ \"express-jwt\");\n/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express_jwt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../config/config */ \"./config/config.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\nconst signin = async (req, res) => {\n  try {\n    let user = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__.default.findOne({\n      \"email\": req.body.email\n    });\n    if (!user) return res.status('401').json({\n      error: \"User not found\"\n    });\n\n    if (!user.authenticate(req.body.password)) {\n      return res.status('401').send({\n        error: \"Email and password don't match.\"\n      });\n    }\n\n    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().sign({\n      _id: user._id\n    }, _config_config__WEBPACK_IMPORTED_MODULE_3__.default.jwtSecret);\n    res.cookie('t', token, {\n      expire: new Date() + 9999\n    });\n    return res.json({\n      token,\n      user: {\n        _id: user._id,\n        name: user.name,\n        email: user.email\n      }\n    });\n  } catch (err) {\n    return res.status('401').json({\n      error: \"Could not sign in\"\n    });\n  }\n};\n\nconst signout = (req, res) => {\n  res.clearCookie(\"t\");\n  return res.status('200').json({\n    message: \"Signed out\"\n  });\n};\n\nconst requireSignin = expressJwt => ({\n  secret: _config_config__WEBPACK_IMPORTED_MODULE_3__.default.jwtSecret,\n  userProperty: 'auth'\n});\n\nconst hasAuthorization = (req, res, next) => {\n  const authorized = req.profile && req.auth && req.profile._id == req.auth._id;\n\n  if (!authorized) {\n    return res.status('403').json({\n      error: \"User is not authorized\"\n    });\n  }\n\n  next();\n};\n\nconst _default = {\n  signin,\n  signout,\n  requireSignin,\n  hasAuthorization\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(signin, \"signin\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/server/controllers/auth.controller.js\");\n  reactHotLoader.register(signout, \"signout\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/server/controllers/auth.controller.js\");\n  reactHotLoader.register(requireSignin, \"requireSignin\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/server/controllers/auth.controller.js\");\n  reactHotLoader.register(hasAuthorization, \"hasAuthorization\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/server/controllers/auth.controller.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/server/controllers/auth.controller.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-simplesetup/./server/controllers/auth.controller.js?");

/***/ }),

/***/ "./server/controllers/user.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/user.controller.js ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user.model */ \"./server/models/user.model.js\");\n/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/extend */ \"lodash/extend\");\n/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/dbErrorHandler */ \"./server/helpers/dbErrorHandler.js\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _assets_profile_pic_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../assets/profile-pic.jpg */ \"./assets/profile-pic.jpg\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\nconst create = async (req, res, next) => {\n  const user = new _models_user_model__WEBPACK_IMPORTED_MODULE_0__.default(req.body);\n\n  try {\n    await user.save();\n    console.log(\"Successfuly signed up\");\n    return res.status('200').json({\n      message: \"Successfully signed up!\"\n    });\n  } catch (err) {\n    return res.status('400').json({\n      error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__.default.getErrorMessage(err)\n    });\n  }\n};\n\nconst list = async (req, res) => {\n  try {\n    let users = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__.default.find().select('name email updated created');\n    res.json(users);\n  } catch (err) {\n    return res.status('400').json({\n      error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__.default.getErrorMessage(err)\n    });\n  }\n};\n\nconst userByID = async (req, res, next, id) => {\n  try {\n    let user = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__.default.findById(id);\n    if (!user) return res.status('400').json({\n      error: \"User not found\"\n    });\n    req.profile = user;\n    next();\n  } catch (err) {\n    return res.status('400').json({\n      error: \"Could not retrieve user\"\n    });\n  }\n};\n\nconst read = (req, res) => {\n  req.profile.hashed_password = undefined;\n  req.profilel.salt = undefined;\n  return res.json(req.profile);\n};\n\nconst update = async (req, res) => {\n  let form = new (formidable__WEBPACK_IMPORTED_MODULE_3___default().IncomingForm)();\n  form.keepExtensions = true;\n  form.parse(req, async (err, fields, files) => {\n    if (err) {\n      return res.status(400).json({\n        error: \"Photo could not be uploaded\"\n      });\n    }\n\n    let user = req.profile;\n    user = lodash_extend__WEBPACK_IMPORTED_MODULE_1___default()(user, fields);\n    user.updated = Date.now();\n\n    if (files.photo) {\n      user.photo.data = fs__WEBPACK_IMPORTED_MODULE_4___default().readFileSync(files.photo.path);\n      user.photo.contentType = files.photo.type;\n    }\n\n    try {\n      await user.save();\n      user.hashed_password = undefined;\n      user.salt = undefined;\n      res.json(user);\n    } catch (err) {\n      return res.status(400).json({\n        error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__.default.getErrorMessage(err)\n      });\n    }\n  });\n};\n\nconst defaultPhoto = (req, res) => {\n  return res.sendFile(process.cwd() + _assets_profile_pic_jpg__WEBPACK_IMPORTED_MODULE_5__.default);\n};\n\nconst photo = (req, res, next) => {\n  if (req.profile.photo.data) {\n    res.set('Content-Type', req.profile.photo.contentType);\n    return res.send(req.profile.photo.data);\n  }\n\n  next();\n};\n\nconst remove = async (req, res) => {\n  try {\n    let user = req.profile;\n    let deletedUser = await user.remove();\n    deletedUser.hashed_password = undefined;\n    deletedUser.salt = undefined;\n    res.json(deletedUser);\n  } catch (err) {\n    return res.status('400').json({\n      error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__.default.getErrorMessage(err)\n    });\n  }\n};\n\nconst _default = {\n  create,\n  list,\n  userByID,\n  read,\n  update,\n  remove\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(create, \"create\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/server/controllers/user.controller.js\");\n  reactHotLoader.register(list, \"list\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/server/controllers/user.controller.js\");\n  reactHotLoader.register(userByID, \"userByID\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/server/controllers/user.controller.js\");\n  reactHotLoader.register(read, \"read\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/server/controllers/user.controller.js\");\n  reactHotLoader.register(update, \"update\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/server/controllers/user.controller.js\");\n  reactHotLoader.register(defaultPhoto, \"defaultPhoto\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/server/controllers/user.controller.js\");\n  reactHotLoader.register(photo, \"photo\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/server/controllers/user.controller.js\");\n  reactHotLoader.register(remove, \"remove\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/server/controllers/user.controller.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/server/controllers/user.controller.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-simplesetup/./server/controllers/user.controller.js?");

/***/ }),

/***/ "./server/devBundle.js":
/*!*****************************!*\
  !*** ./server/devBundle.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config/config */ \"./config/config.js\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../webpack.config.client.js */ \"./webpack.config.client.js\");\n/* harmony import */ var _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\nconst compile = app => {\n  if (_config_config__WEBPACK_IMPORTED_MODULE_0__.default.env === \"development\") {\n    const compiler = webpack__WEBPACK_IMPORTED_MODULE_1___default()((_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default()));\n    const middleware = webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3___default()(compiler, {\n      publicPath: (_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default().output.publicPath)\n    });\n    app.use(middleware);\n    app.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3___default()(compiler));\n  }\n};\n\nconst _default = {\n  compile\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(compile, \"compile\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/server/devBundle.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/server/devBundle.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-simplesetup/./server/devBundle.js?");

/***/ }),

/***/ "./server/express.js":
/*!***************************!*\
  !*** ./server/express.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../template */ \"./template.js\");\n/* harmony import */ var _routes_user_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/user.routes */ \"./server/routes/user.routes.js\");\n/* harmony import */ var _routes_auth_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/auth.routes */ \"./server/routes/auth.routes.js\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var react_router_dom_StaticRouter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom/StaticRouter */ \"react-router-dom/StaticRouter\");\n/* harmony import */ var react_router_dom_StaticRouter__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_router_dom_StaticRouter__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _client_MainRouter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../client/MainRouter */ \"./client/MainRouter.js\");\n/* harmony import */ var react_jss_lib_JssProvider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-jss/lib/JssProvider */ \"react-jss/lib/JssProvider\");\n/* harmony import */ var react_jss_lib_JssProvider__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jss_lib_JssProvider__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(material_ui_styles__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var react_jss_lib_jss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-jss/lib/jss */ \"react-jss/lib/jss\");\n/* harmony import */ var react_jss_lib_jss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_jss_lib_jss__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var material_ui_colors__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! material-ui/colors */ \"material-ui/colors\");\n/* harmony import */ var material_ui_colors__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(material_ui_colors__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var _devBundle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./devBundle */ \"./server/devBundle.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n // for server-side rendering-- react modules\n\n\n\n\n\n\n\n\n //only during development\n\n\nconst CURRENT_WORKING_DIR = process.cwd();\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()(); // only during development\n\n_devBundle__WEBPACK_IMPORTED_MODULE_18__.default.compile(app); // configure express\n\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default().json());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default().urlencoded({\n  extended: true\n}));\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_2___default()());\napp.use(compression__WEBPACK_IMPORTED_MODULE_3___default()());\napp.use(helmet__WEBPACK_IMPORTED_MODULE_4___default()());\napp.use(cors__WEBPACK_IMPORTED_MODULE_5___default()());\napp.use('/dist', express__WEBPACK_IMPORTED_MODULE_0___default().static(path__WEBPACK_IMPORTED_MODULE_9___default().join(CURRENT_WORKING_DIR, 'dist'))); //mount routes\n\napp.use('/', _routes_user_routes__WEBPACK_IMPORTED_MODULE_7__.default);\napp.use('/', _routes_auth_routes__WEBPACK_IMPORTED_MODULE_8__.default);\napp.get('*', (req, res) => {\n  //generating CSS and markup\n  const sheetsRegistry = new react_jss_lib_jss__WEBPACK_IMPORTED_MODULE_16__.SheetsRegistry();\n  const context = {};\n  const generateClassName = (0,material_ui_styles__WEBPACK_IMPORTED_MODULE_15__.createGenerateClassName)();\n  const theme = (0,material_ui_styles__WEBPACK_IMPORTED_MODULE_15__.createMuiTheme)({\n    palette: {\n      primary: {\n        light: '#757de8',\n        main: '#3f51b5',\n        dark: '#002984',\n        contrastText: '#fff'\n      },\n      secondary: {\n        light: '#ff79b0',\n        main: '#ff4081',\n        dark: '#c60055',\n        contrastText: '#000'\n      },\n      openTitle: material_ui_colors__WEBPACK_IMPORTED_MODULE_17__.indigo[400],\n      protectedTitle: material_ui_colors__WEBPACK_IMPORTED_MODULE_17__.pink[400],\n      type: 'light'\n    }\n  });\n  const markup = react_dom_server__WEBPACK_IMPORTED_MODULE_11___default().renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement((react_router_dom_StaticRouter__WEBPACK_IMPORTED_MODULE_12___default()), {\n    location: req.url,\n    context: context\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement((react_jss_lib_JssProvider__WEBPACK_IMPORTED_MODULE_14___default()), {\n    registry: sheetsRegistry,\n    generateClassName: generateClassName\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement(material_ui_styles__WEBPACK_IMPORTED_MODULE_15__.MuiThemeProvider, {\n    theme: theme,\n    sheetsManager: new Map()\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement(_client_MainRouter__WEBPACK_IMPORTED_MODULE_13__.default, null)))));\n\n  if (context.url) {\n    return res.redirect(303, context.url);\n  }\n\n  const css = sheetsRegistry.toString();\n  res.status(200).send((0,_template__WEBPACK_IMPORTED_MODULE_6__.default)({\n    markup: markup,\n    css: css\n  }));\n});\napp.use((err, req, res, next) => {\n  if (err.name === 'Unauthorized error') {\n    res.status(401).json({\n      \"error\": err.name + \": \" + err.message\n    });\n  } else if (err) {\n    res.status(400).json({\n      \"error\": err.name + \": \" + err.message\n    });\n    console.log(err);\n  }\n});\nconst _default = app;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/server/express.js\");\n  reactHotLoader.register(app, \"app\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/server/express.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/server/express.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-simplesetup/./server/express.js?");

/***/ }),

/***/ "./server/helpers/dbErrorHandler.js":
/*!******************************************!*\
  !*** ./server/helpers/dbErrorHandler.js ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst getErrorMessage = err => {\n  let message = '';\n\n  if (err.code) {\n    switch (err.code) {\n      case 11000:\n      case 11001:\n        message = getUniqueErrorMessage(err);\n        break;\n\n      default:\n        message = 'Something went wrong';\n    }\n  } else {\n    for (let errName in err.errors) {\n      if (err.errors[errName].message) message = err.errors[errName].message;\n    }\n  }\n\n  return message;\n};\n\nconst getUniqueErrorMessage = err => {\n  let output;\n\n  try {\n    let fieldName = err.message.substring(err.message, lasIndexOf('.$') + 2, err.message.lastIndexOf('_1'));\n    output = fieldName.charAt(0).toUpperCase() + fieldName.slice(1) + ' already exists';\n  } catch (ex) {\n    output = 'Unique field already exists';\n  }\n\n  return output;\n};\n\nconst _default = {\n  getErrorMessage,\n  getUniqueErrorMessage\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(getErrorMessage, \"getErrorMessage\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/server/helpers/dbErrorHandler.js\");\n  reactHotLoader.register(getUniqueErrorMessage, \"getUniqueErrorMessage\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/server/helpers/dbErrorHandler.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/server/helpers/dbErrorHandler.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-simplesetup/./server/helpers/dbErrorHandler.js?");

/***/ }),

/***/ "./server/models/user.model.js":
/*!*************************************!*\
  !*** ./server/models/user.model.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\nconst UserSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n  name: {\n    type: String,\n    trim: true,\n    required: 'Name is required'\n  },\n  email: {\n    type: String,\n    trim: true,\n    unique: 'Email already exists',\n    match: [/.+\\@.+\\..+/, 'Please fill a valid email address'],\n    required: 'Email is required'\n  },\n  created: {\n    type: Date,\n    default: Date.now\n  },\n  about: {\n    type: String,\n    trim: true\n  },\n  updated: Date,\n  hashed_password: {\n    type: String,\n    required: 'Password is required'\n  },\n  salt: String\n});\nUserSchema.virtual('password').set(function (password) {\n  this._password = password;\n  this.salt = this.makeSalt();\n  this.hashed_password = this.encryptPassword(password);\n}).get(function () {\n  return this._password;\n}); // validation constraints to make sure that the password is strong\n\nUserSchema.path('hashed_password').validate(function (v) {\n  if (this._password && this._password.length < 6) {\n    this.invalidate('password', 'Password must be at least 6 characters.');\n  }\n\n  if (this.isNew && !this._password) {\n    this.invalidate('password', 'Password is required');\n  }\n}, null); // This is used to encrypt user's password\n\nUserSchema.methods = {\n  authenticate: function (plainText) {\n    return this.encryptPassword(plainText) === this.hashed_password;\n  },\n  encryptPassword: function (password) {\n    if (!password) return ' ';\n\n    try {\n      return crypto.createHmac('sha1', this.salt).update(password).digest('hex');\n    } catch (err) {\n      return ' ';\n    }\n  },\n  makeSalt: function () {\n    return Math.round(new Date().valueOf() * Math.random()) + '';\n  }\n};\n\nconst _default = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('User', UserSchema);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(UserSchema, \"UserSchema\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/server/models/user.model.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/server/models/user.model.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-simplesetup/./server/models/user.model.js?");

/***/ }),

/***/ "./server/routes/auth.routes.js":
/*!**************************************!*\
  !*** ./server/routes/auth.routes.js ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route('/auth/signin').post(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__.default.signin);\nrouter.route('/auth/signout').get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__.default.signout);\nconst _default = router;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/server/routes/auth.routes.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/server/routes/auth.routes.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-simplesetup/./server/routes/auth.routes.js?");

/***/ }),

/***/ "./server/routes/user.routes.js":
/*!**************************************!*\
  !*** ./server/routes/user.routes.js ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/user.controller */ \"./server/controllers/user.controller.js\");\n/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route('/api/users').get(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__.default.list).post(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__.default.create);\nrouter.route('/api/users/:userId').get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__.default.requireSignin, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__.default.read).put(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__.default.requireSignin, _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__.default.hasAuthorization, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__.default.update).delete(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__.default.requireSignin, _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__.default.hasAuthorization, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__.default.remove);\nrouter.route('/api/users/photo/:userId').get(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__.default.photo, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__.default.defaultPhoto);\nrouter.route('/api/users/defaultphoto').get(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__.default.defaultPhoto);\nrouter.param('userId', _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__.default.userByID);\nconst _default = router;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/server/routes/user.routes.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/server/routes/user.routes.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-simplesetup/./server/routes/user.routes.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/config */ \"./config/config.js\");\n/* harmony import */ var _express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./express */ \"./server/express.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n(mongoose__WEBPACK_IMPORTED_MODULE_2___default().Promise) = global.Promise;\nmongoose__WEBPACK_IMPORTED_MODULE_2___default().connect(_config_config__WEBPACK_IMPORTED_MODULE_0__.default.mongoUri);\nmongoose__WEBPACK_IMPORTED_MODULE_2___default().connection.on('error', () => {\n  throw new Error(`unable to connect to database: ${mongoUri}`);\n});\n_express__WEBPACK_IMPORTED_MODULE_1__.default.listen(_config_config__WEBPACK_IMPORTED_MODULE_0__.default.port, err => {\n  if (err) {\n    console.log(err);\n  }\n\n  console.info('Server started on port %s.', _config_config__WEBPACK_IMPORTED_MODULE_0__.default.port);\n});\n\n//# sourceURL=webpack://mern-simplesetup/./server/server.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst _default = ({\n  markup,\n  css\n}) => {\n  return `<!doctype html>\n      <html lang=\"en\">\n        <head>\n          <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Roboto:100,300,400\">\n          <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n          <meta charset=\"utf-8\">\n          <title>MERN Backend</title>\n        </head>\n        <body>\n          <div id=\"root\">${markup}</div>\n          <style id=\"jss-server-side\">${css}</style>\n          <script type=\"text/javascript\" src=\"/dist/bundle.js\"></script>\n        </body>\n      </html>`;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/template.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-simplesetup/./template.js?");

/***/ }),

/***/ "./webpack.config.client.js":
/*!**********************************!*\
  !*** ./webpack.config.client.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nconst webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nconst CURRENT_WORKING_DIR = process.cwd();\nconst config = {\n  name: \"browser\",\n  mode: \"development\",\n  devtool: 'eval-source-map',\n  entry: ['react-hot-loader/patch', 'webpack-hot-middleware/client?reload=true', path.join(CURRENT_WORKING_DIR, 'client/main.js')],\n  output: {\n    path: path.join(CURRENT_WORKING_DIR, '/dist'),\n    filename: 'bundle.js',\n    publicPath: \"/dist/\"\n  },\n  module: {\n    rules: [{\n      test: /\\.jsx?$/,\n      exclude: /node_modules/,\n      use: ['babel-loader']\n    }, {\n      test: /\\.(ttf|eot|svg|gif|jpg|png)(\\?[\\s\\S]+)?$/,\n      use: 'file-loader'\n    }]\n  },\n  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()]\n};\nmodule.exports = config;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/webpack.config.client.js\");\n  reactHotLoader.register(config, \"config\", \"/Users/elifturan/Desktop/2021/CS/fullStackPractice/backendMERN/webpack.config.client.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-simplesetup/./webpack.config.client.js?");

/***/ }),

/***/ "./assets/profile-pic.jpg":
/*!********************************!*\
  !*** ./assets/profile-pic.jpg ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"5843c96bd655fbdd1b63cac15d3f4017.jpg\");\n\n//# sourceURL=webpack://mern-simplesetup/./assets/profile-pic.jpg?");

/***/ }),

/***/ "./assets/unicorn.jpg":
/*!****************************!*\
  !*** ./assets/unicorn.jpg ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"5843c96bd655fbdd1b63cac15d3f4017.jpg\");\n\n//# sourceURL=webpack://mern-simplesetup/./assets/unicorn.jpg?");

/***/ }),

/***/ "@material-ui/core/Divider":
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"@material-ui/core/Divider\");;\n\n//# sourceURL=webpack://mern-simplesetup/external_%22@material-ui/core/Divider%22?");

/***/ }),

/***/ "@material-ui/icons/AddCircleOutline":
/*!******************************************************!*\
  !*** external "@material-ui/icons/AddCircleOutline" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"@material-ui/icons/AddCircleOutline\");;\n\n//# sourceURL=webpack://mern-simplesetup/external_%22@material-ui/icons/AddCircleOutline%22?");

/***/ }),

/***/ "@material-ui/icons/ArrowForward":
/*!**************************************************!*\
  !*** external "@material-ui/icons/ArrowForward" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"@material-ui/icons/ArrowForward\");;\n\n//# sourceURL=webpack://mern-simplesetup/external_%22@material-ui/icons/ArrowForward%22?");

/***/ }),

/***/ "@material-ui/icons/Edit":
/*!******************************************!*\
  !*** external "@material-ui/icons/Edit" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"@material-ui/icons/Edit\");;\n\n//# sourceURL=webpack://mern-simplesetup/external_%22@material-ui/icons/Edit%22?");

/***/ }),

/***/ "@material-ui/icons/Home":
/*!******************************************!*\
  !*** external "@material-ui/icons/Home" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"@material-ui/icons/Home\");;\n\n//# sourceURL=webpack://mern-simplesetup/external_%22@material-ui/icons/Home%22?");

/***/ }),

/***/ "@material-ui/icons/Person":
/*!********************************************!*\
  !*** external "@material-ui/icons/Person" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"@material-ui/icons/Person\");;\n\n//# sourceURL=webpack://mern-simplesetup/external_%22@material-ui/icons/Person%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"body-parser\");;\n\n//# sourceURL=webpack://mern-simplesetup/external_%22body-parser%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"compression\");;\n\n//# sourceURL=webpack://mern-simplesetup/external_%22compression%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"cookie-parser\");;\n\n//# sourceURL=webpack://mern-simplesetup/external_%22cookie-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"cors\");;\n\n//# sourceURL=webpack://mern-simplesetup/external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"express\");;\n\n//# sourceURL=webpack://mern-simplesetup/external_%22express%22?");

/***/ }),

/***/ "express-jwt":
/*!******************************!*\
  !*** external "express-jwt" ***!
  \******************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"express-jwt\");;\n\n//# sourceURL=webpack://mern-simplesetup/external_%22express-jwt%22?");

/***/ }),

/***/ "formidable":
/*!*****************************!*\
  !*** external "formidable" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"formidable\");;\n\n//# sourceURL=webpack://mern-simplesetup/external_%22formidable%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"fs\");;\n\n//# sourceURL=webpack://mern-simplesetup/external_%22fs%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"helmet\");;\n\n//# sourceURL=webpack://mern-simplesetup/external_%22helmet%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"jsonwebtoken\");;\n\n//# sourceURL=webpack://mern-simplesetup/external_%22jsonwebtoken%22?");

/***/ }),

/***/ "lodash/extend":
/*!********************************!*\
  !*** external "lodash/extend" ***!
  \********************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"lodash/extend\");;\n\n//# sourceURL=webpack://mern-simplesetup/external_%22lodash/extend%22?");

/***/ }),

/***/ "material-ui":
/*!******************************!*\
  !*** external "material-ui" ***!
  \******************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"material-ui\");;\n\n//# sourceURL=webpack://mern-simplesetup/external_%22material-ui%22?");

/***/ }),

/***/ "material-ui/AppBar":
/*!*************************************!*\
  !*** external "material-ui/AppBar" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"material-ui/AppBar\");;\n\n//# sourceURL=webpack://mern-simplesetup/external_%22material-ui/AppBar%22?");

/***/ }),

/***/ "material-ui/Avatar":
/*!*************************************!*\
  !*** external "material-ui/Avatar" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"material-ui/Avatar\");;\n\n//# sourceURL=webpack://mern-simplesetup/external_%22material-ui/Avatar%22?");

/***/ }),

/***/ "material-ui/Button":
/*!*************************************!*\
  !*** external "material-ui/Button" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"material-ui/Button\");;\n\n//# sourceURL=webpack://mern-simplesetup/external_%22material-ui/Button%22?");

/***/ }),

/***/ "material-ui/Card":
/*!***********************************!*\
  !*** external "material-ui/Card" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"material-ui/Card\");;\n\n//# sourceURL=webpack://mern-simplesetup/external_%22material-ui/Card%22?");

/***/ }),

/***/ "material-ui/Dialog":
/*!*************************************!*\
  !*** external "material-ui/Dialog" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"material-ui/Dialog\");;\n\n//# sourceURL=webpack://mern-simplesetup/external_%22material-ui/Dialog%22?");

/***/ }),

/***/ "material-ui/Icon":
/*!***********************************!*\
  !*** external "material-ui/Icon" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"material-ui/Icon\");;\n\n//# sourceURL=webpack://mern-simplesetup/external_%22material-ui/Icon%22?");

/***/ }),

/***/ "material-ui/IconButton":
/*!*****************************************!*\
  !*** external "material-ui/IconButton" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"material-ui/IconButton\");;\n\n//# sourceURL=webpack://mern-simplesetup/external_%22material-ui/IconButton%22?");

/***/ }),

/***/ "material-ui/List":
/*!***********************************!*\
  !*** external "material-ui/List" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"material-ui/List\");;\n\n//# sourceURL=webpack://mern-simplesetup/external_%22material-ui/List%22?");

/***/ }),

/***/ "material-ui/Paper":
/*!************************************!*\
  !*** external "material-ui/Paper" ***!
  \************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"material-ui/Paper\");;\n\n//# sourceURL=webpack://mern-simplesetup/external_%22material-ui/Paper%22?");

/***/ }),

/***/ "material-ui/Tabs":
/*!***********************************!*\
  !*** external "material-ui/Tabs" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"material-ui/Tabs\");;\n\n//# sourceURL=webpack://mern-simplesetup/external_%22material-ui/Tabs%22?");

/***/ }),

/***/ "material-ui/TextField":
/*!****************************************!*\
  !*** external "material-ui/TextField" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"material-ui/TextField\");;\n\n//# sourceURL=webpack://mern-simplesetup/external_%22material-ui/TextField%22?");

/***/ }),

/***/ "material-ui/Toolbar":
/*!**************************************!*\
  !*** external "material-ui/Toolbar" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"material-ui/Toolbar\");;\n\n//# sourceURL=webpack://mern-simplesetup/external_%22material-ui/Toolbar%22?");

/***/ }),

/***/ "material-ui/Typography":
/*!*****************************************!*\
  !*** external "material-ui/Typography" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"material-ui/Typography\");;\n\n//# sourceURL=webpack://mern-simplesetup/external_%22material-ui/Typography%22?");

/***/ }),

/***/ "material-ui/colors":
/*!*************************************!*\
  !*** external "material-ui/colors" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"material-ui/colors\");;\n\n//# sourceURL=webpack://mern-simplesetup/external_%22material-ui/colors%22?");

/***/ }),

/***/ "material-ui/icons/Delete":
/*!*******************************************!*\
  !*** external "material-ui/icons/Delete" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"material-ui/icons/Delete\");;\n\n//# sourceURL=webpack://mern-simplesetup/external_%22material-ui/icons/Delete%22?");

/***/ }),

/***/ "material-ui/styles":
/*!*************************************!*\
  !*** external "material-ui/styles" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"material-ui/styles\");;\n\n//# sourceURL=webpack://mern-simplesetup/external_%22material-ui/styles%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"mongoose\");;\n\n//# sourceURL=webpack://mern-simplesetup/external_%22mongoose%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"path\");;\n\n//# sourceURL=webpack://mern-simplesetup/external_%22path%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"prop-types\");;\n\n//# sourceURL=webpack://mern-simplesetup/external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"react\");;\n\n//# sourceURL=webpack://mern-simplesetup/external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"react-dom/server\");;\n\n//# sourceURL=webpack://mern-simplesetup/external_%22react-dom/server%22?");

/***/ }),

/***/ "react-jss/lib/JssProvider":
/*!********************************************!*\
  !*** external "react-jss/lib/JssProvider" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"react-jss/lib/JssProvider\");;\n\n//# sourceURL=webpack://mern-simplesetup/external_%22react-jss/lib/JssProvider%22?");

/***/ }),

/***/ "react-jss/lib/jss":
/*!************************************!*\
  !*** external "react-jss/lib/jss" ***!
  \************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"react-jss/lib/jss\");;\n\n//# sourceURL=webpack://mern-simplesetup/external_%22react-jss/lib/jss%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"react-router-dom\");;\n\n//# sourceURL=webpack://mern-simplesetup/external_%22react-router-dom%22?");

/***/ }),

/***/ "react-router-dom/StaticRouter":
/*!************************************************!*\
  !*** external "react-router-dom/StaticRouter" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"react-router-dom/StaticRouter\");;\n\n//# sourceURL=webpack://mern-simplesetup/external_%22react-router-dom/StaticRouter%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"webpack\");;\n\n//# sourceURL=webpack://mern-simplesetup/external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"webpack-dev-middleware\");;\n\n//# sourceURL=webpack://mern-simplesetup/external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"webpack-hot-middleware\");;\n\n//# sourceURL=webpack://mern-simplesetup/external_%22webpack-hot-middleware%22?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/dist/";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./server/server.js");
/******/ })()
;