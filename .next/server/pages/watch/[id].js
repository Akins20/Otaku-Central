"use strict";
(() => {
var exports = {};
exports.id = 209;
exports.ids = [209];
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

/***/ 4301:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/components/Genre.js
var Genre = __webpack_require__(7431);
// EXTERNAL MODULE: ./src/components/Header.js + 1 modules
var Header = __webpack_require__(1699);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "@heroicons/react/outline"
var outline_ = __webpack_require__(8768);
// EXTERNAL MODULE: external "@heroicons/react/solid"
var solid_ = __webpack_require__(1143);
// EXTERNAL MODULE: ./src/components/Icon.js
var Icon = __webpack_require__(3856);
// EXTERNAL MODULE: ./src/utility/image.js
var utility_image = __webpack_require__(4458);
;// CONCATENATED MODULE: ./src/components/watch/Card.js







function Card({ anime  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: `/watch/${anime.id}?episode=1`,
        passHref: true,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
            className: "flex space-x-4 ml-2 mr-4 text-white py-2 h-30 cursor-pointer hover:scale-105 transform transition duration-300 ease-out",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "relative min-w-[6rem] min-h-[8rem] flex-shrink-1",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        alt: anime.title.english || anime.title.romaji,
                        src: anime.coverImage.large || anime.coverImage.medium || anime.bannerImage,
                        layout: "fill",
                        objectPosition: "left",
                        className: "rounded-md",
                        placeholder: "blur",
                        blurDataURL: `data:image/svg+xml;base64,${(0,utility_image/* base64SolidImage */.YE)(anime.coverImage.color)}`
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: anime.title.english || anime.title.romaji
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-gray-400",
                            children: `${anime.description.replace(/<\w*\\?>/g, "").slice(0, 70)}...`
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "justify-end m-4 flex space-x-2 text-white text-xs",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Icon/* default */.Z, {
                                    icon: solid_.PlayIcon,
                                    text: anime.format,
                                    className: "hidden sm:flex"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Icon/* default */.Z, {
                                    icon: outline_.ClockIcon,
                                    text: `${anime.duration} Min`
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Icon/* default */.Z, {
                                    icon: outline_.ThumbUpIcon,
                                    text: `${anime.meanScore}%`
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const watch_Card = (Card);

// EXTERNAL MODULE: ./src/pages/_app.js
var _app = __webpack_require__(2730);
// EXTERNAL MODULE: ./src/utility/client.js + 1 modules
var client = __webpack_require__(8361);
// EXTERNAL MODULE: ./src/utility/fragments.js
var fragments = __webpack_require__(4351);
// EXTERNAL MODULE: ./node_modules/gogoanime-api/lib/anime_parser.js + 4 modules
var anime_parser = __webpack_require__(5923);
;// CONCATENATED MODULE: ./src/utility/gogoanime.js

async function getAnime(slug, episode) {
    if (!slug || slug === "") return {};
    const newSlug = slug.replace(/[^0-9a-zA-Z]+/g, " ");
    const findAnime = await (0,anime_parser/* scrapeSearch */.Ab)({
        keyw: newSlug
    });
    if (findAnime.length === 0) return {};
    const data = await (0,anime_parser/* scrapeMP4 */.ey)({
        id: `${findAnime[0].animeId}-episode-${episode}`
    });
    const bestQuality = data.sources?.[data.sources.length - 1].file;
    return {
        referer: data.Referer,
        videoLink: bestQuality
    };
}
/* harmony default export */ const gogoanime = (getAnime);

;// CONCATENATED MODULE: ./src/utility/utils.js
const proxyUrl = (url, referer)=>{
    return `/api/video/proxy?src=${encodeURIComponent(url)}&referrer=${encodeURIComponent(referer)}`;
};

;// CONCATENATED MODULE: ./src/pages/watch/[id].js












const VideoPlayer = dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "watch\\[id].js -> " + "@components/VideoPlayer"
        ]
    },
    ssr: false
});
function Video({ videoLink , referer , anime , recommended  }) {
    const router = (0,router_.useRouter)();
    _app.progress.finish();
    const { id , episode  } = router.query;
    const previousEpisode = ()=>{
        router.push(`/watch/${id}?episode=${parseInt(episode, 10) - 1}`);
    };
    const nextEpisode = ()=>{
        router.push(`/watch/${id}?episode=${parseInt(episode, 10) + 1}`);
    };
    const urls = (0,external_react_.useMemo)(()=>{
        return /(gogocdn\.stream)|(manifest\.prod\.boltdns\.net)/;
    }, []);
    const { 0: shouldUseProxy , 1: setProxy  } = (0,external_react_.useState)(()=>{
        if (!videoLink) return true;
        return !videoLink.match(urls);
    });
    (0,external_react_.useEffect)(()=>{
        if (!videoLink) {
            setProxy(true);
            return;
        }
        setProxy(!videoLink.match(urls));
    }, [
        videoLink,
        urls
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "lg:flex mt-4 space-x-4",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex-shrink-0 max-w-[800px] mx-auto sm:p-4 lg:p-0 lg:ml-4 lg:mx-0 lg:max-w-full lg:w-[65%]",
                        children: [
                            videoLink ? /*#__PURE__*/ jsx_runtime_.jsx(VideoPlayer, {
                                src: shouldUseProxy ? proxyUrl(videoLink, referer) : videoLink,
                                poster: anime.bannerImage,
                                nextCallback: nextEpisode,
                                previousCallback: previousEpisode
                            }) : /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "font-semibold text-white mt-4 ml-3 sm:ml-6 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl",
                                children: "Sorry, the anime video couldn't be found"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex w-full justify-between items-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "m-2 font-semibold text-white mt-4 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl",
                                        children: `${anime.title.romaji || anime.title.english} | Episode ${episode}`
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                        className: "mr-2 relative text-white flex justify-between items-center p2",
                                        children: [
                                            "Use proxy?",
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "checkbox",
                                                checked: shouldUseProxy,
                                                onChange: ()=>setProxy(!shouldUseProxy)
                                                ,
                                                className: "absolute left-0 top-0 w-full h-full peer appearance-none"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: `
                  w-9 h-5 flex items-center flex-shrink-0 bg-gray-300
                  ml-2 p-1 rounded-full
                  after:w-4 after:h-4 after:bg-gray-500 after:rounded-full after:shadow-lg
                  peer-checked:bg-red-500 peer-checked:after:bg-gray-800 peer-checked:after:translate-x-3 after:duration-300
                `
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "ml-3 grid grid-cols-4 gap-x-1 sm:gap-x-3 md:gap-x-4 gap-y-1 mr-2 md:flex",
                                children: anime.genres.map((genre)=>/*#__PURE__*/ jsx_runtime_.jsx(Genre/* default */.Z, {
                                        genre: genre
                                    }, genre)
                                )
                            }),
                            anime.description ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-gray-400 p-2 mt-2",
                                dangerouslySetInnerHTML: {
                                    __html: anime.description
                                }
                            }) : null
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mx-auto",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "lg:mt-0 font-semibold text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl",
                                children: "Recommended animes"
                            }),
                            recommended.map((recommendation)=>/*#__PURE__*/ jsx_runtime_.jsx(watch_Card, {
                                    anime: recommendation
                                }, recommendation.id)
                            )
                        ]
                    })
                ]
            })
        ]
    });
}
async function getServerSideProps(context) {
    const { id , episode  } = context.query;
    const query = `
  {
    anime: Media(id: ${id}) {
      title {
        english
        romaji
      }
      bannerImage
      description
      genres
    }

    recommended: Page(perPage: 20) {
      recommendations(mediaId: ${id}, sort: RATING_DESC) {
        mediaRecommendation {
          bannerImage
          description
          ...animeInfoFragment
        }
      }
    }
  }

  ${fragments/* animeInfoFragment */.V}
  `;
    const data = await client/* default.request */.Z.request(query);
    const { english , romaji  } = data.anime.title;
    const recommended = data.recommended.recommendations.map((anime)=>anime.mediaRecommendation
    );
    const res = await Promise.all([
        gogoanime(romaji, episode),
        gogoanime(english, episode), 
    ]).then((results)=>results[0] || results[1]
    );
    let videoLink = null;
    let referer = null;
    if (res.videoLink !== undefined) {
        ({ videoLink , referer  } = res);
    }
    return {
        props: {
            videoLink,
            referer,
            anime: data.anime,
            recommended
        }
    };
}
/* harmony default export */ const _id_ = (Video);


/***/ }),

/***/ 5191:
/***/ ((module) => {

module.exports = require("@badrap/bar-of-progress");

/***/ }),

/***/ 8768:
/***/ ((module) => {

module.exports = require("@heroicons/react/outline");

/***/ }),

/***/ 1143:
/***/ ((module) => {

module.exports = require("@heroicons/react/solid");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 5666:
/***/ ((module) => {

module.exports = require("crypto-js");

/***/ }),

/***/ 2111:
/***/ ((module) => {

module.exports = require("css-select");

/***/ }),

/***/ 5598:
/***/ ((module) => {

module.exports = require("css-what");

/***/ }),

/***/ 4011:
/***/ ((module) => {

module.exports = require("dom-serializer");

/***/ }),

/***/ 3423:
/***/ ((module) => {

module.exports = require("domelementtype");

/***/ }),

/***/ 2556:
/***/ ((module) => {

module.exports = require("domhandler");

/***/ }),

/***/ 8973:
/***/ ((module) => {

module.exports = require("domutils");

/***/ }),

/***/ 4550:
/***/ ((module) => {

module.exports = require("entities/lib/decode_codepoint");

/***/ }),

/***/ 5805:
/***/ ((module) => {

module.exports = require("graphql-request");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 2667:
/***/ ((module) => {

module.exports = require("parse5");

/***/ }),

/***/ 5571:
/***/ ((module) => {

module.exports = require("parse5-htmlparser2-tree-adapter");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 752:
/***/ ((module) => {

module.exports = require("tslib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,61,706,271], () => (__webpack_exec__(4301)));
module.exports = __webpack_exports__;

})();