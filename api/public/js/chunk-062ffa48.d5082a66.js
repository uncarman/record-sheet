(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-062ffa48"],{"2f75":function(t,e,a){"use strict";a.d(e,"c",function(){return l}),a.d(e,"a",function(){return n}),a.d(e,"d",function(){return s}),a.d(e,"b",function(){return r}),a.d(e,"e",function(){return c});var o=a("9bd2");function l(t){return Object(o.a)({url:"/devices",method:"get",params:t})}function n(t){return Object(o.a)({url:"/devices/".concat(t),method:"delete"})}function s(t){return Object(o.a)({url:"/devices",method:"post",data:t})}function r(t){return Object(o.a)({url:"/devices/".concat(t),method:"get"})}function c(t,e){return Object(o.a)({url:"/devices/".concat(t),method:"put",data:e})}},"99e8":function(t,e,a){"use strict";a.r(e);var o=a("2b0e"),l=a("2f75"),n=a("5c96"),s={name:"page",data:function(){return{tableData:[],totalPage:1,page:1,tableLoading:!1}},created:function(){this.requestData()},methods:{requestData:function(){var e=this;this.tableLoading||(this.tableLoading=!0,Object(l.c)({page:this.page}).then(function(t){e.tableLoading=!1,e.tableData=t.data,e.totalPage=t.meta.last_page}).catch(function(){e.tableLoading=!1}))},deleteRow:function(e){var a=this;o.default.set(e.row,"deleteLoading",!0),Object(l.a)(e.row.id).then(function(t){o.default.set(e.row,"deleteLoading",!1),a.$refs["deletePopover-"+e.row.id].doClose(),Object(n.Message)({message:t.message,type:"success",duration:5e3}),a.requestData()})},toCreatePage:function(){this.$router.push({name:"create-device"})},toEditPage:function(t,e){this.$router.push({name:"edit-device",params:{id:e}})}}},r=a("2877"),c=function(t){t.options.__source="src/views/devices/index/page.vue"},i=Object(r.a)(s,function(){var a=this,t=a.$createElement,o=a._self._c||t;return o("d2-container",[o("el-row",{staticClass:"d2-mt d2-mb"},[o("el-button",{attrs:{icon:"el-icon-plus",type:"primary"},on:{click:a.toCreatePage}},[a._v("添加设备")]),o("el-button",{attrs:{icon:"el-icon-refresh",loading:a.tableLoading},on:{click:a.requestData}},[a._v("刷新")])],1),o("el-row",[o("el-table",{directives:[{name:"loading",rawName:"v-loading",value:a.tableLoading,expression:"tableLoading"}],staticStyle:{width:"100%"},attrs:{data:a.tableData}},[o("el-table-column",{attrs:{prop:"sn",label:"编号",width:"150"}}),o("el-table-column",{attrs:{prop:"name",label:"名称"}}),o("el-table-column",{attrs:{prop:"type",label:"类型"}}),o("el-table-column",{attrs:{prop:"location.name",label:"所在位置"}}),o("el-table-column",{attrs:{prop:"expired_at",label:"有效期"}}),o("el-table-column",{attrs:{prop:"location.manager_name",label:"负责人"}}),o("el-table-column",{attrs:{fixed:"right",label:"操作",width:"200"},scopedSlots:a._u([{key:"default",fn:function(e){return[o("el-row",[o("el-col",{attrs:{span:8}},[o("el-popover",{attrs:{placement:"left",width:"300",trigger:"click"}},[null!==e.row?o("el-row",[o("el-row",{staticClass:"text item d2-mt-10 d2-mb-10"},[o("el-col",{staticClass:"text-bold",attrs:{span:6}},[a._v("编号")]),o("el-col",{attrs:{span:18}},[a._v(a._s(e.row.sn))])],1),o("el-row",{staticClass:"text item d2-mt-10 d2-mb-10"},[o("el-col",{staticClass:"text-bold",attrs:{span:6}},[a._v("设备名")]),o("el-col",{attrs:{span:18}},[a._v(a._s(e.row.name))])],1),e.row.type?o("el-row",{staticClass:"text item d2-mt-10 d2-mb-10"},[o("el-col",{staticClass:"text-bold",attrs:{span:6}},[a._v("类型")]),o("el-col",{attrs:{span:18}},[a._v(a._s(e.row.type))])],1):a._e(),e.row.model?o("el-row",{staticClass:"text item d2-mt-10 d2-mb-10"},[o("el-col",{staticClass:"text-bold",attrs:{span:6}},[a._v("型号")]),o("el-col",{attrs:{span:18}},[a._v(a._s(e.row.model))])],1):a._e(),o("el-row",{staticClass:"text item d2-mt-10 d2-mb-10"},[o("el-col",{staticClass:"text-bold",attrs:{span:6}},[a._v("所在位置")]),o("el-col",{attrs:{span:18}},[a._v(a._s(e.row.location.name))])],1),o("el-row",{staticClass:"text item d2-mt-10 d2-mb-10"},[o("el-col",{staticClass:"text-bold",attrs:{span:6}},[a._v("负责人")]),o("el-col",{attrs:{span:18}},[a._v(a._s(e.row.location.manager_name))])],1),o("el-row",{staticClass:"text item d2-mt-10 d2-mb-10"},[o("el-col",{staticClass:"text-bold",attrs:{span:6}},[a._v("联系方式")]),o("el-col",{attrs:{span:18}},[a._v(a._s(e.row.location.manager_phone))])],1)],1):a._e(),o("el-button",{attrs:{slot:"reference",icon:"el-icon-eye",type:"text",size:"small"},slot:"reference"},[a._v("查看\n                                ")])],1)],1),o("el-col",{attrs:{span:8}},[o("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){return a.toEditPage(t,e.row.id)}}},[a._v("编辑\n                            ")])],1),o("el-col",{attrs:{span:8}},[o("el-popover",{ref:"deletePopover-"+e.row.id,attrs:{placement:"left",width:"160",value:e.row.deletePopover}},[o("p",[a._v("确定删除吗？")]),o("div",{staticStyle:{"text-align":"right",margin:"0"}},[o("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(t){a.$refs["deletePopover-"+e.row.id].doClose()}}},[a._v("取消\n                                    ")]),o("el-button",{attrs:{type:"primary",size:"mini",loading:e.row.deleteLoading},on:{click:function(t){return a.deleteRow(e)}}},[a._v("确定\n                                    ")])],1),o("el-button",{attrs:{slot:"reference",type:"danger",size:"small"},slot:"reference"},[a._v("删除")])],1)],1)],1)]}}])})],1)],1),o("el-row",{staticClass:"d2-mt d2-mb"},[o("el-pagination",{attrs:{background:"","hide-on-single-page":"",layout:"prev, pager, next","current-page":a.page,"page-count":a.totalPage},on:{"update:currentPage":function(t){a.page=t},"update:current-page":function(t){a.page=t},"current-change":a.requestData}})],1)],1)},[],!1,null,"d32b2cce",null);"function"==typeof c&&c(i);e.default=i.exports}}]);