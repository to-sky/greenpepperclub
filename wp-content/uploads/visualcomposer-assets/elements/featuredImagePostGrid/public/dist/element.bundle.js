(window.vcvWebpackJsonp4x=window.vcvWebpackJsonp4x||[]).push([[0],{"./featuredImagePostGrid/index.js":function(e,t,n){"use strict";n.r(t);var r=n("./node_modules/vc-cake/index.js"),o=n.n(r),i=n("./node_modules/@babel/runtime/helpers/extends.js"),a=n.n(i),s=n("./node_modules/@babel/runtime/helpers/classCallCheck.js"),l=n.n(s),c=n("./node_modules/@babel/runtime/helpers/createClass.js"),u=n.n(c),p=n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),d=n.n(p),f=n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),h=n.n(f),m=n("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"),g=n.n(m),v=n("./node_modules/@babel/runtime/helpers/inherits.js"),y=n.n(v),x=n("./node_modules/@babel/runtime/helpers/defineProperty.js"),b=n.n(x),w=n("./node_modules/react/index.js"),k=n.n(w),_=function(e){function t(){var e,n;l()(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return n=d()(this,(e=h()(t)).call.apply(e,[this].concat(o))),b()(g()(n),"state",{shortcode:"",shortcodeContent:n.spinnerHTML()}),n}return y()(t,e),u()(t,[{key:"componentDidMount",value:function(){this.requestToServer()}},{key:"componentDidUpdate",value:function(e){(0,n("./node_modules/lodash/lodash.js").isEqual)(this.props.atts,e.atts)||this.requestToServer()}},{key:"componentwillUnmount",value:function(){this.serverRequest&&(this.serverRequest.cancelled=!0)}},{key:"requestToServer",value:function(){var e=this;if(this.props.atts.gridItem&&this.props.atts.sourceItem){var t=Object(r.getService)("dataProcessor"),o=Object(r.getService)("cook"),i=o.get(this.props.atts.gridItem),a=o.get(this.props.atts.sourceItem),s=i.render(null,!1),l=a.render(null,!1),c=n("./node_modules/react-dom/server.browser.js"),u=n("./node_modules/striptags/src/striptags.js");this.ref&&(this.ref.innerHTML=this.spinnerHTML()),this.serverRequest=t.appServerRequest({"vcv-action":"elements:posts_grid:adminNonce","vcv-nonce":window.vcvNonce,"vcv-content":c.renderToStaticMarkup(s),"vcv-source-id":window.vcvSourceID,"vcv-atts":{source:encodeURIComponent(JSON.stringify({tag:this.props.atts.sourceItem.tag,value:u(c.renderToStaticMarkup(l))})),unique_id:this.props.id,pagination:this.props.atts.atts_pagination?"1":"0",pagination_color:this.props.atts.atts_pagination_color,pagination_per_page:this.props.atts.atts_pagination_per_page}}).then(function(t){if(e.serverRequest&&e.serverRequest.cancelled)e.serverRequest=null;else{var n=e.getResponse(t);n&&n.status,e.ref&&(e.ref.setAttribute("data-vcvs-html",n.shortcode),e.ref.innerHTML=n.shortcodeContent||"Failed to render posts grid")}})}}},{key:"render",value:function(){var e=this,t=this.props,n=t.id,r=t.atts,o=t.editor,i=r.customClass,s=r.metaCustomId,l=["vce vce-posts-grid-wrapper vce-featured-image-grid-wrapper"],c=["vce-posts-grid-container vce-featured-image-grid-container"],u={},p=this.getMixinData("postsGridGap");p&&l.push("vce-posts-grid--gap-".concat(p.selector)),(p=this.getMixinData("postsGridColumns"))&&l.push("vce-posts-grid--columns-".concat(p.selector)),(p=this.getMixinData("postsGridPaginationColor"))&&l.push("vce-posts-grid-pagination--color-".concat(p.selector)),i&&c.push(i),s&&(u.id=s);var d=this.applyDO("all");return k.a.createElement("div",a()({className:c.join(" ")},u,o),k.a.createElement("div",a()({className:l.join(" "),id:"el-"+n},d),k.a.createElement("div",{className:"vcvhelper",ref:function(t){e.ref=t}})))}}]),t}(Object(r.getService)("api").elementComponent);(0,o.a.getService("cook").add)(n("./featuredImagePostGrid/settings.json"),function(e){e.add(_)},{css:n("./node_modules/raw-loader/index.js!./featuredImagePostGrid/styles.css"),editorCss:n("./node_modules/raw-loader/index.js!./featuredImagePostGrid/editor.css"),mixins:{postsGridColumns:{mixin:n("./node_modules/raw-loader/index.js!./featuredImagePostGrid/cssMixins/postsGridColumns.pcss")},postsGridGap:{mixin:n("./node_modules/raw-loader/index.js!./featuredImagePostGrid/cssMixins/postsGridGap.pcss")},postsGridPaginationColor:{mixin:n("./node_modules/raw-loader/index.js!./featuredImagePostGrid/cssMixins/postsGridPaginationColor.pcss")}}},"")},"./featuredImagePostGrid/settings.json":function(e){e.exports={tag:{access:"protected",type:"string",value:"featuredImagePostGrid"},relatedTo:{type:"group",access:"protected",value:["General"]},gap:{type:"number",access:"public",value:"10",options:{label:"Gap",description:"Enter gap in pixels (Example: 5).",cssMixin:{mixin:"postsGridGap",property:"gap"}}},columns:{type:"number",access:"public",value:"3",options:{label:"Number of Columns",cssMixin:{mixin:"postsGridColumns",property:"columns"}}},atts_pagination:{type:"toggle",access:"public",value:!1,options:{label:"Enable paging",description:"Divide your post grid into pages and control maximum number of posts per page."}},atts_pagination_per_page:{type:"string",access:"public",value:"10",options:{label:"Items per page"}},atts_pagination_color:{type:"color",access:"public",value:"#e2e2e2",options:{label:"Inactive page color",cssMixin:{mixin:"postsGridPaginationColor",property:"baseColor",namePattern:"[\\da-f]+"}}},atts_pagination_active_color:{type:"color",access:"public",value:"#E0BAA0",options:{label:"Active page color",cssMixin:{mixin:"postsGridPaginationColor",property:"activeColor",namePattern:"[\\da-f]+"}}},editFormTab1:{type:"group",access:"protected",value:["columns","gap","atts_pagination","metaCustomId","customClass"],options:{label:"General"}},pagination:{type:"group",access:"public",value:["atts_pagination_per_page","atts_pagination_color","atts_pagination_active_color"],options:{label:"Pagination",onChange:{rules:{atts_pagination:{rule:"toggle"}},actions:[{action:"toggleSectionVisibility"}]}}},sourceItem:{type:"element",access:"public",value:{tag:"postsGridDataSourcePost"},options:{category:"_postsGridSources",_fixElementDownload:[{tag:"postsGrid"},{tag:"postsGridDataSourcePost"},{tag:"postsGridDataSourcePage"},{tag:"postsGridDataSourceCustomPostType"},{tag:"postsGridDataSourceListOfIds"}],label:"Data Source",replaceView:"dropdown",merge:{attributes:[{key:"attsOffset",type:"string"},{key:"attsLimit",type:"string"}]}}},gridItem:{type:"element",access:"public",value:{tag:"featuredImagePostGridItem"},options:{_category:"postsGridItems",tabLabel:"Grid Item"}},designOptions:{type:"designOptions",access:"public",value:{},options:{label:"Design Options"}},metaEditFormTabs:{type:"group",access:"protected",value:["editFormTab1","sourceItem","pagination","gridItem","designOptions"]},metaCustomId:{type:"customId",access:"public",value:"",options:{label:"Element ID",description:"Apply unique ID to element to link directly to it by using #your_id (for element ID use lowercase input only)."}},customClass:{type:"string",access:"public",value:"",options:{label:"Extra class name",description:"Add an extra class name to the element and refer to it from Custom CSS option."}}}},"./node_modules/raw-loader/index.js!./featuredImagePostGrid/cssMixins/postsGridColumns.pcss":function(e,t){e.exports="@media (min-width: 544px) {\n.vce-featured-image-grid-container.vce-posts-grid-container {\n    .vce-posts-grid--columns-$selector {\n      .vce-posts-grid-item {\n        @if $columns != false {\n          flex: 0 0 calc(100% / $columns);\n        }\n      }\n    }\n  }\n}\n"},"./node_modules/raw-loader/index.js!./featuredImagePostGrid/cssMixins/postsGridGap.pcss":function(e,t){e.exports=".vce-featured-image-grid-container.vce-posts-grid-container {\n  .vce-posts-grid--gap-$selector {\n    .vce-posts-grid-list {\n      @if $gap != false {\n        margin-left: calc(-$(gap)px / 2);\n        margin-right: calc(-$(gap)px / 2);\n        margin-bottom: -$(gap)px;\n      }\n    }\n    .vce-posts-grid-item {\n      @if $gap != false {\n        padding-left: calc($(gap)px / 2);\n        padding-right: calc($(gap)px / 2);\n        margin-bottom: $(gap)px;\n      }\n    }\n  }\n}"},"./node_modules/raw-loader/index.js!./featuredImagePostGrid/cssMixins/postsGridPaginationColor.pcss":function(e,t){e.exports=".vce-featured-image-grid-container.vce-posts-grid-container {\n  .vce-posts-grid-pagination--color-$selector {\n    .vce-posts-grid-pagination-item {\n        @if $baseColor != false {\n          background-color: $baseColor;\n          &:hover {\n          background-color: color($baseColor shade(10%));\n        }\n      }\n    }\n    .vce-posts-grid-pagination-item.vce-state--active {\n      @if $activeColor != false {\n        background-color: $activeColor;\n        &:hover {\n          background-color: color($activeColor shade(10%));\n        }\n      }\n    }\n  }\n}\n"},"./node_modules/raw-loader/index.js!./featuredImagePostGrid/editor.css":function(e,t){e.exports=".vce-feature-image-grid-container {\n  min-height: 1em;\n}\n"},"./node_modules/raw-loader/index.js!./featuredImagePostGrid/styles.css":function(e,t){e.exports=".vce-featured-image-grid-container.vce-posts-grid-container .vce-posts-grid-wrapper {\n  overflow: hidden;\n}\n.vce-featured-image-grid-container.vce-posts-grid-container .vce-posts-grid-list {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-pack: start;\n      justify-content: flex-start;\n  -ms-flex-align: stretch;\n      align-items: stretch;\n  -ms-flex-line-pack: start;\n      align-content: flex-start;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n.vce-featured-image-grid-container.vce-posts-grid-container .vce-posts-grid-item {\n  -ms-flex: 0 0 100%;\n      flex: 0 0 100%;\n  max-width: 100%;\n  box-sizing: border-box;\n  display: block;\n  overflow: hidden;\n  position: relative;\n  border: none;\n}\n.vce-featured-image-grid-container.vce-posts-grid-container .vce-posts-grid-pagination {\n  margin: 30px 0 12px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n}\n.vce-featured-image-grid-container.vce-posts-grid-container .vce-posts-grid-pagination .vce-posts-grid-pagination-item {\n  display: inline-block;\n  border-radius: 50%;\n  margin: 15px 5px;\n  height: 10px;\n  width: 10px;\n  text-decoration: none;\n  line-height: 30px;\n  box-shadow: none;\n  border: 0;\n  outline: none;\n  transition: background 0.2s ease-in-out;\n  font-size: 0;\n}\n.vce-featured-image-grid-container.vce-posts-grid-container .vce-posts-grid-pagination .vce-posts-grid-pagination-item:hover,\n.vce-featured-image-grid-container.vce-posts-grid-container .vce-posts-grid-pagination .vce-posts-grid-pagination-item:focus {\n  text-decoration: none;\n  box-shadow: none;\n  border: 0;\n  outline: none;\n}\n.vce-featured-image-grid-container.vce-posts-grid-container .vce-posts-grid-pagination .vce-posts-grid-pagination-item.vce-state--active {\n  width: 14px;\n  height: 14px;\n}\n.vce-featured-image-grid-container.vce-posts-grid-container .vce-posts-grid-pagination-rest-items {\n  padding: 0 18px;\n}\n"},"./node_modules/react-dom/cjs/react-dom-server.browser.production.min.js":function(e,t,n){"use strict";
/** @license React v16.8.4
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n("./node_modules/object-assign/index.js"),o=n("./node_modules/react/index.js");function i(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);!function(e,t,n,r,o,i,a,s){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,o,i,a,s],c=0;(e=Error(t.replace(/%s/g,function(){return l[c++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var a="function"==typeof Symbol&&Symbol.for,s=a?Symbol.for("react.portal"):60106,l=a?Symbol.for("react.fragment"):60107,c=a?Symbol.for("react.strict_mode"):60108,u=a?Symbol.for("react.profiler"):60114,p=a?Symbol.for("react.provider"):60109,d=a?Symbol.for("react.context"):60110,f=a?Symbol.for("react.concurrent_mode"):60111,h=a?Symbol.for("react.forward_ref"):60112,m=a?Symbol.for("react.suspense"):60113,g=a?Symbol.for("react.memo"):60115,v=a?Symbol.for("react.lazy"):60116;function y(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case f:return"ConcurrentMode";case l:return"Fragment";case s:return"Portal";case u:return"Profiler";case c:return"StrictMode";case m:return"Suspense"}if("object"==typeof e)switch(e.$$typeof){case d:return"Context.Consumer";case p:return"Context.Provider";case h:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(""!==t?"ForwardRef("+t+")":"ForwardRef");case g:return y(e.type);case v:if(e=1===e._status?e._result:null)return y(e)}return null}var x=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;x.hasOwnProperty("ReactCurrentDispatcher")||(x.ReactCurrentDispatcher={current:null});var b={};function w(e,t){for(var n=0|e._threadCount;n<=t;n++)e[n]=e._currentValue2,e._threadCount=n+1}for(var k=new Uint16Array(16),_=0;15>_;_++)k[_]=_+1;k[15]=0;var S=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,C=Object.prototype.hasOwnProperty,I={},F={};function D(e){return!!C.call(F,e)||!C.call(I,e)&&(S.test(e)?F[e]=!0:(I[e]=!0,!1))}function P(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function E(e,t,n,r,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t}var M={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){M[e]=new E(e,0,!1,e,null)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];M[t]=new E(t,1,!1,e[1],null)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){M[e]=new E(e,2,!1,e.toLowerCase(),null)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){M[e]=new E(e,2,!1,e,null)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){M[e]=new E(e,3,!1,e.toLowerCase(),null)}),["checked","multiple","muted","selected"].forEach(function(e){M[e]=new E(e,3,!0,e,null)}),["capture","download"].forEach(function(e){M[e]=new E(e,4,!1,e,null)}),["cols","rows","size","span"].forEach(function(e){M[e]=new E(e,6,!1,e,null)}),["rowSpan","start"].forEach(function(e){M[e]=new E(e,5,!1,e.toLowerCase(),null)});var j=/[\-:]([a-z])/g;function G(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(j,G);M[t]=new E(t,1,!1,e,null)}),"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(j,G);M[t]=new E(t,1,!1,e,"http://www.w3.org/1999/xlink")}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(j,G);M[t]=new E(t,1,!1,e,"http://www.w3.org/XML/1998/namespace")}),["tabIndex","crossOrigin"].forEach(function(e){M[e]=new E(e,1,!1,e.toLowerCase(),null)});var N=/["'&<>]/;function O(e){if("boolean"==typeof e||"number"==typeof e)return""+e;e=""+e;var t=N.exec(e);if(t){var n,r="",o=0;for(n=t.index;n<e.length;n++){switch(e.charCodeAt(n)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#x27;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}o!==n&&(r+=e.substring(o,n)),o=n+1,r+=t}e=o!==n?r+e.substring(o,n):r}return e}var T=null,R=null,$=null,L=!1,z=!1,A=null,q=0;function V(){return null===T&&i("307"),T}function W(){return 0<q&&i("312"),{memoizedState:null,queue:null,next:null}}function H(){return null===$?null===R?(L=!1,R=$=W()):(L=!0,$=R):null===$.next?(L=!1,$=$.next=W()):(L=!0,$=$.next),$}function U(e,t,n,r){for(;z;)z=!1,q+=1,$=null,n=e(t,r);return R=T=null,q=0,$=A=null,n}function B(e,t){return"function"==typeof t?t(e):t}function Z(e,t,n){if(T=V(),$=H(),L){var r=$.queue;if(t=r.dispatch,null!==A&&void 0!==(n=A.get(r))){A.delete(r),r=$.memoizedState;do{r=e(r,n.action),n=n.next}while(null!==n);return $.memoizedState=r,[r,t]}return[$.memoizedState,t]}return e=e===B?"function"==typeof t?t():t:void 0!==n?n(t):t,$.memoizedState=e,e=(e=$.queue={last:null,dispatch:null}).dispatch=function(e,t,n){if(25>q||i("301"),e===T)if(z=!0,e={action:n,next:null},null===A&&(A=new Map),void 0===(n=A.get(t)))A.set(t,e);else{for(t=n;null!==t.next;)t=t.next;t.next=e}}.bind(null,T,e),[$.memoizedState,e]}function J(){}var X=0,Y={readContext:function(e){var t=X;return w(e,t),e[t]},useContext:function(e){V();var t=X;return w(e,t),e[t]},useMemo:function(e,t){if(T=V(),t=void 0===t?null:t,null!==($=H())){var n=$.memoizedState;if(null!==n&&null!==t){e:{var r=n[1];if(null===r)r=!1;else{for(var o=0;o<r.length&&o<t.length;o++){var i=t[o],a=r[o];if((i!==a||0===i&&1/i!=1/a)&&(i==i||a==a)){r=!1;break e}}r=!0}}if(r)return n[0]}}return e=e(),$.memoizedState=[e,t],e},useReducer:Z,useRef:function(e){T=V();var t=($=H()).memoizedState;return null===t?(e={current:e},$.memoizedState=e):t},useState:function(e){return Z(B,e)},useLayoutEffect:function(){},useCallback:function(e){return e},useImperativeHandle:J,useEffect:J,useDebugValue:J},K={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function Q(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}var ee={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},te=r({menuitem:!0},ee),ne={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},re=["Webkit","ms","Moz","O"];Object.keys(ne).forEach(function(e){re.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ne[t]=ne[e]})});var oe=/([A-Z])/g,ie=/^ms-/,ae=o.Children.toArray,se=x.ReactCurrentDispatcher,le={listing:!0,pre:!0,textarea:!0},ce=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,ue={},pe={};var de=Object.prototype.hasOwnProperty,fe={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null,suppressHydrationWarning:null};function he(e,t){void 0===e&&i("152",y(t)||"Component")}function me(e,t,n){function a(o,a){var s=function(e,t,n){var r=e.contextType;if("object"==typeof r&&null!==r)return w(r,n),r[n];if(e=e.contextTypes){for(var o in n={},e)n[o]=t[o];t=n}else t=b;return t}(a,t,n),l=[],c=!1,u={isMounted:function(){return!1},enqueueForceUpdate:function(){if(null===l)return null},enqueueReplaceState:function(e,t){c=!0,l=[t]},enqueueSetState:function(e,t){if(null===l)return null;l.push(t)}},p=void 0;if(a.prototype&&a.prototype.isReactComponent){if(p=new a(o.props,s,u),"function"==typeof a.getDerivedStateFromProps){var d=a.getDerivedStateFromProps.call(null,o.props,p.state);null!=d&&(p.state=r({},p.state,d))}}else if(T={},p=a(o.props,s,u),null==(p=U(a,o.props,p,s))||null==p.render)return void he(e=p,a);if(p.props=o.props,p.context=s,p.updater=u,void 0===(u=p.state)&&(p.state=u=null),"function"==typeof p.UNSAFE_componentWillMount||"function"==typeof p.componentWillMount)if("function"==typeof p.componentWillMount&&"function"!=typeof a.getDerivedStateFromProps&&p.componentWillMount(),"function"==typeof p.UNSAFE_componentWillMount&&"function"!=typeof a.getDerivedStateFromProps&&p.UNSAFE_componentWillMount(),l.length){u=l;var f=c;if(l=null,c=!1,f&&1===u.length)p.state=u[0];else{d=f?u[0]:p.state;var h=!0;for(f=f?1:0;f<u.length;f++){var m=u[f];null!=(m="function"==typeof m?m.call(p,d,o.props,s):m)&&(h?(h=!1,d=r({},d,m)):r(d,m))}p.state=d}}else l=null;if(he(e=p.render(),a),o=void 0,"function"==typeof p.getChildContext&&"object"==typeof(s=a.childContextTypes))for(var g in o=p.getChildContext())g in s||i("108",y(a)||"Unknown",g);o&&(t=r({},t,o))}for(;o.isValidElement(e);){var s=e,l=s.type;if("function"!=typeof l)break;a(s,l)}return{child:e,context:t}}var ge=function(){function e(t,n){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function");o.isValidElement(t)?t.type!==l?t=[t]:(t=t.props.children,t=o.isValidElement(t)?[t]:ae(t)):t=ae(t),t={type:null,domNamespace:K.html,children:t,childIndex:0,context:b,footer:""};var r=k[0];if(0===r){var a=k,s=2*(r=a.length);65536>=s||i("304");var c=new Uint16Array(s);for(c.set(a),(k=c)[0]=r+1,a=r;a<s-1;a++)k[a]=a+1;k[s-1]=0}else k[0]=k[r];this.threadID=r,this.stack=[t],this.exhausted=!1,this.currentSelectValue=null,this.previousWasTextNode=!1,this.makeStaticMarkup=n,this.suspenseDepth=0,this.contextIndex=-1,this.contextStack=[],this.contextValueStack=[]}return e.prototype.destroy=function(){if(!this.exhausted){this.exhausted=!0,this.clearProviders();var e=this.threadID;k[e]=k[0],k[0]=e}},e.prototype.pushProvider=function(e){var t=++this.contextIndex,n=e.type._context,r=this.threadID;w(n,r);var o=n[r];this.contextStack[t]=n,this.contextValueStack[t]=o,n[r]=e.props.value},e.prototype.popProvider=function(){var e=this.contextIndex,t=this.contextStack[e],n=this.contextValueStack[e];this.contextStack[e]=null,this.contextValueStack[e]=null,this.contextIndex--,t[this.threadID]=n},e.prototype.clearProviders=function(){for(var e=this.contextIndex;0<=e;e--)this.contextStack[e][this.threadID]=this.contextValueStack[e]},e.prototype.read=function(e){if(this.exhausted)return null;var t=X;X=this.threadID;var n=se.current;se.current=Y;try{for(var r=[""],o=!1;r[0].length<e;){if(0===this.stack.length){this.exhausted=!0;var a=this.threadID;k[a]=k[0],k[0]=a;break}var s=this.stack[this.stack.length-1];if(o||s.childIndex>=s.children.length){var l=s.footer;if(""!==l&&(this.previousWasTextNode=!1),this.stack.pop(),"select"===s.type)this.currentSelectValue=null;else if(null!=s.type&&null!=s.type.type&&s.type.type.$$typeof===p)this.popProvider(s.type);else if(s.type===m){this.suspenseDepth--;var c=r.pop();if(o){o=!1;var u=s.fallbackFrame;u||i("303"),this.stack.push(u);continue}r[this.suspenseDepth]+=c}r[this.suspenseDepth]+=l}else{var d=s.children[s.childIndex++],f="";try{f+=this.render(d,s.context,s.domNamespace)}catch(h){throw h}r.length<=this.suspenseDepth&&r.push(""),r[this.suspenseDepth]+=f}}return r[0]}finally{se.current=n,X=t}},e.prototype.render=function(e,t,n){if("string"==typeof e||"number"==typeof e)return""===(n=""+e)?"":this.makeStaticMarkup?O(n):this.previousWasTextNode?"\x3c!-- --\x3e"+O(n):(this.previousWasTextNode=!0,O(n));if(e=(t=me(e,t,this.threadID)).child,t=t.context,null===e||!1===e)return"";if(!o.isValidElement(e)){if(null!=e&&null!=e.$$typeof){var a=e.$$typeof;a===s&&i("257"),i("258",a.toString())}return e=ae(e),this.stack.push({type:null,domNamespace:n,children:e,childIndex:0,context:t,footer:""}),""}if("string"==typeof(a=e.type))return this.renderDOM(e,t,n);switch(a){case c:case f:case u:case l:return e=ae(e.props.children),this.stack.push({type:null,domNamespace:n,children:e,childIndex:0,context:t,footer:""}),"";case m:i("294")}if("object"==typeof a&&null!==a)switch(a.$$typeof){case h:T={};var y=a.render(e.props,e.ref);return y=U(a.render,e.props,y,e.ref),y=ae(y),this.stack.push({type:null,domNamespace:n,children:y,childIndex:0,context:t,footer:""}),"";case g:return e=[o.createElement(a.type,r({ref:e.ref},e.props))],this.stack.push({type:null,domNamespace:n,children:e,childIndex:0,context:t,footer:""}),"";case p:return n={type:e,domNamespace:n,children:a=ae(e.props.children),childIndex:0,context:t,footer:""},this.pushProvider(e),this.stack.push(n),"";case d:a=e.type,y=e.props;var x=this.threadID;return w(a,x),a=ae(y.children(a[x])),this.stack.push({type:e,domNamespace:n,children:a,childIndex:0,context:t,footer:""}),"";case v:i("295")}i("130",null==a?a:typeof a,"")},e.prototype.renderDOM=function(e,t,n){var a=e.type.toLowerCase();n===K.html&&Q(a),ue.hasOwnProperty(a)||(ce.test(a)||i("65",a),ue[a]=!0);var s=e.props;if("input"===a)s=r({type:void 0},s,{defaultChecked:void 0,defaultValue:void 0,value:null!=s.value?s.value:s.defaultValue,checked:null!=s.checked?s.checked:s.defaultChecked});else if("textarea"===a){var l=s.value;if(null==l){l=s.defaultValue;var c=s.children;null!=c&&(null!=l&&i("92"),Array.isArray(c)&&(1>=c.length||i("93"),c=c[0]),l=""+c),null==l&&(l="")}s=r({},s,{value:void 0,children:""+l})}else if("select"===a)this.currentSelectValue=null!=s.value?s.value:s.defaultValue,s=r({},s,{value:void 0});else if("option"===a){c=this.currentSelectValue;var u=function(e){if(null==e)return e;var t="";return o.Children.forEach(e,function(e){null!=e&&(t+=e)}),t}(s.children);if(null!=c){var p=null!=s.value?s.value+"":u;if(l=!1,Array.isArray(c)){for(var d=0;d<c.length;d++)if(""+c[d]===p){l=!0;break}}else l=""+c===p;s=r({selected:void 0,children:void 0},s,{selected:l,children:u})}}for(b in(l=s)&&(te[a]&&(null!=l.children||null!=l.dangerouslySetInnerHTML)&&i("137",a,""),null!=l.dangerouslySetInnerHTML&&(null!=l.children&&i("60"),"object"==typeof l.dangerouslySetInnerHTML&&"__html"in l.dangerouslySetInnerHTML||i("61")),null!=l.style&&"object"!=typeof l.style&&i("62","")),l=s,c=this.makeStaticMarkup,u=1===this.stack.length,p="<"+e.type,l)if(de.call(l,b)){var f=l[b];if(null!=f){if("style"===b){d=void 0;var h="",m="";for(d in f)if(f.hasOwnProperty(d)){var g=0===d.indexOf("--"),v=f[d];if(null!=v){var y=d;if(pe.hasOwnProperty(y))y=pe[y];else{var x=y.replace(oe,"-$1").toLowerCase().replace(ie,"-ms-");y=pe[y]=x}h+=m+y+":",m=d,h+=g=null==v||"boolean"==typeof v||""===v?"":g||"number"!=typeof v||0===v||ne.hasOwnProperty(m)&&ne[m]?(""+v).trim():v+"px",m=";"}}f=h||null}d=null;e:if(g=a,v=l,-1===g.indexOf("-"))g="string"==typeof v.is;else switch(g){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":g=!1;break e;default:g=!0}g?fe.hasOwnProperty(b)||(d=D(d=b)&&null!=f?d+'="'+O(f)+'"':""):(g=b,d=f,f=M.hasOwnProperty(g)?M[g]:null,(v="style"!==g)&&(v=null!==f?0===f.type:2<g.length&&("o"===g[0]||"O"===g[0])&&("n"===g[1]||"N"===g[1])),v||P(g,d,f,!1)?d="":null!==f?(g=f.attributeName,d=3===(f=f.type)||4===f&&!0===d?g+'=""':g+'="'+O(d)+'"'):d=D(g)?g+'="'+O(d)+'"':""),d&&(p+=" "+d)}}c||u&&(p+=' data-reactroot=""');var b=p;l="",ee.hasOwnProperty(a)?b+="/>":(b+=">",l="</"+e.type+">");e:{if(null!=(c=s.dangerouslySetInnerHTML)){if(null!=c.__html){c=c.__html;break e}}else if("string"==typeof(c=s.children)||"number"==typeof c){c=O(c);break e}c=null}return null!=c?(s=[],le[a]&&"\n"===c.charAt(0)&&(b+="\n"),b+=c):s=ae(s.children),e=e.type,n=null==n||"http://www.w3.org/1999/xhtml"===n?Q(e):"http://www.w3.org/2000/svg"===n&&"foreignObject"===e?"http://www.w3.org/1999/xhtml":n,this.stack.push({domNamespace:n,type:a,children:s,childIndex:0,context:t,footer:l}),this.previousWasTextNode=!1,b},e}(),ve={renderToString:function(e){e=new ge(e,!1);try{return e.read(1/0)}finally{e.destroy()}},renderToStaticMarkup:function(e){e=new ge(e,!0);try{return e.read(1/0)}finally{e.destroy()}},renderToNodeStream:function(){i("207")},renderToStaticNodeStream:function(){i("208")},version:"16.8.4"},ye={default:ve},xe=ye&&ve||ye;e.exports=xe.default||xe},"./node_modules/react-dom/server.browser.js":function(e,t,n){"use strict";e.exports=n("./node_modules/react-dom/cjs/react-dom-server.browser.production.min.js")},"./node_modules/striptags/src/striptags.js":function(e,t,n){"use strict";var r;!function(o){if("function"!=typeof i){var i=function(e){return e};i.nonNative=!0}const a=i("plaintext"),s=i("html"),l=i("comment"),c=/<(\w*)>/g,u=/<\/?([^\s\/>]+)/;function p(e,t,n){return f(e=e||"",d(t=t||[],n=n||""))}function d(e,t){return{allowable_tags:e=function(e){let t=new Set;if("string"==typeof e){let n;for(;n=c.exec(e);)t.add(n[1])}else i.nonNative||"function"!=typeof e[i.iterator]?"function"==typeof e.forEach&&e.forEach(t.add,t):t=new Set(e);return t}(e),tag_replacement:t,state:a,tag_buffer:"",depth:0,in_quote_char:""}}function f(e,t){let n=t.allowable_tags,r=t.tag_replacement,o=t.state,i=t.tag_buffer,c=t.depth,u=t.in_quote_char,p="";for(let d=0,f=e.length;d<f;d++){let t=e[d];if(o===a)switch(t){case"<":o=s,i+=t;break;default:p+=t}else if(o===s)switch(t){case"<":if(u)break;c++;break;case">":if(u)break;if(c){c--;break}u="",o=a,i+=">",n.has(h(i))?p+=i:p+=r,i="";break;case'"':case"'":u=t===u?"":u||t,i+=t;break;case"-":"<!-"===i&&(o=l),i+=t;break;case" ":case"\n":if("<"===i){o=a,p+="< ",i="";break}i+=t;break;default:i+=t}else if(o===l)switch(t){case">":"--"==i.slice(-2)&&(o=a),i="";break;default:i+=t}}return t.state=o,t.tag_buffer=i,t.depth=c,t.in_quote_char=u,p}function h(e){let t=u.exec(e);return t?t[1].toLowerCase():null}p.init_streaming_mode=function(e,t){let n=d(e=e||[],t=t||"");return function(e){return f(e||"",n)}},void 0===(r=function(){return p}.call(t,n,t,e))||(e.exports=r)}()}},[["./featuredImagePostGrid/index.js"]]]);