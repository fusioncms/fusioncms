(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{xiJl:function(t,e,a){"use strict";a.r(e);var s={data:function(){return{fieldtypes:[],structures:[],values:[]}},methods:{submit:function(){var t=this,e=new FormData;e.append("_method","PATCH"),e.append("structures",JSON.stringify(this.values)),axios.post("/api/settings/fieldtypes",e).then(function(){toast("Settings have been updated.","success"),t.$router.push("/settings")})}},beforeRouteEnter:function(t,e,a){axios.all([axios.get("/api/fieldtypes"),axios.get("/api/structures"),axios.get("/api/settings/fieldtypes")]).then(axios.spread(function(t,e,s){a(function(a){var n=t.data.data,i=e.data.data,l=s.data.data,r=JSON.parse(l.items[0].value);_.isEmpty(r)&&_.each(n,function(t){var e=_.reject(i,function(e){return _.includes(t.exclude,e.handle)});r[t.handle]=_.map(e,function(t){return t.handle})}),a.fieldtypes=n,a.structures=i,a.values=r})}))}},n=a("KHd+"),i=Object(n.a)(s,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("portal",{attrs:{to:"title"}},[a("app-title",{attrs:{icon:"cog"}},[t._v("Fieldtype Settings")])],1),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"content-container"},[a("form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[a("div",{staticClass:"col w-full xl:w-2/3 mx-auto"},[a("p-card",t._l(t.fieldtypes,function(e){return a("div",{key:e.handle},[a("div",{staticClass:"flex flex-col lg:flex-row lg:justify-between"},[a("div",{staticClass:"mb-6 lg:mb-0"},[a("h3",[a("fa-icon",{staticClass:"fa-fw mr-2",attrs:{icon:["far",e.icon]}}),t._v(" "+t._s(e.name))],1),t._v(" "),a("p",{staticClass:"text-sm"},[t._v(t._s(e.description))])]),t._v(" "),a("div",[a("p-checkbox-group",{attrs:{label:"Available Stuctures"}},t._l(t.structures,function(s){return a("p-checkbox",{key:s.handle,attrs:{name:s.handle,id:s.handle,"native-value":s.handle},model:{value:t.values[e.handle],callback:function(a){t.$set(t.values,e.handle,a)},expression:"values[fieldtype.handle]"}},[t._v(t._s(s.name))])}),1)],1)]),t._v(" "),a("hr")])}),0)],1),t._v(" "),a("portal",{attrs:{to:"actions"}},[a("router-link",{staticClass:"button mr-3",attrs:{to:{name:"settings"}}},[t._v("Cancel")]),t._v(" "),a("button",{staticClass:"button button--primary",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.submit(e)}}},[t._v("Save Settings")])],1)],1)])])],1)},[],!1,null,null,null);e.default=i.exports}}]);