<?php
/**
 * The template for displaying Purchase Gift Card page
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

    <section id="primary" class="content-area col-sm-12 col-lg-12 purchase-gift-card">
        <main id="main" class="site-main" role="main">
            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                <header class="entry-header">
			        <?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
                </header><!-- .entry-header -->

                <div class="entry-content">
			        <?php the_content(); ?>
                </div><!-- .entry-content -->

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

    <!-- Modal -->
    <div class="modal fade" id="giftCardModal" tabindex="-1" aria-labelledby="giftCardModalModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body"></div>
            </div>
        </div>
    </div>

<?php
wp_enqueue_style('wpgv-item-style');
wp_enqueue_style('wpgv-voucher-style');

wp_enqueue_script('purchase-gift-card');

wp_enqueue_script('wpgv-jquery-validate');
wp_enqueue_script('wpgv-stripe-js');
wp_enqueue_script('wpgv-paypal-js');
wp_enqueue_script('wpgv-jquery-steps');

wp_enqueue_script('wpgv-item-script');
wp_enqueue_script('wpgv-voucher-script');

get_footer();
