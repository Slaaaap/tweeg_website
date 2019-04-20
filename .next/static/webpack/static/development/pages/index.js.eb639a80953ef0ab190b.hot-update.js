webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/layout.js":
/*!*************************!*\
  !*** ./pages/layout.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);







var _jsxFileName = "/mnt/c/Users/1821921/Desktop/tweeg_website/pages/layout.js";


var Header = antd__WEBPACK_IMPORTED_MODULE_7__["Layout"].Header,
    Sider = antd__WEBPACK_IMPORTED_MODULE_7__["Layout"].Sider,
    Content = antd__WEBPACK_IMPORTED_MODULE_7__["Layout"].Content;

var Layoutt =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Layoutt, _Component);

  function Layoutt() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Layoutt);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Layoutt)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      collapsed: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "toggle", function () {
      _this.setState({
        collapsed: !_this.state.collapsed
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Layoutt, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Layout"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Sider, {
        trigger: null,
        collapsible: true,
        collapsed: this.state.collapsed,
        style: {
          backgroundColor: '#2b2c3b',
          boxShadow: "0 24px 30px -11px rgba(0, 0, 0, 0.5);",
          height: "-webkit-fill-available"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          display: "flex",
          justifyContent: 'center',
          padding: "10px 0"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "/static/test.png",
        alt: "LOGOff",
        style: {
          width: "50%",
          height: "50%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Menu"], {
        theme: "dark",
        style: {
          backgroundColor: "#2b2c3b",
          marginTop: "200px",
          display: "flex"
        },
        mode: "inline",
        defaultSelectedKeys: ['1'],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Menu"].Item, {
        key: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
        type: "home",
        style: {
          fontSize: '24px',
          marginTop: this.state.collapsed ? "2px" : "7px",
          marginBottom: "20em"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "Accueil")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Menu"].Item, {
        key: "2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
        type: "shopping-cart",
        style: {
          fontSize: '24px',
          marginTop: this.state.collapsed ? "2px" : "7px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "Les Offres")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Menu"].Item, {
        key: "3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
        type: "edit",
        style: {
          fontSize: '24px',
          marginTop: this.state.collapsed ? "2px" : "7px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Mes r\xE9alisations")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Menu"].Item, {
        key: "4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
        type: "phone",
        style: {
          fontSize: '24px',
          marginTop: this.state.collapsed ? "2px" : "7px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "Contact")))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Layout"], {
        style: {
          backgroundColor: '#393A4A'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          display: 'flex'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Header, {
        style: {
          background: '#2b2c3b',
          width: '100%',
          padding: '0 20px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
        className: "trigger",
        type: this.state.collapsed ? 'right' : 'left',
        onClick: this.toggle,
        style: {
          color: 'white'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          display: 'flex',
          justifyContent: 'space-between'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          margin: '20px auto',
          padding: 36,
          background: '#2b2c3b',
          height: 500,
          borderRadius: 7,
          color: "grey",
          width: 400,
          display: 'flex',
          boxShadow: "0 15px 30px -11px rgba(0, 0, 0, 0.5);"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        style: {},
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "Card")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          margin: '20px auto',
          padding: 36,
          background: '#2b2c3b',
          height: 500,
          borderRadius: 7,
          color: "grey",
          width: 400,
          display: 'flex',
          boxShadow: "0 15px 30px -11px rgba(0, 0, 0, 0.5);"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "Card"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          margin: '20px auto',
          padding: 36,
          background: '#2b2c3b',
          height: 500,
          borderRadius: 7,
          color: "grey",
          width: 400,
          display: 'flex',
          boxShadow: "0 15px 30px -11px rgba(0, 0, 0, 0.5);"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "Card"))));
    }
  }]);

  return Layoutt;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Layoutt);

/***/ })

})
//# sourceMappingURL=index.js.eb639a80953ef0ab190b.hot-update.js.map