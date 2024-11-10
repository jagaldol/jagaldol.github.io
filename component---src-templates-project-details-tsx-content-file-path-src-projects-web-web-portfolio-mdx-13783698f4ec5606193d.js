"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[679],{4968:function(e,t,l){l.r(t),l.d(t,{Head:function(){return E},default:function(){return h}});var n=l(1151),a=l(7294),r=l(1884);function s(e){const t=Object.assign({p:"p",span:"span",img:"img",h2:"h2",ul:"ul",li:"li",strong:"strong"},(0,n.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.p,null,"개발해왔던 프로젝트들을 정리하기 위해 ",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Gatsby</code>'}}),"를 사용하여 직접 포트폴리오 사이트를 만들었습니다. 웹 개발자로써 ",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">React</code>'}}),"로 직접 자신만의 웹페이지를 만들어 보고 싶다고 줄곧 생각해왔고, 학기가 끝난 틈을 사용해 저의 프로필과 프로젝트들을 소개할 수 있는 페이지를 만들어 보았습니다. 각 프로젝트의 세부적인 페이지는 ",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">.mdx</code>'}})," 파일에서 마크다운으로 작성되고, 이를 읽어들여 각 페이지를 생성해냅니다."),"\n",a.createElement(t.p,null,"별도의 서버없이 ",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">github.io</code>'}}),"로 사이트 배포를 하기 위해 ",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">React</code>'}})," 기반 정적 사이트 생성기인 ",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Gatsby</code>'}}),"를 선택했습니다. ",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">React</code>'}})," 환경에는 이미 친숙한 만큼 ",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Gatsby</code>'}}),"를 사용하는 데 큰 무리가 없었습니다. 사이트를 만들면서 ",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">GraphQL</code>'}}),"을 통해 파일을 읽고 데이터를 처리하였고, 이 과정을 통해 ",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">GraphQL</code>'}}),"의 기초적인 사용을 새롭게 익혔습니다."),"\n",a.createElement(r.Z,null,a.createElement(t.img,{src:"https://img.shields.io/badge/-Gatsby-663399?style=for-the-badge&logo=Gatsby",alt:"Gatsby"}),"\n",a.createElement(t.img,{src:"https://img.shields.io/badge/-typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white",alt:"typescript"}),"\n",a.createElement(t.img,{src:"https://img.shields.io/badge/-mdx-1B1F24?style=for-the-badge&logo=mdx&logoColor=white",alt:"mdx"}),"\n",a.createElement(t.img,{src:"https://img.shields.io/badge/-graphql-E10098?style=for-the-badge&logo=graphql&logoColor=white",alt:"graphql"}),"\n",a.createElement(t.img,{src:"https://img.shields.io/badge/-ESLint-4B32C3?style=for-the-badge&logo=ESLint&logoColor=white",alt:"ESLint"}),"\n",a.createElement(t.img,{src:"https://img.shields.io/badge/-Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=white",alt:"Prettier"}),"\n",a.createElement(t.img,{src:"https://img.shields.io/badge/-Tailwind%20css-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white",alt:"TailwindCSS"})),"\n",a.createElement(t.h2,null,"Projects Page"),"\n",a.createElement(t.p,null,"4가지 분류는 아래의 기준을 따릅니다."),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"Main Project"),": 자신의 전문성을 보여 줄 수 있는 ",a.createElement(t.strong,null,"Signature works")),"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"Web Project"),": 또 다른 흥미 분야인 웹에 대한 ",a.createElement(t.strong,null,"Signature works")),"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"Sub Project"),": 그 외 ",a.createElement(t.strong,null,"다양한 기술에 대한 흥미"),"를 보여주는 활동"),"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"Toy Project"),": 흥미 위주의 단순 재미를 위한 개발"),"\n"))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?a.createElement(t,e,a.createElement(s,e)):s(e)},o=l(8032),m=l(4856),i=l(6657),g=l(3634),u=l(3187);function d(e){let{deploy_link:t}=e;const{0:l,1:n}=(0,a.useState)(!1),{0:r,1:s}=(0,a.useState)(!1),{0:c,1:o}=(0,a.useState)(!1),m=(0,a.useRef)(null),i=(0,a.useRef)(null),g=()=>{if(m.current){const e=m.current.getBoundingClientRect().top;o(e<=50)}};return(0,a.useEffect)((()=>{c&&(r||(s(!0),i.current&&clearTimeout(i.current),i.current=setTimeout((()=>{s(!1)}),1e3)))}),[c]),(0,a.useEffect)((()=>{const e=setTimeout((()=>{n(!0)}),1e3);return window.addEventListener("scroll",g),()=>{clearTimeout(e),window.removeEventListener("scroll",g),i.current&&clearTimeout(i.current)}}),[]),a.createElement("div",{ref:m,className:"absolute top-0 left-0 w-full h-full"},a.createElement("a",{href:t,className:"w-full h-full opacity-0 "+(r?"opacity-100":"")+" "+(l?"group-hover:opacity-100":"")+" bg-gradient-to-tl from-main-theme to-main-theme/60 z-10 transition-all duration-500 text-white flex drop-shadow-2xl"},a.createElement("h3",{className:"absolute right-0 bottom-0 text-3xl max-md:text-2xl max-sm:text-lg max-sm:-translate-y-3 -translate-x-8 -translate-y-5"},"바로가기")))}function p(e){let{data:t,children:l}=e;const{title:n,subtitle:r,stack:s,banner:c,start_date:i,end_date:p,deploy_link:h}=t.mdx.frontmatter,E=(0,o.c)(c),f=new Date(i),x=f.getFullYear()+"."+(f.getMonth()+1)+"."+f.getDate()+".",y=new Date(p),b=x+" ~ "+(p?y.getFullYear()+"."+(y.getMonth()+1)+"."+y.getDate()+".":"진행중"),w=t.imageList.edges.map((e=>(0,o.c)(e.node))),_=t.imageList.edges.map((e=>e.node.childImageSharp.original.src));return a.createElement(m.Z,null,a.createElement("div",{className:"mt-10 w-full flex justify-center"},a.createElement("div",{className:"w-[1300px] max-2xl:w-[1000px] max-xl:w-[1000px] max-lg:w-[700px] max-md:w-full"},a.createElement("div",{className:"mb-8"},a.createElement("h1",null,n),a.createElement("p",null,r),a.createElement("p",{className:"text-end"},b)),a.createElement("div",{className:"group relative mb-2"},E?a.createElement(a.Fragment,null,a.createElement(o.G,{alt:n+" 대표 이미지",loading:"eager",image:E,objectFit:"contain"}),h?a.createElement(d,{deploy_link:h}):null):null),a.createElement("div",{className:"flex gap-1 justify-end items-center flex-wrap"},s.map((e=>a.createElement("div",{className:"h-7",key:e},a.createElement(g.Z,{name:e}))))),w.length>0&&a.createElement(u.Z,{imageList:w,srcList:_}),a.createElement("div",{className:"markdown-body"},l))))}function h(e){return a.createElement(p,e,a.createElement(c,e))}const E=e=>{let{data:t}=e;return a.createElement(i.Z,{title:t.mdx.frontmatter.title,description:t.mdx.frontmatter.subtitle,pathname:"/projects/"+t.mdx.frontmatter.slug+"/",image:t.mdx.frontmatter.image.childImageSharp.original.src})}},1884:function(e,t,l){l.d(t,{Z:function(){return a}});var n=l(7294);function a(e){let{children:t}=e;return n.createElement(n.Fragment,null,n.createElement("h2",{className:"text-center"},"🔧 사용 기술"),n.createElement("div",{className:"flex w-full justify-center my-10"},n.createElement("div",{className:"flex justify-center flex-wrap gap-x-1 gap-y-3 w-[1000px] max-lg:w-[700px] max-md:w-full"},t)))}}}]);
//# sourceMappingURL=component---src-templates-project-details-tsx-content-file-path-src-projects-web-web-portfolio-mdx-13783698f4ec5606193d.js.map