"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Button = ({ children, color, onClick }) => {
    return ((0, jsx_runtime_1.jsx)("button", Object.assign({ type: "button", className: "btn btn-" + color, onClick: onClick }, { children: children }), void 0));
};
exports.default = Button;
