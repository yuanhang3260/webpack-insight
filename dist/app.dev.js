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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mA_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mA.js */ "./src/mA.js");
/* harmony import */ var _mA_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mA_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mB_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mB.js */ "./src/mB.js");



console.log("aa = " + _mA_js__WEBPACK_IMPORTED_MODULE_0__["aa"]);
console.log("mA.aa = " + _mA_js__WEBPACK_IMPORTED_MODULE_0___default.a.aa);

_mA_js__WEBPACK_IMPORTED_MODULE_0___default.a.getDate();

// ---------------------------------------------------------------------------//

console.log(_mB_js__WEBPACK_IMPORTED_MODULE_1__["default"]);


Object(_mB_js__WEBPACK_IMPORTED_MODULE_1__["printX"])();

var legacyB = __webpack_require__(/*! ./mB.js */ "./src/mB.js");
console.log(legacyB);

/***/ }),

/***/ "./src/mA.js":
/*!*******************!*\
  !*** ./src/mA.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

var aa = 1;

function getDate() {
  return new Date();
}

module.exports = {
  aa: aa,
  getDate: getDate
};

/***/ }),

/***/ "./src/mB.js":
/*!*******************!*\
  !*** ./src/mB.js ***!
  \*******************/
/*! exports provided: default, printX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printX", function() { return printX; });
let x = 3;

let printX = () => {
  console.log("x = " + x);
};

/* harmony default export */ __webpack_exports__["default"] = ({
  x: x
});



/***/ })

/******/ });
//# sourceMappingURL=app.dev.js.map