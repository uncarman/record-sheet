(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5bb93d57"],{"2c0a":function(e,a,r){"use strict";r.d(a,"b",function(){return n}),r.d(a,"a",function(){return o}),r.d(a,"c",function(){return s});var t=r("9bd2");function n(e){return Object(t.a)({url:"/locations",method:"get",params:e})}function o(e){return Object(t.a)({url:"/locations/".concat(e),method:"delete"})}function s(e){return Object(t.a)({url:"/locations",method:"post",data:e})}},c821:function(e,a,r){"use strict";r.r(a);var t=r("2c0a"),n=r("5c96"),o={name:"page",data:function(){return{form:{name:"",manager_name:"",manager_phone:""},rules:{name:[{required:!0,message:"请输入名称",trigger:"blur"}],manager_name:[{required:!0,message:"请输入负责人姓名",trigger:"blur"}],manager_phone:[{required:!0,message:"请选择负责人联系方式",trigger:"change"}]},createLoading:!1}},methods:{requestCreate:function(){var a=this;this.$refs.form.validate(function(e){if(!e)return!1;a.createLoading||(a.createLoading=!0,Object(t.c)(a.form).then(function(e){a.createLoading=!1,a.resetFormData(),Object(n.Message)({message:e.message,type:"success",duration:3e3})}).catch(function(e){a.createLoading=!1}))})},resetFormData:function(){this.$refs.form.resetFields()}}},s=r("2877"),c=function(e){e.options.__source="src/views/locations/create/page.vue"},m=Object(s.a)(o,function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("d2-container",[r("el-row",{staticClass:"d2-mt d2-mb"},[r("el-col",[r("el-form",{directives:[{name:"loading",rawName:"v-loading",value:a.createLoading,expression:"createLoading"}],ref:"form",attrs:{refs:"form",rules:a.rules,model:a.form,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"名称",prop:"name"}},[r("el-col",{attrs:{span:12}},[r("el-input",{model:{value:a.form.name,callback:function(e){a.$set(a.form,"name",e)},expression:"form.name"}})],1)],1),r("el-form-item",{attrs:{label:"负责人",prop:"manager_name"}},[r("el-col",{attrs:{span:12}},[r("el-input",{model:{value:a.form.manager_name,callback:function(e){a.$set(a.form,"manager_name",e)},expression:"form.manager_name"}})],1)],1),r("el-form-item",{attrs:{label:"联系方式",prop:"manager_phone"}},[r("el-col",{attrs:{span:12}},[r("el-input",{model:{value:a.form.manager_phone,callback:function(e){a.$set(a.form,"manager_phone",e)},expression:"form.manager_phone"}})],1)],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:a.requestCreate}},[a._v("添加地点")])],1)],1)],1)],1)],1)},[],!1,null,"8b8623da",null);"function"==typeof c&&c(m);a.default=m.exports}}]);