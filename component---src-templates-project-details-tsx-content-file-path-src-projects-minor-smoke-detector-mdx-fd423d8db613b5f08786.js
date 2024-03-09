"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[921],{7152:function(e,t,n){n.r(t),n.d(t,{Head:function(){return b},default:function(){return h}});var l=n(1151),a=n(7294),r=n(1884),c=n(7863),m=n(9016);function s(e){const t=Object.assign({p:"p",strong:"strong",span:"span",blockquote:"blockquote",img:"img",h2:"h2",ul:"ul",li:"li"},(0,l.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.p,null,"임베디드 시스템 과목에서 ",a.createElement(t.strong,null,"2인 팀으로 진행한 Term Project"),"입니다."),"\n",a.createElement(t.p,null,"금연구역으로 지정된 장소에서 흡연을 하는 사람들이 종종 발견됩니다. 하지만 흡연 장소의 특성상 지속적인 단속이 시행되기 어렵기 때문에 방지가 어렵습니다. Smoke Detector는 ",a.createElement(t.strong,null,"흡연을 자동으로 감지하고 경보음을 울립니다"),". 이를 통해 금연구역에서의 흡연을 지양시키고 흡연자가 자발적으로 금연구역을 준수하는 걸 목표로 합니다."),"\n",a.createElement(t.p,null,"임베디드 보드 ",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">NUCLEO-F429ZI</code>'}}),"와 ",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">연기 감지 센서</code>'}}),"를 활용하여 프로젝트를 진행하었습니다. 일정 간격으로 ",a.createElement(t.strong,null,"센서의 값을 읽고 ",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">messageQueue</code>'}}),"를 통해 값을 다른 ",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">process</code>'}}),"로 전달"),"합니다. 전달받은 값을 처리하여 흡연이 감지되면 부저를 울립니다."),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"0.5초 간격으로 연기를 감지하여 5초간 연기가 감지될 시 경고음이 울립니다."),"\n"),"\n",a.createElement(r.Z,null,a.createElement(t.img,{src:"https://img.shields.io/badge/STM32-03234B?style=for-the-badge&logo=stmicroelectronics&logoColor=white",alt:"STM 32"}),"\n",a.createElement(t.img,{src:"https://img.shields.io/badge/c-A8B9CC?style=for-the-badge&logo=c&logoColor=white",alt:"C"})),"\n",a.createElement("div",{align:"center"},a.createElement(t.h2,null,"📋 최종 보고서 확인하기"),a.createElement("a",{href:"/files/텀프로젝트 보고서 smoke-detector.pdf"},"텀프로젝트 보고서 smoke-detector.pdf"),a.createElement(t.h2,null,"🎞️ Demo"),a.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/fxReEu6GE9A?si=RBYjzvBFZJgO17gR",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),a.createElement(t.h2,null,"💭️️ 흐름도"),a.createElement("div",{className:"xl:w-[1000px]"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1300px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/e253451221d6307525eb052c6b6f51e7/d1882/DFD.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 54.15384615384615%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAABLUlEQVR42o2SC4uDMBCE/f8/UQuKttZn1Vrf2j2+hS16cuUCIZqdzM5M4sg/xrZtEsexXK9XSZLkK9YBzFzX9bPJ9/v9PhCWZSlpmsrr9fpOmGWZ3G43qapKwc/nU+q6lrZtP6R936tC3/e1tm92IszzXKIoUgVFUSgxtvi2QSPU3e93QQCK/ySk2942amjCwXmeFdR1nTaAkMb7eE6E+x+ATdNoBKbE8jTl4zgeckYA8eCC2oFwmiZxXVcul4sEQaBKsYoqawIpObL/eDy0xkoNMc7v50HHMAz10LIsqoLJZWGZGGzPIuI54QD8iXAYBiVDrVljHzvWhD1WcwUZxOAOhEjHKk+EiT3AWMEaKrkccNRYwXmep+fAnBRymJCZZo9hyu3m91GQNY25lB8fk1V41ws2cwAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="flow diagram"\n        title=""\n        src="/static/e253451221d6307525eb052c6b6f51e7/3c492/DFD.png"\n        srcset="/static/e253451221d6307525eb052c6b6f51e7/ff46a/DFD.png 325w,\n/static/e253451221d6307525eb052c6b6f51e7/a6d36/DFD.png 650w,\n/static/e253451221d6307525eb052c6b6f51e7/3c492/DFD.png 1300w,\n/static/e253451221d6307525eb052c6b6f51e7/d1882/DFD.png 1562w"\n        sizes="(max-width: 1300px) 100vw, 1300px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}))),"\n",a.createElement(t.h2,null,"환경"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"Atollic TrueSTUDIO for STM32 9.3.0"),"\n",a.createElement(t.li,null,"개발보드 : NUCLEO-F429ZI"),"\n"),"\n",a.createElement(t.h2,null,"사용 센서 및 모듈"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"연기 감지 센서 ",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">MQ-2</code>'}})),"\n",a.createElement(t.li,null,"능동부저모듈 ",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">mh-fmd</code>'}})),"\n"),"\n",a.createElement(c.Z,null,a.createElement(m.Z,{members:[{imageSrc:"https://github.com/jagaldol.png",link:"https://github.com/jagaldol",name:"안혜준",description:"신호 처리 및 부저 동작 코드 작성"},{imageSrc:"https://github.com/gogumac.png",link:"https://github.com/gogumac",name:"김유빈",description:"센서 메시지 큐 전달 코드 작성"}]})))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(s,e)):s(e)},o=n(8032),u=n(4856),d=n(6657),g=n(3634),p=n(3187);function f(e){let{deploy_link:t}=e;const{0:n,1:l}=(0,a.useState)(!1),{0:r,1:c}=(0,a.useState)(!1),{0:m,1:s}=(0,a.useState)(!1),i=(0,a.useRef)(null),o=(0,a.useRef)(null),u=()=>{if(i.current){const e=i.current.getBoundingClientRect().top;s(e<=50)}};return(0,a.useEffect)((()=>{m&&(r||(c(!0),o.current&&clearTimeout(o.current),o.current=setTimeout((()=>{c(!1)}),1e3)))}),[m]),(0,a.useEffect)((()=>{const e=setTimeout((()=>{l(!0)}),1e3);return window.addEventListener("scroll",u),()=>{clearTimeout(e),window.removeEventListener("scroll",u),o.current&&clearTimeout(o.current)}}),[]),a.createElement("div",{ref:i,className:"absolute top-0 left-0 w-full h-full"},a.createElement("a",{href:t,className:"w-full h-full opacity-0 "+(r?"opacity-100":"")+" "+(n?"group-hover:opacity-100":"")+" bg-gradient-to-tl from-main-theme to-main-theme/60 z-10 transition-all duration-500 text-white flex drop-shadow-2xl"},a.createElement("h3",{className:"absolute right-0 bottom-0 text-3xl max-md:text-2xl max-sm:text-lg max-sm:-translate-y-3 -translate-x-8 -translate-y-5"},"바로가기")))}function E(e){let{data:t,children:n}=e;const{title:l,subtitle:r,stack:c,banner:m,start_date:s,end_date:i,deploy_link:d}=t.mdx.frontmatter,E=(0,o.c)(m),h=new Date(s),b=new Date(i),x=h.getFullYear()+"."+(h.getMonth()+1)+"."+h.getDate()+". ~ "+b.getFullYear()+"."+(b.getMonth()+1)+"."+b.getDate()+".",w=t.imageList.edges.map((e=>(0,o.c)(e.node))),y=t.imageList.edges.map((e=>e.node.childImageSharp.original.src));return a.createElement(u.Z,null,a.createElement("div",{className:"mt-10 w-full flex justify-center"},a.createElement("div",{className:"w-[1300px] max-2xl:w-[1000px] max-xl:w-[1000px] max-lg:w-[700px] max-md:w-full"},a.createElement("div",{className:"mb-8"},a.createElement("h1",null,l),a.createElement("p",null,r),a.createElement("p",{className:"text-end"},x)),a.createElement("div",{className:"group relative mb-2"},E?a.createElement(a.Fragment,null,a.createElement(o.G,{alt:l+" 대표 이미지",loading:"eager",image:E,objectFit:"contain"}),d?a.createElement(f,{deploy_link:d}):null):null),a.createElement("div",{className:"flex gap-1 justify-end items-center flex-wrap"},c.map((e=>a.createElement("div",{className:"h-7",key:e},a.createElement(g.Z,{name:e}))))),w.length>0&&a.createElement(p.Z,{imageList:w,srcList:y}),a.createElement("div",{className:"markdown-body"},n))))}function h(e){return a.createElement(E,e,a.createElement(i,e))}const b=e=>{let{data:t}=e;return a.createElement(d.Z,{title:t.mdx.frontmatter.title,description:t.mdx.frontmatter.subtitle,pathname:"/projects/"+t.mdx.frontmatter.slug+"/",image:t.mdx.frontmatter.image.childImageSharp.original.src})}},7863:function(e,t,n){n.d(t,{Z:function(){return a}});var l=n(7294);function a(e){let{children:t}=e;return l.createElement(l.Fragment,null,l.createElement("h2",{className:"text-center"},"👥 팀원"),t)}},9016:function(e,t,n){n.d(t,{Z:function(){return c}});var l=n(7294);function a(e){let{children:t,link:n}=e;return n?l.createElement("a",{href:n},t):t}function r(e){let{member:t}=e;return l.createElement(l.Fragment,null,l.createElement("div",{className:"min-w-32 w-32 min-h-32 h-32 max-md:min-w-20 max-md:w-20 max-md:min-h-20 max-md:h-20 justify-self-end"},l.createElement(a,{link:t.link},t.imageSrc?l.createElement("img",{className:"rounded-full border-slate-300 border",src:t.imageSrc,alt:t.name+" 사진"}):l.createElement("div",{className:"w-full h-full rounded-full border-slate-300 border bg-white"}))),l.createElement("div",{className:"flex flex-col"},l.createElement("p",{className:"text-xl max-md:text-base font-semibold my-2"},t.name),l.createElement("p",{className:"!my-0"},t.description)))}function c(e){let{members:t}=e;return l.createElement("div",{className:"grid grid-cols-[1fr_2fr_1fr_2fr] max-lg:grid-cols-[1fr_2fr] items-center gap-5"},t.map((e=>l.createElement(r,{member:e,key:e.name+" "+e.description}))))}},1884:function(e,t,n){n.d(t,{Z:function(){return a}});var l=n(7294);function a(e){let{children:t}=e;return l.createElement(l.Fragment,null,l.createElement("h2",{className:"text-center"},"🔧 사용 기술"),l.createElement("div",{className:"flex w-full justify-center my-10"},l.createElement("div",{className:"flex justify-center flex-wrap gap-x-1 gap-y-3 w-[1000px] max-lg:w-[700px] max-md:w-full"},t)))}}}]);
//# sourceMappingURL=component---src-templates-project-details-tsx-content-file-path-src-projects-minor-smoke-detector-mdx-fd423d8db613b5f08786.js.map