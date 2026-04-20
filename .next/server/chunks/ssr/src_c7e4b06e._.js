module.exports = [
"[project]/src/app/carousel/HeroCarousel.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "carousel": "HeroCarousel-module__iuJDSq__carousel",
  "overlay": "HeroCarousel-module__iuJDSq__overlay",
  "slide": "HeroCarousel-module__iuJDSq__slide",
  "slider": "HeroCarousel-module__iuJDSq__slider",
});
}),
"[project]/src/app/carousel/HeroCarousel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$carousel$2f$HeroCarousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/carousel/HeroCarousel.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
// each image now has its own overlay text
const slides = [
    {
        src: "/banner_images/banner1.png",
        title: "Všetko čo Váš miláčik potrebuje",
        subtitle: "Jedlo, hračky a iné doplnky"
    },
    {
        src: "/banner_images/banner2.jpeg",
        title: "Pohodlie ako nikde inde",
        subtitle: "Hebké postele, deky a viac"
    },
    {
        src: "/banner_images/banner3.jpg",
        title: "Zdravé maškrty, šťastné zvieratká",
        subtitle: "Mňamky a výživové doplnky z prírodných ingrediencií"
    }
];
function HeroCarousel() {
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const interval = setInterval(()=>{
            setIndex((prev)=>(prev + 1) % slides.length);
        }, 4000);
        return ()=>clearInterval(interval);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$carousel$2f$HeroCarousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].carousel,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$carousel$2f$HeroCarousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].slider,
            style: {
                transform: `translateX(-${index * 100}%)`
            },
            children: slides.map((slide, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$carousel$2f$HeroCarousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].slide,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: slide.src,
                            alt: `Banner ${i + 1}`,
                            fill: true,
                            priority: i === 0
                        }, void 0, false, {
                            fileName: "[project]/src/app/carousel/HeroCarousel.tsx",
                            lineNumber: 45,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$carousel$2f$HeroCarousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].overlay,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    children: slide.title
                                }, void 0, false, {
                                    fileName: "[project]/src/app/carousel/HeroCarousel.tsx",
                                    lineNumber: 52,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: slide.subtitle
                                }, void 0, false, {
                                    fileName: "[project]/src/app/carousel/HeroCarousel.tsx",
                                    lineNumber: 53,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/carousel/HeroCarousel.tsx",
                            lineNumber: 51,
                            columnNumber: 13
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/src/app/carousel/HeroCarousel.tsx",
                    lineNumber: 44,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/app/carousel/HeroCarousel.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/carousel/HeroCarousel.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/actions/data:3dd4cf [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40e1439d139434a6a0981a1f66939369b0da0ddd3f":"addToBasket"},"src/actions/products.ts",""] */ __turbopack_context__.s([
    "addToBasket",
    ()=>addToBasket
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var addToBasket = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40e1439d139434a6a0981a1f66939369b0da0ddd3f", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "addToBasket"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcHJvZHVjdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCJcclxuXHJcbmltcG9ydCB7IGNvb2tpZXMgfSBmcm9tIFwibmV4dC9oZWFkZXJzXCJcclxuaW1wb3J0IHsgZ2V0VXNlciB9IGZyb20gXCIuL3VzZXJcIlxyXG5pbXBvcnQgZ2V0REIgZnJvbSBcIkAvbGliL2RiXCJcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiXHJcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiXHJcbmltcG9ydCB7IFJlc2VuZCB9IGZyb20gJ3Jlc2VuZCc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkVG9CYXNrZXQoaWQ6IG51bWJlcikge1xyXG4gICAgY29uc3Qga2Vrc2lreSA9IGF3YWl0IGNvb2tpZXMoKVxyXG4gICAgbGV0IGtvc2lrID0ga2Vrc2lreS5nZXQoXCJjYXJ0XCIpPy52YWx1ZSA/PyBcIltdXCJcclxuXHJcbiAgICBpZiAoa29zaWsgPT09IFwiXCIpIHtcclxuICAgICAgICBrb3NpayA9IFwiW11cIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJhc2tldCA9IEpTT04ucGFyc2Uoa29zaWspXHJcblxyXG4gICAgY29uc3QgaXRlbSA9IGJhc2tldC5maW5kKChpdGVtOiB7IGlkOiBudW1iZXIsIHF1YW50aXR5OiBudW1iZXIgfSkgPT4gaXRlbS5pZCA9PT0gaWQpXHJcblxyXG4gICAgaWYgKGl0ZW0pIHtcclxuICAgICAgICBpdGVtLnF1YW50aXR5ICs9IDFcclxuICAgICAgICBrZWtzaWt5LnNldChcImNhcnRcIiwgSlNPTi5zdHJpbmdpZnkoYmFza2V0KSwgeyBwYXRoOiBcIi9cIiB9KVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGJhc2tldC5wdXNoKHtcclxuICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgcXVhbnRpdHk6IDFcclxuICAgIH0pXHJcblxyXG4gICAga2Vrc2lreS5zZXQoXCJjYXJ0XCIsIEpTT04uc3RyaW5naWZ5KGJhc2tldCksIHsgcGF0aDogXCIvXCIgfSlcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbW92ZUZyb21CYXNrZXQoaWQ6IG51bWJlcikge1xyXG4gICAgY29uc3Qga2Vrc2lreSA9IGF3YWl0IGNvb2tpZXMoKVxyXG4gICAgbGV0IGtvc2lrID0ga2Vrc2lreS5nZXQoXCJjYXJ0XCIpPy52YWx1ZSA/PyBcIltdXCJcclxuXHJcbiAgICBpZiAoa29zaWsgPT09IFwiXCIpIHtcclxuICAgICAgICBrb3NpayA9IFwiW11cIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJhc2tldCA9IEpTT04ucGFyc2Uoa29zaWspXHJcblxyXG4gICAgY29uc3QgaXRlbSA9IGJhc2tldC5maW5kKChpdGVtOiB7IGlkOiBudW1iZXIsIHF1YW50aXR5OiBudW1iZXIgfSkgPT4gaXRlbS5pZCA9PT0gaWQpXHJcblxyXG4gICAgaWYgKGl0ZW0pIHtcclxuICAgICAgICBpdGVtLnF1YW50aXR5IC09IDFcclxuICAgICAgICBrZWtzaWt5LnNldChcImNhcnRcIiwgSlNPTi5zdHJpbmdpZnkoYmFza2V0KSwgeyBwYXRoOiBcIi9cIiB9KVxyXG4gICAgICAgIGlmIChpdGVtLnF1YW50aXR5IDw9IDApIHtcclxuICAgICAgICAgICAgYmFza2V0LnNwbGljZShiYXNrZXQuaW5kZXhPZihpdGVtKSwgMSlcclxuICAgICAgICAgICAga2Vrc2lreS5zZXQoXCJjYXJ0XCIsIEpTT04uc3RyaW5naWZ5KGJhc2tldCksIHsgcGF0aDogXCIvXCIgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpc0luRmF2b3VyaXRlcyhpZDogbnVtYmVyKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICBjb25zdCBkYiA9IGdldERCKCk7XHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgZ2V0VXNlcigpO1xyXG5cclxuICAgIGlmICh1c2VyID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmF2b3VyaXRlID0gYXdhaXQgZGJcclxuICAgICAgICAuc2VsZWN0RnJvbShcImZhdm9yaXRlX3Byb2R1Y3RzXCIpXHJcbiAgICAgICAgLndoZXJlKFwicHJvZHVjdF9pZFwiLCBcIj1cIiwgaWQpXHJcbiAgICAgICAgLndoZXJlKFwidXNlcl9pZFwiLCBcIj1cIiwgdXNlci5pZClcclxuICAgICAgICAuc2VsZWN0QWxsKClcclxuICAgICAgICAuZXhlY3V0ZVRha2VGaXJzdCgpO1xyXG5cclxuICAgIGlmIChmYXZvdXJpdGUpIHJldHVybiB0cnVlXHJcblxyXG4gICAgcmV0dXJuIGZhbHNlXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRUb0Zhdm91cml0ZXMoaWQ6IG51bWJlcikge1xyXG4gICAgY29uc3QgZGIgPSBnZXREQigpO1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGdldFVzZXIoKTtcclxuXHJcbiAgICBpZiAodXNlciA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZhdm91cml0ZSA9IGF3YWl0IGRiXHJcbiAgICAgICAgLnNlbGVjdEZyb20oXCJmYXZvcml0ZV9wcm9kdWN0c1wiKVxyXG4gICAgICAgIC53aGVyZShcInByb2R1Y3RfaWRcIiwgXCI9XCIsIGlkKVxyXG4gICAgICAgIC53aGVyZShcInVzZXJfaWRcIiwgXCI9XCIsIHVzZXIuaWQpXHJcbiAgICAgICAgLnNlbGVjdEFsbCgpXHJcbiAgICAgICAgLmV4ZWN1dGVUYWtlRmlyc3QoKTtcclxuXHJcbiAgICBpZiAoZmF2b3VyaXRlKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgYXdhaXQgZGIuaW5zZXJ0SW50byhcImZhdm9yaXRlX3Byb2R1Y3RzXCIpLnZhbHVlcyh7IHVzZXJfaWQ6IHVzZXIuaWQsIHByb2R1Y3RfaWQ6IGlkIH0pLmV4ZWN1dGVUYWtlRmlyc3QoKTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwicHJvZHVjdHNcIilcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbW92ZUZyb21GYXZvdXJpdGVzKGlkOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGRiID0gZ2V0REIoKTtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRVc2VyKCk7XHJcblxyXG4gICAgaWYgKHVzZXIgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmYXZvdXJpdGUgPSBhd2FpdCBkYlxyXG4gICAgLnNlbGVjdEZyb20oXCJmYXZvcml0ZV9wcm9kdWN0c1wiKVxyXG4gICAgLndoZXJlKFwicHJvZHVjdF9pZFwiLCBcIj1cIiwgaWQpXHJcbiAgICAud2hlcmUoXCJ1c2VyX2lkXCIsIFwiPVwiLCB1c2VyLmlkKVxyXG4gICAgLnNlbGVjdEFsbCgpXHJcbiAgICAuZXhlY3V0ZVRha2VGaXJzdCgpO1xyXG5cclxuICAgIGlmICghZmF2b3VyaXRlKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGF3YWl0IGRiLmRlbGV0ZUZyb20oXCJmYXZvcml0ZV9wcm9kdWN0c1wiKS53aGVyZShcInByb2R1Y3RfaWRcIiwgXCI9XCIsIGlkKS53aGVyZShcInVzZXJfaWRcIiwgXCI9XCIsIHVzZXIuaWQpLmV4ZWN1dGVUYWtlRmlyc3QoKTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwicHJvZHVjdHNcIilcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1ha2VUZW1wb3JhcnlPcmRlcih1bGljYTogc3RyaW5nLCBwb3Bpc25lX2Npc2xvX2RvbXU6IHN0cmluZywgbWVzdG86IHN0cmluZywgemlwX2NvZGU6IHN0cmluZywga3JhamluYTogc3RyaW5nLCB0ZWxlZm9uOiBzdHJpbmcsIGVtYWlsOiBzdHJpbmcsIG1lbm86IHN0cmluZywgcHJpZXp2aXNrbzogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBrZWtzaWt5ID0gYXdhaXQgY29va2llcygpXHJcbiAgICBsZXQgb3JkZXIgPSBrZWtzaWt5LmdldChcIm9yZGVyXCIpPy52YWx1ZSA/PyBcIlwiXHJcbiAgICBjb25zdCBiYXNrZXQgPSBrZWtzaWt5LmdldChcImNhcnRcIik/LnZhbHVlID8/IFwiW11cIlxyXG5cclxuICAgIGlmIChvcmRlciAhPSBcIlwiKSB7XHJcbiAgICAgICAga2Vrc2lreS5zZXQoXCJvcmRlclwiLCBcIlwiLCB7IHBhdGg6IFwiL1wiLCBtYXhBZ2U6IDAgfSlcclxuICAgIH1cclxuXHJcbiAgICBvcmRlciA9IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBcInVsaWNhXCI6IHVsaWNhLFxyXG4gICAgICAgIFwicG9waXNuZV9jaXNsb19kb211XCI6IHBvcGlzbmVfY2lzbG9fZG9tdSxcclxuICAgICAgICBcIm1lc3RvXCI6IG1lc3RvLFxyXG4gICAgICAgIFwiemlwX2NvZGVcIjogemlwX2NvZGUsXHJcbiAgICAgICAgXCJrcmFqaW5hXCI6IGtyYWppbmEsXHJcbiAgICAgICAgXCJ0ZWxlZm9uXCI6IHRlbGVmb24sXHJcbiAgICAgICAgXCJlbWFpbFwiOiBlbWFpbCxcclxuICAgICAgICBcIm1lbm9cIjogbWVubyxcclxuICAgICAgICBcInByaWV6dmlza29cIjogcHJpZXp2aXNrbyxcclxuICAgICAgICBcImNhcnRcIjogSlNPTi5wYXJzZShiYXNrZXQpXHJcbiAgICB9KVxyXG5cclxuICAgIGtla3Npa3kuc2V0KFwib3JkZXJcIiwgb3JkZXIsIHsgcGF0aDogXCIvXCIgfSlcclxuICAgIHJlZGlyZWN0KFwiL2NvbmZpcm1hdGlvblwiKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1ha2VPcmRlcigpIHtcclxuICAgIGNvbnN0IGNvb2tpZVN0b3JlID0gYXdhaXQgY29va2llcygpO1xyXG4gICAgY29uc3Qgb3JkZXJDb29raWUgPSBjb29raWVTdG9yZS5nZXQoXCJvcmRlclwiKT8udmFsdWU7XHJcbiAgICBjb25zdCBkYiA9IGdldERCKCk7XHJcbiAgICBpZiAoIW9yZGVyQ29va2llKSByZXR1cm47XHJcbiAgICBjb25zdCBvcmRlciA9IEpTT04ucGFyc2Uob3JkZXJDb29raWUpO1xyXG4gICAgXHJcbiAgICBsZXQgdG90YWxfcHJpY2UgPSAwO1xyXG4gICAgXHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2Ygb3JkZXIuY2FydCkge1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBkYlxyXG4gICAgICAgIC5zZWxlY3RGcm9tKFwicHJvZHVjdHNcIilcclxuICAgICAgICAud2hlcmUoXCJpZFwiLCBcIj1cIiwgaXRlbS5pZClcclxuICAgICAgICAuc2VsZWN0QWxsKClcclxuICAgICAgICAuZXhlY3V0ZVRha2VGaXJzdCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICghcHJvZHVjdCkgY29udGludWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdG90YWxfcHJpY2UgKz0gaXRlbS5xdWFudGl0eSAqIHByb2R1Y3QucHJpY2U7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IHJlc2VuZCA9IG5ldyBSZXNlbmQoJ3JlX1J2dVFWZHlXX0F1Y0tBVVYySFRBSG52UUVHU3h4ZlhkOScpO1xyXG4gICAgXHJcbiAgICBhd2FpdCByZXNlbmQuZW1haWxzLnNlbmQoe1xyXG4gICAgICAgIGZyb206IFwiUmVzZW5kIDxvbmJvYXJkaW5nQHJlc2VuZC5kZXY+XCIsXHJcbiAgICAgICAgdG86IG9yZGVyLmVtYWlsLFxyXG4gICAgICAgIHN1YmplY3Q6IFwiT3JkZXIgY29uZmlybWF0aW9uXCIsXHJcbiAgICAgICAgaHRtbDogXCI8cD5XZSBhcmUgY29uZmlybWluZyB5b3VyIG9yZGVyLjwvcD5cIiArXHJcbiAgICAgICAgXCI8cD5TaGlwcGluZyBpbmZvOjwvcD5cIiArXHJcbiAgICAgICAgXCI8cD5VbGljYTogXCIgKyBvcmRlci51bGljYSArIFwiPC9wPlwiICtcclxuICAgICAgICBcIjxwPlBvcGlzbmUgY2lzbG8gZG9tdTogXCIgKyBvcmRlci5wb3Bpc25lX2Npc2xvX2RvbXUgKyBcIjwvcD5cIiArXHJcbiAgICAgICAgXCI8cD5NZXN0bzogXCIgKyBvcmRlci5tZXN0byArIFwiPC9wPlwiICtcclxuICAgICAgICBcIjxwPlppcCBjb2RlOiBcIiArIG9yZGVyLnppcF9jb2RlICsgXCI8L3A+XCIgK1xyXG4gICAgICAgIFwiPHA+S3JhamluYTogXCIgKyBvcmRlci5rcmFqaW5hICsgXCI8L3A+XCIgK1xyXG4gICAgICAgIFwiPHA+VGVsZWZvbjogXCIgKyBvcmRlci50ZWxlZm9uICsgXCI8L3A+XCIgK1xyXG4gICAgICAgIFwiPHA+RW1haWw6IFwiICsgb3JkZXIuZW1haWwgKyBcIjwvcD5cIiArXHJcbiAgICAgICAgXCI8cD5NZW5vOiBcIiArIG9yZGVyLm1lbm8gKyBcIjwvcD5cIiArXHJcbiAgICAgICAgXCI8cD5QcmllenZpc2tvOiBcIiArIG9yZGVyLnByaWV6dmlza28gKyBcIjwvcD5cIiArXHJcbiAgICAgICAgXCI8cD5Ub3RhbDogXCIgKyB0b3RhbF9wcmljZSArIFwi4oKsPC9wPlwiLFxyXG4gICAgfSk7XHJcbiAgICBjb29raWVTdG9yZS5kZWxldGUoXCJjYXJ0XCIpO1xyXG4gICAgY29va2llU3RvcmUuZGVsZXRlKFwib3JkZXJcIik7XHJcbiAgICBjb25zb2xlLmxvZyhvcmRlci5lbWFpbCk7XHJcbiAgICByZWRpcmVjdChcIi9jb25maXJtZWRcIik7XHJcbiAgfVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjRSQVNzQiJ9
}),
"[project]/src/app/products/addToCartButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddToCartButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$data$3a$3dd4cf__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/actions/data:3dd4cf [app-ssr] (ecmascript) <text/javascript>");
"use client";
;
;
function AddToCartButton(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: "btn",
        onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$data$3a$3dd4cf__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["addToBasket"])(props.id),
        children: "Add to cart"
    }, void 0, false, {
        fileName: "[project]/src/app/products/addToCartButton.tsx",
        lineNumber: 6,
        columnNumber: 12
    }, this);
}
}),
"[project]/src/actions/data:94521b [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40596e90704641ed916cf409dfaadb626b570f8b6a":"addToFavourites"},"src/actions/products.ts",""] */ __turbopack_context__.s([
    "addToFavourites",
    ()=>addToFavourites
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var addToFavourites = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40596e90704641ed916cf409dfaadb626b570f8b6a", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "addToFavourites"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcHJvZHVjdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCJcclxuXHJcbmltcG9ydCB7IGNvb2tpZXMgfSBmcm9tIFwibmV4dC9oZWFkZXJzXCJcclxuaW1wb3J0IHsgZ2V0VXNlciB9IGZyb20gXCIuL3VzZXJcIlxyXG5pbXBvcnQgZ2V0REIgZnJvbSBcIkAvbGliL2RiXCJcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiXHJcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiXHJcbmltcG9ydCB7IFJlc2VuZCB9IGZyb20gJ3Jlc2VuZCc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkVG9CYXNrZXQoaWQ6IG51bWJlcikge1xyXG4gICAgY29uc3Qga2Vrc2lreSA9IGF3YWl0IGNvb2tpZXMoKVxyXG4gICAgbGV0IGtvc2lrID0ga2Vrc2lreS5nZXQoXCJjYXJ0XCIpPy52YWx1ZSA/PyBcIltdXCJcclxuXHJcbiAgICBpZiAoa29zaWsgPT09IFwiXCIpIHtcclxuICAgICAgICBrb3NpayA9IFwiW11cIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJhc2tldCA9IEpTT04ucGFyc2Uoa29zaWspXHJcblxyXG4gICAgY29uc3QgaXRlbSA9IGJhc2tldC5maW5kKChpdGVtOiB7IGlkOiBudW1iZXIsIHF1YW50aXR5OiBudW1iZXIgfSkgPT4gaXRlbS5pZCA9PT0gaWQpXHJcblxyXG4gICAgaWYgKGl0ZW0pIHtcclxuICAgICAgICBpdGVtLnF1YW50aXR5ICs9IDFcclxuICAgICAgICBrZWtzaWt5LnNldChcImNhcnRcIiwgSlNPTi5zdHJpbmdpZnkoYmFza2V0KSwgeyBwYXRoOiBcIi9cIiB9KVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGJhc2tldC5wdXNoKHtcclxuICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgcXVhbnRpdHk6IDFcclxuICAgIH0pXHJcblxyXG4gICAga2Vrc2lreS5zZXQoXCJjYXJ0XCIsIEpTT04uc3RyaW5naWZ5KGJhc2tldCksIHsgcGF0aDogXCIvXCIgfSlcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbW92ZUZyb21CYXNrZXQoaWQ6IG51bWJlcikge1xyXG4gICAgY29uc3Qga2Vrc2lreSA9IGF3YWl0IGNvb2tpZXMoKVxyXG4gICAgbGV0IGtvc2lrID0ga2Vrc2lreS5nZXQoXCJjYXJ0XCIpPy52YWx1ZSA/PyBcIltdXCJcclxuXHJcbiAgICBpZiAoa29zaWsgPT09IFwiXCIpIHtcclxuICAgICAgICBrb3NpayA9IFwiW11cIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJhc2tldCA9IEpTT04ucGFyc2Uoa29zaWspXHJcblxyXG4gICAgY29uc3QgaXRlbSA9IGJhc2tldC5maW5kKChpdGVtOiB7IGlkOiBudW1iZXIsIHF1YW50aXR5OiBudW1iZXIgfSkgPT4gaXRlbS5pZCA9PT0gaWQpXHJcblxyXG4gICAgaWYgKGl0ZW0pIHtcclxuICAgICAgICBpdGVtLnF1YW50aXR5IC09IDFcclxuICAgICAgICBrZWtzaWt5LnNldChcImNhcnRcIiwgSlNPTi5zdHJpbmdpZnkoYmFza2V0KSwgeyBwYXRoOiBcIi9cIiB9KVxyXG4gICAgICAgIGlmIChpdGVtLnF1YW50aXR5IDw9IDApIHtcclxuICAgICAgICAgICAgYmFza2V0LnNwbGljZShiYXNrZXQuaW5kZXhPZihpdGVtKSwgMSlcclxuICAgICAgICAgICAga2Vrc2lreS5zZXQoXCJjYXJ0XCIsIEpTT04uc3RyaW5naWZ5KGJhc2tldCksIHsgcGF0aDogXCIvXCIgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpc0luRmF2b3VyaXRlcyhpZDogbnVtYmVyKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICBjb25zdCBkYiA9IGdldERCKCk7XHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgZ2V0VXNlcigpO1xyXG5cclxuICAgIGlmICh1c2VyID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmF2b3VyaXRlID0gYXdhaXQgZGJcclxuICAgICAgICAuc2VsZWN0RnJvbShcImZhdm9yaXRlX3Byb2R1Y3RzXCIpXHJcbiAgICAgICAgLndoZXJlKFwicHJvZHVjdF9pZFwiLCBcIj1cIiwgaWQpXHJcbiAgICAgICAgLndoZXJlKFwidXNlcl9pZFwiLCBcIj1cIiwgdXNlci5pZClcclxuICAgICAgICAuc2VsZWN0QWxsKClcclxuICAgICAgICAuZXhlY3V0ZVRha2VGaXJzdCgpO1xyXG5cclxuICAgIGlmIChmYXZvdXJpdGUpIHJldHVybiB0cnVlXHJcblxyXG4gICAgcmV0dXJuIGZhbHNlXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRUb0Zhdm91cml0ZXMoaWQ6IG51bWJlcikge1xyXG4gICAgY29uc3QgZGIgPSBnZXREQigpO1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGdldFVzZXIoKTtcclxuXHJcbiAgICBpZiAodXNlciA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZhdm91cml0ZSA9IGF3YWl0IGRiXHJcbiAgICAgICAgLnNlbGVjdEZyb20oXCJmYXZvcml0ZV9wcm9kdWN0c1wiKVxyXG4gICAgICAgIC53aGVyZShcInByb2R1Y3RfaWRcIiwgXCI9XCIsIGlkKVxyXG4gICAgICAgIC53aGVyZShcInVzZXJfaWRcIiwgXCI9XCIsIHVzZXIuaWQpXHJcbiAgICAgICAgLnNlbGVjdEFsbCgpXHJcbiAgICAgICAgLmV4ZWN1dGVUYWtlRmlyc3QoKTtcclxuXHJcbiAgICBpZiAoZmF2b3VyaXRlKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgYXdhaXQgZGIuaW5zZXJ0SW50byhcImZhdm9yaXRlX3Byb2R1Y3RzXCIpLnZhbHVlcyh7IHVzZXJfaWQ6IHVzZXIuaWQsIHByb2R1Y3RfaWQ6IGlkIH0pLmV4ZWN1dGVUYWtlRmlyc3QoKTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwicHJvZHVjdHNcIilcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbW92ZUZyb21GYXZvdXJpdGVzKGlkOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGRiID0gZ2V0REIoKTtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRVc2VyKCk7XHJcblxyXG4gICAgaWYgKHVzZXIgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmYXZvdXJpdGUgPSBhd2FpdCBkYlxyXG4gICAgLnNlbGVjdEZyb20oXCJmYXZvcml0ZV9wcm9kdWN0c1wiKVxyXG4gICAgLndoZXJlKFwicHJvZHVjdF9pZFwiLCBcIj1cIiwgaWQpXHJcbiAgICAud2hlcmUoXCJ1c2VyX2lkXCIsIFwiPVwiLCB1c2VyLmlkKVxyXG4gICAgLnNlbGVjdEFsbCgpXHJcbiAgICAuZXhlY3V0ZVRha2VGaXJzdCgpO1xyXG5cclxuICAgIGlmICghZmF2b3VyaXRlKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGF3YWl0IGRiLmRlbGV0ZUZyb20oXCJmYXZvcml0ZV9wcm9kdWN0c1wiKS53aGVyZShcInByb2R1Y3RfaWRcIiwgXCI9XCIsIGlkKS53aGVyZShcInVzZXJfaWRcIiwgXCI9XCIsIHVzZXIuaWQpLmV4ZWN1dGVUYWtlRmlyc3QoKTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwicHJvZHVjdHNcIilcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1ha2VUZW1wb3JhcnlPcmRlcih1bGljYTogc3RyaW5nLCBwb3Bpc25lX2Npc2xvX2RvbXU6IHN0cmluZywgbWVzdG86IHN0cmluZywgemlwX2NvZGU6IHN0cmluZywga3JhamluYTogc3RyaW5nLCB0ZWxlZm9uOiBzdHJpbmcsIGVtYWlsOiBzdHJpbmcsIG1lbm86IHN0cmluZywgcHJpZXp2aXNrbzogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBrZWtzaWt5ID0gYXdhaXQgY29va2llcygpXHJcbiAgICBsZXQgb3JkZXIgPSBrZWtzaWt5LmdldChcIm9yZGVyXCIpPy52YWx1ZSA/PyBcIlwiXHJcbiAgICBjb25zdCBiYXNrZXQgPSBrZWtzaWt5LmdldChcImNhcnRcIik/LnZhbHVlID8/IFwiW11cIlxyXG5cclxuICAgIGlmIChvcmRlciAhPSBcIlwiKSB7XHJcbiAgICAgICAga2Vrc2lreS5zZXQoXCJvcmRlclwiLCBcIlwiLCB7IHBhdGg6IFwiL1wiLCBtYXhBZ2U6IDAgfSlcclxuICAgIH1cclxuXHJcbiAgICBvcmRlciA9IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBcInVsaWNhXCI6IHVsaWNhLFxyXG4gICAgICAgIFwicG9waXNuZV9jaXNsb19kb211XCI6IHBvcGlzbmVfY2lzbG9fZG9tdSxcclxuICAgICAgICBcIm1lc3RvXCI6IG1lc3RvLFxyXG4gICAgICAgIFwiemlwX2NvZGVcIjogemlwX2NvZGUsXHJcbiAgICAgICAgXCJrcmFqaW5hXCI6IGtyYWppbmEsXHJcbiAgICAgICAgXCJ0ZWxlZm9uXCI6IHRlbGVmb24sXHJcbiAgICAgICAgXCJlbWFpbFwiOiBlbWFpbCxcclxuICAgICAgICBcIm1lbm9cIjogbWVubyxcclxuICAgICAgICBcInByaWV6dmlza29cIjogcHJpZXp2aXNrbyxcclxuICAgICAgICBcImNhcnRcIjogSlNPTi5wYXJzZShiYXNrZXQpXHJcbiAgICB9KVxyXG5cclxuICAgIGtla3Npa3kuc2V0KFwib3JkZXJcIiwgb3JkZXIsIHsgcGF0aDogXCIvXCIgfSlcclxuICAgIHJlZGlyZWN0KFwiL2NvbmZpcm1hdGlvblwiKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1ha2VPcmRlcigpIHtcclxuICAgIGNvbnN0IGNvb2tpZVN0b3JlID0gYXdhaXQgY29va2llcygpO1xyXG4gICAgY29uc3Qgb3JkZXJDb29raWUgPSBjb29raWVTdG9yZS5nZXQoXCJvcmRlclwiKT8udmFsdWU7XHJcbiAgICBjb25zdCBkYiA9IGdldERCKCk7XHJcbiAgICBpZiAoIW9yZGVyQ29va2llKSByZXR1cm47XHJcbiAgICBjb25zdCBvcmRlciA9IEpTT04ucGFyc2Uob3JkZXJDb29raWUpO1xyXG4gICAgXHJcbiAgICBsZXQgdG90YWxfcHJpY2UgPSAwO1xyXG4gICAgXHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2Ygb3JkZXIuY2FydCkge1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBkYlxyXG4gICAgICAgIC5zZWxlY3RGcm9tKFwicHJvZHVjdHNcIilcclxuICAgICAgICAud2hlcmUoXCJpZFwiLCBcIj1cIiwgaXRlbS5pZClcclxuICAgICAgICAuc2VsZWN0QWxsKClcclxuICAgICAgICAuZXhlY3V0ZVRha2VGaXJzdCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICghcHJvZHVjdCkgY29udGludWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdG90YWxfcHJpY2UgKz0gaXRlbS5xdWFudGl0eSAqIHByb2R1Y3QucHJpY2U7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IHJlc2VuZCA9IG5ldyBSZXNlbmQoJ3JlX1J2dVFWZHlXX0F1Y0tBVVYySFRBSG52UUVHU3h4ZlhkOScpO1xyXG4gICAgXHJcbiAgICBhd2FpdCByZXNlbmQuZW1haWxzLnNlbmQoe1xyXG4gICAgICAgIGZyb206IFwiUmVzZW5kIDxvbmJvYXJkaW5nQHJlc2VuZC5kZXY+XCIsXHJcbiAgICAgICAgdG86IG9yZGVyLmVtYWlsLFxyXG4gICAgICAgIHN1YmplY3Q6IFwiT3JkZXIgY29uZmlybWF0aW9uXCIsXHJcbiAgICAgICAgaHRtbDogXCI8cD5XZSBhcmUgY29uZmlybWluZyB5b3VyIG9yZGVyLjwvcD5cIiArXHJcbiAgICAgICAgXCI8cD5TaGlwcGluZyBpbmZvOjwvcD5cIiArXHJcbiAgICAgICAgXCI8cD5VbGljYTogXCIgKyBvcmRlci51bGljYSArIFwiPC9wPlwiICtcclxuICAgICAgICBcIjxwPlBvcGlzbmUgY2lzbG8gZG9tdTogXCIgKyBvcmRlci5wb3Bpc25lX2Npc2xvX2RvbXUgKyBcIjwvcD5cIiArXHJcbiAgICAgICAgXCI8cD5NZXN0bzogXCIgKyBvcmRlci5tZXN0byArIFwiPC9wPlwiICtcclxuICAgICAgICBcIjxwPlppcCBjb2RlOiBcIiArIG9yZGVyLnppcF9jb2RlICsgXCI8L3A+XCIgK1xyXG4gICAgICAgIFwiPHA+S3JhamluYTogXCIgKyBvcmRlci5rcmFqaW5hICsgXCI8L3A+XCIgK1xyXG4gICAgICAgIFwiPHA+VGVsZWZvbjogXCIgKyBvcmRlci50ZWxlZm9uICsgXCI8L3A+XCIgK1xyXG4gICAgICAgIFwiPHA+RW1haWw6IFwiICsgb3JkZXIuZW1haWwgKyBcIjwvcD5cIiArXHJcbiAgICAgICAgXCI8cD5NZW5vOiBcIiArIG9yZGVyLm1lbm8gKyBcIjwvcD5cIiArXHJcbiAgICAgICAgXCI8cD5QcmllenZpc2tvOiBcIiArIG9yZGVyLnByaWV6dmlza28gKyBcIjwvcD5cIiArXHJcbiAgICAgICAgXCI8cD5Ub3RhbDogXCIgKyB0b3RhbF9wcmljZSArIFwi4oKsPC9wPlwiLFxyXG4gICAgfSk7XHJcbiAgICBjb29raWVTdG9yZS5kZWxldGUoXCJjYXJ0XCIpO1xyXG4gICAgY29va2llU3RvcmUuZGVsZXRlKFwib3JkZXJcIik7XHJcbiAgICBjb25zb2xlLmxvZyhvcmRlci5lbWFpbCk7XHJcbiAgICByZWRpcmVjdChcIi9jb25maXJtZWRcIik7XHJcbiAgfVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImdTQTZFc0IifQ==
}),
"[project]/src/app/products/addToFavouritesButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddToFavouritesButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$data$3a$94521b__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/actions/data:94521b [app-ssr] (ecmascript) <text/javascript>");
"use client";
;
;
function AddToFavouritesButton(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$data$3a$94521b__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["addToFavourites"])(props.id),
        children: "Add to favourites"
    }, void 0, false, {
        fileName: "[project]/src/app/products/addToFavouritesButton.tsx",
        lineNumber: 6,
        columnNumber: 12
    }, this);
}
}),
"[project]/src/actions/data:c5f8c9 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40c143e65a9fbba309b7fcf7cd5374446723cdea84":"removeFromFavourites"},"src/actions/products.ts",""] */ __turbopack_context__.s([
    "removeFromFavourites",
    ()=>removeFromFavourites
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var removeFromFavourites = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40c143e65a9fbba309b7fcf7cd5374446723cdea84", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "removeFromFavourites"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcHJvZHVjdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCJcclxuXHJcbmltcG9ydCB7IGNvb2tpZXMgfSBmcm9tIFwibmV4dC9oZWFkZXJzXCJcclxuaW1wb3J0IHsgZ2V0VXNlciB9IGZyb20gXCIuL3VzZXJcIlxyXG5pbXBvcnQgZ2V0REIgZnJvbSBcIkAvbGliL2RiXCJcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiXHJcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiXHJcbmltcG9ydCB7IFJlc2VuZCB9IGZyb20gJ3Jlc2VuZCc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkVG9CYXNrZXQoaWQ6IG51bWJlcikge1xyXG4gICAgY29uc3Qga2Vrc2lreSA9IGF3YWl0IGNvb2tpZXMoKVxyXG4gICAgbGV0IGtvc2lrID0ga2Vrc2lreS5nZXQoXCJjYXJ0XCIpPy52YWx1ZSA/PyBcIltdXCJcclxuXHJcbiAgICBpZiAoa29zaWsgPT09IFwiXCIpIHtcclxuICAgICAgICBrb3NpayA9IFwiW11cIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJhc2tldCA9IEpTT04ucGFyc2Uoa29zaWspXHJcblxyXG4gICAgY29uc3QgaXRlbSA9IGJhc2tldC5maW5kKChpdGVtOiB7IGlkOiBudW1iZXIsIHF1YW50aXR5OiBudW1iZXIgfSkgPT4gaXRlbS5pZCA9PT0gaWQpXHJcblxyXG4gICAgaWYgKGl0ZW0pIHtcclxuICAgICAgICBpdGVtLnF1YW50aXR5ICs9IDFcclxuICAgICAgICBrZWtzaWt5LnNldChcImNhcnRcIiwgSlNPTi5zdHJpbmdpZnkoYmFza2V0KSwgeyBwYXRoOiBcIi9cIiB9KVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGJhc2tldC5wdXNoKHtcclxuICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgcXVhbnRpdHk6IDFcclxuICAgIH0pXHJcblxyXG4gICAga2Vrc2lreS5zZXQoXCJjYXJ0XCIsIEpTT04uc3RyaW5naWZ5KGJhc2tldCksIHsgcGF0aDogXCIvXCIgfSlcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbW92ZUZyb21CYXNrZXQoaWQ6IG51bWJlcikge1xyXG4gICAgY29uc3Qga2Vrc2lreSA9IGF3YWl0IGNvb2tpZXMoKVxyXG4gICAgbGV0IGtvc2lrID0ga2Vrc2lreS5nZXQoXCJjYXJ0XCIpPy52YWx1ZSA/PyBcIltdXCJcclxuXHJcbiAgICBpZiAoa29zaWsgPT09IFwiXCIpIHtcclxuICAgICAgICBrb3NpayA9IFwiW11cIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJhc2tldCA9IEpTT04ucGFyc2Uoa29zaWspXHJcblxyXG4gICAgY29uc3QgaXRlbSA9IGJhc2tldC5maW5kKChpdGVtOiB7IGlkOiBudW1iZXIsIHF1YW50aXR5OiBudW1iZXIgfSkgPT4gaXRlbS5pZCA9PT0gaWQpXHJcblxyXG4gICAgaWYgKGl0ZW0pIHtcclxuICAgICAgICBpdGVtLnF1YW50aXR5IC09IDFcclxuICAgICAgICBrZWtzaWt5LnNldChcImNhcnRcIiwgSlNPTi5zdHJpbmdpZnkoYmFza2V0KSwgeyBwYXRoOiBcIi9cIiB9KVxyXG4gICAgICAgIGlmIChpdGVtLnF1YW50aXR5IDw9IDApIHtcclxuICAgICAgICAgICAgYmFza2V0LnNwbGljZShiYXNrZXQuaW5kZXhPZihpdGVtKSwgMSlcclxuICAgICAgICAgICAga2Vrc2lreS5zZXQoXCJjYXJ0XCIsIEpTT04uc3RyaW5naWZ5KGJhc2tldCksIHsgcGF0aDogXCIvXCIgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpc0luRmF2b3VyaXRlcyhpZDogbnVtYmVyKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICBjb25zdCBkYiA9IGdldERCKCk7XHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgZ2V0VXNlcigpO1xyXG5cclxuICAgIGlmICh1c2VyID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmF2b3VyaXRlID0gYXdhaXQgZGJcclxuICAgICAgICAuc2VsZWN0RnJvbShcImZhdm9yaXRlX3Byb2R1Y3RzXCIpXHJcbiAgICAgICAgLndoZXJlKFwicHJvZHVjdF9pZFwiLCBcIj1cIiwgaWQpXHJcbiAgICAgICAgLndoZXJlKFwidXNlcl9pZFwiLCBcIj1cIiwgdXNlci5pZClcclxuICAgICAgICAuc2VsZWN0QWxsKClcclxuICAgICAgICAuZXhlY3V0ZVRha2VGaXJzdCgpO1xyXG5cclxuICAgIGlmIChmYXZvdXJpdGUpIHJldHVybiB0cnVlXHJcblxyXG4gICAgcmV0dXJuIGZhbHNlXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRUb0Zhdm91cml0ZXMoaWQ6IG51bWJlcikge1xyXG4gICAgY29uc3QgZGIgPSBnZXREQigpO1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGdldFVzZXIoKTtcclxuXHJcbiAgICBpZiAodXNlciA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZhdm91cml0ZSA9IGF3YWl0IGRiXHJcbiAgICAgICAgLnNlbGVjdEZyb20oXCJmYXZvcml0ZV9wcm9kdWN0c1wiKVxyXG4gICAgICAgIC53aGVyZShcInByb2R1Y3RfaWRcIiwgXCI9XCIsIGlkKVxyXG4gICAgICAgIC53aGVyZShcInVzZXJfaWRcIiwgXCI9XCIsIHVzZXIuaWQpXHJcbiAgICAgICAgLnNlbGVjdEFsbCgpXHJcbiAgICAgICAgLmV4ZWN1dGVUYWtlRmlyc3QoKTtcclxuXHJcbiAgICBpZiAoZmF2b3VyaXRlKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgYXdhaXQgZGIuaW5zZXJ0SW50byhcImZhdm9yaXRlX3Byb2R1Y3RzXCIpLnZhbHVlcyh7IHVzZXJfaWQ6IHVzZXIuaWQsIHByb2R1Y3RfaWQ6IGlkIH0pLmV4ZWN1dGVUYWtlRmlyc3QoKTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwicHJvZHVjdHNcIilcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbW92ZUZyb21GYXZvdXJpdGVzKGlkOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGRiID0gZ2V0REIoKTtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRVc2VyKCk7XHJcblxyXG4gICAgaWYgKHVzZXIgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmYXZvdXJpdGUgPSBhd2FpdCBkYlxyXG4gICAgLnNlbGVjdEZyb20oXCJmYXZvcml0ZV9wcm9kdWN0c1wiKVxyXG4gICAgLndoZXJlKFwicHJvZHVjdF9pZFwiLCBcIj1cIiwgaWQpXHJcbiAgICAud2hlcmUoXCJ1c2VyX2lkXCIsIFwiPVwiLCB1c2VyLmlkKVxyXG4gICAgLnNlbGVjdEFsbCgpXHJcbiAgICAuZXhlY3V0ZVRha2VGaXJzdCgpO1xyXG5cclxuICAgIGlmICghZmF2b3VyaXRlKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGF3YWl0IGRiLmRlbGV0ZUZyb20oXCJmYXZvcml0ZV9wcm9kdWN0c1wiKS53aGVyZShcInByb2R1Y3RfaWRcIiwgXCI9XCIsIGlkKS53aGVyZShcInVzZXJfaWRcIiwgXCI9XCIsIHVzZXIuaWQpLmV4ZWN1dGVUYWtlRmlyc3QoKTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwicHJvZHVjdHNcIilcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1ha2VUZW1wb3JhcnlPcmRlcih1bGljYTogc3RyaW5nLCBwb3Bpc25lX2Npc2xvX2RvbXU6IHN0cmluZywgbWVzdG86IHN0cmluZywgemlwX2NvZGU6IHN0cmluZywga3JhamluYTogc3RyaW5nLCB0ZWxlZm9uOiBzdHJpbmcsIGVtYWlsOiBzdHJpbmcsIG1lbm86IHN0cmluZywgcHJpZXp2aXNrbzogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBrZWtzaWt5ID0gYXdhaXQgY29va2llcygpXHJcbiAgICBsZXQgb3JkZXIgPSBrZWtzaWt5LmdldChcIm9yZGVyXCIpPy52YWx1ZSA/PyBcIlwiXHJcbiAgICBjb25zdCBiYXNrZXQgPSBrZWtzaWt5LmdldChcImNhcnRcIik/LnZhbHVlID8/IFwiW11cIlxyXG5cclxuICAgIGlmIChvcmRlciAhPSBcIlwiKSB7XHJcbiAgICAgICAga2Vrc2lreS5zZXQoXCJvcmRlclwiLCBcIlwiLCB7IHBhdGg6IFwiL1wiLCBtYXhBZ2U6IDAgfSlcclxuICAgIH1cclxuXHJcbiAgICBvcmRlciA9IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBcInVsaWNhXCI6IHVsaWNhLFxyXG4gICAgICAgIFwicG9waXNuZV9jaXNsb19kb211XCI6IHBvcGlzbmVfY2lzbG9fZG9tdSxcclxuICAgICAgICBcIm1lc3RvXCI6IG1lc3RvLFxyXG4gICAgICAgIFwiemlwX2NvZGVcIjogemlwX2NvZGUsXHJcbiAgICAgICAgXCJrcmFqaW5hXCI6IGtyYWppbmEsXHJcbiAgICAgICAgXCJ0ZWxlZm9uXCI6IHRlbGVmb24sXHJcbiAgICAgICAgXCJlbWFpbFwiOiBlbWFpbCxcclxuICAgICAgICBcIm1lbm9cIjogbWVubyxcclxuICAgICAgICBcInByaWV6dmlza29cIjogcHJpZXp2aXNrbyxcclxuICAgICAgICBcImNhcnRcIjogSlNPTi5wYXJzZShiYXNrZXQpXHJcbiAgICB9KVxyXG5cclxuICAgIGtla3Npa3kuc2V0KFwib3JkZXJcIiwgb3JkZXIsIHsgcGF0aDogXCIvXCIgfSlcclxuICAgIHJlZGlyZWN0KFwiL2NvbmZpcm1hdGlvblwiKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1ha2VPcmRlcigpIHtcclxuICAgIGNvbnN0IGNvb2tpZVN0b3JlID0gYXdhaXQgY29va2llcygpO1xyXG4gICAgY29uc3Qgb3JkZXJDb29raWUgPSBjb29raWVTdG9yZS5nZXQoXCJvcmRlclwiKT8udmFsdWU7XHJcbiAgICBjb25zdCBkYiA9IGdldERCKCk7XHJcbiAgICBpZiAoIW9yZGVyQ29va2llKSByZXR1cm47XHJcbiAgICBjb25zdCBvcmRlciA9IEpTT04ucGFyc2Uob3JkZXJDb29raWUpO1xyXG4gICAgXHJcbiAgICBsZXQgdG90YWxfcHJpY2UgPSAwO1xyXG4gICAgXHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2Ygb3JkZXIuY2FydCkge1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBkYlxyXG4gICAgICAgIC5zZWxlY3RGcm9tKFwicHJvZHVjdHNcIilcclxuICAgICAgICAud2hlcmUoXCJpZFwiLCBcIj1cIiwgaXRlbS5pZClcclxuICAgICAgICAuc2VsZWN0QWxsKClcclxuICAgICAgICAuZXhlY3V0ZVRha2VGaXJzdCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICghcHJvZHVjdCkgY29udGludWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdG90YWxfcHJpY2UgKz0gaXRlbS5xdWFudGl0eSAqIHByb2R1Y3QucHJpY2U7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IHJlc2VuZCA9IG5ldyBSZXNlbmQoJ3JlX1J2dVFWZHlXX0F1Y0tBVVYySFRBSG52UUVHU3h4ZlhkOScpO1xyXG4gICAgXHJcbiAgICBhd2FpdCByZXNlbmQuZW1haWxzLnNlbmQoe1xyXG4gICAgICAgIGZyb206IFwiUmVzZW5kIDxvbmJvYXJkaW5nQHJlc2VuZC5kZXY+XCIsXHJcbiAgICAgICAgdG86IG9yZGVyLmVtYWlsLFxyXG4gICAgICAgIHN1YmplY3Q6IFwiT3JkZXIgY29uZmlybWF0aW9uXCIsXHJcbiAgICAgICAgaHRtbDogXCI8cD5XZSBhcmUgY29uZmlybWluZyB5b3VyIG9yZGVyLjwvcD5cIiArXHJcbiAgICAgICAgXCI8cD5TaGlwcGluZyBpbmZvOjwvcD5cIiArXHJcbiAgICAgICAgXCI8cD5VbGljYTogXCIgKyBvcmRlci51bGljYSArIFwiPC9wPlwiICtcclxuICAgICAgICBcIjxwPlBvcGlzbmUgY2lzbG8gZG9tdTogXCIgKyBvcmRlci5wb3Bpc25lX2Npc2xvX2RvbXUgKyBcIjwvcD5cIiArXHJcbiAgICAgICAgXCI8cD5NZXN0bzogXCIgKyBvcmRlci5tZXN0byArIFwiPC9wPlwiICtcclxuICAgICAgICBcIjxwPlppcCBjb2RlOiBcIiArIG9yZGVyLnppcF9jb2RlICsgXCI8L3A+XCIgK1xyXG4gICAgICAgIFwiPHA+S3JhamluYTogXCIgKyBvcmRlci5rcmFqaW5hICsgXCI8L3A+XCIgK1xyXG4gICAgICAgIFwiPHA+VGVsZWZvbjogXCIgKyBvcmRlci50ZWxlZm9uICsgXCI8L3A+XCIgK1xyXG4gICAgICAgIFwiPHA+RW1haWw6IFwiICsgb3JkZXIuZW1haWwgKyBcIjwvcD5cIiArXHJcbiAgICAgICAgXCI8cD5NZW5vOiBcIiArIG9yZGVyLm1lbm8gKyBcIjwvcD5cIiArXHJcbiAgICAgICAgXCI8cD5QcmllenZpc2tvOiBcIiArIG9yZGVyLnByaWV6dmlza28gKyBcIjwvcD5cIiArXHJcbiAgICAgICAgXCI8cD5Ub3RhbDogXCIgKyB0b3RhbF9wcmljZSArIFwi4oKsPC9wPlwiLFxyXG4gICAgfSk7XHJcbiAgICBjb29raWVTdG9yZS5kZWxldGUoXCJjYXJ0XCIpO1xyXG4gICAgY29va2llU3RvcmUuZGVsZXRlKFwib3JkZXJcIik7XHJcbiAgICBjb25zb2xlLmxvZyhvcmRlci5lbWFpbCk7XHJcbiAgICByZWRpcmVjdChcIi9jb25maXJtZWRcIik7XHJcbiAgfVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InFTQXFHc0IifQ==
}),
"[project]/src/app/products/removeFromFavouritesButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RemoveFromFavouritesButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$data$3a$c5f8c9__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/actions/data:c5f8c9 [app-ssr] (ecmascript) <text/javascript>");
"use client";
;
;
function RemoveFromFavouritesButton(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$data$3a$c5f8c9__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["removeFromFavourites"])(props.id),
        children: "Remove from favourites"
    }, void 0, false, {
        fileName: "[project]/src/app/products/removeFromFavouritesButton.tsx",
        lineNumber: 6,
        columnNumber: 12
    }, this);
}
}),
];

//# sourceMappingURL=src_c7e4b06e._.js.map