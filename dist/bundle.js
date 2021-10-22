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

eval("const {\n  addBodyDiv,\n  waitForElement,\n  addListener,\n  addStyles,\n} = __webpack_require__(/*! ../util */ \"./src/js/util.js\");\n\nconst appendButton = () => {\n  const htmlString = `\n    <div class=\"PresizeQ__Button\">\n      <span class=\"material-icons\">checkroom</span> Click to try on our new collection!\n    </div>\n  `;\n  const className = \"PresizeQ__ButtonWrapper\";\n  addBodyDiv(htmlString, className, true);\n  addListener(`.${className}`, popupClickHandler);\n};\n\nconst popupClickHandler = (e) => {\n  e.preventDefault();\n  const popUpClass = \"PresizeQ__Wrapper\";\n  const popUp = document.querySelector(`.${popUpClass}`);\n\n  let isHidden = popUp.classList.contains(\"-Hidden\");\n\n  if (isHidden) {\n    document.body.classList.add(\"-NoScroll\");\n    popUp.classList.remove(\"-Hidden\");\n  } else {\n    document.body.classList.remove(\"-NoScroll\");\n    popUp.classList.add(\"-Hidden\");\n  }\n};\n\nmodule.exports = {\n  appendButton,\n  popupClickHandler,\n};\n\n\n//# sourceURL=webpack://presize-q-webshop-plugin/./src/js/components/button.js?");

/***/ }),

/***/ "./src/js/components/images.js":
/*!*************************************!*\
  !*** ./src/js/components/images.js ***!
  \*************************************/
/***/ ((module) => {

eval("const imageList = [\n  \"http://i.imgur.com/hkPh9tR.jpg\",\n  \"https://i.imgur.com/A90bCyd.jpg\",\n  \"https://i.imgur.com/hSJABc4.jpg\",\n  \"https://i.imgur.com/4pYPzby.jpg\",\n  \"https://i.imgur.com/TvLK0uL.jpg\",\n  \"https://i.imgur.com/PlIdi0z.jpg\",\n  \"https://i.imgur.com/S8SnENg.jpg\",\n  \"https://i.imgur.com/fhFlhwU.jpg\",\n  \"https://i.imgur.com/1XzpnlR.jpg\",\n  \"https://i.imgur.com/OjcG8uP.jpg\",\n];\n\nconst imagesHtml = `\n<img src=\"https://i.ibb.co/M6fyY7J/5l4dy5o3j1zn3e42y52lspa3ed-211020-125439.jpg\" class=\"SwipeImage\" data-index=\"0\">\n<img src=\"https://i.ibb.co/Wvj3y56/58bm68397705c84r0frpmec1wg-211020-125411.jpg\" class=\"SwipeImage -Hidden\" data-index=\"1\">\n<img src=\"https://i.ibb.co/Fm0QCbn/451iohkn1kv5j6h8f5yuajy8n3-211020-124641.jpg\" class=\"SwipeImage -Hidden\" data-index=\"2\">\n<img src=\"https://i.ibb.co/njZNcYq/adrbarc0yeu5a42ed5luvk2i6i-211020-125711.jpg\" class=\"SwipeImage -Hidden\" data-index=\"3\">\n<img src=\"https://i.ibb.co/JnHk16h/bf455m5qh9cxp07hrm621tcl40-211020-124958.jpg\" class=\"SwipeImage -Hidden\" data-index=\"4\">\n<img src=\"https://i.ibb.co/QHP1jfh/cftoqvetdv9b1oga01iof2iz1h-211020-124830.jpg\" class=\"SwipeImage -Hidden\" data-index=\"5\">\n<img src=\"https://i.ibb.co/PNTgXCD/deejpbk1scqyfr2vpkl9b8q5qr-211020-094117.jpg\" class=\"SwipeImage -Hidden\" data-index=\"6\">\n<img src=\"https://i.ibb.co/6N0n0X9/orw7i0xavdvy91pf7w2e9dkgd3-211020-093733.jpg\" class=\"SwipeImage -Hidden\" data-index=\"7\">\n<img src=\"https://i.ibb.co/9W48Y8F/vaal8n913xuqcqyf3qjf4yugpe-211020-125510.jpg\" class=\"SwipeImage -Hidden\" data-index=\"8\">\n<img src=\"https://i.ibb.co/cJhgNpB/ybfjea3b88awnhjr3r1i09r995-211020-124735.jpg\" class=\"SwipeImage -Hidden\" data-index=\"9\">`;\n\nconst imageButtonHandler = (e) => {\n  const imageSection = document.querySelector(\".ImageSection\");\n  const currentIndex = parseInt(imageSection.getAttribute(\"data-current\"));\n\n  const currentImg = document.querySelector(\n    `.SwipeImage[data-index=\"${currentIndex}\"]`\n  );\n  if (currentImg) {\n    currentImg.classList.add(\"-Hidden\");\n    let newIndex = currentIndex + 1;\n\n    if (newIndex > 9) {\n      newIndex = 0;\n    }\n\n    const newImg = document.querySelector(\n      `.SwipeImage[data-index=\"${newIndex}\"]`\n    );\n    if (newImg) {\n      newImg.classList.remove(\"-Hidden\");\n      imageSection.setAttribute(\"data-current\", newIndex);\n    }\n  }\n};\nmodule.exports = {\n  imageList,\n  imagesHtml,\n  imageButtonHandler,\n};\n\n\n//# sourceURL=webpack://presize-q-webshop-plugin/./src/js/components/images.js?");

/***/ }),

/***/ "./src/js/components/popup.js":
/*!************************************!*\
  !*** ./src/js/components/popup.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { addBodyDiv, addListener } = __webpack_require__(/*! ../util */ \"./src/js/util.js\");\nconst { popupClickHandler } = __webpack_require__(/*! ./button */ \"./src/js/components/button.js\");\nconst { imageList, imagesHtml, imageButtonHandler } = __webpack_require__(/*! ./images */ \"./src/js/components/images.js\");\n\nconst appendPopup = () => {\n  //let imagesHtml = `<img src=\"${imageList[0]}\" class=\"SwipeImage\"/>`;\n\n  const htmlString = `\n    <div class=\"PresizeQ__Wrapper -Hidden\">\n        <div class=\"PresizeQ\"> \n            <div class=\"Card\">\n                <div class=\"Card__Close\">\n                    <span class=\"material-icons Card__CloseIcon\">\n                        close\n                    </span>\n                </div>\n                <div class=\"StartPage\">\n                    <div class=\"Card__Title\">Presize-Q</div>\n                    <div class=\"Card__Subheading\">Try on our new collection!</div>\n                    <a class=\"CustomizeButton\">Upload scan</a>\n                    <a class=\"StartButton\">Start</a>\n                </div>\n                <div class=\"MainPage -Hidden\">\n                    <div class=\"Settings\"><span class=\"material-icons\">settings</span></div>\n                    <select class=\"CollectionDropdown\">\n                        <option>\n                            Summer Collection \n                        </option>\n                        <option>\n                            Nightlife Collection \n                        </option>\n                    </select>\n                    <div class=\"ImageSection\" data-current=\"0\">\n                        ${imagesHtml}\n                    </div>\n                    <div class=\"ReactionSection\">\n                        <div class=\"Reaction__No\">\n                            <span class=\"material-icons -LargeIcon\">not_interested</span>\n                        </div>\n                        <div class=\"Reaction__Yes\">\n                            <span class=\"material-icons -LargeIcon\">favorite_border</span>\n                        </div>\n                    </div>\n                    <div class=\"BuyNow\">\n                        <a href=\"#\" class=\"BuyNow__Button\">\n                            <span class=\"material-icons\">shopping_cart</span>\n                            Buy Now\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    `;\n  addBodyDiv(htmlString, \"PresizeQ__PopUp\");\n  addListener(\".Card__Close\", popupClickHandler);\n  addListener(\".Card__Close\", returnToStartHandler);\n  addListener(\".Reaction__Yes\", imageButtonHandler);\n  addListener(\".Reaction__No\", imageButtonHandler);\n  addListener(\".StartButton\", startHandler);\n};\n\nconst startHandler = (e) => {\n  document.querySelector(\".StartPage\").classList.add(\"-Hidden\");\n  document.querySelector(\".MainPage\").classList.remove(\"-Hidden\");\n};\n\nconst returnToStartHandler = (e) => {\n  document.querySelector(\".StartPage\").classList.remove(\"-Hidden\");\n  document.querySelector(\".MainPage\").classList.add(\"-Hidden\");\n};\n\nmodule.exports = {\n  appendPopup,\n};\n\n\n//# sourceURL=webpack://presize-q-webshop-plugin/./src/js/components/popup.js?");

/***/ }),

/***/ "./src/js/testCss.js":
/*!***************************!*\
  !*** ./src/js/testCss.js ***!
  \***************************/
/***/ ((module) => {

eval("let cssString = `\n@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap\");\n@import url(\"https://fonts.googleapis.com/icon?family=Material+Icons\");\n.-Hidden {\n  display: none !important; }\n\n.-NoScroll {\n  overflow: hidden; }\n\n.PresizeQ {\n  font-family: \"Roboto\", sans-serif;\n  z-index: 99;\n  background-color: rgba(0, 0, 0, 0.4);\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .PresizeQ__Wrapper {\n    z-index: 99999;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.Card {\n  padding: 16px;\n  width: 85%;\n  height: max-content;\n  background-color: #fff;\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: #333;\n  position: relative;\n  margin-bottom: 5%;\n  margin-top: 12%; }\n  .Card__Close {\n    position: absolute;\n    top: -5%;\n    background-color: #fff;\n    color: #333;\n    border: #333 solid 2px;\n    border-radius: 50%;\n    -moz-border-radius: 50%;\n    -webkit-border-radius: 50%;\n    width: 20px;\n    height: 20px;\n    transition: all 0.2s ease-in-out;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 12px; }\n    .Card__Close:hover {\n      cursor: pointer;\n      color: #383838;\n      background-color: #e6e6e6;\n      border-color: #383838; }\n  .Card__Title {\n    font-size: 48px;\n    font-weight: 900;\n    color: #3d52b9;\n    margin-top: 10px; }\n  .Card__Subheading {\n    font-size: 20px;\n    margin-bottom: 20px; }\n\n.PresizeQ__Button {\n  color: white;\n  background-color: #3d52b9;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 16px;\n  padding: 20px;\n  transition: all 0.2s ease-in-out;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .PresizeQ__Button > * {\n    margin-right: 4px; }\n  .PresizeQ__Button:hover {\n    background-color: #4459c1;\n    cursor: pointer; }\n\n.ImageSection {\n  width: 100%;\n  height: 60%; }\n\n.DummyImage {\n  width: 100%;\n  height: 40vh;\n  background-color: gray; }\n\n.ReactionSection {\n  display: flex;\n  margin: 10px 0; }\n  .ReactionSection > * {\n    height: 50px;\n    width: 50px;\n    border-radius: 50%;\n    border: solid #333 3px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 0 15px;\n    padding: 12px; }\n  .ReactionSection .Reaction__No {\n    color: #fff;\n    background-color: #e04b59; }\n  .ReactionSection .Reaction__Yes {\n    color: #fff;\n    background-color: #2dbc4e; }\n\n.-LargeIcon {\n  font-size: 40px; }\n\n.BuyNow {\n  margin-top: auto;\n  width: 100%; }\n  .BuyNow__Button {\n    text-decoration: none;\n    color: white;\n    background-color: #3d52b9;\n    padding: 20px 0;\n    font-size: 20px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-weight: 700;\n    border-radius: 4px; }\n    .BuyNow__Button .material-icons {\n      margin-right: 10px; }\n\n.CollectionDropdown {\n  font-size: 18px;\n  border-radius: 4px;\n  border: #666 solid 2px;\n  padding: 4px 0;\n  width: 100%;\n  text-align: center;\n  margin: 10px 0; }\n  .CollectionDropdown:focus {\n    outline: 0; }\n\n.Settings {\n  align-self: flex-start; }\n  .Settings .material-icons {\n    font-size: 30px; }\n\n.ImageSection {\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.StartPage {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n  width: 100%; }\n  .StartPage > a {\n    width: 100%;\n    font-size: 20px;\n    border-radius: 4px;\n    margin: 8px 0;\n    padding: 16px 0;\n    font-weight: 700;\n    border: #3d52b9 solid 3px; }\n  .StartPage .StartButton {\n    background-color: #3d52b9;\n    color: white; }\n  .StartPage .CustomizeButton {\n    color: #3d52b9; }\n\n.MainPage {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n\n`;\n\n//REMOVE FOR PRODUCTION\n//cssString = \"\";\n\nmodule.exports = {\n  cssString,\n};\n\n\n//# sourceURL=webpack://presize-q-webshop-plugin/./src/js/testCss.js?");

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