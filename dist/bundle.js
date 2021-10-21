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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_components_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/components/button */ \"./src/js/components/button.js\");\n/* harmony import */ var _js_components_button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_components_button__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_components_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/components/popup */ \"./src/js/components/popup.js\");\n/* harmony import */ var _js_components_popup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_components_popup__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_testCss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/testCss */ \"./src/js/testCss.js\");\n/* harmony import */ var _js_testCss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_testCss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _js_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/util */ \"./src/js/util.js\");\n/* harmony import */ var _js_util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_util__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n(() => {\n  (0,_js_util__WEBPACK_IMPORTED_MODULE_3__.addStyles)(_js_testCss__WEBPACK_IMPORTED_MODULE_2__.cssString);\n  (0,_js_components_button__WEBPACK_IMPORTED_MODULE_0__.appendButton)();\n  (0,_js_components_popup__WEBPACK_IMPORTED_MODULE_1__.appendPopup)();\n})();\n\n\n//# sourceURL=webpack://presize-q-webshop-plugin/./src/index.js?");

/***/ }),

/***/ "./src/js/components/button.js":
/*!*************************************!*\
  !*** ./src/js/components/button.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const {\n  addBodyDiv,\n  waitForElement,\n  addListener,\n  addStyles,\n} = __webpack_require__(/*! ../util */ \"./src/js/util.js\");\n\nconst appendButton = () => {\n  const htmlString = `\n    <div class=\"PresizeQ__Button\">\n      <span class=\"material-icons\">checkroom</span> Try on\n    </div>\n  `;\n  const className = \"PresizeQ__ButtonWrapper\";\n  addBodyDiv(htmlString, className, true);\n  addListener(`.${className}`, popupClickHandler);\n};\n\nconst popupClickHandler = (e) => {\n  e.preventDefault();\n  const popUpClass = \"PresizeQ__Wrapper\";\n  const popUp = document.querySelector(`.${popUpClass}`);\n\n  let isHidden = popUp.classList.contains(\"-Hidden\");\n\n  if (isHidden) {\n    document.body.classList.add(\"-NoScroll\");\n    popUp.classList.remove(\"-Hidden\");\n  } else {\n    document.body.classList.remove(\"-NoScroll\");\n    popUp.classList.add(\"-Hidden\");\n  }\n};\n\nmodule.exports = {\n  appendButton,\n  popupClickHandler,\n};\n\n\n//# sourceURL=webpack://presize-q-webshop-plugin/./src/js/components/button.js?");

/***/ }),

/***/ "./src/js/components/popup.js":
/*!************************************!*\
  !*** ./src/js/components/popup.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { addBodyDiv, addListener } = __webpack_require__(/*! ../util */ \"./src/js/util.js\");\nconst { popupClickHandler } = __webpack_require__(/*! ./button */ \"./src/js/components/button.js\");\n\nconst appendPopup = () => {\n  const htmlString = `\n    <div class=\"PresizeQ__Wrapper -Hidden\">\n        <div class=\"PresizeQ\"> \n            <div class=\"Card\">\n                <div class=\"Card__Close\">\n                    <span class=\"material-icons Card__CloseIcon\">\n                        close\n                    </span>\n                </div>\n                <div class=\"Card__Title\">Presize-Q</div>\n                <div class=\"Card__Subheading\">Jetzt neue Klamotten entdecken!</div>\n                <div class=\"BuyNow\">\n                    <a href=\"#\" class=\"BuyNow__Button\">Buy Now</a>\n                    <img src=\"https://link.com/zum/bild.png\" alt=\"\" />\n                </div>\n            </div>\n        </div>\n    </div>\n    `;\n  addBodyDiv(htmlString, \"PresizeQ__PopUp\");\n  addListener(\".Card__Close\", popupClickHandler);\n};\n\nmodule.exports = {\n  appendPopup,\n};\n\n\n//# sourceURL=webpack://presize-q-webshop-plugin/./src/js/components/popup.js?");

/***/ }),

/***/ "./src/js/testCss.js":
/*!***************************!*\
  !*** ./src/js/testCss.js ***!
  \***************************/
/***/ ((module) => {

eval("let cssString = `\n@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap\");\n@import url(\"https://fonts.googleapis.com/icon?family=Material+Icons\");\n.-Hidden {\n  display: none; }\n\n.-NoScroll {\n  overflow: hidden; }\n\n.PresizeQ {\n  font-family: \"Roboto\", sans-serif;\n  z-index: 99;\n  background-color: rgba(0, 0, 0, 0.4);\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .PresizeQ__Wrapper {\n    z-index: 99999;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.Card {\n  padding: 16px;\n  width: 800px;\n  height: 700px;\n  background-color: #fff;\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: #333;\n  position: relative; }\n  .Card__Close {\n    position: absolute;\n    top: -20px;\n    right: -30px;\n    background-color: #fff;\n    color: #333;\n    border: #333 solid 2px;\n    border-radius: 50%;\n    -moz-border-radius: 50%;\n    -webkit-border-radius: 50%;\n    width: 25px;\n    height: 25px;\n    transition: all 0.2s ease-in-out;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n    .Card__Close:hover {\n      cursor: pointer;\n      color: #383838;\n      background-color: #e6e6e6;\n      border-color: #383838; }\n  .Card__Title {\n    font-size: 48px;\n    font-weight: 900;\n    color: #02adad; }\n  .Card__Subheading {\n    font-size: 20px; }\n\n.PresizeQ__Button {\n  color: white;\n  background-color: #02adad;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 18px;\n  padding: 16px 32px;\n  width: max-content;\n  margin: 8px;\n  border-radius: 4px;\n  transition: all 0.2s ease-in-out;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .PresizeQ__Button > * {\n    margin-right: 4px; }\n  .PresizeQ__Button:hover {\n    background-color: #02bcbc;\n    cursor: pointer; }\n\n`;\n\n//REMOVE FOR PRODUCTION\n//cssString = \"\";\n\nmodule.exports = {\n  cssString,\n};\n\n\n//# sourceURL=webpack://presize-q-webshop-plugin/./src/js/testCss.js?");

/***/ }),

/***/ "./src/js/util.js":
/*!************************!*\
  !*** ./src/js/util.js ***!
  \************************/
/***/ ((module) => {

eval("/**\n *\n * @param {string} selector -\n * @param {function} callback -\n */\nconst waitForElement = (selector, callback) => {\n  const el = document.querySelector(selector);\n\n  if (!el) {\n    setTimeout(() => {\n      waitForElement(selector, callback);\n    }, 100);\n\n    return;\n  }\n\n  callback(el);\n};\n\n/**\n *\n * @param {HTMLElement} element -\n * @param {HTMLELment} targetElement -\n * @param {'before'|'after'} position -\n */\nconst appendElement = (element, targetElement, position) => {\n  targetElement.parentNode.insertBefore(\n    element,\n    position === \"after\" ? targetElement.nextSibling : targetElement\n  );\n};\n\n/**\n *\n * @param {*} htmlString -\n * @param {*} className -\n */\nconst addBodyDiv = (htmlString, className = null, isFirstChild = false) => {\n  const selector = \"body\";\n  waitForElement(selector, (target) => {\n    const div = document.createElement(\"div\");\n\n    if (className) {\n      div.classList.add(className);\n    }\n\n    div.innerHTML = htmlString;\n\n    if (isFirstChild) {\n      target.insertBefore(div, target.firstChild);\n    } else {\n      target.appendChild(div);\n    }\n  });\n};\n\n/**\n *\n * @param {String} cssString -\n */\nconst addStyles = (cssString) => {\n  const styleElement = document.createElement(\"style\");\n  styleElement.innerHTML = cssString;\n\n  document.head.appendChild(styleElement);\n};\n\n/**\n *\n * @param {*} selector -\n * @param {*} handler -\n * @param {*} type -\n */\nconst addListener = (selector, handler, type = \"click\") => {\n  waitForElement(selector, (target) => {\n    target.addEventListener(type, (e) => handler(e));\n  });\n};\n\nmodule.exports = {\n  addStyles,\n  addBodyDiv,\n  waitForElement,\n  addListener,\n};\n\n\n//# sourceURL=webpack://presize-q-webshop-plugin/./src/js/util.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;