(function(t){function e(e){for(var n,a,i=e[0],c=e[1],d=e[2],u=0,v=[];u<i.length;u++)a=i[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&v.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(v.length)v.shift()();return s.push.apply(s,d||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,i=1;i<r.length;i++){var c=r[i];0!==o[c]&&(n=!1)}n&&(s.splice(e--,1),t=a(a.s=r[0]))}return t}var n={},o={app:0},s=[];function a(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=n,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var d=0;d<i.length;d++)e(i[d]);var l=c;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-main",[r("Main")],1)],1)},s=[],a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-app-bar",{attrs:{color:"pink",elevation:"7"}},[r("v-container",{attrs:{fluid:""}},[r("v-row",[r("v-col",{attrs:{cols:"8"}},[r("h1",{staticStyle:{"text-align":"center"}},[t._v(" "+t._s(t.user.name)+" | Points: "+t._s(t.user.points)+" ")])]),r("v-col",{attrs:{cols:"2"}},[r("v-text-field",{attrs:{"hide-details":""},model:{value:t.tempUserPoints,callback:function(e){t.tempUserPoints=e},expression:"tempUserPoints"}})],1),r("v-col",{attrs:{cols:"2"}},[r("v-btn",{attrs:{text:""},on:{click:t.addUserPoints}},[t._v(" Add points ")])],1)],1)],1)],1),r("v-container",{attrs:{fluid:""}},[r("v-row",[r("v-col",{attrs:{cols:"6"}},[r("h2",{staticStyle:{"text-align":"center"}},[t._v(" Orders ")])]),r("v-col",{attrs:{cols:"6"}},[r("h2",{staticStyle:{"text-align":"center"}},[t._v(" "+t._s(t.user.name)+"'s orders ")])])],1),r("v-row",[r("v-col",{attrs:{cols:"6"}},[r("v-container",{attrs:{fluid:""}},[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("card-list",{attrs:{"add-icon":!0},on:{addItem:t.addUserOrder,removeItem:t.removeOrder},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.item;return[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{color:"red",label:"Description","hide-details":""},model:{value:n.description,callback:function(e){t.$set(n,"description",e)},expression:"item.description"}})],1)],1),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Points","hide-details":""},model:{value:n.points,callback:function(e){t.$set(n,"points",e)},expression:"item.points"}})],1)],1)]}}]),model:{value:t.orders,callback:function(e){t.orders=e},expression:"orders"}})],1)],1),r("v-row",[r("v-col",{staticClass:"py-0 mx-auto",attrs:{cols:"auto"}},[r("v-btn",{attrs:{text:""},on:{click:t.addOrder}},[r("v-icon",[t._v(" mdi-plus ")]),t._v(" Add ")],1)],1)],1)],1)],1),r("v-col",{attrs:{cols:"6"}},[r("v-container",{attrs:{fluid:""}},[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("card-list",{attrs:{"add-icon":!1},on:{addItem:t.addUserOrder,removeItem:t.removeUserOrder},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.item;return[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Description","hide-details":""},model:{value:n.description,callback:function(e){t.$set(n,"description",e)},expression:"item.description"}})],1)],1),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Points","hide-details":""},model:{value:n.points,callback:function(e){t.$set(n,"points",e)},expression:"item.points"}})],1)],1)]}}]),model:{value:t.userOrders,callback:function(e){t.userOrders=e},expression:"userOrders"}})],1)],1)],1)],1)],1)],1),r("AddOrderModal",{directives:[{name:"show",rawName:"v-show",value:t.isModalVisible,expression:"isModalVisible"}],on:{close:t.closeModal,addNewOrder:t.addNewOrder}})],1)},i=[],c=(r("99af"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("transition-group",{attrs:{name:"list",tag:"div"}},t._l(t.value,(function(e,n){return r("v-card",{key:e[t.itemId],staticClass:"mt-3",attrs:{outlined:"",elevation:"10",color:"pink"}},[r("v-card-title",{staticClass:"justify-end pb-0"},[r("v-btn",{attrs:{disabled:n+1>=t.value.length,icon:""},on:{click:function(e){return t.down(n)}}},[r("v-icon",[t._v(" mdi-arrow-down ")])],1),r("v-btn",{attrs:{disabled:0===n,icon:""},on:{click:function(e){return t.up(n)}}},[r("v-icon",[t._v(" mdi-arrow-up ")])],1),r("v-btn",{attrs:{icon:""},on:{click:function(r){return t.remove(n,e)}}},[r("v-icon",[t._v(" mdi-close ")])],1)],1),r("v-card-text",[t._t("default",null,{item:e,index:n})],2),r("v-card-actions",[t.addIcon?r("v-btn",{staticClass:"text-right",attrs:{color:"white",text:""},on:{click:function(r){return t.add(e)}}},[t._v("Add to my orders")]):t._e()],1)],1)})),1)}),d=[],l=r("2909"),u=(r("fb6a"),{props:{value:{type:Array,default:function(){return[]}},addIcon:Boolean,itemId:{type:String,default:"id"}},methods:{remove:function(t,e){this.$emit("removeItem",e);var r=[].concat(Object(l["a"])(this.value.slice(0,t)),Object(l["a"])(this.value.slice(t+1)));this.$emit("input",r)},up:function(t){var e=Object(l["a"])(this.value);e[t]=this.value[t-1],e[t-1]=this.value[t],this.$emit("input",e)},down:function(t){var e=Object(l["a"])(this.value);e[t]=this.value[t+1],e[t+1]=this.value[t],this.$emit("input",e)},add:function(t){this.$emit("addItem",t)}}}),v=u,f=(r("ed8f"),r("2877")),p=r("6544"),h=r.n(p),m=r("8336"),b=r("b0af"),O=r("99d9"),_=r("132d"),w=Object(f["a"])(v,c,d,!1,null,"ef9b041c",null),x=w.exports;h()(w,{VBtn:m["a"],VCard:b["a"],VCardActions:O["a"],VCardText:O["b"],VCardTitle:O["c"],VIcon:_["a"]});var U=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("transition",{attrs:{name:"modal-fade"}},[r("div",{staticClass:"modal-backdrop"},[r("div",{staticClass:"modal",attrs:{role:"dialog"}},[t._t("header",(function(){return[t._v("Add new order")]})),t._t("body",(function(){return[r("v-container",{attrs:{fluid:""}},[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Description","hide-details":""},model:{value:t.order.description,callback:function(e){t.$set(t.order,"description",e)},expression:"order.description"}})],1)],1),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Points","hide-details":""},model:{value:t.order.points,callback:function(e){t.$set(t.order,"points",e)},expression:"order.points"}})],1)],1)],1)]})),t._t("footer",(function(){return[r("v-container",{attrs:{fluid:""}},[r("v-row",[r("v-col",{attrs:{cols:"6"}},[r("v-btn",{attrs:{color:"blue-grey",text:""},on:{click:t.close}},[t._v("Close")])],1),r("v-col",{attrs:{cols:"6"}},[r("v-btn",{attrs:{color:"success",text:""},on:{click:t.add}},[t._v("Add")])],1)],1)],1)]}))],2)])])},g=[],y={name:"AddOrderModal",data:function(){return{order:{description:"",points:0}}},methods:{close:function(){this.$emit("close")},add:function(){this.order.points>=0&&this.$emit("addNewOrder",this.order)}}},k=y,V=(r("a85d"),r("62ad")),I=r("a523"),P=r("0fd9"),M=r("8654"),j=Object(f["a"])(k,U,g,!1,null,null,null),$=j.exports;h()(j,{VBtn:m["a"],VCol:V["a"],VContainer:I["a"],VRow:P["a"],VTextField:M["a"]});var C=r("bc3a"),A=r.n(C),S={defaultUserId:"ee87a2cb-881a-4da1-a399-41b3f30d3e2c",serverUrl:"https://love-machine-app.herokuapp.com"},T={components:{CardList:x,AddOrderModal:$},created:function(){var t=this;this.getUser((function(){t.getOrders(),t.getUserOrders(),t.tempUserPoints=t.user.points}))},data:function(){return{user:{name:"",points:0},tempUserPoints:0,orders:[],userOrders:[],isModalVisible:!1}},methods:{getUser:function(t){var e=this;A.a.get("".concat(S.serverUrl,"/user/").concat(S.defaultUserId)).then((function(r){e.user=r.data[0],t()}))},getOrders:function(){var t=this;A.a.get("".concat(S.serverUrl,"/user/").concat(S.defaultUserId,"/orders")).then((function(e){t.orders=e.data}))},getUserOrders:function(){var t=this;A.a.get("".concat(S.serverUrl,"/user/").concat(S.defaultUserId,"/user_orders")).then((function(e){t.userOrders=e.data}))},addUserOrder:function(t){var e=this;console.log(this.user.points,t.points),this.user.points>0&&this.user.points>=t.points&&A.a.post("".concat(S.serverUrl,"/user/").concat(S.defaultUserId,"/set_points/").concat(parseInt(this.user.points)-parseInt(t.points))).then((function(){e.getUser((function(){A.a.post("".concat(S.serverUrl,"/user/").concat(S.defaultUserId,"/user_orders"),t).then((function(){e.getUserOrders()}))}))}))},removeOrder:function(t){var e=this;A.a.delete("".concat(S.serverUrl,"/user/").concat(S.defaultUserId,"/orders/").concat(t.id)).then((function(){e.getOrders()}))},removeUserOrder:function(t){var e=this;A.a.delete("".concat(S.serverUrl,"/user/").concat(S.defaultUserId,"/user_orders/").concat(t.id)).then((function(){e.getUserOrders()}))},addUserPoints:function(){var t=this;A.a.post("".concat(S.serverUrl,"/user/").concat(S.defaultUserId,"/add_points/").concat(this.tempUserPoints)).then((function(){t.getUser((function(){}))}))},addOrder:function(){this.isModalVisible=!0},addNewUserOrder:function(){this.isModalVisible=!0},closeModal:function(){this.isModalVisible=!1},addNewOrder:function(t){var e=this;this.isModalVisible=!1,A.a.post("".concat(S.serverUrl,"/user/").concat(S.defaultUserId,"/orders"),t).then((function(){e.getOrders()}))}}},N=T,B=r("40dc"),E=Object(f["a"])(N,a,i,!1,null,"1c848061",null),D=E.exports;h()(E,{VAppBar:B["a"],VBtn:m["a"],VCol:V["a"],VContainer:I["a"],VIcon:_["a"],VRow:P["a"],VTextField:M["a"]});var F={name:"App",components:{Main:D},data:function(){return{}}},J=F,R=(r("034f"),r("7496")),L=r("f6c4"),q=Object(f["a"])(J,o,s,!1,null,null,null),z=q.exports;h()(q,{VApp:R["a"],VMain:L["a"]});var G=r("f309");n["a"].use(G["a"]);var H=new G["a"]({theme:{options:{customProperties:!0},themes:{dark:{background:"#292930"}},dark:!0}});n["a"].config.productionTip=!1,new n["a"]({vuetify:H,render:function(t){return t(z)}}).$mount("#app")},"85ec":function(t,e,r){},"9a2e":function(t,e,r){},a85d:function(t,e,r){"use strict";r("9a2e")},d6eb:function(t,e,r){},ed8f:function(t,e,r){"use strict";r("d6eb")}});
//# sourceMappingURL=app.bb22a04e.js.map