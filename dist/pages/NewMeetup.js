"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const NewMeetupForm_1 = require("./NewMeetupForm");
function NewMeetupPage() {
    return ((0, jsx_runtime_1.jsxs)("section", { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Add New Meetup" }, void 0), (0, jsx_runtime_1.jsx)(NewMeetupForm_1.NewMeetupForm, {}, void 0)] }, void 0));
}
exports.default = NewMeetupPage;
