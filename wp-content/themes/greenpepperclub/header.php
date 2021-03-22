<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WP_Bootstrap_Starter
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="profile" href="http://gmpg.org/xfn/11">
	<?php wp_head(); ?>

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-NQFJ63JYG5"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }

        gtag('js', new Date());

        gtag('config', 'G-NQFJ63JYG5');
    </script>

</head>

<body <?php body_class(); ?>>
<div id="page" class="site d-flex flex-column min-vh-100 <?php echo isProductFoodListingPage() ? 'h-100' : '' ?>">
    <a class="skip-link screen-reader-text"
       href="#content"><?php esc_html_e( 'Skip to content', 'wp-bootstrap-starter' ); ?></a>
	<?php if ( ! is_page_template( 'blank-page.php' ) && ! is_page_template( 'blank-page-with-container.php' ) ): ?>
    <header id="masthead" class="site-header navbar-static-top fixed-top navbar-dark"
            role="banner">
        <div class="container">
            <nav class="navbar navbar-expand-md p-0">
                <div class="navbar-brand">
					<?php if ( get_theme_mod( 'wp_bootstrap_starter_logo' ) ): ?>
                        <a href="<?php echo esc_url( home_url( '/' ) ); ?>">
                            <img src="<?php echo esc_url( get_theme_mod( 'wp_bootstrap_starter_logo' ) ); ?>"
                                 alt="<?php echo esc_attr( get_bloginfo( 'name' ) ); ?>">
                        </a>
					<?php else : ?>
                        <a class="site-title"
                           href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php esc_url( bloginfo( 'name' ) ); ?></a>
					<?php endif; ?>

                </div>
                <button id="navbar-toggler-icon" class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#main-nav" aria-controls="" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

				<?php
				wp_nav_menu( array(
					'theme_location'  => 'primary',
					'container'       => 'div',
					'container_id'    => 'main-nav',
					'container_class' => 'collapse navbar-collapse justify-content-end',
					'menu_id'         => false,
					'menu_class'      => 'navbar-nav',
					'depth'           => 3,
					'fallback_cb'     => 'wp_bootstrap_navwalker::fallback',
					'walker'          => new wp_bootstrap_navwalker()
				) );
				?>
            </nav>
        </div>
    </header><!-- #masthead -->

    <?php
        // Add background image to the page
        $isBackgroundImage = get_field('set_background_image');
        $overlayColor = get_field( 'overlay_color' );
        $backgroundImageStyle = 'background-image: url(' . get_the_post_thumbnail_url() . ')';
    ?>

    <div id="content" class="site-content flex-grow-1 h-100 position-relative <?php echo $isBackgroundImage ? 'gp-page-bg-image' : ''; ?>"
         style="<?php echo $isBackgroundImage ? $backgroundImageStyle : ''; ?>"
    >

        <?php if( $overlayColor ) : ?>
        <div class="gp-overlay" style="background-color: <?php echo $overlayColor; ?>"></div>
        <?php endif; ?>

        <?php if ( ! is_page_template( 'fullwidth.php' ) && ! is_front_page() && ! isProductFoodListingPage() ) : ?>
        <div class="container">
            <div class="row">
        <?php endif; ?>
    <?php endif; ?>