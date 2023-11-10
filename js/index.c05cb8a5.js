(function(t){function e(e){for(var a,i,c=e[0],o=e[1],u=e[2],l=0,f=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);m&&m(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,i=1;i<n.length;i++){var o=n[i];0!==r[o]&&(a=!1)}a&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={index:0},s=[];function i(t){return c.p+"js/"+({movie:"movie",notfound:"notfound",payment:"payment",seats:"seats",summary:"summary"}[t]||t)+"."+{movie:"cc1c856e",notfound:"e27e084d",payment:"64b4bce3",seats:"8a63a8e0",summary:"86306a01"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=a);var s,o=document.createElement("script");o.charset="utf-8",o.timeout=120,c.nc&&o.setAttribute("nonce",c.nc),o.src=i(t);var u=new Error;s=function(e){o.onerror=o.onload=null,clearTimeout(l);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",u.name="ChunkLoadError",u.type=a,u.request=s,n[1](u)}r[t]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:o})}),12e4);o.onerror=o.onload=s,document.head.appendChild(o)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/muvee-tix/",c.oe=function(t){throw console.error(t),t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var m=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header"),n("router-view"),n("Footer")],1)},s=[],i=n("5530"),c=n("2f62"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"has-text-centered mb-3"},[n("router-link",{attrs:{to:"/"}},[n("h1",{staticClass:"title is-size-1 mt-5 has-text-light"},[t._v("Muvee Tix")])])],1)},u=[],l={name:"Header"},m=l,f=n("2877"),d=Object(f["a"])(m,o,u,!1,null,null,null),p=d.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer has-text-light has-text-centered mt-6 is-size-7"},[n("div",[n("a",{staticClass:"has-text-white is-size-6",attrs:{href:"https://www.themoviedb.org",target:"_blank"}},[n("img",{staticStyle:{height:"64px",width:"auto"},attrs:{src:t.getTmdbImage()}})])]),t._m(0),t._m(1),n("p",{staticClass:"mt-4"},[t._v("© 2020 Muvee Tix")])])},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-2 mb-4 has-text-white"},[t._v(" Metadata provided by by "),n("strong",[n("a",{attrs:{href:"https://www.themoviedb.org",target:"_blank"}},[t._v(" TMDB ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"has-text-white is-size-6 mt-4",attrs:{href:"https://github.com/cdterry87/muvee-tix",target:"_blank"}},[n("i",{staticClass:"fab fa-github"}),t._v(" View Source on GitHub ")])}],h={name:"Footer",methods:{getTmdbImage:function(){return n("60e1")}}},g=h,y=Object(f["a"])(g,b,v,!1,null,null,null),_=y.exports,O=Object(c["a"])("movies"),j=O.mapActions,T={name:"App",components:{Header:p,Footer:_},created:function(){this.getMovies()},methods:Object(i["a"])({},j(["getMovies"]))},x=T,C=(n("5c0b"),Object(f["a"])(x,r,s,!1,null,null,null)),S=C.exports,k=(n("d3b7"),n("8c4f")),w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"columns is-multiline"},t._l(t.movies,(function(e,a){return n("div",{key:a,staticClass:"column is-one-third-desktop is-half-tablet is-full-mobile"},[n("Card",t._b({},"Card",t.getMovieDetails(e),!1))],1)})),0)])},E=[],M=n("865b"),A=n("ad01"),P=Object(c["a"])("movies"),R=P.mapState,I=Object(c["a"])("cart"),D=I.mapActions,$={name:"Home",components:{Card:A["a"]},computed:Object(i["a"])({},R(["movies"])),mounted:function(){this.resetCartState()},methods:Object(i["a"])(Object(i["a"])({},D(["resetCartState"])),{},{getMovieDetails:function(t){return Object(M["a"])(t)}})},F=$,N=Object(f["a"])(F,w,E,!1,null,null,null),q=N.exports;a["a"].use(k["a"]);var z,H=[{path:"/",name:"home",component:q},{path:"/movie/:id",name:"movie",props:!0,component:function(){return n.e("movie").then(n.bind(null,"def6"))}},{path:"/seats",name:"seats",component:function(){return n.e("seats").then(n.bind(null,"046c"))}},{path:"/snacks",name:"snacks",component:function(){return n.e("seats").then(n.bind(null,"6696"))}},{path:"/payment",name:"payment",component:function(){return n.e("payment").then(n.bind(null,"1175"))}},{path:"/summary",name:"summary",component:function(){return n.e("summary").then(n.bind(null,"ad13"))}},{path:"*",name:"notfound",component:function(){return n.e("notfound").then(n.bind(null,"9703"))}}],L=new k["a"]({mode:"history",base:"/muvee-tix/",routes:H}),G=L,V=n("0e44"),B=(n("4160"),n("13d5"),n("a9e3"),n("b680"),n("07ac"),n("159b"),n("ade3")),J=function(){return Math.floor(11*Math.random()+5)/100},K={getTaxes:J},U="GET_MOVIES",W="SET_CART_MOVIE",X="SET_CART_DATE",Y="SET_CART_TIME",Q="SET_CART_TICKETS",Z="SET_CART_SEATS",tt="SET_CART_SNACKS",et="SET_CART_PAYMENT",nt="RESET_CART_STATE",at="GET_TAXES",rt="SET_CLAIMED_SEATS",st=function(){return{cart:{movie:{id:0,title:""},date:"",time:"",tickets:{adults:0,kids:0,seniors:0},seats:[],snacks:{},payment:{type:"",number:"",expiration:"",cvv:""},taxes:""},prices:{adults:14,kids:10,seniors:12}}},it=st(),ct={movie:function(t){return t.cart.movie},date:function(t){return t.cart.date},time:function(t){return t.cart.time},tickets:function(t){return t.cart.tickets},seats:function(t){return t.cart.seats},snacks:function(t){return t.cart.snacks},totalSnacks:function(t){return Object.values(t.cart.snacks).reduce((function(t,e){return t+Number(e.quantity)}),0)},payment:function(t){return t.cart.payment},totalPrices:function(t){var e=t.cart.tickets.adults*t.prices.adults,n=t.cart.tickets.kids*t.prices.kids,a=t.cart.tickets.seniors*t.prices.seniors,r=0;return Object.values(t.cart.snacks).forEach((function(t){r+=t.price*t.quantity})),{adults:e,kids:n,seniors:a,snacks:r,total:e+n+a+r}},totalSeats:function(t){var e=t.cart.tickets,n=e.adults,a=e.kids,r=e.seniors;return parseInt(n)+parseInt(a)+parseInt(r)},totalSeatsSelected:function(t){return t.cart.seats.length},calculatedTaxAmounts:function(t,e){return{calculatedTax:(t.cart.taxes*e.totalPrices.total).toFixed(2),totalWithTax:(t.cart.taxes*e.totalPrices.total+e.totalPrices.total).toFixed(2)}},paymentLastFourDigits:function(t){return t.cart.payment.number.substr(-4)}},ot={resetCartState:function(t){var e=t.commit;e(nt)},setCartMovie:function(t,e){var n=t.commit;n(W,e)},setCartDate:function(t,e){var n=t.commit;n(X,e)},setCartTime:function(t,e){var n=t.commit;n(Y,e)},setCartTickets:function(t,e){var n=t.commit;n(Q,e)},setCartSeats:function(t,e){var n=t.commit;n(Z,e)},setCartSnacks:function(t,e){var n=t.commit;n(tt,e)},setCartPayment:function(t,e){var n=t.commit;n(et,e)},getTaxes:function(t){var e=t.commit,n=K.getTaxes();e(at,n)}},ut=(z={},Object(B["a"])(z,nt,(function(t){Object.assign(t,st())})),Object(B["a"])(z,W,(function(t,e){t.cart.movie=e})),Object(B["a"])(z,X,(function(t,e){t.cart.date=e})),Object(B["a"])(z,Y,(function(t,e){t.cart.time=e})),Object(B["a"])(z,Q,(function(t,e){t.cart.tickets=e})),Object(B["a"])(z,Z,(function(t,e){t.cart.seats=e})),Object(B["a"])(z,tt,(function(t,e){t.cart.snacks=Object(i["a"])({},e)})),Object(B["a"])(z,et,(function(t,e){t.cart.payment=e})),Object(B["a"])(z,at,(function(t,e){t.cart.taxes=e})),z),lt={namespaced:!0,state:it,getters:ct,actions:ot,mutations:ut},mt=(n("7db0"),n("96cf"),n("1da1")),ft=(n("99af"),n("bc3a")),dt=n.n(ft),pt="https://api.themoviedb.org/3",bt="f1493fb9e5ce76e5e8bd66feff0f0598",vt="8278082",ht=function(){var t=Object(mt["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,dt.a.get("".concat(pt,"/list/").concat(vt,"?api_key=").concat(bt));case 3:return e=t.sent,t.abrupt("return",e.data.items);case 7:t.prev=7,t.t0=t["catch"](0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),gt={getMovies:ht},yt={namespaced:!0,state:{movies:[]},getters:{getMovie:function(t){return function(e){return t.movies.find((function(t){return t.id===parseInt(e)}))}}},actions:{getMovies:function(t){return Object(mt["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,gt.getMovies();case 3:a=e.sent,n(U,a);case 5:case"end":return e.stop()}}),e)})))()}},mutations:Object(B["a"])({},U,(function(t,e){t.movies=e}))},_t=n("2909"),Ot={namespaced:!0,state:{seats:{}},getters:{claimedSeats:function(t,e,n){var a=n.cart.cart,r=a.movie,s=a.date,i=a.time;return t.seats[r.id]&&t.seats[r.id][s]&&t.seats[r.id][s][i]?t.seats[r.id][s][i]:[]},totalClaimedSeats:function(t,e){return e.claimedSeats.length}},actions:{setClaimedSeats:function(t,e){var n=t.commit,a=t.rootState,r=a.cart.cart,s=r.movie,i=r.date,c=r.time;n(rt,{id:s.id,date:i,time:c,seats:e})}},mutations:Object(B["a"])({},rt,(function(t,e){var n,a=e.id,r=e.date,s=e.time,c=e.seats;t.seats[a]&&t.seats[a][r]&&t.seats[a][r][s]?(n=t.seats[a][r][s]).push.apply(n,Object(_t["a"])(c)):t.seats[a]&&t.seats[a][r]?t.seats[a][r]=Object(i["a"])(Object(i["a"])({},t.seats[a][r]),{},Object(B["a"])({},s,c)):t.seats[a]?t.seats[a]=Object(i["a"])(Object(i["a"])({},t.seats[a]),{},Object(B["a"])({},r,Object(B["a"])({},s,c))):t.seats=Object(i["a"])(Object(i["a"])({},t.seats),{},Object(B["a"])({},a,Object(B["a"])({},r,Object(B["a"])({},s,c))))}))};a["a"].use(c["b"]);var jt=new c["b"].Store({modules:{cart:lt,movies:yt,seats:Ot},plugins:[Object(V["a"])()]});n("4de4");a["a"].filter("currency",(function(t){return!t||isNaN(t)?t:new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(t)}));n("15f5"),n("7051");a["a"].config.productionTip=!1,new a["a"]({router:G,store:jt,render:function(t){return t(S)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"60e1":function(t,e,n){t.exports=n.p+"img/tmdb.53b6ee59.png"},"865b":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var a=function(t){var e=t.id,a=t.title,r=t.poster_path,s=t.release_date,i=s&&new Date(s)<=new Date?"/movie/".concat(e):"#",c=n("f4a0");return{id:e,link:i,title:a,image:{src:r?"https://image.tmdb.org/t/p/w500/".concat(r):c,alt:"Movie Poster for ".concat(a)}}}},"9c0c":function(t,e,n){},ad01:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-link",{staticClass:"card__container",attrs:{to:t.link}},[t.hasTitle?n("div",{staticClass:"card-content has-text-centered"},[n("h2",{staticClass:"title has-text-light is-size-6"},[t._v(" "+t._s(t.title.length>30?t.title.substring(0,30)+"...":t.title)+" ")])]):t._e(),n("div",{staticClass:"card"},[n("div",{staticClass:"card-image"},[n("figure",{staticClass:"image is-4by5"},[n("img",t._b({},"img",t.image,!1))])])])])},r=[],s=(n("a9e3"),{name:"Card",props:{id:{type:Number,required:!0},link:{type:String,required:!0},image:{type:Object},title:{type:String,required:!0},hasTitle:{type:Boolean,default:!0}}}),i=s,c=n("2877"),o=Object(c["a"])(i,a,r,!1,null,null,null);e["a"]=o.exports},f4a0:function(t,e,n){t.exports=n.p+"img/comingsoon.e3147ac0.png"}});
//# sourceMappingURL=index.c05cb8a5.js.map