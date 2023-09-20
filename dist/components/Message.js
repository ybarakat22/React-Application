"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function Message() {
    const name = "Youssr";
    if (name) {
        return (0, jsx_runtime_1.jsxs)("h1", { children: ["Weclome ", name] }, void 0);
    }
    return (0, jsx_runtime_1.jsx)("h1", { children: "Weclome user" }, void 0);
}
exports.default = Message;
