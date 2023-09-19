"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
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
    return (react_1.default.createElement("div", { className: "card" },
        react_1.default.createElement("h2", null, props.text),
        react_1.default.createElement("div", { className: "actions" },
            react_1.default.createElement("button", { className: "btn btn-primary", onClick: deleteHandler }, "Delete")),
        modalIsOpen && react_1.default.createElement(Modal_1.default, { onCancel: closeModalHandler, onConfirm: closeModalHandler }),
        modalIsOpen && react_1.default.createElement(Backdrop_1.default, { onClick: closeModalHandler })));
}
exports.default = Todo;
