(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[910],{9601:function(e,t){"use strict";t.Z=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(2===e.length)return o(e[0],e[1])||null;var n=e.slice(1).reduce((function(e,t){return o(e,t)}),e[0]);return n||null};var n=new WeakMap;function o(e,t){if(e&&t){var o=n.get(e)||new WeakMap;n.set(e,o);var l=o.get(t)||function(n){s(e,n),s(t,n)};return o.set(t,l),l}return e||t}function s(e,t){"function"===typeof e?e(t):e.current=t}},65:function(e,t,n){"use strict";n.d(t,{HY:function(){return Jt},AA:function(){return et},bk:function(){return Xt},yM:function(){return Rt},sb:function(){return xt},Nw:function(){return Et},h:function(){return Xe},GH:function(){return Qt},Iu:function(){return wn}});const o=!1,s=!0,l=!1,r=!0,i=!0,a=!0,c=!0,$=!0,m=!0,d=!0,u=!0,p=!0,f=!0,v=!0,h=!0,g=!1,y=!0,b=!0,w=!0,k=!0,S=!0,T=!0,N=!0,x=!0,R=!0,C=!0,L=!0,O=!0,P=!0,A=!0,I=!0,E=!0,M=!0,V=!0,j=!0,D=!0,K=!0,H=!0,B=!0,z=!0,q=!0,W=!0,_=!0,Z=!0,U=!1,F=!1,G=!1,Y=!1,Q=!1,X=!1,J=!1,ee=!1,te=!1,ne=!0,oe=!1,se=!0,le=!1,re=!0,ie=!0,ae=!0,ce=!1,$e=!0,me=!0,de=!1,ue=!1,pe=!1,fe=!0,ve="app";let he,ge,ye,be,we=0,ke=!1,Se=!1,Te=!1,Ne=!1,xe=null,Re=0,Ce=!1;const Le="undefined"!==typeof window?window:{},Oe=(ce&&Le.CSS,Le.document||{head:{}}),Pe=(Le.HTMLElement,{$flags$:0,$resourcesUrl$:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,o)=>e.addEventListener(t,n,o),rel:(e,t,n,o)=>e.removeEventListener(t,n,o),ce:(e,t)=>new CustomEvent(e,t)}),Ae=!le||!R||(()=>(Oe.head.attachShadow+"").indexOf("[native")>-1)(),Ie=(()=>{let e=!1;try{Oe.addEventListener("e",null,Object.defineProperty({},"passive",{get(){e=!0}}))}catch(t){}return e})(),Ee=!!$e&&(()=>{try{return new CSSStyleSheet,"function"===typeof(new CSSStyleSheet).replace}catch(e){}return!1})(),Me=(e,t,n,o)=>{p&&n&&(g&&(n=o?n.filter((([e])=>32&e)):n.filter((([e])=>!(32&e)))),n.map((([n,o,s])=>{const l=y?je(e,n):e,r=Ve(t,s),i=De(n);Pe.ael(l,o,r,i),(t.$rmListeners$=t.$rmListeners$||[]).push((()=>Pe.rel(l,o,r,i)))})))},Ve=(e,t)=>n=>{try{ee?256&e.$flags$?e.$lazyInstance$[t](n):(e.$queuedListeners$=e.$queuedListeners$||[]).push([t,n]):e.$hostElement$[t](n)}catch(o){sn(o)}},je=(e,t)=>v&&4&t?Oe:f&&8&t?Le:h&&16&t?Oe.body:g&&32&t?e.parentElement:e,De=e=>Ie?{passive:0!==(1&e),capture:0!==(2&e)}:0!==(2&e),Ke="s-id",He="sty-id",Be="c-id",ze="http://www.w3.org/1999/xlink",qe=(e,t="")=>{if(te&&performance.mark){const n=`st:${e}:${t}:${we++}`;return performance.mark(n),()=>performance.measure(`[Stencil] ${e}() <${t}>`,n)}return()=>{}},We=new WeakMap,_e=(e,t,n)=>{let o=mn.get(e);Ee&&n?(o=o||new CSSStyleSheet,o.replace(t)):o=t,mn.set(e,o)},Ze=(e,t,n,o)=>{let s=Fe(t,n),l=mn.get(s);if(!fe)return s;if(e=11===e.nodeType?e:Oe,l)if("string"===typeof l){e=e.head||e;let n,r=We.get(e);if(r||We.set(e,r=new Set),!r.has(s)){if(X&&e.host&&(n=e.querySelector(`[sty-id="${s}"]`)))n.innerHTML=l;else{if(ce&&Pe.$cssShim$){n=Pe.$cssShim$.createHostStyle(o,s,l,!!(10&t.$flags$));const e=n["s-sc"];e&&(s=e,r=null)}else n=Oe.createElement("style"),n.innerHTML=l;(Q||U)&&n.setAttribute(He,s),e.insertBefore(n,e.querySelector("link"))}r&&r.add(s)}}else $e&&!e.adoptedStyleSheets.includes(l)&&(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return s},Ue=e=>{const t=e.$cmpMeta$,n=e.$hostElement$,o=t.$flags$,s=qe("attachStyles",t.$tagName$),l=Ze(R&&Ae&&n.shadowRoot?n.shadowRoot:n.getRootNode(),t,e.$modeName$,n);(R||x)&&L&&10&o&&(n["s-sc"]=l,n.classList.add(l+"-h"),x&&2&o&&n.classList.add(l+"-s")),s()},Fe=(e,t)=>"sc-"+(k&&t&&32&e.$flags$?e.$tagName$+"-"+t:e.$tagName$),Ge=e=>dn.map((t=>t(e))).find((e=>!!e)),Ye={},Qe=e=>"object"===(e=typeof e)||"function"===e,Xe=(e,t,...n)=>{let o=null,s=null,l=null,r=!1,i=!1,a=[];const c=t=>{for(let n=0;n<t.length;n++)o=t[n],Array.isArray(o)?c(o):null!=o&&"boolean"!==typeof o&&((r="function"!==typeof e&&!Qe(o))?o=String(o):G&&"function"!==typeof e&&void 0===o.$flags$&&rn("vNode passed as children has unexpected type.\nMake sure it's using the correct h() function.\nEmpty objects can also be the cause, look for JSX comments that became objects."),r&&i?a[a.length-1].$text$+=o:a.push(r?Je(null,o):o),i=r)};if(c(n),t&&(G&&"input"===e&&lt(t),D&&t.key&&(s=t.key),ne&&t.name&&(l=t.name),V)){const e=t.className||t.class;e&&(t.class="object"!==typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}if(G&&a.some(tt)&&rn("The <Host> must be the single root component. Make sure:\n- You are NOT using hostData() and <Host> in the same component.\n- <Host> is used once, and it's the single root component of the render() function."),j&&"function"===typeof e)return e(null===t?{}:t,a,nt);const $=Je(e,null);return $.$attrs$=t,a.length>0&&($.$children$=a),D&&($.$key$=s),ne&&($.$name$=l),$},Je=(e,t)=>{const n={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};return E&&(n.$attrs$=null),D&&(n.$key$=null),ne&&(n.$name$=null),n},et={},tt=e=>e&&e.$tag$===et,nt={forEach:(e,t)=>e.map(ot).forEach(t),map:(e,t)=>e.map(ot).map(t).map(st)},ot=e=>({vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}),st=e=>{if("function"===typeof e.vtag){const t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),Xe(e.vtag,t,...e.vchildren||[])}const t=Je(e.vtag,e.vtext);return t.$attrs$=e.vattrs,t.$children$=e.vchildren,t.$key$=e.vkey,t.$name$=e.vname,t},lt=e=>{const t=Object.keys(e),n=t.indexOf("type"),o=t.indexOf("min"),s=t.indexOf("max"),l=t.indexOf("min"),r=t.indexOf("value");-1!==r&&(r<n||r<o||r<s||r<l)&&an('The "value" prop of <input> should be set after "min", "max", "type" and "step"')},rt=(e,t,n,o,s,l)=>{if(n!==o){let i=on(e,t),a=t.toLowerCase();if(V&&"class"===t){const t=e.classList,s=at(n),l=at(o);t.remove(...s.filter((e=>e&&!l.includes(e)))),t.add(...l.filter((e=>e&&!s.includes(e))))}else if(q&&"style"===t){if(I)for(const t in n)o&&null!=o[t]||(!Q&&t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in o)n&&o[t]===n[t]||(!Q&&t.includes("-")?e.style.setProperty(t,o[t]):e.style[t]=o[t])}else if(D&&"key"===t);else if(H&&"ref"===t)o&&o(e);else if(!K||(ee?i:e.__lookupSetter__(t))||"o"!==t[0]||"n"!==t[1]){if(B){const c=Qe(o);if((i||c&&null!==o)&&!s)try{if(e.tagName.includes("-"))e[t]=o;else{let s=null==o?"":o;"list"===t?i=!1:null!=n&&e[t]==s||(e[t]=s)}}catch(r){}let $=!1;M&&a!==(a=a.replace(/^xlink\:?/,""))&&(t=a,$=!0),null==o||!1===o?!1===o&&""!==e.getAttribute(t)||(M&&$?e.removeAttributeNS(ze,t):e.removeAttribute(t)):(!i||4&l||s)&&!c&&(o=!0===o?"":o,M&&$?e.setAttributeNS(ze,t,o):e.setAttribute(t,o))}}else t="-"===t[2]?t.slice(3):on(Le,a)?a.slice(2):a[2]+t.slice(3),n&&Pe.rel(e,t,n,!1),o&&Pe.ael(e,t,o,!1)}},it=/\s/,at=e=>e?e.split(it):[],ct=(e,t,n,o)=>{const s=11===t.$elm$.nodeType&&t.$elm$.host?t.$elm$.host:t.$elm$,l=e&&e.$attrs$||Ye,r=t.$attrs$||Ye;if(I)for(o in l)o in r||rt(s,o,l[o],void 0,n,t.$flags$);for(o in r)rt(s,o,l[o],r[o],n,t.$flags$)},$t=(e,t,n,o)=>{let s,l,r,i=t.$children$[n],a=0;if(ne&&!ke&&(Te=!0,"slot"===i.$tag$&&(he&&o.classList.add(he+"-s"),i.$flags$|=i.$children$?2:1)),G&&i.$elm$&&rn(`The JSX ${null!==i.$text$?`"${i.$text$}" text`:`"${i.$tag$}" element`} node should not be shared within the same renderer. The renderer caches element lookups in order to improve performance. However, a side effect from this is that the exact same JSX node should not be reused. For more information please see https://stenciljs.com/docs/templating-jsx#avoid-shared-jsx-nodes`),W&&null!==i.$text$)s=i.$elm$=Oe.createTextNode(i.$text$);else if(ne&&1&i.$flags$)s=i.$elm$=F||Q?Tt(i):Oe.createTextNode("");else{if(A&&!Ne&&(Ne="svg"===i.$tag$),s=i.$elm$=A?Oe.createElementNS(Ne?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",ne&&2&i.$flags$?"slot-fb":i.$tag$):Oe.createElement(ne&&2&i.$flags$?"slot-fb":i.$tag$),A&&Ne&&"foreignObject"===i.$tag$&&(Ne=!1),E&&ct(null,i,Ne),(R||x)&&null!=he&&s["s-si"]!==he&&s.classList.add(s["s-si"]=he),i.$children$)for(a=0;a<i.$children$.length;++a)l=$t(e,i,a,s),l&&s.appendChild(l);A&&("svg"===i.$tag$?Ne=!1:"foreignObject"===s.tagName&&(Ne=!0))}return ne&&(s["s-hn"]=ye,3&i.$flags$&&(s["s-sr"]=!0,s["s-cr"]=ge,s["s-sn"]=i.$name$||"",r=e&&e.$children$&&e.$children$[n],r&&r.$tag$===i.$tag$&&e.$elm$&&mt(e.$elm$,!1))),s},mt=(e,t)=>{Pe.$flags$|=1;const n=e.childNodes;for(let o=n.length-1;o>=0;o--){const e=n[o];e["s-hn"]!==ye&&e["s-ol"]&&(vt(e).insertBefore(e,ft(e)),e["s-ol"].remove(),e["s-ol"]=void 0,Te=!0),t&&mt(e,t)}Pe.$flags$&=-2},dt=(e,t,n,o,s,l)=>{let r,i=ne&&e["s-cr"]&&e["s-cr"].parentNode||e;for(R&&i.shadowRoot&&i.tagName===ye&&(i=i.shadowRoot);s<=l;++s)o[s]&&(r=$t(null,n,s,e),r&&(o[s].$elm$=r,i.insertBefore(r,ne?ft(t):t)))},ut=(e,t,n,o,s)=>{for(;t<=n;++t)(o=e[t])&&(s=o.$elm$,kt(o),ne&&(Se=!0,s["s-ol"]?s["s-ol"].remove():mt(s,!0)),s.remove())},pt=(e,t)=>e.$tag$===t.$tag$&&(ne&&"slot"===e.$tag$?e.$name$===t.$name$:!D||e.$key$===t.$key$),ft=e=>e&&e["s-ol"]||e,vt=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,ht=(e,t)=>{const n=t.$elm$=e.$elm$,o=e.$children$,s=t.$children$,l=t.$tag$,r=t.$text$;let i;W&&null!==r?W&&ne&&(i=n["s-cr"])?i.parentNode.textContent=r:W&&e.$text$!==r&&(n.data=r):(A&&(Ne="svg"===l||"foreignObject"!==l&&Ne),(E||N)&&(C&&"slot"===l||ct(e,t,Ne)),I&&null!==o&&null!==s?((e,t,n,o)=>{let s,l,r=0,i=0,a=0,c=0,$=t.length-1,m=t[0],d=t[$],u=o.length-1,p=o[0],f=o[u];for(;r<=$&&i<=u;)if(null==m)m=t[++r];else if(null==d)d=t[--$];else if(null==p)p=o[++i];else if(null==f)f=o[--u];else if(pt(m,p))ht(m,p),m=t[++r],p=o[++i];else if(pt(d,f))ht(d,f),d=t[--$],f=o[--u];else if(pt(m,f))!ne||"slot"!==m.$tag$&&"slot"!==f.$tag$||mt(m.$elm$.parentNode,!1),ht(m,f),e.insertBefore(m.$elm$,d.$elm$.nextSibling),m=t[++r],f=o[--u];else if(pt(d,p))!ne||"slot"!==m.$tag$&&"slot"!==f.$tag$||mt(d.$elm$.parentNode,!1),ht(d,p),e.insertBefore(d.$elm$,m.$elm$),d=t[--$],p=o[++i];else{if(a=-1,D)for(c=r;c<=$;++c)if(t[c]&&null!==t[c].$key$&&t[c].$key$===p.$key$){a=c;break}D&&a>=0?(l=t[a],l.$tag$!==p.$tag$?s=$t(t&&t[i],n,a,e):(ht(l,p),t[a]=void 0,s=l.$elm$),p=o[++i]):(s=$t(t&&t[i],n,i,e),p=o[++i]),s&&(ne?vt(m.$elm$).insertBefore(s,ft(m.$elm$)):m.$elm$.parentNode.insertBefore(s,m.$elm$))}r>$?dt(e,null==o[u+1]?null:o[u+1].$elm$,n,o,i,u):I&&i>u&&ut(t,r,$)})(n,o,t,s):null!==s?(I&&W&&null!==e.$text$&&(n.textContent=""),dt(n,null,t,s,0,s.length-1)):I&&null!==o&&ut(o,0,o.length-1),A&&Ne&&"svg"===l&&(Ne=!1))},gt=e=>{let t,n,o,s,l,r,i=e.childNodes;for(n=0,o=i.length;n<o;n++)if(t=i[n],1===t.nodeType){if(t["s-sr"])for(l=t["s-sn"],t.hidden=!1,s=0;s<o;s++)if(r=i[s].nodeType,i[s]["s-hn"]!==t["s-hn"]||""!==l){if(1===r&&l===i[s].getAttribute("slot")){t.hidden=!0;break}}else if(1===r||3===r&&""!==i[s].textContent.trim()){t.hidden=!0;break}gt(t)}},yt=[],bt=e=>{let t,n,o,s,l,r,i=0,a=e.childNodes,c=a.length;for(;i<c;i++){if(t=a[i],t["s-sr"]&&(n=t["s-cr"])&&n.parentNode)for(o=n.parentNode.childNodes,s=t["s-sn"],r=o.length-1;r>=0;r--)n=o[r],n["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||(wt(n,s)?(l=yt.find((e=>e.$nodeToRelocate$===n)),Se=!0,n["s-sn"]=n["s-sn"]||s,l?l.$slotRefNode$=t:yt.push({$slotRefNode$:t,$nodeToRelocate$:n}),n["s-sr"]&&yt.map((e=>{wt(e.$nodeToRelocate$,n["s-sn"])&&(l=yt.find((e=>e.$nodeToRelocate$===n)),l&&!e.$slotRefNode$&&(e.$slotRefNode$=l.$slotRefNode$))}))):yt.some((e=>e.$nodeToRelocate$===n))||yt.push({$nodeToRelocate$:n}));1===t.nodeType&&bt(t)}},wt=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,kt=e=>{H&&(e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null),e.$children$&&e.$children$.map(kt))},St=(e,t)=>{const n=e.$hostElement$,o=e.$cmpMeta$,s=e.$vnode$||Je(null,null),l=tt(t)?t:Xe(null,null,t);if(ye=n.tagName,G&&Array.isArray(t)&&t.some(tt))throw new Error(`The <Host> must be the single root component.\nLooks like the render() function of "${ye.toLowerCase()}" is returning an array that contains the <Host>.\n\nThe render() function should look like this instead:\n\nrender() {\n  // Do not return an array\n  return (\n    <Host>{content}</Host>\n  );\n}\n  `);if(N&&o.$attrsToReflect$&&(l.$attrs$=l.$attrs$||{},o.$attrsToReflect$.map((([e,t])=>l.$attrs$[t]=n[e]))),l.$tag$=null,l.$flags$|=4,e.$vnode$=l,l.$elm$=s.$elm$=R&&n.shadowRoot||n,(x||R)&&(he=n["s-sc"]),ne&&(ge=n["s-cr"],ke=Ae&&0!==(1&o.$flags$),Se=!1),ht(s,l),ne){if(Pe.$flags$|=1,Te){let e,t,n,o,s,r;bt(l.$elm$);let i=0;for(;i<yt.length;i++)e=yt[i],t=e.$nodeToRelocate$,t["s-ol"]||(n=F||Q?Nt(t):Oe.createTextNode(""),n["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=n,t));for(i=0;i<yt.length;i++)if(e=yt[i],t=e.$nodeToRelocate$,e.$slotRefNode$){for(o=e.$slotRefNode$.parentNode,s=e.$slotRefNode$.nextSibling,n=t["s-ol"];n=n.previousSibling;)if(r=n["s-nr"],r&&r["s-sn"]===t["s-sn"]&&o===r.parentNode&&(r=r.nextSibling,!r||!r["s-nr"])){s=r;break}(!s&&o!==t.parentNode||t.nextSibling!==s)&&t!==s&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),o.insertBefore(t,s))}else 1===t.nodeType&&(t.hidden=!0)}Se&&gt(l.$elm$),Pe.$flags$&=-2,yt.length=0}},Tt=e=>Oe.createComment(`<slot${e.$name$?' name="'+e.$name$+'"':""}> (host=${ye.toLowerCase()})`),Nt=e=>Oe.createComment("org-location for "+(e.localName?`<${e.localName}> (host=${e["s-hn"]})`:`[${e.textContent}]`)),xt=e=>ee?tn(e).$hostElement$:e,Rt=(e,t,n)=>{const o=xt(e);return{emit:e=>(G&&!o.isConnected&&an(`The "${t}" event was emitted, but the dispatcher node is no longer connected to the dom.`),Ct(o,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e}))}},Ct=(e,t,n)=>{const o=Pe.ce(t,n);return e.dispatchEvent(o),o},Lt=(e,t)=>{ue&&t&&!e.$onRenderResolve$&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.$onRenderResolve$=t)))},Ot=(e,t)=>{if(Z&&I&&(e.$flags$|=16),ue&&4&e.$flags$)return void(e.$flags$|=512);Lt(e,e.$ancestorComponent$);const n=()=>Pt(e,t);return Z?wn(n):n()},Pt=(e,t)=>{const n=e.$hostElement$,o=qe("scheduleUpdate",e.$cmpMeta$.$tagName$),s=ee?e.$lazyInstance$:n;let l;return t?(ee&&p&&(e.$flags$|=256,e.$queuedListeners$&&(e.$queuedListeners$.map((([e,t])=>jt(s,e,t))),e.$queuedListeners$=null)),Kt(n,"componentWillLoad"),a&&(l=jt(s,"componentWillLoad"))):(Kt(n,"componentWillUpdate"),c&&(l=jt(s,"componentWillUpdate"))),Kt(n,"componentWillRender"),$&&(l=Dt(l,(()=>jt(s,"componentWillRender")))),o(),Dt(l,(()=>At(e,s,t)))},At=async(e,t,n)=>{const o=e.$hostElement$,s=qe("update",e.$cmpMeta$.$tagName$),l=o["s-rc"];P&&n&&Ue(e);const r=qe("render",e.$cmpMeta$.$tagName$);if(G&&(e.$flags$|=1024),Q?await It(e,t,o):It(e,t,o),ce&&Pe.$cssShim$&&Pe.$cssShim$.updateHost(o),G&&(e.$renderCount$++,e.$flags$&=-1025),Q)try{Bt(o),n&&(1&e.$cmpMeta$.$flags$?o["s-en"]="":2&e.$cmpMeta$.$flags$&&(o["s-en"]="c"))}catch(i){sn(i,o)}if(ue&&l&&(l.map((e=>e())),o["s-rc"]=void 0),r(),s(),ue){const t=o["s-p"],n=()=>Mt(e);0===t.length?n():(Promise.all(t).then(n),e.$flags$|=4,t.length=0)}else Mt(e)},It=(e,t,n)=>{const s=!!o,l=!!ee,r=!!Z,i=!!I;try{if(xe=t,t=(s||t.render)&&t.render(),i&&r&&(e.$flags$&=-17),(i||l)&&(e.$flags$|=2),u||N)if(z||N){if(Q)return Promise.resolve(t).then((t=>St(e,t)));St(e,t)}else n.textContent=t}catch(a){sn(a,e.$hostElement$)}return xe=null,null},Et=()=>xe,Mt=e=>{const t=e.$cmpMeta$.$tagName$,n=e.$hostElement$,o=qe("postUpdate",t),l=ee?e.$lazyInstance$:n,a=e.$ancestorComponent$;i&&(G&&(e.$flags$|=1024),jt(l,"componentDidRender"),G&&(e.$flags$&=-1025)),Kt(n,"componentDidRender"),64&e.$flags$?(r&&(G&&(e.$flags$|=1024),jt(l,"componentDidUpdate"),G&&(e.$flags$&=-1025)),Kt(n,"componentDidUpdate"),o()):(e.$flags$|=64,ue&&L&&Ht(n),s&&(G&&(e.$flags$|=2048),jt(l,"componentDidLoad"),G&&(e.$flags$&=-2049)),Kt(n,"componentDidLoad"),o(),ue&&(e.$onReadyResolve$(n),a||Vt(t))),U&&n["s-hmr-load"]&&n["s-hmr-load"](),w&&ee&&e.$onInstanceResolve$(n),ue&&(e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),512&e.$flags$&&bn((()=>Ot(e,!1))),e.$flags$&=-517)},Vt=e=>{L&&Ht(Oe.documentElement),pe&&(Pe.$flags$|=2),bn((()=>Ct(Le,"appload",{detail:{namespace:ve}}))),te&&performance.measure&&performance.measure(`[Stencil] app initial load (by ${e})`,"st:app:start")},jt=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(o){sn(o)}},Dt=(e,t)=>e&&e.then?e.then(t):t(),Kt=(e,t)=>{J&&Ct(e,"stencil_"+t,{bubbles:!0,composed:!0,detail:{namespace:ve}})},Ht=e=>se?e.classList.add("hydrated"):oe?e.setAttribute("hydrated",""):void 0,Bt=e=>{const t=e.children;if(null!=t)for(let n=0,o=t.length;n<o;n++){const e=t[n];"function"===typeof e.connectedCallback&&e.connectedCallback(),Bt(e)}},zt=(e,t,n,o,s,l,r)=>{let i,a,c,$;if(1===l.nodeType){for(i=l.getAttribute(Be),i&&(a=i.split("."),a[0]!==r&&"0"!==a[0]||(c={$flags$:0,$hostId$:a[0],$nodeId$:a[1],$depth$:a[2],$index$:a[3],$tag$:l.tagName.toLowerCase(),$elm$:l,$attrs$:null,$children$:null,$key$:null,$name$:null,$text$:null},t.push(c),l.removeAttribute(Be),e.$children$||(e.$children$=[]),e.$children$[c.$index$]=c,e=c,o&&"0"===c.$depth$&&(o[c.$index$]=c.$elm$))),$=l.childNodes.length-1;$>=0;$--)zt(e,t,n,o,s,l.childNodes[$],r);if(l.shadowRoot)for($=l.shadowRoot.childNodes.length-1;$>=0;$--)zt(e,t,n,o,s,l.shadowRoot.childNodes[$],r)}else if(8===l.nodeType)a=l.nodeValue.split("."),a[1]!==r&&"0"!==a[1]||(i=a[0],c={$flags$:0,$hostId$:a[1],$nodeId$:a[2],$depth$:a[3],$index$:a[4],$elm$:l,$attrs$:null,$children$:null,$key$:null,$name$:null,$tag$:null,$text$:null},"t"===i?(c.$elm$=l.nextSibling,c.$elm$&&3===c.$elm$.nodeType&&(c.$text$=c.$elm$.textContent,t.push(c),l.remove(),e.$children$||(e.$children$=[]),e.$children$[c.$index$]=c,o&&"0"===c.$depth$&&(o[c.$index$]=c.$elm$))):c.$hostId$===r&&("s"===i?(c.$tag$="slot",a[5]?l["s-sn"]=c.$name$=a[5]:l["s-sn"]="",l["s-sr"]=!0,R&&o&&(c.$elm$=Oe.createElement(c.$tag$),c.$name$&&c.$elm$.setAttribute("name",c.$name$),l.parentNode.insertBefore(c.$elm$,l),l.remove(),"0"===c.$depth$&&(o[c.$index$]=c.$elm$)),n.push(c),e.$children$||(e.$children$=[]),e.$children$[c.$index$]=c):"r"===i&&(R&&o?l.remove():ne&&(s["s-cr"]=l,l["s-cn"]=!0))));else if(e&&"style"===e.$tag$){const t=Je(null,l.textContent);t.$elm$=l,t.$index$="0",e.$children$=[t]}},qt=(e,t)=>{if(1===e.nodeType){let n=0;for(;n<e.childNodes.length;n++)qt(e.childNodes[n],t);if(e.shadowRoot)for(n=0;n<e.shadowRoot.childNodes.length;n++)qt(e.shadowRoot.childNodes[n],t)}else if(8===e.nodeType){const n=e.nodeValue.split(".");"o"===n[0]&&(t.set(n[1]+"."+n[2],e),e.nodeValue="",e["s-en"]=n[3])}},Wt=(e,t,n,o)=>{const s=tn(e),l=ee?s.$hostElement$:e,r=s.$instanceValues$.get(t),i=s.$flags$,a=ee?s.$lazyInstance$:l;var c,$;if(c=n,$=o.$members$[t][0],n=null==c||Qe(c)?c:re&&4&$?"false"!==c&&(""===c||!!c):ie&&2&$?parseFloat(c):ae&&1&$?String(c):c,(!ee||!(8&i)||void 0===r)&&n!==r&&(s.$instanceValues$.set(t,n),G&&(1024&s.$flags$?an(`The state/prop "${t}" changed during rendering. This can potentially lead to infinite-loops and other bugs.`,"\nElement",l,"\nNew value",n,"\nOld value",r):2048&s.$flags$&&an(`The state/prop "${t}" changed during "componentDidLoad()", this triggers extra re-renders, try to setup on "componentWillLoad()"`,"\nElement",l,"\nNew value",n,"\nOld value",r)),!ee||a)){if(_&&o.$watchers$&&128&i){const e=o.$watchers$[t];e&&e.map((e=>{try{a[e](n,r,t)}catch(o){sn(o,l)}}))}if(I&&2===(18&i)){if(me&&a.componentShouldUpdate&&!1===a.componentShouldUpdate(n,r,t))return;Ot(s,!1)}}},_t=(e,t,n)=>{if(b&&t.$members$){_&&e.watchers&&(t.$watchers$=e.watchers);const o=Object.entries(t.$members$),s=e.prototype;if(o.map((([e,[o]])=>{(T||O)&&(31&o||(!ee||2&n)&&32&o)?Object.defineProperty(s,e,{get(){return t=e,tn(this).$instanceValues$.get(t);var t},set(s){if(G){const s=tn(this);0===(1&n)&&0===(8&s.$flags$)&&0!==(31&o)&&0===(1024&o)&&an(`@Prop() "${e}" on <${t.$tagName$}> is immutable but was modified from within the component.\nMore information: https://stenciljs.com/docs/properties#prop-mutability`)}Wt(this,e,s,t)},configurable:!0,enumerable:!0}):ee&&w&&1&n&&64&o&&Object.defineProperty(s,e,{value(...t){const n=tn(this);return n.$onInstancePromise$.then((()=>n.$lazyInstance$[e](...t)))}})})),S&&(!ee||1&n)){const n=new Map;s.attributeChangedCallback=function(e,t,o){Pe.jmp((()=>{const t=n.get(e);this[t]=(null!==o||"boolean"!==typeof this[t])&&o}))},e.observedAttributes=o.filter((([e,t])=>15&t[0])).map((([e,o])=>{const s=o[1]||e;return n.set(s,e),N&&512&o[0]&&t.$attrsToReflect$.push([e,s]),s}))}}return e},Zt=async(e,t,o,s,l)=>{if((ee||Q||P)&&0===(32&t.$flags$)){if(ee||X){if(t.$flags$|=32,(l=$n(o,t,s)).then){const e=(r=`st:load:${o.$tagName$}:${t.$modeName$}`,i=`[Stencil] Load module for <${o.$tagName$}>`,te&&performance.mark?(0===performance.getEntriesByName(r).length&&performance.mark(r),()=>{0===performance.getEntriesByName(i).length&&performance.measure(i,r)}):()=>{});l=await l,e()}if((G||F)&&!l)throw new Error(`Constructor for "${o.$tagName$}#${t.$modeName$}" was not found`);b&&!l.isProxied&&(_&&(o.$watchers$=l.watchers),_t(l,o,2),l.isProxied=!0);const e=qe("createInstance",o.$tagName$);b&&(t.$flags$|=8);try{new l(t)}catch($){sn($)}b&&(t.$flags$&=-9),_&&(t.$flags$|=128),e(),Ut(t.$lazyInstance$)}else l=e.constructor,t.$flags$|=160;if(P&&l.style){let s=l.style;k&&"string"!==typeof s&&(s=s[t.$modeName$=Ge(e)],Q&&t.$modeName$&&e.setAttribute("s-mode",t.$modeName$));const r=Fe(o,t.$modeName$);if(!mn.has(r)){const e=qe("registerStyles",o.$tagName$);!Q&&R&&le&&8&o.$flags$&&(s=await n.e(576).then(n.bind(n,576)).then((e=>e.scopeCss(s,r,!1)))),_e(r,s,!!(1&o.$flags$)),e()}}}var r,i;const a=t.$ancestorComponent$,c=()=>Ot(t,!0);ue&&a&&a["s-rc"]?a["s-rc"].push(c):c()},Ut=e=>{ee&&m&&jt(e,"connectedCallback")},Ft=e=>{if(0===(1&Pe.$flags$)){const t=tn(e),n=t.$cmpMeta$,o=qe("connectedCallback",n.$tagName$);if(g&&Me(e,t,n.$listeners$,!0),1&t.$flags$)Me(e,t,n.$listeners$,!1),Ut(t.$lazyInstance$);else{let o;if(t.$flags$|=1,X&&(o=e.getAttribute(Ke),o)){if(R&&Ae&&1&n.$flags$){const t=k?Ze(e.shadowRoot,n,e.getAttribute("s-mode")):Ze(e.shadowRoot,n);e.classList.remove(t+"-h",t+"-s")}((e,t,n,o)=>{const s=qe("hydrateClient",t),l=e.shadowRoot,r=[],i=R&&l?[]:null,a=o.$vnode$=Je(t,null);Pe.$orgLocNodes$||qt(Oe.body,Pe.$orgLocNodes$=new Map),e["s-id"]=n,e.removeAttribute(Ke),zt(a,r,[],i,e,e,n),r.map((e=>{const n=e.$hostId$+"."+e.$nodeId$,o=Pe.$orgLocNodes$.get(n),s=e.$elm$;o&&Ae&&""===o["s-en"]&&o.parentNode.insertBefore(s,o.nextSibling),l||(s["s-hn"]=t,o&&(s["s-ol"]=o,s["s-ol"]["s-nr"]=s)),Pe.$orgLocNodes$.delete(n)})),R&&l&&i.map((e=>{e&&l.appendChild(e)})),s()})(e,n.$tagName$,o,t)}if(ne&&!o&&(Q||(C||R)&&12&n.$flags$)&&Gt(e),ue){let n=e;for(;n=n.parentNode||n.host;)if(X&&1===n.nodeType&&n.hasAttribute("s-id")&&n["s-p"]||n["s-p"]){Lt(t,t.$ancestorComponent$=n);break}}T&&ee&&!Q&&n.$members$&&Object.entries(n.$members$).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),de?bn((()=>Zt(e,t,n))):Zt(e,t,n)}o()}},Gt=e=>{const t=e["s-cr"]=Oe.createComment(F?`content-ref (host=${e.localName})`:"");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)},Yt=e=>{if(0===(1&Pe.$flags$)){const t=tn(e),n=ee?t.$lazyInstance$:e;p&&t.$rmListeners$&&(t.$rmListeners$.map((e=>e())),t.$rmListeners$=void 0),ce&&Pe.$cssShim$&&Pe.$cssShim$.removeHost(e),ee&&d&&jt(n,"disconnectedCallback"),l&&jt(n,"componentDidUnload")}},Qt=(e,t)=>{const n={$flags$:t[0],$tagName$:t[1]};b&&(n.$members$=t[2]),p&&(n.$listeners$=t[3]),_&&(n.$watchers$=e.$watchers$),N&&(n.$attrsToReflect$=[]),R&&!Ae&&1&n.$flags$&&(n.$flags$|=8);const o=e.prototype.connectedCallback,s=e.prototype.disconnectedCallback;return Object.assign(e.prototype,{__registerHost(){nn(this,n)},connectedCallback(){Ft(this),m&&o&&o.call(this)},disconnectedCallback(){Yt(this),d&&s&&s.call(this)}}),e.is=n.$tagName$,_t(e,n,3)},Xt=e=>{Ae?e.attachShadow({mode:"open"}):e.shadowRoot=e},Jt=(e,t)=>t,en=new WeakMap,tn=e=>en.get(e),nn=(e,t)=>{const n={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};return G&&(n.$renderCount$=0),w&&ee&&(n.$onInstancePromise$=new Promise((e=>n.$onInstanceResolve$=e))),ue&&(n.$onReadyPromise$=new Promise((e=>n.$onReadyResolve$=e)),e["s-p"]=[],e["s-rc"]=[]),Me(e,n,t.$listeners$,!1),en.set(e,n)},on=(e,t)=>t in e,sn=(e,t)=>(be||console.error)(e,t),ln=Y?["STENCIL:"]:["%cstencil","color: white;background:#4c47ff;font-weight: bold; font-size:10px; padding:2px 6px; border-radius: 5px"],rn=(...e)=>console.error(...ln,...e),an=(...e)=>console.warn(...ln,...e),cn=new Map,$n=(e,t,o)=>{const s=e.$tagName$.replace(/-/g,"_"),l=e.$lazyBundleId$;if(G&&"string"!==typeof l)return void rn(`Trying to lazily load component <${e.$tagName$}> with style mode "${t.$modeName$}", but it does not exist.`);const r=!U&&cn.get(l);return r?r[s]:n(1993)(`./${l}.entry.js${U&&o?"?s-hmr="+o:""}`).then((e=>(U||cn.set(l,e),e[s])),sn)},mn=new Map,dn=[],un=[],pn=[],fn=[],vn=(e,t)=>n=>{e.push(n),Ce||(Ce=!0,t&&4&Pe.$flags$?bn(yn):Pe.raf(yn))},hn=e=>{for(let n=0;n<e.length;n++)try{e[n](performance.now())}catch(t){sn(t)}e.length=0},gn=(e,t)=>{let n=0,o=0;for(;n<e.length&&(o=performance.now())<t;)try{e[n++](o)}catch(s){sn(s)}n===e.length?e.length=0:0!==n&&e.splice(0,n)},yn=()=>{if(pe&&Re++,hn(un),pe){const e=2===(6&Pe.$flags$)?performance.now()+14*Math.ceil(.1*Re):1/0;gn(pn,e),gn(fn,e),pn.length>0&&(fn.push(...pn),pn.length=0),(Ce=un.length+pn.length+fn.length>0)?Pe.raf(yn):Re=0}else hn(pn),(Ce=un.length>0)&&Pe.raf(yn)},bn=e=>{return Promise.resolve(t).then(e);var t},wn=vn(pn,!0)},3388:function(e,t,n){"use strict";n.d(t,{Ag:function(){return O},oT:function(){return P},eQ:function(){return A},Br:function(){return I},ZX:function(){return E},m4:function(){return M},pf:function(){return V},GX:function(){return j},ot:function(){return D},rW:function(){return K},ak:function(){return H},ko:function(){return B},J5:function(){return z},ZM:function(){return q},ZO:function(){return W},Eh:function(){return _},bO:function(){return Z},u:function(){return U},nk:function(){return F},yr:function(){return G}});var o=n(9601),s=n(7294),l=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(n[o[s]]=e[o[s]])}return n};const r=(e,t)=>{"undefined"!==typeof window&&!customElements.get(e)&&customElements.define(e,t)},i=e=>{var t;return 0===e.indexOf("on")&&e[2]===(null===(t=e[2])||void 0===t?void 0:t.toUpperCase())};function a(e,t){const n=(0,s.forwardRef)(((n,r)=>{var{children:a}=n,c=l(n,["children"]);const[$,m]=(0,s.useState)(null),d=(0,s.useCallback)((e=>{m(e)}),[]),u=(0,s.useRef)(new Map),p=(0,s.useMemo)((()=>Object.keys(c).filter((e=>!t.has(e)&&!i(e))).reduce(((e,t)=>Object.assign(Object.assign({},e),{[t]:c[t]})),{})),[c]),f=(0,s.useMemo)((()=>Object.keys(c).filter((e=>t.has(e)||i(e))).reduce(((e,t)=>Object.assign(Object.assign({},e),{[t]:c[t]})),{})),[c]),v=(0,s.useCallback)(((e,t)=>{var n;const o=(e=>e.charAt(2).toLowerCase()+e.substring(3))(e);null===(n=u.current.get(o))||void 0===n||n(),$&&t&&($.addEventListener(o,t),u.current.set(o,(()=>{$.removeEventListener(o,t)})))}),[$]),h=(0,s.useCallback)((()=>{u.current.forEach((e=>e())),u.current.clear()}),[]);return(0,s.useEffect)((()=>()=>{h()}),[]),(0,s.useEffect)((()=>{$&&Object.keys(f).forEach((e=>{i(e)?v(e,f[e]):$[e]!==f[e]&&($[e]=f[e])}))}),[$,f]),(0,s.createElement)(e,Object.assign({ref:(0,o.Z)(d,r)},p),a)}));return n.displayName=e.toLowerCase().split("-").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(""),n}var c=n(9459);r("vm-audio",c.Y2),r("vm-file",c.hb);a("vm-audio",new Set(["willAttach","crossOrigin","preload","disableRemotePlayback","mediaTitle"]));r("vm-caption-control",c.Zv),r("vm-control",c.cK),r("vm-icon",c.O$),r("vm-tooltip",c.r0);var $=a("vm-caption-control",new Set(["showIcon","hideIcon","tooltipPosition","tooltipDirection","hideTooltip","icons","keys","i18n","playbackReady","textTracks","isTextTrackVisible"]));r("vm-captions",c.w3);a("vm-captions",new Set(["hidden","isControlsActive","isVideoView","playbackStarted","textTracks","currentTextTrack","isTextTrackVisible"]));r("vm-click-to-play",c.Gy);a("vm-click-to-play",new Set(["useOnMobile","paused","isVideoView","isMobile"]));r("vm-control",c.cK);var m=a("vm-control",new Set(["keys","identifier","hidden","label","menu","expanded","pressed","isTouch"]));r("vm-control-group",c.ec);var d=a("vm-control-group",new Set(["space"]));r("vm-control-spacer",c.qy);var u=a("vm-control-spacer",new Set([]));r("vm-controls",c.tY);var p=a("vm-controls",new Set(["hidden","fullWidth","fullHeight","direction","align","justify","pin","activeDuration","waitForPlaybackStart","hideWhenPaused","hideOnMouseLeave","isAudioView","isSettingsActive","playbackReady","isControlsActive","paused","playbackStarted"]));r("vm-current-time",c.a0),r("vm-time",c.rz);var f=a("vm-current-time",new Set(["currentTime","i18n","alwaysShowHours"]));r("vm-dailymotion",c.$c),r("vm-embed",c.wN);a("vm-dailymotion",new Set(["videoId","shouldAutoplayQueue","showUpNextQueue","showShareButtons","color","syndication","showDailymotionLogo","showVideoInfo","language","autoplay","controls","poster","logger","loop","muted","playsinline"]));r("vm-dash",c.TE),r("vm-file",c.hb),r("vm-video",c.C1);a("vm-dash",new Set(["src","version","libSrc","config","autoplay","crossOrigin","preload","poster","controlsList","autoPiP","disablePiP","disableRemotePlayback","mediaTitle","enableTextTracksByDefault","shouldRenderNativeTextTracks","isTextTrackVisible","currentTextTrack"]));r("vm-dbl-click-fullscreen",c.nZ);a("vm-dbl-click-fullscreen",new Set(["useOnMobile","isFullscreenActive","isVideoView","playbackReady","isMobile"]));r("vm-default-controls",c.d8),r("vm-caption-control",c.Zv),r("vm-control",c.cK),r("vm-icon",c.O$),r("vm-tooltip",c.r0),r("vm-control-group",c.ec),r("vm-control-spacer",c.qy),r("vm-controls",c.tY),r("vm-current-time",c.a0),r("vm-time",c.rz),r("vm-end-time",c._N),r("vm-fullscreen-control",c.ac),r("vm-live-indicator",c.G7),r("vm-mute-control",c.DS),r("vm-pip-control",c.IG),r("vm-playback-control",c.Yh),r("vm-scrim",c.u),r("vm-scrubber-control",c.jA),r("vm-slider",c.LI),r("vm-settings-control",c.kZ),r("vm-time-progress",c.yX),r("vm-volume-control",c.rB);a("vm-default-controls",new Set(["activeDuration","waitForPlaybackStart","hideWhenPaused","hideOnMouseLeave","theme","isMobile","isLive","isAudioView","isVideoView"]));r("vm-default-settings",c.K7),r("vm-icon",c.O$),r("vm-menu",c.qK),r("vm-menu-item",c.sK),r("vm-menu-radio",c.Mn),r("vm-menu-radio-group",c.Db),r("vm-settings",c.Do),r("vm-submenu",c.to);a("vm-default-settings",new Set(["pin","i18n","playbackReady","playbackRate","playbackRates","isVideoView","playbackQuality","playbackQualities","textTracks","currentTextTrack","audioTracks","currentAudioTrack","isTextTrackVisible"]));r("vm-default-ui",c.H5),r("vm-caption-control",c.Zv),r("vm-control",c.cK),r("vm-icon",c.O$),r("vm-tooltip",c.r0),r("vm-captions",c.w3),r("vm-click-to-play",c.Gy),r("vm-control-group",c.ec),r("vm-control-spacer",c.qy),r("vm-controls",c.tY),r("vm-current-time",c.a0),r("vm-time",c.rz),r("vm-dbl-click-fullscreen",c.nZ),r("vm-default-controls",c.d8),r("vm-end-time",c._N),r("vm-fullscreen-control",c.ac),r("vm-live-indicator",c.G7),r("vm-mute-control",c.DS),r("vm-pip-control",c.IG),r("vm-playback-control",c.Yh),r("vm-scrim",c.u),r("vm-scrubber-control",c.jA),r("vm-slider",c.LI),r("vm-settings-control",c.kZ),r("vm-time-progress",c.yX),r("vm-volume-control",c.rB),r("vm-default-settings",c.K7),r("vm-menu",c.qK),r("vm-menu-item",c.sK),r("vm-menu-radio",c.Mn),r("vm-menu-radio-group",c.Db),r("vm-settings",c.Do),r("vm-submenu",c.to),r("vm-loading-screen",c.I2),r("vm-poster",c.Ge),r("vm-spinner",c.lL),r("vm-ui",c.fV);var v=a("vm-default-ui",new Set(["noClickToPlay","noDblClickFullscreen","noCaptions","noPoster","noSpinner","noControls","noSettings","noLoadingScreen"]));r("vm-embed",c.wN);a("vm-embed",new Set(["embedSrc","mediaTitle","params","origin","preconnections","decoder"]));r("vm-end-time",c._N),r("vm-time",c.rz);var h=a("vm-end-time",new Set(["duration","i18n","alwaysShowHours"]));r("vm-file",c.hb);a("vm-file",new Set(["willAttach","crossOrigin","preload","poster","mediaTitle","controlsList","autoPiP","disablePiP","disableRemotePlayback","viewType","playbackRates","language","autoplay","controls","logger","loop","muted","playsinline","noConnect","paused","currentTime","volume","playbackReady","playbackStarted","currentTextTrack","hasCustomTextManager","isTextTrackVisible","shouldRenderNativeTextTracks"]));r("vm-fullscreen-control",c.ac),r("vm-control",c.cK),r("vm-icon",c.O$),r("vm-tooltip",c.r0);var g=a("vm-fullscreen-control",new Set(["enterIcon","exitIcon","icons","tooltipPosition","tooltipDirection","hideTooltip","keys","isFullscreenActive","i18n","playbackReady"]));r("vm-hls",c.LY),r("vm-file",c.hb),r("vm-video",c.C1);var y=a("vm-hls",new Set(["version","libSrc","config","crossOrigin","preload","poster","controlsList","autoPiP","disablePiP","disableRemotePlayback","playbackReady","mediaTitle"]));r("vm-icon",c.O$);a("vm-icon",new Set(["name","src","label","library","icons"]));r("vm-icon-library",c.Ew);a("vm-icon-library",new Set(["name","resolver","icons"]));r("vm-live-indicator",c.G7);a("vm-live-indicator",new Set(["isLive","i18n"]));r("vm-loading-screen",c.I2);a("vm-loading-screen",new Set(["playbackReady","hideDots"]));r("vm-menu",c.qK);a("vm-menu",new Set(["active","identifier","controller","slideInDirection"]));r("vm-menu-item",c.sK),r("vm-icon",c.O$);a("vm-menu-item",new Set(["identifier","hidden","label","menu","expanded","checked","hint","badge","checkIcon","icons","isTouch"]));r("vm-menu-radio",c.Mn),r("vm-icon",c.O$),r("vm-menu-item",c.sK);a("vm-menu-radio",new Set(["label","value","checked","badge","checkIcon","icons"]));r("vm-menu-radio-group",c.Db);a("vm-menu-radio-group",new Set(["value"]));r("vm-mute-control",c.DS),r("vm-control",c.cK),r("vm-icon",c.O$),r("vm-tooltip",c.r0);a("vm-mute-control",new Set(["lowVolumeIcon","highVolumeIcon","mutedIcon","icons","tooltipPosition","tooltipDirection","hideTooltip","keys","volume","muted","i18n"]));r("vm-pip-control",c.IG),r("vm-control",c.cK),r("vm-icon",c.O$),r("vm-tooltip",c.r0);var b=a("vm-pip-control",new Set(["enterIcon","exitIcon","icons","tooltipPosition","tooltipDirection","hideTooltip","keys","isPiPActive","i18n","playbackReady"]));r("vm-playback-control",c.Yh),r("vm-control",c.cK),r("vm-icon",c.O$),r("vm-tooltip",c.r0);var w=a("vm-playback-control",new Set(["playIcon","pauseIcon","icons","tooltipPosition","tooltipDirection","hideTooltip","keys","paused","i18n"]));r("vm-player",c.tP);var k=a("vm-player",new Set(["logger","theme","icons","paused","playing","duration","mediaTitle","currentProvider","currentSrc","currentPoster","currentTime","autoplay","ready","playbackReady","loop","muted","buffered","playbackRate","playbackRates","playbackQuality","playbackQualities","seeking","debug","playbackStarted","playbackEnded","buffering","controls","isControlsActive","isSettingsActive","volume","isFullscreenActive","aspectRatio","viewType","isAudioView","isVideoView","mediaType","isAudio","isVideo","isLive","isMobile","isTouch","isPiPActive","textTracks","currentTextTrack","isTextTrackVisible","shouldRenderNativeTextTracks","audioTracks","currentAudioTrack","autopause","playsinline","language","translations","languages","i18n"]));r("vm-poster",c.Ge);a("vm-poster",new Set(["fit","isVideoView","currentPoster","mediaTitle","playbackStarted","currentTime"]));r("vm-scrim",c.u);var S=a("vm-scrim",new Set(["gradient","isVideoView","isControlsActive"]));r("vm-scrubber-control",c.jA),r("vm-slider",c.LI),r("vm-tooltip",c.r0);var T=a("vm-scrubber-control",new Set(["alwaysShowHours","hideTooltip","currentTime","duration","noKeyboard","buffering","buffered","i18n"]));r("vm-settings",c.Do),r("vm-menu",c.qK);a("vm-settings",new Set(["pin","active","isMobile","isAudioView"]));r("vm-settings-control",c.kZ),r("vm-control",c.cK),r("vm-icon",c.O$),r("vm-tooltip",c.r0);var N=a("vm-settings-control",new Set(["icon","icons","tooltipPosition","tooltipDirection","menu","expanded","i18n"]));r("vm-skeleton",c.rQ);a("vm-skeleton",new Set(["effect","ready"]));r("vm-slider",c.LI);a("vm-slider",new Set(["step","min","max","value","valueText","label"]));r("vm-spinner",c.lL);a("vm-spinner",new Set(["isVideoView","currentProvider","showWhenMediaLoading","playbackReady","buffering"]));r("vm-submenu",c.to),r("vm-icon",c.O$),r("vm-menu",c.qK),r("vm-menu-item",c.sK);a("vm-submenu",new Set(["label","hint","slideInDirection","active"]));r("vm-time",c.rz);a("vm-time",new Set(["label","seconds","alwaysShowHours"]));r("vm-time-progress",c.yX),r("vm-current-time",c.a0),r("vm-time",c.rz),r("vm-end-time",c._N);var x=a("vm-time-progress",new Set(["separator","alwaysShowHours"]));r("vm-tooltip",c.r0);var R=a("vm-tooltip",new Set(["hidden","active","position","direction","isTouch","isMobile"]));r("vm-ui",c.fV);a("vm-ui",new Set(["isVideoView","playsinline","isFullscreenActive"]));r("vm-video",c.C1),r("vm-file",c.hb);var C=a("vm-video",new Set(["willAttach","hasCustomTextManager","crossOrigin","preload","poster","controlsList","autoPiP","disablePiP","disableRemotePlayback","mediaTitle"]));r("vm-vimeo",c.A6),r("vm-embed",c.wN);a("vm-vimeo",new Set(["videoId","byline","color","portrait","noAutoAspectRatio","poster","cookies","language","aspectRatio","autoplay","controls","logger","loop","muted","playsinline"]));r("vm-volume-control",c.rB),r("vm-control",c.cK),r("vm-icon",c.O$),r("vm-mute-control",c.DS),r("vm-tooltip",c.r0),r("vm-slider",c.LI);var L=a("vm-volume-control",new Set(["lowVolumeIcon","highVolumeIcon","mutedIcon","icons","tooltipPosition","tooltipDirection","hideTooltip","muteKeys","noKeyboard","muted","volume","isMobile","i18n"]));r("vm-youtube",c.F3),r("vm-embed",c.wN);a("vm-youtube",new Set(["cookies","videoId","showFullscreenControl","poster","language","autoplay","controls","logger","loop","muted","playsinline"]));const O=$,P=m,A=d,I=u,E=p,M=f,V=v,j=h,D=g,K=y,H=b,B=w,z=k,q=S,W=T,_=N,Z=x,U=R,F=C,G=L},3481:function(){},1067:function(e,t,n){"use strict";var o=n(7294);const s=o.forwardRef((function(e,t){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),o.createElement("path",{fillRule:"evenodd",d:"M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z",clipRule:"evenodd"}))}));t.Z=s},730:function(e,t,n){"use strict";var o=n(7294);const s=o.forwardRef((function(e,t){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),o.createElement("path",{fillRule:"evenodd",d:"M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",clipRule:"evenodd"}),o.createElement("path",{fillRule:"evenodd",d:"M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",clipRule:"evenodd"}))}));t.Z=s}}]);