(window.vcvWebpackJsonp4x=window.vcvWebpackJsonp4x||[]).push([[0],{"./facebookQuote/index.js":function(e,t,o){"use strict";o.r(t);var n=o("./node_modules/vc-cake/index.js"),s=o.n(n),a=o("./node_modules/@babel/runtime/helpers/extends.js"),r=o.n(a),i=o("./node_modules/@babel/runtime/helpers/classCallCheck.js"),c=o.n(i),l=o("./node_modules/@babel/runtime/helpers/createClass.js"),d=o.n(l),u=o("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),m=o.n(u),p=o("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),f=o.n(p),b=o("./node_modules/@babel/runtime/helpers/inherits.js"),v=o.n(b),h=o("./node_modules/react/index.js"),k=o.n(h),y=function(e){function t(){return c()(this,t),m()(this,f()(t).apply(this,arguments))}return v()(t,e),d()(t,[{key:"componentDidMount",value:function(){if(this.ref){this.ref.innerHTML="<script>(function(d, s, id) {\n        if(d.getElementById('fb-root')) return;\n        var fbRoot = d.createElement('div');\n        fbRoot.id = 'fb-root';\n        document.getElementsByTagName('body')[0].appendChild(fbRoot);\n        var js, fjs = d.getElementsByTagName(s)[0];\n        if (d.getElementById(id)) return;\n        js = d.createElement(s); js.id = id;\n        js.src = \"https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.12\";\n        fjs.parentNode.insertBefore(js, fjs);\n      }(document, 'script', 'facebook-jssdk'));<\/script>",this.reloadScript()}}},{key:"componentDidUpdate",value:function(){this.reloadScript()}},{key:"reloadScript",value:function(){var e=document.querySelector("#vcv-editor-iframe").contentWindow;e.FB&&e.FB.init({status:!0,xfbml:!0,version:"v2.12"})}},{key:"getQuote",value:function(){var e=this.props,t=e.id,o=e.atts,n=e.editor,s=o.href,a=o.customClass,i=o.metaCustomId,c="fb-quote";a&&(c+=" ".concat(a));var l={};i&&(l.id=i),s&&s.url&&(l["data-href"]=s.url);var d=k.a.createElement(k.a.Fragment,null,k.a.createElement("div",r()({className:c},l)),"Facebook Quote added to page, it will be available in View Page."),u="<div class='".concat(c,"' ");return Object.keys(l).forEach(function(e){u+=" ".concat(e,"='").concat(l[e],"'")}),u+=" />",k.a.createElement("div",r()({},n,{id:"el-".concat(t),"data-vcvs-html":u,className:"vcvhelper vce-facebook-quote"}),d)}},{key:"getContent",value:function(){var e=this;return k.a.createElement(k.a.Fragment,null,k.a.createElement("div",{ref:function(t){e.ref=t}}),this.getQuote())}},{key:"render",value:function(){return this.getContent()}}]),t}(s.a.getService("api").elementComponent);(0,s.a.getService("cook").add)(o("./facebookQuote/settings.json"),function(e){e.add(y)},{css:o("./node_modules/raw-loader/index.js!./facebookQuote/styles.css"),editorCss:o("./node_modules/raw-loader/index.js!./facebookQuote/editor.css")},"")},"./facebookQuote/settings.json":function(e){e.exports={tag:{access:"protected",type:"string",value:"facebookQuote"},relatedTo:{type:"group",access:"protected",value:["General"]},href:{type:"url",access:"public",value:{url:"",title:"",targetBlank:!1,relNofollow:!1},options:{label:"Quote link",description:"Add custom link to quoted text. By default uses current page URL.",dynamicField:!0}},customClass:{type:"string",access:"public",value:"",options:{label:"Extra class name",description:"Add an extra class name to the element and refer to it from Custom CSS option."}},metaCustomId:{type:"customId",access:"public",value:"",options:{label:"Element ID",description:"Apply unique Id to element to link directly to it by using #your_id (for element id use lowercase input only)."}},editFormTab1:{type:"group",access:"protected",value:["href","customClass","metaCustomId"],options:{label:"General"}},metaEditFormTabs:{type:"group",access:"protected",value:["editFormTab1"]}}},"./node_modules/raw-loader/index.js!./facebookQuote/editor.css":function(e,t){e.exports=".vce-facebook-quote {\n  min-height: 1em;\n}\n"},"./node_modules/raw-loader/index.js!./facebookQuote/styles.css":function(e,t){e.exports=".vce-facebook-quote {\n  line-height: 1em;\n}"}},[["./facebookQuote/index.js"]]]);