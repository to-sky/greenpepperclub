(window.vcvWebpackJsonp4x=window.vcvWebpackJsonp4x||[]).push([[0],{"./node_modules/raw-loader/index.js!./woocommerceCart/editor.css":function(e,t){e.exports='[data-vcv-element-disable-interaction="true"].vce-woocommerce-wrapper::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 999;\n}\n'},"./woocommerceCart/index.js":function(e,t,o){"use strict";o.r(t);var n=o("./node_modules/vc-cake/index.js"),s=o("./node_modules/@babel/runtime/helpers/extends.js"),r=o.n(s),c=o("./node_modules/@babel/runtime/helpers/classCallCheck.js"),a=o.n(c),i=o("./node_modules/@babel/runtime/helpers/createClass.js"),d=o.n(i),l=o("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),m=o.n(l),p=o("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),u=o.n(p),h=o("./node_modules/@babel/runtime/helpers/inherits.js"),v=o.n(h),b=o("./node_modules/react/index.js"),g=o.n(b),w=function(e){function t(){return a()(this,t),m()(this,u()(t).apply(this,arguments))}return v()(t,e),d()(t,[{key:"getShortcodeString",value:function(e){return"[".concat(e.shortcode,"]")}},{key:"componentDidMount",value:function(){this.updateShortcodeToHtml(this.getShortcodeString(this.props.atts),this.ref)}},{key:"render",value:function(){var e=this,t=this.props,o=t.id,n=t.atts,s=t.editor,c=this.applyDO("all");return g.a.createElement("div",r()({className:"vce vce-woocommerce-wrapper woocommerce-page woocommerce-cart",id:"el-"+o},s,c),g.a.createElement("div",{className:"vcvhelper",ref:function(t){e.ref=t},"data-vcvs-html":this.getShortcodeString(n)}))}}]),t}(Object(n.getService)("api").elementComponent);(0,Object(n.getService)("cook").add)(o("./woocommerceCart/settings.json"),function(e){e.add(w)},{css:!1,editorCss:o("./node_modules/raw-loader/index.js!./woocommerceCart/editor.css")})},"./woocommerceCart/settings.json":function(e){e.exports={designOptions:{type:"designOptions",access:"public",value:{},options:{label:"Design Options"}},metaEditFormTabs:{type:"group",access:"protected",value:["designOptions"]},relatedTo:{type:"group",access:"protected",value:["General"]},tag:{access:"protected",type:"string",value:"woocommerceCart"},shortcode:{access:"protected",type:"string",value:"woocommerce_cart"},metaDisableInteractionInEditor:{type:"toggle",access:"protected",value:!0}}}},[["./woocommerceCart/index.js"]]]);