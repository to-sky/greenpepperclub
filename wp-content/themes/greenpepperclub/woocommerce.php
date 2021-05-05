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

$product = wc_get_product( $post->ID );
?>

<?php if ( is_product_meal_plan( $product->get_id() ) ) : ?>
	 <?php get_template_part( 'template-parts/content', 'meal-plans' ); ?>
<?php else: ?>
	<section id="primary" class="col content-area py-5">
		<main id="main" class="site-main" role="main">
            <?php woocommerce_breadcrumb(); ?>
			<?php woocommerce_content(); ?>
		</main><!-- #main -->
	</section><!-- #primary -->
<?php endif ?>

<?php
get_footer();