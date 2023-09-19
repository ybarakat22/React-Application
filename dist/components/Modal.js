"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Modal(props) {
    function cancelHandler() {
        props.onCancel();
    }
    function confirmHandler() {
        props.onConfirm();
    }
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("p", null, "Are you sure?"),
        react_1.default.createElement("button", { className: "btn btn-danger", onClick: cancelHandler }, "Cancel"),
        react_1.default.createElement("button", { className: "btn btn-primary", onClick: confirmHandler }, "Confirm")));
}
exports.default = Modal;
