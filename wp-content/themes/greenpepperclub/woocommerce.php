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

get_header(); ?>

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

    <style>

    </style>
            
                  
<?php if(is_singular('product')) : ?>
    <section id="primary" class="content-area col-sm-12 col-md-12 col-lg-12">
        <main id="main" class="site-main" role="main">  
            <div class="container-fluid">
                <div class="row no-gutters">
                    <div class="food-items row">
                        <div class="col col-md-9 col-12 food-mb20 food_item_listing">&nbsp;</div>

                        <div class="col col-md-3 col-12 text-center food-mb20 cartBtn" >
                            <button disabled  type="button" onclick="this.innerHTML='Please wait!';document.getElementsByClassName('single_add_to_cart_button')[0].click();" class="btn btn-primary btn-block">Add to cart</button>
                        </div>

                        <!-- Food items -->
                        <div class="col col-md-9 col-12" style="height:700px;overflow-y:scroll" >
                            <hr>
                            <h2 class="food-txt-uppercase food-txt-center">Select your meals</h2>
                            <?php echo do_shortcode('[food_item_listing product_id='.get_the_ID().' ]');?>
                        </div>

                        <!-- Cart -->
                        <div class="col col-md-3 col-12 p-0" id="cartItems" style="height:700px; overflow-y:scroll; background: #eeede7">
                            <h2 class="d-flex food-font15 food-txt-uppercase justify-content-between bg-white m-0 p-3 border-top">
                                <span>Your Meals</span>
                                <span>
                                    <span id="totalQty">0</span> of <span id="maxItems"><?php echo get_post_meta( get_the_ID(), 'product_minimum_quantity', true );?></span>
                                </span>
                            </h2>
                        </div>

                        <div class="col col-md-9 col-12 food-mt20">&nbsp;</div>
                        <div class="col col-md-3 col-12 text-center food-mt20 cartBtn" id="cartBtnDiv">
                            <button disabled  type="button" onclick="this.innerHTML='Please wait!';document.getElementsByClassName('single_add_to_cart_button')[0].click();" class="btn btn-primary btn-block">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </main><!-- #main -->
    </section><!-- #primary -->
<?php endif; ?>

<?php
get_footer();
