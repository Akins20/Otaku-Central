"use strict";
exports.id = 688;
exports.ids = [688];
exports.modules = {

/***/ 7431:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


function Genre({ genre  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: `/genre/${genre}`,
        passHref: true,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            className: "p-1 rounded text-xs sm:text-sm bg-white text-black cursor-pointer hover:scale-105 transform transition duration-300 ease-out",
            children: genre
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Genre);


/***/ }),

/***/ 1964:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ anime_Banner)
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
// EXTERNAL MODULE: external "@heroicons/react/solid"
var solid_ = __webpack_require__(1143);
// EXTERNAL MODULE: ./src/components/Genre.js
var Genre = __webpack_require__(7431);
// EXTERNAL MODULE: ./src/components/Icon.js
var Icon = __webpack_require__(3856);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/hooks/useMediaQuery.js

const useMediaQuery = (query)=>{
    const { 0: matches , 1: setMatches  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = ()=>setMatches(media.matches)
        ;
        window.addEventListener("resize", listener);
        return ()=>window.removeEventListener("resize", listener)
        ;
    }, [
        matches,
        query
    ]);
    return matches;
};
/* harmony default export */ const hooks_useMediaQuery = (useMediaQuery);

;// CONCATENATED MODULE: ./src/components/anime/Banner.js









function Banner({ anime , onLoadingComplete  }) {
    const router = (0,router_.useRouter)();
    const isMedium = hooks_useMediaQuery("(min-width: 768px)");
    const isLarge = hooks_useMediaQuery("(min-width: 1024px)");
    const { romaji , english  } = anime.title;
    let title = romaji || english;
    title = `${title.split(" ").splice(0, 11).join(" ")}...`;
    let description = "";
    if (isLarge) description = `${anime.description.substr(0, 380)}...`;
    else if (isMedium) description = `${anime.description.substr(0, 300)}...`;
    // remove all the html tags
    description = description.replace(/<\w*\\?>/g, "");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] 2xl:h-[450px]",
        children: [
            anime.bannerImage ? /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                alt: "",
                onLoadingComplete: onLoadingComplete,
                priority: true,
                src: anime.bannerImage,
                layout: "fill",
                objectFit: "cover",
                className: "opacity-60"
            }) : onLoadingComplete(),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "text-white absolute ml-4 sm:ml-8 mt-4 sm:mt-6 lg:mt-8 xl:mt-10 2xl:mt-12 space-y-2 md:space-y-3",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl",
                        children: title
                    }),
                    english && english.length > 35 ? null : /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-gray-300 font-normal text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl",
                        children: english
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex space-x-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Icon/* default */.Z, {
                                icon: solid_.PlayIcon,
                                text: anime.format
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Icon/* default */.Z, {
                                icon: outline_.ClockIcon,
                                text: `${anime.duration} Min/Ep`
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Icon/* default */.Z, {
                                icon: outline_.ThumbUpIcon,
                                text: `${anime.meanScore}%`
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex flex-wrap gap-x-2 sm:gap-x-3 md:gap-x-4 gap-y-1 mr-2",
                        children: anime.genres.map((genre)=>/*#__PURE__*/ jsx_runtime_.jsx(Genre/* default */.Z, {
                                genre: genre
                            }, genre)
                        )
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "max-w-3xl",
                        children: description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: router.route === "/" ? `/anime/${anime.id}` : `/watch/${anime.id}?episode=1`,
                        passHref: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                className: "flex-wra cursor-pointer flex items-center px-2 py-1 rounded-lg text-xs sm:text-sm md:text-base bg-[#C3073F] text-white active:scale-90 transform transition duration-300 ease-in",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(solid_.PlayIcon, {
                                        className: "w-5 mr-1"
                                    }),
                                    router.route === "/" ? "Read More" : "Watch Now"
                                ]
                            })
                        })
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const anime_Banner = (Banner);


/***/ }),

/***/ 8034:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_anime_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(107);


function Section({ title , animeList  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "font-semibold text-white mt-4 ml-3 sm:ml-6 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl",
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex mt-2 mb-8 space-x-4 scrollbar-hide overflow-x-scroll overflow-y-hidden ml-3 sm:ml-6",
                children: animeList.map((anime)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_anime_Card__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        anime: anime
                    }, anime.id)
                )
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Section);


/***/ })

};
;