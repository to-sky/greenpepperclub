(window.vcvWebpackJsonp4x=window.vcvWebpackJsonp4x||[]).push([[1],{"./node_modules/raw-loader/index.js!./pageableTab/cssMixins/backgroundColor.pcss":function(e,a){e.exports=".vce-pageable-container {\n  .vce-pageable-tab-background-color--$selector {\n    @if $backgroundColor != false {\n      background-color: $backgroundColor;\n    }\n  }\n}"},"./node_modules/raw-loader/index.js!./pageableTab/cssMixins/pointerColor.pcss":function(e,a){e.exports=".vce-pageable-container {\n  @if $pointerColor != false {\n    .vce-pageable-container-dots .slick-dots .slick-active .vce-pageable-tab-dot-active-color--$selector {\n      background: $pointerColor;\n    }\n  }\n}"},"./node_modules/raw-loader/index.js!./pageableTab/editor.css":function(e,a){e.exports=""},"./node_modules/raw-loader/index.js!./pageableTab/styles.css":function(e,a){e.exports='.vce-pageable-tab {\n  padding: 30px;\n}\n\n.vce-pageable-tab.vce-pageable-tab-backend {\n  margin-top: -5px;\n  border: 1px solid #dcdcdc;\n  padding: 38px 10px 5px;\n  transition: none;\n}\n\n.vce-pageable-tab-hidden {\n  display: none;\n}\n\n.rtl.vce-pageable-tab-inner,\n[dir="rlt"].vce-pageable-tab-inner,\n.rtl .vce-pageable-tab-inner,\n[dir="rlt"] .vce-pageable-tab-inner {\n  direction: rtl;\n  unicode-bidi: embed;\n}'},"./pageableTab/component.js":function(e,a,o){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=d(o("./node_modules/babel-runtime/helpers/extends.js")),t=d(o("./node_modules/babel-runtime/core-js/object/get-prototype-of.js")),s=d(o("./node_modules/babel-runtime/helpers/classCallCheck.js")),l=d(o("./node_modules/babel-runtime/helpers/createClass.js")),r=d(o("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js")),i=d(o("./node_modules/babel-runtime/helpers/inherits.js")),c=d(o("./node_modules/react/index.js"));function d(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function a(){return(0,s.default)(this,a),(0,r.default)(this,(a.__proto__||(0,t.default)(a)).apply(this,arguments))}return(0,i.default)(a,e),(0,l.default)(a,[{key:"render",value:function(){var e=this.props,a=e.id,o=e.atts,t=e.editor,s=e.children,l=o.customClass,r=o.metaCustomId,i=o.hidden,d="vce-pageable-tab vc-slick-item",p="el-"+a,u={},b={},g=this.getMixinData("backgroundColor");g&&(d+=" vce-pageable-tab-background-color--"+g.selector),"string"==typeof l&&l&&(d+=" "+l),i&&(d+=" vce-wpbackend-element-hidden"),r&&(b.id=r);var m=this.applyDO("all");return(g=this.getMixinData("pointerColor"))&&(u["data-vce-slick-dot-active"]="vce-pageable-tab-dot-active-color--"+g.selector),c.default.createElement("div",(0,n.default)({className:d},t,{id:p},u,m),c.default.createElement("div",(0,n.default)({className:"vce-pageable-tab-inner"},b),s))}}]),a}(d(o("./node_modules/vc-cake/index.js")).default.getService("api").elementComponent);a.default=p},"./pageableTab/index.js":function(e,a,o){"use strict";var n=s(o("./node_modules/vc-cake/index.js")),t=s(o("./pageableTab/component.js"));function s(e){return e&&e.__esModule?e:{default:e}}(0,n.default.getService("cook").add)(o("./pageableTab/settings.json"),function(e){e.add(t.default)},{css:o("./node_modules/raw-loader/index.js!./pageableTab/styles.css"),editorCss:o("./node_modules/raw-loader/index.js!./pageableTab/editor.css"),mixins:{backgroundColor:{mixin:o("./node_modules/raw-loader/index.js!./pageableTab/cssMixins/backgroundColor.pcss")},pointerColor:{mixin:o("./node_modules/raw-loader/index.js!./pageableTab/cssMixins/pointerColor.pcss")}}},"")},"./pageableTab/settings.json":function(e){e.exports={designOptions:{type:"designOptions",access:"public",value:{},options:{label:"Design Options"}},editFormTab1:{type:"group",access:"protected",value:["pointerColor","backgroundColor","metaCustomId","customClass"],options:{label:"General"}},metaEditFormTabs:{type:"group",access:"protected",value:["editFormTab1","designOptions"]},containerFor:{type:"group",access:"protected",value:["General"]},relatedTo:{type:"group",access:"protected",value:["Pageable Tab"]},customClass:{type:"string",access:"public",value:"",options:{label:"Extra class name",description:"Add an extra class name to the element and refer to it from Custom CSS option."}},pointerColor:{type:"color",access:"public",value:"#000",options:{label:"Active pointer color",cssMixin:{mixin:"pointerColor",property:"pointerColor",namePattern:"[\\da-f]+"}}},backgroundColor:{type:"color",access:"public",value:"#fff",options:{label:"Background color",cssMixin:{mixin:"backgroundColor",property:"backgroundColor",namePattern:"[\\da-f]+"}}},metaCustomId:{type:"customId",access:"public",value:"",options:{label:"Element ID",description:"Apply unique Id to element to link directly to it by using #your_id (for element id use lowercase input only)."}},tag:{access:"protected",type:"string",value:"pageableTab"},hidden:{type:"string",access:"public",value:!1},parentWrapper:{type:"string",access:"protected",value:"pageableContainer"}}}},[["./pageableTab/index.js"]]]);