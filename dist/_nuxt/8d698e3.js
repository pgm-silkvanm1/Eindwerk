(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{389:function(t,e,n){"use strict";var r=n(7),l=n(251);r({target:"String",proto:!0,forced:n(252)("link")},{link:function(t){return l(this,"a","href",t)}})},588:function(t,e,n){"use strict";n.r(e);n(389);var r={props:{slice:Object,title:String,link:{type:String,default:"/"},excerpt:String,image:String},methods:{openLink:function(){this.$router.push({path:this.link})}}},l=n(5),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"teaser",on:{click:function(e){return e.preventDefault(),t.openLink.apply(null,arguments)}}},[n("div",{staticClass:"teaser__image"},[n("img",{staticClass:"img-fluid",attrs:{src:t.image}})]),t._v(" "),n("div",{staticClass:"teaser__title"},[n("div",{staticClass:"h3"},[n("BaseLink",{staticClass:"teaser__link h3",attrs:{to:t.link},nativeOn:{click:function(t){t.preventDefault()}}},[t._v(t._s(t.title))])],1)]),t._v(" "),t.excerpt?n("div",{staticClass:"teaser__excerpt"},[n("p",[t._v(t._s(t.excerpt))])]):t._e()])}),[],!1,null,"d1a2fa50",null);e.default=component.exports;installComponents(component,{BaseLink:n(250).default})}}]);