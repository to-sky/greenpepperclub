<?php
/**
 * Food listing template part for single product page
 */


$deliveryDate = '';
$deliveryTime = '';

if ($_GET) {
    $deliveryDate = $_GET['date'];
    $deliveryTime = $_GET['time'];
}
?>

<input type="hidden" id="date" name="date" value="<?php echo $deliveryDate; ?>">
<input type="hidden" id="date" name="time" value="<?php echo $deliveryTime; ?>">

<input type="hidden" name="food_item_ids" id="food_item_ids">
<input type="hidden" name="food_item_names" id="food_item_names">
<input type="hidden" name="food_item_qty" id="food_item_qty">


<section id="primary" class="content-area h-100">
    <main id="main" class="site-main h-100" role="main">
        <div class="container-fluid h-100">
            <div id="foodItems" class="food-items-container row mb-5 mb-lg-0 h-100">
                <!-- Food items -->
                <div class="col-12 col-lg-8 col-xl-9 order-1 order-lg-0 mt-lg-0 food-items h-100">
                    <h2 class="food-items-title">Select your meals</h2>
                    <div class="mb-5 mb-lg-0">
						<?php echo do_shortcode( '[gp_food_item_listing cart_buttons=1 modal_order_button=0]' ); ?>
                    </div>
                </div>

                <!-- Cart items -->
                <div class="col-12 col-lg-4 col-xl-3 order-0 order-lg-1 cart-items-container shadow-sm">
                    <h2 class="cart-items-title border-bottom">
                        <span>Your Meals</span>
                        <span id="cartQtyCounter" class="cart-qty-counter">
                                <span id="totalQty">0</span>
                                <span class="px-1">of</span>
                                <span id="maxItems"><?php echo get_post_meta( get_the_ID(), 'product_minimum_quantity', true ); ?></span>
                                <span class="d-lg-none food-font11 pl-1 food-txt-primary">
                                    <i class="fas fa-chevron-down"></i>
                                </span>
                            </span>
                    </h2>

                    <!-- Container for adding food items -->
                    <div class="cart-items-wrapper">
                        <div class="cart-items d-lg-block" id="cartItems"></div>
                    </div>


                    <!-- Add to cart button -->
                    <div class="p-4 position-absolute w-100 d-none d-lg-block add-to-cart-btn-desktop-container">
                        <button disabled type="button"
                                id="addToCartBtnDesktop"
                                data-action="add-to-cart"
                                class="btn btn-primary btn-block">Add to cart
                        </button>
                    </div>
                </div>

                <div class="position-fixed w-100 d-lg-none add-to-cart-btn-mobile-container">
                    <button disabled type="button"
                            id="addToCartBtnMobile"
                            data-action="add-to-cart"
                            class="btn btn-primary btn-block rounded-0 food-font16 text-uppercase p-2">Add to cart
                    </button>
                </div>
            </div>
        </div>
    </main><!-- #main -->
</section><!-- #primary -->