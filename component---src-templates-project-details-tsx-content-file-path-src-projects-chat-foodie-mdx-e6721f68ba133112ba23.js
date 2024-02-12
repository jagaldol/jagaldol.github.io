"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[447],{2414:function(e,t,n){n.r(t),n.d(t,{Head:function(){return p},default:function(){return f}});var a=n(1151),l=n(7294);function r(e){const t=Object.assign({p:"p",ul:"ul",li:"li",a:"a"},(0,a.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.p,null,"부산대학교 정보컴퓨터공학부 졸업과제(캡스톤 디자인)입니다. 프로젝트 리더로써 동기들과 3인 팀을 결성하여 Local LLM 챗봇 웹 서비스를 만들었습니다. 개인적으로 AI, 특히 언어 모델들에 관심이 많았고 직접 ChatGPT와 같은 서비스를 만들어보고 싶었습니다. 졸업과제를 기회로 삼아 AI에 관심이 있는 동기들과 팀을 만들었고 챗푸디를 만들게 되었습니다."),"\n",l.createElement(t.p,null,"챗푸디는 LLM(Large Language Model)을 파인튜닝한 음식 추천을 위한 챗봇 서비스입니다. 푸디 AI는 KoAlpaca-polyglot-5.8B의 베이스 모델 위에서 fine-tuning(LoRA)을 거쳐 만들어졌습니다. SNS 대화 데이터(AI hub)와 Wikipedia의 음식 정보를 바탕으로 GPT를 사용한 self-instruct를 수행하였고 최종 8,000개의 학습 데이터를 이용하였습니다. LLM과 채팅을 할 수 있게 해주는 오픈소스인 text-generation-webui를 사용하여 만들어진 푸디 모델을 웹소켓 서버로 배포하였습니다. 회원들의 정보 관리, 채팅방, 채팅내역 관리, 채팅 전송과 챗봇 응답에 대한 전처리, 후처리를 하는 spring boot 서버를 개발하였습니다. server side rendering을 간편하게 적용하기 위해 Next.js를 사용하여 프론트 화면을 개발하였습니다."),"\n",l.createElement(t.p,null,"chatGPT로 LLM에 대해 이제 막 관심이 생기던 시기여서 언어 모델 파인튜닝에 대한 자료는 매우 적었습니다. 한국어 자료는 너무나 적었고, 외국 사이트와 논문들을 보며 공부를 하였습니다. text-generation-webui, fastchat, nanoGPT, llama.cpp 등 많은 오픈 소스들도 참고하였습니다. 이 과정에서 모르는 기술에 대한 자신감을 얻을 수 있었습니다."),"\n",l.createElement(t.p,null,"3인 팀 중 웹 개발을 해본 사람이 저 밖에 없는 상황이였습니다. 프로젝트 진행에 앞서 팀원들에게 spring boot, next.js를 가르쳤습니다. 또한, 프로젝트의 전체적인 구조 설계와 뼈대 구축을 도맡았습니다. 막 웹 개발을 배운 팀원들에겐 가능한 간단하고 반복적인 작업을 할당하였고, 꼼꼼한 코드 리뷰를 통해 모든 코드를 저를 거쳐 병합되도록 하였습니다. 특히, spring security, db 연결, 웹소켓 api등의 복잡한 부분은 온전히 제가 직접 구현하게 되었습니다."),"\n",l.createElement(t.p,null,"next.js는 ssr을 위해 도입하였습니다. 개발은 typescript를 사용하였고, 프로젝트 협업을 편하게 하기 위해 eslint(airbnb), prettier를 적용하였습니다. 현재 chatfoodie는 chatfoodie.net 도메인을 통해 배포되고 있으며, 구글과 네이버 검색엔진에 등록되어있습니다."),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"웹 링크: ",l.createElement(t.a,{href:"https://chatfoodie.net"},"https://chatfoodie.net")),"\n",l.createElement(t.li,null,"github - 메인 코드: ",l.createElement(t.a,{href:"https://github.com/jagaldol/chat-foodie"},"https://github.com/jagaldol/chat-foodie")),"\n",l.createElement(t.li,null,"github - ai 웹소켓 서버: ",l.createElement(t.a,{href:"https://github.com/jagaldol/chat-foodie"},"https://github.com/jagaldol/chat-foodie")),"\n"))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(r,e)):r(e)},o=n(1883),i=n(8032),u=n(9116),s=n(3634);function m(e){let{deploy_link:t}=e;const{0:n,1:a}=(0,l.useState)(!1),{0:r,1:c}=(0,l.useState)(!1),{0:i,1:u}=(0,l.useState)(!1),s=(0,l.useRef)(null),m=(0,l.useRef)(null),d=()=>{if(s.current){const e=s.current.getBoundingClientRect().top;u(e<=50)}};return(0,l.useEffect)((()=>{i&&(r||(c(!0),m.current&&clearTimeout(m.current),m.current=setTimeout((()=>{c(!1)}),1e3)))}),[i]),(0,l.useEffect)((()=>{const e=setTimeout((()=>{a(!0)}),1e3);return window.addEventListener("scroll",d),()=>{clearTimeout(e),window.removeEventListener("scroll",d),m.current&&clearTimeout(m.current)}}),[]),l.createElement("div",{ref:s,className:"absolute top-0 left-0 w-full h-full"},l.createElement(o.Link,{to:t,className:"w-full h-full opacity-0 "+(r?"opacity-100":"")+" "+(n?"group-hover:opacity-100":"")+" bg-gradient-to-tl from-main-theme to-main-theme/60 z-10 transition-all duration-500 text-white flex drop-shadow-2xl"},l.createElement("h3",{className:"absolute right-0 bottom-0 text-3xl max-md:text-2xl max-sm:text-lg max-sm:-translate-y-3 -translate-x-8 -translate-y-5"},"바로가기")))}function d(e){let{data:t,children:n}=e;const{title:a,subtitle:r,stack:c,banner:o,start_date:d,end_date:f,deploy_link:p}=t.mdx.frontmatter,h=(0,i.c)(o),g=new Date(d),E=new Date(f),x=g.getFullYear()+"."+(g.getMonth()+1)+"."+g.getDate()+". ~ "+E.getFullYear()+"."+(E.getMonth()+1)+"."+E.getDate()+".";return l.createElement(u.Z,null,l.createElement("div",{className:"mt-10 w-full flex justify-center"},l.createElement("div",{className:"w-[1300px] max-2xl:w-[1000px] max-xl:w-[1000px] max-lg:w-[700px] max-md:w-full max-md:px-5"},l.createElement("div",{className:"mb-8"},l.createElement("h1",null,a),l.createElement("p",null,r),l.createElement("p",{className:"text-end"},x)),l.createElement("div",{className:"group relative mb-2"},h?l.createElement(l.Fragment,null,l.createElement(i.G,{alt:a+" 대표 이미지",loading:"eager",image:h,objectFit:"contain"}),p?l.createElement(m,{deploy_link:p}):null):null),l.createElement("div",{className:"flex gap-1 justify-end items-center flex-wrap"},c.map((e=>l.createElement("div",{className:"h-7",key:e},l.createElement(s.Z,{name:e}))))),l.createElement("div",{className:"markdown-body"},n))))}function f(e){return l.createElement(d,e,l.createElement(c,e))}const p=e=>{let{data:t}=e;return l.createElement("title",null,t.mdx.frontmatter.title," | Hyejun An")}},3634:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294);function l(e){let{name:t,autoHeight:n=!1}=e;const l="https://img.shields.io/badge/-"+t+"-FFFFFF?style=for-the-badge&logo="+t+"&logoColor=black";return a.createElement("img",{src:l,alt:t,className:"drop - shadow "+(n?"":"object-contain w-full h-full")})}},1151:function(e,t,n){n.d(t,{ah:function(){return r}});var a=n(7294);const l=a.createContext({});function r(e){const t=a.useContext(l);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);
//# sourceMappingURL=component---src-templates-project-details-tsx-content-file-path-src-projects-chat-foodie-mdx-e6721f68ba133112ba23.js.map