(self.webpackChunkairkit_ui=self.webpackChunkairkit_ui||[]).push([[433],{60145:function(i,n,t){i.exports=t(61465)},61465:function(i,n,t){"use strict";t.d(n,{ArrowTextSlider:function(){return y},Button:function(){return O},Carousel:function(){return T},Divider:function(){return S},Foo:function(){return W},Progress:function(){return w},Switch:function(){return Q},message:function(){return $}});var s=t(5574),c=t.n(s),r=t(67294),e=t(85893),u=function(a){var d=a.texts,f=(0,r.useState)(0),_=c()(f,2),x=_[0],v=_[1],D=function(){v(function(o){return o===0?d.length-1:o-1})},h=function(){v(function(o){return o===d.length-1?0:o+1})};return(0,e.jsxs)("div",{className:"airkit-arrow-text-slider-container",children:[(0,e.jsx)("div",{className:"airkit-arrow-text-slider-arrow-button",onClick:D,children:"\u2190"}),(0,e.jsx)("div",{className:"airkit-arrow-text-slider-text",children:d[x]}),(0,e.jsx)("div",{className:"airkit-arrow-text-slider-arrow-button",onClick:h,children:"\u2192"})]})},M=u,y=M,p=function(a){var d=a.type,f=a.children,_=a.onClick;return(0,e.jsx)("button",{className:"airkit-button witch-".concat(d),type:"button",onClick:_,children:f})},A=p,O=A,g=function(a){var d=a.children,f=a.style,_=(0,r.useState)(0),x=c()(_,2),v=x[0],D=x[1],h=r.Children.count(d),l=function(){D(function(m){return m===0?h-1:m-1})},o=function(){D(function(m){return(m+1)%h})},E={"--current-index":v.toString()};return(0,e.jsxs)("div",{className:"carousel",style:f,children:[(0,e.jsx)("button",{type:"button",className:"prev-button",onClick:l,children:"Prev"}),(0,e.jsx)("div",{className:"carousel-item",style:E,children:d}),(0,e.jsx)("button",{type:"button",className:"next-button",onClick:o,children:"Next"}),(0,e.jsx)("div",{className:"carousel-dots",children:Array(h).fill(1).map(function(C,m){return(0,e.jsx)("span",{className:"dot ".concat(m===v?"active":""),onClick:function(){D(m)}},m)})})]})},P=g,T=P,B=function(a){var d=a.direction,f=d===void 0?"horizontal":d,_=a.borderStyle,x=_===void 0?"solid":_,v=a.contentPosition,D=v===void 0?"center":v,h=a.children,l={"--airkit-border-style":x},o={"--airkit-border-style":x};return(0,e.jsx)("div",{className:"airkit-divider-".concat(f),role:"separator",style:l,children:h&&f==="horizontal"&&(0,e.jsx)("div",{className:"airkit-divider-text is-".concat(D),style:o,children:h})})},I=B,S=I,F=function(a){return(0,e.jsx)("h4",{children:a.title})},L=F,W=L,R=t(19632),K=t.n(R),U=t(20745),b=function(){var a=(0,r.useState)([]),d=c()(a,2),f=d[0],_=d[1],x=function(o){_(function(E){return E.filter(function(C){return C.id!==o})})},v=function(o,E){var C={id:Date.now(),content:o,type:E};_(function(m){return[].concat(K()(m),[C])}),setTimeout(function(){x(C.id)},3e3)},D={info:function(o){return v(o,"info")},success:function(o){return v(o,"success")},error:function(o){return v(o,"error")}};(0,r.useEffect)(function(){var l;if(f.length>0){var o=document.createElement("div");o.classList.add("message-container"),document.body.appendChild(o),l=(0,U.createRoot)(o),l.render((0,e.jsx)(e.Fragment,{children:f.map(function(E){return(0,e.jsx)("div",{className:"message-notice",children:(0,e.jsx)("div",{className:"message message-".concat(E.type),children:E.content})},E.id)})}))}return function(){var E=document.querySelector(".message-container");E&&l&&setTimeout(function(){l.unmount(),document.body.removeChild(E)},0)}},[f]);var h=null;return[D,h]},N=b,k={useMessage:N},$=k,H=function(a){return(0,e.jsx)("div",{className:"airkit-ui-progress-bar",children:(0,e.jsx)("div",{className:"airkit-ui-progress",style:{width:"".concat(a.width)+"px"}})})},z=H,w=z,G=function(a){var d=a.onColor,f=d===void 0?"#409eff":d,_=a.offColor,x=_===void 0?"#dcdfe6":_,v=a.action,D=v===void 0?!0:v,h=(0,r.useState)(D),l=c()(h,2),o=l[0],E=l[1],C={"--switch-off":x,"--switch-on":f},m=function(){E(function(X){return!X})};return(0,e.jsx)("div",{className:"airkit-switch-container is-".concat(o?"on":"off"),style:C,onClick:m,children:(0,e.jsx)("div",{className:"airkit-switch-button is-".concat(o?"action":"not-action")})})},J=G,Q=J},88901:function(i,n,t){"use strict";t.r(n);var s=t(60145),c=t(67294),r=t(85893),e=function(){return(0,r.jsx)(s.ArrowTextSlider,{texts:["hello","world","!"]})};n.default=e},42866:function(i,n,t){"use strict";t.r(n);var s=t(60145),c=t(67294),r=t(85893),e=function(){return(0,r.jsx)("div",{children:(0,r.jsx)(s.Button,{children:"default"})})};n.default=e},93745:function(i,n,t){"use strict";t.r(n);var s=t(60145),c=t(67294),r=t(85893),e=function(){return(0,r.jsxs)(s.Carousel,{children:[(0,r.jsx)("img",{src:"https://telegra.ph/file/ba9d8e80a0275d0738bc3.jpg",alt:"Image 1"}),(0,r.jsx)("img",{src:"https://telegra.ph/file/ba9d8e80a0275d0738bc3.jpg",alt:"Image 2"}),(0,r.jsx)("img",{src:"https://telegra.ph/file/ba9d8e80a0275d0738bc3.jpg",alt:"Image 3"}),(0,r.jsx)("img",{src:"https://telegra.ph/file/ba9d8e80a0275d0738bc3.jpg",alt:"Image 4"}),(0,r.jsx)("img",{src:"https://missuo.ru/file/5df40ffdcb716609228b5.jpg",alt:"Image 5"})]})};n.default=e},37017:function(i,n,t){"use strict";t.r(n);var s=t(60145),c=t(67294),r=t(85893),e=function(){return(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{children:"\u5927\u6F20\u5B64\u70DF\u76F4"}),(0,r.jsx)(s.Divider,{}),(0,r.jsx)("span",{children:"\u957F\u6CB3\u843D\u65E5\u5706"})]})};n.default=e},67386:function(i,n,t){"use strict";t.r(n);var s=t(5574),c=t.n(s),r=t(60145),e=t(67294),u=t(85893),M=function(){var p=(0,e.useState)("center"),A=c()(p,2),O=A[0],g=A[1],P=function(B){var I=B.currentTarget.textContent;g(I)};return(0,u.jsxs)("div",{children:[(0,u.jsxs)("div",{children:[(0,u.jsx)("button",{type:"button",onClick:P,children:"left"}),(0,u.jsx)("button",{type:"button",onClick:P,children:"center"}),(0,u.jsx)("button",{type:"button",onClick:P,children:"right"})]}),(0,u.jsx)("span",{children:"\u5927\u6F20\u5B64\u70DF\u76F4"}),(0,u.jsx)(r.Divider,{contentPosition:O,children:"\u4F7F\u81F3\u585E\u4E0A"}),(0,u.jsx)("span",{children:"\u957F\u6CB3\u843D\u65E5\u5706"})]})};n.default=M},80487:function(i,n,t){"use strict";t.r(n);var s=t(60145),c=t(67294),r=t(85893),e=function(){return(0,r.jsxs)("div",{children:[(0,r.jsx)(s.Divider,{borderStyle:"dashed"}),(0,r.jsx)("span",{children:"\u5355\u8F66\u6B32\u95EE\u8FB9\uFF0C\u5C5E\u56FD\u8FC7\u5C45\u5EF6\u3002"}),(0,r.jsx)(s.Divider,{borderStyle:"dotted"}),(0,r.jsx)("span",{children:"\u5F81\u84EC\u51FA\u6C49\u585E\uFF0C\u5F52\u96C1\u5165\u5434\u5929\u3002"}),(0,r.jsx)(s.Divider,{borderStyle:"double"}),(0,r.jsx)("span",{children:"\u5927\u6F20\u5B64\u70DF\u76F4\uFF0C\u957F\u6CB3\u843D\u65E5\u5706\u3002"}),(0,r.jsx)(s.Divider,{borderStyle:"groove"}),(0,r.jsx)("span",{children:"\u8427\u5173\u9022\u5019\u9A91\uFF0C\u90FD\u62A4\u5728\u71D5\u7136\u3002"}),(0,r.jsx)(s.Divider,{borderStyle:"ridge"})]})};n.default=e},63299:function(i,n,t){"use strict";t.r(n);var s=t(60145),c=t(67294),r=t(85893),e=function(){return(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{children:"\u5927\u6F20\u5B64\u70DF\u76F4"}),(0,r.jsx)(s.Divider,{direction:"vertical"}),(0,r.jsx)("span",{children:"\u957F\u6CB3\u843D\u65E5\u5706"})]})};n.default=e},68259:function(i,n,t){"use strict";t.r(n);var s=t(60145),c=t(67294),r=t(85893),e=function(){return(0,r.jsx)(s.Foo,{title:"DEMO"})};n.default=e},63392:function(i,n,t){"use strict";t.r(n);var s=t(5574),c=t.n(s),r=t(60145),e=t(67294),u=t(85893),M=function(){var p=r.message.useMessage(),A=c()(p,2),O=A[0],g=A[1],P=function(){O.info("2222")};return(0,u.jsxs)("div",{children:[(0,u.jsx)(r.Button,{onClick:P,children:"Show Message"}),g]})};n.default=M},47208:function(i,n,t){"use strict";t.r(n);var s=t(60145),c=t(67294),r=t(85893),e=function(){return(0,r.jsx)(s.Progress,{width:70})};n.default=e},37457:function(i,n,t){"use strict";t.r(n);var s=t(60145),c=t(67294),r=t(85893),e=function(){return(0,r.jsx)("div",{children:(0,r.jsx)(s.Switch,{})})};n.default=e},96446:function(i,n,t){var s=t(37923);function c(r){if(Array.isArray(r))return s(r)}i.exports=c,i.exports.__esModule=!0,i.exports.default=i.exports},96936:function(i){function n(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}i.exports=n,i.exports.__esModule=!0,i.exports.default=i.exports},88619:function(i){function n(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}i.exports=n,i.exports.__esModule=!0,i.exports.default=i.exports},19632:function(i,n,t){var s=t(96446),c=t(96936),r=t(96263),e=t(88619);function u(M){return s(M)||c(M)||r(M)||e()}i.exports=u,i.exports.__esModule=!0,i.exports.default=i.exports}}]);
