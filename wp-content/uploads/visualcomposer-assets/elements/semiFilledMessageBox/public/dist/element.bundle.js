(window.vcvWebpackJsonp4x=window.vcvWebpackJsonp4x||[]).push([[0],{"./node_modules/raw-loader/index.js!./semiFilledMessageBox/cssMixins/backgroundColor.pcss":function(e,s){e.exports=".vce-semi-filled-message-box {\n  &-background--$selector {\n    @if $background != false {\n      border-color: $background;\n\n      .vce-semi-filled-message-box-icon {\n        background: $background;\n      }\n    }\n  }\n}"},"./node_modules/raw-loader/index.js!./semiFilledMessageBox/cssMixins/color.pcss":function(e,s){e.exports=".vce-semi-filled-message-box {\n  &-icon-color--$selector {\n    @if $color != false {\n      color: $color;\n    }\n  }\n}"},"./node_modules/raw-loader/index.js!./semiFilledMessageBox/editor.css":function(e,s){e.exports=".vce-simple-message-box {\n  min-height: 1em;\n}\n\n.vce-simple-message-box .vce-simple-message-box-text > * > *:last-child {\n  margin-bottom: 0;\n}"},"./node_modules/raw-loader/index.js!./semiFilledMessageBox/styles.css":function(e,s){e.exports='.vce-semi-filled-message-box {\n  padding: 17px 20px;\n  border-width: 1px;\n  border-style: solid;\n  overflow: hidden;\n  position: relative;\n}\n\n.vce-semi-filled-message-box-style--success {\n  border-color: #4BD67B;\n}\n.vce-semi-filled-message-box-style--success .vce-semi-filled-message-box-icon {\n  background: #4BD67B;\n  color: #fff;\n}\n\n.vce-semi-filled-message-box-style--information {\n  border-color: #71B2DF;\n}\n.vce-semi-filled-message-box-style--information .vce-semi-filled-message-box-icon {\n  background: #71B2DF;\n  color: #fff;\n}\n\n.vce-semi-filled-message-box-style--warning {\n  border-color: #F5C76F;\n}\n.vce-semi-filled-message-box-style--warning .vce-semi-filled-message-box-icon {\n  background: #F5C76F;\n  color: #fff;\n}\n\n.vce-semi-filled-message-box-style--error {\n  border-color: #F57E7C;\n}\n.vce-semi-filled-message-box-style--error .vce-semi-filled-message-box-icon {\n  background: #F57E7C;\n  color: #fff;\n}\n\n.vce-semi-filled-message-box-border--rounded {\n  border-radius: 5px;\n}\n\n.vce-semi-filled-message-box-border--round {\n  border-radius: 4em;\n}\n\n.vce-semi-filled-message-box-inner {\n  padding-left: 60px;\n}\n\n.vce-semi-filled-message-box-inner p {\n  margin-bottom: 0;\n}\n\n.vce-semi-filled-message-box-inner .vce-semi-filled-message-box-icon {\n  transition: none;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  font-style: normal;\n  font-weight: normal;\n  width: 60px;\n}\n\n.vce-semi-filled-message-box .vce-semi-filled-message-box-icon > *,\n.vce-semi-filled-message-box .vce-semi-filled-message-box-icon::before,\n.vce-semi-filled-message-box .vce-semi-filled-message-box-icon::after {\n  font-size: 1.7em;\n  line-height: 1;\n  font-weight: inherit;\n  font-style: normal;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.vce-semi-filled-message-box .vce-semi-filled-message-box-text > *:last-child {\n  margin-bottom: 0;\n}\n\n.rtl.vce-semi-filled-message-box,\n[dir="rlt"].vce-semi-filled-message-box,\n.rtl .vce-semi-filled-message-box,\n[dir="rlt"] .vce-semi-filled-message-box {\n  direction: rtl;\n  unicode-bidi: embed;\n}\n\n.rtl.vce-semi-filled-message-box-inner,\n[dir="rlt"].vce-semi-filled-message-box-inner,\n.rtl .vce-semi-filled-message-box-inner,\n[dir="rlt"] .vce-semi-filled-message-box-inner {\n  padding-right: 2.5em;\n}\n\n.rtl.vce-semi-filled-message-box-icon,\n[dir="rlt"].vce-semi-filled-message-box-icon,\n.rtl .vce-semi-filled-message-box-icon,\n[dir="rlt"] .vce-semi-filled-message-box-icon {\n  right: 0;\n  left: auto;\n}\n\n.rtl.vce-semi-filled-message-box .vce-semi-filled-message-box-icon > *,\n[dir="rlt"].vce-semi-filled-message-box .vce-semi-filled-message-box-icon > *,\n.rtl .vce-semi-filled-message-box .vce-semi-filled-message-box-icon > *,\n[dir="rlt"] .vce-semi-filled-message-box .vce-semi-filled-message-box-icon > *,\n.rtl.vce-semi-filled-message-box .vce-semi-filled-message-box-icon::before,\n[dir="rlt"].vce-semi-filled-message-box .vce-semi-filled-message-box-icon::before,\n.rtl .vce-semi-filled-message-box .vce-semi-filled-message-box-icon::before,\n[dir="rlt"] .vce-semi-filled-message-box .vce-semi-filled-message-box-icon::before,\n.rtl.vce-semi-filled-message-box .vce-semi-filled-message-box-icon::after,\n[dir="rlt"].vce-semi-filled-message-box .vce-semi-filled-message-box-icon::after,\n.rtl .vce-semi-filled-message-box .vce-semi-filled-message-box-icon::after,\n[dir="rlt"] .vce-semi-filled-message-box .vce-semi-filled-message-box-icon::after {\n  left: auto;\n  right: 0;\n}\n\n.ltr.vce-semi-filled-message-box,\n[dir="ltr"].vce-semi-filled-message-box,\n.ltr .vce-semi-filled-message-box,\n[dir="ltr"] .vce-semi-filled-message-box {\n  direction: ltr;\n  unicode-bidi: normal;\n}\n'},"./semiFilledMessageBox/index.js":function(e,s,i){"use strict";i.r(s);var o=i("./node_modules/vc-cake/index.js"),n=i.n(o),l=i("./node_modules/@babel/runtime/helpers/extends.js"),a=i.n(l),c=i("./node_modules/@babel/runtime/helpers/classCallCheck.js"),t=i.n(c),r=i("./node_modules/@babel/runtime/helpers/createClass.js"),m=i.n(r),d=i("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),b=i.n(d),u=i("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),g=i.n(u),v=i("./node_modules/@babel/runtime/helpers/inherits.js"),x=i.n(v),f=i("./node_modules/react/index.js"),p=i.n(f),h=i("./node_modules/classnames/index.js"),y=i.n(h),k=function(e){function s(){return t()(this,s),b()(this,g()(s).apply(this,arguments))}return x()(s,e),m()(s,[{key:"render",value:function(){var e=this.props,s=e.id,i=e.atts,o=e.editor,n=i.boxStyle,l=i.messageText,c=i.iconPicker,t=i.shape,r=i.customClass,m=i.metaCustomId,d=["vce","vce-semi-filled-message-box"],b={},u=["vce-semi-filled-message-box-icon"];if("string"==typeof r&&r&&d.push(r),t&&"square"!==t&&d.push("vce-semi-filled-message-box-border--".concat(t)),n&&d.push("vce-semi-filled-message-box-style--".concat(n)),"success"===n)u.push("vcv-ui-icon-material vcv-ui-icon-material-check");else if("information"===n)u.push("vcv-ui-icon-material vcv-ui-icon-material-chat_bubble_outline");else if("warning"===n)u.push("vcv-ui-icon-material vcv-ui-icon-material-change_history");else if("error"===n)u.push("vcv-ui-icon-material vcv-ui-icon-material-close");else if("custom"===n){u.push(c.icon);var g=this.getMixinData("backgroundColor");g&&d.push("vce-semi-filled-message-box-background--".concat(g.selector)),(g=this.getMixinData("color"))&&u.push("vce-semi-filled-message-box-icon-color--".concat(g.selector))}m&&(b.id=m);var v=this.applyDO("margin padding border background animation");return d=y()(d),u=y()(u),p.a.createElement("div",a()({className:d},o,{id:"el-"+s},v),p.a.createElement("div",a()({className:"vce-semi-filled-message-box-inner"},b),p.a.createElement("span",{className:u}),p.a.createElement("span",{className:"vce-semi-filled-message-box-text"},l)))}}]),s}(n.a.getService("api").elementComponent);(0,n.a.getService("cook").add)(i("./semiFilledMessageBox/settings.json"),function(e){e.add(k)},{css:i("./node_modules/raw-loader/index.js!./semiFilledMessageBox/styles.css"),editorCss:i("./node_modules/raw-loader/index.js!./semiFilledMessageBox/editor.css"),mixins:{backgroundColor:{mixin:i("./node_modules/raw-loader/index.js!./semiFilledMessageBox/cssMixins/backgroundColor.pcss")},color:{mixin:i("./node_modules/raw-loader/index.js!./semiFilledMessageBox/cssMixins/color.pcss")}}},"")},"./semiFilledMessageBox/settings.json":function(e){e.exports={groups:{type:"string",access:"protected",value:"Content"},boxStyle:{type:"dropdown",access:"public",value:"success",options:{label:"Box style",values:[{label:"Success",value:"success"},{label:"Information",value:"information"},{label:"Warning",value:"warning"},{label:"Error",value:"error"},{label:"Custom",value:"custom"}]}},darkTextSkin:{type:"string",access:"public",value:!1},messageText:{type:"htmleditor",access:"public",value:"<p>Notification systems are used by businesses to deliver messages</span>",options:{label:"Message",inline:!0,dynamicField:!0,skinToggle:"darkTextSkin"}},background:{type:"color",access:"public",value:"#39CCCC",options:{label:"Background color",cssMixin:{mixin:"backgroundColor",property:"background",namePattern:"[\\da-f]+"},onChange:{rules:{boxStyle:{rule:"value",options:{value:"custom"}}},actions:[{action:"toggleVisibility"}]}}},shape:{type:"buttonGroup",access:"public",value:"rounded",options:{label:"Shape",values:[{label:"Square",value:"square",icon:"vcv-ui-icon-attribute-shape-square"},{label:"Rounded",value:"rounded",icon:"vcv-ui-icon-attribute-shape-rounded"},{label:"Round",value:"round",icon:"vcv-ui-icon-attribute-shape-round"}]}},designOptions:{type:"designOptions",access:"public",value:{},options:{label:"Design Options"}},editFormTab1:{type:"group",access:"protected",value:["boxStyle","background","iconPicker","iconColor","messageText","shape","metaCustomId","customClass"],options:{label:"General"}},metaEditFormTabs:{type:"group",access:"protected",value:["editFormTab1","designOptions"]},relatedTo:{type:"group",access:"protected",value:["General"]},iconPicker:{type:"iconpicker",access:"public",value:{icon:"vcv-ui-icon-material vcv-ui-icon-material-mode_edit",iconSet:"material"},options:{label:"Icon",onChange:{rules:{boxStyle:{rule:"value",options:{value:"custom"}}},actions:[{action:"toggleVisibility"}]}}},iconColor:{type:"color",access:"public",value:"#fff",options:{label:"Icon color",cssMixin:{mixin:"color",property:"color",namePattern:"[\\da-f]+"},onChange:{rules:{boxStyle:{rule:"value",options:{value:"custom"}}},actions:[{action:"toggleVisibility"}]}}},customClass:{type:"string",access:"public",value:"",options:{label:"Extra class name",description:"Add an extra class name to the element and refer to it from Custom CSS option."}},metaCustomId:{type:"customId",access:"public",value:"",options:{label:"Element ID",description:"Apply unique ID to element to link directly to it by using #your_id (for element ID use lowercase input only)."}},tag:{access:"protected",type:"string",value:"semiFilledMessageBox"}}}},[["./semiFilledMessageBox/index.js"]]]);