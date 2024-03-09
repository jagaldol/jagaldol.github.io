"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[329],{7232:function(e,t,n){n.r(t),n.d(t,{Head:function(){return p},default:function(){return E}});var l=n(1151),a=n(7294);function r(e){const t=Object.assign({p:"p",span:"span",blockquote:"blockquote",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,l.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.p,null,"자바 GUI - ",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">AWT</code>'}}),", ",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Swing</code>'}}),"으로 만든 슈팅게임입니다. ",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">player</code>'}}),"와 ",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">enemy</code>'}}),", ",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">missile</code>'}}),", ",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">bomb</code>'}}),"을 각각 객체화하여 제작하였습니다."),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"부산대학교 플랫폼기반 프로그래밍의 GUI 과제 기반 프로그램입니다."),"\n"),"\n",a.createElement("div",{align:"center"},a.createElement(t.h2,null,"💾 다운로드 및 게임 실행"),a.createElement("a",{href:"https://drive.google.com/file/d/1rfy34QBUEdd9-Jp1xO71wxQ47ngTnx1r/view?usp=drive_link",download:!0},"게임 다운로드"),a.createElement(t.p,null,"압축해제 후 Shooting.exe 실행해주세요."),a.createElement(t.h2,null,"📗 RULE"),a.createElement(t.table,null,a.createElement(t.thead,null,a.createElement(t.tr,null,a.createElement(t.th,{align:"center"},"key"),a.createElement(t.th,{align:"center"},"동작"))),a.createElement(t.tbody,null,a.createElement(t.tr,null,a.createElement(t.td,{align:"center"},"A"),a.createElement(t.td,{align:"center"},"공격")),a.createElement(t.tr,null,a.createElement(t.td,{align:"center"},"SPACE"),a.createElement(t.td,{align:"center"},"폭탄(적 10명 처치시 획득 | 최대 개수 5개)"))))))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(r,e)):r(e)},m=n(8032),s=n(4856),o=n(6657),u=n(3634),i=n(3187);function d(e){let{deploy_link:t}=e;const{0:n,1:l}=(0,a.useState)(!1),{0:r,1:c}=(0,a.useState)(!1),{0:m,1:s}=(0,a.useState)(!1),o=(0,a.useRef)(null),u=(0,a.useRef)(null),i=()=>{if(o.current){const e=o.current.getBoundingClientRect().top;s(e<=50)}};return(0,a.useEffect)((()=>{m&&(r||(c(!0),u.current&&clearTimeout(u.current),u.current=setTimeout((()=>{c(!1)}),1e3)))}),[m]),(0,a.useEffect)((()=>{const e=setTimeout((()=>{l(!0)}),1e3);return window.addEventListener("scroll",i),()=>{clearTimeout(e),window.removeEventListener("scroll",i),u.current&&clearTimeout(u.current)}}),[]),a.createElement("div",{ref:o,className:"absolute top-0 left-0 w-full h-full"},a.createElement("a",{href:t,className:"w-full h-full opacity-0 "+(r?"opacity-100":"")+" "+(n?"group-hover:opacity-100":"")+" bg-gradient-to-tl from-main-theme to-main-theme/60 z-10 transition-all duration-500 text-white flex drop-shadow-2xl"},a.createElement("h3",{className:"absolute right-0 bottom-0 text-3xl max-md:text-2xl max-sm:text-lg max-sm:-translate-y-3 -translate-x-8 -translate-y-5"},"바로가기")))}function g(e){let{data:t,children:n}=e;const{title:l,subtitle:r,stack:c,banner:o,start_date:g,end_date:E,deploy_link:p}=t.mdx.frontmatter,h=(0,m.c)(o),f=new Date(g),x=new Date(E),b=f.getFullYear()+"."+(f.getMonth()+1)+"."+f.getDate()+". ~ "+x.getFullYear()+"."+(x.getMonth()+1)+"."+x.getDate()+".",w=t.imageList.edges.map((e=>(0,m.c)(e.node))),y=t.imageList.edges.map((e=>e.node.childImageSharp.original.src));return a.createElement(s.Z,null,a.createElement("div",{className:"mt-10 w-full flex justify-center"},a.createElement("div",{className:"w-[1300px] max-2xl:w-[1000px] max-xl:w-[1000px] max-lg:w-[700px] max-md:w-full"},a.createElement("div",{className:"mb-8"},a.createElement("h1",null,l),a.createElement("p",null,r),a.createElement("p",{className:"text-end"},b)),a.createElement("div",{className:"group relative mb-2"},h?a.createElement(a.Fragment,null,a.createElement(m.G,{alt:l+" 대표 이미지",loading:"eager",image:h,objectFit:"contain"}),p?a.createElement(d,{deploy_link:p}):null):null),a.createElement("div",{className:"flex gap-1 justify-end items-center flex-wrap"},c.map((e=>a.createElement("div",{className:"h-7",key:e},a.createElement(u.Z,{name:e}))))),w.length>0&&a.createElement(i.Z,{imageList:w,srcList:y}),a.createElement("div",{className:"markdown-body"},n))))}function E(e){return a.createElement(g,e,a.createElement(c,e))}const p=e=>{let{data:t}=e;return a.createElement(o.Z,{title:t.mdx.frontmatter.title,description:t.mdx.frontmatter.subtitle,pathname:"/projects/"+t.mdx.frontmatter.slug+"/",image:t.mdx.frontmatter.image.childImageSharp.original.src})}}}]);
//# sourceMappingURL=component---src-templates-project-details-tsx-content-file-path-src-projects-toy-shooting-game-mdx-338a202e70a6c4605cd9.js.map