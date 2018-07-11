<?php 

class Marcus_Hiles_Wistia_Embeds_Shortcode {

    public $shortcode_tag = 'mh_wistia_embed';
 

    function __construct( $args = array() ){

        add_shortcode( $this->shortcode_tag, array( $this, 'shortcode_handler' ) );
    }
 

    function shortcode_handler($atts , $content = null){

        // Attributes
        extract( shortcode_atts(
            array(
                'id' => '',
                'embed_type' => 'inline',
                'animatethumbnail' => 'true',
                'responsive' => 'true',
                'height' => '',
                'width' => '',
                'player' => 'js',
            ), $atts )
        );
 
         // Clean attributes
        $type = in_array( $embed_type, array( 'inline', 'popover' ) ) ? $embed_type : 'inline';
        $player = in_array( $player, array( 'js', 'iframe' ) ) ? $player : 'js';
        $hashid = esc_attr( trim( $id ) );
        $animatethumbnail = ( $animatethumbnail == 'true' ) ? true : false;
        $responsive = ( $responsive == 'true' ) ? true : false;
        $height = ( intval( $height ) > 1 ) ? $height : '';
        $width = ( intval( $width ) > 1 ) ? $width : '';

         // Build array for video
        $video_atts = array (
            'id'               => $hashid,
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
        return '';
    }

} //end class

new Marcus_Hiles_Wistia_Embeds_Shortcode();
