var app=function(){"use strict";function e(){}const t=e=>e;function n(e){return e()}function o(){return Object.create(null)}function r(e){e.forEach(n)}function s(e){return"function"==typeof e}function c(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function i(t){let n;return function(t,...n){if(null==t)return e;const o=t.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(t,e=>n=e)(),n}const a="undefined"!=typeof window;let l=a?()=>window.performance.now():()=>Date.now(),u=a?e=>requestAnimationFrame(e):e;const d=new Set;function f(e){d.forEach(t=>{t.c(e)||(d.delete(t),t.f())}),0!==d.size&&u(f)}function m(e,t){e.appendChild(t)}function h(e,t,n){e.insertBefore(t,n||null)}function p(e){e.parentNode.removeChild(e)}function g(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function _(e){return document.createElement(e)}function $(e){return document.createTextNode(e)}function y(){return $(" ")}function w(){return $("")}function v(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function b(e){return function(t){return t.preventDefault(),e.call(this,t)}}function k(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function x(e,t){t=""+t,e.data!==t&&(e.data=t)}function q(e,t){(null!=t||e.value)&&(e.value=t)}function S(e,t,n){e.classList[n?"add":"remove"](t)}function j(e,t){const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,!1,t),n}const E=new Set;let C,T=0;function N(e,t){const n=(e.style.animation||"").split(", "),o=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),r=n.length-o.length;r&&(e.style.animation=o.join(", "),(T-=r)||u(()=>{T||(E.forEach(e=>{const t=e.__svelte_stylesheet;let n=t.cssRules.length;for(;n--;)t.deleteRule(n);e.__svelte_rules={}}),E.clear())}))}function O(e){C=e}function A(){if(!C)throw new Error("Function called outside component initialization");return C}function G(){const e=A();return(t,n)=>{const o=e.$$.callbacks[t];if(o){const r=j(t,n);o.slice().forEach(t=>{t.call(e,r)})}}}const I=[],J=[],P=[],L=[],R=Promise.resolve();let F=!1;function H(e){P.push(e)}let U=!1;const M=new Set;function B(){if(!U){U=!0;do{for(let e=0;e<I.length;e+=1){const t=I[e];O(t),V(t.$$)}for(I.length=0;J.length;)J.pop()();for(let e=0;e<P.length;e+=1){const t=P[e];M.has(t)||(M.add(t),t())}P.length=0}while(I.length);for(;L.length;)L.pop()();F=!1,U=!1,M.clear()}}function V(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(H)}}let z;function D(e,t,n){e.dispatchEvent(j(`${t?"intro":"outro"}${n}`))}const W=new Set;let Y;function K(){Y={r:0,c:[],p:Y}}function Q(){Y.r||r(Y.c),Y=Y.p}function X(e,t){e&&e.i&&(W.delete(e),e.i(t))}function Z(e,t,n,o){if(e&&e.o){if(W.has(e))return;W.add(e),Y.c.push(()=>{W.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}}const ee={duration:0};function te(n,o,r){let c,i,a=o(n,r),m=!1,h=0;function p(){c&&N(n,c)}function g(){const{delay:o=0,duration:r=300,easing:s=t,tick:g=e,css:$}=a||ee;$&&(c=function(e,t,n,o,r,s,c,i=0){const a=16.666/o;let l="{\n";for(let e=0;e<=1;e+=a){const o=t+(n-t)*s(e);l+=100*e+`%{${c(o,1-o)}}\n`}const u=l+`100% {${c(n,1-n)}}\n}`,d=`__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(u)}_${i}`,f=e.ownerDocument;E.add(f);const m=f.__svelte_stylesheet||(f.__svelte_stylesheet=f.head.appendChild(_("style")).sheet),h=f.__svelte_rules||(f.__svelte_rules={});h[d]||(h[d]=!0,m.insertRule(`@keyframes ${d} ${u}`,m.cssRules.length));const p=e.style.animation||"";return e.style.animation=`${p?`${p}, `:""}${d} ${o}ms linear ${r}ms 1 both`,T+=1,d}(n,0,1,r,o,s,$,h++)),g(0,1);const y=l()+o,w=y+r;i&&i.abort(),m=!0,H(()=>D(n,!0,"start")),i=function(e){let t;return 0===d.size&&u(f),{promise:new Promise(n=>{d.add(t={c:e,f:n})}),abort(){d.delete(t)}}}(e=>{if(m){if(e>=w)return g(1,0),D(n,!0,"end"),p(),m=!1;if(e>=y){const t=s((e-y)/r);g(t,1-t)}}return m})}let $=!1;return{start(){$||(N(n),s(a)?(a=a(),(z||(z=Promise.resolve()).then(()=>{z=null}),z).then(g)):g())},invalidate(){$=!1},end(){m&&(p(),m=!1)}}}function ne(e){e&&e.c()}function oe(e,t,o){const{fragment:c,on_mount:i,on_destroy:a,after_update:l}=e.$$;c&&c.m(t,o),H(()=>{const t=i.map(n).filter(s);a?a.push(...t):r(t),e.$$.on_mount=[]}),l.forEach(H)}function re(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function se(e,t){-1===e.$$.dirty[0]&&(I.push(e),F||(F=!0,R.then(B)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ce(t,n,s,c,i,a,l=[-1]){const u=C;O(t);const d=n.props||{},f=t.$$={fragment:null,ctx:null,props:a,update:e,not_equal:i,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:o(),dirty:l};let m=!1;if(f.ctx=s?s(t,d,(e,n,...o)=>{const r=o.length?o[0]:n;return f.ctx&&i(f.ctx[e],f.ctx[e]=r)&&(f.bound[e]&&f.bound[e](r),m&&se(t,e)),n}):[],f.update(),m=!0,r(f.before_update),f.fragment=!!c&&c(f.ctx),n.target){if(n.hydrate){const e=(h=n.target,Array.from(h.childNodes));f.fragment&&f.fragment.l(e),e.forEach(p)}else f.fragment&&f.fragment.c();n.intro&&X(t.$$.fragment),oe(t,n.target,n.anchor),B()}var h;O(u)}class ie{$destroy(){re(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}var ae={app_name:"The Game of Waaaay",api_url:"https://charles-harvey.co.uk/waay_game_api/",token_user:"chal_psych_tok",token_game:"chal_psych_gam",polling_time:5e3,auth_headers:function(e){return{"Content-Type":"application/json",Accept:"application/json; version=1",Authorization:`Bearer ${e}`}},no_auth_headers:{"Content-Type":"application/json",Accept:"application/json; version=1"}};const le=[];function ue(t,n=e){let o;const r=[];function s(e){if(c(t,e)&&(t=e,o)){const e=!le.length;for(let e=0;e<r.length;e+=1){const n=r[e];n[1](),le.push(n,t)}if(e){for(let e=0;e<le.length;e+=2)le[e][0](le[e+1]);le.length=0}}}return{set:s,update:function(e){s(e(t))},subscribe:function(c,i=e){const a=[c,i];return r.push(a),1===r.length&&(o=n(s)||e),c(t),()=>{const e=r.indexOf(a);-1!==e&&r.splice(e,1),0===r.length&&(o(),o=null)}}}}const de=ue(null);var fe={subscribe:de.subscribe,storeUser:e=>{de.set(e);const t={nickname:e.nickname,code:e.code};localStorage.setItem(ae.token_user,JSON.stringify(t))},getUser:()=>{const e=localStorage.getItem(ae.token_user);if(e){const t=JSON.parse(e);return de.set(t),t}return null},logout:async()=>(de.set(null),localStorage.removeItem(ae.token_user),await!0),authenticated:()=>null!==i(de),createUser:async e=>{const t={nickname:e},n={method:"POST",body:JSON.stringify(t),headers:ae.no_auth_headers};let o=await fetch(`${ae.api_url}/?route=users`,n);if(o.ok){return await o.json()}throw await o.json()}};const me=ue(null);var he={subscribe:me.subscribe,gameTokenFromStorage:()=>localStorage.getItem(ae.token_game),deleteGameTokenFromStorage:()=>{localStorage.removeItem(ae.token_game),me.set(null)},getGame:async e=>{const t={headers:ae.no_auth_headers};let n=await fetch(`${ae.api_url}/?route=games&id=${e}`,t);if(n.ok){const e=await n.json();return localStorage.setItem(ae.token_game,e.id),me.set(e),e}throw await n.json()},joinGame:async(e,t)=>{const n={user_code:e.code,game_code:t.replace(" ","")};console.log(n);const o={method:"POST",body:JSON.stringify(n),headers:ae.no_auth_headers};let r=await fetch(`${ae.api_url}/?route=user_games`,o);if(r.ok){const e=await r.json();return localStorage.setItem(ae.token_game,e.id),e}throw await r.json()},createGame:async e=>{const t={user_code:e.code},n={method:"POST",body:JSON.stringify(t),headers:ae.no_auth_headers};let o=await fetch(`${ae.api_url}/?route=games`,n);if(o.ok){const e=await o.json();return me.set(e),localStorage.setItem(ae.token_game,e.id),e}throw await o.json()},updateUserGame:async e=>{const t=e,n={method:"PATCH",body:JSON.stringify(t),headers:ae.no_auth_headers};let o=await fetch(`${ae.api_url}/?route=user_games&id=${e.id}`,n);if(o.ok){return await o.json()}throw await o.json()}};function pe(e){const t=e-1;return t*t*t+1}function ge(e,{delay:t=0,duration:n=400,easing:o=pe,x:r=0,y:s=0,opacity:c=0}){const i=getComputedStyle(e),a=+i.opacity,l="none"===i.transform?"":i.transform,u=a*(1-c);return{delay:t,duration:n,easing:o,css:(e,t)=>`\n\t\t\ttransform: ${l} translate(${(1-e)*r}px, ${(1-e)*s}px);\n\t\t\topacity: ${a-u*t}`}}var _e={subscribe:ue(null).subscribe,createAnswer:async e=>{const t=e,n={method:"POST",body:JSON.stringify(t),headers:ae.no_auth_headers};let o=await fetch(`${ae.api_url}/?route=answers`,n);if(o.ok){return await o.json()}throw await o.json()},createVote:async e=>{const t=e,n={method:"POST",body:JSON.stringify(t),headers:ae.no_auth_headers};let o=await fetch(`${ae.api_url}/?route=votes`,n);if(o.ok){return await o.json()}throw await o.json()},markAnswerAsFinished:async e=>{const t=e,n={method:"PATCH",body:JSON.stringify(t),headers:ae.no_auth_headers};let o=await fetch(`${ae.api_url}/?route=answers&id=${e.id}`,n);if(o.ok){return await o.json()}throw await o.json()}};function $e(e){let t;return{c(){(t=_("div")).innerHTML="<p>You cant vote for yours!</p>",k(t,"class","cant_vote_for_self svelte-15uycr5")},m(e,n){h(e,t,n)},d(e){e&&p(t)}}}function ye(t){let n,o,r,s,c,i,a=t[1].text+"",l=t[4]&&$e();return{c(){n=_("a"),o=$(a),s=y(),l&&l.c(),c=w(),k(n,"href","#vote"),k(n,"class","answer svelte-15uycr5"),S(n,"selected",t[3]),S(n,"correct",t[2]&&t[1].correct)},m(e,r,a){h(e,n,r),m(n,o),h(e,s,r),l&&l.m(e,r),h(e,c,r),a&&i(),i=v(n,"click",b(t[5]))},p(e,[t]){2&t&&a!==(a=e[1].text+"")&&x(o,a),8&t&&S(n,"selected",e[3]),6&t&&S(n,"correct",e[2]&&e[1].correct),e[4]?l||((l=$e()).c(),l.m(c.parentNode,c)):l&&(l.d(1),l=null)},i(e){r||H(()=>{(r=te(n,ge,{delay:t[0],duration:500,y:20,opacity:0})).start()})},o:e,d(e){e&&p(n),e&&p(s),l&&l.d(e),e&&p(c),i()}}}function we(e,t,n){const o=G();let{delay:r}=t,{question:s}=t,{answer:c}=t,{can_vote:i}=t,{show_results:a}=t,{user_code:l}=t,u=!1,d=!1;return e.$set=(e=>{"delay"in e&&n(0,r=e.delay),"question"in e&&n(6,s=e.question),"answer"in e&&n(1,c=e.answer),"can_vote"in e&&n(7,i=e.can_vote),"show_results"in e&&n(2,a=e.show_results),"user_code"in e&&n(8,l=e.user_code)}),[r,c,a,u,d,function(){if(i)if(c.user.code===l)n(4,d=!0),setTimeout(()=>{n(4,d=!1)},1e3);else{n(3,u=!0);const e={user_code:l,game_id:c.game_id,answer_id:c.id,question_id:s.id};_e.createVote(e).then(e=>(o("voted","voted"),!0))}},s,i,l]}class ve extends ie{constructor(e){super(),ce(this,e,we,ye,c,{delay:0,question:6,answer:1,can_vote:7,show_results:2,user_code:8})}}function be(e,t,n){const o=e.slice();return o[15]=t[n],o[17]=n,o}function ke(e,t,n){const o=e.slice();return o[15]=t[n],o[17]=n,o}function xe(t){let n;return{c(){k(n=_("div"),"class","spinner")},m(e,t){h(e,n,t)},p:e,i:e,o:e,d(e){e&&p(n)}}}function qe(t){let n,o,s;return{c(){n=_("form"),k(o=_("input"),"placeholder","Your answer"),k(o,"type","text")},m(e,c,i){h(e,n,c),m(n,o),q(o,t[2]),i&&r(s),s=[v(o,"input",t[14]),v(n,"submit",b(t[8]))]},p(e,t){4&t&&o.value!==e[2]&&q(o,e[2])},i:e,o:e,d(e){e&&p(n),r(s)}}}function Se(e){let t,n,o=e[0].answers&&Ee(e);return{c(){o&&o.c(),t=w()},m(e,r){o&&o.m(e,r),h(e,t,r),n=!0},p(e,n){e[0].answers?o?(o.p(e,n),1&n&&X(o,1)):((o=Ee(e)).c(),X(o,1),o.m(t.parentNode,t)):o&&(K(),Z(o,1,1,()=>{o=null}),Q())},i(e){n||(X(o),n=!0)},o(e){Z(o),n=!1},d(e){o&&o.d(e),e&&p(t)}}}function je(e){let t,n,o,r,s=e[0].answers,c=[];for(let t=0;t<s.length;t+=1)c[t]=Ne(ke(e,s,t));const i=e=>Z(c[e],1,1,()=>{c[e]=null});let a=e[4]&&Oe(e);return{c(){t=_("ul");for(let e=0;e<c.length;e+=1)c[e].c();n=y(),a&&a.c(),o=w()},m(e,s){h(e,t,s);for(let e=0;e<c.length;e+=1)c[e].m(t,null);h(e,n,s),a&&a.m(e,s),h(e,o,s),r=!0},p(e,n){if(3&n){let o;for(s=e[0].answers,o=0;o<s.length;o+=1){const r=ke(e,s,o);c[o]?(c[o].p(r,n),X(c[o],1)):(c[o]=Ne(r),c[o].c(),X(c[o],1),c[o].m(t,null))}for(K(),o=s.length;o<c.length;o+=1)i(o);Q()}e[4]?a?a.p(e,n):((a=Oe(e)).c(),a.m(o.parentNode,o)):a&&(a.d(1),a=null)},i(e){if(!r){for(let e=0;e<s.length;e+=1)X(c[e]);r=!0}},o(e){c=c.filter(Boolean);for(let e=0;e<c.length;e+=1)Z(c[e]);r=!1},d(e){e&&p(t),g(c,e),e&&p(n),a&&a.d(e),e&&p(o)}}}function Ee(e){let t,n,o,r,s=e[0].answers,c=[];for(let t=0;t<s.length;t+=1)c[t]=Ce(be(e,s,t));const i=e=>Z(c[e],1,1,()=>{c[e]=null});let a=!e[5]&&Te();return{c(){t=_("ul");for(let e=0;e<c.length;e+=1)c[e].c();n=y(),a&&a.c(),o=w()},m(e,s){h(e,t,s);for(let e=0;e<c.length;e+=1)c[e].m(t,null);h(e,n,s),a&&a.m(e,s),h(e,o,s),r=!0},p(e,n){if(547&n){let o;for(s=e[0].answers,o=0;o<s.length;o+=1){const r=be(e,s,o);c[o]?(c[o].p(r,n),X(c[o],1)):(c[o]=Ce(r),c[o].c(),X(c[o],1),c[o].m(t,null))}for(K(),o=s.length;o<c.length;o+=1)i(o);Q()}e[5]?a&&(a.d(1),a=null):a||((a=Te()).c(),a.m(o.parentNode,o))},i(e){if(!r){for(let e=0;e<s.length;e+=1)X(c[e]);r=!0}},o(e){c=c.filter(Boolean);for(let e=0;e<c.length;e+=1)Z(c[e]);r=!1},d(e){e&&p(t),g(c,e),e&&p(n),a&&a.d(e),e&&p(o)}}}function Ce(e){let t,n,o;const r=new ve({props:{answer:e[15],question:e[0],can_vote:e[5],user_code:e[1],show_results:!1,delay:1e3*e[17]}});return r.$on("voted",e[9]),{c(){t=_("li"),ne(r.$$.fragment),n=y()},m(e,s){h(e,t,s),oe(r,t,null),m(t,n),o=!0},p(e,t){const n={};1&t&&(n.answer=e[15]),1&t&&(n.question=e[0]),32&t&&(n.can_vote=e[5]),2&t&&(n.user_code=e[1]),r.$set(n)},i(e){o||(X(r.$$.fragment,e),o=!0)},o(e){Z(r.$$.fragment,e),o=!1},d(e){e&&p(t),re(r)}}}function Te(e){let t;return{c(){k(t=_("div"),"class","spinner")},m(e,n){h(e,t,n)},d(e){e&&p(t)}}}function Ne(e){let t,n,o;const r=new ve({props:{delay:0,show_results:!0,answer:e[15],user_code:e[1],question:e[0],can_vote:!1}});return{c(){t=_("li"),ne(r.$$.fragment),n=y()},m(e,s){h(e,t,s),oe(r,t,null),m(t,n),o=!0},p(e,t){const n={};1&t&&(n.answer=e[15]),2&t&&(n.user_code=e[1]),1&t&&(n.question=e[0]),r.$set(n)},i(e){o||(X(r.$$.fragment,e),o=!0)},o(e){Z(r.$$.fragment,e),o=!1},d(e){e&&p(t),re(r)}}}function Oe(t){let n,o,r;return{c(){n=_("p"),(o=_("a")).textContent="Ready",k(o,"href","#ready"),k(o,"class","button")},m(e,s,c){h(e,n,s),m(n,o),c&&r(),r=v(o,"click",b(t[10]))},p:e,d(e){e&&p(n),r()}}}function Ae(e){let t,n,o,r,s,c,i,a;const l=[je,Se,qe,xe],u=[];function d(e,t){return e[0].finishedVoting?0:e[0].answered?1:e[7]?2:e[6]?3:-1}return~(r=d(e))&&(s=u[r]=l[r](e)),{c(){t=_("div"),n=_("h2"),o=y(),s&&s.c(),k(t,"class","box")},m(s,c,l){h(s,t,c),m(t,n),n.innerHTML=e[3],m(t,o),~r&&u[r].m(t,null),i=!0,l&&a(),a=v(window,"keydown",Ge)},p(e,[o]){(!i||8&o)&&(n.innerHTML=e[3]);let c=r;(r=d(e))===c?~r&&u[r].p(e,o):(s&&(K(),Z(u[c],1,1,()=>{u[c]=null}),Q()),~r?((s=u[r])||(s=u[r]=l[r](e)).c(),X(s,1),s.m(t,null)):s=null)},i(e){i||(X(s),c||H(()=>{(c=te(t,ge,{delay:500,duration:500,y:20,opacity:0})).start()}),i=!0)},o(e){Z(s),i=!1},d(e){e&&p(t),~r&&u[r].d(),a()}}}function Ge(){}function Ie(e,t,n){const o=G();let r,s,{question:c}=t,{game_id:i}=t,{user_code:a}=t,l=!0,u=!0,d=!1,f=!0,m=!1;return e.$set=(e=>{"question"in e&&n(0,c=e.question),"game_id"in e&&n(11,i=e.game_id),"user_code"in e&&n(1,a=e.user_code)}),e.$$.update=(()=>{3&e.$$.dirty&&c&&(c.user?(n(3,s=c.text.replace("@@user@@",c.user.nickname)),c.user.code==a&&(m=!0)):n(3,s=c.text))}),[c,a,r,s,l,u,d,f,function(){if(f){n(7,f=!1);const e={user_code:a,game_id:i,question_id:c.id,text:r,correct:m};_e.createAnswer(e).then(e=>(n(6,d=!0),o("requestpolling","start"),!0)).catch(e=>{console.error(e)})}},function(e){e.detail&&"voted"===e.detail&&(n(5,u=!1),o("requestpolling","start"))},function(){if(l){n(4,l=!1);const e={user_code:a,game_id:i,question_id:c.id,finished:1};_e.markAnswerAsFinished(e).then(e=>(o("requestpolling","start"),!0))}},i,m,o,function(){r=this.value,n(2,r)}]}class Je extends ie{constructor(e){super(),ce(this,e,Ie,Ae,c,{question:0,game_id:11,user_code:1})}}function Pe(e,t,n){const o=e.slice();return o[1]=t[n],o}function Le(e,t,n){const o=e.slice();return o[17]=t[n],o}function Re(e,t,n){const o=e.slice();return o[1]=t[n],o}function Fe(t){let n,o,r,s,c,i,a,l,u,d,f,$,w,v,b,x=t[0].users,q=[];for(let e=0;e<x.length;e+=1)q[e]=Be(Pe(t,x,e));let S=t[2]&&t[0].users.length>1&&Ve(t);return{c(){n=_("div"),(o=_("h2")).textContent="Waiting for players",r=y(),s=_("ul");for(let e=0;e<q.length;e+=1)q[e].c();c=y(),S&&S.c(),i=y(),a=_("br"),l=y(),u=_("br"),d=y(),f=_("div"),($=_("label")).textContent="Invite others with this code:",w=y(),v=_("input"),k(s,"class","player_list"),k($,"for","code"),k(v,"type","text"),k(v,"id","code"),k(v,"name","code"),v.disabled=!0,v.value=b=t[0].code,k(f,"class","form_field"),k(n,"class","box")},m(e,t){h(e,n,t),m(n,o),m(n,r),m(n,s);for(let e=0;e<q.length;e+=1)q[e].m(s,null);m(n,c),S&&S.m(n,null),m(n,i),m(n,a),m(n,l),m(n,u),m(n,d),m(n,f),m(f,$),m(f,w),m(f,v)},p(e,t){if(1&t){let n;for(x=e[0].users,n=0;n<x.length;n+=1){const o=Pe(e,x,n);q[n]?q[n].p(o,t):(q[n]=Be(o),q[n].c(),q[n].m(s,null))}for(;n<q.length;n+=1)q[n].d(1);q.length=x.length}e[2]&&e[0].users.length>1?S?S.p(e,t):((S=Ve(e)).c(),S.m(n,i)):S&&(S.d(1),S=null),1&t&&b!==(b=e[0].code)&&v.value!==b&&(v.value=b)},i:e,o:e,d(e){e&&p(n),g(q,e),S&&S.d()}}}function He(e){let t,n,o=e[0].questions,r=[];for(let t=0;t<o.length;t+=1)r[t]=De(Le(e,o,t));const s=e=>Z(r[e],1,1,()=>{r[e]=null});return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=w()},m(e,o){for(let t=0;t<r.length;t+=1)r[t].m(e,o);h(e,t,o),n=!0},p(e,n){if(113&n){let c;for(o=e[0].questions,c=0;c<o.length;c+=1){const s=Le(e,o,c);r[c]?(r[c].p(s,n),X(r[c],1)):(r[c]=De(s),r[c].c(),X(r[c],1),r[c].m(t.parentNode,t))}for(K(),c=o.length;c<r.length;c+=1)s(c);Q()}},i(e){if(!n){for(let e=0;e<o.length;e+=1)X(r[e]);n=!0}},o(e){r=r.filter(Boolean);for(let e=0;e<r.length;e+=1)Z(r[e]);n=!1},d(e){g(r,e),e&&p(t)}}}function Ue(t){let n,o,r,s,c,i,a,l,u=Qe(t[0].users),d=[];for(let e=0;e<u.length;e+=1)d[e]=We(Re(t,u,e));return{c(){n=_("div"),(o=_("h2")).textContent="Results",r=y(),s=_("ul");for(let e=0;e<d.length;e+=1)d[e].c();c=y(),i=_("p"),(a=_("a")).textContent="End game",k(s,"class","results"),k(a,"class","button"),k(a,"href","#reset"),k(n,"class","box")},m(e,u,f){h(e,n,u),m(n,o),m(n,r),m(n,s);for(let e=0;e<d.length;e+=1)d[e].m(s,null);m(n,c),m(n,i),m(i,a),f&&l(),l=v(a,"click",b(t[7]))},p(e,t){if(1&t){let n;for(u=Qe(e[0].users),n=0;n<u.length;n+=1){const o=Re(e,u,n);d[n]?d[n].p(o,t):(d[n]=We(o),d[n].c(),d[n].m(s,null))}for(;n<d.length;n+=1)d[n].d(1);d.length=u.length}},i:e,o:e,d(e){e&&p(n),g(d,e),l()}}}function Me(e){let t;return{c(){t=$("(READY)")},m(e,n){h(e,t,n)},d(e){e&&p(t)}}}function Be(e){let t,n,o,r,s=e[1].nickname+"",c=e[1].ready&&Me();return{c(){t=_("li"),n=$(s),o=y(),c&&c.c(),r=y()},m(e,s){h(e,t,s),m(t,n),m(t,o),c&&c.m(t,null),m(t,r)},p(e,o){1&o&&s!==(s=e[1].nickname+"")&&x(n,s),e[1].ready?c||((c=Me()).c(),c.m(t,r)):c&&(c.d(1),c=null)},d(e){e&&p(t),c&&c.d()}}}function Ve(t){let n,o,r;return{c(){n=_("p"),(o=_("a")).textContent="Ready",k(o,"class","button"),k(o,"href","#ready")},m(e,s,c){h(e,n,s),m(n,o),c&&r(),r=v(o,"click",b(t[8]))},p:e,d(e){e&&p(n),r()}}}function ze(e){let t;const n=new Je({props:{question:e[17],game_id:e[5],user_code:e[4]}});return n.$on("requestpolling",e[6]),n.$on("answered",Ke),{c(){ne(n.$$.fragment)},m(e,o){oe(n,e,o),t=!0},p(e,t){const o={};1&t&&(o.question=e[17]),32&t&&(o.game_id=e[5]),16&t&&(o.user_code=e[4]),n.$set(o)},i(e){t||(X(n.$$.fragment,e),t=!0)},o(e){Z(n.$$.fragment,e),t=!1},d(e){re(n,e)}}}function De(e){let t,n,o=e[17].active&&ze(e);return{c(){o&&o.c(),t=w()},m(e,r){o&&o.m(e,r),h(e,t,r),n=!0},p(e,n){e[17].active?o?(o.p(e,n),1&n&&X(o,1)):((o=ze(e)).c(),X(o,1),o.m(t.parentNode,t)):o&&(K(),Z(o,1,1,()=>{o=null}),Q())},i(e){n||(X(o),n=!0)},o(e){Z(o),n=!1},d(e){o&&o.d(e),e&&p(t)}}}function We(e){let t,n,o,r,s,c,i,a=e[1].nickname+"",l=e[1].score+"";return{c(){t=_("li"),n=$(a),o=$(" -\n            "),r=_("strong"),s=$(l),c=$(" points"),i=y()},m(e,a){h(e,t,a),m(t,n),m(t,o),m(t,r),m(r,s),m(r,c),m(t,i)},p(e,t){1&t&&a!==(a=e[1].nickname+"")&&x(n,a),1&t&&l!==(l=e[1].score+"")&&x(s,l)},d(e){e&&p(t)}}}function Ye(e){let t,n,o,r;const s=[Ue,He,Fe],c=[];function i(e,t){return e[3]?0:e[0].started?1:2}return n=i(e),o=c[n]=s[n](e),{c(){t=_("div"),o.c()},m(e,o){h(e,t,o),c[n].m(t,null),r=!0},p(e,[r]){let a=n;(n=i(e))===a?c[n].p(e,r):(K(),Z(c[a],1,1,()=>{c[a]=null}),Q(),(o=c[n])||(o=c[n]=s[n](e)).c(),X(o,1),o.m(t,null))},i(e){r||(X(o),r=!0)},o(e){Z(o),r=!1},d(e){e&&p(t),c[n].d()}}}function Ke(e){e.detail&&e.detail}function Qe(e){return e.sort((e,t)=>e.score<t.score?1:-1)}function Xe(e,t,n){const o=G();let r,s,{game:c}=t,{user:i}=t,a=!0,l=!1;function u(){o("pollchange","stop")}return e.$set=(e=>{"game"in e&&n(0,c=e.game),"user"in e&&n(1,i=e.user)}),e.$$.update=(()=>{2&e.$$.dirty&&n(4,r=i.code),1&e.$$.dirty&&n(5,s=c.id),1&e.$$.dirty&&c&&(c.questions.forEach((e,t)=>{const n=(t+161*c.id)%c.users.length;e.user=c.users[n]}),c.answers&&c.questions.forEach((e,t)=>{e.answers=c.answers.filter(t=>t.question_id===e.id)}),c.finished?u():c.started&&function(){const e=c.game_questions.filter(e=>!e.finished);if(e.length>0){const t=e[0],n=c.questions.find(e=>e.id===t.question_id);n&&(n.active=!0,n.finishedVoting=t.voted,n.finishedVoting)}else n(3,l=!0),u()}())}),[c,i,a,l,r,s,function(e){e.detail&&"start"===e.detail&&(console.log("staring agin"),o("pollchange","start"))},function(){o("gameended",!0)},function(){if(c.users.length>1&&a&&c.user_games){let e=c.user_games.find(e=>e.code===i.code);e&&!0!==e.ready&&(e.ready=!0,he.updateUserGame(e).then(e=>{if(e)return n(2,a=!1),!0}))}}]}class Ze extends ie{constructor(e){super(),ce(this,e,Xe,Ye,c,{game:0,user:1})}}function et(t){let n,o,s,c,i,a,l,u,d;return{c(){n=_("div"),o=_("form"),s=_("div"),(c=_("label")).textContent="username",i=y(),a=_("input"),l=y(),(u=_("div")).innerHTML="<button>Register</button>",k(c,"for","nickname"),k(a,"type","text"),k(a,"name","nickname"),k(a,"id","nickname"),k(s,"class","form_field"),k(u,"class","form_field"),k(n,"class","box")},m(e,f,p){h(e,n,f),m(n,o),m(o,s),m(s,c),m(s,i),m(s,a),q(a,t[1]),m(o,l),m(o,u),p&&r(d),d=[v(a,"input",t[17]),v(o,"submit",b(t[7]))]},p(e,t){2&t&&a.value!==e[1]&&q(a,e[1])},i:e,o:e,d(e){e&&p(n),r(d)}}}function tt(e){let t,n,o,r;const s=[rt,ot,nt],c=[];function i(e,t){return e[2]?0:e[4]?1:2}return t=i(e),n=c[t]=s[t](e),{c(){n.c(),o=w()},m(e,n){c[t].m(e,n),h(e,o,n),r=!0},p(e,r){let a=t;(t=i(e))===a?c[t].p(e,r):(K(),Z(c[a],1,1,()=>{c[a]=null}),Q(),(n=c[t])||(n=c[t]=s[t](e)).c(),X(n,1),n.m(o.parentNode,o))},i(e){r||(X(n),r=!0)},o(e){Z(n),r=!1},d(e){c[t].d(e),e&&p(o)}}}function nt(t){let n,o,s,c,i,a,l,u,d,f,g,w,S,j,E,C,T,N,O=t[0].nickname+"";return{c(){n=_("div"),o=_("h2"),s=$("Welcome "),c=$(O),i=y(),a=_("form"),l=_("div"),u=_("input"),d=y(),(f=_("div")).innerHTML="<button>Join Game</button>",g=y(),w=_("br"),S=y(),(j=_("p")).textContent="or",E=y(),C=_("p"),(T=_("a")).textContent="Start a new Game",k(u,"type","text"),k(u,"name","game_code"),k(u,"id","game_code"),k(u,"placeholder","enter a code to join a game "),k(l,"class","form_field"),k(f,"class","form_field"),k(a,"action","#"),k(T,"href","#new_game"),k(T,"class","button"),k(n,"class","box")},m(e,p,_){h(e,n,p),m(n,o),m(o,s),m(o,c),m(n,i),m(n,a),m(a,l),m(l,u),q(u,t[5]),m(a,d),m(a,f),m(n,g),m(n,w),m(n,S),m(n,j),m(n,E),m(n,C),m(C,T),_&&r(N),N=[v(u,"input",t[16]),v(a,"submit",b(t[6])),v(T,"click",b(t[8]))]},p(e,t){1&t&&O!==(O=e[0].nickname+"")&&x(c,O),32&t&&u.value!==e[5]&&q(u,e[5])},i:e,o:e,d(e){e&&p(n),r(N)}}}function ot(t){let n;return{c(){k(n=_("div"),"class","spinner")},m(e,t){h(e,n,t)},p:e,i:e,o:e,d(e){e&&p(n)}}}function rt(e){let t,n,o,r,s;const c=new Ze({props:{game:e[2],user:e[0]}});return c.$on("pollchange",e[9]),c.$on("gameended",e[10]),{c(){ne(c.$$.fragment),t=y(),n=_("p"),(o=_("a")).textContent="Go Back",k(o,"href","#goback"),k(n,"class","goback")},m(i,a,l){oe(c,i,a),h(i,t,a),h(i,n,a),m(n,o),r=!0,l&&s(),s=v(o,"click",b(e[10]))},p(e,t){const n={};4&t&&(n.game=e[2]),1&t&&(n.user=e[0]),c.$set(n)},i(e){r||(X(c.$$.fragment,e),r=!0)},o(e){Z(c.$$.fragment,e),r=!1},d(e){re(c,e),e&&p(t),e&&p(n),s()}}}function st(e){let t;return{c(){(t=_("div")).innerHTML='<div class="spinner "></div>',k(t,"class","polling")},m(e,n){h(e,t,n)},d(e){e&&p(t)}}}function ct(e){let t,n,o,r,s,c,i,a,l;const u=[tt,et],d=[];function f(e,t){return e[0]?0:1}c=f(e),i=d[c]=u[c](e);let g=e[3]&&st();return{c(){t=_("header"),(n=_("h1")).textContent=`${ae.app_name}`,o=y(),r=_("main"),s=_("div"),i.c(),a=y(),g&&g.c(),k(s,"class","container")},m(e,i){h(e,t,i),m(t,n),h(e,o,i),h(e,r,i),m(r,s),d[c].m(s,null),m(r,a),g&&g.m(r,null),l=!0},p(e,[t]){let n=c;(c=f(e))===n?d[c].p(e,t):(K(),Z(d[n],1,1,()=>{d[n]=null}),Q(),(i=d[c])||(i=d[c]=u[c](e)).c(),X(i,1),i.m(s,null)),e[3]?g||((g=st()).c(),g.m(r,null)):g&&(g.d(1),g=null)},i(e){l||(X(i),l=!0)},o(e){Z(i),l=!1},d(e){e&&p(t),e&&p(o),e&&p(r),d[c].d(),g&&g.d()}}}function it(e,t,n){let o,r,s,c,i,a,l=!0,u=!1;var d;function f(){setInterval(()=>{l&&h()},ae.polling_time)}function m(){fe.getUser(e=>{if(e)return!0})}function h(){const e=he.gameTokenFromStorage();e&&he.getGame(e).then(e=>{if(e)return!0})}return d=(()=>{m()}),A().$$.on_mount.push(d),r=fe.subscribe(e=>{e&&(n(0,o=e),h(),f())}),i=he.subscribe(e=>{e&&(n(2,c=e),console.log(e),function(e){e.answers.forEach(t=>{t.user=e.users.find(e=>e.id===t.user_id)}),e.questions.forEach(t=>{t.answers=e.answers.filter(e=>e.question_id===t.id)}),e.users.forEach(t=>{t.answers=e.answers.filter(e=>e.user_id===t.id),t.votes=e.votes.filter(e=>e.user_id===t.id);let n=0;t.answers.forEach(e=>{n+=e.score}),t.votes.forEach(e=>{n+=e.score}),t.score=n})}(e))}),function(e){A().$$.on_destroy.push(e)}(()=>{r&&r()}),[o,s,c,l,u,a,function(){n(4,u=!0),he.joinGame(o,a).then(e=>!0).catch(e=>{console.error(e),n(4,u=!1)})},function(){fe.createUser(s).then(e=>{fe.storeUser(e)}).catch(e=>{console.error(e)})},function(){he.createGame(o).then(e=>!0).catch(e=>{console.error(e)})},function(e){e.detail&&("stop"===e.detail?n(3,l=!1):n(3,l=!0),n(3,l))},function(){he.deleteGameTokenFromStorage(),n(2,c=null),n(4,u=!1),n(3,l=!0),n(5,a=null)},r,i,f,m,h,function(){a=this.value,n(5,a)},function(){s=this.value,n(1,s)}]}return new class extends ie{constructor(e){super(),ce(this,e,it,ct,c,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
