(window.webpackJsonp=window.webpackJsonp||[]).push([[14,5],{375:function(t,e,n){var content=n(378);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("5c5941e6",content,!0,{sourceMap:!1})},376:function(t,e,n){"use strict";n.r(e);n(48);var r=n(35),o={props:{href:String,modal:String,label:String,variant:{type:String,default:"primary"},loader:Boolean,size:{type:String,validator:function(t){return["sm","lg"].includes(t)}}},methods:{maybeOpenModal:function(){this.modal&&this.$store.commit("ui/toggleModal",this.modal)}},computed:{usedComponent:function(){if(this.href){if(Object(r.startsWith)(this.href,"/"))return{name:"nuxt-link",props:{to:this.href}};var t="_blank";return Object(r.startsWith)(this.href,"#")&&(t=null),{name:"a",props:{href:this.href,target:t}}}return{name:"button"}}}},l=(n(377),n(5)),component=Object(l.a)(o,(function(){var t,e=this,n=e.$createElement,r=e._self._c||n;return r(e.usedComponent.name,e._g(e._b({tag:"component",staticClass:"btn-travel",class:(t={},t["btn-"+e.variant]=e.variant,t["btn-"+e.size]=e.size,t),on:{click:e.maybeOpenModal}},"component",e.usedComponent.props,!1),e.$listeners),[e._t("default",(function(){return[e.loader?r("div",{staticClass:"d-inline-flex align-items-center"},[r("div",{staticClass:"button-label"},[e._v("Laden...")]),e._v(" "),r("BaseIcon",{staticClass:"ms-1",attrs:{icon:"spinner",spin:""}})],1):r("div",{staticClass:"button-label"},[e._v("\n      "+e._s(e.label)+"\n    ")])]}))],2)}),[],!1,null,"1c13ed22",null);e.default=component.exports;installComponents(component,{BaseIcon:n(249).default})},377:function(t,e,n){"use strict";n(375)},378:function(t,e,n){var r=n(32)(!1);r.push([t.i,".btn-swiper[data-v-1c13ed22]{background:transparent;padding:0;border:none;color:#5c5e16;display:flex;align-items:center;outline:0}",""]),t.exports=r},393:function(t,e,n){var content=n(425);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("cf691c36",content,!0,{sourceMap:!1})},424:function(t,e,n){"use strict";n(393)},425:function(t,e,n){var r=n(32)(!1);r.push([t.i,".cover[data-v-5422a0bd]{background:#f5f6f8;background-size:cover;background-repeat:no-repeat;background-position:50%;position:relative;padding-top:6rem;padding-bottom:3rem}.cover__title[data-v-5422a0bd]{line-height:1.1;font-weight:400}.cover__title[data-v-5422a0bd]  strong{font-weight:600}.cover__prefix[data-v-5422a0bd]{font-size:1.2rem;color:#fff}.cover__content[data-v-5422a0bd]{position:relative;z-index:1;display:flex;flex-direction:column}.cover__dots[data-v-5422a0bd]{width:100%;height:35px;margin-top:3rem;background-image:url(/img/dots.svg)}.cover__dots[data-v-5422a0bd],.cover__wave[data-v-5422a0bd]{background-repeat:no-repeat}.cover__wave[data-v-5422a0bd]{width:75%;height:100px;margin-bottom:5rem;background-image:url(/img/wave.svg)}",""]),t.exports=r},454:function(t,e,n){"use strict";n.r(e);n(122);var r={props:{horizontalAlign:{type:String,default:"center"},verticalAlign:{type:String,default:"center"},textAlign:{type:String,default:"center"},coverType:{type:String,default:"square"},image:{type:String},prefixTag:{type:String,default:"div"},prefix:{type:String},title:{type:String},titleTag:{type:String,default:"h1"},body:{type:String},buttons:{type:Array},overlayOpacity:{type:Number|String,default:.35},bodyColor:{type:String,default:"default"}},computed:{coverStyle:function(){if(this.image)return{backgroundImage:"url('".concat(this.imageStyle(this.image,"cover"),"')")}},overlayStyle:function(){if(this.overlayOpacity)return{opacity:parseInt(this.overlayOpacity)/100}}}},o=(n(424),n(5)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cover text-dark",class:[t.coverType],style:t.coverStyle},[n("div",{staticClass:"cover__inner d-flex justify-content-stretch"},[n("div",{staticClass:"cover__overlay",style:t.overlayStyle}),t._v(" "),n("div",{staticClass:"cover__content flex-grow-1 rhythm-mb-4",class:["justify-content-"+t.verticalAlign,"align-items-"+t.horizontalAlign,"text-"+t.textAlign]},[n("div",{staticClass:"cover__wave"}),t._v(" "),n("div",{staticClass:"container"},[t.title?n("div",{staticClass:"cover__title h1 mb-5 col-md-5",domProps:{innerHTML:t._s(t.title)}}):t._e(),t._v(" "),t._t("body",(function(){return[t.body?n("div",{staticClass:"cover__body col-md-6",domProps:{innerHTML:t._s(t.body)}}):t._e()]})),t._v(" "),t.buttons&&t.buttons.length?n("div",{staticClass:"\n            cover__buttons\n            d-md-flex\n            rhythm-mb-2 rhythm-mb-md-0 rhythm-mr-2\n          "},t._l(t.buttons,(function(t,e){return n("BaseButton",{key:"cover-button-"+e,attrs:{label:t.title,modal:t.modal,href:t.url,variant:"primary"}})})),1):t._e()],2),t._v(" "),n("div",{staticClass:"cover__dots"})])])])}),[],!1,null,"5422a0bd",null);e.default=component.exports;installComponents(component,{BaseButton:n(376).default})}}]);