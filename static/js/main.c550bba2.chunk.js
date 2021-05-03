(this["webpackJsonpreact-to-github-pages"]=this["webpackJsonpreact-to-github-pages"]||[]).push([[0],{41:function(e,t,r){},45:function(e,t,r){},47:function(e,t,r){"use strict";r.r(t);var a=r(0),i=r(13),c=r.n(i),n=(r(41),r(5)),s=r(17),p=r(27),o=r(28),j=r(14),d="SET_CARD",m="LOAD_DATA",l={selectedCard:{type:null,name:null,propertyCard:!1}},u={data:{movies:[],characters:[],planets:[],species:[],spaceships:[],vehicles:[]}},b=Object(s.combineReducers)({card:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(j.a)(Object(j.a)({},e),{},{selectedCard:t.payload});default:return e}},data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(j.a)(Object(j.a)({},e),{},{data:Object(j.a)(Object(j.a)({},e.data),t.payload)});default:return e}}}),h=[o.a],O=Object(s.createStore)(b,{},Object(p.composeWithDevTools)(s.applyMiddleware.apply(void 0,h))),y=r(33),x=r(65),f=r(64),v=r(63),g=(r(45),r(62)),C=r(61),_=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(a){a({type:d,payload:{type:e,name:t,propertyCard:r}})}},T=r(1),L=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"name";return e.filter((function(e){return e.url===t}))[0][r]},N=function(e){var t=e.setCard,r=e.item,a=e.property,i=e.propertyName,c=e.itemList,n=e.fieldName,s=e.setCardType;i||(i=a.charAt(0).toUpperCase()+a.slice(1)),i=i.replace(/_/g," ");return Object(T.jsxs)(C.a,{container:!0,spacing:1,children:[Object(T.jsx)(C.a,{item:!0,xs:5,align:"right",children:Object(T.jsxs)("b",{children:[i,":"]})}),Object(T.jsx)(C.a,{item:!0,xs:7,align:"left",children:function(){if("unknown"!==r[a]&&"n/a"!==r[a]){if(c){if(Array.isArray(r[a]))return"species"===a&&0===r[a].length?Object(T.jsx)(f.a,{variant:"contained",onClick:function(){return t(s,"Human")},children:"Human"}):r[a].map((function(e){var r=L(c,e,n);return Object(T.jsx)(f.a,{variant:"contained",onClick:function(){return t(s,r)},children:r})}));var e=L(c,r[a],n);return Object(T.jsx)(f.a,{variant:"contained",onClick:function(){return t(s,e)},children:e})}var i=r[a].split(", ");return i.length>1?i.map((function(e){return Object(T.jsx)(f.a,{variant:"contained",children:e})})):Object(T.jsx)(f.a,{variant:"contained",children:r[a]})}return Object(T.jsx)("div",{})}()})]})};N.defaultProps={propertyName:null,itemList:null,fieldName:"name",setCardType:null};var w=Object(n.b)((function(e){return{data:e.data.data}}),{setCard:_})(N),k=Object(n.b)((function(e){return{data:e.data.data}}),{})((function(e){var t=e.name,r=e.data,a=r.characters.filter((function(e){return e.name===t}))[0];return Object(T.jsxs)(g.a,{children:[Object(T.jsx)("h1",{children:a.name}),Object(T.jsxs)(C.a,{container:!0,spacing:1,children:[Object(T.jsx)(w,{item:a,property:"homeworld",itemList:r.planets,setCardType:"planet"}),Object(T.jsx)(w,{item:a,property:"species",itemList:r.species,setCardType:"species"}),Object(T.jsx)(w,{item:a,property:"films",propertyName:"movies",itemList:r.movies,setCardType:"movie",fieldName:"title"}),Object(T.jsx)(w,{item:a,property:"gender"}),Object(T.jsx)(w,{item:a,property:"skin_color"}),Object(T.jsx)(w,{item:a,property:"birth_year"}),Object(T.jsx)(w,{item:a,property:"eye_color"}),Object(T.jsx)(w,{item:a,property:"hair_color"}),Object(T.jsx)(w,{item:a,property:"height"}),Object(T.jsx)(w,{item:a,property:"mass"}),Object(T.jsx)(w,{item:a,property:"starships",propertyName:"Spaceships",itemList:r.spaceships,setCardType:"spaceship"}),Object(T.jsx)(w,{item:a,property:"vehicles",itemList:r.vehicles,setCardType:"vehicle"})]})]})})),A=Object(n.b)((function(e){return{data:e.data.data}}),{})((function(e){var t=e.name,r=e.data,a=r.planets.filter((function(e){return e.name===t}))[0];return Object(T.jsxs)(g.a,{children:[Object(T.jsx)("h1",{children:a.name}),Object(T.jsxs)(C.a,{container:!0,spacing:1,children:[Object(T.jsx)(w,{item:a,property:"climate"}),Object(T.jsx)(w,{item:a,property:"diameter"}),Object(T.jsx)(w,{item:a,property:"gravity"}),Object(T.jsx)(w,{item:a,property:"rotation_period"}),Object(T.jsx)(w,{item:a,property:"orbital_period"}),Object(T.jsx)(w,{item:a,property:"population"}),Object(T.jsx)(w,{item:a,property:"terrain"}),Object(T.jsx)(w,{item:a,property:"films",propertyName:"Movies",itemList:r.movies,fieldName:"title",setCardType:"movie"}),Object(T.jsx)(w,{item:a,property:"residents",itemList:r.characters,setCardType:"character"})]})]})})),M=Object(n.b)((function(e){return{data:e.data.data}}),{})((function(e){var t=e.name,r=e.data,a=r.movies.filter((function(e){return e.title===t}))[0];return Object(T.jsxs)(g.a,{children:[Object(T.jsx)("h1",{children:a.title}),Object(T.jsxs)(C.a,{container:!0,spacing:1,children:[Object(T.jsx)(w,{item:a,property:"director"}),Object(T.jsx)(w,{item:a,property:"producer"}),Object(T.jsx)(w,{item:a,property:"release_date"}),Object(T.jsx)(w,{item:a,property:"characters",itemList:r.characters,setCardType:"character"}),Object(T.jsx)(w,{item:a,property:"planets",itemList:r.planets,setCardType:"planet"}),Object(T.jsx)(w,{item:a,property:"species",itemList:r.species,setCardType:"species"}),Object(T.jsx)(w,{item:a,property:"starships",propertyName:"Spaceships",itemList:r.spaceships,setCardType:"spaceship"}),Object(T.jsx)(w,{item:a,property:"vehicles",itemList:r.vehicles,setCardType:"vehicle"})]})]})})),D=Object(n.b)((function(e){return{data:e.data.data}}),{})((function(e){var t=e.name,r=e.data,a=r.species.filter((function(e){return e.name===t}))[0];return console.log(a),Object(T.jsxs)(g.a,{children:[Object(T.jsx)("h1",{children:a.name}),Object(T.jsxs)(C.a,{container:!0,spacing:1,children:[Object(T.jsx)(w,{item:a,property:"homeworld",itemList:r.planets,setCardType:"planet"}),Object(T.jsx)(w,{item:a,property:"classification"}),Object(T.jsx)(w,{item:a,property:"designation"}),Object(T.jsx)(w,{item:a,property:"language"}),Object(T.jsx)(w,{item:a,property:"average_lifespan"}),Object(T.jsx)(w,{item:a,property:"average_height"}),Object(T.jsx)(w,{item:a,property:"skin_colors"}),Object(T.jsx)(w,{item:a,property:"hair_colors"}),Object(T.jsx)(w,{item:a,property:"eye_colors"}),Object(T.jsx)(w,{item:a,property:"films",propertyName:"Movies",itemList:r.movies,fieldName:"title",setCardType:"movie"}),Object(T.jsx)(w,{item:a,property:"people",itemList:r.characters,setCardType:"character"})]})]})})),S=Object(n.b)((function(e){return{data:e.data.data}}),{})((function(e){var t=e.name,r=e.data,a=r.spaceships.filter((function(e){return e.name===t}))[0];return console.log(a),Object(T.jsxs)(g.a,{children:[Object(T.jsx)("h1",{children:a.name}),Object(T.jsxs)(C.a,{container:!0,spacing:1,children:[Object(T.jsx)(w,{item:a,property:"model"}),Object(T.jsx)(w,{item:a,property:"manufacturer"}),Object(T.jsx)(w,{item:a,property:"cost_in_credits"}),Object(T.jsx)(w,{item:a,property:"crew"}),Object(T.jsx)(w,{item:a,property:"length"}),Object(T.jsx)(w,{item:a,property:"max_atmosphering_speed"}),Object(T.jsx)(w,{item:a,property:"hyperdrive_rating"}),Object(T.jsx)(w,{item:a,property:"films",propertyName:"Movies",itemList:r.movies,fieldName:"title",setCardType:"movie"}),Object(T.jsx)(w,{item:a,property:"pilots",itemList:r.characters,setCardType:"character"})]})]})})),E=Object(n.b)((function(e){return{data:e.data.data}}),{})((function(e){var t=e.name,r=e.data,a=r.vehicles.filter((function(e){return e.name===t}))[0];return Object(T.jsxs)(g.a,{children:[Object(T.jsx)("h1",{children:a.name}),Object(T.jsxs)(C.a,{container:!0,spacing:1,children:[Object(T.jsx)(w,{item:a,property:"model"}),Object(T.jsx)(w,{item:a,property:"manufacturer"}),Object(T.jsx)(w,{item:a,property:"cost_in_credits"}),Object(T.jsx)(w,{item:a,property:"crew"}),Object(T.jsx)(w,{item:a,property:"length"}),Object(T.jsx)(w,{item:a,property:"max_atmosphering_speed"}),Object(T.jsx)(w,{item:a,property:"films",propertyName:"Movies",itemList:r.movies,fieldName:"title",setCardType:"movie"}),Object(T.jsx)(w,{item:a,property:"pilots",itemList:r.characters,setCardType:"character"})]})]})})),R=Object(n.b)((function(e){return{selectedCard:e.card.selectedCard,data:e.data.data}}),{})((function(e){var t=e.selectedCard;e.data;if(t.propertyCard)return Object(T.jsx)("div",{children:"This is a property card"});switch(t.type){case"character":return Object(T.jsx)(k,{name:t.name});case"planet":return Object(T.jsx)(A,{name:t.name});case"movie":return Object(T.jsx)(M,{name:t.name});case"species":return Object(T.jsx)(D,{name:t.name});case"spaceship":return Object(T.jsx)(S,{name:t.name});case"vehicle":return Object(T.jsx)(E,{name:t.name});default:return Object(T.jsx)("div",{children:"Nothing has been selected"})}})),H=Object(n.b)((function(e){return{selectedCard:e.card.selectedCard,data:e.data.data}}),{setCard:_,loadData:function(e){return function(t){t({type:m,payload:e})}}})((function(e){var t=e.data,r=(e.selectedCard,e.setCard),i=e.loadData,c=Object(a.useState)(!1),n=Object(y.a)(c,2),s=n[0],p=n[1];return Object(a.useEffect)((function(){fetch("".concat("/react-to-github-pages","/sw_api_data/films.json")).then((function(e){return e.json()})).then((function(e){i({movies:e.items})})),fetch("".concat("/react-to-github-pages","/sw_api_data/people.json")).then((function(e){return e.json()})).then((function(e){i({characters:e.items})})),fetch("".concat("/react-to-github-pages","/sw_api_data/planets.json")).then((function(e){return e.json()})).then((function(e){i({planets:e.items})})),fetch("".concat("/react-to-github-pages","/sw_api_data/species.json")).then((function(e){return e.json()})).then((function(e){i({species:e.items})})),fetch("".concat("/react-to-github-pages","/sw_api_data/starships.json")).then((function(e){return e.json()})).then((function(e){i({spaceships:e.items})})),fetch("".concat("/react-to-github-pages","/sw_api_data/vehicles.json")).then((function(e){return e.json()})).then((function(e){i({vehicles:e.items})}))}),[]),Object(a.useEffect)((function(){p(Object.entries(t).map((function(e){return e[1].length})).every((function(e){return e>0})))}),[t]),Object(T.jsxs)("div",{className:"App",children:[Object(T.jsx)(x.a,{variant:"determinate",value:!0===s?100:0}),Object(T.jsx)(f.a,{variant:"contained",color:"primary",disabled:!s,onClick:function(){return r("character",t.characters[Math.floor(82*Math.random())].name)},children:"Random character"}),Object(T.jsx)(v.a,{maxWidth:"xs",style:{border:"1px solid black"},children:Object(T.jsx)(R,{})})]})})),J=function(){return Object(T.jsx)(n.a,{store:O,children:Object(T.jsx)("div",{children:Object(T.jsx)(H,{})})})};c.a.render(Object(T.jsx)(J,{}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.c550bba2.chunk.js.map