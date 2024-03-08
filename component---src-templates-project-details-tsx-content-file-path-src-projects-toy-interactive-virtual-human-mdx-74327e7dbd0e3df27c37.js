"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[858],{8039:function(e,t,l){l.r(t),l.d(t,{Head:function(){return h},default:function(){return f}});var n=l(1151),a=l(7294);function r(e){const t=Object.assign({p:"p",span:"span",blockquote:"blockquote",a:"a",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,n.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.p,null,"Unity 3D engine으로 만든 대화형 가상인간입니다. 사용자의 음성을 인식하여, 명령 ",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">keyword</code>'}}),"가 존재하는지 분석 후 ",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">keyword</code>'}}),"에 따라 알맞은 대답을 합니다. TTS 음성은 네이버 ",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">CLOVA</code>'}}),"에서 제공하는 음성을 사용하였습니다."),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"2023년 부산대학교 정보컴퓨터공학부 연구실 인턴(공학연구실습I)의 일부입니다."),"\n",a.createElement(t.p,null,a.createElement(t.a,{href:"https://jagaldol.com/projects/lab-internship/"},"나머지 확인하기")),"\n"),"\n",a.createElement("div",{align:"center"},a.createElement(t.h2,null,"🎞️ Demo"),a.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/gl_M_BhP3dU?si=BIqsDZoXWH_aqM4g",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),a.createElement(t.h2,null,"🔊 명령어"),a.createElement(t.table,null,a.createElement(t.thead,null,a.createElement(t.tr,null,a.createElement(t.th,{align:"center"},"keyword"),a.createElement(t.th,{align:"center"},"output"))),a.createElement(t.tbody,null,a.createElement(t.tr,null,a.createElement(t.td,{align:"center"},'"안녕"'),a.createElement(t.td,{align:"center"},'"안녕하세요."')),a.createElement(t.tr,null,a.createElement(t.td,{align:"center"},'"이름"'),a.createElement(t.td,{align:"center"},'"제 이름은 유나입니다."')),a.createElement(t.tr,null,a.createElement(t.td,{align:"center"},'"춤"'),a.createElement(t.td,{align:"center"},'"춤을 추겠습니다" (춤을 추기 시작)'))))))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?a.createElement(t,e,a.createElement(r,e)):r(e)},m=l(8032),o=l(4856),i=l(6657),s=l(3634),u=l(1852);function d(e){let{deploy_link:t}=e;const{0:l,1:n}=(0,a.useState)(!1),{0:r,1:c}=(0,a.useState)(!1),{0:m,1:o}=(0,a.useState)(!1),i=(0,a.useRef)(null),s=(0,a.useRef)(null),u=()=>{if(i.current){const e=i.current.getBoundingClientRect().top;o(e<=50)}};return(0,a.useEffect)((()=>{m&&(r||(c(!0),s.current&&clearTimeout(s.current),s.current=setTimeout((()=>{c(!1)}),1e3)))}),[m]),(0,a.useEffect)((()=>{const e=setTimeout((()=>{n(!0)}),1e3);return window.addEventListener("scroll",u),()=>{clearTimeout(e),window.removeEventListener("scroll",u),s.current&&clearTimeout(s.current)}}),[]),a.createElement("div",{ref:i,className:"absolute top-0 left-0 w-full h-full"},a.createElement("a",{href:t,className:"w-full h-full opacity-0 "+(r?"opacity-100":"")+" "+(l?"group-hover:opacity-100":"")+" bg-gradient-to-tl from-main-theme to-main-theme/60 z-10 transition-all duration-500 text-white flex drop-shadow-2xl"},a.createElement("h3",{className:"absolute right-0 bottom-0 text-3xl max-md:text-2xl max-sm:text-lg max-sm:-translate-y-3 -translate-x-8 -translate-y-5"},"바로가기")))}function g(e){let{data:t,children:l}=e;const{title:n,subtitle:r,stack:c,banner:i,start_date:g,end_date:f,deploy_link:h}=t.mdx.frontmatter,E=(0,m.c)(i),p=new Date(g),x=new Date(f),b=p.getFullYear()+"."+(p.getMonth()+1)+"."+p.getDate()+". ~ "+x.getFullYear()+"."+(x.getMonth()+1)+"."+x.getDate()+".",w=t.imagesHeight400.edges.map((e=>(0,m.c)(e.node))),y=t.imagesHeight200.edges.map((e=>(0,m.c)(e.node))),v=t.imagesHeight400.edges.map((e=>e.node.childImageSharp.original.src));return a.createElement(o.Z,null,a.createElement("div",{className:"mt-10 w-full flex justify-center"},a.createElement("div",{className:"w-[1300px] max-2xl:w-[1000px] max-xl:w-[1000px] max-lg:w-[700px] max-md:w-full"},a.createElement("div",{className:"mb-8"},a.createElement("h1",null,n),a.createElement("p",null,r),a.createElement("p",{className:"text-end"},b)),a.createElement("div",{className:"group relative mb-2"},E?a.createElement(a.Fragment,null,a.createElement(m.G,{alt:n+" 대표 이미지",loading:"eager",image:E,objectFit:"contain"}),h?a.createElement(d,{deploy_link:h}):null):null),a.createElement("div",{className:"flex gap-1 justify-end items-center flex-wrap"},c.map((e=>a.createElement("div",{className:"h-7",key:e},a.createElement(s.Z,{name:e}))))),w.length>0&&a.createElement(u.Z,{imageList400:w,imageList200:y,srcList:v}),a.createElement("div",{className:"markdown-body"},l))))}function f(e){return a.createElement(g,e,a.createElement(c,e))}const h=e=>{let{data:t}=e;return a.createElement(i.Z,{title:t.mdx.frontmatter.title,description:t.mdx.frontmatter.subtitle,pathname:"/projects/"+t.mdx.frontmatter.slug+"/",image:t.mdx.frontmatter.image.childImageSharp.original.src})}},1852:function(e,t,l){l.d(t,{Z:function(){return u}});var n=l(7294),a=l(8032),r=l(6467),c=l(9417),m=l(7814),o=l(2932);function i(e){let{srcList:t,number:l,close:a,toLeft:r,toRight:i}=e;const{lockScroll:s,openScroll:u}=(0,o.Z)();return(0,n.useEffect)((()=>(s(),()=>{u()})),[]),n.createElement("div",{className:"fixed z-[500] top-0 bottom-0 left-0 right-0 bg-black/80 flex justify-center"},n.createElement("div",{className:"w-[1400px] flex flex-col items-center justify-center"},n.createElement("div",{className:"flex w-full justify-end pr-10 max-md:pr-5"},n.createElement("button",{type:"button","aria-label":"닫기",onClick:a},n.createElement(m.G,{icon:c.g82,color:"white",size:"3x"}))),n.createElement("div",{className:"px-5 h-[80%] flex items-center",onClick:e=>{const t=e.target,{width:l}=t.getBoundingClientRect(),{clientX:n}=e;n-t.offsetLeft<l/2?r():i()}},n.createElement("img",{src:t[l],alt:t[l],className:"max-w-full max-h-full flex-1 object-contain"})),n.createElement("div",{className:"flex items-center"},n.createElement("div",{className:"mx-7 max-lg:mx-4"},n.createElement("button",{type:"button","aria-label":"왼쪽 더보기",className:"bg-white rounded-full shadow-[0_1px_2px_0_rgba(0,0,0,0.3)] h-14 w-14 max-lg:h-10 max-lg:w-10 "+(l>0?"":"invisible"),onClick:r},n.createElement(m.G,{size:"lg",icon:c.EyR}))),n.createElement("p",{className:"text-white text-xl w-32 text-center"},l+1," / ",t.length),n.createElement("div",{className:"mx-7 max-lg:mx-4"},n.createElement("button",{type:"button","aria-label":"오른쪽 더보기",className:"bg-white rounded-full shadow-[0_1px_2px_0_rgba(0,0,0,0.3)] h-14 w-14 max-lg:h-10 max-lg:w-10 "+(l<t.length-1?"":"invisible"),onClick:i},n.createElement(m.G,{size:"lg",icon:c.yOZ}))))))}function s(e){let{imageList:t,onClickImage:l}=e;const o=(0,r.Gc)(),i=(0,n.useRef)(null),{0:s,1:u}=(0,n.useState)(!0),{0:d,1:g}=(0,n.useState)(!1),f=()=>{if(i.current){const{scrollLeft:e,scrollWidth:t,clientWidth:l}=i.current;console.log({scrollLeft:e,scrollWidth:t,clientWidth:l});const n=e<=0;g(e+l>=t),u(n)}};return(0,n.useEffect)((()=>{const e=i.current;return e&&(e.addEventListener("scroll",f),f()),()=>{e&&e.removeEventListener("scroll",f)}}),[]),n.createElement(n.Fragment,null,!s&&n.createElement("div",{className:"absolute z-10 -left-7 max-lg:-left-4 top-0 bottom-0 flex items-center"},n.createElement("button",{type:"button","aria-label":"왼쪽 더보기",className:"bg-white rounded-full shadow-[0_1px_2px_0_rgba(0,0,0,0.3)] h-14 w-14 max-lg:h-10 max-lg:w-10",onClick:()=>{i.current&&i.current.scrollBy({left:o.lg?-350:-800,behavior:"smooth"})}},n.createElement(m.G,{size:"lg",icon:c.EyR}))),n.createElement("div",{className:"flex gap-5 overflow-x-scroll hide-scroll-bar",ref:i},t.map(((e,t)=>{var r;return n.createElement("button",{type:"button",onClick:()=>l(t),"aria-label":t+" 번째 이미지",key:(null===(r=e.images.fallback)||void 0===r?void 0:r.src)||"image-"+t},n.createElement(a.G,{alt:t+" 번째 이미지",image:e,className:"rounded-xl h-full min-w-max hover:cursor-pointer",objectFit:"contain"}))}))),!d&&n.createElement("div",{className:"absolute z-10 -right-7 max-lg:-right-4 top-0 bottom-0 flex items-center"},n.createElement("button",{type:"button","aria-label":"오른쪽 더보기",className:"bg-white rounded-full shadow-[0_1px_2px_0_rgba(0,0,0,0.3)] h-14 w-14 max-lg:h-10 max-lg:w-10",onClick:()=>{i.current&&i.current.scrollBy({left:o.lg?350:800,behavior:"smooth"})}},n.createElement(m.G,{size:"lg",icon:c.yOZ}))))}function u(e){let{imageList400:t,imageList200:l,srcList:a}=e;const c=(0,r.Gc)(),{0:m,1:o}=(0,n.useState)(!1),{0:u,1:d}=(0,n.useState)(0),g=e=>{d(e),o(!0)};return n.createElement("div",{className:"flex justify-center my-10 bg-neutral-200 relative"},c.lg?n.createElement(s,{onClickImage:g,imageList:l}):n.createElement(s,{onClickImage:g,imageList:t}),m?n.createElement(i,{srcList:a,number:u,close:()=>o(!1),toLeft:()=>d(u-1<0?0:u-1),toRight:()=>d(u+1>a.length-1?a.length-1:u+1)}):null)}},1151:function(e,t,l){l.d(t,{ah:function(){return r}});var n=l(7294);const a=n.createContext({});function r(e){const t=n.useContext(a);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);
//# sourceMappingURL=component---src-templates-project-details-tsx-content-file-path-src-projects-toy-interactive-virtual-human-mdx-74327e7dbd0e3df27c37.js.map