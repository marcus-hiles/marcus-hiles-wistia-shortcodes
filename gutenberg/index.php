<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function marcus_hiles_wistia_shortcode_gblock_init() {
	// Scripts.
	wp_register_script(
		'wistia-video-block-js', // Handle.
		plugins_url( '/gutenberg/dist/blocks.build.js', dirname( __FILE__ ) ), 
		array( 'wp-blocks', 'wp-i18n', 'wp-element' ), 
		filemtime( plugin_dir_path( __DIR__ ) . 'gutenberg/dist/blocks.build.js' ) 
	);

	// Styles.
	wp_register_style(
		'wistia-video-block-editor-css', 
		plugins_url( '/gutenberg/dist/blocks.editor.build.css', dirname( __FILE__ ) ), 
		array( 'wp-edit-blocks' ), 
		filemtime( plugin_dir_path( __DIR__ ) . 'gutenberg/dist/blocks.editor.build.css' )
	);


	// Register block assets and render callback
	if ( function_exists( 'register_block_type' ) ) {
		register_block_type(
			'marcus-hiles-wistia-shortcodes/wistia-video-block',
			array(
				'editor_script'   => 'wistia-video-block-js',
				'editor_style'    => 'wistia-video-block-editor-css',
				'render_callback' => 'marcus_hiles_wistia_shortcode_gblock_output',
			)
		);
	}
}

add_action( 'init', 'marcus_hiles_wistia_shortcode_gblock_init' );
function marcus_hiles_wistia_shortcode_gblock_output( $atts = array() ) {
	
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
	//var_dump($atts);
	//return $atts['headline'];
	 // Clean attributes
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

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * `wp-blocks`: includes block type registration and related functions.
 *
 * @since 1.0.0
 */
function single_block_cgb_block_assets() {

	// wp_enqueue_script(
	// 	'marcus-hiles-wistia-shortcodes/wistia-video-block', // Handle.
	// 	plugins_url( '/dist/blocks.script.build.js', dirname( __FILE__ ) ), // Block style CSS.
	// 	array( 'wp-blocks' ), // Dependency to include the CSS after it.
	// 	filemtime( plugin_dir_path( __DIR__ ) . 'gutenberg/dist/blocks.script.build.js' ) // Version: filemtime — Gets file modification time.
	// );
	
	// wp_enqueue_style(
	// 	'marcus-hiles-wistia-shortcodes/wistia-video-block-css', // Handle.
	// 	plugins_url( '/gutenberg/dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block style CSS.
	// 	array( 'wp-blocks' ), // Dependency to include the CSS after it.
	// 	filemtime( plugin_dir_path( __DIR__ ) . 'gutenberg/dist/blocks.style.build.css' ) // Version: filemtime — Gets file modification time.
	// );
} // End function single_block_cgb_block_assets().

// Hook: Frontend assets.
add_action( 'enqueue_block_assets', 'single_block_cgb_block_assets' );

/**
 * Enqueue Gutenberg block assets for backend editor.
 *
 * `wp-blocks`: includes block type registration and related functions.
 * `wp-element`: includes the WordPress Element abstraction for describing the structure of your blocks.
 * `wp-i18n`: To internationalize the block's text.
 *
 * @since 1.0.0
 */
function single_block_cgb_editor_assets() {
	// Scripts.
	wp_enqueue_script(
		'marcus-hiles-wistia-shortcodes/wistia-video-block-js', // Handle.
		plugins_url( '/gutenberg/dist/blocks.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element' ), // Dependencies, defined above.
		filemtime( plugin_dir_path( __DIR__ ) . 'gutenberg/dist/blocks.build.js' ) // Version: filemtime — Gets file modification time.
	);

	// Styles.
	wp_enqueue_style(
		'marcus-hiles-wistia-shortcodes/wistia-video-block-editor-css', // Handle.
		plugins_url( '/gutenberg/dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		array( 'wp-edit-blocks' ) // Dependency to include the CSS after it.
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' ) // Version: filemtime — Gets file modification time.
	);
} // End function single_block_cgb_editor_assets().

// Hook: Editor assets.
add_action( 'enqueue_block_editor_assets', 'single_block_cgb_editor_assets' );
