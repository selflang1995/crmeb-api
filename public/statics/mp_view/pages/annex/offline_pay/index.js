(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/annex/offline_pay/index"],{"455b":function(t,e,n){},"4d64":function(t,e,n){"use strict";(function(t){n("8d15");i(n("66fd"));var e=i(n("610c"));function i(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},"610c":function(t,e,n){"use strict";n.r(e);var i=n("7f32"),a=n("f2f6");for(var c in a)"default"!==c&&function(t){n.d(e,t,(function(){return a[t]}))}(c);n("acab"),n("ce22");var o,s=n("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"55d3ccfe",null,!1,i["a"],o);e["default"]=u.exports},"7f32":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement;t._self._c},c=[]},acab:function(t,e,n){"use strict";var i=n("b44f"),a=n.n(i);a.a},b44f:function(t,e,n){},ce22:function(t,e,n){"use strict";var i=n("455b"),a=n.n(i);a.a},f2f6:function(t,e,n){"use strict";n.r(e);var i=n("f5ed"),a=n.n(i);for(var c in i)"default"!==c&&function(t){n.d(e,t,(function(){return i[t]}))}(c);e["default"]=a.a},f5ed:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("331f"),a=n("1e55"),c=n("26cb"),o=(getApp(),{data:function(){return{money:"",payPrice:"",payType:"weixin",alipayHtml:"",alipay:!1,wxpay:!1,yuePay:!1,paying:!1,now_money:0,isWeixin:!1,site_name:"",isCommitted:!1}},watch:{money:function(t,e){t&&"number"===typeof t?this.checkPrice():this.payPrice=""}},computed:(0,c.mapGetters)(["isLogin"]),onLoad:function(t){this.isLogin||(0,a.toLogin)()},onShow:function(){this.isLogin&&this.getPayType()},methods:{inputChange:function(t){var e=this;t.target.value=t.target.value.match(/^\d*(.?\d{0,2})/g)[0]||"",this.$nextTick((function(){e.money=t.target.value,e.checkPrice()}))},getPayType:function(){var e=this;(0,i.orderOfflinePayType)().then((function(n){var i=n.data,a=i.ali_pay_status,c=i.pay_weixin_open,o=i.yue_pay_status,s=i.offline_pay_status,u=i.site_name,r=i.now_money;e.alipay="1"===a,e.wxpay=1===c,e.yuePay=1===o,e.now_money=r,e.site_name=u,s||t.showModal({title:"支付提醒",content:"线下支付已关闭，请点击确认按钮返回主页",showCancel:!1,success:function(){t.switchTab({url:"/pages/index/index"})}}),u&&t.setNavigationBarTitle({title:u})})).catch((function(e){t.showToast({title:e,icon:"none"})}))},checkForm:function(e){var n=e.detail.value,i=n.money,a=n.method;i?this.combData(a):t.showToast({title:"请输入支付金额",icon:"none"})},checkPrice:function(){var e=this;(0,i.offlineCheckPrice)({pay_price:this.money}).then((function(t){e.payPrice=t.data.pay_price})).catch((function(e){t.showToast({title:e,icon:"none"})}))},combData:function(e){var n=this,a={type:3,pay_type:e,from:"weixinh5",price:this.payPrice||this.money,money:this.money};a.from="routine",this.paying||(this.paying=!0,t.showLoading({title:"正在确认…"}),(0,i.offlineCreate)(a).then((function(e){t.hideLoading(),n.callPay(e)})).catch((function(e){n.paying=!1,t.showToast({title:e,icon:"none"})})))},callPay:function(e){var n=e.data,i=n.status,a=n.result,c=a.orderId,o=a.jsConfig,s="/pages/annex/offline_result/index?site_name="+this.site_name;switch(i){case"ORDER_EXIST":case"EXTEND_ORDER":case"PAY_ERROR":this.paying=!1,this.$util.Tips({title:e.msg},{tab:5,url:s});break;case"SUCCESS":this.paying=!1,this.money="",this.$util.Tips({title:e.msg,icon:"success"},{tab:5,url:s});break;case"WECHAT_PAY":var u=this;t.requestPayment({timeStamp:o.timestamp,nonceStr:o.nonceStr,package:o.package,signType:o.signType,paySign:o.paySign,success:function(t){u.$util.Tips({title:"支付成功",icon:"success"},{tab:5,url:"/pages/annex/offline_result/index"})},fail:function(){t.showToast({title:"取消支付",icon:"none",success:function(){u.paying=!1}})},complete:function(){u.paying=!1,t.hideLoading()}});break;case"PAY_DEFICIENCY":this.paying=!1,this.$util.Tips({title:e.msg});break;case"WECHAT_H5_PAY":this.paying=!1,t.showToast({title:e.msg,success:function(){location.href=o.mweb_url}});break;case"ALIPAY_PAY":this.paying=!1,t.navigateTo({url:"/pages/users/alipay_invoke/index?id=".concat(c,"&link=").concat(o.qrCode)});break}}}});e.default=o}).call(this,n("543d")["default"])}},[["4d64","common/runtime","common/vendor"]]]);