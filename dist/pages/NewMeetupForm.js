"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewMeetupForm = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Card_1 = require("../components/ui/Card");
const react_1 = require("react");
const NewMeetupForm = () => {
    const titleInputRef = (0, react_1.useRef)();
    const imageInputRef = (0, react_1.useRef)();
    const descriptionInputRef = (0, react_1.useRef)();
    function submitHandler(event) {
        event.preventDefault();
        const enteredTitle = titleInputRef.current.value;
        const enetrefImage = imageInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;
        const meetupData = {
            image: enetrefImage,
            desc: enteredDescription,
            title: enteredTitle
        };
        console.log(meetupData);
    }
    return ((0, jsx_runtime_1.jsx)(Card_1.Card, { children: (0, jsx_runtime_1.jsxs)("form", Object.assign({ onSubmit: submitHandler }, { children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "title" }, { children: "Meetup Title" }), void 0), (0, jsx_runtime_1.jsx)("input", { type: "text", required: true, id: "title", ref: titleInputRef }, void 0)] }, void 0), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "title" }, { children: "Meetup Image" }), void 0), (0, jsx_runtime_1.jsx)("input", { type: "url", required: true, id: "image", ref: imageInputRef }, void 0)] }, void 0), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "title" }, { children: "Meetup Description" }), void 0), (0, jsx_runtime_1.jsx)("textarea", { id: "description", ref: descriptionInputRef }, void 0)] }, void 0), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("button", { children: "Add Meetup" }, void 0) }, void 0)] }), void 0) }, void 0));
};
exports.NewMeetupForm = NewMeetupForm;
