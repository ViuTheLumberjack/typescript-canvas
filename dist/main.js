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

/***/ "./src/drawing.ts":
/*!************************!*\
  !*** ./src/drawing.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Drawing\": () => (/* binding */ Drawing)\n/* harmony export */ });\nvar Drawing = /** @class */ (function () {\n    function Drawing() {\n        var _this = this;\n        this.options = {\n            color: \"black\",\n            lineWidth: 2\n        };\n        this.root = null;\n        this.canvas = null;\n        this.context = null;\n        this.seletedColor = this.options.color;\n        this.lineWidth = this.options.lineWidth;\n        this.drawingFromX = null;\n        this.drawingFromY = null;\n        this.drawingToX = null;\n        this.drawingToY = null;\n        this.mouseDown = false;\n        this._addListeners = function () {\n            document.addEventListener(\"DOMContentLoaded\", function () {\n                console.log(\"LOADED\");\n                _this.root = document.body;\n                _this.canvas = _this.getCanvas();\n                _this.context = _this.getContext();\n                var $this = _this;\n                [].forEach.call(document.querySelectorAll(\".bottone\"), function (el) {\n                    el.addEventListener(\"click\", function (e) {\n                        var id = this.id;\n                        var color = id.match(/[A-Z][a-z]+/g);\n                        if (id == \"bottoneCancella\") {\n                            $this.clarCanvas();\n                        }\n                        else {\n                            $this.changeColor(color[0]);\n                        }\n                    });\n                });\n            });\n        };\n        console.log(\"Drawing constructor\");\n        this.addListeners();\n    }\n    Drawing.prototype.changeColor = function (color) {\n        this.seletedColor = color;\n    };\n    Drawing.prototype.clarCanvas = function () {\n        var fineastraCOnferma = confirm(\"Sei sicuro di voler cancellare tutto?\");\n        if (fineastraCOnferma) {\n            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n        }\n    };\n    Object.defineProperty(Drawing.prototype, \"addListeners\", {\n        get: function () {\n            return this._addListeners;\n        },\n        set: function (value) {\n            this._addListeners = value;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Drawing.prototype.getCanvas = function () {\n        var _this = this;\n        if (this.canvas != null) {\n            return this.canvas;\n        }\n        var controlsHeight = document.getElementById(\"controls\").offsetHeight;\n        this.canvas = document.createElement(\"canvas\");\n        this.canvas.width = window.innerWidth;\n        this.canvas.height = window.innerHeight - controlsHeight - 20;\n        this.root.prepend(this.canvas);\n        this.canvas.addEventListener(\"mousemove\", function (e) {\n            _this.computeDrawCoordinates(e);\n        });\n        this.canvas.addEventListener(\"mouseup\", function (e) {\n            _this.computeDrawCoordinates(e);\n        });\n        this.canvas.addEventListener(\"mousedown\", function (e) {\n            _this.computeDrawCoordinates(e);\n        });\n        this.canvas.addEventListener(\"mouseout\", function (e) {\n            _this.computeDrawCoordinates(e);\n        });\n        return this.canvas;\n    };\n    Drawing.prototype.computeDrawCoordinates = function (e) {\n        switch (e.type) {\n            case \"mousemove\":\n                if (this.mouseDown) {\n                    this.drawingToX = e.clientX - this.canvas.offsetLeft;\n                    this.drawingToY = e.clientY - this.canvas.offsetTop;\n                    this.draw();\n                    this.drawingFromX = this.drawingToX;\n                    this.drawingFromY = this.drawingToY;\n                }\n                break;\n            case \"mousedown\":\n                this.mouseDown = true;\n                this.drawingFromX = e.clientX - this.canvas.offsetLeft;\n                this.drawingFromY = e.clientY - this.canvas.offsetTop;\n                break;\n            case \"mouseup\":\n                this.mouseDown = false;\n                break;\n            case \"mouseout\":\n                this.mouseDown = false;\n                break;\n        }\n    };\n    Drawing.prototype.draw = function () {\n        this.context.beginPath();\n        this.context.strokeStyle = this.seletedColor;\n        this.context.lineWidth = this.lineWidth;\n        this.context.moveTo(this.drawingFromX, this.drawingFromY);\n        this.context.lineTo(this.drawingToX, this.drawingToY);\n        this.context.stroke();\n        this.context.closePath();\n    };\n    Drawing.prototype.getContext = function () {\n        if (this.context) {\n            return this.context;\n        }\n        this.context = this.getCanvas().getContext(\"2d\");\n        return this.context;\n    };\n    return Drawing;\n}());\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/drawing.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _drawing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawing */ \"./src/drawing.ts\");\n\nvar drawing = new _drawing__WEBPACK_IMPORTED_MODULE_0__.Drawing();\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;