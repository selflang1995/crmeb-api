(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f77b78a"],{1830:function(t,e,a){"use strict";var r=a("a51c"),n=a.n(r);n.a},"3b2b":function(t,e,a){var r=a("7726"),n=a("5dbc"),i=a("86cc").f,o=a("9093").f,s=a("aae3"),l=a("0bfb"),c=r.RegExp,u=c,d=c.prototype,m=/a/g,f=/a/g,v=new c(m)!==m;if(a("9e1e")&&(!v||a("79e5")((function(){return f[a("2b4c")("match")]=!1,c(m)!=m||c(f)==f||"/a/i"!=c(m,"i")})))){c=function(t,e){var a=this instanceof c,r=s(t),i=void 0===e;return!a&&r&&t.constructor===c&&i?t:n(v?new u(r&&!i?t.source:t,e):u((r=t instanceof c)?t.source:t,r&&i?l.call(t):e),a?this:d,c)};for(var h=function(t){t in c||i(c,t,{configurable:!0,get:function(){return u[t]},set:function(e){u[t]=e}})},g=o(u),p=0;g.length>p;)h(g[p++]);d.constructor=c,c.prototype=d,a("2aba")(r,"RegExp",c)}a("7a56")("RegExp")},"61f7":function(t,e,a){"use strict";a.d(e,"a",(function(){return o})),a.d(e,"c",(function(){return u})),a.d(e,"b",(function(){return d}));a("8e6e"),a("ac6a"),a("456d");var r=a("bd86");a("6b54"),a("3b2b"),a("a481");function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){Object(r["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var a={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var r in a)if(new RegExp("(".concat(r,")")).test(e)){var n=a[r]+"";e=e.replace(RegExp.$1,1===RegExp.$1.length?n:s(n))}return e}function s(t){return("00"+t).substr(t.length)}var l={min:"%s最小长度为:min",max:"%s最大长度为:max",length:"%s长度必须为:length",range:"%s长度为:range",pattern:"$s格式错误"};var c=function(t,e){t.message=function(t){return e.replace("%s",t||"")}};function u(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i({required:!0,message:t,type:"string"},e)}function d(t){return m.pattern(/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/,t)}c(u,"请输入%s"),c(d,"%s格式不正确");var m=Object.keys(l).reduce((function(t,e){return t[e]=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o="range"===e?{min:t[0],max:t[1]}:Object(r["a"])({},e,t);return i(i({message:a.replace(":".concat(e),"range"===e?"".concat(t[0],"-").concat(t[1]):t),type:"string"},o),n)},c(t[e],l[e]),t}),{})},"7c4e":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"article-manager"},[t._m(0),a("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[a("Form",{ref:"formValidate",attrs:{model:t.formValidate,"label-width":t.labelWidth,"label-position":t.labelPosition},nativeOn:{submit:function(t){t.preventDefault()}}},[a("Row",{attrs:{type:"flex",gutter:24}},[a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"时间选择："}},[a("RadioGroup",{staticClass:"mr",attrs:{type:"button"},on:{"on-change":function(e){return t.selectChange(t.formValidate.data)}},model:{value:t.formValidate.data,callback:function(e){t.$set(t.formValidate,"data",e)},expression:"formValidate.data"}},t._l(t.fromList.fromTxt,(function(e,r){return a("Radio",{key:r,attrs:{label:e.val}},[t._v(t._s(e.text))])})),1),a("DatePicker",{staticStyle:{width:"200px"},attrs:{editable:!1,value:t.timeVal,format:"yyyy/MM/dd",type:"daterange",placement:"bottom-end",placeholder:"请选择时间"},on:{"on-change":t.onchangeTime}})],1)],1),a("Col",t._b({},"Col",t.grid,!1),[a("FormItem",{attrs:{label:"砍价状态："}},[a("Select",{attrs:{placeholder:"请选择",clearable:""},on:{"on-change":t.userSearchs},model:{value:t.formValidate.status,callback:function(e){t.$set(t.formValidate,"status",e)},expression:"formValidate.status"}},[a("Option",{attrs:{value:1}},[t._v("进行中")]),a("Option",{attrs:{value:2}},[t._v("已失败")]),a("Option",{attrs:{value:3}},[t._v("已成功")])],1)],1)],1)],1)],1),a("Table",{staticClass:"mt25",attrs:{columns:t.columns1,data:t.tableList,loading:t.loading,"highlight-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"},scopedSlots:t._u([{key:"avatar",fn:function(t){var e=t.row;t.index;return[a("div",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"tabBox_img"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.avatar,expression:"row.avatar"}]})])]}},{key:"nickname",fn:function(e){var r=e.row;e.index;return[a("span",[t._v(" "+t._s(r.nickname+" / "+r.uid))])]}},{key:"title",fn:function(e){var r=e.row;e.index;return[a("span",[t._v(" "+t._s(r.title))])]}},{key:"add_time",fn:function(e){var r=e.row;e.index;return[a("span",[t._v(" "+t._s(r.add_time))])]}},{key:"datatime",fn:function(e){var r=e.row;e.index;return[a("span",[t._v(" "+t._s(r.datatime))])]}},{key:"status",fn:function(e){var r=e.row;e.index;return[a("Tag",{directives:[{name:"show",rawName:"v-show",value:1===r.status,expression:"row.status === 1"}],attrs:{color:"blue"}},[t._v("进行中")]),a("Tag",{directives:[{name:"show",rawName:"v-show",value:2===r.status,expression:"row.status === 2"}],attrs:{color:"volcano"}},[t._v("已失败")]),a("Tag",{directives:[{name:"show",rawName:"v-show",value:3===r.status,expression:"row.status === 3"}],attrs:{color:"cyan"}},[t._v("已成功")])]}},{key:"action",fn:function(e){var r=e.row;e.index;return[a("a",{on:{click:function(e){return t.Info(r)}}},[t._v("查看详情")])]}}])}),a("div",{staticClass:"acea-row row-right page"},[a("Page",{attrs:{total:t.total,current:t.formValidate.page,"show-elevator":"","show-total":"","page-size":t.formValidate.limit},on:{"on-change":t.pageChange}})],1)],1),a("Modal",{staticClass:"tableBox",attrs:{scrollable:"","footer-hide":"",closable:"",title:"查看详情","mask-closable":!1,width:"750"},model:{value:t.modals,callback:function(e){t.modals=e},expression:"modals"}},[a("Table",{ref:"selection",attrs:{columns:t.columns2,data:t.tabList3,loading:t.loading2,"no-data-text":"暂无数据","highlight-row":"","max-height":"600",size:"small","no-filtered-data-text":"暂无筛选结果"},scopedSlots:t._u([{key:"nickname",fn:function(e){var r=e.row;e.index;return[a("span",[t._v(" "+t._s(r.nickname+" / "+r.uid))])]}},{key:"avatar",fn:function(t){var e=t.row;t.index;return[a("div",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"tabBox_img"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.avatar,expression:"row.avatar"}]})])]}},{key:"action",fn:function(e){var r=e.row;e.index;return[a("Tag",{directives:[{name:"show",rawName:"v-show",value:1===r.is_refund,expression:"row.is_refund === 1"}],attrs:{color:"cyan"}},[t._v("已退款")]),a("Tag",{directives:[{name:"show",rawName:"v-show",value:0===r.is_refund,expression:"row.is_refund === 0"}],attrs:{color:"volcano"}},[t._v("未退款")])]}}])})],1)],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"i-layout-page-header"},[a("div",{staticClass:"i-layout-page-header"},[a("span",{staticClass:"ivu-page-header-title"},[t._v("砍价列表")])])])}],i=(a("8e6e"),a("ac6a"),a("456d"),a("96cf"),a("3b8d")),o=a("bd86"),s=a("2f62"),l=a("61f7"),c=a("b7be");function u(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(Object(a),!0).forEach((function(e){Object(o["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var m={name:"bargainList",filters:{formatDate:function(t){if(0!==t){var e=new Date(1e3*t);return Object(l["a"])(e,"yyyy-MM-dd hh:mm")}}},data:function(){return{cardLists:[],modals:!1,fromList:{title:"选择时间",custom:!0,fromTxt:[{text:"全部",val:""},{text:"今天",val:"today"},{text:"昨天",val:"yesterday"},{text:"最近7天",val:"lately7"},{text:"最近30天",val:"lately30"},{text:"本月",val:"month"},{text:"本年",val:"year"}]},grid:{xl:7,lg:10,md:12,sm:12,xs:24},loading:!1,formValidate:{status:"",data:"",page:1,limit:15},columns1:[{title:"头像",slot:"avatar",minWidth:100},{title:"发起用户",slot:"nickname",minWidth:150},{title:"开启时间",key:"add_time",minWidth:150},{title:"砍价商品",key:"title",minWidth:300},{title:"最低价",key:"bargain_price_min",minWidth:120},{title:"当前价",key:"now_price",minWidth:100},{title:"总砍价次数",key:"people_num",minWidth:100},{title:"剩余砍价次数",key:"num",minWidth:100},{title:"结束时间",key:"datatime",minWidth:150},{title:"状态",slot:"status",minWidth:100},{title:"操作",slot:"action",fixed:"right",minWidth:170}],tableList:[],total:0,timeVal:[],loading2:!1,tabList3:[],columns2:[{title:"用户ID",key:"uid",width:80},{title:"用户头像",slot:"avatar"},{title:"用户名称",slot:"nickname",minWidth:100},{title:"砍价金额",key:"price"},{title:"砍价时间",key:"add_time",minWidth:100}],rows:{}}},computed:d(d({},Object(s["e"])("media",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:75},labelPosition:function(){return this.isMobile?"top":"right"}}),created:function(){this.getList()},methods:{Info:function(t){var e=this;this.modals=!0,this.rows=t,Object(c["f"])(t.id).then(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(a){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=a.data,e.tabList3=r.list,e.loading=!1;case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.loading=!1,e.$Message.error(t.msg)}))},onchangeTime:function(t){this.timeVal=t,this.formValidate.data=this.timeVal[0]?this.timeVal.join("-"):"",this.formValidate.page=1,this.getList()},selectChange:function(t){this.formValidate.page=1,this.formValidate.data=t,this.timeVal=[],this.getList()},getList:function(){var t=this;this.loading=!0,this.formValidate.status=this.formValidate.status||"",Object(c["g"])(this.formValidate).then(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(a){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=a.data,t.tableList=r.list,t.total=a.data.count,t.loading=!1;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading=!1,t.$Message.error(e.msg)}))},pageChange:function(t){this.formValidate.page=t,this.getList()},userSearchs:function(){this.formValidate.page=1,this.getList()}}},f=m,v=(a("1830"),a("2877")),h=Object(v["a"])(f,r,n,!1,null,"47c26a61",null);e["default"]=h.exports},a51c:function(t,e,a){}}]);