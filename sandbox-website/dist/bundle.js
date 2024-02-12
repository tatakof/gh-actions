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

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var https_cdn_skypack_dev_pixi_js_5_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! https://cdn.skypack.dev/pixi.js@5.x */ \"https://cdn.skypack.dev/pixi.js@5.x\");\n/* harmony import */ var https_cdn_skypack_dev_pixi_filter_kawase_blur_3_2_0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! https://cdn.skypack.dev/@pixi/filter-kawase-blur@3.2.0 */ \"https://cdn.skypack.dev/@pixi/filter-kawase-blur@3.2.0\");\n/* harmony import */ var https_cdn_skypack_dev_simplex_noise_3_0_0__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! https://cdn.skypack.dev/simplex-noise@3.0.0 */ \"https://cdn.skypack.dev/simplex-noise@3.0.0\");\n/* harmony import */ var https_cdn_skypack_dev_hsl_to_hex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! https://cdn.skypack.dev/hsl-to-hex */ \"https://cdn.skypack.dev/hsl-to-hex\");\n/* harmony import */ var https_cdn_skypack_dev_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! https://cdn.skypack.dev/debounce */ \"https://cdn.skypack.dev/debounce\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([https_cdn_skypack_dev_pixi_js_5_x__WEBPACK_IMPORTED_MODULE_0__, https_cdn_skypack_dev_pixi_filter_kawase_blur_3_2_0__WEBPACK_IMPORTED_MODULE_1__, https_cdn_skypack_dev_simplex_noise_3_0_0__WEBPACK_IMPORTED_MODULE_2__, https_cdn_skypack_dev_hsl_to_hex__WEBPACK_IMPORTED_MODULE_3__, https_cdn_skypack_dev_debounce__WEBPACK_IMPORTED_MODULE_4__]);\n([https_cdn_skypack_dev_pixi_js_5_x__WEBPACK_IMPORTED_MODULE_0__, https_cdn_skypack_dev_pixi_filter_kawase_blur_3_2_0__WEBPACK_IMPORTED_MODULE_1__, https_cdn_skypack_dev_simplex_noise_3_0_0__WEBPACK_IMPORTED_MODULE_2__, https_cdn_skypack_dev_hsl_to_hex__WEBPACK_IMPORTED_MODULE_3__, https_cdn_skypack_dev_debounce__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n// return a random number within a range\nfunction random(min, max) {\n  return Math.random() * (max - min) + min;\n}\n\n// map a number from 1 range to another\nfunction map(n, start1, end1, start2, end2) {\n  return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;\n}\n\n// Create a new simplex noise instance\nconst simplex = new https_cdn_skypack_dev_simplex_noise_3_0_0__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n\n// ColorPalette class\n// class ColorPalette {\n//   constructor() {\n//     this.setColors();\n//     this.setCustomProperties();\n//   }\n\n//   setColors() {\n//     // pick a random hue somewhere between 220 and 360\n//     this.hue = ~~random(220, 360);\n//     this.complimentaryHue1 = this.hue + 30;\n//     this.complimentaryHue2 = this.hue + 60;\n//     // define a fixed saturation and lightness\n//     // this.saturation = 95;\n//     this.saturation = 97;\n//     this.lightness = 50;\n//     // this.lightness = 20;\n//     this.lightness = 30;\n\n//     // define a base color\n//     this.baseColor = hsl(this.hue, this.saturation, this.lightness);\n//     // define a complimentary color, 30 degress away from the base\n//     this.complimentaryColor1 = hsl(\n//       this.complimentaryHue1,\n//       this.saturation,\n//       this.lightness\n//     );\n//     // define a second complimentary color, 60 degrees away from the base\n//     this.complimentaryColor2 = hsl(\n//       this.complimentaryHue2,\n//       this.saturation,\n//       this.lightness\n//     );\n\n//     // store the color choices in an array so that a random one can be picked later\n//     this.colorChoices = [\n//       this.baseColor,\n//       this.complimentaryColor1,\n//       this.complimentaryColor2\n//     ];\n//   }\n\n//   randomColor() {\n//     // pick a random color\n//     return this.colorChoices[~~random(0, this.colorChoices.length)].replace(\n//       \"#\",\n//       \"0x\"\n//     );\n//   }\n\n//   setCustomProperties() {\n//     // set CSS custom properties so that the colors defined here can be used throughout the UI\n//     document.documentElement.style.setProperty(\"--hue\", this.hue);\n//     document.documentElement.style.setProperty(\n//       \"--hue-complimentary1\",\n//       this.complimentaryHue1\n//     );\n//     document.documentElement.style.setProperty(\n//       \"--hue-complimentary2\",\n//       this.complimentaryHue2\n//     );\n//   }\n// }\n\n\n\n\n\nclass ColorPalette {\n  constructor() {\n    this.colors = this.extractColorsFromLogo();\n    this.setCustomProperties();\n  }\n\n  extractColorsFromLogo() {\n    // Define colors based on the logo\n    return {\n      lightBlue: '0x5eb1bf', // Light blue for the sky\n      darkGreen: '0x006400', // Darker green for contrast with foliage\n      // darkBlue: '0x2f5d7c',  // Dark blue for the mountain shadows\n      darkBlue: '0x5091bd',\n      white: '0xffffff',     // White for the snow\n      offWhite: '0xf0f0f0',  // Off-white for the orbs and highlights\n\n      lighterBlue: '0x81c7d4', // Lighter blue for a softer sky\n      mediumGreen: '0x40826d', // Medium green for foliage\n      lightGreen: '0x8fbc8f',  // Soft green for a gentle touch of foliage\n      // darkGreyBlue: '0x4a6f7b', // Dark grey-blue for deeper mountain shadows\n      ivory: '0xfffff0',       // Ivory for a warm touch of white\n      softCream: '0xfffdd0',   // Soft cream for a hint of warmth\n      // paleGreen: '0x98fb98',   // Pale green for highlights in foliage\n      // deepSeaBlue: '0x1b6a7d', // Deep sea blue for darker water elements\n \n\n\n      // tan: '0xd2b48c',      // Tan for the earthy elements\n      // grey: '0xcfd8dc'       // Gre1y for the shaded snow areas\n      // // Colors from the new logos\n      // lightGreen: '0x8fbc8f', // Light green for the foliage\n      // grey: '0x778899',      // Grey for the shadows and details\n      // // Additional colors for more variety\n      // darkGreen: '0x006400', // Darker green for contrast with foliage\n      // cream: '0xfffdd0'      // Cream for softer highlights\n    };\n  }\n\n  randomColor() {\n    // Convert object values to an array and pick a random color\n    const colorValues = Object.values(this.colors);\n    return colorValues[~~random(0, colorValues.length)];\n  }\n\n  setCustomProperties() {\n    // Set CSS custom properties for each color\n    for (const [name, color] of Object.entries(this.colors)) {\n      document.documentElement.style.setProperty(`--${name}`, color);\n    }\n  }\n}\n\n\n\n\n\n\n\n// Orb class\nclass Orb {\n  // Pixi takes hex colors as hexidecimal literals (0x rather than a string with '#')\n  constructor(fill = 0x000000) {\n    // Assign a unique center point for each orb\n    this.center = this.setCenter();\n    // bounds = the area an orb is \"allowed\" to move within\n    this.bounds = this.setBounds();\n    // initialise the orb's { x, y } values to a random point within it's bounds\n    this.x = random(this.bounds[\"x\"].min, this.bounds[\"x\"].max);\n    this.y = random(this.bounds[\"y\"].min, this.bounds[\"y\"].max);\n\n    // how large the orb is vs it's original radius (this will modulate over time)\n    this.scale = 1;\n\n    // what color is the orb?\n    this.fill = fill;\n\n    // the original radius of the orb, set relative to window height\n    this.radius = random(window.innerHeight / 6, window.innerHeight / 3);\n\n    // starting points in \"time\" for the noise/self similar random values\n    this.xOff = random(0, 1000);\n    this.yOff = random(0, 1000);\n    // how quickly the noise/self similar random values step through time\n    this.inc = 0.002;\n    // this.inc = 0.0015;\n    // this.inc = 0.0005;\n\n    // PIXI.Graphics is used to draw 2d primitives (in this case a circle) to the canvas\n    this.graphics = new https_cdn_skypack_dev_pixi_js_5_x__WEBPACK_IMPORTED_MODULE_0__.Graphics();\n    this.graphics.alpha = 0.825;\n    this.graphics.alpha = 0.900;\n\n    // 250ms after the last window resize event, recalculate orb positions.\n    window.addEventListener(\n      \"resize\",\n      (0,https_cdn_skypack_dev_debounce__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(() => {\n        this.bounds = this.setBounds();\n      }, 250)\n    );\n  }\n\n  setCenter() {\n    // Define the range within which the center can vary\n    const centerXRange = { min: window.innerWidth / 4, max: window.innerWidth * 3 /4};\n    const centerYRange = { min: window.innerHeight / 4, max: window.innerHeight * 3 /4};\n\n    // Generate a rondom centerr within the defined range\n    return{\n      x: random(centerXRange.min, centerXRange.max),\n      y: random(centerYRange.min, centerYRange.max)\n    };\n  }  \n\n\n  setBounds() {\n    // how far from the { x, y } origin can each orb move\n    // const maxDist = window.innerWidth < 1000 ? window.innerWidth / 3 : window.innerWidth / 5;\n    // the { x, y } origin for each orb (the bottom right of the screen)\n    // const originX = window.innerWidth / 1.25;\n    // const originY =\n    //   window.innerWidth < 1000\n    //     ? window.innerHeight\n    //     : window.innerHeight / 1.375;\n\n    const maxDist = Math.min(window.innerWidth, window.innerHeight) / 8;\n    // Use the orb's unique center for calculating bounds\n    // const originX = this.center.x;\n    // const originY = this.center.y;\n\n    const originX = window.innerWidth / 2;\n    const originY = window.innerHeight / 2;\n\n    // allow each orb to move x distance away from it's x / y origin\n    return {\n      x: {\n        min: originX - maxDist,\n        max: originX + maxDist\n      },\n      y: {\n        min: originY - maxDist,\n        max: originY + maxDist\n      }\n    };\n  }\n\n  update() {\n    // self similar \"psuedo-random\" or noise values at a given point in \"time\"\n    const xNoise = simplex.noise2D(this.xOff, this.xOff);\n    const yNoise = simplex.noise2D(this.yOff, this.yOff);\n    const scaleNoise = simplex.noise2D(this.xOff, this.yOff);\n\n    // map the xNoise/yNoise values (between -1 and 1) to a point within the orb's bounds\n    this.x = map(xNoise, -1, 1, this.bounds[\"x\"].min, this.bounds[\"x\"].max);\n    this.y = map(yNoise, -1, 1, this.bounds[\"y\"].min, this.bounds[\"y\"].max);\n    // map scaleNoise (between -1 and 1) to a scale value somewhere between half of the orb's original size, and 100% of it's original size\n    // this.scale = map(scaleNoise, -1, 1, 0.5, 1);\n    this.scale = map(scaleNoise, -1, 1, 0.75, 1);\n\n    // step through \"time\"\n    this.xOff += this.inc;\n    this.yOff += this.inc;\n\n    // Dynamic radius adjustement for a more alive feel\n    const radiusNoise = simplex.noise2D(this.xOff, this.yOff);\n    this.radius = map(radiusNoise, -1, 1, window.innerHeight / 6, window.innerHeight / 3)\n    this.radius = map(radiusNoise, -1, 1, window.innerHeight / 7, window.innerHeight / 4)\n    this.radius = map(radiusNoise, -1, 1, window.innerHeight / 8, window.innerHeight / 5)\n  }\n\n  render() {\n    // update the PIXI.Graphics position and scale values\n    this.graphics.x = this.x;\n    this.graphics.y = this.y;\n    this.graphics.scale.set(this.scale);\n\n    // clear anything currently drawn to graphics\n    this.graphics.clear();\n\n    // tell graphics to fill any shapes drawn after this with the orb's fill color\n    this.graphics.beginFill(this.fill);\n    // draw a circle at { 0, 0 } with it's size set by this.radius\n    this.graphics.drawCircle(0, 0, this.radius);\n    // let graphics know we won't be filling in any more shapes\n    this.graphics.endFill();\n  }\n}\n\n\n// Function to create and style text\n// function createText() {\n//   const style = new PIXI.TextStyle({\n//     fontFamily: 'Arial', // Choose a font that matches your design\n//     fontSize: 36, // Adjust the size as needed\n//     fontWeight: 'bold', // Bold for the 'sandbox.ai' part\n//     fill: ['#ffffff'], // Text color, can be an array to create gradients\n//     align: 'center', // Center align text\n//     // Add more styling as needed\n//   });\n\n//   // Create text for 'sandbox.ai'\n//   const sandboxText = new PIXI.Text('sandbox.ai', style);\n//   // Position the text in the center of the canvas\n//   sandboxText.anchor.set(0.5);\n//   sandboxText.x = app.screen.width / 2;\n//   sandboxText.y = app.screen.height / 2 - sandboxText.height; // Adjust Y position to make room for the second line\n\n//   // Create text for 'IA Generativa' with a lighter weight\n//   const iaGenerativaText = new PIXI.Text('IA Generativa', {\n//     ...style,\n//     fontWeight: 'normal', // Normal weight for the second line\n//     fontSize: 24, // Smaller font size for the second line\n//   });\n//   iaGenerativaText.anchor.set(0.5);\n//   iaGenerativaText.x = app.screen.width / 2;\n//   iaGenerativaText.y = app.screen.height / 2 + sandboxText.height / 2; // Position below 'sandbox.ai'\n\n//   // Add the text to the stage\n//   app.stage.addChild(sandboxText);\n//   app.stage.addChild(iaGenerativaText);\n// }\n\n// Function to create and style text\n// function createText() {\n//   const style = new PIXI.TextStyle({\n//     fontFamily: 'Arial',\n//     fontSize: 36,\n//     fontWeight: 'bold',\n//     fill: ['#101010'], // Very dark text color, almost black\n//     align: 'center',\n//   });\n\n//   // Create text for 'sandbox.ai'\n//   const sandboxText = new PIXI.Text('sandbox.ai', style);\n//   sandboxText.anchor.set(0.5);\n//   sandboxText.x = app.screen.width / 2;\n//   sandboxText.y = app.screen.height / 2 - sandboxText.height;\n\n//   // Set blend mode to SCREEN to make the text visible when orbs pass behind it\n//   sandboxText.blendMode = PIXI.BLEND_MODES.SCREEN;\n\n//   // Create text for 'IA Generativa' with a lighter weight\n//   const iaGenerativaText = new PIXI.Text('IA Generativa', {\n//     ...style,\n//     fontWeight: 'normal',\n//     fontSize: 24,\n//   });\n//   iaGenerativaText.anchor.set(0.5);\n//   iaGenerativaText.x = app.screen.width / 2;\n//   iaGenerativaText.y = app.screen.height / 2 + sandboxText.height / 2;\n\n//   // Set blend mode to SCREEN for the subtitle as well\n//   iaGenerativaText.blendMode = PIXI.BLEND_MODES.SCREEN;\n\n//   // Add the text to the stage\n//   app.stage.addChild(sandboxText);\n//   app.stage.addChild(iaGenerativaText);\n// }\n\n// ... rest of your script\n\n\n\n// Create PixiJS app\nconst app = new https_cdn_skypack_dev_pixi_js_5_x__WEBPACK_IMPORTED_MODULE_0__.Application({\n  // render to <canvas class=\"orb-canvas\"></canvas>\n  view: document.querySelector(\".orb-canvas\"),\n  // auto adjust size to fit the current window\n  resizeTo: window,\n  // transparent background, we will be creating a gradient background later using CSS\n  transparent: true\n});\n\n// createText();\n\napp.stage.filters = [new https_cdn_skypack_dev_pixi_filter_kawase_blur_3_2_0__WEBPACK_IMPORTED_MODULE_1__.KawaseBlurFilter(30, 10, true)];\n\n// Create colour palette\nconst colorPalette = new ColorPalette();\n\n// Create orbs\nconst orbs = [];\n\nfor (let i = 0; i < 6; i++) {\n  const orb = new Orb(colorPalette.randomColor());\n\n  app.stage.addChild(orb.graphics);\n\n  orbs.push(orb);\n}\n\n// Animate!\nif (!window.matchMedia(\"(prefers-reduced-motion: reduce)\").matches) {\n  app.ticker.add(() => {\n    orbs.forEach((orb) => {\n      orb.update();\n      orb.render();\n    });\n  });\n} else {\n  orbs.forEach((orb) => {\n    orb.update();\n    orb.render();\n  });\n}\n\ndocument\n  .querySelector(\".overlay__btn--colors\")\n  .addEventListener(\"click\", () => {\n    colorPalette.setColors();\n    colorPalette.setCustomProperties();\n\n    orbs.forEach((orb) => {\n      orb.fill = colorPalette.randomColor();\n    });\n  });\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://sandbox-website/./src/script.js?");

/***/ }),

/***/ "https://cdn.skypack.dev/@pixi/filter-kawase-blur@3.2.0":
false,

/***/ "https://cdn.skypack.dev/debounce":
false,

/***/ "https://cdn.skypack.dev/hsl-to-hex":
false,

/***/ "https://cdn.skypack.dev/pixi.js@5.x":
false,

/***/ "https://cdn.skypack.dev/simplex-noise@3.0.0":
false

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
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;