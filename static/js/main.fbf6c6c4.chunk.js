(this["webpackJsonpadmin-web-portal"]=this["webpackJsonpadmin-web-portal"]||[]).push([[0],{187:function(e,a,t){},188:function(e,a,t){},191:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(42),o=t.n(l),i=(t(75),t(3)),c=t(4),s=t(5),m=t(6),u=(t(76),t(65)),d=(t(94),function(e){return r.a.createElement("div",{className:"side-bar"},r.a.createElement(u.slide,e,r.a.createElement("a",{className:"menu-item",href:"/Home"},"Home"),r.a.createElement("a",{className:"menu-item",href:"/Optimizer"},"Optimizer"),r.a.createElement("a",{className:"menu-item",href:"/UserAdmin"},"UserAdmin"),r.a.createElement("div",{className:"sidebar-text"},r.a.createElement("small",null,"CalPlug \xa9 ",(new Date).getFullYear()))))}),p=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Optimizer"),r.a.createElement("h1",null,"Optimizer"),r.a.createElement("h1",null,"Optimizer"),r.a.createElement("h1",null,"Optimizer"),r.a.createElement("h1",null,"Optimizer"))}}]),t}(n.Component),b=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"UserAdmin"),r.a.createElement("h1",null,"UserAdmin"),r.a.createElement("h1",null,"UserAdmin"),r.a.createElement("h1",null,"UserAdmin"),r.a.createElement("h1",null,"UserAdmin"),r.a.createElement("h1",null,"UserAdmin"),r.a.createElement("h1",null,"UserAdmin"),r.a.createElement("h1",null,"UserAdmin"),r.a.createElement("h1",null,"UserAdmin"))}}]),t}(n.Component),E=t(23),h=t(43),g=t(24),f=t(7),v=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={chartData:e.chartData},n}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"chart"},r.a.createElement(f.a,{data:this.state.chartData,options:{title:{display:this.props.displayTitle,text:"Largest Cities In "+this.props.location,fontSize:25},legend:{display:this.props.displayLegend,position:this.props.legendPosition}}}),r.a.createElement(f.d,{data:this.state.chartData,options:{title:{display:this.props.displayTitle,text:"Largest Cities In "+this.props.location,fontSize:25},legend:{display:this.props.displayLegend,position:this.props.legendPosition}}}),r.a.createElement(f.e,{data:this.state.chartData,options:{title:{display:this.props.displayTitle,text:"Largest Cities In "+this.props.location,fontSize:25},legend:{display:this.props.displayLegend,position:this.props.legendPosition}}}))}}]),t}(n.Component);v.defaultProps={displayTitle:!0,displayLegend:!0,legendPosition:"right",location:"City"};var y=v,C={labels:["January"],datasets:[{label:"My First dataset",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[{x:10,y:20,r:5}]}]},O=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Bubble Example"),r.a.createElement(f.b,{data:C}))}}]),t}(n.Component),j={labels:["Scatter"],datasets:[{label:"My First dataset",fill:!1,backgroundColor:"rgba(75,192,192,0.4)",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[{x:65,y:75},{x:59,y:49},{x:80,y:90},{x:81,y:29},{x:56,y:36},{x:55,y:25},{x:40,y:18}]}]},k=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Scatter Example"),r.a.createElement(f.h,{data:j}))}}]),t}(n.Component),B={datasets:[{data:[11,16,7,3,14],backgroundColor:["#FF6384","#4BC0C0","#FFCE56","#E7E9ED","#36A2EB"],label:"My dataset"}],labels:["Red","Green","Yellow","Grey","Blue"]},N=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Polar Example"),r.a.createElement(f.f,{data:B}))}}]),t}(n.Component),x={labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],datasets:[{label:"My First dataset",backgroundColor:"rgba(179,181,198,0.2)",borderColor:"rgba(179,181,198,1)",pointBackgroundColor:"rgba(179,181,198,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(179,181,198,1)",data:[65,59,90,81,56,55,40]},{label:"My Second dataset",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",pointBackgroundColor:"rgba(255,99,132,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(255,99,132,1)",data:[28,48,40,19,96,27,100]}]},A=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Radar Example"),r.a.createElement(f.g,{data:x}))}}]),t}(n.Component),D={labels:["Red","Green","Yellow"],datasets:[{data:[300,50,100],backgroundColor:["#FF6384","#36A2EB","#FFCE56"],hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56"]}]},H=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Doughnut Example"),r.a.createElement(f.c,{data:D}))}}]),t}(n.Component),F=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){var e;return Object(i.a)(this,t),(e=a.call(this)).state={chartData:{}},e}return Object(c.a)(t,[{key:"componentWillMount",value:function(){this.getChartData()}},{key:"getChartData",value:function(){this.setState({chartData:{labels:["Los Angeles","San Diego","San Francisco","San Jose","Sacramento","Irvine"],datasets:[{label:"Population",data:[617594,181045,153060,106519,105162,95072],backgroundColor:["rgba(255, 99, 132, 0.6)","rgba(54, 162, 235, 0.6)","rgba(255, 206, 86, 0.6)","rgba(75, 192, 192, 0.6)","rgba(153, 102, 255, 0.6)","rgba(255, 159, 64, 0.6)","rgba(255, 99, 132, 0.6)"]}]}})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E.a,null,r.a.createElement(h.a,null,r.a.createElement(g.a,null,r.a.createElement(y,{chartData:this.state.chartData,location:"California",legendPosition:"bottom"})),r.a.createElement(g.a,null,r.a.createElement(O,null),r.a.createElement(k,null),r.a.createElement(N,null))),r.a.createElement(h.a,null,r.a.createElement(g.a,null,r.a.createElement(A,null)),r.a.createElement(g.a,null,r.a.createElement(H,null)))))}}]),t}(n.Component),S=(t(187),function(e){return r.a.createElement("header",{className:"toolbar"},r.a.createElement("nav",{className:"navbar navbar-expand-lg fixed-top navbar-dark bg-dark"},r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement("a",{className:"nav-link",href:"/"},r.a.createElement("h5",null,"CalPlug")," ",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/Home"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/Optimizer"},"Optimizer")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/UserAdmin"},"UserAdmin"))))))}),w=(t(188),function(){return r.a.createElement("div",{className:"footer-copyright text-center py-3"},r.a.createElement("nav",{className:"navbar fixed-bottom navbar-dark bg-dark"}))}),U=t(31),z=t(15),P=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E.a,null,r.a.createElement(S,null)),r.a.createElement("div",{className:"main-content"},r.a.createElement(d,{pageWrapId:"page-wrap",outerContainerId:"App"}),r.a.createElement("div",{className:"container",style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement(U.a,null,r.a.createElement("div",{className:"router"},r.a.createElement(z.c,null,r.a.createElement(z.a,{path:"/Optimizer",component:p}),r.a.createElement(z.a,{path:"/UserAdmin",component:b}),r.a.createElement(z.a,{path:"/",component:F})))))),r.a.createElement(E.a,null,r.a.createElement(w,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(U.a,null,r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},70:function(e,a,t){e.exports=t(191)},75:function(e,a,t){},76:function(e,a,t){},94:function(e,a,t){}},[[70,1,2]]]);
//# sourceMappingURL=main.fbf6c6c4.chunk.js.map