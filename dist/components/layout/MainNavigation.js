"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
require("./MainNavigation.module.css");
function MainNavigation() {
    return ((0, jsx_runtime_1.jsxs)("header", Object.assign({ className: 'header' }, { children: [(0, jsx_runtime_1.jsx)("div", { children: "React Meetups" }, void 0), (0, jsx_runtime_1.jsx)("nav", { children: (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: "/" }, { children: "All Meetups" }), void 0) }, void 0), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: "/new-meetup" }, { children: "Add New Meetup" }), void 0) }, void 0), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: "/favorites" }, { children: "My Favorites" }), void 0) }, void 0)] }, void 0) }, void 0)] }), void 0));
}
;
exports.default = MainNavigation;
