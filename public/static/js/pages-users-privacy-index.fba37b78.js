(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-privacy-index"],{"11bf":function(t,e,i){"use strict";i.r(e);var r=i("532d"),n=i.n(r);for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);e["default"]=n.a},"2cea2":function(t,e,i){var r=i("89fd");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=i("4f06").default;n("4b429ff2",r,!0,{sourceMap:!1,shadowMode:!1})},3139:function(t,e,i){"use strict";var r=i("89c1"),n=i.n(r);n.a},"50a7":function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__("4ea4");__webpack_require__("99af"),__webpack_require__("caad"),__webpack_require__("c975"),__webpack_require__("acd8"),__webpack_require__("ac1f"),__webpack_require__("2532"),__webpack_require__("466d"),__webpack_require__("5319"),__webpack_require__("1276"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _createForOfIteratorHelper2=_interopRequireDefault(__webpack_require__("b85c")),rpx=uni.getSystemInfoSync().screenWidth/750,cfg=__webpack_require__("9f0f"),_default={name:"parser",data:function(){return{uid:this._uid,scaleAm:"",showAm:"",imgs:[],nodes:[]}},props:{html:null,autopause:{type:Boolean,default:!0},autosetTitle:{type:Boolean,default:!0},domain:String,gestureZoom:Boolean,lazyLoad:Boolean,selectable:Boolean,tagStyle:Object,showWithAnimation:Boolean,useAnchor:Boolean},watch:{html:function(t){this.setContent(t)}},mounted:function(){this.imgList=[],this.imgList.each=function(t){for(var e=0,i=this.length;e<i;e++)this.setItem(e,t(this[e],e,this))},this.imgList.setItem=function(t,e){if(void 0!=t&&e){if(0==e.indexOf("http")&&this.includes(e)){for(var i,r="",n=0;i=e[n];n++){if("/"==i&&"/"!=e[n-1]&&"/"!=e[n+1])break;r+=Math.random()>.5?i.toUpperCase():i}return r+=e.substr(n),this[t]=r}if(this[t]=e,e.includes("data:image")){var a=e.match(/data:image\/(\S+?);(\S+?),(.+)/);if(!a)return}}},this.html&&this.setContent(this.html)},beforeDestroy:function(){this._observer&&this._observer.disconnect(),this.imgList.each((function(t){})),clearInterval(this._timer)},methods:{_Dom2Str:function(t){var e,i="",r=(0,_createForOfIteratorHelper2.default)(t);try{for(r.s();!(e=r.n()).done;){var n=e.value;if("text"==n.type)i+=n.text;else{for(var a in i+="<"+n.name,n.attrs||{})i+=" "+a+'="'+n.attrs[a]+'"';n.children&&n.children.length?i+=">"+this._Dom2Str(n.children)+"</"+n.name+">":i+=">"}}}catch(o){r.e(o)}finally{r.f()}return i},_handleHtml:function(t,e){if("string"!=typeof t&&(t=this._Dom2Str(t.nodes||t)),t.includes("rpx")&&(t=t.replace(/[0-9.]+\s*rpx/g,(function(t){return parseFloat(t)*rpx+"px"}))),!e){var i="<style scoped>@keyframes show{0%{opacity:0}100%{opacity:1}}";for(var r in cfg.userAgentStyles)i+="".concat(r,"{").concat(cfg.userAgentStyles[r],"}");for(r in this.tagStyle)i+="".concat(r,"{").concat(this.tagStyle[r],"}");i+="</style>",t=i+t}return t},setContent:function(t,e){var i=this;if(t){var r=document.createElement("div");e?this.rtf?this.rtf.appendChild(r):this.rtf=r:(this.rtf&&this.rtf.parentNode.removeChild(this.rtf),this.rtf=r),r.innerHTML=this._handleHtml(t,e);for(var n,a=this.rtf.getElementsByTagName("style"),o=0;n=a[o++];)n.innerHTML=n.innerHTML.replace(/body/g,"#rtf"+this._uid),n.setAttribute("scoped","true");!this._observer&&this.lazyLoad&&IntersectionObserver&&(this._observer=new IntersectionObserver((function(t){for(var e,r=0;e=t[r++];)e.isIntersecting&&(e.target.src=e.target.getAttribute("data-src"),e.target.removeAttribute("data-src"),i._observer.unobserve(e.target))}),{rootMargin:"900px 0px 900px 0px"}));var s=this,c=this.rtf.getElementsByTagName("title");c.length&&this.autosetTitle&&uni.setNavigationBarTitle({title:c[0].innerText}),this.imgList.length=0;for(var l,u=this.rtf.getElementsByTagName("img"),f=0,d=0;l=u[f];f++){l.style.maxWidth="100%";var h=l.getAttribute("src");this.domain&&h&&("/"==h[0]?"/"==h[1]?l.src=(this.domain.includes("://")?this.domain.split("://")[0]:"")+":"+h:l.src=this.domain+h:h.includes("://")||(l.src=this.domain+"/"+h)),l.hasAttribute("ignore")||"A"==l.parentElement.nodeName||(l.i=d++,s.imgList.push(l.src||l.getAttribute("data-src")),l.onclick=function(){var t=!0;this.ignore=function(){return t=!1},s.$emit("imgtap",this),t&&uni.previewImage({current:this.i,urls:s.imgList})}),l.onerror=function(){s.$emit("error",{source:"img",target:this})},s.lazyLoad&&this._observer&&l.src&&0!=l.i&&(l.setAttribute("data-src",l.src),l.removeAttribute("src"),this._observer.observe(l))}var p,m=this.rtf.getElementsByTagName("a"),g=(0,_createForOfIteratorHelper2.default)(m);try{for(g.s();!(p=g.n()).done;){var _=p.value;_.onclick=function(){var t=!0,e=this.getAttribute("href");if(s.$emit("linkpress",{href:e,ignore:function(){return t=!1}}),t&&e)if("#"==e[0])s.useAnchor&&s.navigateTo({id:e.substr(1)});else{if(0==e.indexOf("http")||0==e.indexOf("//"))return!0;uni.navigateTo({url:e})}return!1}}}catch(M){g.e(M)}finally{g.f()}var v=this.rtf.getElementsByTagName("video");s.videoContexts=v;for(var b,y=0;b=v[y++];)b.style.maxWidth="100%",b.onerror=function(){s.$emit("error",{source:"video",target:this})},b.onplay=function(){if(s.autopause)for(var t,e=0;t=s.videoContexts[e++];)t!=this&&t.pause()};var x,w,T=this.rtf.getElementsByTagName("audios"),k=(0,_createForOfIteratorHelper2.default)(T);try{for(k.s();!(x=k.n()).done;){var A=x.value;A.onerror=function(){s.$emit("error",{source:"audio",target:this})}}}catch(M){k.e(M)}finally{k.f()}this.document=this.rtf,e||document.getElementById("rtf"+this._uid).appendChild(this.rtf),this.$nextTick((function(){i.nodes=[1],i.$emit("load")})),setTimeout((function(){return i.showAm=""}),500),clearInterval(this._timer),this._timer=setInterval((function(){var t=[i.rtf.getBoundingClientRect()];i.width=t[0].width,t[0].height==w&&(i.$emit("ready",t[0]),clearInterval(i._timer)),w=t[0].height}),350),this.showWithAnimation&&!e&&(this.showAm="animation:show .5s")}else this.rtf&&!e&&this.rtf.parentNode.removeChild(this.rtf)},getText:function(){arguments.length>0&&void 0!==arguments[0]||this.nodes;return this.rtf.innerText},navigateTo:function(t){if(!this.useAnchor)return t.fail&&t.fail({errMsg:"Anchor is disabled"});if(!t.id)return window.scrollTo(0,this.rtf.offsetTop),t.success&&t.success({errMsg:"pageScrollTo:ok"});var e=document.getElementById(t.id);if(!e)return t.fail&&t.fail({errMsg:"Label not found"});t.scrollTop=this.rtf.offsetTop+e.offsetTop,uni.pageScrollTo(t)},getVideoContext:function(t){if(!t)return this.videoContexts;for(var e=this.videoContexts.length;e--;)if(this.videoContexts[e].id==t)return this.videoContexts[e]},preLoad:function preLoad(html,num){html.constructor==Array&&(html=this._Dom2Str(html));var script="var contain=document.createElement('div');contain.innerHTML='"+html.replace(/'/g,"\\'")+"';for(var imgs=contain.querySelectorAll('img'),i=imgs.length-1;i>="+num+";i--)imgs[i].removeAttribute('src');";eval(script)},_tap:function(t){if(this.gestureZoom&&t.timeStamp-this._lastT<300){var e=t.touches[0].pageY-t.currentTarget.offsetTop;if(this._zoom)this._scaleAm.translateX(0).scale(1).step(),uni.pageScrollTo({scrollTop:(e+this._initY)/2-t.touches[0].clientY,duration:400});else{var i=t.touches[0].pageX-t.currentTarget.offsetLeft;this._initY=e,this._scaleAm=uni.createAnimation({transformOrigin:"".concat(i,"px ").concat(this._initY,"px 0"),timingFunction:"ease-in-out"}),this._scaleAm.scale(2).step(),this._tMax=i/2,this._tMin=(i-this.width)/2,this._tX=0}this._zoom=!this._zoom,this.scaleAm=this._scaleAm.export()}this._lastT=t.timeStamp},_touchstart:function(t){1==t.touches.length&&(this._initX=this._lastX=t.touches[0].pageX)},_touchmove:function(t){var e=t.touches[0].pageX-this._lastX;if(this._zoom&&1==t.touches.length&&Math.abs(e)>20){if(this._lastX=t.touches[0].pageX,this._tX<=this._tMin&&e<0||this._tX>=this._tMax&&e>0)return;this._tX+=e*Math.abs(this._lastX-this._initX)*.05,this._tX<this._tMin&&(this._tX=this._tMin),this._tX>this._tMax&&(this._tX=this._tMax),this._scaleAm.translateX(this._tX).step(),this.scaleAm=this._scaleAm.export()}}}};exports.default=_default},"532d":function(t,e,i){"use strict";var r=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(i("7f3c")),a=i("b284"),o={components:{"jyf-parser":n.default},data:function(){return{tagStyle:{img:"width:100%;display:block;",table:"width:100%",video:"width:100%"},content:""}},onLoad:function(t){var e=this;(0,a.getUserAgreement)(t.type).then((function(t){e.content=t.data.content,uni.setNavigationBarTitle({title:t.data.title})})).catch((function(t){that.$util.Tips({title:t})}))}};e.default=o},"6f1e":function(t,e,i){"use strict";var r;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return r}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[t.nodes.length?t._e():t._t("default"),i("v-uni-view",{style:t.showAm+(t.selectable?";user-select:text;-webkit-user-select:text":""),attrs:{id:"top",animation:t.scaleAm},on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t._touchstart.apply(void 0,arguments)},touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t._touchmove.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t._tap.apply(void 0,arguments)}}},[i("div",{attrs:{id:"rtf"+t.uid}})])],2)},a=[]},"7f3c":function(t,e,i){"use strict";i.r(e);var r=i("6f1e"),n=i("97c9");for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("a681");var o,s=i("f0c5"),c=Object(s["a"])(n["default"],r["b"],r["c"],!1,null,"f0cc9922",null,!1,r["a"],o);e["default"]=c.exports},"89c1":function(t,e,i){var r=i("f14a");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=i("4f06").default;n("1cab5a14",r,!0,{sourceMap:!1,shadowMode:!1})},"89fd":function(t,e,i){var r=i("24fb");e=r(!1),e.push([t.i,"@-webkit-keyframes show-data-v-f0cc9922{0%{opacity:0}100%{opacity:1}}@keyframes show-data-v-f0cc9922{0%{opacity:0}100%{opacity:1}}\n\n\n\n",""]),t.exports=e},"97c9":function(t,e,i){"use strict";i.r(e);var r=i("50a7"),n=i.n(r);for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);e["default"]=n.a},"9f0f":function(t,e,i){function r(t){for(var e={},i=t.split(","),r=i.length;r--;)e[i[r]]=!0;return e}i("ac1f"),i("1276"),t.exports={filter:null,highlight:null,onText:null,blankChar:r(" , ,\t,\r,\n,\f"),blockTags:r("address,article,aside,body,caption,center,cite,footer,header,html,nav,section,pre"),ignoreTags:r("area,base,basefont,canvas,command,frame,input,isindex,keygen,link,map,meta,param,script,source,style,svg,textarea,title,track,use,wbr,embed,iframe"),richOnlyTags:r("a,colgroup,fieldset,legend,picture,table"),selfClosingTags:r("area,base,basefont,br,col,circle,ellipse,embed,frame,hr,img,input,isindex,keygen,line,link,meta,param,path,polygon,rect,source,track,use,wbr"),trustAttrs:r("align,alt,app-id,author,autoplay,border,cellpadding,cellspacing,class,color,colspan,controls,data-src,dir,face,height,href,id,ignore,loop,media,muted,name,path,poster,rowspan,size,span,src,start,style,type,unit-id,width,xmlns"),boolAttrs:r("autoplay,controls,ignore,loop,muted"),trustTags:r("a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video"),userAgentStyles:{address:"font-style:italic",big:"display:inline;font-size:1.2em",blockquote:"background-color:#f6f6f6;border-left:3px solid #dbdbdb;color:#6c6c6c;padding:5px 0 5px 10px",caption:"display:table-caption;text-align:center",center:"text-align:center",cite:"font-style:italic",dd:"margin-left:40px",img:"max-width:100%",mark:"background-color:yellow",picture:"max-width:100%",pre:"font-family:monospace;white-space:pre;overflow:scroll",s:"text-decoration:line-through",small:"display:inline;font-size:0.8em",u:"text-decoration:underline"}}},a681:function(t,e,i){"use strict";var r=i("2cea2"),n=i.n(r);n.a},b85c:function(t,e,i){"use strict";i("a4d3"),i("e01a"),i("d28b"),i("d3b7"),i("3ca3"),i("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var r=n(i("06c5"));function n(t){return t&&t.__esModule?t:{default:t}}function a(t,e){var i;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(i=(0,r.default)(t))||e&&t&&"number"===typeof t.length){i&&(t=i);var n=0,a=function(){};return{s:a,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,c=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return s=t.done,t},e:function(t){c=!0,o=t},f:function(){try{s||null==i["return"]||i["return"]()}finally{if(c)throw o}}}}},d1e1:function(t,e,i){"use strict";i.r(e);var r=i("d5d9"),n=i("11bf");for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("3139");var o,s=i("f0c5"),c=Object(s["a"])(n["default"],r["b"],r["c"],!1,null,"0b182b04",null,!1,r["a"],o);e["default"]=c.exports},d5d9:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return r}));var r={jyfParser:i("7f3c").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("jyf-parser",{ref:"article",attrs:{html:t.content,"tag-style":t.tagStyle}})],1)},a=[]},f14a:function(t,e,i){var r=i("24fb");e=r(!1),e.push([t.i,"uni-page-body[data-v-0b182b04]{background-color:#fff}.content[data-v-0b182b04]{padding:%?40?% %?30?%;line-height:2}body.?%PAGE?%[data-v-0b182b04]{background-color:#fff}",""]),t.exports=e}}]);