(function(t){function e(e){for(var r,a,i=e[0],l=e[1],c=e[2],u=0,p=[];u<i.length;u++)a=i[u],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&p.push(n[a][0]),n[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);d&&d(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],r=!0,i=1;i<o.length;i++){var l=o[i];0!==n[l]&&(r=!1)}r&&(s.splice(e--,1),t=a(a.s=o[0]))}return t}var r={},n={app:0},s=[];function a(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=r,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(o,r,function(e){return t[e]}.bind(null,r));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var d=l;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var r=o("2b0e"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("v-main",[o("Main")],1)],1)},s=[],a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-container",{attrs:{fluid:""}},[o("v-row",[o("v-col",{attrs:{cols:"12"}},[o("h1",{staticStyle:{"text-align":"center"}},[t._v(" "+t._s(t.user.name)+" | Points: "+t._s(t.user.points)+" ")])])],1),o("v-row",[o("v-col",{attrs:{cols:"10"}},[o("v-text-field",{attrs:{label:"Points to add","hide-details":""},model:{value:t.tempUserPoints,callback:function(e){t.tempUserPoints=e},expression:"tempUserPoints"}})],1),o("v-col",{attrs:{cols:"2"}},[o("v-btn",{attrs:{text:""},on:{click:t.addUserPoints}},[t._v(" Add points ")])],1)],1),o("v-row",[o("v-col",{attrs:{cols:"6"}},[o("h2",{staticStyle:{"text-align":"center"}},[t._v(" Orders ")])]),o("v-col",{attrs:{cols:"6"}},[o("h2",{staticStyle:{"text-align":"center"}},[t._v(" "+t._s(t.user.name)+"'s orders ")])])],1),o("v-row",[o("v-col",{attrs:{cols:"6"}},[o("v-container",{attrs:{fluid:""}},[o("v-row",[o("v-col",{attrs:{cols:"12"}},[o("card-list",{attrs:{"add-icon":!0},on:{addItem:t.addUserOrder,removeItem:t.removeOrder},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.item;return[o("v-row",[o("v-col",{attrs:{cols:"12"}},[o("v-text-field",{attrs:{label:"Description","hide-details":""},model:{value:r.description,callback:function(e){t.$set(r,"description",e)},expression:"item.description"}})],1)],1),o("v-row",[o("v-col",{attrs:{cols:"12"}},[o("v-text-field",{attrs:{label:"Points","hide-details":""},model:{value:r.points,callback:function(e){t.$set(r,"points",e)},expression:"item.points"}})],1)],1)]}}]),model:{value:t.orders,callback:function(e){t.orders=e},expression:"orders"}})],1)],1),o("v-row",[o("v-col",{staticClass:"py-0 mx-auto",attrs:{cols:"auto"}},[o("v-btn",{attrs:{text:""},on:{click:t.addOrder}},[o("v-icon",[t._v(" mdi-plus ")]),t._v(" Add ")],1)],1)],1)],1)],1),o("v-col",{attrs:{cols:"6"}},[o("v-container",{attrs:{fluid:""}},[o("v-row",[o("v-col",{attrs:{cols:"12"}},[o("card-list",{attrs:{"add-icon":!1},on:{addItem:t.addUserOrder,removeItem:t.removeUserOrder},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.item;return[o("v-row",[o("v-col",{attrs:{cols:"12"}},[o("v-text-field",{attrs:{label:"Description","hide-details":""},model:{value:r.description,callback:function(e){t.$set(r,"description",e)},expression:"item.description"}})],1)],1),o("v-row",[o("v-col",{attrs:{cols:"12"}},[o("v-text-field",{attrs:{label:"Points","hide-details":""},model:{value:r.points,callback:function(e){t.$set(r,"points",e)},expression:"item.points"}})],1)],1)]}}]),model:{value:t.userOrders,callback:function(e){t.userOrders=e},expression:"userOrders"}})],1)],1)],1)],1)],1)],1),o("AddOrderModal",{directives:[{name:"show",rawName:"v-show",value:t.isModalVisible,expression:"isModalVisible"}],on:{close:t.closeModal,addNewOrder:t.addNewOrder}})],1)},i=[],l=o("2909"),c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition-group",{attrs:{name:"list",tag:"div"}},t._l(t.value,(function(e,r){return o("v-card",{key:e[t.itemId],staticClass:"mt-3",attrs:{outlined:""}},[o("v-card-title",{staticClass:"justify-end pb-0"},[o("v-btn",{attrs:{disabled:r+1>=t.value.length,icon:""},on:{click:function(e){return t.down(r)}}},[o("v-icon",[t._v(" mdi-arrow-down ")])],1),o("v-btn",{attrs:{disabled:0===r,icon:""},on:{click:function(e){return t.up(r)}}},[o("v-icon",[t._v(" mdi-arrow-up ")])],1),t.addIcon?o("v-btn",{attrs:{icon:""},on:{click:function(o){return t.add(e)}}},[o("v-icon",[t._v(" mdi-bookmark-plus-outline ")])],1):t._e(),o("v-btn",{attrs:{icon:""},on:{click:function(o){return t.remove(r,e)}}},[o("v-icon",[t._v(" mdi-close ")])],1)],1),o("v-card-text",[t._t("default",null,{item:e,index:r})],2)],1)})),1)},d=[],u=(o("99af"),o("fb6a"),{props:{value:{type:Array,default:function(){return[]}},addIcon:Boolean,itemId:{type:String,default:"id"}},methods:{remove:function(t,e){this.$emit("removeItem",e);var o=[].concat(Object(l["a"])(this.value.slice(0,t)),Object(l["a"])(this.value.slice(t+1)));this.$emit("input",o)},up:function(t){var e=Object(l["a"])(this.value);e[t]=this.value[t-1],e[t-1]=this.value[t],this.$emit("input",e)},down:function(t){var e=Object(l["a"])(this.value);e[t]=this.value[t+1],e[t+1]=this.value[t],this.$emit("input",e)},add:function(t){this.$emit("addItem",t)}}}),p=u,v=(o("f184"),o("2877")),f=o("6544"),h=o.n(f),m=o("8336"),b=o("b0af"),O=o("99d9"),g=o("132d"),_=Object(v["a"])(p,c,d,!1,null,"0fc367f6",null),w=_.exports;h()(_,{VBtn:m["a"],VCard:b["a"],VCardText:O["a"],VCardTitle:O["b"],VIcon:g["a"]});var x=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition",{attrs:{name:"modal-fade"}},[o("div",{staticClass:"modal-backdrop"},[o("div",{staticClass:"modal",attrs:{role:"dialog"}},[t._t("header",(function(){return[t._v("Add new order")]})),t._t("body",(function(){return[o("v-container",{attrs:{fluid:""}},[o("v-row",[o("v-col",{attrs:{cols:"12"}},[o("v-text-field",{attrs:{label:"Description","hide-details":""},model:{value:t.order.description,callback:function(e){t.$set(t.order,"description",e)},expression:"order.description"}})],1)],1),o("v-row",[o("v-col",{attrs:{cols:"12"}},[o("v-text-field",{attrs:{label:"Points","hide-details":""},model:{value:t.order.points,callback:function(e){t.$set(t.order,"points",e)},expression:"order.points"}})],1)],1)],1)]})),t._t("footer",(function(){return[o("v-container",{attrs:{fluid:""}},[o("v-row",[o("v-col",{attrs:{cols:"6"}},[o("v-btn",{attrs:{color:"blue-grey",text:""},on:{click:t.close}},[t._v("Close")])],1),o("v-col",{attrs:{cols:"6"}},[o("v-btn",{attrs:{color:"success",text:""},on:{click:t.add}},[t._v("Add")])],1)],1)],1)]}))],2)])])},k=[],y={name:"AddOrderModal",data:function(){return{order:{description:"",points:0}}},methods:{close:function(){this.$emit("close")},add:function(){this.$emit("addNewOrder",this.order)}}},V=y,j=(o("a85d"),o("62ad")),P=o("a523"),M=o("0fd9"),U=o("8654"),$=Object(v["a"])(V,x,k,!1,null,null,null),C=$.exports;h()($,{VBtn:m["a"],VCol:j["a"],VContainer:P["a"],VRow:M["a"],VTextField:U["a"]});var I=o("bc3a"),S=o.n(I),A={components:{CardList:w,AddOrderModal:C},created:function(){this.getUser(),this.getOrders(),this.getUserOrders(),this.tempUserPoints=this.user.points},data:function(){return{user:{name:"",points:0},tempUserPoints:0,orders:[],userOrders:[],isModalVisible:!1}},methods:{getUser:function(){var t=this;S.a.get("https://love-machine-app.herokuapp.com/user").then((function(e){console.log(e.data),t.user=e.data,console.log(t.user)}))},getOrders:function(){var t=this;S.a.get("https://love-machine-app.herokuapp.com/orders").then((function(e){var o;console.log(e.data),(o=t.orders).push.apply(o,Object(l["a"])(e.data)),console.log(t.orders)}))},getUserOrders:function(){var t=this;S.a.get("https://love-machine-app.herokuapp.com/user_orders").then((function(e){var o;console.log(e.data),(o=t.userOrders).push.apply(o,Object(l["a"])(e.data)),console.log(t.userOrders)}))},addUserOrder:function(t){var e=this;console.log(this.user.points,t.points),this.user.points>=t.points&&S.a.post("https://love-machine-app.herokuapp.com/set_points/".concat(parseInt(this.user.points)-parseInt(t.points))).then((function(o){console.log(o.data),e.user=o.data,console.log(e.user),S.a.post("https://love-machine-app.herokuapp.com/user_orders",t).then((function(t){console.log(t.data),e.userOrders=t.data,console.log(e.userOrders)}))}))},removeOrder:function(t){var e=this;S.a.delete("https://love-machine-app.herokuapp.com/orders/".concat(t.id)).then((function(t){console.log(t.data),e.orders=t.data,console.log(e.orders)}))},removeUserOrder:function(t){var e=this;S.a.delete("https://love-machine-app.herokuapp.com/user_orders/".concat(t.id)).then((function(t){console.log(t.data),e.userOrders=t.data,console.log(e.userOrders)}))},addUserPoints:function(){var t=this;S.a.post("https://love-machine-app.herokuapp.com/add_points/".concat(this.tempUserPoints)).then((function(e){console.log(e.data),t.user=e.data,console.log(t.user)}))},addOrder:function(){this.isModalVisible=!0},addNewUserOrder:function(){this.isModalVisible=!0},closeModal:function(){this.isModalVisible=!1},addNewOrder:function(t){var e=this;this.isModalVisible=!1,S.a.post("https://love-machine-app.herokuapp.com/orders",t).then((function(t){console.log(t.data),e.orders=t.data,console.log(e.orders)}))}}},T=A,N=Object(v["a"])(T,a,i,!1,null,"03d4a504",null),B=N.exports;h()(N,{VBtn:m["a"],VCol:j["a"],VContainer:P["a"],VIcon:g["a"],VRow:M["a"],VTextField:U["a"]});var E={name:"App",components:{Main:B},data:function(){return{}}},D=E,F=o("7496"),J=o("f6c4"),R=Object(v["a"])(D,n,s,!1,null,null,null),L=R.exports;h()(R,{VApp:F["a"],VMain:J["a"]});var q=o("f309");r["a"].use(q["a"]);var z=new q["a"]({});r["a"].config.productionTip=!1,new r["a"]({vuetify:z,render:function(t){return t(L)}}).$mount("#app")},"9a2e":function(t,e,o){},a395:function(t,e,o){},a85d:function(t,e,o){"use strict";o("9a2e")},f184:function(t,e,o){"use strict";o("a395")}});
//# sourceMappingURL=app.8ad96f4e.js.map