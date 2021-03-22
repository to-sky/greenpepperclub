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

<?php if(! isProductFoodListingPage()) : ?>
    <section id="primary" class="content-area col-sm-12 col-md-12 col-lg-12">
        <main id="main" class="site-main" role="main">
            <div class="container">
                <div class="row no-gutters">
                    <div class="col col-12 col-md-10 offset-md-1">
						<?php get_template_part( 'template-parts/content', 'delivery' ) ?>
                    </div>
                </div>
            </div>
        </main><!-- #main -->
    </section><!-- #primary -->
<?php else : ?>
    <?php woocommerce_content(); ?>
<?php endif; ?>

<?php
get_footer();