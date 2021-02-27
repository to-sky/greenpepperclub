(window.vcvWebpackJsonp4x=window.vcvWebpackJsonp4x||[]).push([[0],{"./imageGallery/index.js":function(e,a,i){"use strict";i.r(a);var n=i("./node_modules/vc-cake/index.js"),t=i.n(n),l=i("./node_modules/@babel/runtime/helpers/extends.js"),o=i.n(l),r=i("./node_modules/@babel/runtime/helpers/typeof.js"),s=i.n(r),c=i("./node_modules/@babel/runtime/helpers/classCallCheck.js"),g=i.n(c),m=i("./node_modules/@babel/runtime/helpers/createClass.js"),p=i.n(m),u=i("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),d=i.n(u),v=i("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),h=i.n(v),b=i("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"),y=i.n(b),f=i("./node_modules/@babel/runtime/helpers/inherits.js"),x=i.n(f),w=i("./node_modules/@babel/runtime/helpers/defineProperty.js"),S=i.n(w),k=i("./node_modules/react/index.js"),C=i.n(k),G=function(e){function a(e){var i;return g()(this,a),i=d()(this,h()(a).call(this,e)),S()(y()(i),"imageSources",[]),S()(y()(i),"imageOrder",{}),i.createCustomSizeImage=i.createCustomSizeImage.bind(y()(i)),i}return x()(a,e),p()(a,[{key:"componentDidMount",value:function(){this.prepareImage(this.props.atts.image)}},{key:"componentWillReceiveProps",value:function(e){this.imageSources=[],this.imageOrder={},this.prepareImage(e.atts.image)}},{key:"prepareImage",value:function(e){var a=this;if(e.length&&"object"===s()(e[0])){var i=[];e.forEach(function(e,n){var t=e;t.full=t.id?t.full:a.getImageUrl(t.full),t.id=t.id?t.id:Math.random(),i.push(e)}),e=i,this.setImageOrder(e),this.resizeImage(e)}var n=[];e.forEach(function(i){e&&e.id,n.push({imgSrc:a.getImageUrl(i)})}),this.setImgSrcState(n)}},{key:"setImageOrder",value:function(e){var a=this;e.forEach(function(e,i){a.imageOrder[i]=e.id})}},{key:"checkImageSize",value:function(e,a,i){var n=new window.Image;n.onload=function(){var t={width:n.width,height:n.height};a(e,t,i)},n.src=e.full}},{key:"resizeImage",value:function(e){var a=this;e.forEach(function(i){a.checkImageSize(i,a.createCustomSizeImage,e.length)})}},{key:"createCustomSizeImage",value:function(e,a,i){e.orientation=this.checkOrientation(a),this.imageSources.filter(function(a){return a.id===e.id}).length||this.imageSources.push(e),this.imageSources.length===i&&this.orderImages()}},{key:"orderImages",value:function(){var e=this,a=[];this.imageSources.forEach(function(i,n){var t=e.imageSources.filter(function(a){return a.id===e.imageOrder[n]});t[0]&&a.push({imgSrc:e.getImageUrl(t[0],"large"),orientation:t[0].orientation,originalSrc:e.getImageUrl(t[0]),alt:t[0].alt,title:t[0].title})}),this.setImgSrcState(a)}},{key:"checkOrientation",value:function(e){return e.width>=e.height?"landscape":"portrait"}},{key:"setImgSrcState",value:function(e){this.setState({imgSrc:e})}},{key:"render",value:function(){var e=this.props,a=e.id,i=e.atts,n=e.editor,t=i.image,l=i.shape,r=i.clickableOptions,s=i.showCaption,c=i.customClass,g=i.metaCustomId,m=i.showCaptionGeneral,p=i.captionAlignment,u="vce-image-gallery",d={},v="div",h=this.state&&this.state.imgSrc;"string"==typeof c&&c&&(u+=" "+c);var b=this.getMixinData("imageGalleryGap");b&&(u+=" vce-image-gallery--gap-".concat(b.selector)),(b=this.getMixinData("imageGalleryColumns"))&&(u+=" vce-image-gallery--columns-".concat(b.selector)),"rounded"===l&&(u+=" vce-image-gallery--border-rounded"),"round"===l&&(u+=" vce-image-gallery--border-round"),g&&(d.id=g),m&&p&&(u+=" vce-image-gallery-caption--align-".concat(p));var y=[];h&&h.forEach(function(e,i){var n={},l="vce-image-gallery-item-inner",c="vce-image-gallery-img",g={alt:e&&e.alt?e.alt:"",title:e&&e.title?e.title:""},p={};if("portrait"===e.orientation&&(c+=" vce-image-gallery-img--orientation-portrait"),"url"===r&&t[i].link&&t[i].link.url){v="a";var u=t[i].link;n={href:u.url,title:u.title,target:u.targetBlank?"_blank":void 0,rel:u.relNofollow?"nofollow":void 0}}else"imageNewTab"===r?(v="a",n={href:e.originalSrc||e.imgSrc,target:"_blank"}):"lightbox"===r?(v="a",n={href:e.originalSrc||e.imgSrc,"data-lightbox":"lightbox-".concat(a)}):"photoswipe"===r&&(v="a",n={href:e.originalSrc||e.imgSrc,"data-photoswipe-image":a,"data-photoswipe-index":i},s&&(n["data-photoswipe-caption"]=t[i].caption),d["data-photoswipe-gallery"]=a,p["data-photoswipe-item"]="photoswipe-".concat(a));t[i].filter&&"normal"!==t[i].filter&&(l+=" vce-image-filter--".concat(t[i].filter));var h="";m&&t[i].caption&&(h=C.a.createElement("figcaption",null,t[i].caption)),y.push(C.a.createElement("div",o()({className:"vce-image-gallery-item",key:"vce-image-gallery-item-".concat(i,"-").concat(a)},p),C.a.createElement("figure",{className:"vce-image-gallery-item-inner-wrapper"},C.a.createElement(v,o()({},n,{className:l}),C.a.createElement("img",o()({className:c,src:e.imgSrc},g))),h)))});var f=this.applyDO("all");return C.a.createElement("div",o()({className:u},n,d),C.a.createElement("div",o()({className:"vce-image-gallery-wrapper vce",id:"el-"+a},f),C.a.createElement("div",{className:"vce-image-gallery-list"},y)))}}]),a}(t.a.getService("api").elementComponent);(0,t.a.getService("cook").add)(i("./imageGallery/settings.json"),function(e){e.add(G)},{css:i("./node_modules/raw-loader/index.js!./imageGallery/styles.css"),editorCss:i("./node_modules/raw-loader/index.js!./imageGallery/editor.css"),mixins:{imageGalleryColumns:{mixin:i("./node_modules/raw-loader/index.js!./imageGallery/cssMixins/imageGalleryColumns.pcss")},imageGalleryGap:{mixin:i("./node_modules/raw-loader/index.js!./imageGallery/cssMixins/imageGalleryGap.pcss")}}},"")},"./imageGallery/settings.json":function(e){e.exports={image:{type:"attachimage",access:"public",value:["image-1.jpg","image-2.jpg","image-3.jpg","image-4.jpg","image-5.jpg","image-6.jpg"],options:{label:"Images",multiple:!0,onChange:{rules:{clickableOptions:{rule:"value",options:{value:"url"}}},actions:[{action:"attachImageUrls"}]},url:!1,imageFilter:!0}},shape:{type:"buttonGroup",access:"public",value:"square",options:{label:"Shape",values:[{label:"Square",value:"square",icon:"vcv-ui-icon-attribute-shape-square"},{label:"Rounded",value:"rounded",icon:"vcv-ui-icon-attribute-shape-rounded"},{label:"Round",value:"round",icon:"vcv-ui-icon-attribute-shape-round"}]}},designOptions:{type:"designOptions",access:"public",value:{},options:{label:"Design Options"}},editFormTab1:{type:"group",access:"protected",value:["clickableOptions","showCaption","image","showCaptionGeneral","captionAlignment","columns","gap","shape","metaCustomId","customClass"],options:{label:"General"}},metaEditFormTabs:{type:"group",access:"protected",value:["editFormTab1","designOptions"]},relatedTo:{type:"group",access:"protected",value:["General"]},customClass:{type:"string",access:"public",value:"",options:{label:"Extra class name",description:"Add an extra class name to the element and refer to it from Custom CSS option."}},clickableOptions:{type:"dropdown",access:"public",value:"lightbox",options:{label:"OnClick action",values:[{label:"None",value:""},{label:"Lightbox",value:"lightbox"},{label:"PhotoSwipe",value:"photoswipe"},{label:"Open Image in New Tab",value:"imageNewTab"},{label:"Link selector",value:"url"}]}},showCaption:{type:"toggle",access:"public",value:!1,options:{label:"Show image caption in gallery view",onChange:{rules:{clickableOptions:{rule:"value",options:{value:"photoswipe"}}},actions:[{action:"toggleVisibility"}]}}},showCaptionGeneral:{type:"toggle",access:"public",value:!1,options:{label:"Show image caption below every image"}},captionAlignment:{type:"buttonGroup",access:"public",value:"left",options:{label:"Caption alignment",values:[{label:"Left",value:"left",icon:"vcv-ui-icon-attribute-alignment-left"},{label:"Center",value:"center",icon:"vcv-ui-icon-attribute-alignment-center"},{label:"Right",value:"right",icon:"vcv-ui-icon-attribute-alignment-right"}],onChange:{rules:{showCaptionGeneral:{rule:"toggle"}},actions:[{action:"toggleVisibility"}]}}},sharedAssetsLibrary:{access:"protected",type:"string",value:{libraries:[{rules:{clickableOptions:{rule:"value",options:{value:"lightbox"}}},libsNames:["lightbox"]},{rules:{clickableOptions:{rule:"value",options:{value:"photoswipe"}}},libsNames:["photoswipe"]}]}},gap:{type:"number",access:"public",value:"10",options:{label:"Gap",description:"Enter gap in pixels (Example: 5).",cssMixin:{mixin:"imageGalleryGap",property:"gap",namePattern:"[\\da-f]+"}}},columns:{type:"number",access:"public",value:"3",options:{label:"Number of Columns",cssMixin:{mixin:"imageGalleryColumns",property:"columns",namePattern:"[\\da-f]+"}}},metaCustomId:{type:"customId",access:"public",value:"",options:{label:"Element ID",description:"Apply unique ID to element to link directly to it by using #your_id (for element ID use lowercase input only)."}},tag:{access:"protected",type:"string",value:"imageGallery"}}},"./node_modules/raw-loader/index.js!./imageGallery/cssMixins/imageGalleryColumns.pcss":function(e,a){e.exports="@media (min-width: 544px) {\n  .vce-image-gallery {\n\t&--columns-$selector {\n\t  .vce-image-gallery-item {\n\t    @if $columns != false {\n\t      flex: 0 0 calc(100% / $columns);\n\t      max-width: calc(100% / $columns);\n\t    }\n\t  }\n\t}\n  }\n}\n\n"},"./node_modules/raw-loader/index.js!./imageGallery/cssMixins/imageGalleryGap.pcss":function(e,a){e.exports=".vce-image-gallery {\n  &--gap-$selector {\n    .vce-image-gallery-list {\n      @if $gap != false {\n        margin-left: calc(-$(gap)px / 2);\n        margin-right: calc(-$(gap)px / 2);\n        margin-bottom: -$(gap)px;\n      }\n    }\n    .vce-image-gallery-item {\n      @if $gap != false {\n        padding-left: calc($(gap)px / 2);\n        padding-right: calc($(gap)px / 2);\n        margin-bottom: $(gap)px;\n      }\n    }\n  }\n}\n"},"./node_modules/raw-loader/index.js!./imageGallery/editor.css":function(e,a){e.exports=".vce-image-gallery {\n  min-height: 1em;\n}\n"},"./node_modules/raw-loader/index.js!./imageGallery/styles.css":function(e,a){e.exports='.vce-image-gallery-wrapper {\n  overflow: hidden;\n}\n\n.vce-image-gallery-list {\n  display: -ms-flexbox;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: stretch;\n  align-content: flex-start;\n  flex-wrap: wrap;\n}\n\n.vce-image-gallery-item {\n  flex: 0 0 100%;\n  max-width: 100%;\n  box-sizing: border-box;\n}\n\n.vce-image-gallery-item-inner-wrapper {\n  overflow: hidden;\n  margin: 0;\n}\n\n.vce-image-gallery-item-inner {\n  position: relative;\n  display: block;\n  overflow: hidden;\n}\n\n.vce-image-gallery-item-inner::after {\n  content: "";\n  padding-bottom: 100%;\n  display: block;\n}\n\n.vce-image-gallery-item-inner img.vce-image-gallery-img {\n  position: absolute;\n  transform: translate(-50%, -50%);\n  left: 50%;\n  top: 50%;\n  width: auto;\n  max-width: none;\n  height: 101%;\n}\n\n.vce-image-gallery-item-inner img.vce-image-gallery-img--orientation-portrait {\n  width: 101%;\n  height: auto;\n}\n\na.vce-image-gallery-item-inner {\n  color: transparent;\n  border-bottom: 0;\n  text-decoration: none;\n  box-shadow: none;\n}\n\na.vce-image-gallery-item-inner:hover,\na.vce-image-gallery-item-inner:focus {\n  border-bottom: 0;\n  text-decoration: none;\n  box-shadow: none;\n}\n\n.vce-image-gallery--border-rounded .vce-image-gallery-item-inner {\n  border-radius: 5px;\n  overflow: hidden;\n}\n\n.vce-image-gallery--border-round .vce-image-gallery-item-inner {\n  border-radius: 50%;\n  overflow: hidden;\n}\n\n.vce-image-gallery-item-inner-wrapper figcaption {\n  font-style: italic;\n  margin-top: 10px;\n}\n\n.vce-image-gallery-caption--align-left figcaption {\n  text-align: left;\n}\n\n.vce-image-gallery-caption--align-center figcaption {\n  text-align: center;\n}\n\n.vce-image-gallery-caption--align-right figcaption {\n  text-align: right;\n}'}},[["./imageGallery/index.js"]]]);