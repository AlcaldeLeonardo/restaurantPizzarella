"use strict";(self.webpackChunkrestaurant=self.webpackChunkrestaurant||[]).push([[57],{610:(e,t,n)=>{n.d(t,{A:()=>f});var o=n(601),a=n.n(o),r=n(314),i=n.n(r),c=n(417),s=n.n(c),l=new URL(n(250),n.b),d=new URL(n(326),n.b),u=i()(a()),p=s()(l),m=s()(d);u.push([e.id,`body{font-family:"Gill Sans","Gill Sans MT",Calibri,"Trebuchet MS",sans-serif}.nav{color:#f0f8ff}.nav__uList{display:flex;gap:10%}.nav__listItem{font-size:1.5rem;margin:1rem}.nav__listItem span:hover{color:#92caf1;cursor:pointer}.nav__listItem span:active{color:#3ca1e9}.container{display:flex;flex-direction:column;justify-content:center;align-items:center}.home{display:flex;flex-direction:column;justify-content:center;align-items:center}.home__img{position:relative;display:flex;justify-content:center;align-items:center;background-image:url(${p});width:100%;height:200px;padding:2rem;background-size:cover;z-index:0}.home__img::before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5607843137);z-index:-1}.home__text{display:flex;flex-direction:column;align-items:center;color:#fff;width:70%;gap:2rem}.home__title{font-size:4rem}.home__description{text-align:center;font-size:1.5rem}.home__hours>p{text-align:center}.home__location:last-child{margin-bottom:1rem}.title{font-weight:bold}.card{width:400px;margin-top:3rem;padding:1rem;border:7px solid #cb5618;border-radius:10px;box-shadow:0 0 1cqb rgba(0,0,0,.479);background-color:#f0d5ab;font-size:1.2rem}.card__title{font-size:1.5rem;margin-bottom:1rem}.card:last-child{margin-bottom:2rem}.foodMenu{width:80vw}.foodMenu__flexSection{display:flex;justify-content:space-around;align-items:center}.foodMenu__flexSection img{width:400px;height:320px}.foodMenu__foodSection{width:400px}.foodMenu__foodAndPrice{display:flex;margin:1rem 1rem;justify-content:space-between;border-bottom:1px dotted #000;padding-bottom:.2rem}.foodMenu .price{font-weight:bold}.parallax{perspective:.1px;height:100vh;overflow-x:hidden;overflow-y:auto}.parallax__layer{position:absolute;top:0;right:0;bottom:0;left:0}.parallax__layer--base{transform:translateZ(0)}.parallax__layer--back{transform:translateZ(-2px) scale(5);background-image:url(${m});background-size:cover;background-position-y:-650px}.parallax__layer--back::before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.3137254902);z-index:-1}`,""]);const f=u},790:(e,t,n)=>{n.d(t,{A:()=>c});var o=n(601),a=n.n(o),r=n(314),i=n.n(r)()(a());i.push([e.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]);const c=i},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,a,r){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);o&&i[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},417:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var r={},i=[],c=0;c<e.length;c++){var s=e[c],l=o.base?s[0]+o.base:s[0],d=r[l]||0,u="".concat(l," ").concat(d);r[l]=d+1;var p=n(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=a(m,o);o.byIndex=c,t.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var r=o(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var c=n(r[i]);t[c].references--}for(var s=o(e,a),l=0;l<r.length;l++){var d=n(r[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}r=s}}},659:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,a&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},265:(e,t,n)=>{var o=n(72),a=n.n(o),r=n(825),i=n.n(r),c=n(659),s=n.n(c),l=n(56),d=n.n(l),u=n(540),p=n.n(u),m=n(113),f=n.n(m),h=n(790),g={};g.styleTagTransform=f(),g.setAttributes=d(),g.insert=s().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=p(),a()(h.A,g),h.A&&h.A.locals&&h.A.locals;var b=n(610),y={};y.styleTagTransform=f(),y.setAttributes=d(),y.insert=s().bind(null,"head"),y.domAPI=i(),y.insertStyleElement=p(),a()(b.A,y),b.A&&b.A.locals&&b.A.locals;class v{static#e="Pizzarella";static#t="Experience authentic Italian pizza in every bite. Our traditional wood-fired oven and fresh ingredients will transport you to Naples. Discover the taste of Italy at Pizzarella";static#n="In the charming restaurant Pizarrella, located in an Italian village, exquisite pizzas are prepared with a secret recipe passed down through generations. Each pizza reflects the passion and tradition of a family dedicated to Italian gastronomy. At Pizarrella, you will experience a unique culinary journey that transports you to the streets of Naples. Welcome to Pizarrella, where every bite is a taste of Italy on your palate!";static#o=[{days:"Monday to Friday",hours:"8 a.m. to 10 p.m."},{days:"Saturday and Sunday",hours:"8 a.m. to 6 p.m."}];static#a="You can locate Pizarrella pizzeria at 12 Via del Mare, in the charming coastal town of Portofino, Italy. A perfect location to enjoy delicious pizzas with views of the Mediterranean Sea!";static#r=[{food:"Margarita",price:10},{food:"Pepperoni",price:12},{food:"Hawaiana",price:13},{food:"Four Chesse",price:14},{food:"BBQ",price:10},{food:"Calzone",price:14},{food:"Chicken BBQ",price:16},{food:"Vegetarian",price:11},{food:"Ham and Mushroom",price:12}];static get Name(){return this.#e}static get Description(){return this.#t}static get About(){return this.#n}static get Menu(){return this.#r}static get Hours(){let e=this.#o,t=[];return e.forEach((e=>{t.push(`${e.days} - from ${e.hours}`)})),t}static get Location(){return this.#a}static addDayToHours(e,t){this.#o.push({day:e,hour:t})}static updateDescription(e){this.#t=e}}function _(e,t=""){const n=document.createElement("p");return n.className=t,n.textContent=e,n}function x(e,t=""){const n=document.createElement("h2");return n.className=t,n.textContent=e,n}function C(e,t){const n=document.createElement("div");return n.className="home__img img",n.appendChild(function(e,t){const n=document.createElement("div");return n.className="home__text",n.appendChild(x(e,"home__title home__text")),n.appendChild(_(t,"home__description")),n}(e,t)),n}function w(e,t){const n=document.createElement("div");return n.className="home__aboutUs aboutUs card",n.appendChild(x(e,"card__title title")),n.appendChild(_(t,"card__paragraph paragraph")),n}function z(e=document.createElement("div")){const t=document.querySelector("#content");t.innerHTML="",t.appendChild(e)}const E=n.p+"309656a5628da095ecdc.jpg";function M(){const e=document.createElement("div");return e.className="container Menu",e.appendChild(C("Italia on your Table","Explore an authentic Italian menu with delicious pizzas, pastas, and desserts at our pizzeria. Enjoy traditional and gourmet flavors, accompanied by select beverages. Immerse yourself in a unique culinary experience that will transport you to Italy with every dish. Experience an unforgettable gastronomic journey with us!")),e.appendChild(function(){const e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("div"),o=document.createElement("img"),a=v.Menu;return t.className="foodMenu__foodSection",n.className="foodMenu__flexSection",e.className="card foodMenu",o.src=E,e.appendChild(x("Menu's Pizzas","card__title title")),e.appendChild(n),a.forEach((e=>{let a=e.food,r=e.price;const i=document.createElement("div");i.className="foodMenu__foodAndPrice foodAndPrice",i.appendChild(_(`${a} Pizza`,"foodAndPrice__food food")),i.appendChild(_(`$${r}`,"foodAndPrice__price price")),t.appendChild(i),n.appendChild(t),n.appendChild(o)})),e}()),e}z(M()),document.querySelector("#btnHome").addEventListener("click",(()=>{z(function(){const e=document.createElement("div");return e.className="container home",e.appendChild(C(v.Name,v.Description)),e.appendChild(w("Let me tell you who we are!",v.About)),e.appendChild(function(e){const t=document.createElement("div");return t.className="card home__hours",t.appendChild(x("Hours","card__title title")),e.forEach((e=>{t.appendChild(_(e))})),t}(v.Hours)),e.appendChild(w("Location",v.Location)),e}())})),document.querySelector("#btnMenu").addEventListener("click",(()=>{z(M())})),document.querySelector("#btnContact").addEventListener("click",(()=>{z(function(){const e=document.createElement("div");return e.className="container Contact",e.appendChild(C("Contact Us!","A Italian Pizza is so close!")),e.appendChild(function(){const e=document.createElement("div");return e.appendChild(w("Mario","Tel: 555-555-111")),e.appendChild(w("Luigui","Tel: 555-555-222")),e.appendChild(w("Peache","Not Missing yet")),e.appendChild(w("Bowser","Tel: PEACH-YOU-SOCOOL 🎹🎵🎶")),e}()),e}())}))},326:(e,t,n)=>{e.exports=n.p+"00223152dad6be0dc478.jpeg"},250:(e,t,n)=>{e.exports=n.p+"05c8f2736e7edcf865ec.jpeg"}},e=>{e(e.s=265)}]);