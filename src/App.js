"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Message_1 = __importDefault(require("./Message"));
function App() {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(Message_1.default, null)));
}
exports.default = App;
