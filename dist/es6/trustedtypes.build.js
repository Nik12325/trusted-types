(function(){/*

 Copyright 2017 Google Inc. All Rights Reserved.

 Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.

  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
*/
'use strict';function aa(a){const b=/\s+/;return a.trim().split(/\s*;\s*/).map(c=>c.split(b)).reduce(function(c,d){d[0]&&(c[d[0]]=d.slice(1).map(h=>h).sort());return c},{})}function ba(a){const b=aa(a),c="trusted-types"in b;let d=["*"];c&&(d=b["trusted-types"].filter(h=>"'"!==h.charAt(0)));return new ca(!0,c,d,a)}class ca{constructor(a,b,c,d=null){this.b=a;this.a=b;this.c=c;this.f=d}};const da=()=>{throw new TypeError("undefined conversion");},{toLowerCase:ea,toUpperCase:fa}=String.prototype;function ka(){throw new TypeError("Illegal constructor");}function g(){throw new TypeError("Illegal constructor");}
const {F:r,D:la}=function(){function a(e){let f=Q.get(e);void 0===f&&(f=m(null),Q.set(e,f));return f}function b(e){const f=ha(e);if(null==f||ha(f)!==ia)throw Error();for(const p of F(f))u(e,p,{value:e[p]});return e}function c(e,f){v(e.prototype);delete e.name;u(e,"name",{value:f})}function d(e){return f=>f instanceof e&&Q.has(f)}function h(e,f){function p(y,R){const xa=f[R]||da,ya=v(new y(S,e));return v({[R](z,...L){z=xa(""+z,...L);if(void 0===z||null===z)z="";z=""+z;L=v(m(ya));a(L).v=z;return L}}[R])}
const l=m(ka.prototype);for(const y of F(M))l[y]=p(M[y],y);u(l,"name",{value:e,writable:!1,configurable:!1,enumerable:!0});return v(l)}function k(e,f,p,l="",y=""){e=fa.apply(String(e));(l=y?y:l)||(l="http://www.w3.org/1999/xhtml");if(l=G.apply(w,[l])?w[l]:null){if(G.apply(l,[e])&&l[e]&&G.apply(l[e][f],[p])&&l[e][f][p])return l[e][f][p];if(G.apply(l,["*"])&&G.apply(l["*"][f],[p])&&l["*"][f][p])return l["*"][f][p]}}function n(){return N}const {assign:q,create:m,defineProperty:u,freeze:v,getOwnPropertyNames:F,
getPrototypeOf:ha,prototype:ia}=Object,{hasOwnProperty:G}=ia,{forEach:za,push:Aa}=Array.prototype,S=Symbol(),Q=b(new WeakMap),H=b([]),T=b([]);let N=null,U=!1;class I{constructor(e,f){if(e!==S)throw Error("cannot call the constructor");u(this,"policyName",{value:f,enumerable:!0})}toString(){return a(this).v}valueOf(){return a(this).v}}class t extends I{}c(t,"TrustedURL");class A extends I{}c(A,"TrustedScriptURL");class B extends I{}c(B,"TrustedHTML");class C extends I{}c(C,"TrustedScript");c(I,"TrustedType");
const ja=v(m(new B(S,"")));a(ja).v="";const w={["http://www.w3.org/1999/xhtml"]:{A:{attributes:{href:t.name}},AREA:{attributes:{href:t.name}},BASE:{attributes:{href:t.name}},BUTTON:{attributes:{formaction:t.name}},EMBED:{attributes:{src:A.name}},FORM:{attributes:{action:t.name}},FRAME:{attributes:{src:t.name}},IFRAME:{attributes:{src:t.name,srcdoc:B.name}},INPUT:{attributes:{formaction:t.name}},OBJECT:{attributes:{data:A.name,codebase:A.name}},SCRIPT:{attributes:{src:A.name,text:C.name},properties:{innerText:C.name,
textContent:C.name,text:C.name}},"*":{attributes:{},properties:{innerHTML:B.name,outerHTML:B.name}}},["http://www.w3.org/1999/xlink"]:{"*":{attributes:{href:t.name},properties:{}}},["http://www.w3.org/2000/svg"]:{"*":{attributes:{href:t.name},properties:{}}}};var E={codebase:"codeBase",formaction:"formAction"};"srcdoc"in HTMLIFrameElement.prototype||delete w["http://www.w3.org/1999/xhtml"].IFRAME.attributes.srcdoc;for(const e of Object.keys(w["http://www.w3.org/1999/xhtml"])){w["http://www.w3.org/1999/xhtml"][e].properties||
(w["http://www.w3.org/1999/xhtml"][e].properties={});for(const f of Object.keys(w["http://www.w3.org/1999/xhtml"][e].attributes))w["http://www.w3.org/1999/xhtml"][e].properties[E[f]?E[f]:f]=w["http://www.w3.org/1999/xhtml"][e].attributes[f]}for(const e of F(HTMLElement.prototype))"on"===e.slice(0,2)&&(w["http://www.w3.org/1999/xhtml"]["*"].attributes[e]="TrustedScript");const M={createHTML:B,createScriptURL:A,createURL:t,createScript:C},Ba=M.hasOwnProperty;E=m(g.prototype);q(E,{createPolicy:function(e,
f){if(U&&-1===T.indexOf(e))throw new TypeError("Policy "+e+" disallowed.");if(-1!==H.indexOf(e))throw new TypeError("Policy "+e+" exists.");H.push(e);const p=m(null);if(f&&"object"===typeof f)for(const l of F(f))Ba.call(M,l)&&(p[l]=f[l]);else console.warn("trustedTypes.createPolicy "+e+" was given an empty policy");v(p);f=h(e,p);"default"===e&&(N=f);return f},getPolicyNames:function(){return H.slice()},j:d(B),m:d(t),l:d(A),g:d(C),h:function(e,f,p="",l=""){f=ea.apply(String(f));return k(e,"attributes",
f,p,l)||null},w:function(e,f,p=""){return k(e,"properties",String(f),p)||null},i:function(e=""){if(!e)try{e=document.documentElement.namespaceURI}catch(f){e="http://www.w3.org/1999/xhtml"}return(e=w[e])?JSON.parse(JSON.stringify(e)):{}},s:ja,o:N,TrustedHTML:B,TrustedURL:t,TrustedScriptURL:A,TrustedScript:C});u(E,"defaultPolicy",{get:n,set:()=>{}});return{F:v(E),D:function(e){-1!==e.indexOf("*")?U=!1:(U=!0,T.length=0,za.call(e,f=>{Aa.call(T,""+f)}))},G:n,H:function(){N=null;H.splice(H.indexOf("default"),
1)}}}();const {defineProperty:x}=Object;function ma(a,b,c){x(a,b,{value:c})};const {apply:D}=Reflect,{getOwnPropertyNames:na,getOwnPropertyDescriptor:J,getPrototypeOf:oa}=Object,{hasOwnProperty:K}=Object.prototype,{slice:pa}=String.prototype,qa="function"==typeof window.URL?URL.prototype.constructor:null;let ra;
const O=document.createElement("div").constructor.name?a=>a.name:a=>(""+a).match(/^\[object (\S+)\]$/)[1],sa=J(window,"open")?window:window.constructor.prototype,ta=D(K,Element.prototype,["insertAdjacentHTML"])?Element.prototype:HTMLElement.prototype,ua=window.SecurityPolicyViolationEvent||null,P=r.i("http://www.w3.org/1999/xhtml"),V={TrustedHTML:r.TrustedHTML,TrustedScript:r.TrustedScript,TrustedScriptURL:r.TrustedScriptURL,TrustedURL:r.TrustedURL};
for(const a of Object.keys(P)){const b=P[a].properties;for(const [c,d]of Object.entries(b))b[c]=V[d]}const W={TrustedHTML:r.j,TrustedURL:r.m,TrustedScriptURL:r.l,TrustedScript:r.g},va={TrustedHTML:"createHTML",TrustedURL:"createURL",TrustedScriptURL:"createScriptURL",TrustedScript:"createScript"};
function wa(a,b,c,d){function h(u){a.c.call(a,this,c,d,q,0,[u])}let k=b,n,q;var m=oa(Node.prototype);do(q=(n=J(k,c))?n.set:null)||(k=oa(k)||m);while(!q&&k!==m&&k);if(!(q instanceof Function))throw new TypeError("No setter for property "+c+" on object"+b);m=X(b,c);if(a.b[m])throw Error(`TrustedTypesEnforcer: Double installation detected: ${m} ${c}`);k===b?x(b,c,{set:h}):x(b,c,{set:h,get:n.get,configurable:!0});a.b[m]=q}
function Y(a,b,c,d,h){Z(a,b,c,function(k,...n){return a.c.call(a,this,c,d,k,h,n)})}function Ca(a){Z(a,Element.prototype,"setAttribute",function(b,...c){return a.C.bind(a,this,b).apply(a,c)});Z(a,Element.prototype,"setAttributeNS",function(b,...c){return a.B.bind(a,this,b).apply(a,c)})}
function Da(a){["appendChild","insertBefore","replaceChild"].forEach(b=>{Z(a,Node.prototype,b,function(c,...d){return a.f.bind(a,this,!1,c).apply(a,d)})});Z(a,ta,"insertAdjacentText",function(b,...c){return a.u.bind(a,this,b).apply(a,c)});"after"in Element.prototype&&(["after","before","replaceWith"].forEach(b=>{Z(a,Element.prototype,b,function(c,...d){return a.f.bind(a,this,!0,c).apply(a,d)})}),["append","prepend"].forEach(b=>{Z(a,Element.prototype,b,function(c,...d){return a.f.bind(a,this,!1,c).apply(a,
d)})}))}function Ea(a){for(const b of na(P))for(const c of na(P[b].properties))wa(a,window["*"==b?"HTMLElement":O(document.createElement(b).constructor)].prototype,c,P[b].properties[c])}
function Fa(a){la(a.a.c);if(a.a.a||a.a.b)"ShadowRoot"in window&&wa(a,ShadowRoot.prototype,"innerHTML",r.TrustedHTML),ra=function(b){return 0==b.createRange().createContextualFragment({toString:()=>"<div></div>"}).childNodes.length}(document),Y(a,Range.prototype,"createContextualFragment",r.TrustedHTML,0),Y(a,ta,"insertAdjacentHTML",r.TrustedHTML,1),J(Document.prototype,"write")?(Y(a,Document.prototype,"write",r.TrustedHTML,0),Y(a,Document.prototype,"open",r.TrustedURL,0)):(Y(a,HTMLDocument.prototype,
"write",r.TrustedHTML,0),Y(a,HTMLDocument.prototype,"open",r.TrustedURL,0)),Y(a,sa,"open",r.TrustedURL,0),"DOMParser"in window&&Y(a,DOMParser.prototype,"parseFromString",r.TrustedHTML,0),Y(a,window,"setInterval",r.TrustedScript,0),Y(a,window,"setTimeout",r.TrustedScript,0),Ca(a),Da(a),Ea(a)}
function Z(a,b,c,d){var h=J(b,c);const k=h?h.value:null;if(!(k instanceof Function))throw new TypeError("Property "+c+" on object"+b+" is not a function");h=X(b,c);if(a.b[h])throw Error(`TrustedTypesEnforcer: Double installation detected: ${h} ${c}`);ma(b,c,function(...n){return d.bind(this,k).apply(this,n)});a.b[h]=k}function Ga(a,b,c=""){const d=r.o;if(!d)throw Error("Default policy does not exist");if(!W.hasOwnProperty(a))throw Error();return d[va[a]](b,c)}
function Ha(a,b,c,d,h){const k=O(b.constructor)||""+b,n=`Failed to set ${c} on ${k}: `+`This property requires ${d.name}.`;a.a.b&&console.warn(n,c,b,d,h);if("function"==typeof ua){let m="";if(d===r.TrustedURL||d===r.TrustedScriptURL){try{var q=new qa(h,document.baseURI||void 0)}catch(u){q=null}if(m=q||"")m=m.href}d=D(pa,h,[0,40]);c=new ua("securitypolicyviolation",{bubbles:!0,blockedURI:m,disposition:a.a.a?"enforce":"report",documentURI:document.location.href,effectiveDirective:"trusted-types",originalPolicy:a.a.f,
statusCode:0,violatedDirective:"trusted-types",sample:`${k}.${c} ${d}`});b instanceof Node&&b.isConnected?b.dispatchEvent(c):document.dispatchEvent(c)}if(a.a.a)throw new TypeError(n);}function X(a,b){return""+(a.constructor.name?a.constructor.name:a.constructor)+"-"+b}
class Ia{constructor(a){this.a=a;this.b={}}C(a,b,...c){if(null!==a.constructor&&a instanceof Element){var d=(c[0]=String(c[0])).toLowerCase();if((d=r.h(a.tagName,d,a.namespaceURI))&&D(K,V,[d]))return this.c(a,"setAttribute",V[d],b,1,c)}return D(b,a,c)}B(a,b,...c){if(null!==a.constructor&&a instanceof Element){var d=c[0]?String(c[0]):null;c[0]=d;const h=(c[1]=String(c[1])).toLowerCase();if((d=r.h(a.tagName,h,a.namespaceURI,d))&&D(K,V,[d]))return this.c(a,"setAttributeNS",V[d],b,2,c)}return D(b,a,c)}f(a,
b,c,...d){if((b?a.parentNode:a)instanceof HTMLScriptElement&&0<d.length)for(b=0;b<d.length;b++){let h=d[b];if(h instanceof Node&&h.nodeType!==Node.TEXT_NODE)continue;if(h instanceof Node&&h.nodeType==Node.TEXT_NODE)h=h.textContent;else if(r.g(h)){d[b]=document.createTextNode(h);continue}let k,n;try{k=Ga("TrustedScript",h,"script.text")}catch(q){n=!0}n&&Ha(this,a,c.name,r.TrustedScript,h);d[b]=document.createTextNode(""+k)}return D(c,a,d)}u(a,b,...c){const d=["beforebegin","afterend"];if(a instanceof
Element&&a.parentElement instanceof HTMLScriptElement&&1<c.length&&d.includes(c[0])&&!r.g(c[1])){let k;try{var h=Ga("TrustedScript",c[1],"script.text")}catch(n){k=!0}k&&Ha(this,a,"insertAdjacentText",r.TrustedScript,c[1]);b=document.createTextNode(""+h);h=this.b[X(Node.prototype,"insertBefore")];switch(c[0]){case d[0]:D(h,a.parentElement,[b,a]);break;case d[1]:D(h,a.parentElement,[b,a.nextSibling])}}else D(b,a,c)}c(a,b,c,d,h,k){const n=k[h],q=c.name;if(W.hasOwnProperty(q)&&W[q](n))return ra&&"createContextualFragment"==
b&&(k[h]=k[h].toString()),D(d,a,k);if(c===r.TrustedScript){var m="setAttribute"==b||"setAttributeNS"===b||"on"===D(pa,b,[0,2]);if(("setInterval"===b||"setTimeout"===b||m)&&"function"===typeof n||m&&null===n)return D(d,a,k)}let u,v;m=a instanceof Element?a.localName:O(a?a.constructor:window.constructor);try{u=Ga(q,n,m+"."+b)}catch(F){v=!0}if(!v)return k[h]=u,D(d,a,k);Ha(this,a,b,c,n);return D(d,a,k)}};if("undefined"!==typeof window&&(window.TrustedTypes&&"undefined"===typeof window.trustedTypes&&(window.trustedTypes=Object.freeze(window.TrustedTypes)),"undefined"===typeof window.trustedTypes)){var Ja=Object.create(g.prototype);Object.assign(Ja,{isHTML:r.j,isURL:r.m,isScriptURL:r.l,isScript:r.g,createPolicy:r.createPolicy,getPolicyNames:r.getPolicyNames,getAttributeType:r.h,getPropertyType:r.w,getTypeMapping:r.i,emptyHTML:r.s,_isPolyfill_:!0});Object.defineProperty(Ja,"defaultPolicy",Object.getOwnPropertyDescriptor(r,
"defaultPolicy")||{});window.trustedTypes=Object.freeze(Ja);window.TrustedHTML=r.TrustedHTML;window.TrustedURL=r.TrustedURL;window.TrustedScriptURL=r.TrustedScriptURL;window.TrustedScript=r.TrustedScript;window.TrustedTypePolicy=ka;window.TrustedTypePolicyFactory=g};function Ka(){try{var a;if(!(a=document.currentScript)){{const c=document.getElementsByTagName("script");a=c[c.length-1]}}if(a&&"Content-Security-Policy:"==a.textContent.trim().substr(0,24))return a.textContent.trim().slice(24);if(a.dataset.csp)return a.dataset.csp;const b=document.head.querySelector('meta[http-equiv^="Content-Security-Policy"]');if(b)return b.content.trim()}catch(b){}return null}var La;
a:{for(const a of["trustedTypes","TrustedTypes"])if(window[a]&&!window[a]._isPolyfill_){La=!1;break a}La=!0}if(La){{const a=Ka(),b=a?ba(a):new ca(!1,!1,["*"]);Fa(new Ia(b))}};}).call(this);

//# sourceMappingURL=trustedtypes.build.js.map
