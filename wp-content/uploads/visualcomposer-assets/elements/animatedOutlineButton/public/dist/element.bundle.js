(window.vcvWebpackJsonp4x=window.vcvWebpackJsonp4x||[]).push([[0],{"./animatedOutlineButton/index.js":function(t,e,n){"use strict";n.r(e);var o=n("./node_modules/vc-cake/index.js"),i=n.n(o),a=n("./node_modules/@babel/runtime/helpers/extends.js"),l=n.n(a),u=n("./node_modules/@babel/runtime/helpers/classCallCheck.js"),s=n.n(u),r=n("./node_modules/@babel/runtime/helpers/createClass.js"),d=n.n(r),c=n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),b=n.n(c),m=n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),v=n.n(m),p=n("./node_modules/@babel/runtime/helpers/inherits.js"),y=n.n(p),g=n("./node_modules/react/index.js"),f=n.n(g),h=function(t){function e(){return s()(this,e),b()(this,v()(e).apply(this,arguments))}return y()(e,t),d()(e,[{key:"render",value:function(){var t=this.props,e=t.id,n=t.atts,o=t.editor,i=n.buttonUrl,a=n.buttonText,u=n.shape,s=n.alignment,r=n.customClass,d=n.metaCustomId,c="vce-button--style-animated-outline-container",b="vce-button--style-animated-outline",m={},v="button";i&&i.url&&(v="a",m={href:i.url,title:i.title,target:i.targetBlank?"_blank":void 0,rel:i.relNofollow?"nofollow":void 0});"string"==typeof r&&r&&(c+=" "+r),u&&(b+=" vce-button--style-animated-outline--border-".concat(u)),s&&(c+=" vce-button--style-animated-outline-container--align-".concat(s));var p=this.getMixinData("titleColor");p&&(b+=" vce-button--style-animated-outline--color-".concat(p.selector)),(p=this.getMixinData("outlineColor"))&&(b+=" vce-button--style-animated-outline--outline-color-".concat(p.selector)),d&&(m.id=d);var y=this.applyDO("margin"),g=this.applyDO("padding border background animation");return f.a.createElement("div",l()({className:c},o),f.a.createElement("div",l()({className:"vce-button--style-animated-outline-wrapper vce",id:"el-"+e},y),f.a.createElement(v,l()({className:b},m,g),f.a.createElement("span",{className:"vce-button--style-animated-outline-inner"},a))))}}]),e}(i.a.getService("api").elementComponent);(0,i.a.getService("cook").add)(n("./animatedOutlineButton/settings.json"),function(t){t.add(h)},{css:n("./node_modules/raw-loader/index.js!./animatedOutlineButton/styles.css"),editorCss:n("./node_modules/raw-loader/index.js!./animatedOutlineButton/editor.css"),mixins:{titleColor:{mixin:n("./node_modules/raw-loader/index.js!./animatedOutlineButton/cssMixins/titleColor.pcss")},outlineColor:{mixin:n("./node_modules/raw-loader/index.js!./animatedOutlineButton/cssMixins/outlineColor.pcss")}}},"")},"./animatedOutlineButton/settings.json":function(t){t.exports={groups:{type:"string",access:"protected",value:"Buttons"},buttonText:{type:"string",access:"public",value:"Apply Now",options:{label:"Button text",dynamicField:!0}},buttonUrl:{type:"url",access:"public",value:{url:"",title:"",targetBlank:!1,relNofollow:!1},options:{label:"Link selection",dynamicField:!0}},alignment:{type:"buttonGroup",access:"public",value:"left",options:{label:"Alignment",values:[{label:"Left",value:"left",icon:"vcv-ui-icon-attribute-alignment-left"},{label:"Center",value:"center",icon:"vcv-ui-icon-attribute-alignment-center"},{label:"Right",value:"right",icon:"vcv-ui-icon-attribute-alignment-right"}]}},shape:{type:"buttonGroup",access:"public",value:"square",options:{label:"Shape",values:[{label:"Square",value:"square",icon:"vcv-ui-icon-attribute-shape-square"},{label:"Rounded",value:"rounded",icon:"vcv-ui-icon-attribute-shape-rounded"},{label:"Round",value:"round",icon:"vcv-ui-icon-attribute-shape-round"}]}},titleColor:{type:"color",access:"public",value:"#3d3d3d",options:{label:"Title color",cssMixin:{mixin:"titleColor",property:"titleColor",namePattern:"[\\da-f]+"}}},outlineColor:{type:"color",access:"public",value:"#ffc100",options:{label:"Outline color",cssMixin:{mixin:"outlineColor",property:"outlineColor",namePattern:"[\\da-f]+"}}},designOptions:{type:"designOptions",access:"public",value:{},options:{label:"Design Options"}},editFormTab1:{type:"group",access:"protected",value:["buttonText","buttonUrl","alignment","shape","titleColor","outlineColor","metaCustomId","customClass"],options:{label:"General"}},metaEditFormTabs:{type:"group",access:"protected",value:["editFormTab1","designOptions"]},relatedTo:{type:"group",access:"protected",value:["General","Buttons"]},assetsLibrary:{access:"public",type:"string",value:["animate"]},customClass:{type:"string",access:"public",value:"",options:{label:"Extra class name",description:"Add an extra class name to the element and refer to it from Custom CSS option."}},metaBackendLabels:{type:"group",access:"protected",value:[{value:["buttonText","buttonUrl"]}]},metaCustomId:{type:"customId",access:"public",value:"",options:{label:"Element ID",description:"Apply unique Id to element to link directly to it by using #your_id (for element id use lowercase input only)."}},tag:{access:"protected",type:"string",value:"animatedOutlineButton"}}},"./node_modules/raw-loader/index.js!./animatedOutlineButton/cssMixins/outlineColor.pcss":function(t,e){t.exports="a, button {\n  &.vce-button--style-animated-outline--outline-color-$selector {\n    &, &:focus, &:link, &:visited, &:active, &:hover {\n      &::before,\n      &::after {\n        @if $outlineColor != false {\n          border-color: $outlineColor;\n        }\n      }\n    }\n  }\n}"},"./node_modules/raw-loader/index.js!./animatedOutlineButton/cssMixins/titleColor.pcss":function(t,e){t.exports="a, button {\n  &.vce-button--style-animated-outline--color-$selector {\n    &, &:focus, &:link, &:visited, &:active, &:hover {\n      @if $titleColor != false {\n        color: $titleColor;\n      }\n    }\n  }\n}"},"./node_modules/raw-loader/index.js!./animatedOutlineButton/editor.css":function(t,e){t.exports=".vce-button--style-animated-outline-container {\n  min-height: 1em;\n}\n"},"./node_modules/raw-loader/index.js!./animatedOutlineButton/styles.css":function(t,e){t.exports=".vce-button--style-animated-outline-container--align-left {\n  text-align: left;\n}\n.vce-button--style-animated-outline-container--align-center {\n  text-align: center;\n}\n.vce-button--style-animated-outline-container--align-right {\n  text-align: right;\n}\na.vce-button--style-animated-outline,\nbutton.vce-button--style-animated-outline {\n  display: inline-block;\n  border: none;\n  box-sizing: border-box;\n  font-size: 16px;\n  line-height: normal;\n  cursor: pointer;\n  padding: 18px 43px;\n  transition: background-color 0.2s ease-in-out;\n  background-image: none;\n  margin-bottom: 0;\n  vertical-align: middle;\n  text-align: center;\n  word-wrap: break-word;\n  text-decoration: none;\n  position: relative;\n  background-clip: padding-box;\n  background: transparent;\n  max-width: 100%;\n}\na.vce-button--style-animated-outline,\nbutton.vce-button--style-animated-outline,\na.vce-button--style-animated-outline:hover,\nbutton.vce-button--style-animated-outline:hover,\na.vce-button--style-animated-outline:focus,\nbutton.vce-button--style-animated-outline:focus,\na.vce-button--style-animated-outline:visited,\nbutton.vce-button--style-animated-outline:visited,\na.vce-button--style-animated-outline:link,\nbutton.vce-button--style-animated-outline:link,\na.vce-button--style-animated-outline:active,\nbutton.vce-button--style-animated-outline:active {\n  box-shadow: none;\n  text-decoration: none;\n}\na.vce-button--style-animated-outline::before,\nbutton.vce-button--style-animated-outline::before,\na.vce-button--style-animated-outline::after,\nbutton.vce-button--style-animated-outline::after {\n  content: '';\n  position: absolute;\n  right: 43px;\n  left: 43px;\n  height: 0;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: inherit;\n  transition: height 0.2s ease-in-out, left 0.2s ease-in-out 0.2s, right 0.2s ease-in-out 0.2s;\n}\na.vce-button--style-animated-outline::before,\nbutton.vce-button--style-animated-outline::before {\n  top: 0;\n  border-bottom: 0;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\na.vce-button--style-animated-outline::after,\nbutton.vce-button--style-animated-outline::after {\n  bottom: 0;\n  border-top: 0;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\na.vce-button--style-animated-outline:hover::before,\nbutton.vce-button--style-animated-outline:hover::before,\na.vce-button--style-animated-outline:hover::after,\nbutton.vce-button--style-animated-outline:hover::after {\n  left: 0;\n  right: 0;\n  height: 50%;\n  transition: left 0.2s ease-in-out, right 0.2s ease-in-out, height 0.2s ease-in-out 0.2s;\n}\na.vce-button--style-animated-outline:focus,\nbutton.vce-button--style-animated-outline:focus {\n  outline: none;\n}\na.vce-button--style-animated-outline .vce-button--style-animated-outline-inner,\nbutton.vce-button--style-animated-outline .vce-button--style-animated-outline-inner {\n  position: relative;\n}\na.vce-button--style-animated-outline.vce-button--style-animated-outline--border-square,\nbutton.vce-button--style-animated-outline.vce-button--style-animated-outline--border-square {\n  border-radius: 0;\n}\na.vce-button--style-animated-outline.vce-button--style-animated-outline--border-rounded,\nbutton.vce-button--style-animated-outline.vce-button--style-animated-outline--border-rounded {\n  border-radius: 5px;\n}\na.vce-button--style-animated-outline.vce-button--style-animated-outline--border-round,\nbutton.vce-button--style-animated-outline.vce-button--style-animated-outline--border-round {\n  border-radius: 4em;\n}\n"}},[["./animatedOutlineButton/index.js"]]]);