<?php
/**
 * Front page
 */

get_header(); ?>

    <section id="primary" class="content-area col-sm-12">
        <main id="main" class="site-main" role="main">

            <?php
            while (have_posts()) : the_post();

                get_template_part('template-parts/content', 'page');

                // If comments are open or we have at least one comment, load up the comment template.
                if (comments_open() || get_comments_number()) :
                    comments_template();
                endif;

            endwhile; // End of the loop.
            ?>
        </main><!-- #main -->
    </section><!-- #primary -->


    <!-- Fullscreen modal -->
    <div class="gp-modal-grid">
        <div class="gp-modal-grid-content p-4 p-md-5">
            <div class="clearfix pb-4">
                <span class="gp-icon gp-icon-close float-right gp-modal-grid-close"></span>
            </div>

            <div class="gp-modal-grid-body pt-md-5 px-3">
                <div class="row">
                    <div class="col-md-8">
                        <div class="position-relative text-center">
                            <span id="gpModalIconPrev" class="gp-icon gp-icon-prev gp-valign gp-left"></span>
                            <img class="gp-modal-grid-image p-3" src="" alt="grid-image">
                            <span id="gpModalIconNext" class="gp-icon gp-icon-next gp-valign gp-right"></span>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="p-5 pt-4 p-md-2 font-din-next-light gp-fs-17">
                            <p class="gp-fs-20 gp-modal-grid-header pb-3"></p>
                            <p class="gp-modal-grid-description"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

<?php
get_footer();
?>