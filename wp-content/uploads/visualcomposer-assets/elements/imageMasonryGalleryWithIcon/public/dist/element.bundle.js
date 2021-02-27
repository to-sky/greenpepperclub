(window["vcvWebpackJsonp4x"] = window["vcvWebpackJsonp4x"] || []).push([[0],{

/***/ "./imageMasonryGalleryWithIcon/component.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends2 = __webpack_require__(\"./node_modules/babel-runtime/helpers/extends.js\");\n\nvar _extends3 = _interopRequireDefault(_extends2);\n\nvar _getPrototypeOf = __webpack_require__(\"./node_modules/babel-runtime/core-js/object/get-prototype-of.js\");\n\nvar _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);\n\nvar _classCallCheck2 = __webpack_require__(\"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(\"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(\"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(\"./node_modules/babel-runtime/helpers/inherits.js\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _react = __webpack_require__(\"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _vcCake = __webpack_require__(\"./node_modules/vc-cake/index.js\");\n\nvar _vcCake2 = _interopRequireDefault(_vcCake);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar vcvAPI = _vcCake2.default.getService('api');\nvar Cook = _vcCake2.default.getService('cook');\n\nvar MasonryImageGalleryWithIcons = function (_vcvAPI$elementCompon) {\n  (0, _inherits3.default)(MasonryImageGalleryWithIcons, _vcvAPI$elementCompon);\n\n  function MasonryImageGalleryWithIcons(props) {\n    (0, _classCallCheck3.default)(this, MasonryImageGalleryWithIcons);\n\n    var _this = (0, _possibleConstructorReturn3.default)(this, (MasonryImageGalleryWithIcons.__proto__ || (0, _getPrototypeOf2.default)(MasonryImageGalleryWithIcons)).call(this, props));\n\n    _this.currentImg = 0;\n    _this.loadingIndex = 0;\n    _this.data = [];\n\n    _this.loadImage = _this.loadImage.bind(_this);\n    return _this;\n  }\n\n  (0, _createClass3.default)(MasonryImageGalleryWithIcons, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this.prepareImages(this.props.atts);\n    }\n  }, {\n    key: 'componentDidUpdate',\n    value: function componentDidUpdate() {\n      _vcCake2.default.env('iframe') && _vcCake2.default.env('iframe').vcv.trigger('ready');\n    }\n  }, {\n    key: 'componentWillReceiveProps',\n    value: function componentWillReceiveProps(nextProps) {\n      this.currentImg = 0;\n      this.data = [];\n      this.loadingIndex++;\n      this.prepareImages(nextProps.atts, true);\n    }\n  }, {\n    key: 'prepareImages',\n    value: function prepareImages(atts) {\n      var clearColumns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n      var image = atts.image;\n\n      var imgSources = this.getImageUrl(image);\n      var columnCount = atts.columns <= 0 ? 1 : atts.columns;\n      var cols = [];\n      for (var i = 0; i < columnCount; i++) {\n        cols.push(0);\n        this.data.push([]);\n      }\n\n      if (clearColumns) {\n        cols = [];\n        for (var _i = 0; _i < columnCount; _i++) {\n          cols.push(0);\n        }\n      }\n      this.loadImage(imgSources, cols);\n    }\n  }, {\n    key: 'loadImage',\n    value: function loadImage(imgSources, cols) {\n      if (!imgSources.length) {\n        this.setState({\n          columnData: this.data\n        });\n        return;\n      }\n      var img = new window.Image();\n      img.loadingIndex = this.loadingIndex;\n      img.onload = this.imgLoadHandler.bind(this, imgSources, cols, img);\n      img.src = imgSources[this.currentImg];\n    }\n  }, {\n    key: 'imgLoadHandler',\n    value: function imgLoadHandler(imgSources, cols, img) {\n      if (img.loadingIndex === this.loadingIndex) {\n        var height = this.getImageHeight(img.width, img.height);\n        var smallestCol = this.getSmallestFromArray(cols);\n        cols[smallestCol] += height;\n        this.data[smallestCol].push(this.props.atts.image[this.currentImg]);\n        this.currentImg++;\n        if (this.currentImg < imgSources.length) {\n          this.loadImage(imgSources, cols);\n        } else {\n          this.setState({\n            columnData: this.data\n          });\n        }\n      }\n    }\n  }, {\n    key: 'getImageHeight',\n    value: function getImageHeight(width, height) {\n      var newWidth = 50;\n      var proportion = width / newWidth;\n      return height / proportion;\n    }\n  }, {\n    key: 'getSmallestFromArray',\n    value: function getSmallestFromArray(arr) {\n      var smallestIndex = 0;\n      var smallest = arr[0];\n      arr.forEach(function (height, index) {\n        if (height < smallest) {\n          smallest = arr[index];\n          smallestIndex = index;\n        }\n      });\n      return smallestIndex;\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      var _props = this.props,\n          id = _props.id,\n          atts = _props.atts,\n          editor = _props.editor;\n      var image = atts.image,\n          shape = atts.shape,\n          customClass = atts.customClass,\n          metaCustomId = atts.metaCustomId,\n          clickableOptions = atts.clickableOptions,\n          showCaption = atts.showCaption,\n          icon = atts.icon;\n\n      var containerClasses = ['vce-masonry-image-gallery-with-icon'];\n      var wrapperClasses = ['vce-masonry-image-gallery-with-icon-wrapper vce'];\n      var containerProps = {};\n\n      var CustomTag = 'div';\n      var columnData = this.state && this.state.columnData;\n      var columnHtml = [];\n      var iconElement = Cook.get(icon);\n      var iconOutput = iconElement ? iconElement.render(null, false) : null;\n      if (columnData) {\n        var imageIndex = 0;\n        columnData.forEach(function (col, colIndex) {\n          var galleryItems = [];\n          col && col.forEach(function (src, index) {\n            var imgSrc = _this2.getImageUrl(src);\n            var customProps = {};\n            var classes = 'vce-masonry-image-gallery-with-icon-item-inner';\n            var imgClasses = 'vce-masonry-image-gallery-with-icon-img';\n            var customImageProps = {\n              'alt': src && src.alt ? src.alt : ''\n            };\n\n            if (clickableOptions === 'url' && src.link && src.link.url) {\n              CustomTag = 'a';\n              var _src$link = src.link,\n                  url = _src$link.url,\n                  title = _src$link.title,\n                  targetBlank = _src$link.targetBlank,\n                  relNofollow = _src$link.relNofollow;\n\n              customProps = {\n                'href': url,\n                'title': title,\n                'target': targetBlank ? '_blank' : undefined,\n                'rel': relNofollow ? 'nofollow' : undefined\n              };\n            } else if (clickableOptions === 'imageNewTab') {\n              CustomTag = 'a';\n              customProps = {\n                'href': imgSrc,\n                'target': '_blank'\n              };\n            } else if (clickableOptions === 'lightbox') {\n              CustomTag = 'a';\n              customProps = {\n                'href': imgSrc,\n                'data-lightbox': 'lightbox-' + id\n              };\n            } else if (clickableOptions === 'photoswipe') {\n              CustomTag = 'a';\n              customProps = {\n                'href': imgSrc,\n                'data-photoswipe-image': id,\n                'data-photoswipe-index': imageIndex,\n                'data-photoswipe-item': 'photoswipe-' + id\n              };\n              if (showCaption && src && src.caption) {\n                customProps['data-photoswipe-caption'] = src.caption;\n              }\n              containerProps['data-photoswipe-gallery'] = id;\n              imageIndex++;\n            }\n\n            if (image[index].filter && image[index].filter !== 'normal') {\n              imgClasses += ' vce-image-filter--' + image[index].filter;\n            }\n\n            galleryItems.push(_react2.default.createElement(\n              'div',\n              { className: 'vce-masonry-image-gallery-with-icon-item', key: 'vce-masonry-image-gallery-with-icon-item-' + index + '-' + id },\n              _react2.default.createElement(\n                'div',\n                { className: 'vce-masonry-image-gallery-with-icon-item-inner-wrapper' },\n                _react2.default.createElement(\n                  CustomTag,\n                  (0, _extends3.default)({}, customProps, { className: classes }),\n                  _react2.default.createElement(\n                    'div',\n                    { className: 'vce-masonry-image-gallery-with-icon-with-icon-hover' },\n                    iconOutput\n                  ),\n                  _react2.default.createElement('img', (0, _extends3.default)({ className: imgClasses, src: _this2.getImageUrl(src) }, customImageProps))\n                )\n              )\n            ));\n          });\n          columnHtml.push(_react2.default.createElement(\n            'div',\n            { className: 'vce-masonry-image-gallery-with-icon-column', key: 'vce-masonry-image-gallery-with-icon-col-' + colIndex + '-' + id },\n            galleryItems\n          ));\n        });\n      }\n\n      if (typeof customClass === 'string' && customClass) {\n        containerClasses.push(customClass);\n      }\n\n      var mixinData = this.getMixinData('imageGalleryGap');\n      if (mixinData) {\n        wrapperClasses.push('vce-masonry-image-gallery-with-icon--gap-' + mixinData.selector);\n      }\n\n      mixinData = this.getMixinData('imageGalleryColumns');\n      if (mixinData) {\n        wrapperClasses.push('vce-masonry-image-gallery-with-icon--columns-' + mixinData.selector);\n      }\n\n      if (shape === 'rounded') {\n        containerClasses.push('vce-masonry-image-gallery-with-icon--border-rounded');\n      }\n\n      if (metaCustomId) {\n        containerProps.id = metaCustomId;\n      }\n\n      var doAll = this.applyDO('all');\n\n      return _react2.default.createElement(\n        'div',\n        (0, _extends3.default)({ className: containerClasses.join(' ') }, editor, containerProps),\n        _react2.default.createElement(\n          'div',\n          (0, _extends3.default)({ className: wrapperClasses.join(' '), id: 'el-' + id }, doAll),\n          _react2.default.createElement(\n            'div',\n            { className: 'vce-masonry-image-gallery-with-icon-list' },\n            columnHtml\n          )\n        )\n      );\n    }\n  }]);\n  return MasonryImageGalleryWithIcons;\n}(vcvAPI.elementComponent);\n\nexports.default = MasonryImageGalleryWithIcons;\n\n//# sourceURL=webpack:///./imageMasonryGalleryWithIcon/component.js?");

/***/ }),

/***/ "./imageMasonryGalleryWithIcon/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _vcCake = __webpack_require__(\"./node_modules/vc-cake/index.js\");\n\nvar _vcCake2 = _interopRequireDefault(_vcCake);\n\nvar _component = __webpack_require__(\"./imageMasonryGalleryWithIcon/component.js\");\n\nvar _component2 = _interopRequireDefault(_component);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/* eslint-disable import/no-webpack-loader-syntax */\nvar vcvAddElement = _vcCake2.default.getService('cook').add;\n\nvcvAddElement(__webpack_require__(\"./imageMasonryGalleryWithIcon/settings.json\"),\n// Component callback\nfunction (component) {\n  component.add(_component2.default);\n},\n// css settings // css for element\n{\n  'css': __webpack_require__(\"./node_modules/raw-loader/index.js!./imageMasonryGalleryWithIcon/styles.css\"),\n  'editorCss': __webpack_require__(\"./node_modules/raw-loader/index.js!./imageMasonryGalleryWithIcon/editor.css\"),\n  'mixins': {\n    'imageGalleryColumns': {\n      'mixin': __webpack_require__(\"./node_modules/raw-loader/index.js!./imageMasonryGalleryWithIcon/cssMixins/imageGalleryColumns.pcss\")\n    },\n    'imageGalleryGap': {\n      'mixin': __webpack_require__(\"./node_modules/raw-loader/index.js!./imageMasonryGalleryWithIcon/cssMixins/imageGalleryGap.pcss\")\n    }\n  }\n}, '');\n\n//# sourceURL=webpack:///./imageMasonryGalleryWithIcon/index.js?");

/***/ }),

/***/ "./imageMasonryGalleryWithIcon/settings.json":
/***/ (function(module) {

eval("module.exports = {\"image\":{\"type\":\"attachimage\",\"access\":\"public\",\"value\":[\"masonry-icon-01.jpg\",\"masonry-icon-02.jpg\",\"masonry-icon-03.jpg\"],\"options\":{\"label\":\"Images\",\"multiple\":true,\"onChange\":{\"rules\":{\"clickableOptions\":{\"rule\":\"value\",\"options\":{\"value\":\"url\"}}},\"actions\":[{\"action\":\"attachImageUrls\"}]},\"url\":false,\"imageFilter\":true}},\"shape\":{\"type\":\"buttonGroup\",\"access\":\"public\",\"value\":\"square\",\"options\":{\"label\":\"Shape\",\"values\":[{\"label\":\"Square\",\"value\":\"square\",\"icon\":\"vcv-ui-icon-attribute-shape-square\"},{\"label\":\"Rounded\",\"value\":\"rounded\",\"icon\":\"vcv-ui-icon-attribute-shape-rounded\"}]}},\"designOptions\":{\"type\":\"designOptions\",\"access\":\"public\",\"value\":{},\"options\":{\"label\":\"Design Options\"}},\"editFormTab1\":{\"type\":\"group\",\"access\":\"protected\",\"value\":[\"clickableOptions\",\"showCaption\",\"image\",\"columns\",\"gap\",\"shape\",\"metaCustomId\",\"customClass\"],\"options\":{\"label\":\"General\"}},\"metaEditFormTabs\":{\"type\":\"group\",\"access\":\"protected\",\"value\":[\"editFormTab1\",\"icon\",\"designOptions\"]},\"relatedTo\":{\"type\":\"group\",\"access\":\"protected\",\"value\":[\"General\"]},\"customClass\":{\"type\":\"string\",\"access\":\"public\",\"value\":\"\",\"options\":{\"label\":\"Extra class name\",\"description\":\"Add an extra class name to the element and refer to it from Custom CSS option.\"}},\"clickableOptions\":{\"type\":\"dropdown\",\"access\":\"public\",\"value\":\"lightbox\",\"options\":{\"label\":\"OnClick action\",\"values\":[{\"label\":\"None\",\"value\":\"\"},{\"label\":\"Lightbox\",\"value\":\"lightbox\"},{\"label\":\"PhotoSwipe\",\"value\":\"photoswipe\"},{\"label\":\"Open Image in New Tab\",\"value\":\"imageNewTab\"},{\"label\":\"Link selector\",\"value\":\"url\"}]}},\"showCaption\":{\"type\":\"toggle\",\"access\":\"public\",\"value\":false,\"options\":{\"label\":\"Show image caption in gallery view\",\"onChange\":{\"rules\":{\"clickableOptions\":{\"rule\":\"value\",\"options\":{\"value\":\"photoswipe\"}}},\"actions\":[{\"action\":\"toggleVisibility\"}]}}},\"gap\":{\"type\":\"number\",\"access\":\"public\",\"value\":\"10\",\"options\":{\"label\":\"Gap\",\"description\":\"Enter gap in pixels (Example: 5).\",\"min\":0,\"cssMixin\":{\"mixin\":\"imageGalleryGap\",\"property\":\"gap\",\"namePattern\":\"[\\\\da-f]+\"}}},\"columns\":{\"type\":\"number\",\"access\":\"public\",\"value\":\"3\",\"options\":{\"label\":\"Number of Columns\",\"min\":1,\"cssMixin\":{\"mixin\":\"imageGalleryColumns\",\"property\":\"columns\",\"namePattern\":\"[\\\\da-f]+\"}}},\"icon\":{\"type\":\"element\",\"access\":\"public\",\"value\":{\"tag\":\"icon\",\"iconPicker\":{\"icon\":\"vcv-ui-icon-material vcv-ui-icon-material-search\",\"iconSet\":\"material\"},\"iconAlignment\":\"center\",\"iconColor\":\"#fff\",\"shape\":\"filled-circle\",\"shapeColor\":\"#f2b454\",\"size\":\"tiny\"},\"options\":{\"category\":\"Icon\",\"tabLabel\":\"Image view icon\",\"exclude\":[\"iconUrl\"]}},\"metaCustomId\":{\"type\":\"customId\",\"access\":\"public\",\"value\":\"\",\"options\":{\"label\":\"Element ID\",\"description\":\"Apply unique ID to element to link directly to it by using #your_id (for element ID use lowercase input only).\"}},\"tag\":{\"access\":\"protected\",\"type\":\"string\",\"value\":\"imageMasonryGalleryWithIcon\"},\"sharedAssetsLibrary\":{\"access\":\"protected\",\"type\":\"string\",\"value\":{\"libraries\":[{\"rules\":{\"clickableOptions\":{\"rule\":\"value\",\"options\":{\"value\":\"lightbox\"}}},\"libsNames\":[\"lightbox\"]},{\"rules\":{\"clickableOptions\":{\"rule\":\"value\",\"options\":{\"value\":\"photoswipe\"}}},\"libsNames\":[\"photoswipe\"]}]}}};\n\n//# sourceURL=webpack:///./imageMasonryGalleryWithIcon/settings.json?");

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./imageMasonryGalleryWithIcon/cssMixins/imageGalleryColumns.pcss":
/***/ (function(module, exports) {

eval("module.exports = \"@media (min-width: 544px) {\\n  .vce-masonry-image-gallery-with-icon {\\n\\t&--columns-$selector {\\n\\t  .vce-masonry-image-gallery-with-icon-column {\\n\\t    @if $columns != false {\\n\\t      flex: 0 0 calc(100% / $columns);\\n\\t      max-width: calc(100% / $columns);\\n\\t    }\\n\\t  }\\n\\t}\\n  }\\n}\\n\\n\"\n\n//# sourceURL=webpack:///./imageMasonryGalleryWithIcon/cssMixins/imageGalleryColumns.pcss?./node_modules/raw-loader");

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./imageMasonryGalleryWithIcon/cssMixins/imageGalleryGap.pcss":
/***/ (function(module, exports) {

eval("module.exports = \".vce-masonry-image-gallery-with-icon {\\n  &--gap-$selector {\\n    .vce-masonry-image-gallery-with-icon-list {\\n      @if $gap != false {\\n        margin-left: calc(-$(gap)px / 2);\\n        margin-right: calc(-$(gap)px / 2);\\n        margin-bottom: -$(gap)px;\\n      }\\n    }\\n    .vce-masonry-image-gallery-with-icon-item {\\n      @if $gap != false {\\n        padding-left: calc($(gap)px / 2);\\n        padding-right: calc($(gap)px / 2);\\n        margin-bottom: $(gap)px;\\n      }\\n    }\\n  }\\n}\\n\"\n\n//# sourceURL=webpack:///./imageMasonryGalleryWithIcon/cssMixins/imageGalleryGap.pcss?./node_modules/raw-loader");

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./imageMasonryGalleryWithIcon/editor.css":
/***/ (function(module, exports) {

eval("module.exports = \".vce-masonry-image-gallery-with-icon {\\n  min-height: 1em;\\n}\\n\"\n\n//# sourceURL=webpack:///./imageMasonryGalleryWithIcon/editor.css?./node_modules/raw-loader");

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./imageMasonryGalleryWithIcon/styles.css":
/***/ (function(module, exports) {

eval("module.exports = \".vce-masonry-image-gallery-with-icon-wrapper {\\n  overflow: hidden;\\n}\\n\\n.vce-masonry-image-gallery-with-icon-list {\\n  display: -ms-flexbox;\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: flex-start;\\n  align-items: stretch;\\n  align-content: flex-start;\\n  flex-wrap: wrap;\\n}\\n\\n.vce-masonry-image-gallery-with-icon-column {\\n  display: block;\\n  flex: 0 0 100%;\\n  max-width: 100%;\\n}\\n\\n.vce-masonry-image-gallery-with-icon-item-inner-wrapper {\\n  overflow: hidden\\n}\\n\\n.vce-masonry-image-gallery-with-icon-item-inner {\\n  position: relative;\\n  display: block;\\n}\\n\\n.vce-masonry-image-gallery-with-icon-with-icon-hover {\\n  position: absolute;\\n  top: 50%;\\n  left: 10%;\\n  width: 80%;\\n  transform: translateY(-50%);\\n  z-index: 2;\\n  opacity: 0;\\n  transition: opacity 0.2s ease;\\n}\\n\\n.vce-masonry-image-gallery-with-icon-with-icon-hover .vce {\\n  margin: 0;\\n}\\n\\n.vce-masonry-image-gallery-with-icon-item-inner:hover .vce-masonry-image-gallery-with-icon-with-icon-hover {\\n  opacity: 1;\\n}\\n\\n.vce-masonry-image-gallery-with-icon-item-inner img.vce-masonry-image-gallery-with-icon-img {\\n  width: 100%;\\n  height: auto;\\n}\\n\\n.vce-masonry-image-gallery-with-icon-item-inner img.vce-masonry-image-gallery-with-icon-img--orientation-portrait {\\n  width: 101%;\\n  height: auto;\\n}\\n\\na.vce-masonry-image-gallery-with-icon-item-inner {\\n  color: transparent;\\n  border-bottom: 0;\\n  text-decoration: none;\\n}\\n\\n.vce-masonry-image-gallery-with-icon--border-rounded .vce-masonry-image-gallery-with-icon-item-inner {\\n  border-radius: 5px;\\n  overflow: hidden;\\n}\\n\\n.vce-masonry-image-gallery-with-icon--border-round .vce-masonry-image-gallery-with-icon-item-inner {\\n  border-radius: 50%;\\n  overflow: hidden;\\n}\\n\"\n\n//# sourceURL=webpack:///./imageMasonryGalleryWithIcon/styles.css?./node_modules/raw-loader");

/***/ })

},[['./imageMasonryGalleryWithIcon/index.js']]]);