(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,t,a){},135:function(e,t){},138:function(e,t,a){},139:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(8),i=a.n(r),o=a(17),c=a(18),s=a(23),u=a(19),m=a(24),h=(a(99),a(190)),d=a(191),g=a(192),f=a(35),p=a(187),E=a(83),v=a.n(E),k=a(193),y=a(189),b=a(175),j=a(178),w=a(181),O=a(179),N=a(180),C=a(81),S=a.n(C),I=(a(100),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.dataList;return l.a.createElement(b.a,null,e.map((function(e){return l.a.createElement(j.a,{key:e.key,className:"\u5f20\u4e09"===e.nickname?"my-message":"people-message"},l.a.createElement(O.a,null,l.a.createElement(N.a,null,l.a.createElement(S.a,null))),l.a.createElement(w.a,{secondary:e.text}))})))}}]),t}(n.Component)),T=a(185),D=a(196),x=a(188),V=a(183),L=a(184),M=a(182),_=a(194),W=a(186),q=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleClose=function(){a.setState({openDialog:!1})},a.handleOpen=function(){a.setState({openDialog:!0})},a.handleChange=function(e){var t=e.target.value;a.setState({headerValue:t})},a.saveData=function(){0===a.state.nickName.length?(console.log("\u8bf7\u8f93\u5165\u6635\u79f0"),a.setState({showError:!0})):(a.setState({showError:!1}),window.sessionStorage.setItem("nickName",a.state.nickName),window.sessionStorage.setItem("headerValue",a.state.headerValue))},a.state={openDialog:!1,showError:!1,headerValue:"a",nickName:"\u5f20\u4e09"},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(D.a,{open:this.state.openDialog,"aria-labelledby":"form-dialog-title"},l.a.createElement(M.a,{id:"form-dialog-title"},"\u521d\u59cb\u8bbe\u7f6e"),l.a.createElement(V.a,null,l.a.createElement(L.a,null,"\u8bf7\u9009\u62e9\u60a8\u7684\u5934\u50cf."),l.a.createElement(T.a,null,l.a.createElement(W.a,{container:!0,justify:"center",alignItems:"center"},[{key:"a",value:"/imgs/head_1.jpeg"},{key:"b",value:"/imgs/head_2.jpeg"},{key:"c",value:"/imgs/head_3.jpeg"},{key:"d",value:"/imgs/head_4.jpeg"},{key:"f",value:"/imgs/head_6.jpeg"}].map((function(t){return l.a.createElement("div",{key:t.key},l.a.createElement(_.a,{checked:e.state.headerValue===t.key,onChange:e.handleChange,value:t.key,name:"radio-button-demo"}),l.a.createElement(N.a,{alt:"",src:t.value}))})))),l.a.createElement(T.a,null,l.a.createElement(k.a,{required:!0,error:this.state.showError,label:"\u6635\u79f0",name:"nickName",ref:"nickName",defaultValue:this.state.nickName,onChange:function(t){e.setState({nickName:t.target.value})}}))),l.a.createElement(x.a,null,l.a.createElement(y.a,{onClick:this.handleClose},"\u53d6\u6d88"),l.a.createElement(y.a,{color:"primary",onClick:this.saveData},"\u786e\u5b9a"))))}}]),t}(n.Component),B=a(82),J=a.n(B),F=(a(138),J()("http://127.0.0.1:3001")),H=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).sendMessage=function(e){var t={key:(new Date).getTime(),nickname:window.sessionStorage.getItem("nickName"),text:e};a.addMessageToList(t),F.emit("sentToServer",t)},a.addMessageToList=function(e){var t=a.state.listItems;t.push(e),a.setState({listItems:t}),setTimeout((function(){document.querySelector(".contain-list").scrollTop=9999999}),500)},a.state={showLogin:!1,listItems:[]},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"enterText",value:function(e){var t=e.target.value;13===e.which&&(this.sendMessage(t),e.target.value="")}},{key:"componentDidMount",value:function(){this.refs.login.handleOpen(),F.on("sendToClient",(function(e){console.log("\u53d1\u9001\u8fc7\u6765\u4e86\u65b0\u7684\u6d88\u606f:",e)}))}},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement(h.a,{fixed:!0,className:"main-container"},l.a.createElement(d.a,{position:"static",className:"app-title"},l.a.createElement(g.a,null,l.a.createElement(p.a,{edge:"start",color:"inherit","aria-label":"menu"},l.a.createElement(v.a,null)),l.a.createElement(f.a,{variant:"h6",className:"typo-title"},"Hello \u697d"),l.a.createElement(y.a,{color:"inherit"},"\u5728\u7ebf\u4eba\u6570\uff1a0"))),l.a.createElement("div",{className:"contain-list"},l.a.createElement(I,{dataList:this.state.listItems})),l.a.createElement("div",{className:"footer"},l.a.createElement(k.a,{fullWidth:!0,placeholder:"\u8bf7\u8f93\u5165\u60a8\u7684\u5185\u5bb9",multiline:!0,rows:"1",margin:"none",variant:"outlined",onKeyPress:function(t){e.enterText(t)}}))),l.a.createElement(q,{ref:"login"}))}}]),t}(n.Component),K=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(H,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},94:function(e,t,a){e.exports=a(139)},99:function(e,t,a){}},[[94,1,2]]]);
//# sourceMappingURL=main.684fe517.chunk.js.map