"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[703],{3311:function(e,t,n){n.r(t),n.d(t,{Head:function(){return x},default:function(){return E}});var a=n(1151),l=n(7294),r=n(1884),m=n(7863),c=n(9016);function s(e){const t=Object.assign({p:"p",strong:"strong",span:"span",img:"img"},(0,a.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.p,null,l.createElement(t.strong,null,"제 1회 놀다가는 앞마당 해커톤")," 프론트(안드로이드) 참가 결과물입니다. 이전까지 학교 강의만 들으며 제대로된 프로젝트 개발 경험이 없었습니다. 사람들과 협업하여 개발하는 경험을 해보고 싶어 해커튼을 알아보고 참가하였습니다."),"\n",l.createElement(t.p,null,"팀은 4인으로 ",l.createElement(t.strong,null,"프론트엔드 2명, 백엔드 2명"),"으로 매칭되었습니다. 팀원들과 상의하며 ",l.createElement(t.strong,null,"서로의 공통점을 바탕으로 주제를 탐색"),"하였습니다. 팀원들은 전부 내향적인 사람으로 혼자 놀기를 좋아하였습니다. 이에 착안하여 혼자 노는 모습을 공유하고 혼자 갈 만한 장소, 맛집 등을 공유할 수 있는 ",l.createElement(t.strong,null,"'I'들만의 플랫폼"),"을 만들어보기로 하였습니다."),"\n",l.createElement(t.p,null,"이 프로젝트를 통해 저는 ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">git</code>'}}),"과 ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">github</code>'}}),"을 활용한 협업을 경험할 수 있었습니다. 또한, ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">figma</code>'}}),"를 통해 ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">UI 디자인</code>'}}),"을 하고 이를 실제로 구현하는 과정을 전부 경험해볼 수 있었습니다."),"\n",l.createElement(r.Z,null,l.createElement(t.img,{src:"https://img.shields.io/badge/android%20studio-3DDC84?style=for-the-badge&logo=androidstudio&logoColor=white",alt:"android studio"}),"\n",l.createElement(t.img,{src:"https://img.shields.io/badge/kotlin-7F52FF?style=for-the-badge&logo=kotlin&logoColor=white",alt:"kotlin"}),"\n",l.createElement(t.img,{src:"https://img.shields.io/badge/kotlin-B7178C?style=for-the-badge&logo=reactivex&logoColor=white",alt:"RxJava"}),"\n",l.createElement(t.img,{src:"https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white",alt:"firebase"})),"\n",l.createElement(m.Z,null,l.createElement("h3",{className:"text-center"},"Android"),l.createElement(c.Z,{members:[{imageSrc:"https://github.com/gogumac.png",link:"https://github.com/gogumac",name:"김유빈",description:"안드로이드 앱 개발"},{imageSrc:"https://github.com/jagaldol.png",link:"https://github.com/jagaldol",name:"안혜준",description:"안드로이드 앱 개발"}]}),l.createElement("div",{className:"mt-20"},l.createElement("h3",{className:"text-center"},"Backend")),l.createElement(c.Z,{members:[{name:"구한서",description:"백엔드 개발"},{name:"김수현",description:"백엔드 개발"}]})))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(s,e)):s(e)},o=n(8032),u=n(4856),d=n(6657),g=n(3634),f=n(3187);function p(e){let{deploy_link:t}=e;const{0:n,1:a}=(0,l.useState)(!1),{0:r,1:m}=(0,l.useState)(!1),{0:c,1:s}=(0,l.useState)(!1),i=(0,l.useRef)(null),o=(0,l.useRef)(null),u=()=>{if(i.current){const e=i.current.getBoundingClientRect().top;s(e<=50)}};return(0,l.useEffect)((()=>{c&&(r||(m(!0),o.current&&clearTimeout(o.current),o.current=setTimeout((()=>{m(!1)}),1e3)))}),[c]),(0,l.useEffect)((()=>{const e=setTimeout((()=>{a(!0)}),1e3);return window.addEventListener("scroll",u),()=>{clearTimeout(e),window.removeEventListener("scroll",u),o.current&&clearTimeout(o.current)}}),[]),l.createElement("div",{ref:i,className:"absolute top-0 left-0 w-full h-full"},l.createElement("a",{href:t,className:"w-full h-full opacity-0 "+(r?"opacity-100":"")+" "+(n?"group-hover:opacity-100":"")+" bg-gradient-to-tl from-main-theme to-main-theme/60 z-10 transition-all duration-500 text-white flex drop-shadow-2xl"},l.createElement("h3",{className:"absolute right-0 bottom-0 text-3xl max-md:text-2xl max-sm:text-lg max-sm:-translate-y-3 -translate-x-8 -translate-y-5"},"바로가기")))}function h(e){let{data:t,children:n}=e;const{title:a,subtitle:r,stack:m,banner:c,start_date:s,end_date:i,deploy_link:d}=t.mdx.frontmatter,h=(0,o.c)(c),E=new Date(s),x=new Date(i),b=E.getFullYear()+"."+(E.getMonth()+1)+"."+E.getDate()+". ~ "+x.getFullYear()+"."+(x.getMonth()+1)+"."+x.getDate()+".",w=t.imageList.edges.map((e=>(0,o.c)(e.node))),v=t.imageList.edges.map((e=>e.node.childImageSharp.original.src));return l.createElement(u.Z,null,l.createElement("div",{className:"mt-10 w-full flex justify-center"},l.createElement("div",{className:"w-[1300px] max-2xl:w-[1000px] max-xl:w-[1000px] max-lg:w-[700px] max-md:w-full"},l.createElement("div",{className:"mb-8"},l.createElement("h1",null,a),l.createElement("p",null,r),l.createElement("p",{className:"text-end"},b)),l.createElement("div",{className:"group relative mb-2"},h?l.createElement(l.Fragment,null,l.createElement(o.G,{alt:a+" 대표 이미지",loading:"eager",image:h,objectFit:"contain"}),d?l.createElement(p,{deploy_link:d}):null):null),l.createElement("div",{className:"flex gap-1 justify-end items-center flex-wrap"},m.map((e=>l.createElement("div",{className:"h-7",key:e},l.createElement(g.Z,{name:e}))))),w.length>0&&l.createElement(f.Z,{imageList:w,srcList:v}),l.createElement("div",{className:"markdown-body"},n))))}function E(e){return l.createElement(h,e,l.createElement(i,e))}const x=e=>{let{data:t}=e;return l.createElement(d.Z,{title:t.mdx.frontmatter.title,description:t.mdx.frontmatter.subtitle,pathname:"/projects/"+t.mdx.frontmatter.slug+"/",image:t.mdx.frontmatter.image.childImageSharp.original.src})}},7863:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294);function l(e){let{children:t}=e;return a.createElement(a.Fragment,null,a.createElement("h2",{className:"text-center"},"👥 팀원"),t)}},9016:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7294);function l(e){let{children:t,link:n}=e;return n?a.createElement("a",{href:n},t):t}function r(e){let{member:t}=e;return a.createElement(a.Fragment,null,a.createElement("div",{className:"min-w-32 w-32 min-h-32 h-32 max-md:min-w-20 max-md:w-20 max-md:min-h-20 max-md:h-20 justify-self-end"},a.createElement(l,{link:t.link},t.imageSrc?a.createElement("img",{className:"rounded-full border-slate-300 border",src:t.imageSrc,alt:t.name+" 사진"}):a.createElement("div",{className:"w-full h-full rounded-full border-slate-300 border bg-white"}))),a.createElement("div",{className:"flex flex-col"},a.createElement("p",{className:"text-xl max-md:text-base font-semibold my-2"},t.name),a.createElement("p",{className:"!my-0"},t.description)))}function m(e){let{members:t}=e;return a.createElement("div",{className:"grid grid-cols-[1fr_2fr_1fr_2fr] max-lg:grid-cols-[1fr_2fr] items-center gap-5"},t.map((e=>a.createElement(r,{member:e,key:e.name+" "+e.description}))))}},1884:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294);function l(e){let{children:t}=e;return a.createElement(a.Fragment,null,a.createElement("h2",{className:"text-center"},"🔧 사용 기술"),a.createElement("div",{className:"flex w-full justify-center my-10"},a.createElement("div",{className:"flex justify-center flex-wrap gap-x-1 gap-y-3 w-[1000px] max-lg:w-[700px] max-md:w-full"},t)))}}}]);
//# sourceMappingURL=component---src-templates-project-details-tsx-content-file-path-src-projects-sub-im-home-mdx-ff79439feb542c96d85a.js.map