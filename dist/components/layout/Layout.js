"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const MainNavigation_1 = __importDefault(require("./MainNavigation"));
const Layout = (props) => {
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(MainNavigation_1.default, {}, void 0), (0, jsx_runtime_1.jsx)("main", { children: props.children }, void 0)] }, void 0));
};
exports.Layout = Layout;
