(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{375:function(t,e,n){var content=n(378);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("5c5941e6",content,!0,{sourceMap:!1})},376:function(t,e,n){"use strict";n.r(e);n(48);var o=n(35),r={props:{href:String,modal:String,label:String,variant:{type:String,default:"primary"},loader:Boolean,size:{type:String,validator:function(t){return["sm","lg"].includes(t)}}},methods:{maybeOpenModal:function(){this.modal&&this.$store.commit("ui/toggleModal",this.modal)}},computed:{usedComponent:function(){if(this.href){if(Object(o.startsWith)(this.href,"/"))return{name:"nuxt-link",props:{to:this.href}};var t="_blank";return Object(o.startsWith)(this.href,"#")&&(t=null),{name:"a",props:{href:this.href,target:t}}}return{name:"button"}}}},l=(n(377),n(5)),component=Object(l.a)(r,(function(){var t,e=this,n=e.$createElement,o=e._self._c||n;return o(e.usedComponent.name,e._g(e._b({tag:"component",staticClass:"btn-travel",class:(t={},t["btn-"+e.variant]=e.variant,t["btn-"+e.size]=e.size,t),on:{click:e.maybeOpenModal}},"component",e.usedComponent.props,!1),e.$listeners),[e._t("default",(function(){return[e.loader?o("div",{staticClass:"d-inline-flex align-items-center"},[o("div",{staticClass:"button-label"},[e._v("Laden...")]),e._v(" "),o("BaseIcon",{staticClass:"ms-1",attrs:{icon:"spinner",spin:""}})],1):o("div",{staticClass:"button-label"},[e._v("\n      "+e._s(e.label)+"\n    ")])]}))],2)}),[],!1,null,"1c13ed22",null);e.default=component.exports;installComponents(component,{BaseIcon:n(249).default})},377:function(t,e,n){"use strict";n(375)},378:function(t,e,n){var o=n(32)(!1);o.push([t.i,".btn-swiper[data-v-1c13ed22]{background:transparent;padding:0;border:none;color:#5c5e16;display:flex;align-items:center;outline:0}",""]),t.exports=o}}]);