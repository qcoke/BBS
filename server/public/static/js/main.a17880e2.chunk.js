(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{70:function(e,t,a){e.exports=a(90)},75:function(e,t,a){},77:function(e,t,a){},88:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(8),r=a.n(i),c=a(16),o=a(17),s=a(23),m=a(18),u=a(24),h=(a(75),a(145)),d=a(146),v=a(147),k=a(134),g=a(142),p=a(60),y=a.n(p),E=a(149),f=a(144),b=a(127),j=a(130),w=a(133),O=a(131),x=a(132),C=a(59),I=a.n(C),S=(a(77),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.dataList;return l.a.createElement(b.a,null,e.map(function(e){return l.a.createElement(j.a,{key:e.key,className:"\u5f20\u4e09"===e.nickname?"my-message":"people-message"},l.a.createElement(O.a,null,l.a.createElement(x.a,null,l.a.createElement(I.a,null))),l.a.createElement(w.a,{secondary:e.text}))}))}}]),t}(n.Component)),T=a(135),W=a(152),N=a(143),_=a(138),L=a(137),P=a(151),D=a(153),B=a(141),F=a(140),H=a(139),J=(Object(T.a)(function(e){return{formControl:{margin:e.spacing(3)}}}),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).demo=function(){alert("Login demo method caller")},a.handleClose=function(){a.setState({show:!1})},a.handleShow=function(){a.setState({show:!0})},a.handleChange=function(){alert("handleChange")},a.state={show:!1,value:"1",nickname:"\u5f20\u4e09",headImgStr:"",headerArr:[{key:"1",value:"/imgs/head_1.jpeg"},{key:"2",value:"/imgs/head_2.jpeg"},{key:"3",value:"/imgs/head_3.jpeg"},{key:"4",value:"/imgs/head_4.jpeg"},{key:"5",value:"/imgs/head_5.jpeg"},{key:"6",value:"/imgs/head_6.jpeg"}]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(W.a,{open:this.state.show,onClose:this.handleClose,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",fullWidth:!0,maxWidth:"lg"},l.a.createElement(L.a,{id:"alert-dialog-title"},"\u8bf7\u8f93\u5165\u60a8\u7684\u8d44\u6599"),l.a.createElement(_.a,null,l.a.createElement(H.a,null,l.a.createElement(F.a,null,l.a.createElement(D.a,{label:"\u5934\u50cf",value:this.state.value},l.a.createElement(B.a,{value:"female",control:l.a.createElement(P.a,{color:"primary"}),label:"Female",labelPlacement:"start"})))),l.a.createElement(H.a,null,l.a.createElement(F.a,null,l.a.createElement(E.a,{label:"\u6635\u79f0\uff1a",value:this.state.nickname})))),l.a.createElement(N.a,null,l.a.createElement(f.a,{variant:"contained"},"\u53d6\u6d88"),l.a.createElement(f.a,{variant:"contained",color:"primary"},"\u63d0\u4ea4")))}}]),t}(n.Component)),K=(a(88),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={showLogin:!1,listItems:[{key:1,nickname:"\u5f20\u4e09",value:"Photos",text:"\u5c31\u662f\u53ef\u601c\u7684\u808c\u80a4\u963f\u62c9\u5c71\u53e3\u5c06\u5927\u5e45\u62c9\u5347\u7684"},{key:2,nickname:"\u5f20\u4e09",value:"Work",text:"\u5c31\u662f\u53ef\u601c\u7684\u808c\u80a4\u963f\u62c9\u5c71\u53e3\u5c06\u5927\u5e45\u62c9\u5347\u7684"},{key:3,nickname:"\u5f20\u4e09",value:"Vacation",text:"\u963f\u514b\u7409\u65af\u8bb0\u5f97\u53cd\u9988\u5566\u6280\u672f\u7684\u5f00\u53d1\u674e\u5efa\u963f\u65af\u5229\u5eb7\u7684\u808c\u80a4\u8138\u4e0a\u770b\u5bf9\u65b9"},{key:4,nickname:"\u674e\u56db",value:"Tokyo",text:"\u963f\u514b\u82cf\u7684\u808c\u80a4\u5362\u5361\u65af\u5c31\u6253\u5f00\u4e86\u98de\u673a\u963f\u65af\u5229\u5eb7\u7684\u808c\u80a4\u5362\u5361\u65af\u89c9\u5f97\u6d6a\u8d39\u7a7a\u95f4\u4e0a\u6765\u7684\u5496\u5561\u673a"},{key:5,nickname:"\u5f20\u4e09",value:"HK",text:"\u770b\u89c1\u4e86\u5361\u6280\u672f\u7684\u5f00\u53d1 i \u6b27\u6587\u54e6\u65e5 u \u4e3a\u513f\u5973\u4eec\uff0c\u82cf\u4e39\u8bfa\u592b"},{key:6,nickname:"\u674e\u56db",value:"Photos",text:"\u5c31\u662f\u53ef\u601c\u7684\u808c\u80a4\u963f\u62c9\u5c71\u53e3\u5c06\u5927\u5e45\u62c9\u5347\u7684"},{key:7,nickname:"\u5f20\u4e09",value:"Work",text:"\u5c31\u662f\u53ef\u601c\u7684\u808c\u80a4\u963f\u62c9\u5c71\u53e3\u5c06\u5927\u5e45\u62c9\u5347\u7684"},{key:8,nickname:"\u5f20\u4e09",value:"Vacation",text:"\u963f\u514b\u7409\u65af\u8bb0\u5f97\u53cd\u9988\u5566\u6280\u672f\u7684\u5f00\u53d1\u674e\u5efa\u963f\u65af\u5229\u5eb7\u7684\u808c\u80a4\u8138\u4e0a\u770b\u5bf9\u65b9"}]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"enterText",value:function(e){var t=e.target.value;13===e.which&&(this.state.listItems.push({key:(new Date).getTime(),nickname:"\u5f20\u4e09",value:(new Date).getTime(),text:t}),this.setState({listItems:this.state.listItems}),e.target.value="",setTimeout(function(){document.querySelector(".contain-list").scrollTop=9999999},500))}},{key:"componentDidMount",value:function(){this.refs.login.handleShow()}},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement(h.a,{fixed:!0,className:"main-container"},l.a.createElement(d.a,{position:"static",className:"app-title"},l.a.createElement(v.a,null,l.a.createElement(g.a,{edge:"start",color:"inherit","aria-label":"menu"},l.a.createElement(y.a,null)),l.a.createElement(k.a,{variant:"h6",className:"typo-title"},"Hello \u697d"),l.a.createElement(f.a,{color:"inherit"},"\u5728\u7ebf\u4eba\u6570\uff1a0"))),l.a.createElement("div",{className:"contain-list"},l.a.createElement(S,{dataList:this.state.listItems})),l.a.createElement("div",{className:"footer"},l.a.createElement(E.a,{fullWidth:!0,placeholder:"\u8bf7\u8f93\u5165\u60a8\u7684\u5185\u5bb9",multiline:!0,rows:"1",margin:"none",variant:"outlined",onKeyPress:function(t){e.enterText(t)}}))),l.a.createElement(J,{ref:"login"}))}}]),t}(n.Component)),V=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(K,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[70,2,1]]]);
//# sourceMappingURL=main.a17880e2.chunk.js.map