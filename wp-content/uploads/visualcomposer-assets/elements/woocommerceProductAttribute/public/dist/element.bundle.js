(window.vcvWebpackJsonp4x=window.vcvWebpackJsonp4x||[]).push([[0],{"./node_modules/raw-loader/index.js!./woocommerceProductAttribute/editor.css":function(e,t){e.exports='[data-vcv-element-disable-interaction="true"].vce-woocommerce-wrapper {\n  position: relative;\n}\n\n[data-vcv-element-disable-interaction="true"].vce-woocommerce-wrapper::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 999;\n}\n'},"./node_modules/raw-loader/index.js!./woocommerceProductAttribute/styles.css":function(e,t){e.exports=".vce-woocommerce-wrapper ul.products li.product .star-rating {\n  display: inline-block;\n}\n\n.vce-woocommerce-wrapper--align-left {\n  text-align: left;\n}\n.vce-woocommerce-wrapper--align-center {\n  text-align: center;\n}\n.vce-woocommerce-wrapper--align-right {\n  text-align: right;\n}"},"./woocommerceProductAttribute/index.js":function(e,t,o){"use strict";o.r(t);var r=o("./node_modules/vc-cake/index.js"),a=o("./node_modules/@babel/runtime/helpers/extends.js"),s=o.n(a),n=o("./node_modules/@babel/runtime/helpers/classCallCheck.js"),i=o.n(n),l=o("./node_modules/@babel/runtime/helpers/createClass.js"),c=o.n(l),u=o("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),d=o.n(u),p=o("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),m=o.n(p),b=o("./node_modules/@babel/runtime/helpers/inherits.js"),v=o.n(b),g=o("./node_modules/react/index.js"),_=o.n(g),h=function(e){function t(){return i()(this,t),d()(this,m()(t).apply(this,arguments))}return v()(t,e),c()(t,[{key:"getShortcodeString",value:function(e){var t={per_page:e.atts_per_page,columns:e.atts_columns,orderby:e.atts_orderby,order:e.atts_order,attribute:e.atts_attribute,filter:e.atts_filter.join(",")},o=Object.keys(t).reduce(function(e,o){return e+(""!==t[o]?" ".concat(o,'="').concat(t[o],'"'):"")},"");return"[".concat(e.shortcode," ").concat(o,"]")}},{key:"componentDidMount",value:function(){this.updateShortcodeToHtml(this.getShortcodeString(this.props.atts),this.ref)}},{key:"componentDidUpdate",value:function(e){var t={per_page:e.atts.atts_per_page,columns:e.atts.atts_columns,orderby:e.atts.atts_orderby,order:e.atts.atts_order,attribute:e.atts.atts_attribute,filter:e.atts.atts_filter.join(",")},r={per_page:this.props.atts.atts_per_page,columns:this.props.atts.atts_columns,orderby:this.props.atts.atts_orderby,order:this.props.atts.atts_order,attribute:this.props.atts.atts_attribute,filter:this.props.atts.atts_filter.join(",")};(0,o("./node_modules/lodash/lodash.js").isEqual)(t,r)||this.updateShortcodeToHtml(this.getShortcodeString(this.props.atts),this.ref)}},{key:"render",value:function(){var e=this,t=this.props,o=t.id,r=t.atts,a=t.editor,n=r.alignment,i="vce vce-woocommerce-wrapper",l=this.applyDO("all");return n&&(i+=" vce-woocommerce-wrapper--align-".concat(n)),_.a.createElement("div",s()({className:i,id:"el-"+o},a,l),_.a.createElement("div",{className:"vcvhelpera",ref:function(t){e.ref=t},"data-vcvs-html":this.getShortcodeString(r)}))}}]),t}(Object(r.getService)("api").elementComponent);(0,Object(r.getService)("cook").add)(o("./woocommerceProductAttribute/settings.json"),function(e){e.add(h)},{css:o("./node_modules/raw-loader/index.js!./woocommerceProductAttribute/styles.css"),editorCss:o("./node_modules/raw-loader/index.js!./woocommerceProductAttribute/editor.css")})},"./woocommerceProductAttribute/settings.json":function(e){e.exports={designOptions:{type:"designOptions",access:"public",value:{},options:{label:"Design Options"}},atts_per_page:{type:"string",access:"public",value:"12",options:{label:"Per Page"}},atts_columns:{type:"string",access:"public",value:"4",options:{label:"Columns"}},atts_orderby:{type:"dropdown",access:"public",value:"title",options:{label:"Order by",values:[{label:"ID",value:"ID"},{label:"Title",value:"title"},{label:"Name",value:"name"},{label:"Date",value:"date"},{label:"Modified",value:"modified"},{label:"Random",value:"rand"},{label:"Comment Count",value:"comment_count"},{label:"Menu Order",value:"menu_order"}]}},atts_order:{type:"dropdown",access:"public",value:"asc",options:{label:"Order",onChange:{rules:{atts_orderby:{rule:"!value",options:{value:"rand"}}},actions:[{action:"toggleVisibility"}]},values:[{label:"Ascending",value:"asc"},{label:"Descending",value:"desc"}]}},atts_attribute:{type:"autocomplete",access:"public",value:"",options:{action:"woocommerceAttribute",labelAction:"productAttribute",validation:!0,label:"Attribute",single:!0}},atts_filter:{type:"autocomplete",access:"public",value:[],options:{action:"woocommerceAttributeFilter",labelAction:"productFilter",validation:!0,label:"Filter",single:!1}},alignment:{type:"buttonGroup",access:"public",value:"left",options:{label:"Content alignment",values:[{label:"Left",value:"left",icon:"vcv-ui-icon-attribute-alignment-left"},{label:"Center",value:"center",icon:"vcv-ui-icon-attribute-alignment-center"},{label:"Right",value:"right",icon:"vcv-ui-icon-attribute-alignment-right"}]}},editFormTab1:{type:"group",access:"protected",value:["atts_per_page","atts_columns","atts_orderby","atts_order","atts_attribute","atts_filter","alignment"],options:{label:"General"}},metaEditFormTabs:{type:"group",access:"protected",value:["editFormTab1","designOptions"]},relatedTo:{type:"group",access:"protected",value:["General"]},tag:{access:"protected",type:"string",value:"woocommerceProductAttribute"},shortcode:{access:"protected",type:"string",value:"product_attribute"},metaDisableInteractionInEditor:{type:"toggle",access:"protected",value:!0}}}},[["./woocommerceProductAttribute/index.js"]]]);