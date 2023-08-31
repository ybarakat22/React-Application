"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Alert_1 = __importDefault(require("./components/Alert"));
function App() {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(Alert_1.default, null,
            "Hello ",
            react_1.default.createElement("span", null, "World"))));
}
exports.default = App;
