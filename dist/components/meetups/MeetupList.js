"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeetupList = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const MeetupItem_1 = __importDefault(require("./MeetupItem"));
const MeetupList = (props) => {
    return ((0, jsx_runtime_1.jsx)("ul", { children: props.meetups.map((meetup) => ((0, jsx_runtime_1.jsx)(MeetupItem_1.default, { id: meetup.id, image: meetup.image, title: meetup.title, description: meetup.description }, meetup.id))) }, void 0));
};
exports.MeetupList = MeetupList;
