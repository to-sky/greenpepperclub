<?php
/**
 * Template Name: login page
 */
get_header();

$error = '';

if ( $_POST ) {
	global $wpdb;

	$login_data = [
		'user_login'    => esc_sql( $_POST['username'] ),
		'user_password' => esc_sql( $_POST['password'] ),
	];

	$user_verify = wp_signon( $login_data, true );
	if ( is_wp_error( $user_verify ) ) {
		$error = "Invalid login details";
	} else {
		wp_redirect( home_url() );
	}
}
?>

<section id="primary" class="content-area col-sm-12">
    <main id="main" class="site-main" role="main">
        <div class="container">
            <div class="row">
                <div class="border col col-md-4 my-5 offset-md-4 pb-5 pt-4 px-5 shadow">
                    <h1 class="text-center">LOGIN</h1>

                    <form id="login1" name="form" action="<?php echo site_url(); ?>/login/" method="post">
                        <div class="form-group">
                            <input class="form-control" id="username" type="text" placeholder="Username"
                                   name="username">
                        </div>

                        <div class="form-group">
                            <input class="form-control" id="password" type="password" placeholder="Password"
                                   name="password">
                        </div>

						<?php if ( $error ) : ?>
                            <p class="mt-2 text-danger"><?php echo $error; ?></p>
						<?php endif; ?>
                        <input class="btn btn-primary btn-block" id="submit" type="submit" name="submit" value="Submit">
                    </form>
                </div>
            </div>
        </div>
    </main>
</section>

<?php get_footer(); ?> 