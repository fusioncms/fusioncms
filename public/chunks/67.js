(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{mFyt:function(t,i,a){"use strict";a.r(i);var e={data:function(){return{matrices:[],activities:[],feed:[],icon:""}},computed:{quicklinks:function(){if(this.matrices)return _.filter(this.matrices,(function(t){return 1==t.quicklink}))}},beforeRouteEnter:function(t,i,a){axios.all([axios.get("/api/matrices"),axios.get("/api/activity"),axios.get("https://getfusioncms.efelle.co/blog.json").catch((function(){return{data:{items:[]}}}))]).then(axios.spread((function(t,i,e){a((function(a){a.matrices=t.data.data,a.activities=i.data.data,a.feed=e.data.items}))})))}},s=a("KHd+"),c=Object(s.a)(e,(function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",[a("portal",{attrs:{to:"title"}},[a("app-title",{attrs:{icon:"grip-horizontal"}},[t._v("Dashboard")])],1),t._v(" "),a("quicklinks",{attrs:{links:t.quicklinks}}),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col mb-6 md:w-full"},[a("analytics-overview")],1)]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col w-full lg:w-2/3"},[a("recent-activity",{attrs:{activities:t.activities}})],1),t._v(" "),a("div",{staticClass:"col w-full lg:w-1/3"},[a("recent-news",{attrs:{feed:t.feed}})],1)])],1)}),[],!1,null,null,null);i.default=c.exports}}]);