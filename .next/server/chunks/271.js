"use strict";
exports.id = 271;
exports.ids = [271];
exports.modules = {

/***/ 1699:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "@heroicons/react/outline"
var outline_ = __webpack_require__(8768);
;// CONCATENATED MODULE: ./public/animeflix.svg
/* harmony default export */ const animeflix = ({"src":"/_next/static/media/animeflix.7782fc8e.svg","height":512,"width":512});
;// CONCATENATED MODULE: ./src/components/Header.js






function Header() {
    const router = (0,router_.useRouter)();
    const handleKeyPress = (event)=>{
        if (event.key === "Enter") router.push(`/search?keyword=${event.currentTarget.value}`);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: "sticky top-0 bg-gray-900 w-full z-[51] h-12 flex items-center shadow-md",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                passHref: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "relative w-7 h-7 ml-4 sm:ml-6 cursor-pointer",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: animeflix,
                        alt: "Animeflix Application Icon",
                        layout: "fill",
                        objectPosition: "left"
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex rounded ml-4 sm:ml-6 bg-gray-50 py-[1px] items-center px-2",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(outline_.SearchIcon, {
                        className: "w-4 h-4"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        className: "outline-none w-44 sm:w-56 md:w-64 lg:w-72 p-1 text-black bg-transparent text-sm placeholder-gray-400",
                        placeholder: "Search for Anime to watch",
                        onKeyPress: handleKeyPress
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const components_Header = (Header);


/***/ }),

/***/ 3856:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Icon({ icon , text , className  }) {
    const HeroIcon = icon;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `flex items-center space-x-1 ${className || ""}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HeroIcon, {
                className: "w-4 h-4"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-xs sm:text-sm",
                children: text
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 2730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "progress": () => (/* binding */ progress)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _badrap_bar_of_progress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5191);
/* harmony import */ var _badrap_bar_of_progress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_badrap_bar_of_progress__WEBPACK_IMPORTED_MODULE_2__);




const progress = new (_badrap_bar_of_progress__WEBPACK_IMPORTED_MODULE_2___default())({
    size: 4,
    color: "#C3073F",
    className: "z-50",
    delay: 100
});
next_router__WEBPACK_IMPORTED_MODULE_1___default().events.on("routeChangeStart", progress.start);
next_router__WEBPACK_IMPORTED_MODULE_1___default().events.on("routeChangeError", progress.finish);
function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
        ...pageProps
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);


/***/ }),

/***/ 8361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ utility_client)
});

// EXTERNAL MODULE: external "graphql-request"
var external_graphql_request_ = __webpack_require__(5805);
;// CONCATENATED MODULE: ./src/constants.js
const apiEndpoint = "https://graphql.anilist.co";

;// CONCATENATED MODULE: ./src/utility/client.js


const client = new external_graphql_request_.GraphQLClient(apiEndpoint, {
    headers: {}
});
/* harmony default export */ const utility_client = (client);


/***/ }),

/***/ 4351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ animeInfoFragment),
/* harmony export */   "Z": () => (/* binding */ animeBannerFragment)
/* harmony export */ });
const animeInfoFragment = `
  fragment animeInfoFragment on Media {
    id
    title {
      english
      romaji
    }
    coverImage {
      color
      medium
      large
    }
    format
    duration
    meanScore
  }
`;
const animeBannerFragment = `
  fragment animeBannerFragment on Media {
    id
    title {
      english
      romaji
    }
    bannerImage
    description
    format
    duration
    meanScore
    genres
  }
`;


/***/ }),

/***/ 4458:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YE": () => (/* binding */ base64SolidImage)
/* harmony export */ });
/* unused harmony exports toBase64, solidImage */
const toBase64 = (str)=>Buffer.from(str).toString("base64")
;
const solidImage = (color)=>`
  <svg width="1" height="1" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <rect width="1" height="1" style="fill:${color};stroke-width:3;stroke:${color}" />
  </svg>
`
;
const base64SolidImage = (color)=>toBase64(solidImage(color))
;


/***/ })

};
;