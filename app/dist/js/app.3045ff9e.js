(function(t){function e(e){for(var n,s,i=e[0],c=e[1],l=e[2],d=0,p=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,i=1;i<r.length;i++){var c=r[i];0!==o[c]&&(n=!1)}n&&(a.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},o={app:0},a=[];function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0778":function(t,e,r){"use strict";r("2461")},2461:function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-main",[r("Main")],1)],1)},a=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:""}},[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("h1",{staticStyle:{"text-align":"center"}},[t._v(" "+t._s(t.user.name)+" | Points: "+t._s(t.user.points)+" ")])])],1),r("v-row",[r("v-col",{attrs:{cols:"6"}},[r("h2",{staticStyle:{"text-align":"center"}},[t._v(" Orders ")])]),r("v-col",{attrs:{cols:"6"}},[r("h2",{staticStyle:{"text-align":"center"}},[t._v(" "+t._s(t.user.name)+"'s orders ")])])],1),r("v-row",[r("v-col",{attrs:{cols:"6"}},[r("v-container",{attrs:{fluid:""}},[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("card-list",{attrs:{"add-icon":!0},on:{addItem:t.addUserOrder},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.item;return[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Description","hide-details":""},model:{value:n.description,callback:function(e){t.$set(n,"description",e)},expression:"item.description"}})],1)],1),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Points","hide-details":""},model:{value:n.points,callback:function(e){t.$set(n,"points",e)},expression:"item.points"}})],1)],1)]}}]),model:{value:t.orders,callback:function(e){t.orders=e},expression:"orders"}})],1)],1),r("v-row",[r("v-col",{staticClass:"py-0 mx-auto",attrs:{cols:"auto"}},[r("v-btn",{attrs:{text:""},on:{click:t.add}},[r("v-icon",[t._v(" mdi-plus ")]),t._v(" Add ")],1)],1)],1)],1)],1),r("v-col",{attrs:{cols:"6"}},[r("v-container",{attrs:{fluid:""}},[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("card-list",{attrs:{"add-icon":!1},on:{addItem:t.addUserOrder},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.item;return[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Description","hide-details":""},model:{value:n.description,callback:function(e){t.$set(n,"description",e)},expression:"item.description"}})],1)],1),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Points","hide-details":""},model:{value:n.points,callback:function(e){t.$set(n,"points",e)},expression:"item.points"}})],1)],1)]}}]),model:{value:t.userOrders,callback:function(e){t.userOrders=e},expression:"userOrders"}})],1)],1),r("v-row",[r("v-col",{staticClass:"py-0 mx-auto",attrs:{cols:"auto"}},[r("v-btn",{attrs:{text:""},on:{click:t.add}},[r("v-icon",[t._v(" mdi-plus ")]),t._v(" Add ")],1)],1)],1)],1)],1)],1)],1)},i=[],c=r("2909"),l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("transition-group",{attrs:{name:"list",tag:"div"}},t._l(t.value,(function(e,n){return r("v-card",{key:e[t.itemId],staticClass:"mt-3",attrs:{outlined:""}},[r("v-card-title",{staticClass:"justify-end pb-0"},[r("v-btn",{attrs:{disabled:n+1>=t.value.length,icon:""},on:{click:function(e){return t.down(n)}}},[r("v-icon",[t._v(" mdi-arrow-down ")])],1),r("v-btn",{attrs:{disabled:0===n,icon:""},on:{click:function(e){return t.up(n)}}},[r("v-icon",[t._v(" mdi-arrow-up ")])],1),t.addIcon?r("v-btn",{attrs:{icon:""},on:{click:function(r){return t.add(e)}}},[r("v-icon",[t._v(" mdi-bookmark-plus-outline ")])],1):t._e(),r("v-btn",{attrs:{icon:""},on:{click:function(e){return t.remove(n)}}},[r("v-icon",[t._v(" mdi-close ")])],1)],1),r("v-card-text",[t._t("default",null,{item:e,index:n})],2)],1)})),1)},u=[],d=(r("99af"),r("fb6a"),{props:{value:{type:Array,default:function(){return[]}},addIcon:Boolean,itemId:{type:String,default:"id"}},methods:{remove:function(t){var e=[].concat(Object(c["a"])(this.value.slice(0,t)),Object(c["a"])(this.value.slice(t+1)));this.$emit("input",e)},up:function(t){var e=Object(c["a"])(this.value);e[t]=this.value[t-1],e[t-1]=this.value[t],this.$emit("input",e)},down:function(t){var e=Object(c["a"])(this.value);e[t]=this.value[t+1],e[t+1]=this.value[t],this.$emit("input",e)},add:function(t){this.$emit("addItem",t)}}}),p=d,v=(r("0778"),r("2877")),f=r("6544"),h=r.n(f),m=r("8336"),b=r("b0af"),g=r("99d9"),O=r("132d"),_=Object(v["a"])(p,l,u,!1,null,"f2feab44",null),y=_.exports;h()(_,{VBtn:m["a"],VCard:b["a"],VCardText:g["a"],VCardTitle:g["b"],VIcon:O["a"]});var x=r("bc3a"),w=r.n(x),k={components:{CardList:y},created:function(){this.getUser(),this.getOrders(),this.getUserOrders()},data:function(){return{user:{name:"",points:0},orders:[],userOrders:[]}},methods:{getUser:function(){var t=this;w.a.get("https://love-machine-app.herokuapp.com/user").then((function(e){console.log(e.data),t.user=e.data,console.log(t.user)}))},getOrders:function(){var t=this;w.a.get("https://love-machine-app.herokuapp.com/orders").then((function(e){var r;console.log(e.data),(r=t.orders).push.apply(r,Object(c["a"])(e.data)),console.log(t.orders)}))},getUserOrders:function(){var t=this;w.a.get("https://love-machine-app.herokuapp.com/user_orders").then((function(e){var r;console.log(e.data),(r=t.userOrders).push.apply(r,Object(c["a"])(e.data)),console.log(t.userOrders)}))},addUserOrder:function(t){var e=this;w.a.post("https://love-machine-app.herokuapp.com/user_orders",t).then((function(t){console.log(t.data),e.userOrders=t.data,console.log(e.userOrders)}))},add:function(){}}},j=k,V=r("62ad"),$=r("a523"),S=r("0fd9"),C=r("8654"),P=Object(v["a"])(j,s,i,!1,null,"75cf1e8d",null),I=P.exports;h()(P,{VBtn:m["a"],VCol:V["a"],VContainer:$["a"],VIcon:O["a"],VRow:S["a"],VTextField:C["a"]});var M={name:"App",components:{Main:I},data:function(){return{}}},U=M,T=r("7496"),A=r("f6c4"),B=Object(v["a"])(U,o,a,!1,null,null,null),E=B.exports;h()(B,{VApp:T["a"],VMain:A["a"]});var D=r("f309");n["a"].use(D["a"]);var J=new D["a"]({});n["a"].config.productionTip=!1,new n["a"]({vuetify:J,render:function(t){return t(E)}}).$mount("#app")}});
//# sourceMappingURL=app.3045ff9e.js.map