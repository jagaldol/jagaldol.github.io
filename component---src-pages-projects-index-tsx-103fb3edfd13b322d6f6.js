"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[845],{3634:function(e,t,a){a.d(t,{Z:function(){return r}});var l=a(7294);function r(e){let{name:t,autoHeight:a=!1}=e;const r="https://img.shields.io/badge/-"+t+"-FFFFFF?style=for-the-badge&logo="+t+"&logoColor=black";return l.createElement("img",{src:r,alt:t,className:"drop - shadow "+(a?"":"object-contain w-full h-full")})}},5336:function(e,t,a){a.r(t),a.d(t,{Head:function(){return i}});var l=a(1883),r=a(7294),n=a(8032),o=a(9116),s=a(3634);function c(e){let{title:t,stacks:a}=e;const{0:l,1:n}=(0,r.useState)(!1),{0:o,1:c}=(0,r.useState)(!1),i=(0,r.useRef)(null),m=(0,r.useRef)(null),u=()=>{if(i.current){const e=i.current.getBoundingClientRect(),t=e.top>=0&&e.bottom<=window.innerHeight;c(t)}};return(0,r.useEffect)((()=>{o&&(l||(n(!0),m.current&&clearTimeout(m.current),m.current=setTimeout((()=>{n(!1)}),1e3)))}),[o]),(0,r.useEffect)((()=>(window.addEventListener("scroll",u),window.addEventListener("resize",u),u(),()=>{window.removeEventListener("scroll",u),window.removeEventListener("resize",u),m.current&&clearTimeout(m.current)})),[]),r.createElement("div",{ref:i,className:"absolute left-0 top-0 w-full h-full opacity-0 "+(l?"opacity-100":"")+" group-hover:opacity-100 bg-gradient-to-tl from-main-theme to-main-theme/40 z-10 transition-all duration-500 text-white"},r.createElement("h3",{className:"absolute right-0 bottom-0 text-3xl -translate-x-8 -translate-y-10"},t),r.createElement("div",{className:"absolute right-0 bottom-0 -translate-x-7 -translate-y-3 flex gap-1 justify-end items-center flex-wrap"},a.map((e=>r.createElement("div",{key:e,className:"h-6"},r.createElement(s.Z,{name:e}))))))}t.default=e=>{let{data:t}=e;const a=t.allMdx.nodes;return r.createElement(o.Z,null,r.createElement("div",{className:"mt-5 flex flex-col text-center"},r.createElement("h1",{className:"text-3xl mt-8 mb-16"},"Project List"),r.createElement("div",{className:"grid grid-cols-3 max-lg:grid-cols-2 py-5 max-md:grid-cols-1 mx-20 max-2xl:mx-10 max-md:mx-0 gap-x-3 gap-y-10"},a.map((e=>{const t=(0,n.c)(e.frontmatter.image);return r.createElement(l.Link,{key:e.id,to:e.frontmatter.slug,className:"relative w-full h-full bg-gradient-to-bl to-gray-300 from-gray-100 drop-shadow-lg flex items-center justify-center max-h-96 group"},t?r.createElement(n.G,{alt:e.frontmatter.title+" 대표 이미지",loading:"eager",image:t,className:"h-full group-hover:scale-90 transition-all duration-500",objectFit:"contain"}):null,r.createElement(c,{title:e.frontmatter.title,stacks:e.frontmatter.stack}))})))))};const i=()=>r.createElement("title",null,"Project | Hyejun An")}}]);
//# sourceMappingURL=component---src-pages-projects-index-tsx-103fb3edfd13b322d6f6.js.map