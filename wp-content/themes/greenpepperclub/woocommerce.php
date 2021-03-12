<?php
/**
 * The template for displaying Woocommerce Product
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WP_Bootstrap_Starter
 */

get_header();
?>
        <section id="primary" class="content-area col-sm-12 col-md-12 col-lg-12 d-none">
            <main id="main" class="site-main" role="main">
                <div class="container">
                    <div class="row no-gutters">
                        <div class="col col-12">
                            <?php woocommerce_content(); ?>
                        </div>
                    </div>
                </div>
            </main><!-- #main -->
        </section><!-- #primary -->  
    </div>
</div>
                  
<?php if(is_singular('product')) : ?>
    <section id="primary" class="content-area">
        <main id="main" class="site-main" role="main">  
            <div class="container-fluid">
                <div class="food-items row">
                    <!-- Food items -->
                    <div class="col col-md-9 col-12" style="height:900px;overflow-y:scroll" >
                        <h2 class="text-center text-uppercase font-weight-light food-font30 my-4">Select your meals</h2>
                        <?php echo do_shortcode('[food_item_listing]'); ?>
                    </div>

                    <!-- Cart -->
                    <div class="col col-md-3 col-12 p-0 position-relative" id="cartItems" style="height:900px; overflow-y:scroll; background: #eeede7">
                        <h2 class="d-flex food-font16 food-txt-uppercase justify-content-between bg-white m-0 p-3">
                            <span>Your Meals</span>
                            <span>
                                <span id="totalQty">0</span>
                                <span class="px-2">of</span>
                                <span id="maxItems"><?php echo get_post_meta( get_the_ID(), 'product_minimum_quantity', true );?></span>
                            </span>
                        </h2>

                        <div class="p-4 position-absolute w-100" style="bottom: 0;">
                            <button disabled type="button"
                                    onclick="this.innerHTML='Please wait!';document.getElementsByClassName('single_add_to_cart_button')[0].click();"
                                    class="btn btn-primary btn-block">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </main><!-- #main -->
    </section><!-- #primary -->
<?php endif; ?>

<?php
get_template_part( 'template-parts/modal', 'food-item' );
get_footer();