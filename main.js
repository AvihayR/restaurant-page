/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/brick-bg-gareth-david-unsplash.jpg */ "./src/img/brick-bg-gareth-david-unsplash.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* -------Reset css:------- */
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

/* ------- CSS Color vars: ------ */
:root{
    --coal-bg: #27272a;
    --transparent-coal: #27272ac6;
    --gray-bg: #71717a;
    --lava-orange: #ea580c;
    --sunny-yellow: #fcd34d;
    --amber-white: #fefce8;
    height: 100vh;
}
/* ---------Body section: -------- */
body {
    font-family: 'Mulish';
}

body,div#content,#content-main,#contact-ul{
    display: flex;
    flex-direction: column;
}

#contact-ul{
    background-color: none;
}

.contact-li{
    gap: 3px;
}
.contact-li p, .contact-li a{
    font-size: 1rem;
    color: white;
    text-align: center;
    line-height: 2rem;
    text-decoration: underline;
}

body{
    min-height: 100%;
    box-sizing: border-box;
    background-image:  linear-gradient(
        rgba(0, 0, 0, 0.45), 
        rgba(0, 0, 0, 0.45)
      ), url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: cover;
}

/* ---------Text styling: -------- */
h1{
    font-size: 2.5rem;
    color: var(--lava-orange);
    letter-spacing: 3.5px;
}

#h1-menu, #contact-header{
    color: var(--sunny-yellow);
}

h2{
    font-size: 2rem;
    color: var(--sunny-yellow);
    letter-spacing: 1.5px;
}

#main-p{
    color: var(--amber-white);
}

#contact-p{
    font-size: 1.3rem;
    color: var(--gray-bg);
    line-height: 1rem;
}

/* ---------Header section: -------- */
header{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}

header,ul,li{
    display: flex;
    margin: 0;
    padding: 0;
}

#header-ul{
    width: 100%;
    height: 3rem;
    justify-content: space-around;
    background-color: var(--coal-bg);

}

ul>li{
    font-size: 2rem;
    color: var(--gray-bg);
    align-self: center;
    list-style: none;
    cursor: pointer;
    transition: 0.7s;
}

ul>li:hover{
    color: whitesmoke;
}


/* ---------content div section: -------- */
div{
    flex: 1;
    justify-content:center;
}

div#content{
    width: 90vw;
    height: 100%;
    margin: 7vh auto; 
    background-color: var(--transparent-coal);
    align-items: center;
    gap: 5px;
    justify-self: center;
    padding: 15px 0;
}

#content-header,#content-main{
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    margin-top: 1rem;
    width: 95%;
}

.subheader{
    font-size: 1.3rem;
    color: var(--sunny-yellow);
    letter-spacing: 1.5px;
}

img.cover-img{
    max-width: 35%;
    height: auto;
    border-radius: 15px;
    margin-top: 15px;
}

@media screen and (max-width: 480px) {
    img.cover-img{
        max-width: 80%;
    }
  }

img.menu-img{
    max-width: 100%;
    display: block;
}

.logo{
    height: 2rem;
}

/* ---------Footer section: -------- */
footer{
    width: 100%;
    height: 4.5rem;
    text-align: center;
    background-color: var(--transparent-coal);
}

footer a{
    display: block;
    text-decoration: none;
    color: white;
    font-size: 1.2rem;
    line-height: 1.5rem;
}

footer>a:hover{
    text-decoration: underline;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,6BAA6B;AAC7B;;;CAGC;;AAED;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;;AAEA,mCAAmC;AACnC;IACI,kBAAkB;IAClB,6BAA6B;IAC7B,kBAAkB;IAClB,sBAAsB;IACtB,uBAAuB;IACvB,sBAAsB;IACtB,aAAa;AACjB;AACA,oCAAoC;AACpC;IACI,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,QAAQ;AACZ;AACA;IACI,eAAe;IACf,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;IACjB,0BAA0B;AAC9B;;AAEA;IACI,gBAAgB;IAChB,sBAAsB;IACtB;;;gDAGkD;IAClD,sBAAsB;AAC1B;;AAEA,oCAAoC;AACpC;IACI,iBAAiB;IACjB,yBAAyB;IACzB,qBAAqB;AACzB;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,eAAe;IACf,0BAA0B;IAC1B,qBAAqB;AACzB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,iBAAiB;IACjB,qBAAqB;IACrB,iBAAiB;AACrB;;AAEA,sCAAsC;AACtC;IACI,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;AACf;;AAEA;IACI,aAAa;IACb,SAAS;IACT,UAAU;AACd;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,6BAA6B;IAC7B,gCAAgC;;AAEpC;;AAEA;IACI,eAAe;IACf,qBAAqB;IACrB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;AACrB;;;AAGA,2CAA2C;AAC3C;IACI,OAAO;IACP,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,yCAAyC;IACzC,mBAAmB;IACnB,QAAQ;IACR,oBAAoB;IACpB,eAAe;AACnB;;AAEA;IACI,mBAAmB;IACnB,2BAA2B;IAC3B,kBAAkB;IAClB,gBAAgB;IAChB,UAAU;AACd;;AAEA;IACI,iBAAiB;IACjB,0BAA0B;IAC1B,qBAAqB;AACzB;;AAEA;IACI,cAAc;IACd,YAAY;IACZ,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI;QACI,cAAc;IAClB;EACF;;AAEF;IACI,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,YAAY;AAChB;;AAEA,sCAAsC;AACtC;IACI,WAAW;IACX,cAAc;IACd,kBAAkB;IAClB,yCAAyC;AAC7C;;AAEA;IACI,cAAc;IACd,qBAAqB;IACrB,YAAY;IACZ,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,0BAA0B;AAC9B","sourcesContent":["/* -------Reset css:------- */\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* ------- CSS Color vars: ------ */\n:root{\n    --coal-bg: #27272a;\n    --transparent-coal: #27272ac6;\n    --gray-bg: #71717a;\n    --lava-orange: #ea580c;\n    --sunny-yellow: #fcd34d;\n    --amber-white: #fefce8;\n    height: 100vh;\n}\n/* ---------Body section: -------- */\nbody {\n    font-family: 'Mulish';\n}\n\nbody,div#content,#content-main,#contact-ul{\n    display: flex;\n    flex-direction: column;\n}\n\n#contact-ul{\n    background-color: none;\n}\n\n.contact-li{\n    gap: 3px;\n}\n.contact-li p, .contact-li a{\n    font-size: 1rem;\n    color: white;\n    text-align: center;\n    line-height: 2rem;\n    text-decoration: underline;\n}\n\nbody{\n    min-height: 100%;\n    box-sizing: border-box;\n    background-image:  linear-gradient(\n        rgba(0, 0, 0, 0.45), \n        rgba(0, 0, 0, 0.45)\n      ), url(./img/brick-bg-gareth-david-unsplash.jpg);\n    background-size: cover;\n}\n\n/* ---------Text styling: -------- */\nh1{\n    font-size: 2.5rem;\n    color: var(--lava-orange);\n    letter-spacing: 3.5px;\n}\n\n#h1-menu, #contact-header{\n    color: var(--sunny-yellow);\n}\n\nh2{\n    font-size: 2rem;\n    color: var(--sunny-yellow);\n    letter-spacing: 1.5px;\n}\n\n#main-p{\n    color: var(--amber-white);\n}\n\n#contact-p{\n    font-size: 1.3rem;\n    color: var(--gray-bg);\n    line-height: 1rem;\n}\n\n/* ---------Header section: -------- */\nheader{\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n}\n\nheader,ul,li{\n    display: flex;\n    margin: 0;\n    padding: 0;\n}\n\n#header-ul{\n    width: 100%;\n    height: 3rem;\n    justify-content: space-around;\n    background-color: var(--coal-bg);\n\n}\n\nul>li{\n    font-size: 2rem;\n    color: var(--gray-bg);\n    align-self: center;\n    list-style: none;\n    cursor: pointer;\n    transition: 0.7s;\n}\n\nul>li:hover{\n    color: whitesmoke;\n}\n\n\n/* ---------content div section: -------- */\ndiv{\n    flex: 1;\n    justify-content:center;\n}\n\ndiv#content{\n    width: 90vw;\n    height: 100%;\n    margin: 7vh auto; \n    background-color: var(--transparent-coal);\n    align-items: center;\n    gap: 5px;\n    justify-self: center;\n    padding: 15px 0;\n}\n\n#content-header,#content-main{\n    align-items: center;\n    justify-content: flex-start;\n    text-align: center;\n    margin-top: 1rem;\n    width: 95%;\n}\n\n.subheader{\n    font-size: 1.3rem;\n    color: var(--sunny-yellow);\n    letter-spacing: 1.5px;\n}\n\nimg.cover-img{\n    max-width: 35%;\n    height: auto;\n    border-radius: 15px;\n    margin-top: 15px;\n}\n\n@media screen and (max-width: 480px) {\n    img.cover-img{\n        max-width: 80%;\n    }\n  }\n\nimg.menu-img{\n    max-width: 100%;\n    display: block;\n}\n\n.logo{\n    height: 2rem;\n}\n\n/* ---------Footer section: -------- */\nfooter{\n    width: 100%;\n    height: 4.5rem;\n    text-align: center;\n    background-color: var(--transparent-coal);\n}\n\nfooter a{\n    display: block;\n    text-decoration: none;\n    color: white;\n    font-size: 1.2rem;\n    line-height: 1.5rem;\n}\n\nfooter>a:hover{\n    text-decoration: underline;\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contact)
/* harmony export */ });
/* harmony import */ var _img_contacts_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/contacts.svg */ "./src/img/contacts.svg");
/* harmony import */ var _img_home_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/home.svg */ "./src/img/home.svg");
/* harmony import */ var _img_tinder_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/tinder.svg */ "./src/img/tinder.svg");
/* harmony import */ var _img_ember_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/ember.jpg */ "./src/img/ember.jpg");





function contact() {
  //Fetch content element:
  const contentDiv = document.getElementById('content');

  //Create elements:
  const contentHeader = document.createElement('div');
  const contentMain = document.createElement('div');

  const contactUl = document.createElement('ul');
  const contactLi1 = document.createElement('li');
  const contactLi2 = document.createElement('li');
  const contactLi3 = document.createElement('li');

  const imgMain = document.createElement('img');
  const homeLogo = document.createElement('img');
  const tinderLogo = document.createElement('img');
  const phoneLogo = document.createElement('img');

  const homeAddress = document.createElement('p');
  const tinderLink = document.createElement('a');
  const phoneNumber = document.createElement('p');

  const h1Header = document.createElement('h1');
  const pHeader = document.createElement('p');

  //add element ids and classes:
  contentHeader.id = 'content-header';
  contentMain.id = 'content-main';
  imgMain.classList.add('cover-img');
  homeLogo.classList.add('logo');
  tinderLogo.classList.add('logo');
  phoneLogo.classList.add('logo');
  h1Header.id = 'contact-header';
  pHeader.id = 'contact-p';
  tinderLink.setAttribute('href', 'https://github.com/AvihayR/restaurant-page');
  contactUl.id = 'contact-ul';
  contactLi1.classList.add('contact-li');
  contactLi2.classList.add('contact-li');
  contactLi3.classList.add('contact-li');

  //Elements content:
  imgMain.src = _img_ember_jpg__WEBPACK_IMPORTED_MODULE_3__;
  homeLogo.src = _img_home_svg__WEBPACK_IMPORTED_MODULE_1__;
  tinderLogo.src = _img_tinder_svg__WEBPACK_IMPORTED_MODULE_2__;
  phoneLogo.src = _img_contacts_svg__WEBPACK_IMPORTED_MODULE_0__;

  h1Header.innerText = 'Contact us';
  pHeader.innerText = `
  Visit our family Shop & Restaurant, at Element City.

  Other ways to contact us:
  
  `;

  homeAddress.innerText = 'Element City, Firetown, 1200 Park eve.';
  tinderLink.innerText = 'Firebook';
  phoneNumber.innerText = '+999-00-111-22-33';

  //Add created elements to contentDiv:
  contentHeader.appendChild(h1Header);
  contentHeader.appendChild(pHeader);

  contactLi1.appendChild(homeLogo);
  contactLi1.appendChild(homeAddress);
  contactLi2.appendChild(phoneLogo);
  contactLi2.appendChild(phoneNumber);
  contactLi3.appendChild(tinderLogo);
  contactLi3.appendChild(tinderLink);

  contactUl.appendChild(contactLi1);
  contactUl.appendChild(contactLi2);
  contactUl.appendChild(contactLi3);

  contentHeader.appendChild(contactUl);
  contentMain.appendChild(imgMain);

  contentDiv.appendChild(contentHeader);
  contentDiv.appendChild(contentMain);
}


/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ footerElement)
/* harmony export */ });
/* harmony import */ var _img_menu_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/menu.png */ "./src/img/menu.png");
/* harmony import */ var _img_items_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/items.png */ "./src/img/items.png");



function footerElement() {
  //Fetch body element:
  const body = document.querySelector('body');

  //Create elements:
  const footerElement = document.createElement('footer');

  const p = document.createElement('p');
  const aIcons = document.createElement('a');
  const aBackground = document.createElement('a');
  const aImages = document.createElement('a');
  const aFonts = document.createElement('a');

  //add element ids and classes:

  //Elements content:
  aIcons.setAttribute('href', 'https://icons8.com/');
  aIcons.textContent = 'Icons by Icons8';

  aBackground.setAttribute('href', 'https://unsplash.com/@gareth_david');
  aBackground.textContent = 'Bricks Background by Gareth David - Unsplash';

  aImages.setAttribute('href', 'https://www.pixar.com/elemental');
  aImages.textContent = 'Images & story by Pixar Studios';

  //Add created elements to contentDiv:
  footerElement.appendChild(aImages);
  footerElement.appendChild(aIcons);
  footerElement.appendChild(aBackground);

  body.appendChild(footerElement);
}


/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ header)
/* harmony export */ });
function header() {
  //fetch body element:
  const body = document.querySelector('body');

  //create elements:
  const headerElement = document.createElement('header');
  const ul = document.createElement('ul');
  const liHome = document.createElement('li');
  const liMenu = document.createElement('li');
  const liContact = document.createElement('li');

  //add relevant element ids:
  liHome.id = 'home-tab';
  liMenu.id = 'menu-tab';
  liContact.id = 'contact-tab';
  ul.id = 'header-ul';

  //add content to elements:
  liHome.textContent = 'Home';
  liMenu.textContent = 'Menu';
  liContact.textContent = 'Contact';

  //add li's to ul, and ul to body:
  ul.appendChild(liHome);
  ul.appendChild(liMenu);
  ul.appendChild(liContact);
  headerElement.appendChild(ul);
  body.appendChild(headerElement);
}


/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ homePage)
/* harmony export */ });
/* harmony import */ var _img_rest_1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/rest-1.jpg */ "./src/img/rest-1.jpg");
/* harmony import */ var _img_fluid_1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/fluid-1.png */ "./src/img/fluid-1.png");



function homePage() {
  //Fetch content element:
  const contentDiv = document.getElementById('content');

  //Create elements:
  const contentHeader = document.createElement('div');
  const contentMain = document.createElement('div');

  const h1Header = document.createElement('h1');
  const pHeader = document.createElement('p');
  const imgHeader = document.createElement('img');

  const h2Main = document.createElement('h2');
  const pMain = document.createElement('p');
  const imgMain = document.createElement('img');

  //add element ids and classes:
  contentHeader.id = 'content-header';
  pHeader.classList.add('subheader');
  contentMain.id = 'content-main';
  imgHeader.classList.add('cover-img');
  imgMain.classList.add('cover-img');
  h2Main.id = 'main-h2';
  pMain.id = 'main-p';

  //Elements content:
  h1Header.innerText = 'The Fireplace';
  pHeader.innerText = 'Wood Snacks - Lava Java - Kol-Nuts';
  imgHeader.src = _img_rest_1_jpg__WEBPACK_IMPORTED_MODULE_0__;
  h2Main.innerText = 'Welcome to the Fireplace!';
  pMain.innerText = `A family traditional Shop & Restaurant built by Bernie Lumen, 
  Bernie left Fire land to provide a better life for his lovely wife, Cinder
  And his sole daughter, Ember, who will one day, take his place and own the shop!
  In our shop, you could find yummy treats,
  Hot coffee, flaming groceries, Or Baby-flames essentials!`;
  imgMain.src = _img_fluid_1_png__WEBPACK_IMPORTED_MODULE_1__;

  //Add created elements to contentDiv:
  contentHeader.appendChild(h1Header);
  contentHeader.appendChild(pHeader);
  contentHeader.appendChild(imgHeader);

  contentMain.appendChild(h2Main);
  contentMain.appendChild(pMain);
  contentMain.appendChild(imgMain);

  contentDiv.appendChild(contentHeader);
  contentDiv.appendChild(contentMain);
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _img_menu_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/menu.png */ "./src/img/menu.png");
/* harmony import */ var _img_items_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/items.png */ "./src/img/items.png");



function menu() {
  //Fetch content element:
  const contentDiv = document.getElementById('content');

  //Create elements:
  const contentMain = document.createElement('div');

  const h1Main = document.createElement('h1');
  const pMain = document.createElement('p');
  const imgMain = document.createElement('img');
  const imgMain1 = document.createElement('img');

  //add element ids and classes:
  contentMain.id = 'content-main';
  imgMain.classList.add('menu-img');
  imgMain1.classList.add('menu-img');
  pMain.id = 'main-p';
  h1Main.id = 'h1-menu';

  //Elements content:
  h1Main.innerText = 'Menu';
  pMain.innerText = `
  Our menu might not fit every element out there,
  But as long as you're not made out of tears,
  or name is not Wade Ripple (!), 
  You should be fine!
  `;
  imgMain.src = _img_menu_png__WEBPACK_IMPORTED_MODULE_0__;
  imgMain1.src = _img_items_png__WEBPACK_IMPORTED_MODULE_1__;

  //Add created elements to contentDiv:
  contentMain.appendChild(h1Main);
  contentMain.appendChild(pMain);
  contentMain.appendChild(imgMain);
  contentMain.appendChild(imgMain1);

  contentDiv.appendChild(contentMain);
}


/***/ }),

/***/ "./src/img/brick-bg-gareth-david-unsplash.jpg":
/*!****************************************************!*\
  !*** ./src/img/brick-bg-gareth-david-unsplash.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c28bec0950828e087ca2.jpg";

/***/ }),

/***/ "./src/img/contacts.svg":
/*!******************************!*\
  !*** ./src/img/contacts.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9e614558e236d88d9bdc.svg";

/***/ }),

/***/ "./src/img/ember.jpg":
/*!***************************!*\
  !*** ./src/img/ember.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cd5cba158172291f8c12.jpg";

/***/ }),

/***/ "./src/img/fluid-1.png":
/*!*****************************!*\
  !*** ./src/img/fluid-1.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a1533e1972834d14d2b1.png";

/***/ }),

/***/ "./src/img/home.svg":
/*!**************************!*\
  !*** ./src/img/home.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "759f343031e857e8d28f.svg";

/***/ }),

/***/ "./src/img/items.png":
/*!***************************!*\
  !*** ./src/img/items.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "36d5d9a12f1782e63717.png";

/***/ }),

/***/ "./src/img/menu.png":
/*!**************************!*\
  !*** ./src/img/menu.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8a1d345e5702ebbf38ca.png";

/***/ }),

/***/ "./src/img/rest-1.jpg":
/*!****************************!*\
  !*** ./src/img/rest-1.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "55c9a4b6187fbbf42d7f.jpg";

/***/ }),

/***/ "./src/img/tinder.svg":
/*!****************************!*\
  !*** ./src/img/tinder.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "378d7e6e66fbf9331aa9.svg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ "./src/header.js");
/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homepage.js */ "./src/homepage.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer */ "./src/footer.js");
//Imports:







(0,_header_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_homepage_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
// menu();
// contact();
(0,_footer__WEBPACK_IMPORTED_MODULE_5__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDZKQUEyRDtBQUN2Ryw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHVGQUF1RixRQUFRLE1BQU0saUJBQWlCLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sWUFBWSxPQUFPLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxRQUFRLE9BQU8sYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdB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Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ3FCO0FBQ1k7QUFDSTtBQUNSO0FBQ007QUFDRTs7QUFFckMsc0RBQU07QUFDTix3REFBUTtBQUNSO0FBQ0E7QUFDQSxtREFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1nL2JyaWNrLWJnLWdhcmV0aC1kYXZpZC11bnNwbGFzaC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIC0tLS0tLS1SZXNldCBjc3M6LS0tLS0tLSAqL1xuLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXG4gICB2Mi4wIHwgMjAxMTAxMjZcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXG4qL1xuXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxuYiwgdSwgaSwgY2VudGVyLFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG5cdGJvcmRlcjogMDtcblx0Zm9udC1zaXplOiAxMDAlO1xuXHRmb250OiBpbmhlcml0O1xuXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuYm9keSB7XG5cdGxpbmUtaGVpZ2h0OiAxO1xufVxub2wsIHVsIHtcblx0bGlzdC1zdHlsZTogbm9uZTtcbn1cbmJsb2NrcXVvdGUsIHEge1xuXHRxdW90ZXM6IG5vbmU7XG59XG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLCBxOmFmdGVyIHtcblx0Y29udGVudDogJyc7XG5cdGNvbnRlbnQ6IG5vbmU7XG59XG50YWJsZSB7XG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG5cdGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG4vKiAtLS0tLS0tIENTUyBDb2xvciB2YXJzOiAtLS0tLS0gKi9cbjpyb290e1xuICAgIC0tY29hbC1iZzogIzI3MjcyYTtcbiAgICAtLXRyYW5zcGFyZW50LWNvYWw6ICMyNzI3MmFjNjtcbiAgICAtLWdyYXktYmc6ICM3MTcxN2E7XG4gICAgLS1sYXZhLW9yYW5nZTogI2VhNTgwYztcbiAgICAtLXN1bm55LXllbGxvdzogI2ZjZDM0ZDtcbiAgICAtLWFtYmVyLXdoaXRlOiAjZmVmY2U4O1xuICAgIGhlaWdodDogMTAwdmg7XG59XG4vKiAtLS0tLS0tLS1Cb2R5IHNlY3Rpb246IC0tLS0tLS0tICovXG5ib2R5IHtcbiAgICBmb250LWZhbWlseTogJ011bGlzaCc7XG59XG5cbmJvZHksZGl2I2NvbnRlbnQsI2NvbnRlbnQtbWFpbiwjY29udGFjdC11bHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbiNjb250YWN0LXVse1xuICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XG59XG5cbi5jb250YWN0LWxpe1xuICAgIGdhcDogM3B4O1xufVxuLmNvbnRhY3QtbGkgcCwgLmNvbnRhY3QtbGkgYXtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuYm9keXtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogIGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjQ1KSwgXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMC40NSlcbiAgICAgICksIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4vKiAtLS0tLS0tLS1UZXh0IHN0eWxpbmc6IC0tLS0tLS0tICovXG5oMXtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICBjb2xvcjogdmFyKC0tbGF2YS1vcmFuZ2UpO1xuICAgIGxldHRlci1zcGFjaW5nOiAzLjVweDtcbn1cblxuI2gxLW1lbnUsICNjb250YWN0LWhlYWRlcntcbiAgICBjb2xvcjogdmFyKC0tc3VubnkteWVsbG93KTtcbn1cblxuaDJ7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGNvbG9yOiB2YXIoLS1zdW5ueS15ZWxsb3cpO1xuICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbn1cblxuI21haW4tcHtcbiAgICBjb2xvcjogdmFyKC0tYW1iZXItd2hpdGUpO1xufVxuXG4jY29udGFjdC1we1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIGNvbG9yOiB2YXIoLS1ncmF5LWJnKTtcbiAgICBsaW5lLWhlaWdodDogMXJlbTtcbn1cblxuLyogLS0tLS0tLS0tSGVhZGVyIHNlY3Rpb246IC0tLS0tLS0tICovXG5oZWFkZXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5oZWFkZXIsdWwsbGl7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuI2hlYWRlci11bHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDNyZW07XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29hbC1iZyk7XG5cbn1cblxudWw+bGl7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGNvbG9yOiB2YXIoLS1ncmF5LWJnKTtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogMC43cztcbn1cblxudWw+bGk6aG92ZXJ7XG4gICAgY29sb3I6IHdoaXRlc21va2U7XG59XG5cblxuLyogLS0tLS0tLS0tY29udGVudCBkaXYgc2VjdGlvbjogLS0tLS0tLS0gKi9cbmRpdntcbiAgICBmbGV4OiAxO1xuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG59XG5cbmRpdiNjb250ZW50e1xuICAgIHdpZHRoOiA5MHZ3O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW46IDd2aCBhdXRvOyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudC1jb2FsKTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNXB4O1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDE1cHggMDtcbn1cblxuI2NvbnRlbnQtaGVhZGVyLCNjb250ZW50LW1haW57XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgd2lkdGg6IDk1JTtcbn1cblxuLnN1YmhlYWRlcntcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBjb2xvcjogdmFyKC0tc3VubnkteWVsbG93KTtcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG59XG5cbmltZy5jb3Zlci1pbWd7XG4gICAgbWF4LXdpZHRoOiAzNSU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICBpbWcuY292ZXItaW1ne1xuICAgICAgICBtYXgtd2lkdGg6IDgwJTtcbiAgICB9XG4gIH1cblxuaW1nLm1lbnUtaW1ne1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmxvZ297XG4gICAgaGVpZ2h0OiAycmVtO1xufVxuXG4vKiAtLS0tLS0tLS1Gb290ZXIgc2VjdGlvbjogLS0tLS0tLS0gKi9cbmZvb3RlcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQuNXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQtY29hbCk7XG59XG5cbmZvb3RlciBhe1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbn1cblxuZm9vdGVyPmE6aG92ZXJ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDZCQUE2QjtBQUM3Qjs7O0NBR0M7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6QjtBQUNBLGdEQUFnRDtBQUNoRDs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCOztBQUVBLG1DQUFtQztBQUNuQztJQUNJLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLGFBQWE7QUFDakI7QUFDQSxvQ0FBb0M7QUFDcEM7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksUUFBUTtBQUNaO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0Qjs7O2dEQUdrRDtJQUNsRCxzQkFBc0I7QUFDMUI7O0FBRUEsb0NBQW9DO0FBQ3BDO0lBQ0ksaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCOztBQUVBLHNDQUFzQztBQUN0QztJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsZ0NBQWdDOztBQUVwQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOzs7QUFHQSwyQ0FBMkM7QUFDM0M7SUFDSSxPQUFPO0lBQ1Asc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIseUNBQXlDO0lBQ3pDLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1Isb0JBQW9CO0lBQ3BCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSTtRQUNJLGNBQWM7SUFDbEI7RUFDRjs7QUFFRjtJQUNJLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQSxzQ0FBc0M7QUFDdEM7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGtCQUFrQjtJQUNsQix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIC0tLS0tLS1SZXNldCBjc3M6LS0tLS0tLSAqL1xcbi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuLyogLS0tLS0tLSBDU1MgQ29sb3IgdmFyczogLS0tLS0tICovXFxuOnJvb3R7XFxuICAgIC0tY29hbC1iZzogIzI3MjcyYTtcXG4gICAgLS10cmFuc3BhcmVudC1jb2FsOiAjMjcyNzJhYzY7XFxuICAgIC0tZ3JheS1iZzogIzcxNzE3YTtcXG4gICAgLS1sYXZhLW9yYW5nZTogI2VhNTgwYztcXG4gICAgLS1zdW5ueS15ZWxsb3c6ICNmY2QzNGQ7XFxuICAgIC0tYW1iZXItd2hpdGU6ICNmZWZjZTg7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcbi8qIC0tLS0tLS0tLUJvZHkgc2VjdGlvbjogLS0tLS0tLS0gKi9cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6ICdNdWxpc2gnO1xcbn1cXG5cXG5ib2R5LGRpdiNjb250ZW50LCNjb250ZW50LW1haW4sI2NvbnRhY3QtdWx7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNjb250YWN0LXVse1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xcbn1cXG5cXG4uY29udGFjdC1saXtcXG4gICAgZ2FwOiAzcHg7XFxufVxcbi5jb250YWN0LWxpIHAsIC5jb250YWN0LWxpIGF7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuYm9keXtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogIGxpbmVhci1ncmFkaWVudChcXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMC40NSksIFxcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjQ1KVxcbiAgICAgICksIHVybCguL2ltZy9icmljay1iZy1nYXJldGgtZGF2aWQtdW5zcGxhc2guanBnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLyogLS0tLS0tLS0tVGV4dCBzdHlsaW5nOiAtLS0tLS0tLSAqL1xcbmgxe1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgY29sb3I6IHZhcigtLWxhdmEtb3JhbmdlKTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDMuNXB4O1xcbn1cXG5cXG4jaDEtbWVudSwgI2NvbnRhY3QtaGVhZGVye1xcbiAgICBjb2xvcjogdmFyKC0tc3VubnkteWVsbG93KTtcXG59XFxuXFxuaDJ7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY29sb3I6IHZhcigtLXN1bm55LXllbGxvdyk7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcXG59XFxuXFxuI21haW4tcHtcXG4gICAgY29sb3I6IHZhcigtLWFtYmVyLXdoaXRlKTtcXG59XFxuXFxuI2NvbnRhY3QtcHtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1ncmF5LWJnKTtcXG4gICAgbGluZS1oZWlnaHQ6IDFyZW07XFxufVxcblxcbi8qIC0tLS0tLS0tLUhlYWRlciBzZWN0aW9uOiAtLS0tLS0tLSAqL1xcbmhlYWRlcntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5oZWFkZXIsdWwsbGl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuI2hlYWRlci11bHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvYWwtYmcpO1xcblxcbn1cXG5cXG51bD5saXtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBjb2xvcjogdmFyKC0tZ3JheS1iZyk7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiAwLjdzO1xcbn1cXG5cXG51bD5saTpob3ZlcntcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcblxcbi8qIC0tLS0tLS0tLWNvbnRlbnQgZGl2IHNlY3Rpb246IC0tLS0tLS0tICovXFxuZGl2e1xcbiAgICBmbGV4OiAxO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcbn1cXG5cXG5kaXYjY29udGVudHtcXG4gICAgd2lkdGg6IDkwdnc7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiA3dmggYXV0bzsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50LWNvYWwpO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDE1cHggMDtcXG59XFxuXFxuI2NvbnRlbnQtaGVhZGVyLCNjb250ZW50LW1haW57XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICB3aWR0aDogOTUlO1xcbn1cXG5cXG4uc3ViaGVhZGVye1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgY29sb3I6IHZhcigtLXN1bm55LXllbGxvdyk7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcXG59XFxuXFxuaW1nLmNvdmVyLWltZ3tcXG4gICAgbWF4LXdpZHRoOiAzNSU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcXG4gICAgaW1nLmNvdmVyLWltZ3tcXG4gICAgICAgIG1heC13aWR0aDogODAlO1xcbiAgICB9XFxuICB9XFxuXFxuaW1nLm1lbnUtaW1ne1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ubG9nb3tcXG4gICAgaGVpZ2h0OiAycmVtO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS1Gb290ZXIgc2VjdGlvbjogLS0tLS0tLS0gKi9cXG5mb290ZXJ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDQuNXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudC1jb2FsKTtcXG59XFxuXFxuZm9vdGVyIGF7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxufVxcblxcbmZvb3Rlcj5hOmhvdmVye1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgcGhvbmVJbWcgZnJvbSAnLi9pbWcvY29udGFjdHMuc3ZnJztcbmltcG9ydCBob21lSW1nIGZyb20gJy4vaW1nL2hvbWUuc3ZnJztcbmltcG9ydCB0aW5kZXJJbWcgZnJvbSAnLi9pbWcvdGluZGVyLnN2Zyc7XG5pbXBvcnQgZW1iZXJJbWcgZnJvbSAnLi9pbWcvZW1iZXIuanBnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFjdCgpIHtcbiAgLy9GZXRjaCBjb250ZW50IGVsZW1lbnQ6XG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gIC8vQ3JlYXRlIGVsZW1lbnRzOlxuICBjb25zdCBjb250ZW50SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGNvbnRlbnRNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgY29uc3QgY29udGFjdFVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgY29uc3QgY29udGFjdExpMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGNvbnRhY3RMaTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBjb250YWN0TGkzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICBjb25zdCBpbWdNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGNvbnN0IGhvbWVMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGNvbnN0IHRpbmRlckxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgY29uc3QgcGhvbmVMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgY29uc3QgaG9tZUFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IHRpbmRlckxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGNvbnN0IHBob25lTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gIGNvbnN0IGgxSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgY29uc3QgcEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAvL2FkZCBlbGVtZW50IGlkcyBhbmQgY2xhc3NlczpcbiAgY29udGVudEhlYWRlci5pZCA9ICdjb250ZW50LWhlYWRlcic7XG4gIGNvbnRlbnRNYWluLmlkID0gJ2NvbnRlbnQtbWFpbic7XG4gIGltZ01haW4uY2xhc3NMaXN0LmFkZCgnY292ZXItaW1nJyk7XG4gIGhvbWVMb2dvLmNsYXNzTGlzdC5hZGQoJ2xvZ28nKTtcbiAgdGluZGVyTG9nby5jbGFzc0xpc3QuYWRkKCdsb2dvJyk7XG4gIHBob25lTG9nby5jbGFzc0xpc3QuYWRkKCdsb2dvJyk7XG4gIGgxSGVhZGVyLmlkID0gJ2NvbnRhY3QtaGVhZGVyJztcbiAgcEhlYWRlci5pZCA9ICdjb250YWN0LXAnO1xuICB0aW5kZXJMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICdodHRwczovL2dpdGh1Yi5jb20vQXZpaGF5Ui9yZXN0YXVyYW50LXBhZ2UnKTtcbiAgY29udGFjdFVsLmlkID0gJ2NvbnRhY3QtdWwnO1xuICBjb250YWN0TGkxLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtbGknKTtcbiAgY29udGFjdExpMi5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWxpJyk7XG4gIGNvbnRhY3RMaTMuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1saScpO1xuXG4gIC8vRWxlbWVudHMgY29udGVudDpcbiAgaW1nTWFpbi5zcmMgPSBlbWJlckltZztcbiAgaG9tZUxvZ28uc3JjID0gaG9tZUltZztcbiAgdGluZGVyTG9nby5zcmMgPSB0aW5kZXJJbWc7XG4gIHBob25lTG9nby5zcmMgPSBwaG9uZUltZztcblxuICBoMUhlYWRlci5pbm5lclRleHQgPSAnQ29udGFjdCB1cyc7XG4gIHBIZWFkZXIuaW5uZXJUZXh0ID0gYFxuICBWaXNpdCBvdXIgZmFtaWx5IFNob3AgJiBSZXN0YXVyYW50LCBhdCBFbGVtZW50IENpdHkuXG5cbiAgT3RoZXIgd2F5cyB0byBjb250YWN0IHVzOlxuICBcbiAgYDtcblxuICBob21lQWRkcmVzcy5pbm5lclRleHQgPSAnRWxlbWVudCBDaXR5LCBGaXJldG93biwgMTIwMCBQYXJrIGV2ZS4nO1xuICB0aW5kZXJMaW5rLmlubmVyVGV4dCA9ICdGaXJlYm9vayc7XG4gIHBob25lTnVtYmVyLmlubmVyVGV4dCA9ICcrOTk5LTAwLTExMS0yMi0zMyc7XG5cbiAgLy9BZGQgY3JlYXRlZCBlbGVtZW50cyB0byBjb250ZW50RGl2OlxuICBjb250ZW50SGVhZGVyLmFwcGVuZENoaWxkKGgxSGVhZGVyKTtcbiAgY29udGVudEhlYWRlci5hcHBlbmRDaGlsZChwSGVhZGVyKTtcblxuICBjb250YWN0TGkxLmFwcGVuZENoaWxkKGhvbWVMb2dvKTtcbiAgY29udGFjdExpMS5hcHBlbmRDaGlsZChob21lQWRkcmVzcyk7XG4gIGNvbnRhY3RMaTIuYXBwZW5kQ2hpbGQocGhvbmVMb2dvKTtcbiAgY29udGFjdExpMi5hcHBlbmRDaGlsZChwaG9uZU51bWJlcik7XG4gIGNvbnRhY3RMaTMuYXBwZW5kQ2hpbGQodGluZGVyTG9nbyk7XG4gIGNvbnRhY3RMaTMuYXBwZW5kQ2hpbGQodGluZGVyTGluayk7XG5cbiAgY29udGFjdFVsLmFwcGVuZENoaWxkKGNvbnRhY3RMaTEpO1xuICBjb250YWN0VWwuYXBwZW5kQ2hpbGQoY29udGFjdExpMik7XG4gIGNvbnRhY3RVbC5hcHBlbmRDaGlsZChjb250YWN0TGkzKTtcblxuICBjb250ZW50SGVhZGVyLmFwcGVuZENoaWxkKGNvbnRhY3RVbCk7XG4gIGNvbnRlbnRNYWluLmFwcGVuZENoaWxkKGltZ01haW4pO1xuXG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY29udGVudEhlYWRlcik7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY29udGVudE1haW4pO1xufVxuIiwiaW1wb3J0IG1lbnVJbWcgZnJvbSAnLi9pbWcvbWVudS5wbmcnO1xuaW1wb3J0IGl0ZW1zSW1nIGZyb20gJy4vaW1nL2l0ZW1zLnBuZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvb3RlckVsZW1lbnQoKSB7XG4gIC8vRmV0Y2ggYm9keSBlbGVtZW50OlxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG4gIC8vQ3JlYXRlIGVsZW1lbnRzOlxuICBjb25zdCBmb290ZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG5cbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgYUljb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBjb25zdCBhQmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgY29uc3QgYUltYWdlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgY29uc3QgYUZvbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXG4gIC8vYWRkIGVsZW1lbnQgaWRzIGFuZCBjbGFzc2VzOlxuXG4gIC8vRWxlbWVudHMgY29udGVudDpcbiAgYUljb25zLnNldEF0dHJpYnV0ZSgnaHJlZicsICdodHRwczovL2ljb25zOC5jb20vJyk7XG4gIGFJY29ucy50ZXh0Q29udGVudCA9ICdJY29ucyBieSBJY29uczgnO1xuXG4gIGFCYWNrZ3JvdW5kLnNldEF0dHJpYnV0ZSgnaHJlZicsICdodHRwczovL3Vuc3BsYXNoLmNvbS9AZ2FyZXRoX2RhdmlkJyk7XG4gIGFCYWNrZ3JvdW5kLnRleHRDb250ZW50ID0gJ0JyaWNrcyBCYWNrZ3JvdW5kIGJ5IEdhcmV0aCBEYXZpZCAtIFVuc3BsYXNoJztcblxuICBhSW1hZ2VzLnNldEF0dHJpYnV0ZSgnaHJlZicsICdodHRwczovL3d3dy5waXhhci5jb20vZWxlbWVudGFsJyk7XG4gIGFJbWFnZXMudGV4dENvbnRlbnQgPSAnSW1hZ2VzICYgc3RvcnkgYnkgUGl4YXIgU3R1ZGlvcyc7XG5cbiAgLy9BZGQgY3JlYXRlZCBlbGVtZW50cyB0byBjb250ZW50RGl2OlxuICBmb290ZXJFbGVtZW50LmFwcGVuZENoaWxkKGFJbWFnZXMpO1xuICBmb290ZXJFbGVtZW50LmFwcGVuZENoaWxkKGFJY29ucyk7XG4gIGZvb3RlckVsZW1lbnQuYXBwZW5kQ2hpbGQoYUJhY2tncm91bmQpO1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyRWxlbWVudCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoZWFkZXIoKSB7XG4gIC8vZmV0Y2ggYm9keSBlbGVtZW50OlxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG4gIC8vY3JlYXRlIGVsZW1lbnRzOlxuICBjb25zdCBoZWFkZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgY29uc3QgbGlIb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgbGlNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgbGlDb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAvL2FkZCByZWxldmFudCBlbGVtZW50IGlkczpcbiAgbGlIb21lLmlkID0gJ2hvbWUtdGFiJztcbiAgbGlNZW51LmlkID0gJ21lbnUtdGFiJztcbiAgbGlDb250YWN0LmlkID0gJ2NvbnRhY3QtdGFiJztcbiAgdWwuaWQgPSAnaGVhZGVyLXVsJztcblxuICAvL2FkZCBjb250ZW50IHRvIGVsZW1lbnRzOlxuICBsaUhvbWUudGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gIGxpTWVudS50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgbGlDb250YWN0LnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuXG4gIC8vYWRkIGxpJ3MgdG8gdWwsIGFuZCB1bCB0byBib2R5OlxuICB1bC5hcHBlbmRDaGlsZChsaUhvbWUpO1xuICB1bC5hcHBlbmRDaGlsZChsaU1lbnUpO1xuICB1bC5hcHBlbmRDaGlsZChsaUNvbnRhY3QpO1xuICBoZWFkZXJFbGVtZW50LmFwcGVuZENoaWxkKHVsKTtcbiAgYm9keS5hcHBlbmRDaGlsZChoZWFkZXJFbGVtZW50KTtcbn1cbiIsImltcG9ydCByZXN0SW1nIGZyb20gJy4vaW1nL3Jlc3QtMS5qcGcnO1xuaW1wb3J0IGZsdWlkSW1nIGZyb20gJy4vaW1nL2ZsdWlkLTEucG5nJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZVBhZ2UoKSB7XG4gIC8vRmV0Y2ggY29udGVudCBlbGVtZW50OlxuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAvL0NyZWF0ZSBlbGVtZW50czpcbiAgY29uc3QgY29udGVudEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBjb250ZW50TWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGNvbnN0IGgxSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgY29uc3QgcEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgaW1nSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgY29uc3QgaDJNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgY29uc3QgcE1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IGltZ01haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAvL2FkZCBlbGVtZW50IGlkcyBhbmQgY2xhc3NlczpcbiAgY29udGVudEhlYWRlci5pZCA9ICdjb250ZW50LWhlYWRlcic7XG4gIHBIZWFkZXIuY2xhc3NMaXN0LmFkZCgnc3ViaGVhZGVyJyk7XG4gIGNvbnRlbnRNYWluLmlkID0gJ2NvbnRlbnQtbWFpbic7XG4gIGltZ0hlYWRlci5jbGFzc0xpc3QuYWRkKCdjb3Zlci1pbWcnKTtcbiAgaW1nTWFpbi5jbGFzc0xpc3QuYWRkKCdjb3Zlci1pbWcnKTtcbiAgaDJNYWluLmlkID0gJ21haW4taDInO1xuICBwTWFpbi5pZCA9ICdtYWluLXAnO1xuXG4gIC8vRWxlbWVudHMgY29udGVudDpcbiAgaDFIZWFkZXIuaW5uZXJUZXh0ID0gJ1RoZSBGaXJlcGxhY2UnO1xuICBwSGVhZGVyLmlubmVyVGV4dCA9ICdXb29kIFNuYWNrcyAtIExhdmEgSmF2YSAtIEtvbC1OdXRzJztcbiAgaW1nSGVhZGVyLnNyYyA9IHJlc3RJbWc7XG4gIGgyTWFpbi5pbm5lclRleHQgPSAnV2VsY29tZSB0byB0aGUgRmlyZXBsYWNlISc7XG4gIHBNYWluLmlubmVyVGV4dCA9IGBBIGZhbWlseSB0cmFkaXRpb25hbCBTaG9wICYgUmVzdGF1cmFudCBidWlsdCBieSBCZXJuaWUgTHVtZW4sIFxuICBCZXJuaWUgbGVmdCBGaXJlIGxhbmQgdG8gcHJvdmlkZSBhIGJldHRlciBsaWZlIGZvciBoaXMgbG92ZWx5IHdpZmUsIENpbmRlclxuICBBbmQgaGlzIHNvbGUgZGF1Z2h0ZXIsIEVtYmVyLCB3aG8gd2lsbCBvbmUgZGF5LCB0YWtlIGhpcyBwbGFjZSBhbmQgb3duIHRoZSBzaG9wIVxuICBJbiBvdXIgc2hvcCwgeW91IGNvdWxkIGZpbmQgeXVtbXkgdHJlYXRzLFxuICBIb3QgY29mZmVlLCBmbGFtaW5nIGdyb2NlcmllcywgT3IgQmFieS1mbGFtZXMgZXNzZW50aWFscyFgO1xuICBpbWdNYWluLnNyYyA9IGZsdWlkSW1nO1xuXG4gIC8vQWRkIGNyZWF0ZWQgZWxlbWVudHMgdG8gY29udGVudERpdjpcbiAgY29udGVudEhlYWRlci5hcHBlbmRDaGlsZChoMUhlYWRlcik7XG4gIGNvbnRlbnRIZWFkZXIuYXBwZW5kQ2hpbGQocEhlYWRlcik7XG4gIGNvbnRlbnRIZWFkZXIuYXBwZW5kQ2hpbGQoaW1nSGVhZGVyKTtcblxuICBjb250ZW50TWFpbi5hcHBlbmRDaGlsZChoMk1haW4pO1xuICBjb250ZW50TWFpbi5hcHBlbmRDaGlsZChwTWFpbik7XG4gIGNvbnRlbnRNYWluLmFwcGVuZENoaWxkKGltZ01haW4pO1xuXG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY29udGVudEhlYWRlcik7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY29udGVudE1haW4pO1xufVxuIiwiaW1wb3J0IG1lbnVJbWcgZnJvbSAnLi9pbWcvbWVudS5wbmcnO1xuaW1wb3J0IGl0ZW1zSW1nIGZyb20gJy4vaW1nL2l0ZW1zLnBuZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnUoKSB7XG4gIC8vRmV0Y2ggY29udGVudCBlbGVtZW50OlxuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAvL0NyZWF0ZSBlbGVtZW50czpcbiAgY29uc3QgY29udGVudE1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBjb25zdCBoMU1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBjb25zdCBwTWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgaW1nTWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBjb25zdCBpbWdNYWluMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gIC8vYWRkIGVsZW1lbnQgaWRzIGFuZCBjbGFzc2VzOlxuICBjb250ZW50TWFpbi5pZCA9ICdjb250ZW50LW1haW4nO1xuICBpbWdNYWluLmNsYXNzTGlzdC5hZGQoJ21lbnUtaW1nJyk7XG4gIGltZ01haW4xLmNsYXNzTGlzdC5hZGQoJ21lbnUtaW1nJyk7XG4gIHBNYWluLmlkID0gJ21haW4tcCc7XG4gIGgxTWFpbi5pZCA9ICdoMS1tZW51JztcblxuICAvL0VsZW1lbnRzIGNvbnRlbnQ6XG4gIGgxTWFpbi5pbm5lclRleHQgPSAnTWVudSc7XG4gIHBNYWluLmlubmVyVGV4dCA9IGBcbiAgT3VyIG1lbnUgbWlnaHQgbm90IGZpdCBldmVyeSBlbGVtZW50IG91dCB0aGVyZSxcbiAgQnV0IGFzIGxvbmcgYXMgeW91J3JlIG5vdCBtYWRlIG91dCBvZiB0ZWFycyxcbiAgb3IgbmFtZSBpcyBub3QgV2FkZSBSaXBwbGUgKCEpLCBcbiAgWW91IHNob3VsZCBiZSBmaW5lIVxuICBgO1xuICBpbWdNYWluLnNyYyA9IG1lbnVJbWc7XG4gIGltZ01haW4xLnNyYyA9IGl0ZW1zSW1nO1xuXG4gIC8vQWRkIGNyZWF0ZWQgZWxlbWVudHMgdG8gY29udGVudERpdjpcbiAgY29udGVudE1haW4uYXBwZW5kQ2hpbGQoaDFNYWluKTtcbiAgY29udGVudE1haW4uYXBwZW5kQ2hpbGQocE1haW4pO1xuICBjb250ZW50TWFpbi5hcHBlbmRDaGlsZChpbWdNYWluKTtcbiAgY29udGVudE1haW4uYXBwZW5kQ2hpbGQoaW1nTWFpbjEpO1xuXG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY29udGVudE1haW4pO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvL0ltcG9ydHM6XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBoZWFkZXIgZnJvbSAnLi9oZWFkZXIuanMnO1xuaW1wb3J0IGhvbWVQYWdlIGZyb20gJy4vaG9tZXBhZ2UuanMnO1xuaW1wb3J0IG1lbnUgZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCBjb250YWN0IGZyb20gJy4vY29udGFjdC5qcyc7XG5pbXBvcnQgZm9vdGVyRWxlbWVudCBmcm9tICcuL2Zvb3Rlcic7XG5cbmhlYWRlcigpO1xuaG9tZVBhZ2UoKTtcbi8vIG1lbnUoKTtcbi8vIGNvbnRhY3QoKTtcbmZvb3RlckVsZW1lbnQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==