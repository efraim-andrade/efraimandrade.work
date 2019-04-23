(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,n,t){e.exports=t(26)},21:function(e,n,t){e.exports=t.p+"static/media/avatar.91bb2ded.jpg"},24:function(e,n,t){e.exports=t.p+"static/media/efraim-illustration.e77d8dc1.jpeg"},25:function(e,n,t){},26:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(4),o=t.n(i),c=t(8),l=t(1),m=t(2);function d(){var e=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n\n  > img {\n    width: 200px;\n    height: 200px;\n    border-radius: 1000px;\n    box-shadow: 0 0 20px rgba(189, 147, 249, .2);\n\n    @media screen and (max-width: 1500px) {\n      width: 140px;\n      height: 140px;\n    }\n\n    @media screen and (max-width: 1024px) {\n      width: 120px;\n      height: 120px;\n    }\n  }\n"]);return d=function(){return e},e}var s=m.b.div(d()),p=function(){return r.a.createElement(s,null,r.a.createElement("img",{src:t(21),alt:""}))},u={primary:"#282A36",equal:"#FF76C7",string:"#F1FC85",boolean:"#bd93f9",attribute:"#45F96E",component:"#87E9FE",background:"#17181F",danger:"#F95F57",success:"#2BC740",warning:"#FFBF32",white:"#FFF"};function x(){var e=Object(l.a)(["\n  font-size: 24px;\n  font-family: FiraCode;\n  font-style: ",";\n  color: ",';\n\n  @media screen and (max-width: 1500px) { font-size: 1rem; }\n\n  @media screen and (max-width: 1024px) { font-size: .875rem; }\n\n  @media screen and (max-width: 320px) { font-size: .75rem; }\n\n  > a {\n    position: relative;\n\n    &:after {\n      position: absolute;\n      left: 0;\n      bottom: 2px;\n\n      width: 0;\n      height: 2px;\n\n      display: block;\n\n      content: "";\n      transition: .3s;\n      background: ',";\n    }\n\n    &:hover {\n      &:after { width: 100%; }\n    }\n  }\n\n  > .blinking { animation: 1.5s "," linear infinite; }\n"]);return x=function(){return e},e}function h(){var e=Object(l.a)(["\n  margin-bottom: 10px;\n  padding-left: ",";\n\n  display: block;\n\n  @media screen and (max-width: 1500px) {\n    padding-left: ",";\n  }\n\n  @media screen and (max-width: 1024px) {\n    padding-left: ",";\n  }\n\n  @media screen and (max-width: 320px) {\n    margin-bottom: 0;\n    padding-left: ",";\n  }\n"]);return h=function(){return e},e}function f(){var e=Object(l.a)(["\n  width: 16px;\n  height: 16px;\n  border-radius: 100px;\n\n  background: ",";\n\n  @media screen and (max-width: 1500px) {\n    width: 14px;\n    height: 14px;\n  }\n\n  @media screen and (max-width: 1024px) {\n    width: 12px;\n    height: 12px;\n  }\n\n  @media screen and (max-width: 320px) {\n    width: 10px;\n    height: 10px;\n  }\n"]);return f=function(){return e},e}function g(){var e=Object(l.a)(["\n  width: 100%;\n  padding: 15px;\n  max-width: 680px;\n  border-radius: 12px;\n\n  display: flex;\n  flex-direction: column;\n\n  background: ",";\n\n  @media screen and (max-width: 1500px) { max-width: 520px; }\n\n  > header {\n    display: flex;\n    margin-bottom: 34px;\n\n    @media screen and (max-width: 1500px) { margin-bottom: 24px; }\n\n    @media screen and (max-width: 1024px) { margin-bottom: 20px; }\n\n    > div {\n      margin-right: 10px;\n\n      &:last-child { margin: 0; }\n    }\n  }\n\n  .index {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n\n    > .component {\n      padding: 0 39px;\n      margin-bottom: 40px;\n\n      @media screen and (max-width: 1500px) { margin-bottom: 20px; }\n\n      @media screen and (max-width: 1024px) {\n        padding: 5px;\n        margin-bottom: 10px;\n      }\n\n      @media screen and (max-width: 320px) {\n        padding: 5px;\n        margin-bottom: 0;\n      }\n\n      &:last-child { margin: 0; }\n    }\n  }\n"]);return g=function(){return e},e}function b(){var e=Object(l.a)(["\n  0% { opacity: .1; }\n  50% { opacity: 1; }\n  100% { opacity: .1; }\n"]);return b=function(){return e},e}var E=Object(m.c)(b()),w=m.b.div(g(),u.primary),v=m.b.div(f(),function(e){return e.color}),k=m.b.div(h(),function(e){return e.tabs?"48px":0},function(e){return e.tabs?"38px":0},function(e){return e.tabs?"28px":0},function(e){return e.tabs?"16px":0}),y=m.b.span(x(),function(e){return e.italic?"italic":"normal"},function(e){return e.color},function(e){return e.color},E),F=function(){return r.a.createElement(w,null,r.a.createElement("header",null,r.a.createElement(v,{color:u.danger}),r.a.createElement(v,{color:u.warning}),r.a.createElement(v,{color:u.success})),r.a.createElement("div",{className:"index"},r.a.createElement("div",{className:"component"},r.a.createElement(k,null,r.a.createElement(y,null,"<"),r.a.createElement(y,{color:u.component,italic:!0},"Developer")),r.a.createElement(k,{tabs:!0},r.a.createElement(y,{color:u.attribute},"name"),r.a.createElement(y,{color:u.equal},"="),r.a.createElement(y,{color:u.string},'"Efraim Andrade"')),r.a.createElement(k,{tabs:!0},r.a.createElement(y,{color:u.attribute},"role"),r.a.createElement(y,{color:u.equal},"="),r.a.createElement(y,{color:u.string},'"Web and Mobile Front End"')),r.a.createElement(k,{tabs:!0},r.a.createElement(y,{color:u.attribute},"cleanCode"),r.a.createElement(y,{color:u.equal},"="),r.a.createElement(y,{color:u.component},"{"),r.a.createElement(y,{color:u.boolean},"true"),r.a.createElement(y,{color:u.component},"}")),r.a.createElement(k,{tabs:!0},r.a.createElement(y,{color:u.attribute},"interest"),r.a.createElement(y,{color:u.equal},"="),r.a.createElement(y,{color:u.string},'"Design UI/UX"')),r.a.createElement(k,null,r.a.createElement(y,{color:u.white},"/>"))),r.a.createElement("div",{className:"component"},r.a.createElement(k,null,r.a.createElement(y,null,"<"),r.a.createElement(y,{color:u.component,italic:!0},"Contact")),r.a.createElement(k,{tabs:!0},r.a.createElement(y,{color:u.attribute},"github"),r.a.createElement(y,{color:u.equal},"="),r.a.createElement(y,{color:u.component},"{"),r.a.createElement(y,{color:u.white},r.a.createElement("a",{href:"https://github.com/efraim-andrade",target:"_blank",rel:"noopener noreferrer"},"efraim-andrade")),r.a.createElement(y,{color:u.component},"}")),r.a.createElement(k,{tabs:!0},r.a.createElement(y,{color:u.attribute},"linkedin"),r.a.createElement(y,{color:u.equal},"="),r.a.createElement(y,{color:u.component},"{"),r.a.createElement(y,{color:u.white},r.a.createElement("a",{href:"https://www.linkedin.com/in/efraim-andrade-morais-junior-517b0a149/",target:"_blank",rel:"noopener noreferrer"},"links.linkedin")),r.a.createElement(y,{color:u.component},"}")),r.a.createElement(k,{tabs:!0},r.a.createElement(y,{color:u.attribute},"mail"),r.a.createElement(y,{color:u.equal},"="),r.a.createElement(y,{color:u.string},r.a.createElement("a",{href:"mailto:efraim.dev@gmail.com",target:"_blank",rel:"noopener noreferrer"},'"efraim.dev@gmail.com"'))),r.a.createElement(k,null,r.a.createElement(y,{color:u.white},"/>"),r.a.createElement(y,{color:u.white},r.a.createElement("span",{className:"blinking"},"|"))))))};function j(){var e=Object(l.a)(["\n  width: 100%;\n  max-width: 700px;\n\n  @media screen and (max-width: 1024px) { display: none; }\n\n  > .block {\n    margin-bottom: 1.5rem;\n\n    color: #E5E5E5;\n    line-height: 1.6;\n    font-size: 1.2rem;\n\n    @media screen and (max-width: 1500px) { font-size: .9rem; }\n\n    &:last-child { margin-bottom: 0; }\n\n    &.message { text-align: center; }\n\n    > a {\n      color: ",";\n      text-decoration: underline;\n    }\n  }\n"]);return j=function(){return e},e}var O=m.b.div(j(),u.string),N=function(){return r.a.createElement(O,null,r.a.createElement("p",{className:"block"},"I\u2019m an experienced front end and mobile developer who is true to the design and search for the perfection of the project."),r.a.createElement("p",{className:"block"},"I have been working almost two years as a front end developer creating the most diverse types of solutions and visual representations of my client\u2019s companies in the agency that I work for and in the weekends for the Fabrica de Software in the same position."),r.a.createElement("p",{className:"block"},"Education wise, I have a technical degree and I\u2019m in the last year of the superior course of analysis and system development."),r.a.createElement("p",{className:"block"},"I always seek to take the best experience that the user can have along, with the best visual and performance as possible using Javascript as the programming language with ReactJS or VueJS for web projects and React Native for mobile projects."),r.a.createElement("p",{className:"block message"},"Let\u2019s work together?"," ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"mailto:efraim.dev@gmail.com"},"send me a message!")))};t(24);function z(){var e=Object(l.a)(["\n  height: 100vh;\n  width: 100%;\n  padding: 0 10%;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n\n  @media screen and (max-width: 1500px) { padding: 20px 3%; }\n\n  @media screen and (max-width: 1024px) {\n    padding: 20px;\n\n    justify-content: center;\n  }\n\n  > header {\n    margin: 40px 0 60px;\n\n    @media screen and (max-width: 1500px) { margin: 20px 0 30px; }\n\n    @media screen and (max-width: 1024px) { margin: 0 0 20px; }\n  }\n\n  > section {\n    width: 100%;\n\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    @media screen and (max-width: 1024px) { flex-direction: column; }\n\n    > .message {\n      display: none;\n\n      @media screen and (max-width: 1024px) {\n        display: block;\n        margin-top: 20px;\n\n        font-size: .7rem;\n        text-align: center;\n\n        > a {\n          color: ",";\n          text-decoration: underline;\n        }\n      }\n    }\n  }\n"]);return z=function(){return e},e}var q=m.b.div(z(),u.string);var I=function(){return r.a.createElement(q,null,r.a.createElement("header",null,r.a.createElement(p,null)),r.a.createElement("section",null,r.a.createElement(F,null),r.a.createElement("p",{className:"message"},"Let\u2019s work together?"," ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"mailto:efraim.dev@gmail.com"},"send me a message!")),r.a.createElement(N,null)))};function C(){var e=Object(l.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    outline: 0,\n  }\n\n  html, body, #root {\n    height: 100%;\n  }\n\n  body {\n    text-rendering: optimizeLegibility !important;\n    -webkit-font-smoothing: antialiased !important;\n    background: ",";\n    color: #FFF;\n    font-family: FiraCode, sans-serif;\n  }\n\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n"]);return C=function(){return e},e}var J=Object(m.a)(C(),u.background);t(25);var _=function(){return Object(a.useEffect)(function(){c.a.initialize("UA-138749706-1"),c.a.pageview(window.location.pathname+window.location.search)}),r.a.createElement(r.a.Fragment,null,r.a.createElement(J,null),r.a.createElement(I,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,1,2]]]);
//# sourceMappingURL=main.28eb6982.chunk.js.map