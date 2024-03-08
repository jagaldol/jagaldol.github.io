"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[845],{1686:function(e,t,r){r.d(t,{Z:function(){return c}});var a=r(7294),n=r(6467),l=r(3634);function c(e){let{title:t,stacks:r}=e;const{0:c,1:o}=(0,a.useState)(!1),{0:i,1:s}=(0,a.useState)(!1),m=(0,a.useRef)(null),u=(0,a.useRef)(null),d=(0,n.Gc)(),f=()=>{if(m.current){const e=m.current.getBoundingClientRect(),t=e.top>=0&&e.bottom<=window.innerHeight;s(t)}};return(0,a.useEffect)((()=>{i&&d.md&&(c||(o(!0),u.current&&clearTimeout(u.current),u.current=setTimeout((()=>{o(!1)}),1e3)))}),[i]),(0,a.useEffect)((()=>(window.addEventListener("scroll",f),window.addEventListener("resize",f),f(),()=>{window.removeEventListener("scroll",f),window.removeEventListener("resize",f),u.current&&clearTimeout(u.current)})),[]),a.createElement("div",{ref:m,className:"absolute left-0 top-0 w-full h-full opacity-0 "+(c?"opacity-100":"")+" group-hover:opacity-100 bg-gradient-to-tl from-main-theme to-main-theme/40 z-10 transition-all duration-500 text-white"},a.createElement("h3",{className:"absolute right-0 bottom-0 text-3xl max-xl:text-2xl -translate-x-8 max-md:-translate-x-6 -translate-y-10"},t),a.createElement("div",{className:"absolute right-0 bottom-0 -translate-x-7 max-md:-translate-x-5 -translate-y-3 flex gap-1 justify-end items-center flex-wrap"},r.map((e=>a.createElement("div",{key:e,className:"h-6"},a.createElement(l.Z,{name:e}))))))}},833:function(e,t,r){r.r(t),r.d(t,{Head:function(){return u},default:function(){return m}});var a=r(7294),n=r(4856),l=r(6657),c=r(8032),o=r(1883),i=r(1686);function s(e){let{title:t,projects:r}=e;return a.createElement(a.Fragment,null,a.createElement("h2",{className:"text-xl my-4",id:t.replace(" ","_")},t),a.createElement("div",{className:"grid grid-cols-3 max-lg:grid-cols-2 py-5 mb-20 max-md:grid-cols-1 mx-20 max-2xl:mx-10 max-md:mx-0 gap-x-3 gap-y-10"},r.map((e=>{const t=(0,c.c)(e.frontmatter.image);return a.createElement(o.Link,{key:e.id,to:"/projects/"+e.frontmatter.slug,className:"relative w-full h-full bg-gradient-to-bl to-gray-300 from-gray-100 drop-shadow-lg flex items-center justify-center max-h-96 group"},t?a.createElement(c.G,{alt:e.frontmatter.title+" 대표 이미지",loading:"eager",image:t,className:"h-full group-hover:scale-90 transition-all duration-500",objectFit:"contain"}):null,a.createElement(i.Z,{title:e.frontmatter.title,stacks:e.frontmatter.stack}))}))))}var m=e=>{let{data:t}=e;const r=t.main.nodes,l=t.minor.nodes,c=t.toy.nodes;return a.createElement(n.Z,null,a.createElement("div",{className:"mt-5 flex flex-col text-center"},a.createElement("h1",{className:"text-3xl my-8"},"Project List"),a.createElement(s,{title:"Main Project",projects:r}),a.createElement(s,{title:"Minor Project",projects:l}),a.createElement(s,{title:"Toy Project",projects:c})))};const u=e=>{let{data:t}=e;return a.createElement(l.Z,{title:"Project",description:"지금까지 수행해온 프로젝트 모음입니다.",pathname:"/projects/",image:t.main.nodes[0].frontmatter.image.childImageSharp.original.src})}}}]);
//# sourceMappingURL=component---src-pages-projects-index-tsx-68ee24d8821b51c76305.js.map