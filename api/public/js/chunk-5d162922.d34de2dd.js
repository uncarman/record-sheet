(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5d162922"],{2588:function(t,e,a){"use strict";var n=a("4d2a");a.n(n).a},"2c0a":function(t,e,a){"use strict";a.d(e,"c",function(){return s}),a.d(e,"a",function(){return o}),a.d(e,"d",function(){return i}),a.d(e,"b",function(){return l}),a.d(e,"e",function(){return r});var n=a("9bd2");function s(t){return Object(n.a)({url:"/locations",method:"get",params:t})}function o(t){return Object(n.a)({url:"/locations/".concat(t),method:"delete"})}function i(t){return Object(n.a)({url:"/locations",method:"post",data:t})}function l(t){return Object(n.a)({url:"/locations/".concat(t),method:"get"})}function r(t,e){return Object(n.a)({url:"/locations/".concat(t),method:"put",data:e})}},"2f75":function(t,e,a){"use strict";a.d(e,"d",function(){return s}),a.d(e,"b",function(){return o}),a.d(e,"e",function(){return i}),a.d(e,"c",function(){return l}),a.d(e,"f",function(){return r}),a.d(e,"a",function(){return c});var n=a("9bd2");function s(t){return Object(n.a)({url:"/devices",method:"get",params:t})}function o(t){return Object(n.a)({url:"/devices/".concat(t),method:"delete"})}function i(t){return Object(n.a)({url:"/devices",method:"post",data:t})}function l(t){return Object(n.a)({url:"/devices/".concat(t),method:"get"})}function r(t,e){return Object(n.a)({url:"/devices/".concat(t),method:"put",data:e})}function c(t){return Object(n.a)({url:"/devices/batchUpdate",method:"post",data:t})}},"4d2a":function(t,e,a){},"99e8":function(t,e,a){"use strict";a.r(e);a("20d6");var n=a("cebc"),s=(a("7514"),a("7f7f"),a("2b0e")),o=a("2f75"),i=a("2c0a"),l=a("5c96"),r={name:"page",data:function(){return{tableData:[],originTableData:[],totalPage:1,page:1,tableLoading:!1,locations:[],params:{status:"",location_id:"",type:"",search:"",need_check:"",expire:""},types:["电梯","灭火器","消防栓","故障报修"],isEditing:!1,batchUpdateLoading:!1}},created:function(){var t=this.$route.query;t.status=void 0!==t.status&&""!==t.status?parseInt(t.status):"",t.need_check=void 0!==t.need_check&&""!==t.need_check?parseInt(t.need_check):"",this.params=Object.assign(this.params,t),this.requestData(),this.requestLocationsData()},methods:{locationName:function(e){return 0<this.locations.length?this.locations.find(function(t){return t.id===e}).name:""},requestData:function(){var e=this;this.tableLoading||(this.tableLoading=!0,Object(o.d)(Object(n.a)({page:this.page},this.params)).then(function(t){e.tableLoading=!1,e.tableData=t.data,e.totalPage=t.meta.last_page}).catch(function(){e.tableLoading=!1}))},requestLocationsData:function(){var e=this;Object(i.c)({is_all:1}).then(function(t){e.locations=t.data})},deleteRow:function(e){var a=this;s.default.set(e.row,"deleteLoading",!0),Object(o.b)(e.row.id).then(function(t){s.default.set(e.row,"deleteLoading",!1),a.$refs["deletePopover-"+e.row.id].doClose(),Object(l.Message)({message:t.message,type:"success",duration:5e3}),a.requestData()})},toCreatePage:function(){this.$router.push({name:"create-device"})},toEditPage:function(t,e){this.$router.push({name:"edit-device",params:{id:e}})},batchEdit:function(){this.originTableData=this.tableData.map(function(t){return Object.assign({},t)}),this.isEditing=!0},cancelBatchEdit:function(){this.tableData=this.originTableData.map(function(t){return Object.assign({},t)}),this.isEditing=!1},batchSave:function(){var e=this,t=this.tableData.map(function(t,e){return{id:t.id,name:t.name,sn:t.sn,location_id:t.location.id,interval:t.interval,expired_at:t.expired_at}});this.batchUpdateLoading=!0,Object(o.a)({devices:t}).then(function(t){e.batchUpdateLoading=!1,e.tableData=t.data,e.isEditing=!1,Object(l.Message)({message:t.message,type:"success",duration:3e3})}).catch(function(){e.batchUpdateLoading=!1})},saveRow:function(a){var n=this,t={sn:a.row.sn,name:a.row.name,location_id:a.row.location.id,interval:a.row.interval,expired_at:a.row.expired_at};s.default.set(a.row,"saveLoading",!0),Object(o.f)(a.row.id,t).then(function(t){s.default.set(a.row,"saveLoading",!1);var e=n.originTableData.findIndex(function(t){return a.row.id===t.id});-1!==e&&(n.originTableData[e]=Object.assign(n.originTableData[e],t.data),n.tableData[e]=Object.assign(n.tableData[e],t.data)),Object(l.Message)({message:t.message,type:"success",duration:3e3})}).catch(function(){s.default.set(a.row,"saveLoading",!1)})}}},c=(a("2588"),a("2877")),d=function(t){t.options.__source="src/views/devices/index/page.vue"},u=Object(c.a)(r,function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("d2-container",[n("el-row",{directives:[{name:"show",rawName:"v-show",value:!a.isEditing,expression:"!isEditing"}],staticClass:"d2-mb-10"},[n("el-button",{staticClass:"d2-mr-20",attrs:{icon:"el-icon-plus",type:"primary"},on:{click:a.toCreatePage}},[a._v("添加设备")]),n("el-button",{staticClass:"d2-mr-20",attrs:{icon:"el-icon-edit"},on:{click:a.batchEdit}},[a._v("批量编辑")])],1),n("el-row",{directives:[{name:"show",rawName:"v-show",value:a.isEditing,expression:"isEditing"}],staticClass:"d2-mt d2-mb",attrs:{type:"flex",justify:"end"}},[n("el-button",{staticClass:"d2-mr-20",attrs:{icon:"el-icon-check",type:"primary"},on:{click:a.batchSave}},[a._v("保存全部")]),n("el-button",{staticClass:"d2-mr-20",on:{click:a.cancelBatchEdit}},[a._v("取消")])],1),n("el-row",{directives:[{name:"show",rawName:"v-show",value:!a.isEditing,expression:"!isEditing"}],staticClass:"d2-mb-10"},[n("el-input",{staticClass:"d2-mr-20",attrs:{placeholder:"搜索名称、编号",clearable:""},model:{value:a.params.search,callback:function(t){a.$set(a.params,"search",t)},expression:"params.search"}}),n("el-select",{staticClass:"d2-mr-20",attrs:{placeholder:"请选择地点"},model:{value:a.params.location_id,callback:function(t){a.$set(a.params,"location_id",t)},expression:"params.location_id"}},[n("el-option",{key:"0",attrs:{value:"",label:"所有地点"}}),a._l(a.locations,function(t){return n("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})],2),n("el-select",{staticClass:"d2-mr-20",attrs:{placeholder:"请选择设备类型"},model:{value:a.params.type,callback:function(t){a.$set(a.params,"type",t)},expression:"params.type"}},[n("el-option",{key:"0",attrs:{value:"",label:"所有类型"}}),a._l(a.types,function(t){return n("el-option",{key:t,attrs:{label:t,value:t}})})],2),n("el-select",{staticClass:"d2-mr-20",attrs:{placeholder:"请选择状态"},model:{value:a.params.status,callback:function(t){a.$set(a.params,"status",t)},expression:"params.status"}},[n("el-option",{attrs:{value:"",label:"所有状态"}}),n("el-option",{attrs:{value:1,label:"正常"}}),n("el-option",{attrs:{value:0,label:"异常"}})],1),n("el-checkbox",{attrs:{"true-label":1},model:{value:a.params.need_check,callback:function(t){a.$set(a.params,"need_check",t)},expression:"params.need_check"}},[a._v("需要检查")]),n("el-checkbox",{attrs:{"true-label":1},model:{value:a.params.expire,callback:function(t){a.$set(a.params,"expire",t)},expression:"params.expire"}},[a._v("即将过期")]),n("el-button",{attrs:{icon:"el-icon-search",loading:a.tableLoading},on:{click:a.requestData}},[a._v("查询")])],1),n("el-row",[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:a.tableLoading||a.batchUpdateLoading,expression:"tableLoading || batchUpdateLoading"}],staticStyle:{width:"100%"},attrs:{data:a.tableData}},[n("el-table-column",{attrs:{prop:"sn",label:"编号",width:"150"},scopedSlots:a._u([{key:"default",fn:function(e){return[a.isEditing?n("el-input",{model:{value:e.row.sn,callback:function(t){a.$set(e.row,"sn",t)},expression:"scope.row.sn"}}):[a._v("\n                        "+a._s(e.row.sn)+"\n                    ")]]}}])}),n("el-table-column",{attrs:{prop:"name",label:"名称",width:"200px"},scopedSlots:a._u([{key:"default",fn:function(e){return[a.isEditing?n("el-input",{model:{value:e.row.name,callback:function(t){a.$set(e.row,"name",t)},expression:"scope.row.name"}}):[a._v("\n                        "+a._s(e.row.name)+"\n                    ")]]}}])}),n("el-table-column",{attrs:{prop:"type",label:"类型"}}),n("el-table-column",{attrs:{prop:"location.name",label:"所在位置",width:"200px"},scopedSlots:a._u([{key:"default",fn:function(e){return[a.isEditing?n("el-select",{staticClass:"d2-mr-20",attrs:{placeholder:"请选择地点"},model:{value:e.row.location.id,callback:function(t){a.$set(e.row.location,"id",t)},expression:"scope.row.location.id"}},a._l(a.locations,function(t){return n("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}),1):[a._v("\n                        "+a._s(e.row.location.name)+"\n                    ")]]}}])}),n("el-table-column",{attrs:{prop:"expired_at",label:"有效期",width:"100px"}}),n("el-table-column",{attrs:{prop:"location.manager_name",label:"负责人"}}),n("el-table-column",{attrs:{label:"状态"},scopedSlots:a._u([{key:"default",fn:function(t){return[n("el-tag",{attrs:{type:null!==t.row.status?t.row.status?"success":"danger":"info","disable-transitions":""}},[a._v(a._s(null!==t.row.status?t.row.status?"正常":"异常":"未知")+"\n                    ")])]}}])}),n("el-table-column",{attrs:{prop:"interval",label:"检查周期(天)",width:"100px",align:"center"},scopedSlots:a._u([{key:"default",fn:function(e){return[a.isEditing?n("el-input",{model:{value:e.row.interval,callback:function(t){a.$set(e.row,"interval",t)},expression:"scope.row.interval"}}):[a._v("\n                        "+a._s(e.row.interval)+"\n                    ")]]}}])}),n("el-table-column",{attrs:{prop:"latest_check_date",label:"检查日期",width:"100px"}}),n("el-table-column",{attrs:{prop:"next_check_date",label:"下次检查日期",width:"110px"}}),n("el-table-column",{attrs:{fixed:"right",label:"操作",width:"200"},scopedSlots:a._u([{key:"default",fn:function(e){return[a.isEditing?n("el-row",[n("el-button",{attrs:{type:"primary",size:"mini",loading:e.row.saveLoading},on:{click:function(t){return a.saveRow(e)}}},[a._v("保存\n                        ")])],1):n("el-row",[n("el-col",{attrs:{span:8}},[n("el-popover",{attrs:{placement:"left",width:"300",trigger:"click"}},[null!==e.row?n("el-row",[n("el-row",{staticClass:"text item d2-mt-10 d2-mb-10"},[n("el-col",{staticClass:"text-bold",attrs:{span:6}},[a._v("编号")]),n("el-col",{attrs:{span:18}},[a._v(a._s(e.row.sn))])],1),n("el-row",{staticClass:"text item d2-mt-10 d2-mb-10"},[n("el-col",{staticClass:"text-bold",attrs:{span:6}},[a._v("设备名")]),n("el-col",{attrs:{span:18}},[a._v(a._s(e.row.name))])],1),e.row.type?n("el-row",{staticClass:"text item d2-mt-10 d2-mb-10"},[n("el-col",{staticClass:"text-bold",attrs:{span:6}},[a._v("类型")]),n("el-col",{attrs:{span:18}},[a._v(a._s(e.row.type))])],1):a._e(),e.row.model?n("el-row",{staticClass:"text item d2-mt-10 d2-mb-10"},[n("el-col",{staticClass:"text-bold",attrs:{span:6}},[a._v("型号")]),n("el-col",{attrs:{span:18}},[a._v(a._s(e.row.model))])],1):a._e(),n("el-row",{staticClass:"text item d2-mt-10 d2-mb-10"},[n("el-col",{staticClass:"text-bold",attrs:{span:6}},[a._v("所在位置")]),n("el-col",{attrs:{span:18}},[a._v(a._s(e.row.location.name))])],1),n("el-row",{staticClass:"text item d2-mt-10 d2-mb-10"},[n("el-col",{staticClass:"text-bold",attrs:{span:6}},[a._v("负责人")]),n("el-col",{attrs:{span:18}},[a._v(a._s(e.row.location.manager_name))])],1),n("el-row",{staticClass:"text item d2-mt-10 d2-mb-10"},[n("el-col",{staticClass:"text-bold",attrs:{span:6}},[a._v("联系方式")]),n("el-col",{attrs:{span:18}},[a._v(a._s(e.row.location.manager_phone))])],1)],1):a._e(),n("el-button",{attrs:{slot:"reference",icon:"el-icon-eye",type:"text",size:"small"},slot:"reference"},[a._v("查看\n                                ")])],1)],1),n("el-col",{attrs:{span:8}},[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){return a.toEditPage(t,e.row.id)}}},[a._v("编辑\n                            ")])],1),n("el-col",{attrs:{span:8}},[n("el-popover",{ref:"deletePopover-"+e.row.id,attrs:{placement:"left",width:"160",value:e.row.deletePopover}},[n("p",[a._v("确定删除吗？")]),n("div",{staticStyle:{"text-align":"right",margin:"0"}},[n("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(t){a.$refs["deletePopover-"+e.row.id].doClose()}}},[a._v("取消\n                                    ")]),n("el-button",{attrs:{type:"primary",size:"mini",loading:e.row.deleteLoading},on:{click:function(t){return a.deleteRow(e)}}},[a._v("确定\n                                    ")])],1),n("el-button",{attrs:{slot:"reference",type:"danger",size:"small"},slot:"reference"},[a._v("删除")])],1)],1)],1)]}}])})],1)],1),n("el-row",{staticClass:"d2-mt d2-mb"},[n("el-pagination",{attrs:{background:"","hide-on-single-page":"",layout:"prev, pager, next","current-page":a.page,"page-count":a.totalPage,disabled:a.isEditing},on:{"update:currentPage":function(t){a.page=t},"update:current-page":function(t){a.page=t},"current-change":a.requestData}})],1)],1)},[],!1,null,"1fab389d",null);"function"==typeof d&&d(u);e.default=u.exports}}]);