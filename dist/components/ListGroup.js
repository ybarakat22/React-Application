"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
function ListGroup({ items, heading, onSelectItem }) {
    const [selectedIndex, setSelectedIndex] = (0, react_1.useState)(-1);
    const handleClick = (item) => {
        console.log(item);
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("h1", { children: heading }, void 0), items.length === 0 ? (0, jsx_runtime_1.jsx)("p", { children: " No items found" }, void 0) : null, (0, jsx_runtime_1.jsx)("ul", Object.assign({ className: "list-group" }, { children: items.map((item, index) => ((0, jsx_runtime_1.jsx)("li", Object.assign({ className: selectedIndex === index
                        ? "list-group-item active"
                        : "list-group-item", onClick: () => {
                        setSelectedIndex(index);
                        onSelectItem(item);
                    } }, { children: item }), item))) }), void 0)] }, void 0));
}
exports.default = ListGroup;
