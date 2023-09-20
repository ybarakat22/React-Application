"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Modal_1 = __importDefault(require("../components/Modal"));
const Backdrop_1 = __importDefault(require("../components/Backdrop"));
// interface TodoProps {
//   text: string;
// }
function Todo(props) {
    const [modalIsOpen, setModalIsOpen] = (0, react_1.useState)(false);
    function deleteHandler() {
        setModalIsOpen(true);
    }
    function closeModalHandler() {
        setModalIsOpen(false);
    }
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "card" }, { children: [(0, jsx_runtime_1.jsx)("h2", { children: props.text }, void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "actions" }, { children: (0, jsx_runtime_1.jsx)("button", Object.assign({ className: "btn btn-primary", onClick: deleteHandler }, { children: "Delete" }), void 0) }), void 0), modalIsOpen && ((0, jsx_runtime_1.jsx)(Modal_1.default, { onCancel: closeModalHandler, onConfirm: closeModalHandler }, void 0)), modalIsOpen && (0, jsx_runtime_1.jsx)(Backdrop_1.default, { onClick: closeModalHandler }, void 0)] }), void 0));
}
exports.default = Todo;
