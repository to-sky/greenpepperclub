<?php
/**
* Template Name: Full Width
 */

get_header(); ?>
	<section id="primary" class="content-area col-sm-12">
		<main id="main" class="site-main" role="main">
        
		<?php /* ?>
		<div class="container">
            <div class="row">
                <div class="col col-12 text-center"><h1>SELECT A PLAN</h1></div>
                <?php 
                    echo do_shortcode('[products orderby="id" order="asc" ]');
                ?>        
            </div>
        </div>
        <?php */ ?>

			<?php
			/*while ( have_posts() ) : the_post();

				get_template_part( 'template-parts/content', 'page' );

				// If comments are open or we have at least one comment, load up the comment template.
				if ( comments_open() || get_comments_number() ) :
					comments_template();
				endif;

			endwhile;*/ // End of the loop.
			?>
			<?php 
				echo do_shortcode(get_the_content());
			?>
		</main><!-- #main -->
	</section><!-- #primary -->

<?php
get_footer();
?>
<script>
    jQuery(document).ready(function(){
       jQuery('.add_to_cart_button').remove(); 
    });
</script>