<?php
remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_meta', 40 );


/**
 * Add food items data to the cart
 */
add_filter( 'woocommerce_add_cart_item_data', 'gp_woocommerce_add_cart_item_data', 10, 3 );
function gp_woocommerce_add_cart_item_data( $cart_item_data, $product_id, $variation_id ) {
	$food_items = $_POST['food_items'] ?? false;

	if ( ! $food_items || empty( $food_items ) ) {
		return $cart_item_data;
	}

	$data['date'] = $_POST['date'];
	$data['time'] = $_POST['time'];
	$data['food_items'] = json_decode(str_replace('\\', '', $food_items), true);

	return array_merge( $cart_item_data, $data );
}


/**
 * Show Meal plan product with food items in the cart and checkout page
 */
add_filter( 'woocommerce_cart_item_name', 'gp_woocommerce_cart_item_name', 10, 3 );
function gp_woocommerce_cart_item_name( $name, $cart_item, $cart_item_key ) {
	if ( ! isset( $cart_item['food_items'] ) ) {
		return $name;
	}

	$date = $cart_item['date'];
	$time = $cart_item['time'];
	$food_items = $cart_item['food_items'];

	ob_start();

	get_template_part( 'template-parts/content', 'meal-plan-cart-item', compact( 'food_items', 'name', 'date', 'time' ) );

	return ob_get_clean();
}


/**
 * Add custom data to order for Meal plan product
 */
add_action( 'woocommerce_checkout_create_order_line_item', 'gp_woocommerce_checkout_create_order_line_item', 10, 4 );
function gp_woocommerce_checkout_create_order_line_item( $item, $cart_item_key, $values, $order ) {
	if ( isset( $values['food_items'] ) ) {

		$meta  = '';
		foreach ($values['food_items'] as $food_item) {
			$meta .= $food_item['name'] . " - " . $food_item['qty'] . "<br>";
		}

		$item->add_meta_data( __( 'Food Item Name', 'wp-bootstrap-starter' ), $meta, true );
		$item->add_meta_data( __( 'Delivery Date', 'wp-bootstrap-starter' ), $values['date'], true );
		$item->add_meta_data( __( 'Delivery Time', 'wp-bootstrap-starter' ), $values['time'], true );
	}
}


/**
 * Add extra cost to the order with "Chef's choice - split order" option
 */
add_action( 'woocommerce_before_calculate_totals', 'gp_woocommerce_before_calculate_totals' );
function gp_woocommerce_before_calculate_totals( $cart_object ) {
	global $woocommerce;

	$cart_items = $cart_object->get_cart();
	$extra_cost = 0;

	foreach ( $cart_items as $item => $data ) {
		if ( isset( $data['date'] ) && strpos( $data['date'], 'SPLIT' ) !== false ) {
			$extra_cost = get_field( 'chef_choice_cost', $data['product_id'] );
		}
	}

	if ( $extra_cost > 0 ) {
		$woocommerce->cart->add_fee( __( 'Chef\'s Choice сost', 'wp-bootstrap-starter' ), $extra_cost );
	}

	return $cart_object;
}


/**
 * Redirect to cart if product in Meal plan category
 */
add_filter( 'woocommerce_add_to_cart_redirect', 'gp_woocommerce_add_to_cart_redirect', 10, 2 );
function gp_woocommerce_add_to_cart_redirect( $url, $adding_to_cart ) {
	if ( isset( $adding_to_cart ) && is_product_meal_plan( $adding_to_cart->get_id() ) ) {
		$url = wc_get_cart_url();
	}

	return $url;
}


/**
 * Message after added product to the cart (in Meal plan category)
 */
add_filter ( 'wc_add_to_cart_message_html', 'gp_wc_add_to_cart_message_html', 10, 2 );
function gp_wc_add_to_cart_message_html( $message, $products ) {
	foreach( $products as $product_id => $quantity ){
		$product = wc_get_product( $product_id );

		if( is_product_meal_plan( $product_id ) ){
			$added_text = sprintf( _n( '"%s" has been added to your cart.', '"%s" have been added to your cart.', $quantity, 'woocommerce' ), $product->get_title() );

			$message = sprintf(
				'<a href="%s" tabindex="1" class="button wc-forward">%s</a> %s',
				esc_url( get_meal_plans_url() ),
				esc_html__( 'Continue shopping', 'woocommerce' ),
				esc_html( $added_text )
			);
		}
	}

	return $message;
}


/**
 * Disable "Shop" page
 */
add_action( 'wp', 'gp_woocommerce_disable_shop_page' );
function gp_woocommerce_disable_shop_page() {
	global $post;

	if ( is_shop() ) {
		global $wp_query;

		$wp_query->set_404();
		status_header(404);
	}
}