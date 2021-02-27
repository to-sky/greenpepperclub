(window.vcvWebpackJsonp4x=window.vcvWebpackJsonp4x||[]).push([[0],{"./calderaForms/index.js":function(e,t,o){"use strict";o.r(t);var s=o("./node_modules/vc-cake/index.js"),a=o.n(s),l=o("./node_modules/@babel/runtime/helpers/extends.js"),n=o.n(l),r=o("./node_modules/@babel/runtime/helpers/classCallCheck.js"),i=o.n(r),d=o("./node_modules/@babel/runtime/helpers/createClass.js"),c=o.n(d),p=o("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),u=o.n(p),m=o("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),g=o.n(m),h=o("./node_modules/@babel/runtime/helpers/get.js"),v=o.n(h),b=o("./node_modules/@babel/runtime/helpers/inherits.js"),y=o.n(b),f=o("./node_modules/react/index.js"),x=o.n(f),M=o("./node_modules/classnames/index.js"),T=o.n(M),C=function(e){function t(){return i()(this,t),u()(this,g()(t).apply(this,arguments))}return y()(t,e),c()(t,[{key:"getShortcode",value:function(){var e,t=this.props.atts,o=t.setAsModal,s=t.source;if(o){var a=this.props.atts,l=a.openModalTriggerType,n=a.openModalText,r=a.modalWidth,i="button"===l?' type="button"':"",d=n&&n.length?n:"Open Form",c=r&&r.length?' width="'.concat(r,'"'):"";e='[caldera_form_modal id="'.concat(s,'"').concat(i).concat(c,"]").concat(d,"[/caldera_form_modal]")}else e='[caldera_form id="'.concat(s,'"]');return e}},{key:"componentDidMount",value:function(){var e=this.props.atts.source;if(e&&"0"!==e){var o=this.getShortcode();v()(g()(t.prototype),"updateShortcodeToHtml",this).call(this,o,this.ref)}}},{key:"componentDidUpdate",value:function(e){var o=this.props.atts,s=o.source,a=o.setAsModal,l=o.openModalTriggerType,n=o.openModalText,r=o.modalWidth,i=s&&"0"!==s&&s!==e.atts.source,d=a!==e.atts.setAsModal,c=l!==e.atts.openModalTriggerType,p=n!==e.atts.openModalText,u=r!==e.atts.modalWidth;if(i||d||c||p||u){var m=this.getShortcode();v()(g()(t.prototype),"updateShortcodeToHtml",this).call(this,m,this.ref)}}},{key:"getForm",value:function(){var e=this,t=this.props.atts.source;if(t&&"0"!==t){var o=this.getShortcode();return x.a.createElement("div",{className:"vcvhelper",ref:function(t){e.ref=t},"data-vcvs-html":o})}return x.a.createElement("div",{className:"vcvhelper"},"Select Caldera Forms source")}},{key:"render",value:function(){var e=this.props,t=e.id,o=e.atts,s=e.editor,a=o.customClass,l=o.metaCustomId,r=[],i=["vce","vce-caldera-forms"],d={};"string"==typeof a&&a&&r.push(a),l&&(d.id=l),r=T()(r),i=T()(i);var c=this.applyDO("all");return x.a.createElement("div",n()({},s,{id:"el-".concat(t),className:r}),x.a.createElement("div",n()({className:i},d,c),this.getForm()))}}]),t}(a.a.getService("api").elementComponent);(0,a.a.getService("cook").add)(o("./calderaForms/settings.json"),function(e){e.add(C)},{css:o("./node_modules/raw-loader/index.js!./calderaForms/styles.css"),editorCss:o("./node_modules/raw-loader/index.js!./calderaForms/editor.css"),mixins:{}},"")},"./calderaForms/settings.json":function(e){e.exports={tag:{access:"protected",type:"string",value:"calderaForms"},relatedTo:{type:"group",access:"protected",value:["General"]},source:{type:"dropdown",access:"public",value:"",options:{label:"Caldera Forms source",global:"vcvCalderaForms"}},setAsModal:{type:"toggle",access:"public",value:!1,options:{label:"Set as Modal",description:"Have your form display with a modal (pop-up) window."}},openModalTriggerType:{type:"dropdown",access:"public",value:"link",options:{label:"Open Modal Trigger Type",values:[{label:"Link",value:"link"},{label:"Button",value:"button"}],onChange:{rules:{setAsModal:{rule:"toggle"}},actions:[{action:"toggleVisibility"}]}}},openModalText:{type:"string",access:"public",value:"",options:{label:"Open Modal Text",onChange:{rules:{setAsModal:{rule:"toggle"}},actions:[{action:"toggleVisibility"}]}}},modalWidth:{type:"number",access:"public",value:"",options:{label:"Modal Width",description:"Enter the with of Modal in pixels.",min:0,onChange:{rules:{setAsModal:{rule:"toggle"}},actions:[{action:"toggleVisibility"}]}}},customClass:{type:"string",access:"public",value:"",options:{label:"Extra class name",description:"Add an extra class name to the element and refer to it from Custom CSS option."}},metaCustomId:{type:"customId",access:"public",value:"",options:{label:"Element ID",description:"Apply unique ID to element to link directly to it by using #your_id (for element ID use lowercase input only)."}},designOptions:{type:"designOptions",access:"public",value:{},options:{label:"Design Options"}},editFormTab1:{type:"group",access:"protected",value:["source","setAsModal","openModalTriggerType","openModalText","modalWidth","metaCustomId","customClass"],options:{label:"General"}},metaEditFormTabs:{type:"group",access:"protected",value:["editFormTab1","designOptions"]}}},"./node_modules/raw-loader/index.js!./calderaForms/editor.css":function(e,t){e.exports=".vce-caldera-forms {\n  min-height: 1em;\n}"},"./node_modules/raw-loader/index.js!./calderaForms/styles.css":function(e,t){e.exports=".vce-caldera-forms--align-left {\n  text-align: left;\n}\n.vce-caldera-forms--align-center {\n  text-align: center;\n}\n.vce-caldera-forms--align-right {\n  text-align: right;\n}\n"}},[["./calderaForms/index.js"]]]);