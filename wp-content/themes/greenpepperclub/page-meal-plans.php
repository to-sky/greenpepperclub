<?php
/**
 * The template for display Meal plans page
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

/**
 * Add overlay on product card
 */
add_action( 'woocommerce_shop_loop_item_title', 'gp_woocommerce_shop_loop_item_title', 7 );
function gp_woocommerce_shop_loop_item_title() {
	remove_action( 'woocommerce_after_shop_loop_item', 'woocommerce_template_loop_product_link_close', 5 );
	echo '<div class="gp-overlay"></div></a>';
}
?>

	<section id="primary" class="content-area col-sm-12 col-lg-12">
		<main id="main" class="site-main" role="main">
            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                <header class="entry-header">
                    <?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
                </header><!-- .entry-header -->

                <div class="entry-content">
					<?php the_content(); ?>
                </div>

                <footer class="entry-footer">
                    <?php
                    edit_post_link(
                        sprintf(
                        /* translators: %s: Name of current post */
                            esc_html__( 'Edit %s', 'wp-bootstrap-starter' ),
                            the_title( '<span class="screen-reader-text">"', '"</span>', false )
                        ),
                        '<span class="edit-link">',
                        '</span>'
                    );
                    ?>
                </footer><!-- .entry-footer -->
            </article><!-- #post-## -->
		</main><!-- #main -->
	</section><!-- #primary -->

<?php
get_footer();
