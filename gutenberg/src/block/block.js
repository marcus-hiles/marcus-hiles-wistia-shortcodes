import "./editor.scss";
import VideoDisplay from "../components/videoDisplay";

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls } = wp.editor;
const { Fragment } = wp.element;
const { TextControl, RadioControl, CheckboxControl } = wp.components;

const BlockAttributes = {
	headline: {
		type: "string",
		default: null
	},
	embed_type: {
		type: "string",
		default: "inline"
	},
	animatethumbnail: {
		type: "boolean",
		default: false
	},
	responsive: {
		type: "boolean",
		default: true
	},
	height: {
		type: "number",
		default: null
	},
	width: {
		type: "number",
		default: null
	},
	player: {
		type: "string",
		default: "js"
	}
};

registerBlockType("marcus-hiles-wistia-shortcodes/wistia-video-block", {
	title: __("MH: Wistia Video"),
	icon: "format-video",
	category: "common",
	attributes: BlockAttributes,
	allowed: {
		html: false
	},
	edit: function(props) {
		const headline = props.attributes.headline;
		const embed_type = props.attributes.embed_type;
		const responsive = props.attributes.responsive;
		const animatethumbnail = props.attributes.animatethumbnail;
		const height = props.attributes.height;
		const width = props.attributes.width;
		const player = props.attributes.player;

		const onChangeHeadline = newVal => {
			props.setAttributes({ headline: newVal });
		};
		const onChangeOptionEmbedType = newVal => {
			props.setAttributes({ embed_type: newVal });
		};
		const onChangeOptionAnimateThumbnail = newVal => {
			props.setAttributes({ animatethumbnail: newVal });
		};
		const onChangeOptionResponsive = newVal => {
			props.setAttributes({ responsive: newVal });
			if (!newVal) {
				props.setAttributes({ height: null, width: null });
			}
		};
		const onChangeOptionHeight = newVal => {
			props.setAttributes({ height: newVal });
		};
		const onChangeOptionWidth = newVal => {
			props.setAttributes({ width: newVal });
		};
		const onChangeOptionPlayer = newVal => {
			props.setAttributes({ player: newVal });
		};
		return (
			<Fragment>
				<InspectorControls>
					<TextControl
						label={__("Wistia Video ID")}
						value={headline}
						onChange={onChangeHeadline}
					/>
					<RadioControl
						label="Embed Type"
						help="The type embed."
						selected={embed_type}
						options={[
							{ label: "Inline", value: "inline" },
							{ label: "Popover", value: "popover" }
						]}
						onChange={onChangeOptionEmbedType}
					/>
					{embed_type === "popover" && (
						<CheckboxControl
							heading="Animate Thumbnail"
							label="Animate Thumbnail"
							help="Animate the thumbnail on hover. Only works with popover"
							checked={animatethumbnail}
							onChange={onChangeOptionAnimateThumbnail}
						/>
					)}
					<RadioControl
						label="Player type"
						help="The type video player. (use js unless errors)"
						selected={player}
						options={[
							{ label: "Javascript", value: "js" },
							{ label: "iFrame", value: "inline" }
						]}
						onChange={onChangeOptionPlayer}
					/>
					<CheckboxControl
						heading="Responsive"
						label="Responsive"
						help="Responsive video display"
						checked={responsive}
						onChange={onChangeOptionResponsive}
					/>
					{!responsive && (
						<TextControl
							label={__("Height")}
							value={height}
							onChange={onChangeOptionHeight}
						/>
					)}
					{!responsive && (
						<TextControl
							label={__("Width")}
							value={width}
							onChange={onChangeOptionWidth}
						/>
					)}
				</InspectorControls>
				{(!headline || headline === "" || headline.length !== 10) && (
					<div class="mh-no-video-id">
						<p>Enter Video ID:</p>
						<RichText
							tagName="div"
							format="string"
							multiline={false}
							class="input-video-id"
							value={headline}
							onChange={onChangeHeadline}
						/>
					</div>
				)}
				{headline && headline.length === 10 && <VideoDisplay {...props} />}
			</Fragment>
		);
	},
	save: function() {
		return null;
	}
});
