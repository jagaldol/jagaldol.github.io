"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[438],{8480:function(e,t,a){a.r(t),a.d(t,{Head:function(){return g},default:function(){return d}});var n=a(1151),l=a(7294);function r(e){const t=Object.assign({p:"p",ul:"ul",li:"li",a:"a"},(0,n.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.p,null,"카카오 테크 캠퍼스에서 진행한 4월부터 11월까지 7개월간의 교육 끝의 최종 팀 프로젝트 결과물입니다. 프론트엔드 2인, 백엔드 4인의 팀으로 기획부터 개발, 배포까지 모든 과정을 수행하였고, 카카오 테크 캠퍼스 최종 심사에서 우수 조로 선발되어 상을 받게 되었습니다"),"\n",l.createElement(t.p,null,"번개볼링이라는 서비스는 번개 지향 볼링 모집 커뮤니티입니다. 일종의 커뮤니티이자 사용자간의 모집글 작성 및 신청 / 수락, 게임 기록 관리(점수 등록, 유저 별점 평가) 등 볼링에 특화된 다양한 편의 기능을 제공합니다"),"\n",l.createElement(t.p,null,"저는 개발 리더로써 팀원들의 역할 배분 및 업무 배분에 항상 주의를 기울였습니다. 그리고 프론트 개발의 경험이 있었던 만큼 프론트 팀원들에게도 도움을 줄 수 있었습니다. 프론트 팀은 Next.js를 처음 사용하는 입장이였지만 저는 사용해본 적 있는 기술이기 때문에 초반 세팅을 돕는 등 프론트 개발에도 약간의 도움을 주었습니다. 또한, 프론트 개발자가 초반부터 미리 api 서버를 통해 개발을 진행하는 편이 발생할 수 있는 오류를 초기에 발견할 수 있다고 생각했기 때문에, 개발 시작 전 빠르게 명세서대로 mock api 서버를 제작하였고 이를 배포하여 프론트에 전달해주었습니다"),"\n",l.createElement(t.p,null,"직접 맡은 부분은 회원가입/로그인으로 대표되는 인증관련 api들과 행정구역 정보에 대한 api, 댓글 api, swagger입니다. 초반 spring boot 프로젝트 세팅을 하며 spring security filter 또한 설정을 하게 되었고, 자연스럽게 security를 비롯한 인증, jwt 토큰, 권한 등의 api들 담당하게 되었습니다. 그 외 행정구역 api는 국가에서 제공하는 행정구역 공공데이터를 파싱하여 직접 db에 추가하여 행정구역에 대해 직접 관리하도록 구성하였습니다. 댓글의 경우 대댓글이 가능하도록 구현하였고, 댓글이 삭제된 경우에도 해당 댓글의 대댓글은 남아 있도록 신경을 썼습니다. 모든 api에 대해 통합 테스트 코드를 전부 작성하였고, restdocs-api-spec 라이브러리를 통해 테스트의 결과물인 restdocs을 사용해 swagger-ui로 api 문서를 배포하였습니다. 이 과정에서 api들의 버그를 발견하고 수정할 수 있는 계기가 되었습니다"),"\n",l.createElement(t.p,null,"또한, 협업에 있어 github의 기능을 적극 활용하였습니다. issue, pr template을 통해 통일된 양식을 강제하였고, branch rule을 사용해 코드 리뷰를 필수로 받아야 merge 가능하게 하였습니다. github action을 통해 CI/CD를 구축하였습니다. CI를 통해 PR 시 테스트 코드 실행 및 빌드 테스트를 자동 실행 시키고, 이후 코드리뷰를 거쳐 merge 되면 EC2 상에 자동배포를 하도록 CD까지 구현하였습니다."),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"배포 링크: ",l.createElement(t.a,{href:"https://bungae.jagaldol.dev"},"https://bungae.jagaldol.dev")),"\n",l.createElement(t.li,null,"Swagger: ",l.createElement(t.a,{href:"http://bungae.jagaldol.dev:8080/api/docs/swagger"},"http://bungae.jagaldol.dev:8080/api/docs/swagger")),"\n",l.createElement(t.li,null,"github: ",l.createElement(t.a,{href:"https://github.com/Step3-kakao-tech-campus/Team3_BE"},"https://github.com/Step3-kakao-tech-campus/Team3_BE")),"\n"))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?l.createElement(t,e,l.createElement(r,e)):r(e)},u=a(1883),o=a(8032),i=a(9116),m=a(3634);function s(e){let{deploy_link:t}=e;const{0:a,1:n}=(0,l.useState)(!1),{0:r,1:c}=(0,l.useState)(!1),o=(0,l.useRef)(null),i=(0,l.useRef)(null),m=()=>{if(o.current){o.current.getBoundingClientRect().top<=0&&(r||(c(!0),i.current&&clearTimeout(i.current),i.current=setTimeout((()=>{c(!1)}),1e3)))}};return(0,l.useEffect)((()=>{const e=setTimeout((()=>{n(!0)}),1e3);return window.addEventListener("scroll",m),()=>{clearTimeout(e),window.removeEventListener("scroll",m),i.current&&clearTimeout(i.current)}}),[]),l.createElement("div",{ref:o,className:"absolute top-0 left-0 w-full h-full"},l.createElement(u.Link,{to:t,className:"w-full h-full opacity-0 "+(r?"opacity-100":"")+" "+(a?"group-hover:opacity-100":"")+" bg-gradient-to-tl from-main-theme to-main-theme/60 z-10 transition-all duration-500 text-white flex drop-shadow-2xl"},l.createElement("h3",{className:"absolute right-0 bottom-0 text-3xl max-md:text-2xl max-sm:text-lg max-sm:-translate-y-3 -translate-x-8 -translate-y-5"},"바로가기")))}function p(e){let{data:t,children:a}=e;const{title:n,subtitle:r,stack:c,banner:u,start_date:p,end_date:d,deploy_link:g}=t.mdx.frontmatter,f=(0,o.c)(u),h=new Date(p),E=new Date(d),x=h.getFullYear()+"."+(h.getMonth()+1)+"."+h.getDate()+". ~ "+E.getFullYear()+"."+(E.getMonth()+1)+"."+E.getDate()+".";return l.createElement(i.Z,null,l.createElement("div",{className:"mt-10 w-full flex justify-center"},l.createElement("div",{className:"w-[1300px] max-2xl:w-[1000px] max-xl:w-[1000px] max-lg:w-[700px] max-md:w-full max-md:px-5"},l.createElement("div",{className:"mb-8"},l.createElement("h1",null,n),l.createElement("p",null,r),l.createElement("p",{className:"text-end"},x)),l.createElement("div",{className:"group relative mb-2"},f?l.createElement(l.Fragment,null,l.createElement(o.G,{alt:n+" 대표 이미지",loading:"eager",image:f,objectFit:"contain"}),g?l.createElement(s,{deploy_link:g}):null):null),l.createElement("div",{className:"flex gap-1 justify-end items-center flex-wrap"},c.map((e=>l.createElement("div",{className:"h-7",key:e},l.createElement(m.Z,{name:e}))))),l.createElement("div",{className:"markdown-body"},a))))}function d(e){return l.createElement(p,e,l.createElement(c,e))}const g=e=>{let{data:t}=e;return l.createElement("title",null,t.mdx.frontmatter.title," | Hyejun An")}},3634:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294);function l(e){let{name:t,autoHeight:a=!1}=e;const l="https://img.shields.io/badge/-"+t+"-FFFFFF?style=for-the-badge&logo="+t+"&logoColor=black";return n.createElement("img",{src:l,alt:t,className:"drop - shadow "+(a?"":"object-contain w-full h-full")})}},1151:function(e,t,a){a.d(t,{ah:function(){return r}});var n=a(7294);const l=n.createContext({});function r(e){const t=n.useContext(l);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);
//# sourceMappingURL=component---src-templates-project-details-tsx-content-file-path-src-projects-bungae-bowling-mdx-48124569baa6cc8ce4c3.js.map