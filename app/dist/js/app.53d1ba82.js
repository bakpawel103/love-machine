(function(e){function t(t){for(var n,i,a=t[0],c=t[1],d=t[2],u=0,v=[];u<a.length;u++)i=a[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&v.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(v.length)v.shift()();return s.push.apply(s,d||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,a=1;a<r.length;a++){var c=r[a];0!==o[c]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},s=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var d=0;d<a.length;d++)t(a[d]);var l=c;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"3c47":function(e,t,r){"use strict";r("796f")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-main",[r("Main")],1)],1)},s=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-toolbar",{attrs:{color:"pink",elevation:"7"}},[r("v-container",{attrs:{fluid:""}},[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("h3",{staticStyle:{"text-align":"center"}},[e._v(" "+e._s(e.user.name)+"'s points: "+e._s(e.user.points)+" ")])])],1)],1)],1),r("v-container",{attrs:{fluid:""}},[r("v-row",[r("v-col",{attrs:{cols:"6"}},[r("v-text-field",{attrs:{"hide-details":""},model:{value:e.tempUserPoints,callback:function(t){e.tempUserPoints=t},expression:"tempUserPoints"}})],1),r("v-col",{attrs:{cols:"6"}},[r("v-btn",{attrs:{outlined:"",elevation:"2",text:""},on:{click:e.addUserPoints}},[e._v(" Add points ")])],1)],1),r("v-row",[r("v-col",{attrs:{cols:"6"}},[r("h3",{staticStyle:{"text-align":"center"}},[e._v(" Orders ")])]),r("v-col",{attrs:{cols:"6"}},[r("h3",{staticStyle:{"text-align":"center"}},[e._v(" "+e._s(e.user.name)+"'s orders ")])])],1),r("v-row",[r("v-col",{attrs:{cols:"6"}},[r("v-container",{attrs:{fluid:""}},[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("card-list",{attrs:{addOrderButtonVisibility:!0,redeemOrderButtonVisibility:!1},on:{addItem:e.addUserOrder,redeemItem:e.redeemOrder,removeItem:e.removeOrder},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.item;return[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-textarea",{attrs:{label:"Description","hide-details":""},model:{value:n.description,callback:function(t){e.$set(n,"description",t)},expression:"item.description"}})],1)],1),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Points","hide-details":""},model:{value:n.points,callback:function(t){e.$set(n,"points",t)},expression:"item.points"}})],1)],1)]}}]),model:{value:e.orders,callback:function(t){e.orders=t},expression:"orders"}})],1)],1),r("v-row",[r("v-col",{staticClass:"py-0 mx-auto",attrs:{cols:"auto"}},[r("v-btn",{attrs:{outlined:"",elevation:"2",text:""},on:{click:e.addOrder}},[r("v-icon",[e._v(" mdi-plus ")]),e._v(" Add ")],1)],1)],1)],1)],1),r("v-col",{attrs:{cols:"6"}},[r("v-container",{attrs:{fluid:""}},[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("card-list",{attrs:{addOrderButtonVisibility:!1,redeemOrderButtonVisibility:!0},on:{addItem:e.addUserOrder,redeemItem:e.redeemOrder,removeItem:e.removeUserOrder},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.item;return[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-textarea",{attrs:{label:"Description","hide-details":""},model:{value:n.description,callback:function(t){e.$set(n,"description",t)},expression:"item.description"}})],1)],1),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Points","hide-details":""},model:{value:n.points,callback:function(t){e.$set(n,"points",t)},expression:"item.points"}})],1)],1)]}}]),model:{value:e.userOrders,callback:function(t){e.userOrders=t},expression:"userOrders"}})],1)],1)],1)],1)],1)],1),r("AddOrderModal",{directives:[{name:"show",rawName:"v-show",value:e.isModalVisible,expression:"isModalVisible"}],on:{close:e.closeModal,addNewOrder:e.addNewOrder}})],1)},a=[],c=(r("99af"),r("4e82"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("transition-group",{attrs:{name:"list",tag:"div"}},e._l(e.value,(function(t,n){return r("v-card",{key:t[e.itemId],staticClass:"mt-3",attrs:{outlined:"",elevation:"10",color:"pink"}},[r("v-card-title",{staticClass:"justify-end pb-0"},[r("v-btn",{attrs:{icon:""},on:{click:function(r){return e.remove(n,t)}}},[r("v-icon",[e._v(" mdi-close ")])],1)],1),r("v-card-text",[e._t("default",null,{item:t,index:n})],2),r("v-card-actions",[e.addOrderButtonVisibility?r("v-btn",{attrs:{outlined:"",elevation:"2",text:""},on:{click:function(r){return e.addOrder(t)}}},[e._v("Order")]):e._e()],1),r("v-card-actions",[e.redeemOrderButtonVisibility?r("v-btn",{attrs:{outlined:"",elevation:"2",text:""},on:{click:function(r){return e.redeemOrder(t)}}},[e._v("Redeem")]):e._e()],1)],1)})),1)}),d=[],l=r("2909"),u=(r("fb6a"),{props:{value:{type:Array,default:function(){return[]}},addOrderButtonVisibility:Boolean,redeemOrderButtonVisibility:Boolean,itemId:{type:String,default:"id"}},methods:{remove:function(e,t){this.$emit("removeItem",t);var r=[].concat(Object(l["a"])(this.value.slice(0,e)),Object(l["a"])(this.value.slice(e+1)));this.$emit("input",r)},addOrder:function(e){this.$emit("addItem",e)},redeemOrder:function(e){this.$emit("redeemItem",e)}}}),v=u,f=(r("3c47"),r("2877")),p=r("6544"),m=r.n(p),h=r("8336"),b=r("b0af"),O=r("99d9"),U=r("132d"),x=Object(f["a"])(v,c,d,!1,null,"1ac5f552",null),_=x.exports;m()(x,{VBtn:h["a"],VCard:b["a"],VCardActions:O["a"],VCardText:O["b"],VCardTitle:O["c"],VIcon:U["a"]});var w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("transition",{attrs:{name:"modal-fade"}},[r("div",{staticClass:"modal-backdrop"},[r("div",{staticClass:"modal",attrs:{role:"dialog"}},[e._t("body",(function(){return[r("v-container",{attrs:{fluid:""}},[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Description","hide-details":""},model:{value:e.order.description,callback:function(t){e.$set(e.order,"description",t)},expression:"order.description"}})],1)],1),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Points","hide-details":""},model:{value:e.order.points,callback:function(t){e.$set(e.order,"points",t)},expression:"order.points"}})],1)],1)],1)]})),e._t("footer",(function(){return[r("v-container",{attrs:{fluid:""}},[r("v-row",[r("v-col",{attrs:{cols:"6"}},[r("v-btn",{attrs:{outlined:"",elevation:"2",color:"white",text:""},on:{click:e.close}},[e._v("Close")])],1),r("v-col",{attrs:{cols:"6"}},[r("v-btn",{attrs:{outlined:"",elevation:"2",color:"white",text:""},on:{click:e.add}},[e._v("Add")])],1)],1)],1)]}))],2)])])},y=[],g={name:"AddOrderModal",data:function(){return{order:{description:"",points:0}}},methods:{close:function(){this.$emit("close")},add:function(){this.order.points>=0&&this.$emit("addNewOrder",this.order)}}},V=g,k=(r("a85d"),r("62ad")),I=r("a523"),M=r("0fd9"),P=r("8654"),$=Object(f["a"])(V,w,y,!1,null,null,null),j=$.exports;m()($,{VBtn:h["a"],VCol:k["a"],VContainer:I["a"],VRow:M["a"],VTextField:P["a"]});var C=r("bc3a"),B=r.n(C),S={defaultUserId:"ee87a2cb-881a-4da1-a399-41b3f30d3e2c",serverUrl:"https://love-machine-app.herokuapp.com"},A={components:{CardList:_,AddOrderModal:j},created:function(){var e=this;this.getUser((function(){e.getOrders(),e.getUserOrders(),e.tempUserPoints=e.user.points}))},data:function(){return{user:{name:"",points:0},tempUserPoints:0,orders:[],userOrders:[],isModalVisible:!1}},methods:{getUser:function(e){var t=this;B.a.get("".concat(S.serverUrl,"/user/").concat(S.defaultUserId)).then((function(r){t.user=r.data[0],e()}))},getOrders:function(){var e=this;B.a.get("".concat(S.serverUrl,"/user/").concat(S.defaultUserId,"/orders")).then((function(t){e.orders=t.data.sort((function(e,t){return e.points-t.points}))}))},getUserOrders:function(){var e=this;B.a.get("".concat(S.serverUrl,"/user/").concat(S.defaultUserId,"/user_orders")).then((function(t){e.userOrders=t.data.sort((function(e,t){return e.points-t.points}))}))},addUserOrder:function(e){var t=this;this.user.points>0&&this.user.points>=e.points&&B.a.post("".concat(S.serverUrl,"/user/").concat(S.defaultUserId,"/set_points/").concat(parseInt(this.user.points)-parseInt(e.points))).then((function(){t.getUser((function(){B.a.post("".concat(S.serverUrl,"/user/").concat(S.defaultUserId,"/user_orders"),e).then((function(){t.getUserOrders()}))}))}))},removeOrder:function(e){var t=this;B.a.delete("".concat(S.serverUrl,"/user/").concat(S.defaultUserId,"/orders/").concat(e.id)).then((function(){t.getOrders()}))},removeUserOrder:function(e){var t=this;B.a.delete("".concat(S.serverUrl,"/user/").concat(S.defaultUserId,"/user_orders/").concat(e.id)).then((function(){t.getUserOrders()}))},addUserPoints:function(){var e=this;B.a.post("".concat(S.serverUrl,"/user/").concat(S.defaultUserId,"/add_points/").concat(this.tempUserPoints)).then((function(){e.getUser((function(){}))}))},addOrder:function(){this.isModalVisible=!0},addNewUserOrder:function(){this.isModalVisible=!0},closeModal:function(){this.isModalVisible=!1},addNewOrder:function(e){var t=this;this.isModalVisible=!1,B.a.post("".concat(S.serverUrl,"/user/").concat(S.defaultUserId,"/orders"),e).then((function(){t.getOrders()}))},redeemOrder:function(e){var t=this;B.a.post("".concat(S.serverUrl,"/user/").concat(S.defaultUserId,"/user_orders/").concat(e.id,"/redeem")).then((function(){t.getUserOrders()}))}}},T=A,N=r("a844"),E=r("71d9"),D=Object(f["a"])(T,i,a,!1,null,"5ebc2386",null),R=D.exports;m()(D,{VBtn:h["a"],VCol:k["a"],VContainer:I["a"],VIcon:U["a"],VRow:M["a"],VTextField:P["a"],VTextarea:N["a"],VToolbar:E["a"]});var F={name:"App",components:{Main:R},data:function(){return{}}},J=F,L=(r("034f"),r("7496")),q=r("f6c4"),z=Object(f["a"])(J,o,s,!1,null,null,null),G=z.exports;m()(z,{VApp:L["a"],VMain:q["a"]});var H=r("f309");n["a"].use(H["a"]);var K=new H["a"]({theme:{options:{customProperties:!0},themes:{dark:{background:"#292930"}},dark:!0}});n["a"].config.productionTip=!1,new n["a"]({vuetify:K,render:function(e){return e(G)}}).$mount("#app")},"796f":function(e,t,r){},"85ec":function(e,t,r){},"9a2e":function(e,t,r){},a85d:function(e,t,r){"use strict";r("9a2e")}});
//# sourceMappingURL=app.53d1ba82.js.map