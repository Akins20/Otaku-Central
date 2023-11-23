"use strict";
(() => {
var exports = {};
exports.id = 609;
exports.ids = [609];
exports.modules = {

/***/ 2527:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1143);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_anime_Banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1964);
/* harmony import */ var _components_anime_Section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8034);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1699);
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2730);
/* harmony import */ var _utility_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8361);
/* harmony import */ var _utility_fragments__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4351);








function Anime({ anime , recommended  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_anime_Banner__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                anime: anime,
                onLoadingComplete: _pages_app__WEBPACK_IMPORTED_MODULE_5__.progress.finish
            }),
            recommended.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_anime_Section__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                animeList: recommended,
                title: "Recommended"
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "flex items-center justify-center font-semibold text-white mt-4 ml-3 sm:ml-6 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl",
                children: [
                    "no recommendations found",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__.EmojiSadIcon, {
                        className: "w-8"
                    })
                ]
            })
        ]
    });
}
async function getServerSideProps(context) {
    const { id  } = context.params;
    const query = `
  {
    Media(id: ${id}, type: ANIME) {
      ...animeBannerFragment
    }

    recommended: Page(perPage: 8) {
      recommendations(mediaId: ${id}, sort: RATING_DESC) {
        mediaRecommendation {
        ...animeInfoFragment
        }
      }
    }
  }

  ${_utility_fragments__WEBPACK_IMPORTED_MODULE_7__/* .animeBannerFragment */ .Z}
  ${_utility_fragments__WEBPACK_IMPORTED_MODULE_7__/* .animeInfoFragment */ .V}
  `;
    const data = await _utility_client__WEBPACK_IMPORTED_MODULE_6__/* ["default"].request */ .Z.request(query);
    if (!data.Media) {
        return {
            notFound: true
        };
    }
    const recommended = data.recommended.recommendations.map((anime)=>anime.mediaRecommendation
    );
    return {
        props: {
            anime: data.Media,
            recommended
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Anime);


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

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,61,271,107,688], () => (__webpack_exec__(2527)));
module.exports = __webpack_exports__;

})();