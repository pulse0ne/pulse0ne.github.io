webpackJsonp([1],{"+qLH":function(e,i){},"9XEs":function(e,i){},NHnr:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=t("/5sW"),n=t("iKms"),s=t("9qgI"),o=t.n(s),r={name:"Navigation",data:function(){return{initialized:!1,links:[{title:"Home",url:"/"},{title:"Skills",url:"/skills"},{title:"Contact",url:"/contact"},{title:"Blog",url:"/blog"}]}},mounted:function(){this.initialized=!0},methods:{beforeEnter:function(e){e.style.opacity=0,e.style.height=0},onEnter:function(e,i){var t=250*e.dataset.ix;setTimeout(function(){return o()(e,{opacity:1,height:"1em"},{complete:i})},t)}}},l={render:function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("transition-group",{class:e.$mq,attrs:{id:"navigation",tag:"div",name:"staggered",css:!1},on:{"before-enter":e.beforeEnter,enter:e.onEnter}},e._l(e.links,function(i,a){return e.initialized?t("router-link",{key:i.url,staticClass:"nav-item",attrs:{"data-ix":a,to:i.url}},[e._v("\n        "+e._s(i.title)+"\n    ")]):e._e()}))},staticRenderFns:[]};var v=t("VU/8")(r,l,!1,function(e){t("p4vT")},"data-v-678453de",null).exports,d=(t("JAHf"),{name:"App",components:{Navigation:v},mounted:function(){particlesJS.load("particles","/static/particles-config.json")},methods:{onLeave:function(e,i){o()(e,{opacity:0},{complete:i,duration:250})}}}),c={render:function(){var e=this.$createElement,i=this._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{attrs:{id:"particles"}}),this._v(" "),i("div",{class:this.$mq,attrs:{id:"name-header"}},[this._v("\n        Tyler Snedigar\n    ")]),this._v(" "),i("Navigation"),this._v(" "),i("transition",{attrs:{name:"fade",css:!1,mode:"out-in"},on:{leave:this.onLeave}},[i("router-view")],1)],1)},staticRenderFns:[]};var u=t("VU/8")(d,c,!1,function(e){t("czkn")},null,null).exports,_=t("/ocq"),p={name:"Home",data:function(){return{initialized:!1}},mounted:function(){this.initialized=!0},methods:{beforeEnter:function(e){e.style.opacity=0},onEnter:function(e,i){var t=250*parseInt(e.dataset.ix,10)+250;setTimeout(function(){return o()(e,{opacity:1},{complete:i})},t)}}},m={render:function(){var e=this,i=e.$createElement,a=e._self._c||i;return a("transition-group",{staticClass:"content",attrs:{tag:"div",name:"staggered",css:!1},on:{"before-enter":e.beforeEnter,enter:e.onEnter}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.initialized,expression:"initialized"}],key:"image",staticClass:"ts-img-container",attrs:{"data-ix":0}},[a("img",{attrs:{src:t("QHPH")}})]),e._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:e.initialized,expression:"initialized"}],key:"p1",attrs:{"data-ix":2}},[e._v("\n        Hello there! My name is Tyler Snedigar, and I'm a Nebraska-based full-stack software developer.\n        If I'm not working on some sort of code, I'm probably out playing ice hockey!\n    ")]),e._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:e.initialized,expression:"initialized"}],key:"p2",attrs:{"data-ix":3}},[e._v("\n        I have a wide-ranging skillset, from HTML5/CSS3/Javascript-based web design and development, to Java enterprise\n        services, all the way down to audio signal processing in Rust or C/C++.\n    ")]),e._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:e.initialized,expression:"initialized"}],key:"p3",attrs:{"data-ix":4}},[e._v("\n        Want front end work? I've got you covered. Need\n        service middleware? I'm there. Database integration? Done.\n    ")]),e._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:e.initialized,expression:"initialized"}],key:"p4",attrs:{"data-ix":5}},[e._v("\n        Send me an email and we'll build something great together!\n    ")])])},staticRenderFns:[]};var h=t("VU/8")(p,m,!1,function(e){t("+qLH")},"data-v-11562068",null).exports,g={name:"Contact",data:function(){return{initialized:!1}},mounted:function(){this.initialized=!0},methods:{beforeEnter:function(e){e.style.opacity=0},onEnter:function(e,i){var t=250*parseInt(e.dataset.ix,10)+250;setTimeout(function(){return o()(e,{opacity:1},{complete:i})},t)}}},f={render:function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("transition-group",{attrs:{tag:"div",name:"stag",css:!1},on:{"before-enter":e.beforeEnter,enter:e.onEnter}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.initialized,expression:"initialized"}],key:"email",attrs:{"data-ix":0}},[t("h3",[e._v("Email")]),e._v(" "),t("a",{attrs:{href:"mailto:snedigart@gmail.com"}},[e._v("snedigart@gmail.com")])]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.initialized,expression:"initialized"}],key:"phone",attrs:{"data-ix":1}},[t("h3",[e._v("Phone")]),e._v(" "),t("a",{attrs:{href:"tel:402-965-1724"}},[e._v("(402) 965-1724")])])])},staticRenderFns:[]};var w=t("VU/8")(g,f,!1,function(e){t("g87o")},"data-v-6cce74b7",null).exports,b={name:"Skills",data:function(){return{initialized:!1}},mounted:function(){this.initialized=!0},methods:{beforeEnter:function(e){e.style.opacity=0},onEnter:function(e,i){var t=250*parseInt(e.dataset.ix,10)+250;setTimeout(function(){return o()(e,{opacity:1},{complete:i})},t)}}},k={render:function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("transition-group",{attrs:{tag:"div",name:"staggered",css:!1},on:{"before-enter":e.beforeEnter,enter:e.onEnter}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.initialized,expression:"initialized"}],key:"exp",staticClass:"skill-group",attrs:{"data-ix":0}},[t("h2",{staticClass:"skill-header"},[e._v("Professional Experience")]),e._v(" "),t("div",{staticClass:"skill-subgroup-wrapper"},[t("div",{staticClass:"skill-subgroup"},[t("h4",{staticClass:"skill-subheader"},[t("a",{attrs:{href:"https://www.raytheon.com",target:"_blank"}},[e._v("Raytheon")]),e._v(" (2016 - Present)")]),e._v(" "),t("p",[e._v("\n                    Developed a weather data processing and monitoring application in Java with a web-based front-end written in \n                    AngularJS\n                ")]),e._v(" "),t("ul",[t("li",[e._v("Authored a complex web application using websockets and AngularJS")]),e._v(" "),t("li",[e._v("Developed agents that communicated and coordinated over Jetty websockets")]),e._v(" "),t("li",[e._v("Developed a number of RESTful services and Jetty servlets (using Spring & Camel)")]),e._v(" "),t("li",[e._v("Secured HTTPS endpoints using TLS")]),e._v(" "),t("li",[e._v("Developed a number of tools and test harnesses to support the team's development and testing")]),e._v(" "),t("li",[e._v("Developed a gulp-based build toolchain that included live-reloading for a tight development loop")]),e._v(" "),t("li",[e._v("Hybrid Agile/Waterfall Development methodologies were used")])])]),e._v(" "),t("div",{staticClass:"skill-subgroup"},[t("h4",{staticClass:"skill-subheader"},[t("a",{attrs:{href:"https://www.northropgrumman.com",target:"_blank"}},[e._v("Northrop Grumman")]),e._v(" (2013 - 2016)\n                ")]),e._v(" "),t("p",[e._v("Developed a full-stack Enterprise-level SOA system using Java, Swing, and JavaFX")]),e._v(" "),t("ul",[t("li",[e._v("Developed a variety of Web Services (REST and SOAP)")]),e._v(" "),t("li",[e._v("Developed JMS components (ActiveMQ)")]),e._v(" "),t("li",[e._v("Designed and developed rich-client GUIs with JavaFX and Swing")]),e._v(" "),t("li",[e._v("Designed and developed data models using XML schemas, generating code with JAXB")]),e._v(" "),t("li",[e._v("Worked closely with mapping data and software (WorldWind, GEOJSON, GRIB2, etc.)")]),e._v(" "),t("li",[e._v("Worked with MySQL and Postgres databases, using Hibernate as an abstraction layer")]),e._v(" "),t("li",[e._v("Developed full-coverage unit tests with JUnit")]),e._v(" "),t("li",[e._v("Administered a Linux server running Glassfish for application deployment")]),e._v(" "),t("li",[e._v("Ported C# to Java")]),e._v(" "),t("li",[e._v("Agile Development methodologies were used")])])])])]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.initialized,expression:"initialized"}],key:"tech",staticClass:"skill-group",attrs:{"data-ix":1}},[t("h2",{staticClass:"skill-header"},[e._v("Technical Skills")]),e._v(" "),t("div",{staticClass:"skill-subgroup-wrapper"},[t("div",{staticClass:"skill-subgroup fixed"},[t("h4",[e._v("Programming Languages")]),e._v(" "),t("ul",[t("li",[e._v("Java")]),e._v(" "),t("li",[e._v("Javascript (web and Node.js)")]),e._v(" "),t("li",[e._v("C/C++")]),e._v(" "),t("li",[e._v("C#")]),e._v(" "),t("li",[e._v("Python")]),e._v(" "),t("li",[e._v("Shell scripting (bash/zsh)")]),e._v(" "),t("li",[e._v("Rust")]),e._v(" "),t("li",[e._v("Go")])])]),e._v(" "),t("div",{staticClass:"skill-subgroup fixed"},[t("h4",[e._v("Web Technologies")]),e._v(" "),t("ul",[t("li",[e._v("AngularJS (1.x)")]),e._v(" "),t("li",[e._v("Vue.js")]),e._v(" "),t("li",[e._v("React")]),e._v(" "),t("li",[e._v("Node.js")]),e._v(" "),t("li",[e._v("jQuery")]),e._v(" "),t("li",[e._v("Build toolchains (webpack/gulp/grunt/babel)")])])]),e._v(" "),t("div",{staticClass:"skill-subgroup fixed"},[t("h4",[e._v("Operating Systems")]),e._v(" "),t("ul",[t("li",[e._v("Linux (RHEL/Debian/Ubuntu)")]),e._v(" "),t("li",[e._v("Windows 10/8/7")]),e._v(" "),t("li",[e._v("Mac OSX")]),e._v(" "),t("li",[e._v("Android")]),e._v(" "),t("li",[e._v("iOS")])])]),e._v(" "),t("div",{staticClass:"skill-subgroup fixed"},[t("h4",[e._v("Java Technologies")]),e._v(" "),t("ul",[t("li",[e._v("JavaEE")]),e._v(" "),t("li",[e._v("JMS")]),e._v(" "),t("li",[e._v("Spring")]),e._v(" "),t("li",[e._v("Camel")]),e._v(" "),t("li",[e._v("JAXB")]),e._v(" "),t("li",[e._v("Swing/JavaFX")]),e._v(" "),t("li",[e._v("Maven")]),e._v(" "),t("li",[e._v("OSGi containers (Felix)")]),e._v(" "),t("li",[e._v("Glassfish administration")])])]),e._v(" "),t("div",{staticClass:"skill-subgroup fixed"},[t("h4",[e._v("Other Skills & Interests")]),e._v(" "),t("ul",[t("li",[e._v("Software Security & Cryptography")]),e._v(" "),t("li",[e._v("Embedded and real-time systems")]),e._v(" "),t("li",[e._v("Wireless sensor & mesh networks")]),e._v(" "),t("li",[e._v("Digital Signals Processing in audio")]),e._v(" "),t("li",[e._v("Software disassembly and reverse engineering")])])])])]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.initialized,expression:"initialized"}],key:"ed",staticClass:"skill-group",attrs:{"data-ix":2}},[t("h2",{staticClass:"skill-header"},[e._v("Education")]),e._v(" "),t("div",{staticClass:"skill-subgroup-wrapper"},[t("div",{staticClass:"skill-subgroup"},[t("h4",{staticClass:"skill-subheader"},[e._v("\n                    B.S. Computer Science - "),t("a",{attrs:{href:"https://www.csusm.edu"}},[e._v("California State University San Marcos")])]),e._v(" "),t("p",[e._v("Graduated 2015")])])])]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.initialized,expression:"initialized"}],key:"hobby",staticClass:"skill-group",attrs:{"data-ix":3}},[t("h2",{staticClass:"skill-header"},[e._v("Hobbies")]),e._v(" "),t("p",[e._v("\n            I really enjoy programming in Rust. I have a few projects up on my \n            "),t("a",{attrs:{href:"https://github.com/pulse0ne",target:"_blank"}},[e._v("github")]),e._v(" and \n            "),t("a",{attrs:{href:"https://gitlab.com/users/tsnedigar/projects",target:"_blank"}},[e._v("gitlab")]),e._v(" pages that I have a lot of fun working on. \n            I also have a deep interest in audio DSP. I wrote and maintain a Firefox browser plugin that allows you to equalize any \n            audio playing on an HTML5 audio or video element. This allows users that enjoy music on YouTube to crank the bass, or those \n            who have difficulty hearing to tune the audio to make spoken voices more legible.\n        ")]),e._v(" "),t("p",[e._v("\n            Outside of working on code, I love spending time with my wonderful wife and daughter. I also love playing and watching ice \n            hockey (go Kings!)\n        ")])])])},staticRenderFns:[]};var y=t("VU/8")(b,k,!1,function(e){t("9XEs")},"data-v-7992cffc",null).exports,x={render:function(){var e=this.$createElement;return(this._self._c||e)("div",[this._v("Coming soon")])},staticRenderFns:[]};var S=t("VU/8")({name:"Blog"},x,!1,function(e){t("iVUE")},"data-v-995b3010",null).exports;a.a.use(_.a);var C=new _.a({routes:[{path:"/",name:"Home",component:h},{path:"/skills",name:"Skills",component:y},{path:"/contact",name:"Contact",component:w},{path:"/blog",name:"Blog",component:S}]});a.a.config.productionTip=!1,a.a.use(n.a,{breakpoints:{sm:450,md:900,lg:1/0}}),new a.a({el:"#app",router:C,render:function(e){return e(u)}})},QHPH:function(e,i,t){e.exports=t.p+"static/img/ts.a53e4ed.jpg"},czkn:function(e,i){},g87o:function(e,i){},iVUE:function(e,i){},p4vT:function(e,i){}},["NHnr"]);
//# sourceMappingURL=app.b331bb3420e7a17c7499.js.map