"use strict";
exports.id = 243;
exports.ids = [243];
exports.modules = {

/***/ 2243:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wh": () => (/* binding */ CodeBox),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export Code */
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4617);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prism_react_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8630);
/* harmony import */ var prism_react_renderer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prism_react_renderer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _moss_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(239);
/* harmony import */ var _moss_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_moss_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }








const StyledCodeBox = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "e1julih50"
})( true ? {
  name: "15c3b00",
  styles: "transition:background-color 0.5s;position:relative;&:hover{.copy{opacity:1;}}"
} : 0);

const CodeBox = props => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(StyledCodeBox, {
    children: props.children
  });
};
const Code = props => {
  const code = props.children.replace(/[\r\n]+$/, '');
  const {
    onCopy,
    hasCopied
  } = (0,_moss_hooks__WEBPACK_IMPORTED_MODULE_3__.useClipboard)(code);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((prism_react_renderer__WEBPACK_IMPORTED_MODULE_2___default()), _objectSpread(_objectSpread({}, prism_react_renderer__WEBPACK_IMPORTED_MODULE_2__.defaultProps), {}, {
      language: props.language,
      code: code,
      theme: undefined,
      children: ({
        style,
        tokens,
        getLineProps,
        getTokenProps
      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("code", {
        dir: "ltr",
        className: props.className,
        style: _objectSpread(_objectSpread({}, style), {}, {
          padding: 0,
          margin: 0
        }),
        children: tokens.map((line, i) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", _objectSpread(_objectSpread({}, getLineProps({
          line,
          key: i
        })), {}, {
          children: line.map((token, key) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", _objectSpread({}, getTokenProps({
            token,
            key
          })), key))
        }), i))
      })
    })), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
      onClick: () => onCopy(),
      className: `copy ${hasCopied ? 'copied' : ''}`
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Code);

/***/ }),

/***/ 239:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



exports.__esModule = true;

var _useClipboard = __webpack_require__(5592);

Object.keys(_useClipboard).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useClipboard[key]) return;
  exports[key] = _useClipboard[key];
});

var _useDidMount = __webpack_require__(7418);

Object.keys(_useDidMount).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useDidMount[key]) return;
  exports[key] = _useDidMount[key];
});

var _useOnline = __webpack_require__(2717);

Object.keys(_useOnline).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useOnline[key]) return;
  exports[key] = _useOnline[key];
});

var _useEffectOnce = __webpack_require__(6409);

Object.keys(_useEffectOnce).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useEffectOnce[key]) return;
  exports[key] = _useEffectOnce[key];
});

var _useLatest = __webpack_require__(5669);

Object.keys(_useLatest).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useLatest[key]) return;
  exports[key] = _useLatest[key];
});

var _useIntersection = __webpack_require__(9583);

Object.keys(_useIntersection).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useIntersection[key]) return;
  exports[key] = _useIntersection[key];
});

var _useMountedState = __webpack_require__(3907);

Object.keys(_useMountedState).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useMountedState[key]) return;
  exports[key] = _useMountedState[key];
});

var _useFirstMountState = __webpack_require__(8417);

Object.keys(_useFirstMountState).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useFirstMountState[key]) return;
  exports[key] = _useFirstMountState[key];
});

var _useUpdateEffect = __webpack_require__(9635);

Object.keys(_useUpdateEffect).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useUpdateEffect[key]) return;
  exports[key] = _useUpdateEffect[key];
});

/***/ }),

/***/ 5592:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(7010);

exports.__esModule = true;
exports.useClipboard = useClipboard;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(2768));

var _react = __webpack_require__(9297);

var _copyToClipboard = _interopRequireDefault(__webpack_require__(5445));

var _excluded = ["timeout"];

/**
 * React hook to copy content to clipboard
 *
 * @param text the text or value to copy
 * @param {Number} [optionsOrTimeout=1500] optionsOrTimeout - delay (in ms) to switch back to initial state once copied.
 * @param {Object} optionsOrTimeout
 * @param {string} optionsOrTimeout.format - set the desired MIME type
 * @param {number} optionsOrTimeout.timeout - delay (in ms) to switch back to initial state once copied.
 */
function useClipboard(text, optionsOrTimeout) {
  if (optionsOrTimeout === void 0) {
    optionsOrTimeout = {};
  }

  var _useState = (0, _react.useState)(false),
      hasCopied = _useState[0],
      setHasCopied = _useState[1];

  var _ref = typeof optionsOrTimeout === 'number' ? {
    timeout: optionsOrTimeout
  } : optionsOrTimeout,
      _ref$timeout = _ref.timeout,
      timeout = _ref$timeout === void 0 ? 1500 : _ref$timeout,
      copyOptions = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);

  var onCopy = (0, _react.useCallback)(function () {
    var didCopy = (0, _copyToClipboard.default)(text, copyOptions);
    setHasCopied(didCopy);
  }, [text, copyOptions]);
  (0, _react.useEffect)(function () {
    var timeoutId = null;

    if (hasCopied) {
      timeoutId = window.setTimeout(function () {
        setHasCopied(false);
      }, timeout);
    }

    return function () {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [timeout, hasCopied]);
  return {
    value: text,
    onCopy: onCopy,
    hasCopied: hasCopied
  };
}

/***/ }),

/***/ 7418:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



exports.__esModule = true;
exports.useDidMount = void 0;

var _useEffectOnce = __webpack_require__(6409);

var useDidMount = function useDidMount(fn) {
  (0, _useEffectOnce.useEffectOnce)(function () {
    fn();
  });
};

exports.useDidMount = useDidMount;

/***/ }),

/***/ 6409:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



exports.__esModule = true;
exports.useEffectOnce = void 0;

var _react = __webpack_require__(9297);

var useEffectOnce = function useEffectOnce(effect) {
  (0, _react.useEffect)(effect, []);
};

exports.useEffectOnce = useEffectOnce;

/***/ }),

/***/ 8417:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



exports.__esModule = true;
exports.useFirstMountState = useFirstMountState;

var _react = __webpack_require__(9297);

function useFirstMountState() {
  var isFirst = (0, _react.useRef)(true);

  if (isFirst.current) {
    isFirst.current = false;
    return true;
  }

  return isFirst.current;
}

/***/ }),

/***/ 9583:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



exports.__esModule = true;
exports.useIntersection = void 0;

var _react = __webpack_require__(9297);

var useIntersection = function useIntersection(ref, options) {
  var _useState = (0, _react.useState)(null),
      intersectionObserverEntry = _useState[0],
      setIntersectionObserverEntry = _useState[1];

  (0, _react.useEffect)(function () {
    if (ref.current && typeof IntersectionObserver === 'function') {
      var handler = function handler(entries) {
        setIntersectionObserverEntry(entries[0]);
      };

      var observer = new IntersectionObserver(handler, options);
      observer.observe(ref.current);
      return function () {
        setIntersectionObserverEntry(null);
        observer.disconnect();
      };
    }

    return function () {};
  }, [ref.current, options.threshold, options.root, options.rootMargin]);
  return intersectionObserverEntry;
};

exports.useIntersection = useIntersection;

/***/ }),

/***/ 5669:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



exports.__esModule = true;
exports.useLatest = void 0;

var _react = __webpack_require__(9297);

var useLatest = function useLatest(val) {
  var ref = (0, _react.useRef)(val);
  ref.current = val;
  return ref;
};

exports.useLatest = useLatest;

/***/ }),

/***/ 3907:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



exports.__esModule = true;
exports.useMountedState = useMountedState;

var _react = __webpack_require__(9297);

function useMountedState() {
  var mountedRef = (0, _react.useRef)(false);
  var get = (0, _react.useCallback)(function () {
    return mountedRef.current;
  }, []);
  (0, _react.useEffect)(function () {
    mountedRef.current = true;
    return function () {
      mountedRef.current = false;
    };
  }, []);
  return get;
}

/***/ }),

/***/ 2717:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



exports.__esModule = true;
exports.useOnline = useOnline;

var _react = __webpack_require__(9297);

/**
 *
 * @returns {boolean} Is navigator online
 */
function getIsOnline() {
  if (typeof window === 'undefined') {
    return null;
  }

  return navigator.onLine;
}
/**
 * useOnline hook
 *
 * Returns true if navigator is online, false if not.
 *
 * @returns {boolean} The value of navigator.onLine
 */


function useOnline() {
  var _useState = (0, _react.useState)(function () {
    return getIsOnline();
  }),
      online = _useState[0],
      changeOnline = _useState[1];

  function setOffline() {
    changeOnline(false);
  }

  function setOnline() {
    changeOnline(true);
  } // we only needs this to be set on mount
  // hence []


  (0, _react.useEffect)(function () {
    window.addEventListener('online', setOnline);
    window.addEventListener('offline', setOffline);
    return function () {
      window.removeEventListener('online', setOnline);
      window.removeEventListener('offline', setOffline);
    };
  }, []);
  return online;
}

/***/ }),

/***/ 9635:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



exports.__esModule = true;
exports.useUpdateEffect = void 0;

var _react = __webpack_require__(9297);

var _useFirstMountState = __webpack_require__(8417);

var useUpdateEffect = function useUpdateEffect(effect, deps) {
  var isFirstMount = (0, _useFirstMountState.useFirstMountState)();
  (0, _react.useEffect)(function () {
    if (!isFirstMount) {
      return effect();
    }
  }, deps);
};

exports.useUpdateEffect = useUpdateEffect;

/***/ })

};
;