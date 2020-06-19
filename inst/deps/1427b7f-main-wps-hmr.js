webpackHotUpdatedash_component_unload("main",{

/***/ "./src/lib/components/DashComponentUnload.react.js":
/*!*********************************************************!*\
  !*** ./src/lib/components/DashComponentUnload.react.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashComponentUnload; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */

var DashComponentUnload = /*#__PURE__*/function (_Component) {
  _inherits(DashComponentUnload, _Component);

  var _super = _createSuper(DashComponentUnload);

  function DashComponentUnload() {
    _classCallCheck(this, DashComponentUnload);

    return _super.apply(this, arguments);
  }

  _createClass(DashComponentUnload, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('beforeunload', this.handleLeavePage);
    } // componentWillUnmount() {
    //     window.removeEventListener('beforeunload', this.handleLeavePage);
    // }

  }, {
    key: "handleLeavePage",
    value: function handleLeavePage(e) {
      console.log(e);
      var confirmationMessage = 'Some message';
      e.returnValue = confirmationMessage; // Gecko, Trident, Chrome 34+
      // return confirmationMessage; // Gecko, WebKit, Chrome <34
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          label = _this$props.label,
          setProps = _this$props.setProps,
          value = _this$props.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: id
      });
    }
  }]);

  return DashComponentUnload;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


DashComponentUnload.defaultProps = {};
DashComponentUnload.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A label that will be printed when this component is rendered.
   */
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,

  /**
   * The value displayed in the input.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX2NvbXBvbmVudF91bmxvYWQvLi9zcmMvbGliL2NvbXBvbmVudHMvRGFzaENvbXBvbmVudFVubG9hZC5yZWFjdC5qcyJdLCJuYW1lcyI6WyJEYXNoQ29tcG9uZW50VW5sb2FkIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUxlYXZlUGFnZSIsImUiLCJjb25zb2xlIiwibG9nIiwiY29uZmlybWF0aW9uTWVzc2FnZSIsInJldHVyblZhbHVlIiwicHJvcHMiLCJpZCIsImxhYmVsIiwic2V0UHJvcHMiLCJ2YWx1ZSIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7Ozs7Ozs7SUFPcUJBLG1COzs7Ozs7Ozs7Ozs7O3dDQUVHO0FBQ2hCQyxZQUFNLENBQUNDLGdCQUFQLENBQXdCLGNBQXhCLEVBQXdDLEtBQUtDLGVBQTdDO0FBQ0gsSyxDQUVEO0FBQ0E7QUFDQTs7OztvQ0FFZ0JDLEMsRUFBRztBQUNmQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNBLFVBQU1HLG1CQUFtQixHQUFHLGNBQTVCO0FBQ0FILE9BQUMsQ0FBQ0ksV0FBRixHQUFnQkQsbUJBQWhCLENBSGUsQ0FHc0I7QUFDckM7QUFDSDs7OzZCQUVRO0FBQUEsd0JBQ2dDLEtBQUtFLEtBRHJDO0FBQUEsVUFDRUMsRUFERixlQUNFQSxFQURGO0FBQUEsVUFDTUMsS0FETixlQUNNQSxLQUROO0FBQUEsVUFDYUMsUUFEYixlQUNhQSxRQURiO0FBQUEsVUFDdUJDLEtBRHZCLGVBQ3VCQSxLQUR2QjtBQUdMLDBCQUNJO0FBQUssVUFBRSxFQUFFSDtBQUFULFFBREo7QUFLSDs7OztFQXpCNENJLCtDOzs7QUE0QmpEZCxtQkFBbUIsQ0FBQ2UsWUFBcEIsR0FBbUMsRUFBbkM7QUFFQWYsbUJBQW1CLENBQUNnQixTQUFwQixHQUFnQztBQUM1Qjs7O0FBR0FOLElBQUUsRUFBRU8saURBQVMsQ0FBQ0MsTUFKYzs7QUFNNUI7OztBQUdBUCxPQUFLLEVBQUVNLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDLFVBVEk7O0FBVzVCOzs7QUFHQU4sT0FBSyxFQUFFSSxpREFBUyxDQUFDQyxNQWRXOztBQWdCNUI7Ozs7QUFJQU4sVUFBUSxFQUFFSyxpREFBUyxDQUFDRztBQXBCUSxDQUFoQyxDIiwiZmlsZSI6IjE0MjdiN2YtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vKipcbiAqIEV4YW1wbGVDb21wb25lbnQgaXMgYW4gZXhhbXBsZSBjb21wb25lbnQuXG4gKiBJdCB0YWtlcyBhIHByb3BlcnR5LCBgbGFiZWxgLCBhbmRcbiAqIGRpc3BsYXlzIGl0LlxuICogSXQgcmVuZGVycyBhbiBpbnB1dCB3aXRoIHRoZSBwcm9wZXJ0eSBgdmFsdWVgXG4gKiB3aGljaCBpcyBlZGl0YWJsZSBieSB0aGUgdXNlci5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGFzaENvbXBvbmVudFVubG9hZCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsIHRoaXMuaGFuZGxlTGVhdmVQYWdlKTtcbiAgICB9XG5cbiAgICAvLyBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAvLyAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsIHRoaXMuaGFuZGxlTGVhdmVQYWdlKTtcbiAgICAvLyB9XG5cbiAgICBoYW5kbGVMZWF2ZVBhZ2UoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICBjb25zdCBjb25maXJtYXRpb25NZXNzYWdlID0gJ1NvbWUgbWVzc2FnZSc7XG4gICAgICAgIGUucmV0dXJuVmFsdWUgPSBjb25maXJtYXRpb25NZXNzYWdlOyAvLyBHZWNrbywgVHJpZGVudCwgQ2hyb21lIDM0K1xuICAgICAgICAvLyByZXR1cm4gY29uZmlybWF0aW9uTWVzc2FnZTsgLy8gR2Vja28sIFdlYktpdCwgQ2hyb21lIDwzNFxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge2lkLCBsYWJlbCwgc2V0UHJvcHMsIHZhbHVlfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9e2lkfT5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuRGFzaENvbXBvbmVudFVubG9hZC5kZWZhdWx0UHJvcHMgPSB7fTtcblxuRGFzaENvbXBvbmVudFVubG9hZC5wcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogVGhlIElEIHVzZWQgdG8gaWRlbnRpZnkgdGhpcyBjb21wb25lbnQgaW4gRGFzaCBjYWxsYmFja3MuXG4gICAgICovXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBBIGxhYmVsIHRoYXQgd2lsbCBiZSBwcmludGVkIHdoZW4gdGhpcyBjb21wb25lbnQgaXMgcmVuZGVyZWQuXG4gICAgICovXG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZSB2YWx1ZSBkaXNwbGF5ZWQgaW4gdGhlIGlucHV0LlxuICAgICAqL1xuICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogRGFzaC1hc3NpZ25lZCBjYWxsYmFjayB0aGF0IHNob3VsZCBiZSBjYWxsZWQgdG8gcmVwb3J0IHByb3BlcnR5IGNoYW5nZXNcbiAgICAgKiB0byBEYXNoLCB0byBtYWtlIHRoZW0gYXZhaWxhYmxlIGZvciBjYWxsYmFja3MuXG4gICAgICovXG4gICAgc2V0UHJvcHM6IFByb3BUeXBlcy5mdW5jXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==