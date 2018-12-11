!function(t){function n(c){if(e[c])return e[c].exports;var l=e[c]={i:c,l:!1,exports:{}};return t[c].call(l.exports,l,l.exports,n),l.l=!0,l.exports}var e={};n.m=t,n.c=e,n.d=function(t,e,c){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:c})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=0)}([function(module,__webpack_exports__,__webpack_require__){"use strict";eval('Object.defineProperty(__webpack_exports__, "__esModule", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript.\n * You can create a new block folder in\n * this dir and include code for that block\n * here as well.\n *\n * All blocks should be included here since\n * this is the file that Webpack is compiling.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdC5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpblxuICogdGhpcyBkaXIgYW5kIGluY2x1ZGUgY29kZSBmb3IgdGhhdCBibG9ja1xuICogaGVyZSBhcyB3ZWxsLlxuICpcbiAqIEFsbCBibG9ja3Mgc2hvdWxkIGJlIGluY2x1ZGVkIGhlcmUgc2luY2VcbiAqIHRoaXMgaXMgdGhlIGZpbGUgdGhhdCBXZWJwYWNrIGlzIGNvbXBpbGluZy5cbiAqL1xuXG5pbXBvcnQgJy4vYmxvY2svYmxvY2suanMnO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2Nrcy5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n')},function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_videoDisplay__ = __webpack_require__(/*! ../components/videoDisplay */ 3);\n\n\n\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$editor = wp.editor,\n    RichText = _wp$editor.RichText,\n    InspectorControls = _wp$editor.InspectorControls;\nvar Fragment = wp.element.Fragment;\nvar _wp$components = wp.components,\n    TextControl = _wp$components.TextControl,\n    RadioControl = _wp$components.RadioControl,\n    CheckboxControl = _wp$components.CheckboxControl;\n\n\nvar BlockAttributes = {\n\theadline: {\n\t\ttype: "string",\n\t\tdefault: null\n\t},\n\tembed_type: {\n\t\ttype: "string",\n\t\tdefault: "inline"\n\t},\n\tanimatethumbnail: {\n\t\ttype: "boolean",\n\t\tdefault: false\n\t},\n\tresponsive: {\n\t\ttype: "boolean",\n\t\tdefault: true\n\t},\n\theight: {\n\t\ttype: "number",\n\t\tdefault: null\n\t},\n\twidth: {\n\t\ttype: "number",\n\t\tdefault: null\n\t},\n\tplayer: {\n\t\ttype: "string",\n\t\tdefault: "js"\n\t}\n};\n\nregisterBlockType("marcus-hiles-wistia-shortcodes/wistia-video-block", {\n\ttitle: __("MH: Wistia Video"),\n\ticon: "format-video",\n\tcategory: "common",\n\tattributes: BlockAttributes,\n\tallowed: {\n\t\thtml: false\n\t},\n\tedit: function edit(props) {\n\t\tvar headline = props.attributes.headline;\n\t\tvar embed_type = props.attributes.embed_type;\n\t\tvar responsive = props.attributes.responsive;\n\t\tvar animatethumbnail = props.attributes.animatethumbnail;\n\t\tvar height = props.attributes.height;\n\t\tvar width = props.attributes.width;\n\t\tvar player = props.attributes.player;\n\n\t\tvar onChangeHeadline = function onChangeHeadline(newVal) {\n\t\t\tprops.setAttributes({ headline: newVal });\n\t\t};\n\t\tvar onChangeOptionEmbedType = function onChangeOptionEmbedType(newVal) {\n\t\t\tprops.setAttributes({ embed_type: newVal });\n\t\t};\n\t\tvar onChangeOptionAnimateThumbnail = function onChangeOptionAnimateThumbnail(newVal) {\n\t\t\tprops.setAttributes({ animatethumbnail: newVal });\n\t\t};\n\t\tvar onChangeOptionResponsive = function onChangeOptionResponsive(newVal) {\n\t\t\tprops.setAttributes({ responsive: newVal });\n\t\t\tif (!newVal) {\n\t\t\t\tprops.setAttributes({ height: null, width: null });\n\t\t\t}\n\t\t};\n\t\tvar onChangeOptionHeight = function onChangeOptionHeight(newVal) {\n\t\t\tprops.setAttributes({ height: newVal });\n\t\t};\n\t\tvar onChangeOptionWidth = function onChangeOptionWidth(newVal) {\n\t\t\tprops.setAttributes({ width: newVal });\n\t\t};\n\t\tvar onChangeOptionPlayer = function onChangeOptionPlayer(newVal) {\n\t\t\tprops.setAttributes({ player: newVal });\n\t\t};\n\t\treturn wp.element.createElement(\n\t\t\tFragment,\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\tInspectorControls,\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(TextControl, {\n\t\t\t\t\tlabel: __("Wistia Video ID"),\n\t\t\t\t\tvalue: headline,\n\t\t\t\t\tonChange: onChangeHeadline\n\t\t\t\t}),\n\t\t\t\twp.element.createElement(RadioControl, {\n\t\t\t\t\tlabel: "Embed Type",\n\t\t\t\t\thelp: "The type embed.",\n\t\t\t\t\tselected: embed_type,\n\t\t\t\t\toptions: [{ label: "Inline", value: "inline" }, { label: "Popover", value: "popover" }],\n\t\t\t\t\tonChange: onChangeOptionEmbedType\n\t\t\t\t}),\n\t\t\t\tembed_type === "popover" && wp.element.createElement(CheckboxControl, {\n\t\t\t\t\theading: "Animate Thumbnail",\n\t\t\t\t\tlabel: "Animate Thumbnail",\n\t\t\t\t\thelp: "Animate the thumbnail on hover. Only works with popover",\n\t\t\t\t\tchecked: animatethumbnail,\n\t\t\t\t\tonChange: onChangeOptionAnimateThumbnail\n\t\t\t\t}),\n\t\t\t\twp.element.createElement(RadioControl, {\n\t\t\t\t\tlabel: "Player type",\n\t\t\t\t\thelp: "The type video player. (use js unless errors)",\n\t\t\t\t\tselected: player,\n\t\t\t\t\toptions: [{ label: "Javascript", value: "js" }, { label: "iFrame", value: "inline" }],\n\t\t\t\t\tonChange: onChangeOptionPlayer\n\t\t\t\t}),\n\t\t\t\twp.element.createElement(CheckboxControl, {\n\t\t\t\t\theading: "Responsive",\n\t\t\t\t\tlabel: "Responsive",\n\t\t\t\t\thelp: "Responsive video display",\n\t\t\t\t\tchecked: responsive,\n\t\t\t\t\tonChange: onChangeOptionResponsive\n\t\t\t\t}),\n\t\t\t\t!responsive && wp.element.createElement(TextControl, {\n\t\t\t\t\tlabel: __("Height"),\n\t\t\t\t\tvalue: height,\n\t\t\t\t\tonChange: onChangeOptionHeight\n\t\t\t\t}),\n\t\t\t\t!responsive && wp.element.createElement(TextControl, {\n\t\t\t\t\tlabel: __("Width"),\n\t\t\t\t\tvalue: width,\n\t\t\t\t\tonChange: onChangeOptionWidth\n\t\t\t\t})\n\t\t\t),\n\t\t\t(!headline || headline === "" || headline.length !== 10) && wp.element.createElement(\n\t\t\t\t"div",\n\t\t\t\t{ "class": "mh-no-video-id" },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t"p",\n\t\t\t\t\tnull,\n\t\t\t\t\t"Enter Video ID:"\n\t\t\t\t),\n\t\t\t\twp.element.createElement(RichText, {\n\t\t\t\t\ttagName: "div",\n\t\t\t\t\tformat: "string",\n\t\t\t\t\tmultiline: false,\n\t\t\t\t\t"class": "input-video-id",\n\t\t\t\t\tvalue: headline,\n\t\t\t\t\tonChange: onChangeHeadline\n\t\t\t\t})\n\t\t\t),\n\t\t\theadline && headline.length === 10 && wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__components_videoDisplay__["a" /* default */], props)\n\t\t);\n\t},\n\tsave: function save() {\n\t\treturn null;\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vZWRpdG9yLnNjc3NcIjtcbmltcG9ydCBWaWRlb0Rpc3BsYXkgZnJvbSBcIi4uL2NvbXBvbmVudHMvdmlkZW9EaXNwbGF5XCI7XG5cbnZhciBfXyA9IHdwLmkxOG4uX187XG52YXIgcmVnaXN0ZXJCbG9ja1R5cGUgPSB3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGU7XG52YXIgX3dwJGVkaXRvciA9IHdwLmVkaXRvcixcbiAgICBSaWNoVGV4dCA9IF93cCRlZGl0b3IuUmljaFRleHQsXG4gICAgSW5zcGVjdG9yQ29udHJvbHMgPSBfd3AkZWRpdG9yLkluc3BlY3RvckNvbnRyb2xzO1xudmFyIEZyYWdtZW50ID0gd3AuZWxlbWVudC5GcmFnbWVudDtcbnZhciBfd3AkY29tcG9uZW50cyA9IHdwLmNvbXBvbmVudHMsXG4gICAgVGV4dENvbnRyb2wgPSBfd3AkY29tcG9uZW50cy5UZXh0Q29udHJvbCxcbiAgICBSYWRpb0NvbnRyb2wgPSBfd3AkY29tcG9uZW50cy5SYWRpb0NvbnRyb2wsXG4gICAgQ2hlY2tib3hDb250cm9sID0gX3dwJGNvbXBvbmVudHMuQ2hlY2tib3hDb250cm9sO1xuXG5cbnZhciBCbG9ja0F0dHJpYnV0ZXMgPSB7XG5cdGhlYWRsaW5lOiB7XG5cdFx0dHlwZTogXCJzdHJpbmdcIixcblx0XHRkZWZhdWx0OiBudWxsXG5cdH0sXG5cdGVtYmVkX3R5cGU6IHtcblx0XHR0eXBlOiBcInN0cmluZ1wiLFxuXHRcdGRlZmF1bHQ6IFwiaW5saW5lXCJcblx0fSxcblx0YW5pbWF0ZXRodW1ibmFpbDoge1xuXHRcdHR5cGU6IFwiYm9vbGVhblwiLFxuXHRcdGRlZmF1bHQ6IGZhbHNlXG5cdH0sXG5cdHJlc3BvbnNpdmU6IHtcblx0XHR0eXBlOiBcImJvb2xlYW5cIixcblx0XHRkZWZhdWx0OiB0cnVlXG5cdH0sXG5cdGhlaWdodDoge1xuXHRcdHR5cGU6IFwibnVtYmVyXCIsXG5cdFx0ZGVmYXVsdDogbnVsbFxuXHR9LFxuXHR3aWR0aDoge1xuXHRcdHR5cGU6IFwibnVtYmVyXCIsXG5cdFx0ZGVmYXVsdDogbnVsbFxuXHR9LFxuXHRwbGF5ZXI6IHtcblx0XHR0eXBlOiBcInN0cmluZ1wiLFxuXHRcdGRlZmF1bHQ6IFwianNcIlxuXHR9XG59O1xuXG5yZWdpc3RlckJsb2NrVHlwZShcIm1hcmN1cy1oaWxlcy13aXN0aWEtc2hvcnRjb2Rlcy93aXN0aWEtdmlkZW8tYmxvY2tcIiwge1xuXHR0aXRsZTogX18oXCJNSDogV2lzdGlhIFZpZGVvXCIpLFxuXHRpY29uOiBcImZvcm1hdC12aWRlb1wiLFxuXHRjYXRlZ29yeTogXCJjb21tb25cIixcblx0YXR0cmlidXRlczogQmxvY2tBdHRyaWJ1dGVzLFxuXHRhbGxvd2VkOiB7XG5cdFx0aHRtbDogZmFsc2Vcblx0fSxcblx0ZWRpdDogZnVuY3Rpb24gZWRpdChwcm9wcykge1xuXHRcdHZhciBoZWFkbGluZSA9IHByb3BzLmF0dHJpYnV0ZXMuaGVhZGxpbmU7XG5cdFx0dmFyIGVtYmVkX3R5cGUgPSBwcm9wcy5hdHRyaWJ1dGVzLmVtYmVkX3R5cGU7XG5cdFx0dmFyIHJlc3BvbnNpdmUgPSBwcm9wcy5hdHRyaWJ1dGVzLnJlc3BvbnNpdmU7XG5cdFx0dmFyIGFuaW1hdGV0aHVtYm5haWwgPSBwcm9wcy5hdHRyaWJ1dGVzLmFuaW1hdGV0aHVtYm5haWw7XG5cdFx0dmFyIGhlaWdodCA9IHByb3BzLmF0dHJpYnV0ZXMuaGVpZ2h0O1xuXHRcdHZhciB3aWR0aCA9IHByb3BzLmF0dHJpYnV0ZXMud2lkdGg7XG5cdFx0dmFyIHBsYXllciA9IHByb3BzLmF0dHJpYnV0ZXMucGxheWVyO1xuXG5cdFx0dmFyIG9uQ2hhbmdlSGVhZGxpbmUgPSBmdW5jdGlvbiBvbkNoYW5nZUhlYWRsaW5lKG5ld1ZhbCkge1xuXHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcyh7IGhlYWRsaW5lOiBuZXdWYWwgfSk7XG5cdFx0fTtcblx0XHR2YXIgb25DaGFuZ2VPcHRpb25FbWJlZFR5cGUgPSBmdW5jdGlvbiBvbkNoYW5nZU9wdGlvbkVtYmVkVHlwZShuZXdWYWwpIHtcblx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoeyBlbWJlZF90eXBlOiBuZXdWYWwgfSk7XG5cdFx0fTtcblx0XHR2YXIgb25DaGFuZ2VPcHRpb25BbmltYXRlVGh1bWJuYWlsID0gZnVuY3Rpb24gb25DaGFuZ2VPcHRpb25BbmltYXRlVGh1bWJuYWlsKG5ld1ZhbCkge1xuXHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcyh7IGFuaW1hdGV0aHVtYm5haWw6IG5ld1ZhbCB9KTtcblx0XHR9O1xuXHRcdHZhciBvbkNoYW5nZU9wdGlvblJlc3BvbnNpdmUgPSBmdW5jdGlvbiBvbkNoYW5nZU9wdGlvblJlc3BvbnNpdmUobmV3VmFsKSB7XG5cdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKHsgcmVzcG9uc2l2ZTogbmV3VmFsIH0pO1xuXHRcdFx0aWYgKCFuZXdWYWwpIHtcblx0XHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcyh7IGhlaWdodDogbnVsbCwgd2lkdGg6IG51bGwgfSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHR2YXIgb25DaGFuZ2VPcHRpb25IZWlnaHQgPSBmdW5jdGlvbiBvbkNoYW5nZU9wdGlvbkhlaWdodChuZXdWYWwpIHtcblx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoeyBoZWlnaHQ6IG5ld1ZhbCB9KTtcblx0XHR9O1xuXHRcdHZhciBvbkNoYW5nZU9wdGlvbldpZHRoID0gZnVuY3Rpb24gb25DaGFuZ2VPcHRpb25XaWR0aChuZXdWYWwpIHtcblx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoeyB3aWR0aDogbmV3VmFsIH0pO1xuXHRcdH07XG5cdFx0dmFyIG9uQ2hhbmdlT3B0aW9uUGxheWVyID0gZnVuY3Rpb24gb25DaGFuZ2VPcHRpb25QbGF5ZXIobmV3VmFsKSB7XG5cdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKHsgcGxheWVyOiBuZXdWYWwgfSk7XG5cdFx0fTtcblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0RnJhZ21lbnQsXG5cdFx0XHRudWxsLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRJbnNwZWN0b3JDb250cm9scyxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFRleHRDb250cm9sLCB7XG5cdFx0XHRcdFx0bGFiZWw6IF9fKFwiV2lzdGlhIFZpZGVvIElEXCIpLFxuXHRcdFx0XHRcdHZhbHVlOiBoZWFkbGluZSxcblx0XHRcdFx0XHRvbkNoYW5nZTogb25DaGFuZ2VIZWFkbGluZVxuXHRcdFx0XHR9KSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFJhZGlvQ29udHJvbCwge1xuXHRcdFx0XHRcdGxhYmVsOiBcIkVtYmVkIFR5cGVcIixcblx0XHRcdFx0XHRoZWxwOiBcIlRoZSB0eXBlIGVtYmVkLlwiLFxuXHRcdFx0XHRcdHNlbGVjdGVkOiBlbWJlZF90eXBlLFxuXHRcdFx0XHRcdG9wdGlvbnM6IFt7IGxhYmVsOiBcIklubGluZVwiLCB2YWx1ZTogXCJpbmxpbmVcIiB9LCB7IGxhYmVsOiBcIlBvcG92ZXJcIiwgdmFsdWU6IFwicG9wb3ZlclwiIH1dLFxuXHRcdFx0XHRcdG9uQ2hhbmdlOiBvbkNoYW5nZU9wdGlvbkVtYmVkVHlwZVxuXHRcdFx0XHR9KSxcblx0XHRcdFx0ZW1iZWRfdHlwZSA9PT0gXCJwb3BvdmVyXCIgJiYgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KENoZWNrYm94Q29udHJvbCwge1xuXHRcdFx0XHRcdGhlYWRpbmc6IFwiQW5pbWF0ZSBUaHVtYm5haWxcIixcblx0XHRcdFx0XHRsYWJlbDogXCJBbmltYXRlIFRodW1ibmFpbFwiLFxuXHRcdFx0XHRcdGhlbHA6IFwiQW5pbWF0ZSB0aGUgdGh1bWJuYWlsIG9uIGhvdmVyLiBPbmx5IHdvcmtzIHdpdGggcG9wb3ZlclwiLFxuXHRcdFx0XHRcdGNoZWNrZWQ6IGFuaW1hdGV0aHVtYm5haWwsXG5cdFx0XHRcdFx0b25DaGFuZ2U6IG9uQ2hhbmdlT3B0aW9uQW5pbWF0ZVRodW1ibmFpbFxuXHRcdFx0XHR9KSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFJhZGlvQ29udHJvbCwge1xuXHRcdFx0XHRcdGxhYmVsOiBcIlBsYXllciB0eXBlXCIsXG5cdFx0XHRcdFx0aGVscDogXCJUaGUgdHlwZSB2aWRlbyBwbGF5ZXIuICh1c2UganMgdW5sZXNzIGVycm9ycylcIixcblx0XHRcdFx0XHRzZWxlY3RlZDogcGxheWVyLFxuXHRcdFx0XHRcdG9wdGlvbnM6IFt7IGxhYmVsOiBcIkphdmFzY3JpcHRcIiwgdmFsdWU6IFwianNcIiB9LCB7IGxhYmVsOiBcImlGcmFtZVwiLCB2YWx1ZTogXCJpbmxpbmVcIiB9XSxcblx0XHRcdFx0XHRvbkNoYW5nZTogb25DaGFuZ2VPcHRpb25QbGF5ZXJcblx0XHRcdFx0fSksXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChDaGVja2JveENvbnRyb2wsIHtcblx0XHRcdFx0XHRoZWFkaW5nOiBcIlJlc3BvbnNpdmVcIixcblx0XHRcdFx0XHRsYWJlbDogXCJSZXNwb25zaXZlXCIsXG5cdFx0XHRcdFx0aGVscDogXCJSZXNwb25zaXZlIHZpZGVvIGRpc3BsYXlcIixcblx0XHRcdFx0XHRjaGVja2VkOiByZXNwb25zaXZlLFxuXHRcdFx0XHRcdG9uQ2hhbmdlOiBvbkNoYW5nZU9wdGlvblJlc3BvbnNpdmVcblx0XHRcdFx0fSksXG5cdFx0XHRcdCFyZXNwb25zaXZlICYmIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChUZXh0Q29udHJvbCwge1xuXHRcdFx0XHRcdGxhYmVsOiBfXyhcIkhlaWdodFwiKSxcblx0XHRcdFx0XHR2YWx1ZTogaGVpZ2h0LFxuXHRcdFx0XHRcdG9uQ2hhbmdlOiBvbkNoYW5nZU9wdGlvbkhlaWdodFxuXHRcdFx0XHR9KSxcblx0XHRcdFx0IXJlc3BvbnNpdmUgJiYgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFRleHRDb250cm9sLCB7XG5cdFx0XHRcdFx0bGFiZWw6IF9fKFwiV2lkdGhcIiksXG5cdFx0XHRcdFx0dmFsdWU6IHdpZHRoLFxuXHRcdFx0XHRcdG9uQ2hhbmdlOiBvbkNoYW5nZU9wdGlvbldpZHRoXG5cdFx0XHRcdH0pXG5cdFx0XHQpLFxuXHRcdFx0KCFoZWFkbGluZSB8fCBoZWFkbGluZSA9PT0gXCJcIiB8fCBoZWFkbGluZS5sZW5ndGggIT09IDEwKSAmJiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFwiZGl2XCIsXG5cdFx0XHRcdHsgXCJjbGFzc1wiOiBcIm1oLW5vLXZpZGVvLWlkXCIgfSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFwicFwiLFxuXHRcdFx0XHRcdG51bGwsXG5cdFx0XHRcdFx0XCJFbnRlciBWaWRlbyBJRDpcIlxuXHRcdFx0XHQpLFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUmljaFRleHQsIHtcblx0XHRcdFx0XHR0YWdOYW1lOiBcImRpdlwiLFxuXHRcdFx0XHRcdGZvcm1hdDogXCJzdHJpbmdcIixcblx0XHRcdFx0XHRtdWx0aWxpbmU6IGZhbHNlLFxuXHRcdFx0XHRcdFwiY2xhc3NcIjogXCJpbnB1dC12aWRlby1pZFwiLFxuXHRcdFx0XHRcdHZhbHVlOiBoZWFkbGluZSxcblx0XHRcdFx0XHRvbkNoYW5nZTogb25DaGFuZ2VIZWFkbGluZVxuXHRcdFx0XHR9KVxuXHRcdFx0KSxcblx0XHRcdGhlYWRsaW5lICYmIGhlYWRsaW5lLmxlbmd0aCA9PT0gMTAgJiYgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFZpZGVvRGlzcGxheSwgcHJvcHMpXG5cdFx0KTtcblx0fSxcblx0c2F2ZTogZnVuY3Rpb24gc2F2ZSgpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svYmxvY2suanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n')},function(module,exports){eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n")},function(module,__webpack_exports__,__webpack_require__){"use strict";eval("var FocusableIframe = wp.components.FocusableIframe;\nvar Fragment = wp.element.Fragment;\n\n\nfunction Section(props) {\n  var _props$attributes = props.attributes,\n      headline = _props$attributes.headline,\n      width = _props$attributes.width,\n      height = _props$attributes.height;\n\n\n  var outerWrapperStyle = {\n    padding: '56.25% 0 0 0',\n    position: 'relative'\n  };\n  var innerWrapperStyle = {\n    height: '100%',\n    left: 0,\n    position: 'absolute',\n    top: 0,\n    width: '100%'\n  };\n\n  return wp.element.createElement(\n    Fragment,\n    null,\n    wp.element.createElement(\n      'div',\n      { 'class': 'wistia_responsive_padding', style: outerWrapperStyle },\n      wp.element.createElement(\n        'div',\n        { 'class': 'wistia_responsive_wrapper', style: innerWrapperStyle },\n        wp.element.createElement(FocusableIframe, {\n          src: \"//fast.wistia.net/embed/iframe/\" + headline,\n          allowtransparency: 'true',\n          frameborder: '0',\n          scrolling: 'no',\n          'class': 'wistia_embed',\n          name: 'wistia_embed',\n          allowfullscreen: true,\n          mozallowfullscreen: true,\n          webkitallowfullscreen: true,\n          oallowfullscreen: true,\n          msallowfullscreen: true,\n          width: width ? width : '100%',\n          height: height ? height : '100%'\n        })\n      )\n    )\n  );\n}\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (Section);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ZpZGVvRGlzcGxheS5qcz9iZjVmIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBGb2N1c2FibGVJZnJhbWUgPSB3cC5jb21wb25lbnRzLkZvY3VzYWJsZUlmcmFtZTtcbnZhciBGcmFnbWVudCA9IHdwLmVsZW1lbnQuRnJhZ21lbnQ7XG5cblxuZnVuY3Rpb24gU2VjdGlvbihwcm9wcykge1xuICB2YXIgX3Byb3BzJGF0dHJpYnV0ZXMgPSBwcm9wcy5hdHRyaWJ1dGVzLFxuICAgICAgaGVhZGxpbmUgPSBfcHJvcHMkYXR0cmlidXRlcy5oZWFkbGluZSxcbiAgICAgIHdpZHRoID0gX3Byb3BzJGF0dHJpYnV0ZXMud2lkdGgsXG4gICAgICBoZWlnaHQgPSBfcHJvcHMkYXR0cmlidXRlcy5oZWlnaHQ7XG5cblxuICB2YXIgb3V0ZXJXcmFwcGVyU3R5bGUgPSB7XG4gICAgcGFkZGluZzogJzU2LjI1JSAwIDAgMCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgfTtcbiAgdmFyIGlubmVyV3JhcHBlclN0eWxlID0ge1xuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIGxlZnQ6IDAsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwLFxuICAgIHdpZHRoOiAnMTAwJSdcbiAgfTtcblxuICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgIEZyYWdtZW50LFxuICAgIG51bGwsXG4gICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7ICdjbGFzcyc6ICd3aXN0aWFfcmVzcG9uc2l2ZV9wYWRkaW5nJywgc3R5bGU6IG91dGVyV3JhcHBlclN0eWxlIH0sXG4gICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7ICdjbGFzcyc6ICd3aXN0aWFfcmVzcG9uc2l2ZV93cmFwcGVyJywgc3R5bGU6IGlubmVyV3JhcHBlclN0eWxlIH0sXG4gICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChGb2N1c2FibGVJZnJhbWUsIHtcbiAgICAgICAgICBzcmM6IFwiLy9mYXN0Lndpc3RpYS5uZXQvZW1iZWQvaWZyYW1lL1wiICsgaGVhZGxpbmUsXG4gICAgICAgICAgYWxsb3d0cmFuc3BhcmVuY3k6ICd0cnVlJyxcbiAgICAgICAgICBmcmFtZWJvcmRlcjogJzAnLFxuICAgICAgICAgIHNjcm9sbGluZzogJ25vJyxcbiAgICAgICAgICAnY2xhc3MnOiAnd2lzdGlhX2VtYmVkJyxcbiAgICAgICAgICBuYW1lOiAnd2lzdGlhX2VtYmVkJyxcbiAgICAgICAgICBhbGxvd2Z1bGxzY3JlZW46IHRydWUsXG4gICAgICAgICAgbW96YWxsb3dmdWxsc2NyZWVuOiB0cnVlLFxuICAgICAgICAgIHdlYmtpdGFsbG93ZnVsbHNjcmVlbjogdHJ1ZSxcbiAgICAgICAgICBvYWxsb3dmdWxsc2NyZWVuOiB0cnVlLFxuICAgICAgICAgIG1zYWxsb3dmdWxsc2NyZWVuOiB0cnVlLFxuICAgICAgICAgIHdpZHRoOiB3aWR0aCA/IHdpZHRoIDogJzEwMCUnLFxuICAgICAgICAgIGhlaWdodDogaGVpZ2h0ID8gaGVpZ2h0IDogJzEwMCUnXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKVxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvdmlkZW9EaXNwbGF5LmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n")}]);