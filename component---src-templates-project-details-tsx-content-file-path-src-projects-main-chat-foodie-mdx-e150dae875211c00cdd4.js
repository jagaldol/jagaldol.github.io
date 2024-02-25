"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[999],{9421:function(e,t,n){n.r(t),n.d(t,{Head:function(){return y},default:function(){return E}});var a=n(1151),l=n(7294),r=n(1884),c=n(7863),s=n(9016),o=n(7814),i=n(3024);function m(e){const t=Object.assign({p:"p",strong:"strong",span:"span",blockquote:"blockquote",img:"img",h2:"h2",ul:"ul",li:"li",a:"a"},(0,a.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.p,null,"LLM(Large Language Model)을 파인튜닝한 ",l.createElement(t.strong,null,"음식 추천을 위한 챗봇 서비스"),"입니다."),"\n",l.createElement(t.p,null,"푸디 AI는 ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">KoAlpaca-polyglot-5.8B의 베이스 모델</code>'}})," 위에서 ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">fine-tuning(LoRA)</code>'}}),"을 거쳐 만들어졌습니다. SNS 대화 데이터(AI hub)와 Wikipedia의 음식 정보를 바탕으로 ",l.createElement(t.strong,null,"GPT를 사용한 self-instruct"),"를 수행하였고 최종 ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">8,000개의 학습 데이터</code>'}}),"를 이용하였습니다."),"\n",l.createElement(t.p,null,"프로젝트 리더로써 동기들과 3인 팀을 결성하여 Local LLM 챗봇 웹 서비스를 만들었습니다. 개인적으로 AI, 특히 언어 모델들에 관심이 많았고 직접 ChatGPT와 같은 서비스를 만들어보고 싶었습니다. 졸업과제를 기회로 삼아 AI에 관심이 있는 동기들과 팀을 만들었고 챗푸디를 만들게 되었습니 3인 팀 중 웹 개발을 해본 사람이 저 밖에 없는 상황이였습니다. 프로젝트 진행에 앞서 팀원들에게 개발 프레임워크들을 가르쳤습니다.  막 웹 개발을 배운 팀원들의 코드는 코드 리뷰를 통해 모든 코드를 저를 거쳐 병합되도록 하였습니다.다."),"\n",l.createElement(t.p,null,"chatGPT로 LLM이 유명해지기 시작하던 시기여서 언어 모델 파인튜닝에 대한 한국어 자료가 적어 주로 github의 오픈 소스들(",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">text-generation-webui</code>'}}),", ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">fastchat</code>'}}),", ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">nanoGPT</code>'}}),", ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">llama.cpp</code>'}})," 등)을 참고하여 학습하였습니다. 이 과정에서 모르는 기술에 대한 자신감을 얻을 수 있었습니다."),"\n",l.createElement(t.p,null,"회원들의 ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">정보 관리</code>'}}),", ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">채팅방</code>'}}),", ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">채팅내역 관리</code>'}}),", ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">채팅 전송</code>'}}),"과 ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">챗봇 응답에 대한 전처리/후처리</code>'}}),"를 하는 ",l.createElement(t.strong,null,"spring boot 서버를 개발"),"하였습니다. ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">server side rendering</code>'}}),"을 간편하게 적용하기 위해 ",l.createElement(t.strong,null,"Next.js를 사용하여 프론트 화면을 개발"),"하였습니다. 개발은 ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">typescript</code>'}}),"를 사용하였고, 프로젝트 협업을 편하게 하기 위해 ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">eslint(airbnb)</code>'}}),", ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">prettier</code>'}}),"를 적용하였습니다. ",l.createElement(t.strong,null,"제가 담당한 부분"),"은 프로젝트의 전체적인 ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">구조 설계</code>'}}),"와 ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">뼈대 구축</code>'}}),", ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">spring security</code>'}}),", ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">db 연결</code>'}}),", ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">웹소켓 api</code>'}})," 등을, UI 작업에서는 ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">채팅 UI</code>'}}),", ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">실시간으로 출력되는 AI의 대답 렌더링</code>'}})," 등 입니다."),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"현재 chatfoodie.net 도메인을 통해 배포"),"되고 있으며, 구글과 네이버 검색엔진에 등록되어있습니다."),"\n",l.createElement(t.p,null,"2023년부산대학교 정보컴퓨터공학부 졸업과제"),"\n"),"\n",l.createElement(r.Z,null,l.createElement(t.img,{src:"https://img.shields.io/badge/Spring%20boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white",alt:"spring boot"}),"\r\n",l.createElement(t.img,{src:"https://img.shields.io/badge/-Java-ED8B00?style=for-the-badge&logo=java&logoColor=white",alt:"java"}),"\r\n",l.createElement(t.img,{src:"https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white",alt:"Python"}),"\r\n",l.createElement(t.img,{src:"https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white",alt:"mysql"}),"\r\n",l.createElement(t.img,{src:"https://img.shields.io/badge/AWS%20EC2-FF9900?style=for-the-badge&logo=amazonec2&logoColor=white",alt:"AWS EC2"}),"\r\n",l.createElement(t.img,{src:"https://img.shields.io/badge/nginx-009639?style=for-the-badge&logo=nginx&logoColor=white",alt:"nginx"}),"\r\n",l.createElement(t.img,{src:"https://img.shields.io/badge/-Next.js-000000?style=for-the-badge&logo=next.js",alt:"Next.js"}),"\r\n",l.createElement(t.img,{src:"https://img.shields.io/badge/-typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white",alt:"typescript"}),"\r\n",l.createElement(t.img,{src:"https://img.shields.io/badge/-ESLint-4B32C3?style=for-the-badge&logo=ESLint&logoColor=white",alt:"ESLint"}),"\r\n",l.createElement(t.img,{src:"https://img.shields.io/badge/-Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=white",alt:"Prettier"}),"\r\n",l.createElement(t.img,{src:"https://img.shields.io/badge/-Tailwind%20css-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white",alt:"Tailwind CSS"})),"\n",l.createElement(t.h2,null,"🗄️️ ERD"),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1300px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/106b98a6fb1eb33eccc2cc2c6706e351/07a9c/erd.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 52.307692307692314%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAABwklEQVR42l1S2ZLbMAzLh3Q62caWZV0+JF+xvc5uu31o+/+/g0LMJtPpA4YSRwIJkKfYWky9Q2crTJ3HSJjijN5p5j16r+GshXcW69giBYPWKOZrxMbA1yVMeUawGlWlcTLGoOs69H2PcRyRYuJnB0uCtm1hSaa1hlIK8zRi21Ys80xM2HlOsSeRIip5d+pCjZFdWvUNLbuMvDemQnH+AlcVxAWWMT/On9R/eBBVhBB6b/H9/YYrq77fDp7fMKZImQYLO8qodSUf6vqB+hP6GfWD0FFeSoPI2/cdGzEMI+VPWJYrJe7wPkg3pWLnZYnLpcClKHhXcs95res7YT4456WSFfPpn7F3efxQ6bu01DkZUtAFltRweEFsypakxsJ8dnlKrcM+dXzgZII5mvIFgdNLjUNgAcOifdvIINbrgj+/f+Hnxw8E70hSiT3PoeTkMAyUnShzQIwRefK544cvGT4EzPMidry+HljXTXJZ9r/DOQXuW+I+5Y5qdmayDMpSL18x9gGxDfK4a4KgKgvYPIxsBc855vxzKHlhN8pYl1nisW8Sa+6Wd0bkKFXSlh7HdRAfP24bjnWS5c6rNsVGiDPhX7NXMlXOYdcBAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="ER Diagram"\n        title=""\n        src="/static/106b98a6fb1eb33eccc2cc2c6706e351/3c492/erd.png"\n        srcset="/static/106b98a6fb1eb33eccc2cc2c6706e351/ff46a/erd.png 325w,\n/static/106b98a6fb1eb33eccc2cc2c6706e351/a6d36/erd.png 650w,\n/static/106b98a6fb1eb33eccc2cc2c6706e351/3c492/erd.png 1300w,\n/static/106b98a6fb1eb33eccc2cc2c6706e351/07a9c/erd.png 1440w"\n        sizes="(max-width: 1300px) 100vw, 1300px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",l.createElement(t.h2,null,"System Structure"),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 783px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/8dd3b4c68f7b29e75ee464571ea3cf88/e51a6/structure.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 75.07692307692308%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB80lEQVR42oVUy47TQBDM/9+48AmcuXDhwgVxAq1ItBGEQwiJHzixY3v8GD/GRVdnJ/JmlcVS2+Oe7urqnrIXeOVyzr0wXtM06ZpPay2WyyU2mw3qusbiHtg4jmjbVhP47LoOaZpitVphvV4jyzL1cb9pGgVj3F1AD2Y7i9IUmtz3Paqq0uT5e1mW+v4qIJNs1yNOz7CnH9J/9yKmk30yjeNIwQl8F5Bt0CIJNlWOcep1ZsMwqHFNEBY+ndL/AUqidfj25xPeP77F9+gzttkjirJAFEVqZMZ2i6JEEMQCOCiBuwxt2+FoQvxKlsiaGKMbZEYWSfJXAcmGLLMsx+EQCTjnai+A3KDdHkptaphcWOSlFLDaKlvzbV8Owl6VwL3FHGi+NsbgEByQZil2u98qGUppt9/jp2gujmO42Uy9Thc+mcO9ZciKeZ4rA1DIozBsG1hDxo34xisgY1U2BDqfz2ocqmdKP4OU9eTwpQU+VEA4ApF8MLW4E1mP03MSCkj6SZI8SeCE7XarzFj5cubAuwJ4kwEPQvZj5fDQTvgqRfpbQM4mCAI1/zkRiKfoAQlp5L6vGiSiy6MQKHjKT8WeAYZheHVQDh6EGmPLmCX1sneUDgqZOZPdjTJUh2yVzNgq2fo/imfJA/PGIv5HwPV8j7H0/QM8hIxnPjXiawAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="백엔드 구성도"\n        title=""\n        src="/static/8dd3b4c68f7b29e75ee464571ea3cf88/e51a6/structure.png"\n        srcset="/static/8dd3b4c68f7b29e75ee464571ea3cf88/ff46a/structure.png 325w,\n/static/8dd3b4c68f7b29e75ee464571ea3cf88/a6d36/structure.png 650w,\n/static/8dd3b4c68f7b29e75ee464571ea3cf88/e51a6/structure.png 783w"\n        sizes="(max-width: 783px) 100vw, 783px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",l.createElement(t.h2,null,"🔗 둘러보기"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"https://github.com/jagaldol/chat-foodie"},"서비스 전체 코드")," ",l.createElement(o.G,{size:"lg",icon:i.zhw})),"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"https://github.com/jagaldol/chat-foodie-chatbot-server"},"AI 챗봇 웹소켓 API 서버")," ",l.createElement(o.G,{size:"lg",icon:i.zhw})),"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"https://huggingface.co/datasets/jagaldol/chat-foodie"},"챗봇 학습 데이터 세트 8,000개")),"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"https://huggingface.co/sm136599/chatfoodie-koalpaca-polyglot-5_8b-5150step-8batch_5epoch"},"챗봇 LoRA 모델")),"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"https://colab.research.google.com/github/jagaldol/chat-foodie/blob/main/chatbot/Deploy_chatbot_server_as_public_with_colab.ipynb"},"푸디 AI QLoRA 파인튜닝 예제")),"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"https://colab.research.google.com/github/jagaldol/chat-foodie/blob/main/chatbot/Deploy_chatbot_server_as_public_with_colab.ipynb"},"코랩을 사용한 챗봇 websocket api 배포 예제")),"\n"),"\n",l.createElement(c.Z,null,l.createElement(s.Z,{members:[{imageSrc:"https://github.com/jagaldol.png",link:"https://github.com/jagaldol",name:"안혜준(팀장)",description:"시스템 설계, 백엔드 및 프론트 개발"},{imageSrc:"https://github.com/sm136599.png",link:"https://github.com/sm136599",name:"박성민",description:"AI 모델 학습, 백엔드 및 프론트 개발"},{imageSrc:"https://github.com/icarus012832.png",link:"https://github.com/icarus012832",name:"박진영",description:"서비스 UI 디자인, 백엔드 및 프론트 개발"}]})))}var g=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(m,e)):m(e)},d=n(8032),u=n(8852),p=n(3634),h=n(6657);function b(e){let{deploy_link:t}=e;const{0:n,1:a}=(0,l.useState)(!1),{0:r,1:c}=(0,l.useState)(!1),{0:s,1:o}=(0,l.useState)(!1),i=(0,l.useRef)(null),m=(0,l.useRef)(null),g=()=>{if(i.current){const e=i.current.getBoundingClientRect().top;o(e<=50)}};return(0,l.useEffect)((()=>{s&&(r||(c(!0),m.current&&clearTimeout(m.current),m.current=setTimeout((()=>{c(!1)}),1e3)))}),[s]),(0,l.useEffect)((()=>{const e=setTimeout((()=>{a(!0)}),1e3);return window.addEventListener("scroll",g),()=>{clearTimeout(e),window.removeEventListener("scroll",g),m.current&&clearTimeout(m.current)}}),[]),l.createElement("div",{ref:i,className:"absolute top-0 left-0 w-full h-full"},l.createElement("a",{href:t,className:"w-full h-full opacity-0 "+(r?"opacity-100":"")+" "+(n?"group-hover:opacity-100":"")+" bg-gradient-to-tl from-main-theme to-main-theme/60 z-10 transition-all duration-500 text-white flex drop-shadow-2xl"},l.createElement("h3",{className:"absolute right-0 bottom-0 text-3xl max-md:text-2xl max-sm:text-lg max-sm:-translate-y-3 -translate-x-8 -translate-y-5"},"바로가기")))}function f(e){let{data:t,children:n}=e;const{title:a,subtitle:r,stack:c,banner:s,start_date:o,end_date:i,deploy_link:m}=t.mdx.frontmatter,g=(0,d.c)(s),h=new Date(o),f=new Date(i),E=h.getFullYear()+"."+(h.getMonth()+1)+"."+h.getDate()+". ~ "+f.getFullYear()+"."+(f.getMonth()+1)+"."+f.getDate()+".";return l.createElement(u.Z,null,l.createElement("div",{className:"mt-10 w-full flex justify-center"},l.createElement("div",{className:"w-[1300px] max-2xl:w-[1000px] max-xl:w-[1000px] max-lg:w-[700px] max-md:w-full"},l.createElement("div",{className:"mb-8"},l.createElement("h1",null,a),l.createElement("p",null,r),l.createElement("p",{className:"text-end"},E)),l.createElement("div",{className:"group relative mb-2"},g?l.createElement(l.Fragment,null,l.createElement(d.G,{alt:a+" 대표 이미지",loading:"eager",image:g,objectFit:"contain"}),m?l.createElement(b,{deploy_link:m}):null):null),l.createElement("div",{className:"flex gap-1 justify-end items-center flex-wrap"},c.map((e=>l.createElement("div",{className:"h-7",key:e},l.createElement(p.Z,{name:e}))))),l.createElement("div",{className:"markdown-body"},n))))}function E(e){return l.createElement(f,e,l.createElement(g,e))}const y=e=>{let{data:t}=e;return l.createElement(h.Z,{title:t.mdx.frontmatter.title,description:t.mdx.frontmatter.subtitle,pathname:"/projects/"+t.mdx.frontmatter.slug+"/",image:"/og-image/"+t.mdx.frontmatter.slug+"/thumbnail.png"})}},7863:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294);function l(e){let{children:t}=e;return a.createElement(a.Fragment,null,a.createElement("h2",{className:"text-center"},"👥 팀원"),t)}},9016:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294);function l(e){let{children:t,link:n}=e;return n?a.createElement("a",{href:n},t):t}function r(e){let{member:t}=e;return a.createElement(a.Fragment,null,a.createElement("div",{className:"min-w-32 w-32 min-h-32 h-32 max-md:min-w-20 max-md:w-20 max-md:min-h-20 max-md:h-20 justify-self-end"},a.createElement(l,{link:t.link},t.imageSrc?a.createElement("img",{className:"rounded-full border-slate-300 border",src:t.imageSrc,alt:t.name+" 사진"}):a.createElement("div",{className:"w-full h-full rounded-full border-slate-300 border bg-white"}))),a.createElement("div",{className:"flex flex-col"},a.createElement("p",{className:"text-xl max-md:text-base font-semibold my-2"},t.name),a.createElement("p",{className:"!my-0"},t.description)))}function c(e){let{members:t}=e;return a.createElement("div",{className:"grid grid-cols-[1fr_2fr_1fr_2fr] max-lg:grid-cols-[1fr_2fr] items-center gap-5"},t.map((e=>a.createElement(r,{member:e,key:e.name+" "+e.description}))))}},1884:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294);function l(e){let{children:t}=e;return a.createElement(a.Fragment,null,a.createElement("h2",{className:"text-center"},"🔧 사용 기술"),a.createElement("div",{className:"flex w-full justify-center my-10"},a.createElement("div",{className:"flex justify-center flex-wrap gap-x-1 gap-y-3 w-[1000px] max-lg:w-[700px] max-md:w-full"},t)))}},1151:function(e,t,n){n.d(t,{ah:function(){return r}});var a=n(7294);const l=a.createContext({});function r(e){const t=a.useContext(l);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);
//# sourceMappingURL=component---src-templates-project-details-tsx-content-file-path-src-projects-main-chat-foodie-mdx-e150dae875211c00cdd4.js.map