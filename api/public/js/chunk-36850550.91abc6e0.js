(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-36850550"],{"0c07":function(t,e,n){"use strict";n.r(e);var c=n("ffc2").a,o=(n("ec4f"),n("2877")),s=function(t){t.options.__source="src/views/system/index/page.vue"},r=Object(o.a)(c,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("d2-container",{staticClass:"page"},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:6}},[n("el-card",{staticClass:"box-card el-button--success",nativeOn:{click:function(t){return e.toDeviceList({status:1})}}},[n("p",[e._v(e._s(e.count.ok))]),n("p",[e._v("正常")])])],1),n("el-col",{attrs:{span:6}},[n("el-card",{staticClass:"box-card el-button--danger",nativeOn:{click:function(t){return e.toDeviceList({status:0})}}},[n("p",[e._v(e._s(e.count.error))]),n("p",[e._v("异常")])])],1),n("el-col",{attrs:{span:6}},[n("el-card",{staticClass:"box-card el-button--warning",nativeOn:{click:function(t){return e.toDeviceList({need_check:1})}}},[n("p",[e._v(e._s(e.count.needCheck))]),n("p",[e._v("需要检查")])])],1),n("el-col",{attrs:{span:6}},[n("el-card",{staticClass:"box-card el-button--info",nativeOn:{click:function(t){return e.toDeviceList({expire:1})}}},[n("p",[e._v(e._s(e.count.expire))]),n("p",[e._v("即将过期")])])],1)],1)],1)},[],!1,null,"0f43950f",null);"function"==typeof s&&s(r);e.default=r.exports},2359:function(t,e,n){},"2f3b":function(t,e,n){"use strict";n.d(e,"a",function(){return o});var c=n("9bd2");function o(){return Object(c.a)({url:"/home",method:"get"})}},ec4f:function(t,e,n){"use strict";var c=n("2359");n.n(c).a},ffc2:function(t,e,c){"use strict";(function(t){var n=c("2f3b");e.a={data:function(){return{filename:t,count:{ok:0,error:0,needCheck:0,expire:0}}},created:function(){this.requestIndex()},methods:{requestIndex:function(){var e=this;Object(n.a)().then(function(t){e.count.ok=t.data.status_ok_count,e.count.error=t.data.status_error_count,e.count.needCheck=t.data.need_check_count,e.count.expire=t.data.expire_count})},toDeviceList:function(t){this.$router.push({name:"devices",query:t})}}}}).call(this,"/index.js")}}]);