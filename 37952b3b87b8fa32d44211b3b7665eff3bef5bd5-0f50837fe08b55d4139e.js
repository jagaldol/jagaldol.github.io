"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[582],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,i=/[_.\- ]+/,s=new RegExp("^"+i.source),l=new RegExp(i.source+n.source,"gu"),o=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const i=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):i(e);return e!==i(e)&&(e=((e,r,n)=>{let i=!1,s=!1,l=!1;for(let o=0;o<e.length;o++){const c=e[o];i&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),i=!1,l=s,s=!0,o++):s&&l&&a.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),l=s,s=!1,i=!0):(i=r(c)===c&&n(c)!==c,l=s,s=n(c)===c&&r(c)!==c)}return e})(e,i,c)),e=e.replace(s,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,i):i(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(l.lastIndex=0,o.lastIndex=0,e.replace(l,((e,a)=>t(a))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{G:function(){return q},L:function(){return h},M:function(){return L},P:function(){return k},_:function(){return l},a:function(){return s},b:function(){return d},c:function(){return c},g:function(){return g},h:function(){return o}});var r=a(7294),n=(a(3204),a(5697)),i=a.n(n);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(a=i[r])>=0||(n[a]=e[a]);return n}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const c=e=>{var t;return(e=>{var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function u(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function d(e,t,a,r,n){return void 0===n&&(n={}),s({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:s({},n,{opacity:t?1:0})})}function g(e,t,a,r,n,i,l,o){const c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),o&&(c.objectPosition=o);const u=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const m=["children"],p=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+n+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},h=function(e){let{children:t}=e,a=l(e,m);return r.createElement(r.Fragment,null,r.createElement(p,s({},a)),t,null)},y=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],b=function(e){let{src:t,srcSet:a,loading:n,alt:i="",shouldLoad:o}=e,c=l(e,y);return r.createElement("img",s({},c,{decoding:"async",loading:n,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:i}))},v=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,i=l(e,f);const o=i.sizes||(null==t?void 0:t.sizes),c=r.createElement(b,s({},i,t,{sizes:o,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:i}=e;return r.createElement("source",{key:t+"-"+i+"-"+a,type:i,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:o})})),c):c};var w;b.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},v.displayName="Picture",v.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const E=["fallback"],k=function(e){let{fallback:t}=e,a=l(e,E);return t?r.createElement(v,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",s({},a))};k.displayName="Placeholder",k.propTypes={fallback:n.string,sources:null==(w=v.propTypes)?void 0:w.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const L=function(e){return r.createElement(r.Fragment,null,r.createElement(v,s({},e)),r.createElement("noscript",null,r.createElement(v,s({},e,{shouldLoad:!0}))))};L.displayName="MainImage",L.propTypes=v.propTypes;const C=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],S=["style","className"],x=e=>e.replace(/\n/g,""),I=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),s=3;s<r;s++)n[s-3]=arguments[s];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},N={image:i().object.isRequired,alt:I},T=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],j=["style","className"],O=new Set;let _,F;const R=function(e){let{as:t="div",image:n,style:i,backgroundColor:c,className:d,class:g,onStartLoad:m,onLoad:p,onError:h}=e,y=l(e,T);const{width:f,height:b,layout:v}=n,w=u(f,b,v),{style:E,className:k}=w,L=l(w,j),C=(0,r.useRef)(),S=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);g&&(d=g);const x=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(v,f,b);return(0,r.useEffect)((()=>{_||(_=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return F=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=C.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==m||m({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==m||m({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void O.add(S);if(F&&O.has(S))return;let t,r;return _.then((e=>{let{renderImageToString:a,swapPlaceholderImage:l}=e;C.current&&(C.current.innerHTML=a(s({isLoading:!0,isLoaded:O.has(S),image:n},y)),O.has(S)||(t=requestAnimationFrame((()=>{C.current&&(r=l(C.current,S,O,i,m,p,h))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{O.has(S)&&F&&(C.current.innerHTML=F(s({isLoading:O.has(S),isLoaded:O.has(S),image:n},y)),null==m||m({wasCached:!0}),null==p||p({wasCached:!0}))}),[n]),(0,r.createElement)(t,s({},L,{style:s({},E,i,{backgroundColor:c}),className:k+(d?" "+d:""),ref:C,dangerouslySetInnerHTML:{__html:x},suppressHydrationWarning:!0}))},q=(0,r.memo)((function(e){return e.image?(0,r.createElement)(R,e):null}));q.propTypes=N,q.displayName="GatsbyImage";const A=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function P(e){return function(t){let{src:a,__imageData:n,__error:i}=t,o=l(t,A);return i&&console.warn(i),n?r.createElement(e,s({image:n},o)):(console.warn("Image not loaded",a),null)}}const z=P((function(e){let{as:t="div",className:a,class:n,style:i,image:o,loading:c="lazy",imgClassName:m,imgStyle:p,backgroundColor:y,objectFit:f,objectPosition:b}=e,v=l(e,C);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),p=s({objectFit:f,objectPosition:b,backgroundColor:y},p);const{width:w,height:E,layout:I,images:N,placeholder:T,backgroundColor:j}=o,O=u(w,E,I),{style:_,className:F}=O,R=l(O,S),q={fallback:void 0,sources:[]};return N.fallback&&(q.fallback=s({},N.fallback,{srcSet:N.fallback.srcSet?x(N.fallback.srcSet):void 0})),N.sources&&(q.sources=N.sources.map((e=>s({},e,{srcSet:x(e.srcSet)})))),r.createElement(t,s({},R,{style:s({},_,i,{backgroundColor:y}),className:F+(a?" "+a:"")}),r.createElement(h,{layout:I,width:w,height:E},r.createElement(k,s({},g(T,!1,I,w,E,j,f,b))),r.createElement(L,s({"data-gatsby-image-ssr":"",className:m},v,d("eager"===c,!1,q,c,p)))))})),M=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},W=new Set(["fixed","fullWidth","constrained"]),D={src:i().string.isRequired,alt:I,width:M,height:M,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!W.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};z.displayName="StaticImage",z.propTypes=D;const H=P(q);H.displayName="StaticImage",H.propTypes=D},3634:function(e,t,a){a.d(t,{Z:function(){return n}});var r=a(7294);function n(e){let{name:t,autoHeight:a=!1}=e;const n="https://img.shields.io/badge/-"+t+"-FFFFFF?style=for-the-badge&logo="+t+"&logoColor=black";return r.createElement("img",{src:n,alt:t,className:"drop - shadow "+(a?"":"object-contain w-full h-full")})}},6657:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(7294),n=a(1883);function i(e){let{title:t,description:a,image:i,pathname:s,children:l}=e;const{title:o,name:c,description:u,image:d,siteUrl:g}=(0,n.useStaticQuery)("1733296450").site.siteMetadata,m={title:(t||o)+" | "+c,description:a||u,image:""+g+(i||d),url:""+g+(s||"/")};return r.createElement(r.Fragment,null,r.createElement("title",null,m.title),r.createElement("meta",{name:"description",content:m.description}),r.createElement("meta",{name:"image",content:m.image}),r.createElement("meta",{name:"og:title",content:m.title}),r.createElement("meta",{name:"og:site_name",content:o+" | "+c}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{name:"og:description",content:m.description}),r.createElement("meta",{name:"og:image",content:m.image}),r.createElement("meta",{name:"og:url",content:m.url}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),l)}}}]);
//# sourceMappingURL=37952b3b87b8fa32d44211b3b7665eff3bef5bd5-0f50837fe08b55d4139e.js.map