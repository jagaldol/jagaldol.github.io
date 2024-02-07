"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[691],{1187:function(e,t,r){r.d(t,{Z:function(){return k}});var n=r(7294),l=r(3636),a=r(5697),o=r.n(a);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}function m(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function b(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}var y=["style"];var d=!1;try{d=!0}catch(N){}function x(e){return e&&"object"===i(e)&&e.prefix&&e.iconName&&e.icon?e:l.Qc.icon?l.Qc.icon(e):null===e?null:e&&"object"===i(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function v(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?f({},e,t):{}}var g=n.forwardRef((function(e,t){var r=e.icon,n=e.mask,a=e.symbol,o=e.className,c=e.title,i=e.titleId,u=e.maskId,p=x(r),b=v("classes",[].concat(m(function(e){var t,r=e.beat,n=e.fade,l=e.beatFade,a=e.bounce,o=e.shake,c=e.flash,s=e.spin,i=e.spinPulse,u=e.spinReverse,m=e.pulse,p=e.fixedWidth,b=e.inverse,y=e.border,d=e.listItem,x=e.flip,v=e.size,g=e.rotation,h=e.pull,E=(f(t={"fa-beat":r,"fa-fade":n,"fa-beat-fade":l,"fa-bounce":a,"fa-shake":o,"fa-flash":c,"fa-spin":s,"fa-spin-reverse":u,"fa-spin-pulse":i,"fa-pulse":m,"fa-fw":p,"fa-inverse":b,"fa-border":y,"fa-li":d,"fa-flip":!0===x,"fa-flip-horizontal":"horizontal"===x||"both"===x,"fa-flip-vertical":"vertical"===x||"both"===x},"fa-".concat(v),null!=v),f(t,"fa-rotate-".concat(g),null!=g&&0!==g),f(t,"fa-pull-".concat(h),null!=h),f(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(E).map((function(e){return E[e]?e:null})).filter((function(e){return e}))}(e)),m(o.split(" ")))),y=v("transform","string"==typeof e.transform?l.Qc.transform(e.transform):e.transform),E=v("mask",x(n)),O=(0,l.qv)(p,s(s(s(s({},b),y),E),{},{symbol:a,title:c,titleId:i,maskId:u}));if(!O)return function(){var e;!d&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",p),null;var j=O.abstract,w={ref:t};return Object.keys(e).forEach((function(t){g.defaultProps.hasOwnProperty(t)||(w[t]=e[t])})),h(j[0],w)}));g.displayName="FontAwesomeIcon",g.propTypes={beat:o().bool,border:o().bool,beatFade:o().bool,bounce:o().bool,className:o().string,fade:o().bool,flash:o().bool,mask:o().oneOfType([o().object,o().array,o().string]),maskId:o().string,fixedWidth:o().bool,inverse:o().bool,flip:o().oneOf([!0,!1,"horizontal","vertical","both"]),icon:o().oneOfType([o().object,o().array,o().string]),listItem:o().bool,pull:o().oneOf(["right","left"]),pulse:o().bool,rotation:o().oneOf([0,90,180,270]),shake:o().bool,size:o().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:o().bool,spinPulse:o().bool,spinReverse:o().bool,symbol:o().oneOfType([o().bool,o().string]),title:o().string,titleId:o().string,transform:o().oneOfType([o().string,o().object]),swapOpacity:o().bool},g.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var h=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var l=(r.children||[]).map((function(r){return e(t,r)})),a=Object.keys(r.attributes||{}).reduce((function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=n.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,n=t.indexOf(":"),l=b(t.slice(0,n)),a=t.slice(n+1).trim();return l.startsWith("webkit")?e[(r=l,r.charAt(0).toUpperCase()+r.slice(1))]=a:e[l]=a,e}),{});break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[b(t)]=n}return e}),{attrs:{}}),o=n.style,c=void 0===o?{}:o,i=u(n,y);return a.attrs.style=s(s({},a.attrs.style),c),t.apply(void 0,[r.tag,s(s({},a.attrs),i)].concat(m(l)))}.bind(null,n.createElement),E=r(9417);function O(e){let{url:t,title:r}=e;return n.createElement("a",{href:t,className:"text-lg"},r)}function j(e){let{onClose:t}=e;return n.createElement("div",{className:"absolute left-0 top-0 w-full h-screen z-30 bg-black/10"},n.createElement("div",{className:"bg-bg w-[80%] h-full p-5 flex flex-col items-center"},n.createElement("div",{className:"w-full text-end"},n.createElement("button",{type:"button","aria-label":"닫기",onClick:t},n.createElement(g,{icon:E.EOp,size:"lg"}))),n.createElement("a",{href:"/",className:"text-xl mb-10"},"Jagaldol"),n.createElement("div",{className:"flex flex-col items-center gap-4"},n.createElement(O,{url:"/projects",title:"Project"}),n.createElement(O,{url:"https://blog.jagaldol.com/",title:"Blog"}))))}function w(e){let{url:t,title:r}=e;return n.createElement("a",{href:t,className:"mx-3 text-2xl"},r)}function k(){const{0:e,1:t}=(0,n.useState)(!1);return n.createElement(n.Fragment,null,n.createElement("nav",{className:"hidden max-md:block"},n.createElement("button",{type:"button","aria-label":"메뉴",onClick:()=>t(!0)},n.createElement(g,{icon:E.xiG,size:"lg"})),e?n.createElement(j,{onClose:()=>t(!1)}):null),n.createElement("nav",{className:"w-full px-9 py-10 flex items-center max-md:px-0 max-md:hidden"},n.createElement("a",{href:"/",className:"text-3xl mx-10 flex-1 max-md:mx-5 max-md:text-xl max-md:text-center"},"Jagaldol"),n.createElement("div",null,n.createElement(w,{url:"/projects",title:"Project"}),n.createElement(w,{url:"https://blog.jagaldol.com/",title:"Blog"}))))}},6524:function(e,t,r){r.r(t),r.d(t,{Head:function(){return c},default:function(){return o}});var n=r(7294),l=r(1187);function a(){return n.createElement("div",{className:"h-[600px] flex flex-col text-center"},n.createElement("div",{className:"flex flex-col flex-1 items-center justify-center "},n.createElement("h1",{className:"text-5xl flex gap-4 max-md:gap-2 max-md:flex-col max-md:text-3xl"},n.createElement("p",null,"안녕하세요"),n.createElement("p",null,n.createElement("b",null,"안혜준"),"입니다.")),n.createElement("div",{className:"my-10 max-md:text-xs flex flex-col gap-2"},n.createElement("p",null,n.createElement("b",null,"무에서 유를 창조하는 개발자"),", 안혜준입니다."),n.createElement("p",null,"부산대학교 정보컴퓨터공학부에서 졸업을 앞둔 채, 백엔드 개발자로 활동하고 있습니다."),n.createElement("p",null,"웹 개발자로써 여러 프로젝트를 수행해 왔습니다. 더욱 다양한 경험을 통해 성장해나가고 싶습니다!"))),n.createElement("div",{className:"flex justify-center"},n.createElement("button",{type:"button",className:"flex flex-col justify-center items-center"},n.createElement("p",null,"더보기"),n.createElement("img",{src:"/bottom-arrow.svgs",alt:"아래 화살표"}))))}var o=()=>n.createElement("main",{className:"px-5 pt-5"},n.createElement(l.Z,null),n.createElement(a,null));const c=()=>n.createElement("title",null,"Hyejun An - Backend Developer")}}]);
//# sourceMappingURL=component---src-pages-index-tsx-24e7d421e3f5c36333e0.js.map