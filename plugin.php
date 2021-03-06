<?php
/*
Plugin Name: Marcus Hiles Wistia Shortcodes
Plugin URI: https://www.marcus-hiles.com/plugins
Description: Easy embeds for Wistia Videos
Version: 1.3
Author: Marcus Hiles
Author URI: https://www.marcus-hiles.com
Text Domain: marcus-hiles-wistia-shortcodes
Domain Path: /languages
*/

if ( __FILE__ == $_SERVER['SCRIPT_FILENAME'] ) { exit; }

if ( ! class_exists('Marcus_Hiles_Wistia_Embeds_Plugin' ) ):
class Marcus_Hiles_Wistia_Embeds_Plugin {

	private static $instance;
	public $dir_path = '';
	public $dir_url = '';


	/**
	 * Main Instance
	 *
	 */
	public static function instance() {
		if ( ! isset( self::$instance ) && ! ( self::$instance instanceof Marcus_Hiles_Wistia_Embeds_Plugin ) ) {
			self::$instance = new Marcus_Hiles_Wistia_Embeds_Plugin;
			self::$instance->init();
		}
		return self::$instance;
	}


	/**
	 * Init
	 *
	 */
	public function init() {
		$this->dir_path = plugin_dir_path( __FILE__ );
		$this->dir_uri  = plugin_dir_url( __FILE__ );

		require_once( trailingslashit( $this->dir_path ) . 'wistia-video.php' );
		require_once( trailingslashit( $this->dir_path ) . 'shortcodes.php' );
		if( function_exists( 'parse_blocks' ) || function_exists( 'gutenberg_parse_blocks' ) ){
			require_once( trailingslashit( $this->dir_path ) . 'gutenberg/index.php' );
		}
	}

}
endif;


/**
* The main Marcus_Hiles_Wistia_Embeds_Plugin function.
*
* @return object
*/
function Marcus_Hiles_Wistia_Embeds_Plugin() {
	if( class_exists( 'Marcus_Hiles_Wistia_Embeds_Plugin' ) ){
	  return Marcus_Hiles_Wistia_Embeds_Plugin::instance();
	}
}

Marcus_Hiles_Wistia_Embeds_Plugin();