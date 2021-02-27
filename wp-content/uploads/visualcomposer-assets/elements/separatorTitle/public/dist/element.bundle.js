(window.vcvWebpackJsonp4x=window.vcvWebpackJsonp4x||[]).push([[0],{"./node_modules/raw-loader/index.js!./separatorTitle/cssMixins/separatorColor.pcss":function(e,t){e.exports=".vce-separator-with-title--color-$selector {\n  color: $separatorColor;\n}"},"./node_modules/raw-loader/index.js!./separatorTitle/cssMixins/separatorThickness.pcss":function(e,t){e.exports=".vce-separator-with-title-line--thickness-$selector {\n  &::before {\n    border-width: $(thickness)px;\n  }\n  &.vce-separator-shadow {\n    height: calc($(thickness)px * 2.5);\n  }\n  &.vce-separator-shadow-left {\n    &::before {\n      box-shadow: 10px 10px 10px $(thickness)px;\n    }\n  }\n  &.vce-separator-shadow-right {\n    &::before {\n      box-shadow: -10px 10px 10px $(thickness)px;\n    }\n  }\n}"},"./node_modules/raw-loader/index.js!./separatorTitle/cssMixins/separatorWidth.pcss":function(e,t){e.exports=".vce-separator-with-title--width-$selector {\n  width: $(width)%;\n}"},"./node_modules/raw-loader/index.js!./separatorTitle/cssMixins/titleColor.pcss":function(e,t){e.exports=".vce-separator-with-title--title--color-$selector {\n  color: $titleColor;\n}"},"./node_modules/raw-loader/index.js!./separatorTitle/editor.css":function(e,t){e.exports=".vce-basic-separator-container {\n  min-height: 1em;\n}\n"},"./node_modules/raw-loader/index.js!./separatorTitle/styles.css":function(e,t){e.exports="/* ----------------------------------------------\n * Separator With Title\n * ---------------------------------------------- */\n.vce-separator-with-title {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n}\n.vce-separator-with-title .vce-separator-with-title--title {\n  max-width: 90%;\n  margin: 0 7px;\n  padding: 0;\n  text-align: center;\n  transition: color .3s ease;\n}\n.vce-separator-with-title--line {\n  position: relative;\n  min-height: 1.2em;\n  line-height: 1;\n  -ms-flex: 1 0 auto;\n      flex: 1 0 auto;\n  transition: color .3s ease;\n}\n.vce-separator-with-title--line::before {\n  position: absolute;\n  display: block;\n  content: '';\n  box-sizing: content-box;\n  height: 1px;\n  width: 100%;\n  top: 50%;\n  transform: translate(0, -50%);\n}\n.vce-separator-with-title--line-left::before {\n  right: 0;\n}\n.vce-separator-with-title--line-right::before {\n  left: 0;\n}\n.vce-separator-with-title--align-left {\n  text-align: left;\n}\n.vce-separator-with-title--align-center {\n  text-align: center;\n}\n.vce-separator-with-title--align-right {\n  text-align: right;\n}\n.vce-separator-with-title--line--style-solid::before {\n  border-top-style: solid;\n}\n.vce-separator-with-title--line--style-dotted::before {\n  border-top-style: dotted;\n}\n.vce-separator-with-title--line--style-dashed::before {\n  border-top-style: dashed;\n}\n.vce-separator-with-title--line--style-double::before {\n  border-top-style: double;\n}\n.vce-separator-with-title--line--style-shadow {\n  display: -ms-flexbox;\n  display: flex;\n  margin-right: auto;\n  margin-left: auto;\n}\n.vce-separator-with-title--line--style-shadow::before {\n  display: none;\n}\n.vce-separator-shadow {\n  position: relative;\n  min-height: 10px;\n  -ms-flex: 1 1 auto;\n      flex: 1 1 auto;\n  min-width: 10%;\n  overflow: hidden;\n}\n.vce-separator-shadow::before {\n  content: '';\n  display: block;\n  position: absolute;\n  left: 0;\n  top: -20px;\n  right: 0;\n  width: initial;\n  height: 10px;\n  border-radius: 100%;\n}\n.vce-separator-shadow-left::before {\n  right: -100%;\n}\n.vce-separator-shadow-right::before {\n  left: -100%;\n}\n"},"./separatorTitle/index.js":function(e,t,s){"use strict";s.r(t);var a=s("./node_modules/vc-cake/index.js"),n=s.n(a),i=s("./node_modules/@babel/runtime/helpers/extends.js"),o=s.n(i),r=s("./node_modules/@babel/runtime/helpers/classCallCheck.js"),l=s.n(r),p=s("./node_modules/@babel/runtime/helpers/createClass.js"),c=s.n(p),d=s("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),h=s.n(d),u=s("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),m=s.n(u),v=s("./node_modules/@babel/runtime/helpers/inherits.js"),b=s.n(v),x=s("./node_modules/react/index.js"),w=s.n(x),g=s("./node_modules/classnames/index.js"),f=s.n(g),y=function(e){function t(){return l()(this,t),h()(this,m()(t).apply(this,arguments))}return b()(t,e),c()(t,[{key:"render",value:function(){var e,t,s=this.props,a=s.id,n=s.atts,i=s.editor,r=n.separatorAlignment,l=n.separatorStyle,p=n.title,c=n.customClass,d=n.metaCustomId,h={},u=["vce","vce-separator-with-title-container"],m=["vce-separator-with-title"],v=["vce-separator-with-title--line"],b=[],x=[],g=["vce-separator-with-title--title"];"string"==typeof c&&c&&u.push(c),r&&u.push("vce-separator-with-title--align-".concat(r)),l&&v.push("vce-separator-with-title--line--style-".concat(l));var y=this.getMixinData("separatorColor");y&&m.push("vce-separator-with-title--color-".concat(y.selector)),(y=this.getMixinData("separatorWidth"))&&m.push("vce-separator-with-title--width-".concat(y.selector)),(y=this.getMixinData("separatorThickness"))&&v.push("vce-separator-with-title-line--thickness-".concat(y.selector)),(y=this.getMixinData("titleColor"))&&g.push("vce-separator-with-title--title--color-".concat(y.selector)),d&&(h.id=d),m=f()(m),u=f()(u),g=f()(g),"shadow"===l&&(v.push("vce-separator-shadow"),b.push("vce-separator-shadow-left"),x.push("vce-separator-shadow-right")),(e=b).push.apply(e,v),b.push("vce-separator-with-title--line-left"),(t=x).push.apply(t,v),x.push("vce-separator-with-title--line-right"),b=f()(b),x=f()(x);var C=this.applyDO("margin"),T=this.applyDO("border padding background animation");return w.a.createElement("div",o()({className:u,id:"el-"+a},i,C),w.a.createElement("div",o()({className:m},h,T),w.a.createElement("div",{className:b}),w.a.createElement("h3",{className:g},p),w.a.createElement("div",{className:x})))}}]),t}(n.a.getService("api").elementComponent);(0,n.a.getService("cook").add)(s("./separatorTitle/settings.json"),function(e){e.add(y)},{css:s("./node_modules/raw-loader/index.js!./separatorTitle/styles.css"),editorCss:s("./node_modules/raw-loader/index.js!./separatorTitle/editor.css"),mixins:{separatorColor:{mixin:s("./node_modules/raw-loader/index.js!./separatorTitle/cssMixins/separatorColor.pcss")},separatorWidth:{mixin:s("./node_modules/raw-loader/index.js!./separatorTitle/cssMixins/separatorWidth.pcss")},separatorThickness:{mixin:s("./node_modules/raw-loader/index.js!./separatorTitle/cssMixins/separatorThickness.pcss")},titleColor:{mixin:s("./node_modules/raw-loader/index.js!./separatorTitle/cssMixins/titleColor.pcss")}}},"")},"./separatorTitle/settings.json":function(e){e.exports={groups:{type:"string",access:"protected",value:"Separators"},title:{type:"string",access:"public",value:"A",options:{label:"Title",dynamicField:!0}},titleColor:{type:"color",access:"public",value:"#fae862",options:{label:"Title color",cssMixin:{mixin:"titleColor",property:"titleColor",namePattern:"[\\da-f]+"}}},separatorColor:{type:"color",access:"public",value:"#bfc0c1",options:{label:"Separator color",cssMixin:{mixin:"separatorColor",property:"separatorColor",namePattern:"[\\da-f]+"}}},separatorAlignment:{type:"buttonGroup",access:"public",value:"center",options:{label:"Alignment",values:[{label:"Left",value:"left",icon:"vcv-ui-icon-attribute-alignment-left"},{label:"Center",value:"center",icon:"vcv-ui-icon-attribute-alignment-center"},{label:"Right",value:"right",icon:"vcv-ui-icon-attribute-alignment-right"}]}},separatorStyle:{type:"dropdown",access:"public",value:"solid",options:{label:"Style",values:[{label:"Line",value:"solid"},{label:"Dashed",value:"dashed"},{label:"Dotted",value:"dotted"},{label:"Double",value:"double"},{label:"Shadow",value:"shadow"}]}},separatorThickness:{type:"number",access:"public",value:"1",options:{label:"Thickness",description:"Enter separator thickeness in pixels.",cssMixin:{mixin:"separatorThickness",property:"thickness",namePattern:"[\\da-f]+"},min:1}},separatorWidth:{type:"range",access:"public",value:"60",options:{label:"Separator width",description:"Enter separator width in percents (Example: 60).",cssMixin:{mixin:"separatorWidth",property:"width",namePattern:"[\\da-f]+"},min:1,max:100,measurement:"%"}},customClass:{type:"string",access:"public",value:"",options:{label:"Extra class name",description:"Add an extra class name to the element and refer to it from Custom CSS option."}},designOptions:{type:"designOptions",access:"public",value:{},options:{label:"Design Options"}},editFormTab1:{type:"group",access:"protected",value:["title","titleColor","separatorColor","separatorAlignment","separatorStyle","separatorThickness","separatorWidth","metaCustomId","customClass"],options:{label:"General"}},metaEditFormTabs:{type:"group",access:"protected",value:["editFormTab1","designOptions"]},relatedTo:{type:"group",access:"protected",value:["General"]},assetsLibrary:{access:"public",type:"string",value:["animate"]},metaBackendLabels:{type:"group",access:"protected",value:[{value:["title","separatorColor"]}]},metaCustomId:{type:"customId",access:"public",value:"",options:{label:"Element ID",description:"Apply unique Id to element to link directly to it by using #your_id (for element id use lowercase input only)."}},tag:{access:"protected",type:"string",value:"separatorTitle"}}}},[["./separatorTitle/index.js"]]]);