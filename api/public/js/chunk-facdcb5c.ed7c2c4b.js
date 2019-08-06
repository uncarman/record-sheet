(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-facdcb5c"],{"2c0a":function(t,e,a){"use strict";a.d(e,"c",function(){return o}),a.d(e,"a",function(){return r}),a.d(e,"d",function(){return l}),a.d(e,"b",function(){return i}),a.d(e,"e",function(){return c});var n=a("9bd2");function o(t){return Object(n.a)({url:"/locations",method:"get",params:t})}function r(t){return Object(n.a)({url:"/locations/".concat(t),method:"delete"})}function l(t){return Object(n.a)({url:"/locations",method:"post",data:t})}function i(t){return Object(n.a)({url:"/locations/".concat(t),method:"get"})}function c(t,e){return Object(n.a)({url:"/locations/".concat(t),method:"put",data:e})}},"8cd8":function(t,e,a){"use strict";a.d(e,"c",function(){return o}),a.d(e,"a",function(){return r}),a.d(e,"b",function(){return l}),a.d(e,"d",function(){return i});var n=a("9bd2");function o(t){return Object(n.a)({url:"/maintain_logs",method:"get",params:t})}function r(t){return Object(n.a)({url:"/maintain_logs/".concat(t),method:"delete"})}function l(t){return Object(n.a)({url:"/maintain_logs/".concat(t),method:"get"})}function i(t,e){return Object(n.a)({url:"/maintain_logs/".concat(t),method:"put",data:e})}},d89d:function(t,e,a){"use strict";a.r(e);var n=a("cebc"),o=a("2b0e"),r=a("8cd8"),l=a("2c0a"),i=a("5c96"),c={name:"page",data:function(){return{tableData:[],totalPage:1,page:1,tableLoading:!1,locations:[],params:{location_id:"",type:"",sort_by:"",order:"",page:1},types:["电梯","灭火器","消防栓","故障报修"]}},created:function(){this.requestData(),this.requestLocationsData()},methods:{requestData:function(){var e=this;this.tableLoading||(this.tableLoading=!0,Object(r.c)(Object(n.a)({},this.params,{page:this.page})).then(function(t){e.tableLoading=!1,e.tableData=t.data,e.totalPage=t.meta.last_page}).catch(function(){e.tableLoading=!1}))},requestLocationsData:function(){var e=this;Object(l.c)({is_all:1}).then(function(t){e.locations=t.data})},sortChange:function(t){this.params.sort_by=t.prop,this.params.order="descending"===t.order?"desc":"asc",this.requestData()},deleteRow:function(e){var a=this;o.default.set(e.row,"deleteLoading",!0),Object(r.a)(e.row.id).then(function(t){o.default.set(e.row,"deleteLoading",!1),a.$refs["deletePopover-"+e.row.id].doClose(),Object(i.Message)({message:t.message,type:"success",duration:5e3}),a.requestData()})},toEditPage:function(t,e){this.$router.push({name:"edit-maintain_log",params:{id:e}})}}},s=a("2877"),u=function(t){t.options.__source="src/views/maintain_logs/index/page.vue"},d=Object(s.a)(c,function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("d2-container",[n("el-row",{staticClass:"d2-mt d2-mb"},[n("el-select",{staticClass:"d2-mr-20",attrs:{placeholder:"请选择地点"},model:{value:a.params.location_id,callback:function(t){a.$set(a.params,"location_id",t)},expression:"params.location_id"}},[n("el-option",{key:"0",attrs:{value:"",label:"所有地点"}}),a._l(a.locations,function(t){return n("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})],2),n("el-select",{staticClass:"d2-mr-20",attrs:{placeholder:"请选择设备类型"},model:{value:a.params.type,callback:function(t){a.$set(a.params,"type",t)},expression:"params.type"}},[n("el-option",{key:"0",attrs:{value:"",label:"所有类型"}}),a._l(a.types,function(t){return n("el-option",{key:t,attrs:{label:t,value:t}})})],2),n("el-button",{attrs:{loading:a.tableLoading},on:{click:a.requestData}},[a._v("查询")])],1),n("el-row",[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:a.tableLoading,expression:"tableLoading"}],staticStyle:{width:"100%"},attrs:{data:a.tableData},on:{"sort-change":a.sortChange}},[n("el-table-column",{attrs:{prop:"device.name",label:"设备名称"}}),n("el-table-column",{attrs:{prop:"logger_name",label:"巡检人员"}}),n("el-table-column",{attrs:{prop:"logger_phone",label:"联系方式"}}),n("el-table-column",{attrs:{prop:"result",label:"巡检结果",width:"100"},scopedSlots:a._u([{key:"default",fn:function(t){return[n("el-tag",{attrs:{type:t.row.result?"success":"danger","disable-transitions":""}},[a._v(a._s(t.row.result?"正常":"异常")+"\n                    ")])]}}])}),n("el-table-column",{attrs:{prop:"abnormal_desc",label:"异常原因",width:"200"}}),n("el-table-column",{attrs:{prop:"created_at",label:"时间",sortable:"custom",width:"200"}}),n("el-table-column",{attrs:{fixed:"right",label:"操作",width:"200"},scopedSlots:a._u([{key:"default",fn:function(e){return[n("el-row",[n("el-col",{attrs:{span:8}},[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){return a.toEditPage(t,e.row.id)}}},[a._v("编辑")])],1),n("el-col",{attrs:{span:8}},[n("el-popover",{ref:"deletePopover-"+e.row.id,attrs:{placement:"left",width:"160",value:e.row.deletePopover}},[n("p",[a._v("确定删除吗？")]),n("div",{staticStyle:{"text-align":"right",margin:"0"}},[n("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(t){a.$refs["deletePopover-"+e.row.id].doClose()}}},[a._v("取消\n                                    ")]),n("el-button",{attrs:{type:"primary",size:"mini",loading:e.row.deleteLoading},on:{click:function(t){return a.deleteRow(e)}}},[a._v("确定\n                                    ")])],1),n("el-button",{attrs:{slot:"reference",type:"danger",size:"small"},slot:"reference"},[a._v("删除")])],1)],1)],1)]}}])})],1)],1),n("el-row",{staticClass:"d2-mt d2-mb"},[n("el-pagination",{attrs:{background:"","hide-on-single-page":"",layout:"prev, pager, next","current-page":a.page,"page-count":a.totalPage},on:{"update:currentPage":function(t){a.page=t},"update:current-page":function(t){a.page=t},"current-change":a.requestData}})],1)],1)},[],!1,null,"dc4891ae",null);"function"==typeof u&&u(d);e.default=d.exports}}]);