(window.vcvWebpackJsonp4x=window.vcvWebpackJsonp4x||[]).push([[0],{"./flickrImage/component.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=d(n("./node_modules/babel-runtime/helpers/extends.js")),a=d(n("./node_modules/babel-runtime/core-js/object/get-prototype-of.js")),l=d(n("./node_modules/babel-runtime/helpers/classCallCheck.js")),s=d(n("./node_modules/babel-runtime/helpers/createClass.js")),r=d(n("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js")),o=d(n("./node_modules/babel-runtime/helpers/inherits.js")),c=d(n("./node_modules/react/index.js"));function d(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){(0,l.default)(this,t);var i=(0,r.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e));i.imageSizes={thumbnail:"150",medium:"300",large:"1024"};var s=n("./node_modules/lodash/lodash.js");return i.handleResize=s.debounce(i.handleResize.bind(i),200),i}return(0,o.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){this.insertFlickr(this.props.atts.flickrUrl),window.addEventListener("resize",this.handleResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize)}},{key:"componentWillReceiveProps",value:function(e){this.props.atts.flickrUrl===e.atts.flickrUrl&&this.props.atts.width===e.atts.width||this.insertFlickr(e.atts.flickrUrl)}},{key:"handleResize",value:function(){this.insertFlickr(this.props.atts.flickrUrl)}},{key:"loadJSONP",value:function(e,n,i){var a="_jsonp_flickrImage_"+t.unique++;e.indexOf("?")>=0?e+="&jsoncallback="+a+"&format=json":e+="?jsoncallback="+a+"&format=json";var l=document.createElement("script");l.type="text/javascript",l.async=!0,l.src=e;var s=function(){document.head.removeChild(l),l=null,delete window[a]},r=window.setTimeout(function(){s()},1e4);window[a]=function(e){window.clearTimeout(r),n.call(i||window,e),s()},document.getElementsByTagName("head")[0].appendChild(l)}},{key:"insertFlickr",value:function(e){var t=this;if(e.match("data-flickr-embed"))this.appendFlickr(e);else{var n="https://www.flickr.com/services/oembed/?url="+e;this.loadJSONP(n,function(e){t.appendFlickr(e.html),t.props.api.request("layout:rendered",!0)})}}},{key:"appendFlickr",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.refs.flickerInner.innerHTML="",window.setTimeout(function(){e.updateInlineHtml(e.refs.flickerInner,t)},0)}},{key:"validateSize",value:function(e){var t=new RegExp("^-?\\d*(\\.\\d{0,9})?("+["px","em","rem","%","vw","vh"].join("|")+")?$");return""===e||e.match(t)?e:null}},{key:"checkImageSize",value:function(e){var t="";return window.vcvImageSizes&&window.vcvImageSizes[e]?t=window.vcvImageSizes[e].width:this.imageSizes[e]&&(t=this.imageSizes[e]),t?t+"px":""}},{key:"render",value:function(){var e=this.props,t=e.id,n=e.atts,a=e.editor,l=n.customClass,s=n.alignment,r=n.width,o=n.metaCustomId,d="vce-flickr-image",u={},m={};"string"==typeof l&&l&&(d+=" "+l),s&&(d+=" vce-flickr-image--align-"+s),(r=r.replace(/\s/g,"").toLowerCase())&&(r.match(/\d*/)[0]?(r=this.validateSize(r),r=/^\d+$/.test(r)?r+"px":r):r=this.checkImageSize(r),m.style={maxWidth:r}),u.key="customProps:"+t,o&&(u.id=o);var p=this.applyDO("all");return c.default.createElement("div",(0,i.default)({},u,{className:d},a),c.default.createElement("div",(0,i.default)({id:"el-"+t,className:"vce vce-flickr-image-wrapper"},p),c.default.createElement("div",(0,i.default)({className:"vce-flickr-image-inner"},m,{ref:"flickerInner"})),null))}}]),t}(d(n("./node_modules/vc-cake/index.js")).default.getService("api").elementComponent);u.unique=0,t.default=u},"./flickrImage/index.js":function(e,t,n){"use strict";var i=l(n("./node_modules/vc-cake/index.js")),a=l(n("./flickrImage/component.js"));function l(e){return e&&e.__esModule?e:{default:e}}(0,i.default.getService("cook").add)(n("./flickrImage/settings.json"),function(e){e.add(a.default)},{css:n("./node_modules/raw-loader/index.js!./flickrImage/styles.css"),editorCss:n("./node_modules/raw-loader/index.js!./flickrImage/editor.css")},"")},"./flickrImage/settings.json":function(e){e.exports={flickrUrl:{type:"string",access:"public",value:"https://www.flickr.com/photos/thomasheaton/21171377373/",options:{label:"Flickr URL (Link) or embed code",link:!0}},designOptions:{type:"designOptions",access:"public",value:{},options:{label:"Design Options"}},editFormTab1:{type:"group",access:"protected",value:["flickrUrl","width","alignment","metaCustomId","customClass"],options:{label:"General"}},metaEditFormTabs:{type:"group",access:"protected",value:["editFormTab1","designOptions"]},relatedTo:{type:"group",access:"protected",value:["General"]},customClass:{type:"string",access:"public",value:"",options:{label:"Extra class name",description:"Add an extra class name to the element and refer to it from Custom CSS option."}},assetsLibrary:{access:"public",type:"string",value:["animate"]},alignment:{type:"buttonGroup",access:"public",value:"left",options:{label:"Alignment",values:[{label:"Left",value:"left",icon:"vcv-ui-icon-attribute-alignment-left"},{label:"Center",value:"center",icon:"vcv-ui-icon-attribute-alignment-center"},{label:"Right",value:"right",icon:"vcv-ui-icon-attribute-alignment-right"}]}},metaDisableInteractionInEditor:{type:"toggle",access:"protected",value:!0},width:{type:"string",access:"public",value:"full",options:{label:"Width",description:"Enter image width (Example: 'thumbnail', 'medium', 'large', 'full' or other sizes defined by theme). Alternatively enter width in pixels (Example: 200). Minimal width 151px."}},metaBackendLabels:{type:"group",access:"protected",value:[{value:["flickrUrl"]}]},metaCustomId:{type:"customId",access:"public",value:"",options:{label:"Element ID",description:"Apply unique Id to element to link directly to it by using #your_id (for element id use lowercase input only)."}},tag:{access:"protected",type:"string",value:"flickrImage"}}},"./node_modules/raw-loader/index.js!./flickrImage/editor.css":function(e,t){e.exports='[data-vcv-element-disable-interaction="true"].vce-flickr-image {\n  position: relative;\n}\n\n[data-vcv-element-disable-interaction="true"].vce-flickr-image::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 999;\n}\n\n.vce-flickr-image {\n  min-height: 1em;\n}\n'},"./node_modules/raw-loader/index.js!./flickrImage/styles.css":function(e,t){e.exports='.vce-flickr-image iframe {\n  display: block;\n  vertical-align: top;\n}\n\n.vce-flickr-image-inner {\n  max-width: 100%;\n  min-width: 151px;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.vce-flickr-image-wrapper {\n  display: inline-block;\n  max-width: 100%;\n}\n\n.vce-flickr-image--align-center {\n  text-align: center;\n}\n\n.vce-flickr-image--align-right {\n  text-align: right;\n}\n\n.vce-flickr-image--align-left {\n  text-align: left;\n}\n\n[data-vcv-element-disable-interaction="true"].vce-flickr-image {\n  position: relative;\n}\n\n[data-vcv-element-disable-interaction="true"].vce-flickr-image::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 999;\n}\n\n.vce.vce-flickr-image-wrapper::before {\n  content: \'\';\n  display:block;\n  min-width: 151px;\n}\n'}},[["./flickrImage/index.js"]]]);