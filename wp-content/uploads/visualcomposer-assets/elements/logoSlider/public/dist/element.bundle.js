(window.vcvWebpackJsonp4x=window.vcvWebpackJsonp4x||[]).push([[0],{"./logoSlider/index.js":function(e,t,o){"use strict";o.r(t);var n=o("./node_modules/vc-cake/index.js"),r=o.n(n),l=o("./node_modules/@babel/runtime/helpers/extends.js"),i=o.n(l),s=o("./node_modules/@babel/runtime/helpers/classCallCheck.js"),a=o.n(s),c=o("./node_modules/@babel/runtime/helpers/createClass.js"),u=o.n(c),d=o("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),p=o.n(d),h=o("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),f=o.n(h),m=o("./node_modules/@babel/runtime/helpers/inherits.js"),v=o.n(m),g=o("./node_modules/react/index.js"),y=o.n(g),w=o("./node_modules/react-dom/server.browser.js"),b=function(e){function t(){return a()(this,t),p()(this,f()(t).apply(this,arguments))}return v()(t,e),u()(t,[{key:"render",value:function(){var e=this,t=this.props,o=t.id,n=t.atts,r=t.editor,l=n.images,s=n.customSlidesToShow,a=n.devices,c=n.slidesToShow,u=n.slidesToShowxl,d=n.slidesToShowlg,p=n.slidesToShowmd,h=n.slidesToShowsm,f=n.slidesToShowxs,m=n.arrows,v=n.autoplay,g=n.autoplayDelay,b=n.loop,x=n.metaCustomId,k=n.customClass,S="vce-logo-slider vce",C={};k&&(S+=" ".concat(k));var F={"data-slick-autoplay":v?"on":"off","data-slick-autoplay-delay":g*=1e3,"data-slick-arrows":m?"on":"off","data-slick-infinite":b?"on":"off"};s&&(F["data-slick-slides-to-show"]="all"===a?c:"".concat(u," ").concat(d," ").concat(p," ").concat(h," ").concat(f)),m&&(S+=" vce-logo-slider--has-arrows"),x&&(C.id=x);var E=l.map(function(t,n){var r={},l="div",s=e.getImageUrl(t);if(t.link&&t.link.url){l="a";var a=t.link;r={href:a.url,title:a.title,target:a.targetBlank?"_blank":void 0,rel:a.relNofollow?"nofollow":void 0}}return y.a.createElement("div",{className:"vce-logo-slider-item vc-slick-item",key:"vce-logo-slider-item-".concat(n,"-").concat(o)},y.a.createElement(l,i()({},r,{className:"vce-logo-slider-item-inner"}),y.a.createElement("img",{className:"vce-logo-slider-img",src:s,alt:t&&t.alt||""})))}),I=this.applyDO("all"),T="",D="";if(m){var _="vce-logo-slider-arrow",N=this.getMixinData("arrowColor");N&&(_+=" vce-logo-slider-arrows-color--".concat(N.selector)),(N=this.getMixinData("arrowColorHover"))&&(_+=" vce-logo-slider-arrows-color-hover--".concat(N.selector)),T=y.a.createElement("div",{className:"".concat(_," vce-logo-slider-prev-arrow")},y.a.createElement("svg",{width:"16px",height:"25px",viewBox:"0 0 16 25"},y.a.createElement("polygon",{id:"Prev-Arrow",points:"12.3743687 5.68434189e-14 0 12.3743687 12.0208153 24.395184 14.1421356 22.2738636 4.31790889 12.4496369 14.5709572 2.19658855"}))),D=y.a.createElement("div",{className:"".concat(_," vce-logo-slider-next-arrow")},y.a.createElement("svg",{width:"16px",height:"25px",viewBox:"0 0 16 25"},y.a.createElement("polygon",{id:"Next-Arrow",points:"3.02081528 24.395184 15.395184 12.0208153 3.37436867 1.13686838e-13 1.25304833 2.12132034 11.0772751 11.9455471 0.824226734 22.1985954"})))}var M=y.a.createElement("div",i()({className:"vce-logo-slider-list"},F),T,y.a.createElement("div",{className:"slick-list"},y.a.createElement("div",{className:"slick-track"},E)),D),j=Object(w.renderToString)(M);return y.a.createElement("div",i()({className:S},r,{id:"el-"+o},I),y.a.createElement("div",i()({className:"vce-logo-slider-inner"},C),y.a.createElement("div",{className:"vcvhelper","data-vcvs-html":j},y.a.createElement("div",i()({className:"vce-logo-slider-list"},F),T,y.a.createElement("div",{className:"slick-list"},y.a.createElement("div",{className:"slick-track"},E)),D))))}}]),t}(r.a.getService("api").elementComponent);(0,r.a.getService("cook").add)(o("./logoSlider/settings.json"),function(e){e.add(b)},{css:o("./node_modules/raw-loader/index.js!./logoSlider/styles.css"),editorCss:o("./node_modules/raw-loader/index.js!./logoSlider/editor.css"),mixins:{arrowColor:{mixin:o("./node_modules/raw-loader/index.js!./logoSlider/cssMixins/arrowColor.pcss")},arrowColorHover:{mixin:o("./node_modules/raw-loader/index.js!./logoSlider/cssMixins/arrowColorHover.pcss")}}},"")},"./logoSlider/settings.json":function(e){e.exports={images:{type:"attachimage",access:"public",value:["logo-01.png","logo-02.png","logo-03.png","logo-04.png","logo-05.png","logo-03.png"],options:{label:"Images",multiple:!0,url:!0,imageFilter:!1}},customSlidesToShow:{type:"toggle",access:"public",value:!1,options:{label:"Custom image number per slide",description:"Set custom image number per slide depending on sliders width."}},devices:{type:"dropdown",access:"public",value:"all",options:{label:"Slider width for slides to show",values:[{label:"All",value:"all"},{label:"Custom",value:"custom"}],onChange:{rules:{customSlidesToShow:{rule:"toggle"}},actions:[{action:"toggleVisibility"}]}}},slidesToShow:{type:"number",access:"public",value:"5",options:{min:"1",label:"Image number per slide",onChange:{rules:{devices:{rule:"value",options:{value:"all"}},customSlidesToShow:{rule:"toggle"}},actions:[{action:"toggleVisibility"}]}}},slidesToShowxl:{type:"inputIcon",access:"public",value:"5",options:{min:"1",label:"Image number per slide (extra large)",iconClasses:"vcv-ui-icon vcv-ui-icon-desktop",inputType:"number",onChange:{rules:{devices:{rule:"value",options:{value:"custom"}},customSlidesToShow:{rule:"toggle"}},actions:[{action:"toggleVisibility"}]}}},slidesToShowlg:{type:"inputIcon",access:"public",value:"4",options:{min:"1",label:"Image number per slide (large)",iconClasses:"vcv-ui-icon vcv-ui-icon-tablet-landscape",inputType:"number",onChange:{rules:{devices:{rule:"value",options:{value:"custom"}},customSlidesToShow:{rule:"toggle"}},actions:[{action:"toggleVisibility"}]}}},slidesToShowmd:{type:"inputIcon",access:"public",value:"3",options:{min:"1",label:"Image number per slide (medium)",iconClasses:"vcv-ui-icon vcv-ui-icon-tablet-portrait",inputType:"number",onChange:{rules:{devices:{rule:"value",options:{value:"custom"}},customSlidesToShow:{rule:"toggle"}},actions:[{action:"toggleVisibility"}]}}},slidesToShowsm:{type:"inputIcon",access:"public",value:"2",options:{min:"1",label:"Image number per slide (small)",iconClasses:"vcv-ui-icon vcv-ui-icon-mobile-landscape",inputType:"number",onChange:{rules:{devices:{rule:"value",options:{value:"custom"}},customSlidesToShow:{rule:"toggle"}},actions:[{action:"toggleVisibility"}]}}},slidesToShowxs:{type:"inputIcon",access:"public",value:"1",options:{min:"1",label:"Image number per slide (extra small)",iconClasses:"vcv-ui-icon vcv-ui-icon-mobile-portrait",inputType:"number",onChange:{rules:{devices:{rule:"value",options:{value:"custom"}},customSlidesToShow:{rule:"toggle"}},actions:[{action:"toggleVisibility"}]}}},arrows:{type:"toggle",access:"public",value:!0,options:{label:"Show arrows"}},arrowColor:{type:"color",access:"public",value:"#D8D8D8",options:{label:"Arrow color",cssMixin:{mixin:"arrowColor",property:"color",namePattern:"[\\da-f]+"},onChange:{rules:{arrows:{rule:"toggle"}},actions:[{action:"toggleVisibility"}]}}},arrowColorHover:{type:"color",access:"public",value:"#B5B5B5",options:{label:"Arrow hover color",cssMixin:{mixin:"arrowColorHover",property:"color",namePattern:"[\\da-f]+"},onChange:{rules:{arrows:{rule:"toggle"}},actions:[{action:"toggleVisibility"}]}}},autoplay:{type:"toggle",access:"public",value:!0,options:{label:"Autoplay"}},autoplayDelay:{type:"number",access:"public",value:"5",options:{min:"0",label:"Autoplay Delay in seconds",onChange:{rules:{autoplay:{rule:"toggle"}},actions:[{action:"toggleVisibility"}]}}},loop:{type:"toggle",access:"public",value:!0,options:{label:"Infinite loop"}},designOptions:{type:"designOptions",access:"public",value:{},options:{label:"Design Options"}},editFormTab1:{type:"group",access:"protected",value:["images","customSlidesToShow","devices","slidesToShow","slidesToShowxl","slidesToShowlg","slidesToShowmd","slidesToShowsm","slidesToShowxs","columnCount","arrows","arrowColor","arrowColorHover","autoplay","autoplayDelay","loop","metaCustomId","customClass"],options:{label:"General"}},metaEditFormTabs:{type:"group",access:"protected",value:["editFormTab1","designOptions"]},relatedTo:{type:"group",access:"protected",value:["General"]},customClass:{type:"string",access:"public",value:"",options:{label:"Extra class name",description:"Add an extra class name to the element and refer to it from Custom CSS option."}},metaCustomId:{type:"customId",access:"public",value:"",options:{label:"Element ID",description:"Apply unique Id to element to link directly to it by using #your_id (for element id use lowercase input only)."}},tag:{access:"protected",type:"string",value:"logoSlider"},sharedAssetsLibrary:{access:"protected",type:"string",value:{libraries:[{libsNames:["slickSlider"]}]}},metaPublicJs:{access:"protected",type:"string",value:{libraries:[{libPaths:["public/dist/logoSlider.min.js"]}]}}}},"./node_modules/raw-loader/index.js!./logoSlider/cssMixins/arrowColor.pcss":function(e,t){e.exports=".vce-logo-slider {\n  &-arrows-color--$selector {\n    svg polygon {\n       fill: $color;\n    }\n\n    &.slick-disabled:hover {\n      svg polygon {\n        fill: $color;\n      }\n    }\n  }\n}"},"./node_modules/raw-loader/index.js!./logoSlider/cssMixins/arrowColorHover.pcss":function(e,t){e.exports=".vce-logo-slider {\n  &-arrows-color-hover--$selector {\n    &:hover svg polygon {\n      @if $color != false {\n        fill: $color;\n      }\n    }\n  }\n}"},"./node_modules/raw-loader/index.js!./logoSlider/editor.css":function(e,t){e.exports=".vce-logo-slider {\n  min-height: 1em;\n}"},"./node_modules/raw-loader/index.js!./logoSlider/styles.css":function(e,t){e.exports=".vce-logo-slider {\n  max-width: 100%;\n  overflow: hidden;\n  direction: ltr;\n}\n\n.vce-logo-slider-list {\n  position: relative;\n}\n\n.vce-logo-slider .slick-list {\n  position: relative;\n  display: block;\n  overflow: hidden;\n  margin: 0;\n  padding: 0;\n}\n\n.vce-logo-slider.vce-logo-slider--has-arrows .slick-list {\n  margin-left: 25px;\n  margin-right: 25px;\n}\n\n.vce-logo-slider-arrow {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 25px;\n  cursor: pointer;\n}\n\n.vce-logo-slider-arrow.slick-disabled {\n  cursor: not-allowed;\n}\n\n.vce-logo-slider-arrow svg {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n}\n\n.vce-logo-slider-arrow svg polygon {\n  transition: fill .2s;\n}\n\n.vce-logo-slider-next-arrow {\n  right: 0;\n}\n\n.vce-logo-slider-left-arrow {\n  left: 0;\n}\n\n.vce-logo-slider-item {\n  position: relative;\n  min-height: 1px;\n  float: left;\n  backface-visibility: hidden;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.vce-logo-slider .vce-logo-slider-list *:focus {\n  outline: none;\n}\n\n.vce-logo-slider .vce-logo-slider-item-inner {\n  display: block;\n  padding: 0 10px;\n  text-align: center;\n  text-decoration: none;\n  border: 0;\n  box-shadow: none;\n}\n\n.vce-logo-slider .vce-logo-slider-item-inner:hover,\n.vce-logo-slider .vce-logo-slider-item-inner:focus {\n  text-decoration: none;\n  border: 0;\n  box-shadow: none;\n  outline: none;\n}\n\n.vce-logo-slider .vce-logo-slider-img {\n  display: inline-block;\n}\n\n.vce-logo-slider .vce-logo-slider-item-inner img.vce-logo-slider-img {\n  box-shadow: none;\n}\n\n.vce-logo-slider .slick-slider .slick-track,\n.vce-logo-slider .slick-slider .slick-list {\n  -webkit-transform: translate3d(0, 0, 0);\n  -moz-transform: translate3d(0, 0, 0);\n  -ms-transform: translate3d(0, 0, 0);\n  -o-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n}\n\n.vce-logo-slider .slick-track {\n  position: relative;\n  top: 0;\n  left: 0;\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  align-items: center;\n}\n\n.vce-logo-slider .slick-track:before,\n.vce-logo-slider .slick-track:after {\n  display: table;\n  content: '';\n}\n.vce-logo-slider .slick-track:after {\n  clear: both;\n}\n\n.vce-logo-slider .slick-loading .slick-track {\n  visibility: hidden;\n}\n\n.vce-logo-slider .slick-slide {\n  display: none;\n}\n\n.vce-logo-slider .slick-initialized .slick-slide {\n  display: block;\n}\n\n.vce-logo-slider .slick-loading .slick-slide {\n  visibility: hidden;\n}\n\n.vce-logo-slider .slick-arrow.slick-hidden {\n  display: none;\n}\n"},"./node_modules/react-dom/cjs/react-dom-server.browser.production.min.js":function(e,t,o){"use strict";
/** @license React v16.8.4
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=o("./node_modules/object-assign/index.js"),r=o("./node_modules/react/index.js");function l(e){for(var t=arguments.length-1,o="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=0;n<t;n++)o+="&args[]="+encodeURIComponent(arguments[n+1]);!function(e,t,o,n,r,l,i,s){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var a=[o,n,r,l,i,s],c=0;(e=Error(t.replace(/%s/g,function(){return a[c++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",o)}var i="function"==typeof Symbol&&Symbol.for,s=i?Symbol.for("react.portal"):60106,a=i?Symbol.for("react.fragment"):60107,c=i?Symbol.for("react.strict_mode"):60108,u=i?Symbol.for("react.profiler"):60114,d=i?Symbol.for("react.provider"):60109,p=i?Symbol.for("react.context"):60110,h=i?Symbol.for("react.concurrent_mode"):60111,f=i?Symbol.for("react.forward_ref"):60112,m=i?Symbol.for("react.suspense"):60113,v=i?Symbol.for("react.memo"):60115,g=i?Symbol.for("react.lazy"):60116;function y(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case h:return"ConcurrentMode";case a:return"Fragment";case s:return"Portal";case u:return"Profiler";case c:return"StrictMode";case m:return"Suspense"}if("object"==typeof e)switch(e.$$typeof){case p:return"Context.Consumer";case d:return"Context.Provider";case f:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(""!==t?"ForwardRef("+t+")":"ForwardRef");case v:return y(e.type);case g:if(e=1===e._status?e._result:null)return y(e)}return null}var w=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;w.hasOwnProperty("ReactCurrentDispatcher")||(w.ReactCurrentDispatcher={current:null});var b={};function x(e,t){for(var o=0|e._threadCount;o<=t;o++)e[o]=e._currentValue2,e._threadCount=o+1}for(var k=new Uint16Array(16),S=0;15>S;S++)k[S]=S+1;k[15]=0;var C=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,F=Object.prototype.hasOwnProperty,E={},I={};function T(e){return!!F.call(I,e)||!F.call(E,e)&&(C.test(e)?I[e]=!0:(E[e]=!0,!1))}function D(e,t,o,n){if(null==t||function(e,t,o,n){if(null!==o&&0===o.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!n&&(null!==o?!o.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,o,n))return!0;if(n)return!1;if(null!==o)switch(o.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function _(e,t,o,n,r){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=n,this.attributeNamespace=r,this.mustUseProperty=o,this.propertyName=e,this.type=t}var N={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){N[e]=new _(e,0,!1,e,null)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];N[t]=new _(t,1,!1,e[1],null)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){N[e]=new _(e,2,!1,e.toLowerCase(),null)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){N[e]=new _(e,2,!1,e,null)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){N[e]=new _(e,3,!1,e.toLowerCase(),null)}),["checked","multiple","muted","selected"].forEach(function(e){N[e]=new _(e,3,!0,e,null)}),["capture","download"].forEach(function(e){N[e]=new _(e,4,!1,e,null)}),["cols","rows","size","span"].forEach(function(e){N[e]=new _(e,6,!1,e,null)}),["rowSpan","start"].forEach(function(e){N[e]=new _(e,5,!1,e.toLowerCase(),null)});var M=/[\-:]([a-z])/g;function j(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(M,j);N[t]=new _(t,1,!1,e,null)}),"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(M,j);N[t]=new _(t,1,!1,e,"http://www.w3.org/1999/xlink")}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(M,j);N[t]=new _(t,1,!1,e,"http://www.w3.org/XML/1998/namespace")}),["tabIndex","crossOrigin"].forEach(function(e){N[e]=new _(e,1,!1,e.toLowerCase(),null)});var O=/["'&<>]/;function P(e){if("boolean"==typeof e||"number"==typeof e)return""+e;e=""+e;var t=O.exec(e);if(t){var o,n="",r=0;for(o=t.index;o<e.length;o++){switch(e.charCodeAt(o)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#x27;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}r!==o&&(n+=e.substring(r,o)),r=o+1,n+=t}e=r!==o?n+e.substring(r,o):n}return e}var V=null,A=null,z=null,L=!1,R=!1,W=null,H=0;function $(){return null===V&&l("307"),V}function U(){return 0<H&&l("312"),{memoizedState:null,queue:null,next:null}}function q(){return null===z?null===A?(L=!1,A=z=U()):(L=!0,z=A):null===z.next?(L=!1,z=z.next=U()):(L=!0,z=z.next),z}function B(e,t,o,n){for(;R;)R=!1,H+=1,z=null,o=e(t,n);return A=V=null,H=0,z=W=null,o}function G(e,t){return"function"==typeof t?t(e):t}function Z(e,t,o){if(V=$(),z=q(),L){var n=z.queue;if(t=n.dispatch,null!==W&&void 0!==(o=W.get(n))){W.delete(n),n=z.memoizedState;do{n=e(n,o.action),o=o.next}while(null!==o);return z.memoizedState=n,[n,t]}return[z.memoizedState,t]}return e=e===G?"function"==typeof t?t():t:void 0!==o?o(t):t,z.memoizedState=e,e=(e=z.queue={last:null,dispatch:null}).dispatch=function(e,t,o){if(25>H||l("301"),e===V)if(R=!0,e={action:o,next:null},null===W&&(W=new Map),void 0===(o=W.get(t)))W.set(t,e);else{for(t=o;null!==t.next;)t=t.next;t.next=e}}.bind(null,V,e),[z.memoizedState,e]}function J(){}var X=0,Y={readContext:function(e){var t=X;return x(e,t),e[t]},useContext:function(e){$();var t=X;return x(e,t),e[t]},useMemo:function(e,t){if(V=$(),t=void 0===t?null:t,null!==(z=q())){var o=z.memoizedState;if(null!==o&&null!==t){e:{var n=o[1];if(null===n)n=!1;else{for(var r=0;r<n.length&&r<t.length;r++){var l=t[r],i=n[r];if((l!==i||0===l&&1/l!=1/i)&&(l==l||i==i)){n=!1;break e}}n=!0}}if(n)return o[0]}}return e=e(),z.memoizedState=[e,t],e},useReducer:Z,useRef:function(e){V=$();var t=(z=q()).memoizedState;return null===t?(e={current:e},z.memoizedState=e):t},useState:function(e){return Z(G,e)},useLayoutEffect:function(){},useCallback:function(e){return e},useImperativeHandle:J,useEffect:J,useDebugValue:J},K={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function Q(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}var ee={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},te=n({menuitem:!0},ee),oe={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ne=["Webkit","ms","Moz","O"];Object.keys(oe).forEach(function(e){ne.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),oe[t]=oe[e]})});var re=/([A-Z])/g,le=/^ms-/,ie=r.Children.toArray,se=w.ReactCurrentDispatcher,ae={listing:!0,pre:!0,textarea:!0},ce=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,ue={},de={};var pe=Object.prototype.hasOwnProperty,he={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null,suppressHydrationWarning:null};function fe(e,t){void 0===e&&l("152",y(t)||"Component")}function me(e,t,o){function i(r,i){var s=function(e,t,o){var n=e.contextType;if("object"==typeof n&&null!==n)return x(n,o),n[o];if(e=e.contextTypes){for(var r in o={},e)o[r]=t[r];t=o}else t=b;return t}(i,t,o),a=[],c=!1,u={isMounted:function(){return!1},enqueueForceUpdate:function(){if(null===a)return null},enqueueReplaceState:function(e,t){c=!0,a=[t]},enqueueSetState:function(e,t){if(null===a)return null;a.push(t)}},d=void 0;if(i.prototype&&i.prototype.isReactComponent){if(d=new i(r.props,s,u),"function"==typeof i.getDerivedStateFromProps){var p=i.getDerivedStateFromProps.call(null,r.props,d.state);null!=p&&(d.state=n({},d.state,p))}}else if(V={},d=i(r.props,s,u),null==(d=B(i,r.props,d,s))||null==d.render)return void fe(e=d,i);if(d.props=r.props,d.context=s,d.updater=u,void 0===(u=d.state)&&(d.state=u=null),"function"==typeof d.UNSAFE_componentWillMount||"function"==typeof d.componentWillMount)if("function"==typeof d.componentWillMount&&"function"!=typeof i.getDerivedStateFromProps&&d.componentWillMount(),"function"==typeof d.UNSAFE_componentWillMount&&"function"!=typeof i.getDerivedStateFromProps&&d.UNSAFE_componentWillMount(),a.length){u=a;var h=c;if(a=null,c=!1,h&&1===u.length)d.state=u[0];else{p=h?u[0]:d.state;var f=!0;for(h=h?1:0;h<u.length;h++){var m=u[h];null!=(m="function"==typeof m?m.call(d,p,r.props,s):m)&&(f?(f=!1,p=n({},p,m)):n(p,m))}d.state=p}}else a=null;if(fe(e=d.render(),i),r=void 0,"function"==typeof d.getChildContext&&"object"==typeof(s=i.childContextTypes))for(var v in r=d.getChildContext())v in s||l("108",y(i)||"Unknown",v);r&&(t=n({},t,r))}for(;r.isValidElement(e);){var s=e,a=s.type;if("function"!=typeof a)break;i(s,a)}return{child:e,context:t}}var ve=function(){function e(t,o){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function");r.isValidElement(t)?t.type!==a?t=[t]:(t=t.props.children,t=r.isValidElement(t)?[t]:ie(t)):t=ie(t),t={type:null,domNamespace:K.html,children:t,childIndex:0,context:b,footer:""};var n=k[0];if(0===n){var i=k,s=2*(n=i.length);65536>=s||l("304");var c=new Uint16Array(s);for(c.set(i),(k=c)[0]=n+1,i=n;i<s-1;i++)k[i]=i+1;k[s-1]=0}else k[0]=k[n];this.threadID=n,this.stack=[t],this.exhausted=!1,this.currentSelectValue=null,this.previousWasTextNode=!1,this.makeStaticMarkup=o,this.suspenseDepth=0,this.contextIndex=-1,this.contextStack=[],this.contextValueStack=[]}return e.prototype.destroy=function(){if(!this.exhausted){this.exhausted=!0,this.clearProviders();var e=this.threadID;k[e]=k[0],k[0]=e}},e.prototype.pushProvider=function(e){var t=++this.contextIndex,o=e.type._context,n=this.threadID;x(o,n);var r=o[n];this.contextStack[t]=o,this.contextValueStack[t]=r,o[n]=e.props.value},e.prototype.popProvider=function(){var e=this.contextIndex,t=this.contextStack[e],o=this.contextValueStack[e];this.contextStack[e]=null,this.contextValueStack[e]=null,this.contextIndex--,t[this.threadID]=o},e.prototype.clearProviders=function(){for(var e=this.contextIndex;0<=e;e--)this.contextStack[e][this.threadID]=this.contextValueStack[e]},e.prototype.read=function(e){if(this.exhausted)return null;var t=X;X=this.threadID;var o=se.current;se.current=Y;try{for(var n=[""],r=!1;n[0].length<e;){if(0===this.stack.length){this.exhausted=!0;var i=this.threadID;k[i]=k[0],k[0]=i;break}var s=this.stack[this.stack.length-1];if(r||s.childIndex>=s.children.length){var a=s.footer;if(""!==a&&(this.previousWasTextNode=!1),this.stack.pop(),"select"===s.type)this.currentSelectValue=null;else if(null!=s.type&&null!=s.type.type&&s.type.type.$$typeof===d)this.popProvider(s.type);else if(s.type===m){this.suspenseDepth--;var c=n.pop();if(r){r=!1;var u=s.fallbackFrame;u||l("303"),this.stack.push(u);continue}n[this.suspenseDepth]+=c}n[this.suspenseDepth]+=a}else{var p=s.children[s.childIndex++],h="";try{h+=this.render(p,s.context,s.domNamespace)}catch(f){throw f}n.length<=this.suspenseDepth&&n.push(""),n[this.suspenseDepth]+=h}}return n[0]}finally{se.current=o,X=t}},e.prototype.render=function(e,t,o){if("string"==typeof e||"number"==typeof e)return""===(o=""+e)?"":this.makeStaticMarkup?P(o):this.previousWasTextNode?"\x3c!-- --\x3e"+P(o):(this.previousWasTextNode=!0,P(o));if(e=(t=me(e,t,this.threadID)).child,t=t.context,null===e||!1===e)return"";if(!r.isValidElement(e)){if(null!=e&&null!=e.$$typeof){var i=e.$$typeof;i===s&&l("257"),l("258",i.toString())}return e=ie(e),this.stack.push({type:null,domNamespace:o,children:e,childIndex:0,context:t,footer:""}),""}if("string"==typeof(i=e.type))return this.renderDOM(e,t,o);switch(i){case c:case h:case u:case a:return e=ie(e.props.children),this.stack.push({type:null,domNamespace:o,children:e,childIndex:0,context:t,footer:""}),"";case m:l("294")}if("object"==typeof i&&null!==i)switch(i.$$typeof){case f:V={};var y=i.render(e.props,e.ref);return y=B(i.render,e.props,y,e.ref),y=ie(y),this.stack.push({type:null,domNamespace:o,children:y,childIndex:0,context:t,footer:""}),"";case v:return e=[r.createElement(i.type,n({ref:e.ref},e.props))],this.stack.push({type:null,domNamespace:o,children:e,childIndex:0,context:t,footer:""}),"";case d:return o={type:e,domNamespace:o,children:i=ie(e.props.children),childIndex:0,context:t,footer:""},this.pushProvider(e),this.stack.push(o),"";case p:i=e.type,y=e.props;var w=this.threadID;return x(i,w),i=ie(y.children(i[w])),this.stack.push({type:e,domNamespace:o,children:i,childIndex:0,context:t,footer:""}),"";case g:l("295")}l("130",null==i?i:typeof i,"")},e.prototype.renderDOM=function(e,t,o){var i=e.type.toLowerCase();o===K.html&&Q(i),ue.hasOwnProperty(i)||(ce.test(i)||l("65",i),ue[i]=!0);var s=e.props;if("input"===i)s=n({type:void 0},s,{defaultChecked:void 0,defaultValue:void 0,value:null!=s.value?s.value:s.defaultValue,checked:null!=s.checked?s.checked:s.defaultChecked});else if("textarea"===i){var a=s.value;if(null==a){a=s.defaultValue;var c=s.children;null!=c&&(null!=a&&l("92"),Array.isArray(c)&&(1>=c.length||l("93"),c=c[0]),a=""+c),null==a&&(a="")}s=n({},s,{value:void 0,children:""+a})}else if("select"===i)this.currentSelectValue=null!=s.value?s.value:s.defaultValue,s=n({},s,{value:void 0});else if("option"===i){c=this.currentSelectValue;var u=function(e){if(null==e)return e;var t="";return r.Children.forEach(e,function(e){null!=e&&(t+=e)}),t}(s.children);if(null!=c){var d=null!=s.value?s.value+"":u;if(a=!1,Array.isArray(c)){for(var p=0;p<c.length;p++)if(""+c[p]===d){a=!0;break}}else a=""+c===d;s=n({selected:void 0,children:void 0},s,{selected:a,children:u})}}for(b in(a=s)&&(te[i]&&(null!=a.children||null!=a.dangerouslySetInnerHTML)&&l("137",i,""),null!=a.dangerouslySetInnerHTML&&(null!=a.children&&l("60"),"object"==typeof a.dangerouslySetInnerHTML&&"__html"in a.dangerouslySetInnerHTML||l("61")),null!=a.style&&"object"!=typeof a.style&&l("62","")),a=s,c=this.makeStaticMarkup,u=1===this.stack.length,d="<"+e.type,a)if(pe.call(a,b)){var h=a[b];if(null!=h){if("style"===b){p=void 0;var f="",m="";for(p in h)if(h.hasOwnProperty(p)){var v=0===p.indexOf("--"),g=h[p];if(null!=g){var y=p;if(de.hasOwnProperty(y))y=de[y];else{var w=y.replace(re,"-$1").toLowerCase().replace(le,"-ms-");y=de[y]=w}f+=m+y+":",m=p,f+=v=null==g||"boolean"==typeof g||""===g?"":v||"number"!=typeof g||0===g||oe.hasOwnProperty(m)&&oe[m]?(""+g).trim():g+"px",m=";"}}h=f||null}p=null;e:if(v=i,g=a,-1===v.indexOf("-"))v="string"==typeof g.is;else switch(v){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":v=!1;break e;default:v=!0}v?he.hasOwnProperty(b)||(p=T(p=b)&&null!=h?p+'="'+P(h)+'"':""):(v=b,p=h,h=N.hasOwnProperty(v)?N[v]:null,(g="style"!==v)&&(g=null!==h?0===h.type:2<v.length&&("o"===v[0]||"O"===v[0])&&("n"===v[1]||"N"===v[1])),g||D(v,p,h,!1)?p="":null!==h?(v=h.attributeName,p=3===(h=h.type)||4===h&&!0===p?v+'=""':v+'="'+P(p)+'"'):p=T(v)?v+'="'+P(p)+'"':""),p&&(d+=" "+p)}}c||u&&(d+=' data-reactroot=""');var b=d;a="",ee.hasOwnProperty(i)?b+="/>":(b+=">",a="</"+e.type+">");e:{if(null!=(c=s.dangerouslySetInnerHTML)){if(null!=c.__html){c=c.__html;break e}}else if("string"==typeof(c=s.children)||"number"==typeof c){c=P(c);break e}c=null}return null!=c?(s=[],ae[i]&&"\n"===c.charAt(0)&&(b+="\n"),b+=c):s=ie(s.children),e=e.type,o=null==o||"http://www.w3.org/1999/xhtml"===o?Q(e):"http://www.w3.org/2000/svg"===o&&"foreignObject"===e?"http://www.w3.org/1999/xhtml":o,this.stack.push({domNamespace:o,type:i,children:s,childIndex:0,context:t,footer:a}),this.previousWasTextNode=!1,b},e}(),ge={renderToString:function(e){e=new ve(e,!1);try{return e.read(1/0)}finally{e.destroy()}},renderToStaticMarkup:function(e){e=new ve(e,!0);try{return e.read(1/0)}finally{e.destroy()}},renderToNodeStream:function(){l("207")},renderToStaticNodeStream:function(){l("208")},version:"16.8.4"},ye={default:ge},we=ye&&ge||ye;e.exports=we.default||we},"./node_modules/react-dom/server.browser.js":function(e,t,o){"use strict";e.exports=o("./node_modules/react-dom/cjs/react-dom-server.browser.production.min.js")}},[["./logoSlider/index.js"]]]);