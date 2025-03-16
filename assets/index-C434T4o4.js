var um=Object.defineProperty;var Wh=n=>{throw TypeError(n)};var fm=(n,t,e)=>t in n?um(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var ce=(n,t,e)=>fm(n,typeof t!="symbol"?t+"":t,e),Wa=(n,t,e)=>t.has(n)||Wh("Cannot "+e);var de=(n,t,e)=>(Wa(n,t,"read from private field"),e?e.call(n):t.get(n)),un=(n,t,e)=>t.has(n)?Wh("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(n):t.set(n,e),Xa=(n,t,e,i)=>(Wa(n,t,"write to private field"),i?i.call(n,e):t.set(n,e),e),Xh=(n,t,e)=>(Wa(n,t,"access private method"),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const qh=!1;var Vc=Array.isArray,dm=Array.prototype.indexOf,Gc=Array.from,pm=Object.defineProperty,Is=Object.getOwnPropertyDescriptor,mm=Object.getOwnPropertyDescriptors,gm=Object.prototype,_m=Array.prototype,Uf=Object.getPrototypeOf;function vm(n){for(var t=0;t<n.length;t++)n[t]()}const Rn=2,Nf=4,Sa=8,Wc=16,li=32,Xr=64,jo=128,vn=256,Zo=512,Ge=1024,ci=2048,nr=4096,ei=8192,Ma=16384,xm=32768,Xc=65536,Sm=1<<19,Ff=1<<20,Qi=Symbol("$state"),Mm=Symbol("legacy props"),ym=Symbol("");function Of(n){return n===this.v}function Em(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function kf(n){return!Em(n,this.v)}function wm(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function bm(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Tm(n){throw new Error("https://svelte.dev/e/effect_orphan")}function Am(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Cm(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Rm(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Dm(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function Pm(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let Lm=!1;const qc=1,Yc=2,Bf=4,Im=8,Um=16,Nm=2,Ye=Symbol();function Fm(n){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let De=null;function Yh(n){De=n}function Om(n){return Hf().get(n)}function km(n,t){return Hf().set(n,t),t}function ir(n,t=!1,e){De={p:De,c:null,e:null,m:!1,s:n,x:null,l:null}}function sr(n){const t=De;if(t!==null){const o=t.e;if(o!==null){var e=se,i=ne;t.e=null;try{for(var s=0;s<o.length;s++){var r=o[s];Pi(r.effect),Di(r.reaction),Ea(r.fn)}}finally{Pi(e),Di(i)}}De=t.p,t.m=!0}return{}}function zf(){return!0}function Hf(n){return De===null&&Fm(),De.c??(De.c=new Map(Bm(De)||void 0))}function Bm(n){let t=n.p;for(;t!==null;){const e=t.c;if(e!==null)return e;t=t.p}return null}function dn(n,t){var e={f:0,v:n,reactions:null,equals:Of,rv:0,wv:0};return e}function $n(n){return zm(dn(n))}function Vf(n,t=!1){const e=dn(n);return t||(e.equals=kf),e}function zm(n){return ne!==null&&!Ln&&ne.f&Rn&&(Un===null?Qm([n]):Un.push(n)),n}function Re(n,t){return ne!==null&&!Ln&&zf()&&ne.f&(Rn|Wc)&&(Un===null||!Un.includes(n))&&Pm(),Ol(n,t)}function Ol(n,t){return n.equals(t)||(n.v,n.v=t,n.wv=id(),Gf(n,ci),se!==null&&se.f&Ge&&!(se.f&(li|Xr))&&(Kn===null?tg([n]):Kn.push(n))),t}function Gf(n,t){var e=n.reactions;if(e!==null)for(var i=e.length,s=0;s<i;s++){var r=e[s],o=r.f;o&ci||(Fn(r,t),o&(Ge|vn)&&(o&Rn?Gf(r,nr):ba(r)))}}let Hm=!1;function Le(n,t=null,e){if(typeof n!="object"||n===null||Qi in n)return n;const i=Uf(n);if(i!==gm&&i!==_m)return n;var s=new Map,r=Vc(n),o=dn(0);r&&s.set("length",dn(n.length));var a;return new Proxy(n,{defineProperty(l,c,h){(!("value"in h)||h.configurable===!1||h.enumerable===!1||h.writable===!1)&&Cm();var f=s.get(c);return f===void 0?(f=dn(h.value),s.set(c,f)):Re(f,Le(h.value,a)),!0},deleteProperty(l,c){var h=s.get(c);if(h===void 0)c in l&&s.set(c,dn(Ye));else{if(r&&typeof c=="string"){var f=s.get("length"),u=Number(c);Number.isInteger(u)&&u<f.v&&Re(f,u)}Re(h,Ye),jh(o)}return!0},get(l,c,h){var m;if(c===Qi)return n;var f=s.get(c),u=c in l;if(f===void 0&&(!u||(m=Is(l,c))!=null&&m.writable)&&(f=dn(Le(u?l[c]:Ye,a)),s.set(c,f)),f!==void 0){var d=ee(f);return d===Ye?void 0:d}return Reflect.get(l,c,h)},getOwnPropertyDescriptor(l,c){var h=Reflect.getOwnPropertyDescriptor(l,c);if(h&&"value"in h){var f=s.get(c);f&&(h.value=ee(f))}else if(h===void 0){var u=s.get(c),d=u==null?void 0:u.v;if(u!==void 0&&d!==Ye)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return h},has(l,c){var d;if(c===Qi)return!0;var h=s.get(c),f=h!==void 0&&h.v!==Ye||Reflect.has(l,c);if(h!==void 0||se!==null&&(!f||(d=Is(l,c))!=null&&d.writable)){h===void 0&&(h=dn(f?Le(l[c],a):Ye),s.set(c,h));var u=ee(h);if(u===Ye)return!1}return f},set(l,c,h,f){var w;var u=s.get(c),d=c in l;if(r&&c==="length")for(var m=h;m<u.v;m+=1){var _=s.get(m+"");_!==void 0?Re(_,Ye):m in l&&(_=dn(Ye),s.set(m+"",_))}u===void 0?(!d||(w=Is(l,c))!=null&&w.writable)&&(u=dn(void 0),Re(u,Le(h,a)),s.set(c,u)):(d=u.v!==Ye,Re(u,Le(h,a)));var g=Reflect.getOwnPropertyDescriptor(l,c);if(g!=null&&g.set&&g.set.call(f,h),!d){if(r&&typeof c=="string"){var p=s.get("length"),b=Number(c);Number.isInteger(b)&&b>=p.v&&Re(p,b+1)}jh(o)}return!0},ownKeys(l){ee(o);var c=Reflect.ownKeys(l).filter(u=>{var d=s.get(u);return d===void 0||d.v!==Ye});for(var[h,f]of s)f.v!==Ye&&!(h in l)&&c.push(h);return c},setPrototypeOf(){Rm()}})}function jh(n,t=1){Re(n,n.v+t)}function Zh(n){return n!==null&&typeof n=="object"&&Qi in n?n[Qi]:n}function Vm(n,t){return Object.is(Zh(n),Zh(t))}var Ko,Wf,Xf,qf;function Gm(){if(Ko===void 0){Ko=window,Wf=/Firefox/.test(navigator.userAgent);var n=Element.prototype,t=Node.prototype;Xf=Is(t,"firstChild").get,qf=Is(t,"nextSibling").get,n.__click=void 0,n.__className="",n.__attributes=null,n.__styles=null,n.__e=void 0,Text.prototype.__t=void 0}}function jc(n=""){return document.createTextNode(n)}function Zc(n){return Xf.call(n)}function ya(n){return qf.call(n)}function ye(n,t){return Zc(n)}function Yf(n,t){{var e=Zc(n);return e instanceof Comment&&e.data===""?ya(e):e}}function pe(n,t=1,e=!1){let i=n;for(;t--;)i=ya(i);return i}function Wm(n){n.textContent=""}function qr(n){var t=Rn|ci,e=ne!==null&&ne.f&Rn?ne:null;return se===null||e!==null&&e.f&vn?t|=vn:se.f|=Ff,{ctx:De,deps:null,effects:null,equals:Of,f:t,fn:n,reactions:null,rv:0,v:null,wv:0,parent:e??se}}function Xm(n){const t=qr(n);return t.equals=kf,t}function jf(n){var t=n.effects;if(t!==null){n.effects=null;for(var e=0;e<t.length;e+=1)Ri(t[e])}}function qm(n){for(var t=n.parent;t!==null;){if(!(t.f&Rn))return t;t=t.parent}return null}function Ym(n){var t,e=se;Pi(qm(n));try{jf(n),t=rd(n)}finally{Pi(e)}return t}function Zf(n){var t=Ym(n),e=(yi||n.f&vn)&&n.deps!==null?nr:Ge;Fn(n,e),n.equals(t)||(n.v=t,n.wv=id())}function jm(n){se===null&&ne===null&&Tm(),ne!==null&&ne.f&vn&&se===null&&bm(),th&&wm()}function Zm(n,t){var e=t.last;e===null?t.last=t.first=n:(e.next=n,n.prev=e,t.last=n)}function rr(n,t,e,i=!0){var s=(n&Xr)!==0,r=se,o={ctx:De,deps:null,nodes_start:null,nodes_end:null,f:n|ci,first:null,fn:t,last:null,next:null,parent:s?null:r,prev:null,teardown:null,transitions:null,wv:0};if(e){var a=Ns;try{Kh(!0),eh(o),o.f|=xm}catch(h){throw Ri(o),h}finally{Kh(a)}}else t!==null&&ba(o);var l=e&&o.deps===null&&o.first===null&&o.nodes_start===null&&o.teardown===null&&(o.f&(Ff|jo))===0;if(!l&&!s&&i&&(r!==null&&Zm(o,r),ne!==null&&ne.f&Rn)){var c=ne;(c.effects??(c.effects=[])).push(o)}return o}function Kf(n){const t=rr(Sa,null,!1);return Fn(t,Ge),t.teardown=n,t}function Us(n){jm();var t=se!==null&&(se.f&li)!==0&&De!==null&&!De.m;if(t){var e=De;(e.e??(e.e=[])).push({fn:n,effect:se,reaction:ne})}else{var i=Ea(n);return i}}function Km(n){const t=rr(Xr,n,!0);return(e={})=>new Promise(i=>{e.outro?$o(t,()=>{Ri(t),i(void 0)}):(Ri(t),i(void 0))})}function Ea(n){return rr(Nf,n,!1)}function Kc(n){return rr(Sa,n,!0)}function $c(n,t=[],e=qr){const i=t.map(e);return Jc(()=>n(...i.map(ee)))}function Jc(n,t=0){return rr(Sa|Wc|t,n,!0)}function Ar(n,t=!0){return rr(Sa|li,n,!0,t)}function $f(n){var t=n.teardown;if(t!==null){const e=th,i=ne;$h(!0),Di(null);try{t.call(null)}finally{$h(e),Di(i)}}}function Jf(n,t=!1){var e=n.first;for(n.first=n.last=null;e!==null;){var i=e.next;Ri(e,t),e=i}}function $m(n){for(var t=n.first;t!==null;){var e=t.next;t.f&li||Ri(t),t=e}}function Ri(n,t=!0){var e=!1;if((t||n.f&Sm)&&n.nodes_start!==null){for(var i=n.nodes_start,s=n.nodes_end;i!==null;){var r=i===s?null:ya(i);i.remove(),i=r}e=!0}Jf(n,t&&!e),na(n,0),Fn(n,Ma);var o=n.transitions;if(o!==null)for(const l of o)l.stop();$f(n);var a=n.parent;a!==null&&a.first!==null&&Qf(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes_start=n.nodes_end=null}function Qf(n){var t=n.parent,e=n.prev,i=n.next;e!==null&&(e.next=i),i!==null&&(i.prev=e),t!==null&&(t.first===n&&(t.first=i),t.last===n&&(t.last=e))}function $o(n,t){var e=[];Qc(n,e,!0),td(e,()=>{Ri(n),t&&t()})}function td(n,t){var e=n.length;if(e>0){var i=()=>--e||t();for(var s of n)s.out(i)}else t()}function Qc(n,t,e){if(!(n.f&ei)){if(n.f^=ei,n.transitions!==null)for(const o of n.transitions)(o.is_global||e)&&t.push(o);for(var i=n.first;i!==null;){var s=i.next,r=(i.f&Xc)!==0||(i.f&li)!==0;Qc(i,t,r?e:!1),i=s}}}function Jo(n){ed(n,!0)}function ed(n,t){if(n.f&ei){n.f^=ei,n.f&Ge||(n.f^=Ge),Yr(n)&&(Fn(n,ci),ba(n));for(var e=n.first;e!==null;){var i=e.next,s=(e.f&Xc)!==0||(e.f&li)!==0;ed(e,s?t:!1),e=i}if(n.transitions!==null)for(const r of n.transitions)(r.is_global||t)&&r.in()}}let kl=!1,Bl=[];function Jm(){kl=!1;const n=Bl.slice();Bl=[],vm(n)}function Cr(n){kl||(kl=!0,queueMicrotask(Jm)),Bl.push(n)}let No=!1,Qo=!1,ta=null,Ns=!1,th=!1;function Kh(n){Ns=n}function $h(n){th=n}let zl=[],Er=0;let ne=null,Ln=!1;function Di(n){ne=n}let se=null;function Pi(n){se=n}let Un=null;function Qm(n){Un=n}let Ve=null,sn=0,Kn=null;function tg(n){Kn=n}let nd=1,ea=0,yi=!1;function id(){return++nd}function Yr(n){var f;var t=n.f;if(t&ci)return!0;if(t&nr){var e=n.deps,i=(t&vn)!==0;if(e!==null){var s,r,o=(t&Zo)!==0,a=i&&se!==null&&!yi,l=e.length;if(o||a){var c=n,h=c.parent;for(s=0;s<l;s++)r=e[s],(o||!((f=r==null?void 0:r.reactions)!=null&&f.includes(c)))&&(r.reactions??(r.reactions=[])).push(c);o&&(c.f^=Zo),a&&h!==null&&!(h.f&vn)&&(c.f^=vn)}for(s=0;s<l;s++)if(r=e[s],Yr(r)&&Zf(r),r.wv>n.wv)return!0}(!i||se!==null&&!yi)&&Fn(n,Ge)}return!1}function eg(n,t){for(var e=t;e!==null;){if(e.f&jo)try{e.fn(n);return}catch{e.f^=jo}e=e.parent}throw No=!1,n}function ng(n){return(n.f&Ma)===0&&(n.parent===null||(n.parent.f&jo)===0)}function wa(n,t,e,i){if(No){if(e===null&&(No=!1),ng(t))throw n;return}e!==null&&(No=!0);{eg(n,t);return}}function sd(n,t,e=!0){var i=n.reactions;if(i!==null)for(var s=0;s<i.length;s++){var r=i[s];r.f&Rn?sd(r,t,!1):t===r&&(e?Fn(r,ci):r.f&Ge&&Fn(r,nr),ba(r))}}function rd(n){var d;var t=Ve,e=sn,i=Kn,s=ne,r=yi,o=Un,a=De,l=Ln,c=n.f;Ve=null,sn=0,Kn=null,ne=c&(li|Xr)?null:n,yi=(c&vn)!==0&&(!Ns||s===null||l),Un=null,Yh(n.ctx),Ln=!1,ea++;try{var h=(0,n.fn)(),f=n.deps;if(Ve!==null){var u;if(na(n,sn),f!==null&&sn>0)for(f.length=sn+Ve.length,u=0;u<Ve.length;u++)f[sn+u]=Ve[u];else n.deps=f=Ve;if(!yi)for(u=sn;u<f.length;u++)((d=f[u]).reactions??(d.reactions=[])).push(n)}else f!==null&&sn<f.length&&(na(n,sn),f.length=sn);if(zf()&&Kn!==null&&!Ln&&f!==null&&!(n.f&(Rn|nr|ci)))for(u=0;u<Kn.length;u++)sd(Kn[u],n);return s!==null&&ea++,h}finally{Ve=t,sn=e,Kn=i,ne=s,yi=r,Un=o,Yh(a),Ln=l}}function ig(n,t){let e=t.reactions;if(e!==null){var i=dm.call(e,n);if(i!==-1){var s=e.length-1;s===0?e=t.reactions=null:(e[i]=e[s],e.pop())}}e===null&&t.f&Rn&&(Ve===null||!Ve.includes(t))&&(Fn(t,nr),t.f&(vn|Zo)||(t.f^=Zo),jf(t),na(t,0))}function na(n,t){var e=n.deps;if(e!==null)for(var i=t;i<e.length;i++)ig(n,e[i])}function eh(n){var t=n.f;if(!(t&Ma)){Fn(n,Ge);var e=se,i=De;se=n;try{t&Wc?$m(n):Jf(n),$f(n);var s=rd(n);n.teardown=typeof s=="function"?s:null,n.wv=nd;var r=n.deps,o;qh&&Lm&&n.f&ci}catch(a){wa(a,n,e,i||n.ctx)}finally{se=e}}}function sg(){if(Er>1e3){Er=0;try{Am()}catch(n){if(ta!==null)wa(n,ta,null);else throw n}}Er++}function rg(n){var t=n.length;if(t!==0){sg();var e=Ns;Ns=!0;try{for(var i=0;i<t;i++){var s=n[i];s.f&Ge||(s.f^=Ge);var r=lg(s);og(r)}}finally{Ns=e}}}function og(n){var t=n.length;if(t!==0)for(var e=0;e<t;e++){var i=n[e];if(!(i.f&(Ma|ei)))try{Yr(i)&&(eh(i),i.deps===null&&i.first===null&&i.nodes_start===null&&(i.teardown===null?Qf(i):i.fn=null))}catch(s){wa(s,i,null,i.ctx)}}}function ag(){if(Qo=!1,Er>1001)return;const n=zl;zl=[],rg(n),Qo||(Er=0,ta=null)}function ba(n){Qo||(Qo=!0,queueMicrotask(ag)),ta=n;for(var t=n;t.parent!==null;){t=t.parent;var e=t.f;if(e&(Xr|li)){if(!(e&Ge))return;t.f^=Ge}}zl.push(t)}function lg(n){var t=[],e=n.first;t:for(;e!==null;){var i=e.f,s=(i&li)!==0,r=s&&(i&Ge)!==0,o=e.next;if(!r&&!(i&ei)){if(i&Nf)t.push(e);else if(s)e.f^=Ge;else{var a=ne;try{ne=e,Yr(e)&&eh(e)}catch(h){wa(h,e,null,e.ctx)}finally{ne=a}}var l=e.first;if(l!==null){e=l;continue}}if(o===null){let h=e.parent;for(;h!==null;){if(n===h)break t;var c=h.next;if(c!==null){e=c;continue t}h=h.parent}}e=o}return t}function ee(n){var t=n.f,e=(t&Rn)!==0;if(ne!==null&&!Ln){Un!==null&&Un.includes(n)&&Dm();var i=ne.deps;n.rv<ea&&(n.rv=ea,Ve===null&&i!==null&&i[sn]===n?sn++:Ve===null?Ve=[n]:(!yi||!Ve.includes(n))&&Ve.push(n))}else if(e&&n.deps===null&&n.effects===null){var s=n,r=s.parent;r!==null&&!(r.f&vn)&&(s.f^=vn)}return e&&(s=n,Yr(s)&&Zf(s)),n.v}function Ta(n){var t=Ln;try{return Ln=!0,n()}finally{Ln=t}}const cg=-7169;function Fn(n,t){n.f=n.f&cg|t}const hg=["touchstart","touchmove"];function ug(n){return hg.includes(n)}let Jh=!1;function fg(){Jh||(Jh=!0,document.addEventListener("reset",n=>{Promise.resolve().then(()=>{var t;if(!n.defaultPrevented)for(const e of n.target.elements)(t=e.__on_r)==null||t.call(e)})},{capture:!0}))}function od(n){var t=ne,e=se;Di(null),Pi(null);try{return n()}finally{Di(t),Pi(e)}}function ad(n,t,e,i=e){n.addEventListener(t,()=>od(e));const s=n.__on_r;s?n.__on_r=()=>{s(),i(!0)}:n.__on_r=()=>i(!0),fg()}const ld=new Set,Hl=new Set;function dg(n,t,e,i={}){function s(r){if(i.capture||Sr.call(t,r),!r.cancelBubble)return od(()=>e==null?void 0:e.call(this,r))}return n.startsWith("pointer")||n.startsWith("touch")||n==="wheel"?Cr(()=>{t.addEventListener(n,s,i)}):t.addEventListener(n,s,i),s}function Aa(n,t,e,i,s){var r={capture:i,passive:s},o=dg(n,t,e,r);(t===document.body||t===window||t===document)&&Kf(()=>{t.removeEventListener(n,o,r)})}function Ca(n){for(var t=0;t<n.length;t++)ld.add(n[t]);for(var e of Hl)e(n)}function Sr(n){var b;var t=this,e=t.ownerDocument,i=n.type,s=((b=n.composedPath)==null?void 0:b.call(n))||[],r=s[0]||n.target,o=0,a=n.__root;if(a){var l=s.indexOf(a);if(l!==-1&&(t===document||t===window)){n.__root=t;return}var c=s.indexOf(t);if(c===-1)return;l<=c&&(o=l)}if(r=s[o]||n.target,r!==t){pm(n,"currentTarget",{configurable:!0,get(){return r||e}});var h=ne,f=se;Di(null),Pi(null);try{for(var u,d=[];r!==null;){var m=r.assignedSlot||r.parentNode||r.host||null;try{var _=r["__"+i];if(_!==void 0&&!r.disabled)if(Vc(_)){var[g,...p]=_;g.apply(r,[n,...p])}else _.call(r,n)}catch(w){u?d.push(w):u=w}if(n.cancelBubble||m===t||m===null)break;r=m}if(u){for(let w of d)queueMicrotask(()=>{throw w});throw u}}finally{n.__root=t,delete n.currentTarget,Di(h),Pi(f)}}}function pg(n){var t=document.createElement("template");return t.innerHTML=n,t.content}function cd(n,t){var e=se;e.nodes_start===null&&(e.nodes_start=n,e.nodes_end=t)}function or(n,t){var e=(t&Nm)!==0,i,s=!n.startsWith("<!>");return()=>{i===void 0&&(i=pg(s?n:"<!>"+n),i=Zc(i));var r=e||Wf?document.importNode(i,!0):i.cloneNode(!0);return cd(r,r),r}}function hd(){var n=document.createDocumentFragment(),t=document.createComment(""),e=jc();return n.append(t,e),cd(t,e),n}function wi(n,t){n!==null&&n.before(t)}function mg(n,t){return gg(n,t)}const fs=new Map;function gg(n,{target:t,anchor:e,props:i={},events:s,context:r,intro:o=!0}){Gm();var a=new Set,l=f=>{for(var u=0;u<f.length;u++){var d=f[u];if(!a.has(d)){a.add(d);var m=ug(d);t.addEventListener(d,Sr,{passive:m});var _=fs.get(d);_===void 0?(document.addEventListener(d,Sr,{passive:m}),fs.set(d,1)):fs.set(d,_+1)}}};l(Gc(ld)),Hl.add(l);var c=void 0,h=Km(()=>{var f=e??t.appendChild(jc());return Ar(()=>{if(r){ir({});var u=De;u.c=r}s&&(i.$$events=s),c=n(f,i)||{},r&&sr()}),()=>{var m;for(var u of a){t.removeEventListener(u,Sr);var d=fs.get(u);--d===0?(document.removeEventListener(u,Sr),fs.delete(u)):fs.set(u,d)}Hl.delete(l),f!==e&&((m=f.parentNode)==null||m.removeChild(f))}});return _g.set(c,h),c}let _g=new WeakMap;function vg(n,t,e=!1){var i=n,s=null,r=null,o=Ye,a=e?Xc:0,l=!1;const c=(f,u=!0)=>{l=!0,h(u,f)},h=(f,u)=>{o!==(o=f)&&(o?(s?Jo(s):u&&(s=Ar(()=>u(i))),r&&$o(r,()=>{r=null})):(r?Jo(r):u&&(r=Ar(()=>u(i))),s&&$o(s,()=>{s=null})))};Jc(()=>{l=!1,t(c),l||h(null,null)},a)}function xg(n,t,e,i){for(var s=[],r=t.length,o=0;o<r;o++)Qc(t[o].e,s,!0);var a=r>0&&s.length===0&&e!==null;if(a){var l=e.parentNode;Wm(l),l.append(e),i.clear(),vi(n,t[0].prev,t[r-1].next)}td(s,()=>{for(var c=0;c<r;c++){var h=t[c];a||(i.delete(h.k),vi(n,h.prev,h.next)),Ri(h.e,!a)}})}function qa(n,t,e,i,s,r=null){var o=n,a={flags:t,items:new Map,first:null},l=(t&Bf)!==0;if(l){var c=n;o=c.appendChild(jc())}var h=null,f=!1,u=Xm(()=>{var d=e();return Vc(d)?d:d==null?[]:Gc(d)});Jc(()=>{var d=ee(u),m=d.length;f&&m===0||(f=m===0,Sg(d,a,o,s,t,i,e),r!==null&&(m===0?h?Jo(h):h=Ar(()=>r(o)):h!==null&&$o(h,()=>{h=null})),ee(u))})}function Sg(n,t,e,i,s,r,o){var q,Z,G,K;var a=(s&Im)!==0,l=(s&(qc|Yc))!==0,c=n.length,h=t.items,f=t.first,u=f,d,m=null,_,g=[],p=[],b,w,M,D;if(a)for(D=0;D<c;D+=1)b=n[D],w=r(b,D),M=h.get(w),M!==void 0&&((q=M.a)==null||q.measure(),(_??(_=new Set)).add(M));for(D=0;D<c;D+=1){if(b=n[D],w=r(b,D),M=h.get(w),M===void 0){var P=u?u.e.nodes_start:e;m=yg(P,t,m,m===null?t.first:m.next,b,w,D,i,s,o),h.set(w,m),g=[],p=[],u=m.next;continue}if(l&&Mg(M,b,D,s),M.e.f&ei&&(Jo(M.e),a&&((Z=M.a)==null||Z.unfix(),(_??(_=new Set)).delete(M))),M!==u){if(d!==void 0&&d.has(M)){if(g.length<p.length){var A=p[0],N;m=A.prev;var y=g[0],S=g[g.length-1];for(N=0;N<g.length;N+=1)Qh(g[N],A,e);for(N=0;N<p.length;N+=1)d.delete(p[N]);vi(t,y.prev,S.next),vi(t,m,y),vi(t,S,A),u=A,m=S,D-=1,g=[],p=[]}else d.delete(M),Qh(M,u,e),vi(t,M.prev,M.next),vi(t,M,m===null?t.first:m.next),vi(t,m,M),m=M;continue}for(g=[],p=[];u!==null&&u.k!==w;)u.e.f&ei||(d??(d=new Set)).add(u),p.push(u),u=u.next;if(u===null)continue;M=u}g.push(M),m=M,u=M.next}if(u!==null||d!==void 0){for(var C=d===void 0?[]:Gc(d);u!==null;)u.e.f&ei||C.push(u),u=u.next;var V=C.length;if(V>0){var B=s&Bf&&c===0?e:null;if(a){for(D=0;D<V;D+=1)(G=C[D].a)==null||G.measure();for(D=0;D<V;D+=1)(K=C[D].a)==null||K.fix()}xg(t,C,B,h)}}a&&Cr(()=>{var z;if(_!==void 0)for(M of _)(z=M.a)==null||z.apply()}),se.first=t.first&&t.first.e,se.last=m&&m.e}function Mg(n,t,e,i){i&qc&&Ol(n.v,t),i&Yc?Ol(n.i,e):n.i=e}function yg(n,t,e,i,s,r,o,a,l,c){var h=(l&qc)!==0,f=(l&Um)===0,u=h?f?Vf(s):dn(s):s,d=l&Yc?dn(o):o,m={i:d,v:u,k:r,a:null,e:null,prev:e,next:i};try{return m.e=Ar(()=>a(n,u,d,c),Hm),m.e.prev=e&&e.e,m.e.next=i&&i.e,e===null?t.first=m:(e.next=m,e.e.next=m.e),i!==null&&(i.prev=m,i.e.prev=m.e),m}finally{}}function Qh(n,t,e){for(var i=n.next?n.next.e.nodes_start:e,s=t?t.e.nodes_start:e,r=n.e.nodes_start;r!==i;){var o=ya(r);s.before(r),r=o}}function vi(n,t,e){t===null?n.first=e:(t.next=e,t.e.next=e&&e.e),e!==null&&(e.prev=t,e.e.prev=t&&t.e)}function rn(n,t,e,i){var s=n.__attributes??(n.__attributes={});s[t]!==(s[t]=e)&&(t==="style"&&"__styles"in n&&(n.__styles={}),t==="loading"&&(n[ym]=e),e==null?n.removeAttribute(t):typeof e!="string"&&Eg(n).includes(t)?n[t]=e:n.setAttribute(t,e))}var tu=new Map;function Eg(n){var t=tu.get(n.nodeName);if(t)return t;tu.set(n.nodeName,t=[]);for(var e,i=n,s=Element.prototype;s!==i;){e=mm(i);for(var r in e)e[r].set&&t.push(r);i=Uf(i)}return t}function ud(n,t,e){if(e){if(n.classList.contains(t))return;n.classList.add(t)}else{if(!n.classList.contains(t))return;n.classList.remove(t)}}function fd(n,t,e,i){var s=n.__styles??(n.__styles={});s[t]!==e&&(s[t]=e,e==null?n.style.removeProperty(t):n.style.setProperty(t,e,""))}const Ya=new Set;function ja(n,t,e,i,s=i){var r=e.getAttribute("type")==="checkbox",o=n;if(t!==null)for(var a of t)o=o[a]??(o[a]=[]);o.push(e),ad(e,"change",()=>{var l=e.__value;r&&(l=wg(o,l,e.checked)),s(l)},()=>s(r?[]:null)),Kc(()=>{var l=i();r?(l=l||[],e.checked=l.includes(e.__value)):e.checked=Vm(e.__value,l)}),Kf(()=>{var l=o.indexOf(e);l!==-1&&o.splice(l,1)}),Ya.has(o)||(Ya.add(o),Cr(()=>{o.sort((l,c)=>l.compareDocumentPosition(c)===4?-1:1),Ya.delete(o)})),Cr(()=>{})}function Za(n,t,e=t){ad(n,"change",i=>{var s=i?n.defaultChecked:n.checked;e(s)}),Ta(t)==null&&e(n.checked),Kc(()=>{var i=t();n.checked=!!i})}function wg(n,t,e){for(var i=new Set,s=0;s<n.length;s+=1)n[s].checked&&i.add(n[s].__value);return e||i.delete(t),Array.from(i)}var Mi,Vs,kr,_a,dd;const va=class va{constructor(t){un(this,_a);un(this,Mi,new WeakMap);un(this,Vs);un(this,kr);Xa(this,kr,t)}observe(t,e){var i=de(this,Mi).get(t)||new Set;return i.add(e),de(this,Mi).set(t,i),Xh(this,_a,dd).call(this).observe(t,de(this,kr)),()=>{var s=de(this,Mi).get(t);s.delete(e),s.size===0&&(de(this,Mi).delete(t),de(this,Vs).unobserve(t))}}};Mi=new WeakMap,Vs=new WeakMap,kr=new WeakMap,_a=new WeakSet,dd=function(){return de(this,Vs)??Xa(this,Vs,new ResizeObserver(t=>{for(var e of t){va.entries.set(e.target,e);for(var i of de(this,Mi).get(e.target)||[])i(e)}}))},ce(va,"entries",new WeakMap);let Vl=va;var bg=new Vl({box:"border-box"});function eu(n,t,e){var i=bg.observe(n,()=>e(n[t]));Ea(()=>(Ta(()=>e(n[t])),i))}function nu(n,t){return n===t||(n==null?void 0:n[Qi])===t}function pd(n={},t,e,i){return Ea(()=>{var s,r;return Kc(()=>{s=r,r=[],Ta(()=>{n!==e(...r)&&(t(n,...r),s&&nu(e(...s),n)&&t(null,...s))})}),()=>{Cr(()=>{r&&nu(e(...r),n)&&t(null,...r)})}}),n}let oo=!1;function Tg(n){var t=oo;try{return oo=!1,[n(),oo]}finally{oo=t}}function md(n,t,e,i){var p;var s=!1,r;[r,s]=Tg(()=>n[t]);var o=Qi in n||Mm in n,a=(((p=Is(n,t))==null?void 0:p.set)??(o&&t in n&&(b=>n[t]=b)))||void 0,l=i,c=!0,h=!1,f=()=>(h=!0,c&&(c=!1,l=i),l),u;if(u=()=>{var b=n[t];return b===void 0?f():(c=!0,h=!1,b)},a){var d=n.$$legacy;return function(b,w){return arguments.length>0?((!w||d||s)&&a(w?u():b),b):u()}}var m=!1,_=Vf(r),g=qr(()=>{var b=u(),w=ee(_);return m?(m=!1,w):_.v=b});return function(b,w){if(arguments.length>0){const M=w?ee(g):Le(b);return g.equals(M)||(m=!0,Re(_,M),h&&l!==void 0&&(l=M),Ta(()=>ee(g))),b}return ee(g)}}const Ag="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ag);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nh="173",bi={ROTATE:0,DOLLY:1,PAN:2},Ps={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Cg=0,iu=1,Rg=2,gd=1,Dg=2,Zn=3,Li=0,Ke=1,Jn=2,Ti=0,Fs=1,su=2,ru=3,ou=4,Pg=5,ji=100,Lg=101,Ig=102,Ug=103,Ng=104,Fg=200,Og=201,kg=202,Bg=203,Gl=204,Wl=205,zg=206,Hg=207,Vg=208,Gg=209,Wg=210,Xg=211,qg=212,Yg=213,jg=214,Xl=0,ql=1,Yl=2,Gs=3,jl=4,Zl=5,Kl=6,$l=7,_d=0,Zg=1,Kg=2,Ai=0,$g=1,Jg=2,Qg=3,t_=4,e_=5,n_=6,i_=7,vd=300,Ws=301,Xs=302,Jl=303,Ql=304,Ra=306,tc=1e3,Ki=1001,ec=1002,An=1003,s_=1004,ao=1005,In=1006,Ka=1007,$i=1008,si=1009,xd=1010,Sd=1011,Rr=1012,ih=1013,ns=1014,Qn=1015,jr=1016,sh=1017,rh=1018,qs=1020,Md=35902,yd=1021,Ed=1022,bn=1023,wd=1024,bd=1025,Os=1026,Ys=1027,Td=1028,oh=1029,Ad=1030,ah=1031,lh=1033,Fo=33776,Oo=33777,ko=33778,Bo=33779,nc=35840,ic=35841,sc=35842,rc=35843,oc=36196,ac=37492,lc=37496,cc=37808,hc=37809,uc=37810,fc=37811,dc=37812,pc=37813,mc=37814,gc=37815,_c=37816,vc=37817,xc=37818,Sc=37819,Mc=37820,yc=37821,zo=36492,Ec=36494,wc=36495,Cd=36283,bc=36284,Tc=36285,Ac=36286,r_=3200,o_=3201,a_=0,l_=1,xi="",pn="srgb",js="srgb-linear",ia="linear",$t="srgb",ds=7680,au=519,c_=512,h_=513,u_=514,Rd=515,f_=516,d_=517,p_=518,m_=519,lu=35044,cu="300 es",ti=2e3,sa=2001;class ls{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ho=Math.PI/180,Cc=180/Math.PI;function Zr(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ne[n&255]+Ne[n>>8&255]+Ne[n>>16&255]+Ne[n>>24&255]+"-"+Ne[t&255]+Ne[t>>8&255]+"-"+Ne[t>>16&15|64]+Ne[t>>24&255]+"-"+Ne[e&63|128]+Ne[e>>8&255]+"-"+Ne[e>>16&255]+Ne[e>>24&255]+Ne[i&255]+Ne[i>>8&255]+Ne[i>>16&255]+Ne[i>>24&255]).toLowerCase()}function Ot(n,t,e){return Math.max(t,Math.min(e,n))}function g_(n,t){return(n%t+t)%t}function $a(n,t,e){return(1-e)*n+e*t}function pr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Xe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const __={DEG2RAD:Ho};class Nt{constructor(t=0,e=0){Nt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ot(this.x,t.x,e.x),this.y=Ot(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ot(this.x,t,e),this.y=Ot(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ot(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ot(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pt{constructor(t,e,i,s,r,o,a,l,c){Pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],f=i[7],u=i[2],d=i[5],m=i[8],_=s[0],g=s[3],p=s[6],b=s[1],w=s[4],M=s[7],D=s[2],P=s[5],A=s[8];return r[0]=o*_+a*b+l*D,r[3]=o*g+a*w+l*P,r[6]=o*p+a*M+l*A,r[1]=c*_+h*b+f*D,r[4]=c*g+h*w+f*P,r[7]=c*p+h*M+f*A,r[2]=u*_+d*b+m*D,r[5]=u*g+d*w+m*P,r[8]=u*p+d*M+m*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*o-a*c,u=a*l-h*r,d=c*r-o*l,m=e*f+i*u+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=f*_,t[1]=(s*c-h*i)*_,t[2]=(a*i-s*o)*_,t[3]=u*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=d*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ja.makeScale(t,e)),this}rotate(t){return this.premultiply(Ja.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ja.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ja=new Pt;function Dd(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ra(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function v_(){const n=ra("canvas");return n.style.display="block",n}const hu={};function Cs(n){n in hu||(hu[n]=!0,console.warn(n))}function x_(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function S_(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function M_(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const uu=new Pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fu=new Pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function y_(){const n={enabled:!0,workingColorSpace:js,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===$t&&(s.r=ni(s.r),s.g=ni(s.g),s.b=ni(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===$t&&(s.r=ks(s.r),s.g=ks(s.g),s.b=ks(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===xi?ia:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[js]:{primaries:t,whitePoint:i,transfer:ia,toXYZ:uu,fromXYZ:fu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:pn},outputColorSpaceConfig:{drawingBufferColorSpace:pn}},[pn]:{primaries:t,whitePoint:i,transfer:$t,toXYZ:uu,fromXYZ:fu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:pn}}}),n}const qt=y_();function ni(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ks(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ps;class E_{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ps===void 0&&(ps=ra("canvas")),ps.width=t.width,ps.height=t.height;const i=ps.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=ps}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ra("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ni(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ni(e[i]/255)*255):e[i]=ni(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let w_=0;class Pd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:w_++}),this.uuid=Zr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Qa(s[o].image)):r.push(Qa(s[o]))}else r=Qa(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Qa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?E_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let b_=0;class $e extends ls{constructor(t=$e.DEFAULT_IMAGE,e=$e.DEFAULT_MAPPING,i=Ki,s=Ki,r=In,o=$i,a=bn,l=si,c=$e.DEFAULT_ANISOTROPY,h=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:b_++}),this.uuid=Zr(),this.name="",this.source=new Pd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==vd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case tc:t.x=t.x-Math.floor(t.x);break;case Ki:t.x=t.x<0?0:1;break;case ec:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case tc:t.y=t.y-Math.floor(t.y);break;case Ki:t.y=t.y<0?0:1;break;case ec:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}$e.DEFAULT_IMAGE=null;$e.DEFAULT_MAPPING=vd;$e.DEFAULT_ANISOTROPY=1;class _e{constructor(t=0,e=0,i=0,s=1){_e.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,M=(d+1)/2,D=(p+1)/2,P=(h+u)/4,A=(f+_)/4,N=(m+g)/4;return w>M&&w>D?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=P/i,r=A/i):M>D?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=P/s,r=N/s):D<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),i=A/r,s=N/r),this.set(i,s,r,e),this}let b=Math.sqrt((g-m)*(g-m)+(f-_)*(f-_)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(g-m)/b,this.y=(f-_)/b,this.z=(u-h)/b,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ot(this.x,t.x,e.x),this.y=Ot(this.y,t.y,e.y),this.z=Ot(this.z,t.z,e.z),this.w=Ot(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ot(this.x,t,e),this.y=Ot(this.y,t,e),this.z=Ot(this.z,t,e),this.w=Ot(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ot(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class T_ extends ls{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new $e(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new Pd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class is extends T_{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Ld extends $e{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=An,this.minFilter=An,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class A_ extends $e{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=An,this.minFilter=An,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ss{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],f=i[s+3];const u=r[o+0],d=r[o+1],m=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=u,t[e+1]=d,t[e+2]=m,t[e+3]=_;return}if(f!==_||l!==u||c!==d||h!==m){let g=1-a;const p=l*u+c*d+h*m+f*_,b=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){const D=Math.sqrt(w),P=Math.atan2(D,p*b);g=Math.sin(g*P)/D,a=Math.sin(a*P)/D}const M=a*b;if(l=l*g+u*M,c=c*g+d*M,h=h*g+m*M,f=f*g+_*M,g===1-a){const D=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=D,c*=D,h*=D,f*=D}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],f=r[o],u=r[o+1],d=r[o+2],m=r[o+3];return t[e]=a*m+h*f+l*d-c*u,t[e+1]=l*m+h*u+c*f-a*d,t[e+2]=c*m+h*d+a*u-l*f,t[e+3]=h*m-a*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),f=a(r/2),u=l(i/2),d=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"YXZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"ZXY":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"ZYX":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"YZX":this._x=u*h*f+c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f-u*d*m;break;case"XZY":this._x=u*h*f-c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f+u*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=i+a+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ot(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*f+this._w*u,this._x=i*f+this._x*u,this._y=s*f+this._y*u,this._z=r*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,i=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(du.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(du.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),f=2*(r*i-o*e);return this.x=e+l*c+o*f-a*h,this.y=i+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ot(this.x,t.x,e.x),this.y=Ot(this.y,t.y,e.y),this.z=Ot(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ot(this.x,t,e),this.y=Ot(this.y,t,e),this.z=Ot(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ot(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return tl.copy(this).projectOnVector(t),this.sub(tl)}reflect(t){return this.sub(tl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ot(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const tl=new U,du=new ss;class Kr{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Mn):Mn.fromBufferAttribute(r,o),Mn.applyMatrix4(t.matrixWorld),this.expandByPoint(Mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),lo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),lo.copy(i.boundingBox)),lo.applyMatrix4(t.matrixWorld),this.union(lo)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mn),Mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(mr),co.subVectors(this.max,mr),ms.subVectors(t.a,mr),gs.subVectors(t.b,mr),_s.subVectors(t.c,mr),fi.subVectors(gs,ms),di.subVectors(_s,gs),Hi.subVectors(ms,_s);let e=[0,-fi.z,fi.y,0,-di.z,di.y,0,-Hi.z,Hi.y,fi.z,0,-fi.x,di.z,0,-di.x,Hi.z,0,-Hi.x,-fi.y,fi.x,0,-di.y,di.x,0,-Hi.y,Hi.x,0];return!el(e,ms,gs,_s,co)||(e=[1,0,0,0,1,0,0,0,1],!el(e,ms,gs,_s,co))?!1:(ho.crossVectors(fi,di),e=[ho.x,ho.y,ho.z],el(e,ms,gs,_s,co))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Gn=[new U,new U,new U,new U,new U,new U,new U,new U],Mn=new U,lo=new Kr,ms=new U,gs=new U,_s=new U,fi=new U,di=new U,Hi=new U,mr=new U,co=new U,ho=new U,Vi=new U;function el(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Vi.fromArray(n,r);const a=s.x*Math.abs(Vi.x)+s.y*Math.abs(Vi.y)+s.z*Math.abs(Vi.z),l=t.dot(Vi),c=e.dot(Vi),h=i.dot(Vi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const C_=new Kr,gr=new U,nl=new U;class Da{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):C_.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;gr.subVectors(t,this.center);const e=gr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(gr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(nl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(gr.copy(t.center).add(nl)),this.expandByPoint(gr.copy(t.center).sub(nl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Wn=new U,il=new U,uo=new U,pi=new U,sl=new U,fo=new U,rl=new U;class ch{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Wn.copy(this.origin).addScaledVector(this.direction,e),Wn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){il.copy(t).add(e).multiplyScalar(.5),uo.copy(e).sub(t).normalize(),pi.copy(this.origin).sub(il);const r=t.distanceTo(e)*.5,o=-this.direction.dot(uo),a=pi.dot(this.direction),l=-pi.dot(uo),c=pi.lengthSq(),h=Math.abs(1-o*o);let f,u,d,m;if(h>0)if(f=o*l-a,u=o*a-l,m=r*h,f>=0)if(u>=-m)if(u<=m){const _=1/h;f*=_,u*=_,d=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u<=-m?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=m?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(il).addScaledVector(uo,u),d}intersectSphere(t,e){Wn.subVectors(t.center,this.origin);const i=Wn.dot(this.direction),s=Wn.dot(Wn)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Wn)!==null}intersectTriangle(t,e,i,s,r){sl.subVectors(e,t),fo.subVectors(i,t),rl.crossVectors(sl,fo);let o=this.direction.dot(rl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;pi.subVectors(this.origin,t);const l=a*this.direction.dot(fo.crossVectors(pi,fo));if(l<0)return null;const c=a*this.direction.dot(sl.cross(pi));if(c<0||l+c>o)return null;const h=-a*pi.dot(rl);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ve{constructor(t,e,i,s,r,o,a,l,c,h,f,u,d,m,_,g){ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,f,u,d,m,_,g)}set(t,e,i,s,r,o,a,l,c,h,f,u,d,m,_,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ve().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/vs.setFromMatrixColumn(t,0).length(),r=1/vs.setFromMatrixColumn(t,1).length(),o=1/vs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const u=o*h,d=o*f,m=a*h,_=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+m*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=m+d*c,e[10]=o*l}else if(t.order==="YXZ"){const u=l*h,d=l*f,m=c*h,_=c*f;e[0]=u+_*a,e[4]=m*a-d,e[8]=o*c,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=d*a-m,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){const u=l*h,d=l*f,m=c*h,_=c*f;e[0]=u-_*a,e[4]=-o*f,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const u=o*h,d=o*f,m=a*h,_=a*f;e[0]=l*h,e[4]=m*c-d,e[8]=u*c+_,e[1]=l*f,e[5]=_*c+u,e[9]=d*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,d=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=_-u*f,e[8]=m*f+d,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*f+m,e[10]=u-_*f}else if(t.order==="XZY"){const u=o*l,d=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+_,e[5]=o*h,e[9]=d*f-m,e[2]=m*f-d,e[6]=a*h,e[10]=_*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(R_,t,D_)}lookAt(t,e,i){const s=this.elements;return en.subVectors(t,e),en.lengthSq()===0&&(en.z=1),en.normalize(),mi.crossVectors(i,en),mi.lengthSq()===0&&(Math.abs(i.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),mi.crossVectors(i,en)),mi.normalize(),po.crossVectors(en,mi),s[0]=mi.x,s[4]=po.x,s[8]=en.x,s[1]=mi.y,s[5]=po.y,s[9]=en.y,s[2]=mi.z,s[6]=po.z,s[10]=en.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],f=i[5],u=i[9],d=i[13],m=i[2],_=i[6],g=i[10],p=i[14],b=i[3],w=i[7],M=i[11],D=i[15],P=s[0],A=s[4],N=s[8],y=s[12],S=s[1],C=s[5],V=s[9],B=s[13],q=s[2],Z=s[6],G=s[10],K=s[14],z=s[3],it=s[7],ht=s[11],et=s[15];return r[0]=o*P+a*S+l*q+c*z,r[4]=o*A+a*C+l*Z+c*it,r[8]=o*N+a*V+l*G+c*ht,r[12]=o*y+a*B+l*K+c*et,r[1]=h*P+f*S+u*q+d*z,r[5]=h*A+f*C+u*Z+d*it,r[9]=h*N+f*V+u*G+d*ht,r[13]=h*y+f*B+u*K+d*et,r[2]=m*P+_*S+g*q+p*z,r[6]=m*A+_*C+g*Z+p*it,r[10]=m*N+_*V+g*G+p*ht,r[14]=m*y+_*B+g*K+p*et,r[3]=b*P+w*S+M*q+D*z,r[7]=b*A+w*C+M*Z+D*it,r[11]=b*N+w*V+M*G+D*ht,r[15]=b*y+w*B+M*K+D*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],m=t[3],_=t[7],g=t[11],p=t[15];return m*(+r*l*f-s*c*f-r*a*u+i*c*u+s*a*d-i*l*d)+_*(+e*l*d-e*c*u+r*o*u-s*o*d+s*c*h-r*l*h)+g*(+e*c*f-e*a*d-r*o*f+i*o*d+r*a*h-i*c*h)+p*(-s*a*h-e*l*f+e*a*u+s*o*f-i*o*u+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],m=t[12],_=t[13],g=t[14],p=t[15],b=f*g*c-_*u*c+_*l*d-a*g*d-f*l*p+a*u*p,w=m*u*c-h*g*c-m*l*d+o*g*d+h*l*p-o*u*p,M=h*_*c-m*f*c+m*a*d-o*_*d-h*a*p+o*f*p,D=m*f*l-h*_*l-m*a*u+o*_*u+h*a*g-o*f*g,P=e*b+i*w+s*M+r*D;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/P;return t[0]=b*A,t[1]=(_*u*r-f*g*r-_*s*d+i*g*d+f*s*p-i*u*p)*A,t[2]=(a*g*r-_*l*r+_*s*c-i*g*c-a*s*p+i*l*p)*A,t[3]=(f*l*r-a*u*r-f*s*c+i*u*c+a*s*d-i*l*d)*A,t[4]=w*A,t[5]=(h*g*r-m*u*r+m*s*d-e*g*d-h*s*p+e*u*p)*A,t[6]=(m*l*r-o*g*r-m*s*c+e*g*c+o*s*p-e*l*p)*A,t[7]=(o*u*r-h*l*r+h*s*c-e*u*c-o*s*d+e*l*d)*A,t[8]=M*A,t[9]=(m*f*r-h*_*r-m*i*d+e*_*d+h*i*p-e*f*p)*A,t[10]=(o*_*r-m*a*r+m*i*c-e*_*c-o*i*p+e*a*p)*A,t[11]=(h*a*r-o*f*r-h*i*c+e*f*c+o*i*d-e*a*d)*A,t[12]=D*A,t[13]=(h*_*s-m*f*s+m*i*u-e*_*u-h*i*g+e*f*g)*A,t[14]=(m*a*s-o*_*s-m*i*l+e*_*l+o*i*g-e*a*g)*A,t[15]=(o*f*s-h*a*s+h*i*l-e*f*l-o*i*u+e*a*u)*A,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,f=a+a,u=r*c,d=r*h,m=r*f,_=o*h,g=o*f,p=a*f,b=l*c,w=l*h,M=l*f,D=i.x,P=i.y,A=i.z;return s[0]=(1-(_+p))*D,s[1]=(d+M)*D,s[2]=(m-w)*D,s[3]=0,s[4]=(d-M)*P,s[5]=(1-(u+p))*P,s[6]=(g+b)*P,s[7]=0,s[8]=(m+w)*A,s[9]=(g-b)*A,s[10]=(1-(u+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=vs.set(s[0],s[1],s[2]).length();const o=vs.set(s[4],s[5],s[6]).length(),a=vs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],yn.copy(this);const c=1/r,h=1/o,f=1/a;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=h,yn.elements[5]*=h,yn.elements[6]*=h,yn.elements[8]*=f,yn.elements[9]*=f,yn.elements[10]*=f,e.setFromRotationMatrix(yn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=ti){const l=this.elements,c=2*r/(e-t),h=2*r/(i-s),f=(e+t)/(e-t),u=(i+s)/(i-s);let d,m;if(a===ti)d=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===sa)d=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=ti){const l=this.elements,c=1/(e-t),h=1/(i-s),f=1/(o-r),u=(e+t)*c,d=(i+s)*h;let m,_;if(a===ti)m=(o+r)*f,_=-2*f;else if(a===sa)m=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const vs=new U,yn=new ve,R_=new U(0,0,0),D_=new U(1,1,1),mi=new U,po=new U,en=new U,pu=new ve,mu=new ss;class ri{constructor(t=0,e=0,i=0,s=ri.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ot(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return pu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(pu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return mu.setFromEuler(this),this.setFromQuaternion(mu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ri.DEFAULT_ORDER="XYZ";class Id{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let P_=0;const gu=new U,xs=new ss,Xn=new ve,mo=new U,_r=new U,L_=new U,I_=new ss,_u=new U(1,0,0),vu=new U(0,1,0),xu=new U(0,0,1),Su={type:"added"},U_={type:"removed"},Ss={type:"childadded",child:null},ol={type:"childremoved",child:null};class Je extends ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:P_++}),this.uuid=Zr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Je.DEFAULT_UP.clone();const t=new U,e=new ri,i=new ss,s=new U(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ve},normalMatrix:{value:new Pt}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=Je.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Id,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return xs.setFromAxisAngle(t,e),this.quaternion.multiply(xs),this}rotateOnWorldAxis(t,e){return xs.setFromAxisAngle(t,e),this.quaternion.premultiply(xs),this}rotateX(t){return this.rotateOnAxis(_u,t)}rotateY(t){return this.rotateOnAxis(vu,t)}rotateZ(t){return this.rotateOnAxis(xu,t)}translateOnAxis(t,e){return gu.copy(t).applyQuaternion(this.quaternion),this.position.add(gu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(_u,t)}translateY(t){return this.translateOnAxis(vu,t)}translateZ(t){return this.translateOnAxis(xu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?mo.copy(t):mo.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),_r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(_r,mo,this.up):Xn.lookAt(mo,_r,this.up),this.quaternion.setFromRotationMatrix(Xn),s&&(Xn.extractRotation(s.matrixWorld),xs.setFromRotationMatrix(Xn),this.quaternion.premultiply(xs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Su),Ss.child=t,this.dispatchEvent(Ss),Ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(U_),ol.child=t,this.dispatchEvent(ol),ol.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Su),Ss.child=t,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,t,L_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,I_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),f=o(t.shapes),u=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Je.DEFAULT_UP=new U(0,1,0);Je.DEFAULT_MATRIX_AUTO_UPDATE=!0;Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const En=new U,qn=new U,al=new U,Yn=new U,Ms=new U,ys=new U,Mu=new U,ll=new U,cl=new U,hl=new U,ul=new _e,fl=new _e,dl=new _e;class wn{constructor(t=new U,e=new U,i=new U){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),En.subVectors(t,e),s.cross(En);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){En.subVectors(s,e),qn.subVectors(i,e),al.subVectors(t,e);const o=En.dot(En),a=En.dot(qn),l=En.dot(al),c=qn.dot(qn),h=qn.dot(al),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const u=1/f,d=(c*l-a*h)*u,m=(o*h-a*l)*u;return r.set(1-d-m,m,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Yn.x),l.addScaledVector(o,Yn.y),l.addScaledVector(a,Yn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return ul.setScalar(0),fl.setScalar(0),dl.setScalar(0),ul.fromBufferAttribute(t,e),fl.fromBufferAttribute(t,i),dl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ul,r.x),o.addScaledVector(fl,r.y),o.addScaledVector(dl,r.z),o}static isFrontFacing(t,e,i,s){return En.subVectors(i,e),qn.subVectors(t,e),En.cross(qn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return En.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),En.cross(qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return wn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return wn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return wn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return wn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return wn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Ms.subVectors(s,i),ys.subVectors(r,i),ll.subVectors(t,i);const l=Ms.dot(ll),c=ys.dot(ll);if(l<=0&&c<=0)return e.copy(i);cl.subVectors(t,s);const h=Ms.dot(cl),f=ys.dot(cl);if(h>=0&&f<=h)return e.copy(s);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(Ms,o);hl.subVectors(t,r);const d=Ms.dot(hl),m=ys.dot(hl);if(m>=0&&d<=m)return e.copy(r);const _=d*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(i).addScaledVector(ys,a);const g=h*m-d*f;if(g<=0&&f-h>=0&&d-m>=0)return Mu.subVectors(r,s),a=(f-h)/(f-h+(d-m)),e.copy(s).addScaledVector(Mu,a);const p=1/(g+_+u);return o=_*p,a=u*p,e.copy(i).addScaledVector(Ms,o).addScaledVector(ys,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ud={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},go={h:0,s:0,l:0};function pl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Wt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=pn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,qt.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=qt.workingColorSpace){if(t=g_(t,1),e=Ot(e,0,1),i=Ot(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=pl(o,r,t+1/3),this.g=pl(o,r,t),this.b=pl(o,r,t-1/3)}return qt.toWorkingColorSpace(this,s),this}setStyle(t,e=pn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=pn){const i=Ud[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ni(t.r),this.g=ni(t.g),this.b=ni(t.b),this}copyLinearToSRGB(t){return this.r=ks(t.r),this.g=ks(t.g),this.b=ks(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pn){return qt.fromWorkingColorSpace(Fe.copy(this),t),Math.round(Ot(Fe.r*255,0,255))*65536+Math.round(Ot(Fe.g*255,0,255))*256+Math.round(Ot(Fe.b*255,0,255))}getHexString(t=pn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.fromWorkingColorSpace(Fe.copy(this),e);const i=Fe.r,s=Fe.g,r=Fe.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=qt.workingColorSpace){return qt.fromWorkingColorSpace(Fe.copy(this),e),t.r=Fe.r,t.g=Fe.g,t.b=Fe.b,t}getStyle(t=pn){qt.fromWorkingColorSpace(Fe.copy(this),t);const e=Fe.r,i=Fe.g,s=Fe.b;return t!==pn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(gi),this.setHSL(gi.h+t,gi.s+e,gi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(gi),t.getHSL(go);const i=$a(gi.h,go.h,e),s=$a(gi.s,go.s,e),r=$a(gi.l,go.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fe=new Wt;Wt.NAMES=Ud;let N_=0;class $r extends ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:N_++}),this.uuid=Zr(),this.name="",this.type="Material",this.blending=Fs,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gl,this.blendDst=Wl,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=au,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(i.blending=this.blending),this.side!==Li&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Gl&&(i.blendSrc=this.blendSrc),this.blendDst!==Wl&&(i.blendDst=this.blendDst),this.blendEquation!==ji&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Gs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==au&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Pa extends $r{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=_d,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Se=new U,_o=new Nt;let F_=0;class on{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:F_++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=lu,this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)_o.fromBufferAttribute(this,e),_o.applyMatrix3(t),this.setXY(e,_o.x,_o.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=pr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Xe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=pr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=pr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=pr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=pr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),i=Xe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),i=Xe(i,this.array),s=Xe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),i=Xe(i,this.array),s=Xe(s,this.array),r=Xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==lu&&(t.usage=this.usage),t}}class Nd extends on{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Fd extends on{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Cn extends on{constructor(t,e,i){super(new Float32Array(t),e,i)}}let O_=0;const fn=new ve,ml=new Je,Es=new U,nn=new Kr,vr=new Kr,Ae=new U;class zn extends ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:O_++}),this.uuid=Zr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Dd(t)?Fd:Nd)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Pt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fn.makeRotationFromQuaternion(t),this.applyMatrix4(fn),this}rotateX(t){return fn.makeRotationX(t),this.applyMatrix4(fn),this}rotateY(t){return fn.makeRotationY(t),this.applyMatrix4(fn),this}rotateZ(t){return fn.makeRotationZ(t),this.applyMatrix4(fn),this}translate(t,e,i){return fn.makeTranslation(t,e,i),this.applyMatrix4(fn),this}scale(t,e,i){return fn.makeScale(t,e,i),this.applyMatrix4(fn),this}lookAt(t){return ml.lookAt(t),ml.updateMatrix(),this.applyMatrix4(ml.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Cn(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Da);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const i=this.boundingSphere.center;if(nn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];vr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ae.addVectors(nn.min,vr.min),nn.expandByPoint(Ae),Ae.addVectors(nn.max,vr.max),nn.expandByPoint(Ae)):(nn.expandByPoint(vr.min),nn.expandByPoint(vr.max))}nn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Ae.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ae));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ae.fromBufferAttribute(a,c),l&&(Es.fromBufferAttribute(t,c),Ae.add(Es)),s=Math.max(s,i.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<i.count;N++)a[N]=new U,l[N]=new U;const c=new U,h=new U,f=new U,u=new Nt,d=new Nt,m=new Nt,_=new U,g=new U;function p(N,y,S){c.fromBufferAttribute(i,N),h.fromBufferAttribute(i,y),f.fromBufferAttribute(i,S),u.fromBufferAttribute(r,N),d.fromBufferAttribute(r,y),m.fromBufferAttribute(r,S),h.sub(c),f.sub(c),d.sub(u),m.sub(u);const C=1/(d.x*m.y-m.x*d.y);isFinite(C)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(C),g.copy(f).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(C),a[N].add(_),a[y].add(_),a[S].add(_),l[N].add(g),l[y].add(g),l[S].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let N=0,y=b.length;N<y;++N){const S=b[N],C=S.start,V=S.count;for(let B=C,q=C+V;B<q;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const w=new U,M=new U,D=new U,P=new U;function A(N){D.fromBufferAttribute(s,N),P.copy(D);const y=a[N];w.copy(y),w.sub(D.multiplyScalar(D.dot(y))).normalize(),M.crossVectors(P,y);const C=M.dot(l[N])<0?-1:1;o.setXYZW(N,w.x,w.y,w.z,C)}for(let N=0,y=b.length;N<y;++N){const S=b[N],C=S.start,V=S.count;for(let B=C,q=C+V;B<q;B+=3)A(t.getX(B+0)),A(t.getX(B+1)),A(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new on(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);const s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,h=new U,f=new U;if(t)for(let u=0,d=t.count;u<d;u+=3){const m=t.getX(u+0),_=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),a.add(h),l.add(h),c.add(h),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h);let d=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let p=0;p<h;p++)u[m++]=c[d++]}return new on(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new zn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){const u=c[h],d=t(u,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yu=new ve,Gi=new ch,vo=new Da,Eu=new U,xo=new U,So=new U,Mo=new U,gl=new U,yo=new U,wu=new U,Eo=new U;class Tn extends Je{constructor(t=new zn,e=new Pa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){yo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],f=r[l];h!==0&&(gl.fromBufferAttribute(f,t),o?yo.addScaledVector(gl,h):yo.addScaledVector(gl.sub(e),h))}e.add(yo)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),vo.copy(i.boundingSphere),vo.applyMatrix4(r),Gi.copy(t.ray).recast(t.near),!(vo.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(vo,Eu)===null||Gi.origin.distanceToSquared(Eu)>(t.far-t.near)**2))&&(yu.copy(r).invert(),Gi.copy(t.ray).applyMatrix4(yu),!(i.boundingBox!==null&&Gi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Gi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=u.length;m<_;m++){const g=u[m],p=o[g.materialIndex],b=Math.max(g.start,d.start),w=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let M=b,D=w;M<D;M+=3){const P=a.getX(M),A=a.getX(M+1),N=a.getX(M+2);s=wo(this,p,t,i,c,h,f,P,A,N),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const b=a.getX(g),w=a.getX(g+1),M=a.getX(g+2);s=wo(this,o,t,i,c,h,f,b,w,M),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=u.length;m<_;m++){const g=u[m],p=o[g.materialIndex],b=Math.max(g.start,d.start),w=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let M=b,D=w;M<D;M+=3){const P=M,A=M+1,N=M+2;s=wo(this,p,t,i,c,h,f,P,A,N),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const b=g,w=g+1,M=g+2;s=wo(this,o,t,i,c,h,f,b,w,M),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function k_(n,t,e,i,s,r,o,a){let l;if(t.side===Ke?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Li,a),l===null)return null;Eo.copy(a),Eo.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Eo);return c<e.near||c>e.far?null:{distance:c,point:Eo.clone(),object:n}}function wo(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,xo),n.getVertexPosition(l,So),n.getVertexPosition(c,Mo);const h=k_(n,t,e,i,xo,So,Mo,wu);if(h){const f=new U;wn.getBarycoord(wu,xo,So,Mo,f),s&&(h.uv=wn.getInterpolatedAttribute(s,a,l,c,f,new Nt)),r&&(h.uv1=wn.getInterpolatedAttribute(r,a,l,c,f,new Nt)),o&&(h.normal=wn.getInterpolatedAttribute(o,a,l,c,f,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new U,materialIndex:0};wn.getNormal(xo,So,Mo,u.normal),h.face=u,h.barycoord=f}return h}class ar extends zn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],f=[];let u=0,d=0;m("z","y","x",-1,-1,i,e,t,o,r,0),m("z","y","x",1,-1,i,e,-t,o,r,1),m("x","z","y",1,1,t,i,e,s,o,2),m("x","z","y",1,-1,t,i,-e,s,o,3),m("x","y","z",1,-1,t,e,i,s,r,4),m("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Cn(c,3)),this.setAttribute("normal",new Cn(h,3)),this.setAttribute("uv",new Cn(f,2));function m(_,g,p,b,w,M,D,P,A,N,y){const S=M/A,C=D/N,V=M/2,B=D/2,q=P/2,Z=A+1,G=N+1;let K=0,z=0;const it=new U;for(let ht=0;ht<G;ht++){const et=ht*C-B;for(let Lt=0;Lt<Z;Lt++){const Qt=Lt*S-V;it[_]=Qt*b,it[g]=et*w,it[p]=q,c.push(it.x,it.y,it.z),it[_]=0,it[g]=0,it[p]=P>0?1:-1,h.push(it.x,it.y,it.z),f.push(Lt/A),f.push(1-ht/N),K+=1}}for(let ht=0;ht<N;ht++)for(let et=0;et<A;et++){const Lt=u+et+Z*ht,Qt=u+et+Z*(ht+1),X=u+(et+1)+Z*(ht+1),tt=u+(et+1)+Z*ht;l.push(Lt,Qt,tt),l.push(Qt,X,tt),z+=6}a.addGroup(d,z,y),d+=z,u+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ar(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Zs(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function He(n){const t={};for(let e=0;e<n.length;e++){const i=Zs(n[e]);for(const s in i)t[s]=i[s]}return t}function B_(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Od(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}const z_={clone:Zs,merge:He};var H_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,V_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ii extends $r{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=H_,this.fragmentShader=V_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zs(t.uniforms),this.uniformsGroups=B_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class kd extends Je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=ti}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _i=new U,bu=new Nt,Tu=new Nt;class mn extends kd{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Cc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ho*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Cc*2*Math.atan(Math.tan(Ho*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){_i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(_i.x,_i.y).multiplyScalar(-t/_i.z),_i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_i.x,_i.y).multiplyScalar(-t/_i.z)}getViewSize(t,e){return this.getViewBounds(t,bu,Tu),e.subVectors(Tu,bu)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ho*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ws=-90,bs=1;class G_ extends Je{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new mn(ws,bs,t,e);s.layers=this.layers,this.add(s);const r=new mn(ws,bs,t,e);r.layers=this.layers,this.add(r);const o=new mn(ws,bs,t,e);o.layers=this.layers,this.add(o);const a=new mn(ws,bs,t,e);a.layers=this.layers,this.add(a);const l=new mn(ws,bs,t,e);l.layers=this.layers,this.add(l);const c=new mn(ws,bs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===ti)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===sa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Bd extends $e{constructor(t,e,i,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ws,super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class W_ extends is{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Bd(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:In}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ar(5,5,5),r=new Ii({name:"CubemapFromEquirect",uniforms:Zs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ke,blending:Ti});r.uniforms.tEquirect.value=e;const o=new Tn(s,r),a=e.minFilter;return e.minFilter===$i&&(e.minFilter=In),new G_(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}class Mr extends Je{constructor(){super(),this.isGroup=!0,this.type="Group"}}const X_={type:"move"};class _l{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,i),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,m=.005;c.inputState.pinching&&u>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(X_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Mr;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class q_ extends Je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ri,this.environmentIntensity=1,this.environmentRotation=new ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const vl=new U,Y_=new U,j_=new Pt;class je{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=vl.subVectors(i,e).cross(Y_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(vl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||j_.getNormalMatrix(t),s=this.coplanarPoint(vl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wi=new Da,bo=new U;class zd{constructor(t=new je,e=new je,i=new je,s=new je,r=new je,o=new je){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ti){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],f=s[6],u=s[7],d=s[8],m=s[9],_=s[10],g=s[11],p=s[12],b=s[13],w=s[14],M=s[15];if(i[0].setComponents(l-r,u-c,g-d,M-p).normalize(),i[1].setComponents(l+r,u+c,g+d,M+p).normalize(),i[2].setComponents(l+o,u+h,g+m,M+b).normalize(),i[3].setComponents(l-o,u-h,g-m,M-b).normalize(),i[4].setComponents(l-a,u-f,g-_,M-w).normalize(),e===ti)i[5].setComponents(l+a,u+f,g+_,M+w).normalize();else if(e===sa)i[5].setComponents(a,f,_,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(t){return Wi.center.set(0,0,0),Wi.radius=.7071067811865476,Wi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(bo.x=s.normal.x>0?t.max.x:t.min.x,bo.y=s.normal.y>0?t.max.y:t.min.y,bo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(bo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Hd extends $r{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const oa=new U,aa=new U,Au=new ve,xr=new ch,To=new Da,xl=new U,Cu=new U;class Z_ extends Je{constructor(t=new zn,e=new Hd){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)oa.fromBufferAttribute(e,s-1),aa.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=oa.distanceTo(aa);t.setAttribute("lineDistance",new Cn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),To.copy(i.boundingSphere),To.applyMatrix4(s),To.radius+=r,t.ray.intersectsSphere(To)===!1)return;Au.copy(s).invert(),xr.copy(t.ray).applyMatrix4(Au);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){const d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=d,g=m-1;_<g;_+=c){const p=h.getX(_),b=h.getX(_+1),w=Ao(this,t,xr,l,p,b,_);w&&e.push(w)}if(this.isLineLoop){const _=h.getX(m-1),g=h.getX(d),p=Ao(this,t,xr,l,_,g,m-1);p&&e.push(p)}}else{const d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let _=d,g=m-1;_<g;_+=c){const p=Ao(this,t,xr,l,_,_+1,_);p&&e.push(p)}if(this.isLineLoop){const _=Ao(this,t,xr,l,m-1,d,m-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ao(n,t,e,i,s,r,o){const a=n.geometry.attributes.position;if(oa.fromBufferAttribute(a,s),aa.fromBufferAttribute(a,r),e.distanceSqToSegment(oa,aa,xl,Cu)>i)return;xl.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(xl);if(!(c<t.near||c>t.far))return{distance:c,point:Cu.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Ru=new U,Du=new U;class K_ extends Z_{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Ru.fromBufferAttribute(e,s),Du.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Ru.distanceTo(Du);t.setAttribute("lineDistance",new Cn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Vd extends $e{constructor(t,e,i,s,r,o,a,l,c,h=Os){if(h!==Os&&h!==Ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Os&&(i=ns),i===void 0&&h===Ys&&(i=qs),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:An,this.minFilter=l!==void 0?l:An,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class La extends zn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,f=t/a,u=e/l,d=[],m=[],_=[],g=[];for(let p=0;p<h;p++){const b=p*u-o;for(let w=0;w<c;w++){const M=w*f-r;m.push(M,-b,0),_.push(0,0,1),g.push(w/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){const w=b+c*p,M=b+c*(p+1),D=b+1+c*(p+1),P=b+1+c*p;d.push(w,M,P),d.push(M,D,P)}this.setIndex(d),this.setAttribute("position",new Cn(m,3)),this.setAttribute("normal",new Cn(_,3)),this.setAttribute("uv",new Cn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new La(t.width,t.height,t.widthSegments,t.heightSegments)}}class $_ extends $r{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=r_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class J_ extends $r{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Q_ extends kd{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class t0 extends mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class Pu{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Ot(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Ot(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Ts extends K_{constructor(t=10,e=10,i=4473924,s=8947848){i=new Wt(i),s=new Wt(s);const r=e/2,o=t/e,a=t/2,l=[],c=[];for(let u=0,d=0,m=-a;u<=e;u++,m+=o){l.push(-a,0,m,a,0,m),l.push(m,0,-a,m,0,a);const _=u===r?i:s;_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3}const h=new zn;h.setAttribute("position",new Cn(l,3)),h.setAttribute("color",new Cn(c,3));const f=new Hd({vertexColors:!0,toneMapped:!1});super(h,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class e0 extends ls{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Lu(n,t,e,i){const s=n0(i);switch(e){case yd:return n*t;case wd:return n*t;case bd:return n*t*2;case Td:return n*t/s.components*s.byteLength;case oh:return n*t/s.components*s.byteLength;case Ad:return n*t*2/s.components*s.byteLength;case ah:return n*t*2/s.components*s.byteLength;case Ed:return n*t*3/s.components*s.byteLength;case bn:return n*t*4/s.components*s.byteLength;case lh:return n*t*4/s.components*s.byteLength;case Fo:case Oo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ko:case Bo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ic:case rc:return Math.max(n,16)*Math.max(t,8)/4;case nc:case sc:return Math.max(n,8)*Math.max(t,8)/2;case oc:case ac:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case lc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case cc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case hc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case uc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case fc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case dc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case pc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case mc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case gc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case _c:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case vc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case xc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Sc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Mc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case yc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case zo:case Ec:case wc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Cd:case bc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Tc:case Ac:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function n0(n){switch(n){case si:case xd:return{byteLength:1,components:1};case Rr:case Sd:case jr:return{byteLength:2,components:1};case sh:case rh:return{byteLength:2,components:4};case ns:case ih:case Qn:return{byteLength:4,components:1};case Md:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Gd(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function i0(n){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,f=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const h=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,h);else{f.sort((d,m)=>d.start-m.start);let u=0;for(let d=1;d<f.length;d++){const m=f[u],_=f[d];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++u,f[u]=_)}f.length=u+1;for(let d=0,m=f.length;d<m;d++){const _=f[d];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var s0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,r0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,o0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,a0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,l0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,c0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,h0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,u0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,f0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,d0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,p0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,m0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,g0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,v0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,S0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,M0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,E0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,w0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,b0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,T0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,A0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,C0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,R0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,D0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,P0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,L0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,I0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,U0="gl_FragColor = linearToOutputTexel( gl_FragColor );",N0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,F0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,O0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,k0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,B0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,z0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,H0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,V0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,G0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,W0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,X0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,q0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Y0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,j0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Z0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,K0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,J0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Q0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ev=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,nv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,iv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ov=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,av=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,dv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_v=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Sv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,yv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ev=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Av=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Iv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Uv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ov=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,zv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Vv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Xv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Yv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$v=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Jv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Qv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,nx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ix=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ox=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ux=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,px=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_x=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,yx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ex=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ax=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Cx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Px=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Lx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ix=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ux=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Nx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ut={alphahash_fragment:s0,alphahash_pars_fragment:r0,alphamap_fragment:o0,alphamap_pars_fragment:a0,alphatest_fragment:l0,alphatest_pars_fragment:c0,aomap_fragment:h0,aomap_pars_fragment:u0,batching_pars_vertex:f0,batching_vertex:d0,begin_vertex:p0,beginnormal_vertex:m0,bsdfs:g0,iridescence_fragment:_0,bumpmap_pars_fragment:v0,clipping_planes_fragment:x0,clipping_planes_pars_fragment:S0,clipping_planes_pars_vertex:M0,clipping_planes_vertex:y0,color_fragment:E0,color_pars_fragment:w0,color_pars_vertex:b0,color_vertex:T0,common:A0,cube_uv_reflection_fragment:C0,defaultnormal_vertex:R0,displacementmap_pars_vertex:D0,displacementmap_vertex:P0,emissivemap_fragment:L0,emissivemap_pars_fragment:I0,colorspace_fragment:U0,colorspace_pars_fragment:N0,envmap_fragment:F0,envmap_common_pars_fragment:O0,envmap_pars_fragment:k0,envmap_pars_vertex:B0,envmap_physical_pars_fragment:K0,envmap_vertex:z0,fog_vertex:H0,fog_pars_vertex:V0,fog_fragment:G0,fog_pars_fragment:W0,gradientmap_pars_fragment:X0,lightmap_pars_fragment:q0,lights_lambert_fragment:Y0,lights_lambert_pars_fragment:j0,lights_pars_begin:Z0,lights_toon_fragment:$0,lights_toon_pars_fragment:J0,lights_phong_fragment:Q0,lights_phong_pars_fragment:tv,lights_physical_fragment:ev,lights_physical_pars_fragment:nv,lights_fragment_begin:iv,lights_fragment_maps:sv,lights_fragment_end:rv,logdepthbuf_fragment:ov,logdepthbuf_pars_fragment:av,logdepthbuf_pars_vertex:lv,logdepthbuf_vertex:cv,map_fragment:hv,map_pars_fragment:uv,map_particle_fragment:fv,map_particle_pars_fragment:dv,metalnessmap_fragment:pv,metalnessmap_pars_fragment:mv,morphinstance_vertex:gv,morphcolor_vertex:_v,morphnormal_vertex:vv,morphtarget_pars_vertex:xv,morphtarget_vertex:Sv,normal_fragment_begin:Mv,normal_fragment_maps:yv,normal_pars_fragment:Ev,normal_pars_vertex:wv,normal_vertex:bv,normalmap_pars_fragment:Tv,clearcoat_normal_fragment_begin:Av,clearcoat_normal_fragment_maps:Cv,clearcoat_pars_fragment:Rv,iridescence_pars_fragment:Dv,opaque_fragment:Pv,packing:Lv,premultiplied_alpha_fragment:Iv,project_vertex:Uv,dithering_fragment:Nv,dithering_pars_fragment:Fv,roughnessmap_fragment:Ov,roughnessmap_pars_fragment:kv,shadowmap_pars_fragment:Bv,shadowmap_pars_vertex:zv,shadowmap_vertex:Hv,shadowmask_pars_fragment:Vv,skinbase_vertex:Gv,skinning_pars_vertex:Wv,skinning_vertex:Xv,skinnormal_vertex:qv,specularmap_fragment:Yv,specularmap_pars_fragment:jv,tonemapping_fragment:Zv,tonemapping_pars_fragment:Kv,transmission_fragment:$v,transmission_pars_fragment:Jv,uv_pars_fragment:Qv,uv_pars_vertex:tx,uv_vertex:ex,worldpos_vertex:nx,background_vert:ix,background_frag:sx,backgroundCube_vert:rx,backgroundCube_frag:ox,cube_vert:ax,cube_frag:lx,depth_vert:cx,depth_frag:hx,distanceRGBA_vert:ux,distanceRGBA_frag:fx,equirect_vert:dx,equirect_frag:px,linedashed_vert:mx,linedashed_frag:gx,meshbasic_vert:_x,meshbasic_frag:vx,meshlambert_vert:xx,meshlambert_frag:Sx,meshmatcap_vert:Mx,meshmatcap_frag:yx,meshnormal_vert:Ex,meshnormal_frag:wx,meshphong_vert:bx,meshphong_frag:Tx,meshphysical_vert:Ax,meshphysical_frag:Cx,meshtoon_vert:Rx,meshtoon_frag:Dx,points_vert:Px,points_frag:Lx,shadow_vert:Ix,shadow_frag:Ux,sprite_vert:Nx,sprite_frag:Fx},nt={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pt}},envmap:{envMap:{value:null},envMapRotation:{value:new Pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pt},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0},uvTransform:{value:new Pt}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}}},Pn={basic:{uniforms:He([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:He([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:He([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:He([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:He([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:He([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:He([nt.points,nt.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:He([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:He([nt.common,nt.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:He([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:He([nt.sprite,nt.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new Pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pt}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distanceRGBA:{uniforms:He([nt.common,nt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distanceRGBA_vert,fragmentShader:Ut.distanceRGBA_frag},shadow:{uniforms:He([nt.lights,nt.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};Pn.physical={uniforms:He([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pt},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pt},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pt},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pt},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pt},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pt}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};const Co={r:0,b:0,g:0},Xi=new ri,Ox=new ve;function kx(n,t,e,i,s,r,o){const a=new Wt(0);let l=r===!0?0:1,c,h,f=null,u=0,d=null;function m(w){let M=w.isScene===!0?w.background:null;return M&&M.isTexture&&(M=(w.backgroundBlurriness>0?e:t).get(M)),M}function _(w){let M=!1;const D=m(w);D===null?p(a,l):D&&D.isColor&&(p(D,1),M=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(w,M){const D=m(M);D&&(D.isCubeTexture||D.mapping===Ra)?(h===void 0&&(h=new Tn(new ar(1,1,1),new Ii({name:"BackgroundCubeMaterial",uniforms:Zs(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:Ke,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,A,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Xi.copy(M.backgroundRotation),Xi.x*=-1,Xi.y*=-1,Xi.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Xi.y*=-1,Xi.z*=-1),h.material.uniforms.envMap.value=D,h.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ox.makeRotationFromEuler(Xi)),h.material.toneMapped=qt.getTransfer(D.colorSpace)!==$t,(f!==D||u!==D.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,f=D,u=D.version,d=n.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):D&&D.isTexture&&(c===void 0&&(c=new Tn(new La(2,2),new Ii({name:"BackgroundMaterial",uniforms:Zs(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=D,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=qt.getTransfer(D.colorSpace)!==$t,D.matrixAutoUpdate===!0&&D.updateMatrix(),c.material.uniforms.uvTransform.value.copy(D.matrix),(f!==D||u!==D.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=D,u=D.version,d=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function p(w,M){w.getRGB(Co,Od(n)),i.buffers.color.setClear(Co.r,Co.g,Co.b,M,o)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,M=1){a.set(w),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,p(a,l)},render:_,addToRenderList:g,dispose:b}}function Bx(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null);let r=s,o=!1;function a(S,C,V,B,q){let Z=!1;const G=f(B,V,C);r!==G&&(r=G,c(r.object)),Z=d(S,B,V,q),Z&&m(S,B,V,q),q!==null&&t.update(q,n.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,M(S,C,V,B),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function h(S){return n.deleteVertexArray(S)}function f(S,C,V){const B=V.wireframe===!0;let q=i[S.id];q===void 0&&(q={},i[S.id]=q);let Z=q[C.id];Z===void 0&&(Z={},q[C.id]=Z);let G=Z[B];return G===void 0&&(G=u(l()),Z[B]=G),G}function u(S){const C=[],V=[],B=[];for(let q=0;q<e;q++)C[q]=0,V[q]=0,B[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:V,attributeDivisors:B,object:S,attributes:{},index:null}}function d(S,C,V,B){const q=r.attributes,Z=C.attributes;let G=0;const K=V.getAttributes();for(const z in K)if(K[z].location>=0){const ht=q[z];let et=Z[z];if(et===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(et=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(et=S.instanceColor)),ht===void 0||ht.attribute!==et||et&&ht.data!==et.data)return!0;G++}return r.attributesNum!==G||r.index!==B}function m(S,C,V,B){const q={},Z=C.attributes;let G=0;const K=V.getAttributes();for(const z in K)if(K[z].location>=0){let ht=Z[z];ht===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(ht=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(ht=S.instanceColor));const et={};et.attribute=ht,ht&&ht.data&&(et.data=ht.data),q[z]=et,G++}r.attributes=q,r.attributesNum=G,r.index=B}function _(){const S=r.newAttributes;for(let C=0,V=S.length;C<V;C++)S[C]=0}function g(S){p(S,0)}function p(S,C){const V=r.newAttributes,B=r.enabledAttributes,q=r.attributeDivisors;V[S]=1,B[S]===0&&(n.enableVertexAttribArray(S),B[S]=1),q[S]!==C&&(n.vertexAttribDivisor(S,C),q[S]=C)}function b(){const S=r.newAttributes,C=r.enabledAttributes;for(let V=0,B=C.length;V<B;V++)C[V]!==S[V]&&(n.disableVertexAttribArray(V),C[V]=0)}function w(S,C,V,B,q,Z,G){G===!0?n.vertexAttribIPointer(S,C,V,q,Z):n.vertexAttribPointer(S,C,V,B,q,Z)}function M(S,C,V,B){_();const q=B.attributes,Z=V.getAttributes(),G=C.defaultAttributeValues;for(const K in Z){const z=Z[K];if(z.location>=0){let it=q[K];if(it===void 0&&(K==="instanceMatrix"&&S.instanceMatrix&&(it=S.instanceMatrix),K==="instanceColor"&&S.instanceColor&&(it=S.instanceColor)),it!==void 0){const ht=it.normalized,et=it.itemSize,Lt=t.get(it);if(Lt===void 0)continue;const Qt=Lt.buffer,X=Lt.type,tt=Lt.bytesPerElement,gt=X===n.INT||X===n.UNSIGNED_INT||it.gpuType===ih;if(it.isInterleavedBufferAttribute){const ot=it.data,wt=ot.stride,Yt=it.offset;if(ot.isInstancedInterleavedBuffer){for(let bt=0;bt<z.locationSize;bt++)p(z.location+bt,ot.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let bt=0;bt<z.locationSize;bt++)g(z.location+bt);n.bindBuffer(n.ARRAY_BUFFER,Qt);for(let bt=0;bt<z.locationSize;bt++)w(z.location+bt,et/z.locationSize,X,ht,wt*tt,(Yt+et/z.locationSize*bt)*tt,gt)}else{if(it.isInstancedBufferAttribute){for(let ot=0;ot<z.locationSize;ot++)p(z.location+ot,it.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let ot=0;ot<z.locationSize;ot++)g(z.location+ot);n.bindBuffer(n.ARRAY_BUFFER,Qt);for(let ot=0;ot<z.locationSize;ot++)w(z.location+ot,et/z.locationSize,X,ht,et*tt,et/z.locationSize*ot*tt,gt)}}else if(G!==void 0){const ht=G[K];if(ht!==void 0)switch(ht.length){case 2:n.vertexAttrib2fv(z.location,ht);break;case 3:n.vertexAttrib3fv(z.location,ht);break;case 4:n.vertexAttrib4fv(z.location,ht);break;default:n.vertexAttrib1fv(z.location,ht)}}}}b()}function D(){N();for(const S in i){const C=i[S];for(const V in C){const B=C[V];for(const q in B)h(B[q].object),delete B[q];delete C[V]}delete i[S]}}function P(S){if(i[S.id]===void 0)return;const C=i[S.id];for(const V in C){const B=C[V];for(const q in B)h(B[q].object),delete B[q];delete C[V]}delete i[S.id]}function A(S){for(const C in i){const V=i[C];if(V[S.id]===void 0)continue;const B=V[S.id];for(const q in B)h(B[q].object),delete B[q];delete V[S.id]}}function N(){y(),o=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:N,resetDefaultState:y,dispose:D,releaseStatesOfGeometry:P,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:g,disableUnusedAttributes:b}}function zx(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,f){f!==0&&(n.drawArraysInstanced(i,c,h,f),e.update(h,i,f))}function a(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,f);let d=0;for(let m=0;m<f;m++)d+=h[m];e.update(d,i,1)}function l(c,h,f,u){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)o(c[m],h[m],u[m]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,f);let m=0;for(let _=0;_<f;_++)m+=h[_]*u[_];e.update(m,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Hx(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==bn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const N=A===jr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==si&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Qn&&!N)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=m>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:M,vertexTextures:D,maxSamples:P}}function Vx(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new je,a=new Pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||i!==0||s;return s=u,i=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){const m=f.clippingPlanes,_=f.clipIntersection,g=f.clipShadows,p=n.get(f);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{const b=r?0:i,w=b*4;let M=p.clippingState||null;l.value=M,M=h(m,u,w,d);for(let D=0;D!==w;++D)M[D]=e[D];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(f,u,d,m){const _=f!==null?f.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const p=d+_*4,b=u.matrixWorldInverse;a.getNormalMatrix(b),(g===null||g.length<p)&&(g=new Float32Array(p));for(let w=0,M=d;w!==_;++w,M+=4)o.copy(f[w]).applyMatrix4(b,a),o.normal.toArray(g,M),g[M+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function Gx(n){let t=new WeakMap;function e(o,a){return a===Jl?o.mapping=Ws:a===Ql&&(o.mapping=Xs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Jl||a===Ql)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new W_(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}const Ls=4,Iu=[.125,.215,.35,.446,.526,.582],Zi=20,Sl=new Q_,Uu=new Wt;let Ml=null,yl=0,El=0,wl=!1;const Yi=(1+Math.sqrt(5))/2,As=1/Yi,Nu=[new U(-Yi,As,0),new U(Yi,As,0),new U(-As,0,Yi),new U(As,0,Yi),new U(0,Yi,-As),new U(0,Yi,As),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class Fu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Ml=this._renderer.getRenderTarget(),yl=this._renderer.getActiveCubeFace(),El=this._renderer.getActiveMipmapLevel(),wl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ku(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ml,yl,El),this._renderer.xr.enabled=wl,t.scissorTest=!1,Ro(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ws||t.mapping===Xs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ml=this._renderer.getRenderTarget(),yl=this._renderer.getActiveCubeFace(),El=this._renderer.getActiveMipmapLevel(),wl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:In,minFilter:In,generateMipmaps:!1,type:jr,format:bn,colorSpace:js,depthBuffer:!1},s=Ou(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ou(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wx(r)),this._blurMaterial=Xx(r,t,e)}return s}_compileMaterial(t){const e=new Tn(this._lodPlanes[0],t);this._renderer.compile(e,Sl)}_sceneToCubeUV(t,e,i,s){const a=new mn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(Uu),h.toneMapping=Ai,h.autoClear=!1;const d=new Pa({name:"PMREM.Background",side:Ke,depthWrite:!1,depthTest:!1}),m=new Tn(new ar,d);let _=!1;const g=t.background;g?g.isColor&&(d.color.copy(g),t.background=null,_=!0):(d.color.copy(Uu),_=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):b===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const w=this._cubeSize;Ro(s,b*w,p>2?w:0,w,w),h.setRenderTarget(s),_&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=u,h.autoClear=f,t.background=g}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Ws||t.mapping===Xs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ku());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Tn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Ro(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Sl)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Nu[(s-r-1)%Nu.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Tn(this._lodPlanes[s],c),u=c.uniforms,d=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Zi-1),_=r/m,g=isFinite(r)?1+Math.floor(h*_):Zi;g>Zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Zi}`);const p=[];let b=0;for(let A=0;A<Zi;++A){const N=A/_,y=Math.exp(-N*N/2);p.push(y),A===0?b+=y:A<g&&(b+=2*y)}for(let A=0;A<p.length;A++)p[A]=p[A]/b;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:w}=this;u.dTheta.value=m,u.mipInt.value=w-i;const M=this._sizeLods[s],D=3*M*(s>w-Ls?s-w+Ls:0),P=4*(this._cubeSize-M);Ro(e,D,P,3*M,2*M),l.setRenderTarget(e),l.render(f,Sl)}}function Wx(n){const t=[],e=[],i=[];let s=n;const r=n-Ls+1+Iu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Ls?l=Iu[o-n+Ls-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,m=6,_=3,g=2,p=1,b=new Float32Array(_*m*d),w=new Float32Array(g*m*d),M=new Float32Array(p*m*d);for(let P=0;P<d;P++){const A=P%3*2/3-1,N=P>2?0:-1,y=[A,N,0,A+2/3,N,0,A+2/3,N+1,0,A,N,0,A+2/3,N+1,0,A,N+1,0];b.set(y,_*m*P),w.set(u,g*m*P);const S=[P,P,P,P,P,P];M.set(S,p*m*P)}const D=new zn;D.setAttribute("position",new on(b,_)),D.setAttribute("uv",new on(w,g)),D.setAttribute("faceIndex",new on(M,p)),t.push(D),s>Ls&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Ou(n,t,e){const i=new is(n,t,e);return i.texture.mapping=Ra,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ro(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Xx(n,t,e){const i=new Float32Array(Zi),s=new U(0,1,0);return new Ii({name:"SphericalGaussianBlur",defines:{n:Zi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:hh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function ku(){return new Ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Bu(){return new Ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function hh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function qx(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Jl||l===Ql,h=l===Ws||l===Xs;if(c||h){let f=t.get(a);const u=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new Fu(n)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new Fu(n)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Yx(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Cs("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function jx(n,t,e,i){const s={},r=new WeakMap;function o(f){const u=f.target;u.index!==null&&t.remove(u.index);for(const m in u.attributes)t.remove(u.attributes[m]);u.removeEventListener("dispose",o),delete s[u.id];const d=r.get(u);d&&(t.remove(d),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(f,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(f){const u=f.attributes;for(const d in u)t.update(u[d],n.ARRAY_BUFFER)}function c(f){const u=[],d=f.index,m=f.attributes.position;let _=0;if(d!==null){const b=d.array;_=d.version;for(let w=0,M=b.length;w<M;w+=3){const D=b[w+0],P=b[w+1],A=b[w+2];u.push(D,P,P,A,A,D)}}else if(m!==void 0){const b=m.array;_=m.version;for(let w=0,M=b.length/3-1;w<M;w+=3){const D=w+0,P=w+1,A=w+2;u.push(D,P,P,A,A,D)}}else return;const g=new(Dd(u)?Fd:Nd)(u,1);g.version=_;const p=r.get(f);p&&t.remove(p),r.set(f,g)}function h(f){const u=r.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function Zx(n,t,e){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){n.drawElements(i,d,r,u*o),e.update(d,i,1)}function c(u,d,m){m!==0&&(n.drawElementsInstanced(i,d,r,u*o,m),e.update(d,i,m))}function h(u,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];e.update(g,i,1)}function f(u,d,m,_){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<u.length;p++)c(u[p]/o,d[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(i,d,0,r,u,0,_,0,m);let p=0;for(let b=0;b<m;b++)p+=d[b]*_[b];e.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Kx(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function $x(n,t,e){const i=new WeakMap,s=new _e;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let u=i.get(a);if(u===void 0||u.count!==f){let S=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var d=S;u!==void 0&&u.texture.dispose();const m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let M=0;m===!0&&(M=1),_===!0&&(M=2),g===!0&&(M=3);let D=a.attributes.position.count*M,P=1;D>t.maxTextureSize&&(P=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const A=new Float32Array(D*P*4*f),N=new Ld(A,D,P,f);N.type=Qn,N.needsUpdate=!0;const y=M*4;for(let C=0;C<f;C++){const V=p[C],B=b[C],q=w[C],Z=D*P*4*C;for(let G=0;G<V.count;G++){const K=G*y;m===!0&&(s.fromBufferAttribute(V,G),A[Z+K+0]=s.x,A[Z+K+1]=s.y,A[Z+K+2]=s.z,A[Z+K+3]=0),_===!0&&(s.fromBufferAttribute(B,G),A[Z+K+4]=s.x,A[Z+K+5]=s.y,A[Z+K+6]=s.z,A[Z+K+7]=0),g===!0&&(s.fromBufferAttribute(q,G),A[Z+K+8]=s.x,A[Z+K+9]=s.y,A[Z+K+10]=s.z,A[Z+K+11]=q.itemSize===4?s.w:1)}}u={count:f,texture:N,size:new Nt(D,P)},i.set(a,u),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const _=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function Jx(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,f=t.get(l,h);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const Wd=new $e,zu=new Vd(1,1),Xd=new Ld,qd=new A_,Yd=new Bd,Hu=[],Vu=[],Gu=new Float32Array(16),Wu=new Float32Array(9),Xu=new Float32Array(4);function lr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Hu[s];if(r===void 0&&(r=new Float32Array(s),Hu[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function we(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function be(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ia(n,t){let e=Vu[t];e===void 0&&(e=new Int32Array(t),Vu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Qx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function tS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;n.uniform2fv(this.addr,t),be(e,t)}}function eS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(we(e,t))return;n.uniform3fv(this.addr,t),be(e,t)}}function nS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;n.uniform4fv(this.addr,t),be(e,t)}}function iS(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(we(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(we(e,i))return;Xu.set(i),n.uniformMatrix2fv(this.addr,!1,Xu),be(e,i)}}function sS(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(we(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(we(e,i))return;Wu.set(i),n.uniformMatrix3fv(this.addr,!1,Wu),be(e,i)}}function rS(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(we(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(we(e,i))return;Gu.set(i),n.uniformMatrix4fv(this.addr,!1,Gu),be(e,i)}}function oS(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function aS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;n.uniform2iv(this.addr,t),be(e,t)}}function lS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;n.uniform3iv(this.addr,t),be(e,t)}}function cS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;n.uniform4iv(this.addr,t),be(e,t)}}function hS(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function uS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;n.uniform2uiv(this.addr,t),be(e,t)}}function fS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;n.uniform3uiv(this.addr,t),be(e,t)}}function dS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;n.uniform4uiv(this.addr,t),be(e,t)}}function pS(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(zu.compareFunction=Rd,r=zu):r=Wd,e.setTexture2D(t||r,s)}function mS(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||qd,s)}function gS(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Yd,s)}function _S(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Xd,s)}function vS(n){switch(n){case 5126:return Qx;case 35664:return tS;case 35665:return eS;case 35666:return nS;case 35674:return iS;case 35675:return sS;case 35676:return rS;case 5124:case 35670:return oS;case 35667:case 35671:return aS;case 35668:case 35672:return lS;case 35669:case 35673:return cS;case 5125:return hS;case 36294:return uS;case 36295:return fS;case 36296:return dS;case 35678:case 36198:case 36298:case 36306:case 35682:return pS;case 35679:case 36299:case 36307:return mS;case 35680:case 36300:case 36308:case 36293:return gS;case 36289:case 36303:case 36311:case 36292:return _S}}function xS(n,t){n.uniform1fv(this.addr,t)}function SS(n,t){const e=lr(t,this.size,2);n.uniform2fv(this.addr,e)}function MS(n,t){const e=lr(t,this.size,3);n.uniform3fv(this.addr,e)}function yS(n,t){const e=lr(t,this.size,4);n.uniform4fv(this.addr,e)}function ES(n,t){const e=lr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function wS(n,t){const e=lr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function bS(n,t){const e=lr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function TS(n,t){n.uniform1iv(this.addr,t)}function AS(n,t){n.uniform2iv(this.addr,t)}function CS(n,t){n.uniform3iv(this.addr,t)}function RS(n,t){n.uniform4iv(this.addr,t)}function DS(n,t){n.uniform1uiv(this.addr,t)}function PS(n,t){n.uniform2uiv(this.addr,t)}function LS(n,t){n.uniform3uiv(this.addr,t)}function IS(n,t){n.uniform4uiv(this.addr,t)}function US(n,t,e){const i=this.cache,s=t.length,r=Ia(e,s);we(i,r)||(n.uniform1iv(this.addr,r),be(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Wd,r[o])}function NS(n,t,e){const i=this.cache,s=t.length,r=Ia(e,s);we(i,r)||(n.uniform1iv(this.addr,r),be(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||qd,r[o])}function FS(n,t,e){const i=this.cache,s=t.length,r=Ia(e,s);we(i,r)||(n.uniform1iv(this.addr,r),be(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Yd,r[o])}function OS(n,t,e){const i=this.cache,s=t.length,r=Ia(e,s);we(i,r)||(n.uniform1iv(this.addr,r),be(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Xd,r[o])}function kS(n){switch(n){case 5126:return xS;case 35664:return SS;case 35665:return MS;case 35666:return yS;case 35674:return ES;case 35675:return wS;case 35676:return bS;case 5124:case 35670:return TS;case 35667:case 35671:return AS;case 35668:case 35672:return CS;case 35669:case 35673:return RS;case 5125:return DS;case 36294:return PS;case 36295:return LS;case 36296:return IS;case 35678:case 36198:case 36298:case 36306:case 35682:return US;case 35679:case 36299:case 36307:return NS;case 35680:case 36300:case 36308:case 36293:return FS;case 36289:case 36303:case 36311:case 36292:return OS}}class BS{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=vS(e.type)}}class zS{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=kS(e.type)}}class HS{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const bl=/(\w+)(\])?(\[|\.)?/g;function qu(n,t){n.seq.push(t),n.map[t.id]=t}function VS(n,t,e){const i=n.name,s=i.length;for(bl.lastIndex=0;;){const r=bl.exec(i),o=bl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){qu(e,c===void 0?new BS(a,n,t):new zS(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new HS(a),qu(e,f)),e=f}}}class Vo{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);VS(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function Yu(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const GS=37297;let WS=0;function XS(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const ju=new Pt;function qS(n){qt._getMatrix(ju,qt.workingColorSpace,n);const t=`mat3( ${ju.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(n)){case ia:return[t,"LinearTransferOETF"];case $t:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Zu(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+XS(n.getShaderSource(t),o)}else return s}function YS(n,t){const e=qS(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function jS(n,t){let e;switch(t){case $g:e="Linear";break;case Jg:e="Reinhard";break;case Qg:e="Cineon";break;case t_:e="ACESFilmic";break;case n_:e="AgX";break;case i_:e="Neutral";break;case e_:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Do=new U;function ZS(){qt.getLuminanceCoefficients(Do);const n=Do.x.toFixed(4),t=Do.y.toFixed(4),e=Do.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function KS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yr).join(`
`)}function $S(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function JS(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function yr(n){return n!==""}function Ku(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $u(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const QS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rc(n){return n.replace(QS,eM)}const tM=new Map;function eM(n,t){let e=Ut[t];if(e===void 0){const i=tM.get(t);if(i!==void 0)e=Ut[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Rc(e)}const nM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ju(n){return n.replace(nM,iM)}function iM(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Qu(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function sM(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===gd?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Dg?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Zn&&(t="SHADOWMAP_TYPE_VSM"),t}function rM(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ws:case Xs:t="ENVMAP_TYPE_CUBE";break;case Ra:t="ENVMAP_TYPE_CUBE_UV";break}return t}function oM(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Xs:t="ENVMAP_MODE_REFRACTION";break}return t}function aM(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case _d:t="ENVMAP_BLENDING_MULTIPLY";break;case Zg:t="ENVMAP_BLENDING_MIX";break;case Kg:t="ENVMAP_BLENDING_ADD";break}return t}function lM(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function cM(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=sM(e),c=rM(e),h=oM(e),f=aM(e),u=lM(e),d=KS(e),m=$S(r),_=s.createProgram();let g,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(yr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(yr).join(`
`),p.length>0&&(p+=`
`)):(g=[Qu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yr).join(`
`),p=[Qu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ai?"#define TONE_MAPPING":"",e.toneMapping!==Ai?Ut.tonemapping_pars_fragment:"",e.toneMapping!==Ai?jS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,YS("linearToOutputTexel",e.outputColorSpace),ZS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(yr).join(`
`)),o=Rc(o),o=Ku(o,e),o=$u(o,e),a=Rc(a),a=Ku(a,e),a=$u(a,e),o=Ju(o),a=Ju(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===cu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===cu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=b+g+o,M=b+p+a,D=Yu(s,s.VERTEX_SHADER,w),P=Yu(s,s.FRAGMENT_SHADER,M);s.attachShader(_,D),s.attachShader(_,P),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(C){if(n.debug.checkShaderErrors){const V=s.getProgramInfoLog(_).trim(),B=s.getShaderInfoLog(D).trim(),q=s.getShaderInfoLog(P).trim();let Z=!0,G=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,D,P);else{const K=Zu(s,D,"vertex"),z=Zu(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+V+`
`+K+`
`+z)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(B===""||q==="")&&(G=!1);G&&(C.diagnostics={runnable:Z,programLog:V,vertexShader:{log:B,prefix:g},fragmentShader:{log:q,prefix:p}})}s.deleteShader(D),s.deleteShader(P),N=new Vo(s,_),y=JS(s,_)}let N;this.getUniforms=function(){return N===void 0&&A(this),N};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,GS)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=WS++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=P,this}let hM=0;class uM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new fM(t),e.set(t,i)),i}}class fM{constructor(t){this.id=hM++,this.code=t,this.usedTimes=0}}function dM(n,t,e,i,s,r,o){const a=new Id,l=new uM,c=new Set,h=[],f=s.logarithmicDepthBuffer,u=s.vertexTextures;let d=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function g(y,S,C,V,B){const q=V.fog,Z=B.geometry,G=y.isMeshStandardMaterial?V.environment:null,K=(y.isMeshStandardMaterial?e:t).get(y.envMap||G),z=K&&K.mapping===Ra?K.image.height:null,it=m[y.type];y.precision!==null&&(d=s.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const ht=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,et=ht!==void 0?ht.length:0;let Lt=0;Z.morphAttributes.position!==void 0&&(Lt=1),Z.morphAttributes.normal!==void 0&&(Lt=2),Z.morphAttributes.color!==void 0&&(Lt=3);let Qt,X,tt,gt;if(it){const Kt=Pn[it];Qt=Kt.vertexShader,X=Kt.fragmentShader}else Qt=y.vertexShader,X=y.fragmentShader,l.update(y),tt=l.getVertexShaderID(y),gt=l.getFragmentShaderID(y);const ot=n.getRenderTarget(),wt=n.state.buffers.depth.getReversed(),Yt=B.isInstancedMesh===!0,bt=B.isBatchedMesh===!0,me=!!y.map,le=!!y.matcap,kt=!!K,T=!!y.aoMap,ln=!!y.lightMap,Bt=!!y.bumpMap,zt=!!y.normalMap,St=!!y.displacementMap,re=!!y.emissiveMap,vt=!!y.metalnessMap,E=!!y.roughnessMap,v=y.anisotropy>0,F=y.clearcoat>0,Y=y.dispersion>0,$=y.iridescence>0,W=y.sheen>0,_t=y.transmission>0,at=v&&!!y.anisotropyMap,ft=F&&!!y.clearcoatMap,Vt=F&&!!y.clearcoatNormalMap,Q=F&&!!y.clearcoatRoughnessMap,dt=$&&!!y.iridescenceMap,Et=$&&!!y.iridescenceThicknessMap,Tt=W&&!!y.sheenColorMap,pt=W&&!!y.sheenRoughnessMap,Ht=!!y.specularMap,It=!!y.specularColorMap,ie=!!y.specularIntensityMap,R=_t&&!!y.transmissionMap,st=_t&&!!y.thicknessMap,H=!!y.gradientMap,j=!!y.alphaMap,ct=y.alphaTest>0,lt=!!y.alphaHash,Dt=!!y.extensions;let ue=Ai;y.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(ue=n.toneMapping);const Ue={shaderID:it,shaderType:y.type,shaderName:y.name,vertexShader:Qt,fragmentShader:X,defines:y.defines,customVertexShaderID:tt,customFragmentShaderID:gt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:bt,batchingColor:bt&&B._colorsTexture!==null,instancing:Yt,instancingColor:Yt&&B.instanceColor!==null,instancingMorph:Yt&&B.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ot===null?n.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:js,alphaToCoverage:!!y.alphaToCoverage,map:me,matcap:le,envMap:kt,envMapMode:kt&&K.mapping,envMapCubeUVHeight:z,aoMap:T,lightMap:ln,bumpMap:Bt,normalMap:zt,displacementMap:u&&St,emissiveMap:re,normalMapObjectSpace:zt&&y.normalMapType===l_,normalMapTangentSpace:zt&&y.normalMapType===a_,metalnessMap:vt,roughnessMap:E,anisotropy:v,anisotropyMap:at,clearcoat:F,clearcoatMap:ft,clearcoatNormalMap:Vt,clearcoatRoughnessMap:Q,dispersion:Y,iridescence:$,iridescenceMap:dt,iridescenceThicknessMap:Et,sheen:W,sheenColorMap:Tt,sheenRoughnessMap:pt,specularMap:Ht,specularColorMap:It,specularIntensityMap:ie,transmission:_t,transmissionMap:R,thicknessMap:st,gradientMap:H,opaque:y.transparent===!1&&y.blending===Fs&&y.alphaToCoverage===!1,alphaMap:j,alphaTest:ct,alphaHash:lt,combine:y.combine,mapUv:me&&_(y.map.channel),aoMapUv:T&&_(y.aoMap.channel),lightMapUv:ln&&_(y.lightMap.channel),bumpMapUv:Bt&&_(y.bumpMap.channel),normalMapUv:zt&&_(y.normalMap.channel),displacementMapUv:St&&_(y.displacementMap.channel),emissiveMapUv:re&&_(y.emissiveMap.channel),metalnessMapUv:vt&&_(y.metalnessMap.channel),roughnessMapUv:E&&_(y.roughnessMap.channel),anisotropyMapUv:at&&_(y.anisotropyMap.channel),clearcoatMapUv:ft&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:Vt&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:pt&&_(y.sheenRoughnessMap.channel),specularMapUv:Ht&&_(y.specularMap.channel),specularColorMapUv:It&&_(y.specularColorMap.channel),specularIntensityMapUv:ie&&_(y.specularIntensityMap.channel),transmissionMapUv:R&&_(y.transmissionMap.channel),thicknessMapUv:st&&_(y.thicknessMap.channel),alphaMapUv:j&&_(y.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(zt||v),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Z.attributes.uv&&(me||j),fog:!!q,useFog:y.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:wt,skinning:B.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:Lt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:ue,decodeVideoTexture:me&&y.map.isVideoTexture===!0&&qt.getTransfer(y.map.colorSpace)===$t,decodeVideoTextureEmissive:re&&y.emissiveMap.isVideoTexture===!0&&qt.getTransfer(y.emissiveMap.colorSpace)===$t,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Jn,flipSided:y.side===Ke,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Dt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&y.extensions.multiDraw===!0||bt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ue.vertexUv1s=c.has(1),Ue.vertexUv2s=c.has(2),Ue.vertexUv3s=c.has(3),c.clear(),Ue}function p(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const C in y.defines)S.push(C),S.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(b(S,y),w(S,y),S.push(n.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function b(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function w(y,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),y.push(a.mask)}function M(y){const S=m[y.type];let C;if(S){const V=Pn[S];C=z_.clone(V.uniforms)}else C=y.uniforms;return C}function D(y,S){let C;for(let V=0,B=h.length;V<B;V++){const q=h[V];if(q.cacheKey===S){C=q,++C.usedTimes;break}}return C===void 0&&(C=new cM(n,S,y,r),h.push(C)),C}function P(y){if(--y.usedTimes===0){const S=h.indexOf(y);h[S]=h[h.length-1],h.pop(),y.destroy()}}function A(y){l.remove(y)}function N(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:M,acquireProgram:D,releaseProgram:P,releaseShaderCache:A,programs:h,dispose:N}}function pM(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function mM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function tf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function ef(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(f,u,d,m,_,g){let p=n[t];return p===void 0?(p={id:f.id,object:f,geometry:u,material:d,groupOrder:m,renderOrder:f.renderOrder,z:_,group:g},n[t]=p):(p.id=f.id,p.object=f,p.geometry=u,p.material=d,p.groupOrder=m,p.renderOrder=f.renderOrder,p.z=_,p.group=g),t++,p}function a(f,u,d,m,_,g){const p=o(f,u,d,m,_,g);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(f,u,d,m,_,g){const p=o(f,u,d,m,_,g);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(f,u){e.length>1&&e.sort(f||mM),i.length>1&&i.sort(u||tf),s.length>1&&s.sort(u||tf)}function h(){for(let f=t,u=n.length;f<u;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function gM(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new ef,n.set(i,[o])):s>=r.length?(o=new ef,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function _M(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Wt};break;case"SpotLight":e={position:new U,direction:new U,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new U,halfWidth:new U,halfHeight:new U};break}return n[t.id]=e,e}}}function vM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let xM=0;function SM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function MM(n){const t=new _M,e=vM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const s=new U,r=new ve,o=new ve;function a(c){let h=0,f=0,u=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let d=0,m=0,_=0,g=0,p=0,b=0,w=0,M=0,D=0,P=0,A=0;c.sort(SM);for(let y=0,S=c.length;y<S;y++){const C=c[y],V=C.color,B=C.intensity,q=C.distance,Z=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=V.r*B,f+=V.g*B,u+=V.b*B;else if(C.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(C.sh.coefficients[G],B);A++}else if(C.isDirectionalLight){const G=t.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const K=C.shadow,z=e.get(C);z.shadowIntensity=K.intensity,z.shadowBias=K.bias,z.shadowNormalBias=K.normalBias,z.shadowRadius=K.radius,z.shadowMapSize=K.mapSize,i.directionalShadow[d]=z,i.directionalShadowMap[d]=Z,i.directionalShadowMatrix[d]=C.shadow.matrix,b++}i.directional[d]=G,d++}else if(C.isSpotLight){const G=t.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(V).multiplyScalar(B),G.distance=q,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,i.spot[_]=G;const K=C.shadow;if(C.map&&(i.spotLightMap[D]=C.map,D++,K.updateMatrices(C),C.castShadow&&P++),i.spotLightMatrix[_]=K.matrix,C.castShadow){const z=e.get(C);z.shadowIntensity=K.intensity,z.shadowBias=K.bias,z.shadowNormalBias=K.normalBias,z.shadowRadius=K.radius,z.shadowMapSize=K.mapSize,i.spotShadow[_]=z,i.spotShadowMap[_]=Z,M++}_++}else if(C.isRectAreaLight){const G=t.get(C);G.color.copy(V).multiplyScalar(B),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),i.rectArea[g]=G,g++}else if(C.isPointLight){const G=t.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),G.distance=C.distance,G.decay=C.decay,C.castShadow){const K=C.shadow,z=e.get(C);z.shadowIntensity=K.intensity,z.shadowBias=K.bias,z.shadowNormalBias=K.normalBias,z.shadowRadius=K.radius,z.shadowMapSize=K.mapSize,z.shadowCameraNear=K.camera.near,z.shadowCameraFar=K.camera.far,i.pointShadow[m]=z,i.pointShadowMap[m]=Z,i.pointShadowMatrix[m]=C.shadow.matrix,w++}i.point[m]=G,m++}else if(C.isHemisphereLight){const G=t.get(C);G.skyColor.copy(C.color).multiplyScalar(B),G.groundColor.copy(C.groundColor).multiplyScalar(B),i.hemi[p]=G,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=nt.LTC_FLOAT_1,i.rectAreaLTC2=nt.LTC_FLOAT_2):(i.rectAreaLTC1=nt.LTC_HALF_1,i.rectAreaLTC2=nt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;const N=i.hash;(N.directionalLength!==d||N.pointLength!==m||N.spotLength!==_||N.rectAreaLength!==g||N.hemiLength!==p||N.numDirectionalShadows!==b||N.numPointShadows!==w||N.numSpotShadows!==M||N.numSpotMaps!==D||N.numLightProbes!==A)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=M+D-P,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=A,N.directionalLength=d,N.pointLength=m,N.spotLength=_,N.rectAreaLength=g,N.hemiLength=p,N.numDirectionalShadows=b,N.numPointShadows=w,N.numSpotShadows=M,N.numSpotMaps=D,N.numLightProbes=A,i.version=xM++)}function l(c,h){let f=0,u=0,d=0,m=0,_=0;const g=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const w=c[p];if(w.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),f++}else if(w.isSpotLight){const M=i.spot[d];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),d++}else if(w.isRectAreaLight){const M=i.rectArea[m];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(g),o.identity(),r.copy(w.matrixWorld),r.premultiply(g),o.extractRotation(r),M.halfWidth.set(w.width*.5,0,0),M.halfHeight.set(0,w.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),m++}else if(w.isPointLight){const M=i.point[u];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(g),u++}else if(w.isHemisphereLight){const M=i.hemi[_];M.direction.setFromMatrixPosition(w.matrixWorld),M.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:i}}function nf(n){const t=new MM(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function yM(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new nf(n),t.set(s,[a])):r>=o.length?(a=new nf(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const EM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function bM(n,t,e){let i=new zd;const s=new Nt,r=new Nt,o=new _e,a=new $_({depthPacking:o_}),l=new J_,c={},h=e.maxTextureSize,f={[Li]:Ke,[Ke]:Li,[Jn]:Jn},u=new Ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:EM,fragmentShader:wM}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const m=new zn;m.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Tn(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gd;let p=this.type;this.render=function(P,A,N){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||P.length===0)return;const y=n.getRenderTarget(),S=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),V=n.state;V.setBlending(Ti),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const B=p!==Zn&&this.type===Zn,q=p===Zn&&this.type!==Zn;for(let Z=0,G=P.length;Z<G;Z++){const K=P[Z],z=K.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const it=z.getFrameExtents();if(s.multiply(it),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/it.x),s.x=r.x*it.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/it.y),s.y=r.y*it.y,z.mapSize.y=r.y)),z.map===null||B===!0||q===!0){const et=this.type!==Zn?{minFilter:An,magFilter:An}:{};z.map!==null&&z.map.dispose(),z.map=new is(s.x,s.y,et),z.map.texture.name=K.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const ht=z.getViewportCount();for(let et=0;et<ht;et++){const Lt=z.getViewport(et);o.set(r.x*Lt.x,r.y*Lt.y,r.x*Lt.z,r.y*Lt.w),V.viewport(o),z.updateMatrices(K,et),i=z.getFrustum(),M(A,N,z.camera,K,this.type)}z.isPointLightShadow!==!0&&this.type===Zn&&b(z,N),z.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(y,S,C)};function b(P,A){const N=t.update(_);u.defines.VSM_SAMPLES!==P.blurSamples&&(u.defines.VSM_SAMPLES=P.blurSamples,d.defines.VSM_SAMPLES=P.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new is(s.x,s.y)),u.uniforms.shadow_pass.value=P.map.texture,u.uniforms.resolution.value=P.mapSize,u.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(A,null,N,u,_,null),d.uniforms.shadow_pass.value=P.mapPass.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(A,null,N,d,_,null)}function w(P,A,N,y){let S=null;const C=N.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(C!==void 0)S=C;else if(S=N.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const V=S.uuid,B=A.uuid;let q=c[V];q===void 0&&(q={},c[V]=q);let Z=q[B];Z===void 0&&(Z=S.clone(),q[B]=Z,A.addEventListener("dispose",D)),S=Z}if(S.visible=A.visible,S.wireframe=A.wireframe,y===Zn?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:f[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,N.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const V=n.properties.get(S);V.light=N}return S}function M(P,A,N,y,S){if(P.visible===!1)return;if(P.layers.test(A.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&S===Zn)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,P.matrixWorld);const B=t.update(P),q=P.material;if(Array.isArray(q)){const Z=B.groups;for(let G=0,K=Z.length;G<K;G++){const z=Z[G],it=q[z.materialIndex];if(it&&it.visible){const ht=w(P,it,y,S);P.onBeforeShadow(n,P,A,N,B,ht,z),n.renderBufferDirect(N,null,B,ht,P,z),P.onAfterShadow(n,P,A,N,B,ht,z)}}}else if(q.visible){const Z=w(P,q,y,S);P.onBeforeShadow(n,P,A,N,B,Z,null),n.renderBufferDirect(N,null,B,Z,P,null),P.onAfterShadow(n,P,A,N,B,Z,null)}}const V=P.children;for(let B=0,q=V.length;B<q;B++)M(V[B],A,N,y,S)}function D(P){P.target.removeEventListener("dispose",D);for(const N in c){const y=c[N],S=P.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}const TM={[Xl]:ql,[Yl]:Kl,[jl]:$l,[Gs]:Zl,[ql]:Xl,[Kl]:Yl,[$l]:jl,[Zl]:Gs};function AM(n,t){function e(){let R=!1;const st=new _e;let H=null;const j=new _e(0,0,0,0);return{setMask:function(ct){H!==ct&&!R&&(n.colorMask(ct,ct,ct,ct),H=ct)},setLocked:function(ct){R=ct},setClear:function(ct,lt,Dt,ue,Ue){Ue===!0&&(ct*=ue,lt*=ue,Dt*=ue),st.set(ct,lt,Dt,ue),j.equals(st)===!1&&(n.clearColor(ct,lt,Dt,ue),j.copy(st))},reset:function(){R=!1,H=null,j.set(-1,0,0,0)}}}function i(){let R=!1,st=!1,H=null,j=null,ct=null;return{setReversed:function(lt){if(st!==lt){const Dt=t.get("EXT_clip_control");st?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT);const ue=ct;ct=null,this.setClear(ue)}st=lt},getReversed:function(){return st},setTest:function(lt){lt?ot(n.DEPTH_TEST):wt(n.DEPTH_TEST)},setMask:function(lt){H!==lt&&!R&&(n.depthMask(lt),H=lt)},setFunc:function(lt){if(st&&(lt=TM[lt]),j!==lt){switch(lt){case Xl:n.depthFunc(n.NEVER);break;case ql:n.depthFunc(n.ALWAYS);break;case Yl:n.depthFunc(n.LESS);break;case Gs:n.depthFunc(n.LEQUAL);break;case jl:n.depthFunc(n.EQUAL);break;case Zl:n.depthFunc(n.GEQUAL);break;case Kl:n.depthFunc(n.GREATER);break;case $l:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}j=lt}},setLocked:function(lt){R=lt},setClear:function(lt){ct!==lt&&(st&&(lt=1-lt),n.clearDepth(lt),ct=lt)},reset:function(){R=!1,H=null,j=null,ct=null,st=!1}}}function s(){let R=!1,st=null,H=null,j=null,ct=null,lt=null,Dt=null,ue=null,Ue=null;return{setTest:function(Kt){R||(Kt?ot(n.STENCIL_TEST):wt(n.STENCIL_TEST))},setMask:function(Kt){st!==Kt&&!R&&(n.stencilMask(Kt),st=Kt)},setFunc:function(Kt,xn,Vn){(H!==Kt||j!==xn||ct!==Vn)&&(n.stencilFunc(Kt,xn,Vn),H=Kt,j=xn,ct=Vn)},setOp:function(Kt,xn,Vn){(lt!==Kt||Dt!==xn||ue!==Vn)&&(n.stencilOp(Kt,xn,Vn),lt=Kt,Dt=xn,ue=Vn)},setLocked:function(Kt){R=Kt},setClear:function(Kt){Ue!==Kt&&(n.clearStencil(Kt),Ue=Kt)},reset:function(){R=!1,st=null,H=null,j=null,ct=null,lt=null,Dt=null,ue=null,Ue=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let h={},f={},u=new WeakMap,d=[],m=null,_=!1,g=null,p=null,b=null,w=null,M=null,D=null,P=null,A=new Wt(0,0,0),N=0,y=!1,S=null,C=null,V=null,B=null,q=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,K=0;const z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(z)[1]),G=K>=1):z.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),G=K>=2);let it=null,ht={};const et=n.getParameter(n.SCISSOR_BOX),Lt=n.getParameter(n.VIEWPORT),Qt=new _e().fromArray(et),X=new _e().fromArray(Lt);function tt(R,st,H,j){const ct=new Uint8Array(4),lt=n.createTexture();n.bindTexture(R,lt),n.texParameteri(R,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(R,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Dt=0;Dt<H;Dt++)R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY?n.texImage3D(st,0,n.RGBA,1,1,j,0,n.RGBA,n.UNSIGNED_BYTE,ct):n.texImage2D(st+Dt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ct);return lt}const gt={};gt[n.TEXTURE_2D]=tt(n.TEXTURE_2D,n.TEXTURE_2D,1),gt[n.TEXTURE_CUBE_MAP]=tt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[n.TEXTURE_2D_ARRAY]=tt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),gt[n.TEXTURE_3D]=tt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ot(n.DEPTH_TEST),o.setFunc(Gs),Bt(!1),zt(iu),ot(n.CULL_FACE),T(Ti);function ot(R){h[R]!==!0&&(n.enable(R),h[R]=!0)}function wt(R){h[R]!==!1&&(n.disable(R),h[R]=!1)}function Yt(R,st){return f[R]!==st?(n.bindFramebuffer(R,st),f[R]=st,R===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=st),R===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=st),!0):!1}function bt(R,st){let H=d,j=!1;if(R){H=u.get(st),H===void 0&&(H=[],u.set(st,H));const ct=R.textures;if(H.length!==ct.length||H[0]!==n.COLOR_ATTACHMENT0){for(let lt=0,Dt=ct.length;lt<Dt;lt++)H[lt]=n.COLOR_ATTACHMENT0+lt;H.length=ct.length,j=!0}}else H[0]!==n.BACK&&(H[0]=n.BACK,j=!0);j&&n.drawBuffers(H)}function me(R){return m!==R?(n.useProgram(R),m=R,!0):!1}const le={[ji]:n.FUNC_ADD,[Lg]:n.FUNC_SUBTRACT,[Ig]:n.FUNC_REVERSE_SUBTRACT};le[Ug]=n.MIN,le[Ng]=n.MAX;const kt={[Fg]:n.ZERO,[Og]:n.ONE,[kg]:n.SRC_COLOR,[Gl]:n.SRC_ALPHA,[Wg]:n.SRC_ALPHA_SATURATE,[Vg]:n.DST_COLOR,[zg]:n.DST_ALPHA,[Bg]:n.ONE_MINUS_SRC_COLOR,[Wl]:n.ONE_MINUS_SRC_ALPHA,[Gg]:n.ONE_MINUS_DST_COLOR,[Hg]:n.ONE_MINUS_DST_ALPHA,[Xg]:n.CONSTANT_COLOR,[qg]:n.ONE_MINUS_CONSTANT_COLOR,[Yg]:n.CONSTANT_ALPHA,[jg]:n.ONE_MINUS_CONSTANT_ALPHA};function T(R,st,H,j,ct,lt,Dt,ue,Ue,Kt){if(R===Ti){_===!0&&(wt(n.BLEND),_=!1);return}if(_===!1&&(ot(n.BLEND),_=!0),R!==Pg){if(R!==g||Kt!==y){if((p!==ji||M!==ji)&&(n.blendEquation(n.FUNC_ADD),p=ji,M=ji),Kt)switch(R){case Fs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case su:n.blendFunc(n.ONE,n.ONE);break;case ru:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ou:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Fs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case su:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ru:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ou:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}b=null,w=null,D=null,P=null,A.set(0,0,0),N=0,g=R,y=Kt}return}ct=ct||st,lt=lt||H,Dt=Dt||j,(st!==p||ct!==M)&&(n.blendEquationSeparate(le[st],le[ct]),p=st,M=ct),(H!==b||j!==w||lt!==D||Dt!==P)&&(n.blendFuncSeparate(kt[H],kt[j],kt[lt],kt[Dt]),b=H,w=j,D=lt,P=Dt),(ue.equals(A)===!1||Ue!==N)&&(n.blendColor(ue.r,ue.g,ue.b,Ue),A.copy(ue),N=Ue),g=R,y=!1}function ln(R,st){R.side===Jn?wt(n.CULL_FACE):ot(n.CULL_FACE);let H=R.side===Ke;st&&(H=!H),Bt(H),R.blending===Fs&&R.transparent===!1?T(Ti):T(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),o.setFunc(R.depthFunc),o.setTest(R.depthTest),o.setMask(R.depthWrite),r.setMask(R.colorWrite);const j=R.stencilWrite;a.setTest(j),j&&(a.setMask(R.stencilWriteMask),a.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),a.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),re(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?ot(n.SAMPLE_ALPHA_TO_COVERAGE):wt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(R){S!==R&&(R?n.frontFace(n.CW):n.frontFace(n.CCW),S=R)}function zt(R){R!==Cg?(ot(n.CULL_FACE),R!==C&&(R===iu?n.cullFace(n.BACK):R===Rg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):wt(n.CULL_FACE),C=R}function St(R){R!==V&&(G&&n.lineWidth(R),V=R)}function re(R,st,H){R?(ot(n.POLYGON_OFFSET_FILL),(B!==st||q!==H)&&(n.polygonOffset(st,H),B=st,q=H)):wt(n.POLYGON_OFFSET_FILL)}function vt(R){R?ot(n.SCISSOR_TEST):wt(n.SCISSOR_TEST)}function E(R){R===void 0&&(R=n.TEXTURE0+Z-1),it!==R&&(n.activeTexture(R),it=R)}function v(R,st,H){H===void 0&&(it===null?H=n.TEXTURE0+Z-1:H=it);let j=ht[H];j===void 0&&(j={type:void 0,texture:void 0},ht[H]=j),(j.type!==R||j.texture!==st)&&(it!==H&&(n.activeTexture(H),it=H),n.bindTexture(R,st||gt[R]),j.type=R,j.texture=st)}function F(){const R=ht[it];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function Y(){try{n.compressedTexImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function $(){try{n.compressedTexImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function W(){try{n.texSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function _t(){try{n.texSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function at(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ft(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Vt(){try{n.texStorage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Q(){try{n.texStorage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function dt(){try{n.texImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Et(){try{n.texImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Tt(R){Qt.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),Qt.copy(R))}function pt(R){X.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),X.copy(R))}function Ht(R,st){let H=c.get(st);H===void 0&&(H=new WeakMap,c.set(st,H));let j=H.get(R);j===void 0&&(j=n.getUniformBlockIndex(st,R.name),H.set(R,j))}function It(R,st){const j=c.get(st).get(R);l.get(st)!==j&&(n.uniformBlockBinding(st,j,R.__bindingPointIndex),l.set(st,j))}function ie(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},it=null,ht={},f={},u=new WeakMap,d=[],m=null,_=!1,g=null,p=null,b=null,w=null,M=null,D=null,P=null,A=new Wt(0,0,0),N=0,y=!1,S=null,C=null,V=null,B=null,q=null,Qt.set(0,0,n.canvas.width,n.canvas.height),X.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ot,disable:wt,bindFramebuffer:Yt,drawBuffers:bt,useProgram:me,setBlending:T,setMaterial:ln,setFlipSided:Bt,setCullFace:zt,setLineWidth:St,setPolygonOffset:re,setScissorTest:vt,activeTexture:E,bindTexture:v,unbindTexture:F,compressedTexImage2D:Y,compressedTexImage3D:$,texImage2D:dt,texImage3D:Et,updateUBOMapping:Ht,uniformBlockBinding:It,texStorage2D:Vt,texStorage3D:Q,texSubImage2D:W,texSubImage3D:_t,compressedTexSubImage2D:at,compressedTexSubImage3D:ft,scissor:Tt,viewport:pt,reset:ie}}function CM(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Nt,h=new WeakMap;let f;const u=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(E,v){return d?new OffscreenCanvas(E,v):ra("canvas")}function _(E,v,F){let Y=1;const $=vt(E);if(($.width>F||$.height>F)&&(Y=F/Math.max($.width,$.height)),Y<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const W=Math.floor(Y*$.width),_t=Math.floor(Y*$.height);f===void 0&&(f=m(W,_t));const at=v?m(W,_t):f;return at.width=W,at.height=_t,at.getContext("2d").drawImage(E,0,0,W,_t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+W+"x"+_t+")."),at}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),E;return E}function g(E){return E.generateMipmaps}function p(E){n.generateMipmap(E)}function b(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(E,v,F,Y,$=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let W=v;if(v===n.RED&&(F===n.FLOAT&&(W=n.R32F),F===n.HALF_FLOAT&&(W=n.R16F),F===n.UNSIGNED_BYTE&&(W=n.R8)),v===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(W=n.R8UI),F===n.UNSIGNED_SHORT&&(W=n.R16UI),F===n.UNSIGNED_INT&&(W=n.R32UI),F===n.BYTE&&(W=n.R8I),F===n.SHORT&&(W=n.R16I),F===n.INT&&(W=n.R32I)),v===n.RG&&(F===n.FLOAT&&(W=n.RG32F),F===n.HALF_FLOAT&&(W=n.RG16F),F===n.UNSIGNED_BYTE&&(W=n.RG8)),v===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(W=n.RG8UI),F===n.UNSIGNED_SHORT&&(W=n.RG16UI),F===n.UNSIGNED_INT&&(W=n.RG32UI),F===n.BYTE&&(W=n.RG8I),F===n.SHORT&&(W=n.RG16I),F===n.INT&&(W=n.RG32I)),v===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(W=n.RGB8UI),F===n.UNSIGNED_SHORT&&(W=n.RGB16UI),F===n.UNSIGNED_INT&&(W=n.RGB32UI),F===n.BYTE&&(W=n.RGB8I),F===n.SHORT&&(W=n.RGB16I),F===n.INT&&(W=n.RGB32I)),v===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),F===n.UNSIGNED_INT&&(W=n.RGBA32UI),F===n.BYTE&&(W=n.RGBA8I),F===n.SHORT&&(W=n.RGBA16I),F===n.INT&&(W=n.RGBA32I)),v===n.RGB&&F===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),v===n.RGBA){const _t=$?ia:qt.getTransfer(Y);F===n.FLOAT&&(W=n.RGBA32F),F===n.HALF_FLOAT&&(W=n.RGBA16F),F===n.UNSIGNED_BYTE&&(W=_t===$t?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function M(E,v){let F;return E?v===null||v===ns||v===qs?F=n.DEPTH24_STENCIL8:v===Qn?F=n.DEPTH32F_STENCIL8:v===Rr&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ns||v===qs?F=n.DEPTH_COMPONENT24:v===Qn?F=n.DEPTH_COMPONENT32F:v===Rr&&(F=n.DEPTH_COMPONENT16),F}function D(E,v){return g(E)===!0||E.isFramebufferTexture&&E.minFilter!==An&&E.minFilter!==In?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function P(E){const v=E.target;v.removeEventListener("dispose",P),N(v),v.isVideoTexture&&h.delete(v)}function A(E){const v=E.target;v.removeEventListener("dispose",A),S(v)}function N(E){const v=i.get(E);if(v.__webglInit===void 0)return;const F=E.source,Y=u.get(F);if(Y){const $=Y[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&y(E),Object.keys(Y).length===0&&u.delete(F)}i.remove(E)}function y(E){const v=i.get(E);n.deleteTexture(v.__webglTexture);const F=E.source,Y=u.get(F);delete Y[v.__cacheKey],o.memory.textures--}function S(E){const v=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(v.__webglFramebuffer[Y]))for(let $=0;$<v.__webglFramebuffer[Y].length;$++)n.deleteFramebuffer(v.__webglFramebuffer[Y][$]);else n.deleteFramebuffer(v.__webglFramebuffer[Y]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[Y])}else{if(Array.isArray(v.__webglFramebuffer))for(let Y=0;Y<v.__webglFramebuffer.length;Y++)n.deleteFramebuffer(v.__webglFramebuffer[Y]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Y=0;Y<v.__webglColorRenderbuffer.length;Y++)v.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[Y]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const F=E.textures;for(let Y=0,$=F.length;Y<$;Y++){const W=i.get(F[Y]);W.__webglTexture&&(n.deleteTexture(W.__webglTexture),o.memory.textures--),i.remove(F[Y])}i.remove(E)}let C=0;function V(){C=0}function B(){const E=C;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),C+=1,E}function q(E){const v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function Z(E,v){const F=i.get(E);if(E.isVideoTexture&&St(E),E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){const Y=E.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(F,E,v);return}}e.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+v)}function G(E,v){const F=i.get(E);if(E.version>0&&F.__version!==E.version){X(F,E,v);return}e.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+v)}function K(E,v){const F=i.get(E);if(E.version>0&&F.__version!==E.version){X(F,E,v);return}e.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+v)}function z(E,v){const F=i.get(E);if(E.version>0&&F.__version!==E.version){tt(F,E,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+v)}const it={[tc]:n.REPEAT,[Ki]:n.CLAMP_TO_EDGE,[ec]:n.MIRRORED_REPEAT},ht={[An]:n.NEAREST,[s_]:n.NEAREST_MIPMAP_NEAREST,[ao]:n.NEAREST_MIPMAP_LINEAR,[In]:n.LINEAR,[Ka]:n.LINEAR_MIPMAP_NEAREST,[$i]:n.LINEAR_MIPMAP_LINEAR},et={[c_]:n.NEVER,[m_]:n.ALWAYS,[h_]:n.LESS,[Rd]:n.LEQUAL,[u_]:n.EQUAL,[p_]:n.GEQUAL,[f_]:n.GREATER,[d_]:n.NOTEQUAL};function Lt(E,v){if(v.type===Qn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===In||v.magFilter===Ka||v.magFilter===ao||v.magFilter===$i||v.minFilter===In||v.minFilter===Ka||v.minFilter===ao||v.minFilter===$i)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,it[v.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,it[v.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,it[v.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,ht[v.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,ht[v.minFilter]),v.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,et[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===An||v.minFilter!==ao&&v.minFilter!==$i||v.type===Qn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");n.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Qt(E,v){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",P));const Y=v.source;let $=u.get(Y);$===void 0&&($={},u.set(Y,$));const W=q(v);if(W!==E.__cacheKey){$[W]===void 0&&($[W]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),$[W].usedTimes++;const _t=$[E.__cacheKey];_t!==void 0&&($[E.__cacheKey].usedTimes--,_t.usedTimes===0&&y(v)),E.__cacheKey=W,E.__webglTexture=$[W].texture}return F}function X(E,v,F){let Y=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Y=n.TEXTURE_3D);const $=Qt(E,v),W=v.source;e.bindTexture(Y,E.__webglTexture,n.TEXTURE0+F);const _t=i.get(W);if(W.version!==_t.__version||$===!0){e.activeTexture(n.TEXTURE0+F);const at=qt.getPrimaries(qt.workingColorSpace),ft=v.colorSpace===xi?null:qt.getPrimaries(v.colorSpace),Vt=v.colorSpace===xi||at===ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);let Q=_(v.image,!1,s.maxTextureSize);Q=re(v,Q);const dt=r.convert(v.format,v.colorSpace),Et=r.convert(v.type);let Tt=w(v.internalFormat,dt,Et,v.colorSpace,v.isVideoTexture);Lt(Y,v);let pt;const Ht=v.mipmaps,It=v.isVideoTexture!==!0,ie=_t.__version===void 0||$===!0,R=W.dataReady,st=D(v,Q);if(v.isDepthTexture)Tt=M(v.format===Ys,v.type),ie&&(It?e.texStorage2D(n.TEXTURE_2D,1,Tt,Q.width,Q.height):e.texImage2D(n.TEXTURE_2D,0,Tt,Q.width,Q.height,0,dt,Et,null));else if(v.isDataTexture)if(Ht.length>0){It&&ie&&e.texStorage2D(n.TEXTURE_2D,st,Tt,Ht[0].width,Ht[0].height);for(let H=0,j=Ht.length;H<j;H++)pt=Ht[H],It?R&&e.texSubImage2D(n.TEXTURE_2D,H,0,0,pt.width,pt.height,dt,Et,pt.data):e.texImage2D(n.TEXTURE_2D,H,Tt,pt.width,pt.height,0,dt,Et,pt.data);v.generateMipmaps=!1}else It?(ie&&e.texStorage2D(n.TEXTURE_2D,st,Tt,Q.width,Q.height),R&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Q.width,Q.height,dt,Et,Q.data)):e.texImage2D(n.TEXTURE_2D,0,Tt,Q.width,Q.height,0,dt,Et,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){It&&ie&&e.texStorage3D(n.TEXTURE_2D_ARRAY,st,Tt,Ht[0].width,Ht[0].height,Q.depth);for(let H=0,j=Ht.length;H<j;H++)if(pt=Ht[H],v.format!==bn)if(dt!==null)if(It){if(R)if(v.layerUpdates.size>0){const ct=Lu(pt.width,pt.height,v.format,v.type);for(const lt of v.layerUpdates){const Dt=pt.data.subarray(lt*ct/pt.data.BYTES_PER_ELEMENT,(lt+1)*ct/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,H,0,0,lt,pt.width,pt.height,1,dt,Dt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,H,0,0,0,pt.width,pt.height,Q.depth,dt,pt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,H,Tt,pt.width,pt.height,Q.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else It?R&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,H,0,0,0,pt.width,pt.height,Q.depth,dt,Et,pt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,H,Tt,pt.width,pt.height,Q.depth,0,dt,Et,pt.data)}else{It&&ie&&e.texStorage2D(n.TEXTURE_2D,st,Tt,Ht[0].width,Ht[0].height);for(let H=0,j=Ht.length;H<j;H++)pt=Ht[H],v.format!==bn?dt!==null?It?R&&e.compressedTexSubImage2D(n.TEXTURE_2D,H,0,0,pt.width,pt.height,dt,pt.data):e.compressedTexImage2D(n.TEXTURE_2D,H,Tt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?R&&e.texSubImage2D(n.TEXTURE_2D,H,0,0,pt.width,pt.height,dt,Et,pt.data):e.texImage2D(n.TEXTURE_2D,H,Tt,pt.width,pt.height,0,dt,Et,pt.data)}else if(v.isDataArrayTexture)if(It){if(ie&&e.texStorage3D(n.TEXTURE_2D_ARRAY,st,Tt,Q.width,Q.height,Q.depth),R)if(v.layerUpdates.size>0){const H=Lu(Q.width,Q.height,v.format,v.type);for(const j of v.layerUpdates){const ct=Q.data.subarray(j*H/Q.data.BYTES_PER_ELEMENT,(j+1)*H/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,j,Q.width,Q.height,1,dt,Et,ct)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,dt,Et,Q.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Tt,Q.width,Q.height,Q.depth,0,dt,Et,Q.data);else if(v.isData3DTexture)It?(ie&&e.texStorage3D(n.TEXTURE_3D,st,Tt,Q.width,Q.height,Q.depth),R&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,dt,Et,Q.data)):e.texImage3D(n.TEXTURE_3D,0,Tt,Q.width,Q.height,Q.depth,0,dt,Et,Q.data);else if(v.isFramebufferTexture){if(ie)if(It)e.texStorage2D(n.TEXTURE_2D,st,Tt,Q.width,Q.height);else{let H=Q.width,j=Q.height;for(let ct=0;ct<st;ct++)e.texImage2D(n.TEXTURE_2D,ct,Tt,H,j,0,dt,Et,null),H>>=1,j>>=1}}else if(Ht.length>0){if(It&&ie){const H=vt(Ht[0]);e.texStorage2D(n.TEXTURE_2D,st,Tt,H.width,H.height)}for(let H=0,j=Ht.length;H<j;H++)pt=Ht[H],It?R&&e.texSubImage2D(n.TEXTURE_2D,H,0,0,dt,Et,pt):e.texImage2D(n.TEXTURE_2D,H,Tt,dt,Et,pt);v.generateMipmaps=!1}else if(It){if(ie){const H=vt(Q);e.texStorage2D(n.TEXTURE_2D,st,Tt,H.width,H.height)}R&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,dt,Et,Q)}else e.texImage2D(n.TEXTURE_2D,0,Tt,dt,Et,Q);g(v)&&p(Y),_t.__version=W.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function tt(E,v,F){if(v.image.length!==6)return;const Y=Qt(E,v),$=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+F);const W=i.get($);if($.version!==W.__version||Y===!0){e.activeTexture(n.TEXTURE0+F);const _t=qt.getPrimaries(qt.workingColorSpace),at=v.colorSpace===xi?null:qt.getPrimaries(v.colorSpace),ft=v.colorSpace===xi||_t===at?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Vt=v.isCompressedTexture||v.image[0].isCompressedTexture,Q=v.image[0]&&v.image[0].isDataTexture,dt=[];for(let j=0;j<6;j++)!Vt&&!Q?dt[j]=_(v.image[j],!0,s.maxCubemapSize):dt[j]=Q?v.image[j].image:v.image[j],dt[j]=re(v,dt[j]);const Et=dt[0],Tt=r.convert(v.format,v.colorSpace),pt=r.convert(v.type),Ht=w(v.internalFormat,Tt,pt,v.colorSpace),It=v.isVideoTexture!==!0,ie=W.__version===void 0||Y===!0,R=$.dataReady;let st=D(v,Et);Lt(n.TEXTURE_CUBE_MAP,v);let H;if(Vt){It&&ie&&e.texStorage2D(n.TEXTURE_CUBE_MAP,st,Ht,Et.width,Et.height);for(let j=0;j<6;j++){H=dt[j].mipmaps;for(let ct=0;ct<H.length;ct++){const lt=H[ct];v.format!==bn?Tt!==null?It?R&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct,0,0,lt.width,lt.height,Tt,lt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct,Ht,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?R&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct,0,0,lt.width,lt.height,Tt,pt,lt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct,Ht,lt.width,lt.height,0,Tt,pt,lt.data)}}}else{if(H=v.mipmaps,It&&ie){H.length>0&&st++;const j=vt(dt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,st,Ht,j.width,j.height)}for(let j=0;j<6;j++)if(Q){It?R&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,dt[j].width,dt[j].height,Tt,pt,dt[j].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ht,dt[j].width,dt[j].height,0,Tt,pt,dt[j].data);for(let ct=0;ct<H.length;ct++){const Dt=H[ct].image[j].image;It?R&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct+1,0,0,Dt.width,Dt.height,Tt,pt,Dt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct+1,Ht,Dt.width,Dt.height,0,Tt,pt,Dt.data)}}else{It?R&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Tt,pt,dt[j]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ht,Tt,pt,dt[j]);for(let ct=0;ct<H.length;ct++){const lt=H[ct];It?R&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct+1,0,0,Tt,pt,lt.image[j]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct+1,Ht,Tt,pt,lt.image[j])}}}g(v)&&p(n.TEXTURE_CUBE_MAP),W.__version=$.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function gt(E,v,F,Y,$,W){const _t=r.convert(F.format,F.colorSpace),at=r.convert(F.type),ft=w(F.internalFormat,_t,at,F.colorSpace),Vt=i.get(v),Q=i.get(F);if(Q.__renderTarget=v,!Vt.__hasExternalTextures){const dt=Math.max(1,v.width>>W),Et=Math.max(1,v.height>>W);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?e.texImage3D($,W,ft,dt,Et,v.depth,0,_t,at,null):e.texImage2D($,W,ft,dt,Et,0,_t,at,null)}e.bindFramebuffer(n.FRAMEBUFFER,E),zt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,$,Q.__webglTexture,0,Bt(v)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,$,Q.__webglTexture,W),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ot(E,v,F){if(n.bindRenderbuffer(n.RENDERBUFFER,E),v.depthBuffer){const Y=v.depthTexture,$=Y&&Y.isDepthTexture?Y.type:null,W=M(v.stencilBuffer,$),_t=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=Bt(v);zt(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,at,W,v.width,v.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,at,W,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,W,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,_t,n.RENDERBUFFER,E)}else{const Y=v.textures;for(let $=0;$<Y.length;$++){const W=Y[$],_t=r.convert(W.format,W.colorSpace),at=r.convert(W.type),ft=w(W.internalFormat,_t,at,W.colorSpace),Vt=Bt(v);F&&zt(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Vt,ft,v.width,v.height):zt(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Vt,ft,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ft,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function wt(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=i.get(v.depthTexture);Y.__renderTarget=v,(!Y.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z(v.depthTexture,0);const $=Y.__webglTexture,W=Bt(v);if(v.depthTexture.format===Os)zt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0);else if(v.depthTexture.format===Ys)zt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Yt(E){const v=i.get(E),F=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){const Y=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Y){const $=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Y.removeEventListener("dispose",$)};Y.addEventListener("dispose",$),v.__depthDisposeCallback=$}v.__boundDepthTexture=Y}if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");wt(v.__webglFramebuffer,E)}else if(F){v.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[Y]),v.__webglDepthbuffer[Y]===void 0)v.__webglDepthbuffer[Y]=n.createRenderbuffer(),ot(v.__webglDepthbuffer[Y],E,!1);else{const $=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=v.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,W)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),ot(v.__webglDepthbuffer,E,!1);else{const Y=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,$)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function bt(E,v,F){const Y=i.get(E);v!==void 0&&gt(Y.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Yt(E)}function me(E){const v=E.texture,F=i.get(E),Y=i.get(v);E.addEventListener("dispose",A);const $=E.textures,W=E.isWebGLCubeRenderTarget===!0,_t=$.length>1;if(_t||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=v.version,o.memory.textures++),W){F.__webglFramebuffer=[];for(let at=0;at<6;at++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[at]=[];for(let ft=0;ft<v.mipmaps.length;ft++)F.__webglFramebuffer[at][ft]=n.createFramebuffer()}else F.__webglFramebuffer[at]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let at=0;at<v.mipmaps.length;at++)F.__webglFramebuffer[at]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(_t)for(let at=0,ft=$.length;at<ft;at++){const Vt=i.get($[at]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=n.createTexture(),o.memory.textures++)}if(E.samples>0&&zt(E)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let at=0;at<$.length;at++){const ft=$[at];F.__webglColorRenderbuffer[at]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[at]);const Vt=r.convert(ft.format,ft.colorSpace),Q=r.convert(ft.type),dt=w(ft.internalFormat,Vt,Q,ft.colorSpace,E.isXRRenderTarget===!0),Et=Bt(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Et,dt,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.RENDERBUFFER,F.__webglColorRenderbuffer[at])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),ot(F.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(W){e.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),Lt(n.TEXTURE_CUBE_MAP,v);for(let at=0;at<6;at++)if(v.mipmaps&&v.mipmaps.length>0)for(let ft=0;ft<v.mipmaps.length;ft++)gt(F.__webglFramebuffer[at][ft],E,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,ft);else gt(F.__webglFramebuffer[at],E,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);g(v)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let at=0,ft=$.length;at<ft;at++){const Vt=$[at],Q=i.get(Vt);e.bindTexture(n.TEXTURE_2D,Q.__webglTexture),Lt(n.TEXTURE_2D,Vt),gt(F.__webglFramebuffer,E,Vt,n.COLOR_ATTACHMENT0+at,n.TEXTURE_2D,0),g(Vt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let at=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(at=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(at,Y.__webglTexture),Lt(at,v),v.mipmaps&&v.mipmaps.length>0)for(let ft=0;ft<v.mipmaps.length;ft++)gt(F.__webglFramebuffer[ft],E,v,n.COLOR_ATTACHMENT0,at,ft);else gt(F.__webglFramebuffer,E,v,n.COLOR_ATTACHMENT0,at,0);g(v)&&p(at),e.unbindTexture()}E.depthBuffer&&Yt(E)}function le(E){const v=E.textures;for(let F=0,Y=v.length;F<Y;F++){const $=v[F];if(g($)){const W=b(E),_t=i.get($).__webglTexture;e.bindTexture(W,_t),p(W),e.unbindTexture()}}}const kt=[],T=[];function ln(E){if(E.samples>0){if(zt(E)===!1){const v=E.textures,F=E.width,Y=E.height;let $=n.COLOR_BUFFER_BIT;const W=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_t=i.get(E),at=v.length>1;if(at)for(let ft=0;ft<v.length;ft++)e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let ft=0;ft<v.length;ft++){if(E.resolveDepthBuffer&&(E.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),at){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_t.__webglColorRenderbuffer[ft]);const Vt=i.get(v[ft]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Vt,0)}n.blitFramebuffer(0,0,F,Y,0,0,F,Y,$,n.NEAREST),l===!0&&(kt.length=0,T.length=0,kt.push(n.COLOR_ATTACHMENT0+ft),E.depthBuffer&&E.resolveDepthBuffer===!1&&(kt.push(W),T.push(W),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,T)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,kt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),at)for(let ft=0;ft<v.length;ft++){e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,_t.__webglColorRenderbuffer[ft]);const Vt=i.get(v[ft]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,Vt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const v=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function Bt(E){return Math.min(s.maxSamples,E.samples)}function zt(E){const v=i.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function St(E){const v=o.render.frame;h.get(E)!==v&&(h.set(E,v),E.update())}function re(E,v){const F=E.colorSpace,Y=E.format,$=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==js&&F!==xi&&(qt.getTransfer(F)===$t?(Y!==bn||$!==si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),v}function vt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=V,this.setTexture2D=Z,this.setTexture2DArray=G,this.setTexture3D=K,this.setTextureCube=z,this.rebindTextures=bt,this.setupRenderTarget=me,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=ln,this.setupDepthRenderbuffer=Yt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=zt}function RM(n,t){function e(i,s=xi){let r;const o=qt.getTransfer(s);if(i===si)return n.UNSIGNED_BYTE;if(i===sh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===rh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Md)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===xd)return n.BYTE;if(i===Sd)return n.SHORT;if(i===Rr)return n.UNSIGNED_SHORT;if(i===ih)return n.INT;if(i===ns)return n.UNSIGNED_INT;if(i===Qn)return n.FLOAT;if(i===jr)return n.HALF_FLOAT;if(i===yd)return n.ALPHA;if(i===Ed)return n.RGB;if(i===bn)return n.RGBA;if(i===wd)return n.LUMINANCE;if(i===bd)return n.LUMINANCE_ALPHA;if(i===Os)return n.DEPTH_COMPONENT;if(i===Ys)return n.DEPTH_STENCIL;if(i===Td)return n.RED;if(i===oh)return n.RED_INTEGER;if(i===Ad)return n.RG;if(i===ah)return n.RG_INTEGER;if(i===lh)return n.RGBA_INTEGER;if(i===Fo||i===Oo||i===ko||i===Bo)if(o===$t)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Fo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Fo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Oo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ko)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Bo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===nc||i===ic||i===sc||i===rc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===nc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ic)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===sc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===rc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===oc||i===ac||i===lc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===oc||i===ac)return o===$t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===lc)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===cc||i===hc||i===uc||i===fc||i===dc||i===pc||i===mc||i===gc||i===_c||i===vc||i===xc||i===Sc||i===Mc||i===yc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===cc)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===hc)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===uc)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===fc)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===dc)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===pc)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===mc)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===gc)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_c)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===vc)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===xc)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Sc)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Mc)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===yc)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===zo||i===Ec||i===wc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===zo)return o===$t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ec)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===wc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Cd||i===bc||i===Tc||i===Ac)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===zo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===bc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Tc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ac)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===qs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const DM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,PM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class LM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new $e,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Ii({vertexShader:DM,fragmentShader:PM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Tn(new La(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class IM extends ls{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,m=null;const _=new LM,g=e.getContextAttributes();let p=null,b=null;const w=[],M=[],D=new Nt;let P=null;const A=new mn;A.viewport=new _e;const N=new mn;N.viewport=new _e;const y=[A,N],S=new t0;let C=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let tt=w[X];return tt===void 0&&(tt=new _l,w[X]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(X){let tt=w[X];return tt===void 0&&(tt=new _l,w[X]=tt),tt.getGripSpace()},this.getHand=function(X){let tt=w[X];return tt===void 0&&(tt=new _l,w[X]=tt),tt.getHandSpace()};function B(X){const tt=M.indexOf(X.inputSource);if(tt===-1)return;const gt=w[tt];gt!==void 0&&(gt.update(X.inputSource,X.frame,c||o),gt.dispatchEvent({type:X.type,data:X.inputSource}))}function q(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",Z);for(let X=0;X<w.length;X++){const tt=M[X];tt!==null&&(M[X]=null,w[X].disconnect(tt))}C=null,V=null,_.reset(),t.setRenderTarget(p),d=null,u=null,f=null,s=null,b=null,Qt.stop(),i.isPresenting=!1,t.setPixelRatio(P),t.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",q),s.addEventListener("inputsourceschange",Z),g.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(D),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let gt=null,ot=null,wt=null;g.depth&&(wt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,gt=g.stencil?Ys:Os,ot=g.stencil?qs:ns);const Yt={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:r};f=new XRWebGLBinding(s,e),u=f.createProjectionLayer(Yt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),b=new is(u.textureWidth,u.textureHeight,{format:bn,type:si,depthTexture:new Vd(u.textureWidth,u.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}else{const gt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,gt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new is(d.framebufferWidth,d.framebufferHeight,{format:bn,type:si,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Qt.setContext(s),Qt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Z(X){for(let tt=0;tt<X.removed.length;tt++){const gt=X.removed[tt],ot=M.indexOf(gt);ot>=0&&(M[ot]=null,w[ot].disconnect(gt))}for(let tt=0;tt<X.added.length;tt++){const gt=X.added[tt];let ot=M.indexOf(gt);if(ot===-1){for(let Yt=0;Yt<w.length;Yt++)if(Yt>=M.length){M.push(gt),ot=Yt;break}else if(M[Yt]===null){M[Yt]=gt,ot=Yt;break}if(ot===-1)break}const wt=w[ot];wt&&wt.connect(gt)}}const G=new U,K=new U;function z(X,tt,gt){G.setFromMatrixPosition(tt.matrixWorld),K.setFromMatrixPosition(gt.matrixWorld);const ot=G.distanceTo(K),wt=tt.projectionMatrix.elements,Yt=gt.projectionMatrix.elements,bt=wt[14]/(wt[10]-1),me=wt[14]/(wt[10]+1),le=(wt[9]+1)/wt[5],kt=(wt[9]-1)/wt[5],T=(wt[8]-1)/wt[0],ln=(Yt[8]+1)/Yt[0],Bt=bt*T,zt=bt*ln,St=ot/(-T+ln),re=St*-T;if(tt.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(re),X.translateZ(St),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),wt[10]===-1)X.projectionMatrix.copy(tt.projectionMatrix),X.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const vt=bt+St,E=me+St,v=Bt-re,F=zt+(ot-re),Y=le*me/E*vt,$=kt*me/E*vt;X.projectionMatrix.makePerspective(v,F,Y,$,vt,E),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function it(X,tt){tt===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(tt.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let tt=X.near,gt=X.far;_.texture!==null&&(_.depthNear>0&&(tt=_.depthNear),_.depthFar>0&&(gt=_.depthFar)),S.near=N.near=A.near=tt,S.far=N.far=A.far=gt,(C!==S.near||V!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),C=S.near,V=S.far),A.layers.mask=X.layers.mask|2,N.layers.mask=X.layers.mask|4,S.layers.mask=A.layers.mask|N.layers.mask;const ot=X.parent,wt=S.cameras;it(S,ot);for(let Yt=0;Yt<wt.length;Yt++)it(wt[Yt],ot);wt.length===2?z(S,A,N):S.projectionMatrix.copy(A.projectionMatrix),ht(X,S,ot)};function ht(X,tt,gt){gt===null?X.matrix.copy(tt.matrixWorld):(X.matrix.copy(gt.matrixWorld),X.matrix.invert(),X.matrix.multiply(tt.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(tt.projectionMatrix),X.projectionMatrixInverse.copy(tt.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Cc*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(X){l=X,u!==null&&(u.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let et=null;function Lt(X,tt){if(h=tt.getViewerPose(c||o),m=tt,h!==null){const gt=h.views;d!==null&&(t.setRenderTargetFramebuffer(b,d.framebuffer),t.setRenderTarget(b));let ot=!1;gt.length!==S.cameras.length&&(S.cameras.length=0,ot=!0);for(let bt=0;bt<gt.length;bt++){const me=gt[bt];let le=null;if(d!==null)le=d.getViewport(me);else{const T=f.getViewSubImage(u,me);le=T.viewport,bt===0&&(t.setRenderTargetTextures(b,T.colorTexture,u.ignoreDepthValues?void 0:T.depthStencilTexture),t.setRenderTarget(b))}let kt=y[bt];kt===void 0&&(kt=new mn,kt.layers.enable(bt),kt.viewport=new _e,y[bt]=kt),kt.matrix.fromArray(me.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(me.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(le.x,le.y,le.width,le.height),bt===0&&(S.matrix.copy(kt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ot===!0&&S.cameras.push(kt)}const wt=s.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&f){const bt=f.getDepthInformation(gt[0]);bt&&bt.isValid&&bt.texture&&_.init(t,bt,s.renderState)}}for(let gt=0;gt<w.length;gt++){const ot=M[gt],wt=w[gt];ot!==null&&wt!==void 0&&wt.update(ot,tt,c||o)}et&&et(X,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),m=null}const Qt=new Gd;Qt.setAnimationLoop(Lt),this.setAnimationLoop=function(X){et=X},this.dispose=function(){}}}const qi=new ri,UM=new ve;function NM(n,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Od(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,b,w,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),f(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&d(g,p,M)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,b,w):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Ke&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Ke&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const b=t.get(p),w=b.envMap,M=b.envMapRotation;w&&(g.envMap.value=w,qi.copy(M),qi.x*=-1,qi.y*=-1,qi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),g.envMapRotation.value.setFromMatrix4(UM.makeRotationFromEuler(qi)),g.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,b,w){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*b,g.scale.value=w*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,b){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ke&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const b=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function FM(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,w){const M=w.program;i.uniformBlockBinding(b,M)}function c(b,w){let M=s[b.id];M===void 0&&(m(b),M=h(b),s[b.id]=M,b.addEventListener("dispose",g));const D=w.program;i.updateUBOMapping(b,D);const P=t.render.frame;r[b.id]!==P&&(u(b),r[b.id]=P)}function h(b){const w=f();b.__bindingPointIndex=w;const M=n.createBuffer(),D=b.__size,P=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,D,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,M),M}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){const w=s[b.id],M=b.uniforms,D=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let P=0,A=M.length;P<A;P++){const N=Array.isArray(M[P])?M[P]:[M[P]];for(let y=0,S=N.length;y<S;y++){const C=N[y];if(d(C,P,y,D)===!0){const V=C.__offset,B=Array.isArray(C.value)?C.value:[C.value];let q=0;for(let Z=0;Z<B.length;Z++){const G=B[Z],K=_(G);typeof G=="number"||typeof G=="boolean"?(C.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,V+q,C.__data)):G.isMatrix3?(C.__data[0]=G.elements[0],C.__data[1]=G.elements[1],C.__data[2]=G.elements[2],C.__data[3]=0,C.__data[4]=G.elements[3],C.__data[5]=G.elements[4],C.__data[6]=G.elements[5],C.__data[7]=0,C.__data[8]=G.elements[6],C.__data[9]=G.elements[7],C.__data[10]=G.elements[8],C.__data[11]=0):(G.toArray(C.__data,q),q+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(b,w,M,D){const P=b.value,A=w+"_"+M;if(D[A]===void 0)return typeof P=="number"||typeof P=="boolean"?D[A]=P:D[A]=P.clone(),!0;{const N=D[A];if(typeof P=="number"||typeof P=="boolean"){if(N!==P)return D[A]=P,!0}else if(N.equals(P)===!1)return N.copy(P),!0}return!1}function m(b){const w=b.uniforms;let M=0;const D=16;for(let A=0,N=w.length;A<N;A++){const y=Array.isArray(w[A])?w[A]:[w[A]];for(let S=0,C=y.length;S<C;S++){const V=y[S],B=Array.isArray(V.value)?V.value:[V.value];for(let q=0,Z=B.length;q<Z;q++){const G=B[q],K=_(G),z=M%D,it=z%K.boundary,ht=z+it;M+=it,ht!==0&&D-ht<K.storage&&(M+=D-ht),V.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=M,M+=K.storage}}}const P=M%D;return P>0&&(M+=D-P),b.__size=M,b.__cache={},this}function _(b){const w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=48,w.storage=48):b.isMatrix4?(w.boundary=64,w.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),w}function g(b){const w=b.target;w.removeEventListener("dispose",g);const M=o.indexOf(w.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function p(){for(const b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class OM{constructor(t={}){const{canvas:e=v_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const b=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pn,this.toneMapping=Ai,this.toneMappingExposure=1;const M=this;let D=!1,P=0,A=0,N=null,y=-1,S=null;const C=new _e,V=new _e;let B=null;const q=new Wt(0);let Z=0,G=e.width,K=e.height,z=1,it=null,ht=null;const et=new _e(0,0,G,K),Lt=new _e(0,0,G,K);let Qt=!1;const X=new zd;let tt=!1,gt=!1;this.transmissionResolutionScale=1;const ot=new ve,wt=new ve,Yt=new U,bt=new _e,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let le=!1;function kt(){return N===null?z:1}let T=i;function ln(x,L){return e.getContext(x,L)}try{const x={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${nh}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",lt,!1),T===null){const L="webgl2";if(T=ln(L,x),T===null)throw ln(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Bt,zt,St,re,vt,E,v,F,Y,$,W,_t,at,ft,Vt,Q,dt,Et,Tt,pt,Ht,It,ie,R;function st(){Bt=new Yx(T),Bt.init(),It=new RM(T,Bt),zt=new Hx(T,Bt,t,It),St=new AM(T,Bt),zt.reverseDepthBuffer&&u&&St.buffers.depth.setReversed(!0),re=new Kx(T),vt=new pM,E=new CM(T,Bt,St,vt,zt,It,re),v=new Gx(M),F=new qx(M),Y=new i0(T),ie=new Bx(T,Y),$=new jx(T,Y,re,ie),W=new Jx(T,$,Y,re),Tt=new $x(T,zt,E),Q=new Vx(vt),_t=new dM(M,v,F,Bt,zt,ie,Q),at=new NM(M,vt),ft=new gM,Vt=new yM(Bt),Et=new kx(M,v,F,St,W,d,l),dt=new bM(M,W,zt),R=new FM(T,re,zt,St),pt=new zx(T,Bt,re),Ht=new Zx(T,Bt,re),re.programs=_t.programs,M.capabilities=zt,M.extensions=Bt,M.properties=vt,M.renderLists=ft,M.shadowMap=dt,M.state=St,M.info=re}st();const H=new IM(M,T);this.xr=H,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const x=Bt.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Bt.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(x){x!==void 0&&(z=x,this.setSize(G,K,!1))},this.getSize=function(x){return x.set(G,K)},this.setSize=function(x,L,O=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=x,K=L,e.width=Math.floor(x*z),e.height=Math.floor(L*z),O===!0&&(e.style.width=x+"px",e.style.height=L+"px"),this.setViewport(0,0,x,L)},this.getDrawingBufferSize=function(x){return x.set(G*z,K*z).floor()},this.setDrawingBufferSize=function(x,L,O){G=x,K=L,z=O,e.width=Math.floor(x*O),e.height=Math.floor(L*O),this.setViewport(0,0,x,L)},this.getCurrentViewport=function(x){return x.copy(C)},this.getViewport=function(x){return x.copy(et)},this.setViewport=function(x,L,O,k){x.isVector4?et.set(x.x,x.y,x.z,x.w):et.set(x,L,O,k),St.viewport(C.copy(et).multiplyScalar(z).round())},this.getScissor=function(x){return x.copy(Lt)},this.setScissor=function(x,L,O,k){x.isVector4?Lt.set(x.x,x.y,x.z,x.w):Lt.set(x,L,O,k),St.scissor(V.copy(Lt).multiplyScalar(z).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(x){St.setScissorTest(Qt=x)},this.setOpaqueSort=function(x){it=x},this.setTransparentSort=function(x){ht=x},this.getClearColor=function(x){return x.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor.apply(Et,arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha.apply(Et,arguments)},this.clear=function(x=!0,L=!0,O=!0){let k=0;if(x){let I=!1;if(N!==null){const J=N.texture.format;I=J===lh||J===ah||J===oh}if(I){const J=N.texture.type,rt=J===si||J===ns||J===Rr||J===qs||J===sh||J===rh,ut=Et.getClearColor(),mt=Et.getClearAlpha(),At=ut.r,Ct=ut.g,Mt=ut.b;rt?(m[0]=At,m[1]=Ct,m[2]=Mt,m[3]=mt,T.clearBufferuiv(T.COLOR,0,m)):(_[0]=At,_[1]=Ct,_[2]=Mt,_[3]=mt,T.clearBufferiv(T.COLOR,0,_))}else k|=T.COLOR_BUFFER_BIT}L&&(k|=T.DEPTH_BUFFER_BIT),O&&(k|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),Et.dispose(),ft.dispose(),Vt.dispose(),vt.dispose(),v.dispose(),F.dispose(),W.dispose(),ie.dispose(),R.dispose(),_t.dispose(),H.dispose(),H.removeEventListener("sessionstart",Oh),H.removeEventListener("sessionend",kh),Bi.stop()};function j(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const x=re.autoReset,L=dt.enabled,O=dt.autoUpdate,k=dt.needsUpdate,I=dt.type;st(),re.autoReset=x,dt.enabled=L,dt.autoUpdate=O,dt.needsUpdate=k,dt.type=I}function lt(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Dt(x){const L=x.target;L.removeEventListener("dispose",Dt),ue(L)}function ue(x){Ue(x),vt.remove(x)}function Ue(x){const L=vt.get(x).programs;L!==void 0&&(L.forEach(function(O){_t.releaseProgram(O)}),x.isShaderMaterial&&_t.releaseShaderCache(x))}this.renderBufferDirect=function(x,L,O,k,I,J){L===null&&(L=me);const rt=I.isMesh&&I.matrixWorld.determinant()<0,ut=rm(x,L,O,k,I);St.setMaterial(k,rt);let mt=O.index,At=1;if(k.wireframe===!0){if(mt=$.getWireframeAttribute(O),mt===void 0)return;At=2}const Ct=O.drawRange,Mt=O.attributes.position;let Gt=Ct.start*At,jt=(Ct.start+Ct.count)*At;J!==null&&(Gt=Math.max(Gt,J.start*At),jt=Math.min(jt,(J.start+J.count)*At)),mt!==null?(Gt=Math.max(Gt,0),jt=Math.min(jt,mt.count)):Mt!=null&&(Gt=Math.max(Gt,0),jt=Math.min(jt,Mt.count));const xe=jt-Gt;if(xe<0||xe===1/0)return;ie.setup(I,k,ut,O,mt);let fe,Xt=pt;if(mt!==null&&(fe=Y.get(mt),Xt=Ht,Xt.setIndex(fe)),I.isMesh)k.wireframe===!0?(St.setLineWidth(k.wireframeLinewidth*kt()),Xt.setMode(T.LINES)):Xt.setMode(T.TRIANGLES);else if(I.isLine){let yt=k.linewidth;yt===void 0&&(yt=1),St.setLineWidth(yt*kt()),I.isLineSegments?Xt.setMode(T.LINES):I.isLineLoop?Xt.setMode(T.LINE_LOOP):Xt.setMode(T.LINE_STRIP)}else I.isPoints?Xt.setMode(T.POINTS):I.isSprite&&Xt.setMode(T.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)Xt.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Bt.get("WEBGL_multi_draw"))Xt.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const yt=I._multiDrawStarts,Pe=I._multiDrawCounts,Zt=I._multiDrawCount,Sn=mt?Y.get(mt).bytesPerElement:1,us=vt.get(k).currentProgram.getUniforms();for(let tn=0;tn<Zt;tn++)us.setValue(T,"_gl_DrawID",tn),Xt.render(yt[tn]/Sn,Pe[tn])}else if(I.isInstancedMesh)Xt.renderInstances(Gt,xe,I.count);else if(O.isInstancedBufferGeometry){const yt=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,Pe=Math.min(O.instanceCount,yt);Xt.renderInstances(Gt,xe,Pe)}else Xt.render(Gt,xe)};function Kt(x,L,O){x.transparent===!0&&x.side===Jn&&x.forceSinglePass===!1?(x.side=Ke,x.needsUpdate=!0,ro(x,L,O),x.side=Li,x.needsUpdate=!0,ro(x,L,O),x.side=Jn):ro(x,L,O)}this.compile=function(x,L,O=null){O===null&&(O=x),p=Vt.get(O),p.init(L),w.push(p),O.traverseVisible(function(I){I.isLight&&I.layers.test(L.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),x!==O&&x.traverseVisible(function(I){I.isLight&&I.layers.test(L.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),p.setupLights();const k=new Set;return x.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const J=I.material;if(J)if(Array.isArray(J))for(let rt=0;rt<J.length;rt++){const ut=J[rt];Kt(ut,O,I),k.add(ut)}else Kt(J,O,I),k.add(J)}),w.pop(),p=null,k},this.compileAsync=function(x,L,O=null){const k=this.compile(x,L,O);return new Promise(I=>{function J(){if(k.forEach(function(rt){vt.get(rt).currentProgram.isReady()&&k.delete(rt)}),k.size===0){I(x);return}setTimeout(J,10)}Bt.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let xn=null;function Vn(x){xn&&xn(x)}function Oh(){Bi.stop()}function kh(){Bi.start()}const Bi=new Gd;Bi.setAnimationLoop(Vn),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(x){xn=x,H.setAnimationLoop(x),x===null?Bi.stop():Bi.start()},H.addEventListener("sessionstart",Oh),H.addEventListener("sessionend",kh),this.render=function(x,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(L),L=H.getCamera()),x.isScene===!0&&x.onBeforeRender(M,x,L,N),p=Vt.get(x,w.length),p.init(L),w.push(p),wt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),X.setFromProjectionMatrix(wt),gt=this.localClippingEnabled,tt=Q.init(this.clippingPlanes,gt),g=ft.get(x,b.length),g.init(),b.push(g),H.enabled===!0&&H.isPresenting===!0){const J=M.xr.getDepthSensingMesh();J!==null&&Va(J,L,-1/0,M.sortObjects)}Va(x,L,0,M.sortObjects),g.finish(),M.sortObjects===!0&&g.sort(it,ht),le=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,le&&Et.addToRenderList(g,x),this.info.render.frame++,tt===!0&&Q.beginShadows();const O=p.state.shadowsArray;dt.render(O,x,L),tt===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=g.opaque,I=g.transmissive;if(p.setupLights(),L.isArrayCamera){const J=L.cameras;if(I.length>0)for(let rt=0,ut=J.length;rt<ut;rt++){const mt=J[rt];zh(k,I,x,mt)}le&&Et.render(x);for(let rt=0,ut=J.length;rt<ut;rt++){const mt=J[rt];Bh(g,x,mt,mt.viewport)}}else I.length>0&&zh(k,I,x,L),le&&Et.render(x),Bh(g,x,L);N!==null&&A===0&&(E.updateMultisampleRenderTarget(N),E.updateRenderTargetMipmap(N)),x.isScene===!0&&x.onAfterRender(M,x,L),ie.resetDefaultState(),y=-1,S=null,w.pop(),w.length>0?(p=w[w.length-1],tt===!0&&Q.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?g=b[b.length-1]:g=null};function Va(x,L,O,k){if(x.visible===!1)return;if(x.layers.test(L.layers)){if(x.isGroup)O=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(L);else if(x.isLight)p.pushLight(x),x.castShadow&&p.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||X.intersectsSprite(x)){k&&bt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(wt);const rt=W.update(x),ut=x.material;ut.visible&&g.push(x,rt,ut,O,bt.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||X.intersectsObject(x))){const rt=W.update(x),ut=x.material;if(k&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),bt.copy(x.boundingSphere.center)):(rt.boundingSphere===null&&rt.computeBoundingSphere(),bt.copy(rt.boundingSphere.center)),bt.applyMatrix4(x.matrixWorld).applyMatrix4(wt)),Array.isArray(ut)){const mt=rt.groups;for(let At=0,Ct=mt.length;At<Ct;At++){const Mt=mt[At],Gt=ut[Mt.materialIndex];Gt&&Gt.visible&&g.push(x,rt,Gt,O,bt.z,Mt)}}else ut.visible&&g.push(x,rt,ut,O,bt.z,null)}}const J=x.children;for(let rt=0,ut=J.length;rt<ut;rt++)Va(J[rt],L,O,k)}function Bh(x,L,O,k){const I=x.opaque,J=x.transmissive,rt=x.transparent;p.setupLightsView(O),tt===!0&&Q.setGlobalState(M.clippingPlanes,O),k&&St.viewport(C.copy(k)),I.length>0&&so(I,L,O),J.length>0&&so(J,L,O),rt.length>0&&so(rt,L,O),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function zh(x,L,O,k){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new is(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float")?jr:si,minFilter:$i,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));const J=p.state.transmissionRenderTarget[k.id],rt=k.viewport||C;J.setSize(rt.z*M.transmissionResolutionScale,rt.w*M.transmissionResolutionScale);const ut=M.getRenderTarget();M.setRenderTarget(J),M.getClearColor(q),Z=M.getClearAlpha(),Z<1&&M.setClearColor(16777215,.5),M.clear(),le&&Et.render(O);const mt=M.toneMapping;M.toneMapping=Ai;const At=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),tt===!0&&Q.setGlobalState(M.clippingPlanes,k),so(x,O,k),E.updateMultisampleRenderTarget(J),E.updateRenderTargetMipmap(J),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let Mt=0,Gt=L.length;Mt<Gt;Mt++){const jt=L[Mt],xe=jt.object,fe=jt.geometry,Xt=jt.material,yt=jt.group;if(Xt.side===Jn&&xe.layers.test(k.layers)){const Pe=Xt.side;Xt.side=Ke,Xt.needsUpdate=!0,Hh(xe,O,k,fe,Xt,yt),Xt.side=Pe,Xt.needsUpdate=!0,Ct=!0}}Ct===!0&&(E.updateMultisampleRenderTarget(J),E.updateRenderTargetMipmap(J))}M.setRenderTarget(ut),M.setClearColor(q,Z),At!==void 0&&(k.viewport=At),M.toneMapping=mt}function so(x,L,O){const k=L.isScene===!0?L.overrideMaterial:null;for(let I=0,J=x.length;I<J;I++){const rt=x[I],ut=rt.object,mt=rt.geometry,At=k===null?rt.material:k,Ct=rt.group;ut.layers.test(O.layers)&&Hh(ut,L,O,mt,At,Ct)}}function Hh(x,L,O,k,I,J){x.onBeforeRender(M,L,O,k,I,J),x.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),I.onBeforeRender(M,L,O,k,x,J),I.transparent===!0&&I.side===Jn&&I.forceSinglePass===!1?(I.side=Ke,I.needsUpdate=!0,M.renderBufferDirect(O,L,k,I,x,J),I.side=Li,I.needsUpdate=!0,M.renderBufferDirect(O,L,k,I,x,J),I.side=Jn):M.renderBufferDirect(O,L,k,I,x,J),x.onAfterRender(M,L,O,k,I,J)}function ro(x,L,O){L.isScene!==!0&&(L=me);const k=vt.get(x),I=p.state.lights,J=p.state.shadowsArray,rt=I.state.version,ut=_t.getParameters(x,I.state,J,L,O),mt=_t.getProgramCacheKey(ut);let At=k.programs;k.environment=x.isMeshStandardMaterial?L.environment:null,k.fog=L.fog,k.envMap=(x.isMeshStandardMaterial?F:v).get(x.envMap||k.environment),k.envMapRotation=k.environment!==null&&x.envMap===null?L.environmentRotation:x.envMapRotation,At===void 0&&(x.addEventListener("dispose",Dt),At=new Map,k.programs=At);let Ct=At.get(mt);if(Ct!==void 0){if(k.currentProgram===Ct&&k.lightsStateVersion===rt)return Gh(x,ut),Ct}else ut.uniforms=_t.getUniforms(x),x.onBeforeCompile(ut,M),Ct=_t.acquireProgram(ut,mt),At.set(mt,Ct),k.uniforms=ut.uniforms;const Mt=k.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Mt.clippingPlanes=Q.uniform),Gh(x,ut),k.needsLights=am(x),k.lightsStateVersion=rt,k.needsLights&&(Mt.ambientLightColor.value=I.state.ambient,Mt.lightProbe.value=I.state.probe,Mt.directionalLights.value=I.state.directional,Mt.directionalLightShadows.value=I.state.directionalShadow,Mt.spotLights.value=I.state.spot,Mt.spotLightShadows.value=I.state.spotShadow,Mt.rectAreaLights.value=I.state.rectArea,Mt.ltc_1.value=I.state.rectAreaLTC1,Mt.ltc_2.value=I.state.rectAreaLTC2,Mt.pointLights.value=I.state.point,Mt.pointLightShadows.value=I.state.pointShadow,Mt.hemisphereLights.value=I.state.hemi,Mt.directionalShadowMap.value=I.state.directionalShadowMap,Mt.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Mt.spotShadowMap.value=I.state.spotShadowMap,Mt.spotLightMatrix.value=I.state.spotLightMatrix,Mt.spotLightMap.value=I.state.spotLightMap,Mt.pointShadowMap.value=I.state.pointShadowMap,Mt.pointShadowMatrix.value=I.state.pointShadowMatrix),k.currentProgram=Ct,k.uniformsList=null,Ct}function Vh(x){if(x.uniformsList===null){const L=x.currentProgram.getUniforms();x.uniformsList=Vo.seqWithValue(L.seq,x.uniforms)}return x.uniformsList}function Gh(x,L){const O=vt.get(x);O.outputColorSpace=L.outputColorSpace,O.batching=L.batching,O.batchingColor=L.batchingColor,O.instancing=L.instancing,O.instancingColor=L.instancingColor,O.instancingMorph=L.instancingMorph,O.skinning=L.skinning,O.morphTargets=L.morphTargets,O.morphNormals=L.morphNormals,O.morphColors=L.morphColors,O.morphTargetsCount=L.morphTargetsCount,O.numClippingPlanes=L.numClippingPlanes,O.numIntersection=L.numClipIntersection,O.vertexAlphas=L.vertexAlphas,O.vertexTangents=L.vertexTangents,O.toneMapping=L.toneMapping}function rm(x,L,O,k,I){L.isScene!==!0&&(L=me),E.resetTextureUnits();const J=L.fog,rt=k.isMeshStandardMaterial?L.environment:null,ut=N===null?M.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:js,mt=(k.isMeshStandardMaterial?F:v).get(k.envMap||rt),At=k.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ct=!!O.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Mt=!!O.morphAttributes.position,Gt=!!O.morphAttributes.normal,jt=!!O.morphAttributes.color;let xe=Ai;k.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(xe=M.toneMapping);const fe=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Xt=fe!==void 0?fe.length:0,yt=vt.get(k),Pe=p.state.lights;if(tt===!0&&(gt===!0||x!==S)){const ze=x===S&&k.id===y;Q.setState(k,x,ze)}let Zt=!1;k.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==Pe.state.version||yt.outputColorSpace!==ut||I.isBatchedMesh&&yt.batching===!1||!I.isBatchedMesh&&yt.batching===!0||I.isBatchedMesh&&yt.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&yt.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&yt.instancing===!1||!I.isInstancedMesh&&yt.instancing===!0||I.isSkinnedMesh&&yt.skinning===!1||!I.isSkinnedMesh&&yt.skinning===!0||I.isInstancedMesh&&yt.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&yt.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&yt.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&yt.instancingMorph===!1&&I.morphTexture!==null||yt.envMap!==mt||k.fog===!0&&yt.fog!==J||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==Q.numPlanes||yt.numIntersection!==Q.numIntersection)||yt.vertexAlphas!==At||yt.vertexTangents!==Ct||yt.morphTargets!==Mt||yt.morphNormals!==Gt||yt.morphColors!==jt||yt.toneMapping!==xe||yt.morphTargetsCount!==Xt)&&(Zt=!0):(Zt=!0,yt.__version=k.version);let Sn=yt.currentProgram;Zt===!0&&(Sn=ro(k,L,I));let us=!1,tn=!1,dr=!1;const ae=Sn.getUniforms(),cn=yt.uniforms;if(St.useProgram(Sn.program)&&(us=!0,tn=!0,dr=!0),k.id!==y&&(y=k.id,tn=!0),us||S!==x){St.buffers.depth.getReversed()?(ot.copy(x.projectionMatrix),S_(ot),M_(ot),ae.setValue(T,"projectionMatrix",ot)):ae.setValue(T,"projectionMatrix",x.projectionMatrix),ae.setValue(T,"viewMatrix",x.matrixWorldInverse);const We=ae.map.cameraPosition;We!==void 0&&We.setValue(T,Yt.setFromMatrixPosition(x.matrixWorld)),zt.logarithmicDepthBuffer&&ae.setValue(T,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ae.setValue(T,"isOrthographic",x.isOrthographicCamera===!0),S!==x&&(S=x,tn=!0,dr=!0)}if(I.isSkinnedMesh){ae.setOptional(T,I,"bindMatrix"),ae.setOptional(T,I,"bindMatrixInverse");const ze=I.skeleton;ze&&(ze.boneTexture===null&&ze.computeBoneTexture(),ae.setValue(T,"boneTexture",ze.boneTexture,E))}I.isBatchedMesh&&(ae.setOptional(T,I,"batchingTexture"),ae.setValue(T,"batchingTexture",I._matricesTexture,E),ae.setOptional(T,I,"batchingIdTexture"),ae.setValue(T,"batchingIdTexture",I._indirectTexture,E),ae.setOptional(T,I,"batchingColorTexture"),I._colorsTexture!==null&&ae.setValue(T,"batchingColorTexture",I._colorsTexture,E));const hn=O.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&Tt.update(I,O,Sn),(tn||yt.receiveShadow!==I.receiveShadow)&&(yt.receiveShadow=I.receiveShadow,ae.setValue(T,"receiveShadow",I.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(cn.envMap.value=mt,cn.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&L.environment!==null&&(cn.envMapIntensity.value=L.environmentIntensity),tn&&(ae.setValue(T,"toneMappingExposure",M.toneMappingExposure),yt.needsLights&&om(cn,dr),J&&k.fog===!0&&at.refreshFogUniforms(cn,J),at.refreshMaterialUniforms(cn,k,z,K,p.state.transmissionRenderTarget[x.id]),Vo.upload(T,Vh(yt),cn,E)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Vo.upload(T,Vh(yt),cn,E),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ae.setValue(T,"center",I.center),ae.setValue(T,"modelViewMatrix",I.modelViewMatrix),ae.setValue(T,"normalMatrix",I.normalMatrix),ae.setValue(T,"modelMatrix",I.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const ze=k.uniformsGroups;for(let We=0,Ga=ze.length;We<Ga;We++){const zi=ze[We];R.update(zi,Sn),R.bind(zi,Sn)}}return Sn}function om(x,L){x.ambientLightColor.needsUpdate=L,x.lightProbe.needsUpdate=L,x.directionalLights.needsUpdate=L,x.directionalLightShadows.needsUpdate=L,x.pointLights.needsUpdate=L,x.pointLightShadows.needsUpdate=L,x.spotLights.needsUpdate=L,x.spotLightShadows.needsUpdate=L,x.rectAreaLights.needsUpdate=L,x.hemisphereLights.needsUpdate=L}function am(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(x,L,O){vt.get(x.texture).__webglTexture=L,vt.get(x.depthTexture).__webglTexture=O;const k=vt.get(x);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=O===void 0,k.__autoAllocateDepthBuffer||Bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,L){const O=vt.get(x);O.__webglFramebuffer=L,O.__useDefaultFramebuffer=L===void 0};const lm=T.createFramebuffer();this.setRenderTarget=function(x,L=0,O=0){N=x,P=L,A=O;let k=!0,I=null,J=!1,rt=!1;if(x){const mt=vt.get(x);if(mt.__useDefaultFramebuffer!==void 0)St.bindFramebuffer(T.FRAMEBUFFER,null),k=!1;else if(mt.__webglFramebuffer===void 0)E.setupRenderTarget(x);else if(mt.__hasExternalTextures)E.rebindTextures(x,vt.get(x.texture).__webglTexture,vt.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Mt=x.depthTexture;if(mt.__boundDepthTexture!==Mt){if(Mt!==null&&vt.has(Mt)&&(x.width!==Mt.image.width||x.height!==Mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(x)}}const At=x.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(rt=!0);const Ct=vt.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ct[L])?I=Ct[L][O]:I=Ct[L],J=!0):x.samples>0&&E.useMultisampledRTT(x)===!1?I=vt.get(x).__webglMultisampledFramebuffer:Array.isArray(Ct)?I=Ct[O]:I=Ct,C.copy(x.viewport),V.copy(x.scissor),B=x.scissorTest}else C.copy(et).multiplyScalar(z).floor(),V.copy(Lt).multiplyScalar(z).floor(),B=Qt;if(O!==0&&(I=lm),St.bindFramebuffer(T.FRAMEBUFFER,I)&&k&&St.drawBuffers(x,I),St.viewport(C),St.scissor(V),St.setScissorTest(B),J){const mt=vt.get(x.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+L,mt.__webglTexture,O)}else if(rt){const mt=vt.get(x.texture),At=L;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,mt.__webglTexture,O,At)}else if(x!==null&&O!==0){const mt=vt.get(x.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,mt.__webglTexture,O)}y=-1},this.readRenderTargetPixels=function(x,L,O,k,I,J,rt){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ut=vt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&rt!==void 0&&(ut=ut[rt]),ut){St.bindFramebuffer(T.FRAMEBUFFER,ut);try{const mt=x.texture,At=mt.format,Ct=mt.type;if(!zt.textureFormatReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!zt.textureTypeReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=x.width-k&&O>=0&&O<=x.height-I&&T.readPixels(L,O,k,I,It.convert(At),It.convert(Ct),J)}finally{const mt=N!==null?vt.get(N).__webglFramebuffer:null;St.bindFramebuffer(T.FRAMEBUFFER,mt)}}},this.readRenderTargetPixelsAsync=async function(x,L,O,k,I,J,rt){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ut=vt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&rt!==void 0&&(ut=ut[rt]),ut){const mt=x.texture,At=mt.format,Ct=mt.type;if(!zt.textureFormatReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!zt.textureTypeReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=x.width-k&&O>=0&&O<=x.height-I){St.bindFramebuffer(T.FRAMEBUFFER,ut);const Mt=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Mt),T.bufferData(T.PIXEL_PACK_BUFFER,J.byteLength,T.STREAM_READ),T.readPixels(L,O,k,I,It.convert(At),It.convert(Ct),0);const Gt=N!==null?vt.get(N).__webglFramebuffer:null;St.bindFramebuffer(T.FRAMEBUFFER,Gt);const jt=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await x_(T,jt,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Mt),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,J),T.deleteBuffer(Mt),T.deleteSync(jt),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(x,L=null,O=0){x.isTexture!==!0&&(Cs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,x=arguments[1]);const k=Math.pow(2,-O),I=Math.floor(x.image.width*k),J=Math.floor(x.image.height*k),rt=L!==null?L.x:0,ut=L!==null?L.y:0;E.setTexture2D(x,0),T.copyTexSubImage2D(T.TEXTURE_2D,O,0,0,rt,ut,I,J),St.unbindTexture()};const cm=T.createFramebuffer(),hm=T.createFramebuffer();this.copyTextureToTexture=function(x,L,O=null,k=null,I=0,J=null){x.isTexture!==!0&&(Cs("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,x=arguments[1],L=arguments[2],J=arguments[3]||0,O=null),J===null&&(I!==0?(Cs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J=I,I=0):J=0);let rt,ut,mt,At,Ct,Mt,Gt,jt,xe;const fe=x.isCompressedTexture?x.mipmaps[J]:x.image;if(O!==null)rt=O.max.x-O.min.x,ut=O.max.y-O.min.y,mt=O.isBox3?O.max.z-O.min.z:1,At=O.min.x,Ct=O.min.y,Mt=O.isBox3?O.min.z:0;else{const hn=Math.pow(2,-I);rt=Math.floor(fe.width*hn),ut=Math.floor(fe.height*hn),x.isDataArrayTexture?mt=fe.depth:x.isData3DTexture?mt=Math.floor(fe.depth*hn):mt=1,At=0,Ct=0,Mt=0}k!==null?(Gt=k.x,jt=k.y,xe=k.z):(Gt=0,jt=0,xe=0);const Xt=It.convert(L.format),yt=It.convert(L.type);let Pe;L.isData3DTexture?(E.setTexture3D(L,0),Pe=T.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(E.setTexture2DArray(L,0),Pe=T.TEXTURE_2D_ARRAY):(E.setTexture2D(L,0),Pe=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,L.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,L.unpackAlignment);const Zt=T.getParameter(T.UNPACK_ROW_LENGTH),Sn=T.getParameter(T.UNPACK_IMAGE_HEIGHT),us=T.getParameter(T.UNPACK_SKIP_PIXELS),tn=T.getParameter(T.UNPACK_SKIP_ROWS),dr=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,fe.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,fe.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,At),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ct),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Mt);const ae=x.isDataArrayTexture||x.isData3DTexture,cn=L.isDataArrayTexture||L.isData3DTexture;if(x.isDepthTexture){const hn=vt.get(x),ze=vt.get(L),We=vt.get(hn.__renderTarget),Ga=vt.get(ze.__renderTarget);St.bindFramebuffer(T.READ_FRAMEBUFFER,We.__webglFramebuffer),St.bindFramebuffer(T.DRAW_FRAMEBUFFER,Ga.__webglFramebuffer);for(let zi=0;zi<mt;zi++)ae&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,vt.get(x).__webglTexture,I,Mt+zi),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,vt.get(L).__webglTexture,J,xe+zi)),T.blitFramebuffer(At,Ct,rt,ut,Gt,jt,rt,ut,T.DEPTH_BUFFER_BIT,T.NEAREST);St.bindFramebuffer(T.READ_FRAMEBUFFER,null),St.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(I!==0||x.isRenderTargetTexture||vt.has(x)){const hn=vt.get(x),ze=vt.get(L);St.bindFramebuffer(T.READ_FRAMEBUFFER,cm),St.bindFramebuffer(T.DRAW_FRAMEBUFFER,hm);for(let We=0;We<mt;We++)ae?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,hn.__webglTexture,I,Mt+We):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,hn.__webglTexture,I),cn?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ze.__webglTexture,J,xe+We):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,ze.__webglTexture,J),I!==0?T.blitFramebuffer(At,Ct,rt,ut,Gt,jt,rt,ut,T.COLOR_BUFFER_BIT,T.NEAREST):cn?T.copyTexSubImage3D(Pe,J,Gt,jt,xe+We,At,Ct,rt,ut):T.copyTexSubImage2D(Pe,J,Gt,jt,At,Ct,rt,ut);St.bindFramebuffer(T.READ_FRAMEBUFFER,null),St.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else cn?x.isDataTexture||x.isData3DTexture?T.texSubImage3D(Pe,J,Gt,jt,xe,rt,ut,mt,Xt,yt,fe.data):L.isCompressedArrayTexture?T.compressedTexSubImage3D(Pe,J,Gt,jt,xe,rt,ut,mt,Xt,fe.data):T.texSubImage3D(Pe,J,Gt,jt,xe,rt,ut,mt,Xt,yt,fe):x.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,J,Gt,jt,rt,ut,Xt,yt,fe.data):x.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,J,Gt,jt,fe.width,fe.height,Xt,fe.data):T.texSubImage2D(T.TEXTURE_2D,J,Gt,jt,rt,ut,Xt,yt,fe);T.pixelStorei(T.UNPACK_ROW_LENGTH,Zt),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Sn),T.pixelStorei(T.UNPACK_SKIP_PIXELS,us),T.pixelStorei(T.UNPACK_SKIP_ROWS,tn),T.pixelStorei(T.UNPACK_SKIP_IMAGES,dr),J===0&&L.generateMipmaps&&T.generateMipmap(Pe),St.unbindTexture()},this.copyTextureToTexture3D=function(x,L,O=null,k=null,I=0){return x.isTexture!==!0&&(Cs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,k=arguments[1]||null,x=arguments[2],L=arguments[3],I=arguments[4]||0),Cs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,L,O,k,I)},this.initRenderTarget=function(x){vt.get(x).__webglFramebuffer===void 0&&E.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?E.setTextureCube(x,0):x.isData3DTexture?E.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?E.setTexture2DArray(x,0):E.setTexture2D(x,0),St.unbindTexture()},this.resetState=function(){P=0,A=0,N=null,St.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}}const sf={type:"change"},uh={type:"start"},jd={type:"end"},Po=new ch,rf=new je,kM=Math.cos(70*__.DEG2RAD),Me=new U,qe=2*Math.PI,Jt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Tl=1e-6;class BM extends e0{constructor(t,e=null){super(t,e),this.state=Jt.NONE,this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:bi.ROTATE,MIDDLE:bi.DOLLY,RIGHT:bi.PAN},this.touches={ONE:Ps.ROTATE,TWO:Ps.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new ss,this._lastTargetPosition=new U,this._quat=new ss().setFromUnitVectors(t.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Pu,this._sphericalDelta=new Pu,this._scale=1,this._panOffset=new U,this._rotateStart=new Nt,this._rotateEnd=new Nt,this._rotateDelta=new Nt,this._panStart=new Nt,this._panEnd=new Nt,this._panDelta=new Nt,this._dollyStart=new Nt,this._dollyEnd=new Nt,this._dollyDelta=new Nt,this._dollyDirection=new U,this._mouse=new Nt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=HM.bind(this),this._onPointerDown=zM.bind(this),this._onPointerUp=VM.bind(this),this._onContextMenu=ZM.bind(this),this._onMouseWheel=XM.bind(this),this._onKeyDown=qM.bind(this),this._onTouchStart=YM.bind(this),this._onTouchMove=jM.bind(this),this._onMouseDown=GM.bind(this),this._onMouseMove=WM.bind(this),this._interceptControlDown=KM.bind(this),this._interceptControlUp=$M.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(sf),this.update(),this.state=Jt.NONE}update(t=null){const e=this.object.position;Me.copy(e).sub(this.target),Me.applyQuaternion(this._quat),this._spherical.setFromVector3(Me),this.autoRotate&&this.state===Jt.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=qe:i>Math.PI&&(i-=qe),s<-Math.PI?s+=qe:s>Math.PI&&(s-=qe),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Me.setFromSpherical(this._spherical),Me.applyQuaternion(this._quatInverse),e.copy(this.target).add(Me),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Me.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new U(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new U(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Me.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Po.origin.copy(this.object.position),Po.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Po.direction))<kM?this.object.lookAt(this.target):(rf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Po.intersectPlane(rf,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Tl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Tl||this._lastTargetPosition.distanceToSquared(this.target)>Tl?(this.dispatchEvent(sf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?qe/60*this.autoRotateSpeed*t:qe/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Me.setFromMatrixColumn(e,0),Me.multiplyScalar(-t),this._panOffset.add(Me)}_panUp(t,e){this.screenSpacePanning===!0?Me.setFromMatrixColumn(e,1):(Me.setFromMatrixColumn(e,0),Me.crossVectors(this.object.up,Me)),Me.multiplyScalar(t),this._panOffset.add(Me)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Me.copy(s).sub(this.target);let r=Me.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Nt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function zM(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function HM(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function VM(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(jd),this.state=Jt.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function GM(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case bi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Jt.DOLLY;break;case bi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Jt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Jt.ROTATE}break;case bi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Jt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Jt.PAN}break;default:this.state=Jt.NONE}this.state!==Jt.NONE&&this.dispatchEvent(uh)}function WM(n){switch(this.state){case Jt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Jt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Jt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function XM(n){this.enabled===!1||this.enableZoom===!1||this.state!==Jt.NONE||(n.preventDefault(),this.dispatchEvent(uh),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(jd))}function qM(n){this.enabled!==!1&&this._handleKeyDown(n)}function YM(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ps.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Jt.TOUCH_ROTATE;break;case Ps.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Jt.TOUCH_PAN;break;default:this.state=Jt.NONE}break;case 2:switch(this.touches.TWO){case Ps.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Jt.TOUCH_DOLLY_PAN;break;case Ps.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Jt.TOUCH_DOLLY_ROTATE;break;default:this.state=Jt.NONE}break;default:this.state=Jt.NONE}this.state!==Jt.NONE&&this.dispatchEvent(uh)}function jM(n){switch(this._trackPointer(n),this.state){case Jt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Jt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Jt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Jt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Jt.NONE}}function ZM(n){this.enabled!==!1&&n.preventDefault()}function KM(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function $M(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class JM{constructor(t,e=!0){ce(this,"object",new Mr);ce(this,"faces");const i=e?t:1,s="#fff";this.faces={xy:{plane:new je(new U(1,0,0),0),grid:new Ts(t,i,s,s)},xz:{plane:new je(new U(1,0,0),-t),grid:new Ts(t,i,s,s)},yx:{plane:new je(new U(0,1,0),0),grid:new Ts(t,i,s,s)},yz:{plane:new je(new U(0,1,0),-t),grid:new Ts(t,i,s,s)},zx:{plane:new je(new U(0,0,1),0),grid:new Ts(t,i,s,s)},zy:{plane:new je(new U(0,0,1),-t),grid:new Ts(t,i,s,s)}},this.faces.xy.grid.position.x+=0,this.faces.xy.grid.position.y+=t/2,this.faces.xy.grid.position.z+=t/2,this.faces.xy.grid.rotateZ(Math.PI/2),this.faces.xz.grid.position.x+=t,this.faces.xz.grid.position.y+=t/2,this.faces.xz.grid.position.z+=t/2,this.faces.xz.grid.rotateZ(Math.PI/2),this.faces.yx.grid.position.x+=t/2,this.faces.yx.grid.position.y+=0,this.faces.yx.grid.position.z+=t/2,this.faces.yz.grid.position.x+=t/2,this.faces.yz.grid.position.y+=t,this.faces.yz.grid.position.z+=t/2,this.faces.zx.grid.position.x+=t/2,this.faces.zx.grid.position.y+=t/2,this.faces.zx.grid.position.z+=0,this.faces.zx.grid.rotateX(Math.PI/2),this.faces.zy.grid.position.x+=t/2,this.faces.zy.grid.position.y+=t/2,this.faces.zy.grid.position.z+=t,this.faces.zy.grid.rotateX(Math.PI/2),Object.values(this.faces).forEach(({grid:r})=>this.object.add(r))}update(t){this.faces.xy.grid.visible=this.isGridVisible(t,this.faces.xy.plane),this.faces.xz.grid.visible=this.isInverseGridVisible(t,this.faces.xz.plane),this.faces.yx.grid.visible=this.isGridVisible(t,this.faces.yx.plane),this.faces.yz.grid.visible=this.isInverseGridVisible(t,this.faces.yz.plane),this.faces.zx.grid.visible=this.isGridVisible(t,this.faces.zx.plane),this.faces.zy.grid.visible=this.isInverseGridVisible(t,this.faces.zy.plane)}isGridVisible(t,e){return e.distanceToPoint(t)>=0}isInverseGridVisible(t,e){return e.distanceToPoint(t)<0}}const Qe=()=>new Map,Dc=n=>{const t=Qe();return n.forEach((e,i)=>{t.set(i,e)}),t},Hn=(n,t,e)=>{let i=n.get(t);return i===void 0&&n.set(t,i=e()),i},QM=(n,t)=>{const e=[];for(const[i,s]of n)e.push(t(s,i));return e},ty=(n,t)=>{for(const[e,i]of n)if(t(i,e))return!0;return!1},Ui=()=>new Set,Al=n=>n[n.length-1],ey=(n,t)=>{for(let e=0;e<t.length;e++)n.push(t[e])},oi=Array.from,ny=(n,t)=>{for(let e=0;e<n.length;e++)if(t(n[e],e,n))return!0;return!1},Pc=Array.isArray;class fh{constructor(){this._observers=Qe()}on(t,e){return Hn(this._observers,t,Ui).add(e),e}once(t,e){const i=(...s)=>{this.off(t,i),e(...s)};this.on(t,i)}off(t,e){const i=this._observers.get(t);i!==void 0&&(i.delete(e),i.size===0&&this._observers.delete(t))}emit(t,e){return oi((this._observers.get(t)||Qe()).values()).forEach(i=>i(...e))}destroy(){this._observers=Qe()}}class iy{constructor(){this._observers=Qe()}on(t,e){Hn(this._observers,t,Ui).add(e)}once(t,e){const i=(...s)=>{this.off(t,i),e(...s)};this.on(t,i)}off(t,e){const i=this._observers.get(t);i!==void 0&&(i.delete(e),i.size===0&&this._observers.delete(t))}emit(t,e){return oi((this._observers.get(t)||Qe()).values()).forEach(i=>i(...e))}destroy(){this._observers=Qe()}}const ai=Math.floor,Go=Math.abs,dh=(n,t)=>n<t?n:t,cs=(n,t)=>n>t?n:t,sy=Math.pow,Zd=n=>n!==0?n<0:1/n<0,of=1,af=2,Cl=4,Rl=8,Dr=32,ii=64,an=128,Ua=31,Lc=63,ts=127,ry=2147483647,Kd=Number.MAX_SAFE_INTEGER,oy=Number.isInteger||(n=>typeof n=="number"&&isFinite(n)&&ai(n)===n),ay=String.fromCharCode,ly=n=>n.toLowerCase(),cy=/^\s*/g,hy=n=>n.replace(cy,""),uy=/([A-Z])/g,lf=(n,t)=>hy(n.replace(uy,e=>`${t}${ly(e)}`)),fy=n=>{const t=unescape(encodeURIComponent(n)),e=t.length,i=new Uint8Array(e);for(let s=0;s<e;s++)i[s]=t.codePointAt(s);return i},Pr=typeof TextEncoder<"u"?new TextEncoder:null,dy=n=>Pr.encode(n),py=Pr?dy:fy;let wr=typeof TextDecoder>"u"?null:new TextDecoder("utf-8",{fatal:!0,ignoreBOM:!0});wr&&wr.decode(new Uint8Array).length===1&&(wr=null);class Jr{constructor(){this.cpos=0,this.cbuf=new Uint8Array(100),this.bufs=[]}}const ke=()=>new Jr,ph=n=>{let t=n.cpos;for(let e=0;e<n.bufs.length;e++)t+=n.bufs[e].length;return t},he=n=>{const t=new Uint8Array(ph(n));let e=0;for(let i=0;i<n.bufs.length;i++){const s=n.bufs[i];t.set(s,e),e+=s.length}return t.set(new Uint8Array(n.cbuf.buffer,0,n.cpos),e),t},my=(n,t)=>{const e=n.cbuf.length;e-n.cpos<t&&(n.bufs.push(new Uint8Array(n.cbuf.buffer,0,n.cpos)),n.cbuf=new Uint8Array(cs(e,t)*2),n.cpos=0)},Ce=(n,t)=>{const e=n.cbuf.length;n.cpos===e&&(n.bufs.push(n.cbuf),n.cbuf=new Uint8Array(e*2),n.cpos=0),n.cbuf[n.cpos++]=t},Ic=Ce,xt=(n,t)=>{for(;t>ts;)Ce(n,an|ts&t),t=ai(t/128);Ce(n,ts&t)},mh=(n,t)=>{const e=Zd(t);for(e&&(t=-t),Ce(n,(t>Lc?an:0)|(e?ii:0)|Lc&t),t=ai(t/64);t>0;)Ce(n,(t>ts?an:0)|ts&t),t=ai(t/128)},Uc=new Uint8Array(3e4),gy=Uc.length/3,_y=(n,t)=>{if(t.length<gy){const e=Pr.encodeInto(t,Uc).written||0;xt(n,e);for(let i=0;i<e;i++)Ce(n,Uc[i])}else ge(n,py(t))},vy=(n,t)=>{const e=unescape(encodeURIComponent(t)),i=e.length;xt(n,i);for(let s=0;s<i;s++)Ce(n,e.codePointAt(s))},es=Pr&&Pr.encodeInto?_y:vy,Na=(n,t)=>{const e=n.cbuf.length,i=n.cpos,s=dh(e-i,t.length),r=t.length-s;n.cbuf.set(t.subarray(0,s),i),n.cpos+=s,r>0&&(n.bufs.push(n.cbuf),n.cbuf=new Uint8Array(cs(e*2,r)),n.cbuf.set(t.subarray(s)),n.cpos=r)},ge=(n,t)=>{xt(n,t.byteLength),Na(n,t)},gh=(n,t)=>{my(n,t);const e=new DataView(n.cbuf.buffer,n.cpos,t);return n.cpos+=t,e},xy=(n,t)=>gh(n,4).setFloat32(0,t,!1),Sy=(n,t)=>gh(n,8).setFloat64(0,t,!1),My=(n,t)=>gh(n,8).setBigInt64(0,t,!1),cf=new DataView(new ArrayBuffer(4)),yy=n=>(cf.setFloat32(0,n),cf.getFloat32(0)===n),Lr=(n,t)=>{switch(typeof t){case"string":Ce(n,119),es(n,t);break;case"number":oy(t)&&Go(t)<=ry?(Ce(n,125),mh(n,t)):yy(t)?(Ce(n,124),xy(n,t)):(Ce(n,123),Sy(n,t));break;case"bigint":Ce(n,122),My(n,t);break;case"object":if(t===null)Ce(n,126);else if(Pc(t)){Ce(n,117),xt(n,t.length);for(let e=0;e<t.length;e++)Lr(n,t[e])}else if(t instanceof Uint8Array)Ce(n,116),ge(n,t);else{Ce(n,118);const e=Object.keys(t);xt(n,e.length);for(let i=0;i<e.length;i++){const s=e[i];es(n,s),Lr(n,t[s])}}break;case"boolean":Ce(n,t?120:121);break;default:Ce(n,127)}};class hf extends Jr{constructor(t){super(),this.w=t,this.s=null,this.count=0}write(t){this.s===t?this.count++:(this.count>0&&xt(this,this.count-1),this.count=1,this.w(this,t),this.s=t)}}const uf=n=>{n.count>0&&(mh(n.encoder,n.count===1?n.s:-n.s),n.count>1&&xt(n.encoder,n.count-2))};class Wo{constructor(){this.encoder=new Jr,this.s=0,this.count=0}write(t){this.s===t?this.count++:(uf(this),this.count=1,this.s=t)}toUint8Array(){return uf(this),he(this.encoder)}}const ff=n=>{if(n.count>0){const t=n.diff*2+(n.count===1?0:1);mh(n.encoder,t),n.count>1&&xt(n.encoder,n.count-2)}};class Dl{constructor(){this.encoder=new Jr,this.s=0,this.count=0,this.diff=0}write(t){this.diff===t-this.s?(this.s=t,this.count++):(ff(this),this.count=1,this.diff=t-this.s,this.s=t)}toUint8Array(){return ff(this),he(this.encoder)}}class Ey{constructor(){this.sarr=[],this.s="",this.lensE=new Wo}write(t){this.s+=t,this.s.length>19&&(this.sarr.push(this.s),this.s=""),this.lensE.write(t.length)}toUint8Array(){const t=new Jr;return this.sarr.push(this.s),this.s="",es(t,this.sarr.join("")),Na(t,this.lensE.toUint8Array()),he(t)}}const Ni=n=>new Error(n),Nn=()=>{throw Ni("Method unimplemented")},On=()=>{throw Ni("Unexpected case")},$d=Ni("Unexpected end of array"),Jd=Ni("Integer out of Range");class Fa{constructor(t){this.arr=t,this.pos=0}}const ki=n=>new Fa(n),wy=n=>n.pos!==n.arr.length,by=(n,t)=>{const e=new Uint8Array(n.arr.buffer,n.pos+n.arr.byteOffset,t);return n.pos+=t,e},Oe=n=>by(n,Rt(n)),Ks=n=>n.arr[n.pos++],Rt=n=>{let t=0,e=1;const i=n.arr.length;for(;n.pos<i;){const s=n.arr[n.pos++];if(t=t+(s&ts)*e,e*=128,s<an)return t;if(t>Kd)throw Jd}throw $d},_h=n=>{let t=n.arr[n.pos++],e=t&Lc,i=64;const s=(t&ii)>0?-1:1;if(!(t&an))return s*e;const r=n.arr.length;for(;n.pos<r;){if(t=n.arr[n.pos++],e=e+(t&ts)*i,i*=128,t<an)return s*e;if(e>Kd)throw Jd}throw $d},Ty=n=>{let t=Rt(n);if(t===0)return"";{let e=String.fromCodePoint(Ks(n));if(--t<100)for(;t--;)e+=String.fromCodePoint(Ks(n));else for(;t>0;){const i=t<1e4?t:1e4,s=n.arr.subarray(n.pos,n.pos+i);n.pos+=i,e+=String.fromCodePoint.apply(null,s),t-=i}return decodeURIComponent(escape(e))}},Ay=n=>wr.decode(Oe(n)),Ci=wr?Ay:Ty,vh=(n,t)=>{const e=new DataView(n.arr.buffer,n.arr.byteOffset+n.pos,t);return n.pos+=t,e},Cy=n=>vh(n,4).getFloat32(0,!1),Ry=n=>vh(n,8).getFloat64(0,!1),Dy=n=>vh(n,8).getBigInt64(0,!1),Py=[n=>{},n=>null,_h,Cy,Ry,Dy,n=>!1,n=>!0,Ci,n=>{const t=Rt(n),e={};for(let i=0;i<t;i++){const s=Ci(n);e[s]=Ir(n)}return e},n=>{const t=Rt(n),e=[];for(let i=0;i<t;i++)e.push(Ir(n));return e},Oe],Ir=n=>Py[127-Ks(n)](n);class df extends Fa{constructor(t,e){super(t),this.reader=e,this.s=null,this.count=0}read(){return this.count===0&&(this.s=this.reader(this),wy(this)?this.count=Rt(this)+1:this.count=-1),this.count--,this.s}}class Xo extends Fa{constructor(t){super(t),this.s=0,this.count=0}read(){if(this.count===0){this.s=_h(this);const t=Zd(this.s);this.count=1,t&&(this.s=-this.s,this.count=Rt(this)+2)}return this.count--,this.s}}class Pl extends Fa{constructor(t){super(t),this.s=0,this.count=0,this.diff=0}read(){if(this.count===0){const t=_h(this),e=t&1;this.diff=ai(t/2),this.count=1,e&&(this.count=Rt(this)+2)}return this.s+=this.diff,this.count--,this.s}}class Ly{constructor(t){this.decoder=new Xo(t),this.str=Ci(this.decoder),this.spos=0}read(){const t=this.spos+this.decoder.read(),e=this.str.slice(this.spos,t);return this.spos=t,e}}const Iy=crypto.getRandomValues.bind(crypto),Qd=()=>Iy(new Uint32Array(1))[0],Uy="10000000-1000-4000-8000"+-1e11,Ny=()=>Uy.replace(/[018]/g,n=>(n^Qd()&15>>n/4).toString(16)),Fi=Date.now,pf=n=>new Promise(n);Promise.all.bind(Promise);const mf=n=>n===void 0?null:n;class Fy{constructor(){this.map=new Map}setItem(t,e){this.map.set(t,e)}getItem(t){return this.map.get(t)}}let tp=new Fy,xh=!0;try{typeof localStorage<"u"&&localStorage&&(tp=localStorage,xh=!1)}catch{}const ep=tp,Oy=n=>xh||addEventListener("storage",n),ky=n=>xh||removeEventListener("storage",n),By=Object.assign,np=Object.keys,zy=(n,t)=>{for(const e in n)t(n[e],e)},Hy=(n,t)=>{const e=[];for(const i in n)e.push(t(n[i],i));return e},gf=n=>np(n).length,_f=n=>np(n).length,Vy=n=>{for(const t in n)return!1;return!0},Gy=(n,t)=>{for(const e in n)if(!t(n[e],e))return!1;return!0},ip=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),Wy=(n,t)=>n===t||_f(n)===_f(t)&&Gy(n,(e,i)=>(e!==void 0||ip(t,i))&&t[i]===e),Xy=Object.freeze,sp=n=>{for(const t in n){const e=n[t];(typeof e=="object"||typeof e=="function")&&sp(n[t])}return Xy(n)},Sh=(n,t,e=0)=>{try{for(;e<n.length;e++)n[e](...t)}finally{e<n.length&&Sh(n,t,e+1)}},qy=n=>n,Yy=(n,t)=>n===t,br=(n,t)=>{if(n==null||t==null)return Yy(n,t);if(n.constructor!==t.constructor)return!1;if(n===t)return!0;switch(n.constructor){case ArrayBuffer:n=new Uint8Array(n),t=new Uint8Array(t);case Uint8Array:{if(n.byteLength!==t.byteLength)return!1;for(let e=0;e<n.length;e++)if(n[e]!==t[e])return!1;break}case Set:{if(n.size!==t.size)return!1;for(const e of n)if(!t.has(e))return!1;break}case Map:{if(n.size!==t.size)return!1;for(const e of n.keys())if(!t.has(e)||!br(n.get(e),t.get(e)))return!1;break}case Object:if(gf(n)!==gf(t))return!1;for(const e in n)if(!ip(n,e)||!br(n[e],t[e]))return!1;break;case Array:if(n.length!==t.length)return!1;for(let e=0;e<n.length;e++)if(!br(n[e],t[e]))return!1;break;default:return!1}return!0},jy=(n,t)=>t.includes(n);var rp={};const Oi=typeof process<"u"&&process.release&&/node|io\.js/.test(process.release.name)&&Object.prototype.toString.call(typeof process<"u"?process:0)==="[object process]",op=typeof window<"u"&&typeof document<"u"&&!Oi;let Dn;const Zy=()=>{if(Dn===void 0)if(Oi){Dn=Qe();const n=process.argv;let t=null;for(let e=0;e<n.length;e++){const i=n[e];i[0]==="-"?(t!==null&&Dn.set(t,""),t=i):t!==null&&(Dn.set(t,i),t=null)}t!==null&&Dn.set(t,"")}else typeof location=="object"?(Dn=Qe(),(location.search||"?").slice(1).split("&").forEach(n=>{if(n.length!==0){const[t,e]=n.split("=");Dn.set(`--${lf(t,"-")}`,e),Dn.set(`-${lf(t,"-")}`,e)}})):Dn=Qe();return Dn},Nc=n=>Zy().has(n),la=n=>mf(Oi?rp[n.toUpperCase().replaceAll("-","_")]:ep.getItem(n)),ap=n=>Nc("--"+n)||la(n)!==null;ap("production");const Ky=Oi&&jy(rp.FORCE_COLOR,["true","1","2"]),$y=Ky||!Nc("--no-colors")&&!ap("no-color")&&(!Oi||process.stdout.isTTY)&&(!Oi||Nc("--color")||la("COLORTERM")!==null||(la("TERM")||"").includes("color")),lp=n=>new Uint8Array(n),Jy=(n,t,e)=>new Uint8Array(n,t,e),Qy=n=>new Uint8Array(n),tE=n=>{let t="";for(let e=0;e<n.byteLength;e++)t+=ay(n[e]);return btoa(t)},eE=n=>Buffer.from(n.buffer,n.byteOffset,n.byteLength).toString("base64"),nE=n=>{const t=atob(n),e=lp(t.length);for(let i=0;i<t.length;i++)e[i]=t.charCodeAt(i);return e},iE=n=>{const t=Buffer.from(n,"base64");return Jy(t.buffer,t.byteOffset,t.byteLength)},sE=op?tE:eE,rE=op?nE:iE,oE=n=>{const t=lp(n.byteLength);return t.set(n),t};class aE{constructor(t,e){this.left=t,this.right=e}}const jn=(n,t)=>new aE(n,t);typeof DOMParser<"u"&&new DOMParser;const lE=n=>QM(n,(t,e)=>`${e}:${t};`).join(""),hi=Symbol,cp=hi(),hp=hi(),cE=hi(),hE=hi(),uE=hi(),up=hi(),fE=hi(),Mh=hi(),dE=hi(),pE=n=>{var s;n.length===1&&((s=n[0])==null?void 0:s.constructor)===Function&&(n=n[0]());const t=[],e=[];let i=0;for(;i<n.length;i++){const r=n[i];if(r===void 0)break;if(r.constructor===String||r.constructor===Number)t.push(r);else if(r.constructor===Object)break}for(i>0&&e.push(t.join(""));i<n.length;i++){const r=n[i];r instanceof Symbol||e.push(r)}return e},mE={[cp]:jn("font-weight","bold"),[hp]:jn("font-weight","normal"),[cE]:jn("color","blue"),[uE]:jn("color","green"),[hE]:jn("color","grey"),[up]:jn("color","red"),[fE]:jn("color","purple"),[Mh]:jn("color","orange"),[dE]:jn("color","black")},gE=n=>{var o;n.length===1&&((o=n[0])==null?void 0:o.constructor)===Function&&(n=n[0]());const t=[],e=[],i=Qe();let s=[],r=0;for(;r<n.length;r++){const a=n[r],l=mE[a];if(l!==void 0)i.set(l.left,l.right);else{if(a===void 0)break;if(a.constructor===String||a.constructor===Number){const c=lE(i);r>0||c.length>0?(t.push("%c"+a),e.push(c)):t.push(a)}else break}}for(r>0&&(s=e,s.unshift(t.join("")));r<n.length;r++){const a=n[r];a instanceof Symbol||s.push(a)}return s},fp=$y?gE:pE,_E=(...n)=>{console.log(...fp(n)),pp.forEach(t=>t.print(n))},dp=(...n)=>{console.warn(...fp(n)),n.unshift(Mh),pp.forEach(t=>t.print(n))},pp=Ui(),mp=n=>({[Symbol.iterator](){return this},next:n}),vE=(n,t)=>mp(()=>{let e;do e=n.next();while(!e.done&&!t(e.value));return e}),Ll=(n,t)=>mp(()=>{const{done:e,value:i}=n.next();return{done:e,value:e?void 0:t(i)}});class yh{constructor(t,e){this.clock=t,this.len=e}}class cr{constructor(){this.clients=new Map}}const $s=(n,t,e)=>t.clients.forEach((i,s)=>{const r=n.doc.store.clients.get(s);for(let o=0;o<i.length;o++){const a=i[o];Ap(n,r,a.clock,a.len,e)}}),xE=(n,t)=>{let e=0,i=n.length-1;for(;e<=i;){const s=ai((e+i)/2),r=n[s],o=r.clock;if(o<=t){if(t<o+r.len)return s;e=s+1}else i=s-1}return null},Qr=(n,t)=>{const e=n.clients.get(t.client);return e!==void 0&&xE(e,t.clock)!==null},Eh=n=>{n.clients.forEach(t=>{t.sort((s,r)=>s.clock-r.clock);let e,i;for(e=1,i=1;e<t.length;e++){const s=t[i-1],r=t[e];s.clock+s.len>=r.clock?s.len=cs(s.len,r.clock+r.len-s.clock):(i<e&&(t[i]=r),i++)}t.length=i})},Fc=n=>{const t=new cr;for(let e=0;e<n.length;e++)n[e].clients.forEach((i,s)=>{if(!t.clients.has(s)){const r=i.slice();for(let o=e+1;o<n.length;o++)ey(r,n[o].clients.get(s)||[]);t.clients.set(s,r)}});return Eh(t),t},Ur=(n,t,e,i)=>{Hn(n.clients,t,()=>[]).push(new yh(e,i))},SE=()=>new cr,ME=n=>{const t=SE();return n.clients.forEach((e,i)=>{const s=[];for(let r=0;r<e.length;r++){const o=e[r];if(o.deleted){const a=o.id.clock;let l=o.length;if(r+1<e.length)for(let c=e[r+1];r+1<e.length&&c.deleted;c=e[++r+1])l+=c.length;s.push(new yh(a,l))}}s.length>0&&t.clients.set(i,s)}),t},hr=(n,t)=>{xt(n.restEncoder,t.clients.size),oi(t.clients.entries()).sort((e,i)=>i[0]-e[0]).forEach(([e,i])=>{n.resetDsCurVal(),xt(n.restEncoder,e);const s=i.length;xt(n.restEncoder,s);for(let r=0;r<s;r++){const o=i[r];n.writeDsClock(o.clock),n.writeDsLen(o.len)}})},wh=n=>{const t=new cr,e=Rt(n.restDecoder);for(let i=0;i<e;i++){n.resetDsCurVal();const s=Rt(n.restDecoder),r=Rt(n.restDecoder);if(r>0){const o=Hn(t.clients,s,()=>[]);for(let a=0;a<r;a++)o.push(new yh(n.readDsClock(),n.readDsLen()))}}return t},vf=(n,t,e)=>{const i=new cr,s=Rt(n.restDecoder);for(let r=0;r<s;r++){n.resetDsCurVal();const o=Rt(n.restDecoder),a=Rt(n.restDecoder),l=e.clients.get(o)||[],c=Ee(e,o);for(let h=0;h<a;h++){const f=n.readDsClock(),u=f+n.readDsLen();if(f<c){c<u&&Ur(i,o,c,u-c);let d=kn(l,f),m=l[d];for(!m.deleted&&m.id.clock<f&&(l.splice(d+1,0,ga(t,m,f-m.id.clock)),d++);d<l.length&&(m=l[d++],m.id.clock<u);)m.deleted||(u<m.id.clock+m.length&&l.splice(d,0,ga(t,m,u-m.id.clock)),m.delete(t))}else Ur(i,o,f,u-f)}}if(i.clients.size>0){const r=new rs;return xt(r.restEncoder,0),hr(r,i),r.toUint8Array()}return null},gp=Qd;class ur extends fh{constructor({guid:t=Ny(),collectionid:e=null,gc:i=!0,gcFilter:s=()=>!0,meta:r=null,autoLoad:o=!1,shouldLoad:a=!0}={}){super(),this.gc=i,this.gcFilter=s,this.clientID=gp(),this.guid=t,this.collectionid=e,this.share=new Map,this.store=new bp,this._transaction=null,this._transactionCleanups=[],this.subdocs=new Set,this._item=null,this.shouldLoad=a,this.autoLoad=o,this.meta=r,this.isLoaded=!1,this.isSynced=!1,this.isDestroyed=!1,this.whenLoaded=pf(c=>{this.on("load",()=>{this.isLoaded=!0,c(this)})});const l=()=>pf(c=>{const h=f=>{(f===void 0||f===!0)&&(this.off("sync",h),c())};this.on("sync",h)});this.on("sync",c=>{c===!1&&this.isSynced&&(this.whenSynced=l()),this.isSynced=c===void 0||c===!0,this.isSynced&&!this.isLoaded&&this.emit("load",[this])}),this.whenSynced=l()}load(){const t=this._item;t!==null&&!this.shouldLoad&&te(t.parent.doc,e=>{e.subdocsLoaded.add(this)},null,!0),this.shouldLoad=!0}getSubdocs(){return this.subdocs}getSubdocGuids(){return new Set(oi(this.subdocs).map(t=>t.guid))}transact(t,e=null){return te(this,t,e)}get(t,e=Ie){const i=Hn(this.share,t,()=>{const r=new e;return r._integrate(this,null),r}),s=i.constructor;if(e!==Ie&&s!==e)if(s===Ie){const r=new e;r._map=i._map,i._map.forEach(o=>{for(;o!==null;o=o.left)o.parent=r}),r._start=i._start;for(let o=r._start;o!==null;o=o.right)o.parent=r;return r._length=i._length,this.share.set(t,r),r._integrate(this,null),r}else throw new Error(`Type with the name ${t} has already been defined with a different constructor`);return i}getArray(t=""){return this.get(t,zs)}getText(t=""){return this.get(t,tr)}getMap(t=""){return this.get(t,Qs)}getXmlElement(t=""){return this.get(t,er)}getXmlFragment(t=""){return this.get(t,os)}toJSON(){const t={};return this.share.forEach((e,i)=>{t[i]=e.toJSON()}),t}destroy(){this.isDestroyed=!0,oi(this.subdocs).forEach(e=>e.destroy());const t=this._item;if(t!==null){this._item=null;const e=t.content;e.doc=new ur({guid:this.guid,...e.opts,shouldLoad:!1}),e.doc._item=t,te(t.parent.doc,i=>{const s=e.doc;t.deleted||i.subdocsAdded.add(s),i.subdocsRemoved.add(this)},null,!0)}this.emit("destroyed",[!0]),this.emit("destroy",[this]),super.destroy()}}class _p{constructor(t){this.restDecoder=t}resetDsCurVal(){}readDsClock(){return Rt(this.restDecoder)}readDsLen(){return Rt(this.restDecoder)}}class vp extends _p{readLeftID(){return Ft(Rt(this.restDecoder),Rt(this.restDecoder))}readRightID(){return Ft(Rt(this.restDecoder),Rt(this.restDecoder))}readClient(){return Rt(this.restDecoder)}readInfo(){return Ks(this.restDecoder)}readString(){return Ci(this.restDecoder)}readParentInfo(){return Rt(this.restDecoder)===1}readTypeRef(){return Rt(this.restDecoder)}readLen(){return Rt(this.restDecoder)}readAny(){return Ir(this.restDecoder)}readBuf(){return oE(Oe(this.restDecoder))}readJSON(){return JSON.parse(Ci(this.restDecoder))}readKey(){return Ci(this.restDecoder)}}class yE{constructor(t){this.dsCurrVal=0,this.restDecoder=t}resetDsCurVal(){this.dsCurrVal=0}readDsClock(){return this.dsCurrVal+=Rt(this.restDecoder),this.dsCurrVal}readDsLen(){const t=Rt(this.restDecoder)+1;return this.dsCurrVal+=t,t}}class Js extends yE{constructor(t){super(t),this.keys=[],Rt(t),this.keyClockDecoder=new Pl(Oe(t)),this.clientDecoder=new Xo(Oe(t)),this.leftClockDecoder=new Pl(Oe(t)),this.rightClockDecoder=new Pl(Oe(t)),this.infoDecoder=new df(Oe(t),Ks),this.stringDecoder=new Ly(Oe(t)),this.parentInfoDecoder=new df(Oe(t),Ks),this.typeRefDecoder=new Xo(Oe(t)),this.lenDecoder=new Xo(Oe(t))}readLeftID(){return new Bs(this.clientDecoder.read(),this.leftClockDecoder.read())}readRightID(){return new Bs(this.clientDecoder.read(),this.rightClockDecoder.read())}readClient(){return this.clientDecoder.read()}readInfo(){return this.infoDecoder.read()}readString(){return this.stringDecoder.read()}readParentInfo(){return this.parentInfoDecoder.read()===1}readTypeRef(){return this.typeRefDecoder.read()}readLen(){return this.lenDecoder.read()}readAny(){return Ir(this.restDecoder)}readBuf(){return Oe(this.restDecoder)}readJSON(){return Ir(this.restDecoder)}readKey(){const t=this.keyClockDecoder.read();if(t<this.keys.length)return this.keys[t];{const e=this.stringDecoder.read();return this.keys.push(e),e}}}class xp{constructor(){this.restEncoder=ke()}toUint8Array(){return he(this.restEncoder)}resetDsCurVal(){}writeDsClock(t){xt(this.restEncoder,t)}writeDsLen(t){xt(this.restEncoder,t)}}class to extends xp{writeLeftID(t){xt(this.restEncoder,t.client),xt(this.restEncoder,t.clock)}writeRightID(t){xt(this.restEncoder,t.client),xt(this.restEncoder,t.clock)}writeClient(t){xt(this.restEncoder,t)}writeInfo(t){Ic(this.restEncoder,t)}writeString(t){es(this.restEncoder,t)}writeParentInfo(t){xt(this.restEncoder,t?1:0)}writeTypeRef(t){xt(this.restEncoder,t)}writeLen(t){xt(this.restEncoder,t)}writeAny(t){Lr(this.restEncoder,t)}writeBuf(t){ge(this.restEncoder,t)}writeJSON(t){es(this.restEncoder,JSON.stringify(t))}writeKey(t){es(this.restEncoder,t)}}class Sp{constructor(){this.restEncoder=ke(),this.dsCurrVal=0}toUint8Array(){return he(this.restEncoder)}resetDsCurVal(){this.dsCurrVal=0}writeDsClock(t){const e=t-this.dsCurrVal;this.dsCurrVal=t,xt(this.restEncoder,e)}writeDsLen(t){t===0&&On(),xt(this.restEncoder,t-1),this.dsCurrVal+=t}}class rs extends Sp{constructor(){super(),this.keyMap=new Map,this.keyClock=0,this.keyClockEncoder=new Dl,this.clientEncoder=new Wo,this.leftClockEncoder=new Dl,this.rightClockEncoder=new Dl,this.infoEncoder=new hf(Ic),this.stringEncoder=new Ey,this.parentInfoEncoder=new hf(Ic),this.typeRefEncoder=new Wo,this.lenEncoder=new Wo}toUint8Array(){const t=ke();return xt(t,0),ge(t,this.keyClockEncoder.toUint8Array()),ge(t,this.clientEncoder.toUint8Array()),ge(t,this.leftClockEncoder.toUint8Array()),ge(t,this.rightClockEncoder.toUint8Array()),ge(t,he(this.infoEncoder)),ge(t,this.stringEncoder.toUint8Array()),ge(t,he(this.parentInfoEncoder)),ge(t,this.typeRefEncoder.toUint8Array()),ge(t,this.lenEncoder.toUint8Array()),Na(t,he(this.restEncoder)),he(t)}writeLeftID(t){this.clientEncoder.write(t.client),this.leftClockEncoder.write(t.clock)}writeRightID(t){this.clientEncoder.write(t.client),this.rightClockEncoder.write(t.clock)}writeClient(t){this.clientEncoder.write(t)}writeInfo(t){this.infoEncoder.write(t)}writeString(t){this.stringEncoder.write(t)}writeParentInfo(t){this.parentInfoEncoder.write(t?1:0)}writeTypeRef(t){this.typeRefEncoder.write(t)}writeLen(t){this.lenEncoder.write(t)}writeAny(t){Lr(this.restEncoder,t)}writeBuf(t){ge(this.restEncoder,t)}writeJSON(t){Lr(this.restEncoder,t)}writeKey(t){const e=this.keyMap.get(t);e===void 0?(this.keyClockEncoder.write(this.keyClock++),this.stringEncoder.write(t)):this.keyClockEncoder.write(e)}}const EE=(n,t,e,i)=>{i=cs(i,t[0].id.clock);const s=kn(t,i);xt(n.restEncoder,t.length-s),n.writeClient(e),xt(n.restEncoder,i);const r=t[s];r.write(n,i-r.id.clock);for(let o=s+1;o<t.length;o++)t[o].write(n,0)},bh=(n,t,e)=>{const i=new Map;e.forEach((s,r)=>{Ee(t,r)>s&&i.set(r,s)}),Oa(t).forEach((s,r)=>{e.has(r)||i.set(r,0)}),xt(n.restEncoder,i.size),oi(i.entries()).sort((s,r)=>r[0]-s[0]).forEach(([s,r])=>{EE(n,t.clients.get(s),s,r)})},wE=(n,t)=>{const e=Qe(),i=Rt(n.restDecoder);for(let s=0;s<i;s++){const r=Rt(n.restDecoder),o=new Array(r),a=n.readClient();let l=Rt(n.restDecoder);e.set(a,{i:0,refs:o});for(let c=0;c<r;c++){const h=n.readInfo();switch(Ua&h){case 0:{const f=n.readLen();o[c]=new gn(Ft(a,l),f),l+=f;break}case 10:{const f=Rt(n.restDecoder);o[c]=new _n(Ft(a,l),f),l+=f;break}default:{const f=(h&(ii|an))===0,u=new oe(Ft(a,l),null,(h&an)===an?n.readLeftID():null,null,(h&ii)===ii?n.readRightID():null,f?n.readParentInfo()?t.get(n.readString()):n.readLeftID():null,f&&(h&Dr)===Dr?n.readString():null,Yp(n,h));o[c]=u,l+=u.length}}}}return e},bE=(n,t,e)=>{const i=[];let s=oi(e.keys()).sort((d,m)=>d-m);if(s.length===0)return null;const r=()=>{if(s.length===0)return null;let d=e.get(s[s.length-1]);for(;d.refs.length===d.i;)if(s.pop(),s.length>0)d=e.get(s[s.length-1]);else return null;return d};let o=r();if(o===null)return null;const a=new bp,l=new Map,c=(d,m)=>{const _=l.get(d);(_==null||_>m)&&l.set(d,m)};let h=o.refs[o.i++];const f=new Map,u=()=>{for(const d of i){const m=d.id.client,_=e.get(m);_?(_.i--,a.clients.set(m,_.refs.slice(_.i)),e.delete(m),_.i=0,_.refs=[]):a.clients.set(m,[d]),s=s.filter(g=>g!==m)}i.length=0};for(;;){if(h.constructor!==_n){const m=Hn(f,h.id.client,()=>Ee(t,h.id.client))-h.id.clock;if(m<0)i.push(h),c(h.id.client,h.id.clock-1),u();else{const _=h.getMissing(n,t);if(_!==null){i.push(h);const g=e.get(_)||{refs:[],i:0};if(g.refs.length===g.i)c(_,Ee(t,_)),u();else{h=g.refs[g.i++];continue}}else(m===0||m<h.length)&&(h.integrate(n,m),f.set(h.id.client,h.id.clock+h.length))}}if(i.length>0)h=i.pop();else if(o!==null&&o.i<o.refs.length)h=o.refs[o.i++];else{if(o=r(),o===null)break;h=o.refs[o.i++]}}if(a.clients.size>0){const d=new rs;return bh(d,a,new Map),xt(d.restEncoder,0),{missing:l,update:d.toUint8Array()}}return null},TE=(n,t)=>bh(n,t.doc.store,t.beforeState),AE=(n,t,e,i=new Js(n))=>te(t,s=>{s.local=!1;let r=!1;const o=s.doc,a=o.store,l=wE(i,o),c=bE(s,a,l),h=a.pendingStructs;if(h){for(const[u,d]of h.missing)if(d<Ee(a,u)){r=!0;break}if(c){for(const[u,d]of c.missing){const m=h.missing.get(u);(m==null||m>d)&&h.missing.set(u,d)}h.update=ha([h.update,c.update])}}else a.pendingStructs=c;const f=vf(i,s,a);if(a.pendingDs){const u=new Js(ki(a.pendingDs));Rt(u.restDecoder);const d=vf(u,s,a);f&&d?a.pendingDs=ha([f,d]):a.pendingDs=f||d}else a.pendingDs=f;if(r){const u=a.pendingStructs.update;a.pendingStructs=null,Mp(s.doc,u)}},e,!1),Mp=(n,t,e,i=Js)=>{const s=ki(t);AE(s,n,e,new i(s))},CE=(n,t,e)=>Mp(n,t,e,vp),RE=(n,t,e=new Map)=>{bh(n,t.store,e),hr(n,ME(t.store))},DE=(n,t=new Uint8Array([0]),e=new rs)=>{const i=yp(t);RE(e,n,i);const s=[e.toUint8Array()];if(n.store.pendingDs&&s.push(n.store.pendingDs),n.store.pendingStructs&&s.push(jE(n.store.pendingStructs.update,t)),s.length>1){if(e.constructor===to)return qE(s.map((r,o)=>o===0?r:KE(r)));if(e.constructor===rs)return ha(s)}return s[0]},PE=(n,t)=>DE(n,t,new to),LE=n=>{const t=new Map,e=Rt(n.restDecoder);for(let i=0;i<e;i++){const s=Rt(n.restDecoder),r=Rt(n.restDecoder);t.set(s,r)}return t},yp=n=>LE(new _p(ki(n))),Ep=(n,t)=>(xt(n.restEncoder,t.size),oi(t.entries()).sort((e,i)=>i[0]-e[0]).forEach(([e,i])=>{xt(n.restEncoder,e),xt(n.restEncoder,i)}),n),IE=(n,t)=>Ep(n,Oa(t.store)),UE=(n,t=new Sp)=>(n instanceof Map?Ep(t,n):IE(t,n),t.toUint8Array()),NE=n=>UE(n,new xp);class FE{constructor(){this.l=[]}}const xf=()=>new FE,Sf=(n,t)=>n.l.push(t),Mf=(n,t)=>{const e=n.l,i=e.length;n.l=e.filter(s=>t!==s),i===n.l.length&&console.error("[yjs] Tried to remove event handler that doesn't exist.")},wp=(n,t,e)=>Sh(n.l,[t,e]);class Bs{constructor(t,e){this.client=t,this.clock=e}}const Lo=(n,t)=>n===t||n!==null&&t!==null&&n.client===t.client&&n.clock===t.clock,Ft=(n,t)=>new Bs(n,t),OE=n=>{for(const[t,e]of n.doc.share.entries())if(e===n)return t;throw On()},ca=(n,t)=>{for(;t!==null;){if(t.parent===n)return!0;t=t.parent._item}return!1},Rs=(n,t)=>t===void 0?!n.deleted:t.sv.has(n.id.client)&&(t.sv.get(n.id.client)||0)>n.id.clock&&!Qr(t.ds,n.id),Oc=(n,t)=>{const e=Hn(n.meta,Oc,Ui),i=n.doc.store;e.has(t)||(t.sv.forEach((s,r)=>{s<Ee(i,r)&&Ze(n,Ft(r,s))}),$s(n,t.ds,s=>{}),e.add(t))};class bp{constructor(){this.clients=new Map,this.pendingStructs=null,this.pendingDs=null}}const Oa=n=>{const t=new Map;return n.clients.forEach((e,i)=>{const s=e[e.length-1];t.set(i,s.id.clock+s.length)}),t},Ee=(n,t)=>{const e=n.clients.get(t);if(e===void 0)return 0;const i=e[e.length-1];return i.id.clock+i.length},Tp=(n,t)=>{let e=n.clients.get(t.id.client);if(e===void 0)e=[],n.clients.set(t.id.client,e);else{const i=e[e.length-1];if(i.id.clock+i.length!==t.id.clock)throw On()}e.push(t)},kn=(n,t)=>{let e=0,i=n.length-1,s=n[i],r=s.id.clock;if(r===t)return i;let o=ai(t/(r+s.length-1)*i);for(;e<=i;){if(s=n[o],r=s.id.clock,r<=t){if(t<r+s.length)return o;e=o+1}else i=o-1;o=ai((e+i)/2)}throw On()},kE=(n,t)=>{const e=n.clients.get(t.client);return e[kn(e,t.clock)]},qo=kE,kc=(n,t,e)=>{const i=kn(t,e),s=t[i];return s.id.clock<e&&s instanceof oe?(t.splice(i+1,0,ga(n,s,e-s.id.clock)),i+1):i},Ze=(n,t)=>{const e=n.doc.store.clients.get(t.client);return e[kc(n,e,t.clock)]},yf=(n,t,e)=>{const i=t.clients.get(e.client),s=kn(i,e.clock),r=i[s];return e.clock!==r.id.clock+r.length-1&&r.constructor!==gn&&i.splice(s+1,0,ga(n,r,e.clock-r.id.clock+1)),r},BE=(n,t,e)=>{const i=n.clients.get(t.id.client);i[kn(i,t.id.clock)]=e},Ap=(n,t,e,i,s)=>{if(i===0)return;const r=e+i;let o=kc(n,t,e),a;do a=t[o++],r<a.id.clock+a.length&&kc(n,t,r),s(a);while(o<t.length&&t[o].id.clock<r)};class zE{constructor(t,e,i){this.doc=t,this.deleteSet=new cr,this.beforeState=Oa(t.store),this.afterState=new Map,this.changed=new Map,this.changedParentTypes=new Map,this._mergeStructs=[],this.origin=e,this.meta=new Map,this.local=i,this.subdocsAdded=new Set,this.subdocsRemoved=new Set,this.subdocsLoaded=new Set,this._needFormattingCleanup=!1}}const Ef=(n,t)=>t.deleteSet.clients.size===0&&!ty(t.afterState,(e,i)=>t.beforeState.get(i)!==e)?!1:(Eh(t.deleteSet),TE(n,t),hr(n,t.deleteSet),!0),wf=(n,t,e)=>{const i=t._item;(i===null||i.id.clock<(n.beforeState.get(i.id.client)||0)&&!i.deleted)&&Hn(n.changed,t,Ui).add(e)},Yo=(n,t)=>{let e=n[t],i=n[t-1],s=t;for(;s>0;e=i,i=n[--s-1]){if(i.deleted===e.deleted&&i.constructor===e.constructor&&i.mergeWith(e)){e instanceof oe&&e.parentSub!==null&&e.parent._map.get(e.parentSub)===e&&e.parent._map.set(e.parentSub,i);continue}break}const r=t-s;return r&&n.splice(t+1-r,r),r},HE=(n,t,e)=>{for(const[i,s]of n.clients.entries()){const r=t.clients.get(i);for(let o=s.length-1;o>=0;o--){const a=s[o],l=a.clock+a.len;for(let c=kn(r,a.clock),h=r[c];c<r.length&&h.id.clock<l;h=r[++c]){const f=r[c];if(a.clock+a.len<=f.id.clock)break;f instanceof oe&&f.deleted&&!f.keep&&e(f)&&f.gc(t,!1)}}}},VE=(n,t)=>{n.clients.forEach((e,i)=>{const s=t.clients.get(i);for(let r=e.length-1;r>=0;r--){const o=e[r],a=dh(s.length-1,1+kn(s,o.clock+o.len-1));for(let l=a,c=s[l];l>0&&c.id.clock>=o.clock;c=s[l])l-=1+Yo(s,l)}})},Cp=(n,t)=>{if(t<n.length){const e=n[t],i=e.doc,s=i.store,r=e.deleteSet,o=e._mergeStructs;try{Eh(r),e.afterState=Oa(e.doc.store),i.emit("beforeObserverCalls",[e,i]);const a=[];e.changed.forEach((l,c)=>a.push(()=>{(c._item===null||!c._item.deleted)&&c._callObserver(e,l)})),a.push(()=>{e.changedParentTypes.forEach((l,c)=>{c._dEH.l.length>0&&(c._item===null||!c._item.deleted)&&(l=l.filter(h=>h.target._item===null||!h.target._item.deleted),l.forEach(h=>{h.currentTarget=c,h._path=null}),l.sort((h,f)=>h.path.length-f.path.length),wp(c._dEH,l,e))})}),a.push(()=>i.emit("afterTransaction",[e,i])),Sh(a,[]),e._needFormattingCleanup&&hw(e)}finally{i.gc&&HE(r,s,i.gcFilter),VE(r,s),e.afterState.forEach((h,f)=>{const u=e.beforeState.get(f)||0;if(u!==h){const d=s.clients.get(f),m=cs(kn(d,u),1);for(let _=d.length-1;_>=m;)_-=1+Yo(d,_)}});for(let h=o.length-1;h>=0;h--){const{client:f,clock:u}=o[h].id,d=s.clients.get(f),m=kn(d,u);m+1<d.length&&Yo(d,m+1)>1||m>0&&Yo(d,m)}if(!e.local&&e.afterState.get(i.clientID)!==e.beforeState.get(i.clientID)&&(_E(Mh,cp,"[yjs] ",hp,up,"Changed the client-id because another client seems to be using it."),i.clientID=gp()),i.emit("afterTransactionCleanup",[e,i]),i._observers.has("update")){const h=new to;Ef(h,e)&&i.emit("update",[h.toUint8Array(),e.origin,i,e])}if(i._observers.has("updateV2")){const h=new rs;Ef(h,e)&&i.emit("updateV2",[h.toUint8Array(),e.origin,i,e])}const{subdocsAdded:a,subdocsLoaded:l,subdocsRemoved:c}=e;(a.size>0||c.size>0||l.size>0)&&(a.forEach(h=>{h.clientID=i.clientID,h.collectionid==null&&(h.collectionid=i.collectionid),i.subdocs.add(h)}),c.forEach(h=>i.subdocs.delete(h)),i.emit("subdocs",[{loaded:l,added:a,removed:c},i,e]),c.forEach(h=>h.destroy())),n.length<=t+1?(i._transactionCleanups=[],i.emit("afterAllTransactions",[i,n])):Cp(n,t+1)}}},te=(n,t,e=null,i=!0)=>{const s=n._transactionCleanups;let r=!1,o=null;n._transaction===null&&(r=!0,n._transaction=new zE(n,e,i),s.push(n._transaction),s.length===1&&n.emit("beforeAllTransactions",[n]),n.emit("beforeTransaction",[n._transaction,n]));try{o=t(n._transaction)}finally{if(r){const a=n._transaction===s[0];n._transaction=null,a&&Cp(s,0)}}return o};class GE{constructor(t,e){this.insertions=e,this.deletions=t,this.meta=new Map}}const bf=(n,t,e)=>{$s(n,e.deletions,i=>{i instanceof oe&&t.scope.some(s=>ca(s,i))&&Ih(i,!1)})},Tf=(n,t,e)=>{let i=null;const s=n.doc,r=n.scope;te(s,a=>{for(;t.length>0&&n.currStackItem===null;){const l=s.store,c=t.pop(),h=new Set,f=[];let u=!1;$s(a,c.insertions,d=>{if(d instanceof oe){if(d.redone!==null){let{item:m,diff:_}=Ow(l,d.id);_>0&&(m=Ze(a,Ft(m.id.client,m.id.clock+_))),d=m}!d.deleted&&r.some(m=>ca(m,d))&&f.push(d)}}),$s(a,c.deletions,d=>{d instanceof oe&&r.some(m=>ca(m,d))&&!Qr(c.insertions,d.id)&&h.add(d)}),h.forEach(d=>{u=qp(a,d,h,c.insertions,n.ignoreRemoteMapChanges,n)!==null||u});for(let d=f.length-1;d>=0;d--){const m=f[d];n.deleteFilter(m)&&(m.delete(a),u=!0)}n.currStackItem=u?c:null}a.changed.forEach((l,c)=>{l.has(null)&&c._searchMarker&&(c._searchMarker.length=0)}),i=a},n);const o=n.currStackItem;if(o!=null){const a=i.changedParentTypes;n.emit("stack-item-popped",[{stackItem:o,type:e,changedParentTypes:a,origin:n},n]),n.currStackItem=null}return o};class WE extends fh{constructor(t,{captureTimeout:e=500,captureTransaction:i=l=>!0,deleteFilter:s=()=>!0,trackedOrigins:r=new Set([null]),ignoreRemoteMapChanges:o=!1,doc:a=Pc(t)?t[0].doc:t.doc}={}){super(),this.scope=[],this.doc=a,this.addToScope(t),this.deleteFilter=s,r.add(this),this.trackedOrigins=r,this.captureTransaction=i,this.undoStack=[],this.redoStack=[],this.undoing=!1,this.redoing=!1,this.currStackItem=null,this.lastChange=0,this.ignoreRemoteMapChanges=o,this.captureTimeout=e,this.afterTransactionHandler=l=>{if(!this.captureTransaction(l)||!this.scope.some(g=>l.changedParentTypes.has(g))||!this.trackedOrigins.has(l.origin)&&(!l.origin||!this.trackedOrigins.has(l.origin.constructor)))return;const c=this.undoing,h=this.redoing,f=c?this.redoStack:this.undoStack;c?this.stopCapturing():h||this.clear(!1,!0);const u=new cr;l.afterState.forEach((g,p)=>{const b=l.beforeState.get(p)||0,w=g-b;w>0&&Ur(u,p,b,w)});const d=Fi();let m=!1;if(this.lastChange>0&&d-this.lastChange<this.captureTimeout&&f.length>0&&!c&&!h){const g=f[f.length-1];g.deletions=Fc([g.deletions,l.deleteSet]),g.insertions=Fc([g.insertions,u])}else f.push(new GE(l.deleteSet,u)),m=!0;!c&&!h&&(this.lastChange=d),$s(l,l.deleteSet,g=>{g instanceof oe&&this.scope.some(p=>ca(p,g))&&Ih(g,!0)});const _=[{stackItem:f[f.length-1],origin:l.origin,type:c?"redo":"undo",changedParentTypes:l.changedParentTypes},this];m?this.emit("stack-item-added",_):this.emit("stack-item-updated",_)},this.doc.on("afterTransaction",this.afterTransactionHandler),this.doc.on("destroy",()=>{this.destroy()})}addToScope(t){t=Pc(t)?t:[t],t.forEach(e=>{this.scope.every(i=>i!==e)&&(e.doc!==this.doc&&dp("[yjs#509] Not same Y.Doc"),this.scope.push(e))})}addTrackedOrigin(t){this.trackedOrigins.add(t)}removeTrackedOrigin(t){this.trackedOrigins.delete(t)}clear(t=!0,e=!0){(t&&this.canUndo()||e&&this.canRedo())&&this.doc.transact(i=>{t&&(this.undoStack.forEach(s=>bf(i,this,s)),this.undoStack=[]),e&&(this.redoStack.forEach(s=>bf(i,this,s)),this.redoStack=[]),this.emit("stack-cleared",[{undoStackCleared:t,redoStackCleared:e}])})}stopCapturing(){this.lastChange=0}undo(){this.undoing=!0;let t;try{t=Tf(this,this.undoStack,"undo")}finally{this.undoing=!1}return t}redo(){this.redoing=!0;let t;try{t=Tf(this,this.redoStack,"redo")}finally{this.redoing=!1}return t}canUndo(){return this.undoStack.length>0}canRedo(){return this.redoStack.length>0}destroy(){this.trackedOrigins.delete(this),this.doc.off("afterTransaction",this.afterTransactionHandler),super.destroy()}}function*XE(n){const t=Rt(n.restDecoder);for(let e=0;e<t;e++){const i=Rt(n.restDecoder),s=n.readClient();let r=Rt(n.restDecoder);for(let o=0;o<i;o++){const a=n.readInfo();if(a===10){const l=Rt(n.restDecoder);yield new _n(Ft(s,r),l),r+=l}else if(Ua&a){const l=(a&(ii|an))===0,c=new oe(Ft(s,r),null,(a&an)===an?n.readLeftID():null,null,(a&ii)===ii?n.readRightID():null,l?n.readParentInfo()?n.readString():n.readLeftID():null,l&&(a&Dr)===Dr?n.readString():null,Yp(n,a));yield c,r+=c.length}else{const l=n.readLen();yield new gn(Ft(s,r),l),r+=l}}}}class Th{constructor(t,e){this.gen=XE(t),this.curr=null,this.done=!1,this.filterSkips=e,this.next()}next(){do this.curr=this.gen.next().value||null;while(this.filterSkips&&this.curr!==null&&this.curr.constructor===_n);return this.curr}}class Ah{constructor(t){this.currClient=0,this.startClock=0,this.written=0,this.encoder=t,this.clientStructs=[]}}const qE=n=>ha(n,vp,to),YE=(n,t)=>{if(n.constructor===gn){const{client:e,clock:i}=n.id;return new gn(Ft(e,i+t),n.length-t)}else if(n.constructor===_n){const{client:e,clock:i}=n.id;return new _n(Ft(e,i+t),n.length-t)}else{const e=n,{client:i,clock:s}=e.id;return new oe(Ft(i,s+t),null,Ft(i,s+t-1),null,e.rightOrigin,e.parent,e.parentSub,e.content.splice(t))}},ha=(n,t=Js,e=rs)=>{if(n.length===1)return n[0];const i=n.map(h=>new t(ki(h)));let s=i.map(h=>new Th(h,!0)),r=null;const o=new e,a=new Ah(o);for(;s=s.filter(u=>u.curr!==null),s.sort((u,d)=>{if(u.curr.id.client===d.curr.id.client){const m=u.curr.id.clock-d.curr.id.clock;return m===0?u.curr.constructor===d.curr.constructor?0:u.curr.constructor===_n?1:-1:m}else return d.curr.id.client-u.curr.id.client}),s.length!==0;){const h=s[0],f=h.curr.id.client;if(r!==null){let u=h.curr,d=!1;for(;u!==null&&u.id.clock+u.length<=r.struct.id.clock+r.struct.length&&u.id.client>=r.struct.id.client;)u=h.next(),d=!0;if(u===null||u.id.client!==f||d&&u.id.clock>r.struct.id.clock+r.struct.length)continue;if(f!==r.struct.id.client)Si(a,r.struct,r.offset),r={struct:u,offset:0},h.next();else if(r.struct.id.clock+r.struct.length<u.id.clock)if(r.struct.constructor===_n)r.struct.length=u.id.clock+u.length-r.struct.id.clock;else{Si(a,r.struct,r.offset);const m=u.id.clock-r.struct.id.clock-r.struct.length;r={struct:new _n(Ft(f,r.struct.id.clock+r.struct.length),m),offset:0}}else{const m=r.struct.id.clock+r.struct.length-u.id.clock;m>0&&(r.struct.constructor===_n?r.struct.length-=m:u=YE(u,m)),r.struct.mergeWith(u)||(Si(a,r.struct,r.offset),r={struct:u,offset:0},h.next())}}else r={struct:h.curr,offset:0},h.next();for(let u=h.curr;u!==null&&u.id.client===f&&u.id.clock===r.struct.id.clock+r.struct.length&&u.constructor!==_n;u=h.next())Si(a,r.struct,r.offset),r={struct:u,offset:0}}r!==null&&(Si(a,r.struct,r.offset),r=null),Ch(a);const l=i.map(h=>wh(h)),c=Fc(l);return hr(o,c),o.toUint8Array()},jE=(n,t,e=Js,i=rs)=>{const s=yp(t),r=new i,o=new Ah(r),a=new e(ki(n)),l=new Th(a,!1);for(;l.curr;){const h=l.curr,f=h.id.client,u=s.get(f)||0;if(l.curr.constructor===_n){l.next();continue}if(h.id.clock+h.length>u)for(Si(o,h,cs(u-h.id.clock,0)),l.next();l.curr&&l.curr.id.client===f;)Si(o,l.curr,0),l.next();else for(;l.curr&&l.curr.id.client===f&&l.curr.id.clock+l.curr.length<=u;)l.next()}Ch(o);const c=wh(a);return hr(r,c),r.toUint8Array()},Rp=n=>{n.written>0&&(n.clientStructs.push({written:n.written,restEncoder:he(n.encoder.restEncoder)}),n.encoder.restEncoder=ke(),n.written=0)},Si=(n,t,e)=>{n.written>0&&n.currClient!==t.id.client&&Rp(n),n.written===0&&(n.currClient=t.id.client,n.encoder.writeClient(t.id.client),xt(n.encoder.restEncoder,t.id.clock+e)),t.write(n.encoder,e),n.written++},Ch=n=>{Rp(n);const t=n.encoder.restEncoder;xt(t,n.clientStructs.length);for(let e=0;e<n.clientStructs.length;e++){const i=n.clientStructs[e];xt(t,i.written),Na(t,i.restEncoder)}},ZE=(n,t,e,i)=>{const s=new e(ki(n)),r=new Th(s,!1),o=new i,a=new Ah(o);for(let c=r.curr;c!==null;c=r.next())Si(a,t(c),0);Ch(a);const l=wh(s);return hr(o,l),o.toUint8Array()},KE=n=>ZE(n,qy,Js,to),Af="You must not compute changes after the event-handler fired.";class ka{constructor(t,e){this.target=t,this.currentTarget=t,this.transaction=e,this._changes=null,this._keys=null,this._delta=null,this._path=null}get path(){return this._path||(this._path=$E(this.currentTarget,this.target))}deletes(t){return Qr(this.transaction.deleteSet,t.id)}get keys(){if(this._keys===null){if(this.transaction.doc._transactionCleanups.length===0)throw Ni(Af);const t=new Map,e=this.target;this.transaction.changed.get(e).forEach(s=>{if(s!==null){const r=e._map.get(s);let o,a;if(this.adds(r)){let l=r.left;for(;l!==null&&this.adds(l);)l=l.left;if(this.deletes(r))if(l!==null&&this.deletes(l))o="delete",a=Al(l.content.getContent());else return;else l!==null&&this.deletes(l)?(o="update",a=Al(l.content.getContent())):(o="add",a=void 0)}else if(this.deletes(r))o="delete",a=Al(r.content.getContent());else return;t.set(s,{action:o,oldValue:a})}}),this._keys=t}return this._keys}get delta(){return this.changes.delta}adds(t){return t.id.clock>=(this.transaction.beforeState.get(t.id.client)||0)}get changes(){let t=this._changes;if(t===null){if(this.transaction.doc._transactionCleanups.length===0)throw Ni(Af);const e=this.target,i=Ui(),s=Ui(),r=[];if(t={added:i,deleted:s,delta:r,keys:this.keys},this.transaction.changed.get(e).has(null)){let a=null;const l=()=>{a&&r.push(a)};for(let c=e._start;c!==null;c=c.right)c.deleted?this.deletes(c)&&!this.adds(c)&&((a===null||a.delete===void 0)&&(l(),a={delete:0}),a.delete+=c.length,s.add(c)):this.adds(c)?((a===null||a.insert===void 0)&&(l(),a={insert:[]}),a.insert=a.insert.concat(c.content.getContent()),i.add(c)):((a===null||a.retain===void 0)&&(l(),a={retain:0}),a.retain+=c.length);a!==null&&a.retain===void 0&&l()}this._changes=t}return t}}const $E=(n,t)=>{const e=[];for(;t._item!==null&&t!==n;){if(t._item.parentSub!==null)e.unshift(t._item.parentSub);else{let i=0,s=t._item.parent._start;for(;s!==t._item&&s!==null;)!s.deleted&&s.countable&&(i+=s.length),s=s.right;e.unshift(i)}t=t._item.parent}return e},Be=()=>{dp("Invalid access: Add Yjs type to a document before reading data.")},Dp=80;let Rh=0;class JE{constructor(t,e){t.marker=!0,this.p=t,this.index=e,this.timestamp=Rh++}}const QE=n=>{n.timestamp=Rh++},Pp=(n,t,e)=>{n.p.marker=!1,n.p=t,t.marker=!0,n.index=e,n.timestamp=Rh++},tw=(n,t,e)=>{if(n.length>=Dp){const i=n.reduce((s,r)=>s.timestamp<r.timestamp?s:r);return Pp(i,t,e),i}else{const i=new JE(t,e);return n.push(i),i}},Ba=(n,t)=>{if(n._start===null||t===0||n._searchMarker===null)return null;const e=n._searchMarker.length===0?null:n._searchMarker.reduce((r,o)=>Go(t-r.index)<Go(t-o.index)?r:o);let i=n._start,s=0;for(e!==null&&(i=e.p,s=e.index,QE(e));i.right!==null&&s<t;){if(!i.deleted&&i.countable){if(t<s+i.length)break;s+=i.length}i=i.right}for(;i.left!==null&&s>t;)i=i.left,!i.deleted&&i.countable&&(s-=i.length);for(;i.left!==null&&i.left.id.client===i.id.client&&i.left.id.clock+i.left.length===i.id.clock;)i=i.left,!i.deleted&&i.countable&&(s-=i.length);return e!==null&&Go(e.index-s)<i.parent.length/Dp?(Pp(e,i,s),e):tw(n._searchMarker,i,s)},Nr=(n,t,e)=>{for(let i=n.length-1;i>=0;i--){const s=n[i];if(e>0){let r=s.p;for(r.marker=!1;r&&(r.deleted||!r.countable);)r=r.left,r&&!r.deleted&&r.countable&&(s.index-=r.length);if(r===null||r.marker===!0){n.splice(i,1);continue}s.p=r,r.marker=!0}(t<s.index||e>0&&t===s.index)&&(s.index=cs(t,s.index+e))}},za=(n,t,e)=>{const i=n,s=t.changedParentTypes;for(;Hn(s,n,()=>[]).push(e),n._item!==null;)n=n._item.parent;wp(i._eH,e,t)};class Ie{constructor(){this._item=null,this._map=new Map,this._start=null,this.doc=null,this._length=0,this._eH=xf(),this._dEH=xf(),this._searchMarker=null}get parent(){return this._item?this._item.parent:null}_integrate(t,e){this.doc=t,this._item=e}_copy(){throw Nn()}clone(){throw Nn()}_write(t){}get _first(){let t=this._start;for(;t!==null&&t.deleted;)t=t.right;return t}_callObserver(t,e){!t.local&&this._searchMarker&&(this._searchMarker.length=0)}observe(t){Sf(this._eH,t)}observeDeep(t){Sf(this._dEH,t)}unobserve(t){Mf(this._eH,t)}unobserveDeep(t){Mf(this._dEH,t)}toJSON(){}}const Lp=(n,t,e)=>{n.doc??Be(),t<0&&(t=n._length+t),e<0&&(e=n._length+e);let i=e-t;const s=[];let r=n._start;for(;r!==null&&i>0;){if(r.countable&&!r.deleted){const o=r.content.getContent();if(o.length<=t)t-=o.length;else{for(let a=t;a<o.length&&i>0;a++)s.push(o[a]),i--;t=0}}r=r.right}return s},Ip=n=>{n.doc??Be();const t=[];let e=n._start;for(;e!==null;){if(e.countable&&!e.deleted){const i=e.content.getContent();for(let s=0;s<i.length;s++)t.push(i[s])}e=e.right}return t},Fr=(n,t)=>{let e=0,i=n._start;for(n.doc??Be();i!==null;){if(i.countable&&!i.deleted){const s=i.content.getContent();for(let r=0;r<s.length;r++)t(s[r],e++,n)}i=i.right}},Up=(n,t)=>{const e=[];return Fr(n,(i,s)=>{e.push(t(i,s,n))}),e},ew=n=>{let t=n._start,e=null,i=0;return{[Symbol.iterator](){return this},next:()=>{if(e===null){for(;t!==null&&t.deleted;)t=t.right;if(t===null)return{done:!0,value:void 0};e=t.content.getContent(),i=0,t=t.right}const s=e[i++];return e.length<=i&&(e=null),{done:!1,value:s}}}},Np=(n,t)=>{n.doc??Be();const e=Ba(n,t);let i=n._start;for(e!==null&&(i=e.p,t-=e.index);i!==null;i=i.right)if(!i.deleted&&i.countable){if(t<i.length)return i.content.getContent()[t];t-=i.length}},ua=(n,t,e,i)=>{let s=e;const r=n.doc,o=r.clientID,a=r.store,l=e===null?t._start:e.right;let c=[];const h=()=>{c.length>0&&(s=new oe(Ft(o,Ee(a,o)),s,s&&s.lastId,l,l&&l.id,t,null,new as(c)),s.integrate(n,0),c=[])};i.forEach(f=>{if(f===null)c.push(f);else switch(f.constructor){case Number:case Object:case Boolean:case Array:case String:c.push(f);break;default:switch(h(),f.constructor){case Uint8Array:case ArrayBuffer:s=new oe(Ft(o,Ee(a,o)),s,s&&s.lastId,l,l&&l.id,t,null,new eo(new Uint8Array(f))),s.integrate(n,0);break;case ur:s=new oe(Ft(o,Ee(a,o)),s,s&&s.lastId,l,l&&l.id,t,null,new no(f)),s.integrate(n,0);break;default:if(f instanceof Ie)s=new oe(Ft(o,Ee(a,o)),s,s&&s.lastId,l,l&&l.id,t,null,new ui(f)),s.integrate(n,0);else throw new Error("Unexpected content type in insert operation")}}}),h()},Fp=()=>Ni("Length exceeded!"),Op=(n,t,e,i)=>{if(e>t._length)throw Fp();if(e===0)return t._searchMarker&&Nr(t._searchMarker,e,i.length),ua(n,t,null,i);const s=e,r=Ba(t,e);let o=t._start;for(r!==null&&(o=r.p,e-=r.index,e===0&&(o=o.prev,e+=o&&o.countable&&!o.deleted?o.length:0));o!==null;o=o.right)if(!o.deleted&&o.countable){if(e<=o.length){e<o.length&&Ze(n,Ft(o.id.client,o.id.clock+e));break}e-=o.length}return t._searchMarker&&Nr(t._searchMarker,s,i.length),ua(n,t,o,i)},nw=(n,t,e)=>{let s=(t._searchMarker||[]).reduce((r,o)=>o.index>r.index?o:r,{index:0,p:t._start}).p;if(s)for(;s.right;)s=s.right;return ua(n,t,s,e)},kp=(n,t,e,i)=>{if(i===0)return;const s=e,r=i,o=Ba(t,e);let a=t._start;for(o!==null&&(a=o.p,e-=o.index);a!==null&&e>0;a=a.right)!a.deleted&&a.countable&&(e<a.length&&Ze(n,Ft(a.id.client,a.id.clock+e)),e-=a.length);for(;i>0&&a!==null;)a.deleted||(i<a.length&&Ze(n,Ft(a.id.client,a.id.clock+i)),a.delete(n),i-=a.length),a=a.right;if(i>0)throw Fp();t._searchMarker&&Nr(t._searchMarker,s,-r+i)},fa=(n,t,e)=>{const i=t._map.get(e);i!==void 0&&i.delete(n)},Dh=(n,t,e,i)=>{const s=t._map.get(e)||null,r=n.doc,o=r.clientID;let a;if(i==null)a=new as([i]);else switch(i.constructor){case Number:case Object:case Boolean:case Array:case String:a=new as([i]);break;case Uint8Array:a=new eo(i);break;case ur:a=new no(i);break;default:if(i instanceof Ie)a=new ui(i);else throw new Error("Unexpected content type")}new oe(Ft(o,Ee(r.store,o)),s,s&&s.lastId,null,null,t,e,a).integrate(n,0)},Ph=(n,t)=>{n.doc??Be();const e=n._map.get(t);return e!==void 0&&!e.deleted?e.content.getContent()[e.length-1]:void 0},Bp=n=>{const t={};return n.doc??Be(),n._map.forEach((e,i)=>{e.deleted||(t[i]=e.content.getContent()[e.length-1])}),t},zp=(n,t)=>{n.doc??Be();const e=n._map.get(t);return e!==void 0&&!e.deleted},iw=(n,t)=>{const e={};return n._map.forEach((i,s)=>{let r=i;for(;r!==null&&(!t.sv.has(r.id.client)||r.id.clock>=(t.sv.get(r.id.client)||0));)r=r.left;r!==null&&Rs(r,t)&&(e[s]=r.content.getContent()[r.length-1])}),e},Io=n=>(n.doc??Be(),vE(n._map.entries(),t=>!t[1].deleted));class sw extends ka{}class zs extends Ie{constructor(){super(),this._prelimContent=[],this._searchMarker=[]}static from(t){const e=new zs;return e.push(t),e}_integrate(t,e){super._integrate(t,e),this.insert(0,this._prelimContent),this._prelimContent=null}_copy(){return new zs}clone(){const t=new zs;return t.insert(0,this.toArray().map(e=>e instanceof Ie?e.clone():e)),t}get length(){return this.doc??Be(),this._length}_callObserver(t,e){super._callObserver(t,e),za(this,t,new sw(this,t))}insert(t,e){this.doc!==null?te(this.doc,i=>{Op(i,this,t,e)}):this._prelimContent.splice(t,0,...e)}push(t){this.doc!==null?te(this.doc,e=>{nw(e,this,t)}):this._prelimContent.push(...t)}unshift(t){this.insert(0,t)}delete(t,e=1){this.doc!==null?te(this.doc,i=>{kp(i,this,t,e)}):this._prelimContent.splice(t,e)}get(t){return Np(this,t)}toArray(){return Ip(this)}slice(t=0,e=this.length){return Lp(this,t,e)}toJSON(){return this.map(t=>t instanceof Ie?t.toJSON():t)}map(t){return Up(this,t)}forEach(t){Fr(this,t)}[Symbol.iterator](){return ew(this)}_write(t){t.writeTypeRef(Rw)}}const rw=n=>new zs;class ow extends ka{constructor(t,e,i){super(t,e),this.keysChanged=i}}class Qs extends Ie{constructor(t){super(),this._prelimContent=null,t===void 0?this._prelimContent=new Map:this._prelimContent=new Map(t)}_integrate(t,e){super._integrate(t,e),this._prelimContent.forEach((i,s)=>{this.set(s,i)}),this._prelimContent=null}_copy(){return new Qs}clone(){const t=new Qs;return this.forEach((e,i)=>{t.set(i,e instanceof Ie?e.clone():e)}),t}_callObserver(t,e){za(this,t,new ow(this,t,e))}toJSON(){this.doc??Be();const t={};return this._map.forEach((e,i)=>{if(!e.deleted){const s=e.content.getContent()[e.length-1];t[i]=s instanceof Ie?s.toJSON():s}}),t}get size(){return[...Io(this)].length}keys(){return Ll(Io(this),t=>t[0])}values(){return Ll(Io(this),t=>t[1].content.getContent()[t[1].length-1])}entries(){return Ll(Io(this),t=>[t[0],t[1].content.getContent()[t[1].length-1]])}forEach(t){this.doc??Be(),this._map.forEach((e,i)=>{e.deleted||t(e.content.getContent()[e.length-1],i,this)})}[Symbol.iterator](){return this.entries()}delete(t){this.doc!==null?te(this.doc,e=>{fa(e,this,t)}):this._prelimContent.delete(t)}set(t,e){return this.doc!==null?te(this.doc,i=>{Dh(i,this,t,e)}):this._prelimContent.set(t,e),e}get(t){return Ph(this,t)}has(t){return zp(this,t)}clear(){this.doc!==null?te(this.doc,t=>{this.forEach(function(e,i,s){fa(t,s,i)})}):this._prelimContent.clear()}_write(t){t.writeTypeRef(Dw)}}const aw=n=>new Qs,Ei=(n,t)=>n===t||typeof n=="object"&&typeof t=="object"&&n&&t&&Wy(n,t);class Bc{constructor(t,e,i,s){this.left=t,this.right=e,this.index=i,this.currentAttributes=s}forward(){switch(this.right===null&&On(),this.right.content.constructor){case Te:this.right.deleted||fr(this.currentAttributes,this.right.content);break;default:this.right.deleted||(this.index+=this.right.length);break}this.left=this.right,this.right=this.right.right}}const Cf=(n,t,e)=>{for(;t.right!==null&&e>0;){switch(t.right.content.constructor){case Te:t.right.deleted||fr(t.currentAttributes,t.right.content);break;default:t.right.deleted||(e<t.right.length&&Ze(n,Ft(t.right.id.client,t.right.id.clock+e)),t.index+=t.right.length,e-=t.right.length);break}t.left=t.right,t.right=t.right.right}return t},Uo=(n,t,e,i)=>{const s=new Map,r=i?Ba(t,e):null;if(r){const o=new Bc(r.p.left,r.p,r.index,s);return Cf(n,o,e-r.index)}else{const o=new Bc(null,t._start,0,s);return Cf(n,o,e)}},Hp=(n,t,e,i)=>{for(;e.right!==null&&(e.right.deleted===!0||e.right.content.constructor===Te&&Ei(i.get(e.right.content.key),e.right.content.value));)e.right.deleted||i.delete(e.right.content.key),e.forward();const s=n.doc,r=s.clientID;i.forEach((o,a)=>{const l=e.left,c=e.right,h=new oe(Ft(r,Ee(s.store,r)),l,l&&l.lastId,c,c&&c.id,t,null,new Te(a,o));h.integrate(n,0),e.right=h,e.forward()})},fr=(n,t)=>{const{key:e,value:i}=t;i===null?n.delete(e):n.set(e,i)},Vp=(n,t)=>{for(;n.right!==null;){if(!(n.right.deleted||n.right.content.constructor===Te&&Ei(t[n.right.content.key]??null,n.right.content.value)))break;n.forward()}},Gp=(n,t,e,i)=>{const s=n.doc,r=s.clientID,o=new Map;for(const a in i){const l=i[a],c=e.currentAttributes.get(a)??null;if(!Ei(c,l)){o.set(a,c);const{left:h,right:f}=e;e.right=new oe(Ft(r,Ee(s.store,r)),h,h&&h.lastId,f,f&&f.id,t,null,new Te(a,l)),e.right.integrate(n,0),e.forward()}}return o},Il=(n,t,e,i,s)=>{e.currentAttributes.forEach((u,d)=>{s[d]===void 0&&(s[d]=null)});const r=n.doc,o=r.clientID;Vp(e,s);const a=Gp(n,t,e,s),l=i.constructor===String?new Bn(i):i instanceof Ie?new ui(i):new hs(i);let{left:c,right:h,index:f}=e;t._searchMarker&&Nr(t._searchMarker,e.index,l.getLength()),h=new oe(Ft(o,Ee(r.store,o)),c,c&&c.lastId,h,h&&h.id,t,null,l),h.integrate(n,0),e.right=h,e.index=f,e.forward(),Hp(n,t,e,a)},Rf=(n,t,e,i,s)=>{const r=n.doc,o=r.clientID;Vp(e,s);const a=Gp(n,t,e,s);t:for(;e.right!==null&&(i>0||a.size>0&&(e.right.deleted||e.right.content.constructor===Te));){if(!e.right.deleted)switch(e.right.content.constructor){case Te:{const{key:l,value:c}=e.right.content,h=s[l];if(h!==void 0){if(Ei(h,c))a.delete(l);else{if(i===0)break t;a.set(l,c)}e.right.delete(n)}else e.currentAttributes.set(l,c);break}default:i<e.right.length&&Ze(n,Ft(e.right.id.client,e.right.id.clock+i)),i-=e.right.length;break}e.forward()}if(i>0){let l="";for(;i>0;i--)l+=`
`;e.right=new oe(Ft(o,Ee(r.store,o)),e.left,e.left&&e.left.lastId,e.right,e.right&&e.right.id,t,null,new Bn(l)),e.right.integrate(n,0),e.forward()}Hp(n,t,e,a)},Wp=(n,t,e,i,s)=>{let r=t;const o=Qe();for(;r&&(!r.countable||r.deleted);){if(!r.deleted&&r.content.constructor===Te){const c=r.content;o.set(c.key,c)}r=r.right}let a=0,l=!1;for(;t!==r;){if(e===t&&(l=!0),!t.deleted){const c=t.content;switch(c.constructor){case Te:{const{key:h,value:f}=c,u=i.get(h)??null;(o.get(h)!==c||u===f)&&(t.delete(n),a++,!l&&(s.get(h)??null)===f&&u!==f&&(u===null?s.delete(h):s.set(h,u))),!l&&!t.deleted&&fr(s,c);break}}}t=t.right}return a},lw=(n,t)=>{for(;t&&t.right&&(t.right.deleted||!t.right.countable);)t=t.right;const e=new Set;for(;t&&(t.deleted||!t.countable);){if(!t.deleted&&t.content.constructor===Te){const i=t.content.key;e.has(i)?t.delete(n):e.add(i)}t=t.left}},cw=n=>{let t=0;return te(n.doc,e=>{let i=n._start,s=n._start,r=Qe();const o=Dc(r);for(;s;){if(s.deleted===!1)switch(s.content.constructor){case Te:fr(o,s.content);break;default:t+=Wp(e,i,s,r,o),r=Dc(o),i=s;break}s=s.right}}),t},hw=n=>{const t=new Set,e=n.doc;for(const[i,s]of n.afterState.entries()){const r=n.beforeState.get(i)||0;s!==r&&Ap(n,e.store.clients.get(i),r,s,o=>{!o.deleted&&o.content.constructor===Te&&o.constructor!==gn&&t.add(o.parent)})}te(e,i=>{$s(n,n.deleteSet,s=>{if(s instanceof gn||!s.parent._hasFormatting||t.has(s.parent))return;const r=s.parent;s.content.constructor===Te?t.add(r):lw(i,s)});for(const s of t)cw(s)})},Df=(n,t,e)=>{const i=e,s=Dc(t.currentAttributes),r=t.right;for(;e>0&&t.right!==null;){if(t.right.deleted===!1)switch(t.right.content.constructor){case ui:case hs:case Bn:e<t.right.length&&Ze(n,Ft(t.right.id.client,t.right.id.clock+e)),e-=t.right.length,t.right.delete(n);break}t.forward()}r&&Wp(n,r,t.right,s,t.currentAttributes);const o=(t.left||t.right).parent;return o._searchMarker&&Nr(o._searchMarker,t.index,-i+e),t};class uw extends ka{constructor(t,e,i){super(t,e),this.childListChanged=!1,this.keysChanged=new Set,i.forEach(s=>{s===null?this.childListChanged=!0:this.keysChanged.add(s)})}get changes(){if(this._changes===null){const t={keys:this.keys,delta:this.delta,added:new Set,deleted:new Set};this._changes=t}return this._changes}get delta(){if(this._delta===null){const t=this.target.doc,e=[];te(t,i=>{const s=new Map,r=new Map;let o=this.target._start,a=null;const l={};let c="",h=0,f=0;const u=()=>{if(a!==null){let d=null;switch(a){case"delete":f>0&&(d={delete:f}),f=0;break;case"insert":(typeof c=="object"||c.length>0)&&(d={insert:c},s.size>0&&(d.attributes={},s.forEach((m,_)=>{m!==null&&(d.attributes[_]=m)}))),c="";break;case"retain":h>0&&(d={retain:h},Vy(l)||(d.attributes=By({},l))),h=0;break}d&&e.push(d),a=null}};for(;o!==null;){switch(o.content.constructor){case ui:case hs:this.adds(o)?this.deletes(o)||(u(),a="insert",c=o.content.getContent()[0],u()):this.deletes(o)?(a!=="delete"&&(u(),a="delete"),f+=1):o.deleted||(a!=="retain"&&(u(),a="retain"),h+=1);break;case Bn:this.adds(o)?this.deletes(o)||(a!=="insert"&&(u(),a="insert"),c+=o.content.str):this.deletes(o)?(a!=="delete"&&(u(),a="delete"),f+=o.length):o.deleted||(a!=="retain"&&(u(),a="retain"),h+=o.length);break;case Te:{const{key:d,value:m}=o.content;if(this.adds(o)){if(!this.deletes(o)){const _=s.get(d)??null;Ei(_,m)?m!==null&&o.delete(i):(a==="retain"&&u(),Ei(m,r.get(d)??null)?delete l[d]:l[d]=m)}}else if(this.deletes(o)){r.set(d,m);const _=s.get(d)??null;Ei(_,m)||(a==="retain"&&u(),l[d]=_)}else if(!o.deleted){r.set(d,m);const _=l[d];_!==void 0&&(Ei(_,m)?_!==null&&o.delete(i):(a==="retain"&&u(),m===null?delete l[d]:l[d]=m))}o.deleted||(a==="insert"&&u(),fr(s,o.content));break}}o=o.right}for(u();e.length>0;){const d=e[e.length-1];if(d.retain!==void 0&&d.attributes===void 0)e.pop();else break}}),this._delta=e}return this._delta}}class tr extends Ie{constructor(t){super(),this._pending=t!==void 0?[()=>this.insert(0,t)]:[],this._searchMarker=[],this._hasFormatting=!1}get length(){return this.doc??Be(),this._length}_integrate(t,e){super._integrate(t,e);try{this._pending.forEach(i=>i())}catch(i){console.error(i)}this._pending=null}_copy(){return new tr}clone(){const t=new tr;return t.applyDelta(this.toDelta()),t}_callObserver(t,e){super._callObserver(t,e);const i=new uw(this,t,e);za(this,t,i),!t.local&&this._hasFormatting&&(t._needFormattingCleanup=!0)}toString(){this.doc??Be();let t="",e=this._start;for(;e!==null;)!e.deleted&&e.countable&&e.content.constructor===Bn&&(t+=e.content.str),e=e.right;return t}toJSON(){return this.toString()}applyDelta(t,{sanitize:e=!0}={}){this.doc!==null?te(this.doc,i=>{const s=new Bc(null,this._start,0,new Map);for(let r=0;r<t.length;r++){const o=t[r];if(o.insert!==void 0){const a=!e&&typeof o.insert=="string"&&r===t.length-1&&s.right===null&&o.insert.slice(-1)===`
`?o.insert.slice(0,-1):o.insert;(typeof a!="string"||a.length>0)&&Il(i,this,s,a,o.attributes||{})}else o.retain!==void 0?Rf(i,this,s,o.retain,o.attributes||{}):o.delete!==void 0&&Df(i,s,o.delete)}}):this._pending.push(()=>this.applyDelta(t))}toDelta(t,e,i){this.doc??Be();const s=[],r=new Map,o=this.doc;let a="",l=this._start;function c(){if(a.length>0){const f={};let u=!1;r.forEach((m,_)=>{u=!0,f[_]=m});const d={insert:a};u&&(d.attributes=f),s.push(d),a=""}}const h=()=>{for(;l!==null;){if(Rs(l,t)||e!==void 0&&Rs(l,e))switch(l.content.constructor){case Bn:{const f=r.get("ychange");t!==void 0&&!Rs(l,t)?(f===void 0||f.user!==l.id.client||f.type!=="removed")&&(c(),r.set("ychange",i?i("removed",l.id):{type:"removed"})):e!==void 0&&!Rs(l,e)?(f===void 0||f.user!==l.id.client||f.type!=="added")&&(c(),r.set("ychange",i?i("added",l.id):{type:"added"})):f!==void 0&&(c(),r.delete("ychange")),a+=l.content.str;break}case ui:case hs:{c();const f={insert:l.content.getContent()[0]};if(r.size>0){const u={};f.attributes=u,r.forEach((d,m)=>{u[m]=d})}s.push(f);break}case Te:Rs(l,t)&&(c(),fr(r,l.content));break}l=l.right}c()};return t||e?te(o,f=>{t&&Oc(f,t),e&&Oc(f,e),h()},"cleanup"):h(),s}insert(t,e,i){if(e.length<=0)return;const s=this.doc;s!==null?te(s,r=>{const o=Uo(r,this,t,!i);i||(i={},o.currentAttributes.forEach((a,l)=>{i[l]=a})),Il(r,this,o,e,i)}):this._pending.push(()=>this.insert(t,e,i))}insertEmbed(t,e,i){const s=this.doc;s!==null?te(s,r=>{const o=Uo(r,this,t,!i);Il(r,this,o,e,i||{})}):this._pending.push(()=>this.insertEmbed(t,e,i||{}))}delete(t,e){if(e===0)return;const i=this.doc;i!==null?te(i,s=>{Df(s,Uo(s,this,t,!0),e)}):this._pending.push(()=>this.delete(t,e))}format(t,e,i){if(e===0)return;const s=this.doc;s!==null?te(s,r=>{const o=Uo(r,this,t,!1);o.right!==null&&Rf(r,this,o,e,i)}):this._pending.push(()=>this.format(t,e,i))}removeAttribute(t){this.doc!==null?te(this.doc,e=>{fa(e,this,t)}):this._pending.push(()=>this.removeAttribute(t))}setAttribute(t,e){this.doc!==null?te(this.doc,i=>{Dh(i,this,t,e)}):this._pending.push(()=>this.setAttribute(t,e))}getAttribute(t){return Ph(this,t)}getAttributes(){return Bp(this)}_write(t){t.writeTypeRef(Pw)}}const fw=n=>new tr;class Ul{constructor(t,e=()=>!0){this._filter=e,this._root=t,this._currentNode=t._start,this._firstCall=!0,t.doc??Be()}[Symbol.iterator](){return this}next(){let t=this._currentNode,e=t&&t.content&&t.content.type;if(t!==null&&(!this._firstCall||t.deleted||!this._filter(e)))do if(e=t.content.type,!t.deleted&&(e.constructor===er||e.constructor===os)&&e._start!==null)t=e._start;else for(;t!==null;)if(t.right!==null){t=t.right;break}else t.parent===this._root?t=null:t=t.parent._item;while(t!==null&&(t.deleted||!this._filter(t.content.type)));return this._firstCall=!1,t===null?{value:void 0,done:!0}:(this._currentNode=t,{value:t.content.type,done:!1})}}class os extends Ie{constructor(){super(),this._prelimContent=[]}get firstChild(){const t=this._first;return t?t.content.getContent()[0]:null}_integrate(t,e){super._integrate(t,e),this.insert(0,this._prelimContent),this._prelimContent=null}_copy(){return new os}clone(){const t=new os;return t.insert(0,this.toArray().map(e=>e instanceof Ie?e.clone():e)),t}get length(){return this.doc??Be(),this._prelimContent===null?this._length:this._prelimContent.length}createTreeWalker(t){return new Ul(this,t)}querySelector(t){t=t.toUpperCase();const i=new Ul(this,s=>s.nodeName&&s.nodeName.toUpperCase()===t).next();return i.done?null:i.value}querySelectorAll(t){return t=t.toUpperCase(),oi(new Ul(this,e=>e.nodeName&&e.nodeName.toUpperCase()===t))}_callObserver(t,e){za(this,t,new mw(this,e,t))}toString(){return Up(this,t=>t.toString()).join("")}toJSON(){return this.toString()}toDOM(t=document,e={},i){const s=t.createDocumentFragment();return i!==void 0&&i._createAssociation(s,this),Fr(this,r=>{s.insertBefore(r.toDOM(t,e,i),null)}),s}insert(t,e){this.doc!==null?te(this.doc,i=>{Op(i,this,t,e)}):this._prelimContent.splice(t,0,...e)}insertAfter(t,e){if(this.doc!==null)te(this.doc,i=>{const s=t&&t instanceof Ie?t._item:t;ua(i,this,s,e)});else{const i=this._prelimContent,s=t===null?0:i.findIndex(r=>r===t)+1;if(s===0&&t!==null)throw Ni("Reference item not found");i.splice(s,0,...e)}}delete(t,e=1){this.doc!==null?te(this.doc,i=>{kp(i,this,t,e)}):this._prelimContent.splice(t,e)}toArray(){return Ip(this)}push(t){this.insert(this.length,t)}unshift(t){this.insert(0,t)}get(t){return Np(this,t)}slice(t=0,e=this.length){return Lp(this,t,e)}forEach(t){Fr(this,t)}_write(t){t.writeTypeRef(Iw)}}const dw=n=>new os;class er extends os{constructor(t="UNDEFINED"){super(),this.nodeName=t,this._prelimAttrs=new Map}get nextSibling(){const t=this._item?this._item.next:null;return t?t.content.type:null}get prevSibling(){const t=this._item?this._item.prev:null;return t?t.content.type:null}_integrate(t,e){super._integrate(t,e),this._prelimAttrs.forEach((i,s)=>{this.setAttribute(s,i)}),this._prelimAttrs=null}_copy(){return new er(this.nodeName)}clone(){const t=new er(this.nodeName),e=this.getAttributes();return zy(e,(i,s)=>{typeof i=="string"&&t.setAttribute(s,i)}),t.insert(0,this.toArray().map(i=>i instanceof Ie?i.clone():i)),t}toString(){const t=this.getAttributes(),e=[],i=[];for(const a in t)i.push(a);i.sort();const s=i.length;for(let a=0;a<s;a++){const l=i[a];e.push(l+'="'+t[l]+'"')}const r=this.nodeName.toLocaleLowerCase(),o=e.length>0?" "+e.join(" "):"";return`<${r}${o}>${super.toString()}</${r}>`}removeAttribute(t){this.doc!==null?te(this.doc,e=>{fa(e,this,t)}):this._prelimAttrs.delete(t)}setAttribute(t,e){this.doc!==null?te(this.doc,i=>{Dh(i,this,t,e)}):this._prelimAttrs.set(t,e)}getAttribute(t){return Ph(this,t)}hasAttribute(t){return zp(this,t)}getAttributes(t){return t?iw(this,t):Bp(this)}toDOM(t=document,e={},i){const s=t.createElement(this.nodeName),r=this.getAttributes();for(const o in r){const a=r[o];typeof a=="string"&&s.setAttribute(o,a)}return Fr(this,o=>{s.appendChild(o.toDOM(t,e,i))}),i!==void 0&&i._createAssociation(s,this),s}_write(t){t.writeTypeRef(Lw),t.writeKey(this.nodeName)}}const pw=n=>new er(n.readKey());class mw extends ka{constructor(t,e,i){super(t,i),this.childListChanged=!1,this.attributesChanged=new Set,e.forEach(s=>{s===null?this.childListChanged=!0:this.attributesChanged.add(s)})}}class da extends Qs{constructor(t){super(),this.hookName=t}_copy(){return new da(this.hookName)}clone(){const t=new da(this.hookName);return this.forEach((e,i)=>{t.set(i,e)}),t}toDOM(t=document,e={},i){const s=e[this.hookName];let r;return s!==void 0?r=s.createDom(this):r=document.createElement(this.hookName),r.setAttribute("data-yjs-hook",this.hookName),i!==void 0&&i._createAssociation(r,this),r}_write(t){t.writeTypeRef(Uw),t.writeKey(this.hookName)}}const gw=n=>new da(n.readKey());class pa extends tr{get nextSibling(){const t=this._item?this._item.next:null;return t?t.content.type:null}get prevSibling(){const t=this._item?this._item.prev:null;return t?t.content.type:null}_copy(){return new pa}clone(){const t=new pa;return t.applyDelta(this.toDelta()),t}toDOM(t=document,e,i){const s=t.createTextNode(this.toString());return i!==void 0&&i._createAssociation(s,this),s}toString(){return this.toDelta().map(t=>{const e=[];for(const s in t.attributes){const r=[];for(const o in t.attributes[s])r.push({key:o,value:t.attributes[s][o]});r.sort((o,a)=>o.key<a.key?-1:1),e.push({nodeName:s,attrs:r})}e.sort((s,r)=>s.nodeName<r.nodeName?-1:1);let i="";for(let s=0;s<e.length;s++){const r=e[s];i+=`<${r.nodeName}`;for(let o=0;o<r.attrs.length;o++){const a=r.attrs[o];i+=` ${a.key}="${a.value}"`}i+=">"}i+=t.insert;for(let s=e.length-1;s>=0;s--)i+=`</${e[s].nodeName}>`;return i}).join("")}toJSON(){return this.toString()}_write(t){t.writeTypeRef(Nw)}}const _w=n=>new pa;class Lh{constructor(t,e){this.id=t,this.length=e}get deleted(){throw Nn()}mergeWith(t){return!1}write(t,e,i){throw Nn()}integrate(t,e){throw Nn()}}const vw=0;class gn extends Lh{get deleted(){return!0}delete(){}mergeWith(t){return this.constructor!==t.constructor?!1:(this.length+=t.length,!0)}integrate(t,e){e>0&&(this.id.clock+=e,this.length-=e),Tp(t.doc.store,this)}write(t,e){t.writeInfo(vw),t.writeLen(this.length-e)}getMissing(t,e){return null}}class eo{constructor(t){this.content=t}getLength(){return 1}getContent(){return[this.content]}isCountable(){return!0}copy(){return new eo(this.content)}splice(t){throw Nn()}mergeWith(t){return!1}integrate(t,e){}delete(t){}gc(t){}write(t,e){t.writeBuf(this.content)}getRef(){return 3}}const xw=n=>new eo(n.readBuf());class Or{constructor(t){this.len=t}getLength(){return this.len}getContent(){return[]}isCountable(){return!1}copy(){return new Or(this.len)}splice(t){const e=new Or(this.len-t);return this.len=t,e}mergeWith(t){return this.len+=t.len,!0}integrate(t,e){Ur(t.deleteSet,e.id.client,e.id.clock,this.len),e.markDeleted()}delete(t){}gc(t){}write(t,e){t.writeLen(this.len-e)}getRef(){return 1}}const Sw=n=>new Or(n.readLen()),Xp=(n,t)=>new ur({guid:n,...t,shouldLoad:t.shouldLoad||t.autoLoad||!1});class no{constructor(t){t._item&&console.error("This document was already integrated as a sub-document. You should create a second instance instead with the same guid."),this.doc=t;const e={};this.opts=e,t.gc||(e.gc=!1),t.autoLoad&&(e.autoLoad=!0),t.meta!==null&&(e.meta=t.meta)}getLength(){return 1}getContent(){return[this.doc]}isCountable(){return!0}copy(){return new no(Xp(this.doc.guid,this.opts))}splice(t){throw Nn()}mergeWith(t){return!1}integrate(t,e){this.doc._item=e,t.subdocsAdded.add(this.doc),this.doc.shouldLoad&&t.subdocsLoaded.add(this.doc)}delete(t){t.subdocsAdded.has(this.doc)?t.subdocsAdded.delete(this.doc):t.subdocsRemoved.add(this.doc)}gc(t){}write(t,e){t.writeString(this.doc.guid),t.writeAny(this.opts)}getRef(){return 9}}const Mw=n=>new no(Xp(n.readString(),n.readAny()));class hs{constructor(t){this.embed=t}getLength(){return 1}getContent(){return[this.embed]}isCountable(){return!0}copy(){return new hs(this.embed)}splice(t){throw Nn()}mergeWith(t){return!1}integrate(t,e){}delete(t){}gc(t){}write(t,e){t.writeJSON(this.embed)}getRef(){return 5}}const yw=n=>new hs(n.readJSON());class Te{constructor(t,e){this.key=t,this.value=e}getLength(){return 1}getContent(){return[]}isCountable(){return!1}copy(){return new Te(this.key,this.value)}splice(t){throw Nn()}mergeWith(t){return!1}integrate(t,e){const i=e.parent;i._searchMarker=null,i._hasFormatting=!0}delete(t){}gc(t){}write(t,e){t.writeKey(this.key),t.writeJSON(this.value)}getRef(){return 6}}const Ew=n=>new Te(n.readKey(),n.readJSON());class ma{constructor(t){this.arr=t}getLength(){return this.arr.length}getContent(){return this.arr}isCountable(){return!0}copy(){return new ma(this.arr)}splice(t){const e=new ma(this.arr.slice(t));return this.arr=this.arr.slice(0,t),e}mergeWith(t){return this.arr=this.arr.concat(t.arr),!0}integrate(t,e){}delete(t){}gc(t){}write(t,e){const i=this.arr.length;t.writeLen(i-e);for(let s=e;s<i;s++){const r=this.arr[s];t.writeString(r===void 0?"undefined":JSON.stringify(r))}}getRef(){return 2}}const ww=n=>{const t=n.readLen(),e=[];for(let i=0;i<t;i++){const s=n.readString();s==="undefined"?e.push(void 0):e.push(JSON.parse(s))}return new ma(e)},bw=la("node_env")==="development";class as{constructor(t){this.arr=t,bw&&sp(t)}getLength(){return this.arr.length}getContent(){return this.arr}isCountable(){return!0}copy(){return new as(this.arr)}splice(t){const e=new as(this.arr.slice(t));return this.arr=this.arr.slice(0,t),e}mergeWith(t){return this.arr=this.arr.concat(t.arr),!0}integrate(t,e){}delete(t){}gc(t){}write(t,e){const i=this.arr.length;t.writeLen(i-e);for(let s=e;s<i;s++){const r=this.arr[s];t.writeAny(r)}}getRef(){return 8}}const Tw=n=>{const t=n.readLen(),e=[];for(let i=0;i<t;i++)e.push(n.readAny());return new as(e)};class Bn{constructor(t){this.str=t}getLength(){return this.str.length}getContent(){return this.str.split("")}isCountable(){return!0}copy(){return new Bn(this.str)}splice(t){const e=new Bn(this.str.slice(t));this.str=this.str.slice(0,t);const i=this.str.charCodeAt(t-1);return i>=55296&&i<=56319&&(this.str=this.str.slice(0,t-1)+"�",e.str="�"+e.str.slice(1)),e}mergeWith(t){return this.str+=t.str,!0}integrate(t,e){}delete(t){}gc(t){}write(t,e){t.writeString(e===0?this.str:this.str.slice(e))}getRef(){return 4}}const Aw=n=>new Bn(n.readString()),Cw=[rw,aw,fw,pw,dw,gw,_w],Rw=0,Dw=1,Pw=2,Lw=3,Iw=4,Uw=5,Nw=6;class ui{constructor(t){this.type=t}getLength(){return 1}getContent(){return[this.type]}isCountable(){return!0}copy(){return new ui(this.type._copy())}splice(t){throw Nn()}mergeWith(t){return!1}integrate(t,e){this.type._integrate(t.doc,e)}delete(t){let e=this.type._start;for(;e!==null;)e.deleted?e.id.clock<(t.beforeState.get(e.id.client)||0)&&t._mergeStructs.push(e):e.delete(t),e=e.right;this.type._map.forEach(i=>{i.deleted?i.id.clock<(t.beforeState.get(i.id.client)||0)&&t._mergeStructs.push(i):i.delete(t)}),t.changed.delete(this.type)}gc(t){let e=this.type._start;for(;e!==null;)e.gc(t,!0),e=e.right;this.type._start=null,this.type._map.forEach(i=>{for(;i!==null;)i.gc(t,!0),i=i.left}),this.type._map=new Map}write(t,e){this.type._write(t)}getRef(){return 7}}const Fw=n=>new ui(Cw[n.readTypeRef()](n)),Ow=(n,t)=>{let e=t,i=0,s;do i>0&&(e=Ft(e.client,e.clock+i)),s=qo(n,e),i=e.clock-s.id.clock,e=s.redone;while(e!==null&&s instanceof oe);return{item:s,diff:i}},Ih=(n,t)=>{for(;n!==null&&n.keep!==t;)n.keep=t,n=n.parent._item},ga=(n,t,e)=>{const{client:i,clock:s}=t.id,r=new oe(Ft(i,s+e),t,Ft(i,s+e-1),t.right,t.rightOrigin,t.parent,t.parentSub,t.content.splice(e));return t.deleted&&r.markDeleted(),t.keep&&(r.keep=!0),t.redone!==null&&(r.redone=Ft(t.redone.client,t.redone.clock+e)),t.right=r,r.right!==null&&(r.right.left=r),n._mergeStructs.push(r),r.parentSub!==null&&r.right===null&&r.parent._map.set(r.parentSub,r),t.length=e,r},Pf=(n,t)=>ny(n,e=>Qr(e.deletions,t)),qp=(n,t,e,i,s,r)=>{const o=n.doc,a=o.store,l=o.clientID,c=t.redone;if(c!==null)return Ze(n,c);let h=t.parent._item,f=null,u;if(h!==null&&h.deleted===!0){if(h.redone===null&&(!e.has(h)||qp(n,h,e,i,s,r)===null))return null;for(;h.redone!==null;)h=Ze(n,h.redone)}const d=h===null?t.parent:h.content.type;if(t.parentSub===null){for(f=t.left,u=t;f!==null;){let p=f;for(;p!==null&&p.parent._item!==h;)p=p.redone===null?null:Ze(n,p.redone);if(p!==null&&p.parent._item===h){f=p;break}f=f.left}for(;u!==null;){let p=u;for(;p!==null&&p.parent._item!==h;)p=p.redone===null?null:Ze(n,p.redone);if(p!==null&&p.parent._item===h){u=p;break}u=u.right}}else if(u=null,t.right&&!s){for(f=t;f!==null&&f.right!==null&&(f.right.redone||Qr(i,f.right.id)||Pf(r.undoStack,f.right.id)||Pf(r.redoStack,f.right.id));)for(f=f.right;f.redone;)f=Ze(n,f.redone);if(f&&f.right!==null)return null}else f=d._map.get(t.parentSub)||null;const m=Ee(a,l),_=Ft(l,m),g=new oe(_,f,f&&f.lastId,u,u&&u.id,d,t.parentSub,t.content.copy());return t.redone=_,Ih(g,!0),g.integrate(n,0),g};class oe extends Lh{constructor(t,e,i,s,r,o,a,l){super(t,l.getLength()),this.origin=i,this.left=e,this.right=s,this.rightOrigin=r,this.parent=o,this.parentSub=a,this.redone=null,this.content=l,this.info=this.content.isCountable()?af:0}set marker(t){(this.info&Rl)>0!==t&&(this.info^=Rl)}get marker(){return(this.info&Rl)>0}get keep(){return(this.info&of)>0}set keep(t){this.keep!==t&&(this.info^=of)}get countable(){return(this.info&af)>0}get deleted(){return(this.info&Cl)>0}set deleted(t){this.deleted!==t&&(this.info^=Cl)}markDeleted(){this.info|=Cl}getMissing(t,e){if(this.origin&&this.origin.client!==this.id.client&&this.origin.clock>=Ee(e,this.origin.client))return this.origin.client;if(this.rightOrigin&&this.rightOrigin.client!==this.id.client&&this.rightOrigin.clock>=Ee(e,this.rightOrigin.client))return this.rightOrigin.client;if(this.parent&&this.parent.constructor===Bs&&this.id.client!==this.parent.client&&this.parent.clock>=Ee(e,this.parent.client))return this.parent.client;if(this.origin&&(this.left=yf(t,e,this.origin),this.origin=this.left.lastId),this.rightOrigin&&(this.right=Ze(t,this.rightOrigin),this.rightOrigin=this.right.id),this.left&&this.left.constructor===gn||this.right&&this.right.constructor===gn)this.parent=null;else if(!this.parent)this.left&&this.left.constructor===oe&&(this.parent=this.left.parent,this.parentSub=this.left.parentSub),this.right&&this.right.constructor===oe&&(this.parent=this.right.parent,this.parentSub=this.right.parentSub);else if(this.parent.constructor===Bs){const i=qo(e,this.parent);i.constructor===gn?this.parent=null:this.parent=i.content.type}return null}integrate(t,e){if(e>0&&(this.id.clock+=e,this.left=yf(t,t.doc.store,Ft(this.id.client,this.id.clock-1)),this.origin=this.left.lastId,this.content=this.content.splice(e),this.length-=e),this.parent){if(!this.left&&(!this.right||this.right.left!==null)||this.left&&this.left.right!==this.right){let i=this.left,s;if(i!==null)s=i.right;else if(this.parentSub!==null)for(s=this.parent._map.get(this.parentSub)||null;s!==null&&s.left!==null;)s=s.left;else s=this.parent._start;const r=new Set,o=new Set;for(;s!==null&&s!==this.right;){if(o.add(s),r.add(s),Lo(this.origin,s.origin)){if(s.id.client<this.id.client)i=s,r.clear();else if(Lo(this.rightOrigin,s.rightOrigin))break}else if(s.origin!==null&&o.has(qo(t.doc.store,s.origin)))r.has(qo(t.doc.store,s.origin))||(i=s,r.clear());else break;s=s.right}this.left=i}if(this.left!==null){const i=this.left.right;this.right=i,this.left.right=this}else{let i;if(this.parentSub!==null)for(i=this.parent._map.get(this.parentSub)||null;i!==null&&i.left!==null;)i=i.left;else i=this.parent._start,this.parent._start=this;this.right=i}this.right!==null?this.right.left=this:this.parentSub!==null&&(this.parent._map.set(this.parentSub,this),this.left!==null&&this.left.delete(t)),this.parentSub===null&&this.countable&&!this.deleted&&(this.parent._length+=this.length),Tp(t.doc.store,this),this.content.integrate(t,this),wf(t,this.parent,this.parentSub),(this.parent._item!==null&&this.parent._item.deleted||this.parentSub!==null&&this.right!==null)&&this.delete(t)}else new gn(this.id,this.length).integrate(t,0)}get next(){let t=this.right;for(;t!==null&&t.deleted;)t=t.right;return t}get prev(){let t=this.left;for(;t!==null&&t.deleted;)t=t.left;return t}get lastId(){return this.length===1?this.id:Ft(this.id.client,this.id.clock+this.length-1)}mergeWith(t){if(this.constructor===t.constructor&&Lo(t.origin,this.lastId)&&this.right===t&&Lo(this.rightOrigin,t.rightOrigin)&&this.id.client===t.id.client&&this.id.clock+this.length===t.id.clock&&this.deleted===t.deleted&&this.redone===null&&t.redone===null&&this.content.constructor===t.content.constructor&&this.content.mergeWith(t.content)){const e=this.parent._searchMarker;return e&&e.forEach(i=>{i.p===t&&(i.p=this,!this.deleted&&this.countable&&(i.index-=this.length))}),t.keep&&(this.keep=!0),this.right=t.right,this.right!==null&&(this.right.left=this),this.length+=t.length,!0}return!1}delete(t){if(!this.deleted){const e=this.parent;this.countable&&this.parentSub===null&&(e._length-=this.length),this.markDeleted(),Ur(t.deleteSet,this.id.client,this.id.clock,this.length),wf(t,e,this.parentSub),this.content.delete(t)}}gc(t,e){if(!this.deleted)throw On();this.content.gc(t),e?BE(t,this,new gn(this.id,this.length)):this.content=new Or(this.length)}write(t,e){const i=e>0?Ft(this.id.client,this.id.clock+e-1):this.origin,s=this.rightOrigin,r=this.parentSub,o=this.content.getRef()&Ua|(i===null?0:an)|(s===null?0:ii)|(r===null?0:Dr);if(t.writeInfo(o),i!==null&&t.writeLeftID(i),s!==null&&t.writeRightID(s),i===null&&s===null){const a=this.parent;if(a._item!==void 0){const l=a._item;if(l===null){const c=OE(a);t.writeParentInfo(!0),t.writeString(c)}else t.writeParentInfo(!1),t.writeLeftID(l.id)}else a.constructor===String?(t.writeParentInfo(!0),t.writeString(a)):a.constructor===Bs?(t.writeParentInfo(!1),t.writeLeftID(a)):On();r!==null&&t.writeString(r)}this.content.write(t,e)}}const Yp=(n,t)=>kw[t&Ua](n),kw=[()=>{On()},Sw,ww,xw,Aw,yw,Ew,Fw,Tw,Mw,()=>{On()}],Bw=10;class _n extends Lh{get deleted(){return!0}delete(){}mergeWith(t){return this.constructor!==t.constructor?!1:(this.length+=t.length,!0)}integrate(t,e){On()}write(t,e){t.writeInfo(Bw),xt(t.restEncoder,this.length-e)}getMissing(t,e){return null}}const jp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:{},Zp="__ $YJS$ __";jp[Zp]===!0&&console.error("Yjs was already imported. This breaks constructor checks and will lead to issues! - https://github.com/yjs/yjs/issues/438");jp[Zp]=!0;class zw{constructor(t){ce(this,"onChange");ce(this,"geometry");ce(this,"undoManager");this.map=t,this.undoManager=new WE(t,{ignoreRemoteMapChanges:!0}),t.observe(()=>{var e;this.updateGeometry(),(e=this.onChange)==null||e.call(this)})}setVoxel(t,e){this.map.set(this.vecToKey(t),{color:{r:e.r,g:e.g,b:e.b}})}deleteVoxel(t){this.map.delete(this.vecToKey(t))}hasVoxel(t){return this.map.has(this.vecToKey(t))}getVoxelMesh(){const t=new Pa({vertexColors:!0});return this.geometry=new zn,this.updateGeometry(),new Tn(this.geometry,t)}undo(){this.undoManager.undo()}redo(){this.undoManager.redo()}batch(t){var e,i;(i=(e=this.map.doc)==null?void 0:e.transact)==null||i.call(e,t)}clear(){this.map.clear()}generateGeometry(){const t=[],e=[],i=[],s=[];for(const[r,o]of this.map.entries()){const a=this.keyToVec(r);for(const{dir:l,corners:c}of Hw){const h=new U(a.x+l[0],a.y+l[1],a.z+l[2]);if(this.map.has(this.vecToKey(h)))continue;const f=t.length/3;for(const u of c)t.push(a.x+u[0],a.y+u[1],a.z+u[2]),e.push(...l),s.push(o.color.r,o.color.g,o.color.b);i.push(f,f+1,f+2,f+2,f+1,f+3)}}return{positions:t,normals:e,indicies:i,colors:s}}updateGeometry(){if(!this.geometry)return;const{positions:t,normals:e,indicies:i,colors:s}=this.generateGeometry();this.geometry.setAttribute("position",new on(new Float32Array(t),3)),this.geometry.setAttribute("normal",new on(new Float32Array(e),3)),this.geometry.setAttribute("color",new on(new Float32Array(s),3)),this.geometry.setIndex(i)}vecToKey(t){return`${t.x},${t.y},${t.z}`}keyToVec(t){const e=t.split(",").map(i=>Number(i));return new U(e[0],e[1],e[2])}}const Hw=[{dir:[-1,0,0],corners:[[0,1,0],[0,0,0],[0,1,1],[0,0,1]]},{dir:[1,0,0],corners:[[1,1,1],[1,0,1],[1,1,0],[1,0,0]]},{dir:[0,-1,0],corners:[[1,0,1],[0,0,1],[1,0,0],[0,0,0]]},{dir:[0,1,0],corners:[[0,1,1],[1,1,1],[0,1,0],[1,1,0]]},{dir:[0,0,-1],corners:[[1,0,0],[0,0,0],[1,1,0],[0,1,0]]},{dir:[0,0,1],corners:[[0,0,1],[1,0,1],[0,1,1],[1,1,1]]}],Kp=new Map;class Vw{constructor(t){this.room=t,this.onmessage=null,this._onChange=e=>e.key===t&&this.onmessage!==null&&this.onmessage({data:rE(e.newValue||"")}),Oy(this._onChange)}postMessage(t){ep.setItem(this.room,sE(Qy(t)))}close(){ky(this._onChange)}}const Gw=typeof BroadcastChannel>"u"?Vw:BroadcastChannel,Uh=n=>Hn(Kp,n,()=>{const t=Ui(),e=new Gw(n);return e.onmessage=i=>t.forEach(s=>s(i.data,"broadcastchannel")),{bc:e,subs:t}}),Ww=(n,t)=>(Uh(n).subs.add(t),t),Xw=(n,t)=>{const e=Uh(n),i=e.subs.delete(t);return i&&e.subs.size===0&&(e.bc.close(),Kp.delete(n)),i},Ds=(n,t,e=null)=>{const i=Uh(n);i.bc.postMessage(t),i.subs.forEach(s=>s(t,e))},$p=0,Nh=1,Jp=2,zc=(n,t)=>{xt(n,$p);const e=NE(t);ge(n,e)},Qp=(n,t,e)=>{xt(n,Nh),ge(n,PE(t,e))},qw=(n,t,e)=>Qp(t,e,Oe(n)),tm=(n,t,e)=>{try{CE(t,Oe(n),e)}catch(i){console.error("Caught error while handling a Yjs update",i)}},Yw=(n,t)=>{xt(n,Jp),ge(n,t)},jw=tm,Zw=(n,t,e,i)=>{const s=Rt(n);switch(s){case $p:qw(n,t,e);break;case Nh:tm(n,e,i);break;case Jp:jw(n,e,i);break;default:throw new Error("Unknown message type")}return s},Kw=0,$w=(n,t,e)=>{switch(Rt(n)){case Kw:e(t,Ci(n))}},Nl=3e4;class Jw extends iy{constructor(t){super(),this.doc=t,this.clientID=t.clientID,this.states=new Map,this.meta=new Map,this._checkInterval=setInterval(()=>{const e=Fi();this.getLocalState()!==null&&Nl/2<=e-this.meta.get(this.clientID).lastUpdated&&this.setLocalState(this.getLocalState());const i=[];this.meta.forEach((s,r)=>{r!==this.clientID&&Nl<=e-s.lastUpdated&&this.states.has(r)&&i.push(r)}),i.length>0&&Fh(this,i,"timeout")},ai(Nl/10)),t.on("destroy",()=>{this.destroy()}),this.setLocalState({})}destroy(){this.emit("destroy",[this]),this.setLocalState(null),super.destroy(),clearInterval(this._checkInterval)}getLocalState(){return this.states.get(this.clientID)||null}setLocalState(t){const e=this.clientID,i=this.meta.get(e),s=i===void 0?0:i.clock+1,r=this.states.get(e);t===null?this.states.delete(e):this.states.set(e,t),this.meta.set(e,{clock:s,lastUpdated:Fi()});const o=[],a=[],l=[],c=[];t===null?c.push(e):r==null?t!=null&&o.push(e):(a.push(e),br(r,t)||l.push(e)),(o.length>0||l.length>0||c.length>0)&&this.emit("change",[{added:o,updated:l,removed:c},"local"]),this.emit("update",[{added:o,updated:a,removed:c},"local"])}setLocalStateField(t,e){const i=this.getLocalState();i!==null&&this.setLocalState({...i,[t]:e})}getStates(){return this.states}}const Fh=(n,t,e)=>{const i=[];for(let s=0;s<t.length;s++){const r=t[s];if(n.states.has(r)){if(n.states.delete(r),r===n.clientID){const o=n.meta.get(r);n.meta.set(r,{clock:o.clock+1,lastUpdated:Fi()})}i.push(r)}}i.length>0&&(n.emit("change",[{added:[],updated:[],removed:i},e]),n.emit("update",[{added:[],updated:[],removed:i},e]))},Tr=(n,t,e=n.states)=>{const i=t.length,s=ke();xt(s,i);for(let r=0;r<i;r++){const o=t[r],a=e.get(o)||null,l=n.meta.get(o).clock;xt(s,o),xt(s,l),es(s,JSON.stringify(a))}return he(s)},Qw=(n,t,e)=>{const i=ki(t),s=Fi(),r=[],o=[],a=[],l=[],c=Rt(i);for(let h=0;h<c;h++){const f=Rt(i);let u=Rt(i);const d=JSON.parse(Ci(i)),m=n.meta.get(f),_=n.states.get(f),g=m===void 0?0:m.clock;(g<u||g===u&&d===null&&n.states.has(f))&&(d===null?f===n.clientID&&n.getLocalState()!=null?u++:n.states.delete(f):n.states.set(f,d),n.meta.set(f,{clock:u,lastUpdated:s}),m===void 0&&d!==null?r.push(f):m!==void 0&&d===null?l.push(f):d!==null&&(br(d,_)||a.push(f),o.push(f)))}(r.length>0||a.length>0||l.length>0)&&n.emit("change",[{added:r,updated:a,removed:l},e]),(r.length>0||o.length>0||l.length>0)&&n.emit("update",[{added:r,updated:o,removed:l},e])},tb=n=>Hy(n,(t,e)=>`${encodeURIComponent(e)}=${encodeURIComponent(t)}`).join("&"),Ji=0,em=3,Hs=1,eb=2,io=[];io[Ji]=(n,t,e,i,s)=>{xt(n,Ji);const r=Zw(t,n,e.doc,e);i&&r===Nh&&!e.synced&&(e.synced=!0)};io[em]=(n,t,e,i,s)=>{xt(n,Hs),ge(n,Tr(e.awareness,Array.from(e.awareness.getStates().keys())))};io[Hs]=(n,t,e,i,s)=>{Qw(e.awareness,Oe(t),e)};io[eb]=(n,t,e,i,s)=>{$w(t,e.doc,(r,o)=>nb(e,o))};const Lf=3e4,nb=(n,t)=>console.warn(`Permission denied to access ${n.url}.
${t}`),nm=(n,t,e)=>{const i=ki(t),s=ke(),r=Rt(i),o=n.messageHandlers[r];return o?o(s,i,n,e,r):console.error("Unable to compute message"),s},Hc=(n,t,e)=>{t===n.ws&&(n.emit("connection-close",[e,n]),n.ws=null,t.close(),n.wsconnecting=!1,n.wsconnected?(n.wsconnected=!1,n.synced=!1,Fh(n.awareness,Array.from(n.awareness.getStates().keys()).filter(i=>i!==n.doc.clientID),n),n.emit("status",[{status:"disconnected"}])):n.wsUnsuccessfulReconnects++,setTimeout(im,dh(sy(2,n.wsUnsuccessfulReconnects)*100,n.maxBackoffTime),n))},im=n=>{if(n.shouldConnect&&n.ws===null){const t=new n._WS(n.url,n.protocols);t.binaryType="arraybuffer",n.ws=t,n.wsconnecting=!0,n.wsconnected=!1,n.synced=!1,t.onmessage=e=>{n.wsLastMessageReceived=Fi();const i=nm(n,new Uint8Array(e.data),!0);ph(i)>1&&t.send(he(i))},t.onerror=e=>{n.emit("connection-error",[e,n])},t.onclose=e=>{Hc(n,t,e)},t.onopen=()=>{n.wsLastMessageReceived=Fi(),n.wsconnecting=!1,n.wsconnected=!0,n.wsUnsuccessfulReconnects=0,n.emit("status",[{status:"connected"}]);const e=ke();if(xt(e,Ji),zc(e,n.doc),t.send(he(e)),n.awareness.getLocalState()!==null){const i=ke();xt(i,Hs),ge(i,Tr(n.awareness,[n.doc.clientID])),t.send(he(i))}},n.emit("status",[{status:"connecting"}])}},Fl=(n,t)=>{const e=n.ws;n.wsconnected&&e&&e.readyState===e.OPEN&&e.send(t),n.bcconnected&&Ds(n.bcChannel,t,n)};class ib extends fh{constructor(t,e,i,{connect:s=!0,awareness:r=new Jw(i),params:o={},protocols:a=[],WebSocketPolyfill:l=WebSocket,resyncInterval:c=-1,maxBackoffTime:h=2500,disableBc:f=!1}={}){for(super();t[t.length-1]==="/";)t=t.slice(0,t.length-1);this.serverUrl=t,this.bcChannel=t+"/"+e,this.maxBackoffTime=h,this.params=o,this.protocols=a,this.roomname=e,this.doc=i,this._WS=l,this.awareness=r,this.wsconnected=!1,this.wsconnecting=!1,this.bcconnected=!1,this.disableBc=f,this.wsUnsuccessfulReconnects=0,this.messageHandlers=io.slice(),this._synced=!1,this.ws=null,this.wsLastMessageReceived=0,this.shouldConnect=s,this._resyncInterval=0,c>0&&(this._resyncInterval=setInterval(()=>{if(this.ws&&this.ws.readyState===WebSocket.OPEN){const u=ke();xt(u,Ji),zc(u,i),this.ws.send(he(u))}},c)),this._bcSubscriber=(u,d)=>{if(d!==this){const m=nm(this,new Uint8Array(u),!1);ph(m)>1&&Ds(this.bcChannel,he(m),this)}},this._updateHandler=(u,d)=>{if(d!==this){const m=ke();xt(m,Ji),Yw(m,u),Fl(this,he(m))}},this.doc.on("update",this._updateHandler),this._awarenessUpdateHandler=({added:u,updated:d,removed:m},_)=>{const g=u.concat(d).concat(m),p=ke();xt(p,Hs),ge(p,Tr(r,g)),Fl(this,he(p))},this._exitHandler=()=>{Fh(this.awareness,[i.clientID],"app closed")},Oi&&typeof process<"u"&&process.on("exit",this._exitHandler),r.on("update",this._awarenessUpdateHandler),this._checkInterval=setInterval(()=>{this.wsconnected&&Lf<Fi()-this.wsLastMessageReceived&&Hc(this,this.ws,null)},Lf/10),s&&this.connect()}get url(){const t=tb(this.params);return this.serverUrl+"/"+this.roomname+(t.length===0?"":"?"+t)}get synced(){return this._synced}set synced(t){this._synced!==t&&(this._synced=t,this.emit("synced",[t]),this.emit("sync",[t]))}destroy(){this._resyncInterval!==0&&clearInterval(this._resyncInterval),clearInterval(this._checkInterval),this.disconnect(),Oi&&typeof process<"u"&&process.off("exit",this._exitHandler),this.awareness.off("update",this._awarenessUpdateHandler),this.doc.off("update",this._updateHandler),super.destroy()}connectBc(){if(this.disableBc)return;this.bcconnected||(Ww(this.bcChannel,this._bcSubscriber),this.bcconnected=!0);const t=ke();xt(t,Ji),zc(t,this.doc),Ds(this.bcChannel,he(t),this);const e=ke();xt(e,Ji),Qp(e,this.doc),Ds(this.bcChannel,he(e),this);const i=ke();xt(i,em),Ds(this.bcChannel,he(i),this);const s=ke();xt(s,Hs),ge(s,Tr(this.awareness,[this.doc.clientID])),Ds(this.bcChannel,he(s),this)}disconnectBc(){const t=ke();xt(t,Hs),ge(t,Tr(this.awareness,[this.doc.clientID],new Map)),Fl(this,he(t)),this.bcconnected&&(Xw(this.bcChannel,this._bcSubscriber),this.bcconnected=!1)}disconnect(){this.shouldConnect=!1,this.disconnectBc(),this.ws!==null&&Hc(this,this.ws,null)}connect(){this.shouldConnect=!0,!this.wsconnected&&this.ws===null&&(im(this),this.connectBc())}}function sb(n,t){const e=Le({value:JSON.parse(localStorage.getItem(n))??t});return Us(()=>{localStorage.setItem(n,JSON.stringify(e.value))}),e}var Br;class rb{constructor(){ce(this,"defaultColor","#f8fafc");un(this,Br,$n(Le(this.defaultColor)));ce(this,"_palette",ob);ce(this,"_customColors",sb("customColors",[]));this.validateColor(this.defaultColor)||console.warn(`Default color ${this.defaultColor} not found in palette`)}get _color(){return ee(de(this,Br))}set _color(t){Re(de(this,Br),Le(t))}get color(){return this._color}set color(t){if(!this.validateColor(t)){console.warn(`Color ${t} not found in palette or custom colors, it will not be used.`);return}this._color=t}get palette(){return this._palette}get customColors(){return this._customColors.value}resetColor(){this._color=this.defaultColor}addCustomColor(t){this._customColors.value.includes(t)||this._customColors.value.push(t)}deleteCustomColor(t){const e=this._customColors.value.findIndex(i=>i===t);if(e===-1){console.warn(`Color ${t} not found in custom colors, cannot delete.`);return}this._customColors.value.splice(e,1),t===this._color&&this.resetColor()}validateColor(t){const e=this._palette.some(s=>s.some(r=>r===t)),i=!e&&this._customColors.value.some(s=>s===t);return e||i}}Br=new WeakMap;const ob=[["#450a0a","#7f1d1d","#991b1b","#b91c1c","#dc2626","#ef4444","#f87171","#fca5a5","#fecaca","#fee2e2","#fef2f2"],["#431407","#7c2d12","#9a3412","#c2410c","#ea580c","#f97316","#fb923c","#fdba74","#fed7aa","#ffedd5","#fff7ed"],["#451a03","#78350f","#92400e","#b45309","#d97706","#f59e0b","#fbbf24","#fcd34d","#fde68a","#fef3c7","#fffbeb"],["#422006","#713f12","#854d0e","#a16207","#ca8a04","#eab308","#facc15","#fde047","#fef08a","#fef9c3","#fefce8"],["#1a2e05","#365314","#3f6212","#4d7c0f","#65a30d","#84cc16","#a3e635","#bef264","#d9f99d","#ecfccb","#f7fee7"],["#052e16","#14532d","#166534","#15803d","#16a34a","#22c55e","#4ade80","#86efac","#bbf7d0","#dcfce7","#f0fdf4"],["#022c22","#064e3b","#065f46","#047857","#059669","#10b981","#34d399","#6ee7b7","#a7f3d0","#d1fae5","#ecfdf5"],["#042f2e","#134e4a","#115e59","#0f766e","#0d9488","#14b8a6","#2dd4bf","#5eead4","#99f6e4","#ccfbf1","#f0fdfa"],["#083344","#164e63","#155e75","#0e7490","#0891b2","#06b6d4","#22d3ee","#67e8f9","#a5f3fc","#cffafe","#ecfeff"],["#082f49","#0c4a6e","#075985","#0369a1","#0284c7","#0ea5e9","#38bdf8","#7dd3fc","#bae6fd","#e0f2fe","#f0f9ff"],["#172554","#1e3a8a","#1e40af","#1d4ed8","#2563eb","#3b82f6","#60a5fa","#93c5fd","#bfdbfe","#dbeafe","#eff6ff"],["#1e1b4b","#312e81","#3730a3","#4338ca","#4f46e5","#6366f1","#818cf8","#a5b4fc","#c7d2fe","#e0e7ff","#eef2ff"],["#2e1065","#4c1d95","#5b21b6","#6d28d9","#7c3aed","#8b5cf6","#a78bfa","#c4b5fd","#ddd6fe","#ede9fe","#f5f3ff"],["#3b0764","#581c87","#6b21a8","#7e22ce","#9333ea","#a855f7","#c084fc","#d8b4fe","#e9d5ff","#f3e8ff","#faf5ff"],["#4a044e","#701a75","#86198f","#a21caf","#c026d3","#d946ef","#e879f9","#f0abfc","#f5d0fe","#fae8ff","#fdf4ff"],["#500724","#831843","#9d174d","#be185d","#db2777","#ec4899","#f472b6","#f9a8d4","#fbcfe8","#fce7f3","#fdf2f8"],["#4c0519","#881337","#9f1239","#be123c","#e11d48","#f43f5e","#fb7185","#fda4af","#fecdd3","#ffe4e6","#fff1f2"],["#0c0a09","#1c1917","#292524","#44403c","#57534e","#78716c","#a8a29e","#d6d3d1","#e7e5e4","#f5f5f4","#fafaf9"],["#0a0a0a","#171717","#262626","#404040","#525252","#737373","#a3a3a3","#d4d4d4","#e5e5e5","#f5f5f5","#fafafa"],["#09090b","#18181b","#27272a","#3f3f46","#52525b","#71717a","#a1a1aa","#d4d4d8","#e4e4e7","#f4f4f5","#fafafa"],["#030712","#111827","#1f2937","#374151","#4b5563","#6b7280","#9ca3af","#d1d5db","#e5e7eb","#f3f4f6","#f9fafb"],["#020617","#0f172a","#1e293b","#334155","#475569","#64748b","#94a3b8","#cbd5e1","#e2e8f0","#f1f5f9","#f8fafc"]];var zr,Hr,Vr,Gr,Wr,xa;class ab{constructor(t){ce(this,"scene",new q_);ce(this,"data");ce(this,"selection",null);ce(this,"camera");ce(this,"username",crypto.randomUUID().split("-")[0]);ce(this,"onChange");un(this,zr,$n("attach"));un(this,Hr,$n(!1));un(this,Vr,$n(!0));ce(this,"colorManager",new rb);ce(this,"boundingBox");ce(this,"voxelMesh");ce(this,"lastPointer");ce(this,"provider");ce(this,"users",new Map);un(this,Gr,$n(!1));un(this,Wr,$n(!1));un(this,xa,qr(()=>this.connected&&this.synced));ce(this,"ydoc");this.sceneSize=t,this.ydoc=new ur,this.provider=new ib("ws://localhost:1234","voxel",this.ydoc,{connect:!1}),this.provider.connectBc(),this.synced=!0,this.connected=!0,this.provider.awareness.on("change",this.handleAwarenessUpdate.bind(this)),this.provider.awareness.setLocalStateField("username",this.username),this.data=new zw(this.ydoc.getMap("voxels")),this.data.onChange=()=>{var e;return(e=this.onChange)==null?void 0:e.call(this)},this.voxelMesh=this.data.getVoxelMesh(),this.scene.add(this.voxelMesh),Us(()=>{this.mode,this.lastPointer&&this.updateSelection(this.lastPointer)}),Us(()=>{var e;this.voxelMesh.material.wireframe=this.wireframe,(e=this.onChange)==null||e.call(this)}),Us(()=>{var i;const e=new JM(this.sceneSize,this.showGrid);return this.boundingBox=e,this.scene.add(e.object),this.camera&&this.boundingBox.update(this.camera.position),(i=this.onChange)==null||i.call(this),()=>{this.scene.remove(e.object)}})}get mode(){return ee(de(this,zr))}set mode(t){Re(de(this,zr),Le(t))}get wireframe(){return ee(de(this,Hr))}set wireframe(t){Re(de(this,Hr),Le(t))}get showGrid(){return ee(de(this,Vr))}set showGrid(t){Re(de(this,Vr),Le(t))}get connected(){return ee(de(this,Gr))}set connected(t){Re(de(this,Gr),Le(t))}get synced(){return ee(de(this,Wr))}set synced(t){Re(de(this,Wr),Le(t))}get ready(){return ee(de(this,xa))}cameraUpdate(){!this.camera||!this.boundingBox||this.boundingBox.update(this.camera.position)}updateSelection(t){if(this.lastPointer=t,!this.camera)return;const e=new U().setFromMatrixPosition(this.camera.matrixWorld),i=new U(t.x,t.y,1).unproject(this.camera),s=this.intersectRay(e,i);if(!s){this.clearSelection();return}const{position:r,normal:o}=s,a=new U(.5,.5,.5),l=r.clone();if(this.mode==="attach"&&l.add(o),!this.isInBounds(l)){this.clearSelection();return}if(this.selection&&l.equals(this.selection))return;this.selection=l;const c=l.clone().add(a);this.provider.awareness.setLocalStateField("selection",c.toArray())}clearSelection(){this.selection&&(this.selection=null,this.provider.awareness.setLocalStateField("selection",null))}actOnSelection(){this.selection&&(this.mode==="attach"||this.mode==="replace"?this.data.setVoxel(this.selection,new Wt(this.colorManager.color)):this.mode==="delete"&&this.data.deleteVoxel(this.selection),this.lastPointer&&this.updateSelection(this.lastPointer))}destroy(){this.provider.destroy(),this.ydoc.destroy()}intersectRay(t,e){const i=e.clone().sub(t),s=i.length();i.normalize();const r=t.clone().floor(),o=new U(i.x>0?1:-1,i.y>0?1:-1,i.z>0?1:-1),a=new U(Math.abs(1/i.x),Math.abs(1/i.y),Math.abs(1/i.z)),l=new U(o.x>0?r.x+1-t.x:t.x-r.x,o.y>0?r.y+1-t.y:t.y-r.y,o.z>0?r.z+1-t.z:t.z-r.z),c=new U(a.x<1/0?a.x*l.x:1/0,a.y<1/0?a.y*l.y:1/0,a.z<1/0?a.z*l.z:1/0);let h=-1,f=0,u=null;for(;f<=s;){if(this.data.hasVoxel(r))return{position:r,normal:new U(h===0?-o.x:0,h===1?-o.y:0,h===2?-o.z:0)};if(this.mode==="attach"){const d=this.intersectsBounds(r);if(d){if(!u)u=d;else if(u.x!==0&&d.x===-1*u.x||u.x===0&&d.x!==0||u.y!==0&&d.y===-1*u.y||u.y===0&&d.y!==0||u.z!==0&&d.z===-1*u.z||u.z===0&&d.z!==0){const m=r.clone().add(d);return this.data.hasVoxel(m)?null:{position:r,normal:d}}}}c.x<c.y?c.x<c.z?(r.x+=o.x,f=c.x,c.x+=a.x,h=0):(r.z+=o.z,f=c.z,c.z+=a.z,h=2):c.y<c.z?(r.y+=o.y,f=c.y,c.y+=a.y,h=1):(r.z+=o.z,f=c.z,c.z+=a.z,h=2)}return null}intersectsBounds(t){if(!this.isInBounds(t,1))return null;const e=new U(t.x===-1?1:t.x===this.sceneSize?-1:0,t.y===-1?1:t.y===this.sceneSize?-1:0,t.z===-1?1:t.z===this.sceneSize?-1:0);return e.equals(new U)?null:e}isInBounds(t,e=0){return t.x>=0-e&&t.x<this.sceneSize+e&&t.y>=0-e&&t.y<this.sceneSize+e&&t.z>=0-e&&t.z<this.sceneSize+e}handleAwarenessUpdate({added:t,updated:e,removed:i}){var o;const s=[...t,...e],r=this.provider.awareness.getStates();for(const a of s){const l=r.get(a);if(!l||!l.username)continue;let c=this.users.get(a);if(c)l.selection?(c.selectionMesh.position.fromArray(l.selection),c.selectionMesh.visible=!0):c.selectionMesh.visible=!1;else{const h=this.getSelectionMesh(l.username);l.selection&&(h.position.fromArray(l.selection),h.visible=!0),this.scene.add(h),c={selectionMesh:h}}this.users.set(a,c)}for(const a of i){const l=this.users.get(a);l&&(this.scene.remove(l.selectionMesh),this.users.delete(a))}(o=this.onChange)==null||o.call(this)}getSelectionMesh(t){const e=new ar(1,1,1),i=new Pa({color:cb(t),opacity:.5,transparent:!0,depthTest:!1}),s=new Tn(e,i);return s.visible=!1,s}}zr=new WeakMap,Hr=new WeakMap,Vr=new WeakMap,Gr=new WeakMap,Wr=new WeakMap,xa=new WeakMap;const sm=Symbol("sceneState");function lb(n){km(sm,n)}function Ha(){return Om(sm)}function cb(n){let t=0;for(let o=0;o<n.length;o++)t=n.charCodeAt(o)+((t<<5)-t);const r=`hsl(${Math.max(t%360,0)}, 100%, 50%)`;return new Wt(r)}var hb=or('<div class="svelte-1cpoomu"></div>');function ub(n,t){ir(t,!0);let e=md(t,"controls");const i=Ha();let s=$n(void 0),r=Le({width:0,height:0}),o;const a=new OM,l=new mn(45,1,1,1e4);e(new BM(l,a.domElement)),e(e().mouseButtons={LEFT:null,RIGHT:bi.ROTATE,MIDDLE:bi.PAN},!0),l.position.set(20,25,20),e().target.set(i.sceneSize/2,0,i.sceneSize/2),e().update(),e().saveState(),i.camera=l;function c(m){i.updateSelection(new Nt(m[0]/r.width*2-1,m[1]/r.height*-2+1))}Us(()=>{!ee(s)||!i.ready||ee(s).appendChild(a.domElement)}),Us(()=>{a.setSize(r.width,r.height),l.aspect=r.width/r.height,l.updateProjectionMatrix(),i.cameraUpdate(),o&&c(o),a.render(i.scene,l)});let h=!1;function f(){h||(h=!0,requestAnimationFrame(()=>{h=!1,a.render(i.scene,l)}))}e().addEventListener("change",()=>{i.cameraUpdate(),f(),setTimeout(()=>{o&&c(o)})}),i.onChange=f;function u(m){const _=[m.clientX,m.clientY];c(_),o=_}var d=hb();d.__pointermove=u,d.__click=()=>i.actOnSelection(),pd(d,m=>Re(s,m),()=>ee(s)),Aa("pointerleave",d,()=>{i.clearSelection(),o=void 0}),eu(d,"clientWidth",m=>r.width=m),eu(d,"clientHeight",m=>r.height=m),wi(n,d),sr()}Ca(["pointermove","click"]);const fb="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%20-960%20960%20960'%20width='24px'%20fill='%23fff'%3e%3cpath%20d='M200-120q-33%200-56.5-23.5T120-200v-560q0-33%2023.5-56.5T200-840h357l-80%2080H200v560h560v-278l80-80v358q0%2033-23.5%2056.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12%2027-18t30-6q16%200%2030.5%206t26.5%2018l56%2057q11%2012%2017%2026.5t6%2029.5q0%2015-5.5%2029.5T897-728L530-360H360Zm481-424-56-56%2056%2056ZM440-440h56l232-232-28-28-29-28-231%20231v57Zm260-260-29-28%2029%2028%2028%2028-28-28Z'/%3e%3c/svg%3e",db="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%20-960%20960%20960'%20width='24px'%20fill='%23fff'%3e%3cpath%20d='m336-280%20144-144%20144%20144%2056-56-144-144%20144-144-56-56-144%20144-144-144-56%2056%20144%20144-144%20144%2056%2056ZM200-120q-33%200-56.5-23.5T120-200v-560q0-33%2023.5-56.5T200-840h560q33%200%2056.5%2023.5T840-760v560q0%2033-23.5%2056.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z'/%3e%3c/svg%3e",pb="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%20-960%20960%20960'%20width='24px'%20fill='%23fff'%3e%3cpath%20d='M320-80q-33%200-56.5-23.5T240-160v-80h-80q-33%200-56.5-23.5T80-320v-80h80v80h80v-320q0-33%2023.5-56.5T320-720h320v-80h-80v-80h80q33%200%2056.5%2023.5T720-800v80h80q33%200%2056.5%2023.5T880-640v480q0%2033-23.5%2056.5T800-80H320Zm0-80h480v-480H320v480ZM80-480v-160h80v160H80Zm0-240v-80q0-33%2023.5-56.5T160-880h80v80h-80v80H80Zm240-80v-80h160v80H320Zm0%20640v-480%20480Z'/%3e%3c/svg%3e",mb="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%20-960%20960%20960'%20width='24px'%20fill='%23fff'%3e%3cpath%20d='M280-200v-80h284q63%200%20109.5-40T720-420q0-60-46.5-100T564-560H312l104%20104-56%2056-200-200%20200-200%2056%2056-104%20104h252q97%200%20166.5%2063T800-420q0%2094-69.5%20157T564-200H280Z'/%3e%3c/svg%3e",gb="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%20-960%20960%20960'%20width='24px'%20fill='%23fff'%3e%3cpath%20d='M396-200q-97%200-166.5-63T160-420q0-94%2069.5-157T396-640h252L544-744l56-56%20200%20200-200%20200-56-56%20104-104H396q-63%200-109.5%2040T240-420q0%2060%2046.5%20100T396-280h284v80H396Z'/%3e%3c/svg%3e",_b="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%20-960%20960%20960'%20width='24px'%20fill='%23fff'%3e%3cpath%20d='M280-120q-33%200-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0%2033-23.5%2056.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160%200h80v-360h-80v360ZM280-720v520-520Z'/%3e%3c/svg%3e",vb="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%20-960%20960%20960'%20width='24px'%20fill='%23fff'%3e%3cpath%20d='M200-120q-33%200-56.5-23.5T120-200v-160h80v160h160v80H200Zm400%200v-80h160v-160h80v160q0%2033-23.5%2056.5T760-120H600ZM120-600v-160q0-33%2023.5-56.5T200-840h160v80H200v160h-80Zm640%200v-160H600v-80h160q33%200%2056.5%2023.5T840-760v160h-80Z'/%3e%3c/svg%3e",xb="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%20-960%20960%20960'%20width='24px'%20fill='%23fff'%3e%3cpath%20d='M480-280q0-45%2018.5-83t49.5-66l86%20149H480Zm100%20172q-37-21-62-55t-34-77h173l-77%20132Zm77-212-77-132q23-13%2048-20.5t52-7.5q17%200%2032.5%203t30.5%208l-86%20149Zm23%20240q-17%200-32.5-3T617-91l86-149%2077%20132q-23%2013-48%2020.5T680-80Zm23-240%2077-132q37%2021%2062%2055t34%2077H703Zm109%20189-86-149h154q0%2045-18%2083t-50%2066Zm19-429h-83q-26-88-99-144t-169-56q-117%200-198.5%2081.5T200-480q0%2072%2032.5%20132t87.5%2098v-110h80v240H160v-80h94q-62-50-98-122.5T120-480q0-75%2028.5-140.5t77-114q48.5-48.5%20114-77T480-840q129%200%20226.5%2079.5T831-560Z'/%3e%3c/svg%3e",Sb="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%20-960%20960%20960'%20width='24px'%20fill='%23fff'%3e%3cpath%20d='M200-80v-120H80v-80h120v-160H80v-80h120v-160H80v-80h120v-120h80v120h160v-120h80v120h160v-120h80v120h120v80H760v160h120v80H760v160h120v80H760v120h-80v-120H520v120h-80v-120H280v120h-80Zm80-200h160v-160H280v160Zm240%200h160v-160H520v160ZM280-520h160v-160H280v160Zm240%200h160v-160H520v160Z'/%3e%3c/svg%3e",Mb="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%20-960%20960%20960'%20width='24px'%20fill='%23fff'%3e%3cpath%20d='M480-80q-82%200-155-31.5t-127.5-86Q143-252%20111.5-325T80-480q0-83%2032.5-156t88-127Q256-817%20330-848.5T488-880q80%200%20151%2027.5t124.5%2076q53.5%2048.5%2085%20115T880-518q0%20115-70%20176.5T640-280h-74q-9%200-12.5%205t-3.5%2011q0%2012%2015%2034.5t15%2051.5q0%2050-27.5%2074T480-80Zm0-400Zm-220%2040q26%200%2043-17t17-43q0-26-17-43t-43-17q-26%200-43%2017t-17%2043q0%2026%2017%2043t43%2017Zm120-160q26%200%2043-17t17-43q0-26-17-43t-43-17q-26%200-43%2017t-17%2043q0%2026%2017%2043t43%2017Zm200%200q26%200%2043-17t17-43q0-26-17-43t-43-17q-26%200-43%2017t-17%2043q0%2026%2017%2043t43%2017Zm120%20160q26%200%2043-17t17-43q0-26-17-43t-43-17q-26%200-43%2017t-17%2043q0%2026%2017%2043t43%2017ZM480-160q9%200%2014.5-5t5.5-13q0-14-15-33t-15-57q0-42%2029-67t71-25h70q66%200%20113-38.5T800-518q0-121-92.5-201.5T488-800q-136%200-232%2093t-96%20227q0%20133%2093.5%20226.5T480-160Z'/%3e%3c/svg%3e";var yb=(n,t)=>{var e;return(e=t.onviewreset)==null?void 0:e.call(t)},Eb=or('<div id="toolbar" class="svelte-zw9js1"><section class="svelte-zw9js1"><label title="Attach (a)" class="svelte-zw9js1"><input type="radio" name="mode" id="mode-attach" class="svelte-zw9js1"> <img alt="attach" class="svelte-zw9js1"></label> <label title="Delete (d)" class="svelte-zw9js1"><input type="radio" name="mode" id="mode-delete" class="svelte-zw9js1"> <img alt="delete" class="svelte-zw9js1"></label> <label title="Replace (r)" class="svelte-zw9js1"><input type="radio" name="mode" id="mode-replace" class="svelte-zw9js1"> <img alt="replace" class="svelte-zw9js1"></label></section> <span class="separator svelte-zw9js1"></span> <section class="svelte-zw9js1"><button title="Undo (C-z)" class="svelte-zw9js1"><img alt="undo"></button> <button title="Redo (C-y)" class="svelte-zw9js1"><img alt="redo"></button> <button title="Clear scene (c)" class="svelte-zw9js1"><img alt="clear"></button> <button title="Reset view (R)" class="svelte-zw9js1"><img alt="reset"></button></section> <span class="separator svelte-zw9js1"></span> <section class="svelte-zw9js1"><label title="Toggle wireframe (w)" class="svelte-zw9js1"><input type="checkbox" class="svelte-zw9js1"> <img alt="wireframe" class="svelte-zw9js1"></label> <label title="Toggle grid (g)" class="svelte-zw9js1"><input type="checkbox" class="svelte-zw9js1"> <img alt="grid" class="svelte-zw9js1"></label> <label title="Toggle palette (p)" class="svelte-zw9js1"><input type="checkbox" class="svelte-zw9js1"> <img alt="palette" class="svelte-zw9js1"></label> <div class="color svelte-zw9js1"></div></section></div>');function wb(n,t){ir(t,!0);const e=[];let i=md(t,"paletteOpen");const s=Ha();function r(et){var Lt;et.key==="R"?(Lt=t.onviewreset)==null||Lt.call(t):et.ctrlKey&&et.key==="z"?s.data.undo():et.ctrlKey&&et.key==="y"?s.data.redo():et.key==="c"?s.data.clear():et.key==="w"?s.wireframe=!s.wireframe:et.key==="a"?s.mode="attach":et.key==="d"?s.mode="delete":et.key==="r"?s.mode="replace":et.key==="g"?s.showGrid=!s.showGrid:et.key==="p"&&i(!i())}var o=Eb();Aa("keydown",Ko,r);var a=ye(o),l=ye(a),c=ye(l);c.value=(c.__value="attach")==null?"":"attach";var h=pe(c,2);rn(h,"src",fb);var f=pe(l,2),u=ye(f);u.value=(u.__value="delete")==null?"":"delete";var d=pe(u,2);rn(d,"src",db);var m=pe(f,2),_=ye(m);_.value=(_.__value="replace")==null?"":"replace";var g=pe(_,2);rn(g,"src",pb);var p=pe(a,4),b=ye(p);b.__click=()=>s.data.undo();var w=ye(b);rn(w,"src",mb);var M=pe(b,2);M.__click=()=>s.data.redo();var D=ye(M);rn(D,"src",gb);var P=pe(M,2);P.__click=()=>s.data.clear();var A=ye(P);rn(A,"src",_b);var N=pe(P,2);N.__click=[yb,t];var y=ye(N);rn(y,"src",xb);var S=pe(p,4),C=ye(S),V=ye(C),B=pe(V,2);rn(B,"src",vb);var q=pe(C,2),Z=ye(q),G=pe(Z,2);rn(G,"src",Sb);var K=pe(q,2),z=ye(K),it=pe(z,2);rn(it,"src",Mb);var ht=pe(K,2);$c(()=>{rn(ht,"title",`Current color: ${s.colorManager.color}`),fd(ht,"background",s.colorManager.color)}),ja(e,[],c,()=>s.mode,et=>s.mode=et),ja(e,[],u,()=>s.mode,et=>s.mode=et),ja(e,[],_,()=>s.mode,et=>s.mode=et),Za(V,()=>s.wireframe,et=>s.wireframe=et),Za(Z,()=>s.showGrid,et=>s.showGrid=et),Za(z,i),wi(n,o),sr()}Ca(["click"]);const bb="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%20-960%20960%20960'%20width='24px'%20fill='%23fff'%3e%3cpath%20d='M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z'/%3e%3c/svg%3e";var Tb=or('<button class="color svelte-17qknjh" aria-label="Select color"></button>');function If(n,t){ir(t,!0);const e=Ha();var i=Tb();i.__click=()=>e.colorManager.color=t.color,$c(()=>{rn(i,"title",t.title??t.color),ud(i,"active",t.color===e.colorManager.color),fd(i,"background",t.color)}),Aa("auxclick",i,s=>{var r;return s.button===1&&((r=t.onmiddleclick)==null?void 0:r.call(t))}),wi(n,i),sr()}Ca(["click"]);var Ab=or('<aside class="svelte-1q4pwz4"><h3>Color palette</h3> <div class="colors svelte-1q4pwz4"></div> <h3 id="custom-colors" class="svelte-1q4pwz4">Custom colors</h3> <div class="colors svelte-1q4pwz4"><!> <button title="Add color" id="add-color" class="svelte-1q4pwz4"><img alt="add color"> <input type="color" class="svelte-1q4pwz4"></button></div></aside>');function Cb(n,t){ir(t,!0);const e=Ha();let i;var s=Ab(),r=pe(ye(s),2);qa(r,20,()=>e.colorManager.palette,f=>f,(f,u)=>{var d=hd(),m=Yf(d);qa(m,16,()=>u,_=>_,(_,g)=>{If(_,{get color(){return g}})}),wi(f,d)});var o=pe(r,4),a=ye(o);qa(a,16,()=>e.colorManager.customColors,f=>f,(f,u)=>{const d=qr(()=>`${u} (Middle click to delete)`);If(f,{get color(){return u},onmiddleclick:()=>e.colorManager.deleteCustomColor(u),get title(){return ee(d)}})});var l=pe(a,2);l.__click=()=>i.click();var c=ye(l);rn(c,"src",bb);var h=pe(c,2);h.__change=()=>{e.colorManager.addCustomColor(i.value),e.colorManager.color=i.value},pd(h,f=>i=f,()=>i),$c(()=>ud(s,"open",t.open)),wi(n,s),sr()}Ca(["click","change"]);var Rb=or('<main class="svelte-udqf1f"><div class="svelte-udqf1f"><!> <!></div> <!></main>'),Db=or("<h2>Connecting to server</h2>");function Pb(n,t){ir(t,!0);const e=new ab(10);lb(e);let i=$n(void 0),s=$n(!1);var r=hd();Aa("beforeunload",Ko,()=>e.destroy());var o=Yf(r);{var a=c=>{var h=Rb(),f=ye(h),u=ye(f);ub(u,{get controls(){return ee(i)},set controls(_){Re(i,Le(_))}});var d=pe(u,2);wb(d,{onviewreset:()=>ee(i)&&ee(i).reset(),get paletteOpen(){return ee(s)},set paletteOpen(_){Re(s,Le(_))}});var m=pe(f,2);Cb(m,{get open(){return ee(s)}}),wi(c,h)},l=c=>{var h=Db();wi(c,h)};vg(o,c=>{e.ready?c(a):c(l,!1)})}wi(n,r),sr()}mg(Pb,{target:document.getElementById("app")});
