(window.vcvWebpackJsonp4x=window.vcvWebpackJsonp4x||[]).push([[0],{"./globalTemplate/index.js":function(e,t,s){"use strict";s.r(t);var l=s("./node_modules/vc-cake/index.js"),o=s.n(l),a=s("./node_modules/@babel/runtime/helpers/extends.js"),n=s.n(a),i=s("./node_modules/@babel/runtime/helpers/classCallCheck.js"),p=s.n(i),c=s("./node_modules/@babel/runtime/helpers/createClass.js"),r=s.n(c),d=s("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),m=s.n(d),u=s("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),b=s.n(u),v=s("./node_modules/@babel/runtime/helpers/get.js"),g=s.n(v),h=s("./node_modules/@babel/runtime/helpers/inherits.js"),y=s.n(h),f=s("./node_modules/react/index.js"),_=s.n(f),j=function(e){function t(){return p()(this,t),m()(this,b()(t).apply(this,arguments))}return y()(t,e),r()(t,[{key:"componentDidMount",value:function(){g()(b()(t.prototype),"updateShortcodeToHtml",this).call(this,'[vcv_global_template id="'.concat(this.props.atts.template,'"]'),this.ref)}},{key:"componentDidUpdate",value:function(e){this.props.atts.template!==e.atts.template&&g()(b()(t.prototype),"updateShortcodeToHtml",this).call(this,'[vcv_global_template id="'.concat(this.props.atts.template,'"]'),this.ref)}},{key:"render",value:function(){var e=this,t=this.props,s=t.id,l=t.atts,o=t.editor,a=l.customClass,i=l.metaCustomId,p=l.template,c='[vcv_global_template id="'.concat(p,'"]'),r="vce-global-element vce",d={};"string"==typeof a&&a&&(r+=" ".concat(a)),i&&(d.id=i);var m=this.applyDO("all");return _.a.createElement("div",n()({className:r},o,{id:"el-"+s},m),_.a.createElement("div",n()({className:"vce-global-template-inner"},d),_.a.createElement("div",{className:"vcvhelper",ref:function(t){e.ref=t},"data-vcvs-html":c})))}}]),t}(Object(l.getService)("api").elementComponent);(0,o.a.getService("cook").add)(s("./globalTemplate/settings.json"),function(e){e.add(j)},{css:s("./node_modules/raw-loader/index.js!./globalTemplate/styles.css"),editorCss:s("./node_modules/raw-loader/index.js!./globalTemplate/editor.css")})},"./globalTemplate/settings.json":function(e){e.exports={template:{type:"dropdown",access:"public",value:"",options:{label:"Template",global:"vcvGlobalTemplatesList"}},designOptions:{type:"designOptions",access:"public",value:{},options:{label:"Design Options"}},editFormTab1:{type:"group",access:"protected",value:["template","metaCustomId","customClass"],options:{label:"General"}},metaEditFormTabs:{type:"group",access:"protected",value:["editFormTab1","designOptions"]},relatedTo:{type:"group",access:"protected",value:["General"]},customClass:{type:"string",access:"public",value:"",options:{label:"Extra class name",description:"Add an extra class name to the element and refer to it from Custom CSS option."}},metaCustomId:{type:"customId",access:"public",value:"",options:{label:"Element ID",description:"Apply unique Id to element to link directly to it by using #your_id (for element id use lowercase input only)."}},tag:{access:"protected",type:"string",value:"globalTemplate"}}},"./node_modules/raw-loader/index.js!./globalTemplate/editor.css":function(e,t){e.exports=".vce-global-template {\n  min-height: 1em;\n}"},"./node_modules/raw-loader/index.js!./globalTemplate/styles.css":function(e,t){e.exports=""}},[["./globalTemplate/index.js"]]]);