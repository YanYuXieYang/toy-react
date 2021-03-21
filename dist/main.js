/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ (() => {

eval("/*\r\n * @Author: your name\r\n * @Date: 2021-03-21 11:31:06\r\n * @LastEditTime: 2021-03-21 14:26:27\r\n * @LastEditors: Please set LastEditors\r\n * @Description: In User Settings Edit\r\n * @FilePath: \\toy-react\\main.js\r\n */\nfor (var _i = 0, _arr = [1, 2, 3]; _i < _arr.length; _i++) {\n  var i = _arr[_i];\n  console.log(i);\n}\n\nfunction createElement(tagName, attributes) {\n  var e = document.createElement(tagName);\n\n  for (var p in attributes) {\n    e.setAttribute(p, attributes[p]);\n  }\n\n  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    children[_key - 2] = arguments[_key];\n  }\n\n  for (var _i2 = 0, _children = children; _i2 < _children.length; _i2++) {\n    var child = _children[_i2];\n\n    if (typeof child === 'string') {\n      child = document.createTextNode(child);\n    }\n\n    e.appendChild(child);\n  }\n\n  return e;\n}\n\nwindow.a = createElement(\"div\", {\n  id: \"a\",\n  \"class\": \"c\"\n}, createElement(\"div\", null, \"A\"), createElement(\"div\", null, \"B\"), createElement(\"div\", null, \"C\"));\ndocument.body.appendChild(createElement(\"div\", {\n  id: \"a\",\n  \"class\": \"c\"\n}, createElement(\"div\", null, \"x\"), createElement(\"div\", null, \"y\"), createElement(\"div\", null, \"z\")));\n\n//# sourceURL=webpack://toy-react/./main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./main.js"]();
/******/ 	
/******/ })()
;