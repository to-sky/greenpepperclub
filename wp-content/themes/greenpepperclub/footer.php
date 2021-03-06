<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WP_Bootstrap_Starter
 */

?>
<?php if(!is_page_template( 'blank-page.php' ) && !is_page_template( 'blank-page-with-container.php' )): ?>

    <?php if ( ! is_page_template( 'fullwidth.php' ) && ! is_front_page() ) : ?>
			</div><!-- .row -->
		</div><!-- .container -->
	<?php endif; ?>

    <?php if ( ! is_page_product_food_listing() ) : ?>
	</div><!-- #content -->
    <?php get_template_part( 'footer-widget' ); ?>
	<footer id="colophon" class="site-footer <?php echo wp_bootstrap_starter_bg_class(); ?>" role="contentinfo">
		<div class="container pt-3 pb-3">
            <div class="site-info">
                &copy; <?php echo date('Y'); ?> <?php echo '<a href="'.home_url().'">'.get_bloginfo().'</a>'; ?>
            </div><!-- close .site-info -->
		</div>
	</footer><!-- #colophon -->
	<?php endif; ?>

<?php endif; ?>
</div><!-- #page -->

<?php wp_footer(); ?>
</body>
</html>