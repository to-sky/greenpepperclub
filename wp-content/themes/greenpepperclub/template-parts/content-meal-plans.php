<?php
/**
 * Template part for displaying delivery form or meal plan food items
 *
 */

global $product;
?>

<?php if(! is_page_product_food_listing()) : ?>
	<section id="primary" class="content-area col-sm-12 col-md-12 col-lg-12">
		<main id="main" class="site-main" role="main">
			<div class="container">
				<div class="row no-gutters">
					<div class="col col-12 col-md-10 offset-md-1 mt-3 mb-5">
						<?php
                            wc_print_notices();

                            get_template_part( 'template-parts/content', 'meal-plan-delivery-form' );
                        ?>
					</div>
				</div>
			</div>
		</main><!-- #main -->
	</section><!-- #primary -->
<?php else : ?>
	<div id="product-<?php the_ID(); ?>" <?php wc_product_class( 'h-100', $product ); ?>>
		<div class="summary entry-summary h-100 w-100">
			<?php
				remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_title', 5 );
				remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_price', 10 );

				add_action( 'woocommerce_before_add_to_cart_button', 'gp_woocommerce_before_add_to_cart_button', 10, 0 );
				function gp_woocommerce_before_add_to_cart_button() {
					get_template_part( 'template-parts/content', 'meal-plan-single' );
                }

				do_action( 'woocommerce_single_product_summary' );
			?>
		</div>
	</div>
<?php endif; ?>