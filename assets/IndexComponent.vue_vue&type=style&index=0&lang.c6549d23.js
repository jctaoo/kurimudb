import{e,r as t,f as l,g as s,c as a,b as o,T as i,w as n,t as r,d as c,h as u,o as d,a as m}from"./app.f0c10aae.js";const v={class:"index"},b=o("i",{class:"ri-anchor-line index-logo"},null,-1),g={class:"welcome"},h=o("img",{src:"/kurimudb/assets/kurimu.21041cc3.png",alt:"",srcset:""},null,-1),p={class:"welcome-title"},k={key:0,class:"welcome-title--text1"},f={key:1,class:"welcome-title--text1"},w={key:2,class:"welcome-title--text1"},y={key:3,class:"welcome-title--text1"},x={class:"welcome-title--text2"},S={style:{"text-decoration":"underline"}},q={class:"welcome-button-group"},z=o("i",{class:"ri-anchor-line"},null,-1),B=o("i",{class:"ri-github-fill"},null,-1),C=o("div",{class:"welcome-button--github-corner"},[o("img",{src:"https://img.shields.io/github/stars/akirarika/kurimudb?color=%2300000000&label=%20&style=for-the-badge",alt:""})],-1),D={class:"index-markdown"};var F=e({expose:[],props:{lang:{type:String,default:"zh",required:!1,validator:e=>["zh","en"].includes(e)}},setup(e){const{lang:F}=e,I=t(0);setTimeout((()=>setInterval((()=>I.value++),3200)),1600);const T=()=>{location.href="intro.html"},_=()=>{location.href="https://github.com/akirarika/kurimudb"};let j="";const E={default:"zh","足够简单的，":{en:"Simple Enouth"},"渐进式的，":{en:"Progressive"},"驱动化的，":{en:"Driven"},"框架无关的，":{en:"Framework Independent "},"前端存储":{en:"Front-end Storage"},"解决方案。":{en:" Solution"},"阅读文档":{en:"Reading Document"}},P=e=>F===E.default?e:E[e][F];return l((()=>{const e=document.querySelector(".nav-bar");e&&(j=e.style.borderBottom,e.style.borderBottom="none")})),s((()=>{const e=document.querySelector(".nav-bar");e&&(e.style.borderBottom=j)})),(e,t)=>(d(),a("div",v,[b,o("div",g,[h,o("div",p,[o(i,{name:"fade",mode:"out-in"},{default:n((()=>[I.value%4==0?(d(),a("div",k,r(P("足够简单的，")),1)):I.value%4==1?(d(),a("div",f,r(P("渐进式的，")),1)):I.value%4==2?(d(),a("div",w,r(P("驱动化的，")),1)):I.value%4==3?(d(),a("div",y,r(P("框架无关的，")),1)):m("v-if",!0)])),_:1}),o("div",x,[o("span",S,r(P("前端存储")),1),c(r(P("解决方案。")),1)]),o("div",q,[o("div",{class:"welcome-button--docs",onClick:T},[z,o("span",null,r(P("阅读文档")),1)]),o("div",{class:"welcome-button--github",onClick:_},[B,C])])])]),o("div",D,[u(e.$slots,"default")])]))}});export{F as _};
