"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Button_1 = __importDefault(require("./components/Button"));
function App() {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(Button_1.default, { color: 'danger', onClick: () => console.log('Button clicked') }, "Enter")));
}
exports.default = App;
