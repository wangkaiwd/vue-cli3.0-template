(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6bf13fc1"],{2953:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",{attrs:{type:"flex"}},[n("left-nav"),n("el-col",[n("el-card",{staticClass:"content"},[n("div",{attrs:{slot:"header"},slot:"header"},[t._v("\n        "+t._s(t.$route.name)+"\n      ")]),n("router-view")],1)],1)],1)},r=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-col",{staticClass:"left-nav",attrs:{span:4}},[n("el-menu",{staticClass:"left-nav-menu",attrs:{"default-active":t.$route.path,router:!0}},[n("side-bar")],1)],1)},u=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"side-bar-wrapper"},[t._l(t.menuConfig,function(e){return[e.children?n("el-submenu",{key:"sub-"+e.path,attrs:{index:e.path}},[n("template",{slot:"title"},[t._v("\n        "+t._s(e.name)+"\n      ")])],2):n("el-menu-item",{key:"item-"+e.path,attrs:{index:e.path}},[t._v("\n      "+t._s(e.name)+"\n    ")])]})],2)},i=[],l=n("a18c"),o={name:"SideBar",props:{menuConfig:{type:Array,default:function(){return l["a"]}}},data:function(){return{}}},f=o,d=(n("a46b"),n("2877")),p=Object(d["a"])(f,s,i,!1,null,"1c658a6d",null),m=p.exports,v={name:"LeftNav",components:{SideBar:m},data:function(){return{defaultActive:"/home"}}},h=v,b=(n("59cd"),Object(d["a"])(h,c,u,!1,null,"6d9704e6",null)),_=b.exports,w={name:"AdminMain",components:{LeftNav:_},data:function(){return{}},updated:function(){console.log("route",this.$route)}},x=w,C=(n("6f1f"),Object(d["a"])(x,a,r,!1,null,"8611d0a8",null));e["default"]=C.exports},"37b1":function(t,e,n){},"520a":function(t,e,n){},"59cd":function(t,e,n){"use strict";var a=n("37b1"),r=n.n(a);r.a},"6f1f":function(t,e,n){"use strict";var a=n("520a"),r=n.n(a);r.a},a46b:function(t,e,n){"use strict";var a=n("a8cc"),r=n.n(a);r.a},a8cc:function(t,e,n){}}]);