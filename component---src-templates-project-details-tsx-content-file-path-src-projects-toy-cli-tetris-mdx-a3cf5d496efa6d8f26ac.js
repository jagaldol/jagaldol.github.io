"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[484],{8451:function(e,t,a){a.r(t),a.d(t,{Head:function(){return u},default:function(){return p}});var n=a(1151),l=a(7294);function r(e){const t=Object.assign({p:"p",span:"span",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,n.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.p,null,"간단한 게임을 만들어 보고 싶어 콘솔로 테트리스를 구현하였습니다. 게임판의 정보는 ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">배열</code>'}}),"로 관리되며, ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">0.1초</code>'}}),"마다 새롭게 그려집니다."),"\n",l.createElement(t.p,null,l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Windows 11</code>'}})," 환경에서 정상 동작하며 ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Visual Studio 2022</code>'}}),"로 제작하였습니다."),"\n",l.createElement("div",{align:"center"},l.createElement(t.h2,null,"💾 다운로드 및 게임 실행"),l.createElement("a",{href:"/files/tetris.exe",download:!0},"게임 다운로드"),l.createElement(t.h2,null,"🎮 조작키"),l.createElement(t.table,null,l.createElement(t.thead,null,l.createElement(t.tr,null,l.createElement(t.th,{align:"center"},"key"),l.createElement(t.th,{align:"center"},"동작"))),l.createElement(t.tbody,null,l.createElement(t.tr,null,l.createElement(t.td,{align:"center"},"↑"),l.createElement(t.td,{align:"center"},"회전")),l.createElement(t.tr,null,l.createElement(t.td,{align:"center"},"←   →"),l.createElement(t.td,{align:"center"},"좌우 이동")),l.createElement(t.tr,null,l.createElement(t.td,{align:"center"},"SPACE"),l.createElement(t.td,{align:"center"},"Hard drop")),l.createElement(t.tr,null,l.createElement(t.td,{align:"center"},"P"),l.createElement(t.td,{align:"center"},"일시 정지")),l.createElement(t.tr,null,l.createElement(t.td,{align:"center"},"ESC"),l.createElement(t.td,{align:"center"},"종료")))),l.createElement(t.h2,null,"게임 화면"),l.createElement("p",null,l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1115px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/73ac87dedc298353d4d5ef4575f7a033/0d6fe/in-play.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 56.30769230769231%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAA8klEQVR42qWS12rEQAxF/ejeG+4FG+P//z/tHoVZnIUkXvJwsaxhjq6ksbquk3meZV1X6fte2rbVmNyn2vddrCAIJI5jsW1bHMeRNE3F8zyNXde9Le5HUSQWsLIsFeL7vlRVJWEYqihG7o68JxQzCiyKQoEAgHNALkmS20D3HWgSBgiMs387JEYsKM/z1yg+cshFlsDcmGGWZQqs61qBV/3pEMiyLNoqqx+GQds1YPMKEFv8Efgs9gKe5ynbtslxHDJNkzptmkYL4XIcR41vAfkxD5qLOLu2d22XOb2P4HpGZxZVcWS+Jv5S/K3d38Q9dvEAVhIGpt6e8FYAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="게임 화면"\n        title=""\n        src="/static/73ac87dedc298353d4d5ef4575f7a033/0d6fe/in-play.png"\n        srcset="/static/73ac87dedc298353d4d5ef4575f7a033/ff46a/in-play.png 325w,\n/static/73ac87dedc298353d4d5ef4575f7a033/a6d36/in-play.png 650w,\n/static/73ac87dedc298353d4d5ef4575f7a033/0d6fe/in-play.png 1115w"\n        sizes="(max-width: 1115px) 100vw, 1115px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}})),l.createElement("p",null,l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1115px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/876eda0137a417cae6ba04c590f15d2e/0d6fe/combo.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 56.30769230769231%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAA8UlEQVR42q2SR4rEQAxFvXTOOQcweGPw/Q+n5gmqoWeG6UAvPlap0JOs+lbf97Isi2zbJsMwSNd1GpN7V/u+ixUEgcRxLLZti+M4kqapeJ6nseu6L4v6KIrEAlaWpUKAV1UlYRiqOPu+/5KoZxgFFkWhCS6IsyyTPM8lSZLvAcmjj4BMwx5IAkTjOD40egvYtq3uCwGhAcCmabSRKfgPfgey/OM4BPtgFyBc8Dh8jQsQr/gUSMF5ngq9rkv9RI6p13WVuq5lmiaNnwF5RIsDv4ep53m+W8j8nomR2fNf4k6BdGUi4z1E7kFx9Dv3Q9Sx+xu0agb9FmRMCgAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="콤보"\n        title=""\n        src="/static/876eda0137a417cae6ba04c590f15d2e/0d6fe/combo.png"\n        srcset="/static/876eda0137a417cae6ba04c590f15d2e/ff46a/combo.png 325w,\n/static/876eda0137a417cae6ba04c590f15d2e/a6d36/combo.png 650w,\n/static/876eda0137a417cae6ba04c590f15d2e/0d6fe/combo.png 1115w"\n        sizes="(max-width: 1115px) 100vw, 1115px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}})),l.createElement("p",null,l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1115px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/64a02121526e55ce7080b0aa5df333b4/0d6fe/game-over.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 61.84615384615384%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAA7DAAAOwwHHb6hkAAABAElEQVR42q2Sx46DQBBEOZJzzlkg4P8/r1fVq7ZsDgZbPhQTmHlUV6PkeU5t29I4jlQUBWHddR01TfORwBiGgRTbtsl1XYZh7vs+6bpOmqaxML8jVVWZo+AhLsVhkiQsvDMMg0zTvBTOwYziOA5VVUVBEDAwyzKK4/ihr4CoPU1THqdporqu+QNRFH0ORG7LsnCw0oyyLBkqDi3LugX0PO8fuK4rQzACiuwARAQIXC68c/sCnOeZdRwHOwQQTQnDkDuPg9hDPJdAlLPvO23bxiMcYg/dlmzhtu/7+0B0GZcgOJPSJDtZX5XMTcHi/ANLXmc9Z3kW7rFDlPELIWtk/geFESG0NRHkKAAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="게임 오버"\n        title=""\n        src="/static/64a02121526e55ce7080b0aa5df333b4/0d6fe/game-over.png"\n        srcset="/static/64a02121526e55ce7080b0aa5df333b4/ff46a/game-over.png 325w,\n/static/64a02121526e55ce7080b0aa5df333b4/a6d36/game-over.png 650w,\n/static/64a02121526e55ce7080b0aa5df333b4/0d6fe/game-over.png 1115w"\n        sizes="(max-width: 1115px) 100vw, 1115px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}))))}var s=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?l.createElement(t,e,l.createElement(r,e)):r(e)},c=a(8032),i=a(4856),m=a(3634),o=a(6657);function d(e){let{deploy_link:t}=e;const{0:a,1:n}=(0,l.useState)(!1),{0:r,1:s}=(0,l.useState)(!1),{0:c,1:i}=(0,l.useState)(!1),m=(0,l.useRef)(null),o=(0,l.useRef)(null),d=()=>{if(m.current){const e=m.current.getBoundingClientRect().top;i(e<=50)}};return(0,l.useEffect)((()=>{c&&(r||(s(!0),o.current&&clearTimeout(o.current),o.current=setTimeout((()=>{s(!1)}),1e3)))}),[c]),(0,l.useEffect)((()=>{const e=setTimeout((()=>{n(!0)}),1e3);return window.addEventListener("scroll",d),()=>{clearTimeout(e),window.removeEventListener("scroll",d),o.current&&clearTimeout(o.current)}}),[]),l.createElement("div",{ref:m,className:"absolute top-0 left-0 w-full h-full"},l.createElement("a",{href:t,className:"w-full h-full opacity-0 "+(r?"opacity-100":"")+" "+(a?"group-hover:opacity-100":"")+" bg-gradient-to-tl from-main-theme to-main-theme/60 z-10 transition-all duration-500 text-white flex drop-shadow-2xl"},l.createElement("h3",{className:"absolute right-0 bottom-0 text-3xl max-md:text-2xl max-sm:text-lg max-sm:-translate-y-3 -translate-x-8 -translate-y-5"},"바로가기")))}function g(e){let{data:t,children:a}=e;const{title:n,subtitle:r,stack:s,banner:o,start_date:g,end_date:p,deploy_link:u}=t.mdx.frontmatter,A=(0,c.c)(o),f=new Date(g),b=new Date(p),E=f.getFullYear()+"."+(f.getMonth()+1)+"."+f.getDate()+". ~ "+b.getFullYear()+"."+(b.getMonth()+1)+"."+b.getDate()+".";return l.createElement(i.Z,null,l.createElement("div",{className:"mt-10 w-full flex justify-center"},l.createElement("div",{className:"w-[1300px] max-2xl:w-[1000px] max-xl:w-[1000px] max-lg:w-[700px] max-md:w-full"},l.createElement("div",{className:"mb-8"},l.createElement("h1",null,n),l.createElement("p",null,r),l.createElement("p",{className:"text-end"},E)),l.createElement("div",{className:"group relative mb-2"},A?l.createElement(l.Fragment,null,l.createElement(c.G,{alt:n+" 대표 이미지",loading:"eager",image:A,objectFit:"contain"}),u?l.createElement(d,{deploy_link:u}):null):null),l.createElement("div",{className:"flex gap-1 justify-end items-center flex-wrap"},s.map((e=>l.createElement("div",{className:"h-7",key:e},l.createElement(m.Z,{name:e}))))),l.createElement("div",{className:"markdown-body"},a))))}function p(e){return l.createElement(g,e,l.createElement(s,e))}const u=e=>{let{data:t}=e;return l.createElement(o.Z,{title:t.mdx.frontmatter.title,description:t.mdx.frontmatter.subtitle,pathname:"/projects/"+t.mdx.frontmatter.slug+"/",image:"/og-image/"+t.mdx.frontmatter.slug+"/thumbnail.png"})}},1151:function(e,t,a){a.d(t,{ah:function(){return r}});var n=a(7294);const l=n.createContext({});function r(e){const t=n.useContext(l);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);
//# sourceMappingURL=component---src-templates-project-details-tsx-content-file-path-src-projects-toy-cli-tetris-mdx-a3cf5d496efa6d8f26ac.js.map