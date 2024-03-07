"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[131],{9238:function(e,t,l){l.r(t),l.d(t,{Head:function(){return E},default:function(){return b}});var n=l(1151),a=l(7294),r=l(1884),c=l(7863),m=l(9016);function s(e){const t=Object.assign({p:"p",strong:"strong",span:"span",img:"img",h2:"h2",ul:"ul",li:"li"},(0,n.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.p,null,"임베디드 시스템 설계 및 실험 과목에서 ",a.createElement(t.strong,null,"5인 팀으로 진행한 Term Project"),"입니다."),"\n",a.createElement(t.p,null,"기상알람시계의 목적은 사용자가 알람을 듣고 잠에서 깨어나게 하는 것입니다. 하지만 알람을 통해 한 번에 일어나지 못하고 ",a.createElement(t.strong,null,"여러 번의 알람을 통해 일어나는 사람들이 존재"),"합니다. 저희 팀은 이에 대한 원인이 침대에서의 손쉬운 알람 끄기라고 보았습니다. 이를 해결하기 위해 ",a.createElement(t.strong,null,"알람시계가 움직여 알람을 끄기 어렵게")," 하였습니다. 알람시계는 사람을 감지하는 순간 도망가기 시작합니다. 사용자는 알람을 끄기 위해 도망가는 알람을 따라잡아야 하고, 자연스럽게 침대에서 벗어나게 됩니다."),"\n",a.createElement(t.p,null,"알람은 켜져 있으면 짜증나고, 또한, 끄기가 귀찮아야 합니다. ",a.createElement(t.strong,null,"사람들은 짜증과 귀찮음 사이에서 고민하다 침대에서 벗어나게 될 것입니다.")),"\n",a.createElement(t.p,null,"임베디드 보드 ",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">STM32F107VCT6</code>'}}),"와 ",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">다양한 센서들</code>'}}),"을 활용하여 프로젝트를 진행하었습니다. 1000페이지에 달하는 보드에 대한 레퍼런스가 주어졌고, 이를 해석하여 보드의 사용법, 더 나아가 많은 센서들과의 연결을 하였습니다. 또한, ",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Critical Section</code>'}}),"을 통한 신호 전달로 각 센서들의 동작을 ",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">동기화</code>'}})," 할 수 있었습니다."),"\n",a.createElement(r.Z,null,a.createElement(t.img,{src:"https://img.shields.io/badge/STM32-03234B?style=for-the-badge&logo=stmicroelectronics&logoColor=white",alt:"STM 32"}),"\n",a.createElement(t.img,{src:"https://img.shields.io/badge/c-A8B9CC?style=for-the-badge&logo=c&logoColor=white",alt:"C"})),"\n",a.createElement(t.h2,null,"💭️️ 흐름도"),"\n",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 952px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/b2cba9b878563db1212036a3a89d6efe/7e4a6/flow-diagram.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 46.46153846153846%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA7klEQVR42o2SVwrEMAwFdf+DJiak965lBA/8s8sahFVHshLz7Kzr6nVde9u2Pk2TV1Xlfd9713Whj+PoTdNEDnpKKexhGLwsy/DZvu+OnOfp27ZFsCiKuI/jCCEOGF1513WFLZ1huI1JlmUJAJMQQH+ex+/7DhGQ+33fgHLIkQ6cmOGArKCeKBg+GrIGmmH/BOY7xMkegNIEIDD2RBNeA4DCr0B2gOAgYZ7neDJBYNg0EIxc/DyfiRFytQ5jIpIpFIAkErR4bIGAk0MNtcrXpKZOTIfoiwlIV6AUsoL8YFOTH9NXUxf9Juqs6YD/cz62qr4E1m4XmQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="flow diagram"\n        title=""\n        src="/static/b2cba9b878563db1212036a3a89d6efe/7e4a6/flow-diagram.png"\n        srcset="/static/b2cba9b878563db1212036a3a89d6efe/ff46a/flow-diagram.png 325w,\n/static/b2cba9b878563db1212036a3a89d6efe/a6d36/flow-diagram.png 650w,\n/static/b2cba9b878563db1212036a3a89d6efe/7e4a6/flow-diagram.png 952w"\n        sizes="(max-width: 952px) 100vw, 952px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",a.createElement(t.h2,null,"환경"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"IAR Embedded Workbench for Arm 9.30.1"),"\n",a.createElement(t.li,null,"개발보드 : ",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">STM32F107VCT6</code>'}})),"\n"),"\n",a.createElement(t.h2,null,"사용 센서 및 모듈"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"리얼타임 클럭 모듈 ",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">SZH-EK047</code>'}})),"\n",a.createElement(t.li,null,"초음파 거리센서 모듈 ",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">HC-SR04</code>'}})),"\n",a.createElement(t.li,null,"인체감지센서모듈 HC-SR501 ",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">SZH-EK052</code>'}})),"\n",a.createElement(t.li,null,"Bluetooth 모듈 ",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">FB755AC</code>'}})),"\n",a.createElement(t.li,null,"알람 경보용 피에조 부저"),"\n",a.createElement(t.li,null,"TFT-LCD"),"\n"),"\n",a.createElement(c.Z,null,a.createElement(m.Z,{members:[{imageSrc:"https://github.com/jagaldol.png",link:"https://github.com/jagaldol",name:"안혜준",description:"초음파 거리 센서 모듈 담당"},{imageSrc:"https://github.com/fkthfvk112.png",link:"https://github.com/fkthfvk112",name:"정진성",description:"bluetooth 모듈 담당"},{imageSrc:"https://github.com/icarus012832.png",link:"https://github.com/icarus012832",name:"박진영",description:"인체 감지 센서 담당"},{imageSrc:"https://github.com/limiabc.png",link:"https://github.com/limiabc",name:"한병정",description:"리얼타임 클럭 모듈 담당"},{imageSrc:"https://github.com/mia2583.png",link:"https://github.com/mia2583",name:"김명서",description:"납땜 및 회로 연결 담당"}]})))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?a.createElement(t,e,a.createElement(s,e)):s(e)},o=l(8032),u=l(4856),g=l(6657),d=l(3634),f=l(1852);function p(e){let{deploy_link:t}=e;const{0:l,1:n}=(0,a.useState)(!1),{0:r,1:c}=(0,a.useState)(!1),{0:m,1:s}=(0,a.useState)(!1),i=(0,a.useRef)(null),o=(0,a.useRef)(null),u=()=>{if(i.current){const e=i.current.getBoundingClientRect().top;s(e<=50)}};return(0,a.useEffect)((()=>{m&&(r||(c(!0),o.current&&clearTimeout(o.current),o.current=setTimeout((()=>{c(!1)}),1e3)))}),[m]),(0,a.useEffect)((()=>{const e=setTimeout((()=>{n(!0)}),1e3);return window.addEventListener("scroll",u),()=>{clearTimeout(e),window.removeEventListener("scroll",u),o.current&&clearTimeout(o.current)}}),[]),a.createElement("div",{ref:i,className:"absolute top-0 left-0 w-full h-full"},a.createElement("a",{href:t,className:"w-full h-full opacity-0 "+(r?"opacity-100":"")+" "+(l?"group-hover:opacity-100":"")+" bg-gradient-to-tl from-main-theme to-main-theme/60 z-10 transition-all duration-500 text-white flex drop-shadow-2xl"},a.createElement("h3",{className:"absolute right-0 bottom-0 text-3xl max-md:text-2xl max-sm:text-lg max-sm:-translate-y-3 -translate-x-8 -translate-y-5"},"바로가기")))}function h(e){let{data:t,children:l}=e;const{title:n,subtitle:r,stack:c,banner:m,start_date:s,end_date:i,deploy_link:g}=t.mdx.frontmatter,h=(0,o.c)(m),b=new Date(s),E=new Date(i),x=b.getFullYear()+"."+(b.getMonth()+1)+"."+b.getDate()+". ~ "+E.getFullYear()+"."+(E.getMonth()+1)+"."+E.getDate()+".",w=t.imagesHeight400.edges.map((e=>(0,o.c)(e.node))),y=t.imagesHeight200.edges.map((e=>(0,o.c)(e.node))),v=t.imagesHeight400.edges.map((e=>e.node.childImageSharp.original.src));return a.createElement(u.Z,null,a.createElement("div",{className:"mt-10 w-full flex justify-center"},a.createElement("div",{className:"w-[1300px] max-2xl:w-[1000px] max-xl:w-[1000px] max-lg:w-[700px] max-md:w-full"},a.createElement("div",{className:"mb-8"},a.createElement("h1",null,n),a.createElement("p",null,r),a.createElement("p",{className:"text-end"},x)),a.createElement("div",{className:"group relative mb-2"},h?a.createElement(a.Fragment,null,a.createElement(o.G,{alt:n+" 대표 이미지",loading:"eager",image:h,objectFit:"contain"}),g?a.createElement(p,{deploy_link:g}):null):null),a.createElement("div",{className:"flex gap-1 justify-end items-center flex-wrap"},c.map((e=>a.createElement("div",{className:"h-7",key:e},a.createElement(d.Z,{name:e}))))),a.createElement(f.Z,{imageList400:w,imageList200:y,srcList:v}),a.createElement("div",{className:"markdown-body"},l))))}function b(e){return a.createElement(h,e,a.createElement(i,e))}const E=e=>{let{data:t}=e;return a.createElement(g.Z,{title:t.mdx.frontmatter.title,description:t.mdx.frontmatter.subtitle,pathname:"/projects/"+t.mdx.frontmatter.slug+"/",image:"/og-image/"+t.mdx.frontmatter.slug+"/thumbnail.png"})}},1852:function(e,t,l){l.d(t,{Z:function(){return o}});var n=l(7294),a=l(8032),r=l(6467),c=l(9417),m=l(7814),s=l(2932);function i(e){let{srcList:t,number:l,close:a,toLeft:r,toRight:i}=e;const{lockScroll:o,openScroll:u}=(0,s.Z)();return(0,n.useEffect)((()=>(o(),()=>{u()})),[]),n.createElement("div",{className:"fixed z-[500] top-0 bottom-0 left-0 right-0 bg-black/80 flex justify-center"},n.createElement("div",{className:"w-[1400px] flex flex-col items-center justify-center"},n.createElement("div",{className:"flex w-full justify-end pr-10 max-md:pr-5"},n.createElement("button",{type:"button","aria-label":"닫기",onClick:a},n.createElement(m.G,{icon:c.g82,color:"white",size:"3x"}))),n.createElement("div",{className:"px-5 h-[80%] flex items-center"},n.createElement("img",{src:t[l],alt:t[l],className:"max-w-full max-h-full flex-1 object-contain"})),n.createElement("div",{className:"flex items-center"},n.createElement("div",{className:"mx-7 max-lg:mx-4"},n.createElement("button",{type:"button","aria-label":"왼쪽 더보기",className:"bg-white rounded-full shadow-[0_1px_2px_0_rgba(0,0,0,0.3)] h-14 w-14 max-lg:h-10 max-lg:w-10 "+(l>0?"":"invisible"),onClick:r},n.createElement(m.G,{size:"lg",icon:c.EyR}))),n.createElement("p",{className:"text-white text-xl w-32 text-center"},l+1," / ",t.length),n.createElement("div",{className:"mx-7 max-lg:mx-4"},n.createElement("button",{type:"button","aria-label":"오른쪽 더보기",className:"bg-white rounded-full shadow-[0_1px_2px_0_rgba(0,0,0,0.3)] h-14 w-14 max-lg:h-10 max-lg:w-10 "+(l<t.length-1?"":"invisible"),onClick:i},n.createElement(m.G,{size:"lg",icon:c.yOZ}))))))}function o(e){let{imageList400:t,imageList200:l,srcList:s}=e;const o=(0,r.Gc)(),{0:u,1:g}=(0,n.useState)(!0),{0:d,1:f}=(0,n.useState)(!1),{0:p,1:h}=(0,n.useState)(!1),{0:b,1:E}=(0,n.useState)(0),x=(0,n.useRef)(null),w=()=>{if(x.current){const{scrollLeft:e,scrollWidth:t,clientWidth:l}=x.current,n=e<=0;f(e+l>=t),g(n)}};return(0,n.useEffect)((()=>{const e=x.current;return e&&(e.addEventListener("scroll",w),w()),()=>{e&&e.removeEventListener("scroll",w)}}),[]),t.length>0?n.createElement(n.Fragment,null,n.createElement("div",{className:"flex justify-center my-10 bg-neutral-100 relative"},!u&&n.createElement("div",{className:"absolute z-10 -left-7 max-lg:-left-4 top-0 bottom-0 flex items-center"},n.createElement("button",{type:"button","aria-label":"왼쪽 더보기",className:"bg-white rounded-full shadow-[0_1px_2px_0_rgba(0,0,0,0.3)] h-14 w-14 max-lg:h-10 max-lg:w-10",onClick:()=>{x.current&&x.current.scrollBy({left:o.lg?-350:-800,behavior:"smooth"})}},n.createElement(m.G,{size:"lg",icon:c.EyR}))),n.createElement("div",{className:"flex gap-5 overflow-x-scroll hide-scroll-bar",ref:x},o.lg?l.map(((e,t)=>{var l;return n.createElement("button",{type:"button",onClick:()=>{E(t),h(!0)},"aria-label":t+" 번째 이미지",key:(null===(l=e.images.fallback)||void 0===l?void 0:l.src)||"image-"+t},n.createElement(a.G,{alt:t+" 번째 이미지",image:e,className:"rounded h-full min-w-max hover:cursor-pointer",objectFit:"contain",onClick:()=>{E(t),h(!0)}}))})):t.map(((e,t)=>{var l,r;return n.createElement("button",{type:"button",onClick:()=>{E(t),h(!0)},"aria-label":t+" 번째 이미지",key:(null===(l=e.images.fallback)||void 0===l?void 0:l.src)||"image-"+t},n.createElement(a.G,{alt:"",image:e,className:"rounded h-full min-w-max hover:cursor-pointer",objectFit:"contain",key:(null===(r=e.images.fallback)||void 0===r?void 0:r.src)||"image-"+t,onClick:()=>{E(t),h(!0)}}))}))),!d&&n.createElement("div",{className:"absolute z-10 -right-7 max-lg:-right-4 top-0 bottom-0 flex items-center"},n.createElement("button",{type:"button","aria-label":"오른쪽 더보기",className:"bg-white rounded-full shadow-[0_1px_2px_0_rgba(0,0,0,0.3)] h-14 w-14 max-lg:h-10 max-lg:w-10",onClick:()=>{x.current&&x.current.scrollBy({left:o.lg?350:800,behavior:"smooth"})}},n.createElement(m.G,{size:"lg",icon:c.yOZ})))),p?n.createElement(i,{srcList:s,number:b,close:()=>h(!1),toLeft:()=>E(b-1<0?0:b-1),toRight:()=>E(b+1>s.length-1?s.length-1:b+1)}):null):null}},7863:function(e,t,l){l.d(t,{Z:function(){return a}});var n=l(7294);function a(e){let{children:t}=e;return n.createElement(n.Fragment,null,n.createElement("h2",{className:"text-center"},"👥 팀원"),t)}},9016:function(e,t,l){l.d(t,{Z:function(){return c}});var n=l(7294);function a(e){let{children:t,link:l}=e;return l?n.createElement("a",{href:l},t):t}function r(e){let{member:t}=e;return n.createElement(n.Fragment,null,n.createElement("div",{className:"min-w-32 w-32 min-h-32 h-32 max-md:min-w-20 max-md:w-20 max-md:min-h-20 max-md:h-20 justify-self-end"},n.createElement(a,{link:t.link},t.imageSrc?n.createElement("img",{className:"rounded-full border-slate-300 border",src:t.imageSrc,alt:t.name+" 사진"}):n.createElement("div",{className:"w-full h-full rounded-full border-slate-300 border bg-white"}))),n.createElement("div",{className:"flex flex-col"},n.createElement("p",{className:"text-xl max-md:text-base font-semibold my-2"},t.name),n.createElement("p",{className:"!my-0"},t.description)))}function c(e){let{members:t}=e;return n.createElement("div",{className:"grid grid-cols-[1fr_2fr_1fr_2fr] max-lg:grid-cols-[1fr_2fr] items-center gap-5"},t.map((e=>n.createElement(r,{member:e,key:e.name+" "+e.description}))))}},1884:function(e,t,l){l.d(t,{Z:function(){return a}});var n=l(7294);function a(e){let{children:t}=e;return n.createElement(n.Fragment,null,n.createElement("h2",{className:"text-center"},"🔧 사용 기술"),n.createElement("div",{className:"flex w-full justify-center my-10"},n.createElement("div",{className:"flex justify-center flex-wrap gap-x-1 gap-y-3 w-[1000px] max-lg:w-[700px] max-md:w-full"},t)))}},1151:function(e,t,l){l.d(t,{ah:function(){return r}});var n=l(7294);const a=n.createContext({});function r(e){const t=n.useContext(a);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);
//# sourceMappingURL=component---src-templates-project-details-tsx-content-file-path-src-projects-minor-running-alarm-mdx-34914fe3cfdb15f36d84.js.map