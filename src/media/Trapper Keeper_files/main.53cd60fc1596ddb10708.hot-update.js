webpackHotUpdate("main",{

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

/***/ })

})
//# sourceMappingURL=main.53cd60fc1596ddb10708.hot-update.js.map