(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-320b843a"],{"2c0a":function(t,e,a){"use strict";a.d(e,"c",function(){return o}),a.d(e,"a",function(){return r}),a.d(e,"d",function(){return i}),a.d(e,"b",function(){return l}),a.d(e,"e",function(){return c});var n=a("9bd2");function o(t){return Object(n.a)({url:"/locations",method:"get",params:t})}function r(t){return Object(n.a)({url:"/locations/".concat(t),method:"delete"})}function i(t){return Object(n.a)({url:"/locations",method:"post",data:t})}function l(t){return Object(n.a)({url:"/locations/".concat(t),method:"get"})}function c(t,e){return Object(n.a)({url:"/locations/".concat(t),method:"put",data:e})}},aad5:function(t,e,a){"use strict";a.r(e);var n=a("2b0e"),o=a("5c96"),r=a("2c0a"),i={name:"page",data:function(){return{tableData:[],totalPage:1,page:1,tableLoading:!1}},created:function(){this.requestData()},methods:{requestData:function(){var e=this;this.tableLoading||(this.tableLoading=!0,Object(r.c)({page:this.page}).then(function(t){e.tableLoading=!1,e.tableData=t.data,e.totalPage=t.meta.last_page}).catch(function(){e.tableLoading=!1}))},deleteRow:function(e){var a=this;n.default.set(e.row,"deleteLoading",!0),Object(r.a)(e.row.id).then(function(t){n.default.set(e.row,"deleteLoading",!1),a.$refs["deletePopover-"+e.row.id].doClose(),Object(o.Message)({message:t.message,type:"success",duration:5e3}),a.requestData()})},toCreatePage:function(){this.$router.push({name:"create-location"})},toEditPage:function(t,e){this.$router.push({name:"edit-location",params:{id:e}})}}},l=a("2877"),c=function(t){t.options.__source="src/views/locations/index/page.vue"},u=Object(l.a)(i,function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("d2-container",[n("el-row",{staticClass:"d2-mb"},[n("el-button",{attrs:{icon:"el-icon-plus",type:"primary"},on:{click:a.toCreatePage}},[a._v("添加地点")]),n("el-button",{attrs:{icon:"el-icon-refresh",loading:a.tableLoading},on:{click:a.requestData}},[a._v("刷新")])],1),n("el-row",[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:a.tableLoading,expression:"tableLoading"}],staticStyle:{width:"100%"},attrs:{data:a.tableData}},[n("el-table-column",{attrs:{prop:"name",label:"名称"}}),n("el-table-column",{attrs:{prop:"manager_name",label:"负责人"}}),n("el-table-column",{attrs:{prop:"manager_phone",label:"联系方式"}}),n("el-table-column",{attrs:{fixed:"right",label:"操作",width:"200"},scopedSlots:a._u([{key:"default",fn:function(e){return[n("el-row",[n("el-col",{attrs:{span:8}},[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){return a.toEditPage(t,e.row.id)}}},[a._v("编辑")])],1),n("el-col",{attrs:{span:8}},[n("el-popover",{ref:"deletePopover-"+e.row.id,attrs:{placement:"left",width:"160",value:e.row.deletePopover}},[n("p",[a._v("确定删除吗？")]),n("div",{staticStyle:{"text-align":"right",margin:"0"}},[n("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(t){a.$refs["deletePopover-"+e.row.id].doClose()}}},[a._v("取消\n                                    ")]),n("el-button",{attrs:{type:"primary",size:"mini",loading:e.row.deleteLoading},on:{click:function(t){return a.deleteRow(e)}}},[a._v("确定\n                                    ")])],1),n("el-button",{attrs:{slot:"reference",type:"danger",size:"small"},slot:"reference"},[a._v("删除")])],1)],1)],1)]}}])})],1)],1),n("el-row",{staticClass:"d2-mt d2-mb"},[n("el-pagination",{attrs:{background:"","hide-on-single-page":"",layout:"prev, pager, next","current-page":a.page,"page-count":a.totalPage},on:{"update:currentPage":function(t){a.page=t},"update:current-page":function(t){a.page=t},"current-change":a.requestData}})],1)],1)},[],!1,null,"377dbfde",null);"function"==typeof c&&c(u);e.default=u.exports}}]);