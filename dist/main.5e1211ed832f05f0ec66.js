!function(t){function e(e){for(var r,c,u=e[0],l=e[1],a=e[2],f=0,p=[];f<u.length;f++)c=u[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);for(s&&s(e);p.length;)p.shift()();return i.push.apply(i,a||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,u=1;u<n.length;u++){var l=n[u];0!==o[l]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={1:0,0:0},i=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var u=window.webpackJsonp=window.webpackJsonp||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var a=0;a<u.length;a++)e(u[a]);var s=l;i.push([124,2]),n()}({124:function(t,e,n){n(125),t.exports=n(313)},312:function(t,e,n){},313:function(t,e,n){"use strict";n.r(e);var r=n(89),o=n(123);n(311);n(312),n.p;var i,c,u=n(60),l=document.getElementById("slider");i="container-polygon",c="swiper-slide",l.querySelectorAll(".".concat(i)).forEach((function(t){t.classList.add(c)}));new o.a(".swiper-container",{direction:"horizontal",loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});r(".logo").click((function(){r(this).toggleClass("border")})),Object(u.testFunction)(),console.log("Вызвать статистику: analytics.getClick()")},60:function(t,e,n){"use strict";var r;function o(){console.log("dist_clean_test + watcher_test")}n.r(e),n.d(e,"testFunction",(function(){return o})),window.analytics=(r=0,document.addEventListener("click",(function(){r++})),{getClick:function(){return"Произведено ".concat(r," кликов по странице")}})}});