import{n as d,s as k}from"./scheduler.V7bLW0bx.js";const u=[];function p(e,t=d){let n;const o=new Set;function a(s){if(k(e,s)&&(e=s,n)){const c=!u.length;for(const i of o)i[1](),u.push(i,e);if(c){for(let i=0;i<u.length;i+=2)u[i][0](u[i+1]);u.length=0}}}function l(s){a(s(e))}function r(s,c=d){const i=[s,c];return o.add(i),o.size===1&&(n=t(a,l)||d),s(e),()=>{o.delete(i),o.size===0&&n&&(n(),n=null)}}return{set:a,update:l,subscribe:r}}const E=globalThis.__sveltekit_1qebjbz?.base??"/dlaiu.github.io",m=globalThis.__sveltekit_1qebjbz?.assets??E,A="1704530467694",I="sveltekit:snapshot",w="sveltekit:scroll",y="sveltekit:states",N="sveltekit:pageurl",U="sveltekit:history",L="sveltekit:navigation",b={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},g=location.origin;function O(e){if(e instanceof URL)return e;let t=document.baseURI;if(!t){const n=document.getElementsByTagName("base");t=n.length?n[0].href:document.URL}return new URL(e,t)}function Y(){return{x:pageXOffset,y:pageYOffset}}function f(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const _={...b,"":b.hover};function v(e){let t=e.assignedSlot??e.parentNode;return t?.nodeType===11&&(t=t.host),t}function j(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=v(e)}}function q(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const o=e instanceof SVGAElement?e.target.baseVal:e.target,a=!n||!!o||T(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),l=n?.origin===g&&e.hasAttribute("download");return{url:n,external:a,target:o,download:l}}function x(e){let t=null,n=null,o=null,a=null,l=null,r=null,s=e;for(;s&&s!==document.documentElement;)o===null&&(o=f(s,"preload-code")),a===null&&(a=f(s,"preload-data")),t===null&&(t=f(s,"keepfocus")),n===null&&(n=f(s,"noscroll")),l===null&&(l=f(s,"reload")),r===null&&(r=f(s,"replacestate")),s=v(s);function c(i){switch(i){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:_[o??"off"],preload_data:_[a??"off"],keepfocus:c(t),noscroll:c(n),reload:c(l),replace_state:c(r)}}function h(e){const t=p(e);let n=!0;function o(){n=!0,t.update(r=>r)}function a(r){n=!1,t.set(r)}function l(r){let s;return t.subscribe(c=>{(s===void 0||n&&c!==s)&&r(s=c)})}return{notify:o,set:a,subscribe:l}}function R(){const{set:e,subscribe:t}=p(!1);let n;async function o(){clearTimeout(n);try{const a=await fetch(`${m}/app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const r=(await a.json()).version!==A;return r&&(e(!0),clearTimeout(n)),r}catch{return!1}}return{subscribe:t,check:o}}function T(e,t){return e.origin!==g||!e.pathname.startsWith(t)}function P(e){e.client}const V={url:h({}),page:h({}),navigating:p(null),updated:R()};export{U as H,L as N,N as P,w as S,y as a,I as b,x as c,V as d,E as e,j as f,q as g,b as h,T as i,P as j,g as o,O as r,Y as s};
