<?php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WP_Bootstrap_Starter
 */

/**
 * Add overlay on product card at the "Meal plans" page
 */
if ( is_page_meal_plans() ) {
	add_action( 'woocommerce_shop_loop_item_title', 'gp_woocommerce_shop_loop_item_title', 7 );
	function gp_woocommerce_shop_loop_item_title() {
		remove_action( 'woocommerce_after_shop_loop_item', 'woocommerce_template_loop_product_link_close', 5 );
		echo '<div class="gp-overlay"></div></a>';
	}
}
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    <?php if(! is_front_page() && ! is_account_page()) : ?>
    <header class="entry-header">
		<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
	</header><!-- .entry-header -->
    <?php endif; ?>

	<div class="entry-content <?php echo is_account_page() ? 'mt-4 mb-5' : ''; ?>">
		<?php
			the_content();

			wp_link_pages( array(
				'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'wp-bootstrap-starter' ),
				'after'  => '</div>',
			) );
		?>
	</div><!-- .entry-content -->

	<?php if ( get_edit_post_link() ) : ?>
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
	<?php endif; ?>
</article><!-- #post-## -->
