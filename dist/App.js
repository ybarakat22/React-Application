"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const AllMeetups_1 = __importDefault(require("./pages/AllMeetups"));
const Favorites_1 = __importDefault(require("./pages/Favorites"));
const NewMeetup_1 = __importDefault(require("./pages/NewMeetup"));
const Layout_1 = require("./components/layout/Layout");
function App() {
    return ((0, jsx_runtime_1.jsx)(Layout_1.Layout, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(AllMeetups_1.default, {}, void 0) }, void 0), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/new-meetup", element: (0, jsx_runtime_1.jsx)(NewMeetup_1.default, {}, void 0) }, void 0), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/favorites", element: (0, jsx_runtime_1.jsx)(Favorites_1.default, {}, void 0) }, void 0)] }, void 0) }, void 0));
}
exports.default = App;
