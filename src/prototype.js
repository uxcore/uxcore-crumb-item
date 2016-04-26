
const React = require('react');
const {Bundle} = require('engine');
const {BoolSetter, TextSetter, ChoiceSetter, JsonSetter, NumberSetter} = require('engine-utils');

module.exports = Bundle.createPrototype({
    title: "面包屑项目",
    category: null,
    icon: require("./logo.svg"), // todo: require("./logo.svg"),
    componentName: "CrumbItem",
    canHovering: false,
    canSelecting: false,
    canDraging: false,
    isInline: true,
    isContainer: false,
    canDropto: true,
    canDroping: false,
    configure: [{
            name: "href",
            title: "链接",
            defaultValue: "",
            required: false,
            fieldStyle: "block",
            fieldCollapsed: false,
            setter: <TextSetter multiline={true} rows={2} />
        }, {
            name: "children",
            title: "文案",
            defaultValue: '链接',
            required: false,
            fieldStyle: "block",
            fieldCollapsed: false,
            setter: <TextSetter multiline={true} rows={2} />
        }]
});
