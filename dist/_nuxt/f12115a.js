(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{421:function(t,e,n){"use strict";n.r(e);var r={mounted:function(){var t=this,e=n(478);n(481);var r=e.auth.AuthUI.getInstance()||new e.auth.AuthUI(this.$fire.auth),o={signInOptions:[this.$fireModule.auth.EmailAuthProvider.PROVIDER_ID,this.$fireModule.auth.GoogleAuthProvider.PROVIDER_ID],signInSuccessUrl:"/",callbacks:{signInSuccessWithAuthResult:function(){console.log("Successfully signed in"),t.$router.push("/dashboard")}}};r.start("#firebaseui-auth-container",o)}},o=n(5),component=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"firebaseui-auth-container"}})}),[],!1,null,null,null);e.default=component.exports}}]);