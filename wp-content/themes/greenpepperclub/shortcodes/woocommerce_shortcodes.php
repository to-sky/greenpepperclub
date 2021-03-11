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
        <div class="col-md-12 col-12">
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

		foreach ( $datesInput as $key => $dates ) {
			$fdatedisplay = strtoupper( explode( ' ', $dates )[0] ) . ' <span>' . explode( ' ', $dates )[1] . ' ' . ordinal( explode( ' ', $dates )[2] ) . '</span>';
			?>
            <div class="col-md-12 col-12" style="">
                <div class="radiobox-full">
                    <input id="date<?php echo $key; ?>" type="radio" name="date" value="<?php echo $dates; ?>"
                           required onchange="enabledBtn()"/>
                    <label for="date<?php echo $key; ?>" class="frmLbl"><p><?php echo $fdatedisplay; ?></p></label>
                </div>
            </div>
			<?php
			$split_dates .= $dates . ' - ';
		}
		$split_dates = rtrim( $split_dates, ' - ' );
		?>

        <div class="col-md-12 col-12">

            <div class="radiobox-full">
                <input id="date5" type="radio" name="date" value="SPLIT :<?php echo $split_dates; ?>" required
                       onchange="enabledBtn()"/>

                <label for="date5" class="frmLbl" style="padding: 0;"><p><span class="text-uppercase"
                                                                               style="font-family: 'Montserrat-SemiBold';">Chef’s Choice - Split Order</span>
                        <span class="font-montserrat-regular food-font24"> + $5.99</span></p></label>
            </div>
        </div>
        <div class="col-md-12 col-12">
            <h2 class="food-txt-uppercase text-center font-montserrat-semibold">Delivery time</h2>
        </div>
        <div class="col-md-12 col-12" style="">
            <div class="radiobox-full">
                <input id="date6" type="radio" name="time" value="<?php echo $delivery_time_morning; ?>" required
                       onchange="enabledBtn()"/>
                <label for="date6" class="frmLbl"><p><?php echo $delivery_time_morning; ?></p></label>
            </div>
        </div>
        <div class="col-md-12 col-12">
            <div class="radiobox-full">
                <input id="date7" type="radio" name="time" value="<?php echo $delivery_time_evening; ?>" required
                       onchange="enabledBtn()"/>
                <label for="date7" class="frmLbl"><p><?php echo $delivery_time_evening; ?></p></label>
            </div>
        </div>
        <div class="hidden">
            <input type="hidden" name="food_items_ids" id="food_item_ids" value="" onchange="enabledBtn()"/>
            <input type="hidden" name="food_items" id="food_items" value="" onchange="enabledBtn()"/>
            <input type="hidden" name="food_items_qty" id="food_items_qty" value="" onchange="enabledBtn()"/>
        </div>
        <div class="col-md-12 col-12 food-mt20">
            <button class="btn btn-primary btn-block" type="button" onclick="ValidateForm(this)" disabled id="nextBtn">
                BUILD YOUR MENU
            </button>
        </div>
        <script>
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

                    jQuery('form.cart').addClass('hidden');
                    jQuery('.food-items').removeClass('hidden');
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


add_shortcode( 'food_item_listing', 'food_item_listing' );
function food_item_listing( $atts ) {

	$atts = shortcode_atts( array( 'product_id' => 0, ), $atts );

	$product_id = $atts['product_id'];
	$min_qty    = get_post_meta( $product_id, 'product_minimum_quantity', true );

	$args = array(
		'post_type'      => 'food_items',
		'post_status'    => 'publish',
		'posts_per_page' => - 1,
		'orderby'        => 'ID',
		'order'          => 'ASC',
	);

	$loop = new WP_Query( $args ); ?>
    <div class="row">
		<?php while ( $loop->have_posts() ) : $loop->the_post();
			$thumb = get_field( 'thumb_image', get_the_ID(), true );
			?>

            <div id="itemModal-<?php the_ID(); ?>" class="modal fade" role="dialog">
                <div class="modal-dialog modal-md">

                    <!-- Modal content-->
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal"
                                    style="position:absolute;right:20px;">&times;
                            </button>
                            <h4 class="modal-title food-mt0"><?php the_title(); ?></h4>
                        </div>
                        <div class="modal-body">
                            <p><?php the_content(); ?></p>
                            <p>
								<?php
								$nutrients_and_minerals = get_field( 'nutrients_and_minerals', get_the_ID() );
								?>
                                <img src="<?php the_post_thumbnail_url( 'large' ); ?>"/>
                            <hr>
                            </p>
                            <div class="row text-center">
                                <div class="col col-3 ">
                                    <?php the_field( 'protein' ); ?>
                                    <h4 class="food-mt0 food-mb0">Protein</h4>
                                </div>
                                <div class="col col-3">
                                    <?php the_field( 'calories' ); ?>
                                    <h4 class="food-mt0 food-mb0">Calories</h4>
                                </div>
                                <div class="col col-3">
                                    <?php the_field( 'carbs' ); ?>
                                    <h4 class="food-mt0 food-mb0">Carbs</h4>
                                </div>
                                <div class="col col-3">
                                    <?php the_field( 'fats' ); ?>
                                    <h4 class="food-mt0 food-mb0">Fats</h4>
                                </div>
                            </div>
                            <p>
                            <hr>
                            <ul>
								<?php
								foreach ( get_field( 'nutrients_and_minerals' ) as $Nvalue ) { ?>
                                    <li><?php echo $Nvalue['nutrient']; ?></li>
								<?php } ?>
                            </ul>
                            <hr>
                            </p>
                            <p><?php the_field( 'ingredients' ); ?>
                            <hr>
                            </p>
                            <p><?php the_field( 'allergens' ); ?>
                            <hr>
                            </p>
                            <p><strong><?php echo get_the_excerpt(); ?></strong></p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-6 col-md-3 food-mb20">
                <div id="foodItem-<?php the_ID(); ?>" class="food-item">
                    <a href="javascript:void(0)" data-toggle="modal"
                       data-target="#itemModal-<?php the_ID(); ?>">
                        <p style="display: flex;width:100%;height:auto;" id="itemThumb-<?php the_ID(); ?>">
                            <img src="<?php echo $thumb; ?>" class="img-fluid"/>
                        </p>
                    </a>

                    <div class="food-item-content">
                        <div class="d-flex justify-content-around">
                            <button id="minusBtn<?php the_ID(); ?>"
                                    class="btn btn-primary gp-minus-btn"
                                    data-action="minus" disabled
                                    data-id="<?php the_ID(); ?>"
                            >&minus;</button>

                            <input class="fQty food-item-qty" type="text" id="qty-<?php the_ID(); ?>"
                                   value="0" readonly />

                            <button id="plusBtn<?php the_ID(); ?>"
                                    class="btn btn-primary gp-plus-btn"
                                    data-action="plus"
                                    data-id="<?php the_ID(); ?>"
                            >&plus;</button>
                        </div>

                        <h3 class="mb-0 text-center"
                            id="itemName-<?php the_ID(); ?>"><?php the_title(); ?></h3>
                    </div>
                </div>
            </div>
		<?php endwhile; ?>











        <script>
            /*
            1. Plus button
            add food item to cart
            if cart is full then block "+" buttons on all food items


            2. Minus button
            remove food item from cart
            if current product qty < 1 then remove from cart



            3. Remove from cart

            Need to get:
            - input $('#food_items') must be filled the Names of food items;
            - input $('#food_items_ids') must be filled the id's of food items;
            - input $('#food_items_qty') must be filled the qty of food items;
            */

            // Need for load maxItems variable
            // jQuery( document ).ready(function($) {
            //     let maxItems = parseInt($('#maxItems').text());
            //     let qtyItemsIntoCart = 0;
            //     let foodItems = [];
            //
            //     // Get all item id's into cart
            //     function getAllIdsIntoCart() {
            //         return foodItems.map(el => el.id);
            //     }
            //
            //     // Get item index into foodItems array
            //     function getItemIndexIntoCart(id) {
            //         return foodItems.findIndex(el => el.id === id);
            //     }
            //
            //     // Get qty items into cart by id
            //     function getQtyFromCartById(id, returnInteger = false) {
            //         let itemIndex = getItemIndexIntoCart(id);
            //
            //         if(foodItems[itemIndex] === undefined) {
            //             return returnInteger ? 0 : false;
            //         }
            //
            //         return foodItems[itemIndex].qty;
            //     }
            //
            //     // Update total quantity into "Your meals" block (cart label)
            //     function updateTotalQty() {
            //         $('#totalQty').text(qtyItemsIntoCart);
            //     }
            //
            //     // Check if cart is full
            //     function checkCartIsFull() {
            //         return qtyItemsIntoCart === maxItems;
            //     }
            //
            //     // Buttons handler
            //     $('body').on('click', '[data-action="plus"], [data-action="minus"], [data-action="delete"]', function (e) {
            //         let action = $(this).data('action');
            //         let id = $(this).data('id');
            //         let foodItem = $(`#foodItem-${id}`);
            //         let foodInput = $(`#qty-${id}`);
            //
            //         // Run action add to cart or remove from cart
            //         if (action === 'plus') {
            //             addToCart(id);
            //
            //             // Set active food item card and unblock minus button
            //             foodItem.addClass('active');
            //             foodItem.find('button[data-action="minus"]').prop('disabled', false);
            //         } else if (action === 'minus') {
            //             removeFromCart(id);
            //         } else if (action === 'delete') {
            //             dropFromCart(id);
            //         }
            //
            //         // Add qty value to current input
            //         foodInput.val(getQtyFromCartById(id, true))
            //
            //         // Set label with current qty into cart
            //         updateTotalQty();
            //
            //         let cartBtn = $(".cartBtn button");
            //
            //         // When cart is full
            //         if (checkCartIsFull()) {
            //             // Block all '+' buttons
            //             $('button[data-action="plus"]').prop('disabled', true);
            //
            //             // Fill all hidden inputs
            //             fillHiddenInputs();
            //
            //             // Enable 'Add to cart button'
            //             cartBtn.prop('disabled', false);
            //         } else {
            //             // Disable 'Add to cart button'
            //             cartBtn.prop('disabled', true);
            //             $('button[data-action="plus"]').prop('disabled', false);
            //         }
            //
            //         console.log(foodItems, qtyItemsIntoCart)
            //     });
            //
            //
            //     function fillHiddenInputs() {
            //         //     food_items_str = food_items.toString().replace(/,\s*$/, "");
            //         //     food_items_ids_str = food_items_ids.toString().replace(/,\s*$/, "");
            //         //     qty_str = qty.toString().replace(/,\s*$/, "");
            //
            //         // $('#food_item_ids').val(food_items_ids_str);
            //         // $('#food_items').val(food_items_str);
            //         // $('#food_items_qty').val(qty_str);
            //     }
            //
            //
            //     // Add food item to cart
            //     function addToCart(id) {
            //         if (checkCartIsFull()) {
            //             return false;
            //         }
            //
            //         if (! getQtyFromCartById(id)) {
            //             foodItems.push({id: id, qty: 1});
            //
            //             // Add HTML block to cart items
            //             $('#cartItems').append(createCartItem(id));
            //         } else {
            //
            //             foodItems[getItemIndexIntoCart(id)].qty++;
            //
            //             $(`#cartItemQty-${id}`).text(foodItems[getItemIndexIntoCart(id)].qty);
            //         }
            //
            //         // Update qty items into cart
            //         qtyItemsIntoCart++;
            //
            //         return true;
            //     }
            //
            //
            //     // Remove food item from cart
            //     function removeFromCart(id) {
            //         let itemIndexIntoCart = getItemIndexIntoCart(id);
            //
            //         if (qtyItemsIntoCart === 0 || itemIndexIntoCart === -1) {
            //             return false;
            //         }
            //
            //         if(getQtyFromCartById(id) === 1) {
            //             foodItems.splice(itemIndexIntoCart, 1);
            //             $(`#cartItem-${id}`).remove();
            //
            //             let foodItem = $(`#foodItem-${id}`);
            //             foodItem.removeClass('active');
            //             foodItem.find('button[data-action="minus"]').prop('disabled', true);
            //             foodItem.find('button[data-action="plus"]').prop('disabled', false);
            //         } else {
            //             foodItems[itemIndexIntoCart].qty--;
            //
            //             $(`#cartItemQty-${id}`).text(foodItems[getItemIndexIntoCart(id)].qty);
            //         }
            //
            //         // Update qty items into cart
            //         qtyItemsIntoCart--;
            //
            //         return true;
            //     }
            //
            //     // Remove from cart food item with all quantity
            //     function dropFromCart(id) {
            //         let itemIndexIntoCart = getItemIndexIntoCart(id);
            //
            //         qtyItemsIntoCart -= foodItems[itemIndexIntoCart].qty;
            //
            //         foodItems.splice(itemIndexIntoCart, 1);
            //
            //         $(`#cartItem-${id}`).remove();
            //
            //         let foodItem = $(`#foodItem-${id}`);
            //         foodItem.removeClass('active');
            //         foodItem.find('button[data-action="minus"]').prop('disabled', true);
            //
            //         return true;
            //     }
            //
            //     // Create HTML food item for cart block
            //     function createCartItem(id) {
            //         let itemThumbnail = $('#itemThumb-' + id).html();
            //         let itemName = $('#itemName-' + id).html();
            //
            //         return `<div class="d-flex p-3 justify-content-between bg-white border-top" id="cartItem-${id}">
            //                     <div class="d-flex flex-column-reverse justify-content-around align-items-center">
            //                         <button class="btn btn-primary gp-minus-btn gp-sm-btn" data-action="minus" data-id="${id}">&minus;</button>
            //                          <span id="cartItemQty-${id}" class="d-inline-block">${getQtyFromCartById(id)}</span>
            //                         <button class="btn btn-primary gp-plus-btn gp-sm-btn" data-action="plus" data-id="${id}">&plus;</button>
            //                     </div>
            //
            //                     <div class="w-25 px-3">${itemThumbnail}</div>
            //
            //                     <div class="d-flex align-items-center flex-fill justify-content-between">
            //                         <span class="pr-3 d-inline-block food-font14">${itemName}</span>
            //                         <i class="fas fa-times gp-delete-btn" data-action="delete" data-id="${id}"></i>
            //                     </div>
            //                 </div>`;
            //     }
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //     // var food_items = [];
            //     // var food_items_ids = [];
            //     // var qty = [];
            //
            //
            //     // function updateQty(obj,iItemId,min_qty,item){
            // //     var plusBtn = $('button[data-action="plus"]');
            // //
            // //     // Current quantity of the food item into cart
            // //     var currentQty= parseInt($('#qty-'+iItemId).val());
            // //     var action=$(obj).data('action');
            // //     var fQty = 0;
            // //     var food_items_str = '';
            // //     var food_items_ids_str = '';
            // //     var qty_str = '';
            // //
            // //     // Get all values from inputs
            // //     $('.fQty').each(function () {
            // //         fQty += parseInt($(this).val());
            // //     });
            // //
            // //     // Find current food name into food_items array
            // //     var index = food_items.indexOf(item);
            // //
            // //     // console.log(food_items)
            // //
            // //     // Decrease
            // //     if (action == 'minus' && currentQty > 0) {
            // //         currentQty--;
            // //         $('#qty-' + iItemId).val(currentQty);
            // //         $('#cartItemQty-' + iItemId).html(currentQty);
            // //
            // //         if (index > -1 && currentQty == 0) {
            // //             food_items.splice(index, 1);
            // //             food_items.filter(val => val);
            // //
            // //             qty.splice(index, 1);
            // //             qty.filter(val => val);
            // //
            // //             food_items_ids.splice(index, 1);
            // //             food_items_ids.filter(val => val);
            // //
            // //             $('#cartItm' + iItemId).remove();
            // //
            // //             var foodItem = $('#foodItem-' + iItemId);
            // //             $(foodItem).removeClass('active');
            // //             $(foodItem).find('.fQty').val(0);
            // //             $(foodItem).find('button[data-action="minus"]').prop('disabled', true);
            // //             $(foodItem).find('button[data-action="plus"]').prop('disabled', false);
            // //
            // //         } else {
            // //             qty[index] = currentQty;
            // //             // qty.filter(val => val);
            // //         }
            // //     }
            // //
            // //     // Increase
            // //     if (action == 'plus' && currentQty < min_qty && fQty < min_qty) {
            // //         currentQty++;
            // //         $('#qty-' + iItemId).val(currentQty);
            // //         $('#cartItemQty-' + iItemId).html(currentQty);
            // //
            // //         console.log(food_items, index)
            // //
            // //         // Check if food into food_items array
            // //         // If food not exists, then add it to cart
            // //         if (index === -1) {
            // //             food_items.push(item);
            // //             food_items_ids.push(iItemId);
            // //             qty.push(currentQty);
            // //
            // //             console.log(food_items, food_items_ids, qty)
            // //
            // //             var itemThumb = $('#itemThumb-' + iItemId).html();
            // //             var itemName = $('#itemName-' + iItemId).html();
            // //
            // //             index = food_items.indexOf(item);
            // //
            // //             console.log(food_items, index)
            // //
            // //             $('.cartItems').append(
            // //                 '<div style="position:relative" class="food-bg-white food-mb10" id="cartItm' + iItemId + '">' +
            // //                 '<span>' + itemThumb + '</span>' +
            // //                 '<span>' + itemName + '<a onclick="removeFromCart(' + iItemId + ',' + index + ',' + min_qty + ')" href="javascript:void(0);">&times;</a>' +
            // //                 '<div class="row no-gutters crtQtyDiv">' +
            // //                 '<div class="col col-4">' +
            // //                 '<button class="btn btn-primary gp-minus-btn" data-action="minus" onclick="updateQty(this,' + iItemId + ',' + min_qty + ',\'' + item + '\')">&minus;</button>' +
            // //                 '</div>' +
            // //                 '<div class="col col-4">' +
            // //                 '<span id="cartItemQty-' + iItemId + '">' + currentQty + '</span>' +
            // //                 '</div><div class="col col-4">' +
            // //                 '<button class="btn btn-primary gp-plus-btn" data-action="plus" onclick="updateQty(this,' + iItemId + ',' + min_qty + ',\'' + item + '\')">&plus;</button>' +
            // //                 '</div>' +
            // //                 '</div>' +
            // //                 '</span>' +
            // //                 '</div>'
            // //             );
            // //         } else {
            // //             qty[index] = currentQty;
            // //             // qty.filter(val => val);
            // //         }
            // //     }
            // //
            // //     // console.log(qty.toString())
            // //     // console.log(qty.toString().replace(/,\s*$/, ""))
            // //
            // //
            // //     food_items_str = food_items.toString().replace(/,\s*$/, "");
            // //     food_items_ids_str = food_items_ids.toString().replace(/,\s*$/, "");
            // //     qty_str = qty.toString().replace(/,\s*$/, "");
            // //
            // //     $('#food_items').val(food_items_str);
            // //     $('#food_item_ids').val(food_items_ids_str);
            // //     $('#food_items_qty').val(qty_str);
            // //
            // //     fQty = 0;
            // //     $('.fQty').each(function () {
            // //         fQty += parseInt($(this).val());
            // //     });
            // //     $('#totalQty').html(fQty);
            // //
            // //     $(".cartBtn button").attr('disabled','disabled');
            // //     if(fQty == min_qty){
            // //         $(".cartBtn button").removeAttr('disabled');
            // //     //     $([document.documentElement, document.body]).animate({
            // //     //         scrollTop: $("#cartBtnDiv").offset().top - 160
            // //     //     }, 500);
            // //     }
            // //
            // //     var plusBtnDisabled = false;
            // //     if(fQty == min_qty){
            // //         plusBtnDisabled = true;
            // //     }
            // //
            // //     $(plusBtn).each(function (i, el) {
            // //         $(el).prop('disabled', plusBtnDisabled);
            // //     });
            // //
            // //     var foodItem = $(obj).closest('.food-item');
            // //     var foodItemMinusBtn = foodItem.find('button[data-action="minus"]')
            // //     if (currentQty > 0) {
            // //         foodItem.addClass('active');
            // //         foodItemMinusBtn.prop('disabled', false)
            // //     } else {
            // //         foodItem.removeClass('active');
            // //         foodItemMinusBtn.prop('disabled', true)
            // //     }
            // // }
            //
            //
            //
            // // function removeFromCart(iItemId, index, min_qty) {
            // //     $('#cartItm' + iItemId).remove();
            // //     $('#qty-' + iItemId).val(0);
            // //
            // //     var food_items_str = '';
            // //     var food_items_ids_str = '';
            // //     var qty_str = '';
            // //
            // //     if (index > -1) {
            // //         food_items.splice(index, 1);
            // //         qty.splice(index, 1);
            // //         food_items_ids.splice(index, 1);
            // //
            // //         var foodItem = $('#foodItem-' + iItemId);
            // //         $(foodItem).removeClass('active');
            // //         $(foodItem).find('button[data-action="minus"]').prop('disabled', true);
            // //         $(foodItem).find('button[data-action="plus"]').prop('disabled', false);
            // //     }
            // //
            // //     food_items_str = food_items.toString().replace(/,\s*$/, "");
            // //     food_items_ids_str = food_items_ids.toString().replace(/,\s*$/, "");
            // //     qty_str = qty.toString().replace(/,\s*$/, "");
            // //
            // //     $('#food_items').val(food_items_str);
            // //     $('#food_item_ids').val(food_items_ids_str);
            // //     $('#food_items_qty').val(qty_str);
            // //
            // //     fQty = 0;
            // //     $('.fQty').each(function () {
            // //         fQty += parseInt($(this).val());
            // //     });
            // //     $('#totalQty').html(fQty);
            // //
            // //     $(".cartBtn button").attr('disabled', 'disabled');
            // //     if (fQty == min_qty) {
            // //         $(".cartBtn button").removeAttr('disabled');
            // //     }
            // // }
            //
            // }); // close document ready
        </script>
    </div>
	<?php wp_reset_postdata();
}


// add the filter 
add_filter( 'woocommerce_add_cart_item_data', 'filter_woocommerce_add_cart_item_data', 10, 3 );

// define the woocommerce_add_cart_item_data callback 
function filter_woocommerce_add_cart_item_data( $cart_item_data, $product_id, $variation_id ) {
	// make filter magic happen here...
	$new_value['date']           = $_POST['date'];
	$new_value['time']           = $_POST['time'];
	$new_value['food_items_ids'] = $_POST['food_items_ids'];
	$new_value['food_items']     = $_POST['food_items'];
	$new_value['food_items_qty'] = $_POST['food_items_qty'];

	return array_merge( $cart_item_data, $new_value );
}


add_filter( 'woocommerce_cart_item_name', 'spwc_show_cart_ordered_service_info', 10, 3 );
function spwc_show_cart_ordered_service_info( $name, $cart_item, $cart_item_key ) {
	if ( isset( $cart_item['food_items'] ) ) {
		$aItems = explode( ',', $cart_item['food_items'] );
		$aIds   = explode( ',', $cart_item['food_items_ids'] );
		$aQtys  = explode( ',', $cart_item['food_items_qty'] );

		$name   .= '<table><tr><th>Meal</th><th>Name</th><th>Quantity</th></tr>';
		foreach ( $aItems as $key => $item ) {
			$itemSrc = get_the_post_thumbnail_url( $aIds[ $key ], 'thumbnail' );
			$name    .= '<tr><td><img src="' . $itemSrc . '" style="width:50px" /></td><td>' . $item . '</td><td>' . $aQtys[ $key ] . '</td></tr>';
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
	// action...
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


// Topbar notification slider
add_shortcode( 'notification_slider', 'notification_slider' );
function notification_slider() {

	$args = array(
		'post_type'      => 'notofication',
		'post_status'    => 'publish',
		'posts_per_page' => - 1,
		'orderby'        => 'ID',
		'order'          => 'ASC',
	);

	$loop = new WP_Query( $args ); ?>
    <div id="notific1" class="notification1">
        <div class="grid-container">
            <div class="notification-carousel text-center" style="">
				<?php while ( $loop->have_posts() ) : $loop->the_post(); ?>
                    <div class="text-center" style="width: 100%!important;">
                        <div class="news-slide" style="width: 100%; display: inline-block;">
                            <p class="food-font16 food-mt0 font-montserrat-semibold text-white"
                               style="width: 100%!important;"><?php echo get_the_content(); ?></p>
                        </div>
                    </div>

				<?php endwhile; ?>
				<?php wp_reset_postdata(); ?>
            </div>
        </div>
    </div>

    <script>
        jQuery(document).ready(function ($) {
            $('.notification-carousel').slick({
                initialSlide: 0,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                margin: 0,
                dots: false,
                arrows: true,
                centerMode: true,
                adaptiveHeight: true,
                infinite: true,
                variableWidth: true,
                lazyLoad: 'ondemand',
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            centerMode: true,
                            variableWidth: true,
                            infinite: true

                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            centerMode: true,
                            variableWidth: true,
                            infinite: true

                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            centerMode: true,
                            variableWidth: true,
                            infinite: true
                        }
                    }
                ]
            });
        });
    </script>
	<?php
}

