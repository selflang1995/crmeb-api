(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-payment_on_behalf-index"],{"0565":function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return r})),e.d(a,"a",(function(){return i}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"orderGoods"},[t.is_behalf?e("v-uni-view",{staticClass:"total"},[e("v-uni-text",[t._v("代付金额："),e("v-uni-text",{staticClass:"pay-price"},[t._v("¥"+t._s(t.pay_price))])],1)],1):t.split||t.is_behalf?t.split?e("v-uni-view",{staticClass:"total"},[e("v-uni-text",[t._v("订单包裹 "+t._s(t.index+1))]),-1===t.status_type?e("v-uni-view",{staticClass:"rig-btn"},[e("v-uni-view",{staticClass:"refund"},[t._v("申请退款中")])],1):-2===t.status_type?e("v-uni-view",{staticClass:"rig-btn"},[e("v-uni-view",{staticClass:"refund"},[t._v("已退款")])],1):4===t.status_type?e("v-uni-view",{staticClass:"rig-btn"},[e("v-uni-view",{staticClass:"done"},[t._v("已完成")])],1):t._e()],1):t._e():e("v-uni-view",{staticClass:"total"},[t._v("共 "+t._s(t.totalNmu)+" 件商品")]),e("v-uni-view",{staticClass:"goodWrapper"},t._l(t.cartInfo,(function(a,i){return e("v-uni-view",{key:i,class:{op:!a.is_valid},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.jumpCon(a.product_id)}}},[e("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[e("v-uni-view",{staticClass:"pictrue"},[a.productInfo.attrInfo?e("v-uni-image",{attrs:{src:a.productInfo.attrInfo.image}}):e("v-uni-image",{attrs:{src:a.productInfo.image}})],1),e("v-uni-view",{staticClass:"text"},[e("v-uni-view",{staticClass:"acea-row row-between-wrapper"},[e("v-uni-view",{staticClass:"name line1"},[t._v(t._s(a.productInfo.store_name))]),e("v-uni-view",{staticClass:"num"},[t._v("x "+t._s(a.cart_num))])],1),a.productInfo.attrInfo?e("v-uni-view",{staticClass:"attr line1"},[t._v(t._s(a.productInfo.attrInfo.suk))]):t._e(),a.productInfo.attrInfo?e("v-uni-view",{staticClass:"money font-color pic"},[e("v-uni-text",[t._v("￥"+t._s(a.productInfo.attrInfo.price))]),a.refund_num&&-2!=t.statusType?e("v-uni-view",{staticClass:"refund"},[t._v(t._s(a.refund_num)+"件退款中")]):t._e(),a.is_valid||0!==t.shipping_type?t._e():e("v-uni-text",{staticClass:"valid"},[t._v("不送达")]),a.productInfo.store_mention||1!==t.shipping_type?t._e():e("v-uni-text",{staticClass:"valid"},[t._v("不自提")])],1):e("v-uni-view",{staticClass:"money font-color pic"},[e("v-uni-text",[t._v("￥"+t._s(a.productInfo.price))]),a.is_valid||0!==t.shipping_type?t._e():e("v-uni-text",{staticClass:"valid"},[t._v("不送达")]),a.productInfo.store_mention||1!==t.shipping_type?t._e():e("v-uni-text",{staticClass:"valid"},[t._v("不自提")])],1)],1)],1),e("v-uni-view",{staticClass:"botton-btn"},[0==a.is_reply&&3==t.evaluate&&-1!=t.pid?e("v-uni-view",{staticClass:"logistics",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.evaluateTap(a.unique,t.orderId)}}},[t._v("评价")]):t._e(),1!==t.paid||0!==t.refund_status||a.refund_num==a.cart_num||t.is_confirm?t._e():e("v-uni-view",{staticClass:"logistics",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.openSubcribe(a)}}},[t._v("申请退款")]),2===t.status_type&&i===t.cartInfo.length-1||!t.split?e("v-uni-view",{staticClass:"rig-btn"},["express"===t.delivery_type?e("v-uni-view",{staticClass:"logistics",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.logistics(t.orderId)}}},[t._v("查看物流")]):t._e(),2===t.status_type?e("v-uni-view",{staticClass:"logistics sure",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.confirmOrder(t.orderId)}}},[t._v("确认收货")]):t._e()],1):t._e()],1)],1)})),1)],1)},r=[]},"0633":function(t,a,e){"use strict";(function(t){var i=e("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(e("9ace")),r=i(e("882e")),s=i(e("9cbc")),o=i(e("487b")),d=e("b284"),c=(e("1a4b"),e("1e55")),u=e("26cb"),l={mixins:[r.default],components:{orderGoods:n.default,payment:s.default,home:o.default},computed:(0,u.mapGetters)(["isLogin"]),data:function(){return{shareModal:!1,cartInfo:[],resData:{},payMode:[{name:"微信支付",icon:"icon-weixinzhifu",value:"weixin",title:"使用微信快捷支付",payStatus:!0}],pay_close:!1,order_id:""}},watch:{isLogin:{handler:function(t,a){1==t&&this.getDetail()},deep:!0}},onReady:function(){},onLoad:function(t){this.order_id=t.order_id},onShow:function(){this.isLogin?this.getDetail():(0,c.toLogin)()},methods:{payOpen:function(){this.pay_close=!0},getDetail:function(){var t=this;(0,d.friendDetail)(this.order_id).then((function(a){t.resData=a.data.info,t.resData.paid&&!t.resData.type&&t.goOrderDetail(),t.ShareInfo(t.resData)}))},ShareInfo:function(t){var a=location.href;if(this.$wechat.isWeixin()){var e={desc:"帮我付一下这件商品了，谢谢~",title:"好友代付",link:a,imgUrl:t.avatar};this.$wechat.wechatEvevt(["updateAppMessageShareData","updateTimelineShareData","onMenuShareAppMessage","onMenuShareTimeline"],e).then((function(t){})).catch((function(t){}))}},shareFriend:function(){this.shareModal=!0},onChangeFun:function(t){var a=t,e=a.action||null,i=void 0!=a.value?a.value:null;e&&this[e]&&this[e](i)},payClose:function(){this.pay_close=!1},pay_fail:function(){this.pay_close=!1},pay_complete:function(){this.pay_close=!1,this.getDetail(),uni.navigateTo({url:"/pages/users/payment_on_behalf/pay_status?order_id="+this.order_id})},goOrderDetail:function(){uni.navigateTo({url:"/pages/users/order_details/index?order_id="+this.order_id})}}};a.default=l}).call(this,e("5a52")["default"])},2545:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.main[data-v-33d9c3d8]{background-color:#f5f5f5}.main .head[data-v-33d9c3d8]{background-color:var(--view-theme);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:%?60?% 0 %?62?% 0}.main .head .user-img uni-image[data-v-33d9c3d8]{width:%?68?%;height:%?68?%;border-radius:50%}.main .head .order-status[data-v-33d9c3d8]{margin-top:%?20?%;font-size:%?28?%;color:#fff}.main .head-other[data-v-33d9c3d8]{background-color:var(--view-theme);display:flex;align-items:center;padding:%?60?% 0 %?60?% %?30?%}.main .head-other .user-img[data-v-33d9c3d8]{display:flex;align-items:center}.main .head-other .user-img uni-image[data-v-33d9c3d8]{width:%?100?%;height:%?100?%;border-radius:50%}.main .head-other .order-status[data-v-33d9c3d8]{margin-left:%?20?%;color:#fff;display:flex;flex-direction:column;justify-content:space-between;height:%?100?%;position:relative}.main .head-other .order-status .head-other-nickname[data-v-33d9c3d8]{font-size:%?28?%}.main .head-other .order-status .head-other-trip[data-v-33d9c3d8]{padding:%?6?% %?13?%;font-size:%?26?%;background-color:hsla(0,0%,100%,.2);border-radius:%?6?%}.main .head-other .order-status .head-other-trip[data-v-33d9c3d8]::after{content:"";width:%?0?%;height:%?0?%;border:%?10?% solid hsla(0,0%,100%,.2);border-bottom:%?10?% solid transparent;border-left:%?10?% solid transparent;border-top:%?10?% solid transparent;position:absolute;left:%?-20?%;bottom:%?15?%}.main .order-msg[data-v-33d9c3d8]{background-color:#fff;border-radius:%?14?% %?14?% 0 0;display:flex;flex-direction:column;align-items:center;padding:%?40?% 0;margin:%?-30?% %?30?% 0 %?30?%}.main .order-msg .pay--box[data-v-33d9c3d8]{text-align:center}.main .order-msg .pay-success[data-v-33d9c3d8]{font-size:%?30?%;color:#333;font-weight:700}.main .order-msg .order-num[data-v-33d9c3d8]{font-size:%?66?%;color:#333;font-weight:700}.main .order-msg .order-num .icon[data-v-33d9c3d8]{font-size:%?30?%}.main .order-msg .order-btn[data-v-33d9c3d8]{width:90%;background-color:var(--view-theme);border-radius:%?80?%;padding:%?26?% 0;color:#fff;font-size:%?30?%;text-align:center;margin-top:%?60?%}.main .order-msg .order-btn.detail[data-v-33d9c3d8]{margin-top:%?20?%;color:var(--view-theme);background-color:#fff;border:1px solid var(--view-theme)}.main .order-msg .order-btn.on-pay[data-v-33d9c3d8]{background-color:#ccc}.main .order-msg .order-trip[data-v-33d9c3d8]{color:#999;font-size:%?26?%;margin-top:%?32?%}.main .order-list[data-v-33d9c3d8]{margin:%?30?%;border-radius:%?14?%;overflow:hidden}.main .order-list .orderGoods[data-v-33d9c3d8]{margin-top:0}.main .share-box[data-v-33d9c3d8]{z-index:1000;position:fixed;left:0;top:0;width:100%;height:100%}.main .share-box uni-image[data-v-33d9c3d8]{width:100%;height:100%}',""]),t.exports=a},2553:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.fontcolor[data-v-d1a5db94]{color:#e93323}.orderGoods[data-v-d1a5db94]{background-color:#fff}.orderGoods .total[data-v-d1a5db94]{display:flex;justify-content:space-between;align-items:center;width:100%;padding:0 %?30?%;border-bottom:%?2?% solid #f0f0f0;font-size:%?30?%;color:#282828;line-height:%?86?%;box-sizing:border-box}.botton-btn[data-v-d1a5db94]{display:flex;align-items:right;justify-content:flex-end;padding:%?0?% %?20?% %?20?% %?20?%}.rig-btn[data-v-d1a5db94]{display:flex;align-items:center}.rig-btn .refund[data-v-d1a5db94]{font-size:%?26?%;color:#e93323}.rig-btn .done[data-v-d1a5db94]{font-size:%?26?%;color:#f19d2f}.logistics[data-v-d1a5db94]{line-height:%?30?%;color:#666;font-size:%?20?%;border:1px solid #ccc;border-radius:%?30?%;padding:%?8?% %?22?%;margin-left:%?10?%}.sure[data-v-d1a5db94]{color:#e93323;border:1px solid #e93323}.more-operation[data-v-d1a5db94]{display:flex;justify-content:center;align-items:center;padding:%?10?% 0;color:#bbb}.b-top[data-v-d1a5db94]{margin-left:%?30?%;margin-right:%?30?%;border-top:1px solid #f0f0f0}.fade-enter-active[data-v-d1a5db94],\n.fade-leave-active[data-v-d1a5db94]{transition:all .1s}.fade-enter[data-v-d1a5db94],\n.fade-leave-to[data-v-d1a5db94]{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}.op[data-v-d1a5db94]{opacity:.5}.pic[data-v-d1a5db94]{display:flex;justify-content:space-between}.valid[data-v-d1a5db94]{margin-left:%?20?%;font-size:%?24?%}.pay-price[data-v-d1a5db94]{color:#e93323}.refund[data-v-d1a5db94]{text-align:right;font-size:%?26?%;color:var(--view-theme)}',""]),t.exports=a},2798:function(t,a,e){var i=e("2545");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("0665e724",i,!0,{sourceMap:!1,shadowMode:!1})},"4e1b":function(t,a,e){"use strict";e.r(a);var i=e("ceee"),n=e.n(i);for(var r in i)"default"!==r&&function(t){e.d(a,t,(function(){return i[t]}))}(r);a["default"]=n.a},"57e2":function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return r})),e.d(a,"a",(function(){return i}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"main",style:t.colorStyle},[t.resData.type||t.resData.paid?e("v-uni-view",{staticClass:"head-other"},[e("v-uni-view",{staticClass:"user-img"},[e("v-uni-image",{attrs:{src:t.resData.paid&&!t.resData.type&&t.resData.pay_uid===t.$store.state.app.uid?t.resData.pay_avatar:t.resData.avatar,mode:""}})],1),e("v-uni-view",{staticClass:"order-status"},[e("v-uni-view",{staticClass:"head-other-nickname"},[t._v(t._s(t.resData.paid&&!t.resData.type&&t.resData.pay_uid===t.$store.state.app.uid?t.resData.pay_nickname:t.resData.nickname))]),!t.resData.paid&&t.resData.type?e("v-uni-view",{staticClass:"head-other-trip"},[t._v("帮我付一下这件商品了，谢谢~")]):t._e(),t.resData.pay_uid!==t.$store.state.app.uid&&t.resData.paid&&t.resData.type?e("v-uni-view",{staticClass:"head-other-trip"},[t._v("已经有人替我代付，谢谢啦~")]):t._e(),t.resData.pay_uid===t.$store.state.app.uid&&t.resData.paid&&t.resData.type?e("v-uni-view",{staticClass:"head-other-trip"},[t._v("谢谢你帮我支付，么么哒~")]):t._e(),t.resData.pay_uid!==t.resData.uid&&t.resData.paid&&!t.resData.type?e("v-uni-view",{staticClass:"head-other-trip"},[t._v("我已为你代付成功，商家正在努力发货中~")]):t._e()],1)],1):e("v-uni-view",{staticClass:"head"},[e("v-uni-view",{staticClass:"user-img"},[e("v-uni-image",{attrs:{src:t.resData.avatar,mode:""}})],1),t.resData.paid||t.resData.type?t._e():e("v-uni-view",{staticClass:"order-status"},[t._v("代付订单创建成功，发给好友帮你付款吧~")])],1),e("v-uni-view",{staticClass:"order-msg"},[t.resData.paid&&!t.resData.type?e("v-uni-view",{staticClass:"pay-success"},[t._v("好友代付成功，商家正在努力发货中~")]):e("v-uni-view",{staticClass:"pay--box"},[e("v-uni-view",{staticClass:"order-top"},[t._v("代付金额")]),e("v-uni-view",{staticClass:"order-num"},[e("v-uni-text",{staticClass:"icon"},[t._v("¥")]),t._v(t._s(t.resData.pay_price))],1)],1),t.resData.paid||t.resData.type?t._e():e("v-uni-view",{staticClass:"order-btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.shareFriend.apply(void 0,arguments)}}},[t._v("发送给微信好友")]),t.resData.paid||t.resData.type?t._e():e("v-uni-button",{staticClass:"order-btn detail",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.goOrderDetail()}}},[t._v("查看订单详情")]),!t.resData.paid&&t.resData.type?e("v-uni-button",{staticClass:"order-btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.payOpen()}}},[t._v("立即付款")]):t._e(),t.resData.paid&&t.resData.type?e("v-uni-button",{staticClass:"order-btn on-pay"},[t._v("订单已支付")]):t._e(),t.resData.paid&&!t.resData.type?e("v-uni-button",{staticClass:"order-btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.goOrderDetail()}}},[t._v("查看订单详情")]):t._e(),t.resData.pay_uid===t.$store.state.app.uid&&t.resData.type?e("v-uni-view",{staticClass:"order-trip"},[t._v("如果订单申请退款，已支付金额将原路退还给您")]):t._e()],1),e("v-uni-view",{staticClass:"order-list"},[e("orderGoods",{attrs:{cartInfo:t.resData.cartInfo,is_confirm:!0,pay_price:t.resData.pay_price,is_behalf:!(!t.resData.paid||t.resData.type)}})],1),t.shareModal?e("v-uni-view",{staticClass:"share-box"},[e("v-uni-image",{attrs:{src:"/static/images/share-info2.png"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.shareModal=!1}}})],1):t._e(),e("payment",{attrs:{payMode:t.payMode,pay_close:t.pay_close,friendPay:!0,order_id:t.order_id,totalPrice:t.resData.pay_price},on:{onChangeFun:function(a){arguments[0]=a=t.$handleEvent(a),t.onChangeFun.apply(void 0,arguments)}}}),e("home")],1)},r=[]},"5e1e":function(t,a,e){"use strict";var i=e("2798"),n=e.n(i);n.a},"9ace":function(t,a,e){"use strict";e.r(a);var i=e("0565"),n=e("4e1b");for(var r in n)"default"!==r&&function(t){e.d(a,t,(function(){return n[t]}))}(r);e("c481");var s,o=e("f0c5"),d=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"d1a5db94",null,!1,i["a"],s);a["default"]=d.exports},b8e4:function(t,a,e){"use strict";e.r(a);var i=e("0633"),n=e.n(i);for(var r in i)"default"!==r&&function(t){e.d(a,t,(function(){return i[t]}))}(r);a["default"]=n.a},c481:function(t,a,e){"use strict";var i=e("d296"),n=e.n(i);n.a},ceee:function(t,a,e){"use strict";(function(t){e("99af"),e("4160"),e("a9e3"),e("159b"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={props:{statusType:{type:Number,default:0},evaluate:{type:Number,default:0},oid:{type:Number,default:0},paid:{type:Number,default:0},cartInfo:{type:Array,default:function(){return[]}},orderId:{type:String,default:""},shipping_type:{type:Number,default:-1},delivery_type:{type:String,default:""},pay_price:{type:String,default:""},jump:{type:Boolean,default:!1},is_confirm:{type:Boolean,default:!1},is_behalf:{type:Boolean,default:!1},split:{type:Boolean,default:!1},jumpDetail:{type:Boolean,default:!1},index:{type:Number,default:0},pid:{type:Number,default:0},refund_status:{type:Number,default:0},status_type:{type:Number,default:0}},data:function(){return{totalNmu:0,operationModel:!1,status:""}},watch:{cartInfo:function(t,a){var e=0;t.forEach((function(t,a){e+=t.cart_num})),this.totalNmu=e}},mounted:function(){var t=this,a=0;this.$nextTick((function(){t.cartInfo.forEach((function(t,e){a+=t.cart_num})),t.$set(t,"totalNmu",a)}))},methods:{evaluateTap:function(t,a){uni.navigateTo({url:"/pages/users/goods_comment_con/index?unique="+t+"&uni="+a})},jumpCon:function(t){this.jump?uni.navigateTo({url:"/pages/goods_details/index?id=".concat(t)}):this.jumpDetail&&uni.navigateTo({url:"/pages/users/order_details/index?order_id=".concat(this.orderId)})},logistics:function(t){uni.navigateTo({url:"/pages/users/goods_logistics/index?orderId="+t})},confirmOrder:function(t){this.$emit("confirmOrder",t)},changeOperation:function(){this.operationModel=!this.operationModel},openSubcribe:function(t){var a=[];a.push({cart_id:t.id,cart_num:t.surplus_refund_num});var e=JSON.stringify(a);this.$emit("openSubcribe","/pages/users/goods_return/index?orderId=".concat(this.orderId,"&id=").concat(this.oid,"&cartIds=").concat(e))}}};a.default=i}).call(this,e("5a52")["default"])},d296:function(t,a,e){var i=e("2553");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("2bf6f0f2",i,!0,{sourceMap:!1,shadowMode:!1})},e5d6:function(t,a,e){"use strict";e.r(a);var i=e("57e2"),n=e("b8e4");for(var r in n)"default"!==r&&function(t){e.d(a,t,(function(){return n[t]}))}(r);e("5e1e");var s,o=e("f0c5"),d=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"33d9c3d8",null,!1,i["a"],s);a["default"]=d.exports}}]);