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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
function ListGroup({ items, heading, onSelectItem }) {
    const [selectedIndex, setSelectedIndex] = (0, react_1.useState)(-1);
    const handleClick = (item) => {
        console.log(item);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("h1", null, heading),
        items.length === 0 ? react_1.default.createElement("p", null, " No items found") : null,
        react_1.default.createElement("ul", { className: "list-group" }, items.map((item, index) => (react_1.default.createElement("li", { className: selectedIndex === index
                ? "list-group-item active"
                : "list-group-item", key: item, onClick: () => {
                setSelectedIndex(index);
                onSelectItem(item);
            } }, item))))));
}
exports.default = ListGroup;
