(this["webpackJsonpreact-to-github-pages"]=this["webpackJsonpreact-to-github-pages"]||[]).push([[0],{35:function(e,t,n){},36:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(11),a=n.n(r),i=(n(35),n(6)),s=n(20),o=n(56),u=n(55),j=(n(36),function(e,t){return t.movies.filter((function(t){return t.url===e}))[0].title}),h=function(e,t){return t.planets.filter((function(t){return t.url===e}))[0].name},b=function(e,t){return e?t.species.filter((function(t){return t.url===e}))[0].name:"Human"},f=n(2),l=function(e){var t=e.selected,n=e.data,c=n.characters[t];return Object.entries(n).map((function(e){return e[1].length})).every((function(e){return e>0}))?Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:c.name}),Object(f.jsxs)("p",{children:[Object(f.jsx)("b",{children:"Homeworld:"})," ",Object(f.jsx)(u.a,{variant:"contained",children:h(c.homeworld,n)})]}),Object(f.jsxs)("p",{children:[Object(f.jsx)("b",{children:"Species:"})," ",Object(f.jsx)(u.a,{variant:"contained",children:b(c.species[0],n)})]}),Object(f.jsxs)("p",{children:[Object(f.jsx)("b",{children:"Movies:"})," ",c.films.map((function(e){return Object(f.jsx)(u.a,{variant:"contained",children:j(e,n)})}))]}),Object(f.jsxs)("p",{children:[Object(f.jsx)("b",{children:"Gender:"})," ",c.gender]}),Object(f.jsxs)("p",{children:[Object(f.jsx)("b",{children:"Skin color:"})," ",c.skin_color]})]}):Object(f.jsx)("div",{})},p=function(){var e=Object(c.useState)({movies:[],characters:[],planets:[],species:[],spaceships:[],vehicles:[]}),t=Object(s.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!1),j=Object(s.a)(a,2),h=j[0],b=j[1],p=Object(c.useState)(0),d=Object(s.a)(p,2),O=d[0],m=d[1];return Object(c.useEffect)((function(){fetch("".concat("/react-to-github-pages","/sw_api_data/films.json")).then((function(e){return e.json()})).then((function(e){r((function(t){return Object(i.a)(Object(i.a)({},t),{},{movies:e.items})}))})),fetch("".concat("/react-to-github-pages","/sw_api_data/people.json")).then((function(e){return e.json()})).then((function(e){r((function(t){return Object(i.a)(Object(i.a)({},t),{},{characters:e.items})}))})),fetch("".concat("/react-to-github-pages","/sw_api_data/planets.json")).then((function(e){return e.json()})).then((function(e){r((function(t){return Object(i.a)(Object(i.a)({},t),{},{planets:e.items})}))})),fetch("".concat("/react-to-github-pages","/sw_api_data/species.json")).then((function(e){return e.json()})).then((function(e){r((function(t){return Object(i.a)(Object(i.a)({},t),{},{species:e.items})}))})),fetch("".concat("/react-to-github-pages","/sw_api_data/starships.json")).then((function(e){return e.json()})).then((function(e){r((function(t){return Object(i.a)(Object(i.a)({},t),{},{spaceships:e.items})}))})),fetch("".concat("/react-to-github-pages","/sw_api_data/vehicles.json")).then((function(e){return e.json()})).then((function(e){r((function(t){return Object(i.a)(Object(i.a)({},t),{},{vehicles:e.items})}))}))}),[]),Object(c.useEffect)((function(){b(Object.entries(n).map((function(e){return e[1].length})).every((function(e){return e>0})))}),[n]),Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(o.a,{variant:"determinate",value:!0===h?100:0}),Object(f.jsx)(u.a,{variant:"contained",color:"primary",disabled:!h,onClick:function(){return m(Math.floor(82*Math.random()))},children:"Random character"}),Object(f.jsx)(l,{selected:O,data:n})]})};a.a.render(Object(f.jsx)(p,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.51c643dc.chunk.js.map