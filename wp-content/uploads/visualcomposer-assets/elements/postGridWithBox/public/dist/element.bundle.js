(window.vcvWebpackJsonp4x=window.vcvWebpackJsonp4x||[]).push([[0],{"./node_modules/raw-loader/index.js!./postGridWithBox/cssMixins/postsGridColumns.pcss":function(e,t){e.exports="@media (min-width: 544px) {\n.vce-post-grid-with-box-container.vce-posts-grid-container {\n    .vce-posts-grid--columns-$selector {\n      .vce-posts-grid-item {\n        @if $columns != false {\n          flex: 0 0 calc(100% / $columns);\n        }\n      }\n    }\n  }\n}\n"},"./node_modules/raw-loader/index.js!./postGridWithBox/cssMixins/postsGridGap.pcss":function(e,t){e.exports=".vce-post-grid-with-box-container.vce-posts-grid-container {\n  .vce-posts-grid--gap-$selector {\n    .vce-posts-grid-list {\n      @if $gap != false {\n        margin-left: calc(-$(gap)px / 2);\n        margin-right: calc(-$(gap)px / 2);\n        margin-bottom: -$(gap)px;\n      }\n    }\n    .vce-posts-grid-item {\n      @if $gap != false {\n        padding-left: calc($(gap)px / 2);\n        padding-right: calc($(gap)px / 2);\n        margin-bottom: $(gap)px;\n      }\n    }\n  }\n}"},"./node_modules/raw-loader/index.js!./postGridWithBox/cssMixins/postsGridPaginationColor.pcss":function(e,t){e.exports=".vce-post-grid-with-box-container.vce-posts-grid-container {\n  .vce-posts-grid-pagination--color-$selector {\n    .vce-posts-grid-pagination-item {\n        @if $baseColor != false {\n          background-color: $baseColor;\n          &:hover {\n          background-color: color($baseColor shade(10%));\n        }\n      }\n    }\n    .vce-posts-grid-pagination-item.vce-state--active {\n      @if $activeColor != false {\n        background-color: $activeColor;\n        &:hover {\n          background-color: color($activeColor shade(10%));\n        }\n      }\n    }\n  }\n}\n"},"./node_modules/raw-loader/index.js!./postGridWithBox/editor.css":function(e,t){e.exports=".vce-post-grid-with-box-container {\n  min-height: 1em;\n}\n"},"./node_modules/raw-loader/index.js!./postGridWithBox/styles.css":function(e,t){e.exports=".vce-post-grid-with-box-container.vce-posts-grid-container .vce-posts-grid-wrapper {\n  overflow: hidden;\n}\n\n.vce-post-grid-with-box-container.vce-posts-grid-container .vce-posts-grid-list {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-pack: start;\n      justify-content: flex-start;\n  -ms-flex-align: stretch;\n      align-items: stretch;\n  -ms-flex-line-pack: start;\n      align-content: flex-start;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n\n.vce-post-grid-with-box-container.vce-posts-grid-container .vce-posts-grid-pagination {\n  margin: 30px 0 12px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n}\n\n.vce-post-grid-with-box-container.vce-posts-grid-container .vce-posts-grid-pagination .vce-posts-grid-pagination-item {\n  border-radius: 50%;\n  margin: 15px 5px;\n  height: 10px;\n  width: 10px;\n  outline: none;\n  transition: background 0.2s ease-in-out;\n  font-size: 0;\n}\n\n.vce-post-grid-with-box-container.vce-posts-grid-container .vce-posts-grid-pagination .vce-posts-grid-pagination-item.vce-state--active {\n  width: 14px;\n  height: 14px;\n}"},"./postGridWithBox/index.js":function(e,t,s){"use strict";s.r(t);var o=s("./node_modules/vc-cake/index.js"),n=s.n(o),i=s("./node_modules/@babel/runtime/helpers/extends.js"),r=s.n(i),a=s("./node_modules/@babel/runtime/helpers/classCallCheck.js"),c=s.n(a),p=s("./node_modules/@babel/runtime/helpers/createClass.js"),l=s.n(p),d=s("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),u=s.n(d),g=s("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),m=s.n(g),v=s("./node_modules/@babel/runtime/helpers/inherits.js"),x=s.n(v),h=s("./node_modules/react/index.js"),b=s.n(h),f=function(e){function t(e){var s;return c()(this,t),(s=u()(this,m()(t).call(this,e))).state={shortcode:"",shortcodeContent:s.spinnerHTML()},s.ref=b.a.createRef(),s}return x()(t,e),l()(t,[{key:"componentDidMount",value:function(){this.requestToServer()}},{key:"componentDidUpdate",value:function(e){(0,s("./node_modules/lodash/lodash.js").isEqual)(this.props.atts,e.atts)||this.requestToServer()}},{key:"componentWillUnmount",value:function(){this.serverRequest&&(this.serverRequest.cancelled=!0)}},{key:"getItemContent",value:function(e){var t=document.createElement("div");return t.classList.add("vce-posts-grid-item"),t.innerHTML=e,t.outerHTML}},{key:"requestToServer",value:function(){var e=this;if(this.props.atts.gridItem&&this.props.atts.sourceItem){var t=Object(o.getService)("dataProcessor"),n=Object(o.getService)("cook"),i=n.get(this.props.atts.gridItem),r=n.get(this.props.atts.sourceItem),a=i.render(null,!1),c=r.render(null,!1),p=s("./node_modules/react-dom/server.browser.js"),l=s("./node_modules/striptags/src/striptags.js");this.ref&&this.ref.current&&(this.ref.current.innerHTML=this.spinnerHTML());var d=p.renderToStaticMarkup(a),u=this.getItemContent(d);this.serverRequest=t.appServerRequest({"vcv-action":"elements:posts_grid:adminNonce","vcv-nonce":window.vcvNonce,"vcv-content":u,"vcv-source-id":window.vcvSourceID,"vcv-atts":{source:encodeURIComponent(JSON.stringify({tag:this.props.atts.sourceItem.tag,value:l(p.renderToStaticMarkup(c))})),unique_id:this.props.id,pagination:this.props.atts.atts_pagination?"1":"0",pagination_color:this.props.atts.atts_pagination_color,pagination_per_page:this.props.atts.atts_pagination_per_page}}).then((function(t){if(e.serverRequest&&e.serverRequest.cancelled)e.serverRequest=null;else{var s=e.getResponse(t);s&&s.status,e.ref&&e.ref.current&&(e.ref.current.setAttribute("data-vcvs-html",s.shortcode),e.ref.current.innerHTML=s.shortcodeContent||"Failed to render posts grid")}}))}}},{key:"render",value:function(){var e=this.props,t=e.id,s=e.atts,o=e.editor,n=s.customClass,i=s.metaCustomId,a=["vce vce-posts-grid-wrapper"],c=["vce-posts-grid-container vce-post-grid-with-box-container"],p={},l=this.getMixinData("postsGridGap");l&&a.push("vce-posts-grid--gap-".concat(l.selector)),(l=this.getMixinData("postsGridColumns"))&&a.push("vce-posts-grid--columns-".concat(l.selector)),(l=this.getMixinData("postsGridPaginationColor"))&&a.push("vce-posts-grid-pagination--color-".concat(l.selector)),n&&c.push(n),i&&(p.id=i);var d=this.applyDO("all");return b.a.createElement("div",r()({className:c.join(" ")},p,o),b.a.createElement("div",r()({className:a.join(" "),id:"el-"+t},d),b.a.createElement("div",{className:"vcvhelper",ref:this.ref})))}}]),t}(Object(o.getService)("api").elementComponent);(0,n.a.getService("cook").add)(s("./postGridWithBox/settings.json"),(function(e){e.add(f)}),{css:s("./node_modules/raw-loader/index.js!./postGridWithBox/styles.css"),editorCss:s("./node_modules/raw-loader/index.js!./postGridWithBox/editor.css"),mixins:{postsGridColumns:{mixin:s("./node_modules/raw-loader/index.js!./postGridWithBox/cssMixins/postsGridColumns.pcss")},postsGridGap:{mixin:s("./node_modules/raw-loader/index.js!./postGridWithBox/cssMixins/postsGridGap.pcss")},postsGridPaginationColor:{mixin:s("./node_modules/raw-loader/index.js!./postGridWithBox/cssMixins/postsGridPaginationColor.pcss")}}},"")},"./postGridWithBox/settings.json":function(e){e.exports={tag:{access:"protected",type:"string",value:"postGridWithBox"},relatedTo:{type:"group",access:"protected",value:["General"]},gap:{type:"number",access:"public",value:"10",options:{label:"Gap",description:"Enter gap in pixels (Example: 5).",cssMixin:{mixin:"postsGridGap",property:"gap"}}},columns:{type:"number",access:"public",value:"3",options:{label:"Number of Columns",cssMixin:{mixin:"postsGridColumns",property:"columns"}}},atts_pagination:{type:"toggle",access:"public",value:!1,options:{label:"Enable paging",description:"Divide your post grid into pages and control maximum number of posts per page."}},atts_pagination_per_page:{type:"string",access:"public",value:"10",options:{label:"Items per page"}},atts_pagination_color:{type:"color",access:"public",value:"#e2e2e2",options:{label:"Inactive page color",cssMixin:{mixin:"postsGridPaginationColor",property:"baseColor",namePattern:"[\\da-f]+"}}},atts_pagination_active_color:{type:"color",access:"public",value:"#E0BAA0",options:{label:"Active page color",cssMixin:{mixin:"postsGridPaginationColor",property:"activeColor",namePattern:"[\\da-f]+"}}},editFormTab1:{type:"group",access:"protected",value:["columns","gap","atts_pagination","metaCustomId","customClass"],options:{label:"General"}},pagination:{type:"group",access:"public",value:["atts_pagination_per_page","atts_pagination_color","atts_pagination_active_color"],options:{label:"Pagination",onChange:{rules:{atts_pagination:{rule:"toggle"}},actions:[{action:"toggleSectionVisibility"}]}}},sourceItem:{type:"element",access:"public",value:{tag:"postsGridDataSourcePost"},options:{category:"_postsGridSources",_fixElementDownload:[{tag:"postsGrid"},{tag:"postsGridDataSourcePost"},{tag:"postsGridDataSourcePage"},{tag:"postsGridDataSourceCustomPostType"},{tag:"postsGridDataSourceListOfIds"}],label:"Data Source",replaceView:"dropdown",merge:{attributes:[{key:"attsOffset",type:"string"},{key:"attsLimit",type:"string"}]}}},gridItem:{type:"element",access:"public",value:{tag:"postGridWithBoxItem"},options:{_category:"postsGridItems",tabLabel:"Grid Item"}},designOptions:{type:"designOptions",access:"public",value:{},options:{label:"Design Options"}},metaEditFormTabs:{type:"group",access:"protected",value:["editFormTab1","sourceItem","pagination","gridItem","designOptions"]},metaCustomId:{type:"customId",access:"public",value:"",options:{label:"Element ID",description:"Apply unique ID to element to link directly to it by using #your_id (for element ID use lowercase input only)."}},customClass:{type:"string",access:"public",value:"",options:{label:"Extra class name",description:"Add an extra class name to the element and refer to it from Custom CSS option."}}}}},[["./postGridWithBox/index.js"]]]);