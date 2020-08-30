(this["webpackJsonpmy-todolist"]=this["webpackJsonpmy-todolist"]||[]).push([[0],{61:function(e,t,n){e.exports={suggestions:"styles_suggestions__3O27_"}},68:function(e,t,n){e.exports=n(85)},84:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(19),i=n.n(c),l=n(40),o=n(23),s=n(55),u=n(56),h=n.n(u),m=n(20),p="3897463698fab29cbf0f47eca9ac50d5",E={isFetching:!1,error:"",cities:[],citiesSearchMatch:[]},d=Object(o.c)({weather:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LIST/DELETE_LIST":return Object(m.a)(Object(m.a)({},e),{},{cities:e.cities.filter((function(e){return e.id!==t.payload}))});case"WEATHER/GET_WEATHER_REQUEST":return Object(m.a)(Object(m.a)({},e),{},{isFetching:!0});case"WEATHER/GET_WEATHER_SUCCESS":return Object(m.a)(Object(m.a)({},e),{},{isFetching:!1,cities:t.payload.cities});case"WEATHER/GET_WEATHER_FAILURE":return Object(m.a)(Object(m.a)({},e),{},{isFetching:!1,error:t.payload});case"WEATHER/MATCH_CITIES":return Object(m.a)(Object(m.a)({},e),{},{citiesSearchMatch:t.payload});default:return e}}}),f=function(e){return function(t){t({type:"WEATHER/GET_WEATHER_REQUEST"});try{fetch(e).then((function(e){return e.json()})).then((function(n){console.log(e),t({type:"WEATHER/GET_WEATHER_SUCCESS",payload:{cities:n.list}})}))}catch(n){t({type:"WEATHER/GET_WEATHER_FAILURE",payload:n})}}},g=Object(o.e)(d,Object(o.d)(Object(o.a)(s.a,h.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),v=JSON.parse(localStorage.getItem("WEATHER")),y=v&&0!==v.length?v:[524901,703448,2643743],b="http://api.openweathermap.org/data/2.5/group?id=".concat(y.join(),"&units=metric&appid=").concat(p);g.dispatch(f(b)),g.subscribe((function(){var e=g.getState().weather.cities.map((function(e){return e.id}));localStorage.setItem("WEATHER",JSON.stringify(e))}));var w=n(16),j=n(62),O=n(8),T=n(17),S=(n(77),[{id:Date.now(),title:"\u041c\u043e\u0441\u043a\u0432\u0430",todos:[{id:Date.now(),text:"\u0412\u0435\u0442\u0435\u0440",completed:!1}]}]),_=r.a.createContext(S),x=n(107),C=n(60),R=n.n(C),I=n(108),L=n(112),A=n(106);function W(){var e=Object(w.a)(["\n list-style:none;\n padding-left:0;\n  li {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n      span {\n        font-size:.8rem;\n        }\n }\n"]);return W=function(){return e},e}function k(){var e=Object(w.a)(["\n font-size:3rem;\n font-weight:bold;\n"]);return k=function(){return e},e}function H(){var e=Object(w.a)(["\n  display:flex;\n  flex-direction:row;\n  justify-content: space-between;\n  align-items: center;\n    img {\n        width: 30%;\n    }\n"]);return H=function(){return e},e}var M=T.a.div(H()),F=T.a.div(k()),D=T.a.ul(W()),N=function(e){var t=e.weather,n=e.idList,a=e.deleteList;return r.a.createElement(L.a,{style:{background:"rgba(255, 255, 255, .7)",margin:"35px 40px",maxWidth:"320px",width:"320px"}},r.a.createElement(A.a,null,r.a.createElement(M,null,r.a.createElement(x.a,{variant:"h6",component:"h2"},t.name),r.a.createElement(I.a,{"aria-label":"delete",onClick:function(){return a(n)}},r.a.createElement(R.a,null))),r.a.createElement(M,null,r.a.createElement(F,null,Math.round(t.main.temp),"\xb0C"),r.a.createElement("img",{src:"//openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/".concat(t.weather[0].icon,".png"),alt:"weather"})),r.a.createElement("div",{className:"details"},r.a.createElement("hr",null),r.a.createElement("h6",null,"Details"),r.a.createElement(D,null,r.a.createElement("li",null,r.a.createElement("span",null,"Feels like:"),t.main.feels_like,"\xb0C"),r.a.createElement("li",null,r.a.createElement("span",null,"Wind:"),t.wind.speed,"m/s"),r.a.createElement("li",null,r.a.createElement("span",null,"Humidity:"),t.main.humidity,"%"),r.a.createElement("li",null,r.a.createElement("span",null,"Pressure:"),t.main.pressure,"hPa")))))},U=n(109);function G(){var e=Object(w.a)(["\n    display:flex;\n    align-items:center;\n    justify-content:center;\n    width:100%;\n    height:50vh;\n"]);return G=function(){return e},e}var J=T.a.div(G()),X=function(){return r.a.createElement(J,null,r.a.createElement(U.a,null))},z=n(36),P=n(37),B=n(33),Q=n(42),V=n(41),$=n(111),q=n(63),K=n(38),Y=n(47),Z=n(39),ee=n(110),te=n(34),ne=n.n(te),ae=n(46),re=function(e){return function(t){return function(n){Object(Q.a)(c,n);var a=Object(V.a)(c);function c(){var e;return Object(z.a)(this,c),(e=a.call(this)).state={results:[]},e}return Object(P.a)(c,[{key:"fetchData",value:function(){var t=Object(ae.a)(ne.a.mark((function t(){var n,a;return ne.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e.url);case 3:if((n=t.sent).ok){t.next=6;break}throw Error(n.statusText);case 6:return t.next=8,n.json();case 8:(a=t.sent)&&this.setState({results:a}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.error(t.t0);case 15:case"end":return t.stop()}}),t,this,[[0,12]])})));return function(){return t.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(ae.a)(ne.a.mark((function e(){return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.fetchData();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.results;return r.a.createElement(t,Object.assign({results:e},this.props))}}]),c}(r.a.Component)}},ce=n(61),ie=n.n(ce);function le(){var e=Object(w.a)(["\n  width:320px;\n  margin: 0 auto;\n  position:relative;\n    input {\n        background: rgba(255, 255, 255, 0.7);\n        border: none;\n    }\n"]);return le=function(){return e},e}var oe=T.a.div(le()),se=function(e){Object(Q.a)(n,e);var t=Object(V.a)(n);function n(e){var a;return Object(z.a)(this,n),(a=t.call(this,e)).cityInput=void 0,a.searchCity=function(e){e.preventDefault();!function(){var e=function(e,t){var n=new RegExp(e,"gi");return t.filter((function(e){return e.name.match(n)}))}(a.cityInput.current.value,a.props.results).map((function(e){var t=new RegExp(a.cityInput.current.value,"gi");return{name:e.name.replace(t,'<span className="hl2">'.concat(a.cityInput.current.value,"</span>")),index:e.id}}));a.props.searchCitiesMatch(e)}()},a.selectCity=function(e){a.props.addList(e),a.cityInput.current.value="",a.props.searchCitiesMatch([])},a.cityInput=r.a.createRef(),a.searchCity=a.searchCity.bind(Object(B.a)(a)),a.selectCity=a.selectCity.bind(Object(B.a)(a)),a}return Object(P.a)(n,[{key:"render",value:function(){var e=this,t=this.props.citiesSearchMatch;return r.a.createElement(oe,null,r.a.createElement(q.a,{onSubmit:function(t){return e.searchCity(t)}},r.a.createElement(K.a,{controlId:"formAddItem"},r.a.createElement(Y.a,{className:"mb-3"},r.a.createElement(r.a.Fragment,null,r.a.createElement($.a,{rootRef:this.cityInput},r.a.createElement(Z.a,{placeholder:"London",autoComplete:"off"})),r.a.createElement(Y.a.Append,null,r.a.createElement(ee.a,{type:"submit",variant:"contained",color:"primary"},"Search"))))),r.a.createElement("div",{className:ie.a.suggestions},t.length>0&&r.a.createElement("ul",null,t.map((function(t){return r.a.createElement("li",{key:t.index,onClick:function(){return e.selectCity(t.index)}},r.a.createElement("span",{className:"city_name",dangerouslySetInnerHTML:{__html:"".concat(t.name)}}))}))))))}}]),n}(a.Component),ue=re({url:"/json/city.list.min.json"})(se);function he(){var e=Object(w.a)(["\n  color:#000000;\n  text-align:center;\n  width:100%;\n  font-size:2rem;\n  padding-top: 20px;\n"]);return he=function(){return e},e}var me=T.a.h1(he()),pe=function(e){var t=e.weather,n=e.isFetching,a=e.error,c=e.citiesSearchMatch,i=e.createList,l=e.deleteList,o=e.searchCitiesMatch;return r.a.createElement(r.a.Fragment,null,r.a.createElement(me,null,"weather"),r.a.createElement("div",{style:{width:"100%",textAlign:"center",marginTop:"20px"}},r.a.createElement(ue,{addList:i,citiesSearchMatch:c,searchCitiesMatch:o})),(n||a)&&n?r.a.createElement(X,null):r.a.createElement("div",null,a),!n&&!a&&0===t.length&&r.a.createElement("p",{className:"center"},"While there is no cities"),!n&&!a&&0!==t.length&&t.map((function(e){return r.a.createElement(_.Provider,{key:e.id,value:{list:e}},r.a.createElement(N,{idList:e.id,weather:e,deleteList:l}))})))},Ee=Object(l.b)((function(e){return{weather:e.weather.cities,isFetching:e.weather.isFetching,error:e.weather.error,citiesSearchMatch:e.weather.citiesSearchMatch}}),(function(e){return{createList:function(t){return e(function(e){var t=JSON.parse(localStorage.getItem("WEATHER")).concat(e),n="http://api.openweathermap.org/data/2.5/group?id=".concat(t.join(),"&units=metric&appid=").concat(p);return function(e){e(f(n))}}(t))},deleteList:function(t){return e({type:"LIST/DELETE_LIST",payload:t})},searchCitiesMatch:function(t){return e({type:"WEATHER/MATCH_CITIES",payload:t})}}}))((function(e){var t=e.weather,n=e.isFetching,a=e.error,c=e.citiesSearchMatch,i=e.searchCitiesMatch,l=e.createList,o=e.deleteList;return r.a.createElement(pe,{createList:l,deleteList:o,searchCitiesMatch:i,citiesSearchMatch:c,weather:t,isFetching:n,error:a})}));function de(){var e=Object(w.a)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n  flex-wrap:wrap;\n"]);return de=function(){return e},e}var fe=T.a.section(de()),ge=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,null,r.a.createElement(fe,null,r.a.createElement(O.c,null,r.a.createElement(O.a,{component:Ee,path:"/",exact:!0})))))};n(84),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(l.a,{store:g},r.a.createElement(ge,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[68,1,2]]]);
//# sourceMappingURL=main.9bb9a0c2.chunk.js.map