"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[611],{8151:function(e,t,l){l.r(t),l.d(t,{Head:function(){return b},default:function(){return h}});var n=l(1151),a=l(7294),r=l(1884),c=l(7863),s=l(9016);function m(e){const t=Object.assign({p:"p",a:"a",span:"span",strong:"strong",img:"img",h2:"h2",ul:"ul",li:"li"},(0,n.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.p,null,"부산대/경성대 2개 지점을 운영 중인 피아노 학원, ",a.createElement(t.a,{href:"https://pianotogether.co.kr"},"Piano Together"),"의 레슨 관리 시스템입니다."),"\n",a.createElement(t.p,null,"친구가 다니던 피아노 학원의 레슨 관리 시스템이 노후화되어 속도가 느리고, 불편하였습니다. 우리가 직접 새롭게 리뉴얼을 해보자 결심하였고, 친구와 개발 ",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">팀 orangement</code>'}}),"를 결성하여 개발을 시작하였습니다."),"\n",a.createElement(t.p,null,"레슨 매니저는 학원의 레슨 시간표를 관리할 수 있는 웹 어플리케이션입니다. ",a.createElement(t.strong,null,"수강생"),"은 자신의 아이디를 사용하여 ",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">레슨 시간표 조회</code>'}}),"/",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">레슨 예약</code>'}}),"/",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">레슨 취소</code>'}})," 등을 직접 할 수 있습니다. ",a.createElement(t.strong,null,"매니저/강사"),"는 추가로 수강생의 레슨을 대신 예약해줄 수 있으며, ",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">수강생 관리</code>'}}),"(등록/탈퇴, 검색, 상세정보 조회, 결재 내역 조회 및 환불, 안내 문자 전송 등), ",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">강사 관리</code>'}}),"(등록/퇴사 처리, 상세정보 조회, 담당학생 조회, 출근 시간표 관리 등), ",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">결제 정보 등록</code>'}}),"이 가능합니다."),"\n",a.createElement(t.p,null,"즉, 수강생에게는 웹을 통해 쉽게 학원의 ",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">레슨을 예약/조회</code>'}})," 할 수 있고, 매니저에게는 학원의 강사, 수강생, 결제 등 전체적인 ",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">학원 시스템을 일원화하여 관리</code>'}}),"할 수 있는 프로그램입니다."),"\n",a.createElement(t.p,null,"해당 프로젝트는 2인 팀으로 풀스택 개발자로 참여하였습니다. ",a.createElement(t.strong,null,"백엔드")," 쪽에서 맡은 부분은 ",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">database 설계</code>'}}),", ",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">관리자 전용 api 설계 및 구현</code>'}}),", ",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">문자 전송</code>'}}),"입니다. ",a.createElement(t.strong,null,"프론트")," 쪽에서는 ",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">수강생 관리 페이지</code>'}}),", ",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">강사 관리 페이지</code>'}})," 등을 맡았습니다."),"\n",a.createElement(t.p,null,"2개월 간의 개발 후, 실제 학원의 서비스로 연결시켰고 2주일의 추가 요구 기능 개발을 진행하였습니다. 2023년 5월 이후로 버그가 발생하지 않은 채 현재까지 정상적으로 서비스가 운영되고 있습니다."),"\n",a.createElement(r.Z,null,a.createElement(t.img,{src:"https://img.shields.io/badge/-React-222222?style=for-the-badge&logo=react",alt:"React"}),"\r\n",a.createElement(t.img,{src:"https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white",alt:"node.js"}),"\r\n",a.createElement(t.img,{src:"https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express",alt:"express.js"}),"\r\n",a.createElement(t.img,{src:"https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white",alt:"MySQL"}),"\r\n",a.createElement(t.img,{src:"https://img.shields.io/badge/Apache-C92037?style=for-the-badge&logo=apache&logoColor=white",alt:"apache"})),"\n",a.createElement(t.h2,null,"🗄️️ ERD"),"\n",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1300px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/58e15b6cfbef6110512ea739da421827/ba168/erd.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 48.61538461538462%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAA7DAAAOwwHHb6hkAAABb0lEQVR42n2SWXLCMBBEfZcQ7avtArxgSLj/mTo9IqQqJPDRpW3UmnmaThsDrSlzk/kZLaJ3yJHyFlbt2to532KeqfPOMNAgWA1vVBujv5k5/d6MbmfcZ6zTO3hnnxvmnLHME9Zlxjj0KCVj6Cszi208Hg64nDeauLYWs5eGkRfnZcG6rhjHsZXkqb5WHGi28GzbaOh9m+dSEGgevJSu/xremSmtyfIWIKNkPs0zTqcTtSGlzAeO6Puh8XVWeDqohz/onDWoiRnliBw85bgOjeFYE4aS0HN9Z5zINzGuyB1KuKYgn/YGx4w74bGtC67XT8zTEbUWTBw9DQ/7PbbTipWMI00q+Tpr0bPsj8uZmJbGfCUK4S/JdUppblbsebkwUBjKWsoJIbDU1JiKZC57ciZMQ4gwfCARjyCS/W4osbVHYDmGXApLn/bjd+uwFGt+sX2ci5RSTe1TEvnUKCykB1VrYmEzZGZAHPpFE//XNl+Zvy/No8CKUAAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="ER Diagram"\n        title=""\n        src="/static/58e15b6cfbef6110512ea739da421827/3c492/erd.png"\n        srcset="/static/58e15b6cfbef6110512ea739da421827/ff46a/erd.png 325w,\n/static/58e15b6cfbef6110512ea739da421827/a6d36/erd.png 650w,\n/static/58e15b6cfbef6110512ea739da421827/3c492/erd.png 1300w,\n/static/58e15b6cfbef6110512ea739da421827/d544a/erd.png 1950w,\n/static/58e15b6cfbef6110512ea739da421827/d2433/erd.png 2600w,\n/static/58e15b6cfbef6110512ea739da421827/ba168/erd.png 2644w"\n        sizes="(max-width: 1300px) 100vw, 1300px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",a.createElement(t.h2,null,"🗒️ 주요 기능"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"수강생"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"레슨 시간표 조회 및 예약/취소"),"\n",a.createElement(t.li,null,"본인 레슨 목록 조회"),"\n",a.createElement(t.li,null,"잔여 레슨 횟수 조회"),"\n",a.createElement(t.li,null,"개인 정보 변경"),"\n"),"\n"),"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"매니저/강사"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"레슨 시간표 조회 및 강제 예약/취소"),"\n",a.createElement(t.li,null,"수강생 관리"),"\n",a.createElement(t.li,null,"수강생 등록/탈퇴"),"\n",a.createElement(t.li,null,"수강생 검색 및 필터"),"\n",a.createElement(t.li,null,"수강생 상세정보 조회"),"\n",a.createElement(t.li,null,"결제 내역 조회 및 환불"),"\n",a.createElement(t.li,null,"안내 문자 전송(레슨 알림, 재등록 알림)"),"\n",a.createElement(t.li,null,"강사 관리"),"\n",a.createElement(t.li,null,"강사 등록/퇴사"),"\n",a.createElement(t.li,null,"강사 상세정보 조회"),"\n",a.createElement(t.li,null,"강사 별 담당 학생 조회"),"\n",a.createElement(t.li,null,"강사 출근 시간표 관리"),"\n",a.createElement(t.li,null,"결제 정보 등록"),"\n"),"\n"),"\n"),"\n",a.createElement(c.Z,null,a.createElement(s.Z,{members:[{imageSrc:"https://github.com/jagaldol.png",link:"https://github.com/jagaldol",name:"안혜준",description:"강사/수강생 관리 담당"},{imageSrc:"https://github.com/cla6shade.png",link:"https://github.com/cla6shade",name:"이세형",description:"레슨 예약 담당"}]})))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?a.createElement(t,e,a.createElement(m,e)):m(e)},o=l(8032),u=l(4856),g=l(6657),d=l(3634),p=l(1852);function f(e){let{deploy_link:t}=e;const{0:l,1:n}=(0,a.useState)(!1),{0:r,1:c}=(0,a.useState)(!1),{0:s,1:m}=(0,a.useState)(!1),i=(0,a.useRef)(null),o=(0,a.useRef)(null),u=()=>{if(i.current){const e=i.current.getBoundingClientRect().top;m(e<=50)}};return(0,a.useEffect)((()=>{s&&(r||(c(!0),o.current&&clearTimeout(o.current),o.current=setTimeout((()=>{c(!1)}),1e3)))}),[s]),(0,a.useEffect)((()=>{const e=setTimeout((()=>{n(!0)}),1e3);return window.addEventListener("scroll",u),()=>{clearTimeout(e),window.removeEventListener("scroll",u),o.current&&clearTimeout(o.current)}}),[]),a.createElement("div",{ref:i,className:"absolute top-0 left-0 w-full h-full"},a.createElement("a",{href:t,className:"w-full h-full opacity-0 "+(r?"opacity-100":"")+" "+(l?"group-hover:opacity-100":"")+" bg-gradient-to-tl from-main-theme to-main-theme/60 z-10 transition-all duration-500 text-white flex drop-shadow-2xl"},a.createElement("h3",{className:"absolute right-0 bottom-0 text-3xl max-md:text-2xl max-sm:text-lg max-sm:-translate-y-3 -translate-x-8 -translate-y-5"},"바로가기")))}function E(e){let{data:t,children:l}=e;const{title:n,subtitle:r,stack:c,banner:s,start_date:m,end_date:i,deploy_link:g}=t.mdx.frontmatter,E=(0,o.c)(s),h=new Date(m),b=new Date(i),x=h.getFullYear()+"."+(h.getMonth()+1)+"."+h.getDate()+". ~ "+b.getFullYear()+"."+(b.getMonth()+1)+"."+b.getDate()+".",y=t.imagesHeight400.edges.map((e=>(0,o.c)(e.node))),w=t.imagesHeight200.edges.map((e=>(0,o.c)(e.node))),v=t.imagesHeight400.edges.map((e=>e.node.childImageSharp.original.src));return a.createElement(u.Z,null,a.createElement("div",{className:"mt-10 w-full flex justify-center"},a.createElement("div",{className:"w-[1300px] max-2xl:w-[1000px] max-xl:w-[1000px] max-lg:w-[700px] max-md:w-full"},a.createElement("div",{className:"mb-8"},a.createElement("h1",null,n),a.createElement("p",null,r),a.createElement("p",{className:"text-end"},x)),a.createElement("div",{className:"group relative mb-2"},E?a.createElement(a.Fragment,null,a.createElement(o.G,{alt:n+" 대표 이미지",loading:"eager",image:E,objectFit:"contain"}),g?a.createElement(f,{deploy_link:g}):null):null),a.createElement("div",{className:"flex gap-1 justify-end items-center flex-wrap"},c.map((e=>a.createElement("div",{className:"h-7",key:e},a.createElement(d.Z,{name:e}))))),y.length>0&&a.createElement(p.Z,{imageList400:y,imageList200:w,srcList:v}),a.createElement("div",{className:"markdown-body"},l))))}function h(e){return a.createElement(E,e,a.createElement(i,e))}const b=e=>{let{data:t}=e;return a.createElement(g.Z,{title:t.mdx.frontmatter.title,description:t.mdx.frontmatter.subtitle,pathname:"/projects/"+t.mdx.frontmatter.slug+"/",image:t.mdx.frontmatter.image.childImageSharp.original.src})}},1852:function(e,t,l){l.d(t,{Z:function(){return u}});var n=l(7294),a=l(8032),r=l(6467),c=l(9417),s=l(7814),m=l(2932);function i(e){let{srcList:t,number:l,close:a,toLeft:r,toRight:i}=e;const{lockScroll:o,openScroll:u}=(0,m.Z)();return(0,n.useEffect)((()=>(o(),()=>{u()})),[]),n.createElement("div",{className:"fixed z-[500] top-0 bottom-0 left-0 right-0 bg-black/80 flex justify-center"},n.createElement("div",{className:"w-[1400px] flex flex-col items-center justify-center"},n.createElement("div",{className:"flex w-full justify-end pr-10 max-md:pr-5"},n.createElement("button",{type:"button","aria-label":"닫기",onClick:a},n.createElement(s.G,{icon:c.g82,color:"white",size:"3x"}))),n.createElement("div",{className:"px-5 h-[80%] flex items-center",role:"presentation",onClick:e=>{const t=e.target,{width:l}=t.getBoundingClientRect(),{clientX:n}=e;n-t.offsetLeft<l/2?r():i()}},n.createElement("img",{src:t[l],alt:t[l],className:"max-w-full max-h-full flex-1 object-contain"})),n.createElement("div",{className:"flex items-center"},n.createElement("div",{className:"mx-7 max-lg:mx-4"},n.createElement("button",{type:"button","aria-label":"왼쪽 더보기",className:"bg-white rounded-full shadow-[0_1px_2px_0_rgba(0,0,0,0.3)] h-14 w-14 max-lg:h-10 max-lg:w-10 "+(l>0?"":"invisible"),onClick:r},n.createElement(s.G,{size:"lg",icon:c.EyR}))),n.createElement("p",{className:"text-white text-xl w-32 text-center"},l+1," / ",t.length),n.createElement("div",{className:"mx-7 max-lg:mx-4"},n.createElement("button",{type:"button","aria-label":"오른쪽 더보기",className:"bg-white rounded-full shadow-[0_1px_2px_0_rgba(0,0,0,0.3)] h-14 w-14 max-lg:h-10 max-lg:w-10 "+(l<t.length-1?"":"invisible"),onClick:i},n.createElement(s.G,{size:"lg",icon:c.yOZ}))))))}function o(e){let{imageList:t,onClickImage:l}=e;const m=(0,r.Gc)(),i=(0,n.useRef)(null),{0:o,1:u}=(0,n.useState)(!0),{0:g,1:d}=(0,n.useState)(!1),p=()=>{if(i.current){const{scrollLeft:e,scrollWidth:t,clientWidth:l}=i.current,n=e<=0;d(e+l>=t),u(n)}};return(0,n.useEffect)((()=>{const e=i.current;return e&&(e.addEventListener("scroll",p),p()),()=>{e&&e.removeEventListener("scroll",p)}}),[]),n.createElement(n.Fragment,null,!o&&n.createElement("div",{className:"absolute z-10 -left-7 max-lg:-left-4 top-0 bottom-0 flex items-center"},n.createElement("button",{type:"button","aria-label":"왼쪽 더보기",className:"bg-white rounded-full shadow-[0_1px_2px_0_rgba(0,0,0,0.3)] h-14 w-14 max-lg:h-10 max-lg:w-10",onClick:()=>{i.current&&i.current.scrollBy({left:m.lg?-350:-800,behavior:"smooth"})}},n.createElement(s.G,{size:"lg",icon:c.EyR}))),n.createElement("div",{className:"flex gap-5 overflow-x-scroll hide-scroll-bar",ref:i},t.map(((e,t)=>{var r;return n.createElement("button",{type:"button",onClick:()=>l(t),"aria-label":t+" 번째 이미지",key:(null===(r=e.images.fallback)||void 0===r?void 0:r.src)||"image-"+t},n.createElement(a.G,{alt:t+" 번째 이미지",image:e,className:"rounded-xl h-full min-w-max hover:cursor-pointer",objectFit:"contain"}))}))),!g&&n.createElement("div",{className:"absolute z-10 -right-7 max-lg:-right-4 top-0 bottom-0 flex items-center"},n.createElement("button",{type:"button","aria-label":"오른쪽 더보기",className:"bg-white rounded-full shadow-[0_1px_2px_0_rgba(0,0,0,0.3)] h-14 w-14 max-lg:h-10 max-lg:w-10",onClick:()=>{i.current&&i.current.scrollBy({left:m.lg?350:800,behavior:"smooth"})}},n.createElement(s.G,{size:"lg",icon:c.yOZ}))))}function u(e){let{imageList400:t,imageList200:l,srcList:a}=e;const c=(0,r.Gc)(),{0:s,1:m}=(0,n.useState)(!1),{0:u,1:g}=(0,n.useState)(0),d=e=>{g(e),m(!0)};return n.createElement("div",{className:"flex justify-center my-10 bg-neutral-200 relative"},c.lg?n.createElement(o,{onClickImage:d,imageList:l}):n.createElement(o,{onClickImage:d,imageList:t}),s?n.createElement(i,{srcList:a,number:u,close:()=>m(!1),toLeft:()=>g(u-1<0?0:u-1),toRight:()=>g(u+1>a.length-1?a.length-1:u+1)}):null)}},7863:function(e,t,l){l.d(t,{Z:function(){return a}});var n=l(7294);function a(e){let{children:t}=e;return n.createElement(n.Fragment,null,n.createElement("h2",{className:"text-center"},"👥 팀원"),t)}},9016:function(e,t,l){l.d(t,{Z:function(){return c}});var n=l(7294);function a(e){let{children:t,link:l}=e;return l?n.createElement("a",{href:l},t):t}function r(e){let{member:t}=e;return n.createElement(n.Fragment,null,n.createElement("div",{className:"min-w-32 w-32 min-h-32 h-32 max-md:min-w-20 max-md:w-20 max-md:min-h-20 max-md:h-20 justify-self-end"},n.createElement(a,{link:t.link},t.imageSrc?n.createElement("img",{className:"rounded-full border-slate-300 border",src:t.imageSrc,alt:t.name+" 사진"}):n.createElement("div",{className:"w-full h-full rounded-full border-slate-300 border bg-white"}))),n.createElement("div",{className:"flex flex-col"},n.createElement("p",{className:"text-xl max-md:text-base font-semibold my-2"},t.name),n.createElement("p",{className:"!my-0"},t.description)))}function c(e){let{members:t}=e;return n.createElement("div",{className:"grid grid-cols-[1fr_2fr_1fr_2fr] max-lg:grid-cols-[1fr_2fr] items-center gap-5"},t.map((e=>n.createElement(r,{member:e,key:e.name+" "+e.description}))))}},1884:function(e,t,l){l.d(t,{Z:function(){return a}});var n=l(7294);function a(e){let{children:t}=e;return n.createElement(n.Fragment,null,n.createElement("h2",{className:"text-center"},"🔧 사용 기술"),n.createElement("div",{className:"flex w-full justify-center my-10"},n.createElement("div",{className:"flex justify-center flex-wrap gap-x-1 gap-y-3 w-[1000px] max-lg:w-[700px] max-md:w-full"},t)))}},1151:function(e,t,l){l.d(t,{ah:function(){return r}});var n=l(7294);const a=n.createContext({});function r(e){const t=n.useContext(a);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);
//# sourceMappingURL=component---src-templates-project-details-tsx-content-file-path-src-projects-main-lesson-manager-mdx-7e0f9e7315cc51a67442.js.map