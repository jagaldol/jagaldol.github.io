"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[921],{7152:function(e,t,l){l.r(t),l.d(t,{Head:function(){return x},default:function(){return h}});var n=l(1151),a=l(7294),r=l(1884),c=l(7863),m=l(9016);function s(e){const t=Object.assign({p:"p",strong:"strong",span:"span",blockquote:"blockquote",img:"img",h2:"h2",ul:"ul",li:"li"},(0,n.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.p,null,"임베디드 시스템 과목에서 ",a.createElement(t.strong,null,"2인 팀으로 진행한 Term Project"),"입니다."),"\n",a.createElement(t.p,null,"금연구역으로 지정된 장소에서 흡연을 하는 사람들이 종종 발견됩니다. 하지만 흡연 장소의 특성상 지속적인 단속이 시행되기 어렵기 때문에 방지가 어렵습니다. Smoke Detector는 ",a.createElement(t.strong,null,"흡연을 자동으로 감지하고 경보음을 울립니다"),". 이를 통해 금연구역에서의 흡연을 지양시키고 흡연자가 자발적으로 금연구역을 준수하는 걸 목표로 합니다."),"\n",a.createElement(t.p,null,"임베디드 보드 ",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">NUCLEO-F429ZI</code>'}}),"와 ",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">연기 감지 센서</code>'}}),"를 활용하여 프로젝트를 진행하었습니다. 일정 간격으로 ",a.createElement(t.strong,null,"센서의 값을 읽고 ",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">messageQueue</code>'}}),"를 통해 값을 다른 ",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">process</code>'}}),"로 전달"),"합니다. 전달받은 값을 처리하여 흡연이 감지되면 부저를 울립니다."),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"0.5초 간격으로 연기를 감지하여 5초간 연기가 감지될 시 경고음이 울립니다."),"\n"),"\n",a.createElement(r.Z,null,a.createElement(t.img,{src:"https://img.shields.io/badge/STM32-03234B?style=for-the-badge&logo=stmicroelectronics&logoColor=white",alt:"STM 32"}),"\n",a.createElement(t.img,{src:"https://img.shields.io/badge/c-A8B9CC?style=for-the-badge&logo=c&logoColor=white",alt:"C"})),"\n",a.createElement(t.h2,null,"🎞️ Demo"),"\n",a.createElement("div",{align:"center"},a.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/fxReEu6GE9A?si=RBYjzvBFZJgO17gR",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})),"\n",a.createElement(t.h2,null,"💭️️ 흐름도"),"\n",a.createElement("div",{align:"center"},a.createElement("div",{className:"xl:w-[1000px]"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1300px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/e253451221d6307525eb052c6b6f51e7/d1882/DFD.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 54.15384615384615%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAABLUlEQVR42o2SC4uDMBCE/f8/UQuKttZn1Vrf2j2+hS16cuUCIZqdzM5M4sg/xrZtEsexXK9XSZLkK9YBzFzX9bPJ9/v9PhCWZSlpmsrr9fpOmGWZ3G43qapKwc/nU+q6lrZtP6R936tC3/e1tm92IszzXKIoUgVFUSgxtvi2QSPU3e93QQCK/ySk2942amjCwXmeFdR1nTaAkMb7eE6E+x+ATdNoBKbE8jTl4zgeckYA8eCC2oFwmiZxXVcul4sEQaBKsYoqawIpObL/eDy0xkoNMc7v50HHMAz10LIsqoLJZWGZGGzPIuI54QD8iXAYBiVDrVljHzvWhD1WcwUZxOAOhEjHKk+EiT3AWMEaKrkccNRYwXmep+fAnBRymJCZZo9hyu3m91GQNY25lB8fk1V41ws2cwAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="flow diagram"\n        title=""\n        src="/static/e253451221d6307525eb052c6b6f51e7/3c492/DFD.png"\n        srcset="/static/e253451221d6307525eb052c6b6f51e7/ff46a/DFD.png 325w,\n/static/e253451221d6307525eb052c6b6f51e7/a6d36/DFD.png 650w,\n/static/e253451221d6307525eb052c6b6f51e7/3c492/DFD.png 1300w,\n/static/e253451221d6307525eb052c6b6f51e7/d1882/DFD.png 1562w"\n        sizes="(max-width: 1300px) 100vw, 1300px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}))),"\n",a.createElement(t.h2,null,"환경"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"Atollic TrueSTUDIO for STM32 9.3.0"),"\n",a.createElement(t.li,null,"개발보드 : NUCLEO-F429ZI"),"\n"),"\n",a.createElement(t.h2,null,"사용 센서 및 모듈"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"연기 감지 센서 ",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">MQ-2</code>'}})),"\n",a.createElement(t.li,null,"능동부저모듈 ",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">mh-fmd</code>'}})),"\n"),"\n",a.createElement(c.Z,null,a.createElement(m.Z,{members:[{imageSrc:"https://github.com/jagaldol.png",link:"https://github.com/jagaldol",name:"안혜준",description:"신호 처리 및 부저 동작 코드 작성"},{imageSrc:"https://github.com/gogumac.png",link:"https://github.com/gogumac",name:"김유빈",description:"센서 메시지 큐 전달 코드 작성"}]})))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?a.createElement(t,e,a.createElement(s,e)):s(e)},o=l(8032),u=l(4856),g=l(6657),d=l(3634),f=l(1852);function p(e){let{deploy_link:t}=e;const{0:l,1:n}=(0,a.useState)(!1),{0:r,1:c}=(0,a.useState)(!1),{0:m,1:s}=(0,a.useState)(!1),i=(0,a.useRef)(null),o=(0,a.useRef)(null),u=()=>{if(i.current){const e=i.current.getBoundingClientRect().top;s(e<=50)}};return(0,a.useEffect)((()=>{m&&(r||(c(!0),o.current&&clearTimeout(o.current),o.current=setTimeout((()=>{c(!1)}),1e3)))}),[m]),(0,a.useEffect)((()=>{const e=setTimeout((()=>{n(!0)}),1e3);return window.addEventListener("scroll",u),()=>{clearTimeout(e),window.removeEventListener("scroll",u),o.current&&clearTimeout(o.current)}}),[]),a.createElement("div",{ref:i,className:"absolute top-0 left-0 w-full h-full"},a.createElement("a",{href:t,className:"w-full h-full opacity-0 "+(r?"opacity-100":"")+" "+(l?"group-hover:opacity-100":"")+" bg-gradient-to-tl from-main-theme to-main-theme/60 z-10 transition-all duration-500 text-white flex drop-shadow-2xl"},a.createElement("h3",{className:"absolute right-0 bottom-0 text-3xl max-md:text-2xl max-sm:text-lg max-sm:-translate-y-3 -translate-x-8 -translate-y-5"},"바로가기")))}function E(e){let{data:t,children:l}=e;const{title:n,subtitle:r,stack:c,banner:m,start_date:s,end_date:i,deploy_link:g}=t.mdx.frontmatter,E=(0,o.c)(m),h=new Date(s),x=new Date(i),b=h.getFullYear()+"."+(h.getMonth()+1)+"."+h.getDate()+". ~ "+x.getFullYear()+"."+(x.getMonth()+1)+"."+x.getDate()+".",w=t.imagesHeight400.edges.map((e=>(0,o.c)(e.node))),y=t.imagesHeight200.edges.map((e=>(0,o.c)(e.node))),v=t.imagesHeight400.edges.map((e=>e.node.childImageSharp.original.src));return a.createElement(u.Z,null,a.createElement("div",{className:"mt-10 w-full flex justify-center"},a.createElement("div",{className:"w-[1300px] max-2xl:w-[1000px] max-xl:w-[1000px] max-lg:w-[700px] max-md:w-full"},a.createElement("div",{className:"mb-8"},a.createElement("h1",null,n),a.createElement("p",null,r),a.createElement("p",{className:"text-end"},b)),a.createElement("div",{className:"group relative mb-2"},E?a.createElement(a.Fragment,null,a.createElement(o.G,{alt:n+" 대표 이미지",loading:"eager",image:E,objectFit:"contain"}),g?a.createElement(p,{deploy_link:g}):null):null),a.createElement("div",{className:"flex gap-1 justify-end items-center flex-wrap"},c.map((e=>a.createElement("div",{className:"h-7",key:e},a.createElement(d.Z,{name:e}))))),w.length>0&&a.createElement(f.Z,{imageList400:w,imageList200:y,srcList:v}),a.createElement("div",{className:"markdown-body"},l))))}function h(e){return a.createElement(E,e,a.createElement(i,e))}const x=e=>{let{data:t}=e;return a.createElement(g.Z,{title:t.mdx.frontmatter.title,description:t.mdx.frontmatter.subtitle,pathname:"/projects/"+t.mdx.frontmatter.slug+"/",image:t.mdx.frontmatter.image.childImageSharp.original.src})}},1852:function(e,t,l){l.d(t,{Z:function(){return u}});var n=l(7294),a=l(8032),r=l(6467),c=l(9417),m=l(7814),s=l(2932);function i(e){let{srcList:t,number:l,close:a,toLeft:r,toRight:i}=e;const{lockScroll:o,openScroll:u}=(0,s.Z)();return(0,n.useEffect)((()=>(o(),()=>{u()})),[]),n.createElement("div",{className:"fixed z-[500] top-0 bottom-0 left-0 right-0 bg-black/80 flex justify-center"},n.createElement("div",{className:"w-[1400px] flex flex-col items-center justify-center"},n.createElement("div",{className:"flex w-full justify-end pr-10 max-md:pr-5"},n.createElement("button",{type:"button","aria-label":"닫기",onClick:a},n.createElement(m.G,{icon:c.g82,color:"white",size:"3x"}))),n.createElement("div",{className:"px-5 h-[80%] flex items-center",role:"presentation",onClick:e=>{const t=e.target,{width:l}=t.getBoundingClientRect(),{clientX:n}=e;n-t.offsetLeft<l/2?r():i()}},n.createElement("img",{src:t[l],alt:t[l],className:"max-w-full max-h-full flex-1 object-contain"})),n.createElement("div",{className:"flex items-center"},n.createElement("div",{className:"mx-7 max-lg:mx-4"},n.createElement("button",{type:"button","aria-label":"왼쪽 더보기",className:"bg-white rounded-full shadow-[0_1px_2px_0_rgba(0,0,0,0.3)] h-14 w-14 max-lg:h-10 max-lg:w-10 "+(l>0?"":"invisible"),onClick:r},n.createElement(m.G,{size:"lg",icon:c.EyR}))),n.createElement("p",{className:"text-white text-xl w-32 text-center"},l+1," / ",t.length),n.createElement("div",{className:"mx-7 max-lg:mx-4"},n.createElement("button",{type:"button","aria-label":"오른쪽 더보기",className:"bg-white rounded-full shadow-[0_1px_2px_0_rgba(0,0,0,0.3)] h-14 w-14 max-lg:h-10 max-lg:w-10 "+(l<t.length-1?"":"invisible"),onClick:i},n.createElement(m.G,{size:"lg",icon:c.yOZ}))))))}function o(e){let{imageList:t,onClickImage:l}=e;const s=(0,r.Gc)(),i=(0,n.useRef)(null),{0:o,1:u}=(0,n.useState)(!0),{0:g,1:d}=(0,n.useState)(!1),f=()=>{if(i.current){const{scrollLeft:e,scrollWidth:t,clientWidth:l}=i.current,n=e<=0;d(e+l>=t),u(n)}};return(0,n.useEffect)((()=>{const e=i.current;return e&&(e.addEventListener("scroll",f),f()),()=>{e&&e.removeEventListener("scroll",f)}}),[]),n.createElement(n.Fragment,null,!o&&n.createElement("div",{className:"absolute z-10 -left-7 max-lg:-left-4 top-0 bottom-0 flex items-center"},n.createElement("button",{type:"button","aria-label":"왼쪽 더보기",className:"bg-white rounded-full shadow-[0_1px_2px_0_rgba(0,0,0,0.3)] h-14 w-14 max-lg:h-10 max-lg:w-10",onClick:()=>{i.current&&i.current.scrollBy({left:s.lg?-350:-800,behavior:"smooth"})}},n.createElement(m.G,{size:"lg",icon:c.EyR}))),n.createElement("div",{className:"flex gap-5 overflow-x-scroll hide-scroll-bar",ref:i},t.map(((e,t)=>{var r;return n.createElement("button",{type:"button",onClick:()=>l(t),"aria-label":t+" 번째 이미지",key:(null===(r=e.images.fallback)||void 0===r?void 0:r.src)||"image-"+t},n.createElement(a.G,{alt:t+" 번째 이미지",image:e,className:"rounded-xl h-full min-w-max hover:cursor-pointer",objectFit:"contain"}))}))),!g&&n.createElement("div",{className:"absolute z-10 -right-7 max-lg:-right-4 top-0 bottom-0 flex items-center"},n.createElement("button",{type:"button","aria-label":"오른쪽 더보기",className:"bg-white rounded-full shadow-[0_1px_2px_0_rgba(0,0,0,0.3)] h-14 w-14 max-lg:h-10 max-lg:w-10",onClick:()=>{i.current&&i.current.scrollBy({left:s.lg?350:800,behavior:"smooth"})}},n.createElement(m.G,{size:"lg",icon:c.yOZ}))))}function u(e){let{imageList400:t,imageList200:l,srcList:a}=e;const c=(0,r.Gc)(),{0:m,1:s}=(0,n.useState)(!1),{0:u,1:g}=(0,n.useState)(0),d=e=>{g(e),s(!0)};return n.createElement("div",{className:"flex justify-center my-10 bg-neutral-200 relative"},c.lg?n.createElement(o,{onClickImage:d,imageList:l}):n.createElement(o,{onClickImage:d,imageList:t}),m?n.createElement(i,{srcList:a,number:u,close:()=>s(!1),toLeft:()=>g(u-1<0?0:u-1),toRight:()=>g(u+1>a.length-1?a.length-1:u+1)}):null)}},7863:function(e,t,l){l.d(t,{Z:function(){return a}});var n=l(7294);function a(e){let{children:t}=e;return n.createElement(n.Fragment,null,n.createElement("h2",{className:"text-center"},"👥 팀원"),t)}},9016:function(e,t,l){l.d(t,{Z:function(){return c}});var n=l(7294);function a(e){let{children:t,link:l}=e;return l?n.createElement("a",{href:l},t):t}function r(e){let{member:t}=e;return n.createElement(n.Fragment,null,n.createElement("div",{className:"min-w-32 w-32 min-h-32 h-32 max-md:min-w-20 max-md:w-20 max-md:min-h-20 max-md:h-20 justify-self-end"},n.createElement(a,{link:t.link},t.imageSrc?n.createElement("img",{className:"rounded-full border-slate-300 border",src:t.imageSrc,alt:t.name+" 사진"}):n.createElement("div",{className:"w-full h-full rounded-full border-slate-300 border bg-white"}))),n.createElement("div",{className:"flex flex-col"},n.createElement("p",{className:"text-xl max-md:text-base font-semibold my-2"},t.name),n.createElement("p",{className:"!my-0"},t.description)))}function c(e){let{members:t}=e;return n.createElement("div",{className:"grid grid-cols-[1fr_2fr_1fr_2fr] max-lg:grid-cols-[1fr_2fr] items-center gap-5"},t.map((e=>n.createElement(r,{member:e,key:e.name+" "+e.description}))))}},1884:function(e,t,l){l.d(t,{Z:function(){return a}});var n=l(7294);function a(e){let{children:t}=e;return n.createElement(n.Fragment,null,n.createElement("h2",{className:"text-center"},"🔧 사용 기술"),n.createElement("div",{className:"flex w-full justify-center my-10"},n.createElement("div",{className:"flex justify-center flex-wrap gap-x-1 gap-y-3 w-[1000px] max-lg:w-[700px] max-md:w-full"},t)))}},1151:function(e,t,l){l.d(t,{ah:function(){return r}});var n=l(7294);const a=n.createContext({});function r(e){const t=n.useContext(a);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);
//# sourceMappingURL=component---src-templates-project-details-tsx-content-file-path-src-projects-minor-smoke-detector-mdx-2fd68d456da495cdd2c4.js.map