(window.vcvWebpackJsonp4x=window.vcvWebpackJsonp4x||[]).push([[0],{"./node_modules/raw-loader/index.js!./shortcode/editor.css":function(e,t){e.exports=".vce-shortcode {\n  min-height: 1em;\n}\n"},"./shortcode/index.js":function(e,t,s){"use strict";s.r(t);var o=s("./node_modules/vc-cake/index.js"),n=s.n(o),r=s("./node_modules/@babel/runtime/helpers/extends.js"),c=s.n(r),a=s("./node_modules/@babel/runtime/helpers/classCallCheck.js"),i=s.n(a),l=s("./node_modules/@babel/runtime/helpers/createClass.js"),d=s.n(l),u=s("./node_modules/@babel/runtime/helpers/get.js"),p=s.n(u),h=s("./node_modules/@babel/runtime/helpers/inherits.js"),m=s.n(h),v=s("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),f=s.n(v),y=s("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),b=s.n(y),g=s("./node_modules/react/index.js"),j=s.n(g),x=s("./node_modules/lodash/lodash.js"),C=s.n(x);function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,o=b()(e);if(t){var n=b()(this).constructor;s=Reflect.construct(o,arguments,n)}else s=o.apply(this,arguments);return f()(this,s)}}var S=function(e){m()(s,e);var t=_(s);function s(e){var o;return i()(this,s),(o=t.call(this,e)).delayedShortcodeUpdate=C.a.debounce(o.updateShortcodeElement,500),o}return d()(s,[{key:"componentDidMount",value:function(){p()(b()(s.prototype),"updateShortcodeToHtml",this).call(this,this.props.atts.shortcode,this.refs.vcvhelper)}},{key:"updateShortcodeElement",value:function(){p()(b()(s.prototype),"updateShortcodeToHtml",this).call(this,this.props.atts.shortcode,this.refs.vcvhelper)}},{key:"componentDidUpdate",value:function(e){this.props.atts.shortcode!==e.atts.shortcode&&this.delayedShortcodeUpdate()}},{key:"render",value:function(){var e=this.props,t=e.id,s=e.atts,o=e.editor,n=s.shortcode,r=s.customClass,a=s.metaCustomId,i="vce-shortcode",l={};"string"==typeof r&&r&&(i=i.concat(" "+r)),a&&(l.id=a);var d=this.applyDO("all");return j.a.createElement("div",c()({className:i},o,l),j.a.createElement("div",c()({className:"vce-shortcode-wrapper vce",id:"el-"+t},d),j.a.createElement("div",{className:"vcvhelper",ref:"vcvhelper","data-vcvs-html":n})))}}]),s}(n.a.getService("api").elementComponent);(0,n.a.getService("cook").add)(s("./shortcode/settings.json"),(function(e){e.add(S)}),{css:!1,editorCss:s("./node_modules/raw-loader/index.js!./shortcode/editor.css")},"")},"./shortcode/settings.json":function(e){e.exports=JSON.parse('{"shortcode":{"type":"string","access":"public","value":"Insert [shortcode] of any WordPress plugin installed on your website."},"designOptions":{"type":"designOptions","access":"public","value":{},"options":{"label":"Design Options"}},"editFormTab1":{"type":"group","access":"protected","value":["shortcode","metaCustomId","customClass"],"options":{"label":"General"}},"metaEditFormTabs":{"type":"group","access":"protected","value":["editFormTab1","designOptions"]},"relatedTo":{"type":"group","access":"protected","value":["General"]},"customClass":{"type":"string","access":"public","value":"","options":{"label":"Extra class name","description":"Add an extra class name to the element and refer to it from the custom CSS option."}},"assetsLibrary":{"access":"public","type":"string","value":["animate"]},"metaCustomId":{"type":"customId","access":"public","value":"","options":{"label":"Element ID","description":"Apply a unique ID to the element to link it directly by using #your_id (for element ID use lowercase input only)."}},"tag":{"access":"protected","type":"string","value":"shortcode"}}')}},[["./shortcode/index.js"]]]);