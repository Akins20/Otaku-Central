"use strict";
exports.id = 107;
exports.ids = [107];
exports.modules = {

/***/ 107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8768);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1143);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3856);
/* harmony import */ var _utility_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4458);







function Card({ anime  }) {
    let title = anime.title.romaji || anime.title.english;
    if (title.length > 35) title = `${title.substr(0, 35)}...`;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: `/anime/${anime.id}`,
        passHref: true,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
            className: "cursor-pointer w-46 sm:w-56 p-2 hover:scale-105 transform transition duration-300 ease-out",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "relative w-40 sm:w-52 h-48 sm:h-64",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                        alt: "Cover Image",
                        src: anime.coverImage.large || anime.coverImage.medium,
                        layout: "fill",
                        objectPosition: "center",
                        className: "rounded-md",
                        placeholder: "blur",
                        blurDataURL: `data:image/svg+xml;base64,${(0,_utility_image__WEBPACK_IMPORTED_MODULE_6__/* .base64SolidImage */ .YE)(anime.coverImage.color)}`
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "h-12 text-sm mt-2 text-white font-bold",
                            children: title
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex space-x-2 text-white text-xs",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    icon: _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__.PlayIcon,
                                    text: anime.format,
                                    className: "hidden sm:flex"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.ClockIcon,
                                    text: `${anime.duration} Min`
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.ThumbUpIcon,
                                    text: `${anime.meanScore}%`
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-gray-500 text-xs mt-2 float-right",
                            children: "Click to read more..."
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);


/***/ })

};
;