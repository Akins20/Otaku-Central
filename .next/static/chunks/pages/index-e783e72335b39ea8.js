(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(8287)}])},7431:function(e,t,s){"use strict";var n=s(5893),r=s(1664),a=s.n(r);t.Z=function(e){var t=e.genre;return(0,n.jsx)(a(),{href:"/genre/".concat(t),passHref:!0,children:(0,n.jsx)("a",{className:"p-1 rounded text-xs sm:text-sm bg-white text-black cursor-pointer hover:scale-105 transform transition duration-300 ease-out",children:t})})}},1699:function(e,t,s){"use strict";s.d(t,{Z:function(){return m}});var n=s(5893),r=s(5675),a=s.n(r),i=s(1664),c=s.n(i),l=s(1163),o=s(3737),x={src:"/_next/static/media/animeflix.7782fc8e.svg",height:512,width:512};var m=function(){var e=(0,l.useRouter)();return(0,n.jsxs)("header",{className:"sticky top-0 bg-gray-900 w-full z-[51] h-12 flex items-center shadow-md",children:[(0,n.jsx)(c(),{href:"/",passHref:!0,children:(0,n.jsx)("a",{className:"relative w-7 h-7 ml-4 sm:ml-6 cursor-pointer",children:(0,n.jsx)(a(),{src:x,alt:"Animeflix Application Icon",layout:"fill",objectPosition:"left"})})}),(0,n.jsxs)("div",{className:"flex rounded ml-4 sm:ml-6 bg-gray-50 py-[1px] items-center px-2",children:[(0,n.jsx)(o.Z,{className:"w-4 h-4"}),(0,n.jsx)("input",{className:"outline-none w-44 sm:w-56 md:w-64 lg:w-72 p-1 text-black bg-transparent text-sm placeholder-gray-400",placeholder:"Search for Anime to watch",onKeyPress:function(t){"Enter"===t.key&&e.push("/search?keyword=".concat(t.currentTarget.value))}})]})]})}},3856:function(e,t,s){"use strict";var n=s(5893);t.Z=function(e){var t=e.icon,s=e.text,r=e.className,a=t;return(0,n.jsxs)("div",{className:"flex items-center space-x-1 ".concat(r||""),children:[(0,n.jsx)(a,{className:"w-4 h-4"}),(0,n.jsx)("p",{className:"text-xs sm:text-sm",children:s})]})}},5305:function(e,t,s){"use strict";var n=s(5893),r=s(5675),a=s.n(r),i=s(1664),c=s.n(i),l=s(1163),o=s(5186),x=s(4523),m=s(6111),u=s(7431),d=s(3856),h=s(7702);t.Z=function(e){var t=e.anime,s=e.onLoadingComplete,r=(0,l.useRouter)(),i=(0,h.Z)("(min-width: 768px)"),f=(0,h.Z)("(min-width: 1024px)"),p=t.title,g=p.romaji,v=p.english,w=g||v;w="".concat(w.split(" ").splice(0,11).join(" "),"...");var j="";return f?j="".concat(t.description.substr(0,380),"..."):i&&(j="".concat(t.description.substr(0,300),"...")),j=j.replace(/<\w*\\?>/g,""),(0,n.jsxs)("div",{className:"relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] 2xl:h-[450px]",children:[t.bannerImage?(0,n.jsx)(a(),{alt:"",onLoadingComplete:s,priority:!0,src:t.bannerImage,layout:"fill",objectFit:"cover",className:"opacity-60"}):s(),(0,n.jsxs)("div",{className:"text-white absolute ml-4 sm:ml-8 mt-4 sm:mt-6 lg:mt-8 xl:mt-10 2xl:mt-12 space-y-2 md:space-y-3",children:[(0,n.jsx)("p",{className:"font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl",children:w}),v&&v.length>35?null:(0,n.jsx)("p",{className:"text-gray-300 font-normal text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl",children:v}),(0,n.jsxs)("div",{className:"flex space-x-2",children:[(0,n.jsx)(d.Z,{icon:m.Z,text:t.format}),(0,n.jsx)(d.Z,{icon:o.Z,text:"".concat(t.duration," Min/Ep")}),(0,n.jsx)(d.Z,{icon:x.Z,text:"".concat(t.meanScore,"%")})]}),(0,n.jsx)("div",{className:"flex flex-wrap gap-x-2 sm:gap-x-3 md:gap-x-4 gap-y-1 mr-2",children:t.genres.map((function(e){return(0,n.jsx)(u.Z,{genre:e},e)}))}),(0,n.jsx)("p",{className:"max-w-3xl",children:j}),(0,n.jsx)(c(),{href:"/"===r.route?"/anime/".concat(t.id):"/watch/".concat(t.id,"?episode=1"),passHref:!0,children:(0,n.jsx)("a",{children:(0,n.jsxs)("button",{className:"flex-wra cursor-pointer flex items-center px-2 py-1 rounded-lg text-xs sm:text-sm md:text-base bg-[#C3073F] text-white active:scale-90 transform transition duration-300 ease-in",children:[(0,n.jsx)(m.Z,{className:"w-5 mr-1"}),"/"===r.route?"Read More":"Watch Now"]})})})]})]})}},107:function(e,t,s){"use strict";var n=s(5893),r=s(5675),a=s.n(r),i=s(1664),c=s.n(i),l=s(5186),o=s(4523),x=s(6111),m=s(3856),u=s(4458);t.Z=function(e){var t=e.anime,s=t.title.romaji||t.title.english;return s.length>35&&(s="".concat(s.substr(0,35),"...")),(0,n.jsx)(c(),{href:"/anime/".concat(t.id),passHref:!0,children:(0,n.jsxs)("a",{className:"cursor-pointer w-46 sm:w-56 p-2 hover:scale-105 transform transition duration-300 ease-out",children:[(0,n.jsx)("div",{className:"relative w-40 sm:w-52 h-48 sm:h-64",children:(0,n.jsx)(a(),{alt:"Cover Image",src:t.coverImage.large||t.coverImage.medium,layout:"fill",objectPosition:"center",className:"rounded-md",placeholder:"blur",blurDataURL:"data:image/svg+xml;base64,".concat((0,u.YE)(t.coverImage.color))})}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:"h-12 text-sm mt-2 text-white font-bold",children:s}),(0,n.jsxs)("div",{className:"flex space-x-2 text-white text-xs",children:[(0,n.jsx)(m.Z,{icon:x.Z,text:t.format,className:"hidden sm:flex"}),(0,n.jsx)(m.Z,{icon:l.Z,text:"".concat(t.duration," Min")}),(0,n.jsx)(m.Z,{icon:o.Z,text:"".concat(t.meanScore,"%")})]}),(0,n.jsx)("p",{className:"text-gray-500 text-xs mt-2 float-right",children:"Click to read more..."})]})]})})}},8034:function(e,t,s){"use strict";var n=s(5893),r=s(107);t.Z=function(e){var t=e.title,s=e.animeList;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("p",{className:"font-semibold text-white mt-4 ml-3 sm:ml-6 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl",children:t}),(0,n.jsx)("div",{className:"flex mt-2 mb-8 space-x-4 scrollbar-hide overflow-x-scroll overflow-y-hidden ml-3 sm:ml-6",children:s.map((function(e){return(0,n.jsx)(r.Z,{anime:e},e.id)}))})]})}},7702:function(e,t,s){"use strict";var n=s(7294);t.Z=function(e){var t=(0,n.useState)(!1),s=t[0],r=t[1];return(0,n.useEffect)((function(){var t=window.matchMedia(e);t.matches!==s&&r(t.matches);var n=function(){return r(t.matches)};return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)}}),[s,e]),s}},8287:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSP:function(){return o},default:function(){return x}});var n=s(5893),r=s(7294),a=s(8034),i=s(6648),c=s(5305),l=s(1699),o=!0;function x(e){var t=e.banner,s=e.trending,o=e.popular,x=e.topRated;return(0,r.useEffect)((function(){i.progress.finish()})),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.Z,{}),(0,n.jsx)(c.Z,{anime:t,onLoadingComplete:i.progress.finish}),(0,n.jsx)(a.Z,{title:"Trending Now",animeList:s}),(0,n.jsx)(a.Z,{title:"Popular",animeList:o}),(0,n.jsx)(a.Z,{title:"Top Rated (All time)",animeList:x})]})}},4458:function(e,t,s){"use strict";s.d(t,{YE:function(){return r}});var n=s(8764).Buffer,r=function(e){return t=function(e){return'\n  <svg width="1" height="1" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <rect width="1" height="1" style="fill:'.concat(e,";stroke-width:3;stroke:").concat(e,'" />\n  </svg>\n')}(e),n.from(t).toString("base64");var t}}},function(e){e.O(0,[511,774,888,179],(function(){return t=5557,e(e.s=t);var t}));var t=e.O();_N_E=t}]);