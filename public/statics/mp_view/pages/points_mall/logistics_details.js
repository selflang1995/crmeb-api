(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/points_mall/logistics_details"],{"0804":function(t,e,n){"use strict";var o=n("a8b7"),r=n.n(o);r.a},"090b":function(t,e,n){"use strict";(function(t){n("8d15");o(n("66fd"));var e=o(n("351c"));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},"351c":function(t,e,n){"use strict";n.r(e);var o=n("8909"),r=n("8154");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("0804");var u,c=n("f0c5"),s=Object(c["a"])(r["default"],o["b"],o["c"],!1,null,"08ae9fc2",null,!1,o["a"],u);e["default"]=s.exports},8154:function(t,e,n){"use strict";n.r(e);var o=n("c9c2"),r=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=r.a},8909:function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}));var r=function(){var t=this,e=t.$createElement;t._self._c},i=[]},a8b7:function(t,e,n){},c9c2:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("83b5"),r=n("e751"),i=(s(n("049b")),n("1e55")),u=n("26cb"),c=s(n("882e"));function s(t){return t&&t.__esModule?t:{default:t}}var a=function(){Promise.all([n.e("common/vendor"),n.e("components/recommend/index")]).then(function(){return resolve(n("2661"))}.bind(null,n)).catch(n.oe)},d=function(){n.e("components/Authorize").then(function(){return resolve(n("5e32"))}.bind(null,n)).catch(n.oe)},f={components:{recommend:a,authorize:d},mixins:[c.default],data:function(){return{orderId:"",product:{productInfo:{}},orderInfo:{},expressList:[],hostProduct:[]}},computed:(0,u.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,e){t&&(this.getExpress(),this.get_host_product())},deep:!0}},onLoad:function(t){if(!t.order_id)return this.$util.Tips({title:"缺少订单号"});this.orderId=t.order_id,this.isLogin?(this.getExpress(),this.get_host_product()):(0,i.toLogin)()},onReady:function(){},methods:{onLoadFun:function(){this.getExpress(),this.get_host_product()},copyOrderId:function(){t.setClipboardData({data:this.orderInfo.delivery_id})},getExpress:function(){var t=this,e=this;(0,r.getLogisticsDetails)(e.orderId).then((function(t){var n=t.data.express.result||{};e.$set(e,"orderInfo",t.data.order),e.$set(e,"expressList",n.list||[])})).catch((function(e){t.$util.Tips({title:e})}))},get_host_product:function(){var t=this;(0,o.getProductHot)().then((function(e){t.$set(t,"hostProduct",e.data)}))}}};e.default=f}).call(this,n("543d")["default"])}},[["090b","common/runtime","common/vendor"]]]);