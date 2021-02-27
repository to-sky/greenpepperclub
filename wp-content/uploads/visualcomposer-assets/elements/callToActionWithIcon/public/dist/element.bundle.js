(window.vcvWebpackJsonp4x=window.vcvWebpackJsonp4x||[]).push([[0],{"./callToActionWithIcon/index.js":function(n,t,o){"use strict";o.r(t);var e=o("./node_modules/vc-cake/index.js"),i=o.n(e),c=o("./node_modules/@babel/runtime/helpers/extends.js"),a=o.n(c),l=o("./node_modules/@babel/runtime/helpers/classCallCheck.js"),r=o.n(l),s=o("./node_modules/@babel/runtime/helpers/createClass.js"),d=o.n(s),u=o("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),g=o.n(u),p=o("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),h=o.n(p),v=o("./node_modules/@babel/runtime/helpers/inherits.js"),m=o.n(v),b=o("./node_modules/react/index.js"),w=o.n(b),x=o("./node_modules/classnames/index.js"),f=o.n(x),y=i.a.getService("cook"),k=function(n){function t(){return r()(this,t),g()(this,h()(t).apply(this,arguments))}return m()(t,n),d()(t,[{key:"render",value:function(){var n=this.props,t=n.id,o=n.atts,e=n.editor,i=o.description,c=o.align,l=o.shape,r=o.addButton,s=o.customClass,d=o.button,u=o.background,g=o.metaCustomId,p=o.icon,h=o.iconAlign,v=o.iconType,m=o.image,b={},x=f()({"vce-call-to-action-with-icon-container":!0,"vce-call-to-action-with-icon-media--xs":!0}),k=f()({vce:!0,"vce-call-to-action-with-icon":!0,"vce-call-to-action-with-icon--min-height":!1,"vce-call-to-action-with-icon--alignment-start":"start"===c,"vce-call-to-action-with-icon--alignment-end":"end"===c}),C=["vce-call-to-action-with-icon--wrap-row"];"string"==typeof s&&s&&(k=k.concat(" "+s));var T=this.getMixinData("backgroundColor");"color"===u&&T?C.push("vce-call-to-action-with-icon--background-color-".concat(T.selector)):"gradient"===u&&T&&C.push("vce-call-to-action-with-icon--background-gradient-".concat(T.selector)),l&&C.push("vce-call-to-action-with-icon--shape-".concat(l));var I="";if(r){var A=y.get(d);I=A?A.render(null,!1):null}g&&(b.id=g);var j=null,S=(j="image"===v?y.get(m):y.get(p))?j.render(null,!1):null;C.push("vce-call-to-action-with-icon--alignment-".concat(h)),C.push("vce-call-to-action-with-icon-do-background-color"),C=f()(C);var _=this.applyDO("margin animation"),E=this.applyDO("background border"),$=this.applyDO("padding");return w.a.createElement("section",a()({className:x},e,b),w.a.createElement("div",a()({className:k,id:"el-"+t},_),w.a.createElement("div",a()({className:C},{},E),w.a.createElement("div",{className:"vce-call-to-action-with-icon--wrap"},w.a.createElement("div",a()({className:"vce-call-to-action-with-icon--content"},$),w.a.createElement("div",{className:"vcv-call-to-action-with-icon--icon"},S),w.a.createElement("div",a()({className:"vce-call-to-action-with-icon--wrap-container-button"},$),w.a.createElement("div",{className:"vce-call-to-action-with-icon--content-container"},i),I))))))}}]),t}(i.a.getService("api").elementComponent);(0,i.a.getService("cook").add)(o("./callToActionWithIcon/settings.json"),function(n){n.add(k)},{css:o("./node_modules/raw-loader/index.js!./callToActionWithIcon/styles.css"),editorCss:o("./node_modules/raw-loader/index.js!./callToActionWithIcon/editor.css"),mixins:{backgroundColor:{mixin:o("./node_modules/raw-loader/index.js!./callToActionWithIcon/cssMixins/backgroundColor.pcss")},doBackgroundColor:{mixin:o("./node_modules/raw-loader/index.js!./callToActionWithIcon/cssMixins/doBackgroundColor.pcss")}}},"")},"./callToActionWithIcon/settings.json":function(n){n.exports={tag:{type:"string",access:"protected",value:"callToActionWithIcon"},description:{type:"htmleditor",access:"public",value:'<h2><span style="color:#615636;">NORTH ATLANTIC</span></h2>\n<p><span style="color:#967D37;">The interior consists of a plateau characterised by sand and lava fields, mountains, and glaciers.</span></p>',options:{label:"Description",inline:!0,dynamicField:!0,skinToggle:"lightTextSkin"}},darkTextSkin:{type:"toggleSmall",access:"public",value:!0},background:{type:"dropdown",access:"public",value:"color",options:{label:"Background type",values:[{label:"Color",value:"color"},{label:"Gradient",value:"gradient"}]}},backgroundColor:{type:"color",access:"public",value:"#F8E71C",options:{label:"Background color",cssMixin:{mixin:"backgroundColor",property:"backgroundColor",namePattern:"[\\da-f]+"},onChange:{rules:{background:{rule:"value",options:{value:"color"}}},actions:[{action:"toggleVisibility"}]}}},gradientStart:{type:"color",access:"public",value:" #C08045",options:{label:"Start color",cssMixin:{mixin:"backgroundColor",property:"gradientStart",namePattern:"[\\da-f]+"},onChange:{rules:{background:{rule:"value",options:{value:"gradient"}}},actions:[{action:"toggleVisibility"}]}}},gradientEnd:{type:"color",access:"public",value:" #473070",options:{label:"End color",cssMixin:{mixin:"backgroundColor",property:"gradientEnd",namePattern:"[\\da-f]+"},onChange:{rules:{background:{rule:"value",options:{value:"gradient"}}},actions:[{action:"toggleVisibility"}]}}},gradientAngle:{type:"range",access:"public",value:"45",options:{label:"Gradient angle",cssMixin:{mixin:"backgroundColor",property:"gradientAngle",namePattern:"[\\d\\-]+"},min:0,max:180,measurement:"°",onChange:{rules:{background:{rule:"value",options:{value:"gradient"}}},actions:[{action:"toggleVisibility"}]}}},align:{type:"buttonGroup",access:"public",value:"start",options:{label:"Content alignment",values:[{label:"Left",value:"start",icon:"vcv-ui-icon-attribute-alignment-left"},{label:"Center",value:"center",icon:"vcv-ui-icon-attribute-alignment-center"},{label:"Right",value:"end",icon:"vcv-ui-icon-attribute-alignment-right"}]}},shape:{type:"buttonGroup",access:"public",value:"square",options:{label:"Shape",values:[{label:"Square",value:"square",icon:"vcv-ui-icon-attribute-shape-square"},{label:"Rounded",value:"rounded",icon:"vcv-ui-icon-attribute-shape-rounded"},{label:"Round",value:"round",icon:"vcv-ui-icon-attribute-shape-round"}]}},addButton:{type:"toggle",access:"public",value:!0,options:{label:"Add button"}},iconType:{type:"dropdown",access:"public",value:"image",options:{label:"Icon type",values:[{label:"Icon",value:"icon"},{label:"Image",value:"image"}]}},customClass:{type:"string",access:"public",value:"",options:{label:"Extra class name",description:"Add an extra class name to the element and refer to it from Custom CSS option."}},button:{type:"element",access:"public",value:{tag:"basicButton",alignment:"left",color:"#fff",background:"#615636",shape:"round"},options:{category:"Button",tabLabel:"Button",merge:{attributes:[{key:"alignment",type:"string"},{key:"buttonText",type:"string"},{key:"buttonUrl",type:"object"}]},onChange:{rules:{addButton:{rule:"toggle"}},actions:[{action:"toggleSectionVisibility"}]}}},icon:{type:"element",access:"public",value:{tag:"icon",iconPicker:{icon:"vcv-ui-icon-material vcv-ui-icon-material-search",iconSet:"material"},iconAlignment:"center",iconColor:"#615531",size:"medium",shape:"none"},options:{category:"Icon",tabLabel:"Icon",exclude:["iconAlignment"],onChange:{rules:{iconType:{rule:"value",options:{value:"icon"}}},actions:[{action:"toggleSectionVisibility"}]}}},image:{type:"element",access:"public",value:{tag:"singleImage",image:"[assetsPath]/mountain.png",size:"thumbnail",alignment:"center"},options:{category:"Image",tabLabel:"Image",exclude:["alignment"],onChange:{rules:{iconType:{rule:"value",options:{value:"image"}}},actions:[{action:"toggleSectionVisibility"}]}}},iconAlign:{type:"buttonGroup",access:"public",value:"left",options:{label:"Icon/Image alignment",values:[{label:"Left",value:"left",icon:"vcv-ui-icon-attribute-alignment-left"},{label:"Right",value:"right",icon:"vcv-ui-icon-attribute-alignment-right"}]}},designOptions:{type:"designOptions",access:"public",value:{},options:{label:"Design Options",cssMixin:{mixin:"doBackgroundColor",property:"background",selector:"do-background-color"}}},editFormTab1:{type:"group",access:"protected",value:["description","background","backgroundColor","gradientStart","gradientEnd","gradientAngle","align","iconAlign","shape","addButton","iconType","metaCustomId","customClass"],options:{label:"General"}},metaEditFormTabs:{type:"group",access:"protected",value:["editFormTab1","button","icon","image","designOptions"]},relatedTo:{type:"group",access:"protected",value:["General"]},metaCustomId:{type:"customId",access:"public",value:"",options:{label:"Element ID",description:"Apply unique ID to element to link directly to it by using #your_id (for element ID use lowercase input only)."}}}},"./node_modules/raw-loader/index.js!./callToActionWithIcon/cssMixins/backgroundColor.pcss":function(n,t){n.exports=".vce-call-to-action-with-icon--background-color-$selector {\n  @if $backgroundColor != false {\n    background-color: $backgroundColor;\n  }\n}\n\n.vce-call-to-action-with-icon--background-gradient-$selector {\n  @if $gradientStart != false {\n    background-image: linear-gradient($(gradientAngle)deg, $gradientStart, $gradientEnd);\n  }\n}\n"},"./node_modules/raw-loader/index.js!./callToActionWithIcon/cssMixins/doBackgroundColor.pcss":function(n,t){n.exports=".vce-call-to-action-with-icon-$selector {\n  &, &:link, &:visited, &:active, &:focus {\n    @each $device in (all, xs, sm, md, lg, xl) {\n      @media (--$(device)-only) {\n        @if $($(device)) != false {\n          @if $($(device)backgroundColor) != false {\n            background-color: $($(device)backgroundColor);\n            background-image: none;\n          }\n        }\n      }\n    }\n  }\n}\n"},"./node_modules/raw-loader/index.js!./callToActionWithIcon/editor.css":function(n,t){n.exports=".vce-call-to-action-with-icon-container {\n  min-height: 1em;\n}\n"},"./node_modules/raw-loader/index.js!./callToActionWithIcon/styles.css":function(n,t){n.exports='.vce-call-to-action-with-icon {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden;\n}\n\n.vce-call-to-action-with-icon--content {\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  color: #fff;\n}\n\n.vce-call-to-action-with-icon--wrap-row {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  overflow: hidden;\n  width: 100%;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  box-sizing: border-box;\n}\n\n.vce-call-to-action-with-icon--wrap-row:before,\n.vce-call-to-action-with-icon--wrap-row:after {\n  content: " ";\n  display: table;\n}\n\n.vce-call-to-action-with-icon--wrap-row:after {\n  clear: both;\n}\n\n.vce-call-to-action-with-icon--min-height .vce-call-to-action-with-icon--wrap-row {\n  min-height: 450px;\n}\n\n.vce-call-to-action-with-icon--content {\n  margin-left: auto;\n  width: 100%;\n  padding-left: 2%;\n  padding-right: 2%;\n  margin-right: auto;\n  text-align: center;\n  box-sizing: border-box;\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  align-items: center;\n  .vcv-call-to-action-with-icon--icon {\n    flex: 0 0 20%;\n  }\n  .vce-call-to-action-with-icon--wrap-container-button {\n    flex: 0 1 80%;\n    max-width: 80%;\n  }\n}\n\n.vce-call-to-action-with-icon--alignment-right .vce-call-to-action-with-icon--content {\n  -webkit-flex-direction: row-reverse;\n  -ms-flex-direction: row-reverse;\n  flex-direction: row-reverse;\n}\n\n.vce-call-to-action-with-icon--content-container:not(:last-child) {\n  margin-bottom: 20px;\n}\n\n.vce-call-to-action-with-icon--content h1,\n.vce-call-to-action-with-icon--content h2,\n.vce-call-to-action-with-icon--content h3,\n.vce-call-to-action-with-icon--content h4,\n.vce-call-to-action-with-icon--content h5,\n.vce-call-to-action-with-icon--content h6 {\n  color: inherit;\n}\n\n.vce-call-to-action-with-icon--content h2 {\n  margin-bottom: 20px;\n}\n\n.vce-call-to-action-with-icon--content-container > *:first-child,\n.vce-call-to-action-with-icon--content-container > vcvhelper > *:first-child,\n.vce-call-to-action-with-icon--content-container > .vcvhelper > *:first-child {\n  margin-top: 0;\n}\n\n.vce-call-to-action-with-icon--content-container > *:last-child,\n.vce-call-to-action-with-icon--content-container > vcvhelper:last-child > *:last-child,\n.vce-call-to-action-with-icon--content-container > .vcvhelper:last-child > *:last-child {\n  margin-bottom: 0;\n}\n\n.vce-call-to-action-with-icon--content .vce,\n.vce-call-to-action-with-icon--content .vce-features--style-none .vce-features--icon {\n  margin-bottom: 0;\n}\n\n.vce-call-to-action-with-icon--alignment-start .vce-call-to-action-with-icon--content {\n  margin-left: 0;\n  text-align: left;\n}\n\n.vce-call-to-action-with-icon--alignment-end .vce-call-to-action-with-icon--content {\n  margin-right: 0;\n  text-align: right;\n}\n\n.vce-call-to-action-with-icon .vce-call-to-action-with-icon--shape-square {\n  border-radius: 0;\n}\n\n.vce-call-to-action-with-icon .vce-call-to-action-with-icon--shape-rounded {\n  border-radius: 10px;\n}\n\n.vce-call-to-action-with-icon .vce-call-to-action-with-icon--shape-round {\n  border-radius: 3em;\n}\n\n.vce-call-to-action-with-icon-media--xs .vce-call-to-action-with-icon--content,\n.vce-call-to-action-with-icon--wrap-container-button {\n  padding: 35px 45px;\n}\n\n.vce-call-to-action-with-icon--alignment-left .vce-call-to-action-with-icon--wrap-container-button {\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\n.vce-call-to-action-with-icon--alignment-right .vce-call-to-action-with-icon--wrap-container-button {\n  padding-left: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\n.vce-call-to-action-with-icon-media--sm .vce-call-to-action-with-icon--content {\n  width: 66.66666666%;\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.vce-call-to-action-with-icon-media--sm .vce-call-to-action-with-icon--alignment-start .vce-call-to-action-with-icon--content {\n  margin-left: 8.33333333%;\n}\n\n.vce-call-to-action-with-icon-media--sm .vce-call-to-action-with-icon--alignment-end .vce-call-to-action-with-icon--content {\n  margin-right: 8.33333333%;\n}\n\n.vce-call-to-action-with-icon-media--md .vce-call-to-action-with-icon--content {\n  width: 50%;\n}\n\n.vce-call-to-action-with-icon-media--lg .vce-call-to-action-with-icon--content {\n  width: 33.33333333%;\n}\n\n@media screen and (max-width: 544px) {\n  .vce-call-to-action-with-icon--content,\n  .vce-call-to-action-with-icon--alignment-right .vce-call-to-action-with-icon--content {\n    flex-direction: column;\n  }\n\n  .vce-call-to-action-with-icon--wrap-container-button {\n    padding-left: 0;\n    padding-right: 0;\n  }\n\n  .vce-call-to-action-with-icon--alignment-left .vce-call-to-action-with-icon--wrap-container-button,\n  .vce-call-to-action-with-icon--alignment-right .vce-call-to-action-with-icon--wrap-container-button {\n    padding-top: 35px;\n  }\n}\n\n/*\n * TODO: Make the row full width logic.\n */\n/*\n.vce-call-to-action-with-icon--fullbleed .vce-call-to-action-with-icon--wrap {\n  max-width: 1170px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.vce-call-to-action-with-icon--fullbleed .vce-call-to-action-with-icon--content {\n  text-align: center;\n}\n.vce-call-to-action-with-icon--fullbleed.vce-call-to-action-with-icon--alignment-start .vce-call-to-action-with-icon--content {\n  text-align: left;\n}\n.vce-call-to-action-with-icon--fullbleed.vce-call-to-action-with-icon--alignment-end .vce-call-to-action-with-icon--content {\n  text-align: left;\n}*/\n\n/*RTL support. */\n.rtl.vce-call-to-action-with-icon,\n[dir="rtl"].vce-call-to-action-with-icon,\n.rtl .vce-call-to-action-with-icon,\n[dir="rtl"] .vce-call-to-action-with-icon {\n  direction: ltr;\n  unicode-bidi: embed;\n}\n\n.ltr.vce-call-to-action-with-icon,\n[dir="ltr"].vce-call-to-action-with-icon,\n.ltr .vce-call-to-action-with-icon,\n[dir="ltr"] .vce-call-to-action-with-icon {\n  direction: ltr;\n  unicode-bidi: normal;\n}\n'}},[["./callToActionWithIcon/index.js"]]]);