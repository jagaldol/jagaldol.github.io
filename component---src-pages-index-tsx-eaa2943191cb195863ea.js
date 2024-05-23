"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[691],{6945:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.AnchorLink=u;var l=o(n(7294)),a=n(1883),c=o(n(5697)),r=n(2284);function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){var t=e.to,n=e.title,c=e.children,o=e.className,i=e.stripHash,s=void 0!==i&&i,u=e.gatsbyLinkProps,d=void 0===u?{}:u,f=e.onAnchorLinkClick,p=s?r.handleStrippedLinkClick:r.handleLinkClick,x=m(m({},d),{},{to:s?(0,r.stripHashedLocation)(t):t,onClick:function(e){return p(t,e,f)}});return n&&(x.title=n),o&&(x.className=o),l.default.createElement(a.Link,x,c||n)}u.propTypes={to:c.default.string.isRequired,title:c.default.string,className:c.default.string,stripHash:c.default.bool,gatsbyLinkProps:c.default.object,onAnchorLinkClick:c.default.func,children:c.default.node}},3089:function(e,t,n){Object.defineProperty(t,"P",{enumerable:!0,get:function(){return l.AnchorLink}});var l=n(6945)},446:function(e,t,n){n.r(t),n.d(t,{Head:function(){return k},default:function(){return N}});var l=n(7294),a=n(8032),c=n(1883),r=n(7600),o=n.n(r);function i(){const e=(0,c.useStaticQuery)("1132222685"),t=(0,a.c)(e.file);return l.createElement(l.Fragment,null,l.createElement("div",{className:"absolute left-0 top-0 w-full h-[1000px] -z-30 bg-cover bg-center opacity-60 select-none pointer-events-none"},t?l.createElement(a.G,{className:"w-full h-full object-cover",loading:"eager",alt:"배경 구름 이미지",image:t}):null),l.createElement("div",{className:"absolute left-0 top-0 w-full h-[1000px] bg-gradient-to-b from-transparent to-bg -z-20"}),l.createElement("div",{className:"h-[700px] flex flex-col text-center"},l.createElement("div",{className:"flex flex-col flex-1 items-center justify-center "},l.createElement("h1",{className:"text-5xl flex gap-4 max-md:gap-2 max-md:flex-col max-md:text-3xl"},l.createElement("span",null,"안녕하세요"),l.createElement("span",null,l.createElement("b",null,"안혜준"),"입니다.")),l.createElement("div",{className:"my-10 flex flex-col gap-2"},l.createElement("p",null,l.createElement("b",null,"무에서 유를 창조하는 개발자"),", 안혜준입니다."),l.createElement("p",{className:"max-md:block flex flex-col"},l.createElement("span",null,"부산대학교 정보컴퓨터공학부에서 졸업을 앞둔 채, 백엔드 개발자로 활동하고 있습니다. "),l.createElement("span",null,"웹 개발자로써 여러 프로젝트를 수행해 왔습니다. 더욱 다양한 경험을 통해 성장해나가고 싶습니다!")))),l.createElement("div",{className:"flex justify-center"},l.createElement("button",{type:"button",className:"flex flex-col justify-center items-center animate-moveUpDown",onClick:e=>{const t=e.target;window.scrollBy({top:t.getBoundingClientRect().bottom+40,behavior:"smooth"})}},l.createElement("p",null,"더보기"),l.createElement(o(),null)))))}var m=n(7814),s=n(3024),u=n(9417),d=n(4288);function f(e){let{title:t,children:n}=e;return l.createElement("div",{className:"flex flex-col my-12"},l.createElement("h2",{className:"text-center py-20 text-5xl max-md:text-3xl"},t),n)}function p(e){let{title:t,children:n}=e;return l.createElement("div",{className:"pl-[20%] max-xl:pl-[10%] max-sm:pl-0"},l.createElement("h3",{className:"text-3xl py-5 max-md:text-lg max-md:font-semibold"},t),l.createElement("div",{className:"pl-1 flex flex-col gap-2"},n))}const x="text-black/60 pl-1";function g(e){let{content:t,description:n,children:a}=e;return l.createElement("div",null,l.createElement("p",null,t),l.createElement("p",{className:x},n),a)}function E(e){let{content:t,icon:n,link:a}=e;return l.createElement("div",{className:"flex"},a?l.createElement("a",{href:a,className:"flex gap-1 items-center group"},l.createElement(m.G,{icon:n,width:"20"}),l.createElement("span",{className:"underline-animate"},t)):l.createElement("p",{className:"flex gap-1 items-center"},l.createElement(m.G,{icon:n,width:"20"}),l.createElement("span",null,t)))}function b(){const e=(0,c.useStaticQuery)("1579264213"),t=(0,a.c)(e.file);return l.createElement(f,{title:"Profile"},l.createElement("div",{className:"grid grid-cols-2 gap-y-10 max-lg:grid-cols-1 px-10 max-md:px-0"},l.createElement("div",{className:"flex max-sm:flex-col-reverse"},l.createElement(p,{title:"Contact"},l.createElement(E,{content:"안혜준(Hyejun An)",icon:u.ILF}),l.createElement(E,{content:"2000.01.29.",icon:u.WLT}),l.createElement(E,{content:"jagaldol.dev@gmail.com",icon:d.FU$,link:"mailto:jagaldol.dev@gmail.com"}),l.createElement(E,{content:"@jagadol",icon:s.zhw,link:"https://github.com/jagaldol/"}),l.createElement(E,{content:"자갈돌의 devLog",icon:u.M_6,link:"https://blog.jagaldol.com/"})),t?l.createElement("div",{className:"flex items-center justify-center"},l.createElement(a.G,{className:"ml-[10%] max-sm:mx-[10%] rounded-xl",alt:"프로필 사진",image:t})):null),l.createElement(p,{title:"Education"},l.createElement(g,{content:"부산대학교 정보컴퓨터공학부",description:"2018.03. ~ 2024.08."},l.createElement("p",{className:x},"학점: 4.00 / 4.5")),l.createElement(g,{content:"카카오 테크 캠퍼스 1기",description:"2023.04. ~ 2023.11."})),l.createElement(p,{title:"Awards"},l.createElement(g,{content:"카카오 테크 캠퍼스 신규 서비스 개발 프로젝트 - 대상",description:"2023.11.17."}),l.createElement(g,{content:"제 1회 PNU Coding Challenge - 우수상",description:"2023.12.20."}),l.createElement(g,{content:"2023년 TOPCIT 성적우수자 - 한국정보산업연합회장상",description:"2023.12.22."})),l.createElement(p,{title:"Certificate"},l.createElement(g,{content:"TOPCIT - 수준 3(608점)",description:"2023.05.20."}),l.createElement(g,{content:"PCCP - Python level 3(700점)",description:"2023.12.03."}),l.createElement(g,{content:"TOEIC - 830점",description:"2023.12.10."}))))}var h=n(4856),v=n(3089);function y(){const e=(0,c.useStaticQuery)("1694726442").allMdx.nodes;return l.createElement(f,{title:"Project"},l.createElement("div",{className:"grid grid-cols-3 max-lg:grid-cols-2 py-5 max-md:grid-cols-1 mx-20 max-2xl:mx-10 max-md:mx-0 gap-x-3 gap-y-10"},e.map((e=>{const t=(0,a.c)(e.frontmatter.image);return l.createElement(c.Link,{key:e.id,to:"/projects/"+e.frontmatter.slug,className:"relative w-full h-full bg-gradient-to-bl to-gray-300 from-gray-100 drop-shadow-lg flex items-center justify-center group"},t?l.createElement(a.G,{alt:e.frontmatter.title+" 대표 이미지",loading:"eager",image:t,className:"max-h-full group-hover:scale-90 transition-all duration-500",objectFit:"contain"}):null)}))),l.createElement(v.P,{to:"/projects/#Sub_Project",className:"\n        flex justify-center items-center rounded-full\n        text-lg max-md:text-base\n        h-14 max-2xl:h-12 max-md:h-10 \n        mx-20 my-10 max-2xl:mx-10 max-md:mx-0\n        drop-shadow text-white bg-main-theme hover:bg-main-theme-70 transition-all\n        ",stripHash:!0},"View More"))}var j=n(6657);var N=()=>l.createElement(h.Z,null,l.createElement(i,null),l.createElement(b,null),l.createElement(y,null));const k=()=>l.createElement(j.Z,null)}}]);
//# sourceMappingURL=component---src-pages-index-tsx-eaa2943191cb195863ea.js.map