(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/customer_list/index"],{"0aab":function(t,e,n){"use strict";var o=n("743e"),r=n.n(o);r.a},"3c20":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("b284"),r=function(){Promise.all([n.e("common/vendor"),n.e("components/home/index")]).then(function(){return resolve(n("487b"))}.bind(null,n)).catch(n.oe)},u={name:"CustomerList",components:{home:r},data:function(){return{list:[],productId:0,orderId:""}},methods:{getList:function(){var t=this;(0,o.serviceList)().then((function(e){t.list=e.data}))},goPage:function(e){t.navigateTo({url:"/pages/customer_list/chat?uid="+e.uid+"&productId="+this.productId+"&orderId="+this.orderId})}},onLoad:function(t){this.getList(),t.productId&&(this.productId=t.productId),t.orderId&&(this.orderId=t.orderId)}};e.default=u}).call(this,n("543d")["default"])},"644f":function(t,e,n){"use strict";(function(t){n("8d15");o(n("66fd"));var e=o(n("71e1"));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},"71e1":function(t,e,n){"use strict";n.r(e);var o=n("89e4"),r=n("fb4f");for(var u in r)"default"!==u&&function(t){n.d(e,t,(function(){return r[t]}))}(u);n("0aab");var c,i=n("f0c5"),d=Object(i["a"])(r["default"],o["b"],o["c"],!1,null,"19bbe5d7",null,!1,o["a"],c);e["default"]=d.exports},"743e":function(t,e,n){},"89e4":function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return o}));var r=function(){var t=this,e=t.$createElement;t._self._c},u=[]},fb4f:function(t,e,n){"use strict";n.r(e);var o=n("3c20"),r=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,(function(){return o[t]}))}(u);e["default"]=r.a}},[["644f","common/runtime","common/vendor"]]]);