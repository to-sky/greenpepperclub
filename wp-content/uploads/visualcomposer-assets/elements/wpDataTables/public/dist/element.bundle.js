(window.vcvWebpackJsonp4x=window.vcvWebpackJsonp4x||[]).push([[0],{"./node_modules/raw-loader/index.js!./wpDataTables/editor.css":function(e,t){e.exports=".vce-wpdatatables {\n  min-height: 1em;\n}"},"./node_modules/raw-loader/index.js!./wpDataTables/styles.css":function(e,t){e.exports=".vce-wpdatatables--align-left {\n  text-align: left;\n}\n.vce-wpdatatables--align-center {\n  text-align: center;\n}\n.vce-wpdatatables--align-right {\n  text-align: right;\n}\n"},"./wpDataTables/index.js":function(e,t,a){"use strict";a.r(t);var s=a("./node_modules/vc-cake/index.js"),o=a.n(s),l=a("./node_modules/@babel/runtime/helpers/extends.js"),n=a.n(l),i=a("./node_modules/@babel/runtime/helpers/classCallCheck.js"),r=a.n(i),c=a("./node_modules/@babel/runtime/helpers/createClass.js"),p=a.n(c),d=a("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),u=a.n(d),b=a("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),m=a.n(b),v=a("./node_modules/@babel/runtime/helpers/get.js"),h=a.n(v),g=a("./node_modules/@babel/runtime/helpers/inherits.js"),w=a.n(g),f=a("./node_modules/react/index.js"),y=a.n(f),D=a("./node_modules/classnames/index.js"),T=a.n(D),x=function(e){function t(){return r()(this,t),u()(this,m()(t).apply(this,arguments))}return w()(t,e),p()(t,[{key:"componentDidMount",value:function(){var e=this.props.atts.source;if(e&&"0"!==e){var a=this.getShortcode(e);h()(m()(t.prototype),"updateShortcodeToHtml",this).call(this,a,this.ref)}}},{key:"componentDidUpdate",value:function(e){var a=this.props.atts,s=a.source,o=a.tableView,l=s&&"0"!==s&&s!==e.atts.source,n=o!==e.atts.tableView;if(l||n){var i=this.getShortcode(s);h()(m()(t.prototype),"updateShortcodeToHtml",this).call(this,i,this.ref)}}},{key:"getShortcode",value:function(e){if(!e)return"";var t=e.match(/\d+/)[0],a="",s="wpdatatable";return e.match(/wpDataTables/)?a='table_view="'.concat(this.props.atts.tableView,'"'):s="wpdatachart","[".concat(s,' id="').concat(t,'" ').concat(a,"]")}},{key:"getWpDataTable",value:function(){var e=this,t=this.props.atts.source;if(t&&"0"!==t){var a=this.getShortcode(t);return y.a.createElement("div",{className:"vcvhelper",ref:function(t){e.ref=t},"data-vcvs-html":a})}return y.a.createElement("div",{className:"vcvhelper"},"Select wpDataTable source")}},{key:"render",value:function(){var e=this.props,t=e.id,a=e.atts,s=e.editor,o=a.customClass,l=a.metaCustomId,i=[],r=["vce","vce-wpdatatables"],c={};"string"==typeof o&&o&&i.push(o),l&&(c.id=l),i=T()(i),r=T()(r);var p=this.applyDO("all");return y.a.createElement("div",n()({},s,{id:"el-".concat(t),className:i}),y.a.createElement("div",n()({className:r},c,p),this.getWpDataTable()))}}]),t}(o.a.getService("api").elementComponent);(0,o.a.getService("cook").add)(a("./wpDataTables/settings.json"),function(e){e.add(x)},{css:a("./node_modules/raw-loader/index.js!./wpDataTables/styles.css"),editorCss:a("./node_modules/raw-loader/index.js!./wpDataTables/editor.css"),mixins:{}},"")},"./wpDataTables/settings.json":function(e){e.exports={tag:{access:"protected",type:"string",value:"wpDataTables"},relatedTo:{type:"group",access:"protected",value:["General"]},source:{type:"dropdown",access:"public",value:"",options:{label:"wpDataTables source",global:"vcvWpDataTables"}},tableView:{type:"dropdown",access:"public",value:"regular",options:{label:"Table view",values:[{label:"Regular wpDataTable",value:"regular"},{label:"Excel-like table",value:"excel"}],onChange:{rules:{source:{rule:"valueContains",options:{value:"wpDataTables"}}},actions:[{action:"toggleVisibility"}]}}},customClass:{type:"string",access:"public",value:"",options:{label:"Extra class name",description:"Add an extra class name to the element and refer to it from Custom CSS option."}},metaCustomId:{type:"customId",access:"public",value:"",options:{label:"Element ID",description:"Apply unique ID to element to link directly to it by using #your_id (for element ID use lowercase input only)."}},designOptions:{type:"designOptions",access:"public",value:{},options:{label:"Design Options"}},editFormTab1:{type:"group",access:"protected",value:["source","tableView","toggleFormTitle","toggleFormDescription","metaCustomId","customClass"],options:{label:"General"}},metaEditFormTabs:{type:"group",access:"protected",value:["editFormTab1","designOptions"]}}}},[["./wpDataTables/index.js"]]]);