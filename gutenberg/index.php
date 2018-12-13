<?php

if ( ! defined( 'ABSPATH' ) )
	exit;


add_action( 'init', 'marcus_hiles_video_register_block' );
function marcus_hiles_video_register_block() {
  register_block_type(
    'marcus-hiles-wistia-shortcodes/wistia-video-block',
    array(
      'render_callback' => 'marcus_hiles_video_render_block',
    )
  );
}

add_action( 'enqueue_block_editor_assets', 'marcus_hiles_video_editor_assets' );
function marcus_hiles_video_editor_assets() {
	// Scripts.
	wp_enqueue_script(
		'marcus-hiles-wistia-shortcodes/wistia-video-block-js',
		plugins_url( '/gutenberg/dist/blocks.build.js', dirname( __FILE__ ) ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-components', 'wp-editor' ),
		filemtime( plugin_dir_path( __DIR__ ) . 'gutenberg/dist/blocks.build.js' )
  );
	// Styles.
	wp_enqueue_style(
		'marcus-hiles-wistia-shortcodes/wistia-video-block-editor-css',
		plugins_url( '/gutenberg/dist/blocks.editor.build.css', dirname( __FILE__ ) ),
		array( 'wp-edit-blocks' ),
		filemtime( plugin_dir_path( __DIR__ ) . '/gutenberg/dist/blocks.editor.build.css' )
	);
}

function marcus_hiles_video_render_block( $atts = array() ) {

	extract( shortcode_atts(
		array(
			'headline' => '',
			'embed_type' => 'inline',
			'animatethumbnail' => 'false',
			'responsive' => 'true',
			'height' => '',
			'width' => '',
			'player' => 'js',
		), $atts )
	);

	$type = in_array( $embed_type, array( 'inline', 'popover' ) ) ? $embed_type : 'inline';
	$player = in_array( $player, array( 'js', 'iframe' ) ) ? $player : 'js';
	$hashid = esc_attr( trim( $headline ) );
	$animatethumbnail = ( $animatethumbnail == 'true' ) ? true : false;
	$responsive = ( $responsive == 'true' ) ? true : false;
	$height = ( intval( $height ) > 1 ) ? $height : '';
	$width = ( intval( $width ) > 1 ) ? $width : '';

	 // Build array for video
	$video_atts = array (
		'id'         => $hashid,
		'embed_type'       => $type,
		'responsive'       => $responsive,
		'thumbnail_width'  => $width,
		'thumbnail_height' => $height,
		'animatethumbnail' => $animatethumbnail,
		'player'           => $player,
		'echo'             => false
	);

	 // Get video
	$output = new MH_Wistia_Video( $video_atts );

	// Return video
	if ( is_object( $output ) )
		return $output->video_output;

	// There was a problem
	return null;

}
