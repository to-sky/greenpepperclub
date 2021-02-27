(window.vcvWebpackJsonp4x=window.vcvWebpackJsonp4x||[]).push([[0],{"./marqueeElement/index.js":function(e,n,t){"use strict";t.r(n);var a=t("./node_modules/vc-cake/index.js"),l=t.n(a),i=t("./node_modules/@babel/runtime/helpers/extends.js"),o=t.n(i),r=t("./node_modules/@babel/runtime/helpers/classCallCheck.js"),s=t.n(r),c=t("./node_modules/@babel/runtime/helpers/createClass.js"),m=t.n(c),u=t("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),d=t.n(u),p=t("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),v=t.n(p),g=t("./node_modules/@babel/runtime/helpers/inherits.js"),b=t.n(g),y=t("./node_modules/react/index.js"),f=t.n(y),x=function(e){function n(){return s()(this,n),d()(this,v()(n).apply(this,arguments))}return b()(n,e),m()(n,[{key:"validateSize",value:function(e){var n=new RegExp("^-?\\d*(\\.\\d{0,9})?("+["px","em","rem","%","vw","vh"].join("|")+")?$");return""===e||e.match(n)?e:null}},{key:"render",value:function(){var e=this.props,n=e.id,t=e.atts,a=e.editor,l=t.text,i=t.elementTag,r=t.font,s=t.fontSize,c=t.alignment,m=t.lineHeight,u=t.letterSpacing,d=t.link,p=t.colorType,v=t.direction,g=t.speed,b=t.customClass,y=t.metaCustomId,x="vce-marquee-element vce",h={},q="vce-marquee-element-inner",k={style:{}},w=i,E=l;if(d&&d.url){var S={href:d.url,title:d.title,target:d.targetBlank?"_blank":void 0,rel:d.relNofollow?"nofollow":void 0};E=f.a.createElement("a",o()({className:"vce-marquee-element-link"},S),E)}"string"==typeof b&&b&&(x+=" "+b),x+=" vce-marquee-element-direction--".concat(v),s&&(s=this.validateSize(s))&&(s=/^\d+$/.test(s)?s+"px":s,k.style.fontSize=s),m&&(m=this.validateSize(m))&&(k.style.lineHeight=m),u&&(u=this.validateSize(u))&&(u=/^\d+$/.test(u)?u+"px":u,k.style.letterSpacing=u),c&&(x+=" vce-marquee-element--align-".concat(c));var C=this.getMixinData("textColor");if(C)switch(p){case"gradient":x+=" vce-marquee-element--gradient-".concat(C.selector);break;case"color":x+=" vce-marquee-element--color-".concat(C.selector);break;default:console.warn("There was an issue assigning color type!")}if(g&&(C=this.getMixinData("animationDuration"),x+=" vce-marquee-element--duration-".concat(C.selector)),r&&"active"===r.status){var j=r.fontStyle?"regular"===r.fontStyle.style?"":r.fontStyle.style:null;k.style.fontWeight=r.fontStyle?r.fontStyle.weight:null,k.style.fontStyle=j}(C=this.getMixinData("fontFamily"))&&(x+=" vce-marquee-element--font-family-".concat(C.selector)),y&&(h.id=y);var F=this.applyDO("padding"),T=this.applyDO("margin background border animation");return f.a.createElement("div",o()({className:x},a,{id:"el-"+n},T),f.a.createElement("div",o()({className:"vce-marquee-element-wrapper"},h),f.a.createElement("div",o()({className:"vce-marquee-element--background"},k),f.a.createElement("div",{className:"vce-marquee-element-track"},f.a.createElement(w,o()({className:q},F),E),f.a.createElement(w,o()({className:q},F),E)),f.a.createElement(w,o()({className:q},F),E))))}}]),n}(l.a.getService("api").elementComponent);(0,l.a.getService("cook").add)(t("./marqueeElement/settings.json"),function(e){e.add(x)},{css:t("./node_modules/raw-loader/index.js!./marqueeElement/styles.css"),editorCss:t("./node_modules/raw-loader/index.js!./marqueeElement/editor.css"),mixins:{textColor:{mixin:t("./node_modules/raw-loader/index.js!./marqueeElement/cssMixins/textColor.pcss")},animationDuration:{mixin:t("./node_modules/raw-loader/index.js!./marqueeElement/cssMixins/animationDuration.pcss")},fontFamily:{mixin:t("./node_modules/raw-loader/index.js!./marqueeElement/cssMixins/fontFamily.pcss")}}},"")},"./marqueeElement/settings.json":function(e){e.exports={designOptions:{type:"designOptions",access:"public",value:{},options:{label:"Design Options"}},editFormTab1:{type:"group",access:"protected",value:["text","font","elementTag","colorType","color","gradientStart","gradientEnd","gradientAngle","fontSize","alignment","lineHeight","letterSpacing","direction","speed","link","metaCustomId","customClass"],options:{label:"General"}},metaEditFormTabs:{type:"group",access:"protected",value:["editFormTab1","designOptions"]},relatedTo:{type:"group",access:"protected",value:["General"]},text:{type:"string",access:"public",value:"The tag was first introduced in early versions of Microsoft's Internet Explorer.",options:{label:"Title text",dynamicField:!0}},font:{type:"googleFonts",access:"public",value:{fontFamily:"Flamenco",fontStyle:{weight:"400",style:"regular"},status:"active",fontText:"The tag was first introduced in early versions of Microsoft's Internet Explorer."},options:{label:"",cssMixin:{mixin:"fontFamily",property:"fontFamily",namePattern:"[a-z]+",valueKey:"fontFamily"}}},elementTag:{type:"dropdown",access:"public",value:"p",options:{label:"Element tag",values:[{label:"h1",value:"h1"},{label:"h2",value:"h2"},{label:"h3",value:"h3"},{label:"h4",value:"h4"},{label:"h5",value:"h5"},{label:"h6",value:"h6"},{label:"p",value:"p"},{label:"div",value:"div"}]}},colorType:{type:"dropdown",access:"public",value:"color",options:{label:"Gradient overlay type",values:[{label:"Color",value:"color"},{label:"Gradient",value:"gradient"}]}},color:{type:"color",access:"public",value:"",options:{label:"Title color",cssMixin:{mixin:"textColor",property:"color",namePattern:"[\\da-f]+"},onChange:{rules:{colorType:{rule:"value",options:{value:"color"}}},actions:[{action:"toggleVisibility"}]}}},gradientStart:{type:"color",access:"public",value:" #FF7200",options:{label:"Start color",cssMixin:{mixin:"textColor",property:"gradientStart",namePattern:"[\\da-f]+"},onChange:{rules:{colorType:{rule:"value",options:{value:"gradient"}}},actions:[{action:"toggleVisibility"}]}}},gradientEnd:{type:"color",access:"public",value:" #5C00FF",options:{label:"End color",cssMixin:{mixin:"textColor",property:"gradientEnd",namePattern:"[\\da-f]+"},onChange:{rules:{colorType:{rule:"value",options:{value:"gradient"}}},actions:[{action:"toggleVisibility"}]}}},gradientAngle:{type:"range",access:"public",value:"45",options:{label:"Gradient angle",cssMixin:{mixin:"textColor",property:"gradientAngle",namePattern:"[\\d\\-]+"},min:0,max:180,measurement:"°",onChange:{rules:{colorType:{rule:"value",options:{value:"gradient"}}},actions:[{action:"toggleVisibility"}]}}},fontSize:{type:"string",access:"public",value:"",options:{label:"Font size"}},alignment:{type:"buttonGroup",access:"public",value:"left",options:{label:"Alignment",values:[{label:"Left",value:"left",icon:"vcv-ui-icon-attribute-alignment-left"},{label:"Center",value:"center",icon:"vcv-ui-icon-attribute-alignment-center"},{label:"Right",value:"right",icon:"vcv-ui-icon-attribute-alignment-right"}]}},lineHeight:{type:"string",access:"public",value:"",options:{label:"Line height"}},letterSpacing:{type:"string",access:"public",value:"",options:{label:"Letter spacing"}},link:{type:"url",access:"public",value:{url:"",title:"",targetBlank:!0,relNofollow:!1},options:{label:"Link selection",dynamicField:!0}},direction:{type:"dropdown",access:"public",value:"left",options:{label:"Direction",values:[{label:"Left",value:"left"},{label:"Top",value:"top"},{label:"Right",value:"right"},{label:"Bottom",value:"bottom"}]}},speed:{type:"number",access:"public",value:"5000",options:{label:"Speed (milliseconds)",cssMixin:{mixin:"animationDuration",property:"animationDuration",namePattern:"[\\da-f]+"}}},customClass:{type:"string",access:"public",value:"",options:{label:"Extra class name",description:"Add an extra class name to the element and refer to it from Custom CSS option."}},metaCustomId:{type:"customId",access:"public",value:"",options:{label:"Element ID",description:"Apply unique ID to element to link directly to it by using #your_id (for element ID use lowercase input only)."}},tag:{type:"string",access:"protected",value:"marqueeElement"}}},"./node_modules/raw-loader/index.js!./marqueeElement/cssMixins/animationDuration.pcss":function(e,n){e.exports=".vce-marquee-element {\n  &--duration-$selector {\n    .vce-marquee-element-track {\n      @if $animationDuration != false {\n        animation-duration: $(animationDuration)ms;\n      }\n    }\n  }\n}\n"},"./node_modules/raw-loader/index.js!./marqueeElement/cssMixins/fontFamily.pcss":function(e,n){e.exports=".vce-marquee-element--font-family-$selector {\n  .vce-marquee-element--background {\n    @if $fontFamily != false {\n      font-family: $fontFamily;\n    }\n  }\n}\n"},"./node_modules/raw-loader/index.js!./marqueeElement/cssMixins/textColor.pcss":function(e,n){e.exports=".vce-marquee-element {\n  &--color-$selector {\n    .vce-marquee-element-inner {\n      @if $color != false {\n        color: $color;\n      }\n    }\n  }\n  &--gradient-$selector {\n    .vce-marquee-element-inner {\n      @if $gradientStart != false {\n        background-image: linear-gradient($(gradientAngle)deg, $gradientStart, $gradientEnd);\n        background-clip: text;\n        -webkit-background-clip: text;\n        color: transparent;\n      }\n    }\n  }\n}\n"},"./node_modules/raw-loader/index.js!./marqueeElement/editor.css":function(e,n){e.exports=".vce-marquee-element {\n  min-height: 1em;\n}\n\n.vce-marquee-element-inner .medium-editor-placeholder {\n  background: inherit;\n  display: inline-block;\n}"},"./node_modules/raw-loader/index.js!./marqueeElement/styles.css":function(e,n){e.exports=".vce-marquee-element-inner {\n  margin: 0;\n  padding: 0;\n  max-width: 100%;\n}\n\n.vce-marquee-element--align-left {\n  text-align: left;\n}\n\n.vce-marquee-element--align-right {\n  text-align: right;\n}\n\n.vce-marquee-element--align-center {\n  text-align: center;\n}\n\n.vce-marquee-element .vce-marquee-element-link {\n  display: inline-block;\n  background: inherit;\n  color: inherit;\n  box-shadow: none;\n  max-width: 100%;\n}\n\n.vce-marquee-element .vce-marquee-element-link:hover,\n.vce-marquee-element .vce-marquee-element-link:focus {\n  box-shadow: none;\n}\n\n.vce-marquee-element--background {\n  overflow: hidden;\n  position: relative;\n}\n\n.vce-marquee-element-track {\n  display: block;\n  width: 200%;\n  position: absolute;\n  overflow: hidden;\n}\n\n.vce-marquee-element-direction--bottom .vce-marquee-element-track,\n.vce-marquee-element-direction--top .vce-marquee-element-track {\n  width: 100%;\n}\n\n.vce-marquee-element-direction--bottom .vce-marquee-element-track .vce-marquee-element-inner,\n.vce-marquee-element-direction--top .vce-marquee-element-track .vce-marquee-element-inner {\n  width: 100%;\n}\n\n.vce-marquee-element-direction--right .vce-marquee-element-track {\n  animation: vcv-marquee-x 2000ms linear infinite;\n}\n\n.vce-marquee-element-direction--left .vce-marquee-element-track {\n  animation: vcv-marquee-x 2000ms linear infinite;\n  animation-direction: reverse;\n}\n\n.vce-marquee-element-direction--bottom .vce-marquee-element-track {\n  animation: vcv-marquee-y 2000ms linear infinite;\n}\n\n.vce-marquee-element-direction--top .vce-marquee-element-track {\n  animation: vcv-marquee-y 2000ms linear infinite;\n  animation-direction: reverse;\n}\n\n.vce-marquee-element-track .vce-marquee-element-inner {\n  float: left;\n  width: 50%;\n}\n\n.vce-marquee-element--background > .vce-marquee-element-inner {\n  visibility: hidden;\n}\n\n@keyframes vcv-marquee-x {\n  0% { left: -100%; }\n  100% { left: 0; }\n}\n\n@keyframes vcv-marquee-y {\n  0% { top: -100%; }\n  100% { top: 0; }\n}"}},[["./marqueeElement/index.js"]]]);