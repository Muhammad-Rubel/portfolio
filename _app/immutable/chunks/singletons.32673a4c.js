import{H as d,s as v}from"./index.847936d9.js";const u=[];function b(e,t=d){let n;const s=new Set;function o(a){if(v(e,a)&&(e=a,n)){const c=!u.length;for(const l of s)l[1](),u.push(l,e);if(c){for(let l=0;l<u.length;l+=2)u[l][0](u[l+1]);u.length=0}}}function r(a){o(a(e))}function i(a,c=d){const l=[a,c];return s.add(l),s.size===1&&(n=t(o)||d),a(e),()=>{s.delete(l),s.size===0&&n&&(n(),n=null)}}return{set:o,update:r,subscribe:i}}var g;const E=((g=globalThis.__sveltekit_7ex9mm)==null?void 0:g.base)??"/portfolio";var m;const w=((m=globalThis.__sveltekit_7ex9mm)==null?void 0:m.assets)??E,A="1678514718278",x="sveltekit:snapshot",I="sveltekit:scroll",y="sveltekit:index",p={tap:1,hover:2,viewport:3,eager:4,off:-1};function O(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function U(){return{x:pageXOffset,y:pageYOffset}}function f(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const _={...p,"":p.hover};function k(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function L(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=k(e)}}function N(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const s=e instanceof SVGAElement?e.target.baseVal:e.target,o=!n||!!s||S(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external")||e.hasAttribute("download");return{url:n,external:o,target:s}}function V(e){let t=null,n=null,s=null,o=null,r=e;for(;r&&r!==document.documentElement;)n===null&&(n=f(r,"preload-code")),s===null&&(s=f(r,"preload-data")),t===null&&(t=f(r,"noscroll")),o===null&&(o=f(r,"reload")),r=k(r);return{preload_code:_[n??"off"],preload_data:_[s??"off"],noscroll:t==="off"?!1:t===""?!0:null,reload:o==="off"?!1:o===""?!0:null}}function h(e){const t=b(e);let n=!0;function s(){n=!0,t.update(i=>i)}function o(i){n=!1,t.set(i)}function r(i){let a;return t.subscribe(c=>{(a===void 0||n&&c!==a)&&i(a=c)})}return{notify:s,set:o,subscribe:r}}function R(){const{set:e,subscribe:t}=b(!1);let n;async function s(){clearTimeout(n);const o=await fetch(`${w}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(o.ok){const i=(await o.json()).version!==A;return i&&(e(!0),clearTimeout(n)),i}else throw new Error(`Version check failed: ${o.status}`)}return{subscribe:t,check:s}}function S(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}function P(e){e.client}const Y={url:h({}),page:h({}),navigating:b(null),updated:R()};export{y as I,p as P,I as S,x as a,N as b,V as c,U as d,E as e,L as f,O as g,P as h,S as i,Y as s};
