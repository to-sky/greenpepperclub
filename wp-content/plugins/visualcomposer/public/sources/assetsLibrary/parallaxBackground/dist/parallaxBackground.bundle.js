!function(e){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p=".",n(n.s=0)}({"./src/parallax.css":function(e,t){},"./src/parallax.js":function(e,t,n){"use strict";n.r(t);n("./src/parallax.css");window.vcv.on("ready",function(e,t){"merge"!==e&&setTimeout(function(){var e="[data-vce-assets-parallax]";e=t?'[data-vcv-element="'+t+'"] '+e:e,window.vceAssetsParallax(e)},10)})},"./src/plugin.js":function(e,t){!function(e,t){var n=function(n){Waypoint.refreshAll();var r=t.querySelectorAll(n);return(r=[].slice.call(r)).forEach(function(t){t.getVceParallax?t.getVceParallax.update():function(t){({element:null,bgElement:null,waypoint:null,observer:null,reverse:!1,speed:30,setup:function(e){return this.resize=this.resize.bind(this),this.handleAttributeChange=this.handleAttributeChange.bind(this),e.getVceParallax?this.update():(e.getVceParallax=this,this.element=e,this.bgElement=e.querySelector(e.dataset.vceAssetsParallax),this.prepareElement(),this.create()),e.getVceParallax},handleAttributeChange:function(){this.element.getAttribute("data-vce-assets-parallax")?this.update():this.destroy()},addScrollEvent:function(){e.addEventListener("scroll",this.resize),this.resize()},removeScrollEvent:function(){e.removeEventListener("scroll",this.resize)},resize:function(){if(this.element.clientHeight){var t=e.innerHeight,n=this.element.getBoundingClientRect(),r=n.height+t,s=-1*(n.top-t),l=0;s>=0&&s<=r&&(l=s/r);var i=2*this.speed*l*-1+this.speed;"true"===this.reverse&&(i*=-1),this.bgElement.style.transform="translateY("+i+"vh)"}},prepareElement:function(){var e=parseInt(t.dataset.vceAssetsParallaxSpeed);e&&(this.speed=e),"vceAssetsParallaxReverse"in t.dataset&&(this.reverse=t.dataset.vceAssetsParallaxReverse),this.bgElement.style.top="-"+this.speed+"vh",this.bgElement.style.bottom="-"+this.speed+"vh"},create:function(){var e=this;this.waypoint={},this.waypoint.top=new Waypoint({element:e.element,handler:function(t){"up"===t&&e.removeScrollEvent(),"down"===t&&e.addScrollEvent()},offset:"100%"}),this.waypoint.bottom=new Waypoint({element:e.element,handler:function(t){"up"===t&&e.addScrollEvent(),"down"===t&&e.removeScrollEvent()},offset:function(){return-e.element.clientHeight}}),e.observer=new MutationObserver(this.handleAttributeChange),e.observer.observe(this.element,{attributes:!0})},update:function(){this.prepareElement(),this.resize(),Waypoint.refreshAll()},destroy:function(){this.removeScrollEvent(),this.bgElement.style.top=null,this.bgElement.style.bottom=null,this.bgElement.style.transform=null,this.bgElement=null,this.waypoint.top.destroy(),this.waypoint.bottom.destroy(),this.waypoint=null,this.observer.disconnect(),this.observer=null,delete this.element.getVceParallax,this.element=null}}).setup(t)}(t)}),1===r.length?r.pop():r};e.vceAssetsParallax=n}(window,document)},0:function(e,t,n){n("./src/plugin.js"),e.exports=n("./src/parallax.js")}});