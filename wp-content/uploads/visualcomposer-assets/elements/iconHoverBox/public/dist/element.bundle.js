(window.vcvWebpackJsonp4x=window.vcvWebpackJsonp4x||[]).push([[0],{"./iconHoverBox/index.js":function(e,o,n){"use strict";n.r(o);var i=n("./node_modules/vc-cake/index.js"),t=n.n(i),r=n("./node_modules/@babel/runtime/helpers/extends.js"),c=n.n(r),a=n("./node_modules/@babel/runtime/helpers/classCallCheck.js"),s=n.n(a),l=n("./node_modules/@babel/runtime/helpers/createClass.js"),v=n.n(l),d=n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),u=n.n(d),b=n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),p=n.n(b),h=n("./node_modules/@babel/runtime/helpers/inherits.js"),g=n.n(h),x=n("./node_modules/react/index.js"),m=n.n(x),k=n("./node_modules/react-dom/index.js"),f=n.n(k),y=Object(i.getService)("api"),w=Object(i.getService)("cook"),B=function(e){function o(){return s()(this,o),u()(this,p()(o).apply(this,arguments))}return g()(o,e),v()(o,[{key:"componentDidMount",value:function(){var e=f.a.findDOMNode(this);e&&e.setAttribute("ontouchstart","")}},{key:"validateSize",value:function(e){var o=new RegExp("^-?\\d*(\\.\\d{0,9})?("+["px","em","rem","%","vw","vh"].join("|")+")?$");return""===e||e.match(o)?e:null}},{key:"render",value:function(){var e=this.props,o=e.id,n=e.atts,i=e.editor,t=n.image,r=n.icon,a=n.link,s=n.reverseHover,l=n.addCustomSize,v=n.width,d=n.height,u=n.alignment,b=n.customClass,p=n.metaCustomId,h="vce-icon-hoverbox vce",g={style:{}};if("string"==typeof b&&b&&(h+=" ".concat(b)),u&&(h+=" vce-icon-hoverbox-align--".concat(u)),s&&(h+=" vce-icon-hoverbox--reverse-hover"),l){if(h+=" vce-icon-hoverbox--custom-size",v){var x=this.validateSize(v);x&&(g.style.width=/^\d+$/.test(x)?"".concat(x,"%"):x)}if(d){var k=this.validateSize(d);k&&(g.style.paddingBottom=/^\d+$/.test(k)?"".concat(k,"%"):k)}}t&&(g.style.backgroundImage="url(".concat(this.getImageUrl(t),")"));var f="";if(a&&a.url){var y={href:a.url,title:a.title,target:a.targetBlank?"_blank":void 0,rel:a.relNofollow?"nofollow":void 0};f=m.a.createElement("a",c()({className:"vce-icon-hoverbox-link"},y))}var B=this.getMixinData("backgroundPosition");B&&(h+=" vce-icon-hoverbox-background-position--".concat(B.selector)),(B=this.getMixinData("hoverBackground"))&&(h+=" vce-icon-hoverbox-background--".concat(B.selector));var C=w.get(r),j=C?C.render(null,!1):null;p&&(g.id=p);var z=this.applyDO("margin background animation border"),_=this.applyDO("padding");return m.a.createElement("div",c()({className:h},i,{id:"el-"+o},z),m.a.createElement("div",c()({className:"vce-icon-hoverbox-wrapper"},g),m.a.createElement("div",c()({className:"vce-icon-hoverbox-inner"},_),j),f))}}]),o}(y.elementComponent);(0,t.a.getService("cook").add)(n("./iconHoverBox/settings.json"),function(e){e.add(B)},{css:n("./node_modules/raw-loader/index.js!./iconHoverBox/styles.css"),editorCss:n("./node_modules/raw-loader/index.js!./iconHoverBox/editor.css"),mixins:{backgroundPosition:{mixin:n("./node_modules/raw-loader/index.js!./iconHoverBox/cssMixins/backgroundPosition.pcss")},hoverBackground:{mixin:n("./node_modules/raw-loader/index.js!./iconHoverBox/cssMixins/hoverBackground.pcss")}}},"")},"./iconHoverBox/settings.json":function(e){e.exports={image:{type:"attachimage",access:"public",value:"icon-hover-box-background.jpg",options:{label:"Background image",multiple:!1,dynamicField:!0,defaultValue:"icon-hover-box-background.jpg",url:!1}},imagePosition:{type:"buttonGroup",access:"public",value:"center center",options:{label:"Image position",cssMixin:{mixin:"backgroundPosition",property:"backgroundPosition",namePattern:"[a-z]+"},values:[{label:"Left Top",value:"left top",icon:"vcv-ui-icon-attribute-background-position-left-top"},{label:"Center Top",value:"center top",icon:"vcv-ui-icon-attribute-background-position-center-top"},{label:"Right Top",value:"right top",icon:"vcv-ui-icon-attribute-background-position-right-top"},{label:"Left Center",value:"left center",icon:"vcv-ui-icon-attribute-background-position-left-center"},{label:"Center Center",value:"center center",icon:"vcv-ui-icon-attribute-background-position-center-center"},{label:"Right Center",value:"right center",icon:"vcv-ui-icon-attribute-background-position-right-center"},{label:"Left Bottom",value:"left bottom",icon:"vcv-ui-icon-attribute-background-position-left-bottom"},{label:"Center Bottom",value:"center bottom",icon:"vcv-ui-icon-attribute-background-position-center-bottom"},{label:"Right Bottom",value:"right bottom",icon:"vcv-ui-icon-attribute-background-position-right-bottom"}]}},icon:{type:"element",access:"public",value:{tag:"icon",iconAlignment:"center",shapeColor:"#FBE870"},options:{category:"Icon",tabLabel:"Icon",exclude:["iconUrl"]}},link:{type:"url",access:"public",value:{url:"",title:"",targetBlank:!1,relNofollow:!1},options:{label:"Link selection",dynamicField:!0}},reverseHover:{type:"toggle",access:"public",value:!1,options:{label:"Reverse hover animation"}},addCustomSize:{type:"toggle",access:"public",value:!0,options:{label:"Add custom size"}},width:{type:"string",access:"public",value:"100%",options:{label:"Width",description:"Enter hover box size (Example: 80%).",onChange:{rules:{addCustomSize:{rule:"toggle"}},actions:[{action:"toggleVisibility"}]}}},height:{type:"string",access:"public",value:"100%",options:{label:"Height",description:"Enter hover box size (Example: 300px).",onChange:{rules:{addCustomSize:{rule:"toggle"}},actions:[{action:"toggleVisibility"}]}}},alignment:{type:"buttonGroup",access:"public",value:"left",options:{label:"Alignment",values:[{label:"Left",value:"left",icon:"vcv-ui-icon-attribute-alignment-left"},{label:"Center",value:"center",icon:"vcv-ui-icon-attribute-alignment-center"},{label:"Right",value:"right",icon:"vcv-ui-icon-attribute-alignment-right"}],onChange:{rules:{addCustomSize:{rule:"toggle"}},actions:[{action:"toggleVisibility"}]}}},hoverBackground:{type:"color",access:"public",value:"rgba(61,61,61,.4)",options:{label:"Hover background color",cssMixin:{mixin:"hoverBackground",property:"hoverBackground",namePattern:"[\\da-f]+"}}},designOptions:{type:"designOptions",access:"public",value:{},options:{label:"Design Options"}},editFormTab1:{type:"group",access:"protected",value:["hoverBackground","image","imagePosition","link","reverseHover","addCustomSize","width","height","alignment","metaCustomId","customClass"],options:{label:"General"}},metaEditFormTabs:{type:"group",access:"protected",value:["editFormTab1","icon","designOptions"]},relatedTo:{type:"group",access:"protected",value:["General"]},customClass:{type:"string",access:"public",value:"",options:{label:"Extra class name",description:"Add an extra class name to the element and refer to it from Custom CSS option."}},metaCustomId:{type:"customId",access:"public",value:"",options:{label:"Element ID",description:"Apply unique ID to element to link directly to it by using #your_id (for element ID use lowercase input only)."}},tag:{access:"protected",type:"string",value:"iconHoverBox"}}},"./node_modules/raw-loader/index.js!./iconHoverBox/cssMixins/backgroundPosition.pcss":function(e,o){e.exports=".vce-icon-hoverbox-background-position--$selector {\n  .vce-icon-hoverbox-wrapper {\n    @if $backgroundPosition != false {\n      background-position: $backgroundPosition;\n    }\n  }\n}"},"./node_modules/raw-loader/index.js!./iconHoverBox/cssMixins/hoverBackground.pcss":function(e,o){e.exports=".vce-icon-hoverbox-background--$selector {\n  .vce-icon-hoverbox-wrapper::before {\n    @if $hoverBackground != false {\n      background: $hoverBackground;\n    }\n  }\n}"},"./node_modules/raw-loader/index.js!./iconHoverBox/editor.css":function(e,o){e.exports=".vce-icon-hoverbox {\n  min-height: 1em;\n}"},"./node_modules/raw-loader/index.js!./iconHoverBox/styles.css":function(e,o){e.exports='/* ----------------------------------------------\n * Text separator\n * ---------------------------------------------- */\n.vce-icon-hoverbox {\n  border: none;\n  box-sizing: border-box;\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n}\n\n.vce-icon-hoverbox-wrapper {\n  width: 100%;\n  position: relative;\n  max-width: 100%;\n  overflow: hidden;\n  display: inline-block;\n  vertical-align: top;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.vce-icon-hoverbox.vce-icon-hoverbox--custom-size .vce-icon-hoverbox-wrapper {\n  height: 0;\n  padding-bottom: 100%;\n}\n\n.vce-icon-hoverbox-inner {\n  position: relative;\n  box-sizing: border-box;\n  background-color: transparent;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  opacity: 0;\n  padding: 30px;\n  transition: opacity .2s ease-in-out, transform .2s ease-in-out;\n  width: 100%;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  border-radius: inherit;\n  z-index: 1;\n}\n\n.vce-icon-hoverbox-wrapper::before {\n  content: \'\';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  transition: opacity .2s ease-in-out;\n}\n\n.vce-icon-hoverbox--reverse-hover .vce-icon-hoverbox-wrapper .vce-icon-hoverbox-inner,\n.vce-icon-hoverbox-wrapper:hover .vce-icon-hoverbox-inner,\n.vce-icon-hoverbox--reverse-hover .vce-icon-hoverbox-wrapper::before,\n.vce-icon-hoverbox-wrapper:hover::before {\n  opacity: 1;\n}\n\n.vce-icon-hoverbox--reverse-hover .vce-icon-hoverbox-wrapper:hover .vce-icon-hoverbox-inner,\n.vce-icon-hoverbox--reverse-hover .vce-icon-hoverbox-wrapper:hover::before {\n  opacity: 0;\n}\n\n.vce-icon-hoverbox--custom-size .vce-icon-hoverbox-inner {\n  position: absolute;\n  height: 100%;\n}\n\n.vce-icon-hoverbox-inner .vce:last-child {\n  margin-bottom: 0;\n}\n\n/*RTL support. */\n.rtl.vce-icon-hoverbox,\n[dir="rtl"].vce-icon-hoverbox,\n.rtl .vce-icon-hoverbox,\n[dir="rtl"] .vce-icon-hoverbox {\n  direction: rtl;\n  unicode-bidi: embed;\n}\n.ltr.vce-icon-hoverbox,\n[dir="ltr"].vce-icon-hoverbox,\n.ltr .vce-icon-hoverbox,\n[dir="ltr"] .vce-icon-hoverbox {\n  direction: ltr;\n  unicode-bidi: normal;\n}\n\n.vce-icon-hoverbox.vce-icon-hoverbox-align--left {\n  text-align: left;\n}\n\n.vce-icon-hoverbox.vce-icon-hoverbox-align--center {\n  text-align: center;\n}\n\n.vce-icon-hoverbox.vce-icon-hoverbox-align--right {\n  text-align: right;\n}\n\n.vce-icon-hoverbox .vce-icon-hoverbox-link {\n  box-shadow: none;\n  border: none;\n  text-decoration: none;\n  background: transparent;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  z-index: 2;\n}'}},[["./iconHoverBox/index.js"]]]);