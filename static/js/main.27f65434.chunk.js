(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{24:function(t,n,e){},33:function(t,n,e){},34:function(t,n,e){"use strict";e.r(n);var o,r,a,i=e(0),s=e.n(i),c=e(13),p=e.n(c),l=(e(24),e(9)),d=e.n(l),b=e(11),u=e(14),f=e(4),x=e(15),m=e.n(x),g=e(16),h=e(2),j=e(3),y=j.b.div(o||(o=Object(h.a)(["\n\tposition: relative;\n\n\twidth: 280px;\n\theight: 400px;\n\tmargin: 0;\n\tbox-shadow: 20px 20px 50px rgb(0, 0, 0, 0.5);\n\tborder-radius: 15px;\n\tbackground: ",";\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tborder-top: 1px solid rgba(255, 255, 255, 0.5);\n\tborder-left: 1px solid rgba(255, 255, 255, 0.5);\n\tcursor: pointer;\n\tz-index: 1;\n\ttransition: all 0.5s ease;\n\ttransform: ",";\n\ttransform-style: preserve-3d;\n\tbox-sizing: border-box;\n\n\tborder: ",";\n\n\t.content {\n\t\tpadding: 20px;\n\t\ttext-align: center;\n\t\tdisplay: ",";\n\t\ttransition: all 1s ease;\n\t}\n\n\t.content_back {\n\t\tpadding: 20px;\n\t\ttext-align: center;\n\t\tposition: absolute;\n\t\ttransform: rotateY(180deg);\n\t\tdisplay: ",";\n\t\ttransition: all 1s ease;\n\t}\n\n\th2 {\n\t\tposition: absolute;\n\t\ttop: -140px;\n\t\tright: 5px;\n\t\tfont-size: 8em;\n\t\tcolor: rgba(255, 255, 255, 0.09);\n\t\tpointer-events: none;\n\t}\n\n\th3 {\n\t\tfont-size: 1.8em;\n\t\tcolor: #fff;\n\t\tz-index: 1;\n\t\ttransform: translateZ(30px);\n\t\tline-height: 0px;\n\t\ttext-transform: capitalize;\n\t}\n\n\timg {\n\t\twidth: 180px;\n\t\ttransform: translateZ(40px);\n\t}\n\n\tp {\n\t\tfont-size: 1em;\n\t\tcolor: #fff;\n\t\tfont-weight: 300;\n\t\ttransform: translateZ(30px);\n\t}\n\n\ta {\n\t\tposition: relative;\n\t\tdisplay: inline-block;\n\t\tpadding: 8px 20px;\n\t\tmargin-top: 15px;\n\t\tbackground: #fff;\n\t\tcolor: #000;\n\t\ttext-decoration: none;\n\t\tborder-radius: 4px;\n\t\tfont-weight: 500;\n\t\tbox-shadow: 0 5px 15px rgb(0, 0, 0, 0.2);\n\t\ttransform: translateZ(30px);\n\t}\n"])),(function(t){var n,e,o;return"linear-gradient(to bottom right, var(--color-".concat(t.types[0].type.name,") 50%, var(--color-").concat(null!==(n=null===(e=t.types[1])||void 0===e||null===(o=e.type)||void 0===o?void 0:o.name)&&void 0!==n?n:t.types[0].type.name,") 50%)")}),(function(t){return t.expanded?"rotateY(180deg)":""}),(function(t){return!0===t.specy.is_baby?"5px solid pink":!0===t.specy.is_legendary?"5px solid #ada328":!0===t.specy.is_mythical?"5px solid #A6A6A6":void 0}),(function(t){return t.expanded?"none":"block"}),(function(t){return t.expanded?"block":"none"})),v=j.b.div(r||(r=Object(h.a)(["\n\theight: 25px;\n\twidth: 255px;\n\tmargin-top: 20px;\n\ttext-align: left;\n\tborder-radius: 4px;\n\tbackground: ",";\n\n\th4 {\n\t\tpadding: 2px 0 0 8px;\n\t}\n"])),(function(t){var n=100*t.stat/255;return"linear-gradient(to right, #348721 ".concat(n.toFixed(1),"%, #dedede 0%)")})),k=e(1),O=function(t){var n=t.pokemon,e=n.types,o=n.name,r=n.id,a=n.stats_,s=n.specy,c=Object(i.useState)(!1),p=Object(f.a)(c,2),l=p[0],d=p[1],b=e.map((function(t){return t instanceof Array?t.map((function(t){return t})):t})),u=a.nodes.map((function(t){return{key:t.stats.name,value:t.base_stat}}));return Object(k.jsx)(g.a,{glareEnable:!0,glareMaxOpacity:.8,glareColor:"#ffffff",glareBorderRadius:"20px",perspective:900,style:{transformStyle:"preserve-3d",margin:20},children:Object(k.jsxs)(y,{types:b,specy:s,expanded:l,onClick:function(){d(!l)},children:[Object(k.jsxs)("div",{className:"content",children:[Object(k.jsx)("h2",{children:r}),Object(k.jsx)("h3",{children:o}),Object(k.jsx)("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/".concat(r,".png")})]}),Object(k.jsxs)("div",{className:"content_back",children:[Object(k.jsx)("h3",{children:"Attributes"}),u.map((function(t,n){return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(v,{stat:t.value,children:Object(k.jsxs)("h4",{children:[t.key,": ",t.value]})},n)})}))]})]})})},_=j.b.div(a||(a=Object(h.a)(["\n\tposition: relative;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tmargin-top: 20px;\n\tmax-width: 1000px;\n\tflex-wrap: wrap;\n\tz-index: 1;\n"]))),w=function(){var t=Object(i.useState)([]),n=Object(f.a)(t,2),e=n[0],o=n[1],r=Object(i.useState)(!0),a=Object(f.a)(r,2),s=a[0],c=(a[1],Object(i.useState)(142)),p=Object(f.a)(c,2),l=p[0],x=p[1],g=function(){var t=Object(u.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://beta.pokeapi.co/graphql/v1beta",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:"\nquery GetPokemonList($offset: Int!) {\n  pokemon_v2_pokemon(limit: 21, offset: $offset, where: {is_default: {_eq: true}}) {\n    name\n    id: pokemon_species_id\n    is_default\n    types: pokemon_v2_pokemontypes {\n      type: pokemon_v2_type {\n        name\n      }\n    }\n    stats_: pokemon_v2_pokemonstats_aggregate {\n      nodes {\n        base_stat\n        stats: pokemon_v2_stat {\n          name\n        }\n      }\n    }\n    specy: pokemon_v2_pokemonspecy {\n      is_legendary\n      is_mythical\n      is_baby\n    }\n  }\n}",variables:{offset:l}})}).then((function(t){return t.json()})).then((function(t){var n=t.data;o([].concat(Object(b.a)(e),Object(b.a)(n.pokemon_v2_pokemon)))}));case 2:x(Number(l)+21);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(i.useEffect)((function(){g()}),[]),Object(k.jsx)(m.a,{pageStart:0,hasMore:s,loadMore:g,loader:null,initialLoad:!1,threshold:100,children:Object(k.jsx)(_,{children:e&&e.map((function(t,n){return Object(k.jsx)(O,{pokemon:t},n)}))})})};var F,A=function(){return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(w,{})})},S=(e(33),function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,35)).then((function(n){var e=n.getCLS,o=n.getFID,r=n.getFCP,a=n.getLCP,i=n.getTTFB;e(t),o(t),r(t),a(t),i(t)}))}),C=Object(j.a)(F||(F=Object(h.a)(["\n\n\n:root {\n  --color-grass: #78c850b8;\n  --color-poison: #A040A0b8;\n  --color-fire: #F08030b8;\n  --color-water: #6890F0b8;\n  --color-ghost: #705898b8;\n  --color-flying: #A890F0b8;\n  --color-normal: #A8A878b8;\n  --color-electric: #F8D030b8;\n  --color-ice: #98D8D8b8;\n  --color-ground: #E0C068b8;\n  --color-fighting: #C03028b8;\n  --color-psychic: #F85888b8;\n  --color-dark: #705848b8;\n  --color-rock: #B8A038b8;\n  --color-bug: #A8B820b8;\n  --color-steel: #B8B8D0b8;\n  --color-dragon: #7038F8b8;\n  --color-fairy: #FFAEC9b8;\n}\n\n  body {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 100vh;\n    background: #161623;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\n      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\n  \n  }\n"])));p.a.render(Object(k.jsxs)(s.a.StrictMode,{children:[Object(k.jsx)(C,{}),Object(k.jsx)(A,{})]}),document.getElementById("root")),S()}},[[34,1,2]]]);
//# sourceMappingURL=main.27f65434.chunk.js.map