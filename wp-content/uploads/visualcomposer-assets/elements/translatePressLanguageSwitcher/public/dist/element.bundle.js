(window.vcvWebpackJsonp4x=window.vcvWebpackJsonp4x||[]).push([[0],{"./node_modules/raw-loader/index.js!./translatePressLanguageSwitcher/editor.css":function(e,t){e.exports=".trp-visualcomposer-language-switcher {\n  min-height: 1em;\n}"},"./node_modules/raw-loader/index.js!./translatePressLanguageSwitcher/styles.css":function(e,t){e.exports=".trp-visualcomposer-language-switcher--align-left {\n  text-align: left;\n}\n\n.trp-visualcomposer-language-switcher--align-center {\n  text-align: center;\n}\n\n.trp-visualcomposer-language-switcher--align-right {\n  text-align: right;\n}"},"./translatePressLanguageSwitcher/index.js":function(e,t,s){"use strict";s.r(t);var a=s("./node_modules/vc-cake/index.js"),n=s("./node_modules/@babel/runtime/helpers/extends.js"),i=s.n(n),l=s("./node_modules/@babel/runtime/helpers/classCallCheck.js"),r=s.n(l),o=s("./node_modules/@babel/runtime/helpers/createClass.js"),c=s.n(o),u=s("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),p=s.n(u),d=s("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),g=s.n(d),m=s("./node_modules/@babel/runtime/helpers/get.js"),h=s.n(m),v=s("./node_modules/@babel/runtime/helpers/inherits.js"),b=s.n(v),y=s("./node_modules/react/index.js"),w=s.n(y),f=function(e){function t(e){var s;return r()(this,t),(s=p()(this,g()(t).call(this,e))).ref=w.a.createRef(),s}return b()(t,e),c()(t,[{key:"componentDidMount",value:function(){var e=this.props.atts.lsDisplayOptions;h()(g()(t.prototype),"updateShortcodeToHtml",this).call(this,"[language-switcher display='".concat(e,"']"),this.ref.current)}},{key:"componentDidUpdate",value:function(e){var s=this.props.atts.lsDisplayOptions;s!==e.atts.lsDisplayOptions&&h()(g()(t.prototype),"updateShortcodeToHtml",this).call(this,"[language-switcher display='".concat(s,"']"),this.ref.current)}},{key:"render",value:function(){var e=this.props,t=e.id,s=e.atts,a=e.editor,n=s.alignment,l=s.customClass,r=s.metaCustomId,o=s.lsDisplayOptions,c="trp-visualcomposer-language-switcher",u={};"string"==typeof l&&l&&(c+=" ".concat(l)),r&&(u.id=r),n&&(c+=" trp-visualcomposer-language-switcher--align-".concat(n));var p=this.applyDO("all");return w.a.createElement("div",i()({id:"el-"+t,className:"vce trp-visualcomposer-language-switcher-container"},a,p),w.a.createElement("div",i()({className:c},u),w.a.createElement("div",{className:"vcvhelper",ref:this.ref,"data-vcvs-html":"[language-switcher display='".concat(o,"']")})))}}]),t}(Object(a.getService)("api").elementComponent);(0,Object(a.getService)("cook").add)(s("./translatePressLanguageSwitcher/settings.json"),(function(e){e.add(f)}),{css:s("./node_modules/raw-loader/index.js!./translatePressLanguageSwitcher/styles.css"),editorCss:s("./node_modules/raw-loader/index.js!./translatePressLanguageSwitcher/editor.css")})},"./translatePressLanguageSwitcher/settings.json":function(e){e.exports={lsDisplayOptions:{type:"dropdown",access:"public",value:"",options:{label:"Language Switcher Display Options",global:"vcvTpLs"}},designOptions:{type:"designOptions",access:"public",value:{},options:{label:"Design Options"}},editFormTab1:{type:"group",access:"protected",value:["lsDisplayOptions","alignment","metaCustomId","customClass"],options:{label:"General"}},metaEditFormTabs:{type:"group",access:"protected",value:["editFormTab1","designOptions"]},relatedTo:{type:"group",access:"protected",value:["General"]},customClass:{type:"string",access:"public",value:"",options:{label:"Extra class name",description:"Add an extra class name to the element and refer to it from Custom CSS option."}},metaCustomId:{type:"customId",access:"public",value:"",options:{label:"Element ID",description:"Apply unique ID to element to link directly to it by using #your_id (for element ID use lowercase input only)."}},tag:{access:"protected",type:"string",value:"translatePressLanguageSwitcher"},alignment:{type:"buttonGroup",access:"public",value:"left",options:{label:"Alignment",values:[{label:"Left",value:"left",icon:"vcv-ui-icon-attribute-alignment-left"},{label:"Center",value:"center",icon:"vcv-ui-icon-attribute-alignment-center"},{label:"Right",value:"right",icon:"vcv-ui-icon-attribute-alignment-right"}]}}}}},[["./translatePressLanguageSwitcher/index.js"]]]);