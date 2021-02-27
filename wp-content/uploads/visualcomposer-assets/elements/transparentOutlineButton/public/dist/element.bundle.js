(window.vcvWebpackJsonp4x=window.vcvWebpackJsonp4x||[]).push([[0],{"./node_modules/raw-loader/index.js!./transparentOutlineButton/cssMixins/basicColor.pcss":function(e,t){e.exports=".vce-button--style-transparent-outline--color-$selector {\n\n  @if $borderColor != false {\n    border-color: $borderColor;\n  }\n\n  &, &:link, &:visited, &:active, &:focus {\n    .vce-button--style-transparent-outline-inner {\n      @if $color != false {\n        color: $color;\n      }\n    }\n  }\n}\n"},"./node_modules/raw-loader/index.js!./transparentOutlineButton/cssMixins/basicHoverColor.pcss":function(e,t){e.exports=".vce-button--style-transparent-outline--hover-color-$selector {\n  &:hover {\n    &, &:link, &:visited, &:active, &:focus {\n      @if $hoverBackground != false {\n        background-color: $hoverBackground;\n      }\n\n      @if $hoverBorderColor != false {\n        border-color: $hoverBorderColor;\n      }\n\n      .vce-button--style-transparent-outline-inner {\n        @if $hoverColor != false {\n          color: $hoverColor;\n        }\n      }\n    }\n  }\n}\n"},"./node_modules/raw-loader/index.js!./transparentOutlineButton/editor.css":function(e,t){e.exports=".vce-button--style-transparent-outline-container {\n  min-height: 1em;\n}\n"},"./node_modules/raw-loader/index.js!./transparentOutlineButton/styles.css":function(e,t){e.exports="/* ----------------------------------------------\n * Button\n * ---------------------------------------------- */\n.vce-button--style-transparent-outline-container--align-left {\n  text-align: left;\n}\n.vce-button--style-transparent-outline-container--align-right {\n  text-align: right;\n}\n.vce-button--style-transparent-outline-container--align-center {\n  text-align: center;\n}\n.vce-button--style-transparent-outline-wrapper {\n  display: inline-block;\n  vertical-align: top;\n  max-width: 100%;\n}\na.vce-button--style-transparent-outline,\nbutton.vce-button--style-transparent-outline {\n  display: inline-block;\n  border-width: 5px;\n  border-style: solid;\n  box-sizing: border-box;\n  font-size: 16px;\n  line-height: normal;\n  cursor: pointer;\n  padding: 18px 43px;\n  transition: background 0.2s ease-in-out, border 0.2s ease-in-out;\n  background-color: transparent;\n  background-image: none;\n  margin-bottom: 0;\n  vertical-align: middle;\n  text-align: center;\n  word-wrap: break-word;\n  text-decoration: none;\n  position: relative;\n  background-clip: padding-box;\n  max-width: 100%;\n}\na.vce-button--style-transparent-outline:hover,\nbutton.vce-button--style-transparent-outline:hover,\na.vce-button--style-transparent-outline:focus,\nbutton.vce-button--style-transparent-outline:focus,\na.vce-button--style-transparent-outline:visited,\nbutton.vce-button--style-transparent-outline:visited,\na.vce-button--style-transparent-outline:link,\nbutton.vce-button--style-transparent-outline:link,\na.vce-button--style-transparent-outline:active,\nbutton.vce-button--style-transparent-outline:active {\n  box-shadow: none;\n}\na.vce-button--style-transparent-outline:focus,\nbutton.vce-button--style-transparent-outline:focus {\n  outline: none;\n}\na.vce-button--style-transparent-outline .vce-button--style-transparent-outline-inner,\nbutton.vce-button--style-transparent-outline .vce-button--style-transparent-outline-inner {\n  position: relative;\n  text-decoration: none;\n  background-color: transparent;\n  box-shadow: none;\n  transition: color 0.2s ease-in-out;\n}\n.vce-button--style-transparent-outline--border-rounded {\n  border-radius: 5px;\n}\n.vce-button--style-transparent-outline--border-round {\n  border-radius: 4em;\n}\n.vce-button--style-transparent-outline--border-square {\n  border-radius: 0;\n}\n"},"./transparentOutlineButton/index.js":function(e,t,n){"use strict";n.r(t);var o=n("./node_modules/vc-cake/index.js"),r=n.n(o),a=n("./node_modules/@babel/runtime/helpers/extends.js"),s=n.n(a),l=n("./node_modules/@babel/runtime/helpers/classCallCheck.js"),i=n.n(l),u=n("./node_modules/@babel/runtime/helpers/createClass.js"),c=n.n(u),p=n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),d=n.n(p),b=n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),v=n.n(b),m=n("./node_modules/@babel/runtime/helpers/inherits.js"),y=n.n(m),g=n("./node_modules/react/index.js"),x=n.n(g),h=function(e){function t(){return i()(this,t),d()(this,v()(t).apply(this,arguments))}return y()(t,e),c()(t,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.atts,o=e.editor,r=n.buttonUrl,a=n.buttonText,l=n.shape,i=n.alignment,u=n.customClass,c=n.metaCustomId,p="vce-button--style-transparent-outline-container",d="vce-button--style-transparent-outline",b={},v="button";r&&r.url&&(v="a",b={href:r.url,title:r.title,target:r.targetBlank?"_blank":void 0,rel:r.relNofollow?"nofollow":void 0});"string"==typeof u&&u&&(p+=" "+u),l&&(d+=" vce-button--style-transparent-outline--border-".concat(l)),i&&(p+=" vce-button--style-transparent-outline-container--align-".concat(i));var m=this.getMixinData("basicColor");m&&(d+=" vce-button--style-transparent-outline--color-".concat(m.selector)),(m=this.getMixinData("basicHoverColor"))&&(d+=" vce-button--style-transparent-outline--hover-color-".concat(m.selector)),c&&(b.id=c);var y=this.applyDO("margin"),g=this.applyDO("padding border background animation");return x.a.createElement("div",s()({className:p},o),x.a.createElement("div",s()({className:"vce-button--style-transparent-outline-wrapper vce",id:"el-"+t},y),x.a.createElement(v,s()({className:d},b,g),x.a.createElement("span",{className:"vce-button--style-transparent-outline-inner"},a))))}}]),t}(r.a.getService("api").elementComponent);(0,r.a.getService("cook").add)(n("./transparentOutlineButton/settings.json"),function(e){e.add(h)},{css:n("./node_modules/raw-loader/index.js!./transparentOutlineButton/styles.css"),editorCss:n("./node_modules/raw-loader/index.js!./transparentOutlineButton/editor.css"),mixins:{basicColor:{mixin:n("./node_modules/raw-loader/index.js!./transparentOutlineButton/cssMixins/basicColor.pcss")},basicHoverColor:{mixin:n("./node_modules/raw-loader/index.js!./transparentOutlineButton/cssMixins/basicHoverColor.pcss")}}},"")},"./transparentOutlineButton/settings.json":function(e){e.exports={groups:{type:"string",access:"protected",value:"Buttons"},buttonUrl:{type:"url",access:"public",value:{url:"",title:"",targetBlank:!1,relNofollow:!1},options:{label:"Link selection",dynamicField:!0}},hoverColor:{type:"color",access:"public",value:"#fff",options:{label:"Title hover color",cssMixin:{mixin:"basicHoverColor",property:"hoverColor",namePattern:"[\\da-f]+"}}},hoverBackground:{type:"color",access:"public",value:"#089fc7",options:{label:"Background hover color",cssMixin:{mixin:"basicHoverColor",property:"hoverBackground",namePattern:"[\\da-f]+"}}},hoverBorderColor:{type:"color",access:"public",value:"rgba(55,55,55,0.5)",options:{label:"Border hover color",cssMixin:{mixin:"basicHoverColor",property:"hoverBorderColor",namePattern:"[\\da-f]+"}}},buttonText:{type:"string",access:"public",value:"Apply Now",options:{label:"Button text",dynamicField:!0}},color:{type:"color",access:"public",value:"#BEBDBD",options:{label:"Title color",cssMixin:{mixin:"basicColor",property:"color",namePattern:"[\\da-f]+"}}},borderColor:{type:"color",access:"public",value:"rgba(190,190,190,0.5)",options:{label:"Border color",cssMixin:{mixin:"basicColor",property:"borderColor",namePattern:"[\\da-f]+"}}},shape:{type:"buttonGroup",access:"public",value:"square",options:{label:"Shape",values:[{label:"Square",value:"square",icon:"vcv-ui-icon-attribute-shape-square"},{label:"Rounded",value:"rounded",icon:"vcv-ui-icon-attribute-shape-rounded"},{label:"Round",value:"round",icon:"vcv-ui-icon-attribute-shape-round"}]}},designOptions:{type:"designOptions",access:"public",value:{},options:{label:"Design Options"}},editFormTab1:{type:"group",access:"protected",value:["buttonText","buttonUrl","alignment","shape","color","borderColor","hoverColor","hoverBackground","hoverBorderColor","metaCustomId","customClass"],options:{label:"General"}},metaEditFormTabs:{type:"group",access:"protected",value:["editFormTab1","designOptions"]},relatedTo:{type:"group",access:"protected",value:["General","Buttons"]},assetsLibrary:{access:"public",type:"string",value:["animate"]},alignment:{type:"buttonGroup",access:"public",value:"left",options:{label:"Alignment",values:[{label:"Left",value:"left",icon:"vcv-ui-icon-attribute-alignment-left"},{label:"Center",value:"center",icon:"vcv-ui-icon-attribute-alignment-center"},{label:"Right",value:"right",icon:"vcv-ui-icon-attribute-alignment-right"}]}},customClass:{type:"string",access:"public",value:"",options:{label:"Extra class name",description:"Add an extra class name to the element and refer to it from Custom CSS option."}},metaBackendLabels:{type:"group",access:"protected",value:[{value:["buttonText","buttonUrl"]}]},metaCustomId:{type:"customId",access:"public",value:"",options:{label:"Element ID",description:"Apply unique ID to element to link directly to it by using #your_id (for element ID use lowercase input only)."}},tag:{access:"protected",type:"string",value:"transparentOutlineButton"}}}},[["./transparentOutlineButton/index.js"]]]);