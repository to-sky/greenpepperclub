(window.vcvWebpackJsonp4x=window.vcvWebpackJsonp4x||[]).push([[0],{"./enviraGallery/index.js":function(e,t,s){"use strict";s.r(t);var a=s("./node_modules/vc-cake/index.js"),n=s.n(a),o=s("./node_modules/@babel/runtime/helpers/extends.js"),r=s.n(o),l=s("./node_modules/@babel/runtime/helpers/classCallCheck.js"),i=s.n(l),c=s("./node_modules/@babel/runtime/helpers/createClass.js"),d=s.n(c),u=s("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),p=s.n(u),m=s("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),v=s.n(m),y=s("./node_modules/@babel/runtime/helpers/get.js"),h=s.n(y),b=s("./node_modules/@babel/runtime/helpers/inherits.js"),g=s.n(b),f=s("./node_modules/react/index.js"),j=s.n(f),x=s("./node_modules/classnames/index.js"),C=s.n(x),G=function(e){function t(){return i()(this,t),p()(this,v()(t).apply(this,arguments))}return g()(t,e),d()(t,[{key:"componentDidMount",value:function(){var e=this.props.atts.source;e&&"0"!==e&&h()(v()(t.prototype),"updateShortcodeToHtml",this).call(this,'[envira-gallery id="'.concat(e,'"]'),this.ref)}},{key:"componentDidUpdate",value:function(e){var s=this.props.atts.source;s&&"0"!==s&&s!==e.atts.source&&h()(v()(t.prototype),"updateShortcodeToHtml",this).call(this,'[envira-gallery id="'.concat(s,'"]'),this.ref)}},{key:"getEnviraGallery",value:function(){var e=this,t=this.props.atts.source;return t&&"0"!==t?j.a.createElement("div",{className:"vcvhelper",ref:function(t){e.ref=t},"data-vcvs-html":'[envira-gallery id="'.concat(t,'"]')}):j.a.createElement("div",{className:"vcvhelper"},"Select Envira Gallery source")}},{key:"render",value:function(){var e=this.props,t=e.id,s=e.atts,a=e.editor,n=s.customClass,o=s.metaCustomId,l=[],i=["vce","vce-envira-gallery"],c={};"string"==typeof n&&n&&l.push(n),o&&(c.id=o),l=C()(l),i=C()(i);var d=this.applyDO("all");return j.a.createElement("div",r()({},a,{id:"el-".concat(t),className:l}),j.a.createElement("div",r()({className:i},c,d),this.getEnviraGallery()))}}]),t}(n.a.getService("api").elementComponent);(0,n.a.getService("cook").add)(s("./enviraGallery/settings.json"),function(e){e.add(G)},{editorCss:s("./node_modules/raw-loader/index.js!./enviraGallery/editor.css"),mixins:{}},"")},"./enviraGallery/settings.json":function(e){e.exports={tag:{access:"protected",type:"string",value:"enviraGallery"},relatedTo:{type:"group",access:"protected",value:["General"]},source:{type:"dropdown",access:"public",value:"",options:{label:"Envira Gallery source",global:"vcvWpEnviraGallery"}},customClass:{type:"string",access:"public",value:"",options:{label:"Extra class name",description:"Add an extra class name to the element and refer to it from Custom CSS option."}},metaCustomId:{type:"customId",access:"public",value:"",options:{label:"Element ID",description:"Apply unique ID to element to link directly to it by using #your_id (for element ID use lowercase input only)."}},designOptions:{type:"designOptions",access:"public",value:{},options:{label:"Design Options"}},editFormTab1:{type:"group",access:"protected",value:["source","metaCustomId","customClass"],options:{label:"General"}},metaEditFormTabs:{type:"group",access:"protected",value:["editFormTab1","designOptions"]}}},"./node_modules/raw-loader/index.js!./enviraGallery/editor.css":function(e,t){e.exports=".vce-envira-gallery {\n  min-height: 1em;\n}"}},[["./enviraGallery/index.js"]]]);