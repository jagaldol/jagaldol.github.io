(self.webpackChunkapp=self.webpackChunkapp||[]).push([[351],{7814:function(e,t,r){"use strict";r.d(t,{G:function(){return v}});var a=r(3636),n=r(5697),o=r.n(n),l=r(7294);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function u(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function b(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}var d=["style"];var h=!1;try{h=!0}catch(w){}function x(e){return e&&"object"===c(e)&&e.prefix&&e.iconName&&e.icon?e:a.Qc.icon?a.Qc.icon(e):null===e?null:e&&"object"===c(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function y(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?f({},e,t):{}}var v=l.forwardRef((function(e,t){var r=e.icon,n=e.mask,o=e.symbol,l=e.className,i=e.title,c=e.titleId,m=e.maskId,p=x(r),b=y("classes",[].concat(u(function(e){var t,r=e.beat,a=e.fade,n=e.beatFade,o=e.bounce,l=e.shake,i=e.flash,s=e.spin,c=e.spinPulse,m=e.spinReverse,u=e.pulse,p=e.fixedWidth,b=e.inverse,d=e.border,h=e.listItem,x=e.flip,y=e.size,v=e.rotation,g=e.pull,w=(f(t={"fa-beat":r,"fa-fade":a,"fa-beat-fade":n,"fa-bounce":o,"fa-shake":l,"fa-flash":i,"fa-spin":s,"fa-spin-reverse":m,"fa-spin-pulse":c,"fa-pulse":u,"fa-fw":p,"fa-inverse":b,"fa-border":d,"fa-li":h,"fa-flip":!0===x,"fa-flip-horizontal":"horizontal"===x||"both"===x,"fa-flip-vertical":"vertical"===x||"both"===x},"fa-".concat(y),null!=y),f(t,"fa-rotate-".concat(v),null!=v&&0!==v),f(t,"fa-pull-".concat(g),null!=g),f(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(w).map((function(e){return w[e]?e:null})).filter((function(e){return e}))}(e)),u(l.split(" ")))),d=y("transform","string"==typeof e.transform?a.Qc.transform(e.transform):e.transform),w=y("mask",x(n)),E=(0,a.qv)(p,s(s(s(s({},b),d),w),{},{symbol:o,title:i,titleId:c,maskId:m}));if(!E)return function(){var e;!h&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",p),null;var O=E.abstract,k={ref:t};return Object.keys(e).forEach((function(t){v.defaultProps.hasOwnProperty(t)||(k[t]=e[t])})),g(O[0],k)}));v.displayName="FontAwesomeIcon",v.propTypes={beat:o().bool,border:o().bool,beatFade:o().bool,bounce:o().bool,className:o().string,fade:o().bool,flash:o().bool,mask:o().oneOfType([o().object,o().array,o().string]),maskId:o().string,fixedWidth:o().bool,inverse:o().bool,flip:o().oneOf([!0,!1,"horizontal","vertical","both"]),icon:o().oneOfType([o().object,o().array,o().string]),listItem:o().bool,pull:o().oneOf(["right","left"]),pulse:o().bool,rotation:o().oneOf([0,90,180,270]),shake:o().bool,size:o().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:o().bool,spinPulse:o().bool,spinReverse:o().bool,symbol:o().oneOfType([o().bool,o().string]),title:o().string,titleId:o().string,transform:o().oneOfType([o().string,o().object]),swapOpacity:o().bool},v.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var g=function e(t,r){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var n=(r.children||[]).map((function(r){return e(t,r)})),o=Object.keys(r.attributes||{}).reduce((function(e,t){var a=r.attributes[t];switch(t){case"class":e.attrs.className=a,delete r.attributes.class;break;case"style":e.attrs.style=a.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,a=t.indexOf(":"),n=b(t.slice(0,a)),o=t.slice(a+1).trim();return n.startsWith("webkit")?e[(r=n,r.charAt(0).toUpperCase()+r.slice(1))]=o:e[n]=o,e}),{});break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=a:e.attrs[b(t)]=a}return e}),{attrs:{}}),l=a.style,i=void 0===l?{}:l,c=m(a,d);return o.attrs.style=s(s({},o.attrs.style),i),t.apply(void 0,[r.tag,s(s({},o.attrs),c)].concat(u(n)))}.bind(null,l.createElement)},9116:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var a=r(7294),n=r(1883),o=r(9417),l=r(4288),i=r(7814),s=r(3024);function c(){return a.createElement("div",{className:"fixed left-0 top-0 w-full h-screen z-30 bg-black/10 flex justify-end"},a.createElement("nav",{className:"bg-bg w-72 h-full p-5 py-32 flex flex-col items-center"},a.createElement("div",{className:"flex flex-col items-center gap-6"},a.createElement(n.Link,{to:"/",className:"text-lg pb-1 transition-all hover:text-main-theme duration-1000",activeClassName:"text-main-theme"},"Home"),a.createElement(n.Link,{to:"/projects",className:"text-lg pb-1 transition-all hover:text-main-theme duration-1000",activeClassName:"text-main-theme"},"Project"),a.createElement("a",{href:"https://blog.jagaldol.com/",className:"text-lg pb-1 transition-all hover:text-main-theme duration-1000"},"Blog"))))}function f(){const{0:e,1:t}=(0,a.useState)(!1);return a.createElement("header",{className:"w-full h-14 py-3 flex justify-center max-md:px-0 bg-bg/90 backdrop-blur sticky top-0 z-50"},a.createElement("div",{className:"flex items-center w-[1300px] px-10 max-md:px-0"},a.createElement(n.Link,{to:"/",className:"text-2xl max-md:text-xl max-md:mx-5 mx-10 flex-1"},"Jagaldol"),a.createElement("nav",{className:"max-md:hidden h-full flex items-end"},a.createElement(n.Link,{to:"/",className:"mx-3 text-xl transition-all hover:text-main-theme hover:-translate-y-[2px] duration-1000",activeClassName:"text-main-theme -translate-y-[2px]"},"Home"),a.createElement(n.Link,{to:"/projects",className:"mx-3 text-xl transition-all hover:text-main-theme hover:-translate-y-[2px] duration-1000",activeClassName:"text-main-theme -translate-y-[2px]"},"Project"),a.createElement("a",{href:"https://blog.jagaldol.com/",className:"mx-3 text-xl word-highlight transition-all hover:text-main-theme hover:-translate-y-[2px] duration-1000"},"Blog")),a.createElement("div",{className:"hidden max-md:block"},a.createElement("button",{type:"button","aria-label":"메뉴",onClick:()=>t(!e),className:"relative mr-5 h-6 p-1 z-50"},e?a.createElement("div",{className:"relative w-6 h-[3px] bg-transparent\r transition-all duration-500 before:transition-all before:duration-500 after:transition-all after:duration-500\r before:w-6 before:h-[3px] before:absolute before:bg-main-theme before:left-0\r before:-rotate-45 before:top-0\r after:w-6 after:h-[3px] after:absolute after:bg-main-theme after:left-0\r after:rotate-45 after:top-0"}):a.createElement("div",{className:"relative w-6 h-[3px] bg-main-theme\r transition-all duration-500 before:transition-all before:duration-500 after:transition-all after:duration-500\r before:w-6 before:h-[3px] before:absolute before:bg-main-theme before:top-[9px] before:left-0\r after:w-6 after:h-[3px] after:absolute after:bg-main-theme after:-top-[9px] after:left-0"})),e?a.createElement(c,null):null)))}var m=r(7600),u=r.n(m);function p(e){let{children:t}=e;const{0:r,1:c}=(0,a.useState)(!1),m=()=>{document.documentElement.clientHeight>=document.documentElement.scrollHeight-document.documentElement.scrollTop?c(!0):c(!1)};return(0,a.useEffect)((()=>(window.addEventListener("scroll",m),()=>window.removeEventListener("scroll",m))),[]),a.createElement("div",{className:"min-h-screen h-auto absolute left-0 top-0 w-full"},a.createElement(f,null),a.createElement("button",{type:"button","aria-label":r?"맨 위로":"맨 밑으로",className:"fixed right-10 bottom-28 z-40 w-12 h-12 rounded-full drop-shadow bg-main-theme\n          flex justify-center items-center  \n          hover:bg-main-theme-70 "+(r?"hover:-translate-y-1":"hover:translate-y-1")+" transition-all\n          max-xl:right-7 max-xl:w-10 max-xl:h-10 max-lg:bottom-20 max-md:bottom-12",onClick:()=>{r?window.scrollTo({top:0,behavior:"smooth"}):window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},a.createElement(u(),{className:"stroke-white h-6 max-2xl:h-5 transition-all "+(r?"rotate-180":"")})),a.createElement("main",{className:"px-5 pb-40"},t),a.createElement("footer",{className:"absolute bottom-0 left-0 h-16 max-md:h-10 bg-white w-full px-20 max-sm:px-10 flex items-center"},a.createElement("div",{className:" flex-1"},a.createElement(n.Link,{to:"/",className:"underline flex-1"},"©Hyejun An.")),a.createElement("div",{className:"flex gap-2 items-end"},a.createElement("p",null,"Contact."),a.createElement("a",{href:"mailto:jagaldol.dev@gmail.com","aria-label":"이메일"},a.createElement(i.G,{size:"lg",icon:l.FU$})),a.createElement("a",{href:"https://github.com/jagaldol","aria-label":"깃허브"},a.createElement(i.G,{size:"lg",icon:s.zhw})),a.createElement("a",{href:"https://blog.jagaldol.com/","aria-label":"블로그"},a.createElement(i.G,{size:"lg",icon:o.M_6})))))}},7600:function(e,t,r){var a=r(7294);function n(e){return a.createElement("svg",e,[a.createElement("path",{d:"M14.9242 18.305L7.85323 25.376L0.782227 18.306",key:0}),a.createElement("path",{d:"M7.85352 25.376L7.99451 1.47601",key:1})])}n.defaultProps={width:"16",height:"27",viewBox:"0 0 16 27",stroke:"black",fill:"none",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},e.exports=n,n.default=n},4288:function(e,t,r){"use strict";r.d(t,{FU$:function(){return a}});var a={prefix:"far",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"]}}}]);
//# sourceMappingURL=commons-6e76317b553734f30ddb.js.map