(function(e){function a(a){for(var n,i,c=a[0],s=a[1],l=a[2],d=0,u=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&u.push(r[i][0]),r[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);f&&f(a);while(u.length)u.shift()();return t.push.apply(t,l||[]),o()}function o(){for(var e,a=0;a<t.length;a++){for(var o=t[a],n=!0,i=1;i<o.length;i++){var c=o[i];0!==r[c]&&(n=!1)}n&&(t.splice(a--,1),e=s(s.s=o[0]))}return e}var n={},i={app:0},r={app:0},t=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4"}[e]||e)+"."+{actividad:"88e5f2c1","chunk-0206bfa0":"db848401","chunk-110f1f0b":"61a4ed11","chunk-13a6037e":"0dbe5c65","chunk-179248a2":"d6cf2861","chunk-18f95272":"9d8cf629","chunk-2a9fce91":"0ecc359b","chunk-2c06842c":"6cae5bfb","chunk-2d0c5615":"75151c9d","chunk-2d0e96ec":"a0992f3a","chunk-2d208d90":"7ca99724","chunk-2d21d0e2":"662065e2","chunk-2d22c123":"3ab92924","chunk-2e80bb9a":"84e37d65","chunk-319206de":"0748c1e6","chunk-36769079":"db07006a","chunk-4cdd78c0":"0277c010","chunk-515a8379":"5df7d778","chunk-53ccb27e":"cc458c56","chunk-55d286b8":"f370762b","chunk-59974754":"12fa6331","chunk-5d1ce150":"6ee84259","chunk-60cbc06b":"c331d9c0","chunk-623f2040":"dfc3159f","chunk-659152b8":"592218b5","chunk-6a43ec24":"c4a1c2ef","chunk-6e1e538a":"0a30a368","chunk-6e613899":"042dd297","chunk-766a929b":"cee86727","chunk-7794bb60":"280b6865","chunk-c796899c":"d7fc5ff3","chunk-e8a7823a":"8074120d","chunk-fde47172":"53c5fbd8",comple:"e3fcb91c",creditos:"2d37fb69",glosario:"28ede105",intro:"023ee4b3",referencias:"d4f4b440",sintesis:"e3709ccc",tema1:"f6067f94",tema2:"25e93e8b",tema3:"369f1da7",tema4:"13fc48e9"}[e]+".js"}function s(a){if(n[a])return n[a].exports;var o=n[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(e){var a=[],o={"chunk-110f1f0b":1,"chunk-179248a2":1,"chunk-2a9fce91":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-5d1ce150":1,"chunk-60cbc06b":1,"chunk-623f2040":1,"chunk-6a43ec24":1,"chunk-6e1e538a":1,"chunk-6e613899":1,"chunk-766a929b":1,"chunk-7794bb60":1,comple:1,creditos:1,glosario:1,referencias:1};i[e]?a.push(i[e]):0!==i[e]&&o[e]&&a.push(i[e]=new Promise((function(a,o){for(var n="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-110f1f0b":"52141945","chunk-13a6037e":"31d6cfe0","chunk-179248a2":"52141945","chunk-18f95272":"31d6cfe0","chunk-2a9fce91":"52141945","chunk-2c06842c":"31d6cfe0","chunk-2d0c5615":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-36769079":"31d6cfe0","chunk-4cdd78c0":"31d6cfe0","chunk-515a8379":"d4dea3d1","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"12e32b6a","chunk-5d1ce150":"52141945","chunk-60cbc06b":"09438581","chunk-623f2040":"52141945","chunk-659152b8":"31d6cfe0","chunk-6a43ec24":"52141945","chunk-6e1e538a":"3ba0a060","chunk-6e613899":"52141945","chunk-766a929b":"a3416c02","chunk-7794bb60":"52141945","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-fde47172":"31d6cfe0",comple:"7928cb5d",creditos:"0a3f343e",glosario:"1a1810c1",intro:"31d6cfe0",referencias:"9adbb116",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0",tema4:"31d6cfe0"}[e]+".css",r=s.p+n,t=document.getElementsByTagName("link"),c=0;c<t.length;c++){var l=t[c],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===n||d===r))return a()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){l=u[c],d=l.getAttribute("data-href");if(d===n||d===r)return a()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=a,f.onerror=function(a){var n=a&&a.target&&a.target.src||r,t=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");t.code="CSS_CHUNK_LOAD_FAILED",t.request=n,delete i[e],f.parentNode.removeChild(f),o(t)},f.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){i[e]=0})));var n=r[e];if(0!==n)if(n)a.push(n[2]);else{var t=new Promise((function(a,o){n=r[e]=[a,o]}));a.push(n[2]=t);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=c(e);var u=new Error;l=function(a){d.onerror=d.onload=null,clearTimeout(f);var o=r[e];if(0!==o){if(o){var n=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+i+")",u.name="ChunkLoadError",u.type=n,u.request=i,o[1](u)}r[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(a)},s.m=e,s.c=n,s.d=function(e,a,o){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)s.d(o,n,function(a){return e[a]}.bind(null,n));return o},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=a,l=l.slice();for(var u=0;u<l.length;u++)a(l[u]);var f=d;t.push([0,"chunk-vendors"]),o()})({0:function(e,a,o){e.exports=o("56d7")},"52e5":function(e,a,o){e.exports=o.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,o){"use strict";o.r(a);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("68f3"),i=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticClass:"app",attrs:{id:"app"}},[o("Header"),o("div",{staticClass:"contenedor-principal"},[o("AsideMenu"),o("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[o("router-view")],1)],1),o("BarraAvance"),o("Accesibilidad")],1)},r=[],t={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=t,s=o("2877"),l=Object(s["a"])(c,i,r,!1,null,null,null),d=l.exports,u=(o("d3b7"),o("3ca3"),o("ddb0"),o("b0c0"),o("2b0e")),f=o("8c4f"),m=o("ae58"),p=o("7e58");u["a"].use(f["a"]);var h=new f["a"]({routes:[{path:"/",name:"inicio",component:m["a"]},{path:"/introduccion",name:"introduccion",component:function(){return o.e("intro").then(o.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return o.e("tema1").then(o.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return o.e("tema2").then(o.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return o.e("tema3").then(o.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return o.e("tema4").then(o.bind(null,"3eb5"))}}]},{path:"/actividad",name:"actividad",component:function(){return o.e("actividad").then(o.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return o.e("glosario").then(o.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return o.e("comple").then(o.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return o.e("referencias").then(o.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return o.e("sintesis").then(o.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return o.e("creditos").then(o.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var o={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?o:new Promise((function(e){setTimeout((function(){e(o)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),g=h,b=o("1c2c"),v=(o("a3a0"),{global:{componenteFormativo:"Estructuración de proyectos y propuesta de mercadeo para el sector del deporte",descripcionCurso:"Los temas tratados en este componente de formación permiten reconocer aspectos clave inherentes a la estructuración de proyectos y propuestas aplicables al sector deporte.",imagenBannerPrincipal:o("74b5"),fondoBannerPrincipal:o("ce7c"),imagenesDecorativasBanner:[]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info-circle",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Elementos conceptuales de la gestión de proyectos ",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"Concepto y tipos de proyectos",hash:"t_1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Concepto y procesos de la gestión de proyectos",hash:"t_1_2"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Grupo de inicio del proyecto",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"2.1",titulo:"Definición y componentes para el inicio de un proyecto",hash:"t_2_1"},{icono:"far fa-file-alt",numero:"2.2",titulo:"Acta de constitución del proyecto",hash:"t_2_2"},{icono:"far fa-file-alt",numero:"2.3",titulo:"Identificación de las partes interesadas",hash:"t_2_3"}]},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Grupo de planificación del proyecto",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"3.1",titulo:"Plan de gestión del alcance del proyecto",hash:"t_3_1"},{icono:"far fa-file-alt",numero:"3.2",titulo:"Plan de gestión del cronograma del proyecto",hash:"t_3_2"},{icono:"far fa-file-alt",numero:"3.3",titulo:"Plan de gestión de costos del proyecto",hash:"t_3_3"},{icono:"far fa-file-alt",numero:"3.4",titulo:"Plan de gestión de calidad del proyecto",hash:"t_3_4"},{icono:"far fa-file-alt",numero:"3.5",titulo:"Plan de gestión de recursos humanos",hash:"t_3_5"},{icono:"far fa-file-alt",numero:"3.6",titulo:"Plan de gestión de comunicaciones",hash:"t_3_6"},{icono:"far fa-file-alt",numero:"3.7",titulo:"Plan de gestión del riesgo del proyecto",hash:"t_3_7"},{icono:"far fa-file-alt",numero:"3.8",titulo:"Plan de gestión de adquisiciones del proyecto",hash:"t_3_8"}]},{nombreRuta:"tema4",icono:"far fa-file-alt",numero:"4",titulo:"Formulación de propuestas de mercado acordes con las necesidades poblacionales del sector",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"4.1",titulo:"Identificación del mercado y población objeto",hash:"t_4_1"},{icono:"far fa-file-alt",numero:"4.2",titulo:"Concepto y características de portafolio de servicios",hash:"t_4_2"},{icono:"far fa-file-alt",numero:"4.3",titulo:"Construcción de portafolio de servicios",hash:"t_4_3"},{icono:"far fa-file-alt",numero:"4.4",titulo:"Concepto y estrategias de mercadeo deportivo",hash:"t_4_4"}]}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-file-pdf",titulo:"Descargar PDF",download:"downloads/122112_CF02_DU.zip"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"3. Grupo de planificación del proyecto",tipo:"Libro digital",referencia:"Project Management Institute [PMI]. (2004). Guía de los Fundamentos para la Dirección de Proyectos.",link:"https://www.sadamweb.com.ar/news/2016_08Agosto/Guia_Fundamentos_para_la_Direccion_de_Proyectos-4ta_Edicion.pdf?PMBOX=http://www.sadamweb.com.ar/news/2016_08Agosto/Guia_Fundamentos_para_la_Direccion_de_Proyectos-4ta_Edicion.pdf"}],glosario:[{termino:"Cliente",significado:"Persona o empresa que toma la decisión de compra de un producto o servicio, y que, a su vez, mantiene una relación comercial con la empresa, organización o persona."},{termino:"Fase del proyecto",significado:"Conjunto relacionado de actividades del proyecto que culmina en la terminación de uno o más entregables."},{termino:"Gestión de proyecto",significado:"Aplicación de conocimientos, destrezas, herramientas y técnicas a las actividades de un proyecto para el logro de los requerimientos."},{termino:"Mercadeo",significado:"La actividad, el conjunto de instituciones y los procesos para crear, comunicar, entregar e intercambiar ofertas que tienen valor para los clientes, los socios y la sociedad en general."},{termino:"Mercadeo deportivo",significado:"El arte para descubrir e identificar claramente las necesidades y expectativas del mercado y el arte para ofrecer y ejecutar la mejor opción de manera tal que maximice la satisfacción de necesidades y expectativas de practicantes, aficionados, patrocinadores y la sociedad en general, con el fin de lograr que practicantes y seguidores se unan a las causas para generar beneficio social."},{termino:"Partes interesadas",significado:"Personas o grupos que pueden afectar, verse afectados o sentirse afectados por las decisiones o actividades del proyecto."},{termino:"Proyecto",significado:"Esfuerzo temporal que se lleva a cabo para crear un producto, servicio o resultado único."}],referencias:[{referencia:"Cajal, A. (2020). Portafolio de servicios: tipos, partes y ejemplos. Lifeder.",link:"https://www.lifeder.com/portafolio-de-servicios/."},{referencia:"ESAN. (2016). El <em>Marketing</em> y sus definiciones. Conexión ESAN.",link:"https://www.esan.edu.pe/apuntes-empresariales/2016/05/el-marketing-y-sus-definiciones/"},{referencia:"International Project Management Association [IPMA]. (2006). ICB Competence Baseline Version 3.0.",link:""},{referencia:"Ministerio de Agricultura y Pesca de España. Segmentación de mercados.",link:"https://www.mapa.gob.es/ministerio/pags/biblioteca/fondo/pdf/5269_39.pdf"},{referencia:"Padierna, J. y Cardona, L. (2020). Administración, dirección y gestión en el deporte. Editorial Kinesis. ",link:""},{referencia:"Project Management Institute [PMI]. (2008). Organizational Project Management Maturity Model.",link:""},{referencia:"Project Management Institute [PMI]. (2013). Guía de los fundamentos para la dirección de proyectos (Guía del PMBOK) (5ta ed.).",link:"https://sistemastic.files.wordpress.com/2017/07/guia_de_los_fundamentos_para_la_direccion_de_proyectos-pmbok_5ta_edicion_espanol.pdf"},{referencia:"International Organization for Standardization. (2018). ISO 31000:2018, Gestión del riesgo. Principios y directrices.",link:"https://www.ramajudicial.gov.co/documents/5454330/14491339/Norma.ISO.31000.2018.Espanol.pdf/cb482b2c-afd9-4699-b409-0732a5261486"},{referencia:"Plepso, C. A. (2015). Estudios de mercados y de opinión pública. Según Mullin (1985). Recuperado de",link:"https://plepso.blogspot.com/2015/08/marketing-deportivo.html"}],creditos:[{titulo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Responsable del Ecosistema",centro:"Dirección General"},{nombre:"Liliana Victoria Morales Gualdrón",cargo:"Líder Línea de Producción Virtual Tolima",centro:"Regional Tolima - Centro de Comercio y Servicios"}]},{titulo:"CONTENIDO INSTRUCCIONAL",autores:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor Metodológico y Pedagógico",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"},{nombre:"Tatiana Cristina Vargas ",cargo:"Experto Temático",centro:"Regional Antioquia - Centro de Servicios de Salud"},{nombre:"Paola Andrea Quintero Aguilar",cargo:"Diseñadora Instruccional",centro:"Regional Distrito Capital - Centro de Gestión Industrial"},{nombre:"Andrés Felipe Velandia Espitia",cargo:"Asesoría Metodológica y Pedagógica",centro:"Regional Distrito Capital - Centro de Diseño y Metrología"},{nombre:"Darío González ",cargo:"Corrección de Estilo",centro:"Regional Tolima - Centro Agropecuario La Granja"},{nombre:"Gloria Lida Alzate Suarez",cargo:"Adecuación Instruccional-2023",centro:"Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la información"},{nombre:"Alix Cecilia Chinchilla Rueda",cargo:"Asesoría Metodológica y Pedagógica",centro:"Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la información"},{nombre:"Viviana Esperanza Herrera Quiñonez",cargo:"Evaluación Instruccional",centro:"Regional Tolima - Centro de Comercio y Servicios"}]},{titulo:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del Equipo",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte Organizacional",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Luis Fernando Sarmiento Betancourth",cargo:"Diseño Web",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"},{nombre:"Adriana Marcela Suárez Eljure ",cargo:"Producción Audiovisual",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Andrés Felipe Herrera Roldan",cargo:"Producción Audiovisual",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Camilo Andrés Bolaño Rey",cargo:"Producción Audiovisual",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"},{nombre:"Gilberto Junior Rodriguez Rodriguez",cargo:"Producción Audiovisual",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"José Jaime Luis Tang Pinzón",cargo:"Producción Audiovisual",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Ricardo Vásquez Arroyave ",cargo:"Producción Audiovisual",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"},{nombre:"Wilson Andrés Arenales Caceres ",cargo:"Producción Audiovisual",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"},{nombre:"Zuleidy Maria Ruiz Torres",cargo:"Producción Audiovisual",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"},{nombre:"Lizeth Karina Manchego Suárez",cargo:"Desarrollo Front-end",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"},{nombre:"Yenny Patricia Ulloa Villamizar",cargo:"Validación de Diseño y Contenido",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"},{nombre:"Lina Marcela Pérez Manchego",cargo:"Diseño Web",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Veimar Celis Meléndez",cargo:"Desarrollador Fullstack",centro:"Centro de Comercio y Servicios - Regional Tolima"}]},{titulo:"VALIDACIÓN RECURSO EDUCATIVO DIGITAL",autores:[{nombre:"Norma Constanza Morales Cruz",cargo:"Evaluador para Contenidos Inclusivos y Accesibles",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Javier Mauricio Oviedo",cargo:"Validador de Recursos Educativos Digitales",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Jorge Bustos Gómez",cargo:"Validador de Recursos Educativos Digitales",centro:"Regional Tolima - Centro de Comercio y Servicios"}]}],creditosAdicionales:{imagenes:'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',creativeCommons:'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>'}});n["a"].prototype.$config=v;var y=o("9224");n["a"].prototype.$package=y,new n["a"]({router:g,store:b["a"],render:function(e){return e(d)}}).$mount("#app")},"74b5":function(e,a,o){e.exports=o.p+"img/banner-princiapal.0fa3dedd.png"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"7.0.2","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"6.0.2","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},a00a:function(e,a,o){e.exports=o.p+"img/logo-sena.47d29d11.svg"},a3a0:function(e,a,o){},ce7c:function(e,a,o){e.exports=o.p+"img/fondo-banner-principal.ce1e407d.png"}});
//# sourceMappingURL=app.e839f390.js.map