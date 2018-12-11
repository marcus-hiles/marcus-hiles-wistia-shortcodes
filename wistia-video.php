<?php

class MH_Wistia_Video {

    public $atts;
    public $video_output;

	public function __construct( $atts ) {

        $default_atts = array (
            'id' => null,
            'embed_type' => 'inline',
            'responsive' => true,
            'animatethumbnail' => true,
            'player' => 'js',
            'thumbnail_width' => '',
            'thumbnail_height' => '',
            'echo' => true,
        );

        $this->atts = wp_parse_args( $atts, $default_atts );

        if( $this->atts['id'] ){
            self::add_scripts();
            self::output_video();
        }
    }

    public function add_scripts() {
        if( ! self::maybe_add_ev1_scripts() ){
            add_action( 'wp_footer', array( $this, 'get_ev1_script' ), 1 );
            add_action( 'script_loader_tag', array( $this, 'async_script' ), 10, 2 );
        }

        if( ! self::maybe_add_media_scripts() ){
            add_action( 'wp_footer', array( $this, 'get_media_script' ), 0 );
            add_action( 'script_loader_tag', array( $this, 'async_script' ), 10, 2 );
        }
    }


    public function maybe_add_ev1_scripts() {
        return ( wp_script_is( 'wistia_ev1', 'enqueued' ) );
    }

    public function maybe_add_media_scripts() {
        return ( wp_script_is( 'wistia_media_'.$this->atts['id'], 'enqueued' ) );
    }

    public function get_ev1_script() {
        wp_enqueue_script( 'wistia_ev1', 'https://fast.wistia.com/assets/external/E-v1.js', null, null );
    }

    public function get_media_script() {
        wp_enqueue_script( 'wistia_media_'.$this->atts['id'] , 'https://fast.wistia.com/embed/medias/'.$this->atts['id'].'.jsonp', null, null );
    }


    public function async_script( $tag, $handle ) {

        if ( 'wistia_ev1' !== $handle && 'wistia_media_'.$this->atts['id'] !== $handle ){
            return $tag;
        }

        if( preg_match( '/async/', $tag ) ){
            return $tag;
        }

        if ( 'wistia_ev1' === $handle ){
         return str_replace( 'src', 'charset="ISO-8859-1" async src', $tag );
        }else{
         return str_replace( 'src', 'async src', $tag );
        }

    }


    public function output_video() {

        if( $this->atts['player'] === 'iframe' && $this->atts['embed_type'] !== 'popover' ){
          $this->video_output = self::build_video_iframe();
        }else{
          $this->video_output = self::build_video_default();
        }

        if( $this->atts['echo'] === true ){
            echo $this->video_output;
        }else{
            self::output_video_to_string();
        }

    }


    public function output_video_to_string() {
        return (string) $this->video_output;
    }


    public function maybe_build_video_responsive_wrapper($video) {

        if( $this->atts['responsive'] !== true ){
            return $video;
        }

        $responsive_video = '<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;">';
        $responsive_video .= $video;
        $responsive_video .= '</div></div>';

        return $responsive_video;
    }


    public function build_video_default() {

        $videofoam = ( $this->atts['responsive'] && $this->atts['responsive'] == true ) ? ' videoFoam=true' : '';
        $popover = ( $this->atts['embed_type'] && $this->atts['embed_type'] == 'popover' ) ? ' popover=true' : '';
        $animatethumbnail = ( $this->atts['animatethumbnail'] && $this->atts['animatethumbnail'] == true ) ? ' popoverAnimateThumbnail=true' : '';
        $thumbnail_width = ( intval( $this->atts['thumbnail_width'] ) > 1 ) ?  $this->atts['thumbnail_width'] : false;
        $thumbnail_height = ( intval( $this->atts['thumbnail_height'] ) > 1 ) ? $this->atts['thumbnail_height'] : false;
        $video_options =  $popover . $animatethumbnail . $videofoam;

        if( $this->atts['responsive'] !== true && $thumbnail_width && $thumbnail_height ){
            $video_html = '<span class="wistia_embed wistia_async_'. esc_attr( $this->atts['id'] ) . esc_attr( $video_options ).'" style="display:inline-block;height:'.intval( $thumbnail_height ).'px;width:'.intval( $thumbnail_width ).'px">&nbsp;</span>';
        }else{
            $video_html = '<span class="wistia_embed wistia_async_'. esc_attr( $this->atts['id'] ) . esc_attr( $video_options ).'" style="height:100%;width:100%;display:inline-block;">&nbsp;</span>';
        }

        return self::maybe_build_video_responsive_wrapper( $video_html );
    }

    public function build_video_iframe() {

        $thumbnail_width = ( intval( $this->atts['thumbnail_width'] ) > 1 ) ?  $this->atts['thumbnail_width'] : false;
        $thumbnail_height = ( intval( $this->atts['thumbnail_height'] ) > 1 ) ? $this->atts['thumbnail_height'] : false;

        if( $this->atts['responsive'] !== true && $thumbnail_width && $thumbnail_height ){
            $video_html = '<iframe src="//fast.wistia.net/embed/iframe/'. esc_attr( $this->atts['id'] ).'" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="'.intval( $thumbnail_width ).'" height="'.intval( $thumbnail_height ).'"></iframe>';
        }else{
            $video_html = '<iframe src="//fast.wistia.net/embed/iframe/'. esc_attr( $this->atts['id'] ).'?videoFoam=true" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="100%" height="100%"></iframe>';
        }

        return self::maybe_build_video_responsive_wrapper( $video_html );
    }

} // End Class