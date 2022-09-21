exports.id = 743;
exports.ids = [743];
exports.modules = {

/***/ 6826:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Page)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next-themes"
var external_next_themes_ = __webpack_require__(2517);
;// CONCATENATED MODULE: ./misc/menu-context.ts

const MenuContext = /*#__PURE__*/(0,external_react_.createContext)(null);
function useMenuContext() {
  return (0,external_react_.useContext)(MenuContext);
}
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/script"
var script_ = __webpack_require__(8689);
var script_default = /*#__PURE__*/__webpack_require__.n(script_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/head.tsx
/* eslint-disable @typescript-eslint/ban-ts-comment */

/*eslint-disable prefer-rest-params */





function Head(props) {
  const {
    description,
    title,
    children
  } = props;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
        httpEquiv: "X-UA-Compatible",
        content: "IE=edge"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "https://dounione.oss-cn-shanghai.aliyuncs.com/icon/apple-touch-icon.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "https://dounione.oss-cn-shanghai.aliyuncs.com/icon/favicon-32x32.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "https://dounione.oss-cn-shanghai.aliyuncs.com/icon/favicon-16x16.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "shortcut icon",
        href: "https://dounione.oss-cn-shanghai.aliyuncs.com/icon/favicon.ico",
        type: "image/x-icon"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("title", {
        children: [ false ? 0 : '', title, " - Lark \u5DE5\u5177\u5E93"]
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: `Lark 工具集，${description}`
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "/css/nprogress.css"
      }), children]
    }), /*#__PURE__*/jsx_runtime_.jsx((script_default()), {
      async: true,
      id: "googletagmanager",
      src: "https://www.googletagmanager.com/gtag/js?id=G-3LDV7L80VR",
      onLoad: () => {
        var _window, _window$gtag, _window2, _window2$gtag;

        //  @ts-ignore
        window.dataLayer = window.dataLayer || [];

        function gtag() {
          // @ts-ignore
          window.dataLayer.push(arguments);
        }

        window.gtag = window.gtag || gtag;
        (_window = window) === null || _window === void 0 ? void 0 : (_window$gtag = _window.gtag) === null || _window$gtag === void 0 ? void 0 : _window$gtag.call(_window, 'js', new Date());
        (_window2 = window) === null || _window2 === void 0 ? void 0 : (_window2$gtag = _window2.gtag) === null || _window2$gtag === void 0 ? void 0 : _window2$gtag.call(_window2, 'config', 'G-3LDV7L80VR');
      }
    }), /*#__PURE__*/jsx_runtime_.jsx((script_default()), {
      async: true,
      id: "aegis",
      src: "https://cdn-go.cn/aegis/aegis-sdk/latest/aegis.min.js",
      onLoad: () => {
        //  @ts-ignore
        window.aegis = new Aegis({
          id: 'jYr96KM75PKzAq3LvV',
          // 上报 id
          // uin: 'xxx', // 用户唯一 ID（可选）
          reportApiSpeed: true,
          // 接口测速
          reportAssetSpeed: true,
          // 静态资源测速
          spa: true // spa 应用页面跳转的时候开启 pv 计算

        });
      }
    })]
  });
}
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(4058);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@11.1.4_hi6nz4yl527oxaweatwpa3p3b4/node_modules/next/link.js
var next_link = __webpack_require__(841);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: ./components/logo.tsx



function Logo(props) {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: `logo ${props.className}`,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
      viewBox: "0 0 300 79",
      children: [/*#__PURE__*/jsx_runtime_.jsx("defs", {}), /*#__PURE__*/jsx_runtime_.jsx("g", {
        fill: "#9329f6"
      }), /*#__PURE__*/jsx_runtime_.jsx("g", {
        transform: "matrix(0.777775470128254,0,0,0.777775470128254,6.110997294539955,0.48666258636554893)",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M37.854,26.105c4.419,0.427,9.428,0.088,13.873,1.506  c9.941,3.172,12.788,12.875,6.951,21.616c-5.842,8.748-19.074,12.679-28.707,8.529c-5.733-2.47-8.564-7.035-8.386-13.493  c0.031-1.115,0.004-2.23,0.004-3.859c-1.384,1.08-2.314,2.11-3.474,2.62c-1.036,0.456-2.631,0.83-3.42,0.339  c-0.834-0.521-1.51-2.167-1.378-3.21c0.498-3.95,2.573-7.114,5.903-9.304c2.276-1.498,4.431-0.314,4.684,2.432  c0.073,0.803,0.011,1.618,0.011,2.586c3.181-2.606,6.212-5.089,9.882-8.096c-1.812,0.348-2.923,0.822-3.96,0.692  c-1.139-0.141-2.447-0.605-3.204-1.391c-0.354-0.366,0.118-2.113,0.728-2.727c3.469-3.495,7.695-5.516,12.689-5.434  c2.33,0.038,3.104,1.875,1.559,3.693C40.347,24.094,38.744,25.293,37.854,26.105z"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M67.94,49.245c6.422,0.004,9.633,4.886,6.659,10.807  c-3.024,6.023-8.019,9.765-15.011,9.989c-6.783,0.217-9.113-4.218-6.999-10.354C54.57,53.937,61.87,49.242,67.94,49.245z"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M74.326,45.595c-5.795-0.04-10.959-5.349-10.944-11.251  c0.01-4.357,3.075-7.577,7.186-7.55c5.739,0.039,11.674,6.009,11.645,11.717C82.191,42.906,79.158,45.627,74.326,45.595z"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M36.197,75.248c-2.691-0.746-5.478-1.256-8.046-2.303  c-2.54-1.036-4.417-3.082-4.375-6.015c0.041-2.863,2.01-4.553,4.556-5.425c4.971-1.703,9.95-1.554,14.65,0.823  c2.614,1.323,4.723,3.389,4.095,6.751c-0.636,3.414-3.49,4.53-6.349,5.351c-1.381,0.397-2.913,0.271-4.377,0.383  C36.3,74.958,36.249,75.102,36.197,75.248z"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M88.205,52.5c5.772-0.035,8.319,4.093,5.863,8.747  c-2.173,4.12-7.616,6.623-11.453,5.267c-3.709-1.311-5.093-4.566-3.344-8.096C81.184,54.559,84.474,52.786,88.205,52.5z"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M46.266,87.77c-2.305-0.647-4.112-0.884-5.658-1.646  c-3.387-1.671-3.609-5.446-0.465-7.569c3.783-2.554,7.987-2.739,12.106-1.13c3.565,1.392,4.038,5.329,0.839,7.496  C51.013,86.325,48.388,86.917,46.266,87.77z"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M57.453,27.11c-2.69-0.852-5.713-1.424-8.362-2.749  c-2.986-1.494-2.787-4.063,0.091-5.745c3.72-2.173,12.656-1.704,16.048,0.843c2.476,1.857,2.406,4.397-0.435,5.661  C62.648,26.075,60.217,26.391,57.453,27.11z"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M23.009,56.955c0.223,2.711-0.844,4.873-3.298,5.907  c-2.602,1.095-4.785-0.288-6.373-2.243c-2.035-2.506-3.362-5.387-2.407-8.749c1.258-4.428,5.612-5.746,8.71-2.37  c1.798,1.958,2.784,4.662,4.135,7.029C23.521,56.671,23.265,56.813,23.009,56.955z"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M75.446,15.578c2.298,1.132,4.353,1.767,5.882,3.037  c0.915,0.759,1.645,2.734,1.288,3.751c-0.365,1.041-2.194,2.245-3.323,2.188c-1.999-0.1-4.194-0.742-5.84-1.851  c-1.147-0.772-2.348-2.96-2.011-4.048C71.828,17.411,73.889,16.688,75.446,15.578z"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M16.589,70.245c-0.965,1.368-1.612,3.255-2.71,3.568  c-1.08,0.307-3.025-0.646-3.847-1.653c-1.048-1.285-1.825-3.18-1.823-4.81c0.002-1.304,1.066-3.109,2.191-3.732  c0.768-0.426,2.856,0.455,3.629,1.366C15.165,66.325,15.651,68.213,16.589,70.245z"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M45.207,17.008c-1.104-0.705-2.2-1.406-3.298-2.105  c1.098-0.819,2.091-2.043,3.317-2.354c1.657-0.42,3.54-0.396,5.239-0.088c1.749,0.317,2.037,1.67,0.427,2.551  C49.295,15.886,47.424,16.257,45.207,17.008z"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M10.555,41.71c-0.106,3.194-2.276,6.416-3.938,6.2  c-0.639-0.083-1.572-1.251-1.612-1.966c-0.132-2.368,2.467-5.919,4.086-5.665C9.78,40.388,10.317,41.462,10.555,41.71z"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M19.22,28.43c-0.552-1.517-1.03-2.235-0.991-2.923  c0.028-0.5,0.647-1.162,1.165-1.403c1.829-0.85,3.725-1.549,5.596-2.307c0.114,0.565,0.515,1.45,0.297,1.645  C23.54,25.011,21.674,26.448,19.22,28.43z"
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("g", {
        transform: "matrix(3.873594565409599,0,0,3.873594565409599,91.4780926949284,-9.987747366449906)",
        children: /*#__PURE__*/jsx_runtime_.jsx("path", {
          d: "M12.66 20.080000000000002 l-10.46 0 l0 -14.92 l2.18 0 l0 12.74 l8.28 0 l0 2.18 z M21.42 16.64 l0.28 0 l-2.02 -3.84 l-2.46 4.74 q0.68 -0.36 1.54 -0.58 q1.24 -0.32 2.66 -0.32 z M18.62 10.780000000000001 l-0.68 -1.3 l2.22 0 l5.6 10.6 l-2.26 0 l-0.82 -1.56 l-1.24 0 q-1.18 0 -2.5 0.28 q-1.12 0.22 -2.04 0.6 q-0.84 0.32 -1.02 0.56 l-0.06 0.12 l-2.16 0 z M36.52 15.860000000000003 l0.64 1.08 q0.34 0.56 0.86 0.78 q0.36 0.14 0.88 0.14 l0.72 0 l0 2.22 l-0.9 0 q-0.66 0 -1.04 -0.08 q-0.56 -0.12 -1.02 -0.44 q-0.5 -0.38 -0.96 -1.12 l-1.6 -2.6 l-0.14 0 q-1.14 0 -1.74 0.14 q-0.48 0.1 -1.16 0.46 l0 3.64 l-2.1 0 l0 -10.36 l6.68 0 q0.94 0 1.68 0.4 t1.16 1.12 t0.42 1.6 q0 1.16 -0.61 1.91 t-1.77 1.11 z M33.96 13.780000000000001 l1.68 0 q0.5 0 0.83 -0.26 t0.33 -0.74 q0 -0.62 -0.48 -0.84 q-0.34 -0.16 -1.04 -0.16 l-4.22 0 l0 2.6 q1.1 -0.6 2.9 -0.6 z M48.42 16.080000000000002 l-2.62 4 l-2.18 0 l0 -10.36 l2.18 0 l0 6.64 l4.78 -6.64 l2.64 0 l-3.42 4.66 l1.52 2.56 q0.42 0.58 0.9 0.78 q0.34 0.14 0.84 0.14 l0.72 0 l0 2.22 l-0.9 0 q-0.62 0 -1 -0.1 q-0.48 -0.12 -0.94 -0.44 q-0.5 -0.38 -1.08 -1.1 z"
        })
      })]
    })
  });
}
;// CONCATENATED MODULE: ./components/theme-switch.tsx



function ThemeSwitch() {
  const {
    theme,
    setTheme
  } = (0,external_next_themes_.useTheme)();
  const {
    0: mounted,
    1: setMounted
  } = (0,external_react_.useState)(false); // @TODO: system theme

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  (0,external_react_.useEffect)(() => {
    setMounted(true);
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx("button", {
    className: "text-current p-2 cursor-pointer focus:ring outline-none",
    onClick: toggleTheme,
    "aria-label": "Toggle theme",
    onKeyDown: e => {
      if (e.key === 'Enter') toggleTheme();
    },
    children: mounted && theme === 'dark' ? /*#__PURE__*/jsx_runtime_.jsx("svg", {
      fill: "none",
      viewBox: "0 0 24 24",
      width: "24",
      height: "24",
      stroke: "currentColor",
      "aria-hidden": "true",
      children: /*#__PURE__*/jsx_runtime_.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      })
    }) : mounted && theme === 'light' ? /*#__PURE__*/jsx_runtime_.jsx("svg", {
      fill: "none",
      viewBox: "0 0 24 24",
      width: "24",
      height: "24",
      stroke: "currentColor",
      "aria-hidden": "true",
      children: /*#__PURE__*/jsx_runtime_.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      })
    }) : /*#__PURE__*/jsx_runtime_.jsx("svg", {
      viewBox: "0 0 24 24",
      width: "24",
      height: "24",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      fill: "none",
      shapeRendering: "geometricPrecision",
      "aria-hidden": "true"
    }, "undefined")
  });
}
;// CONCATENATED MODULE: ./components/navbar.tsx










const NavBar = [{
  title: '介绍',
  link: '/guides/getting-started',
  pathname: 'guides'
}, {
  title: '组件',
  link: '/components/button',
  pathname: 'components'
}];

const NavLink = ({
  col = false
}) => {
  const {
    pathname
  } = (0,router_.useRouter)();
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: NavBar.map(nav => /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: nav.link,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        className: external_classnames_default()('no-underline text-sm font-medium whitespace-nowrap hidden md:inline-block', pathname.indexOf(nav.pathname) > -1 ? 'text-emerald-500' : 'text-current', col ? 'mt-4' : 'mr-4'),
        children: nav.title
      })
    }, nav.title))
  });
};

const AsideNav = () => {
  const {
    menu
  } = useMenuContext();
  (0,external_react_.useEffect)(() => {
    if (menu) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [menu]);
  return /*#__PURE__*/jsx_runtime_.jsx("aside", {
    className: external_classnames_default()('fixed h-screen bg-white dark:bg-dark w-full md:w-64 p-4 md:sticky z-20', menu ? '' : 'hidden'),
    style: {
      top: '4rem',
      height: 'calc(100vh - 4rem)'
    },
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "w-full h-full flex-col flex pb-40 overflow-y-auto border-gray-200 sidebar dark:border-gray-900 md:pb-16 md:hidden",
      children: /*#__PURE__*/jsx_runtime_.jsx(NavLink, {
        col: true
      })
    })
  });
};

function Navbar() {
  const {
    menu,
    setMenu
  } = useMenuContext();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
      className: "navbar flex items-center bg-white z-20 sticky top-0 left-0 right-0 h-16 px-6 dark:bg-dark dark:border-gray-900 bg-opacity-[.97] z-50 dark:bg-opacity-70",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "flex items-center w-full mr-2",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "inline-flex items-center text-current no-underline hover:opacity-75",
            children: /*#__PURE__*/jsx_runtime_.jsx(Logo, {
              className: "text-slate-50"
            })
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(NavLink, {}), /*#__PURE__*/jsx_runtime_.jsx(ThemeSwitch, {}), /*#__PURE__*/jsx_runtime_.jsx("button", {
        className: "block p-2 md:hidden",
        onClick: () => setMenu(!menu),
        children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
          fill: "none",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          children: /*#__PURE__*/jsx_runtime_.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M4 6h16M4 12h16M4 18h16"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "-mr-2"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(AsideNav, {})]
  });
}
;// CONCATENATED MODULE: ./components/arrow-right.tsx
const _excluded = ["height"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function ArrowRight(_ref) {
  let {
    height = 24
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/jsx_runtime_.jsx("svg", _objectSpread(_objectSpread({
    height: height,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M9 5l7 7-7 7"
    })
  }));
}
;// CONCATENATED MODULE: ./routes.ts
/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

/* eslint-env node */
const routes = [{
  title: '介绍',
  children: [{
    title: '开始',
    route: '/guides/getting-started'
  }, {
    title: '如何开发',
    route: '/guides/component-guide'
  }]
}, {
  editor: true,
  title: 'Editor',
  children: [{
    title: 'Basic',
    route: '/editor/basic'
  }]
}, {
  components: true,
  title: 'Components',
  children: [{
    title: 'Button 按钮',
    route: '/components/button'
  }, {
    title: 'Input 输入框',
    route: '/components/input'
  }]
}, {
  components: true,
  title: 'Hooks',
  children: [{
    title: 'useClipboard',
    route: '/hooks/use-clipboard'
  }, {
    title: 'useDidMount',
    route: '/hooks/use-did-mount'
  }, {
    title: 'useOnline',
    route: '/hooks/use-online'
  }]
}];
/* harmony default export */ const routes_0 = (routes);
;// CONCATENATED MODULE: ./components/sidebar.tsx









const TreeState = new Map();

const removeSlash = path => {
  if (path) {
    return path.replace(/\/$/, '');
  }

  return path;
};

function activePredicate(item, location) {
  return location && removeSlash(location) === removeSlash(item.route) || !location && item.route === '/';
}

function Folder({
  item,
  activeItemId
}) {
  var _TreeState$item$route;

  const active = activePredicate(item, activeItemId);
  const {
    defaultMenuCollapsed
  } = useMenuContext();
  const open = (_TreeState$item$route = TreeState[item.route]) !== null && _TreeState$item$route !== void 0 ? _TreeState$item$route : !defaultMenuCollapsed;
  const {
    0: _,
    1: render
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    if (active) {
      TreeState[item.route] = true;
    }
  }, [active]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
    className: open ? 'active' : '',
    children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
      onClick: () => {
        if (active) return;
        TreeState[item.route] = !open;
        render(x => !x);
      },
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        className: "flex items-center justify-between gap-2",
        children: [item.title, /*#__PURE__*/jsx_runtime_.jsx(ArrowRight, {
          height: "1em",
          className: external_classnames_default()(open ? 'rotate-90' : '', 'transition-transform')
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      style: {
        display: open ? 'initial' : 'none'
      },
      children: Array.isArray(item.children) && /*#__PURE__*/jsx_runtime_.jsx(Menu, {
        directories: item.children
      })
    })]
  });
}

function File({
  item,
  activeItemId
}) {
  const active = activePredicate(item, activeItemId);
  const title = item.title;
  const {
    setMenu
  } = useMenuContext();
  return /*#__PURE__*/jsx_runtime_.jsx("li", {
    className: active ? 'active' : '',
    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      passHref: true,
      href: item.route,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        onClick: () => setMenu(false),
        children: title
      })
    })
  });
}

function Menu({
  directories
}) {
  const {
    pathname
  } = (0,router_.useRouter)();
  const activeItemId = pathname;
  return /*#__PURE__*/jsx_runtime_.jsx("ul", {
    children: directories.map(item => {
      if (item.name === 'confirm') {
        return null;
      }

      if (item.name === 'terms') {
        return null;
      }

      if (item.name === 'privacy') {
        return null;
      }

      if (item.children) {
        return /*#__PURE__*/jsx_runtime_.jsx(Folder, {
          item: item,
          activeItemId: activeItemId
        }, item.title);
      }

      return /*#__PURE__*/jsx_runtime_.jsx(File, {
        item: item,
        activeItemId: activeItemId
      }, item.title);
    })
  });
}

const Sidebar = ({
  mdShow = true
}) => {
  const {
    0: hasScrolled,
    1: setHasScrolled
  } = (0,external_react_.useState)(false);
  const onScroll = (0,external_react_.useCallback)(() => {
    setHasScrolled(window.pageYOffset > 1);
  }, []);
  (0,external_react_.useEffect)(() => {
    if (false) {}

    return () => {
      if (false) {}
    };
  }, [onScroll]);
  const {
    menu
  } = useMenuContext();
  (0,external_react_.useEffect)(() => {
    if (menu) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [menu]);
  return /*#__PURE__*/jsx_runtime_.jsx("aside", {
    className: external_classnames_default()('fixed h-screen bg-white dark:bg-dark flex-shrink-0 w-full md:w-64 md:sticky z-20', menu ? '' : 'hidden', mdShow ? 'md:block' : ''),
    style: {
      top: hasScrolled ? '4rem' : '6rem',
      height: hasScrolled ? 'calc(100vh - 4rem)' : 'calc(100vh - 6rem)'
    },
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "w-full h-full p-4 pb-40 overflow-y-auto border-gray-200 sidebar dark:border-gray-900 md:pb-16",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "hidden md:block",
        children: /*#__PURE__*/jsx_runtime_.jsx(Menu, {
          directories: routes_0
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "md:hidden",
        children: /*#__PURE__*/jsx_runtime_.jsx(Menu, {
          directories: routes_0
        })
      })]
    })
  });
};

/* harmony default export */ const components_sidebar = (Sidebar);
// EXTERNAL MODULE: ./misc/active-anchor.tsx
var active_anchor = __webpack_require__(5966);
;// CONCATENATED MODULE: ./layouts/page.tsx









function Page(props) {
  const {
    children,
    sidebar,
    frontMatter
  } = props;
  const {
    title,
    description
  } = frontMatter;
  const {
    0: menu,
    1: setMenu
  } = (0,external_react_.useState)(false);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_next_themes_.ThemeProvider, {
    attribute: "class",
    defaultTheme: "light",
    children: [/*#__PURE__*/jsx_runtime_.jsx(Head, {
      title: title,
      description: description
    }), /*#__PURE__*/jsx_runtime_.jsx(MenuContext.Provider, {
      value: {
        menu,
        setMenu
      },
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col lark-container main-container",
        children: [/*#__PURE__*/jsx_runtime_.jsx(Navbar, {}), /*#__PURE__*/jsx_runtime_.jsx(active_anchor/* ActiveAnchor */.qK, {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-1 h-full",
            children: [sidebar && /*#__PURE__*/jsx_runtime_.jsx(components_sidebar, {}), /*#__PURE__*/jsx_runtime_.jsx("article", {
              className: "relative flex w-full max-w-full min-w-0 px-4 pb-16 docs-container md:px-6",
              children: /*#__PURE__*/jsx_runtime_.jsx("main", {
                className: "z-10 w-full max-w-full pt-4 docs-content",
                children: children
              })
            })]
          })
        })]
      })
    })]
  });
}

/***/ }),

/***/ 5966:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hz": () => (/* binding */ useActiveAnchorSet),
/* harmony export */   "qK": () => (/* binding */ ActiveAnchor)
/* harmony export */ });
/* unused harmony export useActiveAnchor */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const ActiveAnchorContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
const ActiveAnchorSetterContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null); // Separate the state as 2 contexts here to avoid
// re-renders of the content triggered by the state update.

const useActiveAnchor = () => useContext(ActiveAnchorContext);
const useActiveAnchorSet = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ActiveAnchorSetterContext);
const ActiveAnchor = ({
  children
}) => {
  const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(ActiveAnchorContext.Provider, {
    value: state[0],
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(ActiveAnchorSetterContext.Provider, {
      value: state[1],
      children: children
    })
  });
};

/***/ }),

/***/ 4625:
/***/ (() => {

/* (ignored) */

/***/ })

};
;