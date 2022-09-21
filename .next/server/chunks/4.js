exports.id = 4;
exports.ids = [4];
exports.modules = {

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

/***/ 830:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MDXLayout)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "@emotion/styled/base"
var base_ = __webpack_require__(4617);
var base_default = /*#__PURE__*/__webpack_require__.n(base_);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@11.1.4_hi6nz4yl527oxaweatwpa3p3b4/node_modules/next/link.js
var next_link = __webpack_require__(841);
// EXTERNAL MODULE: external "react-innertext"
var external_react_innertext_ = __webpack_require__(157);
var external_react_innertext_default = /*#__PURE__*/__webpack_require__.n(external_react_innertext_);
// EXTERNAL MODULE: external "@mdx-js/react"
var react_ = __webpack_require__(4800);
// EXTERNAL MODULE: external "github-slugger"
var external_github_slugger_ = __webpack_require__(7797);
var external_github_slugger_default = /*#__PURE__*/__webpack_require__.n(external_github_slugger_);
// EXTERNAL MODULE: ./misc/active-anchor.tsx
var active_anchor = __webpack_require__(5966);
// EXTERNAL MODULE: ./components/code.tsx
var code = __webpack_require__(2243);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/elements.tsx

const _excluded = ["children"],
      _excluded2 = ["tag", "children", "slugger", "withObserver"],
      _excluded3 = (/* unused pure expression or super */ null && (["element", "children"])),
      _excluded4 = ["children"],
      _excluded5 = ["children"],
      _excluded6 = ["children"],
      _excluded7 = ["children"],
      _excluded8 = ["children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/* eslint-disable @typescript-eslint/indent */










const IBlock = props => /*#__PURE__*/React.createElement(props.element, {
  className: props.className
}, props.children);

const Block = /*#__PURE__*/(/* unused pure expression or super */ null && (_styled(IBlock, {
  target: "e12voff12"
})("margin-bottom:8px;color:#000;font-size:", props => props.fontSize || '14px', ";font-weight:", props => props.fontWeight || 'normal', ";line-height:", props => props.lineHeight || 'normal', ";")));

const InlineCode = /*#__PURE__*/base_default()("code", {
  target: "e12voff11"
})( true ? {
  name: "10unbr4",
  styles: "border-radius:3px;background-color:rgba(27, 31, 35, 0.05);margin:0px;padding:0.2em 0.4em;font-size:85%;font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace"
} : 0);

const Blockquote = /*#__PURE__*/base_default()("blockquote", {
  target: "e12voff10"
})( true ? {
  name: "hzjkxx",
  styles: "border-radius:3px;background-color:rgba(27, 31, 35, 0.05);margin:0px;padding:1em 3em"
} : 0);

const A = _ref => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const isExternal = props.href && props.href.startsWith('https://');

  if (isExternal) {
    return /*#__PURE__*/jsx_runtime_.jsx("a", _objectSpread(_objectSpread({
      target: "_blank",
      rel: "noreferrer"
    }, props), {}, {
      children: children
    }));
  }

  return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: props.href,
    children: /*#__PURE__*/jsx_runtime_.jsx("a", _objectSpread(_objectSpread({}, props), {}, {
      children: children
    }))
  });
};

const ob = {};
const obCallback = {};

const createOrGetObserver = rootMargin => {
  // Only create 1 instance for performance reasons
  if (!ob[rootMargin]) {
    obCallback[rootMargin] = [];
    ob[rootMargin] = new IntersectionObserver(e => {
      obCallback[rootMargin].forEach(cb => cb(e));
    }, {
      rootMargin,
      threshold: [0, 1]
    });
  }

  return ob[rootMargin];
};

function useIntersect(margin, ref, cb) {
  (0,external_react_.useEffect)(() => {
    const callback = entries => {
      let e;

      for (let i = 0; i < entries.length; i++) {
        if (entries[i].target === ref.current) {
          e = entries[i];
          break;
        }
      }

      if (e) cb(e);
    };

    const observer = createOrGetObserver(margin);
    obCallback[margin].push(callback);
    if (ref.current) observer.observe(ref.current);
    return () => {
      const idx = obCallback[margin].indexOf(callback);
      if (idx >= 0) obCallback[margin].splice(idx, 1);
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);
} // Anchor links


const HeaderLink = _ref2 => {
  let {
    tag: Tag,
    children,
    slugger,
    withObserver = true
  } = _ref2,
      props = _objectWithoutProperties(_ref2, _excluded2);

  const setActiveAnchor = (0,active_anchor/* useActiveAnchorSet */.Hz)();
  const obRef = (0,external_react_.useRef)(); // We are pretty sure that this header link component will not be rerendered
  // separately, so we attach a mutable index property to slugger.

  const slug = (0,external_react_.useState)(() => slugger.slug(external_react_innertext_default()(children) || ''))[0];
  const index = (0,external_react_.useState)(() => slugger.index++)[0];

  const anchor = /*#__PURE__*/jsx_runtime_.jsx("span", {
    className: "subheading-anchor",
    id: slug,
    ref: obRef
  });

  useIntersect('0px 0px -50%', obRef, e => {
    const aboveHalfViewport = e.boundingClientRect.y + e.boundingClientRect.height <= e.rootBounds.y + e.rootBounds.height;
    const insideHalfViewport = e.intersectionRatio > 0;
    setActiveAnchor(f => {
      const ret = _objectSpread(_objectSpread({}, f), {}, {
        [slug]: {
          index,
          aboveHalfViewport,
          insideHalfViewport
        }
      });

      let activeSlug;
      let smallestIndexInViewport = Infinity;
      let largestIndexAboveViewport = -1;

      for (const s in f) {
        ret[s].isActive = false;

        if (ret[s].insideHalfViewport && ret[s].index < smallestIndexInViewport) {
          smallestIndexInViewport = ret[s].index;
          activeSlug = s;
        }

        if (smallestIndexInViewport === Infinity && ret[s].aboveHalfViewport && ret[s].index > largestIndexAboveViewport) {
          largestIndexAboveViewport = ret[s].index;
          activeSlug = s;
        }
      }

      if (ret[activeSlug]) ret[activeSlug].isActive = true;
      return ret;
    });
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Tag, _objectSpread(_objectSpread({}, props), {}, {
    children: [anchor, /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
      href: '#' + slug,
      className: "text-current no-underline no-outline",
      children: [children, /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "anchor-icon",
        "aria-hidden": true,
        children: "#"
      })]
    })]
  }));
};

const Heading = _ref3 => {
  let {
    element,
    children
  } = _ref3,
      props = _objectWithoutProperties(_ref3, _excluded3);

  return /*#__PURE__*/_jsx(Block, _objectSpread(_objectSpread({
    element: element
  }, props), {}, {
    children: /*#__PURE__*/_jsx(React.Fragment, {
      children: children
    })
  }));
};
const H1 = props => {
  const {
    children
  } = props;
  return /*#__PURE__*/_jsx(Heading, {
    element: "h1",
    fontSize: "28px",
    lineHeight: "36px",
    fontWeight: "500",
    children: children
  });
};

const H2 = ({
  slugger
}) => _ref4 => {
  let {
    children
  } = _ref4,
      props = _objectWithoutProperties(_ref4, _excluded4);

  return /*#__PURE__*/jsx_runtime_.jsx(HeaderLink, _objectSpread(_objectSpread({
    tag: "h2",
    slugger: slugger
  }, props), {}, {
    children: children
  }));
};

const H3 = ({
  slugger
}) => _ref5 => {
  let {
    children
  } = _ref5,
      props = _objectWithoutProperties(_ref5, _excluded5);

  return /*#__PURE__*/jsx_runtime_.jsx(HeaderLink, _objectSpread(_objectSpread({
    tag: "h3",
    slugger: slugger
  }, props), {}, {
    children: children
  }));
};

const H4 = ({
  slugger
}) => _ref6 => {
  let {
    children
  } = _ref6,
      props = _objectWithoutProperties(_ref6, _excluded6);

  return /*#__PURE__*/jsx_runtime_.jsx(HeaderLink, _objectSpread(_objectSpread({
    tag: "h4",
    slugger: slugger
  }, props), {}, {
    children: children
  }));
};

const H5 = ({
  slugger
}) => _ref7 => {
  let {
    children
  } = _ref7,
      props = _objectWithoutProperties(_ref7, _excluded7);

  return /*#__PURE__*/jsx_runtime_.jsx(HeaderLink, _objectSpread(_objectSpread({
    tag: "h5",
    slugger: slugger
  }, props), {}, {
    children: children
  }));
};

const H6 = ({
  slugger
}) => _ref8 => {
  let {
    children
  } = _ref8,
      props = _objectWithoutProperties(_ref8, _excluded8);

  return /*#__PURE__*/jsx_runtime_.jsx(HeaderLink, _objectSpread(_objectSpread({
    tag: "h6",
    slugger: slugger
  }, props), {}, {
    children: children
  }));
};

const getComponents = args => ({
  h2: H2(args),
  h3: H3(args),
  h4: H4(args),
  h5: H5(args),
  h6: H6(args),
  pre: props => /*#__PURE__*/jsx_runtime_.jsx(code/* CodeBox */.wh, {
    children: /*#__PURE__*/jsx_runtime_.jsx("pre", _objectSpread({}, props))
  }),
  code: code/* default */.ZP,
  inlineCode: ({
    children
  }) => /*#__PURE__*/jsx_runtime_.jsx(InlineCode, {
    children: children
  }),
  blockquote: ({
    children
  }) => /*#__PURE__*/jsx_runtime_.jsx(Blockquote, {
    children: children
  }),
  table: props => /*#__PURE__*/jsx_runtime_.jsx("table", {
    className: "p-0 w-full text-left border-collapse text-sm border border-solid border-[#e8e8e8] dark:border-slate-400/20 table-container",
    children: props.children
  }),
  th: props => /*#__PURE__*/jsx_runtime_.jsx("th", {
    className: "whitespace-nowrap p-3 pt-3.5 border-[#e8e8e8] dark:border-slate-400/20 font-medium text-[#5c6b77] dark:text-slate-200 bg-black/[.02] dark:bg-slate-500/[0.1]",
    children: props.children
  }),
  td: props => /*#__PURE__*/jsx_runtime_.jsx("td", {
    className: "text-left border border-solid border-[#e8e8e8] dark:border-slate-400/20 border-x-0 border-y p-3",
    children: props.children
  }),
  a: A
});

const MDXTheme = ({
  children
}) => {
  const slugger = new (external_github_slugger_default())();
  slugger.index = 0;
  return /*#__PURE__*/jsx_runtime_.jsx(react_.MDXProvider, {
    components: getComponents({
      slugger
    }),
    children: children
  });
};
// EXTERNAL MODULE: ./layouts/page.tsx + 8 modules
var page = __webpack_require__(6826);
;// CONCATENATED MODULE: ./layouts/mdx.tsx





function MDXLayout({
  children,
  frontMatter
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx(MDXTheme, {
      children: /*#__PURE__*/jsx_runtime_.jsx(page/* default */.Z, {
        frontMatter: frontMatter,
        sidebar: true,
        children: children
      })
    })
  });
}

/***/ })

};
;