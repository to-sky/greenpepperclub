<?php
/**
 * WP Bootstrap Starter functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WP_Bootstrap_Starter
 */

if ( ! function_exists( 'wp_bootstrap_starter_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function wp_bootstrap_starter_setup() {
	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on WP Bootstrap Starter, use a find and replace
	 * to change 'wp-bootstrap-starter' to the name of your theme in all the template files.
	 */
	load_theme_textdomain( 'wp-bootstrap-starter', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support( 'title-tag' );

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
	 */
	add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus( array(
		'primary' => esc_html__( 'Primary', 'wp-bootstrap-starter' ),
	) );

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support( 'html5', array(
		'comment-form',
		'comment-list',
		'caption',
	) );

	// Set up the WordPress core custom background feature.
	add_theme_support( 'custom-background', apply_filters( 'wp_bootstrap_starter_custom_background_args', array(
		'default-color' => 'ffffff',
		'default-image' => '',
	) ) );

	// Add theme support for selective refresh for widgets.
	add_theme_support( 'customize-selective-refresh-widgets' );

    function wp_boostrap_starter_add_editor_styles() {
        add_editor_style( 'custom-editor-style.css' );
    }
    add_action( 'admin_init', 'wp_boostrap_starter_add_editor_styles' );

}
endif;
add_action( 'after_setup_theme', 'wp_bootstrap_starter_setup' );


/**
 * Add Welcome message to dashboard
 */
function wp_bootstrap_starter_reminder(){
        $theme_page_url = 'https://afterimagedesigns.com/wp-bootstrap-starter/?dashboard=1';

            if(!get_option( 'triggered_welcomet')){
                $message = sprintf(__( 'Welcome to WP Bootstrap Starter Theme! Before diving in to your new theme, please visit the <a style="color: #fff; font-weight: bold;" href="%1$s" target="_blank">theme\'s</a> page for access to dozens of tips and in-depth tutorials.', 'wp-bootstrap-starter' ),
                    esc_url( $theme_page_url )
                );

                printf(
                    '<div class="notice is-dismissible" style="background-color: #6C2EB9; color: #fff; border-left: none;">
                        <p>%1$s</p>
                    </div>',
                    $message
                );
                add_option( 'triggered_welcomet', '1', '', 'yes' );
            }

}
add_action( 'admin_notices', 'wp_bootstrap_starter_reminder' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function wp_bootstrap_starter_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'wp_bootstrap_starter_content_width', 1170 );
}
add_action( 'after_setup_theme', 'wp_bootstrap_starter_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function wp_bootstrap_starter_widgets_init() {
    register_sidebar( array(
        'name'          => esc_html__( 'Sidebar', 'wp-bootstrap-starter' ),
        'id'            => 'sidebar-1',
        'description'   => esc_html__( 'Add widgets here.', 'wp-bootstrap-starter' ),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ) );
    register_sidebar( array(
        'name'          => esc_html__( 'Footer 1', 'wp-bootstrap-starter' ),
        'id'            => 'footer-1',
        'description'   => esc_html__( 'Add widgets here.', 'wp-bootstrap-starter' ),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ) );
    register_sidebar( array(
        'name'          => esc_html__( 'Footer 2', 'wp-bootstrap-starter' ),
        'id'            => 'footer-2',
        'description'   => esc_html__( 'Add widgets here.', 'wp-bootstrap-starter' ),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ) );
    register_sidebar( array(
        'name'          => esc_html__( 'Footer 3', 'wp-bootstrap-starter' ),
        'id'            => 'footer-3',
        'description'   => esc_html__( 'Add widgets here.', 'wp-bootstrap-starter' ),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ) );
	register_sidebar( array(
        'name'          => esc_html__( 'Footer 4', 'wp-bootstrap-starter' ),
        'id'            => 'footer-4',
        'description'   => esc_html__( 'Add widgets here.', 'wp-bootstrap-starter' ),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ) );
}
add_action( 'widgets_init', 'wp_bootstrap_starter_widgets_init' );


/**
 * Enqueue scripts and styles.
 */
function wp_bootstrap_starter_scripts() {
	// load bootstrap css
    if ( get_theme_mod( 'cdn_assets_setting' ) === 'yes' ) {
        wp_enqueue_style( 'wp-bootstrap-starter-bootstrap-css', 'https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css' );
        wp_enqueue_style( 'wp-bootstrap-starter-fontawesome-cdn', 'https://use.fontawesome.com/releases/v5.10.2/css/all.css' );
    } else {
        wp_enqueue_style( 'wp-bootstrap-starter-bootstrap-css', get_template_directory_uri() . '/inc/assets/css/bootstrap.min.css' );
        wp_enqueue_style( 'wp-bootstrap-starter-fontawesome-cdn', get_template_directory_uri() . '/inc/assets/css/fontawesome.min.css' );
    }
	// load bootstrap css
	// load AItheme styles
	// load WP Bootstrap Starter styles
	wp_enqueue_style( 'wp-bootstrap-starter-style', get_stylesheet_uri() );
    if(get_theme_mod( 'theme_option_setting' ) && get_theme_mod( 'theme_option_setting' ) !== 'default') {
        wp_enqueue_style( 'wp-bootstrap-starter-'.get_theme_mod( 'theme_option_setting' ), get_template_directory_uri() . '/inc/assets/css/presets/theme-option/'.get_theme_mod( 'theme_option_setting' ).'.css', false, '' );
    }
    if(get_theme_mod( 'preset_style_setting' ) === 'poppins-lora') {
        wp_enqueue_style( 'wp-bootstrap-starter-poppins-lora-font', 'https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i|Poppins:300,400,500,600,700' );
    }
    if(get_theme_mod( 'preset_style_setting' ) === 'montserrat-merriweather') {
        wp_enqueue_style( 'wp-bootstrap-starter-montserrat-merriweather-font', 'https://fonts.googleapis.com/css?family=Merriweather:300,400,400i,700,900|Montserrat:300,400,400i,500,700,800' );
    }
    if(get_theme_mod( 'preset_style_setting' ) === 'poppins-poppins') {
        wp_enqueue_style( 'wp-bootstrap-starter-poppins-font', 'https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700' );
    }
    if(get_theme_mod( 'preset_style_setting' ) === 'roboto-roboto') {
        wp_enqueue_style( 'wp-bootstrap-starter-roboto-font', 'https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i,900,900i' );
    }
    if(get_theme_mod( 'preset_style_setting' ) === 'arbutusslab-opensans') {
        wp_enqueue_style( 'wp-bootstrap-starter-arbutusslab-opensans-font', 'https://fonts.googleapis.com/css?family=Arbutus+Slab|Open+Sans:300,300i,400,400i,600,600i,700,800' );
    }
    if(get_theme_mod( 'preset_style_setting' ) === 'oswald-muli') {
        wp_enqueue_style( 'wp-bootstrap-starter-oswald-muli-font', 'https://fonts.googleapis.com/css?family=Muli:300,400,600,700,800|Oswald:300,400,500,600,700' );
    }
    if(get_theme_mod( 'preset_style_setting' ) === 'montserrat-opensans') {
        wp_enqueue_style( 'wp-bootstrap-starter-montserrat-opensans-font', 'https://fonts.googleapis.com/css?family=Montserrat|Open+Sans:300,300i,400,400i,600,600i,700,800' );
    }
    if(get_theme_mod( 'preset_style_setting' ) === 'robotoslab-roboto') {
        wp_enqueue_style( 'wp-bootstrap-starter-robotoslab-roboto', 'https://fonts.googleapis.com/css?family=Roboto+Slab:100,300,400,700|Roboto:300,300i,400,400i,500,700,700i' );
    }
    if(get_theme_mod( 'preset_style_setting' ) && get_theme_mod( 'preset_style_setting' ) !== 'default') {
        wp_enqueue_style( 'wp-bootstrap-starter-'.get_theme_mod( 'preset_style_setting' ), get_template_directory_uri() . '/inc/assets/css/presets/typography/'.get_theme_mod( 'preset_style_setting' ).'.css', false, '' );
    }

	wp_enqueue_script('jquery');

    // Internet Explorer HTML5 support
    wp_enqueue_script( 'html5hiv',get_template_directory_uri().'/inc/assets/js/html5.js', array(), '3.7.0', false );
    wp_script_add_data( 'html5hiv', 'conditional', 'lt IE 9' );

	// load bootstrap js
    if ( get_theme_mod( 'cdn_assets_setting' ) === 'yes' ) {
        wp_enqueue_script('wp-bootstrap-starter-popper', 'https://cdn.jsdelivr.net/npm/popper.js@1/dist/umd/popper.min.js', array(), '', true );
    	wp_enqueue_script('wp-bootstrap-starter-bootstrapjs', 'https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js', array(), '', true );
    } else {
        wp_enqueue_script('wp-bootstrap-starter-popper', get_template_directory_uri() . '/inc/assets/js/popper.min.js', array(), '', true );
        wp_enqueue_script('wp-bootstrap-starter-bootstrapjs', get_template_directory_uri() . '/inc/assets/js/bootstrap.min.js', array(), '', true );
    }

    wp_enqueue_script('wp-bootstrap-starter-themejs', get_template_directory_uri() . '/inc/assets/js/theme-script.js', array(), false, true );
	wp_enqueue_script( 'wp-bootstrap-starter-skip-link-focus-fix', get_template_directory_uri() . '/inc/assets/js/skip-link-focus-fix.min.js', array(), '20151215', true );
    wp_enqueue_script('fullscreen-grid-modal', get_template_directory_uri() . '/inc/assets/js/fullscreen-grid-modal.js', array() );
    wp_enqueue_script('cart', get_template_directory_uri() . '/inc/assets/js/cart.js', array(), false, true );
    wp_enqueue_script('modal-food-item', get_template_directory_uri() . '/inc/assets/js/modal-food-item.js', array(), false, true );
    wp_enqueue_script('flip-timer', get_template_directory_uri() . '/inc/assets/js/jquery.flipTimer.js', array(), false, true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}


    // Plugins
    wp_enqueue_style( 'slick', 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css' );
	wp_enqueue_style( 'flip', get_template_directory_uri() . '/inc/assets/css/flipTimer.css' );

    wp_enqueue_script('slick-js', 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js', array(), '', true );
    wp_enqueue_script('matchHeight', 'https://cdnjs.cloudflare.com/ajax/libs/jquery.matchHeight/0.7.2/jquery.matchHeight-min.js', array(), '', true );
}
add_action( 'wp_enqueue_scripts', 'wp_bootstrap_starter_scripts' );

// Custom image sizes
add_image_size( 'food_item', 512, 512, true );

include_once(get_template_directory().'/shortcodes/main_shortcodes.php');
include_once(get_template_directory().'/shortcodes/woocommerce_shortcodes.php');

/**
 * Add Preload for CDN scripts and stylesheet
 */
function wp_bootstrap_starter_preload( $hints, $relation_type ){
    if ( 'preconnect' === $relation_type && get_theme_mod( 'cdn_assets_setting' ) === 'yes' ) {
        $hints[] = [
            'href'        => 'https://cdn.jsdelivr.net/',
            'crossorigin' => 'anonymous',
        ];
        $hints[] = [
            'href'        => 'https://use.fontawesome.com/',
            'crossorigin' => 'anonymous',
        ];
    }
    return $hints;
}

/**
 * Register ajax url
 */
add_action( 'wp_enqueue_scripts', 'gp_ajax_data', 99 );
function gp_ajax_data(){
	wp_localize_script('wp-bootstrap-starter-themejs', 'gp_ajax',
		array(
			'url' => admin_url('admin-ajax.php')
		)
	);
}

add_filter( 'wp_resource_hints', 'wp_bootstrap_starter_preload', 10, 2 );
function wp_bootstrap_starter_password_form() {
    global $post;
    $label = 'pwbox-'.( empty( $post->ID ) ? rand() : $post->ID );
    $o = '<form action="' . esc_url( site_url( 'wp-login.php?action=postpass', 'login_post' ) ) . '" method="post">
    <div class="d-block mb-3">' . __( "To view this protected post, enter the password below:", "wp-bootstrap-starter" ) . '</div>
    <div class="form-group form-inline"><label for="' . $label . '" class="mr-2">' . __( "Password:", "wp-bootstrap-starter" ) . ' </label><input name="post_password" id="' . $label . '" type="password" size="20" maxlength="20" class="form-control mr-2" /> <input type="submit" name="Submit" value="' . esc_attr__( "Submit", "wp-bootstrap-starter" ) . '" class="btn btn-primary"/></div>
    </form>';
    return $o;
}
add_filter( 'the_password_form', 'wp_bootstrap_starter_password_form' );



/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Custom functions that act independently of the theme templates.
 */
require get_template_directory() . '/inc/extras.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load plugin compatibility file.
 */
require get_template_directory() . '/inc/plugin-compatibility/plugin-compatibility.php';

/**
 * Load custom WordPress nav walker.
 */
if ( ! class_exists( 'wp_bootstrap_navwalker' )) {
    require_once(get_template_directory() . '/inc/wp_bootstrap_navwalker.php');
}

/**
 * Remove version from CSS and JS
 */
add_filter( 'style_loader_src',  'taxation_remove_ver_css_js', 9999, 2 );
add_filter( 'script_loader_src', 'taxation_remove_ver_css_js', 9999, 2 );
function taxation_remove_ver_css_js( $src, $handle )
{
    $handles_with_version = [ 'style', 'script' ];

    if ( strpos( $src, 'ver=' ) && ! in_array( $handle, $handles_with_version, true ) ) {
	    $src = remove_query_arg( 'ver', $src );
    }

    return $src;
}

/**
 * Init
 */
add_action('init', function(){
	// Opened buffer will need for wp_redirect function
	ob_start();

	remove_action('woocommerce_after_shop_loop_item', 'woocommerce_template_loop_product_link_close', 5 );
	add_action('woocommerce_shop_loop_item_title', 'gp_woocommerce_shop_loop_item_title', 7);

	function gp_woocommerce_shop_loop_item_title() {
		echo '<div class="gp-overlay"></div></a>';
	}
});

/**
 * Disable admin bar on frontend(for users)
 */
show_admin_bar(false);

/**
 * Enabling shortcodes in widgets
 */
add_filter( 'widget_text', 'do_shortcode' );

/**
* Allow logout without confirmation
*/
add_action( 'template_redirect', 'logout_confirmation' );
function logout_confirmation() {
	global $wp;

	if ( isset( $wp->query_vars['customer-logout'] ) ) {
		wp_redirect( str_replace( '&amp;', '&', wp_logout_url( wc_get_page_permalink( 'myaccount' ) ) ) );

		exit;
	}
}

/**
 * Get deadline time for day before delivery
 *
 * @param string $foodDeliveryDay
 * @param int $requiredNoOfDays
 * @param bool $dateFormatForHuman
 * @param string $dateFormat
 *
 * @return false|float|int timestamp or formatted date
 */
function getDeadlineBeforeDayDelivery(string $foodDeliveryDay, int $requiredNoOfDays = 1, $dateFormatForHuman = false, $dateFormat = 'l, d F Y, H:i') {
	$deadlineTimeDirty = date_parse('19:30'); // Hardcode
	$deadlineTimeInSeconds = $deadlineTimeDirty['hour'] * 60 * 60 + $deadlineTimeDirty['minute'] * 60;

	$requiredNoOfDaysInSeconds = strtotime("$requiredNoOfDays day", 0);
	$foodDeliveryDate = strtotime("next $foodDeliveryDay");

	$offsetToRequiredNoOfDays = strtotime("1 day", 0) - $deadlineTimeInSeconds;
	$timeToDeliveryInSeconds = $requiredNoOfDaysInSeconds + $offsetToRequiredNoOfDays;
	$deadlineBeforeDayDelivery = $foodDeliveryDate - $timeToDeliveryInSeconds;

	if ($dateFormatForHuman) {
		return date($dateFormat, $deadlineBeforeDayDelivery);
	}

	return $deadlineBeforeDayDelivery;
}

/**
 * Sort product delivery days and return days with deadline timestamp
 *
 * @param int $productId
 *
 * @return array|false
 */
function sortProductDeliveryDaysWithDeadline(int $productId) {
	$productDeliveryDays = get_field( 'food_delivery_days', $productId );

	if (! $productDeliveryDays) {
		return false;
	}

	$sortingDeliveryDays = [];
	foreach ($productDeliveryDays as $key => $deliveryDays) {
		$sortingDeliveryDays[$deliveryDays['delivery_day']] = getDeadlineBeforeDayDelivery($deliveryDays['delivery_day'], $deliveryDays['required_no_of_days']);
	}

	asort($sortingDeliveryDays);

	return $sortingDeliveryDays;
}

/**
 * Get sorted delivery data for product with deadline for each days
 *
 * @param int $productId
 * @param string $formatDeliveryDate
 * @param string $formatDeliveryDeadline
 *
 * @return array|false
 */
function getSortedDeliveryDataForProduct(int $productId, $formatDeliveryDate = 'Y-m-d H:i', $formatDeliveryDeadline = 'Y-m-d H:i') {
	$deliveryDaysWIthDeadline = sortProductDeliveryDaysWithDeadline( $productId );

	if (! $deliveryDaysWIthDeadline) {
		return false;
	}

	$sortedDeliveryData = [];
	$index = 0;
	foreach (  $deliveryDaysWIthDeadline as $deliveryDayName => $deliveryDeadlineTimestamp ) {
		$sortedDeliveryData[$index]['day_name'] = $deliveryDayName;
		$sortedDeliveryData[$index]['day_timestamp'] = strtotime($deliveryDayName, $deliveryDeadlineTimestamp);
		$sortedDeliveryData[$index]['day_formatted'] = date($formatDeliveryDate, strtotime($deliveryDayName, $deliveryDeadlineTimestamp));

		$sortedDeliveryData[$index]['deadline_timestamp'] = $deliveryDeadlineTimestamp;
		$sortedDeliveryData[$index]['deadline_timestamp_formatted'] = date($formatDeliveryDeadline, $deliveryDeadlineTimestamp);

		$index++;
	}

	return $sortedDeliveryData;
}

/**
 * Get delivery deadline timestamp for product
 *
 * @param int $productId
 *
 * @return mixed
 */
function getDeliveryDeadlineTimestamp(int $productId) {
	$sortProductDeliveryDay = sortProductDeliveryDaysWithDeadline( $productId );

	return $sortProductDeliveryDay
		? reset( $sortProductDeliveryDay )
		: false;
}

/**
 * Get the closest deadline value
 *
 * @param int $timestamp
 * @param string $format
 *
 * @return mixed
 */
function getNextDeliveryDeadline($timestamp = 0, $format = 'M j, Y H:i:s') {
	$loop = new WP_Query([
		'post_type' =>'product',
		'post_status' => 'publish',
		'posts_per_page' => -1
	]);

	$allDeadlines = [];
	if ( $loop->have_posts() ):
		while ( $loop->have_posts() ): $loop->the_post();
			$deliveryDeadlineTimestamp = getDeliveryDeadlineTimestamp(get_the_id());

			if ($deliveryDeadlineTimestamp && $deliveryDeadlineTimestamp > time()) {
				$allDeadlines[] = $deliveryDeadlineTimestamp;
			}
		endwhile;
	endif;
	wp_reset_postdata();

	$nextDeliveryDeadlineTimestamp = min(array_unique($allDeadlines));

	if ($timestamp) {
		return $nextDeliveryDeadlineTimestamp;
	}

	return date($format, $nextDeliveryDeadlineTimestamp);
}

/**
 * Get next delivery deadline from ajax
 */
add_action('wp_ajax_get_next_delivery_deadline', 'get_next_delivery_deadline_callback');
add_action('wp_ajax_nopriv_get_next_delivery_deadline', 'get_next_delivery_deadline_callback');
function get_next_delivery_deadline_callback() {
	echo getNextDeliveryDeadline();

	wp_die();
}