(window.vcvWebpackJsonp4x=window.vcvWebpackJsonp4x||[]).push([["addon"],{"./exportImport/src/index.js":function(e,t,r){"use strict";r.r(t);var s=r("./node_modules/react/index.js"),n=r.n(s),o=r("./node_modules/react-dom/index.js"),a=r.n(o),i=r("./node_modules/@babel/runtime/helpers/classCallCheck.js"),c=r.n(i),u=r("./node_modules/@babel/runtime/helpers/createClass.js"),l=r.n(u),m=r("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),v=r.n(m),p=r("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),d=r.n(p),g=r("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"),h=r.n(g),I=r("./node_modules/@babel/runtime/helpers/inherits.js"),w=r.n(I),S=r("./node_modules/@babel/runtime/helpers/defineProperty.js"),k=r.n(S),b=r("./node_modules/vc-cake/index.js"),f=Object(b.getService)("dataProcessor"),q=function(e){function t(e){var r;return c()(this,t),r=v()(this,d()(t).call(this,e)),k()(h()(r),"getJsonFromString",function(e){var t=e.match(/(\{"\w+".*\})/g);return!!t&&t[0]}),r.state={importing:!1,statusMessages:[],importingDone:!1,importRequestDone:!1,errorMessage:""},r.handleImportClick=r.handleImportClick.bind(h()(r)),r}return w()(t,e),l()(t,[{key:"componentWillUnmount",value:function(){this.serverProgressRequest.cancelled=!0,this.serverImportRequest.cancelled=!0}},{key:"handleImportClick",value:function(e){e&&e.preventDefault();var t=document.querySelector('input[name="vcv-file-id"]'),r=t&&t.value;r&&(this.setState({importing:!0}),document.querySelector(".vcv-start-import-inner").outerHTML="",this.createServerProgressRequest(r),this.createServerImportRequest(r))}},{key:"createServerProgressRequest",value:function(e){var t=this;this.serverProgressRequest=f.appAdminServerRequest({"vcv-action":"vcv:addon:exportImport:importProgress:adminNonce","vcv-nonce":window.vcvNonce,"vcv-time":window.vcvAjaxTime,"vcv-file-id":e}).then(function(r){if(t.serverProgressRequest&&t.serverProgressRequest.cancelled)t.serverProgressRequest=null;else{var s;try{s=JSON.parse(r)}catch(a){console.warn("Failed to parse, no valid json.",a);var n=t.getJsonFromString(r);s=JSON.parse(n)}var o=s&&s.statusMessages;o&&t.setState({statusMessages:o}),t.state.importRequestDone?t.setState({importingDone:!0}):window.setTimeout(function(){t.createServerProgressRequest(e)},200)}})}},{key:"createServerImportRequest",value:function(e){var t=this;this.serverImportRequest=f.appAdminServerRequest({"vcv-action":"vcv:addon:exportImport:continueImport:adminNonce","vcv-nonce":window.vcvNonce,"vcv-time":window.vcvAjaxTime,"vcv-file-id":e}).then(function(r){if(t.serverImportRequest&&t.serverImportRequest.cancelled)t.serverImportRequest=null;else{var s;try{s=JSON.parse(r)}catch(i){console.warn("Failed to parse, no valid json.",i);var n=t.getJsonFromString(r);s=JSON.parse(n)}var o={importRequestDone:!0},a=s&&s.message;a?o.errorMessage=a:t.createServerProgressRequest(e),t.setState(o)}})}},{key:"getBackButton",value:function(){var e=window.VCV_I18N&&window.VCV_I18N(),t=e?e.backToImport:"Back to import";return n.a.createElement("a",{href:window.vcvBackToImportLink,key:"vcvGoBackButton"},t)}},{key:"getStatusMessages",value:function(){var e=window.VCV_I18N&&window.VCV_I18N(),t=e?e.startingImportProcess:"Starting import process...",r=[];return r.push(n.a.createElement("p",{key:"vcvImportStatusFirstMessage"},t)),this.state.statusMessages.forEach(function(e,t){r.push(n.a.createElement("p",{key:"vcvImportStatusMessage".concat(t),dangerouslySetInnerHTML:{__html:e}}))}),this.state.errorMessage&&r.push(n.a.createElement("p",{key:"vcvImportErrorMessage"},n.a.createElement("strong",{dangerouslySetInnerHTML:{__html:this.state.errorMessage}}))),this.state.importingDone&&r.push(this.getBackButton()),r}},{key:"render",value:function(){var e=window.VCV_I18N&&window.VCV_I18N(),t=e?e.continueImport:"Continue import",r=n.a.createElement(n.a.Fragment,null,n.a.createElement("p",{className:"submit"},n.a.createElement("input",{type:"submit",name:"submit",id:"vcv-submit",className:"button button-primary",value:t,onClick:this.handleImportClick})),this.getBackButton());return this.state.importing?this.getStatusMessages():r}}]),t}(n.a.Component),y=document.querySelector("#vcv-import-container");y&&a.a.render(n.a.createElement(q,null),y)}},[["./exportImport/src/index.js"]]]);