"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function Modal(props) {
    function cancelHandler() {
        props.onCancel();
    }
    function confirmHandler() {
        props.onConfirm();
    }
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", { children: "Are you sure?" }, void 0), (0, jsx_runtime_1.jsx)("button", Object.assign({ className: "btn btn-danger", onClick: cancelHandler }, { children: "Cancel" }), void 0), (0, jsx_runtime_1.jsx)("button", Object.assign({ className: "btn btn-primary", onClick: confirmHandler }, { children: "Confirm" }), void 0)] }, void 0));
}
exports.default = Modal;
