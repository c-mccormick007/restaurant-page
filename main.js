/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad.js */ \"./src/pageLoad.js\");\n/* harmony import */ var _pageLoadContact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageLoadContact.js */ \"./src/pageLoadContact.js\");\n/* harmony import */ var _pageLoadMenu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pageLoadMenu.js */ \"./src/pageLoadMenu.js\");\n/* harmony import */ var _pageFunctions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pageFunctions.js */ \"./src/pageFunctions.js\");\nconsole.log('index.js connected.')\n\n;\n\n\n\n\nlet buttonMain = document.getElementById('main');\nlet buttonContact = document.getElementById('contact');\nlet buttonMenu = document.getElementById('menu');\n\nbuttonMain.addEventListener('click',() => {\n    (0,_pageFunctions_js__WEBPACK_IMPORTED_MODULE_3__.removeContent)();\n    (0,_pageLoad_js__WEBPACK_IMPORTED_MODULE_0__.populatePageMain)();\n});\n\nbuttonMenu.addEventListener('click',() => {\n    (0,_pageFunctions_js__WEBPACK_IMPORTED_MODULE_3__.removeContent)();\n    (0,_pageLoadMenu_js__WEBPACK_IMPORTED_MODULE_2__.populatePageMenu)();\n});\n\nbuttonContact.addEventListener('click',() => {\n    (0,_pageFunctions_js__WEBPACK_IMPORTED_MODULE_3__.removeContent)();\n    (0,_pageLoadContact_js__WEBPACK_IMPORTED_MODULE_1__.populatePageContact)();\n});\n\n(0,_pageLoad_js__WEBPACK_IMPORTED_MODULE_0__.populatePageMain)();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/pageFunctions.js":
/*!******************************!*\
  !*** ./src/pageFunctions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"removeContent\": () => (/* binding */ removeContent)\n/* harmony export */ });\nlet removeContent = () => {\n    const contentDiv = document.getElementById('content');\n    console.log('content removed.')\n    contentDiv.replaceChildren();\n\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/pageFunctions.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"populatePageMain\": () => (/* binding */ populatePageMain)\n/* harmony export */ });\nlet populatePageMain = () => {\n    const contentDiv = document.getElementById('content');\n\n    const pageHeader = document.createElement('h1');\n    pageHeader.innerText = \"SPAGHETTI RESTAURANT\";\n    contentDiv.appendChild(pageHeader);\n    const pageImg = document.createElement('img');\n    pageImg.src = ('/src/spag.jpg');\n    contentDiv.appendChild(pageImg);\n    const pageDesc = document.createElement('p');\n    pageDesc.innerText = \"What a great restaurant this is. I fricken love spaghetti.\";\n    contentDiv.appendChild(pageDesc);\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/pageLoad.js?");

/***/ }),

/***/ "./src/pageLoadContact.js":
/*!********************************!*\
  !*** ./src/pageLoadContact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"populatePageContact\": () => (/* binding */ populatePageContact)\n/* harmony export */ });\nlet populatePageContact = () => {\n    const contentDiv = document.getElementById('content');\n    \n    const contactName = document.createElement('div');\n    contactName.classList.add('contactText')\n    contactName.textContent = \"John P. Doe\";\n    contentDiv.appendChild(contactName);\n    const contactNumber = document.createElement('div');\n    contactNumber.classList.add('contactText')\n    contactNumber.textContent = \"773-555-5555\";\n    contentDiv.appendChild(contactNumber);\n    const contactEmail = document.createElement('div');\n    contactEmail.classList.add('contactText')\n    contactEmail.textContent = \"JDoe35@fakemail.com\";\n    contentDiv.appendChild(contactEmail);\n\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/pageLoadContact.js?");

/***/ }),

/***/ "./src/pageLoadMenu.js":
/*!*****************************!*\
  !*** ./src/pageLoadMenu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"populatePageMenu\": () => (/* binding */ populatePageMenu)\n/* harmony export */ });\nlet menu = [];\n\nlet populatePageMenu = () => {\n    createMenuItem(\"Pozole\",\"A hearty soup, I think?\",\"$4.50\");\n    createMenuItem(\"Spaghetti\",\"Classic Spag Dish\",\"$18.99\");\n    createMenuItem(\"Eggplant Parm\",\"Advanced spaghetti dish with Eggplant\",\"$23.99\");\n}\n\nlet createMenuItem = (foodName, description, price) => {\n\n    class menuItem {\n        constructor(name,desc,price){\n            this.name = name;\n            this.desc = desc;\n            this.price = price;\n        }\n    }\n\n    const newItem = new menuItem(foodName, description, price);\n    menu.push(newItem);\n\n    console.log(\"new item added\");\n    console.log(menu);\n\n    const contentDiv = document.getElementById('content');\n    const menuCard = document.createElement('div');\n    menuCard.classList.add('menuCard');\n\n\n    const menuItemName = document.createElement('div');\n    menuItemName.textContent = foodName;\n    menuItemName.classList.add(\"menuText\");\n    menuCard.appendChild(menuItemName);\n    const menuItemDesc = document.createElement('div');\n    menuItemDesc.textContent = description;\n    menuItemDesc.classList.add(\"menuText\");\n    menuCard.appendChild(menuItemDesc);\n    const menuPrice = document.createElement('div');\n    menuPrice.textContent = price;\n    menuPrice.classList.add(\"menuPrice\");\n    menuCard.appendChild(menuPrice);\n\n    contentDiv.appendChild(menuCard);\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/pageLoadMenu.js?");

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