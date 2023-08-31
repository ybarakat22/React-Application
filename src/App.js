"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ListGroup_1 = __importDefault(require("./components/ListGroup"));
function App() {
    let items = ["China", "Us", "Japan", "Egypt", "France"];
    const handleSelectItem = (item) => {
        console.log(item);
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(ListGroup_1.default, { items: items, heading: 'Countries', onSelectItem: handleSelectItem })));
}
exports.default = App;
