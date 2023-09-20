"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Alert = ({ children }) => {
    return (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "alert alert-primary" }, { children: children }), void 0);
};
exports.default = Alert;
