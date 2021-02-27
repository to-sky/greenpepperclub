vcvWebpackJsonp([1],{"./gradientButton/component.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n("./node_modules/babel-runtime/helpers/extends.js"),a=o(r),i=n("./node_modules/babel-runtime/core-js/object/get-prototype-of.js"),l=o(i),s=n("./node_modules/babel-runtime/helpers/classCallCheck.js"),u=o(s),c=n("./node_modules/babel-runtime/helpers/createClass.js"),d=o(c),b=n("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),g=o(b),v=n("./node_modules/babel-runtime/helpers/inherits.js"),p=o(v),y=n("./node_modules/react/index.js"),m=o(y),f=n("./node_modules/vc-cake/index.js"),h=o(f),x=h["default"].getService("api"),C=(h["default"].getService("cook"),function(e){function t(){return(0,u["default"])(this,t),(0,g["default"])(this,(t.__proto__||(0,l["default"])(t)).apply(this,arguments))}return(0,p["default"])(t,e),(0,d["default"])(t,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.atts,o=e.editor,r=n.buttonUrl,i=n.buttonText,l=n.shape,s=(n.color,n.alignment),u=n.customClass,c=n.buttonType,d=n.metaCustomId,b=["vce-button--style-gradient-container"],g=[],v=i,p={},y="button",f=c?"vce-button--style-"+c:"vce-button--style-gradient-horizontal";if(g.push(f),r&&r.url){y="a";var h=r.url,x=r.title,C=r.targetBlank,w=r.relNofollow;p={href:h,title:x,target:C?"_blank":void 0,rel:w?"nofollow":void 0}}"string"==typeof u&&u&&b.push(u),l&&"square"!==l&&g.push("vce-button--style-gradient--border-"+l),s&&b.push("vce-button--style-gradient-container--align-"+s);var k=this.getMixinData("color");k&&g.push(f+"--color-"+k.selector),k=this.getMixinData("gradientColor"),k&&g.push(f+"--gradient-color-"+k.selector),d&&(p.id=d);var z=this.applyDO("margin"),_=this.applyDO("padding border background animation");return m["default"].createElement("div",(0,a["default"])({className:b.join(" ")},o),m["default"].createElement("span",(0,a["default"])({className:"vce-button--style-gradient-wrapper vce",id:"el-"+t},z),m["default"].createElement(y,(0,a["default"])({className:g.join(" ")},p,_),v)))}}]),t}(x.elementComponent));t["default"]=C},0:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var r=n("./node_modules/vc-cake/index.js"),a=o(r),i=n("./gradientButton/component.js"),l=o(i),s=a["default"].getService("cook").add;s(n("./gradientButton/settings.json"),function(e){e.add(l["default"])},{css:n("./node_modules/raw-loader/index.js!./gradientButton/styles.css"),editorCss:n("./node_modules/raw-loader/index.js!./gradientButton/editor.css"),mixins:{color:{mixin:n("./node_modules/raw-loader/index.js!./gradientButton/cssMixins/color.pcss")},gradientColor:{mixin:n("./node_modules/raw-loader/index.js!./gradientButton/cssMixins/gradientColor.pcss")}}},"")},"./gradientButton/settings.json":function(e,t){e.exports={buttonUrl:{type:"url",access:"public",value:{url:"",title:"",targetBlank:!1,relNofollow:!1},options:{label:"Link selection"}},buttonText:{type:"string",access:"public",value:"Apply Now",options:{label:"Button text"}},color:{type:"color",access:"public",value:"#fff",options:{label:"Title color",cssMixin:{mixin:"color",property:"color",namePattern:"[\\da-f]+"}}},gradientColorOne:{type:"color",access:"public",value:"#d85bd3",options:{label:"Gradient color one",cssMixin:{mixin:"gradientColor",property:"startColor",namePattern:"[\\da-f]+"}}},gradientColorTwo:{type:"color",access:"public",value:"#9d41d1",options:{label:"Gradient color two",cssMixin:{mixin:"gradientColor",property:"endColor",namePattern:"[\\da-f]+"}}},shape:{type:"buttonGroup",access:"public",value:"square",options:{label:"Shape",values:[{label:"Square",value:"square",icon:"vcv-ui-icon-attribute-shape-square"},{label:"Rounded",value:"rounded",icon:"vcv-ui-icon-attribute-shape-rounded"},{label:"Round",value:"round",icon:"vcv-ui-icon-attribute-shape-round"}]}},designOptions:{type:"designOptions",access:"public",value:{},options:{label:"Design Options"}},editFormTab1:{type:"group",access:"protected",value:["buttonText","buttonUrl","alignment","shape","color","gradientColorOne","gradientColorTwo","buttonType","metaCustomId","customClass"],options:{label:"General"}},metaEditFormTabs:{type:"group",access:"protected",value:["editFormTab1","designOptions"]},relatedTo:{type:"group",access:"protected",value:["General"]},alignment:{type:"buttonGroup",access:"public",value:"left",options:{label:"Alignment",values:[{label:"Left",value:"left",icon:"vcv-ui-icon-attribute-alignment-left"},{label:"Center",value:"center",icon:"vcv-ui-icon-attribute-alignment-center"},{label:"Right",value:"right",icon:"vcv-ui-icon-attribute-alignment-right"}]}},customClass:{type:"string",access:"public",value:"",options:{label:"Extra class name",description:"Add an extra class name to the element and refer to it from Custom CSS option."}},buttonType:{type:"dropdown",access:"public",value:"gradient-horizontal",options:{label:"Gradient direction",values:[{label:"Horizontal",value:"gradient-horizontal"},{label:"Vertical",value:"gradient-vertical"}]}},metaBackendLabels:{type:"group",access:"protected",value:[{value:["buttonText","buttonUrl","shape","gradientColorOne","gradientColorTwo"]}]},metaCustomId:{type:"customId",access:"public",value:"",options:{label:"Element ID",description:"Apply unique Id to element to link directly to it by using #your_id (for element id use lowercase input only)."}},tag:{access:"protected",type:"string",value:"gradientButton"}}},"./node_modules/raw-loader/index.js!./gradientButton/cssMixins/color.pcss":function(e,t){e.exports=".vce-button--style-gradient {\n  &-horizontal {\n    &--color-$selector {\n      a&,\n      button& {\n        @if $color != false {\n          color: $color;\n        }\n\n        @if $color != false {\n          &:hover {\n            color: $color;\n          }\n        }\n      }\n    }\n  }\n\n  &-vertical {\n    &--color-$selector {\n      a&,\n      button& {\n        @if $color != false {\n          color: $color;\n        }\n\n        @if $color != false {\n          &:hover {\n            color: $color;\n          }\n        }\n      }\n    }\n  }\n}"},"./node_modules/raw-loader/index.js!./gradientButton/cssMixins/gradientColor.pcss":function(e,t){e.exports=".vce-button--style-gradient {\n  &-horizontal {\n    &--gradient-color-$selector {\n      a&,\n      button& {\n        background-image: linear-gradient(to right, $startColor, $endColor);\n\n        &::before {\n          background-image: linear-gradient(to right, $endColor, $startColor);\n        }\n      }\n    }\n  }\n\n  &-vertical {\n    &--gradient-color-$selector {\n      a&,\n      button& {\n        background-image: linear-gradient(to bottom, $startColor, $endColor);\n\n        &::before {\n          background-image: linear-gradient(to bottom, $endColor, $startColor);\n        }\n      }\n    }\n  }\n}"},"./node_modules/raw-loader/index.js!./gradientButton/editor.css":function(e,t){e.exports=".vce-button--style-gradient-container {\n  min-height: 1em;\n}\n"},"./node_modules/raw-loader/index.js!./gradientButton/styles.css":function(e,t){e.exports='.vce-button--style-gradient-container--align-left {\n  text-align: left;\n}\n.vce-button--style-gradient-container--align-right {\n  text-align: right;\n}\n.vce-button--style-gradient-container--align-center {\n  text-align: center;\n}\n.vce-button--style-gradient-wrapper {\n  display: inline-block;\n  vertical-align: top;\n  max-width: 100%;\n}\n.vce-button--style-gradient-horizontal,\n.vce-button--style-gradient-vertical {\n  font-size: 16px;\n  padding: 15px 43px;\n}\na.vce-button--style-gradient-horizontal,\na.vce-button--style-gradient-vertical,\nbutton.vce-button--style-gradient-horizontal,\nbutton.vce-button--style-gradient-vertical {\n  background-color: transparent;\n  background-image: none;\n  border: none;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  cursor: pointer;\n  display: inline-block;\n  margin: 0;\n  max-width: 100%;\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  vertical-align: middle;\n  white-space: normal;\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  line-height: normal;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  background-size: 100%;\n  z-index: 1;\n}\na.vce-button--style-gradient-horizontal:hover,\na.vce-button--style-gradient-vertical:hover,\nbutton.vce-button--style-gradient-horizontal:hover,\nbutton.vce-button--style-gradient-vertical:hover,\na.vce-button--style-gradient-horizontal:focus,\na.vce-button--style-gradient-vertical:focus,\nbutton.vce-button--style-gradient-horizontal:focus,\nbutton.vce-button--style-gradient-vertical:focus {\n  text-decoration: none;\n  outline: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\na.vce-button--style-gradient-horizontal:before,\na.vce-button--style-gradient-vertical:before,\nbutton.vce-button--style-gradient-horizontal:before,\nbutton.vce-button--style-gradient-vertical:before {\n  border-radius: inherit;\n  content: \'\';\n  display: block;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  z-index: -1;\n}\na.vce-button--style-gradient-horizontal:hover::before,\na.vce-button--style-gradient-vertical:hover::before,\nbutton.vce-button--style-gradient-horizontal:hover::before,\nbutton.vce-button--style-gradient-vertical:hover::before,\na.vce-button--style-gradient-horizontal:focus::before,\na.vce-button--style-gradient-vertical:focus::before,\nbutton.vce-button--style-gradient-horizontal:focus::before,\nbutton.vce-button--style-gradient-vertical:focus::before {\n  opacity: 1;\n}\nbutton.vce-button--style-gradient-horizontal,\nbutton.vce-button--style-gradient-vertical {\n  -webkit-appearance: none;\n}\n.vce-button--style-gradient-horizontal::before,\na.vce-button--style-gradient-horizontal::before,\nbutton.vce-button--style-gradient-horizontal::before {\n  -webkit-transition: opacity 0.5s ease-in-out;\n  transition: opacity 0.5s ease-in-out;\n}\n.vce-button--style-gradient-vertical::before,\na.vce-button--style-gradient-vertical::before,\nbutton.vce-button--style-gradient-vertical::before {\n  -webkit-transition: opacity 0.5s ease-in-out;\n  transition: opacity 0.5s ease-in-out;\n}\na.vce-button--style-gradient--border-rounded,\na.vce-button--style-gradient--border-round,\nbutton.vce-button--style-gradient--border-rounded,\nbutton.vce-button--style-gradient--border-round {\n  position: relative;\n  overflow: hidden;\n}\na.vce-button--style-gradient--border-rounded,\nbutton.vce-button--style-gradient--border-rounded {\n  border-radius: 5px;\n}\na.vce-button--style-gradient--border-round,\nbutton.vce-button--style-gradient--border-round {\n  border-radius: 4em;\n}\n.rtl.vce-button--style-gradient,\n[dir="rlt"].vce-button--style-gradient,\n.rtl .vce-button--style-gradient,\n[dir="rlt"] .vce-button--style-gradient {\n  direction: rtl;\n  unicode-bidi: embed;\n}\n.ltr.vce-button--style-gradient,\n[dir="ltr"].vce-button--style-gradient,\n.ltr .vce-button--style-gradient,\n[dir="ltr"] .vce-button--style-gradient {\n  direction: ltr;\n  unicode-bidi: normal;\n}\n'}});