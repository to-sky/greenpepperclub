(window.vcvWebpackJsonp4x=window.vcvWebpackJsonp4x||[]).push([[0],{"./node_modules/raw-loader/index.js!./slideOutPostGridItem/cssMixins/backgroundColor.pcss":function(e,t){e.exports=".vce-slideout-grid-container.vce-posts-grid-container {\n  .vce-post-description.vce-post-description--background-color-$selector {\n    background-color: $backgroundColor;\n  }\n}\n"},"./node_modules/raw-loader/index.js!./slideOutPostGridItem/cssMixins/categoryColor.pcss":function(e,t){e.exports=".vce-slideout-grid-container.vce-posts-grid-container {\n  .vce-post-description--category-color-$selector {\n    .vce-post-description--category {\n      color: $categoryColor;\n    }\n  }\n}\n"},"./node_modules/raw-loader/index.js!./slideOutPostGridItem/cssMixins/excerptColor.pcss":function(e,t){e.exports=".vce-slideout-grid-container.vce-posts-grid-container {\n  .vce-post-description--excerpt-color-$selector {\n    .vce-post-description--excerpt {\n      color: $excerptColor;\n    }\n  }\n}"},"./node_modules/raw-loader/index.js!./slideOutPostGridItem/cssMixins/titleColor.pcss":function(e,t){e.exports=".vce-slideout-grid-container.vce-posts-grid-container {\n  .vce-post-description--title-color-$selector {\n    .vce-post-description--title {\n      color: $titleColor;\n    }\n  }\n}\n"},"./node_modules/raw-loader/index.js!./slideOutPostGridItem/styles.css":function(e,t){e.exports='/* ----------------------------------------------\n * Post Description\n * ---------------------------------------------- */\n.vce-slideout-grid-container.vce-posts-grid-container a {\n  text-decoration: none;\n  text-shadow: none;\n  box-shadow: none;\n  border: none;\n}\n\n.vce-slideout-grid-container.vce-posts-grid-container .vce-posts-grid-item .vce-post-description {\n  margin: 0;\n}\n\n.vce-slideout-grid-container.vce-posts-grid-container .vce-post-description {\n  box-sizing: border-box;\n  border: none;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n}\n\n.vce-slideout-grid-container.vce-posts-grid-container .vce-post-description:hover .vce-post-link {\n  top: 0;\n  margin-top: 10px;\n  opacity: 1;\n}\n\n.vce-slideout-grid-container.vce-posts-grid-container .vce-post-description.vce-post-description-aspect-ratio--1-1 {\n  padding-top: 100%;\n}\n\n.vce-slideout-grid-container.vce-posts-grid-container .vce-post-description.vce-post-description-aspect-ratio--16-9 {\n  padding-top: 56.25%;\n}\n\n.vce-slideout-grid-container.vce-posts-grid-container .vce-post-description.vce-post-description-aspect-ratio--9-16 {\n  padding-top: 177.77%;\n}\n\n.vce-slideout-grid-container.vce-posts-grid-container .vce-post-description.vce-post-description-aspect-ratio--4-3 {\n  padding-top: 75%;\n}\n\n.vce-slideout-grid-container.vce-posts-grid-container .vce-post-description.vce-post-description-aspect-ratio--3-4 {\n  padding-top: 133%;\n}\n\n.vce-slideout-grid-container.vce-posts-grid-container .vce-post-description.vce-post-description-aspect-ratio--5-3 {\n  padding-top: 60%;\n}\n\n.vce-slideout-grid-container.vce-posts-grid-container .vce-post-description.vce-post-description-aspect-ratio--3-5 {\n  padding-top: 166.66%;\n}\n\n.vce-slideout-grid-container.vce-posts-grid-container .vce-post-description-link {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  opacity: 0;\n  z-index: 5;\n}\n\n.vce-slideout-grid-container.vce-posts-grid-container .vce-post-description--content {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-align: start;\n  align-items: flex-start;\n  -ms-flex-pack: end;\n  justify-content: flex-end;\n  padding: 30px 25% 30px 30px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  cursor: pointer;\n}\n\n.vce-slideout-grid-container.vce-posts-grid-container .vce-post-description--has-background .vce-post-description--content {\n  padding-top: 20px;\n}\n\n.vce-slideout-grid-container.vce-posts-grid-container .vce-post-description--category,\n.vce-slideout-grid-container.vce-posts-grid-container .vce-post-description--title {\n  margin: 0;\n}\n\n.vce-slideout-grid-container.vce-posts-grid-container .vce-post-description--category {\n  font-size: 12px;\n}\n\n.vce-slideout-grid-container.vce-posts-grid-container .vce-post-description--title {\n  font-size: 36px;\n  font-weight: 500;\n  padding: 0;\n  margin: 0 0 10px;\n  line-height: 1.1;\n  text-transform: uppercase;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  letter-spacing: 9px;\n}\n\n.vce-slideout-grid-container.vce-posts-grid-container .vce-post-description--category-link {\n  z-index: 10;\n  text-transform: uppercase;\n  text-decoration: none;\n}\n\n.vce-slideout-grid-container.vce-posts-grid-container .vce-post-link .vce {\n  margin: 0;\n}\n\n.vce-slideout-grid-container.vce-posts-grid-container .vce-post-link {\n  display: block;\n  width: 100%;\n  position: relative;\n  z-index: 10;\n  top: 50px;\n  margin-top: -50px;\n  opacity: 0;\n  transition: top 0.4s ease-in-out 0.01s, margin-top 0.4s ease-in-out 0.01s, opacity 0.3s ease-in-out;\n}\n\n.vce-slideout-grid-container.vce-posts-grid-container .vce-post-description--excerpt p {\n  margin: 0 0 10px;\n  font-size: 15px;\n}\n\n/*RTL support. */\n.rtl.vce-post-description,\n[dir="rtl"].vce-post-description,\n.rtl .vce-post-description,\n[dir="rtl"] .vce-post-description {\n  direction: rtl;\n  unicode-bidi: embed;\n}\n\n.rtl.vce-post-description--content,\n[dir="rtl"].vce-post-description--content,\n.rtl .vce-post-description--content,\n[dir="rtl"] .vce-post-description--content {\n  text-align: right;\n}\n\n.ltr.vce-post-description,\n[dir="ltr"].vce-post-description,\n.ltr .vce-post-description,\n[dir="ltr"] .vce-post-description {\n  direction: ltr;\n  unicode-bidi: normal;\n}\n\n.ltr.vce-post-description--content,\n[dir="ltr"].vce-post-description--content,\n.ltr .vce-post-description--content,\n[dir="ltr"] .vce-post-description--content {\n  text-align: left;\n}\n\n@media (min-width: 544px) {\n  .vce-slideout-grid-container.vce-posts-grid-container .vce-post-description--title {\n    font-size: 2.4vw;\n    letter-spacing: 2px;\n  }\n\n  .vce-slideout-grid-container.vce-posts-grid-container .vce-post-description--category {\n    font-size: 10px;\n  }\n\n  .vce-slideout-grid-container.vce-posts-grid-container .vce-post-description--excerpt p {\n    font-size: 12px;\n    line-height: 1.5;\n  }\n\n  .vce-slideout-grid-container.vce-posts-grid-container .vce-post-link button {\n    padding: 10px 16px;\n    font-size: 10px;\n  }\n}\n\n@media (min-width: 768px) {\n  .vce-slideout-grid-container.vce-posts-grid-container .vce-post-description--title {\n    font-size: 2.8vw;\n    letter-spacing: 3px;\n  }\n\n  .vce-slideout-grid-container.vce-posts-grid-container .vce-post-description--excerpt p {\n    font-size: 13px;\n  }\n\n  .vce-slideout-grid-container.vce-posts-grid-container .vce-post-link button {\n    padding: 15px 24px;\n    font-size: 14px;\n  }\n}\n\n@media screen and (min-width: 1200px) {\n  .vce-slideout-grid-container.vce-posts-grid-container .vce-post-description--title {\n    font-size: 36px;\n    letter-spacing: 9px;\n  }\n\n  .vce-slideout-grid-container.vce-posts-grid-container .vce-post-description--category {\n    font-size: 12px;\n  }\n\n  .vce-slideout-grid-container.vce-posts-grid-container .vce-post-description--excerpt p {\n    font-size: 15px;\n    line-height: 1.5;\n  }\n\n  .vce-slideout-grid-container.vce-posts-grid-container .vce-post-link button {\n    padding: 15px 43px;\n    font-size: 16px;\n  }\n}'},"./slideOutPostGridItem/index.js":function(e,t,n){"use strict";n.r(t);var o=n("./node_modules/vc-cake/index.js"),i=n.n(o),s=n("./node_modules/@babel/runtime/helpers/extends.js"),c=n.n(s),r=n("./node_modules/@babel/runtime/helpers/slicedToArray.js"),p=n.n(r),d=n("./node_modules/@babel/runtime/helpers/classCallCheck.js"),a=n.n(d),l=n("./node_modules/@babel/runtime/helpers/createClass.js"),v=n.n(l),u=n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),g=n.n(u),m=n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),x=n.n(m),b=n("./node_modules/@babel/runtime/helpers/inherits.js"),f=n.n(b),y=n("./node_modules/react/index.js"),h=n.n(y),C=function(e){function t(){return a()(this,t),g()(this,x()(t).apply(this,arguments))}return f()(t,e),v()(t,[{key:"render",value:function(){var e=n("./node_modules/classnames/index.js"),t=this.props.atts,o=t.padding,i=t.background,s=t.aspectRatio,r=t.customAspectRatio,d={},a=133,l=e({"vce-post-description":!0,"vce-post-description--full":!o,"vce-post-description--has-background":o&&i}),v={};o&&i&&(v.backgroundColor=i);var u=this.getMixinData("titleColor");if(u&&(l=l.concat(" vce-post-description--title-color-".concat(u.selector))),(u=this.getMixinData("categoryColor"))&&(l=l.concat(" vce-post-description--category-color-".concat(u.selector))),(u=this.getMixinData("excerptColor"))&&(l=l.concat(" vce-post-description--excerpt-color-".concat(u.selector))),(u=this.getMixinData("backgroundColor"))&&(l=l.concat(" vce-post-description--background-color-".concat(u.selector))),s.indexOf(":")>=0){var g=s.split(":"),m=p()(g,2),x=m[0],b=m[1];l+=" vce-post-description-aspect-ratio--".concat(x,"-").concat(b)}else if("custom"===s&&r.indexOf(":")>=0){var f=r.split(":"),y=p()(f,2),C=y[0],k=y[1];C=parseInt(C),k=parseInt(k),C>0&&k>0&&(a=100/(C/k)),l+=" vce-post-description-aspect-ratio--custom",d.style={paddingTop:"".concat(a,"%")}}return h.a.createElement("article",{className:"vce-posts-grid-item-inner",itemScope:!0,itemType:"http://schema.org/Article"},h.a.createElement("div",c()({className:l,style:v},d),h.a.createElement("div",{className:"vce-post-description--content",style:{backgroundImage:"url({{featured_image_url}})"}},h.a.createElement("a",{href:"{{post_permalink}}",className:"vce-post-description-link",itemProp:"sameAs"}),h.a.createElement("a",{href:"{{post_category_link}}",className:"vce-post-description--category-link",target:"_blank",itemProp:"sameAs"},h.a.createElement("span",{className:"vce-post-description--category"},"{{post_category}}")),h.a.createElement("h3",{className:"vce-post-description--title"},"{{post_title}}"),"{{simple_post_description_excerpt}}",h.a.createElement("a",{href:"{{post_permalink}}",className:"vce-post-link",itemProp:"sameAs"}))))}}]),t}(i.a.getService("api").elementComponent);(0,i.a.getService("cook").add)(n("./slideOutPostGridItem/settings.json"),function(e){e.add(C)},{css:n("./node_modules/raw-loader/index.js!./slideOutPostGridItem/styles.css"),editorCss:!1,mixins:{categoryColor:{mixin:n("./node_modules/raw-loader/index.js!./slideOutPostGridItem/cssMixins/categoryColor.pcss")},titleColor:{mixin:n("./node_modules/raw-loader/index.js!./slideOutPostGridItem/cssMixins/titleColor.pcss")},excerptColor:{mixin:n("./node_modules/raw-loader/index.js!./slideOutPostGridItem/cssMixins/excerptColor.pcss")},backgroundColor:{mixin:n("./node_modules/raw-loader/index.js!./slideOutPostGridItem/cssMixins/backgroundColor.pcss")}}})},"./slideOutPostGridItem/settings.json":function(e){e.exports={groups:{type:"string",access:"protected",value:"Buttons"},excerptColor:{type:"color",access:"public",value:"#ededed",options:{label:"Excerpt color",cssMixin:{mixin:"excerptColor",property:"excerptColor",namePattern:"[\\da-f]+"}}},titleColor:{type:"color",access:"public",value:"#ededed",options:{label:"Title color",cssMixin:{mixin:"titleColor",property:"titleColor",namePattern:"[\\da-f]+"}}},categoryColor:{type:"color",access:"public",value:"#ededed",options:{label:"Category color",cssMixin:{mixin:"categoryColor",property:"categoryColor",namePattern:"[\\da-f]+"}}},backgroundColor:{type:"color",access:"public",value:"",options:{label:"Background color",cssMixin:{mixin:"backgroundColor",property:"backgroundColor",namePattern:"[\\da-f]+"}}},aspectRatio:{type:"dropdown",access:"public",value:"3:4",options:{label:"Aspect Ratio",values:[{label:"1:1",value:"1:1"},{label:"16:9",value:"16:9"},{label:"9:16",value:"9:16"},{label:"4:3",value:"4:3"},{label:"3:4",value:"3:4"},{label:"5:3",value:"5:3"},{label:"3:5",value:"3:5"},{label:"Custom",value:"custom"}]}},customAspectRatio:{type:"string",access:"public",value:"2:3",options:{label:'Custom Aspect Ratio (Example: "2:3")',onChange:{rules:{aspectRatio:{rule:"value",options:{value:"custom"}}},actions:[{action:"toggleVisibility"}]}}},editFormTab1:{type:"group",access:"public",value:["titleColor","categoryColor","excerptColor","backgroundColor","aspectRatio","customAspectRatio"],options:{label:"Post Description"}},metaEditFormTabs:{type:"group",access:"protected",value:["editFormTab1"]},tag:{access:"protected",type:"string",value:"slideOutPostGridItem"}}}},[["./slideOutPostGridItem/index.js"]]]);