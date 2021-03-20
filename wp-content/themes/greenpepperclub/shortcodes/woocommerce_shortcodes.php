<?php
function ordinal( $number ) {
	$ends = array( 'th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th' );
	if ( ( ( $number % 100 ) >= 11 ) && ( ( $number % 100 ) <= 13 ) ) {
		return $number . '<sup>th</sup>';
	} else {
		return $number . '<sup>' . $ends[ $number % 10 ] . '</sup>';
	}
}

// add the action
add_action( 'woocommerce_before_add_to_cart_button', 'action_woocommerce_before_add_to_cart_button', 10, 0 );
// define the woocommerce_before_add_to_cart_button callback 
function action_woocommerce_before_add_to_cart_button() { ?>
	<?php
	$product_id = get_the_ID();
	$delivery_time_morning = get_field( 'delivery_time_morning', $product_id, true );
	$delivery_time_evening = get_field( 'delivery_time_evening', $product_id, true );
	?>

    <div class="row">
        <div class="col-12">
            <h2 class="food-txt-uppercase text-center font-montserrat-semibold">Select a delivery date</h2>
        </div>

		<?php
		$split_dates        = '';
		$food_delivery_days = get_field( 'food_delivery_days', $product_id, true );
		$datesInput = array();

		foreach ( $food_delivery_days as $key => $f_delivery_days ) {
			$delivery_days  = (int) $f_delivery_days['required_no_of_days'];
			$f_delivery_day = date( 'l', strtotime( "+$delivery_days days" ) );

			if ( $f_delivery_day == $f_delivery_days['delivery_day'] ) {
				$delivery_days = (int) $f_delivery_days['required_no_of_days'] + 7;
				$date1         = ( date( 'l F d', strtotime( "+$delivery_days days" ) ) );
			} else {
				for ( $i = 1; $i <= 7; $i ++ ) {
					$delivery_days  = (int) $f_delivery_days['required_no_of_days'] + $i;
					$f_delivery_day = date( 'l', strtotime( "+$delivery_days days" ) );
					if ( $f_delivery_day == $f_delivery_days['delivery_day'] ) {
						$date1 = ( date( 'l F d', strtotime( "+$delivery_days days" ) ) );
						break;
					}
				}
			}
			$datesInput[] = $date1;
		}

		usort( $datesInput, function ( $item1, $item2 ) {
			return strtotime( $item1 ) <=> strtotime( $item2 );
		} );

//		dd(getNextDeliveryDeadline());

//		dd($datesInput);

//		dd(getSortedDeliveryDataForProduct($product_id));

		foreach ( $datesInput as $key => $dates ) {
			$fdatedisplay = strtoupper( explode( ' ', $dates )[0] ) . ' <span>' . explode( ' ', $dates )[1] . ' ' . ordinal( explode( ' ', $dates )[2] ) . '</span>';
			?>
            <div class="col-12" style="">
                <div class="radiobox-full">
                    <input id="date<?php echo $key; ?>" type="radio" name="date" value="<?php echo $dates; ?>"
                           required onchange="enabledBtn()"/>
                    <label for="date<?php echo $key; ?>" class="frmLbl">
                        <p><?php echo $fdatedisplay; ?></p>
                    </label>
                </div>
            </div>
			<?php
			$split_dates .= $dates . ' - ';
		}
		$split_dates = rtrim( $split_dates, ' - ' );
		?>

        <div class="col-12">

            <div class="radiobox-full">
                <input id="date5" type="radio" name="date" value="SPLIT :<?php echo $split_dates; ?>" required
                       onchange="enabledBtn()"/>

                <label for="date5" class="frmLbl" style="padding: 0;"><p><span class="text-uppercase"
                                                                               style="font-family: 'Montserrat-SemiBold';">Chef’s Choice - Split Order</span>
                        <span class="font-montserrat-regular food-font24"> + $5.99</span></p></label>
            </div>
        </div>

        <div class="col-12">
            <h2 class="food-txt-uppercase text-center font-montserrat-semibold">Delivery time</h2>
        </div>
        <div class="col-12" style="">
            <div class="radiobox-full">
                <input id="date6" type="radio" name="time" value="<?php echo $delivery_time_morning; ?>" required
                       onchange="enabledBtn()"/>
                <label for="date6" class="frmLbl"><p><?php echo $delivery_time_morning; ?></p></label>
            </div>
        </div>
        <div class="col-12">
            <div class="radiobox-full">
                <input id="date7" type="radio" name="time" value="<?php echo $delivery_time_evening; ?>" required
                       onchange="enabledBtn()"/>
                <label for="date7" class="frmLbl"><p><?php echo $delivery_time_evening; ?></p></label>
            </div>
        </div>

        <div class="hidden">
            <input type="hidden" name="food_items_ids" id="food_item_ids" required />
            <input type="hidden" name="food_items" id="food_items" required />
            <input type="hidden" name="food_items_qty" id="food_items_qty" required />
        </div>

        <div class="col-12 food-mt20">
            <button class="btn btn-primary btn-block" type="button" onclick="ValidateForm(this)" disabled id="nextBtn">
                BUILD YOUR MENU
            </button>
        </div>
        <script>
            let product_id = localStorage.getItem('product_id');

            function enabledBtn() {
                var dateCheck = false;
                var timeCheck = false;
                var date = document.getElementsByName('date');
                var time = document.getElementsByName('time');

                for (var i = 0; i < date.length; i++) {
                    if (date[i].checked) {
                        dateCheck = true;
                        break;
                    }
                }
                for (var i = 0; i < time.length; i++) {
                    if (time[i].checked) {
                        timeCheck = true;
                        break;
                    }
                }

                if (dateCheck && timeCheck) {
                    jQuery('#nextBtn').removeAttr('disabled');
                }
            }

            function ValidateForm(obj) {

                var dateCheck = false;
                var timeCheck = false;
                var date = document.getElementsByName('date');
                var time = document.getElementsByName('time');

                for (var i = 0; i < date.length; i++) {
                    if (date[i].checked) {
                        dateCheck = true;
                        break;
                    }
                }
                for (var i = 0; i < time.length; i++) {
                    if (time[i].checked) {
                        timeCheck = true;
                        break;
                    }
                }

                if (dateCheck && timeCheck) {

                    jQuery('#primary').addClass('hidden');
                    jQuery('#test').removeClass('hidden');
                    if (product_id > 0) {
                        jQuery('#plusBtn' + product_id).click();
                        localStorage.removeItem('product_id');
                    }
                }
            }

            jQuery(document).ready(function () {
                jQuery('.fQty').each(function () {
                    jQuery(this).prop('readonly', false);
                    jQuery(this).val(0);
                    jQuery(this).prop('readonly', true);
                    jQuery(".cartBtn button").attr('disabled', 'disabled');
                });
            });
        </script>
    </div>
<?php }

// Show food listing
add_shortcode( 'food_item_listing', 'food_item_listing' );
function food_item_listing( $atts ) {
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
        get_template_part( 'template-parts/food', 'listing', $atts );
    endwhile;
	wp_reset_postdata();

	get_template_part( 'template-parts/modal', 'food-item', $atts );

    $data .= ob_get_clean() . '</div>';

	return $data;
}


// define the woocommerce_add_cart_item_data callback
add_filter( 'woocommerce_add_cart_item_data', 'filter_woocommerce_add_cart_item_data', 10, 3 );
function filter_woocommerce_add_cart_item_data( $cart_item_data, $product_id, $variation_id ) {
	$new_value['date']           = $_POST['date'];
	$new_value['time']           = $_POST['time'];
	$new_value['food_items_ids'] = $_POST['food_items_ids'];
	$new_value['food_items']     = $_POST['food_items'];
	$new_value['food_items_qty'] = $_POST['food_items_qty'];

	return array_merge( $cart_item_data, $new_value );
}


add_filter( 'woocommerce_cart_item_name', 'spwc_show_cart_ordered_service_info', 10, 3 );
function spwc_show_cart_ordered_service_info( $name, $cart_item, $cart_item_key ) {
    $name = '';

	if ( isset( $cart_item['food_items'] ) ) {
		$foodIds   = is_array($cart_item['food_items_ids']) ? explode( ',', $cart_item['food_items_ids'] ) : $cart_item['food_items_ids'];
		$foodQty   = is_array($cart_item['food_items_qty']) ? explode( ',', $cart_item['food_items_qty'] ) : $cart_item['food_items_qty'];
		$foodNames = is_array($cart_item['food_items']) ? explode( ',', $cart_item['food_items'] ) : $cart_item['food_items'];

		$name .= '<table><tr><th>Meal</th><th>Name</th><th>Quantity</th></tr>';
		if (!  is_array($foodIds) ) {
			$foodImageUrl = get_the_post_thumbnail_url( $foodIds, 'thumbnail' );
			$name .= '<tr><td><img src="' . $foodImageUrl . '" style="width:50px" /></td><td>' . $foodNames . '</td><td>' . $foodQty . '</td></tr>';
        } else {
			foreach ( $foodNames as $key => $item ) {
				$foodImageUrl = get_the_post_thumbnail_url( $foodIds[ $key ], 'thumbnail' );
				$name .= '<tr><td><img src="' . $foodImageUrl . '" style="width:50px" /></td><td>' . $item . '</td><td>' . $foodQty[ $key ] . '</td></tr>';
			}
        }

		$name .= '</table>';
	}

	return $name;
}


add_action( 'woocommerce_checkout_create_order_line_item', 'spwc_add_custom_service_data_to_order', 10, 4 );
function spwc_add_custom_service_data_to_order( $item, $cart_item_key, $values, $order ) {
	foreach ( $item as $cart_item_key => $value ) {
		if ( ! empty( $value['food_items'] ) && ! empty( $value['food_items_qty'] ) ) {
			$food_items     = explode( ',', $value['food_items'] );
			$food_items_qty = explode( ',', $value['food_items_qty'] );
			$meta           = '';

			for ( $i = 0; $i < count( $food_items ); $i ++ ) {
				$meta .= $food_items[ $i ] . ' - ' . $food_items_qty[ $i ] . '<br>';
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
			$extra_shipping_cost = 5.99;
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