(this["webpackJsonpfirst-app"]=this["webpackJsonpfirst-app"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),s=(n(13),n(3)),i=n(4),l=n(6),u=n(5),h=n(7),m=(n(14),n(15),function(e){return r.a.createElement("div",null,r.a.createElement("img",{src:"https://robohash.org/".concat(e.id),alt:"monster"}),r.a.createElement("h2",{key:e.id},e.name))}),d=function(e){return r.a.createElement("div",{className:"card-list"},e.data.map((function(e){return r.a.createElement(m,{key:e.id,id:e.id,name:e.name})})))},p=function(e){var t=e.placeholder,n=e.handleChange;return r.a.createElement("input",{type:"search",placeholder:t,onChange:n})},f=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).searchUser=function(t){e.setState({search:t.target.value})},e.state={monsters:[],search:""},e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.search,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Monsters Rolodex"),r.a.createElement(p,{placeholder:"Search Monster",handleChange:this.searchUser}),r.a.createElement(d,{data:a}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.6fcc9edf.chunk.js.map