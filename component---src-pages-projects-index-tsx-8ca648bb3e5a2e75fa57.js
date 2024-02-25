"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[845],{1686:function(e,t,a){a.d(t,{Z:function(){return n}});var r=a(7294),l=a(3634);function n(e){let{title:t,stacks:a}=e;const{0:n,1:m}=(0,r.useState)(!1),{0:o,1:s}=(0,r.useState)(!1),c=(0,r.useRef)(null),i=(0,r.useRef)(null),u=()=>{if(c.current){const e=c.current.getBoundingClientRect(),t=e.top>=0&&e.bottom<=window.innerHeight;s(t)}};return(0,r.useEffect)((()=>{o&&(n||(m(!0),i.current&&clearTimeout(i.current),i.current=setTimeout((()=>{m(!1)}),1e3)))}),[o]),(0,r.useEffect)((()=>(window.addEventListener("scroll",u),window.addEventListener("resize",u),u(),()=>{window.removeEventListener("scroll",u),window.removeEventListener("resize",u),i.current&&clearTimeout(i.current)})),[]),r.createElement("div",{ref:c,className:"absolute left-0 top-0 w-full h-full opacity-0 "+(n?"opacity-100":"")+" group-hover:opacity-100 bg-gradient-to-tl from-main-theme to-main-theme/40 z-10 transition-all duration-500 text-white"},r.createElement("h3",{className:"absolute right-0 bottom-0 text-3xl max-xl:text-2xl -translate-x-8 max-md:-translate-x-6 -translate-y-10"},t),r.createElement("div",{className:"absolute right-0 bottom-0 -translate-x-7 max-md:-translate-x-5 -translate-y-3 flex gap-1 justify-end items-center flex-wrap"},a.map((e=>r.createElement("div",{key:e,className:"h-6"},r.createElement(l.Z,{name:e}))))))}},5336:function(e,t,a){a.r(t),a.d(t,{Head:function(){return c}});var r=a(1883),l=a(7294),n=a(8032),m=a(163),o=a(1686),s=a(6657);t.default=e=>{let{data:t}=e;const a=t.main.nodes,s=t.etc.nodes;return l.createElement(m.Z,null,l.createElement("div",{className:"mt-5 flex flex-col text-center"},l.createElement("h1",{className:"text-3xl my-8"},"Project List"),l.createElement("h2",{className:"text-xl my-4"},"Main Project"),l.createElement("div",{className:"grid grid-cols-3 max-lg:grid-cols-2 py-5 mb-20 max-md:grid-cols-1 mx-20 max-2xl:mx-10 max-md:mx-0 gap-x-3 gap-y-10"},a.map((e=>{const t=(0,n.c)(e.frontmatter.image);return l.createElement(r.Link,{key:e.id,to:"/projects/"+e.frontmatter.slug,className:"relative w-full h-full bg-gradient-to-bl to-gray-300 from-gray-100 drop-shadow-lg flex items-center justify-center max-h-96 group"},t?l.createElement(n.G,{alt:e.frontmatter.title+" 대표 이미지",loading:"eager",image:t,className:"h-full group-hover:scale-90 transition-all duration-500",objectFit:"contain"}):null,l.createElement(o.Z,{title:e.frontmatter.title,stacks:e.frontmatter.stack}))}))),l.createElement("h2",{className:"text-xl my-4",id:"etc"},"ETC"),l.createElement("div",{className:"grid grid-cols-3 max-lg:grid-cols-2 py-5 mb-20 max-md:grid-cols-1 mx-20 max-2xl:mx-10 max-md:mx-0 gap-x-3 gap-y-10"},s.map((e=>{const t=(0,n.c)(e.frontmatter.image);return l.createElement(r.Link,{key:e.id,to:"/projects/"+e.frontmatter.slug,className:"relative w-full h-full bg-gradient-to-bl to-gray-300 from-gray-100 drop-shadow-lg flex items-center justify-center max-h-96 group"},t?l.createElement(n.G,{alt:e.frontmatter.title+" 대표 이미지",loading:"eager",image:t,className:"h-full group-hover:scale-90 transition-all duration-500",objectFit:"contain"}):null,l.createElement(o.Z,{title:e.frontmatter.title,stacks:e.frontmatter.stack}))})))))};const c=e=>{let{data:t}=e;return l.createElement(s.Z,{title:"Project",description:"지금까지 수행해온 프로젝트 모음입니다.",pathname:"/projects/",image:"/og-image/"+t.main.nodes[0].frontmatter.slug+"/thumbnail.png"})}}}]);
//# sourceMappingURL=component---src-pages-projects-index-tsx-8ca648bb3e5a2e75fa57.js.map