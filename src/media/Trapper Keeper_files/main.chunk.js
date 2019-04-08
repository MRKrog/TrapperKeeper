(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/index.scss":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./src/index.scss ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato:300,400,700);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:300,400,500);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Abel);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,600);", ""]);

// module
exports.push([module.i, ".Header {\n  border-bottom: solid 1px #d9dbde;\n  background: #f9f9f9;\n  box-shadow: 0px 0px 11px 0px #0000002b;\n  width: 100%; }\n  .Header .Header-Content {\n    display: -webkit-flex;\n    display: flex;\n    -webkit-justify-content: space-between;\n            justify-content: space-between;\n    -webkit-align-items: center;\n            align-items: center;\n    padding: 0 2em;\n    max-width: 1400px;\n    margin: auto; }\n  .Header .Logo {\n    display: -webkit-flex;\n    display: flex;\n    -webkit-align-items: center;\n            align-items: center; }\n    .Header .Logo h1 {\n      color: #757575;\n      font-size: 24px;\n      font-weight: 500;\n      margin-left: 10px; }\n    .Header .Logo img {\n      height: 35px; }\n  .Header a {\n    font-family: \"Abel\", sans-serif;\n    color: #fff;\n    font-size: 1.25em;\n    font-weight: 500;\n    text-decoration: none;\n    background: #0070B7;\n    padding: .2em .7em;\n    border-radius: 5px;\n    transition: all .2s ease;\n    box-shadow: 0px 0px 5px 0px #00000068; }\n    .Header a:hover {\n      background: rgba(128, 128, 128, 0.35);\n      color: white; }\n    .Header a:focus {\n      opacity: 0.5; }\n\n.Loader {\n  display: block; }\n\nul.ListItems {\n  margin: 0;\n  padding: 0; }\n  ul.ListItems button.CheckBox {\n    transition: all .5s ease; }\n    ul.ListItems button.CheckBox:hover {\n      opacity: .7; }\n  ul.ListItems li.ItemIncomplete {\n    position: relative;\n    transition: all .3 ease; }\n    ul.ListItems li.ItemIncomplete:last-child:after {\n      content: '';\n      position: absolute;\n      height: 1px;\n      width: 92%;\n      bottom: 0px;\n      border-bottom: 1px solid rgba(0, 0, 0, 0.15);\n      left: 0;\n      right: 0;\n      margin-left: auto;\n      margin-right: auto; }\n    ul.ListItems li.ItemIncomplete:last-child .CheckBox {\n      position: relative;\n      pointer-events: none;\n      background: url(" + escape(__webpack_require__(/*! ./media/plus.svg */ "./src/media/plus.svg")) + ") no-repeat;\n      left: 13.5px;\n      top: 4px;\n      opacity: .5; }\n      ul.ListItems li.ItemIncomplete:last-child .CheckBox img {\n        display: none; }\n    ul.ListItems li.ItemIncomplete:last-child .delete-button {\n      opacity: 0;\n      pointer-events: none; }\n    ul.ListItems li.ItemIncomplete:not(:last-child) .delete-button {\n      opacity: 0;\n      pointer-events: none;\n      transition: all .3 ease; }\n    ul.ListItems li.ItemIncomplete:not(:last-child):hover .delete-button {\n      opacity: .6;\n      pointer-events: all; }\n      ul.ListItems li.ItemIncomplete:not(:last-child):hover .delete-button:hover {\n        opacity: .9; }\n    ul.ListItems li.ItemIncomplete:not(:last-child):focus-within .delete-button {\n      opacity: .6;\n      pointer-events: all; }\n    ul.ListItems li.ItemIncomplete:not(:last-child):focus-within:before {\n      content: '';\n      position: absolute;\n      height: 1px;\n      width: 100%;\n      top: 0px;\n      border-top: 1px solid rgba(0, 0, 0, 0.3); }\n    ul.ListItems li.ItemIncomplete:not(:last-child):focus-within:after {\n      content: '';\n      position: absolute;\n      height: 1px;\n      width: 100%;\n      bottom: 0px;\n      border-bottom: 1px solid rgba(0, 0, 0, 0.3); }\n    ul.ListItems li.ItemIncomplete:not(:last-child) input.list-item-input {\n      text-decoration: none; }\n      ul.ListItems li.ItemIncomplete:not(:last-child) input.list-item-input::-webkit-input-placeholder {\n        color: transparent; }\n      ul.ListItems li.ItemIncomplete:not(:last-child) input.list-item-input::-ms-input-placeholder {\n        color: transparent; }\n      ul.ListItems li.ItemIncomplete:not(:last-child) input.list-item-input::placeholder {\n        color: transparent; }\n    ul.ListItems li.ItemIncomplete:not(:last-child) .CheckBox:hover + .list-item-input {\n      text-decoration: line-through; }\n  ul.ListItems li.ItemComplete input.list-item-input {\n    text-decoration: line-through; }\n  ul.ListItems li.ItemComplete .CheckBox:hover + .list-item-input {\n    text-decoration: none; }\n  ul.ListItems li {\n    list-style-type: none;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-justify-content: space-between;\n            justify-content: space-between;\n    padding: 3px 0; }\n    ul.ListItems li .list-item-input {\n      font-family: \"Roboto\", sans-serif;\n      font-size: .9rem;\n      font-weight: 400;\n      line-height: 1.5rem; }\n    ul.ListItems li label {\n      width: 4%; }\n    ul.ListItems li input[type=text] {\n      outline: none;\n      border: none;\n      width: 80%; }\n    ul.ListItems li button {\n      background: none;\n      outline: none;\n      width: 10%;\n      border: none;\n      cursor: pointer;\n      line-height: 1; }\n    ul.ListItems li img {\n      height: 18px;\n      opacity: .54; }\n\n.Note-Options {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: flex-end;\n          justify-content: flex-end;\n  padding: .5em;\n  margin-top: 1em;\n  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);\n  -webkit-align-items: baseline;\n          align-items: baseline; }\n  .Note-Options button {\n    background: none;\n    outline: none;\n    border: none;\n    font-size: 1.2em;\n    cursor: pointer;\n    color: #6f6f6f;\n    opacity: 1;\n    transition: all .5 ease;\n    margin-right: .5em; }\n    .Note-Options button:hover {\n      opacity: .6; }\n  .Note-Options .Note-Save i {\n    position: relative;\n    bottom: -3px; }\n  .Note-Options .Note-Delete i {\n    position: relative;\n    bottom: -2px; }\n  .Note-Options .Note-Close button {\n    margin-right: 0;\n    font-family: \"Roboto\", sans-serif;\n    outline: none;\n    cursor: pointer;\n    border: none;\n    height: 100%;\n    box-sizing: border-box;\n    color: rgba(0, 0, 0, 0.95);\n    background-color: #cccccc;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    letter-spacing: .01785714em;\n    font-size: .75rem;\n    font-weight: 500;\n    line-height: .6;\n    height: 24px;\n    padding: 8px 15px;\n    border-radius: 4px;\n    transition: all .5s ease;\n    opacity: .5; }\n    .Note-Options .Note-Close button:hover {\n      opacity: .8; }\n\n.NoteDisplay {\n  display: block;\n  pointer-events: none; }\n  .NoteDisplay h3 {\n    color: #e0e0e0;\n    margin: 0;\n    text-align: left; }\n  .NoteDisplay ul {\n    text-align: left;\n    padding: 0;\n    margin: 0; }\n    .NoteDisplay ul li {\n      color: #e0e0e0;\n      list-style-type: none;\n      display: -webkit-flex;\n      display: flex;\n      -webkit-justify-content: flex-start;\n              justify-content: flex-start;\n      -webkit-align-items: flex-start;\n              align-items: flex-start;\n      line-height: 1.2; }\n      .NoteDisplay ul li .checkBox {\n        opacity: .1; }\n        .NoteDisplay ul li .checkBox img {\n          max-width: 75%; }\n\n.App {\n  box-sizing: border-box;\n  min-height: 100vh;\n  padding: 0;\n  margin: 0;\n  text-align: center; }\n  .App .Content-Container {\n    width: 100%;\n    max-width: 1400px;\n    padding: 2em;\n    margin: auto; }\n\n.NotesContainer {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap; }\n  .NotesContainer a {\n    width: 23%;\n    min-height: 100px;\n    margin: 1%;\n    border-radius: 15px;\n    border: solid #e0e0e0 1px;\n    background: white;\n    text-decoration: none;\n    padding: 1em;\n    display: -webkit-flex;\n    display: flex;\n    font-family: \"Abel\", sans-serif;\n    box-shadow: 0 0 6px 3px #00000014; }\n  .NotesContainer .splash-message {\n    margin: 100px auto 0;\n    color: #75757580;\n    font-size: 80px;\n    width: 500px; }\n\n.Note {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  width: 450px;\n  height: auto;\n  border-radius: 5px;\n  background: #fff;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  box-shadow: 0px 2px 10px 3px #0000006b;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: column;\n          flex-direction: column; }\n  .Note .note-title {\n    font-family: \"Open Sans\", sans-serif;\n    color: #202124;\n    font-size: 1.375rem;\n    font-weight: 600;\n    line-height: 1.75rem;\n    min-height: 43px;\n    padding: 7px 15px;\n    margin-top: 3px;\n    outline: none;\n    border: none; }\n  .Note .Completed-Message {\n    min-height: 29px;\n    padding: 5px 45px 5px 18px;\n    text-align: left; }\n    .Note .Completed-Message p {\n      margin: 0;\n      font-size: .9em;\n      color: #5f6368;\n      font-weight: 400;\n      line-height: 1.5rem;\n      letter-spacing: .00825em;\n      font-family: \"Roboto\", sans-serif; }\n  .Note .Note-Error h2 {\n    margin: 0; }\n\n.Error-Message {\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-color: #e5e5e591;\n  position: fixed;\n  z-index: 4000;\n  transition: opacity 0.218s ease-in 0s; }\n  .Error-Message::before {\n    content: \"\"; }\n\n.Error-Content {\n  position: fixed;\n  background: #ffff;\n  width: 100%;\n  max-width: 350px;\n  border-radius: 5px;\n  height: auto;\n  padding: 5rem;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  box-shadow: 0px 2px 10px 3px #0000006b; }\n  .Error-Content .Note-Close {\n    position: absolute;\n    right: 0;\n    top: 0; }\n    .Error-Content .Note-Close button {\n      outline: none;\n      cursor: pointer;\n      border: none;\n      background: #cccccccc;\n      color: #fff;\n      font-size: 1.25em;\n      border-top-right-radius: 5px;\n      transition: all .5s ease; }\n      .Error-Content .Note-Close button:hover {\n        color: #a9a9a9; }\n\n* {\n  box-sizing: border-box; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n#__lpform_title, #__lpform_title_icon {\n  display: none; }\n\n::-webkit-scrollbar-track {\n  background-clip: padding-box;\n  border: solid transparent;\n  border-width: 0 0 0 4px; }\n\n::-webkit-scrollbar-thumb {\n  background-color: rgba(0, 0, 0, 0.2);\n  background-clip: padding-box;\n  border: solid transparent;\n  border-width: 1px 1px 1px 6px;\n  min-height: 28px;\n  padding: 100px 0 0;\n  box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.07); }\n\n::-webkit-scrollbar {\n  height: 16px;\n  overflow: visible;\n  width: 16px; }\n", ""]);

// exports


/***/ }),

/***/ "./src/actions/index.js":
/*!******************************!*\
  !*** ./src/actions/index.js ***!
  \******************************/
/*! exports provided: fetchNotes, hasError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchNotes", function() { return fetchNotes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasError", function() { return hasError; });
// actions
var fetchNotes = function fetchNotes(allNotes) {
  return {
    type: 'FETCH_NOTES',
    allNotes: allNotes
  };
};
var hasError = function hasError(message) {
  return {
    type: 'HAS_ERROR',
    message: message
  };
};

/***/ }),

/***/ "./src/components/ErrorPage/ErrorPage.js":
/*!***********************************************!*\
  !*** ./src/components/ErrorPage/ErrorPage.js ***!
  \***********************************************/
/*! exports provided: ErrorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPage", function() { return ErrorPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/Krog/Desktop/Local-Projects/_Module-Three-Projects/_TrapperKeeper/trapperkeeper/src/components/ErrorPage/ErrorPage.js";


var ErrorPage = function ErrorPage() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Error-Message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "Error-Content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Page Not Found"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    to: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Return to Homepage")));
};

/***/ }),

/***/ "./src/components/Header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/Header/Header.js ***!
  \*****************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _media_icon_placeholder_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../media/icon-placeholder.png */ "./src/media/icon-placeholder.png");
/* harmony import */ var _media_icon_placeholder_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_media_icon_placeholder_png__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/Krog/Desktop/Local-Projects/_Module-Three-Projects/_TrapperKeeper/trapperkeeper/src/components/Header/Header.js";



var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "Header-Content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "Logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    alt: "TrapperKeeper",
    src: _media_icon_placeholder_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "TrapperKeeper")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/new-note",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "New Note")));
};

/***/ }),

/***/ "./src/components/ListItem/ListItem.js":
/*!*********************************************!*\
  !*** ./src/components/ListItem/ListItem.js ***!
  \*********************************************/
/*! exports provided: ListItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItem", function() { return ListItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _media_checked_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../media/checked.svg */ "./src/media/checked.svg");
/* harmony import */ var _media_checked_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_media_checked_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _media_unchecked_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../media/unchecked.svg */ "./src/media/unchecked.svg");
/* harmony import */ var _media_unchecked_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_media_unchecked_svg__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/Krog/Desktop/Local-Projects/_Module-Three-Projects/_TrapperKeeper/trapperkeeper/src/components/ListItem/ListItem.js";



var ListItem = function ListItem(props) {
  var id = props.id,
      index = props.index,
      isComplete = props.isComplete,
      text = props.text,
      handleItemChange = props.handleItemChange,
      handleItemDelete = props.handleItemDelete,
      toggleComplete = props.toggleComplete;
  var listType = isComplete ? 'ItemComplete' : 'ItemIncomplete';
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    key: index,
    className: listType,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "CheckBox",
    onClick: function onClick() {
      return toggleComplete(id);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: isComplete ? _media_checked_svg__WEBPACK_IMPORTED_MODULE_1___default.a : _media_unchecked_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "Check Box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    placeholder: "List Item",
    value: text,
    autoComplete: "off",
    name: "ListItem",
    className: "list-item-input",
    onChange: function onChange(e) {
      return handleItemChange(e, id);
    },
    disabled: isComplete ? 'disabled' : null,
    id: id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "delete-button",
    onClick: function onClick(e) {
      return handleItemDelete(e, id);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-times",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  })));
};

/***/ }),

/***/ "./src/components/NoteDisplay/NoteDisplay.js":
/*!***************************************************!*\
  !*** ./src/components/NoteDisplay/NoteDisplay.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _media_checked_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../media/checked.svg */ "./src/media/checked.svg");
/* harmony import */ var _media_checked_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_media_checked_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _media_unchecked_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../media/unchecked.svg */ "./src/media/unchecked.svg");
/* harmony import */ var _media_unchecked_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_media_unchecked_svg__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/Krog/Desktop/Local-Projects/_Module-Three-Projects/_TrapperKeeper/trapperkeeper/src/components/NoteDisplay/NoteDisplay.js";





var NoteDisplay = function NoteDisplay(props) {
  var titleMax = 13;
  var listMax = 20;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "NoteDisplay",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, props.title.length > titleMax ? props.title.substring(0, titleMax) + '...' : props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, props.list.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: item.id,
      className: item.isComplete ? 'completed' : 'incompelete',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "checkBox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: item.isComplete ? _media_checked_svg__WEBPACK_IMPORTED_MODULE_2___default.a : _media_unchecked_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
      alt: "Check Box",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    })), item.text.length > listMax ? item.text.substring(0, listMax) + '...' : item.text);
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (NoteDisplay);

/***/ }),

/***/ "./src/components/NoteOptions/NoteOptions.js":
/*!***************************************************!*\
  !*** ./src/components/NoteOptions/NoteOptions.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/Krog/Desktop/Local-Projects/_Module-Three-Projects/_TrapperKeeper/trapperkeeper/src/components/NoteOptions/NoteOptions.js";




var NoteOptions = function NoteOptions(_ref) {
  var handleType = _ref.handleType,
      deleteNote = _ref.deleteNote,
      handleClose = _ref.handleClose;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Note-Options",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "Note-Save",
    onClick: handleType,
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-save",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "Note-Delete",
    onClick: deleteNote,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-trash-alt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    onClick: handleClose,
    to: "/",
    className: "Note-Close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Close")));
};

NoteOptions.propTypes = {
  handleType: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  deleteNote: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  handleClose: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (NoteOptions);

/***/ }),

/***/ "./src/containers/App/App.js":
/*!***********************************!*\
  !*** ./src/containers/App/App.js ***!
  \***********************************/
/*! exports provided: App, mapStateToProps, mapDispatchToProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony import */ var _Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../actions/index */ "./src/actions/index.js");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Header/Header */ "./src/components/Header/Header.js");
/* harmony import */ var _NotesContainer_NotesContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../NotesContainer/NotesContainer */ "./src/containers/NotesContainer/NotesContainer.js");
/* harmony import */ var _NoteForm_NoteForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../NoteForm/NoteForm */ "./src/containers/NoteForm/NoteForm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _thunks_fetchAllNotes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../thunks/fetchAllNotes */ "./src/thunks/fetchAllNotes.js");
/* harmony import */ var _components_ErrorPage_ErrorPage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/ErrorPage/ErrorPage */ "./src/components/ErrorPage/ErrorPage.js");





var _jsxFileName = "/Users/Krog/Desktop/Local-Projects/_Module-Three-Projects/_TrapperKeeper/trapperkeeper/src/containers/App/App.js";










var App =
/*#__PURE__*/
function (_Component) {
  Object(_Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _Component);

  function App() {
    Object(_Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    return Object(_Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).apply(this, arguments));
  }

  Object(_Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var url = 'http://localhost:3001/api/v1/notes';
      this.props.fetchAllNotes(url);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Header_Header__WEBPACK_IMPORTED_MODULE_9__["Header"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("main", {
        className: "Content-Container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Switch"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "*",
        component: _components_ErrorPage_ErrorPage__WEBPACK_IMPORTED_MODULE_14__["ErrorPage"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/",
        render: function render() {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_NotesContainer_NotesContainer__WEBPACK_IMPORTED_MODULE_10__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            },
            __self: this
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/notes/:id",
        render: function render(_ref) {
          var match = _ref.match;
          var id = match.params.id;

          var currentNote = _this.props.allNotes.find(function (note) {
            return note.id == id;
          });

          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_NoteForm_NoteForm__WEBPACK_IMPORTED_MODULE_11__["default"], Object.assign({
            type: "existing-note",
            noteId: id
          }, currentNote, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            },
            __self: this
          }));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/new-note",
        render: function render() {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_NoteForm_NoteForm__WEBPACK_IMPORTED_MODULE_11__["default"], {
            type: "new-note",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            },
            __self: this
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);
var mapStateToProps = function mapStateToProps(state) {
  return {
    allNotes: state.allNotes,
    error: state.error
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    showError: function showError(message) {
      return dispatch(Object(_actions_index__WEBPACK_IMPORTED_MODULE_8__["hasError"])(message));
    },
    fetchAllNotes: function fetchAllNotes(url) {
      return dispatch(Object(_thunks_fetchAllNotes__WEBPACK_IMPORTED_MODULE_13__["fetchAllNotes"])(url));
    }
  };
};
App.propTypes = {
  allNotes: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.array,
  error: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string,
  showError: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.func,
  fetchNotes: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(App));

/***/ }),

/***/ "./src/containers/NoteForm/NoteForm.js":
/*!*********************************************!*\
  !*** ./src/containers/NoteForm/NoteForm.js ***!
  \*********************************************/
/*! exports provided: NoteForm, mapStateToProps, mapDispatchToProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteForm", function() { return NoteForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony import */ var _Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../actions/index */ "./src/actions/index.js");
/* harmony import */ var _utility_fetchOptionsCreator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../utility/fetchOptionsCreator */ "./src/utility/fetchOptionsCreator.js");
/* harmony import */ var _utility_fetchData__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../utility/fetchData */ "./src/utility/fetchData.js");
/* harmony import */ var _thunks_fetchAllNotes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../thunks/fetchAllNotes */ "./src/thunks/fetchAllNotes.js");
/* harmony import */ var _components_ListItem_ListItem__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/ListItem/ListItem */ "./src/components/ListItem/ListItem.js");
/* harmony import */ var _components_NoteOptions_NoteOptions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../components/NoteOptions/NoteOptions */ "./src/components/NoteOptions/NoteOptions.js");









var _jsxFileName = "/Users/Krog/Desktop/Local-Projects/_Module-Three-Projects/_TrapperKeeper/trapperkeeper/src/containers/NoteForm/NoteForm.js";











var NoteForm =
/*#__PURE__*/
function (_Component) {
  Object(_Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(NoteForm, _Component);

  function NoteForm(props) {
    var _this;

    Object(_Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NoteForm);

    _this = Object(_Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(NoteForm).call(this, props));
    _this.componentDidMount =
    /*#__PURE__*/
    Object(_Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
      return _Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.t0 = _this.props.noteId;

              if (!_context.t0) {
                _context.next = 4;
                break;
              }

              _context.next = 4;
              return _this.findNote(_this.props.noteId);

            case 4:
              document.addEventListener('keydown', _this.handleKeydown);
              document.addEventListener('mousedown', _this.handleClick);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    _this.handleClick = function (event) {
      var noteClass = event.path.filter(function (road) {
        return road.className === 'Note';
      });
      if (!noteClass.length) _this.setState({
        toHomePage: true
      });
    };

    _this.handleKeydown = function (event) {
      if (event.code === 'Escape') _this.setState({
        toHomePage: true
      });
    };

    _this.findNote =
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(noteId) {
        var url, response, id, title, list;
        return _Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                url = "http://localhost:3001/api/v1/notes/".concat(noteId);
                _context2.prev = 1;
                _context2.next = 4;
                return Object(_utility_fetchData__WEBPACK_IMPORTED_MODULE_16__["fetchData"])(url);

              case 4:
                response = _context2.sent;
                id = response.id, title = response.title, list = response.list;

                _this.setState({
                  id: id,
                  title: title,
                  list: Object(_Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(list)
                });

                _context2.next = 12;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](1);

                if (_context2.t0.message === 'Note was not found') {
                  _this.props.hasError(_context2.t0.message);

                  _this.setState({
                    displayError: true
                  });
                }

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 9]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }();

    _this.handleSeparate = function () {
      var list = _this.state.list;
      var completedItems = list.filter(function (item) {
        return item.isComplete;
      });
      var incompletedItems = list.filter(function (item) {
        return !item.isComplete;
      });
      return {
        completedItems: completedItems,
        incompletedItems: incompletedItems
      };
    };

    _this.handleType = function (e) {
      e.preventDefault();
      var type = _this.props.type;
      if (type === "new-note" || type === "existing-note") _this.handlePostandPut(type);
    };

    _this.handlePostandPut =
    /*#__PURE__*/
    function () {
      var _ref3 = Object(_Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3(type) {
        var _this$state, title, list, path, urlEnd, url, options;

        return _Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this$state = _this.state, title = _this$state.title, list = _this$state.list;
                path = type === 'new-note' ? 'POST' : 'PUT';
                urlEnd = type === 'new-note' ? 'notes' : "notes/".concat(_this.props.id);
                url = "http://localhost:3001/api/v1/".concat(urlEnd);
                _context3.prev = 4;
                _context3.next = 7;
                return Object(_utility_fetchOptionsCreator__WEBPACK_IMPORTED_MODULE_15__["fetchOptionsCreator"])(path, {
                  title: title,
                  list: list
                });

              case 7:
                options = _context3.sent;
                _context3.next = 10;
                return Object(_utility_fetchData__WEBPACK_IMPORTED_MODULE_16__["fetchData"])(url, options);

              case 10:
                _this.props.fetchAllNotes('http://localhost:3001/api/v1/notes');

                _this.setState({
                  toHomePage: true
                });

                _context3.next = 17;
                break;

              case 14:
                _context3.prev = 14;
                _context3.t0 = _context3["catch"](4);

                _this.props.hasError(_context3.t0.message);

              case 17:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[4, 14]]);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }();

    _this.handleTitleChange = function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value;

      _this.setState(Object(_Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, value));
    };

    _this.handleItemChange = function (e, id) {
      var list = _this.state.list;
      var foundItem = list.find(function (item) {
        return item.id === id;
      });
      foundItem.text = e.target.value;

      _this.setState({
        list: list
      });

      _this.generateNewListItem(e, foundItem);
    };

    _this.generateNewListItem = function (e, foundItem) {
      var value = e.target.value;

      var items = _this.handleSeparate();

      var lastItem = items.incompletedItems.pop();
      if (value.length === 1 && foundItem.id === lastItem.id) _this.addItem();
    };

    _this.handleItemDelete = function (e, id) {
      e.preventDefault();
      var list = _this.state.list;
      var foundIndex = list.findIndex(function (item) {
        return item.id === id;
      });
      list.splice(foundIndex, 1);

      _this.setState({
        list: list
      });
    };

    _this.addItem = function () {
      var defaultItem = {
        id: shortid__WEBPACK_IMPORTED_MODULE_11___default.a.generate(),
        isComplete: false,
        text: ''
      };

      _this.setState({
        list: [].concat(Object(_Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_this.state.list), [defaultItem])
      });
    };

    _this.deleteNote =
    /*#__PURE__*/
    function () {
      var _ref4 = Object(_Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee4(e) {
        var url, options;
        return _Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                e.preventDefault();
                url = "http://localhost:3001/api/v1/notes";
                _context4.prev = 2;
                _context4.next = 5;
                return Object(_utility_fetchOptionsCreator__WEBPACK_IMPORTED_MODULE_15__["fetchOptionsCreator"])('DELETE', {});

              case 5:
                options = _context4.sent;
                _context4.next = 8;
                return Object(_utility_fetchData__WEBPACK_IMPORTED_MODULE_16__["fetchData"])("".concat(url, "/").concat(_this.props.id), options);

              case 8:
                _this.props.fetchAllNotes(url);

                _this.setState({
                  toHomePage: true
                });

                _context4.next = 17;
                break;

              case 12:
                _context4.prev = 12;
                _context4.t0 = _context4["catch"](2);

                _this.props.hasError(_context4.t0.message);

                if (_context4.t0.message === 'Note not found') {
                  _this.props.hasError('note can not be deleted');
                }

                ;

              case 17:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[2, 12]]);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }();

    _this.toggleComplete = function (id) {
      var list = _this.state.list;
      var updatedList = list.map(function (item) {
        if (id === item.id) item.isComplete = !item.isComplete;
        return item;
      });

      _this.setState({
        list: updatedList
      });
    };

    _this.handleClose = function () {
      _this.props.hasError('');
    };

    _this.state = {
      title: '',
      toHomePage: false,
      displayError: false,
      list: [{
        id: shortid__WEBPACK_IMPORTED_MODULE_11___default.a.generate(),
        isComplete: false,
        text: ''
      }]
    };
    return _this;
  }

  Object(_Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(NoteForm, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeydown);
      document.removeEventListener('mousedown', this.handleClick);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var separatedList = this.handleSeparate();
      var completedItems = separatedList.completedItems,
          incompletedItems = separatedList.incompletedItems;
      var _this$state2 = this.state,
          toHomePage = _this$state2.toHomePage,
          errorPage = _this$state2.errorPage;
      if (toHomePage) return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Redirect"], {
        to: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      });
      if (errorPage) return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Redirect"], {
        to: "/404",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      });
      var completedMessage = completedItems.length ? "".concat(completedItems.length, " Completed Item(s)") : null;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "Note",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        type: "text",
        className: "note-title",
        placeholder: "Enter A Title...",
        value: this.state.title,
        name: "title",
        onChange: this.handleTitleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul", {
        className: "ListItems",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, incompletedItems.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_ListItem_ListItem__WEBPACK_IMPORTED_MODULE_18__["ListItem"], Object.assign({
          key: item.id,
          index: index,
          toggleComplete: _this2.toggleComplete,
          handleItemChange: _this2.handleItemChange,
          handleItemDelete: _this2.handleItemDelete
        }, item, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 181
          },
          __self: this
        }));
      })), completedMessage && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
        className: "Completed-Message",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, completedMessage), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul", {
        className: "ListItems Completed",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, completedItems.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_ListItem_ListItem__WEBPACK_IMPORTED_MODULE_18__["ListItem"], Object.assign({
          key: item.id,
          index: index,
          toggleComplete: _this2.toggleComplete,
          handleItemChange: _this2.handleItemChange,
          handleItemDelete: _this2.handleItemDelete
        }, item, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 193
          },
          __self: this
        }));
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_NoteOptions_NoteOptions__WEBPACK_IMPORTED_MODULE_19__["default"], {
        handleType: this.handleType,
        deleteNote: this.deleteNote,
        handleClose: this.handleClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }), this.props.error && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, this.props.error));
    }
  }]);

  return NoteForm;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);
var mapStateToProps = function mapStateToProps(state) {
  return {
    error: state.error
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    hasError: function hasError(message) {
      return dispatch(Object(_actions_index__WEBPACK_IMPORTED_MODULE_14__["hasError"])(message));
    },
    fetchAllNotes: function fetchAllNotes(url) {
      return dispatch(Object(_thunks_fetchAllNotes__WEBPACK_IMPORTED_MODULE_17__["fetchAllNotes"])(url));
    }
  };
};
NoteForm.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string,
  list: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.array,
  toHomePage: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.bool,
  error: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string,
  fetchAllNotes: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.func,
  hasError: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_13__["connect"])(mapStateToProps, mapDispatchToProps)(NoteForm));

/***/ }),

/***/ "./src/containers/NotesContainer/NotesContainer.js":
/*!*********************************************************!*\
  !*** ./src/containers/NotesContainer/NotesContainer.js ***!
  \*********************************************************/
/*! exports provided: NotesContainer, mapStateToProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesContainer", function() { return NotesContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony import */ var _Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_NoteDisplay_NoteDisplay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/NoteDisplay/NoteDisplay */ "./src/components/NoteDisplay/NoteDisplay.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);





var _jsxFileName = "/Users/Krog/Desktop/Local-Projects/_Module-Three-Projects/_TrapperKeeper/trapperkeeper/src/containers/NotesContainer/NotesContainer.js";





var NotesContainer =
/*#__PURE__*/
function (_Component) {
  Object(_Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(NotesContainer, _Component);

  function NotesContainer() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NotesContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(NotesContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.generateNotes = function () {
      return _this.props.allNotes.map(function (note) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
          to: "/notes/".concat(note.id),
          key: note.id,
          className: "note-click",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_NoteDisplay_NoteDisplay__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({}, note, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          },
          __self: this
        })));
      });
    };

    return _this;
  }

  Object(_Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NotesContainer, [{
    key: "render",
    value: function render() {
      var splashMessage = this.props.allNotes.length ? null : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        className: "splash-message",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "Try Creating a New Note!");
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "NotesContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, splashMessage, this.props.allNotes && this.generateNotes());
    }
  }]);

  return NotesContainer;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);
var mapStateToProps = function mapStateToProps(state) {
  return {
    allNotes: state.allNotes
  };
};
NotesContainer.propTypes = {
  allNotes: prop_types__WEBPACK_IMPORTED_MODULE_9__["PropTypes"].array
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps)(NotesContainer));

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _containers_App_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/App/App */ "./src/containers/App/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reducers */ "./src/reducers/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
var _jsxFileName = "/Users/Krog/Desktop/Local-Projects/_Module-Three-Projects/_TrapperKeeper/trapperkeeper/src/index.js";











var store = Object(redux__WEBPACK_IMPORTED_MODULE_6__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_7__["rootReducer"], Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_9__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_6__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_10__["default"])));
var router = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__["Provider"], {
  store: store,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["BrowserRouter"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_App_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
})));
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(router, document.getElementById('root'));
_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-5-1!../node_modules/postcss-loader/src??postcss!../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./index.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/index.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-5-1!../node_modules/postcss-loader/src??postcss!../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./index.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/index.scss", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-5-1!../node_modules/postcss-loader/src??postcss!../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./index.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/index.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/media/checked.svg":
/*!*******************************!*\
  !*** ./src/media/checked.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/checked.cd9f076d.svg";

/***/ }),

/***/ "./src/media/icon-placeholder.png":
/*!****************************************!*\
  !*** ./src/media/icon-placeholder.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/icon-placeholder.1c978950.png";

/***/ }),

/***/ "./src/media/plus.svg":
/*!****************************!*\
  !*** ./src/media/plus.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/plus.dc4ce577.svg";

/***/ }),

/***/ "./src/media/unchecked.svg":
/*!*********************************!*\
  !*** ./src/media/unchecked.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/unchecked.2c8fe02d.svg";

/***/ }),

/***/ "./src/reducers/errorReducer.js":
/*!**************************************!*\
  !*** ./src/reducers/errorReducer.js ***!
  \**************************************/
/*! exports provided: errorReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorReducer", function() { return errorReducer; });
var errorReducer = function errorReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'HAS_ERROR':
      console.log('in error reducer');
      return action.message;

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: rootReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootReducer", function() { return rootReducer; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _notesReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notesReducer */ "./src/reducers/notesReducer.js");
/* harmony import */ var _errorReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errorReducer */ "./src/reducers/errorReducer.js");



var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  allNotes: _notesReducer__WEBPACK_IMPORTED_MODULE_1__["notesReducer"],
  error: _errorReducer__WEBPACK_IMPORTED_MODULE_2__["errorReducer"]
});

/***/ }),

/***/ "./src/reducers/notesReducer.js":
/*!**************************************!*\
  !*** ./src/reducers/notesReducer.js ***!
  \**************************************/
/*! exports provided: notesReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notesReducer", function() { return notesReducer; });
/* harmony import */ var _Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");

var notesReducer = function notesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'FETCH_NOTES':
      return action.allNotes.map(function (note) {
        return {
          id: note.id,
          title: note.title,
          list: Object(_Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(note.list)
        };
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) { var publicUrl; }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    var contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ "./src/thunks/fetchAllNotes.js":
/*!*************************************!*\
  !*** ./src/thunks/fetchAllNotes.js ***!
  \*************************************/
/*! exports provided: fetchAllNotes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAllNotes", function() { return fetchAllNotes; });
/* harmony import */ var _Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");



var fetchAllNotes = function fetchAllNotes(url) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = Object(_Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
        var response, result;
        return _Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return fetch(url);

              case 3:
                response = _context.sent;

                if (response.ok) {
                  _context.next = 6;
                  break;
                }

                throw Error(response.statusText);

              case 6:
                _context.next = 8;
                return response.json();

              case 8:
                result = _context.sent;
                dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["fetchNotes"])(result));
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](0);
                dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["hasError"])(_context.t0.message));

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 12]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};

/***/ }),

/***/ "./src/utility/fetchData.js":
/*!**********************************!*\
  !*** ./src/utility/fetchData.js ***!
  \**********************************/
/*! exports provided: fetchData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchData", function() { return fetchData; });
/* harmony import */ var _Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");


var fetchData =
/*#__PURE__*/
function () {
  var _ref = Object(_Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(url, body) {
    var response, data;
    return _Users_Krog_Desktop_Local_Projects_Module_Three_Projects_TrapperKeeper_trapperkeeper_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(url, body);

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.json();

          case 5:
            data = _context.sent;

            if (response.ok) {
              _context.next = 10;
              break;
            }

            throw new Error(data);

          case 10:
            return _context.abrupt("return", data);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchData(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/utility/fetchOptionsCreator.js":
/*!********************************************!*\
  !*** ./src/utility/fetchOptionsCreator.js ***!
  \********************************************/
/*! exports provided: fetchOptionsCreator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchOptionsCreator", function() { return fetchOptionsCreator; });
var fetchOptionsCreator = function fetchOptionsCreator(type, body) {
  return {
    method: type,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  };
};

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/Krog/Desktop/Local-Projects/_Module-Three-Projects/_TrapperKeeper/trapperkeeper/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/Krog/Desktop/Local-Projects/_Module-Three-Projects/_TrapperKeeper/trapperkeeper/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map