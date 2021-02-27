(window.vcvWebpackJsonp4x=window.vcvWebpackJsonp4x||[]).push([[0],{"./featureDescription/index.js":function(e,t,i){"use strict";i.r(t);var n=i("./node_modules/vc-cake/index.js"),o=i.n(n),a=i("./node_modules/@babel/runtime/helpers/extends.js"),r=i.n(a),c=i("./node_modules/@babel/runtime/helpers/classCallCheck.js"),s=i.n(c),l=i("./node_modules/@babel/runtime/helpers/createClass.js"),u=i.n(l),d=i("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),p=i.n(d),g=i("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),b=i.n(g),m=i("./node_modules/@babel/runtime/helpers/inherits.js"),v=i.n(m),f=i("./node_modules/react/index.js"),h=i.n(f),y=Object(n.getService)("api"),k=Object(n.getService)("cook"),x=function(e){function t(){return s()(this,t),p()(this,b()(t).apply(this,arguments))}return v()(t,e),u()(t,[{key:"validSize",value:function(e){return!isNaN(e)&&!!parseInt(e)}},{key:"render",value:function(){var e=this.props,t=e.id,i=e.atts,n=e.editor,o=i.description,a=i.image,c=i.addButton,s=i.button,l=i.shape,u=i.alignment,d=i.size,p=i.metaCustomId,g=i.customClass,b={},m="vce-feature-description vce",v=window.vcvImageSizes?window.vcvImageSizes:{thumbnail:{width:150},medium:{width:300},large:{width:1024}},f="vce-feature-description-image",y="vce-feature-description-image-wrapper",x={},w={};if(l&&(f+=" vce-features-shape--".concat(l)),a&&(x.backgroundImage="url(".concat(this.getImageUrl(a),")")),v[d]&&v[d].width)w.width=v[d].width+"px",x.padding="0 0 100% 0";else{var C=d.split("x");2===C.length&&this.validSize(C[0])&&this.validSize(C[1])?(x.padding="unset",x.width=C[0]+"px",x.height=C[1]+"px",w.width=C[0]+"px",w.height=C[1]+"px"):(w.width=v.medium+"px",x.padding="0 0 100% 0")}u&&(y+=" vce-feature-description-image-align--".concat(u)),p&&(b.id=p),"string"==typeof g&&g&&(m+=" "+g);var j=this.getMixinData("backgroundPosition");j&&(f+=" vce-feature-description-image--background-position-".concat(j.selector));var S="";c&&(S=k.get(s).render(null,!1));a&&a.filter&&"normal"!==a.filter&&(f+=" vce-image-filter--".concat(a.filter));var D=this.applyDO("all");return h.a.createElement("div",r()({className:m,id:"el-"+t},n,D),h.a.createElement("div",b,h.a.createElement("div",{className:y,style:w},h.a.createElement("div",{className:f,style:x})),h.a.createElement("div",{className:"vce-feature-description-content"},o),S))}}]),t}(y.elementComponent);(0,o.a.getService("cook").add)(i("./featureDescription/settings.json"),function(e){e.add(x)},{css:i("./node_modules/raw-loader/index.js!./featureDescription/styles.css"),editorCss:!1,mixins:{backgroundPosition:{mixin:i("./node_modules/raw-loader/index.js!./featureDescription/cssMixins/backgroundPosition.pcss")}}},"")},"./featureDescription/settings.json":function(e){e.exports={tag:{access:"protected",type:"string",value:"featureDescription"},description:{type:"htmleditor",access:"public",value:'<h1 style="text-transform:uppercase;text-align:center;">tattoo shop</h1>\n<p style="text-align:center;">A tattoo is a form of body modification, made by inserting indelible ink into the dermis layer of the skin to change the pigment.</p>',options:{label:"Description",inline:!0,dynamicField:!0,skinToggle:"darkTextSkin"}},darkTextSkin:{type:"toggleSmall",access:"public",value:!1},image:{type:"attachimage",access:"public",value:"feature-description-background.png",options:{label:"Image",multiple:!1,dynamicField:!0,defaultValue:"feature-description-background.png",imageFilter:!0}},backgroundImagePosition:{type:"buttonGroup",access:"public",value:"center center",options:{label:"Image position",cssMixin:{mixin:"backgroundPosition",property:"backgroundPosition",namePattern:"[a-z]+"},values:[{label:"Left Top",value:"left top",icon:"vcv-ui-icon-attribute-background-position-left-top"},{label:"Center Top",value:"center top",icon:"vcv-ui-icon-attribute-background-position-center-top"},{label:"Right Top",value:"right top",icon:"vcv-ui-icon-attribute-background-position-right-top"},{label:"Left Center",value:"left center",icon:"vcv-ui-icon-attribute-background-position-left-center"},{label:"Center Center",value:"center center",icon:"vcv-ui-icon-attribute-background-position-center-center"},{label:"Right Center",value:"right center",icon:"vcv-ui-icon-attribute-background-position-right-center"},{label:"Left Bottom",value:"left bottom",icon:"vcv-ui-icon-attribute-background-position-left-bottom"},{label:"Center Bottom",value:"center bottom",icon:"vcv-ui-icon-attribute-background-position-center-bottom"},{label:"Right Bottom",value:"right bottom",icon:"vcv-ui-icon-attribute-background-position-right-bottom"}]}},shape:{type:"buttonGroup",access:"public",value:"filled-circle",options:{label:"Shape",values:[{label:"Square",value:"filled-square",icon:"vcv-ui-icon-attribute-shape-square"},{label:"Rounded",value:"filled-rounded",icon:"vcv-ui-icon-attribute-shape-rounded"},{label:"Circle",value:"filled-circle",icon:"vcv-ui-icon-attribute-shape-round"}]}},size:{type:"string",access:"public",value:"medium",options:{label:"Size",description:"Enter image size (Example: 'thumbnail', 'medium', 'large', 'full' or other sizes defined by theme). Alternatively enter size in pixels (Example: 200x100 (Width x Height))."}},alignment:{type:"buttonGroup",access:"public",value:"center",options:{label:"Alignment",values:[{label:"Left",value:"left",icon:"vcv-ui-icon-attribute-alignment-left"},{label:"Center",value:"center",icon:"vcv-ui-icon-attribute-alignment-center"},{label:"Right",value:"right",icon:"vcv-ui-icon-attribute-alignment-right"}]}},addButton:{type:"toggle",access:"public",value:!0,options:{label:"Add button"}},customClass:{type:"string",access:"public",value:"",options:{label:"Extra class name",description:"Add an extra class name to the element and refer to it from Custom CSS option."}},button:{type:"element",access:"public",value:{tag:"outlineButton",alignment:"center",shape:"round",color:"#cbbc95",borderColor:"#cbbc95",hoverColorAnimated:"#fff",hoverBackgroundBorder:"#cbbc95"},options:{category:"Button",tabLabel:"Button",merge:{attributes:[{key:"alignment",type:"string"},{key:"buttonText",type:"string"},{key:"buttonUrl",type:"object"}]},onChange:{rules:{addButton:{rule:"toggle"}},actions:[{action:"toggleSectionVisibility"}]}}},designOptions:{type:"designOptions",access:"public",value:{},options:{label:"Design Options"}},editFormTab1:{type:"group",access:"protected",value:["description","image","backgroundImagePosition","shape","size","alignment","addButton","metaCustomId","customClass"],options:{label:"General"}},metaEditFormTabs:{type:"group",access:"protected",value:["editFormTab1","button","designOptions"]},relatedTo:{type:"group",access:"protected",value:["General"]},metaCustomId:{type:"customId",access:"public",value:"",options:{label:"Element ID",description:"Apply unique ID to element to link directly to it by using #your_id (for element ID use lowercase input only)."}}}},"./node_modules/raw-loader/index.js!./featureDescription/cssMixins/backgroundPosition.pcss":function(e,t){e.exports=".vce-feature-description-image.vce-feature-description-image--background-position-$selector {\n  @if $backgroundPosition != false {\n    background-position: $backgroundPosition;\n  }\n}"},"./node_modules/raw-loader/index.js!./featureDescription/styles.css":function(e,t){e.exports=".vce-feature-description .vce {\n  margin-bottom: 0;\n}\n.vce-feature-description .vce-feature-description-content {\n  margin: 30px 0;\n}\n.vce-feature-description .vce-feature-description-image-wrapper {\n  max-width: 100%;\n}\n.vce-feature-description .vce-feature-description-image {\n  background-size: cover;\n  background-position: center;\n  max-width: 100%;\n}\n.vce-feature-description .vce-feature-description-image.vce-features-shape--filled-circle {\n  border-radius: 50%;\n}\n.vce-feature-description .vce-feature-description-image.vce-features-shape--filled-rounded {\n  border-radius: 10px;\n}\n.vce-feature-description .vce-feature-description-image-align--right {\n  margin: 0 0 0 auto;\n}\n.vce-feature-description .vce-feature-description-image-align--left {\n  margin: 0;\n}\n.vce-feature-description .vce-feature-description-image-align--center {\n  margin: 0 auto;\n}\n"}},[["./featureDescription/index.js"]]]);