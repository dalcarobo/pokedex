(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{24:function(t,n,e){},33:function(t,n,e){},34:function(t,n,e){"use strict";e.r(n);var o,r,i,a=e(0),s=e.n(a),c=e(13),l=e.n(c),p=(e(24),e(9)),d=e.n(p),b=e(11),f=e(14),u=e(4),x=e(15),h=e.n(x),g=e.p+"static/media/logo.62bee4d5.png",m=e(16),j=e(2),y=e(3),v=e.p+"static/media/foil.ab03ef74.gif",O=e.p+"static/media/shimmer.bbd1c1e4.gif",k=y.b.div(o||(o=Object(j.a)(["\n\tposition: relative;\n\twidth: 280px;\n\theight: 400px;\n\tmargin: 0;\n\tbox-shadow: 20px 20px 50px rgb(0, 0, 0, 0.5);\n\tborder-radius: 15px;\n\n\tbackground: ",";\n\tbackground-blend-mode: normal;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tborder-top: 1px solid rgba(255, 255, 255, 0.5);\n\tborder-left: 1px solid rgba(255, 255, 255, 0.5);\n\tcursor: pointer;\n\tz-index: 1;\n\ttransition: all 0.5s ease;\n\ttransform: ",";\n\ttransform-style: preserve-3d;\n\tbox-sizing: border-box;\n\n\tborder: ",";\n\n\t&::after {\n\t\t","\n\t}\n\n\t&::before {\n\t\t","\n\t}\n\n\t.content {\n\t\tpadding: 20px;\n\t\ttext-align: center;\n\t\tdisplay: ",";\n\t\ttransition: all 1s ease;\n\t}\n\n\t.content_back {\n\t\tpadding: 20px;\n\t\ttext-align: center;\n\t\tposition: absolute;\n\t\ttransform: rotateY(180deg);\n\t\ttransform-style: preserve-3d;\n\t\tdisplay: ",";\n\t\ttransition: all 1s ease;\n\t}\n\n\th2 {\n\t\tposition: absolute;\n\t\ttop: -140px;\n\t\tright: 5px;\n\t\tfont-size: 8em;\n\t\tcolor: rgba(255, 255, 255, 0.2);\n\t\tpointer-events: none;\n\t}\n\n\th3 {\n\t\tfont-size: 1.8em;\n\t\tcolor: #fff;\n\t\tz-index: 1;\n\t\ttransform: translateZ(30px);\n\t\tline-height: 0px;\n\t\ttext-transform: capitalize;\n\t}\n\n\timg {\n\t\twidth: 180px;\n\t\ttransform: translateZ(40px);\n\t}\n\n\tp {\n\t\tfont-size: 1em;\n\t\tcolor: #fff;\n\t\tfont-weight: 300;\n\t\ttransform: translateZ(30px);\n\t}\n\n\ta {\n\t\tposition: relative;\n\t\tdisplay: inline-block;\n\t\tpadding: 8px 20px;\n\t\tmargin-top: 15px;\n\t\tbackground: #fff;\n\t\tcolor: #000;\n\t\ttext-decoration: none;\n\t\tborder-radius: 4px;\n\t\tfont-weight: 500;\n\t\tbox-shadow: 0 5px 15px rgb(0, 0, 0, 0.2);\n\t\ttransform: translateZ(30px);\n\t}\n"])),(function(t){var n,e,o;return"linear-gradient(to bottom right, var(--color-".concat(t.types[0].type.name,") 50%, var(--color-").concat(null!==(n=null===(e=t.types[1])||void 0===e||null===(o=e.type)||void 0===o?void 0:o.name)&&void 0!==n?n:t.types[0].type.name,") 50%)")}),(function(t){return t.expanded?"rotateY(180deg)":""}),(function(t){return!0===t.specy.is_baby?"5px solid pink":!0===t.specy.is_legendary?"5px solid #ada328":!0===t.specy.is_mythical?"5px solid #A6A6A6":void 0}),(function(t){if(!0===t.specy.is_baby||!0===t.specy.is_legendary||!0===t.specy.is_mythical)return"\n          position: absolute;\n          content: '';\n          opacity: 0.2;\n          border-radius: 15px;\n          top: 0;\n          left: 0;\n          width: 275px;\n          height: 395px;\n          \n          background: url('".concat(O,"');\n          background-size: cover;\n          box-sizing: border-box;")}),(function(t){if(!0===t.specy.is_baby||!0===t.specy.is_legendary||!0===t.specy.is_mythical)return"\n          content: '';\n          opacity: 0.1;\n          border-radius: 15px;\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 275px;\n          height: 395px;\n          background: url('".concat(v,"');\n          box-sizing: border-box;")}),(function(t){return t.expanded?"none":"block"}),(function(t){return t.expanded?"block":"none"})),_=y.b.div(r||(r=Object(j.a)(["\n\theight: 25px;\n\twidth: 255px;\n\tmargin-top: 20px;\n\ttransform-style: preserve-3d;\n\ttransform: translateZ(13px);\n\ttext-align: left;\n\tborder-radius: 4px;\n\tbackground: ",";\n\n\th4 {\n\t\tpadding: 2px 0 0 8px;\n\t\ttransform: translateZ(20px);\n\t}\n"])),(function(t){var n=100*t.stat/255;return"linear-gradient(to right, #348721 ".concat(n.toFixed(1),"%, #dedede 0%)")})),w=e(1),F=function(t){var n=t.cardID,e=t.pokemon,o=e.types,r=e.name,i=e.id,s=e.stats_,c=e.specy,l=Object(a.useState)(!1),p=Object(u.a)(l,2),d=p[0],b=p[1],f=Object(a.useRef)(),x=o.map((function(t){return t instanceof Array?t.map((function(t){return t})):t})),h=s.nodes.map((function(t){return{key:t.stats.name,value:t.base_stat}}));return Object(w.jsx)(m.a,{glareEnable:!1,perspective:1e3,style:{transformStyle:"preserve-3d",margin:20},children:Object(w.jsxs)(k,{ref:f,types:x,specy:c,expanded:d,onClick:function(){b(!d)},children:[Object(w.jsxs)("div",{className:"content",children:[Object(w.jsx)("h2",{children:i}),Object(w.jsx)("h3",{children:r}),Object(w.jsx)("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/".concat(i,".png")})]}),Object(w.jsxs)("div",{className:"content_back",children:[Object(w.jsx)("h3",{children:"Attributes"}),h.map((function(t,n){return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(_,{stat:t.value,children:Object(w.jsxs)("h4",{children:[t.key,": ",t.value]})},n)})}))]})]})},n)},S=y.b.div(i||(i=Object(j.a)(["\n\tposition: relative;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tmargin-top: 20px;\n\tmax-width: 1300px;\n\tflex-wrap: wrap;\n\tz-index: 1;\n"]))),z=function(){var t=Object(a.useState)([]),n=Object(u.a)(t,2),e=n[0],o=n[1],r=Object(a.useState)(!0),i=Object(u.a)(r,2),s=i[0],c=(i[1],Object(a.useState)(!0)),l=Object(u.a)(c,2),p=l[0],x=l[1],m=Object(a.useState)(0),j=Object(u.a)(m,2),y=j[0],v=j[1],O=function(){var t=Object(f.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://beta.pokeapi.co/graphql/v1beta",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:"\nquery GetPokemonList($offset: Int!) {\n  pokemon_v2_pokemon(limit: 20, offset: $offset, where: {is_default: {_eq: true}}) {\n    name\n    id: pokemon_species_id\n    is_default\n    types: pokemon_v2_pokemontypes {\n      type: pokemon_v2_type {\n        name\n      }\n    }\n    stats_: pokemon_v2_pokemonstats_aggregate {\n      nodes {\n        base_stat\n        stats: pokemon_v2_stat {\n          name\n        }\n      }\n    }\n    specy: pokemon_v2_pokemonspecy {\n      is_legendary\n      is_mythical\n      is_baby\n    }\n  }\n}",variables:{offset:y}})}).then((function(t){return t.json()})).then((function(t){var n=t.data;o([].concat(Object(b.a)(e),Object(b.a)(n.pokemon_v2_pokemon))),x(!1)}));case 2:v(Number(y)+20);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){O()}),[]),Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("div",{style:{display:"flex",color:"white",alignItems:"baseline",width:"99vw",justifyContent:"center"},children:[Object(w.jsx)("img",{src:g,style:{width:290,marginTop:20}}),Object(w.jsx)("span",{style:{fontSize:12},children:"v1.0.0"})]}),!p&&Object(w.jsx)(h.a,{pageStart:0,hasMore:s,loadMore:O,loader:null,initialLoad:!1,threshold:300,style:{display:"flex",justifyContent:"center"},children:Object(w.jsx)(S,{children:e&&e.map((function(t,n){return Object(w.jsx)(F,{pokemon:t,cardID:n},n)}))})}),p&&Object(w.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(w.jsx)(S,{children:[0,1,2,3,4,5,6,7].map((function(t){return Object(w.jsx)("div",{style:{height:400,width:280,background:"#292942",borderRadius:"15px",margin:20}},t)}))})}),Object(w.jsx)("footer",{children:Object(w.jsxs)("p",{children:["Developed by"," ",Object(w.jsx)("a",{href:"https://github.com/dalcarobo",target:"_blank",children:"Gabriel Dal Carobo"})]})})]})};var A,C=function(){return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(z,{})})},D=(e(33),function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,35)).then((function(n){var e=n.getCLS,o=n.getFID,r=n.getFCP,i=n.getLCP,a=n.getTTFB;e(t),o(t),r(t),i(t),a(t)}))}),I=Object(y.a)(A||(A=Object(j.a)(["\n\n\n:root {\n  --color-grass: #78c850b8;\n  --color-poison: #A040A0b8;\n  --color-fire: #F08030b8;\n  --color-water: #6890F0b8;\n  --color-ghost: #705898b8;\n  --color-flying: #d7cdf5e6;\n  --color-normal: #A8A878b8;\n  --color-electric: #F8D030b8;\n  --color-ice: #98D8D8b8;\n  --color-ground: #E0C068b8;\n  --color-fighting: #C03028b8;\n  --color-psychic: #F85888b8;\n  --color-dark: #705848b8;\n  --color-rock: #B8A038b8;\n  --color-bug: #A8B820b8;\n  --color-steel: #B8B8D0b8;\n  --color-dragon: #7038F8b8;\n  --color-fairy: #FFAEC9b8;\n}\n\n  body {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 100vh;\n    background: #161623;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\n      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    overflow-x: hidden;\n  \n  }\n\n  footer {\n    width: 100vw;\n    position: fixed;\n    bottom: 0px;\n    z-index: 99;\n    padding: 5px;\n    backdrop-filter: blur(10px);\n    background-color: rgba(18, 18, 18, 0.5); \n    display: flex;\n    justify-content: center;\n\n    p {\n    color: white;\n  \n    }\n    a {\n      text-decoration: none;\n      color: #eee;\n      font-weight: 500;\n    }\n  }\n"])));l.a.render(Object(w.jsxs)(s.a.StrictMode,{children:[Object(w.jsx)(I,{}),Object(w.jsx)(C,{})]}),document.getElementById("root")),D()}},[[34,1,2]]]);
//# sourceMappingURL=main.ce2db6e8.chunk.js.map