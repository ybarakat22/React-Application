"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Button = ({ children, color, onClick }) => {
    return (react_1.default.createElement("button", { type: "button", className: "btn btn-" + color, onClick: onClick }, children));
};
exports.default = Button;