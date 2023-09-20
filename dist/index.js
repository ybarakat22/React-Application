"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_dom_1 = __importDefault(require("react-dom"));
const react_router_dom_1 = require("react-router-dom");
const App_1 = __importDefault(require("./App"));
const favorites_context_1 = require("./store/favorites-context");
react_dom_1.default.render((0, jsx_runtime_1.jsx)(favorites_context_1.FavoriteContextProvider, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsx)(App_1.default, {}, void 0) }, void 0) }, void 0), document.getElementById("root"));
