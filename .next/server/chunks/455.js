"use strict";
exports.id = 455;
exports.ids = [455];
exports.modules = {

/***/ 9455:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DefaultLayout)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5558);
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6826);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const MDXLayout = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__.default)(() => Promise.all(/* import() */[__webpack_require__.e(445), __webpack_require__.e(243), __webpack_require__.e(4)]).then(__webpack_require__.bind(__webpack_require__, 830)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(830)],
    modules: ["../layouts/index.tsx -> " + './mdx']
  }
});
function DefaultLayout(props) {
  const {
    children,
    frontMatter
  } = props;
  const {
    slug
  } = frontMatter;
  const layoutMap = {
    guides: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(MDXLayout, {
      frontMatter: frontMatter,
      children: children
    }),
    components: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(MDXLayout, {
      frontMatter: frontMatter,
      children: children
    }),
    editor: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(MDXLayout, {
      frontMatter: frontMatter,
      children: children
    }),
    hooks: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(MDXLayout, {
      frontMatter: frontMatter,
      children: children
    }),
    default: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_page__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
      frontMatter: frontMatter,
      children: children
    })
  };
  const layout = Object.entries(layoutMap).find(([path]) => String(slug).startsWith(`/${path}`));
  if (!layout) return layoutMap.default;
  return layout[1];
}

/***/ })

};
;