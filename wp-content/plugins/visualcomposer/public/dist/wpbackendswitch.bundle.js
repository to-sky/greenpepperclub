(window.vcvWebpackJsonp4x=window.vcvWebpackJsonp4x||[]).push([["wpbackendswitch"],{"./public/backendSwitch.js":function(e,t,n){"use strict";n.r(t);n("./public/sources/less/wpbackend-switcher/init.less"),n("./public/variables.js");var i=n("./node_modules/react-dom/index.js"),r=n.n(i),o=n("./node_modules/react/index.js"),s=n.n(o),c=n("./node_modules/@babel/runtime/helpers/classCallCheck.js"),a=n.n(c),d=n("./node_modules/@babel/runtime/helpers/createClass.js"),l=n.n(d),u=n("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"),w=n.n(u),b=n("./node_modules/@babel/runtime/helpers/inherits.js"),v=n.n(b),h=n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),p=n.n(h),f=n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),E=n.n(f);function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=E()(e);if(t){var r=E()(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return p()(this,n)}}var m=function(e){v()(n,e);var t=C(n);function n(e){var i;a()(this,n),i=t.call(this,e);var r=window.VCV_GUTENBERG&&window.VCV_GUTENBERG();i.handleClickEnableClassicEditor=i.handleClickEnableClassicEditor.bind(w()(i)),i.handleClickOpenFrontendEditor=i.handleClickOpenFrontendEditor.bind(w()(i)),r&&(i.handleClickEnableGutenbergEditor=i.handleClickEnableGutenbergEditor.bind(w()(i)));var o=document.getElementById("vcv-be-editor");-1!==window.location.href.indexOf("classic-editor")&&(o.value="classic");var s=o.value;return(o&&-1===["classic","gutenberg"].indexOf(s)||"gutenberg"===s&&!r)&&(s="be",i.hideClassicEditor()),i.state={editor:s},i.wpb=void 0!==window.vc,i}return l()(n,[{key:"handleClickEnableClassicEditor",value:function(e){e.preventDefault();var t=window.VCV_I18N&&window.VCV_I18N(),n=t&&t.enableClassicEditorConfirmMessage?t.enableClassicEditorConfirmMessage:"Visual Composer will overwrite your content created in WordPress Classic editor with the latest version of content created in Visual Composer Website Builder. Do you want to continue?";window.confirm(n)&&(this.setState({editor:"classic"}),this.showClassicEditor())}},{key:"handleClickEnableGutenbergEditor",value:function(e){e.preventDefault();var t=window.VCV_I18N&&window.VCV_I18N(),n=t&&t.enableGutenbergEditorConfirmMessage?t.enableGutenbergEditorConfirmMessage:"Gutenberg will overwrite your content created in Visual Composer Website Builder. Do you want to continue?";if(window.confirm(n)){this.setState({editor:"gutenberg"});var i=window.location.href;i+=(i.match(/[?]/g)?"&":"?")+"vcv-set-editor=gutenberg",window.location=i}}},{key:"handleClickOpenFrontendEditor",value:function(e){e.preventDefault();var t=window.VCV_I18N&&window.VCV_I18N(),n=t&&t.openFrontendEditorFromClassic?t.openFrontendEditorFromClassic:"Visual Composer will overwrite your content created in WordPress Classic editor with the latest version of content created in Visual Composer Website Builder. Do you want to continue?";("be"===this.state.editor||window.confirm(n))&&(window.location.href=e.currentTarget.dataset.href)}},{key:"hideClassicEditor",value:function(){null!==document.getElementById("postdivrich")&&document.getElementById("postdivrich").classList.add("vcv-hidden")}},{key:"showClassicEditor",value:function(){var e=window.location.href;e.indexOf("?")>-1?e+="&classic-editor=1":e+="?classic-editor=1",window.location.href=e}},{key:"render",value:function(){var e=this,t=window.VCV_I18N&&window.VCV_I18N(),n=t&&t.classicEditor?t.classicEditor:"Classic Editor",i=t&&t.gutenbergEditor?t.gutenbergEditor:"Gutenberg Editor",r=this.state.editor,o=window.VCV_GUTENBERG&&window.VCV_GUTENBERG();"be"===this.state.editor&&!0===this.wpb&&this.showClassicEditor();var c=null;return!this.props.isGutenbergEditor&&o&&"gutenberg"!==r&&(c=s.a.createElement("div",{className:"vcv-wpbackend-switcher--type-gutenberg"},s.a.createElement("button",{className:"vcv-wpbackend-switcher-option",onClick:this.handleClickEnableGutenbergEditor},i))),s.a.createElement("div",{className:"vcv-wpbackend-switcher-wrapper"},s.a.createElement("div",{className:"vcv-wpbackend-switcher"},s.a.createElement("button",{className:"vcv-wpbackend-switcher-option vcv-wpbackend-switcher-option--vceditor","data-href":window.vcvFrontendEditorLink,onClick:this.handleClickOpenFrontendEditor})),"classic"===r||!1!==this.wpb||o||this.props.isGutenbergEditor?"":s.a.createElement("div",{className:"vcv-wpbackend-switcher--type-classic"},s.a.createElement("button",{className:"vcv-wpbackend-switcher-option",onClick:e.handleClickEnableClassicEditor},n)),c)}}]),n}(s.a.Component);(0,window.jQuery)((function(){!function(){var e=document.querySelector("div#titlediv"),t=document.getElementById("editor"),n=document.createElement("div");n.className="vcv-wpbackend-switcher-container";var i=!1,o=function(e){r.a.render(s.a.createElement(m,{isGutenbergEditor:!!t}),e)};if(e)e.parentNode.insertBefore(n,e.nextSibling),i=!0;else if(t){var c=window.VCV_WPML&&window.VCV_WPML()?2500:1;window.wp.data.subscribe((function(){setTimeout((function(){var e=t?t.querySelector(".edit-post-header-toolbar"):null;e&&!e.querySelector(".vcv-wpbackend-switcher-container")&&(e.querySelector(".edit-post-header-toolbar__left").after(n),o(n))}),c)}))}else{var a=document.getElementById("post-body-content");a&&(a.firstChild?a.insertBefore(n,a.firstChild):a.appendChild(n),i=!0)}i&&o(n)}()}))},"./public/sources/less/wpbackend-switcher/init.less":function(e,t,n){},"./public/variables.js":function(e,t,n){"use strict";var i=n("./node_modules/vc-cake/index.js");if(void 0!==window.VCV_ENV){var r=window.VCV_ENV();Object.keys(r).forEach((function(e){Object(i.env)(e,r[e])})),r.VCV_DEBUG&&Object(i.env)("debug",!0)}}},[["./public/backendSwitch.js","runtime","vendor"]]]);