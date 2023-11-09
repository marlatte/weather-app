/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/dialog.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/dialog.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `dialog {
	margin: auto;
	height: 200px;
	width: min(80%, 500px);

	border: none;
	border-radius: 8px;
}

dialog[open] {
	display: grid;
	place-content: center;
	gap: 10px;
}

dialog::backdrop {
	background-color: rgba(0, 0, 0, 0.2);
}

.spinner-container {
	font-size: 40px;
	text-align: center;
}
`, "",{"version":3,"sources":["webpack://./src/styles/dialog.css"],"names":[],"mappings":"AAAA;CACC,YAAY;CACZ,aAAa;CACb,sBAAsB;;CAEtB,YAAY;CACZ,kBAAkB;AACnB;;AAEA;CACC,aAAa;CACb,qBAAqB;CACrB,SAAS;AACV;;AAEA;CACC,oCAAoC;AACrC;;AAEA;CACC,eAAe;CACf,kBAAkB;AACnB","sourcesContent":["dialog {\n\tmargin: auto;\n\theight: 200px;\n\twidth: min(80%, 500px);\n\n\tborder: none;\n\tborder-radius: 8px;\n}\n\ndialog[open] {\n\tdisplay: grid;\n\tplace-content: center;\n\tgap: 10px;\n}\n\ndialog::backdrop {\n\tbackground-color: rgba(0, 0, 0, 0.2);\n}\n\n.spinner-container {\n\tfont-size: 40px;\n\ttext-align: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/header-footer.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/header-footer.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `header {
	display: none;
	padding: 10px;
}

footer {
	padding: 10px;
	text-align: center;
}

@media (min-width: 700px) {
	header {
		display: block;
	}
}
`, "",{"version":3,"sources":["webpack://./src/styles/header-footer.css"],"names":[],"mappings":"AAAA;CACC,aAAa;CACb,aAAa;AACd;;AAEA;CACC,aAAa;CACb,kBAAkB;AACnB;;AAEA;CACC;EACC,cAAc;CACf;AACD","sourcesContent":["header {\n\tdisplay: none;\n\tpadding: 10px;\n}\n\nfooter {\n\tpadding: 10px;\n\ttext-align: center;\n}\n\n@media (min-width: 700px) {\n\theader {\n\t\tdisplay: block;\n\t}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/inputs.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/inputs.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.inputs {
	display: flex;
	gap: 5px;
}

.search-item {
	flex: 1;
	display: flex;
	gap: 5px;
}

.search-item label {
	align-self: center;
}

input[type='search'] {
	appearance: none;
	outline: none;
	flex: 1;
	max-width: 500px;
	padding: 8px;

	border: 1px solid grey;
	border-radius: 5px;
	font-size: 1.1rem;

	&:focus,
	&:focus-visible {
		box-shadow: 0 0 6px 1px darkcyan;
	}
}

.degree-selector * {
	user-select: none;
	-webkit-tap-highlight-color: transparent;

	&:focus {
		outline: none;
	}
}

.knobs,
.layer {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
}

.button {
	position: relative;
	width: 74px;
	height: 100%;
	overflow: hidden;
}

.button.r,
.button.r .layer {
	border-radius: 100px;
}

.button.b2 {
	border-radius: 2px;
}

.checkbox {
	position: relative;
	width: 100%;
	height: 100%;
	padding: 0;
	margin: 0;
	opacity: 0;
	cursor: pointer;
	z-index: 3;
}

.knobs {
	z-index: 2;
}

.layer {
	width: 100%;
	background-color: #ebf7fc;
	border: 1px solid grey;
	border-radius: 60px;

	transition: 0.3s ease all;
	z-index: 1;
}

#button-10 .knobs::before,
#button-10 .knobs::after,
#button-10 .knobs span {
	position: absolute;
	top: 4px;
	width: 40%;
	height: 80%;

	display: grid;
	place-content: center;
	text-align: center;

	font-size: 10px;
	font-weight: bold;
	border-radius: 50px;
	transition: 0.3s ease all;
}

#button-10 .knobs::before {
	content: '';
	left: 4px;
	background-color: #03a9f4;
}

#button-10 .knobs::after {
	content: 'F';
	right: 2px;
	color: #4e4e4e;
}

#button-10 .knobs span {
	left: 4px;
	color: #fff;
	z-index: 1;
}

#button-10 .checkbox:checked + .knobs span {
	color: #4e4e4e;
}

#button-10 .checkbox:checked + .knobs::before {
	left: 42px;
	background-color: #f44336;
}

#button-10 .checkbox:checked + .knobs::after {
	color: #fff;
}

#button-10 .checkbox:checked ~ .layer {
	background-color: #fcebeb;
}
`, "",{"version":3,"sources":["webpack://./src/styles/inputs.css"],"names":[],"mappings":"AAAA;CACC,aAAa;CACb,QAAQ;AACT;;AAEA;CACC,OAAO;CACP,aAAa;CACb,QAAQ;AACT;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,gBAAgB;CAChB,aAAa;CACb,OAAO;CACP,gBAAgB;CAChB,YAAY;;CAEZ,sBAAsB;CACtB,kBAAkB;CAClB,iBAAiB;;CAEjB;;EAEC,gCAAgC;CACjC;AACD;;AAEA;CACC,iBAAiB;CACjB,wCAAwC;;CAExC;EACC,aAAa;CACd;AACD;;AAEA;;CAEC,kBAAkB;CAClB,MAAM;CACN,QAAQ;CACR,SAAS;CACT,OAAO;AACR;;AAEA;CACC,kBAAkB;CAClB,WAAW;CACX,YAAY;CACZ,gBAAgB;AACjB;;AAEA;;CAEC,oBAAoB;AACrB;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,kBAAkB;CAClB,WAAW;CACX,YAAY;CACZ,UAAU;CACV,SAAS;CACT,UAAU;CACV,eAAe;CACf,UAAU;AACX;;AAEA;CACC,UAAU;AACX;;AAEA;CACC,WAAW;CACX,yBAAyB;CACzB,sBAAsB;CACtB,mBAAmB;;CAEnB,yBAAyB;CACzB,UAAU;AACX;;AAEA;;;CAGC,kBAAkB;CAClB,QAAQ;CACR,UAAU;CACV,WAAW;;CAEX,aAAa;CACb,qBAAqB;CACrB,kBAAkB;;CAElB,eAAe;CACf,iBAAiB;CACjB,mBAAmB;CACnB,yBAAyB;AAC1B;;AAEA;CACC,WAAW;CACX,SAAS;CACT,yBAAyB;AAC1B;;AAEA;CACC,YAAY;CACZ,UAAU;CACV,cAAc;AACf;;AAEA;CACC,SAAS;CACT,WAAW;CACX,UAAU;AACX;;AAEA;CACC,cAAc;AACf;;AAEA;CACC,UAAU;CACV,yBAAyB;AAC1B;;AAEA;CACC,WAAW;AACZ;;AAEA;CACC,yBAAyB;AAC1B","sourcesContent":[".inputs {\n\tdisplay: flex;\n\tgap: 5px;\n}\n\n.search-item {\n\tflex: 1;\n\tdisplay: flex;\n\tgap: 5px;\n}\n\n.search-item label {\n\talign-self: center;\n}\n\ninput[type='search'] {\n\tappearance: none;\n\toutline: none;\n\tflex: 1;\n\tmax-width: 500px;\n\tpadding: 8px;\n\n\tborder: 1px solid grey;\n\tborder-radius: 5px;\n\tfont-size: 1.1rem;\n\n\t&:focus,\n\t&:focus-visible {\n\t\tbox-shadow: 0 0 6px 1px darkcyan;\n\t}\n}\n\n.degree-selector * {\n\tuser-select: none;\n\t-webkit-tap-highlight-color: transparent;\n\n\t&:focus {\n\t\toutline: none;\n\t}\n}\n\n.knobs,\n.layer {\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n}\n\n.button {\n\tposition: relative;\n\twidth: 74px;\n\theight: 100%;\n\toverflow: hidden;\n}\n\n.button.r,\n.button.r .layer {\n\tborder-radius: 100px;\n}\n\n.button.b2 {\n\tborder-radius: 2px;\n}\n\n.checkbox {\n\tposition: relative;\n\twidth: 100%;\n\theight: 100%;\n\tpadding: 0;\n\tmargin: 0;\n\topacity: 0;\n\tcursor: pointer;\n\tz-index: 3;\n}\n\n.knobs {\n\tz-index: 2;\n}\n\n.layer {\n\twidth: 100%;\n\tbackground-color: #ebf7fc;\n\tborder: 1px solid grey;\n\tborder-radius: 60px;\n\n\ttransition: 0.3s ease all;\n\tz-index: 1;\n}\n\n#button-10 .knobs::before,\n#button-10 .knobs::after,\n#button-10 .knobs span {\n\tposition: absolute;\n\ttop: 4px;\n\twidth: 40%;\n\theight: 80%;\n\n\tdisplay: grid;\n\tplace-content: center;\n\ttext-align: center;\n\n\tfont-size: 10px;\n\tfont-weight: bold;\n\tborder-radius: 50px;\n\ttransition: 0.3s ease all;\n}\n\n#button-10 .knobs::before {\n\tcontent: '';\n\tleft: 4px;\n\tbackground-color: #03a9f4;\n}\n\n#button-10 .knobs::after {\n\tcontent: 'F';\n\tright: 2px;\n\tcolor: #4e4e4e;\n}\n\n#button-10 .knobs span {\n\tleft: 4px;\n\tcolor: #fff;\n\tz-index: 1;\n}\n\n#button-10 .checkbox:checked + .knobs span {\n\tcolor: #4e4e4e;\n}\n\n#button-10 .checkbox:checked + .knobs::before {\n\tleft: 42px;\n\tbackground-color: #f44336;\n}\n\n#button-10 .checkbox:checked + .knobs::after {\n\tcolor: #fff;\n}\n\n#button-10 .checkbox:checked ~ .layer {\n\tbackground-color: #fcebeb;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_header_footer_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./header-footer.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/header-footer.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_inputs_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./inputs.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/inputs.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_dialog_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./dialog.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/dialog.css");
// Imports





var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_header_footer_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_inputs_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_dialog_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ---------------     Reboot     --------------- */

*,
*::before,
*::after {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	/* color: unset; */
}

/* ---------------     /Reboot     --------------- */
/* ---------------     Utilities & Universals     --------------- */

:root {
	--eg-var: red;
}

body {
	min-height: 100svh;
	display: flex;
	flex-direction: column;
}

/* ---------------     /Utilities & Universals     --------------- */

/* ---------------     Main     --------------- */

main {
	flex: 1;
	padding: 10px;
	display: flex;
	flex-direction: column;
}

.current-info {
	min-height: 250px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
}

.location {
	text-align: center;
}

.city {
	font-size: 40px;
}

.current-temp {
	font-weight: bold;
	font-size: 40px;
}

.forecast {
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
}

.forecast > * {
	width: min(400px, 80%);
}

.forecast .info {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.forecast .daily {
	min-width: 60px;
	text-align: center;
}

.forecast .low {
	color: blue;
}

.forecast .high {
	color: red;
}

/* ---------------     /Main     --------------- */
`, "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAIA,mDAAmD;;AAEnD;;;CAGC,SAAS;CACT,UAAU;CACV,sBAAsB;CACtB,kBAAkB;AACnB;;AAEA,oDAAoD;AACpD,mEAAmE;;AAEnE;CACC,aAAa;AACd;;AAEA;CACC,kBAAkB;CAClB,aAAa;CACb,sBAAsB;AACvB;;AAEA,oEAAoE;;AAEpE,iDAAiD;;AAEjD;CACC,OAAO;CACP,aAAa;CACb,aAAa;CACb,sBAAsB;AACvB;;AAEA;CACC,iBAAiB;CACjB,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,6BAA6B;AAC9B;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,iBAAiB;CACjB,eAAe;AAChB;;AAEA;CACC,OAAO;CACP,aAAa;CACb,sBAAsB;CACtB,6BAA6B;AAC9B;;AAEA;CACC,sBAAsB;AACvB;;AAEA;CACC,aAAa;CACb,8BAA8B;CAC9B,mBAAmB;AACpB;;AAEA;CACC,eAAe;CACf,kBAAkB;AACnB;;AAEA;CACC,WAAW;AACZ;;AAEA;CACC,UAAU;AACX;;AAEA,kDAAkD","sourcesContent":["@import url(./header-footer.css);\n@import url(./inputs.css);\n@import url(./dialog.css);\n\n/* ---------------     Reboot     --------------- */\n\n*,\n*::before,\n*::after {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n\t/* color: unset; */\n}\n\n/* ---------------     /Reboot     --------------- */\n/* ---------------     Utilities & Universals     --------------- */\n\n:root {\n\t--eg-var: red;\n}\n\nbody {\n\tmin-height: 100svh;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n/* ---------------     /Utilities & Universals     --------------- */\n\n/* ---------------     Main     --------------- */\n\nmain {\n\tflex: 1;\n\tpadding: 10px;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.current-info {\n\tmin-height: 250px;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: space-evenly;\n}\n\n.location {\n\ttext-align: center;\n}\n\n.city {\n\tfont-size: 40px;\n}\n\n.current-temp {\n\tfont-weight: bold;\n\tfont-size: 40px;\n}\n\n.forecast {\n\tflex: 1;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-evenly;\n}\n\n.forecast > * {\n\twidth: min(400px, 80%);\n}\n\n.forecast .info {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n\n.forecast .daily {\n\tmin-width: 60px;\n\ttext-align: center;\n}\n\n.forecast .low {\n\tcolor: blue;\n}\n\n.forecast .high {\n\tcolor: red;\n}\n\n/* ---------------     /Main     --------------- */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");


const searchForm = document.querySelector('form.search-item');
const tempScale = document.querySelector('#temp-scale');
const dialog = document.querySelector('dialog');

let currentData;

const funStuff = [
	'https://api.weatherapi.com/v1/forecast.json?k',
	'ey=',
	'043282325c',
	'3b44ec9141',
	'0010230511',
	'&days=3',
	'&q=',
].join('');

async function getWeatherData(targetCity) {
	try {
		const response = await fetch(funStuff + targetCity, { mode: 'cors' });
		const weatherData = await response.json();
		return weatherData;
	} catch (err) {
		console.log(err);
		return err;
	}
}

function formatDate(forecastDay) {
	const daysOfTheWeek = {
		mon: 'Monday',
		tue: 'Tuesday',
		wed: 'Wednesday',
		thu: 'Thursday',
		fri: 'Friday',
		sat: 'Saturday',
		sun: 'Sunday',
	};

	const shortDay = new Date(forecastDay).toUTCString().toLowerCase().slice(0, 3);
	return daysOfTheWeek[shortDay];
}

function setCurrentInfo() {
	const currentCity = document.querySelector('.city');
	const currentCountry = document.querySelector('.country');
	const currentIcon = document.querySelector('.current-icon');
	const currentTemp = document.querySelector('.current-temp');

	const { location, current } = currentData;

	currentCity.textContent = location.name;
	currentCountry.textContent = location.country;
	currentTemp.textContent = tempScale.checked
		? `${current.temp_f}° F`
		: `${current.temp_c}° C`;
	currentIcon.src = `https:${current.condition.icon}`;
	currentIcon.alt = `${current.condition.text} weather icon`;
}

function setForecastInfo() {
	[0, 1, 2].forEach((dayNum) => {
		const forecast = currentData.forecast.forecastday[dayNum];
		const title = document.querySelector(`.day-${dayNum} .title`);
		const icon = document.querySelector(`.day-${dayNum} .icon`);
		const low = document.querySelector(`.day-${dayNum} .daily.low .num`);
		const high = document.querySelector(`.day-${dayNum} .daily.high .num`);

		title.textContent = !dayNum ? 'Today' : formatDate(forecast.date);

		icon.src = `https:${forecast.day.condition.icon}`;

		low.textContent = tempScale.checked
			? `${forecast.day.mintemp_f}° F`
			: `${forecast.day.mintemp_c}° C`;

		high.textContent = tempScale.checked
			? `${forecast.day.maxtemp_f}° F`
			: `${forecast.day.maxtemp_c}° C`;
	});
}

function updateDisplay() {
	setCurrentInfo();
	setForecastInfo();
	dialog.close();
}

async function changeCity(targetCity) {
	currentData = await getWeatherData(targetCity);
	console.log(currentData);
	updateDisplay();
}

function handleSearch(e) {
	e.preventDefault();
	const searchBar = document.querySelector('#search-bar');

	dialog.showModal();
	dialog.blur();
	changeCity(searchBar.value);

	searchBar.value = '';
	searchBar.blur();
}

searchForm.addEventListener('submit', handleSearch);
tempScale.addEventListener('click', updateDisplay);

changeCity('new york');

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHdGQUF3RixVQUFVLFVBQVUsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksa0NBQWtDLGlCQUFpQixrQkFBa0IsMkJBQTJCLG1CQUFtQix1QkFBdUIsR0FBRyxrQkFBa0Isa0JBQWtCLDBCQUEwQixjQUFjLEdBQUcsc0JBQXNCLHlDQUF5QyxHQUFHLHdCQUF3QixvQkFBb0IsdUJBQXVCLEdBQUcscUJBQXFCO0FBQ3RuQjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJ2QztBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sK0ZBQStGLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxLQUFLLFVBQVUsS0FBSyxpQ0FBaUMsa0JBQWtCLGtCQUFrQixHQUFHLFlBQVksa0JBQWtCLHVCQUF1QixHQUFHLCtCQUErQixZQUFZLHFCQUFxQixLQUFLLEdBQUcscUJBQXFCO0FBQ3haO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QnZDO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHdGQUF3RixVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFlBQVksWUFBWSxhQUFhLGNBQWMsT0FBTyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksY0FBYyxNQUFNLFVBQVUsS0FBSyxNQUFNLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUs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Q0EsUUFBUSx1QkFBdUI7QUFDL0IsUUFBUSx1QkFBdUI7QUFDL0IsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFybGF0dGUtd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzL2RpYWxvZy5jc3MiLCJ3ZWJwYWNrOi8vbWFybGF0dGUtd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzL2hlYWRlci1mb290ZXIuY3NzIiwid2VicGFjazovL21hcmxhdHRlLXdlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy9pbnB1dHMuY3NzIiwid2VicGFjazovL21hcmxhdHRlLXdlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy9tYWluLmNzcyIsIndlYnBhY2s6Ly9tYXJsYXR0ZS13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbWFybGF0dGUtd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9tYXJsYXR0ZS13ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMvbWFpbi5jc3M/ZTgwYSIsIndlYnBhY2s6Ly9tYXJsYXR0ZS13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9tYXJsYXR0ZS13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbWFybGF0dGUtd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbWFybGF0dGUtd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbWFybGF0dGUtd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9tYXJsYXR0ZS13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL21hcmxhdHRlLXdlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21hcmxhdHRlLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL21hcmxhdHRlLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tYXJsYXR0ZS13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21hcmxhdHRlLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWFybGF0dGUtd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL21hcmxhdHRlLXdlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBkaWFsb2cge1xuXHRtYXJnaW46IGF1dG87XG5cdGhlaWdodDogMjAwcHg7XG5cdHdpZHRoOiBtaW4oODAlLCA1MDBweCk7XG5cblx0Ym9yZGVyOiBub25lO1xuXHRib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbmRpYWxvZ1tvcGVuXSB7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcblx0Z2FwOiAxMHB4O1xufVxuXG5kaWFsb2c6OmJhY2tkcm9wIHtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4uc3Bpbm5lci1jb250YWluZXIge1xuXHRmb250LXNpemU6IDQwcHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9kaWFsb2cuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MsWUFBWTtDQUNaLGFBQWE7Q0FDYixzQkFBc0I7O0NBRXRCLFlBQVk7Q0FDWixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IscUJBQXFCO0NBQ3JCLFNBQVM7QUFDVjs7QUFFQTtDQUNDLG9DQUFvQztBQUNyQzs7QUFFQTtDQUNDLGVBQWU7Q0FDZixrQkFBa0I7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiZGlhbG9nIHtcXG5cXHRtYXJnaW46IGF1dG87XFxuXFx0aGVpZ2h0OiAyMDBweDtcXG5cXHR3aWR0aDogbWluKDgwJSwgNTAwcHgpO1xcblxcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbmRpYWxvZ1tvcGVuXSB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuXFx0Z2FwOiAxMHB4O1xcbn1cXG5cXG5kaWFsb2c6OmJhY2tkcm9wIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbi5zcGlubmVyLWNvbnRhaW5lciB7XFxuXFx0Zm9udC1zaXplOiA0MHB4O1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBoZWFkZXIge1xuXHRkaXNwbGF5OiBub25lO1xuXHRwYWRkaW5nOiAxMHB4O1xufVxuXG5mb290ZXIge1xuXHRwYWRkaW5nOiAxMHB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xuXHRoZWFkZXIge1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHR9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvaGVhZGVyLWZvb3Rlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxhQUFhO0NBQ2IsYUFBYTtBQUNkOztBQUVBO0NBQ0MsYUFBYTtDQUNiLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDO0VBQ0MsY0FBYztDQUNmO0FBQ0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaGVhZGVyIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcblxcdHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbmZvb3RlciB7XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xcblxcdGhlYWRlciB7XFxuXFx0XFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0fVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5pbnB1dHMge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRnYXA6IDVweDtcbn1cblxuLnNlYXJjaC1pdGVtIHtcblx0ZmxleDogMTtcblx0ZGlzcGxheTogZmxleDtcblx0Z2FwOiA1cHg7XG59XG5cbi5zZWFyY2gtaXRlbSBsYWJlbCB7XG5cdGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuaW5wdXRbdHlwZT0nc2VhcmNoJ10ge1xuXHRhcHBlYXJhbmNlOiBub25lO1xuXHRvdXRsaW5lOiBub25lO1xuXHRmbGV4OiAxO1xuXHRtYXgtd2lkdGg6IDUwMHB4O1xuXHRwYWRkaW5nOiA4cHg7XG5cblx0Ym9yZGVyOiAxcHggc29saWQgZ3JleTtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRmb250LXNpemU6IDEuMXJlbTtcblxuXHQmOmZvY3VzLFxuXHQmOmZvY3VzLXZpc2libGUge1xuXHRcdGJveC1zaGFkb3c6IDAgMCA2cHggMXB4IGRhcmtjeWFuO1xuXHR9XG59XG5cbi5kZWdyZWUtc2VsZWN0b3IgKiB7XG5cdHVzZXItc2VsZWN0OiBub25lO1xuXHQtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG5cdCY6Zm9jdXMge1xuXHRcdG91dGxpbmU6IG5vbmU7XG5cdH1cbn1cblxuLmtub2JzLFxuLmxheWVyIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDA7XG5cdHJpZ2h0OiAwO1xuXHRib3R0b206IDA7XG5cdGxlZnQ6IDA7XG59XG5cbi5idXR0b24ge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHdpZHRoOiA3NHB4O1xuXHRoZWlnaHQ6IDEwMCU7XG5cdG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5idXR0b24ucixcbi5idXR0b24uciAubGF5ZXIge1xuXHRib3JkZXItcmFkaXVzOiAxMDBweDtcbn1cblxuLmJ1dHRvbi5iMiB7XG5cdGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLmNoZWNrYm94IHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xuXHRwYWRkaW5nOiAwO1xuXHRtYXJnaW46IDA7XG5cdG9wYWNpdHk6IDA7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0ei1pbmRleDogMztcbn1cblxuLmtub2JzIHtcblx0ei1pbmRleDogMjtcbn1cblxuLmxheWVyIHtcblx0d2lkdGg6IDEwMCU7XG5cdGJhY2tncm91bmQtY29sb3I6ICNlYmY3ZmM7XG5cdGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG5cdGJvcmRlci1yYWRpdXM6IDYwcHg7XG5cblx0dHJhbnNpdGlvbjogMC4zcyBlYXNlIGFsbDtcblx0ei1pbmRleDogMTtcbn1cblxuI2J1dHRvbi0xMCAua25vYnM6OmJlZm9yZSxcbiNidXR0b24tMTAgLmtub2JzOjphZnRlcixcbiNidXR0b24tMTAgLmtub2JzIHNwYW4ge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogNHB4O1xuXHR3aWR0aDogNDAlO1xuXHRoZWlnaHQ6IDgwJTtcblxuXHRkaXNwbGF5OiBncmlkO1xuXHRwbGFjZS1jb250ZW50OiBjZW50ZXI7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblxuXHRmb250LXNpemU6IDEwcHg7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRib3JkZXItcmFkaXVzOiA1MHB4O1xuXHR0cmFuc2l0aW9uOiAwLjNzIGVhc2UgYWxsO1xufVxuXG4jYnV0dG9uLTEwIC5rbm9iczo6YmVmb3JlIHtcblx0Y29udGVudDogJyc7XG5cdGxlZnQ6IDRweDtcblx0YmFja2dyb3VuZC1jb2xvcjogIzAzYTlmNDtcbn1cblxuI2J1dHRvbi0xMCAua25vYnM6OmFmdGVyIHtcblx0Y29udGVudDogJ0YnO1xuXHRyaWdodDogMnB4O1xuXHRjb2xvcjogIzRlNGU0ZTtcbn1cblxuI2J1dHRvbi0xMCAua25vYnMgc3BhbiB7XG5cdGxlZnQ6IDRweDtcblx0Y29sb3I6ICNmZmY7XG5cdHotaW5kZXg6IDE7XG59XG5cbiNidXR0b24tMTAgLmNoZWNrYm94OmNoZWNrZWQgKyAua25vYnMgc3BhbiB7XG5cdGNvbG9yOiAjNGU0ZTRlO1xufVxuXG4jYnV0dG9uLTEwIC5jaGVja2JveDpjaGVja2VkICsgLmtub2JzOjpiZWZvcmUge1xuXHRsZWZ0OiA0MnB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xufVxuXG4jYnV0dG9uLTEwIC5jaGVja2JveDpjaGVja2VkICsgLmtub2JzOjphZnRlciB7XG5cdGNvbG9yOiAjZmZmO1xufVxuXG4jYnV0dG9uLTEwIC5jaGVja2JveDpjaGVja2VkIH4gLmxheWVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZjZWJlYjtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9pbnB1dHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MsYUFBYTtDQUNiLFFBQVE7QUFDVDs7QUFFQTtDQUNDLE9BQU87Q0FDUCxhQUFhO0NBQ2IsUUFBUTtBQUNUOztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGFBQWE7Q0FDYixPQUFPO0NBQ1AsZ0JBQWdCO0NBQ2hCLFlBQVk7O0NBRVosc0JBQXNCO0NBQ3RCLGtCQUFrQjtDQUNsQixpQkFBaUI7O0NBRWpCOztFQUVDLGdDQUFnQztDQUNqQztBQUNEOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLHdDQUF3Qzs7Q0FFeEM7RUFDQyxhQUFhO0NBQ2Q7QUFDRDs7QUFFQTs7Q0FFQyxrQkFBa0I7Q0FDbEIsTUFBTTtDQUNOLFFBQVE7Q0FDUixTQUFTO0NBQ1QsT0FBTztBQUNSOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCxZQUFZO0NBQ1osZ0JBQWdCO0FBQ2pCOztBQUVBOztDQUVDLG9CQUFvQjtBQUNyQjs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gsWUFBWTtDQUNaLFVBQVU7Q0FDVixTQUFTO0NBQ1QsVUFBVTtDQUNWLGVBQWU7Q0FDZixVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gseUJBQXlCO0NBQ3pCLHNCQUFzQjtDQUN0QixtQkFBbUI7O0NBRW5CLHlCQUF5QjtDQUN6QixVQUFVO0FBQ1g7O0FBRUE7OztDQUdDLGtCQUFrQjtDQUNsQixRQUFRO0NBQ1IsVUFBVTtDQUNWLFdBQVc7O0NBRVgsYUFBYTtDQUNiLHFCQUFxQjtDQUNyQixrQkFBa0I7O0NBRWxCLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsbUJBQW1CO0NBQ25CLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxTQUFTO0NBQ1QseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLFVBQVU7Q0FDVixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxTQUFTO0NBQ1QsV0FBVztDQUNYLFVBQVU7QUFDWDs7QUFFQTtDQUNDLGNBQWM7QUFDZjs7QUFFQTtDQUNDLFVBQVU7Q0FDVix5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxXQUFXO0FBQ1o7O0FBRUE7Q0FDQyx5QkFBeUI7QUFDMUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmlucHV0cyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRnYXA6IDVweDtcXG59XFxuXFxuLnNlYXJjaC1pdGVtIHtcXG5cXHRmbGV4OiAxO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Z2FwOiA1cHg7XFxufVxcblxcbi5zZWFyY2gtaXRlbSBsYWJlbCB7XFxuXFx0YWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG5pbnB1dFt0eXBlPSdzZWFyY2gnXSB7XFxuXFx0YXBwZWFyYW5jZTogbm9uZTtcXG5cXHRvdXRsaW5lOiBub25lO1xcblxcdGZsZXg6IDE7XFxuXFx0bWF4LXdpZHRoOiA1MDBweDtcXG5cXHRwYWRkaW5nOiA4cHg7XFxuXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgZ3JleTtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0Zm9udC1zaXplOiAxLjFyZW07XFxuXFxuXFx0Jjpmb2N1cyxcXG5cXHQmOmZvY3VzLXZpc2libGUge1xcblxcdFxcdGJveC1zaGFkb3c6IDAgMCA2cHggMXB4IGRhcmtjeWFuO1xcblxcdH1cXG59XFxuXFxuLmRlZ3JlZS1zZWxlY3RvciAqIHtcXG5cXHR1c2VyLXNlbGVjdDogbm9uZTtcXG5cXHQtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcblxcblxcdCY6Zm9jdXMge1xcblxcdFxcdG91dGxpbmU6IG5vbmU7XFxuXFx0fVxcbn1cXG5cXG4ua25vYnMsXFxuLmxheWVyIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiAwO1xcblxcdHJpZ2h0OiAwO1xcblxcdGJvdHRvbTogMDtcXG5cXHRsZWZ0OiAwO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0d2lkdGg6IDc0cHg7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5idXR0b24ucixcXG4uYnV0dG9uLnIgLmxheWVyIHtcXG5cXHRib3JkZXItcmFkaXVzOiAxMDBweDtcXG59XFxuXFxuLmJ1dHRvbi5iMiB7XFxuXFx0Ym9yZGVyLXJhZGl1czogMnB4O1xcbn1cXG5cXG4uY2hlY2tib3gge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRtYXJnaW46IDA7XFxuXFx0b3BhY2l0eTogMDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0ei1pbmRleDogMztcXG59XFxuXFxuLmtub2JzIHtcXG5cXHR6LWluZGV4OiAyO1xcbn1cXG5cXG4ubGF5ZXIge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNlYmY3ZmM7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgZ3JleTtcXG5cXHRib3JkZXItcmFkaXVzOiA2MHB4O1xcblxcblxcdHRyYW5zaXRpb246IDAuM3MgZWFzZSBhbGw7XFxuXFx0ei1pbmRleDogMTtcXG59XFxuXFxuI2J1dHRvbi0xMCAua25vYnM6OmJlZm9yZSxcXG4jYnV0dG9uLTEwIC5rbm9iczo6YWZ0ZXIsXFxuI2J1dHRvbi0xMCAua25vYnMgc3BhbiB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogNHB4O1xcblxcdHdpZHRoOiA0MCU7XFxuXFx0aGVpZ2h0OiA4MCU7XFxuXFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcblxcdGZvbnQtc2l6ZTogMTBweDtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHRib3JkZXItcmFkaXVzOiA1MHB4O1xcblxcdHRyYW5zaXRpb246IDAuM3MgZWFzZSBhbGw7XFxufVxcblxcbiNidXR0b24tMTAgLmtub2JzOjpiZWZvcmUge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGxlZnQ6IDRweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDNhOWY0O1xcbn1cXG5cXG4jYnV0dG9uLTEwIC5rbm9iczo6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICdGJztcXG5cXHRyaWdodDogMnB4O1xcblxcdGNvbG9yOiAjNGU0ZTRlO1xcbn1cXG5cXG4jYnV0dG9uLTEwIC5rbm9icyBzcGFuIHtcXG5cXHRsZWZ0OiA0cHg7XFxuXFx0Y29sb3I6ICNmZmY7XFxuXFx0ei1pbmRleDogMTtcXG59XFxuXFxuI2J1dHRvbi0xMCAuY2hlY2tib3g6Y2hlY2tlZCArIC5rbm9icyBzcGFuIHtcXG5cXHRjb2xvcjogIzRlNGU0ZTtcXG59XFxuXFxuI2J1dHRvbi0xMCAuY2hlY2tib3g6Y2hlY2tlZCArIC5rbm9iczo6YmVmb3JlIHtcXG5cXHRsZWZ0OiA0MnB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XFxufVxcblxcbiNidXR0b24tMTAgLmNoZWNrYm94OmNoZWNrZWQgKyAua25vYnM6OmFmdGVyIHtcXG5cXHRjb2xvcjogI2ZmZjtcXG59XFxuXFxuI2J1dHRvbi0xMCAuY2hlY2tib3g6Y2hlY2tlZCB+IC5sYXllciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZjZWJlYjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRlci1mb290ZXIuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5wdXRzLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMl9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2RpYWxvZy5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogLS0tLS0tLS0tLS0tLS0tICAgICBSZWJvb3QgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdC8qIGNvbG9yOiB1bnNldDsgKi9cbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvUmVib290ICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgVXRpbGl0aWVzICYgVW5pdmVyc2FscyAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbjpyb290IHtcblx0LS1lZy12YXI6IHJlZDtcbn1cblxuYm9keSB7XG5cdG1pbi1oZWlnaHQ6IDEwMHN2aDtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvVXRpbGl0aWVzICYgVW5pdmVyc2FscyAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgTWFpbiAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbm1haW4ge1xuXHRmbGV4OiAxO1xuXHRwYWRkaW5nOiAxMHB4O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY3VycmVudC1pbmZvIHtcblx0bWluLWhlaWdodDogMjUwcHg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG4ubG9jYXRpb24ge1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jaXR5IHtcblx0Zm9udC1zaXplOiA0MHB4O1xufVxuXG4uY3VycmVudC10ZW1wIHtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdGZvbnQtc2l6ZTogNDBweDtcbn1cblxuLmZvcmVjYXN0IHtcblx0ZmxleDogMTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbi5mb3JlY2FzdCA+ICoge1xuXHR3aWR0aDogbWluKDQwMHB4LCA4MCUpO1xufVxuXG4uZm9yZWNhc3QgLmluZm8ge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mb3JlY2FzdCAuZGFpbHkge1xuXHRtaW4td2lkdGg6IDYwcHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZvcmVjYXN0IC5sb3cge1xuXHRjb2xvcjogYmx1ZTtcbn1cblxuLmZvcmVjYXN0IC5oaWdoIHtcblx0Y29sb3I6IHJlZDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvTWFpbiAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBSUEsbURBQW1EOztBQUVuRDs7O0NBR0MsU0FBUztDQUNULFVBQVU7Q0FDVixzQkFBc0I7Q0FDdEIsa0JBQWtCO0FBQ25COztBQUVBLG9EQUFvRDtBQUNwRCxtRUFBbUU7O0FBRW5FO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGFBQWE7Q0FDYixzQkFBc0I7QUFDdkI7O0FBRUEsb0VBQW9FOztBQUVwRSxpREFBaUQ7O0FBRWpEO0NBQ0MsT0FBTztDQUNQLGFBQWE7Q0FDYixhQUFhO0NBQ2Isc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsbUJBQW1CO0NBQ25CLDZCQUE2QjtBQUM5Qjs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLE9BQU87Q0FDUCxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLDZCQUE2QjtBQUM5Qjs7QUFFQTtDQUNDLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLGFBQWE7Q0FDYiw4QkFBOEI7Q0FDOUIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFdBQVc7QUFDWjs7QUFFQTtDQUNDLFVBQVU7QUFDWDs7QUFFQSxrREFBa0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoLi9oZWFkZXItZm9vdGVyLmNzcyk7XFxuQGltcG9ydCB1cmwoLi9pbnB1dHMuY3NzKTtcXG5AaW1wb3J0IHVybCguL2RpYWxvZy5jc3MpO1xcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgUmVib290ICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHQvKiBjb2xvcjogdW5zZXQ7ICovXFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL1JlYm9vdCAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBVdGlsaXRpZXMgJiBVbml2ZXJzYWxzICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG46cm9vdCB7XFxuXFx0LS1lZy12YXI6IHJlZDtcXG59XFxuXFxuYm9keSB7XFxuXFx0bWluLWhlaWdodDogMTAwc3ZoO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvVXRpbGl0aWVzICYgVW5pdmVyc2FscyAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBNYWluICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG5tYWluIHtcXG5cXHRmbGV4OiAxO1xcblxcdHBhZGRpbmc6IDEwcHg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY3VycmVudC1pbmZvIHtcXG5cXHRtaW4taGVpZ2h0OiAyNTBweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLmxvY2F0aW9uIHtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jaXR5IHtcXG5cXHRmb250LXNpemU6IDQwcHg7XFxufVxcblxcbi5jdXJyZW50LXRlbXAge1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuLmZvcmVjYXN0IHtcXG5cXHRmbGV4OiAxO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLmZvcmVjYXN0ID4gKiB7XFxuXFx0d2lkdGg6IG1pbig0MDBweCwgODAlKTtcXG59XFxuXFxuLmZvcmVjYXN0IC5pbmZvIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9yZWNhc3QgLmRhaWx5IHtcXG5cXHRtaW4td2lkdGg6IDYwcHg7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZm9yZWNhc3QgLmxvdyB7XFxuXFx0Y29sb3I6IGJsdWU7XFxufVxcblxcbi5mb3JlY2FzdCAuaGlnaCB7XFxuXFx0Y29sb3I6IHJlZDtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvTWFpbiAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzL21haW4uY3NzJztcblxuY29uc3Qgc2VhcmNoRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0uc2VhcmNoLWl0ZW0nKTtcbmNvbnN0IHRlbXBTY2FsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZW1wLXNjYWxlJyk7XG5jb25zdCBkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaWFsb2cnKTtcblxubGV0IGN1cnJlbnREYXRhO1xuXG5jb25zdCBmdW5TdHVmZiA9IFtcblx0J2h0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/aycsXG5cdCdleT0nLFxuXHQnMDQzMjgyMzI1YycsXG5cdCczYjQ0ZWM5MTQxJyxcblx0JzAwMTAyMzA1MTEnLFxuXHQnJmRheXM9MycsXG5cdCcmcT0nLFxuXS5qb2luKCcnKTtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEodGFyZ2V0Q2l0eSkge1xuXHR0cnkge1xuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZnVuU3R1ZmYgKyB0YXJnZXRDaXR5LCB7IG1vZGU6ICdjb3JzJyB9KTtcblx0XHRjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblx0XHRyZXR1cm4gd2VhdGhlckRhdGE7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdGNvbnNvbGUubG9nKGVycik7XG5cdFx0cmV0dXJuIGVycjtcblx0fVxufVxuXG5mdW5jdGlvbiBmb3JtYXREYXRlKGZvcmVjYXN0RGF5KSB7XG5cdGNvbnN0IGRheXNPZlRoZVdlZWsgPSB7XG5cdFx0bW9uOiAnTW9uZGF5Jyxcblx0XHR0dWU6ICdUdWVzZGF5Jyxcblx0XHR3ZWQ6ICdXZWRuZXNkYXknLFxuXHRcdHRodTogJ1RodXJzZGF5Jyxcblx0XHRmcmk6ICdGcmlkYXknLFxuXHRcdHNhdDogJ1NhdHVyZGF5Jyxcblx0XHRzdW46ICdTdW5kYXknLFxuXHR9O1xuXG5cdGNvbnN0IHNob3J0RGF5ID0gbmV3IERhdGUoZm9yZWNhc3REYXkpLnRvVVRDU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5zbGljZSgwLCAzKTtcblx0cmV0dXJuIGRheXNPZlRoZVdlZWtbc2hvcnREYXldO1xufVxuXG5mdW5jdGlvbiBzZXRDdXJyZW50SW5mbygpIHtcblx0Y29uc3QgY3VycmVudENpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eScpO1xuXHRjb25zdCBjdXJyZW50Q291bnRyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3VudHJ5Jyk7XG5cdGNvbnN0IGN1cnJlbnRJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtaWNvbicpO1xuXHRjb25zdCBjdXJyZW50VGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXRlbXAnKTtcblxuXHRjb25zdCB7IGxvY2F0aW9uLCBjdXJyZW50IH0gPSBjdXJyZW50RGF0YTtcblxuXHRjdXJyZW50Q2l0eS50ZXh0Q29udGVudCA9IGxvY2F0aW9uLm5hbWU7XG5cdGN1cnJlbnRDb3VudHJ5LnRleHRDb250ZW50ID0gbG9jYXRpb24uY291bnRyeTtcblx0Y3VycmVudFRlbXAudGV4dENvbnRlbnQgPSB0ZW1wU2NhbGUuY2hlY2tlZFxuXHRcdD8gYCR7Y3VycmVudC50ZW1wX2Z9wrAgRmBcblx0XHQ6IGAke2N1cnJlbnQudGVtcF9jfcKwIENgO1xuXHRjdXJyZW50SWNvbi5zcmMgPSBgaHR0cHM6JHtjdXJyZW50LmNvbmRpdGlvbi5pY29ufWA7XG5cdGN1cnJlbnRJY29uLmFsdCA9IGAke2N1cnJlbnQuY29uZGl0aW9uLnRleHR9IHdlYXRoZXIgaWNvbmA7XG59XG5cbmZ1bmN0aW9uIHNldEZvcmVjYXN0SW5mbygpIHtcblx0WzAsIDEsIDJdLmZvckVhY2goKGRheU51bSkgPT4ge1xuXHRcdGNvbnN0IGZvcmVjYXN0ID0gY3VycmVudERhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbZGF5TnVtXTtcblx0XHRjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5kYXktJHtkYXlOdW19IC50aXRsZWApO1xuXHRcdGNvbnN0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZGF5LSR7ZGF5TnVtfSAuaWNvbmApO1xuXHRcdGNvbnN0IGxvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5kYXktJHtkYXlOdW19IC5kYWlseS5sb3cgLm51bWApO1xuXHRcdGNvbnN0IGhpZ2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZGF5LSR7ZGF5TnVtfSAuZGFpbHkuaGlnaCAubnVtYCk7XG5cblx0XHR0aXRsZS50ZXh0Q29udGVudCA9ICFkYXlOdW0gPyAnVG9kYXknIDogZm9ybWF0RGF0ZShmb3JlY2FzdC5kYXRlKTtcblxuXHRcdGljb24uc3JjID0gYGh0dHBzOiR7Zm9yZWNhc3QuZGF5LmNvbmRpdGlvbi5pY29ufWA7XG5cblx0XHRsb3cudGV4dENvbnRlbnQgPSB0ZW1wU2NhbGUuY2hlY2tlZFxuXHRcdFx0PyBgJHtmb3JlY2FzdC5kYXkubWludGVtcF9mfcKwIEZgXG5cdFx0XHQ6IGAke2ZvcmVjYXN0LmRheS5taW50ZW1wX2N9wrAgQ2A7XG5cblx0XHRoaWdoLnRleHRDb250ZW50ID0gdGVtcFNjYWxlLmNoZWNrZWRcblx0XHRcdD8gYCR7Zm9yZWNhc3QuZGF5Lm1heHRlbXBfZn3CsCBGYFxuXHRcdFx0OiBgJHtmb3JlY2FzdC5kYXkubWF4dGVtcF9jfcKwIENgO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlRGlzcGxheSgpIHtcblx0c2V0Q3VycmVudEluZm8oKTtcblx0c2V0Rm9yZWNhc3RJbmZvKCk7XG5cdGRpYWxvZy5jbG9zZSgpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBjaGFuZ2VDaXR5KHRhcmdldENpdHkpIHtcblx0Y3VycmVudERhdGEgPSBhd2FpdCBnZXRXZWF0aGVyRGF0YSh0YXJnZXRDaXR5KTtcblx0Y29uc29sZS5sb2coY3VycmVudERhdGEpO1xuXHR1cGRhdGVEaXNwbGF5KCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVNlYXJjaChlKSB7XG5cdGUucHJldmVudERlZmF1bHQoKTtcblx0Y29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaC1iYXInKTtcblxuXHRkaWFsb2cuc2hvd01vZGFsKCk7XG5cdGRpYWxvZy5ibHVyKCk7XG5cdGNoYW5nZUNpdHkoc2VhcmNoQmFyLnZhbHVlKTtcblxuXHRzZWFyY2hCYXIudmFsdWUgPSAnJztcblx0c2VhcmNoQmFyLmJsdXIoKTtcbn1cblxuc2VhcmNoRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBoYW5kbGVTZWFyY2gpO1xudGVtcFNjYWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdXBkYXRlRGlzcGxheSk7XG5cbmNoYW5nZUNpdHkoJ25ldyB5b3JrJyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=