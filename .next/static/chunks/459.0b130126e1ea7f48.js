(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{1993:function(e){function n(e){return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}))}n.keys=function(){return[]},n.resolve=n,n.id=1993,e.exports=n},7021:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var s=t(5893),r=t(7294),c=t(3388),i=(t(3481),t(1067)),o=t(730),a=t(7702);var l=function(e){var n=e.previousCallback,t=e.nextCallback,r=(0,a.Z)("(max-width: 768px)");return(0,s.jsxs)(c.pf,{noControls:!0,children:[(0,s.jsxs)(c.ZX,{align:"center",pin:"center",justify:"space-evenly",style:{"--vm-controls-spacing":"80px"},children:[(0,s.jsxs)(c.oT,{onClick:n,keys:"p",children:[(0,s.jsx)(i.Z,{className:"text-white w-9"}),(0,s.jsx)(c.u,{children:"previous(p)"})]}),(0,s.jsx)(c.ko,{hideTooltip:!0,keys:"k/ "}),(0,s.jsxs)(c.oT,{onClick:t,keys:"n",children:[(0,s.jsx)(o.Z,{className:"text-white w-9"}),(0,s.jsx)(c.u,{className:"text-xs",children:"next(n)"})]})]}),(0,s.jsx)(c.ZM,{gradient:"up"}),r&&(0,s.jsxs)(c.ZX,{pin:"topLeft",children:[(0,s.jsx)(c.Br,{}),(0,s.jsx)(c.yr,{}),(0,s.jsx)(c.Eh,{})]}),(0,s.jsxs)(c.ZX,{pin:"bottomLeft",direction:r?"column":"column-reverse",children:[(0,s.jsxs)(c.eQ,{space:r?"none":"top",children:[!r&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.ko,{keys:"k/ ",tooltipDirection:"right"}),(0,s.jsx)(c.yr,{})]}),r?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.m4,{}),(0,s.jsx)(c.Br,{}),(0,s.jsx)(c.GX,{})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.bO,{}),(0,s.jsx)(c.Br,{})]}),!r&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.Ag,{}),(0,s.jsx)(c.ak,{keys:"i"}),(0,s.jsx)(c.Eh,{})]}),(0,s.jsx)(c.ot,{tooltipDirection:"left"})]}),(0,s.jsx)(c.eQ,{children:(0,s.jsx)(c.ZO,{})})]})]})};function u(e){var n=e.src,t=e.poster,i=e.previousCallback,o=e.nextCallback,a=(0,r.useRef)(null);return(0,r.useEffect)((function(){a.current.focus(),a.current.addEventListener("keydown",(function(e){e.preventDefault()})),a.current.onfullscreenchange=function(){a.current.focus()},document.addEventListener("keydown",(function(e){if(a.current.isFullscreenActive&&e.target!==a.current){var n=new KeyboardEvent("keydown",{key:e.key,code:e.code,shiftKey:e.shiftKey,ctrlKey:e.ctrlKey,metaKey:e.metaKey});a.current.dispatchEvent(n)}}))})),(0,s.jsxs)(c.J5,{ref:a,tabIndex:"0",style:{outline:"none"},children:[n.includes("m3u8")?(0,s.jsx)(c.rW,{version:"latest",poster:t,children:(0,s.jsx)("source",{"data-src":n,type:"application/x-mpegURL"})},n):(0,s.jsx)(c.nk,{version:"latest",poster:t,children:(0,s.jsx)("source",{"data-src":n,type:"video/mp4"})},n),(0,s.jsx)(l,{nextCallback:o,previousCallback:i})]})}},7702:function(e,n,t){"use strict";var s=t(7294);n.Z=function(e){var n=(0,s.useState)(!1),t=n[0],r=n[1];return(0,s.useEffect)((function(){var n=window.matchMedia(e);n.matches!==t&&r(n.matches);var s=function(){return r(n.matches)};return window.addEventListener("resize",s),function(){return window.removeEventListener("resize",s)}}),[t,e]),t}}}]);