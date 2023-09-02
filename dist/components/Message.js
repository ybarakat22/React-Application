"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Message() {
    const name = "Youssr";
    if (name) {
        return react_1.default.createElement("h1", null,
            "Weclome ",
            name);
    }
    return react_1.default.createElement("h1", null, "Weclome user");
}
exports.default = Message;
