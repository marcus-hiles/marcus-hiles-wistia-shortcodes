/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript.\n * You can create a new block folder in\n * this dir and include code for that block\n * here as well.\n *\n * All blocks should be included here since\n * this is the file that Webpack is compiling.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdC5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpblxuICogdGhpcyBkaXIgYW5kIGluY2x1ZGUgY29kZSBmb3IgdGhhdCBibG9ja1xuICogaGVyZSBhcyB3ZWxsLlxuICpcbiAqIEFsbCBibG9ja3Mgc2hvdWxkIGJlIGluY2x1ZGVkIGhlcmUgc2luY2VcbiAqIHRoaXMgaXMgdGhlIGZpbGUgdGhhdCBXZWJwYWNrIGlzIGNvbXBpbGluZy5cbiAqL1xuXG5pbXBvcnQgJy4vYmxvY2svYmxvY2suanMnO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2Nrcy5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n/**\n * BLOCK: single-block\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n\n\n\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$editor = wp.editor,\n    RichText = _wp$editor.RichText,\n    InspectorControls = _wp$editor.InspectorControls;\nvar Fragment = wp.element.Fragment;\nvar _wp$components = wp.components,\n    TextControl = _wp$components.TextControl,\n    RadioControl = _wp$components.RadioControl,\n    CheckboxControl = _wp$components.CheckboxControl;\n\n\nvar BlockAttributes = {\n\theadline: {\n\t\ttype: 'string',\n\t\tdefault: 'XXXXXX'\n\t},\n\tembed_type: {\n\t\ttype: 'string',\n\t\tdefault: 'a'\n\t},\n\tanimatethumbnail: {\n\t\ttype: 'boolean',\n\t\tdefault: false\n\t},\n\tresponsive: {\n\t\ttype: 'boolean',\n\t\tdefault: true\n\t},\n\theight: {\n\t\ttype: 'number',\n\t\tdefault: null\n\t},\n\twidth: {\n\t\ttype: 'number',\n\t\tdefault: null\n\t},\n\tplayer: {\n\t\ttype: 'string',\n\t\tdefault: 'js'\n\t}\n};\n\nregisterBlockType('marcus-hiles-wistia-shortcodes/wistia-video-block', {\n\ttitle: __('Wistia Video'),\n\ticon: 'format-video',\n\tcategory: 'common',\n\tattributes: BlockAttributes,\n\n\tallowed: {\n\t\thtml: false\n\t},\n\tedit: function edit(props) {\n\t\tvar headline = props.attributes.headline;\n\t\tvar embed_type = props.attributes.embed_type;\n\t\tvar responsive = props.attributes.responsive;\n\t\tvar animatethumbnail = props.attributes.animatethumbnail;\n\t\tvar height = props.attributes.height;\n\t\tvar width = props.attributes.width;\n\t\tvar player = props.attributes.player;\n\n\t\tvar onChangeHeadline = function onChangeHeadline(newVal) {\n\t\t\tprops.setAttributes({ headline: newVal });\n\t\t};\n\t\tvar onChangeOptionEmbedType = function onChangeOptionEmbedType(newVal) {\n\t\t\tprops.setAttributes({ embed_type: newVal });\n\t\t};\n\t\tvar onChangeOptionAnimateThumbnail = function onChangeOptionAnimateThumbnail(newVal) {\n\t\t\tprops.setAttributes({ animatethumbnail: newVal });\n\t\t};\n\t\tvar onChangeOptionResponsive = function onChangeOptionResponsive(newVal) {\n\t\t\tprops.setAttributes({ responsive: newVal });\n\t\t};\n\t\tvar onChangeOptionHeight = function onChangeOptionHeight(newVal) {\n\t\t\tprops.setAttributes({ height: newVal });\n\t\t};\n\t\tvar onChangeOptionWidth = function onChangeOptionWidth(newVal) {\n\t\t\tprops.setAttributes({ width: newVal });\n\t\t};\n\t\tvar onChangeOptionPlayer = function onChangeOptionPlayer(newVal) {\n\t\t\tprops.setAttributes({ player: newVal });\n\t\t};\n\t\treturn wp.element.createElement(\n\t\t\tFragment,\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\tInspectorControls,\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(TextControl, {\n\t\t\t\t\tlabel: __('Wistia Video ID'),\n\t\t\t\t\tvalue: headline,\n\t\t\t\t\tonChange: onChangeHeadline\n\t\t\t\t}),\n\t\t\t\twp.element.createElement(RadioControl, {\n\t\t\t\t\tlabel: 'Embed Type',\n\t\t\t\t\thelp: 'The type embed.',\n\t\t\t\t\tselected: embed_type,\n\t\t\t\t\toptions: [{ label: 'Inline', value: 'inline' }, { label: 'Popover', value: 'popover' }],\n\t\t\t\t\tonChange: onChangeOptionEmbedType\n\t\t\t\t}),\n\t\t\t\tembed_type === 'popover' && wp.element.createElement(CheckboxControl, {\n\t\t\t\t\theading: 'Animate Thumbnail',\n\t\t\t\t\tlabel: 'Animate Thumbnail',\n\t\t\t\t\thelp: 'Animate the thumbnail on hover. Only works with popover',\n\t\t\t\t\tchecked: animatethumbnail,\n\t\t\t\t\tonChange: onChangeOptionAnimateThumbnail\n\t\t\t\t}),\n\t\t\t\twp.element.createElement(RadioControl, {\n\t\t\t\t\tlabel: 'Player type',\n\t\t\t\t\thelp: 'The type video player. (use js unless errors)',\n\t\t\t\t\tselected: player,\n\t\t\t\t\toptions: [{ label: 'Javascript', value: 'js' }, { label: 'iFrame', value: 'inline' }],\n\t\t\t\t\tonChange: onChangeOptionPlayer\n\t\t\t\t}),\n\t\t\t\twp.element.createElement(CheckboxControl, {\n\t\t\t\t\theading: 'Responsive',\n\t\t\t\t\tlabel: 'Responsive',\n\t\t\t\t\thelp: 'Responsive video display',\n\t\t\t\t\tchecked: responsive,\n\t\t\t\t\tonChange: onChangeOptionResponsive\n\t\t\t\t}),\n\t\t\t\t!responsive && wp.element.createElement(TextControl, {\n\t\t\t\t\tlabel: __('Height'),\n\t\t\t\t\tvalue: height,\n\t\t\t\t\tonChange: onChangeOptionHeight\n\t\t\t\t}),\n\t\t\t\t!responsive && wp.element.createElement(TextControl, {\n\t\t\t\t\tlabel: __('Width'),\n\t\t\t\t\tvalue: width,\n\t\t\t\t\tonChange: onChangeOptionWidth\n\t\t\t\t})\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ 'class': 'inline-cta inline-cta-grey' },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ id: 'inline-cta-inner' },\n\t\t\t\t\twp.element.createElement(RichText, {\n\t\t\t\t\t\ttagName: 'p',\n\t\t\t\t\t\tclassName: 'title',\n\t\t\t\t\t\tvalue: headline,\n\t\t\t\t\t\tonChange: onChangeHeadline })\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t},\n\tsave: function save(props) {\n\t\tvar headline = props.attributes.headline;\n\n\t\treturn null;\n\t\t// (\n\t\t// <div class=\"inline-cta inline-cta-grey\">\n\t\t// \t<div id=\"inline-cta-inner\">\n\t\t// \t<p class=\"title\">{ headline }</p>\n\t\t// \t<p class=\"desc\">{sub_headline}</p>\n\t\t// \t<span class=\"border\"></span>\n\t\t// \t<p class=\"number\"><span>Call Us</span> <a href=\"tel:800-985-1365\">800-985-1365</a></p>\n\t\t// \t<p class=\"or\">or</p>\n\t\t// \t<a class=\"button button-mobile-block\" href=\"/contact-us/\">{button_text}</a>\n\t\t// \t</div>\n\t\t// </div>\n\t\t// <RichText.Content\n\t\t// \ttagName=\"p\"\n\t\t// \tclassName={ props.className }\n\t\t// \tvalue={ headline } />\n\t\t//);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQkxPQ0s6IHNpbmdsZS1ibG9ja1xuICpcbiAqIFJlZ2lzdGVyaW5nIGEgYmFzaWMgYmxvY2sgd2l0aCBHdXRlbmJlcmcuXG4gKiBTaW1wbGUgYmxvY2ssIHJlbmRlcnMgYW5kIHNhdmVzIHRoZSBzYW1lIGNvbnRlbnQgd2l0aG91dCBhbnkgaW50ZXJhY3Rpdml0eS5cbiAqL1xuXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuXG52YXIgX18gPSB3cC5pMThuLl9fO1xudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlO1xudmFyIF93cCRlZGl0b3IgPSB3cC5lZGl0b3IsXG4gICAgUmljaFRleHQgPSBfd3AkZWRpdG9yLlJpY2hUZXh0LFxuICAgIEluc3BlY3RvckNvbnRyb2xzID0gX3dwJGVkaXRvci5JbnNwZWN0b3JDb250cm9scztcbnZhciBGcmFnbWVudCA9IHdwLmVsZW1lbnQuRnJhZ21lbnQ7XG52YXIgX3dwJGNvbXBvbmVudHMgPSB3cC5jb21wb25lbnRzLFxuICAgIFRleHRDb250cm9sID0gX3dwJGNvbXBvbmVudHMuVGV4dENvbnRyb2wsXG4gICAgUmFkaW9Db250cm9sID0gX3dwJGNvbXBvbmVudHMuUmFkaW9Db250cm9sLFxuICAgIENoZWNrYm94Q29udHJvbCA9IF93cCRjb21wb25lbnRzLkNoZWNrYm94Q29udHJvbDtcblxuXG52YXIgQmxvY2tBdHRyaWJ1dGVzID0ge1xuXHRoZWFkbGluZToge1xuXHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdGRlZmF1bHQ6ICdYWFhYWFgnXG5cdH0sXG5cdGVtYmVkX3R5cGU6IHtcblx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRkZWZhdWx0OiAnYSdcblx0fSxcblx0YW5pbWF0ZXRodW1ibmFpbDoge1xuXHRcdHR5cGU6ICdib29sZWFuJyxcblx0XHRkZWZhdWx0OiBmYWxzZVxuXHR9LFxuXHRyZXNwb25zaXZlOiB7XG5cdFx0dHlwZTogJ2Jvb2xlYW4nLFxuXHRcdGRlZmF1bHQ6IHRydWVcblx0fSxcblx0aGVpZ2h0OiB7XG5cdFx0dHlwZTogJ251bWJlcicsXG5cdFx0ZGVmYXVsdDogbnVsbFxuXHR9LFxuXHR3aWR0aDoge1xuXHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdGRlZmF1bHQ6IG51bGxcblx0fSxcblx0cGxheWVyOiB7XG5cdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0ZGVmYXVsdDogJ2pzJ1xuXHR9XG59O1xuXG5yZWdpc3RlckJsb2NrVHlwZSgnbWFyY3VzLWhpbGVzLXdpc3RpYS1zaG9ydGNvZGVzL3dpc3RpYS12aWRlby1ibG9jaycsIHtcblx0dGl0bGU6IF9fKCdXaXN0aWEgVmlkZW8nKSxcblx0aWNvbjogJ2Zvcm1hdC12aWRlbycsXG5cdGNhdGVnb3J5OiAnY29tbW9uJyxcblx0YXR0cmlidXRlczogQmxvY2tBdHRyaWJ1dGVzLFxuXG5cdGFsbG93ZWQ6IHtcblx0XHRodG1sOiBmYWxzZVxuXHR9LFxuXHRlZGl0OiBmdW5jdGlvbiBlZGl0KHByb3BzKSB7XG5cdFx0dmFyIGhlYWRsaW5lID0gcHJvcHMuYXR0cmlidXRlcy5oZWFkbGluZTtcblx0XHR2YXIgZW1iZWRfdHlwZSA9IHByb3BzLmF0dHJpYnV0ZXMuZW1iZWRfdHlwZTtcblx0XHR2YXIgcmVzcG9uc2l2ZSA9IHByb3BzLmF0dHJpYnV0ZXMucmVzcG9uc2l2ZTtcblx0XHR2YXIgYW5pbWF0ZXRodW1ibmFpbCA9IHByb3BzLmF0dHJpYnV0ZXMuYW5pbWF0ZXRodW1ibmFpbDtcblx0XHR2YXIgaGVpZ2h0ID0gcHJvcHMuYXR0cmlidXRlcy5oZWlnaHQ7XG5cdFx0dmFyIHdpZHRoID0gcHJvcHMuYXR0cmlidXRlcy53aWR0aDtcblx0XHR2YXIgcGxheWVyID0gcHJvcHMuYXR0cmlidXRlcy5wbGF5ZXI7XG5cblx0XHR2YXIgb25DaGFuZ2VIZWFkbGluZSA9IGZ1bmN0aW9uIG9uQ2hhbmdlSGVhZGxpbmUobmV3VmFsKSB7XG5cdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKHsgaGVhZGxpbmU6IG5ld1ZhbCB9KTtcblx0XHR9O1xuXHRcdHZhciBvbkNoYW5nZU9wdGlvbkVtYmVkVHlwZSA9IGZ1bmN0aW9uIG9uQ2hhbmdlT3B0aW9uRW1iZWRUeXBlKG5ld1ZhbCkge1xuXHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcyh7IGVtYmVkX3R5cGU6IG5ld1ZhbCB9KTtcblx0XHR9O1xuXHRcdHZhciBvbkNoYW5nZU9wdGlvbkFuaW1hdGVUaHVtYm5haWwgPSBmdW5jdGlvbiBvbkNoYW5nZU9wdGlvbkFuaW1hdGVUaHVtYm5haWwobmV3VmFsKSB7XG5cdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKHsgYW5pbWF0ZXRodW1ibmFpbDogbmV3VmFsIH0pO1xuXHRcdH07XG5cdFx0dmFyIG9uQ2hhbmdlT3B0aW9uUmVzcG9uc2l2ZSA9IGZ1bmN0aW9uIG9uQ2hhbmdlT3B0aW9uUmVzcG9uc2l2ZShuZXdWYWwpIHtcblx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoeyByZXNwb25zaXZlOiBuZXdWYWwgfSk7XG5cdFx0fTtcblx0XHR2YXIgb25DaGFuZ2VPcHRpb25IZWlnaHQgPSBmdW5jdGlvbiBvbkNoYW5nZU9wdGlvbkhlaWdodChuZXdWYWwpIHtcblx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoeyBoZWlnaHQ6IG5ld1ZhbCB9KTtcblx0XHR9O1xuXHRcdHZhciBvbkNoYW5nZU9wdGlvbldpZHRoID0gZnVuY3Rpb24gb25DaGFuZ2VPcHRpb25XaWR0aChuZXdWYWwpIHtcblx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoeyB3aWR0aDogbmV3VmFsIH0pO1xuXHRcdH07XG5cdFx0dmFyIG9uQ2hhbmdlT3B0aW9uUGxheWVyID0gZnVuY3Rpb24gb25DaGFuZ2VPcHRpb25QbGF5ZXIobmV3VmFsKSB7XG5cdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKHsgcGxheWVyOiBuZXdWYWwgfSk7XG5cdFx0fTtcblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0RnJhZ21lbnQsXG5cdFx0XHRudWxsLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRJbnNwZWN0b3JDb250cm9scyxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFRleHRDb250cm9sLCB7XG5cdFx0XHRcdFx0bGFiZWw6IF9fKCdXaXN0aWEgVmlkZW8gSUQnKSxcblx0XHRcdFx0XHR2YWx1ZTogaGVhZGxpbmUsXG5cdFx0XHRcdFx0b25DaGFuZ2U6IG9uQ2hhbmdlSGVhZGxpbmVcblx0XHRcdFx0fSksXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChSYWRpb0NvbnRyb2wsIHtcblx0XHRcdFx0XHRsYWJlbDogJ0VtYmVkIFR5cGUnLFxuXHRcdFx0XHRcdGhlbHA6ICdUaGUgdHlwZSBlbWJlZC4nLFxuXHRcdFx0XHRcdHNlbGVjdGVkOiBlbWJlZF90eXBlLFxuXHRcdFx0XHRcdG9wdGlvbnM6IFt7IGxhYmVsOiAnSW5saW5lJywgdmFsdWU6ICdpbmxpbmUnIH0sIHsgbGFiZWw6ICdQb3BvdmVyJywgdmFsdWU6ICdwb3BvdmVyJyB9XSxcblx0XHRcdFx0XHRvbkNoYW5nZTogb25DaGFuZ2VPcHRpb25FbWJlZFR5cGVcblx0XHRcdFx0fSksXG5cdFx0XHRcdGVtYmVkX3R5cGUgPT09ICdwb3BvdmVyJyAmJiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoQ2hlY2tib3hDb250cm9sLCB7XG5cdFx0XHRcdFx0aGVhZGluZzogJ0FuaW1hdGUgVGh1bWJuYWlsJyxcblx0XHRcdFx0XHRsYWJlbDogJ0FuaW1hdGUgVGh1bWJuYWlsJyxcblx0XHRcdFx0XHRoZWxwOiAnQW5pbWF0ZSB0aGUgdGh1bWJuYWlsIG9uIGhvdmVyLiBPbmx5IHdvcmtzIHdpdGggcG9wb3ZlcicsXG5cdFx0XHRcdFx0Y2hlY2tlZDogYW5pbWF0ZXRodW1ibmFpbCxcblx0XHRcdFx0XHRvbkNoYW5nZTogb25DaGFuZ2VPcHRpb25BbmltYXRlVGh1bWJuYWlsXG5cdFx0XHRcdH0pLFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUmFkaW9Db250cm9sLCB7XG5cdFx0XHRcdFx0bGFiZWw6ICdQbGF5ZXIgdHlwZScsXG5cdFx0XHRcdFx0aGVscDogJ1RoZSB0eXBlIHZpZGVvIHBsYXllci4gKHVzZSBqcyB1bmxlc3MgZXJyb3JzKScsXG5cdFx0XHRcdFx0c2VsZWN0ZWQ6IHBsYXllcixcblx0XHRcdFx0XHRvcHRpb25zOiBbeyBsYWJlbDogJ0phdmFzY3JpcHQnLCB2YWx1ZTogJ2pzJyB9LCB7IGxhYmVsOiAnaUZyYW1lJywgdmFsdWU6ICdpbmxpbmUnIH1dLFxuXHRcdFx0XHRcdG9uQ2hhbmdlOiBvbkNoYW5nZU9wdGlvblBsYXllclxuXHRcdFx0XHR9KSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KENoZWNrYm94Q29udHJvbCwge1xuXHRcdFx0XHRcdGhlYWRpbmc6ICdSZXNwb25zaXZlJyxcblx0XHRcdFx0XHRsYWJlbDogJ1Jlc3BvbnNpdmUnLFxuXHRcdFx0XHRcdGhlbHA6ICdSZXNwb25zaXZlIHZpZGVvIGRpc3BsYXknLFxuXHRcdFx0XHRcdGNoZWNrZWQ6IHJlc3BvbnNpdmUsXG5cdFx0XHRcdFx0b25DaGFuZ2U6IG9uQ2hhbmdlT3B0aW9uUmVzcG9uc2l2ZVxuXHRcdFx0XHR9KSxcblx0XHRcdFx0IXJlc3BvbnNpdmUgJiYgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFRleHRDb250cm9sLCB7XG5cdFx0XHRcdFx0bGFiZWw6IF9fKCdIZWlnaHQnKSxcblx0XHRcdFx0XHR2YWx1ZTogaGVpZ2h0LFxuXHRcdFx0XHRcdG9uQ2hhbmdlOiBvbkNoYW5nZU9wdGlvbkhlaWdodFxuXHRcdFx0XHR9KSxcblx0XHRcdFx0IXJlc3BvbnNpdmUgJiYgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFRleHRDb250cm9sLCB7XG5cdFx0XHRcdFx0bGFiZWw6IF9fKCdXaWR0aCcpLFxuXHRcdFx0XHRcdHZhbHVlOiB3aWR0aCxcblx0XHRcdFx0XHRvbkNoYW5nZTogb25DaGFuZ2VPcHRpb25XaWR0aFxuXHRcdFx0XHR9KVxuXHRcdFx0KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdHsgJ2NsYXNzJzogJ2lubGluZS1jdGEgaW5saW5lLWN0YS1ncmV5JyB9LFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdFx0eyBpZDogJ2lubGluZS1jdGEtaW5uZXInIH0sXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFJpY2hUZXh0LCB7XG5cdFx0XHRcdFx0XHR0YWdOYW1lOiAncCcsXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU6ICd0aXRsZScsXG5cdFx0XHRcdFx0XHR2YWx1ZTogaGVhZGxpbmUsXG5cdFx0XHRcdFx0XHRvbkNoYW5nZTogb25DaGFuZ2VIZWFkbGluZSB9KVxuXHRcdFx0XHQpXG5cdFx0XHQpXG5cdFx0KTtcblx0fSxcblx0c2F2ZTogZnVuY3Rpb24gc2F2ZShwcm9wcykge1xuXHRcdHZhciBoZWFkbGluZSA9IHByb3BzLmF0dHJpYnV0ZXMuaGVhZGxpbmU7XG5cblx0XHRyZXR1cm4gbnVsbDtcblx0XHQvLyAoXG5cdFx0Ly8gPGRpdiBjbGFzcz1cImlubGluZS1jdGEgaW5saW5lLWN0YS1ncmV5XCI+XG5cdFx0Ly8gXHQ8ZGl2IGlkPVwiaW5saW5lLWN0YS1pbm5lclwiPlxuXHRcdC8vIFx0PHAgY2xhc3M9XCJ0aXRsZVwiPnsgaGVhZGxpbmUgfTwvcD5cblx0XHQvLyBcdDxwIGNsYXNzPVwiZGVzY1wiPntzdWJfaGVhZGxpbmV9PC9wPlxuXHRcdC8vIFx0PHNwYW4gY2xhc3M9XCJib3JkZXJcIj48L3NwYW4+XG5cdFx0Ly8gXHQ8cCBjbGFzcz1cIm51bWJlclwiPjxzcGFuPkNhbGwgVXM8L3NwYW4+IDxhIGhyZWY9XCJ0ZWw6ODAwLTk4NS0xMzY1XCI+ODAwLTk4NS0xMzY1PC9hPjwvcD5cblx0XHQvLyBcdDxwIGNsYXNzPVwib3JcIj5vcjwvcD5cblx0XHQvLyBcdDxhIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi1tb2JpbGUtYmxvY2tcIiBocmVmPVwiL2NvbnRhY3QtdXMvXCI+e2J1dHRvbl90ZXh0fTwvYT5cblx0XHQvLyBcdDwvZGl2PlxuXHRcdC8vIDwvZGl2PlxuXHRcdC8vIDxSaWNoVGV4dC5Db250ZW50XG5cdFx0Ly8gXHR0YWdOYW1lPVwicFwiXG5cdFx0Ly8gXHRjbGFzc05hbWU9eyBwcm9wcy5jbGFzc05hbWUgfVxuXHRcdC8vIFx0dmFsdWU9eyBoZWFkbGluZSB9IC8+XG5cdFx0Ly8pO1xuXHR9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9ibG9jay5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzkzMTYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80ZmE1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);