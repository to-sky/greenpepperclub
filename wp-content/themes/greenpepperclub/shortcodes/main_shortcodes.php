<?php

/**
 * Show food listing
 */
add_shortcode( 'gp_food_item_listing', 'gp_food_item_listing' );
function gp_food_item_listing( $atts ) {
	$atts = shortcode_atts( array(
		'cart_buttons' => 0,
		'modal_order_button' => 1
	), $atts );

	$query = new WP_Query( [
		'post_type'      => 'food_items',
		'post_status'    => 'publish',
		'posts_per_page' => - 1,
		'orderby'        => 'ID',
		'order'          => 'ASC',
	] );

	$data = '<div class="row">';

	ob_start();

	while ( $query->have_posts() ) : $query->the_post();
		get_template_part( 'template-parts/content', 'food-item', $atts );
	endwhile;
	wp_reset_postdata();

	get_template_part( 'template-parts/modal', 'food-item', $atts );

	$data .= ob_get_clean() . '</div>';

	return $data;
}


/**
 * Testimonials slider
 */
add_shortcode( 'gp_testimonials_slider', 'gp_testimonials_slider' );
function gp_testimonials_slider() {
	$query = new WP_Query( [
		'post_type'   => 'testimonial',
		'post_status' => 'publish',
	] );

	$data = '';

	if ( $query->have_posts() ) {
		$data .= '<div class="gp-testimonials-container mb-5">';
		$data .= '<div id="gpTestimonialsSlider" class="gp-testimonials">';

		while ( $query->have_posts() ) {
			$query->the_post();
			$data .= '<div class="gp-testimonial-item mx-3 p-4 text-center">
						<div class="gp-testimonial-content">
                            <div class="gp-testimonial-symbol gp-icon-quote mb-4"></div>';

			$data .= '<div class="gp-testimonial-text mb-5" data-mh="testimonial-text">' . get_the_content() . '</div>';
			$data .= '<div class="gp-testimonial-author" data-mh="testimonial-author">' . get_the_title() . '</div>';
			$data .= '<div class="gp-testimonial-company"  data-mh="testimonial-company">' . get_field( 'company' ) . '</div>';
			$data .= '</div>'; // gp-testimonial-content
			$data .= '</div>'; // gp-testimonial-item
		}

		wp_reset_postdata();
		$data .= '</div>'; // gp-testimonials-container
		$data .= '</div>'; // gp-testimonials
	}

	return $data;
}


/**
 * Countdown timer
 */
add_shortcode( 'gp_countdown_timer', 'gp_countdown_timer' );
function gp_countdown_timer() {
	$data = ' <div id="countdownTimerContainer">
                    <div class="text-center" id="countdownTimer">
                        <div class="days"></div>
                        <div class="hours"></div>
                        <div class="minutes"></div>
                        <div class="seconds"></div>
                    </div>
                </div>';

	$data .= "<script>
				jQuery(document).ready(function($) {
                	let deadline = '" . getNextDeliveryDeadline() . "';
                	
					runCountdownTimer($('#countdownTimer'), deadline);
			    });
            </script>";

	return $data;
}


/**
 * Google map delivery zone
 */
add_shortcode( 'gp_delivery_map', 'gp_delivery_map' );
function gp_delivery_map() {
	return '<div id="deliveryMap"></div>';
}