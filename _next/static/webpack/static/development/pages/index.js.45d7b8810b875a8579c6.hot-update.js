webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/lisazhang/Desktop/hello-next/components/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var HeaderBox = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Header__HeaderBox",
  componentId: "sc-1fjhu9s-0"
})(["display:inline-flex;flex-direction:row;justify-content:space-between;margin:20px 0;"]);
var LinkStyle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].a.withConfig({
  displayName: "Header__LinkStyle",
  componentId: "sc-1fjhu9s-1"
})(["flex:1;width:10em;cursor:pointer;text-align:center;border-width:0 1px;border-style:solid;border-color:palevioletred;:hover{color:palevioletred;}"]);
var HEADER_LINKS = [{
  path: "/",
  name: "Home"
}, {
  path: "/about",
  name: "About"
}, {
  path: "/albums",
  name: "Albums"
}];
function Header() {
  return __jsx(HeaderBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, HEADER_LINKS.map(function (link, index) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: link.path,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx(LinkStyle, {
      index: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, link.name));
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.45d7b8810b875a8579c6.hot-update.js.map