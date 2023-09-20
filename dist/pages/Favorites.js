"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const favorites_context_1 = __importDefault(require("../store/favorites-context"));
const MeetupList_1 = require("../components/meetups/MeetupList");
function FavoritesPage() {
    const favoriteCtx = (0, react_1.useContext)(favorites_context_1.default);
    return ((0, jsx_runtime_1.jsxs)("section", { children: [(0, jsx_runtime_1.jsx)("h1", { children: "My Favorites" }, void 0), (0, jsx_runtime_1.jsx)(MeetupList_1.MeetupList, { meetups: favoriteCtx.favorites }, void 0)] }, void 0));
}
exports.default = FavoritesPage;
