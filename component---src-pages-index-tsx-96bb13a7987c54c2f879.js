"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[691],{6945:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.AnchorLink=u;var l=i(n(7294)),a=n(1883),r=i(n(5697)),c=n(2284);function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){var t=e.to,n=e.title,r=e.children,i=e.className,o=e.stripHash,s=void 0!==o&&o,u=e.gatsbyLinkProps,d=void 0===u?{}:u,f=e.onAnchorLinkClick,p=s?c.handleStrippedLinkClick:c.handleLinkClick,x=m(m({},d),{},{to:s?(0,c.stripHashedLocation)(t):t,onClick:function(e){return p(t,e,f)}});return n&&(x.title=n),i&&(x.className=i),l.default.createElement(a.Link,x,r||n)}u.propTypes={to:r.default.string.isRequired,title:r.default.string,className:r.default.string,stripHash:r.default.bool,gatsbyLinkProps:r.default.object,onAnchorLinkClick:r.default.func,children:r.default.node}},3089:function(e,t,n){Object.defineProperty(t,"P",{enumerable:!0,get:function(){return l.AnchorLink}});var l=n(6945)},1686:function(e,t,n){n.d(t,{Z:function(){return c}});var l=n(7294),a=n(6467),r=n(3634);function c(e){let{title:t,stacks:n}=e;const{0:c,1:i}=(0,l.useState)(!1),{0:o,1:m}=(0,l.useState)(!1),s=(0,l.useRef)(null),u=(0,l.useRef)(null),d=(0,a.Gc)(),f=()=>{if(s.current){const e=s.current.getBoundingClientRect(),t=e.top>=0&&e.bottom<=window.innerHeight;m(t)}};return(0,l.useEffect)((()=>{o&&d.md&&(c||(i(!0),u.current&&clearTimeout(u.current),u.current=setTimeout((()=>{i(!1)}),1e3)))}),[o]),(0,l.useEffect)((()=>(window.addEventListener("scroll",f),window.addEventListener("resize",f),f(),()=>{window.removeEventListener("scroll",f),window.removeEventListener("resize",f),u.current&&clearTimeout(u.current)})),[]),l.createElement("div",{ref:s,className:"absolute left-0 top-0 w-full h-full opacity-0 "+(c?"opacity-100":"")+" group-hover:opacity-100 bg-gradient-to-tl from-main-theme to-main-theme/40 z-10 transition-all duration-500 text-white"},l.createElement("h3",{className:"absolute right-0 bottom-0 text-3xl max-xl:text-2xl -translate-x-8 max-md:-translate-x-6 -translate-y-10"},t),l.createElement("div",{className:"absolute right-0 bottom-0 -translate-x-7 max-md:-translate-x-5 -translate-y-3 flex gap-1 justify-end items-center flex-wrap"},n.map((e=>l.createElement("div",{key:e,className:"h-6"},l.createElement(r.Z,{name:e}))))))}},446:function(e,t,n){n.r(t),n.d(t,{Head:function(){return j},default:function(){return k}});var l=n(7294),a=n(8032),r=n(1883),c=n(7600),i=n.n(c);function o(){const e=(0,r.useStaticQuery)("1132222685"),t=(0,a.c)(e.file);return l.createElement(l.Fragment,null,l.createElement("div",{className:"absolute left-0 top-0 w-full h-[1000px] -z-30 bg-cover bg-center opacity-60 select-none pointer-events-none"},t?l.createElement(a.G,{className:"w-full h-full object-cover",loading:"eager",alt:"배경 구름 이미지",image:t}):null),l.createElement("div",{className:"absolute left-0 top-0 w-full h-[1000px] bg-gradient-to-b from-transparent to-bg -z-20"}),l.createElement("div",{className:"h-[700px] flex flex-col text-center"},l.createElement("div",{className:"flex flex-col flex-1 items-center justify-center "},l.createElement("h1",{className:"text-5xl flex gap-4 max-md:gap-2 max-md:flex-col max-md:text-3xl"},l.createElement("span",null,"안녕하세요"),l.createElement("span",null,l.createElement("b",null,"안혜준"),"입니다.")),l.createElement("div",{className:"my-10 flex flex-col gap-2"},l.createElement("p",null,l.createElement("b",null,"무에서 유를 창조하는 개발자"),", 안혜준입니다."),l.createElement("p",{className:"max-md:block flex flex-col"},l.createElement("span",null,"최근 백엔드 개발자에서 ML 엔지니어로 직무를 변환하였습니다. "),l.createElement("span",null,"현재 ML 엔지니어로 거듭나기 위해 부트캠프 과정 중입니다. 더욱 다양한 경험을 통해 성장해나가고 싶습니다!")))),l.createElement("div",{className:"flex justify-center"},l.createElement("button",{type:"button",className:"flex flex-col justify-center items-center animate-moveUpDown",onClick:e=>{const t=e.target;window.scrollBy({top:t.getBoundingClientRect().bottom+40,behavior:"smooth"})}},l.createElement("p",null,"더보기"),l.createElement(i(),null)))))}var m=n(7814),s=n(3024),u=n(9417),d=n(4288);function f(e){let{title:t,children:n}=e;return l.createElement("div",{className:"flex flex-col my-12"},l.createElement("h2",{className:"text-center py-20 text-5xl max-md:text-3xl"},t),n)}function p(e){let{title:t,children:n}=e;return l.createElement("div",{className:"pl-[20%] max-xl:pl-[10%] max-sm:pl-0"},l.createElement("h3",{className:"text-3xl py-5 max-md:text-lg max-md:font-semibold"},t),l.createElement("div",{className:"pl-1 flex flex-col gap-2"},n))}const x="text-black/60 pl-1";function E(e){let{content:t,description:n,children:a}=e;return l.createElement("div",null,l.createElement("p",null,t),l.createElement("p",{className:x},n),a)}function g(e){let{content:t,icon:n,link:a}=e;return l.createElement("div",{className:"flex"},a?l.createElement("a",{href:a,className:"flex gap-1 items-center group"},l.createElement(m.G,{icon:n,width:"20"}),l.createElement("span",{className:"underline-animate"},t)):l.createElement("p",{className:"flex gap-1 items-center"},l.createElement(m.G,{icon:n,width:"20"}),l.createElement("span",null,t)))}function h(){const e=(0,r.useStaticQuery)("1579264213"),t=(0,a.c)(e.file);return l.createElement(f,{title:"Profile"},l.createElement("div",{className:"grid grid-cols-2 gap-y-10 max-lg:grid-cols-1 px-10 max-md:px-0"},l.createElement("div",{className:"flex max-sm:flex-col-reverse"},l.createElement(p,{title:"Contact"},l.createElement(g,{content:"안혜준(Hyejun An)",icon:u.ILF}),l.createElement(g,{content:"2000.01.29.",icon:u.WLT}),l.createElement(g,{content:"jagaldol.dev@gmail.com",icon:d.FU$,link:"mailto:jagaldol.dev@gmail.com"}),l.createElement(g,{content:"@jagadol",icon:s.zhw,link:"https://github.com/jagaldol/"}),l.createElement(g,{content:"LinkedIn",icon:s.hwn,link:"https://www.linkedin.com/in/hye-jun/"}),l.createElement(g,{content:"자갈돌의 devLog",icon:u.M_6,link:"https://blog.jagaldol.com/"})),t?l.createElement("div",{className:"flex items-center justify-center"},l.createElement(a.G,{className:"ml-[10%] max-sm:mx-[10%] rounded-xl",alt:"프로필 사진",image:t})):null),l.createElement(p,{title:"Education"},l.createElement(E,{content:"네이버 부스트 캠프 AI Tech 7기 - NLP 트랙",description:"2024.08. ~ 2025.02."}),l.createElement(E,{content:"구글 머신러닝 부트캠프 2024",description:"2024.07. ~ 2024.10."}),l.createElement(E,{content:"카카오 테크 캠퍼스 1기 Backend",description:"2023.04. ~ 2023.11."}),l.createElement(E,{content:"부산대학교 정보컴퓨터공학부",description:"2018.03. ~ 2025.02."},l.createElement("p",{className:x},"학점: 4.00 / 4.5"))),l.createElement(p,{title:"Awards"},l.createElement(E,{content:"카카오 테크 캠퍼스 신규 서비스 개발 프로젝트 - 대상",description:"2023.11.17."}),l.createElement(E,{content:"2023년 TOPCIT 성적우수자 - 한국정보산업연합회장상",description:"2023.12.22."}),l.createElement(E,{content:"제 1회 PNU Coding Challenge - 우수상",description:"2023.12.20."})),l.createElement(p,{title:"Certificate"},l.createElement(E,{content:"정보처리기사",description:"2024.06.18."}),l.createElement(E,{content:"PCCP - Python level 3(700점)",description:"2024.06.01."}),l.createElement(E,{content:"TOEIC - 830점",description:"2023.12.10."}),l.createElement(E,{content:"TOPCIT - 수준 3(608점)",description:"2023.05.20."}))))}var b=n(4856),v=n(3089),y=n(1686);function w(){const e=(0,r.useStaticQuery)("1694726442").allMdx.nodes;return l.createElement(f,{title:"Project"},l.createElement("div",{className:"grid grid-cols-3 max-lg:grid-cols-2 py-5 max-md:grid-cols-1 mx-20 max-2xl:mx-10 max-md:mx-0 gap-x-3 gap-y-10"},e.map((e=>{const t=(0,a.c)(e.frontmatter.image);return l.createElement(r.Link,{key:e.id,to:"/projects/"+e.frontmatter.slug,className:"relative w-full bg-gradient-to-bl to-gray-300 from-gray-100 drop-shadow-lg flex items-center justify-center group"},t?l.createElement(a.G,{alt:e.frontmatter.title+" 대표 이미지",loading:"eager",image:t,className:"group-hover:scale-90 transition-all duration-500",objectFit:"contain"}):null,l.createElement(y.Z,{title:e.frontmatter.title,stacks:e.frontmatter.stack}))}))),l.createElement(v.P,{to:"/projects/#Sub_Project",className:"\n        flex justify-center items-center rounded-full\n        text-lg max-md:text-base\n        h-14 max-2xl:h-12 max-md:h-10 \n        mx-20 my-10 max-2xl:mx-10 max-md:mx-0\n        drop-shadow text-white bg-main-theme hover:bg-main-theme-70 transition-all\n        ",stripHash:!0},"View More"))}var N=n(6657);var k=()=>l.createElement(b.Z,null,l.createElement(o,null),l.createElement(h,null),l.createElement(w,null));const j=()=>l.createElement(N.Z,null)}}]);
//# sourceMappingURL=component---src-pages-index-tsx-96bb13a7987c54c2f879.js.map