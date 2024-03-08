"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[213],{6858:function(e,t,a){a.r(t),a.d(t,{Head:function(){return f},default:function(){return b}});var l=a(1151),n=a(7294),s=a(1884),m=a(7863),r=a(9016);function c(e){const t=Object.assign({p:"p",strong:"strong",blockquote:"blockquote",div:"div",span:"span",math:"math",semantics:"semantics",mrow:"mrow",mi:"mi",mo:"mo",msub:"msub",annotation:"annotation",hr:"hr",img:"img",h2:"h2"},(0,l.ah)(),e.components);return n.createElement(n.Fragment,null,n.createElement(t.p,null,n.createElement(t.strong,null,"스마트폰 카메라를 통해 박스의 실제 크기(가로, 세로, 높이)를 구할 수 있는 안드로이드 어플리케이션"),"입니다."),"\n",n.createElement(t.p,null,n.createElement(t.strong,null,"2023년 CJ 미래기술 챌린지")," 에 ",n.createElement(t.strong,null,"스마트폰 활용한 상품 체적 측정")," 주제로 출품하였습니다. 오직 스마트폰으로 카메라만을 통해 박스의 실제 크기를 구해야 했습니다. 사진에서 길이 기준으로 잡을 것이 없었던 만큼 카메라의 기본 원리에 입각하여 접근하였습니다."),"\n",n.createElement(t.blockquote,null,"\n",n.createElement(t.p,null,"카메라의 초점거리 : 실제 거리 = 이미지 상 박스 크기 : 실제 박스 크기"),"\n"),"\n",n.createElement(t.p,null,"해당 원리에 의하면 카메라와 박스간의 거리를 구하면 실제 박스 크기를 구할 수 있다는 걸 알 수 있습니다. ",n.createElement(t.strong,null,"아래 수식은 실제 박스 최하단 꼭지점을 월드 좌표"),"로 구하는 공식입니다."),"\n",n.createElement(t.blockquote,null,"\n",n.createElement(t.div,{className:"math math-display"},n.createElement(t.span,{className:"katex-display"},n.createElement(t.span,{className:"katex"},n.createElement(t.span,{className:"katex-mathml"},n.createElement(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},n.createElement(t.semantics,null,n.createElement(t.mrow,null,n.createElement(t.mi,null,"P"),n.createElement(t.mo,null,"="),n.createElement(t.msub,null,n.createElement(t.mi,null,"C"),n.createElement(t.mi,null,"w")),n.createElement(t.mo,null,"+"),n.createElement(t.mi,null,"k"),n.createElement(t.mo,{stretchy:"false"},"("),n.createElement(t.msub,null,n.createElement(t.mi,null,"p"),n.createElement(t.mi,null,"w")),n.createElement(t.mo,null,"−"),n.createElement(t.msub,null,n.createElement(t.mi,null,"C"),n.createElement(t.mi,null,"w")),n.createElement(t.mo,{stretchy:"false"},")")),n.createElement(t.annotation,{encoding:"application/x-tex"},"P = C_w + k(p_w - C_w)")))),n.createElement(t.span,{className:"katex-html","aria-hidden":"true"},n.createElement(t.span,{className:"base"},n.createElement(t.span,{className:"strut",style:{height:"0.6833em"}}),n.createElement(t.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"}},"P"),n.createElement(t.span,{className:"mspace",style:{marginRight:"0.2778em"}}),n.createElement(t.span,{className:"mrel"},"="),n.createElement(t.span,{className:"mspace",style:{marginRight:"0.2778em"}})),n.createElement(t.span,{className:"base"},n.createElement(t.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),n.createElement(t.span,{className:"mord"},n.createElement(t.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"}},"C"),n.createElement(t.span,{className:"msupsub"},n.createElement(t.span,{className:"vlist-t vlist-t2"},n.createElement(t.span,{className:"vlist-r"},n.createElement(t.span,{className:"vlist",style:{height:"0.1514em"}},n.createElement(t.span,{style:{top:"-2.55em",marginLeft:"-0.0715em",marginRight:"0.05em"}},n.createElement(t.span,{className:"pstrut",style:{height:"2.7em"}}),n.createElement(t.span,{className:"sizing reset-size6 size3 mtight"},n.createElement(t.span,{className:"mord mathnormal mtight",style:{marginRight:"0.02691em"}},"w")))),n.createElement(t.span,{className:"vlist-s"},"​")),n.createElement(t.span,{className:"vlist-r"},n.createElement(t.span,{className:"vlist",style:{height:"0.15em"}},n.createElement(t.span)))))),n.createElement(t.span,{className:"mspace",style:{marginRight:"0.2222em"}}),n.createElement(t.span,{className:"mbin"},"+"),n.createElement(t.span,{className:"mspace",style:{marginRight:"0.2222em"}})),n.createElement(t.span,{className:"base"},n.createElement(t.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),n.createElement(t.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),n.createElement(t.span,{className:"mopen"},"("),n.createElement(t.span,{className:"mord"},n.createElement(t.span,{className:"mord mathnormal"},"p"),n.createElement(t.span,{className:"msupsub"},n.createElement(t.span,{className:"vlist-t vlist-t2"},n.createElement(t.span,{className:"vlist-r"},n.createElement(t.span,{className:"vlist",style:{height:"0.1514em"}},n.createElement(t.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},n.createElement(t.span,{className:"pstrut",style:{height:"2.7em"}}),n.createElement(t.span,{className:"sizing reset-size6 size3 mtight"},n.createElement(t.span,{className:"mord mathnormal mtight",style:{marginRight:"0.02691em"}},"w")))),n.createElement(t.span,{className:"vlist-s"},"​")),n.createElement(t.span,{className:"vlist-r"},n.createElement(t.span,{className:"vlist",style:{height:"0.15em"}},n.createElement(t.span)))))),n.createElement(t.span,{className:"mspace",style:{marginRight:"0.2222em"}}),n.createElement(t.span,{className:"mbin"},"−"),n.createElement(t.span,{className:"mspace",style:{marginRight:"0.2222em"}})),n.createElement(t.span,{className:"base"},n.createElement(t.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),n.createElement(t.span,{className:"mord"},n.createElement(t.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"}},"C"),n.createElement(t.span,{className:"msupsub"},n.createElement(t.span,{className:"vlist-t vlist-t2"},n.createElement(t.span,{className:"vlist-r"},n.createElement(t.span,{className:"vlist",style:{height:"0.1514em"}},n.createElement(t.span,{style:{top:"-2.55em",marginLeft:"-0.0715em",marginRight:"0.05em"}},n.createElement(t.span,{className:"pstrut",style:{height:"2.7em"}}),n.createElement(t.span,{className:"sizing reset-size6 size3 mtight"},n.createElement(t.span,{className:"mord mathnormal mtight",style:{marginRight:"0.02691em"}},"w")))),n.createElement(t.span,{className:"vlist-s"},"​")),n.createElement(t.span,{className:"vlist-r"},n.createElement(t.span,{className:"vlist",style:{height:"0.15em"}},n.createElement(t.span)))))),n.createElement(t.span,{className:"mclose"},")")))))),"\n"),"\n",n.createElement(t.p,null,"이를 사용하기 위해 ",n.createElement(t.strong,null,"카메라의 내부/외부 파라미터"),"를 구해야했고, ",n.createElement(t.strong,null,"체커보드 패턴을 사용한 카메라 캘리브레이션")," 절차를 추가하였습니다."),"\n",n.createElement(t.hr),"\n",n.createElement(t.p,null,"이미지로부터 박스 각 변의 길이를 구하기 위해서는 먼저 박스 이미지를 추출해야 했습니다. ",n.createElement(t.strong,null,"박스 이미지를 학습시킨 모델"),"을 통해 ",n.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Android ML kit</code>'}}),"로 ",n.createElement(t.strong,null,"박스 이미지만을 크롭"),"해내었습니다."),"\n",n.createElement(t.p,null,"그리고 ",n.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">OpenCV</code>'}}),"를 사용하여 크롭한 박스 이미지에서 ",n.createElement(t.strong,null,"배경제거"),"를 하였고 ",n.createElement(t.strong,null,"윤곽선을 검출하여 각 꼭짓점을 계산"),"했습니다. 계산된 꼭짓점을 이용하여 상자의 꼭짓점을 ",n.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">3D 좌표계로 변환</code>'}}),"하였고, ",n.createElement(t.strong,null,"캘리브레이션을 통해 계산된 파라미터를 활용"),"하여 실제 ",n.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">월드 좌표계</code>'}}),"로 변환하여 ",n.createElement(t.strong,null,"실제 박스의 체적을 도출"),"해낼 수 있었습니다."),"\n",n.createElement(t.blockquote,null,"\n",n.createElement(t.p,null,n.createElement(t.strong,null,"2023년 CJ 미래기술 챌린지 본선 진출 출품작"),"입니다."),"\n"),"\n",n.createElement(s.Z,null,n.createElement(t.img,{src:"https://img.shields.io/badge/androidstudio-3DDC84?style=for-the-badge&logo=androidstudio&logoColor=white",alt:"Android Studio"}),"\n",n.createElement(t.img,{src:"https://img.shields.io/badge/kotlin-7F52FF?style=for-the-badge&logo=kotlin&logoColor=white",alt:"Kotlin"}),"\n",n.createElement(t.img,{src:"https://img.shields.io/badge/kotlin-B7178C?style=for-the-badge&logo=reactivex&logoColor=white",alt:"RxJava"}),"\n",n.createElement(t.img,{src:"https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white",alt:"Python"}),"\n",n.createElement(t.img,{src:"https://img.shields.io/badge/opencv-5C3EE8?style=for-the-badge&logo=opencv&logoColor=white",alt:"OpenCV"}),"\n",n.createElement(t.img,{src:"https://img.shields.io/badge/tensorflow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white",alt:"TensorFlow"}),"\n",n.createElement(t.img,{src:"https://img.shields.io/badge/onnx-005CED?style=for-the-badge&logo=onnx&logoColor=white",alt:"ONNX"})),"\n",n.createElement(t.h2,null,"어플 구조"),"\n",n.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 812px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/f539d0b8fd27144f7f1dac0b1227b41b/63ec5/flow-chart.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 70.46153846153845%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAA7DAAAOwwHHb6hkAAACz0lEQVR42m1TW1PTUBDu/3/gJjPqkz46jhSoDHhBpwhUCwKdtPZK2iZNc2tuTXLSpIX53D2AD2pmdnZzsuf7vr2kNHNdKIoC27agqSpuez14dDbs9zGgWCVzbRuLPIcQAlmWYbFYyPju7g5/P6U4jjGbzaASmOd5CMMQge/BMqdkJszpFL7nyxwGSgkoSRKZlxPJP4BhGDyo08Zw6ZJD6lzXISATjuNA0zV5ZhJ4PI8RRkQYPBD8F5Av6RMd06mB8XgMYzIhcJ3iEdrtDubRXCp6slSkVPaDSga8v7/HarWSxi0oucRuU49YJcdMwN73fellmWkqFfEZe86fz+fUCmpREEhwbh1baWoYUlG/38NoNMKUS6MPBbHHlJiJDCl57mdAgKxc1ycSkIG5l7quSy+IuOQRI39kSwjIMi3qUSBVPTFzsmVZ8l2jy6w0kao9WWoURX8GRkOJSNlYqlPVITqdDgwaSOPmBqPhEM2mIhVwzOq4Nbe3Awma54UkybLF4zrltDYp7RYFPMmU4iTLUSwEnKsjjM93pTfr7zGieHJeRmwOIALKbX1G7+tbtI7foEveqlcgRlcESAyOY6PX68KbuUgEAQrqT/U1epVn6B9so7W3gdbuJvTDbUTqNYRvIjp9BWVnDZ39LTR31tHf38Si8wWlaJ4gov1KEkFDSMGKl3mGcHAJ51cNZusMTrsGm2K/U0M6M5DFtIvd79BuTtCvH2N8XYXVPEU86RBgTD1YFBBUKhsDFgTots9hNKqwKdFWvsFuncJpVpE4OsQ8gN8+g0dElnJC55xzglhrocT9ix+nmyQxRL6UJVtUcuPdGpTyOprlDahHL9DbW4fQFKQe/ZbHL9Hc3aLz5/i1t4Xu/gbi5ieUeNQ8+qIosFwtpcoio5W4/gD36hDTiwNYlwdw6d2olSEsFSKi5b6oYPKjAq/xEfbPQ9iXFYT9On4DOv8EZhLaZvYAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="flow chart"\n        title=""\n        src="/static/f539d0b8fd27144f7f1dac0b1227b41b/63ec5/flow-chart.png"\n        srcset="/static/f539d0b8fd27144f7f1dac0b1227b41b/ff46a/flow-chart.png 325w,\n/static/f539d0b8fd27144f7f1dac0b1227b41b/a6d36/flow-chart.png 650w,\n/static/f539d0b8fd27144f7f1dac0b1227b41b/63ec5/flow-chart.png 812w"\n        sizes="(max-width: 812px) 100vw, 812px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",n.createElement(t.h2,null,"알고리즘 구조"),"\n",n.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 840px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/8b1bcc4d417454d3f3198ae9fb735d5e/1e088/algorithm.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 60.61538461538461%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAA7DAAAOwwHHb6hkAAACu0lEQVR42i2S208bZxDF/fdXqqqSKk2VKulLHlI3gDEJBmwH2xgjTMH3+2296+veb8ZWHn6dXfpwdL6d0Y7OOTMJLwjZHw7Yjsvu5YVwtycMbHyjjq/X8bY1gv95MS6znlZQ+kUM7ZHAaMT10GiyM2v49pxEEOzYbjf0el104Zf9DwJ/yw+7jKtlsedX6NMLbPWK4dNnlNYxWveU1eAcL+orl5jTDPttnp07JGGJMtOycT0f07SEQ8LQxd40cfW2KG3H7Mi3MrpnMakyHdxhLOsEVhff7OBJ3xOVnq2RME1TFPm4rosn7Aj7lo7dzGM2svSLJ/QKJ2xr13jdgvS2GP0HJrcnjG/PGJVSDAST0jH6uEnCkIGH/R7XcfA8D11UBsaSw1OSRe5PBunf6Ak6qSP2//6Nv53jNjKol2/pR72zN4y+/c469wfu4P5VoW3bWJYVI1pO4BhY3RJev4z6dI0mcOVtdooEts6mL7YrX1Eer1g8ZdFbBdRqBmveIxENUxSFTqfDeDyJs/Tlp+HtKSPBpJxiJJhWzpjdpyWzDdbwgWHpC638P/QLxzTzSZRKCkdpkwjDMM5Qnc8J5IR2Lwc5BY3V9w+Mxcrk4h2d06PYnnr9Xk5IZV1N00j+xHPyZxpffqEjtqfnRxjdsmxZbGqqFqucy9BoKYFj4vTKbJs3rBrf0Z5zYjuLI7Y9UWhP6jjdInbvlllVzqZTwm4X5LT6rwMj27qux7BkOaFkqFW/MbkTmwLtMcOycSPvFNrDV6bl09dsn7PMKmnUhwtm5ROsWSs67ADDMOP8TNPAD3dia8Hm5iNd2ews8w4l+4H1XZLh+RvGF2/j2iz3F4viJ0ZSm16+Z5L+VRTfkYjuLxrqiLKIoxwjy9tWkUUtz1osL5sFVu0Kq3o+rm1E7bJZekUtJ7FIv5bFUvv8B8UJUve8dbJZAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="algorithm"\n        title=""\n        src="/static/8b1bcc4d417454d3f3198ae9fb735d5e/1e088/algorithm.png"\n        srcset="/static/8b1bcc4d417454d3f3198ae9fb735d5e/ff46a/algorithm.png 325w,\n/static/8b1bcc4d417454d3f3198ae9fb735d5e/a6d36/algorithm.png 650w,\n/static/8b1bcc4d417454d3f3198ae9fb735d5e/1e088/algorithm.png 840w"\n        sizes="(max-width: 840px) 100vw, 840px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",n.createElement(m.Z,null,n.createElement(r.Z,{members:[{imageSrc:"https://github.com/ssigner.png",link:"https://github.com/ssigner",name:"김종훈(팀장)",description:"카메라 캘리브레이션 및 알고리즘 개발"},{imageSrc:"https://github.com/jagaldol.png",link:"https://github.com/jagaldol",name:"안혜준",description:"인공지능 및 알고리즘 개발"},{imageSrc:"https://github.com/gogumac.png",link:"https://github.com/gogumac",name:"김유빈",description:"ML kit 객체 인식 및 어플 기능 개발"},{imageSrc:"https://github.com/jihoon5916.png",link:"https://github.com/jihoon5916",name:"김지훈",description:"알고리즘 개발"}]})))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?n.createElement(t,e,n.createElement(c,e)):c(e)},o=a(8032),g=a(4856),u=a(6657),d=a(3634),p=a(1852);function h(e){let{deploy_link:t}=e;const{0:a,1:l}=(0,n.useState)(!1),{0:s,1:m}=(0,n.useState)(!1),{0:r,1:c}=(0,n.useState)(!1),i=(0,n.useRef)(null),o=(0,n.useRef)(null),g=()=>{if(i.current){const e=i.current.getBoundingClientRect().top;c(e<=50)}};return(0,n.useEffect)((()=>{r&&(s||(m(!0),o.current&&clearTimeout(o.current),o.current=setTimeout((()=>{m(!1)}),1e3)))}),[r]),(0,n.useEffect)((()=>{const e=setTimeout((()=>{l(!0)}),1e3);return window.addEventListener("scroll",g),()=>{clearTimeout(e),window.removeEventListener("scroll",g),o.current&&clearTimeout(o.current)}}),[]),n.createElement("div",{ref:i,className:"absolute top-0 left-0 w-full h-full"},n.createElement("a",{href:t,className:"w-full h-full opacity-0 "+(s?"opacity-100":"")+" "+(a?"group-hover:opacity-100":"")+" bg-gradient-to-tl from-main-theme to-main-theme/60 z-10 transition-all duration-500 text-white flex drop-shadow-2xl"},n.createElement("h3",{className:"absolute right-0 bottom-0 text-3xl max-md:text-2xl max-sm:text-lg max-sm:-translate-y-3 -translate-x-8 -translate-y-5"},"바로가기")))}function E(e){let{data:t,children:a}=e;const{title:l,subtitle:s,stack:m,banner:r,start_date:c,end_date:i,deploy_link:u}=t.mdx.frontmatter,E=(0,o.c)(r),b=new Date(c),f=new Date(i),x=b.getFullYear()+"."+(b.getMonth()+1)+"."+b.getDate()+". ~ "+f.getFullYear()+"."+(f.getMonth()+1)+"."+f.getDate()+".",w=t.imagesHeight400.edges.map((e=>(0,o.c)(e.node))),y=t.imagesHeight200.edges.map((e=>(0,o.c)(e.node))),N=t.imagesHeight400.edges.map((e=>e.node.childImageSharp.original.src));return n.createElement(g.Z,null,n.createElement("div",{className:"mt-10 w-full flex justify-center"},n.createElement("div",{className:"w-[1300px] max-2xl:w-[1000px] max-xl:w-[1000px] max-lg:w-[700px] max-md:w-full"},n.createElement("div",{className:"mb-8"},n.createElement("h1",null,l),n.createElement("p",null,s),n.createElement("p",{className:"text-end"},x)),n.createElement("div",{className:"group relative mb-2"},E?n.createElement(n.Fragment,null,n.createElement(o.G,{alt:l+" 대표 이미지",loading:"eager",image:E,objectFit:"contain"}),u?n.createElement(h,{deploy_link:u}):null):null),n.createElement("div",{className:"flex gap-1 justify-end items-center flex-wrap"},m.map((e=>n.createElement("div",{className:"h-7",key:e},n.createElement(d.Z,{name:e}))))),n.createElement(p.Z,{imageList400:w,imageList200:y,srcList:N}),n.createElement("div",{className:"markdown-body"},a))))}function b(e){return n.createElement(E,e,n.createElement(i,e))}const f=e=>{let{data:t}=e;return n.createElement(u.Z,{title:t.mdx.frontmatter.title,description:t.mdx.frontmatter.subtitle,pathname:"/projects/"+t.mdx.frontmatter.slug+"/",image:t.mdx.frontmatter.image.childImageSharp.original.src})}},1852:function(e,t,a){a.d(t,{Z:function(){return o}});var l=a(7294),n=a(8032),s=a(6467),m=a(9417),r=a(7814),c=a(2932);function i(e){let{srcList:t,number:a,close:n,toLeft:s,toRight:i}=e;const{lockScroll:o,openScroll:g}=(0,c.Z)();return(0,l.useEffect)((()=>(o(),()=>{g()})),[]),l.createElement("div",{className:"fixed z-[500] top-0 bottom-0 left-0 right-0 bg-black/80 flex justify-center"},l.createElement("div",{className:"w-[1400px] flex flex-col items-center justify-center"},l.createElement("div",{className:"flex w-full justify-end pr-10 max-md:pr-5"},l.createElement("button",{type:"button","aria-label":"닫기",onClick:n},l.createElement(r.G,{icon:m.g82,color:"white",size:"3x"}))),l.createElement("div",{className:"px-5 h-[80%] flex items-center",onClick:e=>{const t=e.target,{width:a}=t.getBoundingClientRect(),{clientX:l}=e;l-t.offsetLeft<a/2?s():i()}},l.createElement("img",{src:t[a],alt:t[a],className:"max-w-full max-h-full flex-1 object-contain"})),l.createElement("div",{className:"flex items-center"},l.createElement("div",{className:"mx-7 max-lg:mx-4"},l.createElement("button",{type:"button","aria-label":"왼쪽 더보기",className:"bg-white rounded-full shadow-[0_1px_2px_0_rgba(0,0,0,0.3)] h-14 w-14 max-lg:h-10 max-lg:w-10 "+(a>0?"":"invisible"),onClick:s},l.createElement(r.G,{size:"lg",icon:m.EyR}))),l.createElement("p",{className:"text-white text-xl w-32 text-center"},a+1," / ",t.length),l.createElement("div",{className:"mx-7 max-lg:mx-4"},l.createElement("button",{type:"button","aria-label":"오른쪽 더보기",className:"bg-white rounded-full shadow-[0_1px_2px_0_rgba(0,0,0,0.3)] h-14 w-14 max-lg:h-10 max-lg:w-10 "+(a<t.length-1?"":"invisible"),onClick:i},l.createElement(r.G,{size:"lg",icon:m.yOZ}))))))}function o(e){let{imageList400:t,imageList200:a,srcList:c}=e;const o=(0,s.Gc)(),{0:g,1:u}=(0,l.useState)(!0),{0:d,1:p}=(0,l.useState)(!1),{0:h,1:E}=(0,l.useState)(!1),{0:b,1:f}=(0,l.useState)(0),x=(0,l.useRef)(null),w=()=>{if(x.current){const{scrollLeft:e,scrollWidth:t,clientWidth:a}=x.current,l=e<=0;p(e+a>=t),u(l)}};return(0,l.useEffect)((()=>{const e=x.current;return e&&(e.addEventListener("scroll",w),w()),()=>{e&&e.removeEventListener("scroll",w)}}),[]),t.length>0?l.createElement(l.Fragment,null,l.createElement("div",{className:"flex justify-center my-10 bg-neutral-200 relative"},!g&&l.createElement("div",{className:"absolute z-10 -left-7 max-lg:-left-4 top-0 bottom-0 flex items-center"},l.createElement("button",{type:"button","aria-label":"왼쪽 더보기",className:"bg-white rounded-full shadow-[0_1px_2px_0_rgba(0,0,0,0.3)] h-14 w-14 max-lg:h-10 max-lg:w-10",onClick:()=>{x.current&&x.current.scrollBy({left:o.lg?-350:-800,behavior:"smooth"})}},l.createElement(r.G,{size:"lg",icon:m.EyR}))),l.createElement("div",{className:"flex gap-5 overflow-x-scroll hide-scroll-bar",ref:x},o.lg?a.map(((e,t)=>{var a;return l.createElement("button",{type:"button",onClick:()=>{f(t),E(!0)},"aria-label":t+" 번째 이미지",key:(null===(a=e.images.fallback)||void 0===a?void 0:a.src)||"image-"+t},l.createElement(n.G,{alt:t+" 번째 이미지",image:e,className:"rounded-xl h-full min-w-max hover:cursor-pointer",objectFit:"contain",onClick:()=>{f(t),E(!0)}}))})):t.map(((e,t)=>{var a,s;return l.createElement("button",{type:"button",onClick:()=>{f(t),E(!0)},"aria-label":t+" 번째 이미지",key:(null===(a=e.images.fallback)||void 0===a?void 0:a.src)||"image-"+t},l.createElement(n.G,{alt:"",image:e,className:"rounded-2xl h-full min-w-max hover:cursor-pointer",objectFit:"contain",key:(null===(s=e.images.fallback)||void 0===s?void 0:s.src)||"image-"+t,onClick:()=>{f(t),E(!0)}}))}))),!d&&l.createElement("div",{className:"absolute z-10 -right-7 max-lg:-right-4 top-0 bottom-0 flex items-center"},l.createElement("button",{type:"button","aria-label":"오른쪽 더보기",className:"bg-white rounded-full shadow-[0_1px_2px_0_rgba(0,0,0,0.3)] h-14 w-14 max-lg:h-10 max-lg:w-10",onClick:()=>{x.current&&x.current.scrollBy({left:o.lg?350:800,behavior:"smooth"})}},l.createElement(r.G,{size:"lg",icon:m.yOZ})))),h?l.createElement(i,{srcList:c,number:b,close:()=>E(!1),toLeft:()=>f(b-1<0?0:b-1),toRight:()=>f(b+1>c.length-1?c.length-1:b+1)}):null):null}},7863:function(e,t,a){a.d(t,{Z:function(){return n}});var l=a(7294);function n(e){let{children:t}=e;return l.createElement(l.Fragment,null,l.createElement("h2",{className:"text-center"},"👥 팀원"),t)}},9016:function(e,t,a){a.d(t,{Z:function(){return m}});var l=a(7294);function n(e){let{children:t,link:a}=e;return a?l.createElement("a",{href:a},t):t}function s(e){let{member:t}=e;return l.createElement(l.Fragment,null,l.createElement("div",{className:"min-w-32 w-32 min-h-32 h-32 max-md:min-w-20 max-md:w-20 max-md:min-h-20 max-md:h-20 justify-self-end"},l.createElement(n,{link:t.link},t.imageSrc?l.createElement("img",{className:"rounded-full border-slate-300 border",src:t.imageSrc,alt:t.name+" 사진"}):l.createElement("div",{className:"w-full h-full rounded-full border-slate-300 border bg-white"}))),l.createElement("div",{className:"flex flex-col"},l.createElement("p",{className:"text-xl max-md:text-base font-semibold my-2"},t.name),l.createElement("p",{className:"!my-0"},t.description)))}function m(e){let{members:t}=e;return l.createElement("div",{className:"grid grid-cols-[1fr_2fr_1fr_2fr] max-lg:grid-cols-[1fr_2fr] items-center gap-5"},t.map((e=>l.createElement(s,{member:e,key:e.name+" "+e.description}))))}},1884:function(e,t,a){a.d(t,{Z:function(){return n}});var l=a(7294);function n(e){let{children:t}=e;return l.createElement(l.Fragment,null,l.createElement("h2",{className:"text-center"},"🔧 사용 기술"),l.createElement("div",{className:"flex w-full justify-center my-10"},l.createElement("div",{className:"flex justify-center flex-wrap gap-x-1 gap-y-3 w-[1000px] max-lg:w-[700px] max-md:w-full"},t)))}},1151:function(e,t,a){a.d(t,{ah:function(){return s}});var l=a(7294);const n=l.createContext({});function s(e){const t=l.useContext(n);return l.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);
//# sourceMappingURL=component---src-templates-project-details-tsx-content-file-path-src-projects-minor-box-size-mdx-d770748fd82e8ea1a898.js.map