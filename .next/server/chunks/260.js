exports.id = 260;
exports.ids = [260];
exports.modules = {

/***/ 2619:
/***/ ((module) => {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  module.exports.default = module.exports, module.exports.__esModule = true;
  return _extends.apply(this, arguments);
}

module.exports = _extends;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 8627:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var setPrototypeOf = __webpack_require__(1329);

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  setPrototypeOf(subClass, superClass);
}

module.exports = _inheritsLoose;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 7010:
/***/ ((module) => {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 2768:
/***/ ((module) => {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 1329:
/***/ ((module) => {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  module.exports.default = module.exports, module.exports.__esModule = true;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 2086:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(5947);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(7804));

var _createClass2 = _interopRequireDefault(__webpack_require__(1855));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(8150));

var MultiRef = /*#__PURE__*/function () {
  function MultiRef() {
    (0, _classCallCheck2["default"])(this, MultiRef);
    (0, _defineProperty2["default"])(this, "map", new Map());
    (0, _defineProperty2["default"])(this, "_refFns", new Map());
  }

  (0, _createClass2["default"])(MultiRef, [{
    key: "ref",
    value: function ref(key) {
      var _this = this;

      var refFn = this._refFns.get(key);

      if (refFn) {
        return refFn;
      } else {
        var _refFn = function _refFn(value) {
          if (value == null) {
            _this._refFns["delete"](key);

            _this.map["delete"](key);
          } else {
            _this._refFns.set(key, _refFn);

            _this.map.set(key, value);
          }
        }; // We don't put `refFn` into `this._refFns` yet, because if the current render
        // is aborted, then it's possible than `refFn(null)` won't be called later
        // and its cleanup will never happen. We shouldn't cause any side effects that
        // need cleaning up later until `refFn` gets called with a non-null value.


        return _refFn;
      }
    }
  }]);
  return MultiRef;
}();

exports.default = MultiRef;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 7804:
/***/ ((module) => {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck, module.exports.__esModule = true, module.exports.default = module.exports;

/***/ }),

/***/ 1855:
/***/ ((module) => {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

module.exports = _createClass, module.exports.__esModule = true, module.exports.default = module.exports;

/***/ }),

/***/ 8150:
/***/ ((module) => {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty, module.exports.__esModule = true, module.exports.default = module.exports;

/***/ }),

/***/ 5947:
/***/ ((module) => {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports.default = module.exports;

/***/ })

};
;