"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Card_1 = require("../ui/Card");
const react_1 = require("react");
const favorites_context_1 = __importDefault(require("../../store/favorites-context"));
function MeetupItem(props) {
    const favoriteCtx = (0, react_1.useContext)(favorites_context_1.default);
    const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id);
    function toggleFavoriteStatusHandler() {
        if (itemIsFavorite) {
            favoriteCtx.removeFavorite(props.id);
        }
        else {
            favoriteCtx.addFavorite({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
            });
        }
    }
    return ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsxs)(Card_1.Card, { children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("img", { src: props.image, alt: props.title }, void 0) }, void 0), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h3", { children: props.title }, void 0), (0, jsx_runtime_1.jsx)("p", { children: props.description }, void 0)] }, void 0), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: toggleFavoriteStatusHandler }, { children: itemIsFavorite ? "Remove from favorites" : "To Favorites" }), void 0) }, void 0)] }, void 0) }, void 0));
}
exports.default = MeetupItem;
