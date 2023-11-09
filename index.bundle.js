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
	height: 60px;

	display: flex;
	gap: 8px;
	justify-content: center;
	align-items: center;

	background-color: rgb(69, 77, 84);
	color: white;
	font-size: 20px;
}

.fa.fa-github {
	color: currentColor;
	font-size: 30px;

	&:hover {
		transition: transform 0.4s ease-in-out;
		transform: rotate(-360deg) scale(1.3);
	}
}

@media (min-width: 700px) {
	header {
		display: block;
	}
}
`, "",{"version":3,"sources":["webpack://./src/styles/header-footer.css"],"names":[],"mappings":"AAAA;CACC,aAAa;CACb,aAAa;AACd;;AAEA;CACC,YAAY;;CAEZ,aAAa;CACb,QAAQ;CACR,uBAAuB;CACvB,mBAAmB;;CAEnB,iCAAiC;CACjC,YAAY;CACZ,eAAe;AAChB;;AAEA;CACC,mBAAmB;CACnB,eAAe;;CAEf;EACC,sCAAsC;EACtC,qCAAqC;CACtC;AACD;;AAEA;CACC;EACC,cAAc;CACf;AACD","sourcesContent":["header {\n\tdisplay: none;\n\tpadding: 10px;\n}\n\nfooter {\n\theight: 60px;\n\n\tdisplay: flex;\n\tgap: 8px;\n\tjustify-content: center;\n\talign-items: center;\n\n\tbackground-color: rgb(69, 77, 84);\n\tcolor: white;\n\tfont-size: 20px;\n}\n\n.fa.fa-github {\n\tcolor: currentColor;\n\tfont-size: 30px;\n\n\t&:hover {\n\t\ttransition: transform 0.4s ease-in-out;\n\t\ttransform: rotate(-360deg) scale(1.3);\n\t}\n}\n\n@media (min-width: 700px) {\n\theader {\n\t\tdisplay: block;\n\t}\n}\n"],"sourceRoot":""}]);
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

a {
	color: unset;
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
	width: min(640px, 100%);
	margin: auto;
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
	margin: 0 10px;
}

.forecast .spacer {
	height: 1px;
	background-color: lightgrey;
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
`, "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAIA,mDAAmD;;AAEnD;;;CAGC,SAAS;CACT,UAAU;CACV,sBAAsB;CACtB,kBAAkB;AACnB;;AAEA;CACC,YAAY;AACb;;AAEA,oDAAoD;AACpD,mEAAmE;;AAEnE;CACC,aAAa;AACd;;AAEA;CACC,kBAAkB;CAClB,aAAa;CACb,sBAAsB;AACvB;;AAEA,oEAAoE;;AAEpE,iDAAiD;;AAEjD;CACC,OAAO;CACP,aAAa;CACb,aAAa;CACb,sBAAsB;CACtB,uBAAuB;CACvB,YAAY;AACb;;AAEA;CACC,iBAAiB;CACjB,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,6BAA6B;AAC9B;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,iBAAiB;CACjB,eAAe;AAChB;;AAEA;CACC,OAAO;CACP,aAAa;CACb,sBAAsB;CACtB,6BAA6B;AAC9B;;AAEA;CACC,cAAc;AACf;;AAEA;CACC,WAAW;CACX,2BAA2B;AAC5B;;AAEA;CACC,aAAa;CACb,8BAA8B;CAC9B,mBAAmB;AACpB;;AAEA;CACC,eAAe;CACf,kBAAkB;AACnB;;AAEA;CACC,WAAW;AACZ;;AAEA;CACC,UAAU;AACX;;AAEA,kDAAkD","sourcesContent":["@import url(./header-footer.css);\n@import url(./inputs.css);\n@import url(./dialog.css);\n\n/* ---------------     Reboot     --------------- */\n\n*,\n*::before,\n*::after {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n\t/* color: unset; */\n}\n\na {\n\tcolor: unset;\n}\n\n/* ---------------     /Reboot     --------------- */\n/* ---------------     Utilities & Universals     --------------- */\n\n:root {\n\t--eg-var: red;\n}\n\nbody {\n\tmin-height: 100svh;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n/* ---------------     /Utilities & Universals     --------------- */\n\n/* ---------------     Main     --------------- */\n\nmain {\n\tflex: 1;\n\tpadding: 10px;\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: min(640px, 100%);\n\tmargin: auto;\n}\n\n.current-info {\n\tmin-height: 250px;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: space-evenly;\n}\n\n.location {\n\ttext-align: center;\n}\n\n.city {\n\tfont-size: 40px;\n}\n\n.current-temp {\n\tfont-weight: bold;\n\tfont-size: 40px;\n}\n\n.forecast {\n\tflex: 1;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-evenly;\n}\n\n.forecast > * {\n\tmargin: 0 10px;\n}\n\n.forecast .spacer {\n\theight: 1px;\n\tbackground-color: lightgrey;\n}\n\n.forecast .info {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n\n.forecast .daily {\n\tmin-width: 60px;\n\ttext-align: center;\n}\n\n.forecast .low {\n\tcolor: blue;\n}\n\n.forecast .high {\n\tcolor: red;\n}\n\n/* ---------------     /Main     --------------- */\n"],"sourceRoot":""}]);
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

function makeTitleCase(string) {
	return string
		.split(' ')
		.map((word) => word[0].toUpperCase() + word.slice(1))
		.join(' ');
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
	const searchLoad = document.getElementById('load-search');

	searchLoad.textContent = makeTitleCase(searchBar.value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUyxvQkFBb0I7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZUFBZTtBQUN0QixPQUFPLGVBQWU7QUFDdEIsNEJBQTRCLHVCQUF1QjtBQUNuRCxzQkFBc0Isd0JBQXdCO0FBQzlDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZELDhDQUE4QyxRQUFRO0FBQ3RELDZDQUE2QyxRQUFRO0FBQ3JELDhDQUE4QyxRQUFROztBQUV0RDs7QUFFQSxzQkFBc0IsNEJBQTRCOztBQUVsRDtBQUNBLFFBQVEsdUJBQXVCO0FBQy9CLFFBQVEsdUJBQXVCOztBQUUvQjtBQUNBLFFBQVEsdUJBQXVCO0FBQy9CLFFBQVEsdUJBQXVCO0FBQy9CLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFybGF0dGUtd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzL2RpYWxvZy5jc3MiLCJ3ZWJwYWNrOi8vbWFybGF0dGUtd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzL2hlYWRlci1mb290ZXIuY3NzIiwid2VicGFjazovL21hcmxhdHRlLXdlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy9pbnB1dHMuY3NzIiwid2VicGFjazovL21hcmxhdHRlLXdlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy9tYWluLmNzcyIsIndlYnBhY2s6Ly9tYXJsYXR0ZS13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbWFybGF0dGUtd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9tYXJsYXR0ZS13ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMvbWFpbi5jc3M/ZTgwYSIsIndlYnBhY2s6Ly9tYXJsYXR0ZS13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9tYXJsYXR0ZS13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbWFybGF0dGUtd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbWFybGF0dGUtd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbWFybGF0dGUtd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9tYXJsYXR0ZS13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL21hcmxhdHRlLXdlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21hcmxhdHRlLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL21hcmxhdHRlLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tYXJsYXR0ZS13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21hcmxhdHRlLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWFybGF0dGUtd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL21hcmxhdHRlLXdlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBkaWFsb2cge1xuXHRtYXJnaW46IGF1dG87XG5cdGhlaWdodDogMjAwcHg7XG5cdHdpZHRoOiBtaW4oODAlLCA1MDBweCk7XG5cblx0Ym9yZGVyOiBub25lO1xuXHRib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbmRpYWxvZ1tvcGVuXSB7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcblx0Z2FwOiAxMHB4O1xufVxuXG5kaWFsb2c6OmJhY2tkcm9wIHtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4uc3Bpbm5lci1jb250YWluZXIge1xuXHRmb250LXNpemU6IDQwcHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9kaWFsb2cuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MsWUFBWTtDQUNaLGFBQWE7Q0FDYixzQkFBc0I7O0NBRXRCLFlBQVk7Q0FDWixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IscUJBQXFCO0NBQ3JCLFNBQVM7QUFDVjs7QUFFQTtDQUNDLG9DQUFvQztBQUNyQzs7QUFFQTtDQUNDLGVBQWU7Q0FDZixrQkFBa0I7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiZGlhbG9nIHtcXG5cXHRtYXJnaW46IGF1dG87XFxuXFx0aGVpZ2h0OiAyMDBweDtcXG5cXHR3aWR0aDogbWluKDgwJSwgNTAwcHgpO1xcblxcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbmRpYWxvZ1tvcGVuXSB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuXFx0Z2FwOiAxMHB4O1xcbn1cXG5cXG5kaWFsb2c6OmJhY2tkcm9wIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbi5zcGlubmVyLWNvbnRhaW5lciB7XFxuXFx0Zm9udC1zaXplOiA0MHB4O1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBoZWFkZXIge1xuXHRkaXNwbGF5OiBub25lO1xuXHRwYWRkaW5nOiAxMHB4O1xufVxuXG5mb290ZXIge1xuXHRoZWlnaHQ6IDYwcHg7XG5cblx0ZGlzcGxheTogZmxleDtcblx0Z2FwOiA4cHg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYig2OSwgNzcsIDg0KTtcblx0Y29sb3I6IHdoaXRlO1xuXHRmb250LXNpemU6IDIwcHg7XG59XG5cbi5mYS5mYS1naXRodWIge1xuXHRjb2xvcjogY3VycmVudENvbG9yO1xuXHRmb250LXNpemU6IDMwcHg7XG5cblx0Jjpob3ZlciB7XG5cdFx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgZWFzZS1pbi1vdXQ7XG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZykgc2NhbGUoMS4zKTtcblx0fVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcblx0aGVhZGVyIHtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0fVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2hlYWRlci1mb290ZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MsYUFBYTtDQUNiLGFBQWE7QUFDZDs7QUFFQTtDQUNDLFlBQVk7O0NBRVosYUFBYTtDQUNiLFFBQVE7Q0FDUix1QkFBdUI7Q0FDdkIsbUJBQW1COztDQUVuQixpQ0FBaUM7Q0FDakMsWUFBWTtDQUNaLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkIsZUFBZTs7Q0FFZjtFQUNDLHNDQUFzQztFQUN0QyxxQ0FBcUM7Q0FDdEM7QUFDRDs7QUFFQTtDQUNDO0VBQ0MsY0FBYztDQUNmO0FBQ0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaGVhZGVyIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcblxcdHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbmZvb3RlciB7XFxuXFx0aGVpZ2h0OiA2MHB4O1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Z2FwOiA4cHg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjksIDc3LCA4NCk7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLmZhLmZhLWdpdGh1YiB7XFxuXFx0Y29sb3I6IGN1cnJlbnRDb2xvcjtcXG5cXHRmb250LXNpemU6IDMwcHg7XFxuXFxuXFx0Jjpob3ZlciB7XFxuXFx0XFx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgZWFzZS1pbi1vdXQ7XFxuXFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZykgc2NhbGUoMS4zKTtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xcblxcdGhlYWRlciB7XFxuXFx0XFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0fVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5pbnB1dHMge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRnYXA6IDVweDtcbn1cblxuLnNlYXJjaC1pdGVtIHtcblx0ZmxleDogMTtcblx0ZGlzcGxheTogZmxleDtcblx0Z2FwOiA1cHg7XG59XG5cbi5zZWFyY2gtaXRlbSBsYWJlbCB7XG5cdGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuaW5wdXRbdHlwZT0nc2VhcmNoJ10ge1xuXHRhcHBlYXJhbmNlOiBub25lO1xuXHRvdXRsaW5lOiBub25lO1xuXHRmbGV4OiAxO1xuXHRtYXgtd2lkdGg6IDUwMHB4O1xuXHRwYWRkaW5nOiA4cHg7XG5cblx0Ym9yZGVyOiAxcHggc29saWQgZ3JleTtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRmb250LXNpemU6IDEuMXJlbTtcblxuXHQmOmZvY3VzLFxuXHQmOmZvY3VzLXZpc2libGUge1xuXHRcdGJveC1zaGFkb3c6IDAgMCA2cHggMXB4IGRhcmtjeWFuO1xuXHR9XG59XG5cbi5kZWdyZWUtc2VsZWN0b3IgKiB7XG5cdHVzZXItc2VsZWN0OiBub25lO1xuXHQtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG5cdCY6Zm9jdXMge1xuXHRcdG91dGxpbmU6IG5vbmU7XG5cdH1cbn1cblxuLmtub2JzLFxuLmxheWVyIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDA7XG5cdHJpZ2h0OiAwO1xuXHRib3R0b206IDA7XG5cdGxlZnQ6IDA7XG59XG5cbi5idXR0b24ge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHdpZHRoOiA3NHB4O1xuXHRoZWlnaHQ6IDEwMCU7XG5cdG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5idXR0b24ucixcbi5idXR0b24uciAubGF5ZXIge1xuXHRib3JkZXItcmFkaXVzOiAxMDBweDtcbn1cblxuLmJ1dHRvbi5iMiB7XG5cdGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLmNoZWNrYm94IHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xuXHRwYWRkaW5nOiAwO1xuXHRtYXJnaW46IDA7XG5cdG9wYWNpdHk6IDA7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0ei1pbmRleDogMztcbn1cblxuLmtub2JzIHtcblx0ei1pbmRleDogMjtcbn1cblxuLmxheWVyIHtcblx0d2lkdGg6IDEwMCU7XG5cdGJhY2tncm91bmQtY29sb3I6ICNlYmY3ZmM7XG5cdGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG5cdGJvcmRlci1yYWRpdXM6IDYwcHg7XG5cblx0dHJhbnNpdGlvbjogMC4zcyBlYXNlIGFsbDtcblx0ei1pbmRleDogMTtcbn1cblxuI2J1dHRvbi0xMCAua25vYnM6OmJlZm9yZSxcbiNidXR0b24tMTAgLmtub2JzOjphZnRlcixcbiNidXR0b24tMTAgLmtub2JzIHNwYW4ge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogNHB4O1xuXHR3aWR0aDogNDAlO1xuXHRoZWlnaHQ6IDgwJTtcblxuXHRkaXNwbGF5OiBncmlkO1xuXHRwbGFjZS1jb250ZW50OiBjZW50ZXI7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblxuXHRmb250LXNpemU6IDEwcHg7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRib3JkZXItcmFkaXVzOiA1MHB4O1xuXHR0cmFuc2l0aW9uOiAwLjNzIGVhc2UgYWxsO1xufVxuXG4jYnV0dG9uLTEwIC5rbm9iczo6YmVmb3JlIHtcblx0Y29udGVudDogJyc7XG5cdGxlZnQ6IDRweDtcblx0YmFja2dyb3VuZC1jb2xvcjogIzAzYTlmNDtcbn1cblxuI2J1dHRvbi0xMCAua25vYnM6OmFmdGVyIHtcblx0Y29udGVudDogJ0YnO1xuXHRyaWdodDogMnB4O1xuXHRjb2xvcjogIzRlNGU0ZTtcbn1cblxuI2J1dHRvbi0xMCAua25vYnMgc3BhbiB7XG5cdGxlZnQ6IDRweDtcblx0Y29sb3I6ICNmZmY7XG5cdHotaW5kZXg6IDE7XG59XG5cbiNidXR0b24tMTAgLmNoZWNrYm94OmNoZWNrZWQgKyAua25vYnMgc3BhbiB7XG5cdGNvbG9yOiAjNGU0ZTRlO1xufVxuXG4jYnV0dG9uLTEwIC5jaGVja2JveDpjaGVja2VkICsgLmtub2JzOjpiZWZvcmUge1xuXHRsZWZ0OiA0MnB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xufVxuXG4jYnV0dG9uLTEwIC5jaGVja2JveDpjaGVja2VkICsgLmtub2JzOjphZnRlciB7XG5cdGNvbG9yOiAjZmZmO1xufVxuXG4jYnV0dG9uLTEwIC5jaGVja2JveDpjaGVja2VkIH4gLmxheWVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZjZWJlYjtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9pbnB1dHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MsYUFBYTtDQUNiLFFBQVE7QUFDVDs7QUFFQTtDQUNDLE9BQU87Q0FDUCxhQUFhO0NBQ2IsUUFBUTtBQUNUOztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGFBQWE7Q0FDYixPQUFPO0NBQ1AsZ0JBQWdCO0NBQ2hCLFlBQVk7O0NBRVosc0JBQXNCO0NBQ3RCLGtCQUFrQjtDQUNsQixpQkFBaUI7O0NBRWpCOztFQUVDLGdDQUFnQztDQUNqQztBQUNEOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLHdDQUF3Qzs7Q0FFeEM7RUFDQyxhQUFhO0NBQ2Q7QUFDRDs7QUFFQTs7Q0FFQyxrQkFBa0I7Q0FDbEIsTUFBTTtDQUNOLFFBQVE7Q0FDUixTQUFTO0NBQ1QsT0FBTztBQUNSOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCxZQUFZO0NBQ1osZ0JBQWdCO0FBQ2pCOztBQUVBOztDQUVDLG9CQUFvQjtBQUNyQjs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gsWUFBWTtDQUNaLFVBQVU7Q0FDVixTQUFTO0NBQ1QsVUFBVTtDQUNWLGVBQWU7Q0FDZixVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gseUJBQXlCO0NBQ3pCLHNCQUFzQjtDQUN0QixtQkFBbUI7O0NBRW5CLHlCQUF5QjtDQUN6QixVQUFVO0FBQ1g7O0FBRUE7OztDQUdDLGtCQUFrQjtDQUNsQixRQUFRO0NBQ1IsVUFBVTtDQUNWLFdBQVc7O0NBRVgsYUFBYTtDQUNiLHFCQUFxQjtDQUNyQixrQkFBa0I7O0NBRWxCLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsbUJBQW1CO0NBQ25CLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxTQUFTO0NBQ1QseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLFVBQVU7Q0FDVixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxTQUFTO0NBQ1QsV0FBVztDQUNYLFVBQVU7QUFDWDs7QUFFQTtDQUNDLGNBQWM7QUFDZjs7QUFFQTtDQUNDLFVBQVU7Q0FDVix5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxXQUFXO0FBQ1o7O0FBRUE7Q0FDQyx5QkFBeUI7QUFDMUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmlucHV0cyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRnYXA6IDVweDtcXG59XFxuXFxuLnNlYXJjaC1pdGVtIHtcXG5cXHRmbGV4OiAxO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Z2FwOiA1cHg7XFxufVxcblxcbi5zZWFyY2gtaXRlbSBsYWJlbCB7XFxuXFx0YWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG5pbnB1dFt0eXBlPSdzZWFyY2gnXSB7XFxuXFx0YXBwZWFyYW5jZTogbm9uZTtcXG5cXHRvdXRsaW5lOiBub25lO1xcblxcdGZsZXg6IDE7XFxuXFx0bWF4LXdpZHRoOiA1MDBweDtcXG5cXHRwYWRkaW5nOiA4cHg7XFxuXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgZ3JleTtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0Zm9udC1zaXplOiAxLjFyZW07XFxuXFxuXFx0Jjpmb2N1cyxcXG5cXHQmOmZvY3VzLXZpc2libGUge1xcblxcdFxcdGJveC1zaGFkb3c6IDAgMCA2cHggMXB4IGRhcmtjeWFuO1xcblxcdH1cXG59XFxuXFxuLmRlZ3JlZS1zZWxlY3RvciAqIHtcXG5cXHR1c2VyLXNlbGVjdDogbm9uZTtcXG5cXHQtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcblxcblxcdCY6Zm9jdXMge1xcblxcdFxcdG91dGxpbmU6IG5vbmU7XFxuXFx0fVxcbn1cXG5cXG4ua25vYnMsXFxuLmxheWVyIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiAwO1xcblxcdHJpZ2h0OiAwO1xcblxcdGJvdHRvbTogMDtcXG5cXHRsZWZ0OiAwO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0d2lkdGg6IDc0cHg7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5idXR0b24ucixcXG4uYnV0dG9uLnIgLmxheWVyIHtcXG5cXHRib3JkZXItcmFkaXVzOiAxMDBweDtcXG59XFxuXFxuLmJ1dHRvbi5iMiB7XFxuXFx0Ym9yZGVyLXJhZGl1czogMnB4O1xcbn1cXG5cXG4uY2hlY2tib3gge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRtYXJnaW46IDA7XFxuXFx0b3BhY2l0eTogMDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0ei1pbmRleDogMztcXG59XFxuXFxuLmtub2JzIHtcXG5cXHR6LWluZGV4OiAyO1xcbn1cXG5cXG4ubGF5ZXIge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNlYmY3ZmM7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgZ3JleTtcXG5cXHRib3JkZXItcmFkaXVzOiA2MHB4O1xcblxcblxcdHRyYW5zaXRpb246IDAuM3MgZWFzZSBhbGw7XFxuXFx0ei1pbmRleDogMTtcXG59XFxuXFxuI2J1dHRvbi0xMCAua25vYnM6OmJlZm9yZSxcXG4jYnV0dG9uLTEwIC5rbm9iczo6YWZ0ZXIsXFxuI2J1dHRvbi0xMCAua25vYnMgc3BhbiB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogNHB4O1xcblxcdHdpZHRoOiA0MCU7XFxuXFx0aGVpZ2h0OiA4MCU7XFxuXFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcblxcdGZvbnQtc2l6ZTogMTBweDtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHRib3JkZXItcmFkaXVzOiA1MHB4O1xcblxcdHRyYW5zaXRpb246IDAuM3MgZWFzZSBhbGw7XFxufVxcblxcbiNidXR0b24tMTAgLmtub2JzOjpiZWZvcmUge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGxlZnQ6IDRweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDNhOWY0O1xcbn1cXG5cXG4jYnV0dG9uLTEwIC5rbm9iczo6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICdGJztcXG5cXHRyaWdodDogMnB4O1xcblxcdGNvbG9yOiAjNGU0ZTRlO1xcbn1cXG5cXG4jYnV0dG9uLTEwIC5rbm9icyBzcGFuIHtcXG5cXHRsZWZ0OiA0cHg7XFxuXFx0Y29sb3I6ICNmZmY7XFxuXFx0ei1pbmRleDogMTtcXG59XFxuXFxuI2J1dHRvbi0xMCAuY2hlY2tib3g6Y2hlY2tlZCArIC5rbm9icyBzcGFuIHtcXG5cXHRjb2xvcjogIzRlNGU0ZTtcXG59XFxuXFxuI2J1dHRvbi0xMCAuY2hlY2tib3g6Y2hlY2tlZCArIC5rbm9iczo6YmVmb3JlIHtcXG5cXHRsZWZ0OiA0MnB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XFxufVxcblxcbiNidXR0b24tMTAgLmNoZWNrYm94OmNoZWNrZWQgKyAua25vYnM6OmFmdGVyIHtcXG5cXHRjb2xvcjogI2ZmZjtcXG59XFxuXFxuI2J1dHRvbi0xMCAuY2hlY2tib3g6Y2hlY2tlZCB+IC5sYXllciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZjZWJlYjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRlci1mb290ZXIuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5wdXRzLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMl9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2RpYWxvZy5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogLS0tLS0tLS0tLS0tLS0tICAgICBSZWJvb3QgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdC8qIGNvbG9yOiB1bnNldDsgKi9cbn1cblxuYSB7XG5cdGNvbG9yOiB1bnNldDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvUmVib290ICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgVXRpbGl0aWVzICYgVW5pdmVyc2FscyAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbjpyb290IHtcblx0LS1lZy12YXI6IHJlZDtcbn1cblxuYm9keSB7XG5cdG1pbi1oZWlnaHQ6IDEwMHN2aDtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvVXRpbGl0aWVzICYgVW5pdmVyc2FscyAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgTWFpbiAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbm1haW4ge1xuXHRmbGV4OiAxO1xuXHRwYWRkaW5nOiAxMHB4O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHR3aWR0aDogbWluKDY0MHB4LCAxMDAlKTtcblx0bWFyZ2luOiBhdXRvO1xufVxuXG4uY3VycmVudC1pbmZvIHtcblx0bWluLWhlaWdodDogMjUwcHg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG4ubG9jYXRpb24ge1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jaXR5IHtcblx0Zm9udC1zaXplOiA0MHB4O1xufVxuXG4uY3VycmVudC10ZW1wIHtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdGZvbnQtc2l6ZTogNDBweDtcbn1cblxuLmZvcmVjYXN0IHtcblx0ZmxleDogMTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbi5mb3JlY2FzdCA+ICoge1xuXHRtYXJnaW46IDAgMTBweDtcbn1cblxuLmZvcmVjYXN0IC5zcGFjZXIge1xuXHRoZWlnaHQ6IDFweDtcblx0YmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xufVxuXG4uZm9yZWNhc3QgLmluZm8ge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mb3JlY2FzdCAuZGFpbHkge1xuXHRtaW4td2lkdGg6IDYwcHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZvcmVjYXN0IC5sb3cge1xuXHRjb2xvcjogYmx1ZTtcbn1cblxuLmZvcmVjYXN0IC5oaWdoIHtcblx0Y29sb3I6IHJlZDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvTWFpbiAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBSUEsbURBQW1EOztBQUVuRDs7O0NBR0MsU0FBUztDQUNULFVBQVU7Q0FDVixzQkFBc0I7Q0FDdEIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsWUFBWTtBQUNiOztBQUVBLG9EQUFvRDtBQUNwRCxtRUFBbUU7O0FBRW5FO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGFBQWE7Q0FDYixzQkFBc0I7QUFDdkI7O0FBRUEsb0VBQW9FOztBQUVwRSxpREFBaUQ7O0FBRWpEO0NBQ0MsT0FBTztDQUNQLGFBQWE7Q0FDYixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLHVCQUF1QjtDQUN2QixZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixtQkFBbUI7Q0FDbkIsNkJBQTZCO0FBQzlCOztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsT0FBTztDQUNQLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsNkJBQTZCO0FBQzlCOztBQUVBO0NBQ0MsY0FBYztBQUNmOztBQUVBO0NBQ0MsV0FBVztDQUNYLDJCQUEyQjtBQUM1Qjs7QUFFQTtDQUNDLGFBQWE7Q0FDYiw4QkFBOEI7Q0FDOUIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFdBQVc7QUFDWjs7QUFFQTtDQUNDLFVBQVU7QUFDWDs7QUFFQSxrREFBa0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoLi9oZWFkZXItZm9vdGVyLmNzcyk7XFxuQGltcG9ydCB1cmwoLi9pbnB1dHMuY3NzKTtcXG5AaW1wb3J0IHVybCguL2RpYWxvZy5jc3MpO1xcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgUmVib290ICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHQvKiBjb2xvcjogdW5zZXQ7ICovXFxufVxcblxcbmEge1xcblxcdGNvbG9yOiB1bnNldDtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvUmVib290ICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIFV0aWxpdGllcyAmIFVuaXZlcnNhbHMgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbjpyb290IHtcXG5cXHQtLWVnLXZhcjogcmVkO1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRtaW4taGVpZ2h0OiAxMDBzdmg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9VdGlsaXRpZXMgJiBVbml2ZXJzYWxzICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIE1haW4gICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbm1haW4ge1xcblxcdGZsZXg6IDE7XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0d2lkdGg6IG1pbig2NDBweCwgMTAwJSk7XFxuXFx0bWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uY3VycmVudC1pbmZvIHtcXG5cXHRtaW4taGVpZ2h0OiAyNTBweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLmxvY2F0aW9uIHtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jaXR5IHtcXG5cXHRmb250LXNpemU6IDQwcHg7XFxufVxcblxcbi5jdXJyZW50LXRlbXAge1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuLmZvcmVjYXN0IHtcXG5cXHRmbGV4OiAxO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLmZvcmVjYXN0ID4gKiB7XFxuXFx0bWFyZ2luOiAwIDEwcHg7XFxufVxcblxcbi5mb3JlY2FzdCAuc3BhY2VyIHtcXG5cXHRoZWlnaHQ6IDFweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxufVxcblxcbi5mb3JlY2FzdCAuaW5mbyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvcmVjYXN0IC5kYWlseSB7XFxuXFx0bWluLXdpZHRoOiA2MHB4O1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmZvcmVjYXN0IC5sb3cge1xcblxcdGNvbG9yOiBibHVlO1xcbn1cXG5cXG4uZm9yZWNhc3QgLmhpZ2gge1xcblxcdGNvbG9yOiByZWQ7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL01haW4gICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy9tYWluLmNzcyc7XG5cbmNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtLnNlYXJjaC1pdGVtJyk7XG5jb25zdCB0ZW1wU2NhbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVtcC1zY2FsZScpO1xuY29uc3QgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGlhbG9nJyk7XG5cbmxldCBjdXJyZW50RGF0YTtcblxuY29uc3QgZnVuU3R1ZmYgPSBbXG5cdCdodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2snLFxuXHQnZXk9Jyxcblx0JzA0MzI4MjMyNWMnLFxuXHQnM2I0NGVjOTE0MScsXG5cdCcwMDEwMjMwNTExJyxcblx0JyZkYXlzPTMnLFxuXHQnJnE9Jyxcbl0uam9pbignJyk7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKHRhcmdldENpdHkpIHtcblx0dHJ5IHtcblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGZ1blN0dWZmICsgdGFyZ2V0Q2l0eSwgeyBtb2RlOiAnY29ycycgfSk7XG5cdFx0Y29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cdFx0cmV0dXJuIHdlYXRoZXJEYXRhO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHRjb25zb2xlLmxvZyhlcnIpO1xuXHRcdHJldHVybiBlcnI7XG5cdH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0RGF0ZShmb3JlY2FzdERheSkge1xuXHRjb25zdCBkYXlzT2ZUaGVXZWVrID0ge1xuXHRcdG1vbjogJ01vbmRheScsXG5cdFx0dHVlOiAnVHVlc2RheScsXG5cdFx0d2VkOiAnV2VkbmVzZGF5Jyxcblx0XHR0aHU6ICdUaHVyc2RheScsXG5cdFx0ZnJpOiAnRnJpZGF5Jyxcblx0XHRzYXQ6ICdTYXR1cmRheScsXG5cdFx0c3VuOiAnU3VuZGF5Jyxcblx0fTtcblxuXHRjb25zdCBzaG9ydERheSA9IG5ldyBEYXRlKGZvcmVjYXN0RGF5KS50b1VUQ1N0cmluZygpLnRvTG93ZXJDYXNlKCkuc2xpY2UoMCwgMyk7XG5cdHJldHVybiBkYXlzT2ZUaGVXZWVrW3Nob3J0RGF5XTtcbn1cblxuZnVuY3Rpb24gbWFrZVRpdGxlQ2FzZShzdHJpbmcpIHtcblx0cmV0dXJuIHN0cmluZ1xuXHRcdC5zcGxpdCgnICcpXG5cdFx0Lm1hcCgod29yZCkgPT4gd29yZFswXS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKSlcblx0XHQuam9pbignICcpO1xufVxuXG5mdW5jdGlvbiBzZXRDdXJyZW50SW5mbygpIHtcblx0Y29uc3QgY3VycmVudENpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eScpO1xuXHRjb25zdCBjdXJyZW50Q291bnRyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3VudHJ5Jyk7XG5cdGNvbnN0IGN1cnJlbnRJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtaWNvbicpO1xuXHRjb25zdCBjdXJyZW50VGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXRlbXAnKTtcblxuXHRjb25zdCB7IGxvY2F0aW9uLCBjdXJyZW50IH0gPSBjdXJyZW50RGF0YTtcblxuXHRjdXJyZW50Q2l0eS50ZXh0Q29udGVudCA9IGxvY2F0aW9uLm5hbWU7XG5cdGN1cnJlbnRDb3VudHJ5LnRleHRDb250ZW50ID0gbG9jYXRpb24uY291bnRyeTtcblx0Y3VycmVudFRlbXAudGV4dENvbnRlbnQgPSB0ZW1wU2NhbGUuY2hlY2tlZFxuXHRcdD8gYCR7Y3VycmVudC50ZW1wX2Z9wrAgRmBcblx0XHQ6IGAke2N1cnJlbnQudGVtcF9jfcKwIENgO1xuXHRjdXJyZW50SWNvbi5zcmMgPSBgaHR0cHM6JHtjdXJyZW50LmNvbmRpdGlvbi5pY29ufWA7XG5cdGN1cnJlbnRJY29uLmFsdCA9IGAke2N1cnJlbnQuY29uZGl0aW9uLnRleHR9IHdlYXRoZXIgaWNvbmA7XG59XG5cbmZ1bmN0aW9uIHNldEZvcmVjYXN0SW5mbygpIHtcblx0WzAsIDEsIDJdLmZvckVhY2goKGRheU51bSkgPT4ge1xuXHRcdGNvbnN0IGZvcmVjYXN0ID0gY3VycmVudERhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbZGF5TnVtXTtcblx0XHRjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5kYXktJHtkYXlOdW19IC50aXRsZWApO1xuXHRcdGNvbnN0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZGF5LSR7ZGF5TnVtfSAuaWNvbmApO1xuXHRcdGNvbnN0IGxvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5kYXktJHtkYXlOdW19IC5kYWlseS5sb3cgLm51bWApO1xuXHRcdGNvbnN0IGhpZ2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZGF5LSR7ZGF5TnVtfSAuZGFpbHkuaGlnaCAubnVtYCk7XG5cblx0XHR0aXRsZS50ZXh0Q29udGVudCA9ICFkYXlOdW0gPyAnVG9kYXknIDogZm9ybWF0RGF0ZShmb3JlY2FzdC5kYXRlKTtcblxuXHRcdGljb24uc3JjID0gYGh0dHBzOiR7Zm9yZWNhc3QuZGF5LmNvbmRpdGlvbi5pY29ufWA7XG5cblx0XHRsb3cudGV4dENvbnRlbnQgPSB0ZW1wU2NhbGUuY2hlY2tlZFxuXHRcdFx0PyBgJHtmb3JlY2FzdC5kYXkubWludGVtcF9mfcKwIEZgXG5cdFx0XHQ6IGAke2ZvcmVjYXN0LmRheS5taW50ZW1wX2N9wrAgQ2A7XG5cblx0XHRoaWdoLnRleHRDb250ZW50ID0gdGVtcFNjYWxlLmNoZWNrZWRcblx0XHRcdD8gYCR7Zm9yZWNhc3QuZGF5Lm1heHRlbXBfZn3CsCBGYFxuXHRcdFx0OiBgJHtmb3JlY2FzdC5kYXkubWF4dGVtcF9jfcKwIENgO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlRGlzcGxheSgpIHtcblx0c2V0Q3VycmVudEluZm8oKTtcblx0c2V0Rm9yZWNhc3RJbmZvKCk7XG5cdGRpYWxvZy5jbG9zZSgpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBjaGFuZ2VDaXR5KHRhcmdldENpdHkpIHtcblx0Y3VycmVudERhdGEgPSBhd2FpdCBnZXRXZWF0aGVyRGF0YSh0YXJnZXRDaXR5KTtcblx0Y29uc29sZS5sb2coY3VycmVudERhdGEpO1xuXHR1cGRhdGVEaXNwbGF5KCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVNlYXJjaChlKSB7XG5cdGUucHJldmVudERlZmF1bHQoKTtcblx0Y29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaC1iYXInKTtcblx0Y29uc3Qgc2VhcmNoTG9hZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2FkLXNlYXJjaCcpO1xuXG5cdHNlYXJjaExvYWQudGV4dENvbnRlbnQgPSBtYWtlVGl0bGVDYXNlKHNlYXJjaEJhci52YWx1ZSk7XG5cdGRpYWxvZy5zaG93TW9kYWwoKTtcblx0ZGlhbG9nLmJsdXIoKTtcblxuXHRjaGFuZ2VDaXR5KHNlYXJjaEJhci52YWx1ZSk7XG5cblx0c2VhcmNoQmFyLnZhbHVlID0gJyc7XG5cdHNlYXJjaEJhci5ibHVyKCk7XG59XG5cbnNlYXJjaEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgaGFuZGxlU2VhcmNoKTtcbnRlbXBTY2FsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHVwZGF0ZURpc3BsYXkpO1xuXG5jaGFuZ2VDaXR5KCduZXcgeW9yaycpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9