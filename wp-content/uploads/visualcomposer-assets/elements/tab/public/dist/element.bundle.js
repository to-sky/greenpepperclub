(window.vcvWebpackJsonp4x=window.vcvWebpackJsonp4x||[]).push([[1],{"./node_modules/raw-loader/index.js!./tab/editor.css":function(e,t){e.exports=""},"./node_modules/raw-loader/index.js!./tab/styles.css":function(e,t){e.exports=".vce-tabs-with-slide-tab {\n\n}\n\n.vce-tabs-with-slide-tab-inner {\n    /*display: inline-block;*/\n    /*width: 100%;*/\n    /*position: relative;*/\n    /*vertical-align: top;*/\n}"},"./tab/component.js":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=u(a("./node_modules/babel-runtime/helpers/extends.js")),n=u(a("./node_modules/babel-runtime/core-js/object/get-prototype-of.js")),i=u(a("./node_modules/babel-runtime/helpers/classCallCheck.js")),l=u(a("./node_modules/babel-runtime/helpers/createClass.js")),o=u(a("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js")),d=u(a("./node_modules/babel-runtime/helpers/inherits.js")),c=u(a("./node_modules/react/index.js")),r=u(a("./node_modules/vc-cake/index.js"));function u(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(e){(0,i.default)(this,t);var a=(0,o.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return a.openedTab=null,a.tabsInner=null,a.state={isActive:!1},a.setOpenedTab=a.setOpenedTab.bind(a),a}return(0,d.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){this.tabsInner=this.getClosest(this.getDomNode(),".vce-tabs-with-slide-inner"),this.tabsInner.addEventListener("attrChange",this.setOpenedTab),this.setOpenedTab(),this.openedTab===this.props.id&&this.setState({isActive:!0}),r.default.env("iframe")&&r.default.env("iframe").vcv.trigger("ready","add",this.props.atts.parent)}},{key:"componentWillUnmount",value:function(){this.tabsInner.removeEventListener("attsChange",this.setOpenedTab)}},{key:"setOpenedTab",value:function(){var e=this.tabsInner.getAttribute("data-vcv-tabs-opened");e&&(this.openedTab=e.replace("#el-",""))}},{key:"getClosest",value:function(e,t){var a=void 0;["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"].some(function(e){return"function"==typeof document.body[e]&&(a=e,!0)});for(var s=void 0;e;){if((s=e.parentElement)&&s[a](t))return s;e=s}return null}},{key:"render",value:function(){var e=this.props,t=e.id,a=e.atts,n=e.editor,i=e.children,l=e.isBackend,o=a.tabTitle,d=a.customClass,r=a.metaCustomId,u=a.hidden,p=this.state.isActive,b="vce-tabs-with-slide-panel",v="el-"+t;"string"==typeof d&&d&&(b+=" "+d),u&&l&&(b+=" vce-wpbackend-element-hidden"),r&&(v=r);var m=this.applyDO("all"),h="[data-model-id="+t+"]",f="#"+v;return c.default.createElement("div",(0,s.default)({className:b},n,{id:v,"data-model-id":t,"data-vce-content":".vce-tabs-with-slide-panel-body","data-vcv-active":p}),c.default.createElement("div",(0,s.default)({className:"vce-tabs-with-slide-tab-inner"},{}),c.default.createElement("div",{className:"vce-tabs-with-slide-panel-heading"},c.default.createElement("a",{className:"vce-tabs-with-slide-panel-title",href:f,"data-vce-target":h,"data-vce-use-cache":"false","data-vce-accordion":"","data-vce-container":".vce-tabs-with-slide-inner"},c.default.createElement("span",null,o))),c.default.createElement("div",(0,s.default)({className:"vce-tabs-with-slide-panel-body"},m),c.default.createElement("div",{className:"vce-tabs-with-slide-element-container","data-js-panel-body":""},i))))}}]),t}(r.default.getService("api").elementComponent);t.default=p},"./tab/index.js":function(e,t,a){"use strict";var s=i(a("./node_modules/vc-cake/index.js")),n=i(a("./tab/component.js"));function i(e){return e&&e.__esModule?e:{default:e}}(0,s.default.getService("cook").add)(a("./tab/settings.json"),function(e){e.add(n.default)},{css:a("./node_modules/raw-loader/index.js!./tab/styles.css"),editorCss:a("./node_modules/raw-loader/index.js!./tab/editor.css")},"")},"./tab/settings.json":function(e){e.exports={designOptions:{type:"designOptions",access:"public",value:{},options:{label:"Design Options"}},editFormTab1:{type:"group",access:"protected",value:["tabTitle","metaCustomId","customClass"],options:{label:"General"}},metaEditFormTabs:{type:"group",access:"protected",value:["editFormTab1","designOptions"]},containerFor:{type:"group",access:"protected",value:["General"]},relatedTo:{type:"group",access:"protected",value:["Tab"]},customClass:{type:"string",access:"public",value:"",options:{label:"Extra class name",description:"Add an extra class name to the element and refer to it from Custom CSS option."}},tabTitle:{type:"string",access:"public",value:"New tab",options:{label:"Title"}},metaBackendLabels:{type:"group",access:"protected",value:[{value:[]}]},metaCustomId:{type:"customId",access:"public",value:"",options:{label:"Element ID",description:"Apply unique Id to element to link directly to it by using #your_id (for element id use lowercase input only)."}},tag:{access:"protected",type:"string",value:"tab"},backendView:{type:"string",access:"protected",value:"frontend"},hidden:{type:"string",access:"public",value:!1},parentWrapper:{type:"string",access:"protected",value:"tabsWithSlide"}}}},[["./tab/index.js"]]]);