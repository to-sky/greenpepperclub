(window["vcvWebpackJsonp4x"] = window["vcvWebpackJsonp4x"] || []).push([[1],{

/***/ "./node_modules/raw-loader/index.js!./zigZagSeparator/cssMixins/color.pcss":
/***/ (function(module, exports) {

eval("module.exports = \".vce-zig-zag-separator--color-$selector {\\n  .vce-zig-zag-separator--style-zigzag-path {\\n    @if $color != false {\\n      stroke: $color;\\n    }\\n  }\\n}\"\n\n//# sourceURL=webpack:///./zigZagSeparator/cssMixins/color.pcss?./node_modules/raw-loader");

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./zigZagSeparator/cssMixins/width.pcss":
/***/ (function(module, exports) {

eval("module.exports = \".vce-zig-zag-separator--width-$selector {\\n  width: $(width)%;\\n}\"\n\n//# sourceURL=webpack:///./zigZagSeparator/cssMixins/width.pcss?./node_modules/raw-loader");

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./zigZagSeparator/editor.css":
/***/ (function(module, exports) {

eval("module.exports = \".vce-zig-zag-separator-container {\\n  min-height: 1em;\\n}\\n\"\n\n//# sourceURL=webpack:///./zigZagSeparator/editor.css?./node_modules/raw-loader");

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./zigZagSeparator/styles.css":
/***/ (function(module, exports) {

eval("module.exports = \".vce-zig-zag-separator {\\n  display: inline-block;\\n  vertical-align: middle;\\n  position: relative;\\n  transition: width 0.3s ease;\\n  height: 8px;\\n  box-sizing: content-box;\\n}\\n\\n.vce-zig-zag-separator--size-8 {\\n  height: 8px;\\n}\\n\\n.vce-zig-zag-separator--size-10 {\\n  height: 10px;\\n}\\n\\n.vce-zig-zag-separator--size-12 {\\n  height: 12px;\\n}\\n\\n.vce-zig-zag-separator--size-14 {\\n  height: 14px;\\n}\\n\\n.vce-zig-zag-separator--align-left {\\n  text-align: left;\\n}\\n\\n.vce-zig-zag-separator--align-center {\\n  text-align: center;\\n}\\n\\n.vce-zig-zag-separator--align-right {\\n  text-align: right;\\n}\\n\\n.vce-zig-zag-separator--style-zigzag-vector {\\n  width: 100%;\\n  height: inherit;\\n  vertical-align: top;\\n}\\n\\n.vce-zig-zag-separator--style-zigzag-rect {\\n  width: 100%;\\n  height: 100%;\\n}\\n\\n.vce-zig-zag-separator--style-zigzag-path {\\n  transition: stroke 0.3s ease;\\n}\"\n\n//# sourceURL=webpack:///./zigZagSeparator/styles.css?./node_modules/raw-loader");

/***/ }),

/***/ "./zigZagSeparator/component.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends2 = __webpack_require__(\"./node_modules/babel-runtime/helpers/extends.js\");\n\nvar _extends3 = _interopRequireDefault(_extends2);\n\nvar _getPrototypeOf = __webpack_require__(\"./node_modules/babel-runtime/core-js/object/get-prototype-of.js\");\n\nvar _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);\n\nvar _classCallCheck2 = __webpack_require__(\"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(\"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(\"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(\"./node_modules/babel-runtime/helpers/inherits.js\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _react = __webpack_require__(\"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _vcCake = __webpack_require__(\"./node_modules/vc-cake/index.js\");\n\nvar _vcCake2 = _interopRequireDefault(_vcCake);\n\nvar _classnames = __webpack_require__(\"./node_modules/classnames/index.js\");\n\nvar _classnames2 = _interopRequireDefault(_classnames);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar vcvAPI = _vcCake2.default.getService('api');\n\nvar ZigZagSeparator = function (_vcvAPI$elementCompon) {\n  (0, _inherits3.default)(ZigZagSeparator, _vcvAPI$elementCompon);\n\n  function ZigZagSeparator() {\n    (0, _classCallCheck3.default)(this, ZigZagSeparator);\n    return (0, _possibleConstructorReturn3.default)(this, (ZigZagSeparator.__proto__ || (0, _getPrototypeOf2.default)(ZigZagSeparator)).apply(this, arguments));\n  }\n\n  (0, _createClass3.default)(ZigZagSeparator, [{\n    key: 'render',\n    value: function render() {\n      var _props = this.props,\n          id = _props.id,\n          atts = _props.atts,\n          editor = _props.editor;\n      var alignment = atts.alignment,\n          customClass = atts.customClass,\n          metaCustomId = atts.metaCustomId,\n          size = atts.size;\n\n      var customProps = {};\n\n      var containerClasses = ['vce', 'vce-zig-zag-separator-container'];\n      var classes = ['vce-zig-zag-separator'];\n\n      if (typeof customClass === 'string' && customClass) {\n        containerClasses.push(customClass);\n      }\n\n      if (alignment) {\n        containerClasses.push('vce-zig-zag-separator--align-' + alignment);\n      }\n\n      if (size) {\n        classes.push('vce-zig-zag-separator--size-' + size);\n      }\n\n      var mixinData = this.getMixinData('color');\n\n      if (mixinData) {\n        classes.push('vce-zig-zag-separator--color-' + mixinData.selector);\n      }\n\n      mixinData = this.getMixinData('width');\n\n      if (mixinData) {\n        classes.push('vce-zig-zag-separator--width-' + mixinData.selector);\n      }\n\n      if (metaCustomId) {\n        customProps.id = metaCustomId;\n      }\n\n      classes = (0, _classnames2.default)(classes);\n      containerClasses = (0, _classnames2.default)(containerClasses);\n\n      var doMargin = this.applyDO('margin');\n      var doRest = this.applyDO('border padding background animation');\n\n      var ratio = parseInt(size) / 10;\n      var svgPath = 'M-1 ' + Math.round(8 * ratio) + ', ' + Math.round(6 * ratio) + ' ' + Math.round(2 * ratio) + ', ' + (parseInt(size) + 1) + ' ' + Math.round(8 * ratio);\n      // let svgPath = 'M-1 8, 6 2, 11 8'\n\n      return _react2.default.createElement(\n        'div',\n        (0, _extends3.default)({ className: containerClasses }, editor, { id: 'el-' + id }, doMargin),\n        _react2.default.createElement(\n          'div',\n          (0, _extends3.default)({ className: classes }, customProps, doRest),\n          _react2.default.createElement(\n            'svg',\n            { className: 'vce-zig-zag-separator--style-zigzag-vector' },\n            _react2.default.createElement(\n              'defs',\n              null,\n              _react2.default.createElement(\n                'pattern',\n                {\n                  id: 'zigzag-' + id,\n                  x: '0',\n                  y: '0',\n                  width: size,\n                  height: size,\n                  patternUnits: 'userSpaceOnUse'\n                },\n                _react2.default.createElement('path', {\n                  className: 'vce-zig-zag-separator--style-zigzag-path',\n                  d: svgPath,\n                  fill: 'transparent',\n                  strokeWidth: '2'\n                })\n              )\n            ),\n            _react2.default.createElement('rect', {\n              className: 'vce-zig-zag-separator--style-zigzag-rect',\n              width: '100%',\n              height: '100%',\n              x: '0',\n              y: '0',\n              fill: 'url(#zigzag-' + id + ')'\n            })\n          )\n        )\n      );\n    }\n  }]);\n  return ZigZagSeparator;\n}(vcvAPI.elementComponent);\n\nexports.default = ZigZagSeparator;\n\n//# sourceURL=webpack:///./zigZagSeparator/component.js?");

/***/ }),

/***/ "./zigZagSeparator/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _vcCake = __webpack_require__(\"./node_modules/vc-cake/index.js\");\n\nvar _vcCake2 = _interopRequireDefault(_vcCake);\n\nvar _component = __webpack_require__(\"./zigZagSeparator/component.js\");\n\nvar _component2 = _interopRequireDefault(_component);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar vcvAddElement = _vcCake2.default.getService('cook').add;\n\nvcvAddElement(__webpack_require__(\"./zigZagSeparator/settings.json\"),\n// Component callback\nfunction (component) {\n  component.add(_component2.default);\n},\n// css settings // css for element\n{\n  'css': __webpack_require__(\"./node_modules/raw-loader/index.js!./zigZagSeparator/styles.css\"),\n  'editorCss': __webpack_require__(\"./node_modules/raw-loader/index.js!./zigZagSeparator/editor.css\"),\n  'mixins': {\n    'color': {\n      'mixin': __webpack_require__(\"./node_modules/raw-loader/index.js!./zigZagSeparator/cssMixins/color.pcss\")\n    },\n    'width': {\n      'mixin': __webpack_require__(\"./node_modules/raw-loader/index.js!./zigZagSeparator/cssMixins/width.pcss\")\n    }\n  }\n}, '');\n\n//# sourceURL=webpack:///./zigZagSeparator/index.js?");

/***/ }),

/***/ "./zigZagSeparator/settings.json":
/***/ (function(module) {

eval("module.exports = {\"groups\":{\"type\":\"string\",\"access\":\"protected\",\"value\":\"Separators\"},\"color\":{\"type\":\"color\",\"access\":\"public\",\"value\":\"#5149E2\",\"options\":{\"label\":\"Separator color\",\"cssMixin\":{\"mixin\":\"color\",\"property\":\"color\",\"namePattern\":\"[\\\\da-f]+\"}}},\"alignment\":{\"type\":\"buttonGroup\",\"access\":\"public\",\"value\":\"center\",\"options\":{\"label\":\"Alignment\",\"values\":[{\"label\":\"Left\",\"value\":\"left\",\"icon\":\"vcv-ui-icon-attribute-alignment-left\"},{\"label\":\"Center\",\"value\":\"center\",\"icon\":\"vcv-ui-icon-attribute-alignment-center\"},{\"label\":\"Right\",\"value\":\"right\",\"icon\":\"vcv-ui-icon-attribute-alignment-right\"}]}},\"width\":{\"type\":\"range\",\"access\":\"public\",\"value\":\"60\",\"options\":{\"label\":\"Separator width\",\"description\":\"Enter separator width in percents (Example: 60).\",\"cssMixin\":{\"mixin\":\"width\",\"property\":\"width\",\"namePattern\":\"[\\\\da-f]+\"},\"min\":1,\"max\":100,\"measurement\":\"%\"}},\"size\":{\"type\":\"buttonGroup\",\"access\":\"public\",\"value\":\"10\",\"options\":{\"label\":\"Size\",\"values\":[{\"label\":\"Small\",\"value\":\"8\",\"text\":\"S\"},{\"label\":\"Medium\",\"value\":\"10\",\"text\":\"M\"},{\"label\":\"Large\",\"value\":\"12\",\"text\":\"L\"},{\"label\":\"Extra Large\",\"value\":\"14\",\"text\":\"XL\"}]}},\"customClass\":{\"type\":\"string\",\"access\":\"public\",\"value\":\"\",\"options\":{\"label\":\"Extra class name\",\"description\":\"Add an extra class name to the element and refer to it from Custom CSS option.\"}},\"designOptions\":{\"type\":\"designOptions\",\"access\":\"public\",\"value\":{},\"options\":{\"label\":\"Design Options\"}},\"editFormTab1\":{\"type\":\"group\",\"access\":\"protected\",\"value\":[\"color\",\"alignment\",\"width\",\"size\",\"metaCustomId\",\"customClass\"],\"options\":{\"label\":\"General\"}},\"metaEditFormTabs\":{\"type\":\"group\",\"access\":\"protected\",\"value\":[\"editFormTab1\",\"designOptions\"]},\"relatedTo\":{\"type\":\"group\",\"access\":\"protected\",\"value\":[\"General\"]},\"metaBackendLabels\":{\"type\":\"group\",\"access\":\"protected\",\"value\":[{\"value\":[\"color\"]}]},\"metaCustomId\":{\"type\":\"customId\",\"access\":\"public\",\"value\":\"\",\"options\":{\"label\":\"Element ID\",\"description\":\"Apply unique Id to element to link directly to it by using #your_id (for element id use lowercase input only).\"}},\"tag\":{\"access\":\"protected\",\"type\":\"string\",\"value\":\"zigZagSeparator\"}};\n\n//# sourceURL=webpack:///./zigZagSeparator/settings.json?");

/***/ })

},[['./zigZagSeparator/index.js']]]);