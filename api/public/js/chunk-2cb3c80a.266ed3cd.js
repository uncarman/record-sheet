(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2cb3c80a","chunk-014e66b6"],{"386c":function(e,t,o){"use strict";o.r(t);var a=o("89c4");t.default=a.default},"89c4":function(e,t,o){"use strict";o.r(t);o("20d6"),o("7f7f");var a=o("8cd8"),n=o("5c96"),r={name:"page",data:function(){return{results:[{label:"正常",value:1},{label:"异常",value:0}],device:{name:""},form:{result:"",notes:"",logger_name:"",logger_phone:"",logger_position:"",photos:[]},check_item_logs:[],rules:{result:[{required:!0,message:"请选择检查结果",trigger:"blur"}],logger_name:[{required:!0,message:"请填写负责人姓名",trigger:"blur"}],logger_phone:[{required:!0,message:"请填写记录人的联系方式",trigger:"blur"}],logger_position:[{required:!0,message:"请填写记录地点",trigger:"blur"}]},updateLoading:!1,photos:[]}},created:function(){this.maintain_log_id=this.$route.params.id,this.requestGetMaintainLog()},methods:{requestGetMaintainLog:function(){var o=this;Object(a.b)(this.maintain_log_id).then(function(e){o.device.name=e.data.device.name,o.form.result=e.data.result,o.form.notes=e.data.notes,o.form.logger_name=e.data.logger_name,o.form.logger_phone=e.data.logger_phone,o.form.logger_position=e.data.logger_position,o.check_item_logs=e.data.check_item_logs,null!=e.data.photos&&e.data.photos.map(function(e,t){o.photos.push({name:t,url:e})})})},requestUpdate:function(){var t=this;this.form.photos=this.photos.map(function(e){return e.url}),this.form.check_item_logs=this.check_item_logs.map(function(e){return{id:e.id,result:e.result}}),this.$refs.form.validate(function(e){if(!e)return!1;t.updateLoading||(t.updateLoading=!0,Object(a.d)(t.maintain_log_id,t.form).then(function(e){t.updateLoading=!1,Object(n.Message)({message:e.message,type:"success",duration:3e3})}).catch(function(){t.updateLoading=!1}))})},handleRemove:function(t,e){var o=this.photos.findIndex(function(e){return e.name===t.name});-1!==o&&this.photos.splice(o)},handleFileChange:function(e,t){var o=this,a=new FileReader;a.readAsDataURL(e.raw),a.onload=function(){o.photos.push({name:e.name,url:a.result})}}}},l=o("2877"),s=function(e){e.options.__source="src/views/maintain_logs/edit/page.vue"},i=Object(l.a)(r,function(){var o=this,e=o.$createElement,a=o._self._c||e;return a("d2-container",[a("el-row",{staticClass:"d2-mt d2-mb"},[a("el-col",[a("el-form",{directives:[{name:"loading",rawName:"v-loading",value:o.updateLoading,expression:"updateLoading"}],ref:"form",attrs:{refs:"form",rules:o.rules,model:o.form,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"设备名"}},[o._v("\n                    "+o._s(o.device.name)+"\n                ")]),a("el-form-item",{attrs:{label:"检查结果",prop:"result"}},[a("el-select",{attrs:{placeholder:"请选择检查结果"},model:{value:o.form.result,callback:function(e){o.$set(o.form,"result",e)},expression:"form.result"}},o._l(o.results,function(e,t){return a("el-option",{key:t,attrs:{label:e.label,value:e.value}})}),1)],1),a("el-form-item",{attrs:{label:"异常原因",prop:"notes"}},[a("el-col",{attrs:{span:12}},[a("el-input",{attrs:{type:"textarea"},model:{value:o.form.notes,callback:function(e){o.$set(o.form,"notes",e)},expression:"form.notes"}})],1)],1),a("el-form-item",{attrs:{label:"记录人",prop:"logger_name"}},[a("el-col",{attrs:{span:12}},[a("el-input",{model:{value:o.form.logger_name,callback:function(e){o.$set(o.form,"logger_name",e)},expression:"form.logger_name"}})],1)],1),a("el-form-item",{attrs:{label:"联系方式",prop:"logger_phone"}},[a("el-col",{attrs:{span:12}},[a("el-input",{model:{value:o.form.logger_phone,callback:function(e){o.$set(o.form,"logger_phone",e)},expression:"form.logger_phone"}})],1)],1),a("el-form-item",{attrs:{label:"记录地点",prop:"logger_position"}},[a("el-col",{attrs:{span:12}},[a("el-input",{model:{value:o.form.logger_position,callback:function(e){o.$set(o.form,"logger_position",e)},expression:"form.logger_position"}})],1)],1),a("el-form-item",{attrs:{label:"检查项"}},[a("el-col",{attrs:{span:16}},o._l(o.check_item_logs,function(t,e){return a("el-row",{key:e,staticClass:"d2-mt-10 d2-mb-10"},[a("el-col",{staticClass:"d2-mr-10",attrs:{span:24}},[a("el-row",[a("el-col",{attrs:{span:16}},[o._v(o._s(t.name))]),a("el-col",{attrs:{span:8}},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-text":"正常","inactive-text":"异常","active-value":1,"inactive-value":0},model:{value:t.result,callback:function(e){o.$set(t,"result",e)},expression:"item.result"}})],1)],1)],1)],1)}),1)],1),a("el-form-item",{attrs:{label:"照片"}},[a("el-upload",{attrs:{action:"","list-type":"picture-card","on-change":o.handleFileChange,"on-remove":o.handleRemove,"auto-upload":!1,"file-list":Object.values(o.photos)}},[a("i",{staticClass:"el-icon-plus"})])],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:o.requestUpdate}},[o._v("保存")])],1)],1)],1)],1)],1)},[],!1,null,"99ccee56",null);"function"==typeof s&&s(i);t.default=i.exports},"8cd8":function(e,t,o){"use strict";o.d(t,"c",function(){return n}),o.d(t,"a",function(){return r}),o.d(t,"b",function(){return l}),o.d(t,"d",function(){return s});var a=o("9bd2");function n(e){return Object(a.a)({url:"/maintain_logs",method:"get",params:e})}function r(e){return Object(a.a)({url:"/maintain_logs/".concat(e),method:"delete"})}function l(e){return Object(a.a)({url:"/maintain_logs/".concat(e),method:"get"})}function s(e,t){return Object(a.a)({url:"/maintain_logs/".concat(e),method:"put",data:t})}}}]);