"use strict";
(() => {
var exports = {};
exports.id = 222;
exports.ids = [222];
exports.modules = {

/***/ 5664:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
async function handler(req, res) {
    const { src , referrer  } = req.query;
    const options = {
        headers: {
            Referer: referrer
        }
    };
    // fetch the data from the url
    const response = await fetch(src, options);
    const setHeader = (header)=>{
        res.setHeader(header, response.headers.get(header.toLowerCase()));
    };
    // set etag, and expires header so that the browser caches the video data
    setHeader("etag");
    setHeader("expires");
    // send the response data back to the client
    res.send(response.body);
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5664));
module.exports = __webpack_exports__;

})();