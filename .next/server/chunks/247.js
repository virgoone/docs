exports.id = 247;
exports.ids = [247];
exports.modules = {

/***/ 7142:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./button/basic": 1878,
	"./button/basic.jsx": 4439,
	"./button/basic.tsx": 1878,
	"./button/block": 8425,
	"./button/block.jsx": 290,
	"./button/block.tsx": 8425,
	"./button/size": 6710,
	"./button/size.jsx": 6340,
	"./button/size.tsx": 6710,
	"./editor/basic": 8613,
	"./editor/basic.jsx": 4114,
	"./editor/basic.tsx": 8613,
	"./hooks/use-clipboard": 4778,
	"./hooks/use-clipboard.jsx": 8894,
	"./hooks/use-clipboard.tsx": 4778,
	"./hooks/use-didMount": 7641,
	"./hooks/use-didMount.jsx": 6297,
	"./hooks/use-didMount.tsx": 7641,
	"./hooks/use-online": 8591,
	"./hooks/use-online.jsx": 8806,
	"./hooks/use-online.tsx": 8591,
	"./input/basic": 3434,
	"./input/basic.jsx": 8713,
	"./input/basic.tsx": 3434,
	"./input/clearable": 5091,
	"./input/clearable.jsx": 222,
	"./input/clearable.tsx": 5091,
	"./input/enhancer": 1574,
	"./input/enhancer.jsx": 9118,
	"./input/enhancer.tsx": 1574,
	"./input/password": 1652,
	"./input/password.jsx": 4712,
	"./input/password.tsx": 1652,
	"./input/pin-code": 2669,
	"./input/pin-code.jsx": 7837,
	"./input/pin-code.tsx": 2669,
	"./input/size": 1439,
	"./input/size.jsx": 7687,
	"./input/size.tsx": 1439
};


function webpackAsyncContext(req) {
	return webpackAsyncContextResolve(req).then(__webpack_require__);
}
function webpackAsyncContextResolve(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		if(!__webpack_require__.o(map, req)) {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}
		return map[req];
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.resolve = webpackAsyncContextResolve;
webpackAsyncContext.id = 7142;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 1247:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4617);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_codesandboxer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2237);
/* harmony import */ var react_codesandboxer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_codesandboxer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _moss_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3643);
/* harmony import */ var _moss_ui__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_moss_ui__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2243);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }







const index = `
  import React from "react";
  import ReactDOM from "react-dom";
  import { useColorMode, ColorModeProvider } from '@moss/ui'

  import Example from "./example";

  function App() {
    return <Example />;
  }

  const rootElement = document.getElementById("root");
  ReactDOM.render(
    <ColorModeProvider>
      <App />
    </ColorModeProvider>,
    rootElement
  );
`;

const ExampleCard = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "edbfw672"
})( true ? {
  name: "vciyn9",
  styles: "margin:0;box-shadow:none;border:none"
} : 0); // const CodeCard = styled.div`
//   padding: 18px;
//   transition: border-color 0.3s linear;
//   &:hover {
//     border: 1px dashed #3498ff;
//   }
// `


const ExampleButton = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "edbfw671"
})( true ? {
  name: "1jjgn39",
  styles: "display:flex;flex-direction:row;margin-top:10px"
} : 0);

const StyledExample = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "edbfw670"
})( true ? {
  name: "19cdk55",
  styles: ".lark-ui-btn{margin-right:8px;margin-bottom:12px;}.lark-ui-input-wrapper{margin:0 8px 8px 0;.lark-ui-btn{margin:0;}}"
} : 0);

function Source(props) {
  if (!props.children || typeof props.children !== 'string') return null;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("pre", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_code__WEBPACK_IMPORTED_MODULE_3__/* .default */ .ZP, {
      className: `language-${props.language}`,
      language: props.language,
      children: props.children
    })
  });
}

function Example(props) {
  const {
    title,
    desc,
    children,
    expand
  } = props;
  const {
    0: source,
    1: setSource
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const {
    0: focus,
    1: setFocus
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const loadCode = async () => {
      const codeTs = await __webpack_require__(7142)(`./${props.path.replace('.jsx', '.tsx')}`);
      const codeJs = await __webpack_require__(7142)(`./${props.path}`);
      setSource({
        ts: codeTs.default,
        js: codeJs.default
      });

      if (expand) {
        setFocus('jsx');
      }
    };

    loadCode();
  }, []);
  const csProps = {
    name: props.title,
    dependencies: _objectSpread({
      '@moss/ui': '0.1.0',
      react: '17.0.2',
      'react-dom': '17.0.2',
      'react-scripts': '3.0.1'
    }, props.additionalPackages),
    children: () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_moss_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
      type: "secondary",
      children: "Edit on CodeSandbox"
    })
  };

  const onClick = selected => {
    setFocus(selected);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(ExampleCard, {
    children: [title && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h3", {
      children: title
    }), desc && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
      children: desc
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(StyledExample, {
      children: children
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(ExampleButton, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_moss_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
        type: focus === 'jsx' ? 'primary' : 'secondary',
        onClick: () => onClick('jsx'),
        children: "JS"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_moss_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
        type: focus === 'tsx' ? 'primary' : 'secondary',
        onClick: () => onClick('tsx'),
        children: "TS"
      })]
    }), focus && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(Source, {
        language: "jsx",
        children: focus !== 'tsx' ? source === null || source === void 0 ? void 0 : source.js : source === null || source === void 0 ? void 0 : source.ts
      }), focus === 'tsx' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((react_codesandboxer__WEBPACK_IMPORTED_MODULE_2___default()), _objectSpread(_objectSpread({
        examplePath: "/example.tsx",
        example: source === null || source === void 0 ? void 0 : source.ts,
        providedFiles: {
          'index.tsx': {
            content: index
          }
        },
        template: "create-react-app-typescript"
      }, csProps), {}, {
        dependencies: _objectSpread({}, csProps.dependencies)
      }), "tsx") : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((react_codesandboxer__WEBPACK_IMPORTED_MODULE_2___default()), _objectSpread({
        examplePath: "/example.jsx",
        example: source === null || source === void 0 ? void 0 : source.js,
        providedFiles: {
          'index.jsx': {
            content: index
          }
        },
        template: "create-react-app"
      }, csProps), "jsx")]
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Example);

/***/ }),

/***/ 4439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react'\nimport { Button } from '@moss/ui'\n\nconst Basic = () => (\n  <div>\n    <Button type=\"primary\" onClick={() => alert('thank you 🙂')}>\n      Primary\n    </Button>\n    <Button type=\"secondary\" onClick={() => alert('thank you 🙂')}>\n      Secondary\n    </Button>\n    <Button type=\"danger\" onClick={() => alert('thank you 🙂')}>\n      Danger\n    </Button>\n    <Button type=\"info\" onClick={() => alert('thank you 🙂')}>\n      Info\n    </Button>\n    <Button type=\"minimal\" onClick={() => alert('thank you 🙂')}>\n      Minimal\n    </Button>\n  </div>\n)\n\n/* eslint-disable react/display-name */\nexport default Basic\n");

/***/ }),

/***/ 1878:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react'\nimport { Button } from '@moss/ui'\n\nconst Basic = () => (\n  <div>\n    <Button type=\"primary\" onClick={() => alert('thank you 🙂')}>\n      Primary\n    </Button>\n    <Button type=\"secondary\" onClick={() => alert('thank you 🙂')}>\n      Secondary\n    </Button>\n    <Button type=\"danger\" onClick={() => alert('thank you 🙂')}>\n      Danger\n    </Button>\n    <Button type=\"info\" onClick={() => alert('thank you 🙂')}>\n      Info\n    </Button>\n    <Button type=\"minimal\" onClick={() => alert('thank you 🙂')}>\n      Minimal\n    </Button>\n  </div>\n)\n\nexport default Basic\n");

/***/ }),

/***/ 290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react'\nimport { Button } from '@moss/ui'\n\nconst Block = () => <div>\n  <Button type=\"primary\" onClick={() => alert('thank you 🙂')}>\n    Primary\n  </Button>\n  <Button type=\"secondary\" onClick={() => alert('thank you 🙂')}>\n    Secondary\n  </Button>\n  <Button type=\"danger\" onClick={() => alert('thank you 🙂')}>\n    Danger\n  </Button>\n  <Button type=\"info\" onClick={() => alert('thank you 🙂')}>\n    Info\n  </Button>\n  <Button type=\"minimal\" onClick={() => alert('thank you 🙂')}>\n    Minimal\n  </Button>\n</div>;\n\n/* eslint-disable react/display-name */\nexport default Block;\n");

/***/ }),

/***/ 8425:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react'\nimport { Button } from '@moss/ui'\n\nconst Block = () => (\n  <div>\n    <Button type=\"primary\" block onClick={() => alert('thank you 🙂')}>\n      Primary\n    </Button>\n    <Button type=\"secondary\" block onClick={() => alert('thank you 🙂')}>\n      Secondary\n    </Button>\n    <Button type=\"danger\" block onClick={() => alert('thank you 🙂')}>\n      Danger\n    </Button>\n    <Button type=\"info\" block onClick={() => alert('thank you 🙂')}>\n      Info\n    </Button>\n    <Button type=\"minimal\" block onClick={() => alert('thank you 🙂')}>\n      Minimal\n    </Button>\n  </div>\n)\n\nexport default Block\n");

/***/ }),

/***/ 6340:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React, { useState } from 'react'\nimport { Button } from '@moss/ui'\n\n/* eslint-disable react/display-name */\nexport default () => {\n  const [size, setSize] = useState('md')\n  return (\n    <>\n      <div>\n        <Button type=\"secondary\" size={size} onClick={() => setSize('lg')}>\n          Large\n        </Button>\n        <Button type=\"secondary\" size={size} onClick={() => setSize('md')}>\n          Default\n        </Button>\n        <Button type=\"secondary\" size={size} onClick={() => setSize('sm')}>\n          Small\n        </Button>\n        <Button type=\"secondary\" size={size} onClick={() => setSize('xs')}>\n          xSmall\n        </Button>\n      </div>\n      <div>\n        <Button\n          type=\"primary\"\n          size={size}\n          onClick={() => alert('thank you 🙂')}\n        >\n          Primary\n        </Button>\n        <Button\n          type=\"secondary\"\n          size={size}\n          onClick={() => alert('thank you 🙂')}\n        >\n          Secondary\n        </Button>\n        <Button type=\"danger\" size={size} onClick={() => alert('thank you 🙂')}>\n          Danger\n        </Button>\n        <Button type=\"info\" size={size} onClick={() => alert('thank you 🙂')}>\n          Info\n        </Button>\n        <Button\n          type=\"minimal\"\n          size={size}\n          onClick={() => alert('thank you 🙂')}\n        >\n          Minimal\n        </Button>\n      </div>\n    </>\n  )\n}\n");

/***/ }),

/***/ 6710:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React, { useState } from 'react'\nimport { Button } from '@moss/ui'\n\nexport default function ButtonExample() {\n  const [size, setSize] = useState<'xs' | 'lg' | 'sm' | 'md'>('lg')\n  return (\n    <>\n      <div>\n        <Button type=\"secondary\" size={size} onClick={() => setSize('lg')}>\n          Large\n        </Button>\n        <Button type=\"secondary\" size={size} onClick={() => setSize('md')}>\n          Default\n        </Button>\n        <Button type=\"secondary\" size={size} onClick={() => setSize('sm')}>\n          Small\n        </Button>\n        <Button type=\"secondary\" size={size} onClick={() => setSize('xs')}>\n          xSmall\n        </Button>\n      </div>\n      <div>\n        <Button\n          type=\"primary\"\n          size={size}\n          onClick={() => alert('thank you 🙂')}\n        >\n          Primary\n        </Button>\n        <Button\n          type=\"secondary\"\n          size={size}\n          onClick={() => alert('thank you 🙂')}\n        >\n          Secondary\n        </Button>\n        <Button type=\"danger\" size={size} onClick={() => alert('thank you 🙂')}>\n          Danger\n        </Button>\n        <Button type=\"info\" size={size} onClick={() => alert('thank you 🙂')}>\n          Info\n        </Button>\n        <Button\n          type=\"minimal\"\n          size={size}\n          onClick={() => alert('thank you 🙂')}\n        >\n          Minimal\n        </Button>\n      </div>\n    </>\n  )\n}\n");

/***/ }),

/***/ 4114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React, { useState } from 'react'\nimport { Editor } from '@moss/editor'\n\nconst initialValue = [\n  {\n    type: 'paragraph',\n    children: [\n      { text: 'This is editable ' },\n      { text: 'rich', bold: true },\n      { text: ' text, ' },\n      { text: 'much', italic: true },\n      { text: ' better than a ' },\n      { text: '<textarea>', code: true },\n      { text: '!' },\n    ],\n  },\n  {\n    type: 'paragraph',\n    children: [\n      {\n        text:\n          \"Since it's rich text, you can do things like turn a selection of text \",\n      },\n      { text: 'bold', bold: true },\n      {\n        text:\n          ', or add a semantically rendered block quote in the middle of the page, like this:',\n      },\n    ],\n  },\n  {\n    type: 'block-quote',\n    children: [{ text: 'A wise quote.' }],\n  },\n  {\n    type: 'paragraph',\n    children: [{ text: 'Try it out for yourself!' }],\n  },\n]\n\nconst Basic = () => {\n  const [value, setValue] = useState(initialValue)\n  return (\n    <div>\n      <Editor value={value} onChange={value => setValue(value)} />\n    </div>\n  )\n};\n\n/* eslint-disable react/display-name */\nexport default Basic;\n");

/***/ }),

/***/ 8613:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React, { useState } from 'react'\nimport { Editor } from '@moss/editor'\n\nconst initialValue = [\n  {\n    type: 'paragraph',\n    children: [\n      { text: 'This is editable ' },\n      { text: 'rich', bold: true },\n      { text: ' text, ' },\n      { text: 'much', italic: true },\n      { text: ' better than a ' },\n      { text: '<textarea>', code: true },\n      { text: '!' },\n    ],\n  },\n  {\n    type: 'paragraph',\n    children: [\n      {\n        text: \"Since it's rich text, you can do things like turn a selection of text \",\n      },\n      { text: 'bold', bold: true },\n      {\n        text: ', or add a semantically rendered block quote in the middle of the page, like this:',\n      },\n    ],\n  },\n  {\n    type: 'block-quote',\n    children: [{ text: 'A wise quote.' }],\n  },\n  {\n    type: 'paragraph',\n    children: [{ text: 'Try it out for yourself!' }],\n  },\n]\n\nconst Basic = () => {\n  const [value, setValue] = useState(initialValue)\n\n  return (\n    <div>\n      <Editor value={value} onChange={(value) => setValue(value)} />\n    </div>\n  )\n}\n\nexport default Basic\n");

/***/ }),

/***/ 8894:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React, { useState } from 'react'\nimport { useClipboard } from '@moss/hooks'\nimport { Input, Button } from '@moss/ui'\n\nconst Example = () => {\n  const [value, setValue] = useState('Hello world')\n  const { onCopy, hasCopied } = useClipboard(value)\n\n  return (\n    <div>\n      <Input\n        value={value}\n        placeholder=\"Welcome\"\n        onChange={(e) => setValue(e.target.value)}\n      />\n      <Button onClick={onCopy}>{hasCopied ? 'Copied' : 'Copy'}</Button>\n    </div>\n  )\n}\n\n/* eslint-disable react/display-name */\nexport default Example\n");

/***/ }),

/***/ 4778:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React, { useState } from 'react'\nimport { useClipboard } from '@moss/hooks'\nimport { Input, Button } from '@moss/ui'\n\nconst Example = () => {\n  const [value, setValue] = useState<string>('Hello world')\n  const { onCopy, hasCopied } = useClipboard(value)\n\n  return (\n    <div>\n      <Input\n        value={value}\n        placeholder=\"Welcome\"\n        onChange={(e) => setValue(e.target.value)}\n      />\n      <Button onClick={onCopy}>{hasCopied ? 'Copied' : 'Copy'}</Button>\n    </div>\n  )\n}\n\n/* eslint-disable react/display-name */\nexport default Example\n");

/***/ }),

/***/ 6297:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React, { useState } from 'react'\nimport { useDidMount } from '@moss/hooks'\n\nconst Example = () => {\n  const [mounted, setMounted] = useState(false)\n  useDidMount(() => {\n    setMounted(true)\n  })\n  return (\n    <div style={{ backgroundColor: 'lightblue', padding: '10px' }}>\n      mounted: {mounted ? 'true' : 'false'}\n    </div>\n  )\n}\n\n/* eslint-disable react/display-name */\nexport default Example\n");

/***/ }),

/***/ 7641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React, { useState } from 'react'\nimport { useDidMount } from '@moss/hooks'\n\nconst Example = () => {\n  const [mounted, setMounted] = useState<boolean>(false)\n  useDidMount(() => {\n    setMounted(true)\n  })\n  return (\n    <div style={{ backgroundColor: 'lightblue', padding: '10px' }}>\n      mounted: {mounted ? 'true' : 'false'}\n    </div>\n  )\n}\n\n/* eslint-disable react/display-name */\nexport default Example\n");

/***/ }),

/***/ 8806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react'\nimport { useOnline } from '@moss/hooks'\n\nconst Example = () => {\n  const online = useOnline()\n  return (\n    <div style={{ backgroundColor: 'lightblue', padding: '10px' }}>\n      Status:You are {online ? 'Online' : 'Offline'}\n    </div>\n  )\n}\n\n/* eslint-disable react/display-name */\nexport default Example\n");

/***/ }),

/***/ 8591:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react'\nimport { useOnline } from '@moss/hooks'\n\nconst Example = () => {\n  const online = useOnline()\n  return (\n    <div style={{ backgroundColor: 'lightblue', padding: '10px' }}>\n      Status:You are {online ? 'Online' : 'Offline'}\n    </div>\n  )\n}\n\n/* eslint-disable react/display-name */\nexport default Example\n");

/***/ }),

/***/ 8713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react'\nimport { Input } from '@moss/ui'\n\nconst Basic = () => <div>\n  <Input placeholder=\"basic input...\" />\n</div>;\n\n/* eslint-disable react/display-name */\nexport default Basic;\n");

/***/ }),

/***/ 3434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react'\nimport { Input } from '@moss/ui'\n\nconst Basic = () => (\n  <div>\n    <Input placeholder=\"basic input...\" />\n  </div>\n)\n\nexport default Basic\n");

/***/ }),

/***/ 222:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react'\nimport { Input } from '@moss/ui'\n\nconst Clearable = () => <div>\n  <Input size=\"default\" allowClear placeholder=\"allow clear input...\" />\n</div>;\n\n/* eslint-disable react/display-name */\nexport default Clearable;\n");

/***/ }),

/***/ 5091:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react'\nimport { Input } from '@moss/ui'\n\nconst Clearable = () => (\n  <div>\n    <Input size=\"default\" allowClear placeholder=\"allow clear input...\" />\n  </div>\n)\n\nexport default Clearable\n");

/***/ }),

/***/ 9118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react'\nimport { Input } from '@moss/ui'\n\nconst Enhancer = () => <div>\n  <Input startEnhancer=\"$\" size=\"default\" placeholder=\"start enhancer...\" />\n  <Input endEnhancer=\".00\" size=\"default\" placeholder=\"end enhancer...\" />\n  <Input\n    startEnhancer=\"$\"\n    endEnhancer=\".00\"\n    size=\"default\"\n    placeholder=\"enhancer...\"\n  />\n</div>;\n\n/* eslint-disable react/display-name */\nexport default Enhancer;\n");

/***/ }),

/***/ 1574:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react'\nimport { Input } from '@moss/ui'\n\nconst Enhancer = () => (\n  <div>\n    <Input startEnhancer=\"$\" size=\"default\" placeholder=\"start enhancer...\" />\n    <Input endEnhancer=\".00\" size=\"default\" placeholder=\"end enhancer...\" />\n    <Input\n      startEnhancer=\"$\"\n      endEnhancer=\".00\"\n      size=\"default\"\n      placeholder=\"enhancer...\"\n    />\n  </div>\n)\n\nexport default Enhancer\n");

/***/ }),

/***/ 4712:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react'\nimport { Input } from '@moss/ui'\n\nconst Password = () => {\n  return (\n    <div>\n      <Input.Password size=\"default\" placeholder=\"password input...\" />\n    </div>\n  )\n};\n\n/* eslint-disable react/display-name */\nexport default Password;\n");

/***/ }),

/***/ 1652:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react'\nimport { Input } from '@moss/ui'\n\nconst Password = () => {\n  return (\n    <div>\n      <Input.Password size=\"default\" placeholder=\"password input...\" />\n    </div>\n  )\n}\n\nexport default Password\n");

/***/ }),

/***/ 7837:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react'\nimport { Input } from '@moss/ui'\n\nconst PinCode = () => {\n  const [values, setValues] = React.useState(['', '', '', ''])\n  return (\n    <div>\n      <Input.PinCode\n        size=\"default\"\n        values={values}\n        onChange={({ values }) => setValues(values)}\n      />\n    </div>\n  )\n};\n\n/* eslint-disable react/display-name */\nexport default PinCode;\n");

/***/ }),

/***/ 2669:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react'\nimport { Input } from '@moss/ui'\n\nconst PinCode = () => {\n  const [values, setValues] = React.useState(['', '', '', ''])\n  return (\n    <div>\n      <Input.PinCode\n        size=\"large\"\n        values={values}\n        onChange={({ values }) => setValues(values)}\n      />\n    </div>\n  )\n}\n\nexport default PinCode\n");

/***/ }),

/***/ 7687:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react'\nimport { Input } from '@moss/ui'\n\nconst Size = () => (\n  <div>\n    <Input size=\"xs\" placeholder=\"xSmall input...\" />\n    <Input size=\"sm\" placeholder=\"small input...\" />\n    <Input size=\"md\" placeholder=\"default input...\" />\n    <Input size=\"lg\" placeholder=\"large input...\" />\n  </div>\n)\n\n/* eslint-disable react/display-name */\nexport default Size\n");

/***/ }),

/***/ 1439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react'\nimport { Input } from '@moss/ui'\n\nconst Size = () => (\n  <div>\n    <Input size=\"xs\" placeholder=\"xSmall input...\" />\n    <Input size=\"sm\" placeholder=\"small input...\" />\n    <Input size=\"md\" placeholder=\"default input...\" />\n    <Input size=\"lg\" placeholder=\"large input...\" />\n  </div>\n)\n\n/* eslint-disable react/display-name */\nexport default Size\n");

/***/ })

};
;