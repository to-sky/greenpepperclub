<?php
remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_title', 5 );
remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_price', 10 );


// define the woocommerce_before_add_to_cart_button callback
add_action( 'woocommerce_before_add_to_cart_button', 'action_woocommerce_before_add_to_cart_button', 10, 0 );
function action_woocommerce_before_add_to_cart_button() {
	get_template_part( 'template-parts/content', 'single-product-food-listing' );
}


// define the woocommerce_add_cart_item_data callback
add_filter( 'woocommerce_add_cart_item_data', 'filter_woocommerce_add_cart_item_data', 10, 3 );
function filter_woocommerce_add_cart_item_data( $cart_item_data, $product_id, $variation_id ) {
	$new_value['date']            = $_POST['date'];
	$new_value['time']            = $_POST['time'];
	$new_value['food_item_ids']   = json_decode( $_POST['food_item_ids'] );
	$new_value['food_item_names'] = json_decode(str_replace('\\', '', $_POST['food_item_names']));
	$new_value['food_item_qty']   = json_decode( $_POST['food_item_qty'] );

	return array_merge( $cart_item_data, $new_value );
}


add_filter( 'woocommerce_cart_item_name', 'gp_show_cart_ordered_service_info', 10, 3 );
function gp_show_cart_ordered_service_info( $name, $cart_item, $cart_item_key ) {
	$name      = '';
	$foodItemIds = $cart_item['food_item_ids'];

	if ( isset( $foodItemIds ) ) {
		$name .= '<table><tr><th>Meal</th><th>Name</th><th>Quantity</th></tr>';
		foreach ( $foodItemIds as $key => $foodItemId ) {
			$foodImageUrl = get_the_post_thumbnail_url( $foodItemId, 'thumbnail' );
			$name .= '<tr><td><img src="' . $foodImageUrl . '" style="width:50px" /></td><td>' . $cart_item['food_item_names'][ $key ] . '</td><td>' . $cart_item['food_item_qty'][ $key ] . '</td></tr>';
		}
		$name .= '</table>';
	}

	return $name;
}


add_action( 'woocommerce_checkout_create_order_line_item', 'gp_add_custom_service_data_to_order', 10, 4 );
function gp_add_custom_service_data_to_order( $item, $cart_item_key, $values, $order ) {
	foreach ( $item as $cart_item_key => $value ) {
		if ( ! empty( $value['food_item_names'] ) && ! empty( $value['food_item_qty'] ) ) {
			$food_item_names = $value['food_item_names'];
			$food_item_qty = $value['food_item_qty'];
			$meta  = '';

			for ( $i = 0; $i < count( $food_item_names ); $i ++ ) {
				$meta .= $food_item_names[ $i ] . ' - ' . $food_item_qty[ $i ] . '<br>';
			}

			$item->add_meta_data( __( 'Food Item Name', 'socialplanet' ), $meta, true );
			$item->add_meta_data( __( 'Delivery Date', 'socialplanet' ), $value['date'], true );
			$item->add_meta_data( __( 'Delivery Time', 'socialplanet' ), $value['time'], true );
		}
	}
}


//remove quantity from all over
add_filter( 'woocommerce_is_sold_individually', 'wc_remove_all_quantity_fields', 10, 2 );
function wc_remove_all_quantity_fields( $return, $product ) {
	return true;
}


add_action( 'woocommerce_before_calculate_totals', 'wc_before_calculate_totals' );
function wc_before_calculate_totals( $cart_object ) {
	global $woocommerce;

	$cart_items          = $cart_object->get_cart();
	$extra_shipping_cost = 0;

	foreach ( $cart_items as $key => $value ) {
		if ( strpos( $value['date'], 'SPLIT' ) !== false ) {
			$extra_shipping_cost = get_field( 'chef_choice_cost', $value['product_id'] );
		}
	}

	if ( $extra_shipping_cost > 0 ) {
		$woocommerce->cart->add_fee( __( 'Shipping Cost', 'woocommerce' ), $extra_shipping_cost );
	}

	return $cart_object;
}


add_filter( 'woocommerce_add_to_cart_redirect', 'wc_redirect_checkout_add_cart' );
function wc_redirect_checkout_add_cart() {
	return wc_get_checkout_url();
}