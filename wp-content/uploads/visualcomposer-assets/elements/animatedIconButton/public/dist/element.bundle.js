(window.vcvWebpackJsonp4x=window.vcvWebpackJsonp4x||[]).push([[0],{"./animatedIconButton/index.js":function(n,e,t){"use strict";t.r(e);var o=t("./node_modules/vc-cake/index.js"),i=t.n(o),a=t("./node_modules/@babel/runtime/helpers/extends.js"),c=t.n(a),s=t("./node_modules/@babel/runtime/helpers/classCallCheck.js"),r=t.n(s),l=t("./node_modules/@babel/runtime/helpers/createClass.js"),d=t.n(l),u=t("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),b=t.n(u),m=t("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),v=t.n(m),p=t("./node_modules/@babel/runtime/helpers/inherits.js"),y=t.n(p),g=t("./node_modules/react/index.js"),x=t.n(g),h=function(n){function e(){return r()(this,e),b()(this,v()(e).apply(this,arguments))}return y()(e,n),d()(e,[{key:"render",value:function(){var n=this.props,e=n.id,t=n.atts,o=n.editor,i=t.buttonUrl,a=t.buttonText,s=t.shape,r=t.alignment,l=t.customClass,d=t.metaCustomId,u=t.iconPicker,b="vce-button--style-animated-icon-container",m="vce-button--style-animated-icon",v="vce-button--style-animated-icon-inner-icon ".concat(u.icon),p={},y="button";i&&i.url&&(y="a",p={href:i.url,title:i.title,target:i.targetBlank?"_blank":void 0,rel:i.relNofollow?"nofollow":void 0});"string"==typeof l&&l&&(b+=" "+l),s&&(m+=" vce-button--style-animated-icon--border-".concat(s)),r&&(b+=" vce-button--style-animated-icon-container--align-".concat(r));var g=this.getMixinData("basicColor");g&&(m+=" vce-button--style-animated-icon--color-".concat(g.selector)),d&&(p.id=d);var h=this.applyDO("margin"),f=this.applyDO("padding border background animation");return x.a.createElement("div",c()({className:b},o),x.a.createElement("div",c()({className:"vce-button--style-animated-icon-wrapper vce",id:"el-"+e},h),x.a.createElement(y,c()({className:m},p,f),x.a.createElement("span",{className:v}),x.a.createElement("span",{className:"vce-button--style-animated-icon-inner"},x.a.createElement("span",{className:"vce-button--style-animated-icon-inner-text"},a)))))}}]),e}(i.a.getService("api").elementComponent);(0,i.a.getService("cook").add)(t("./animatedIconButton/settings.json"),function(n){n.add(h)},{css:t("./node_modules/raw-loader/index.js!./animatedIconButton/styles.css"),editorCss:t("./node_modules/raw-loader/index.js!./animatedIconButton/editor.css"),mixins:{basicColor:{mixin:t("./node_modules/raw-loader/index.js!./animatedIconButton/cssMixins/basicColor.pcss")}}},"")},"./animatedIconButton/settings.json":function(n){n.exports={groups:{type:"string",access:"protected",value:"Buttons"},buttonUrl:{type:"url",access:"public",value:{url:"",title:"",targetBlank:!1,relNofollow:!1},options:{label:"Link selection",dynamicField:!0}},buttonText:{type:"string",access:"public",value:"Apply Now",options:{label:"Button text",dynamicField:!0}},color:{type:"color",access:"public",value:"#fff",options:{label:"Title color",cssMixin:{mixin:"basicColor",property:"color",namePattern:"[\\da-f]+"}}},background:{type:"color",access:"public",value:"#e44470",options:{label:"Background color",cssMixin:{mixin:"basicColor",property:"background",namePattern:"[\\da-f]+"}}},shape:{type:"buttonGroup",access:"public",value:"round",options:{label:"Shape",values:[{label:"Square",value:"square",icon:"vcv-ui-icon-attribute-shape-square"},{label:"Rounded",value:"rounded",icon:"vcv-ui-icon-attribute-shape-rounded"},{label:"Round",value:"round",icon:"vcv-ui-icon-attribute-shape-round"}]}},alignment:{type:"buttonGroup",access:"public",value:"left",options:{label:"Alignment",values:[{label:"Left",value:"left",icon:"vcv-ui-icon-attribute-alignment-left"},{label:"Center",value:"center",icon:"vcv-ui-icon-attribute-alignment-center"},{label:"Right",value:"right",icon:"vcv-ui-icon-attribute-alignment-right"}]}},iconPicker:{type:"iconpicker",access:"public",value:{icon:"vcv-ui-icon-material vcv-ui-icon-material-navigate_next",iconSet:"material"},options:{label:"Icon"}},designOptions:{type:"designOptions",access:"public",value:{},options:{label:"Design Options"}},editFormTab1:{type:"group",access:"protected",value:["buttonText","buttonUrl","alignment","shape","color","background","iconPicker","metaCustomId","customClass"],options:{label:"General"}},metaEditFormTabs:{type:"group",access:"protected",value:["editFormTab1","designOptions"]},relatedTo:{type:"group",access:"protected",value:["General","Buttons"]},assetsLibrary:{access:"public",type:"string",value:["iconpicker","animate"]},customClass:{type:"string",access:"public",value:"",options:{label:"Extra class name",description:"Add an extra class name to the element and refer to it from Custom CSS option."}},metaBackendLabels:{type:"group",access:"protected",value:[{value:["buttonText","buttonUrl"]}]},metaCustomId:{type:"customId",access:"public",value:"",options:{label:"Element ID",description:"Apply unique Id to element to link directly to it by using #your_id (for element id use lowercase input only)."}},tag:{access:"protected",type:"string",value:"animatedIconButton"}}},"./node_modules/raw-loader/index.js!./animatedIconButton/cssMixins/basicColor.pcss":function(n,e){n.exports="a, button {\n  &.vce-button--style-animated-icon--color-$selector {\n\n    &, &:link, &:visited, &:active, &:focus {\n      @if $background != false {\n        background-color: $background;\n      }\n      .vce-button--style-animated-icon-inner-icon {\n        &::before {\n          @if $color != false {\n            color: $color;\n          }\n        }\n      }\n      .vce-button--style-animated-icon-inner-text {\n        @if $color != false {\n          color: $color;\n        }\n      }\n    }\n\n    @media screen and (min-width: 544px) {\n      &, &:link, &:visited, &:active, &:focus {\n        .vce-button--style-animated-icon-inner-text {\n          color: transparent;\n        }\n\n        &:hover {\n          .vce-button--style-animated-icon-inner-text {\n            @if $color != false {\n              color: $color;\n            }\n          }\n        }\n      }\n    }\n  }\n}"},"./node_modules/raw-loader/index.js!./animatedIconButton/editor.css":function(n,e){n.exports=".vce-button--style-animated-icon-container {\n  min-height: 1em;\n}\n"},"./node_modules/raw-loader/index.js!./animatedIconButton/styles.css":function(n,e){n.exports="/* ----------------------------------------------\n * Button\n * ---------------------------------------------- */\n.vce-button--style-animated-icon-container--align-left {\n  text-align: left;\n}\n.vce-button--style-animated-icon-container--align-right {\n  text-align: right;\n}\n.vce-button--style-animated-icon-container--align-center {\n  text-align: center;\n}\n.vce-button--style-animated-icon-wrapper {\n  display: inline-block;\n  vertical-align: top;\n  max-width: 100%;\n}\na.vce-button--style-animated-icon,\nbutton.vce-button--style-animated-icon {\n  display: inline-block;\n  border: 0;\n  box-sizing: border-box;\n  font-size: 16px;\n  line-height: 1.5;\n  cursor: pointer;\n  transition: color 0.1s ease-in-out;\n  background-color: transparent;\n  background-image: none;\n  margin-bottom: 0;\n  vertical-align: middle;\n  word-wrap: break-word;\n  text-align: left;\n  text-decoration: none;\n  position: relative;\n  overflow: visible;\n  padding: 15px;\n}\na.vce-button--style-animated-icon:hover,\nbutton.vce-button--style-animated-icon:hover,\na.vce-button--style-animated-icon:focus,\nbutton.vce-button--style-animated-icon:focus,\na.vce-button--style-animated-icon:visited,\nbutton.vce-button--style-animated-icon:visited,\na.vce-button--style-animated-icon:link,\nbutton.vce-button--style-animated-icon:link,\na.vce-button--style-animated-icon:active,\nbutton.vce-button--style-animated-icon:active {\n  box-shadow: none;\n}\na.vce-button--style-animated-icon:focus,\nbutton.vce-button--style-animated-icon:focus {\n  outline: none;\n}\na.vce-button--style-animated-icon .vce-button--style-animated-icon-inner-icon,\nbutton.vce-button--style-animated-icon .vce-button--style-animated-icon-inner-icon {\n  display: inline-block;\n  vertical-align: middle;\n}\na.vce-button--style-animated-icon .vce-button--style-animated-icon-inner-icon::before,\nbutton.vce-button--style-animated-icon .vce-button--style-animated-icon-inner-icon::before {\n  display: inline-block;\n  font-size: 22px;\n  text-align: center;\n  vertical-align: sub;\n  width: 24px;\n  height: 24px;\n}\na.vce-button--style-animated-icon .vce-button--style-animated-icon-inner-text,\nbutton.vce-button--style-animated-icon .vce-button--style-animated-icon-inner-text {\n  display: inline-block;\n  padding-left: 12px;\n  padding-right: 12px;\n}\na.vce-button--style-animated-icon .vce-button--style-animated-icon-inner,\nbutton.vce-button--style-animated-icon .vce-button--style-animated-icon-inner {\n  position: relative;\n  vertical-align: middle;\n}\n@media screen and (min-width: 544px) {\n  a.vce-button--style-animated-icon,\n  button.vce-button--style-animated-icon {\n    white-space: nowrap;\n  }\n  a.vce-button--style-animated-icon:hover,\n  button.vce-button--style-animated-icon:hover {\n    border: 0;\n    transition: color 0.1s ease-in-out 0.15s;\n  }\n  a.vce-button--style-animated-icon:hover .vce-button--style-animated-icon-inner,\n  button.vce-button--style-animated-icon:hover .vce-button--style-animated-icon-inner {\n    max-width: 100vw;\n    transition: max-width 0.5s ease-in-out;\n  }\n  a.vce-button--style-animated-icon:hover .vce-button--style-animated-icon-inner-text,\n  button.vce-button--style-animated-icon:hover .vce-button--style-animated-icon-inner-text {\n    transform: translateX(0%);\n    transition: transform 0.2s ease-in-out, color 0.1s ease-in-out 0.15s;\n  }\n  a.vce-button--style-animated-icon .vce-button--style-animated-icon-inner,\n  button.vce-button--style-animated-icon .vce-button--style-animated-icon-inner {\n    display: inline-block;\n    overflow: hidden;\n    max-width: 0;\n    transition: max-width 0.5s ease-in-out;\n    z-index: 997;\n  }\n  a.vce-button--style-animated-icon .vce-button--style-animated-icon-inner-text,\n  button.vce-button--style-animated-icon .vce-button--style-animated-icon-inner-text {\n    position: relative;\n    transform: translateX(-100%);\n    transition: transform 0.2s ease-in-out 0.1s, color 0.1s ease-in-out;\n  }\n  .vce-button--style-animated-icon-container--align-right a.vce-button--style-animated-icon .vce-button--style-animated-icon-inner,\n  .vce-button--style-animated-icon-container--align-right button.vce-button--style-animated-icon .vce-button--style-animated-icon-inner {\n    left: auto;\n    right: 0;\n  }\n  .vce-button--style-animated-icon-container--align-right a.vce-button--style-animated-icon .vce-button--style-animated-icon-inner-text,\n  .vce-button--style-animated-icon-container--align-right button.vce-button--style-animated-icon .vce-button--style-animated-icon-inner-text {\n    transform: translateX(100%);\n  }\n  .vce-button--style-animated-icon-container--align-right a.vce-button--style-animated-icon:hover .vce-button--style-animated-icon-inner-text,\n  .vce-button--style-animated-icon-container--align-right button.vce-button--style-animated-icon:hover .vce-button--style-animated-icon-inner-text {\n    transform: translateX(0%);\n    transition: transform 0.2s ease-in-out, color 0.1s ease-in-out 0.15s;\n  }\n}\n.vce-button--style-animated-icon--border-rounded {\n  border-radius: 5px;\n}\n.vce-button--style-animated-icon--border-rounded .vce-button--style-animated-icon-inner-text {\n  border-radius: 5px;\n}\n@media screen and (min-width: 544px) {\n  .vce-button--style-animated-icon--border-rounded {\n    border-radius: 5px;\n  }\n  .vce-button--style-animated-icon--border-rounded .vce-button--style-animated-icon-inner-text {\n    border-radius: 0 5px 5px 0;\n  }\n}\n@media screen and (min-width: 544px) {\n  .vce-button--style-animated-icon-container--align-right .vce-button--style-animated-icon--border-rounded .vce-button--style-animated-icon-inner-text {\n    border-radius: 5px 0 0 5px;\n  }\n}\n.vce-button--style-animated-icon--border-round {\n  border-radius: 4em;\n}\n.vce-button--style-animated-icon--border-round .vce-button--style-animated-icon-inner-text {\n  border-radius: 4em;\n}\n@media screen and (min-width: 544px) {\n  .vce-button--style-animated-icon--border-round {\n    border-radius: 4em;\n  }\n  .vce-button--style-animated-icon--border-round .vce-button--style-animated-icon-inner-text {\n    border-radius: 0 4em 4em 0;\n  }\n}\n@media screen and (min-width: 544px) {\n  .vce-button--style-animated-icon-container--align-right .vce-button--style-animated-icon--border-round .vce-button--style-animated-icon-inner-text {\n    border-radius: 4em 0 0 4em;\n  }\n}\n.vce-button--style-animated-icon--border-square {\n  border-radius: 0;\n}\n.vce-button--style-animated-icon--border-square .vce-button--style-animated-icon-inner-text {\n  border-radius: 0;\n}\n@media screen and (min-width: 544px) {\n  .vce-button--style-animated-icon--border-square {\n    border-radius: 0;\n  }\n  .vce-button--style-animated-icon--border-square .vce-button--style-animated-icon-inner-text {\n    border-radius: 0 0 0 0;\n  }\n}\n@media screen and (min-width: 544px) {\n  .vce-button--style-animated-icon-container--align-right .vce-button--style-animated-icon--border-square .vce-button--style-animated-icon-inner-text {\n    border-radius: 0 0 0 0;\n  }\n}\n"}},[["./animatedIconButton/index.js"]]]);