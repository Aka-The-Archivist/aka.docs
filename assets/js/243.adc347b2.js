(self.webpackChunkaka_docs=self.webpackChunkaka_docs||[]).push([[243],{7992:(e,t,n)=>{const r=n(7294);const o=r.forwardRef((function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{fillRule:"evenodd",d:"M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",clipRule:"evenodd"}))}));e.exports=o},9734:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>X});var r=n(7294),o=n(1688);const i=new WeakMap,a={},s={},c=()=>{},u=c(),l=Object,d=e=>e===u,f=e=>"function"==typeof e,g=(e,t)=>({...e,...t}),h="undefined",w=typeof window!=h,p=typeof document!=h,v=(e,t)=>{const n=i.get(e);return[()=>!d(t)&&e.get(t)||a,r=>{if(!d(t)){const o=e.get(t);t in s||(s[t]=o),n[5](t,g(o,r),o||a)}},n[6],()=>!d(t)&&t in s?s[t]:!d(t)&&e.get(t)||a]},y=new WeakMap;let m=0;const b=e=>{const t=typeof e,n=e&&e.constructor,r=n==Date;let o,i;if(l(e)!==e||r||n==RegExp)o=r?e.toJSON():"symbol"==t?e.toString():"string"==t?JSON.stringify(e):""+e;else{if(o=y.get(e),o)return o;if(o=++m+"~",y.set(e,o),n==Array){for(o="@",i=0;i<e.length;i++)o+=b(e[i])+",";y.set(e,o)}if(n==l){o="#";const t=l.keys(e).sort();for(;!d(i=t.pop());)d(e[i])||(o+=i+":"+b(e[i])+",");y.set(e,o)}}return o};let E=!0;const[R,_]=w&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[c,c],O={isOnline:()=>E,isVisible:()=>{const e=p&&document.visibilityState;return d(e)||"hidden"!==e}},k={initFocus:e=>(p&&document.addEventListener("visibilitychange",e),R("focus",e),()=>{p&&document.removeEventListener("visibilitychange",e),_("focus",e)}),initReconnect:e=>{const t=()=>{E=!0,e()},n=()=>{E=!1};return R("online",t),R("offline",n),()=>{_("online",t),_("offline",n)}}},S=!r.useId,L=!w||"Deno"in window,T=e=>w&&typeof window.requestAnimationFrame!=h?window.requestAnimationFrame(e):setTimeout(e,1),V=L?r.useEffect:r.useLayoutEffect,C="undefined"!=typeof navigator&&navigator.connection,D=!L&&C&&(["slow-2g","2g"].includes(C.effectiveType)||C.saveData),x=e=>{if(f(e))try{e=e()}catch(n){e=""}const t=e;return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?b(e):"",t]};let I=0;const P=()=>++I;var M=3,F=0,W=2,A=1;async function q(...e){const[t,n,r,o]=e,a=g({populateCache:!0,throwOnError:!0},"boolean"==typeof o?{revalidate:o}:o||{});let s=a.populateCache;const c=a.rollbackOnError;let l=a.optimisticData;const h=!1!==a.revalidate,w=a.throwOnError;if(f(n)){const e=n,r=[],o=t.keys();for(let n=o.next();!n.done;n=o.next()){const o=n.value;!/^\$(inf|sub)\$/.test(o)&&e(t.get(o)._k)&&r.push(o)}return Promise.all(r.map(p))}return p(n);async function p(n){const[o]=x(n);if(!o)return;const[a,g]=v(t,o),[p,y,m]=i.get(t),b=p[o],E=()=>h&&(delete m[o],b&&b[0])?b[0](2).then((()=>a().data)):a().data;if(e.length<3)return E();let R,_=r;const O=P();y[o]=[O,0];const k=!d(l),S=a(),L=S.data,T=S._c,V=d(T)?L:T;if(k&&(l=f(l)?l(V):l,g({data:l,_c:V})),f(_))try{_=_(V)}catch(D){R=D}if(_&&f(_.then)){if(_=await _.catch((e=>{R=e})),O!==y[o][0]){if(R)throw R;return _}R&&k&&(e=>"function"==typeof c?c(e):!1!==c)(R)&&(s=!0,_=V,g({data:_,_c:u}))}s&&(R||(f(s)&&(_=s(_,V)),g({data:_,_c:u}))),y[o][1]=P();const C=await E();if(g({_c:u}),!R)return s?C:_;if(w)throw R}}const j=(e,t)=>{for(const n in e)e[n][0]&&e[n][0](t)},J=(e,t)=>{if(!i.has(e)){const n=g(k,t),r={},o=q.bind(u,e);let a=c;const s={},l=(e,t)=>{const n=s[e]||[];return s[e]=n,n.push(t),()=>n.splice(n.indexOf(t),1)},d=(t,n,r)=>{e.set(t,n);const o=s[t];if(o)for(const e of o)e(n,r)},f=()=>{if(!i.has(e)&&(i.set(e,[r,{},{},{},o,d,l]),!L)){const t=n.initFocus(setTimeout.bind(u,j.bind(u,r,0))),o=n.initReconnect(setTimeout.bind(u,j.bind(u,r,1)));a=()=>{t&&t(),o&&o(),i.delete(e)}}};return f(),[e,o,f,a]}return[e,i.get(e)[4]]},[N,U]=J(new Map),$=g({onLoadingSlow:c,onSuccess:c,onError:c,onErrorRetry:(e,t,n,r,o)=>{const i=n.errorRetryCount,a=o.retryCount,s=~~((Math.random()+.5)*(1<<(a<8?a:8)))*n.errorRetryInterval;!d(i)&&a>i||setTimeout(r,s,o)},onDiscarded:c,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:D?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:D?5e3:3e3,compare:(e,t)=>b(e)==b(t),isPaused:()=>!1,cache:N,mutate:U,fallback:{}},O),z=(e,t)=>{const n=g(e,t);if(t){const{use:r,fallback:o}=e,{use:i,fallback:a}=t;r&&i&&(n.use=r.concat(i)),o&&a&&(n.fallback=g(o,a))}return n},B=(0,r.createContext)({}),H=w&&window.__SWR_DEVTOOLS_USE__,Z=H?window.__SWR_DEVTOOLS_USE__:[],G=e=>f(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}],K=Z.concat((e=>(t,n,r)=>e(t,n&&((...e)=>{const[r]=x(t),[,,,o]=i.get(N),a=o[r];return a?(delete o[r],a):n(...e)}),r)));H&&(window.__SWR_DEVTOOLS_REACT__=r);const Q={dedupe:!0},X=(l.defineProperty((e=>{const{value:t}=e,n=(0,r.useContext)(B),o=f(t),i=(0,r.useMemo)((()=>o?t(n):t),[o,n,t]),a=(0,r.useMemo)((()=>o?i:z(n,i)),[o,n,i]),s=i&&i.provider,c=(0,r.useRef)(u);s&&!c.current&&(c.current=J(s(a.cache||N),i));const l=c.current;return l&&(a.cache=l[0],a.mutate=l[1]),V((()=>{if(l)return l[2]&&l[2](),l[3]}),[]),(0,r.createElement)(B.Provider,g(e,{value:a}))}),"defaultValue",{value:$}),Y=(e,t,n)=>{const{cache:a,compare:s,suspense:c,fallbackData:l,revalidateOnMount:h,revalidateIfStale:w,refreshInterval:p,refreshWhenHidden:y,refreshWhenOffline:m,keepPreviousData:b}=n,[E,R,_]=i.get(a),[O,k]=x(e),C=(0,r.useRef)(!1),D=(0,r.useRef)(!1),I=(0,r.useRef)(O),j=(0,r.useRef)(t),J=(0,r.useRef)(n),N=()=>J.current,U=()=>N().isVisible()&&N().isOnline(),[$,z,B,H]=v(a,O),Z=(0,r.useRef)({}).current,G=d(l)?n.fallback[O]:l,K=(e,t)=>{for(const n in Z){const r=n;if("data"===r){if(!s(e[r],t[r])){if(!d(e[r]))return!1;if(!s(ae,t[r]))return!1}}else if(t[r]!==e[r])return!1}return!0},X=(0,r.useMemo)((()=>{const e=!!O&&!!t&&(d(h)?!N().isPaused()&&!c&&(!!d(w)||w):h),n=t=>{const n=g(t);return delete n._k,e?{isValidating:!0,isLoading:!0,...n}:n},r=$(),o=H(),i=n(r),a=r===o?i:n(o);let s=i;return[()=>{const e=n($());return K(e,s)?(s.data=e.data,s.isLoading=e.isLoading,s.isValidating=e.isValidating,s.error=e.error,s):(s=e,e)},()=>a]}),[a,O]),Y=(0,o.useSyncExternalStore)((0,r.useCallback)((e=>B(O,((t,n)=>{K(n,t)||e()}))),[a,O]),X[0],X[1]),ee=!C.current,te=E[O]&&E[O].length>0,ne=Y.data,re=d(ne)?G:ne,oe=Y.error,ie=(0,r.useRef)(re),ae=b?d(ne)?ie.current:ne:re,se=!(te&&!d(oe))&&(ee&&!d(h)?h:!N().isPaused()&&(c?!d(re)&&w:d(re)||w)),ce=!!(O&&t&&ee&&se),ue=d(Y.isValidating)?ce:Y.isValidating,le=d(Y.isLoading)?ce:Y.isLoading,de=(0,r.useCallback)((async e=>{const t=j.current;if(!O||!t||D.current||N().isPaused())return!1;let r,o,i=!0;const a=e||{},c=!_[O]||!a.dedupe,l=()=>S?!D.current&&O===I.current&&C.current:O===I.current,g={isValidating:!1,isLoading:!1},h=()=>{z(g)},w=()=>{const e=_[O];e&&e[1]===o&&delete _[O]},p={isValidating:!0};d($().data)&&(p.isLoading=!0);try{if(c&&(z(p),n.loadingTimeout&&d($().data)&&setTimeout((()=>{i&&l()&&N().onLoadingSlow(O,n)}),n.loadingTimeout),_[O]=[t(k),P()]),[r,o]=_[O],r=await r,c&&setTimeout(w,n.dedupingInterval),!_[O]||_[O][1]!==o)return c&&l()&&N().onDiscarded(O),!1;g.error=u;const e=R[O];if(!d(e)&&(o<=e[0]||o<=e[1]||0===e[1]))return h(),c&&l()&&N().onDiscarded(O),!1;const a=$().data;g.data=s(a,r)?a:r,c&&l()&&N().onSuccess(r,O,n)}catch(v){w();const e=N(),{shouldRetryOnError:t}=e;e.isPaused()||(g.error=v,c&&l()&&(e.onError(v,O,e),(!0===t||f(t)&&t(v))&&U()&&e.onErrorRetry(v,O,e,(e=>{const t=E[O];t&&t[0]&&t[0](M,e)}),{retryCount:(a.retryCount||0)+1,dedupe:!0})))}return i=!1,h(),!0}),[O,a]),fe=(0,r.useCallback)(((...e)=>q(a,I.current,...e)),[]);if(V((()=>{j.current=t,J.current=n,d(ne)||(ie.current=ne)})),V((()=>{if(!O)return;const e=de.bind(u,Q);let t=0;const n=((e,t,n)=>{const r=t[e]||(t[e]=[]);return r.push(n),()=>{const e=r.indexOf(n);e>=0&&(r[e]=r[r.length-1],r.pop())}})(O,E,((n,r={})=>{if(n==F){const n=Date.now();N().revalidateOnFocus&&n>t&&U()&&(t=n+N().focusThrottleInterval,e())}else if(n==A)N().revalidateOnReconnect&&U()&&e();else{if(n==W)return de();if(n==M)return de(r)}}));return D.current=!1,I.current=O,C.current=!0,z({_k:k}),se&&(d(re)||L?e():T(e)),()=>{D.current=!0,n()}}),[O]),V((()=>{let e;function t(){const t=f(p)?p($().data):p;t&&-1!==e&&(e=setTimeout(n,t))}function n(){$().error||!y&&!N().isVisible()||!m&&!N().isOnline()?t():de(Q).then(t)}return t(),()=>{e&&(clearTimeout(e),e=-1)}}),[p,y,m,O]),(0,r.useDebugValue)(ae),c&&d(re)&&O){if(!S&&L)throw new Error("Fallback data is required when using suspense in SSR.");throw j.current=t,J.current=n,D.current=!1,d(oe)?de(Q):oe}return{mutate:fe,get data(){return Z.data=!0,ae},get error(){return Z.error=!0,oe},get isValidating(){return Z.isValidating=!0,ue},get isLoading(){return Z.isLoading=!0,le}}},function(...e){const t=g($,(0,r.useContext)(B)),[n,o,i]=G(e),a=z(t,i);let s=Y;const{use:c}=a,u=(c||[]).concat(K);for(let r=u.length;r--;)s=u[r](s);return s(n,o||a.fetcher||null,a)});var Y}}]);