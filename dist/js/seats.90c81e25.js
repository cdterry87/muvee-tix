(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["seats"],{"046c":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"box"},[a("h2",{staticClass:"title is-size-4 has-text-centered"},[t._v("Select your seats")]),a("div",{staticClass:"mt-2 notification subtitle is-size-6 has-text-centered is-light",class:{"is-success":0===t.seatsRemaining,"is-danger":t.seatsRemaining<0||this.isOverCapacity,"is-info":t.seatsRemaining>0}},[t._v(" "+t._s(t.message)+" ")]),a("SeatSelection",{attrs:{rows:t.seatRows,columns:t.seatColumns},on:{onSeatSelect:t.onSeatSelect}}),a("hr"),a("div",{staticClass:"field is-grouped is-grouped-centered mt-4"},[a("div",{staticClass:"control"},[a("router-link",{attrs:{to:"/movie/"+t.movie.id}},[a("button",{staticClass:"button is-info",attrs:{"data-testid":"prev-button"}},[t._v(" Previous ")])])],1),a("div",{staticClass:"control"},[a("router-link",{attrs:{to:"/snacks"}},[a("button",{staticClass:"button is-info",attrs:{"data-testid":"next-button",disabled:t.totalSeats!==t.totalSeatsSelected}},[t._v(" Next ")])])],1)])],1)])},n=[],i=a("5530"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"seats-grid"},[a("table",{staticClass:"table is-bordered"},[t._l(t.reversedRows,(function(e,s){return a("tr",{key:s},t._l(t.columns,(function(s,n){return a("td",{key:n,staticClass:"seat",class:t.getSeatClasses(e,s)},[a("label",{staticClass:"seat__label",attrs:{for:t.getSeatByRowAndColumn(e,s)}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedSeats,expression:"selectedSeats"}],ref:t.getSeatByRowAndColumn(e,s),refInFor:!0,staticClass:"visually-hidden",attrs:{type:"checkbox",name:t.getSeatByRowAndColumn(e,s),id:t.getSeatByRowAndColumn(e,s),disabled:t.claimedSeats.includes(t.getSeatByRowAndColumn(e,s))},domProps:{value:t.getSeatByRowAndColumn(e,s),checked:Array.isArray(t.selectedSeats)?t._i(t.selectedSeats,t.getSeatByRowAndColumn(e,s))>-1:t.selectedSeats},on:{change:function(a){var n=t.selectedSeats,i=a.target,c=!!i.checked;if(Array.isArray(n)){var r=t.getSeatByRowAndColumn(e,s),o=t._i(n,r);i.checked?o<0&&(t.selectedSeats=n.concat([r])):o>-1&&(t.selectedSeats=n.slice(0,o).concat(n.slice(o+1)))}else t.selectedSeats=c}}}),t._v(" "+t._s(t.getSeatByRowAndColumn(e,s))+" ")])])})),0)})),t._m(0)],2)])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticClass:"block has-background-dark has-text-light title is-size-5 has-text-centered",attrs:{colspan:"10"}},[t._v(" - FRONT OF THEATER - ")])])}],o=(a("99af"),a("caad"),a("a9e3"),a("d3b7"),a("2532"),a("ddb0"),a("2909")),l=a("2f62"),u=Object(l["a"])("cart"),d=u.mapState,m=u.mapActions,p={name:"SeatSelection",data:function(){return{selectedSeats:[]}},props:{rows:{type:Number,default:1},columns:{type:Number,default:1}},computed:Object(i["a"])(Object(i["a"])(Object(i["a"])(Object(i["a"])({},d(["cart"])),Object(l["d"])("cart",["totalSeats","totalSeatsSelected"])),Object(l["d"])("seats",["claimedSeats"])),{},{reversedRows:function(){return Object(o["a"])(Array(this.rows).keys()).reverse()}}),watch:{selectedSeats:function(t,e){t!==e&&this.setCartSeats(t)}},mounted:function(){this.setSeatsFromState()},methods:Object(i["a"])(Object(i["a"])({},m(["setCartSeats"])),{},{getSeatByRowAndColumn:function(t,e){return"".concat(String.fromCharCode(t+65)).concat(e)},getSeatClasses:function(t,e){var a=this.claimedSeats.includes(this.getSeatByRowAndColumn(t,e)),s=this.selectedSeats.includes(this.getSeatByRowAndColumn(t,e));return{"has-background-light":a,"has-text-grey-light":a,"has-background-success-light":this.totalSeatsSelected===this.totalSeats&&s,"has-background-danger-light":this.totalSeatsSelected>this.totalSeats&&s,"has-background-link-light":this.totalSeatsSelected<this.totalSeats&&s}},setSeatsFromState:function(){this.cart.seats&&(this.selectedSeats=this.cart.seats)}})},g=p,h=a("2877"),b=Object(h["a"])(g,c,r,!1,null,null,null),f=b.exports,S=Object(l["a"])("cart"),v=S.mapActions,y={name:"Seats",components:{SeatSelection:f},data:function(){return{seatRows:6,seatColumns:10}},computed:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(l["d"])("cart",["movie","totalSeats","totalSeatsSelected"])),Object(l["d"])("seats",["totalClaimedSeats"])),{},{seatsRemaining:function(){return this.totalSeats-this.totalSeatsSelected},totalAvailableSeats:function(){return this.seatColumns*this.seatRows},isOverCapacity:function(){return this.seatsRemaining-this.totalClaimedSeats>this.totalAvailableSeats},message:function(){return this.isOverCapacity?"This theater is over capacity. Please adjust the number of tickets on your order.":0===this.seatsRemaining?"You have selected all of your available seats. Please continue to the next step.":this.seatsRemaining<0?"You have selected too many seats. You must adjust your selection before continuing to the next step.":"You have ".concat(this.seatsRemaining," seats remaining.")}}),methods:Object(i["a"])(Object(i["a"])({},v(["setCartSeats"])),{},{onSeatSelect:function(t){this.setCartSeats(t)}})},C=y,k=Object(h["a"])(C,s,n,!1,null,null,null);e["default"]=k.exports},"0837":function(t,e,a){t.exports=a.p+"img/hotdog.fc43b2a8.png"},1771:function(t,e,a){var s={"./beer.png":"bc44","./gummyworms.png":"8a24","./hotdog.png":"0837","./juice.png":"58c7","./mms.png":"435c","./nachos.png":"d146","./popcorn.png":"f704","./pretzel.png":"1fde","./reeses.png":"6c60","./soda.png":"eca1","./sourpatch.png":"9a9a","./tmdb.png":"60e1","./water.png":"b2c3"};function n(t){var e=i(t);return a(e)}function i(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=i,t.exports=n,n.id="1771"},"1fde":function(t,e,a){t.exports=a.p+"img/pretzel.00a90445.png"},2532:function(t,e,a){"use strict";var s=a("23e7"),n=a("5a34"),i=a("1d80"),c=a("ab13");s({target:"String",proto:!0,forced:!c("includes")},{includes:function(t){return!!~String(i(this)).indexOf(n(t),arguments.length>1?arguments[1]:void 0)}})},"28db":function(t){t.exports=JSON.parse('{"drinks":{"title":"Drinks","items":[{"label":"Water","name":"water","image":"water.png","price":"2"},{"label":"Soda","name":"soda","image":"soda.png","price":"3.25"},{"label":"Fruit Juice","name":"juice","image":"juice.png","price":"3"},{"label":"Beer","name":"beer","image":"beer.png","price":"4.5"}]},"food":{"title":"Food","items":[{"label":"Popcorn","name":"popcorn","image":"popcorn.png","price":"2"},{"label":"Pretzel","name":"pretzel","image":"pretzel.png","price":"2.5"},{"label":"Nachos","name":"nachos","image":"nachos.png","price":"3.75"},{"label":"Hot Dog","name":"hotdog","image":"hotdog.png","price":"3.25"}]},"candy":{"title":"Candy","items":[{"label":"M&M\'s","name":"mms","image":"mms.png","price":"2.25"},{"label":"Sour Patch Kids","name":"sourpatch","image":"sourpatch.png","price":"2.5"},{"label":"Reese\'s Pieces","name":"reeses","image":"reeses.png","price":"2.75"},{"label":"Gummy Worms","name":"gummyworms","image":"gummyworms.png","price":"3"}]}}')},"435c":function(t,e,a){t.exports=a.p+"img/mms.e9b238ac.png"},"44e7":function(t,e,a){var s=a("861d"),n=a("c6b6"),i=a("b622"),c=i("match");t.exports=function(t){var e;return s(t)&&(void 0!==(e=t[c])?!!e:"RegExp"==n(t))}},"58c7":function(t,e,a){t.exports=a.p+"img/juice.a860c0c6.png"},"5a34":function(t,e,a){var s=a("44e7");t.exports=function(t){if(s(t))throw TypeError("The method doesn't accept regular expressions");return t}},6696:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"box"},[a("SnackList"),a("div",{staticClass:"field is-grouped is-grouped-centered mt-4"},[a("div",{staticClass:"control"},[a("router-link",{attrs:{to:"/seats"}},[a("button",{staticClass:"button is-info",attrs:{"data-testid":"prev-button"}},[t._v(" Previous ")])])],1),a("div",{staticClass:"control"},[a("router-link",{attrs:{to:"/payment"}},[a("button",{staticClass:"button is-info",attrs:{"data-testid":"next-button"}},[t._v(" Next ")])])],1)])],1)])},n=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",{staticClass:"title is-size-4 has-text-centered"},[t._v("Choose your snacks")]),a("p",{staticClass:"has-text-centered mb-5"},[t._v(" Order now and you can pick up your snacks at the snack counter without waiting in line! ")]),a("hr"),t._l(t.snacks,(function(e,s){return a("div",{key:s},[a("h3",{staticClass:"subtitle has-text-weight-bold is-4"},[t._v(t._s(e.title))]),t._l(e.items,(function(e,s){return a("SnackListItem",t._b({key:s,on:{onSnackListItemChange:t.onSnackListItemChange}},"SnackListItem",e,!1))})),a("hr")],2)})),t.totalPrices.snacks?a("div",{staticClass:"has-text-centered"},[a("div",{staticClass:"tag is-success is-large",attrs:{"data-testid":"snack-list-total"}},[t._v(" Your total: "+t._s(t._f("currency")(t.totalPrices.snacks))+" ")])]):t._e()],2)},c=[],r=(a("b0c0"),a("5530")),o=a("2f62"),l=a("28db"),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"level"},[a("div",{staticClass:"level-left"},[a("div",{staticClass:"level-item"},[a("figure",{staticClass:"image is-64x64"},[a("img",{attrs:{"data-testid":"image",src:t.getImage(t.image),alt:t.label}})])]),a("div",{staticClass:"level-item"},[a("label",{staticClass:"label",attrs:{"data-testid":"label",for:t.name}},[t._v(" "+t._s(t.label)+" ")])])]),a("div",{staticClass:"level-right"},[a("div",{staticClass:"level-item"},[a("label",{staticClass:"label",attrs:{"data-testid":"price",for:t.name}},[t._v(" "+t._s(t._f("currency")(t.price))+" x ")])]),a("div",{staticClass:"level-item"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.quantity,expression:"quantity"}],staticClass:"input",attrs:{type:"number",size:"2",min:"0",max:"99",id:t.quantity,name:t.quantity,"data-testid":"quantity"},domProps:{value:t.quantity},on:{change:t.onChange,input:function(e){e.target.composing||(t.quantity=e.target.value)}}})]),a("div",{staticClass:"level-item"},[a("span",{staticClass:"tag is-medium is-light",class:{"is-success":t.quantity>0},attrs:{"data-testid":"total"}},[t._v(" "+t._s(t._f("currency")(t.total))+" ")])])])])},d=[],m=(a("b680"),Object(o["a"])("cart")),p=m.mapGetters,g={name:"SnackListItem",props:{label:{type:String,required:!0},name:{type:String,required:!0},image:{type:String,required:!0},price:{type:String,required:!0}},data:function(){return{quantity:0}},computed:Object(r["a"])(Object(r["a"])({},p(["snacks"])),{},{quantityProxy:function(){var t;if(this.snacks)return(null===(t=this.snacks[this.name])||void 0===t?void 0:t.quantity)||0},total:function(){return(this.quantity*this.price).toFixed(2)}}),watch:{quantityProxy:{immediate:!0,handler:function(t,e){t!==e&&(this.quantity=t)}}},methods:{getImage:function(t){return a("1771")("./".concat(t))},onChange:function(){this.$emit("onSnackListItemChange",{name:this.name,label:this.label,quantity:this.quantity,price:this.price})}}},h=g,b=a("2877"),f=Object(b["a"])(h,u,d,!1,null,null,null),S=f.exports,v=Object(o["a"])("cart"),y=v.mapActions,C=v.mapState,k=v.mapGetters,x={name:"SnackList",components:{SnackListItem:S},data:function(){return{snacks:l,addedSnacks:{}}},computed:Object(r["a"])(Object(r["a"])({},C(["cart"])),k(["totalPrices"])),mounted:function(){this.setSnacksFromState()},methods:Object(r["a"])(Object(r["a"])({},y(["setCartSnacks"])),{},{onSnackListItemChange:function(t){this.addedSnacks[t.name]={label:t.label,quantity:t.quantity,price:t.price},this.setCartSnacks(this.addedSnacks)},setSnacksFromState:function(){this.cart.snacks&&(this.addedSnacks=this.cart.snacks)}})},_=x,w=Object(b["a"])(_,i,c,!1,null,null,null),O=w.exports,j={name:"Snacks",components:{SnackList:O}},R=j,A=Object(b["a"])(R,s,n,!1,null,null,null);e["default"]=A.exports},"6c60":function(t,e,a){t.exports=a.p+"img/reeses.486a69b7.png"},"8a24":function(t,e,a){t.exports=a.p+"img/gummyworms.0d0004c3.png"},"9a9a":function(t,e,a){t.exports=a.p+"img/sourpatch.ed369317.png"},ab13:function(t,e,a){var s=a("b622"),n=s("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(a){try{return e[n]=!1,"/./"[t](e)}catch(s){}}return!1}},b2c3:function(t,e,a){t.exports=a.p+"img/water.de63d26b.png"},bc44:function(t,e,a){t.exports=a.p+"img/beer.b362a362.png"},caad:function(t,e,a){"use strict";var s=a("23e7"),n=a("4d64").includes,i=a("44d2"),c=a("ae40"),r=c("indexOf",{ACCESSORS:!0,1:0});s({target:"Array",proto:!0,forced:!r},{includes:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},d146:function(t,e,a){t.exports=a.p+"img/nachos.6fa36dc8.png"},eca1:function(t,e,a){t.exports=a.p+"img/soda.b4a417f5.png"},f704:function(t,e,a){t.exports=a.p+"img/popcorn.6670adfb.png"}}]);
//# sourceMappingURL=seats.90c81e25.js.map