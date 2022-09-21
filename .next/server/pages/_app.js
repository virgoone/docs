(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: external "nprogress"
const external_nprogress_namespaceObject = require("nprogress");
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_namespaceObject);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ../../packages/ui/lib/style/index.css
var style = __webpack_require__(3744);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./pages/_app.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









if (false) {}

const App = ({
  Component,
  pageProps
}) => {
  const {
    pathname,
    events
  } = (0,router_.useRouter)();
  (0,external_react_.useEffect)(() => {
    const handleChangeStart = url => {
      external_nprogress_default().start();

      if (process.env.__DEV__) {
        console.log(`Loading: ${url}`);
      }
    };

    const handleChangeComplete = () => {
      var _window$gtag, _window;

      external_nprogress_default().done();
      (_window$gtag = (_window = window)['gtag']) === null || _window$gtag === void 0 ? void 0 : _window$gtag.call(_window, 'event', 'page_view', {
        page_title: document.title,
        page_location: document.location,
        page_path: window.location.href
      });
    };

    events.on('routeChangeStart', handleChangeStart);
    events.on('routeChangeComplete', handleChangeComplete);
    return () => {
      events.off('routeChangeStart', handleChangeStart);
      events.off('routeChangeComplete', handleChangeComplete);
    };
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({
      path: pathname
    }, pageProps))
  });
};

/* harmony default export */ const _app = (App);

/***/ }),

/***/ 3744:
/***/ (() => {



/***/ }),

/***/ 6731:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7754));
module.exports = __webpack_exports__;

})();