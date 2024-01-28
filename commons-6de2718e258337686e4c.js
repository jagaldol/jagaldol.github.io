"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[351],{7814:function(e,t,r){r.d(t,{G:function(){return g}});var n=r(3636),a=r(5697),l=r.n(a),o=r(7294);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function m(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function b(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}var d=["style"];var y=!1;try{y=!0}catch(O){}function h(e){return e&&"object"===s(e)&&e.prefix&&e.iconName&&e.icon?e:n.Qc.icon?n.Qc.icon(e):null===e?null:e&&"object"===s(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function x(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?f({},e,t):{}}var g=o.forwardRef((function(e,t){var r=e.icon,a=e.mask,l=e.symbol,o=e.className,i=e.title,s=e.titleId,u=e.maskId,p=h(r),b=x("classes",[].concat(m(function(e){var t,r=e.beat,n=e.fade,a=e.beatFade,l=e.bounce,o=e.shake,i=e.flash,c=e.spin,s=e.spinPulse,u=e.spinReverse,m=e.pulse,p=e.fixedWidth,b=e.inverse,d=e.border,y=e.listItem,h=e.flip,x=e.size,g=e.rotation,v=e.pull,O=(f(t={"fa-beat":r,"fa-fade":n,"fa-beat-fade":a,"fa-bounce":l,"fa-shake":o,"fa-flash":i,"fa-spin":c,"fa-spin-reverse":u,"fa-spin-pulse":s,"fa-pulse":m,"fa-fw":p,"fa-inverse":b,"fa-border":d,"fa-li":y,"fa-flip":!0===h,"fa-flip-horizontal":"horizontal"===h||"both"===h,"fa-flip-vertical":"vertical"===h||"both"===h},"fa-".concat(x),null!=x),f(t,"fa-rotate-".concat(g),null!=g&&0!==g),f(t,"fa-pull-".concat(v),null!=v),f(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(O).map((function(e){return O[e]?e:null})).filter((function(e){return e}))}(e)),m(o.split(" ")))),d=x("transform","string"==typeof e.transform?n.Qc.transform(e.transform):e.transform),O=x("mask",h(a)),E=(0,n.qv)(p,c(c(c(c({},b),d),O),{},{symbol:l,title:i,titleId:s,maskId:u}));if(!E)return function(){var e;!y&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",p),null;var j=E.abstract,k={ref:t};return Object.keys(e).forEach((function(t){g.defaultProps.hasOwnProperty(t)||(k[t]=e[t])})),v(j[0],k)}));g.displayName="FontAwesomeIcon",g.propTypes={beat:l().bool,border:l().bool,beatFade:l().bool,bounce:l().bool,className:l().string,fade:l().bool,flash:l().bool,mask:l().oneOfType([l().object,l().array,l().string]),maskId:l().string,fixedWidth:l().bool,inverse:l().bool,flip:l().oneOf([!0,!1,"horizontal","vertical","both"]),icon:l().oneOfType([l().object,l().array,l().string]),listItem:l().bool,pull:l().oneOf(["right","left"]),pulse:l().bool,rotation:l().oneOf([0,90,180,270]),shake:l().bool,size:l().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:l().bool,spinPulse:l().bool,spinReverse:l().bool,symbol:l().oneOfType([l().bool,l().string]),title:l().string,titleId:l().string,transform:l().oneOfType([l().string,l().object]),swapOpacity:l().bool},g.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var v=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var a=(r.children||[]).map((function(r){return e(t,r)})),l=Object.keys(r.attributes||{}).reduce((function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=n.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,n=t.indexOf(":"),a=b(t.slice(0,n)),l=t.slice(n+1).trim();return a.startsWith("webkit")?e[(r=a,r.charAt(0).toUpperCase()+r.slice(1))]=l:e[a]=l,e}),{});break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[b(t)]=n}return e}),{attrs:{}}),o=n.style,i=void 0===o?{}:o,s=u(n,d);return l.attrs.style=c(c({},l.attrs.style),i),t.apply(void 0,[r.tag,c(c({},l.attrs),s)].concat(m(a)))}.bind(null,o.createElement)},9116:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(7294),a=r(1883),l=r(9417),o=r(4288),i=r(7814),c=r(3024);function s(e){let{onClose:t}=e;return n.createElement("div",{className:"absolute left-0 top-0 w-full h-screen z-30 bg-black/10"},n.createElement("div",{className:"bg-bg w-[80%] h-full p-5 flex flex-col items-center"},n.createElement("div",{className:"w-full text-end"},n.createElement("button",{type:"button","aria-label":"닫기",onClick:t},n.createElement(i.G,{icon:l.EOp,size:"lg"}))),n.createElement(a.Link,{to:"/",className:"text-2xl mt-12 mb-20"},"Jagaldol"),n.createElement("div",{className:"flex flex-col items-center gap-6"},n.createElement(a.Link,{to:"/projects",className:"text-lg pb-1 border-b-2 border-b-transparent hover:border-b-main-theme"},"Project"),n.createElement("a",{href:"https://blog.jagaldol.com/",className:"text-lg pb-1 border-b-2 border-b-transparent hover:border-b-main-theme"},"Blog"))))}function f(){const{0:e,1:t}=(0,n.useState)(!1);return n.createElement(n.Fragment,null,n.createElement("nav",{className:"hidden max-md:block pt-5"},n.createElement("button",{type:"button","aria-label":"메뉴",onClick:()=>t(!0)},n.createElement(i.G,{icon:l.xiG,size:"lg"})),e?n.createElement(s,{onClose:()=>t(!1)}):null),n.createElement("nav",{className:"w-full px-9 py-10 flex items-center max-md:px-0 max-md:hidden"},n.createElement("div",{className:"mx-10 flex-1"},n.createElement(a.Link,{to:"/",className:"text-3xl"},"Jagaldol")),n.createElement("div",null,n.createElement(a.Link,{to:"/projects",className:"mx-3 text-2xl pb-1 underline-animate"},"Project"),n.createElement("a",{href:"https://blog.jagaldol.com/",className:"mx-3 text-2xl pb-1 underline-animate"},"Blog"))))}function u(e){let{children:t}=e;return n.createElement("main",{className:"px-5 min-h-screen h-auto relative pb-40"},n.createElement(f,null),t,n.createElement("footer",{className:"absolute bottom-0 left-0 h-16 max-md:h-10 bg-white w-full px-20 max-sm:px-10 flex items-center text-xs"},n.createElement("div",{className:" flex-1"},n.createElement(a.Link,{to:"/",className:"underline flex-1"},"©Hyejun An.")),n.createElement("div",{className:"flex gap-2 items-end"},n.createElement("p",null,"Contact."),n.createElement("a",{href:"mailto:jagaldol.dev@gmail.com","aria-label":"이메일"},n.createElement(i.G,{size:"lg",icon:o.FU$})),n.createElement("a",{href:"https://github.com/jagaldol","aria-label":"깃허브"},n.createElement(i.G,{size:"lg",icon:c.zhw})),n.createElement("a",{href:"https://blog.jagaldol.com/","aria-label":"블로그"},n.createElement(i.G,{size:"lg",icon:l.M_6})))))}},4288:function(e,t,r){r.d(t,{FU$:function(){return n}});var n={prefix:"far",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"]}}}]);
//# sourceMappingURL=commons-6de2718e258337686e4c.js.map