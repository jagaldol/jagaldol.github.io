"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[213],{6858:function(e,t,a){a.r(t),a.d(t,{Head:function(){return f},default:function(){return b}});var n=a(1151),l=a(7294),s=a(1884),m=a(7863),r=a(9016);function c(e){const t=Object.assign({p:"p",strong:"strong",blockquote:"blockquote",div:"div",span:"span",math:"math",semantics:"semantics",mrow:"mrow",mi:"mi",mo:"mo",msub:"msub",annotation:"annotation",hr:"hr",img:"img",h2:"h2"},(0,n.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.p,null,l.createElement(t.strong,null,"스마트폰 카메라를 통해 박스의 실제 크기(가로, 세로, 높이)를 구할 수 있는 안드로이드 어플리케이션"),"입니다."),"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"2023년 CJ 미래기술 챌린지")," 에 ",l.createElement(t.strong,null,"스마트폰 활용한 상품 체적 측정")," 주제로 출품하였습니다. 오직 스마트폰으로 카메라만을 통해 박스의 실제 크기를 구해야 했습니다. 사진에서 길이 기준으로 잡을 것이 없었던 만큼 카메라의 기본 원리에 입각하여 접근하였습니다."),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"카메라의 초점거리 : 실제 거리 = 이미지 상 박스 크기 : 실제 박스 크기"),"\n"),"\n",l.createElement(t.p,null,"해당 원리에 의하면 카메라와 박스간의 거리를 구하면 실제 박스 크기를 구할 수 있다는 걸 알 수 있습니다. ",l.createElement(t.strong,null,"아래 수식은 실제 박스 최하단 꼭지점을 월드 좌표"),"로 구하는 공식입니다."),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.div,{className:"math math-display"},l.createElement(t.span,{className:"katex-display"},l.createElement(t.span,{className:"katex"},l.createElement(t.span,{className:"katex-mathml"},l.createElement(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},l.createElement(t.semantics,null,l.createElement(t.mrow,null,l.createElement(t.mi,null,"P"),l.createElement(t.mo,null,"="),l.createElement(t.msub,null,l.createElement(t.mi,null,"C"),l.createElement(t.mi,null,"w")),l.createElement(t.mo,null,"+"),l.createElement(t.mi,null,"k"),l.createElement(t.mo,{stretchy:"false"},"("),l.createElement(t.msub,null,l.createElement(t.mi,null,"p"),l.createElement(t.mi,null,"w")),l.createElement(t.mo,null,"−"),l.createElement(t.msub,null,l.createElement(t.mi,null,"C"),l.createElement(t.mi,null,"w")),l.createElement(t.mo,{stretchy:"false"},")")),l.createElement(t.annotation,{encoding:"application/x-tex"},"P = C_w + k(p_w - C_w)")))),l.createElement(t.span,{className:"katex-html","aria-hidden":"true"},l.createElement(t.span,{className:"base"},l.createElement(t.span,{className:"strut",style:{height:"0.6833em"}}),l.createElement(t.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"}},"P"),l.createElement(t.span,{className:"mspace",style:{marginRight:"0.2778em"}}),l.createElement(t.span,{className:"mrel"},"="),l.createElement(t.span,{className:"mspace",style:{marginRight:"0.2778em"}})),l.createElement(t.span,{className:"base"},l.createElement(t.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),l.createElement(t.span,{className:"mord"},l.createElement(t.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"}},"C"),l.createElement(t.span,{className:"msupsub"},l.createElement(t.span,{className:"vlist-t vlist-t2"},l.createElement(t.span,{className:"vlist-r"},l.createElement(t.span,{className:"vlist",style:{height:"0.1514em"}},l.createElement(t.span,{style:{top:"-2.55em",marginLeft:"-0.0715em",marginRight:"0.05em"}},l.createElement(t.span,{className:"pstrut",style:{height:"2.7em"}}),l.createElement(t.span,{className:"sizing reset-size6 size3 mtight"},l.createElement(t.span,{className:"mord mathnormal mtight",style:{marginRight:"0.02691em"}},"w")))),l.createElement(t.span,{className:"vlist-s"},"​")),l.createElement(t.span,{className:"vlist-r"},l.createElement(t.span,{className:"vlist",style:{height:"0.15em"}},l.createElement(t.span)))))),l.createElement(t.span,{className:"mspace",style:{marginRight:"0.2222em"}}),l.createElement(t.span,{className:"mbin"},"+"),l.createElement(t.span,{className:"mspace",style:{marginRight:"0.2222em"}})),l.createElement(t.span,{className:"base"},l.createElement(t.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),l.createElement(t.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),l.createElement(t.span,{className:"mopen"},"("),l.createElement(t.span,{className:"mord"},l.createElement(t.span,{className:"mord mathnormal"},"p"),l.createElement(t.span,{className:"msupsub"},l.createElement(t.span,{className:"vlist-t vlist-t2"},l.createElement(t.span,{className:"vlist-r"},l.createElement(t.span,{className:"vlist",style:{height:"0.1514em"}},l.createElement(t.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},l.createElement(t.span,{className:"pstrut",style:{height:"2.7em"}}),l.createElement(t.span,{className:"sizing reset-size6 size3 mtight"},l.createElement(t.span,{className:"mord mathnormal mtight",style:{marginRight:"0.02691em"}},"w")))),l.createElement(t.span,{className:"vlist-s"},"​")),l.createElement(t.span,{className:"vlist-r"},l.createElement(t.span,{className:"vlist",style:{height:"0.15em"}},l.createElement(t.span)))))),l.createElement(t.span,{className:"mspace",style:{marginRight:"0.2222em"}}),l.createElement(t.span,{className:"mbin"},"−"),l.createElement(t.span,{className:"mspace",style:{marginRight:"0.2222em"}})),l.createElement(t.span,{className:"base"},l.createElement(t.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),l.createElement(t.span,{className:"mord"},l.createElement(t.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"}},"C"),l.createElement(t.span,{className:"msupsub"},l.createElement(t.span,{className:"vlist-t vlist-t2"},l.createElement(t.span,{className:"vlist-r"},l.createElement(t.span,{className:"vlist",style:{height:"0.1514em"}},l.createElement(t.span,{style:{top:"-2.55em",marginLeft:"-0.0715em",marginRight:"0.05em"}},l.createElement(t.span,{className:"pstrut",style:{height:"2.7em"}}),l.createElement(t.span,{className:"sizing reset-size6 size3 mtight"},l.createElement(t.span,{className:"mord mathnormal mtight",style:{marginRight:"0.02691em"}},"w")))),l.createElement(t.span,{className:"vlist-s"},"​")),l.createElement(t.span,{className:"vlist-r"},l.createElement(t.span,{className:"vlist",style:{height:"0.15em"}},l.createElement(t.span)))))),l.createElement(t.span,{className:"mclose"},")")))))),"\n"),"\n",l.createElement(t.p,null,"이를 사용하기 위해 ",l.createElement(t.strong,null,"카메라의 내부/외부 파라미터"),"를 구해야했고, ",l.createElement(t.strong,null,"체커보드 패턴을 사용한 카메라 캘리브레이션")," 절차를 추가하였습니다."),"\n",l.createElement(t.hr),"\n",l.createElement(t.p,null,"이미지로부터 박스 각 변의 길이를 구하기 위해서는 먼저 박스 이미지를 추출해야 했습니다. ",l.createElement(t.strong,null,"박스 이미지를 학습시킨 모델"),"을 통해 ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Android ML kit</code>'}}),"로 ",l.createElement(t.strong,null,"박스 이미지만을 크롭"),"해내었습니다."),"\n",l.createElement(t.p,null,"그리고 ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">OpenCV</code>'}}),"를 사용하여 크롭한 박스 이미지에서 ",l.createElement(t.strong,null,"배경제거"),"를 하였고 ",l.createElement(t.strong,null,"윤곽선을 검출하여 각 꼭짓점을 계산"),"했습니다. 계산된 꼭짓점을 이용하여 상자의 꼭짓점을 ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">3D 좌표계로 변환</code>'}}),"하였고, ",l.createElement(t.strong,null,"캘리브레이션을 통해 계산된 파라미터를 활용"),"하여 실제 ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">월드 좌표계</code>'}}),"로 변환하여 ",l.createElement(t.strong,null,"실제 박스의 체적을 도출"),"해낼 수 있었습니다."),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"2023년 CJ 미래기술 챌린지 본선 진출 출품작"),"입니다."),"\n"),"\n",l.createElement(s.Z,null,l.createElement(t.img,{src:"https://img.shields.io/badge/androidstudio-3DDC84?style=for-the-badge&logo=androidstudio&logoColor=white",alt:"Android Studio"}),"\n",l.createElement(t.img,{src:"https://img.shields.io/badge/kotlin-7F52FF?style=for-the-badge&logo=kotlin&logoColor=white",alt:"Kotlin"}),"\n",l.createElement(t.img,{src:"https://img.shields.io/badge/kotlin-B7178C?style=for-the-badge&logo=reactivex&logoColor=white",alt:"RxJava"}),"\n",l.createElement(t.img,{src:"https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white",alt:"Python"}),"\n",l.createElement(t.img,{src:"https://img.shields.io/badge/opencv-5C3EE8?style=for-the-badge&logo=opencv&logoColor=white",alt:"OpenCV"}),"\n",l.createElement(t.img,{src:"https://img.shields.io/badge/tensorflow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white",alt:"TensorFlow"}),"\n",l.createElement(t.img,{src:"https://img.shields.io/badge/onnx-005CED?style=for-the-badge&logo=onnx&logoColor=white",alt:"ONNX"})),"\n",l.createElement(t.h2,null,"어플 구조"),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 812px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/f539d0b8fd27144f7f1dac0b1227b41b/63ec5/flow-chart.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 70.46153846153845%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAA7DAAAOwwHHb6hkAAACz0lEQVR42m1TW1PTUBDu/3/gJjPqkz46jhSoDHhBpwhUCwKdtPZK2iZNc2tuTXLSpIX53D2AD2pmdnZzsuf7vr2kNHNdKIoC27agqSpuez14dDbs9zGgWCVzbRuLPIcQAlmWYbFYyPju7g5/P6U4jjGbzaASmOd5CMMQge/BMqdkJszpFL7nyxwGSgkoSRKZlxPJP4BhGDyo08Zw6ZJD6lzXISATjuNA0zV5ZhJ4PI8RRkQYPBD8F5Av6RMd06mB8XgMYzIhcJ3iEdrtDubRXCp6slSkVPaDSga8v7/HarWSxi0oucRuU49YJcdMwN73fellmWkqFfEZe86fz+fUCmpREEhwbh1baWoYUlG/38NoNMKUS6MPBbHHlJiJDCl57mdAgKxc1ycSkIG5l7quSy+IuOQRI39kSwjIMi3qUSBVPTFzsmVZ8l2jy6w0kao9WWoURX8GRkOJSNlYqlPVITqdDgwaSOPmBqPhEM2mIhVwzOq4Nbe3Awma54UkybLF4zrltDYp7RYFPMmU4iTLUSwEnKsjjM93pTfr7zGieHJeRmwOIALKbX1G7+tbtI7foEveqlcgRlcESAyOY6PX68KbuUgEAQrqT/U1epVn6B9so7W3gdbuJvTDbUTqNYRvIjp9BWVnDZ39LTR31tHf38Si8wWlaJ4gov1KEkFDSMGKl3mGcHAJ51cNZusMTrsGm2K/U0M6M5DFtIvd79BuTtCvH2N8XYXVPEU86RBgTD1YFBBUKhsDFgTots9hNKqwKdFWvsFuncJpVpE4OsQ8gN8+g0dElnJC55xzglhrocT9ix+nmyQxRL6UJVtUcuPdGpTyOprlDahHL9DbW4fQFKQe/ZbHL9Hc3aLz5/i1t4Xu/gbi5ieUeNQ8+qIosFwtpcoio5W4/gD36hDTiwNYlwdw6d2olSEsFSKi5b6oYPKjAq/xEfbPQ9iXFYT9On4DOv8EZhLaZvYAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="flow chart"\n        title=""\n        src="/static/f539d0b8fd27144f7f1dac0b1227b41b/63ec5/flow-chart.png"\n        srcset="/static/f539d0b8fd27144f7f1dac0b1227b41b/ff46a/flow-chart.png 325w,\n/static/f539d0b8fd27144f7f1dac0b1227b41b/a6d36/flow-chart.png 650w,\n/static/f539d0b8fd27144f7f1dac0b1227b41b/63ec5/flow-chart.png 812w"\n        sizes="(max-width: 812px) 100vw, 812px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",l.createElement(t.h2,null,"알고리즘 구조"),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 840px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/8b1bcc4d417454d3f3198ae9fb735d5e/1e088/algorithm.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 60.61538461538461%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAA7DAAAOwwHHb6hkAAACu0lEQVR42i2S208bZxDF/fdXqqqSKk2VKulLHlI3gDEJBmwH2xgjTMH3+2296+veb8ZWHn6dXfpwdL6d0Y7OOTMJLwjZHw7Yjsvu5YVwtycMbHyjjq/X8bY1gv95MS6znlZQ+kUM7ZHAaMT10GiyM2v49pxEEOzYbjf0el104Zf9DwJ/yw+7jKtlsedX6NMLbPWK4dNnlNYxWveU1eAcL+orl5jTDPttnp07JGGJMtOycT0f07SEQ8LQxd40cfW2KG3H7Mi3MrpnMakyHdxhLOsEVhff7OBJ3xOVnq2RME1TFPm4rosn7Aj7lo7dzGM2svSLJ/QKJ2xr13jdgvS2GP0HJrcnjG/PGJVSDAST0jH6uEnCkIGH/R7XcfA8D11UBsaSw1OSRe5PBunf6Ak6qSP2//6Nv53jNjKol2/pR72zN4y+/c469wfu4P5VoW3bWJYVI1pO4BhY3RJev4z6dI0mcOVtdooEts6mL7YrX1Eer1g8ZdFbBdRqBmveIxENUxSFTqfDeDyJs/Tlp+HtKSPBpJxiJJhWzpjdpyWzDdbwgWHpC638P/QLxzTzSZRKCkdpkwjDMM5Qnc8J5IR2Lwc5BY3V9w+Mxcrk4h2d06PYnnr9Xk5IZV1N00j+xHPyZxpffqEjtqfnRxjdsmxZbGqqFqucy9BoKYFj4vTKbJs3rBrf0Z5zYjuLI7Y9UWhP6jjdInbvlllVzqZTwm4X5LT6rwMj27qux7BkOaFkqFW/MbkTmwLtMcOycSPvFNrDV6bl09dsn7PMKmnUhwtm5ROsWSs67ADDMOP8TNPAD3dia8Hm5iNd2ews8w4l+4H1XZLh+RvGF2/j2iz3F4viJ0ZSm16+Z5L+VRTfkYjuLxrqiLKIoxwjy9tWkUUtz1osL5sFVu0Kq3o+rm1E7bJZekUtJ7FIv5bFUvv8B8UJUve8dbJZAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="algorithm"\n        title=""\n        src="/static/8b1bcc4d417454d3f3198ae9fb735d5e/1e088/algorithm.png"\n        srcset="/static/8b1bcc4d417454d3f3198ae9fb735d5e/ff46a/algorithm.png 325w,\n/static/8b1bcc4d417454d3f3198ae9fb735d5e/a6d36/algorithm.png 650w,\n/static/8b1bcc4d417454d3f3198ae9fb735d5e/1e088/algorithm.png 840w"\n        sizes="(max-width: 840px) 100vw, 840px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",l.createElement(m.Z,null,l.createElement(r.Z,{members:[{imageSrc:"https://github.com/ssigner.png",link:"https://github.com/ssigner",name:"김종훈(팀장)",description:"카메라 캘리브레이션 및 알고리즘 개발"},{imageSrc:"https://github.com/jagaldol.png",link:"https://github.com/jagaldol",name:"안혜준",description:"인공지능 및 알고리즘 개발"},{imageSrc:"https://github.com/gogumac.png",link:"https://github.com/gogumac",name:"김유빈",description:"ML kit 객체 인식 및 어플 기능 개발"},{imageSrc:"https://github.com/jihoon5916.png",link:"https://github.com/jihoon5916",name:"김지훈",description:"알고리즘 개발"}]})))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?l.createElement(t,e,l.createElement(c,e)):c(e)},o=a(8032),g=a(4856),p=a(6657),d=a(3634),u=a(3187);function h(e){let{deploy_link:t}=e;const{0:a,1:n}=(0,l.useState)(!1),{0:s,1:m}=(0,l.useState)(!1),{0:r,1:c}=(0,l.useState)(!1),i=(0,l.useRef)(null),o=(0,l.useRef)(null),g=()=>{if(i.current){const e=i.current.getBoundingClientRect().top;c(e<=50)}};return(0,l.useEffect)((()=>{r&&(s||(m(!0),o.current&&clearTimeout(o.current),o.current=setTimeout((()=>{m(!1)}),1e3)))}),[r]),(0,l.useEffect)((()=>{const e=setTimeout((()=>{n(!0)}),1e3);return window.addEventListener("scroll",g),()=>{clearTimeout(e),window.removeEventListener("scroll",g),o.current&&clearTimeout(o.current)}}),[]),l.createElement("div",{ref:i,className:"absolute top-0 left-0 w-full h-full"},l.createElement("a",{href:t,className:"w-full h-full opacity-0 "+(s?"opacity-100":"")+" "+(a?"group-hover:opacity-100":"")+" bg-gradient-to-tl from-main-theme to-main-theme/60 z-10 transition-all duration-500 text-white flex drop-shadow-2xl"},l.createElement("h3",{className:"absolute right-0 bottom-0 text-3xl max-md:text-2xl max-sm:text-lg max-sm:-translate-y-3 -translate-x-8 -translate-y-5"},"바로가기")))}function E(e){let{data:t,children:a}=e;const{title:n,subtitle:s,stack:m,banner:r,start_date:c,end_date:i,deploy_link:p}=t.mdx.frontmatter,E=(0,o.c)(r),b=new Date(c),f=new Date(i),w=b.getFullYear()+"."+(b.getMonth()+1)+"."+b.getDate()+". ~ "+f.getFullYear()+"."+(f.getMonth()+1)+"."+f.getDate()+".",y=t.imageList.edges.map((e=>(0,o.c)(e.node))),N=t.imageList.edges.map((e=>e.node.childImageSharp.original.src));return l.createElement(g.Z,null,l.createElement("div",{className:"mt-10 w-full flex justify-center"},l.createElement("div",{className:"w-[1300px] max-2xl:w-[1000px] max-xl:w-[1000px] max-lg:w-[700px] max-md:w-full"},l.createElement("div",{className:"mb-8"},l.createElement("h1",null,n),l.createElement("p",null,s),l.createElement("p",{className:"text-end"},w)),l.createElement("div",{className:"group relative mb-2"},E?l.createElement(l.Fragment,null,l.createElement(o.G,{alt:n+" 대표 이미지",loading:"eager",image:E,objectFit:"contain"}),p?l.createElement(h,{deploy_link:p}):null):null),l.createElement("div",{className:"flex gap-1 justify-end items-center flex-wrap"},m.map((e=>l.createElement("div",{className:"h-7",key:e},l.createElement(d.Z,{name:e}))))),y.length>0&&l.createElement(u.Z,{imageList:y,srcList:N}),l.createElement("div",{className:"markdown-body"},a))))}function b(e){return l.createElement(E,e,l.createElement(i,e))}const f=e=>{let{data:t}=e;return l.createElement(p.Z,{title:t.mdx.frontmatter.title,description:t.mdx.frontmatter.subtitle,pathname:"/projects/"+t.mdx.frontmatter.slug+"/",image:t.mdx.frontmatter.image.childImageSharp.original.src})}},7863:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294);function l(e){let{children:t}=e;return n.createElement(n.Fragment,null,n.createElement("h2",{className:"text-center"},"👥 팀원"),t)}},9016:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7294);function l(e){let{children:t,link:a}=e;return a?n.createElement("a",{href:a},t):t}function s(e){let{member:t}=e;return n.createElement(n.Fragment,null,n.createElement("div",{className:"min-w-32 w-32 min-h-32 h-32 max-md:min-w-20 max-md:w-20 max-md:min-h-20 max-md:h-20 justify-self-end"},n.createElement(l,{link:t.link},t.imageSrc?n.createElement("img",{className:"rounded-full border-slate-300 border",src:t.imageSrc,alt:t.name+" 사진"}):n.createElement("div",{className:"w-full h-full rounded-full border-slate-300 border bg-white"}))),n.createElement("div",{className:"flex flex-col"},n.createElement("p",{className:"text-xl max-md:text-base font-semibold my-2"},t.name),n.createElement("p",{className:"!my-0"},t.description)))}function m(e){let{members:t}=e;return n.createElement("div",{className:"grid grid-cols-[1fr_2fr_1fr_2fr] max-lg:grid-cols-[1fr_2fr] items-center gap-5"},t.map((e=>n.createElement(s,{member:e,key:e.name+" "+e.description}))))}},1884:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294);function l(e){let{children:t}=e;return n.createElement(n.Fragment,null,n.createElement("h2",{className:"text-center"},"🔧 사용 기술"),n.createElement("div",{className:"flex w-full justify-center my-10"},n.createElement("div",{className:"flex justify-center flex-wrap gap-x-1 gap-y-3 w-[1000px] max-lg:w-[700px] max-md:w-full"},t)))}}}]);
//# sourceMappingURL=component---src-templates-project-details-tsx-content-file-path-src-projects-minor-box-size-mdx-3b88fb33246ac9a1eb3a.js.map