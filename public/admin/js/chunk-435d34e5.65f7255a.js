(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-435d34e5"],{"011a":function(t,e,n){t.exports=n.p+"img/no_chat.b9c3e583.png"},"060a":function(t,e,n){t.exports=n.p+"img/no_tk.401d40f4.png"},"19ce":function(t,e,n){t.exports=n.p+"media/notice.367f95a9.mp3"},4112:function(t,e,n){t.exports=n.p+"img/no_user.a09b282b.png"},"468b":function(t,e,n){t.exports=n.p+"img/no_all.174e30c0.png"},"50c0":function(t,e,n){},"5f70":function(t,e,n){t.exports=n.p+"img/no_fh.977a0fb8.png"},"6d12":function(t,e,n){"use strict";var i=n("50c0"),o=n.n(i);o.a},"6db4":function(t,e,n){!function(t,i){i(e,n("2b0e"))}(0,(function(t,e){"use strict";function n(t,e,n){document.addEventListener?t.addEventListener(e,n):t.attachEvent("on"+e,n)}function i(t,e,n){document.addEventListener?t.removeEventListener(e,n):t.detachEvent("on"+e,n)}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){return e={exports:{}},t(e,e.exports),e.exports}function s(){var t={},e=0,n=0,i=0;return{add:function(o,r){r||(r=o,o=0),o>n?n=o:o<i&&(i=o),t[o]||(t[o]=[]),t[o].push(r),e++},process:function(){for(var e=i;e<=n;e++)for(var o=t[e],r=0;r<o.length;r++)(0,o[r])()},size:function(){return e}}}function a(t){return t[C]}function l(t){return Array.isArray(t)||void 0!==t.length}function c(t){if(Array.isArray(t))return t;var e=[];return O(t,(function(t){e.push(t)})),e}function d(t){return t&&1===t.nodeType}function u(t,e,n){var i=t[e];return void 0!==i&&null!==i||void 0===n?i:n}e=e&&e.hasOwnProperty("default")?e.default:e;var f=function(t){var e=Date.now();return function(n){if(n-e>(t||14))return e=n,!0}},h=function(t,e,n){var i,o,r,s,a,l=function l(){var c=(new Date).getTime()-s;c<e&&c>=0?i=setTimeout(l,e-c):(i=null,n||(a=t.apply(r,o),i||(r=o=null)))};return function(){r=this,o=arguments,s=(new Date).getTime();var c=n&&!i;return i||(i=setTimeout(l,e)),c&&(a=t.apply(r,o),r=o=null),a}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"stripContainer",staticClass:"happy-scroll-strip",class:[t.horizontal?"happy-scroll-strip--horizontal":"happy-scroll-strip--vertical"],style:[t.initLocation],on:{"!wheel":function(e){return e.stopPropagation(),t.handlerWheel(e)}}},[n("div",{ref:"strip",staticClass:"happy-scroll-bar",style:[t.translate,o({},t.config.sizeAttr,t.length+"px"),t.initSize,{background:t.color},{opacity:t.isOpacity}],on:{mousedown:function(e){return e.stopPropagation(),t.handlerMouseDown(e)}}})])},staticRenderFns:[],name:"happy-scroll-strip",props:{horizontal:Boolean,left:Boolean,top:Boolean,move:{type:Number,default:0},size:{type:[Number,String],default:4},minLengthV:{type:Number,default:40},minLengthH:{type:Number,default:40},color:{type:String,default:"rgba(51,51,51,0.2)"},throttle:{type:Number,default:14}},data:function(){return{config:{},startMove:!1,binded:!1,length:0,percentage:0,maxOffset:0,currentOffset:0,moveThrottle:f(this.throttle)}},watch:{currentOffset:function(t){0===t?this.emitLocationEvent("start",0):t===this.maxOffset&&this.emitLocationEvent("end",t/this.percentage)}},computed:{initSize:function(){return o({},this.horizontal?"height":"width",this.size+"px")},isOpacity:function(){return this.percentage<1?1:0},translate:function(){var t=this.move*this.percentage;if(this.$refs.stripContainer)return t<0&&(t=0),t>this.maxOffset&&(t=this.maxOffset),this.currentOffset=t,{transform:this.config.translate+"("+t+"px)"}},initLocation:function(){return this.horizontal?this.top?{top:0,bottom:"auto"}:"":this.left?{left:0,right:"auto"}:""}},methods:{emitLocationEvent:function(t,e){var n=this.horizontal?"horizontal":"vertical";this.$emit(n+"-"+t,e)},computeStrip:function(t,e){var n=this.$refs.stripContainer[this.config.client];this.length=n*(e/t);var i=this.horizontal?this.minLengthH:this.minLengthV;i<1&&(i*=n),this.length=this.length<i?i:this.length;var o=this.maxOffset=n-this.length;this.percentage=o/(t-e)},bindEvents:function(){this.binded||(n(document,"mouseup",this.handlerMouseUp),n(document,"mousemove",this.handlerMove),this.binded=!0)},handlerMouseDown:function(t){if(0===t.button)return t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation(),this.startMove=!0,this.axis=t[this.config.clientAxis],this.bindEvents(),!1},handlerMouseUp:function(){this.startMove=!1},handlerMove:function(t){if(this.startMove&&this.moveThrottle(Date.now())){t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation();var e=this.$refs.stripContainer.getBoundingClientRect(),n=this.$refs.strip.getBoundingClientRect()[this.config.direction]-e[this.config.direction],i=t[this.config.clientAxis]-this.axis+n;this.axis=t[this.config.clientAxis],this.changeOffset(i)}},handlerWheel:function(t){var e=this.$refs.stripContainer.getBoundingClientRect(),n=this.$refs.strip.getBoundingClientRect()[this.config.direction]-e[this.config.direction]+t[this.config.wheelDelta];this.changeOffset(n,t)},changeOffset:function(t,e){t<0&&(t=0),t>this.maxOffset&&(t=this.maxOffset),e&&t>0&&t<this.maxOffset&&(e.preventDefault(),e.stopImmediatePropagation()),this.currentOffset=t,this.$refs.strip.style.transform=this.config.translate+"("+t+"px)",this.$emit("change",t/this.percentage)}},created:function(){var t={h:{sizeAttr:"width",client:"clientWidth",clientAxis:"clientX",translate:"translateX",direction:"left",wheelDelta:"deltaX"},v:{sizeAttr:"height",client:"clientHeight",clientAxis:"clientY",translate:"translateY",direction:"top",wheelDelta:"deltaY"}};this.config=this.horizontal?t.h:t.v},destroyed:function(){i(document,"mouseup",this.handlerClickUp),i(document,"mousemove",this.handlerMove)}},g=r((function(t){(t.exports={}).forEach=function(t,e){for(var n=0;n<t.length;n++){var i=e(t[n]);if(i)return i}}})),v=function(t){var e=t.stateHandler.getState;return{isDetectable:function(t){var n=e(t);return n&&!!n.isDetectable},markAsDetectable:function(t){e(t).isDetectable=!0},isBusy:function(t){return!!e(t).busy},markBusy:function(t,n){e(t).busy=!!n}}},m=function(t){function e(e){var i=t.get(e);return void 0===i?[]:n[i]||[]}var n={};return{get:e,add:function(e,i){var o=t.get(e);n[o]||(n[o]=[]),n[o].push(i)},removeListener:function(t,n){for(var i=e(t),o=0,r=i.length;o<r;++o)if(i[o]===n){i.splice(o,1);break}},removeAllListeners:function(t){var n=e(t);n&&(n.length=0)}}},b=function(){var t=1;return{generate:function(){return t++}}},y=function(t){var e=t.idGenerator,n=t.stateHandler.getState;return{get:function(t){var e=n(t);return e&&void 0!==e.id?e.id:null},set:function(t){var i=n(t);if(!i)throw new Error("setId required the element to have a resize detection state.");var o=e.generate();return i.id=o,o}}},w=function(t){function e(){}var n={log:e,warn:e,error:e};if(!t&&window.console){var i=function(t,e){t[e]=function(){var t=console[e];if(t.apply)t.apply(console,arguments);else for(var n=0;n<arguments.length;n++)t(arguments[n])}};i(n,"log"),i(n,"warn"),i(n,"error")}return n},S=r((function(t){var e=t.exports={};e.isIE=function(t){return!!function(){var t=navigator.userAgent.toLowerCase();return-1!==t.indexOf("msie")||-1!==t.indexOf("trident")||-1!==t.indexOf(" edge/")}()&&(!t||t===function(){var t=3,e=document.createElement("div"),n=e.getElementsByTagName("i");do{e.innerHTML="\x3c!--[if gt IE "+ ++t+"]><i></i><![endif]--\x3e"}while(n[0]);return t>4?t:void 0}())},e.isLegacyOpera=function(){return!!window.opera}})),_=r((function(t){(t.exports={}).getOption=function(t,e,n){var i=t[e];return void 0!==i&&null!==i||void 0===n?i:n}})),x=function(t){function e(){for(u=!0;d.size();){var t=d;d=s(),t.process()}u=!1}function n(){c=o(e)}function i(t){return clearTimeout(t)}function o(t){return function(t){return setTimeout(t,0)}(t)}var r=(t=t||{}).reporter,a=_.getOption(t,"async",!0),l=_.getOption(t,"auto",!0);l&&!a&&(r&&r.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true."),a=!0);var c,d=s(),u=!1;return{add:function(t,e){!u&&l&&a&&0===d.size()&&n(),d.add(t,e)},force:function(t){u||(void 0===t&&(t=a),c&&(i(c),c=null),t?n():e())}}},C="_erd",L={initState:function(t){return t[C]={},a(t)},getState:a,cleanState:function(t){delete t[C]}},z=function(t){function e(t){return o(t).object}var n=(t=t||{}).reporter,i=t.batchProcessor,o=t.stateHandler.getState;if(!n)throw new Error("Missing required dependency: reporter.");return{makeDetectable:function(t,e,r){r||(r=e,e=t,t=null),t=t||{},S.isIE(8)?r(e):function(t,e){function r(){function i(){if("static"===l.position){t.style.position="relative";var e=function(t,e,n,i){var o=n[i];"auto"!==o&&"0"!==function(t){return t.replace(/[^-\d\.]/g,"")}(o)&&(t.warn("An element that is positioned static has style."+i+"="+o+" which is ignored due to the static positioning. The element will need to be positioned relative, so the style."+i+" will be set to 0. Element: ",e),e.style[i]=0)};e(n,t,l,"top"),e(n,t,l,"right"),e(n,t,l,"bottom"),e(n,t,l,"left")}}""!==l.position&&(i(l),a=!0);var r=document.createElement("object");r.style.cssText=s,r.tabIndex=-1,r.type="text/html",r.onload=function(){function n(t,e){t.contentDocument?e(t.contentDocument):setTimeout((function(){n(t,e)}),100)}a||i(),n(this,(function(n){e(t)}))},S.isIE()||(r.data="about:blank"),t.appendChild(r),o(t).object=r,S.isIE()&&(r.data="about:blank")}var s="display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; padding: 0; margin: 0; opacity: 0; z-index: -1000; pointer-events: none;",a=!1,l=window.getComputedStyle(t),c=t.offsetWidth,d=t.offsetHeight;o(t).startSize={width:c,height:d},i?i.add(r):r()}(e,r)},addListener:function(t,n){function i(){n(t)}if(!e(t))throw new Error("Element is not detectable by this strategy.");S.isIE(8)?(o(t).object={proxy:i},t.attachEvent("onresize",i)):e(t).contentDocument.defaultView.addEventListener("resize",i)},uninstall:function(t){S.isIE(8)?t.detachEvent("onresize",o(t).object.proxy):t.removeChild(e(t)),delete o(t).object}}},E=g.forEach,k=function(t){function e(t){t.className+=" "+u+"_animation_active"}function n(t,e,n){if(t.addEventListener)t.addEventListener(e,n);else{if(!t.attachEvent)return s.error("[scroll] Don't know how to add event listeners.");t.attachEvent("on"+e,n)}}function i(t,e,n){if(t.removeEventListener)t.removeEventListener(e,n);else{if(!t.detachEvent)return s.error("[scroll] Don't know how to remove event listeners.");t.detachEvent("on"+e,n)}}function o(t){return l(t).container.childNodes[0].childNodes[0].childNodes[0]}function r(t){return l(t).container.childNodes[0].childNodes[0].childNodes[1]}var s=(t=t||{}).reporter,a=t.batchProcessor,l=t.stateHandler.getState,c=t.idHandler;if(!a)throw new Error("Missing required dependency: batchProcessor");if(!s)throw new Error("Missing required dependency: reporter.");var d=function(){var t=document.createElement("div");t.style.cssText="position: absolute; width: 1000px; height: 1000px; visibility: hidden; margin: 0; padding: 0;";var e=document.createElement("div");e.style.cssText="position: absolute; width: 500px; height: 500px; overflow: scroll; visibility: none; top: -1500px; left: -1500px; visibility: hidden; margin: 0; padding: 0;",e.appendChild(t),document.body.insertBefore(e,document.body.firstChild);var n=500-e.clientWidth,i=500-e.clientHeight;return document.body.removeChild(e),{width:n,height:i}}(),u="erd_scroll_detection_container";return function(t,e){if(!document.getElementById(t)){var n=e+"_animation",i="/* Created by the element-resize-detector library. */\n";i+="."+e+" > div::-webkit-scrollbar { display: none; }\n\n",i+="."+e+"_animation_active { -webkit-animation-duration: 0.1s; animation-duration: 0.1s; -webkit-animation-name: "+n+"; animation-name: "+n+"; }\n",i+="@-webkit-keyframes "+n+" { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }\n",function(e,n){n=n||function(t){document.head.appendChild(t)};var i=document.createElement("style");i.innerHTML=e,i.id=t,n(i)}(i+="@keyframes "+n+" { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }")}}("erd_scroll_detection_scrollbar_style",u),{makeDetectable:function(t,i,f){function h(){if(t.debug){var e=Array.prototype.slice.call(arguments);if(e.unshift(c.get(i),"Scroll: "),s.log.apply)s.log.apply(null,e);else for(var n=0;n<e.length;n++)s.log(e[n])}}function p(t){var e=l(t).container.childNodes[0],n=getComputedStyle(e);return!n.width||-1===n.width.indexOf("px")}function g(){var t=getComputedStyle(i),e={};return e.position=t.position,e.width=i.offsetWidth,e.height=i.offsetHeight,e.top=t.top,e.right=t.right,e.bottom=t.bottom,e.left=t.left,e.widthCSS=t.width,e.heightCSS=t.height,e}function v(){var t=g();l(i).startSize={width:t.width,height:t.height},h("Element start size",l(i).startSize)}function m(){l(i).listeners=[]}function b(){if(h("storeStyle invoked."),l(i)){var t=g();l(i).style=t}else h("Aborting because element has been uninstalled")}function y(t,e,n){l(t).lastWidth=e,l(t).lastHeight=n}function w(t){return o(t).childNodes[0]}function S(){return 2*d.width+1}function _(){return 2*d.height+1}function x(t){return t+10+S()}function C(t){return t+10+_()}function L(t){return 2*t+S()}function z(t){return 2*t+_()}function k(t,e,n){var i=o(t),s=r(t),a=x(e),l=C(n),c=L(e),d=z(n);i.scrollLeft=a,i.scrollTop=l,s.scrollLeft=c,s.scrollTop=d}function O(){var t=l(i).container;if(!t){(t=document.createElement("div")).className=u,t.style.cssText="visibility: hidden; display: inline; width: 0px; height: 0px; z-index: -1; overflow: hidden; margin: 0; padding: 0;",l(i).container=t,e(t),i.appendChild(t);var o=function(){l(i).onRendered&&l(i).onRendered()};n(t,"animationstart",o),l(i).onAnimationStart=o}return t}function H(){function t(){l(i).onExpand&&l(i).onExpand()}function e(){l(i).onShrink&&l(i).onShrink()}if(h("Injecting elements"),l(i)){!function(){var t=l(i).style;if("static"===t.position){i.style.position="relative";var e=function(t,e,n,i){var o=n[i];"auto"!==o&&"0"!==function(t){return t.replace(/[^-\d\.]/g,"")}(o)&&(t.warn("An element that is positioned static has style."+i+"="+o+" which is ignored due to the static positioning. The element will need to be positioned relative, so the style."+i+" will be set to 0. Element: ",e),e.style[i]=0)};e(s,i,t,"top"),e(s,i,t,"right"),e(s,i,t,"bottom"),e(s,i,t,"left")}}();var o=l(i).container;o||(o=O());var r=d.width,a=d.height,c="position: absolute; flex: none; overflow: hidden; z-index: -1; visibility: hidden; "+function(t,e,n,i){return t=t?t+"px":"0",e=e?e+"px":"0",n=n?n+"px":"0",i=i?i+"px":"0","left: "+t+"; top: "+e+"; right: "+i+"; bottom: "+n+";"}(-(1+r),-(1+a),-a,-r),f=document.createElement("div"),p=document.createElement("div"),g=document.createElement("div"),v=document.createElement("div"),m=document.createElement("div"),b=document.createElement("div");f.dir="ltr",f.style.cssText="position: absolute; flex: none; overflow: hidden; z-index: -1; visibility: hidden; width: 100%; height: 100%; left: 0px; top: 0px;",f.className=u,p.className=u,p.style.cssText=c,g.style.cssText="position: absolute; flex: none; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;",v.style.cssText="position: absolute; left: 0; top: 0;",m.style.cssText="position: absolute; flex: none; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;",b.style.cssText="position: absolute; width: 200%; height: 200%;",g.appendChild(v),m.appendChild(b),p.appendChild(g),p.appendChild(m),f.appendChild(p),o.appendChild(f),n(g,"scroll",t),n(m,"scroll",e),l(i).onExpandScroll=t,l(i).onShrinkScroll=e}else h("Aborting because element has been uninstalled")}function $(){function e(t,e,n){var i=w(t),o=x(e),r=C(n);i.style.width=o+"px",i.style.height=r+"px"}function n(n){var o=i.offsetWidth,r=i.offsetHeight;h("Storing current size",o,r),y(i,o,r),a.add(0,(function(){if(l(i))if(d()){if(t.debug){var n=i.offsetWidth,a=i.offsetHeight;n===o&&a===r||s.warn(c.get(i),"Scroll: Size changed before updating detector elements.")}e(i,o,r)}else h("Aborting because element container has not been initialized");else h("Aborting because element has been uninstalled")})),a.add(1,(function(){l(i)?d()?k(i,o,r):h("Aborting because element container has not been initialized"):h("Aborting because element has been uninstalled")})),n&&a.add(2,(function(){l(i)?d()?n():h("Aborting because element container has not been initialized"):h("Aborting because element has been uninstalled")}))}function d(){return!!l(i).container}function u(){h("notifyListenersIfNeeded invoked");var t=l(i);return void 0===l(i).lastNotifiedWidth&&t.lastWidth===t.startSize.width&&t.lastHeight===t.startSize.height?h("Not notifying: Size is the same as the start size, and there has been no notification yet."):t.lastWidth===t.lastNotifiedWidth&&t.lastHeight===t.lastNotifiedHeight?h("Not notifying: Size already notified"):(h("Current size not notified, notifying..."),t.lastNotifiedWidth=t.lastWidth,t.lastNotifiedHeight=t.lastHeight,void E(l(i).listeners,(function(t){t(i)})))}function f(){if(h("Scroll detected."),p(i))h("Scroll event fired while unrendered. Ignoring...");else{var t=i.offsetWidth,e=i.offsetHeight;t!==i.lastWidth||e!==i.lastHeight?(h("Element size changed."),n(u)):h("Element size has not changed ("+t+"x"+e+").")}}if(h("registerListenersAndPositionElements invoked."),l(i)){l(i).onRendered=function(){if(h("startanimation triggered."),p(i))h("Ignoring since element is still unrendered...");else{h("Element rendered.");var t=o(i),e=r(i);0!==t.scrollLeft&&0!==t.scrollTop&&0!==e.scrollLeft&&0!==e.scrollTop||(h("Scrollbars out of sync. Updating detector elements..."),n(u))}},l(i).onExpand=f,l(i).onShrink=f;var g=l(i).style;e(i,g.width,g.height)}else h("Aborting because element has been uninstalled")}function T(){if(h("finalizeDomMutation invoked."),l(i)){var t=l(i).style;y(i,t.width,t.height),k(i,t.width,t.height)}else h("Aborting because element has been uninstalled")}function D(){f(i)}function N(){h("Installing..."),m(),v(),a.add(0,b),a.add(1,H),a.add(2,$),a.add(3,T),a.add(4,D)}f||(f=i,i=t,t=null),t=t||{},h("Making detectable..."),function(t){return!function(t){return t===t.ownerDocument.body||t.ownerDocument.body.contains(t)}(t)||null===getComputedStyle(t)}(i)?(h("Element is detached"),O(),h("Waiting until element is attached..."),l(i).onRendered=function(){h("Element is now attached"),N()}):N()},addListener:function(t,e){if(!l(t).listeners.push)throw new Error("Cannot add listener to an element that is not detectable.");l(t).listeners.push(e)},uninstall:function(t){var e=l(t);e&&(e.onExpandScroll&&i(o(t),"scroll",e.onExpandScroll),e.onShrinkScroll&&i(r(t),"scroll",e.onShrinkScroll),e.onAnimationStart&&i(e.container,"animationstart",e.onAnimationStart),e.container&&t.removeChild(e.container))}}},O=g.forEach,H=function(t){var e;if((t=t||{}).idHandler)e={get:function(e){return t.idHandler.get(e,!0)},set:t.idHandler.set};else{var n=b(),i=y({idGenerator:n,stateHandler:L});e=i}var o=t.reporter;o||(o=w(!1===o));var r=u(t,"batchProcessor",x({reporter:o})),s={};s.callOnAdd=!!u(t,"callOnAdd",!0),s.debug=!!u(t,"debug",!1);var a,f=m(e),h=v({stateHandler:L}),p=u(t,"strategy","object"),g={reporter:o,batchProcessor:r,stateHandler:L,idHandler:e};if("scroll"===p&&(S.isLegacyOpera()?(o.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy."),p="object"):S.isIE(9)&&(o.warn("Scroll strategy is not supported on IE9. Changing to object strategy."),p="object")),"scroll"===p)a=k(g);else{if("object"!==p)throw new Error("Invalid strategy name: "+p);a=z(g)}var _={};return{listenTo:function(t,n,i){function r(t){var e=f.get(t);O(e,(function(e){e(t)}))}function p(t,e,n){f.add(e,n),t&&n(e)}if(i||(i=n,n=t,t={}),!n)throw new Error("At least one element required.");if(!i)throw new Error("Listener required.");if(d(n))n=[n];else{if(!l(n))return o.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");n=c(n)}var g=0,v=u(t,"callOnAdd",s.callOnAdd),m=u(t,"onReady",(function(){})),b=u(t,"debug",s.debug);O(n,(function(t){L.getState(t)||(L.initState(t),e.set(t));var s=e.get(t);if(b&&o.log("Attaching listener to element",s,t),!h.isDetectable(t))return b&&o.log(s,"Not detectable."),h.isBusy(t)?(b&&o.log(s,"System busy making it detectable"),p(v,t,i),_[s]=_[s]||[],void _[s].push((function(){++g===n.length&&m()}))):(b&&o.log(s,"Making detectable..."),h.markBusy(t,!0),a.makeDetectable({debug:b},t,(function(t){if(b&&o.log(s,"onElementDetectable"),L.getState(t)){h.markAsDetectable(t),h.markBusy(t,!1),a.addListener(t,r),p(v,t,i);var e=L.getState(t);if(e&&e.startSize){var l=t.offsetWidth,c=t.offsetHeight;e.startSize.width===l&&e.startSize.height===c||r(t)}_[s]&&O(_[s],(function(t){t()}))}else b&&o.log(s,"Element uninstalled before being detectable.");delete _[s],++g===n.length&&m()})));b&&o.log(s,"Already detecable, adding listener."),p(v,t,i),g++})),g===n.length&&m()},removeListener:f.removeListener,removeAllListeners:f.removeAllListeners,uninstall:function(t){if(!t)return o.error("At least one element is required.");if(d(t))t=[t];else{if(!l(t))return o.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");t=c(t)}O(t,(function(t){f.removeAllListeners(t),a.uninstall(t),L.cleanState(t)}))}}},$=e;"undefined"!=typeof window&&window.Vue&&($=window.Vue);var T={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"happy-scroll",staticClass:"happy-scroll"},[n("div",{ref:"container",staticClass:"happy-scroll-container",style:[t.initSize],on:{scroll:function(e){return e.stopPropagation(),t.onScroll(e)}}},[n("div",{ref:"content",staticClass:"happy-scroll-content",style:[t.contentBorderStyle]},[t._t("default")],2)]),t.hideVertical?t._e():n("happy-scroll-strip",t._g(t._b({ref:"stripY",attrs:{throttle:t.throttle,move:t.moveY},on:{change:t.slideYChange}},"happy-scroll-strip",t.$attrs,!1),t.$listeners)),t.hideHorizontal?t._e():n("happy-scroll-strip",t._g(t._b({ref:"stripX",attrs:{horizontal:"",throttle:t.throttle,move:t.moveX},on:{change:t.slideXChange}},"happy-scroll-strip",t.$attrs,!1),t.$listeners))],1)},staticRenderFns:[],name:"happy-scroll",inheritAttrs:!1,components:{HappyScrollStrip:p},props:{scrollTop:{type:[Number,String],default:0},scrollLeft:{type:[Number,String],default:0},hideVertical:Boolean,hideHorizontal:Boolean,throttle:{type:Number,default:14},resize:Boolean,smallerMoveH:{type:String,default:""},smallerMoveV:{type:String,default:""},biggerMoveH:{type:String,default:""},biggerMoveV:{type:String,default:""}},data:function(){return{initSize:{},moveX:+this.scrollLeft,moveY:+this.scrollTop,scrollThrottle:f(this.throttle),browserHSize:0,browserVSize:0,isScrollNotUseSpace:void 0}},watch:{scrollTop:function(t){this.$refs.container.scrollTop=this.moveY=+t},scrollLeft:function(t){this.$refs.container.scrollLeft=this.moveX=+t},hideVertical:function(t){t||this.$nextTick(this.computeStripY)},hideHorizontal:function(t){t||this.$nextTick(this.computeStripX)}},computed:{contentBorderStyle:function(){return void 0===this.isScrollNotUseSpace?{}:{"border-right":20-this.browserHSize+"px solid transparent","border-bottom":20-this.browserVSize+"px solid transparent"}}},methods:{slideYChange:function(t){this.$refs.container.scrollTop=t,this.$emit("update:scrollTop",this.$refs.container.scrollTop)},slideXChange:function(t){this.$refs.container.scrollLeft=t,this.$emit("update:scrollLeft",this.$refs.container.scrollLeft)},onScroll:function(t){if(!this.scrollThrottle(Date.now()))return!1;this.moveY=t.target.scrollTop,this.moveX=t.target.scrollLeft,this.updateSyncScroll()},initBrowserSize:function(){void 0!==this.isScrollNotUseSpace&&(!0===this.isScrollNotUseSpace?(this.browserHSize=0,this.browserVSize=0):(this.browserHSize=this.$refs.container.offsetWidth-this.$refs.container.clientWidth,this.browserVSize=this.$refs.container.offsetHeight-this.$refs.container.clientHeight))},computeStripX:function(){if(!this.hideHorizontal){var t=this.$refs["happy-scroll"],e=this.$slots.default[0].elm;this.$refs.stripX.computeStrip(e.scrollWidth,t.clientWidth)}},computeStripY:function(){if(!this.hideVertical){var t=this.$refs["happy-scroll"],e=this.$slots.default[0].elm;this.$refs.stripY.computeStrip(e.scrollHeight,t.clientHeight)}},resizeListener:function(){var t=this;if(this.resize){var e=H({strategy:"scroll",callOnAdd:!1}),n=this.$slots.default[0].elm,i=n.clientHeight,o=n.clientWidth;e.listenTo(n,(function(e){t.computeStripX(),t.computeStripY(),t.initBrowserSize();var n=void 0;e.clientHeight<i&&(n=t.smallerMoveH.toLocaleLowerCase()),e.clientHeight>i&&(n=t.biggerMoveH.toLocaleLowerCase()),"start"===n&&(t.moveY=0,t.slideYChange(t.moveY)),"end"===n&&(t.moveY=e.clientHeight,t.slideYChange(t.moveY)),i=e.clientHeight,n="",e.clientWidth<o&&(n=t.smallerMoveV.toLocaleLowerCase()),e.clientWidth>o&&(n=t.biggerMoveV.toLocaleLowerCase()),"start"===n&&(t.moveX=0,t.slideXChange(t.moveX)),"end"===n&&(t.moveX=e.clientWidth,t.slideXChange(t.moveX)),o=e.clientWidth}))}},setContainerSize:function(){this.initSize={width:this.$refs["happy-scroll"].clientWidth+20+"px",height:this.$refs["happy-scroll"].clientHeight+20+"px"}},checkScrollMode:function(){if(void 0===$._happyJS._isScrollNotUseSpace){var t=this.$slots.default[0].elm,e=this.$refs.container;(t.offsetHeight>e.clientHeight||t.offsetWidth>e.clientWidth)&&(e.offsetWidth>e.clientWidth||e.offsetHeight>e.clientHeight?$._happyJS._isScrollNotUseSpace=!1:$._happyJS._isScrollNotUseSpace=!0,this.isScrollNotUseSpace=$._happyJS._isScrollNotUseSpace)}}},beforeCreate:function(){var t=$._happyJS=$._happyJS||{};this.isScrollNotUseSpace=t._isScrollNotUseSpace},created:function(){this.updateSyncScroll=h((function(){this.$emit("update:scrollTop",this.moveY),this.$emit("update:scrollLeft",this.moveX)}),this.throttle)},mounted:function(){var t=this;this.setContainerSize(),this.$nextTick((function(){t.computeStripX(),t.computeStripY(),t.checkScrollMode(),t.initBrowserSize(),t.$nextTick((function(){t.scrollTop&&(t.$refs.container.scrollTop=+t.scrollTop),t.scrollLeft&&(t.$refs.container.scrollLeft=+t.scrollLeft)}))})),this.resizeListener(),this.$watch("browserHSize",this.setContainerSize),this.$watch("browserVSize",this.setContainerSize)}};"undefined"!=typeof window&&window.Vue&&Vue.component("happy-scroll",T);var D={install:function(t){t.component("happy-scroll",T)},version:"2.1.1"};t.default=D,t.HappyScroll=T,t.version="2.1.1",Object.defineProperty(t,"__esModule",{value:!0})}))},"7a1a":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n("6b6c");function o(){return Object(i["a"])({url:"service/info",method:"get",kefu:!0})}},"8b1f":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"empty-wrapper"},[1==t.status?[i("img",{attrs:{src:n("011a"),alt:""}})]:t._e(),2==t.status?[i("img",{attrs:{src:n("4112"),alt:""}})]:t._e(),3==t.status?[i("img",{attrs:{src:n("468b"),alt:""}})]:t._e(),4==t.status?[i("img",{attrs:{src:n("ea87"),alt:""}})]:t._e(),5==t.status?[i("img",{attrs:{src:n("5f70"),alt:""}})]:t._e(),6==t.status?[i("img",{attrs:{src:n("060a"),alt:""}})]:t._e(),i("p",[t._v(t._s(t.msg))])],2)},o=[],r=(n("c5f6"),{name:"empty",props:{status:{type:String|Number,default:1},msg:{type:String,default:""}}}),s=r,a=(n("e2fd"),n("2877")),l=Object(a["a"])(s,i,o,!1,null,"345b1430",null);e["a"]=l.exports},"9be0":function(t,e,n){},a9d3:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chat-list"},[n("div",{staticClass:"head-box"},[n("div",{staticClass:"hd"},[n("div",{staticClass:"left-wrapper"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.kefuInfo.avatar,expression:"kefuInfo.avatar"}]}),n("div",{staticClass:"info",on:{click:function(e){t.isOnLine=!t.isOnLine}}},[n("div",[t._v(t._s(t.kefuInfo.nickname))]),n("div",{staticClass:"status"},[n("span",{staticClass:"doc",class:{off:!t.kefuInfo.online}}),n("span",[t._v(t._s(t.kefuInfo.online?"在线":"离线"))])])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isOnLine,expression:"isOnLine"}],staticClass:"down-wrapper"},[n("div",{staticClass:"item",on:{click:function(e){return t.changOnline(1)}}},[n("span",{staticClass:"dot green"}),t._v("在线\n                        "),t.kefuInfo.online?n("span",{staticClass:"iconfont iconduihao"}):t._e()]),n("div",{staticClass:"item",on:{click:function(e){return t.changOnline(0)}}},[n("span",{staticClass:"dot"}),t._v("离线\n                        "),t.kefuInfo.online?t._e():n("span",{staticClass:"iconfont iconduihao"})])])]),n("div",{staticClass:"right-wrapper",on:{click:t.outLogin}},[t._m(0),n("div",{staticStyle:{"margin-left":"5px"}},[t._v("退出登录")])])]),n("div",{staticClass:"tab-box"},t._l(t.tabList,(function(e,i){return n("div",{staticClass:"tab-item",class:{on:t.tabCur==e.key},on:{click:function(n){return t.changeClass(e)}}},[t._v(t._s(e.title))])})),0),n("div",{staticClass:"search-box"},[n("Input",{attrs:{placeholder:"搜索用户名称"},on:{"on-enter":t.bindSearch},model:{value:t.searchTxt,callback:function(e){t.searchTxt=e},expression:"searchTxt"}})],1)]),t.list.length>0?n("div",{staticClass:"list-box"},[n("vue-scroll",{ref:"vs",attrs:{ops:t.ops},on:{"load-before-deactivate":t.handleBeforeDeactivate}},[t._l(t.list,(function(e,i){return n("div",{key:i,staticClass:"item",on:{click:function(n){return t.goPage(e)}}},[n("div",{staticClass:"left-wrapper"},[n("div",{staticClass:"img-box"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.avatar,expression:"item.avatar"}]}),n("div",{staticClass:"online",class:{on:e.online}})]),n("div",{staticClass:"info"},[n("div",{staticClass:"title"},[n("span",{staticClass:"line1"},[t._v(t._s(e.nickname))]),2==e.type?[n("span",{staticClass:"label"},[t._v("小程序")])]:t._e(),3==e.type?[n("span",{staticClass:"label h5"},[t._v("H5")])]:t._e(),1==e.type?[n("span",{staticClass:"label wx"},[t._v("公众号")])]:t._e(),0==e.type?[n("span",{staticClass:"label pc"},[t._v("PC端")])]:t._e()],2),1==e.message_type?n("div",{staticClass:"msg line1"},[t._v(t._s(e.message))]):t._e(),2==e.message_type?n("div",{staticClass:"msg"},[t._v("[表情]")]):t._e(),3==e.message_type?n("div",{staticClass:"msg"},[t._v("[图片]")]):t._e(),5==e.message_type?n("div",{staticClass:"msg"},[t._v("[商品]")]):t._e(),6==e.message_type?n("div",{staticClass:"msg"},[t._v("[订单]")]):t._e()])]),n("div",{staticClass:"right-wrapper"},[n("div",{staticClass:"time"},[t._v(t._s(t._f("toDay")(e.update_time)))]),e.mssage_num>0?n("span",{staticClass:"num"},[t._v(t._s(e.mssage_num))]):t._e()])])})),n("div",{staticClass:"slot-load",attrs:{slot:"load-deactive"},slot:"load-deactive"}),n("div",{staticClass:"slot-load",attrs:{slot:"load-active"},slot:"load-active"},[t._v("下滑加载更多")])],2)],1):n("empty",{attrs:{status:"3",msg:"暂无用户列表"}})],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"icon-box"},[n("span",{staticClass:"iconfont icontuichu"})])}],r=(n("8e6e"),n("456d"),n("bd86")),s=(n("ac6a"),n("5df3"),n("c276")),a=n("49ea"),l=n("42e3"),c=n("7a1a"),d=n("6db4"),u=n("2f62"),f=n("8b1f");function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var g=n("19ce"),v=(g=new Audio(g),{name:"chat_list.vue",components:{HappyScroll:d["HappyScroll"],empty:f["a"]},data:function(){return{ops:{vuescroll:{mode:"slide",enable:!1,tips:{deactive:"Push to Load",active:"Release to Load",start:"Loading...",beforeDeactive:"Load Successfully!"},auto:!1,autoLoadDistance:0,pullRefresh:{enable:!1},pushLoad:{enable:!0,auto:!0,autoLoadDistance:10}},bar:{background:"#393232",opacity:".5",size:"2px"}},list:[],page:1,limit:10,isScroll:!0,searchTxt:"",isOpen:!0,kefuInfo:{},isOnLine:!1,tabCur:0,tabList:[{key:0,title:"用户列表"},{key:1,title:"游客列表"}],wsLogin:JSON.parse(sessionStorage.getItem("wsLogin"))}},filters:{toDay:function(t){if(!t)return"";var e=new Date,n=(e.getFullYear(),(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"-"),i=(e.getDate()<10?"0"+e.getDate():e.getDate())+" ",o=(e.getHours()<10?"0"+e.getHours():e.getHours())+":",r=e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes();e.getSeconds(),e.getSeconds();return t=n+i+o+r,t}},created:function(){Promise.all([this.getKefuInfo(),this.getList()])},mounted:function(){var t=this,e=this;window.addEventListener("beforeunload",(function(t){sessionStorage.setItem("wsLogin",!1)})),this.wsLogin=JSON.parse(sessionStorage.getItem("wsLogin"));var n=Object(s["d"])("kefu_token");a["a"].then((function(i){!e.wsLogin&&n&&i.send({type:"kefu_login",data:Object(s["d"])("kefu_token")}),i.$on("transfer",(function(e){if(e.recored.id){for(var n=!1,i=0;i<t.list.length;i++)e.recored.id==t.list[i].id&&(n=!0,t.$set(t.list,i,e.recored));n||t.list.unshift(e.recored)}})),i.$on("mssage_num",(function(n){if(n.num>0&&g.play(),n.recored.id){var i=!1;e.list.forEach((function(t,o,r){if(n.recored.id==t.id&&(i=!0,n.recored.is_tourist==e.tabCur)){var s=n.recored;r.splice(o,1),r.unshift(s)}})),i||n.recored.is_tourist==t.tabCur&&t.list.unshift(n.recored),n.recored.is_tourist!=t.tabCur&&n.recored.id&&t.$Notice.info({title:t.tabCur?"用户发来消息啦！":"游客发来消息啦！"})}})),i.$on("success",(function(t){sessionStorage.setItem("wsLogin",!0)}))}))},beforeDestroy:function(){},methods:p(p({},Object(u["b"])("kefu/",["logout","logoutKefu"])),{},{changeClass:function(t){this.tabCur!=t.key&&(this.tabCur=t.key,this.page=1,this.list=[],this.isScroll=!0,this.getList())},changOnline:function(t){this.kefuInfo.online=t,this.isOnLine=!1,a["a"].then((function(e){e.send({type:"online",data:{online:t}})}))},getKefuInfo:function(){var t=this;Object(c["a"])().then((function(e){t.kefuInfo=e.data,window.document.title="".concat(e.data.site_name," - 消息列表")}))},getList:function(){var t=this;this.isScroll&&Object(l["G"])({nickname:this.searchTxt,page:this.page,limit:this.limit,is_tourist:this.tabCur}).then((function(e){t.isScroll=e.data.length>=t.limit,t.list=t.list.concat(e.data),t.page++,setTimeout((function(){t.$refs.vs.refresh()}),100)}))},outLogin:function(){var t=this;this.$Modal.confirm({title:"退出登录确认",content:"您确定退出登录当前账户吗？打开的标签页和个人设置将会保存。",onOk:function(){t.logoutKefu({confirm:!1,vm:t})},onCancel:function(){}})},bindSearch:function(t){this.page=1,this.list=[],this.isScroll=!0,this.getList()},goPage:function(t){this.$router.push({path:"mobile_chat",query:{toUid:t.to_uid,nickname:t.nickname,is_tourist:this.tabCur}})},handleBeforeDeactivate:function(t,e,n){this.getList(),n()}})}),m=v,b=(n("6d12"),n("2877")),y=Object(b["a"])(m,i,o,!1,null,"5b051e76",null);e["default"]=y.exports},e2fd:function(t,e,n){"use strict";var i=n("9be0"),o=n.n(i);o.a},ea87:function(t,e,n){t.exports=n.p+"img/no_zf.e61fe9b5.png"}}]);