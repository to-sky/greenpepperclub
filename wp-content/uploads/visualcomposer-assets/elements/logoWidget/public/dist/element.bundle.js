vcvWebpackJsonp([1],{"./logoWidget/component.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o("./node_modules/babel-runtime/helpers/extends.js"),l=n(i),s=o("./node_modules/babel-runtime/core-js/object/get-prototype-of.js"),a=n(s),d=o("./node_modules/babel-runtime/helpers/classCallCheck.js"),c=n(d),r=o("./node_modules/babel-runtime/helpers/createClass.js"),u=n(r),g=o("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),m=n(g),p=o("./node_modules/babel-runtime/helpers/inherits.js"),v=n(p),h=o("./node_modules/react/index.js"),b=n(h),f=o("./node_modules/vc-cake/index.js"),w=n(f),x=o("./node_modules/classnames/index.js"),y=n(x),_=w["default"].getService("api"),j=function(e){function t(e){(0,c["default"])(this,t);var o=(0,m["default"])(this,(t.__proto__||(0,a["default"])(t)).call(this,e));return o.state={logo:window.vcvLogo||""},o}return(0,v["default"])(t,e),(0,u["default"])(t,[{key:"getLogo",value:function(){return b["default"].createElement("div",{className:"vcvhelper","data-vcvs-html":"[vcv_logo size="+this.props.atts.size+"]",dangerouslySetInnerHTML:{__html:this.state.logo||""}})}},{key:"render",value:function(){var e=this.props,t=e.id,o=e.atts,n=e.editor,i=o.size,s=o.alignment,a=o.customClass,d=o.metaCustomId,c=[],r=["vce","vce-logo-widget"],u={},g={},m=window.vcvImageSizes?window.vcvImageSizes:{thumbnail:{width:150},medium:{width:300},large:{width:1024}};if(m[i]&&m[i].width)u.width=m[i].width+"px";else{var p=i.match(/\d+x\d+$/g);if(p&&1===p.length){var v=p[0].split("x");u.width=v[0]+"px",u.height=v[1]+"px"}else u.width="",u.height=""}s&&c.push("vce-logo-widget--align-"+s),"string"==typeof a&&a&&c.push(a),c=(0,y["default"])(c),r=(0,y["default"])(r),d&&(g.id=d);var h=this.applyDO("all");return b["default"].createElement("div",(0,l["default"])({},n,{id:"el-"+t,className:c}),b["default"].createElement("div",(0,l["default"])({className:r,style:u},h,g),this.getLogo()))}}]),t}(_.elementComponent);t["default"]=j},0:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var i=o("./node_modules/vc-cake/index.js"),l=n(i),s=o("./logoWidget/component.js"),a=n(s),d=l["default"].getService("cook").add;d(o("./logoWidget/settings.json"),function(e){e.add(a["default"])},{css:o("./node_modules/raw-loader/index.js!./logoWidget/styles.css"),editorCss:o("./node_modules/raw-loader/index.js!./logoWidget/editor.css"),mixins:{}},"")},"./logoWidget/settings.json":function(e,t){e.exports={size:{type:"string",access:"public",value:"full",options:{label:"Size",description:"Enter image size (Example: 'thumbnail', 'medium', 'large', 'full' or other sizes defined by theme). Alternatively enter size in pixels (Example: 200x100 (Width x Height))."}},alignment:{type:"buttonGroup",access:"public",value:"left",options:{label:"Alignment",values:[{label:"Left",value:"left",icon:"vcv-ui-icon-attribute-alignment-left"},{label:"Center",value:"center",icon:"vcv-ui-icon-attribute-alignment-center"},{label:"Right",value:"right",icon:"vcv-ui-icon-attribute-alignment-right"}]}},customClass:{type:"string",access:"public",value:"",options:{label:"Extra class name",description:"Add an extra class name to the element and refer to it from Custom CSS option."}},designOptions:{type:"designOptions",access:"public",value:{},options:{label:"Design Options"}},editFormTab1:{type:"group",access:"protected",value:["size","alignment","metaCustomId","customClass"],options:{label:"General"}},metaEditFormTabs:{type:"group",access:"protected",value:["editFormTab1","designOptions"]},relatedTo:{type:"group",access:"protected",value:["General"]},assetsLibrary:{access:"public",type:"string",value:["animate"]},metaBackendLabels:{type:"group",access:"protected",value:[{value:["size"]}]},metaCustomId:{type:"customId",access:"public",value:"",options:{label:"Element ID",description:"Apply unique Id to element to link directly to it by using #your_id (for element id use lowercase input only)."}},tag:{access:"protected",type:"string",value:"logoWidget"}}},"./node_modules/raw-loader/index.js!./logoWidget/editor.css":function(e,t){e.exports=".vce-logo-widget {\n  min-height: 1em;\n}\n\n.vce-logo-widget vcvhelper, .vce-logo-widget .vcvhelper {\n  height: 100%;\n}"},"./node_modules/raw-loader/index.js!./logoWidget/styles.css":function(e,t){e.exports=".vce-logo-widget {\n  display: inline-block;\n  width: 100%;\n  max-width: 100%;\n  overflow: hidden;\n}\n.vce-logo-widget--align-left {\n  text-align: left;\n}\n.vce-logo-widget--align-center {\n  text-align: center;\n}\n.vce-logo-widget--align-right {\n  text-align: right;\n}\n.vce-logo-widget .custom-logo-link {\n  padding-right: 0;\n  box-shadow: none;\n}\n.vce-logo-widget .custom-logo-link img {\n  box-shadow: none;\n}\n.vce-logo-widget img {\n  max-height: 100%;\n  max-width: 100%;\n  box-shadow: none;\n  height: auto;\n}\n"}});