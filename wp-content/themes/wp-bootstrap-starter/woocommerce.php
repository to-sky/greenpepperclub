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

        <section id="primary" class="content-area col-sm-12 col-md-12 col-lg-12">
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
            
                  
<?php if(is_singular('product')){ ?>
    <section id="primary" class="content-area col-sm-12 col-md-12 col-lg-12">
        <main id="main" class="site-main" role="main">  
            <div class="container-fluid">
                <div class="row no-gutters">
                    <div class="foodItemsDiv hidden row">
                        <div class="col col-md-9 col-12 food-mb20 food_item_listing">&nbsp;</div>
                        <div class="col col-md-3 col-12 text-center food-mb20 cartBtn" >
                            <button disabled  type="button" onclick="this.innerHTML='Please wait!';document.getElementsByClassName('single_add_to_cart_button')[0].click();" class="btn btn-primary btn-block" >Add to cart</button>
                        </div>
                        <div class="col col-md-9 col-12" style="height:700px;overflow-y:scroll" >
                            <hr>
                            <h2 class="food-txt-uppercase food-txt-center">Select your meals</h2>
                            <?php echo do_shortcode('[food_item_listing product_id='.get_the_ID().' ]');?>
                        </div>
                        <div class="col col-md-3 col-12 cartItems" style="height:700px;overflow-y:scroll">
                            <hr>
                            <h2 class="food-txt-uppercase food-txt-center food-font15">Your Meals<span id="totalQty"></span></h2>
                            <hr>
                        </div>
                        <div class="col col-md-9 col-12 food-mt20">&nbsp;</div>
                        <div class="col col-md-3 col-12 text-center food-mt20 cartBtn" id="cartBtnDiv">
                            <button disabled  type="button" onclick="this.innerHTML='Please wait!';document.getElementsByClassName('single_add_to_cart_button')[0].click();" class="btn btn-primary btn-block" >Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </main><!-- #main -->
    </section><!-- #primary -->
<?php } ?>

<?php
//get_sidebar();
get_footer();
