(this["webpackJsonpminecraft-server-status"]=this["webpackJsonpminecraft-server-status"]||[]).push([[0],{105:function(e,t,n){e.exports=n(193)},110:function(e,t,n){},111:function(e,t,n){},193:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),A=n(8),c=n.n(A),o=(n(110),n(111),n(46)),s=n(195),i=n(197),l=n(38),u=n.n(l),m=n(80),h=n.n(m),f=n(81),g=n.n(f),E=n(82),d=n.n(E),D=[h.a,g.a,d.a],O=function(){var e=Math.floor(3*Math.random()+0);return D[e]},B=function(e){return r.a.createElement(s.b,{itemLayout:"horizontal",dataSource:e.players,renderItem:function(e){return r.a.createElement(s.b.Item,null,r.a.createElement(s.b.Item.Meta,{avatar:r.a.createElement(i.a,{src:O()}),title:e.name,description:""}))}})},b=function(){var e=Object(a.useState)({}),t=Object(o.a)(e,2),n=(t[0],t[1],Object(a.useState)([])),A=Object(o.a)(n,2),c=A[0],s=A[1],i=Object(a.useState)({}),l=Object(o.a)(i,2),m=l[0],h=l[1];return Object(a.useEffect)((function(){fetch("https://minecraft-server-check.herokuapp.com/",{method:"GET",headers:{"Content-Type":"application/json"},mode:"cors",cache:"default"}).then((function(e){return e.json()})).then((function(e){s(e.result.players.sample),h(e.result.players)})).catch((function(e){}))}),[]),r.a.createElement(r.a.Fragment,null,c.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:u.a.header},r.a.createElement("h1",null,"40tena BWW Server")),r.a.createElement("div",{className:u.a.List},r.a.createElement("h3",null,"Players ",m.online," / ",m.max," "),r.a.createElement(B,{players:c}))):null)};n(192);var j=function(){return r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement("footer",{class:"Footer"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},38:function(e,t,n){e.exports={header:"List_header__3BOKC",List:"List_List__mL3dx"}},80:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAiElEQVR4nGLZuXMnAy0BE01NHxYWsCBz3N3dqWIocrwO/SCiuQU0B0M/iOibD5DB82t74WxJLWeyLRj6QUTfOPj//z+cfaOaEc7GGR8n2BB6zX/C2YyMCL1DP4gGLh98RLJaAEkcJT4ueyAkzLGbM/SDiOYWMCKHKS3A0A+iUQtGgAWAAAAA//9r1homaM+ovQAAAABJRU5ErkJggg=="},81:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAABJklEQVR4nGKp3RfCAAO/fvyAsz9/+QJn//37lwEb+PXrF5z9/sN7OFtWRhbOZsKqk4pg6FvA8ujhQzjHRFkPzv7HKQJnP/zyEs5+/+4dnM3DzQ1ns7Gxwdn///2Ds4d+ENE+DkRFReGcY9XHsCriSOGDs5HT+485n+Ds7yHY88rQDyLax8Hr16/hHAUJQayKHsxBhDsnAzNW9Q5flODs6Tyn4OyhH0Q0t4BxZ2sMnHPt/gs4m5eTHc7+9vM3QYNevEfUH/+RxId+ENE+Hxy4cA/OkRTkwaro07efcDYbKyIf6KtIwdnPkeIAGQz9IKJ9HDgYIMoQ5PhAFv/1/z9WzbjU332OqLeHfhDRPg6QwwtXOCKDxy8/YBXHpX7oBxHNLQAEAAD//2D5XAJfI/KrAAAAAElFTkSuQmCC"},82:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAABUUlEQVR4nGLRVeBngIG//+BMBmZGJjj7198/cPafP3/hbCYmhBpWFmY4+/9/hDkIFTQCQ98CFuRwRwZ//yMkuDjY4Gw+doSb/iG57+3nnwjx/0jxRE3XYgND3wIWZE57bgKczcaKCHdODj44+/vXTwgNzAj3vX/5HM7uWbMNzh76QURzCxiX1mfCOZzs7HD295+IdM3MjBB//+k9nC0nLgZnP3x4G6sFQz+IaJ8PkMM9sLIfzvb16ICzk8wfw9nI4T59jxCcvXnHejh7WUMWnD30g4j2+WBamjecIyYhDWezsiPq6i379mHVHOxhC2c/eXQHzr7/4g2cPfSDiPb54MtvRJvn15P7cPbDJ5/hbB5mVqyad+4+AWdLSHHB2YwMCPVDP4hoHwcPnr2Ec/79Q7SFRAT4sWr4+fsXnM3JzgFnf/3+F6uaoR9ENLcAEAAA//8gQVcTg7yShAAAAABJRU5ErkJggg=="}},[[105,1,2]]]);
//# sourceMappingURL=main.347c3bdf.chunk.js.map