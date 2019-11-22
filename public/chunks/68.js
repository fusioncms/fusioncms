(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{L2b2:function(e,t,i){"use strict";i.r(t);var a=i("T7iU"),s=i.n(a),n={data:function(){return{file:{},name:"",description:"",player:null,loaded:!1}},computed:{isImage:function(){return"image"===this.type},isVideo:function(){return"video"===this.type},isAudio:function(){return"audio"===this.type},isDocument:function(){return"document"===this.type},isMisc:function(){return"misc"===this.type},type:function(){var e=_.split(this.file.mimetype,"/",1)[0];switch(e){case"image":return"image";case"audio":return"audio";case"video":return"video";case"application":case"text":return"document";default:return"misc"}},bytes:function(){var e=this.file.bytes;if(Math.abs(e)<1e3)return e+" B";var t=-1,i=["KB","MB","GB","TB","PB","EB","ZB","YB"];do{e/=1e3,++t}while(Math.abs(e)>=1e3&&t<i.length-1);return e.toFixed(1)+" "+i[t]}},watch:{file:{handler:function(e){var t=this;this.$nextTick((function(){t.player=new s.a(t.$refs.player,{title:t.file.name,ratio:"16:9",controls:["play-large","restart","play","progress","current-time","duration","mute","volume","captions","settings","pip","airplay","fullscreen"],settings:["quality","loop"]})}))},deep:!0}},methods:{getFile:function(e,t,i){var a=this;axios.get("/api/files/"+e.params.uuid).then((function(e){a.file=e.data.data,a.name=a.file.name,a.description=a.file.description,a.loaded=!0,a.$nextTick((function(){a.player=new s.a(a.$refs.player,{title:a.file.name,ratio:"16:9",controls:["play-large","restart","play","progress","current-time","duration","mute","volume","captions","settings","pip","airplay","fullscreen"],settings:["quality","loop"]})}))}))},submit:function(){var e=this;axios.patch("/api/files/"+this.file.id,{name:this.name,description:this.description}).then((function(t){e.file.name=e.name,toast("The file's information was successfully updated","success")})).catch((function(e){toast(e.response.data.message,"danger")}))},goBack:function(){this.$router.go(-1)},download:function(){var e=this;axios({url:"/api/files/"+this.file.uuid+"/download",method:"GET",responseType:"blob"}).then((function(t){var i=window.URL.createObjectURL(new Blob([t.data])),a=document.createElement("a");a.href=i,a.setAttribute("download",e.file.original),document.body.appendChild(a),a.click()})),toast(this.file.original+" downloaded","success")}},beforeRouteEnter:function(e,t,i){i((function(a){a.getFile(e,t,i)}))},beforeRouteUpdate:function(e,t,i){this.getFile(e,t,i),i()}},r=i("KHd+"),l=Object(r.a)(n,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("portal",{attrs:{to:"title"}},[i("app-title",{attrs:{icon:"image"}},[e._v(e._s(e.loaded?e.file.name:""))])],1),e._v(" "),e.loaded?i("div",{key:e.file.name,staticClass:"row"},[i("div",{staticClass:"content-container"},[i("p-card",[i("div",{staticClass:"flex items-center justify-center"},[e.isImage?i("div",[i("p-img",{staticClass:"rounded",attrs:{src:"/img/placeholder-large.svg","background-color":"#ffffff",lazySrc:e.file.url+"?w=1500&h=1500&fit=max",alt:e.file.description}})],1):e.isVideo?i("div",{staticClass:"w-full"},[i("video",{ref:"player",attrs:{controls:"",crossorigin:""}},[i("source",{attrs:{src:e.file.url,type:e.file.mimetype,size:"576"}})])]):i("div",[i("p-img",{attrs:{src:"/img/"+e.type+"-small.svg","background-color":"#ffffff",width:200,height:200,alt:e.file.description}}),e._v(" "),i("div",{staticClass:"text-center px-6 py-3 rounded border border-gray-400 bg-gray-200 text-gray-800"},[e._v("\n                            No preview available\n                        ")])],1)])]),e._v(" "),e.isVideo?i("p-card",{staticClass:"mt-6 text-center text-sm text-gray-800"},[e._v("\n                If you intend on serving this video on your website, it's highly recommended that you use a 3rd party service such as "),i("a",{attrs:{href:""}},[e._v("Youtube")]),e._v(" or "),i("a",{attrs:{href:""}},[e._v("Vimeo")]),e._v(".\n            ")]):e._e()],1),e._v(" "),i("div",{staticClass:"side-container"},[i("p-card",{staticClass:"mb-6"},[i("form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[i("portal",{attrs:{to:"actions"}},[i("p-button",{directives:[{name:"modal",rawName:"v-modal:delete",arg:"delete"}],staticClass:"mr-4",attrs:{theme:"danger"}},[e._v("Delete")]),e._v(" "),i("p-button",[e._v("Move")]),e._v(" "),i("p-button",[e._v("Replace")]),e._v(" "),i("p-button",{staticClass:"mr-4",on:{click:function(t){return t.preventDefault(),e.download(t)}}},[e._v("Download")]),e._v(" "),i("p-button",{on:{click:function(t){return t.preventDefault(),e.goBack(t)}}},[e._v("Go Back")]),e._v(" "),i("button",{staticClass:"button button--primary",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.submit(t)}}},[e._v("Save")])],1),e._v(" "),i("p-input",{attrs:{name:"name",label:"Name"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),i("p-textarea",{attrs:{name:"description",label:"Description",help:"Describing your file isn't mandatory but is incredibly useful for accessibility."},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}})],1)]),e._v(" "),i("p-card",{staticClass:"mb-6"},[i("p-input",{staticClass:"text-sm",attrs:{name:"share",readonly:"",label:"Share",value:e.file.url}})],1),e._v(" "),e.file?i("p-card",{staticClass:"text-sm"},[i("div",{staticClass:"flex justify-between"},[i("label",{staticClass:"form__label"},[e._v("Size")]),e._v(" "),i("p",[e._v(e._s(e.bytes))])]),e._v(" "),i("div",{staticClass:"flex justify-between"},[i("label",{staticClass:"form__label"},[e._v("Mimetype")]),e._v(" "),i("p",[e._v(e._s(e.file.mimetype))])]),e._v(" "),e.file.width&&e.file.height?i("div",{staticClass:"flex justify-between"},[i("label",{staticClass:"form__label"},[e._v("Dimensions")]),e._v(" "),i("p",[e._v(e._s(e.file.width)+" x "+e._s(e.file.height))])]):e._e(),e._v(" "),i("div",{staticClass:"flex justify-between"},[i("label",{staticClass:"form__label"},[e._v("Last Modified")]),e._v(" "),i("p",[e._v(e._s(e.moment(e.file.created_at.date).format("L")))])])]):e._e()],1)]):e._e(),e._v(" "),i("portal",{attrs:{to:"modals"}},[i("delete-file-modal",{attrs:{file:e.file}})],1)],1)}),[],!1,null,null,null);t.default=l.exports}}]);