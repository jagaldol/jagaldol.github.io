"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[42],{3908:function(e,t,n){n.r(t),n.d(t,{Head:function(){return E},default:function(){return h}});var a=n(1151),l=n(7294),r=n(1884),c=n(7863),m=n(9016);function s(e){const t=Object.assign({p:"p",strong:"strong",span:"span",img:"img",h2:"h2",ul:"ul",li:"li"},(0,a.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.p,null,"임베디드 시스템 설계 및 실험 과목에서 ",l.createElement(t.strong,null,"5인 팀으로 진행한 Term Project"),"입니다."),"\n",l.createElement(t.p,null,"기상알람시계의 목적은 사용자가 알람을 듣고 잠에서 깨어나게 하는 것입니다. 하지만 알람을 통해 한 번에 일어나지 못하고 ",l.createElement(t.strong,null,"여러 번의 알람을 통해 일어나는 사람들이 존재"),"합니다. 저희 팀은 이에 대한 원인이 침대에서의 손쉬운 알람 끄기라고 보았습니다. 이를 해결하기 위해 ",l.createElement(t.strong,null,"알람시계가 움직여 알람을 끄기 어렵게")," 하였습니다. 알람시계는 사람을 감지하는 순간 도망가기 시작합니다. 사용자는 알람을 끄기 위해 도망가는 알람을 따라잡아야 하고, 자연스럽게 침대에서 벗어나게 됩니다."),"\n",l.createElement(t.p,null,"알람은 켜져 있으면 짜증나고, 또한, 끄기가 귀찮아야 합니다. ",l.createElement(t.strong,null,"사람들은 짜증과 귀찮음 사이에서 고민하다 침대에서 벗어나게 될 것입니다.")),"\n",l.createElement(t.p,null,"임베디드 보드 ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">STM32F107VCT6</code>'}}),"와 ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">다양한 센서들</code>'}}),"을 활용하여 프로젝트를 진행하었습니다. 1000페이지에 달하는 보드에 대한 레퍼런스가 주어졌고, 이를 해석하여 보드의 사용법, 더 나아가 많은 센서들과의 연결을 하였습니다. 또한, ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Critical Section</code>'}}),"을 통한 신호 전달로 각 센서들의 동작을 ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">동기화</code>'}})," 할 수 있었습니다."),"\n",l.createElement(r.Z,null,l.createElement(t.img,{src:"https://img.shields.io/badge/STM32-03234B?style=for-the-badge&logo=stmicroelectronics&logoColor=white",alt:"STM 32"}),"\n",l.createElement(t.img,{src:"https://img.shields.io/badge/c-A8B9CC?style=for-the-badge&logo=c&logoColor=white",alt:"C"})),"\n",l.createElement(t.h2,null,"💭️️ 흐름도"),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 952px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/b2cba9b878563db1212036a3a89d6efe/7e4a6/flow-diagram.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 46.46153846153846%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA7klEQVR42o2SVwrEMAwFdf+DJiak965lBA/8s8sahFVHshLz7Kzr6nVde9u2Pk2TV1Xlfd9713Whj+PoTdNEDnpKKexhGLwsy/DZvu+OnOfp27ZFsCiKuI/jCCEOGF1513WFLZ1huI1JlmUJAJMQQH+ex+/7DhGQ+33fgHLIkQ6cmOGArKCeKBg+GrIGmmH/BOY7xMkegNIEIDD2RBNeA4DCr0B2gOAgYZ7neDJBYNg0EIxc/DyfiRFytQ5jIpIpFIAkErR4bIGAk0MNtcrXpKZOTIfoiwlIV6AUsoL8YFOTH9NXUxf9Juqs6YD/cz62qr4E1m4XmQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="flow diagram"\n        title=""\n        src="/static/b2cba9b878563db1212036a3a89d6efe/7e4a6/flow-diagram.png"\n        srcset="/static/b2cba9b878563db1212036a3a89d6efe/ff46a/flow-diagram.png 325w,\n/static/b2cba9b878563db1212036a3a89d6efe/a6d36/flow-diagram.png 650w,\n/static/b2cba9b878563db1212036a3a89d6efe/7e4a6/flow-diagram.png 952w"\n        sizes="(max-width: 952px) 100vw, 952px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",l.createElement(t.h2,null,"환경"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"IAR Embedded Workbench for Arm 9.30.1"),"\n",l.createElement(t.li,null,"개발보드 : ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">STM32F107VCT6</code>'}})),"\n"),"\n",l.createElement(t.h2,null,"사용 센서 및 모듈"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"리얼타임 클럭 모듈 ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">SZH-EK047</code>'}})),"\n",l.createElement(t.li,null,"초음파 거리센서 모듈 ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">HC-SR04</code>'}})),"\n",l.createElement(t.li,null,"인체감지센서모듈 HC-SR501 ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">SZH-EK052</code>'}})),"\n",l.createElement(t.li,null,"Bluetooth 모듈 ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">FB755AC</code>'}})),"\n",l.createElement(t.li,null,"알람 경보용 피에조 부저"),"\n",l.createElement(t.li,null,"TFT-LCD"),"\n"),"\n",l.createElement(c.Z,null,l.createElement(m.Z,{members:[{imageSrc:"https://github.com/jagaldol.png",link:"https://github.com/jagaldol",name:"안혜준",description:"초음파 거리 센서 모듈 담당"},{imageSrc:"https://github.com/fkthfvk112.png",link:"https://github.com/fkthfvk112",name:"정진성",description:"bluetooth 모듈 담당"},{imageSrc:"https://github.com/icarus012832.png",link:"https://github.com/icarus012832",name:"박진영",description:"인체 감지 센서 담당"},{imageSrc:"https://github.com/limiabc.png",link:"https://github.com/limiabc",name:"한병정",description:"리얼타임 클럭 모듈 담당"},{imageSrc:"https://github.com/mia2583.png",link:"https://github.com/mia2583",name:"김명서",description:"납땜 및 회로 연결 담당"}]})))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(s,e)):s(e)},o=n(8032),u=n(9116),g=n(3634),d=n(6657);function p(e){let{deploy_link:t}=e;const{0:n,1:a}=(0,l.useState)(!1),{0:r,1:c}=(0,l.useState)(!1),{0:m,1:s}=(0,l.useState)(!1),i=(0,l.useRef)(null),o=(0,l.useRef)(null),u=()=>{if(i.current){const e=i.current.getBoundingClientRect().top;s(e<=50)}};return(0,l.useEffect)((()=>{m&&(r||(c(!0),o.current&&clearTimeout(o.current),o.current=setTimeout((()=>{c(!1)}),1e3)))}),[m]),(0,l.useEffect)((()=>{const e=setTimeout((()=>{a(!0)}),1e3);return window.addEventListener("scroll",u),()=>{clearTimeout(e),window.removeEventListener("scroll",u),o.current&&clearTimeout(o.current)}}),[]),l.createElement("div",{ref:i,className:"absolute top-0 left-0 w-full h-full"},l.createElement("a",{href:t,className:"w-full h-full opacity-0 "+(r?"opacity-100":"")+" "+(n?"group-hover:opacity-100":"")+" bg-gradient-to-tl from-main-theme to-main-theme/60 z-10 transition-all duration-500 text-white flex drop-shadow-2xl"},l.createElement("h3",{className:"absolute right-0 bottom-0 text-3xl max-md:text-2xl max-sm:text-lg max-sm:-translate-y-3 -translate-x-8 -translate-y-5"},"바로가기")))}function f(e){let{data:t,children:n}=e;const{title:a,subtitle:r,stack:c,banner:m,start_date:s,end_date:i,deploy_link:d}=t.mdx.frontmatter,f=(0,o.c)(m),h=new Date(s),E=new Date(i),b=h.getFullYear()+"."+(h.getMonth()+1)+"."+h.getDate()+". ~ "+E.getFullYear()+"."+(E.getMonth()+1)+"."+E.getDate()+".";return l.createElement(u.Z,null,l.createElement("div",{className:"mt-10 w-full flex justify-center"},l.createElement("div",{className:"w-[1300px] max-2xl:w-[1000px] max-xl:w-[1000px] max-lg:w-[700px] max-md:w-full"},l.createElement("div",{className:"mb-8"},l.createElement("h1",null,a),l.createElement("p",null,r),l.createElement("p",{className:"text-end"},b)),l.createElement("div",{className:"group relative mb-2"},f?l.createElement(l.Fragment,null,l.createElement(o.G,{alt:a+" 대표 이미지",loading:"eager",image:f,objectFit:"contain"}),d?l.createElement(p,{deploy_link:d}):null):null),l.createElement("div",{className:"flex gap-1 justify-end items-center flex-wrap"},c.map((e=>l.createElement("div",{className:"h-7",key:e},l.createElement(g.Z,{name:e}))))),l.createElement("div",{className:"markdown-body"},n))))}function h(e){return l.createElement(f,e,l.createElement(i,e))}const E=e=>{let{data:t}=e;return l.createElement(d.Z,{title:t.mdx.frontmatter.title,description:t.mdx.frontmatter.subtitle,pathname:"/projects/"+t.mdx.frontmatter.slug+"/",image:"/og-image/"+t.mdx.frontmatter.slug+"/thumbnail.png"})}},7863:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294);function l(e){let{children:t}=e;return a.createElement(a.Fragment,null,a.createElement("h2",{className:"text-center"},"👥 팀원"),t)}},9016:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294);function l(e){let{children:t,link:n}=e;return n?a.createElement("a",{href:n},t):t}function r(e){let{member:t}=e;return a.createElement(a.Fragment,null,a.createElement("div",{className:"min-w-32 w-32 min-h-32 h-32 max-md:min-w-20 max-md:w-20 max-md:min-h-20 max-md:h-20 justify-self-end"},a.createElement(l,{link:t.link},t.imageSrc?a.createElement("img",{className:"rounded-full border-slate-300 border",src:t.imageSrc,alt:t.name+" 사진"}):a.createElement("div",{className:"w-full h-full rounded-full border-slate-300 border bg-white"}))),a.createElement("div",{className:"flex flex-col"},a.createElement("p",{className:"text-xl max-md:text-base font-semibold my-2"},t.name),a.createElement("p",{className:"!my-0"},t.description)))}function c(e){let{members:t}=e;return a.createElement("div",{className:"grid grid-cols-[1fr_2fr_1fr_2fr] max-lg:grid-cols-[1fr_2fr] items-center gap-5"},t.map((e=>a.createElement(r,{member:e,key:e.name+" "+e.description}))))}},1884:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294);function l(e){let{children:t}=e;return a.createElement(a.Fragment,null,a.createElement("h2",{className:"text-center"},"🔧 사용 기술"),a.createElement("div",{className:"flex w-full justify-center my-10"},a.createElement("div",{className:"flex justify-center flex-wrap gap-x-1 gap-y-3 w-[1000px] max-lg:w-[700px] max-md:w-full"},t)))}},1151:function(e,t,n){n.d(t,{ah:function(){return r}});var a=n(7294);const l=a.createContext({});function r(e){const t=a.useContext(l);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);
//# sourceMappingURL=component---src-templates-project-details-tsx-content-file-path-src-projects-etc-running-alarm-mdx-2df61f3a51efe7a56991.js.map