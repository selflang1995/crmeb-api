(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d7dcca3"],{"3b2b":function(e,t,r){var i=r("7726"),a=r("5dbc"),s=r("86cc").f,n=r("9093").f,o=r("aae3"),c=r("0bfb"),p=i.RegExp,d=p,l=p.prototype,m=/a/g,u=/a/g,v=new p(m)!==m;if(r("9e1e")&&(!v||r("79e5")((function(){return u[r("2b4c")("match")]=!1,p(m)!=m||p(u)==u||"/a/i"!=p(m,"i")})))){p=function(e,t){var r=this instanceof p,i=o(e),s=void 0===t;return!r&&i&&e.constructor===p&&s?e:a(v?new d(i&&!s?e.source:e,t):d((i=e instanceof p)?e.source:e,i&&s?c.call(e):t),r?this:l,p)};for(var x=function(e){e in p||s(p,e,{configurable:!0,get:function(){return d[e]},set:function(t){d[e]=t}})},_=n(d),f=0;_.length>f;)x(_[f++]);l.constructor=p,p.prototype=l,r("2aba")(i,"RegExp",p)}r("7a56")("RegExp")},"61f7":function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"c",(function(){return d})),r.d(t,"b",(function(){return l}));r("8e6e"),r("ac6a"),r("456d");var i=r("bd86");r("6b54"),r("3b2b"),r("a481");function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){Object(i["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function n(e,t){/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length)));var r={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds()};for(var i in r)if(new RegExp("(".concat(i,")")).test(t)){var a=r[i]+"";t=t.replace(RegExp.$1,1===RegExp.$1.length?a:o(a))}return t}function o(e){return("00"+e).substr(e.length)}var c={min:"%s最小长度为:min",max:"%s最大长度为:max",length:"%s长度必须为:length",range:"%s长度为:range",pattern:"$s格式错误"};var p=function(e,t){e.message=function(e){return t.replace("%s",e||"")}};function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return s({required:!0,message:e,type:"string"},t)}function l(e){return m.pattern(/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/,e)}p(d,"请输入%s"),p(l,"%s格式不正确");var m=Object.keys(c).reduce((function(e,t){return e[t]=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n="range"===t?{min:e[0],max:e[1]}:Object(i["a"])({},t,e);return s(s({message:r.replace(":".concat(t),"range"===t?"".concat(e[0],"-").concat(e[1]):e),type:"string"},n),a)},p(e[t],c[t]),e}),{})},"7bd2":function(e,t,r){},afa3:function(e,t,r){e.exports=r.p+"img/line.05bf1c84.jpg"},c2ed:function(e,t,r){"use strict";var i=r("7bd2"),a=r.n(i);a.a},c7b8:function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.delivery?r("div",{staticClass:"deliver-goods"},[r("header",[r("div",{staticClass:"order-num acea-row row-between-wrapper"},[r("div",{staticClass:"num line1"},[e._v("订单号："+e._s(e.orderId))]),r("div",{staticClass:"name line1"},[r("span",{staticClass:"iconfontYI icon-yonghu2"}),e._v(e._s(e.delivery.userInfo?e.delivery.userInfo.nickname:"")+"\n            ")])]),r("div",{staticClass:"address"},[r("div",{staticClass:"name"},[e._v("\n                "+e._s(e.delivery.orderInfo.real_name)),r("span",{staticClass:"phone"},[e._v(e._s(e.delivery.orderInfo.phone))])]),r("div",[e._v(e._s(e.delivery.orderInfo.user_address))])]),e._m(0)]),r("div",{staticClass:"wrapper"},[r("div",{staticClass:"item acea-row row-between-wrapper"},[r("div",[e._v("发货方式")]),r("div",{staticClass:"mode acea-row row-middle row-right"},e._l(e.types,(function(t,i){return r("div",{key:i,staticClass:"goods",class:e.active===i?"on":"",on:{click:function(r){return e.changeType(t,i)}}},[e._v("\n                    "+e._s(t.title)),r("span",{staticClass:"iconfontYI icon-xuanzhong2"})])})),0)]),0===e.active?r("div",{staticClass:"item acea-row row-between-wrapper"},[r("div",[e._v("发货类型")]),r("div",{staticClass:"mode acea-row row-middle row-right"},e._l(e.expressType,(function(t,i){return r("div",{key:i,staticClass:"goods",class:e.activeExpTpe===i?"on":"",on:{click:function(r){return e.changeExpTpe(t,i)}}},[e._v("\n                    "+e._s(t.title)),r("span",{staticClass:"iconfontYI icon-xuanzhong2"})])})),0)]):e._e(),0===e.active?r("div",{staticClass:"list"},[r("div",{staticClass:"item acea-row row-between-wrapper"},[r("div",[e._v("快递公司")]),r("span",{staticClass:"checkName",domProps:{textContent:e._s(e.expFrom.delivery_name)},on:{click:e.show}}),r("vue-pickers",{attrs:{data:e.pickData,showToolbar:!0,maskClick:!0,defaultIndex:0,visible:e.pickerVisible},on:{cancel:e.cancel,confirm:e.confirm,"update:visible":function(t){e.pickerVisible=t}}})],1),1===e.expFrom.express_record_type?r("div",{staticClass:"item acea-row row-between-wrapper"},[r("div",[e._v("快递单号")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.expFrom.delivery_id,expression:"expFrom.delivery_id"}],staticClass:"mode input-input",attrs:{type:"text",placeholder:"填写快递单号"},domProps:{value:e.expFrom.delivery_id},on:{input:function(t){t.target.composing||e.$set(e.expFrom,"delivery_id",t.target.value)}}})]):e._e(),1===e.expFrom.express_record_type?r("div",{staticClass:"item acea-row row-between-wrapper"},[r("div",{staticClass:"tip"},[e._v("顺丰请输入单号：收件人或寄件人手机号后四位,")]),r("div",{staticClass:"tip"},[e._v("例如：SF000000000000:3941")])]):e._e()]):e._e(),e.expTemp.length&&0===e.active?r("div",{staticClass:"list"},[r("div",{staticClass:"item acea-row row-between-wrapper"},[r("div",[e._v("电子面单")]),r("div",{staticClass:"acea-row"},[r("span",{staticClass:"checkName",domProps:{textContent:e._s(e.expFrom.delivery_name)},on:{click:e.showExpTemp}}),r("vue-pickers",{attrs:{data:e.expTempData,showToolbar:!0,maskClick:!0,defaultIndex:0,visible:e.pickerVisibleExpTemp},on:{confirm:e.confirmExpTemp,"update:visible":function(t){e.pickerVisibleExpTemp=t}}}),r("div",{staticClass:"look"},[r("span",[e._v("预览")]),r("viewer",{ref:"viewer",staticClass:"viewer"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.tempImg,expression:"tempImg"}],staticClass:"image"})])],1)],1)])]):e._e(),2===e.expFrom.express_record_type&&0===e.active?r("div",{staticClass:"list"},[r("div",{staticClass:"item acea-row row-between-wrapper"},[r("div",[e._v("寄件人姓名")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.expFrom.to_name,expression:"expFrom.to_name"}],staticClass:"mode input-input",attrs:{type:"text",placeholder:"填写寄件人姓名"},domProps:{value:e.expFrom.to_name},on:{input:function(t){t.target.composing||e.$set(e.expFrom,"to_name",t.target.value)}}})]),r("div",{staticClass:"item acea-row row-between-wrapper"},[r("div",[e._v("寄件人电话")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.expFrom.to_tel,expression:"expFrom.to_tel"}],staticClass:"mode input-input",attrs:{type:"text",placeholder:"填写寄件人电话"},domProps:{value:e.expFrom.to_tel},on:{input:function(t){t.target.composing||e.$set(e.expFrom,"to_tel",t.target.value)}}})]),r("div",{staticClass:"item acea-row row-between-wrapper"},[r("div",[e._v("寄件人地址")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.expFrom.to_addr,expression:"expFrom.to_addr"}],staticClass:"mode input-input",attrs:{type:"text",placeholder:"填写寄件人地址"},domProps:{value:e.expFrom.to_addr},on:{input:function(t){t.target.composing||e.$set(e.expFrom,"to_addr",t.target.value)}}})])]):e._e(),1===e.active?r("div",{staticClass:"list"},[r("div",{staticClass:"item acea-row row-between-wrapper"},[r("div",[e._v("送货人")]),r("span",{staticClass:"checkName",domProps:{textContent:e._s(e.expFrom.sh_delivery_name)},on:{click:e.showName}}),r("vue-pickers",{attrs:{data:e.deliveryList,showToolbar:!0,maskClick:!0,defaultIndex:0,visible:e.pickerVisibleName},on:{confirm:e.confirmName,"update:visible":function(t){e.pickerVisibleName=t}}})],1),r("div",{staticClass:"item acea-row row-between-wrapper"},[r("div",[e._v("送货人电话")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.expFrom.sh_delivery_id,expression:"expFrom.sh_delivery_id"}],staticClass:"mode input-input",attrs:{type:"text",placeholder:"填写送货人电话"},domProps:{value:e.expFrom.sh_delivery_id},on:{input:function(t){t.target.composing||e.$set(e.expFrom,"sh_delivery_id",t.target.value)}}})])]):e._e(),2===e.active?r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.expFrom.fictitious_content,expression:"expFrom.fictitious_content"}],staticClass:"textarea",attrs:{placeholder:"备注",maxlength:500},domProps:{value:e.expFrom.fictitious_content},on:{input:function(t){t.target.composing||e.$set(e.expFrom,"fictitious_content",t.target.value)}}}):e._e()]),r("div",{staticStyle:{height:"1.2rem"}}),r("div",{staticClass:"confirm",on:{click:e.saveInfo}},[e._v("确认提交")])]):e._e()},a=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"line"},[i("img",{attrs:{src:r("afa3")}})])}],s=(r("96cf"),r("3b8d")),n=(r("f8b7"),r("42e3")),o=r("61f7"),c=r("69ae"),p=r("161e"),d=r.n(p),l={name:"GoodsDeliver",components:{vuePickers:d.a},props:{},data:function(){return{pickerVisible:!1,types:[{type:1,title:"发货"},{type:2,title:"送货"},{type:3,title:"无需发货"}],expressType:[{title:"手动填写",key:1},{title:"电子面单打印",key:2}],active:0,activeExpTpe:0,orderId:"",delivery:null,pickData:[],type:"1",result:{},expFrom:{type:1,delivery_name:"",delivery_id:"",delivery_code:"",express_record_type:1,express_temp_id:"",to_name:"",to_tel:"",to_addr:"",sh_delivery_name:"",sh_delivery_id:"",sh_delivery_uid:"",fictitious_content:""},expTemp:[],pickerVisibleName:!1,pickerVisibleExpTemp:!1,expTempData:[],tempName:"",tempImg:"",deliveryList:[]}},watch:{"$route.params.orderId":function(e){var t=this;void 0!=e&&(t.orderId=e,t.getIndex())}},created:function(){},mounted:function(){this.orderId=this.$route.params.orderId,this.getIndex(),this.getLogistics()},methods:{showName:function(){this.pickerVisibleName=!0},getDelivery:function(){var e=this;Object(n["r"])().then((function(t){var r=[];t.data.map((function(e){r.push({label:e.nickname,value:e.uid,phone:e.phone})})),e.deliveryList=[r],e.expFrom.sh_delivery_name=r[0].label,e.expFrom.sh_delivery_id=r[0].phone,e.expFrom.sh_delivery_uid=r[0].value,2===e.expFrom.express_record_type&&e.getTemp()}))},confirmName:function(e){this.expFrom.sh_delivery_name=e[0].label,this.expFrom.sh_delivery_id=e[0].phone,this.expFrom.sh_delivery_uid=e[0].value},orderDeliveryInfo:function(){var e=this;Object(n["m"])().then((function(t){e.expFrom.to_name=t.data.to_name,e.expFrom.to_tel=t.data.to_tel,e.expFrom.to_addr=t.data.to_add}))},cancel:function(){},changeExpTpe:function(e,t){this.expFrom.express_record_type=e.key,this.activeExpTpe=t,2===e.key?(this.orderDeliveryInfo(),this.getTemp()):this.expTemp=[]},getTemp:function(){var e=this;Object(n["y"])({com:this.expFrom.delivery_code}).then((function(t){e.expTemp=t.data.data;var r=[];e.expTemp.length&&(e.expTemp.map((function(e){r.push({label:e.title,value:e.temp_id,id:e.id,pic:e.pic,code:e.code})})),e.expTempData=[r],e.expFrom.express_temp_id=r[0].value,e.tempName=r[0].label,e.tempImg=r[0].pic)}))},confirmExpTemp:function(e){this.expFrom.express_temp_id=e[0].value,this.tempName=e[0].label,this.tempImg=e[0].pic},confirm:function(e){this.expFrom.delivery_name=e[0].label,this.expFrom.delivery_code=e[0].value,2===this.expFrom.express_record_type&&this.getTemp()},show:function(){this.pickerVisible=!0},showExpTemp:function(){this.pickerVisibleExpTemp=!0},changeType:function(e,t){this.active=t,this.expFrom.type=e.type,1===t&&this.getDelivery()},getIndex:function(){var e=this;Object(n["u"])(this.$route.params.id).then((function(t){e.delivery=t.data})).catch((function(t){e.$dialog.error(t.msg)}))},getLogistics:function(){var e=this;Object(n["t"])().then(function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(r){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:i=[],r.data.map((function(e){i.push({label:e.value,value:e.code,id:e.id})})),e.pickData=[i],e.expFrom.delivery_name=i[0].label,e.expFrom.delivery_code=i[0].value,2===e.expFrom.express_record_type&&e.getTemp();case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},saveInfo:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=this,r=t.type,i={},e.t0=r,e.next="1"===e.t0?4:"2"===e.t0?12:"3"===e.t0?24:26;break;case 4:if(1!==this.expFrom.type||t.expFrom.delivery_name){e.next=6;break}return e.abrupt("return",t.$dialog.error("请输入快递公司"));case 6:if(1!==this.expFrom.type||1!==this.expFrom.express_record_type||t.expFrom.delivery_id){e.next=8;break}return e.abrupt("return",t.$dialog.error("请输入快递单号"));case 8:if(1!==this.expFrom.type||t.expFrom.express_temp_id||2!==this.expFrom.express_record_type){e.next=10;break}return e.abrupt("return",t.$dialog.error("请选择电子面单"));case 10:return t.setInfo(t.expFrom),e.abrupt("break",26);case 12:return e.prev=12,e.next=15,this.$validator({expressId:[Object(o["c"])(o["c"].message("发货人姓名"))],expressCode:[Object(o["c"])(o["c"].message("发货人电话"))]}).validate({expressId:expressId,expressCode:expressCode});case 15:e.next=20;break;case 17:return e.prev=17,e.t1=e["catch"](12),e.abrupt("return",Object(c["b"])(e.t1));case 20:return i.expressId=expressId,i.expressCode=expressCode,t.setInfo(i),e.abrupt("break",26);case 24:return t.setInfo(i),e.abrupt("break",26);case 26:case"end":return e.stop()}}),e,this,[[12,17]])})));function t(){return e.apply(this,arguments)}return t}(),setInfo:function(e){var t=this;Object(n["q"])(t.$route.params.id,e).then((function(e){t.$dialog.success("发送货成功"),t.$router.go(-1)}),(function(e){t.$dialog.error(e.msg)}))}}},m=l,u=(r("c2ed"),r("2877")),v=Object(u["a"])(m,i,a,!1,null,"4e1dd50e",null);t["default"]=v.exports}}]);