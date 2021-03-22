<?php if ( is_active_sidebar( 'footer-1' ) || is_active_sidebar( 'footer-2' ) || is_active_sidebar( 'footer-3' ) || is_active_sidebar( 'footer-4' ) ) : ?>
    <div id="footer-widget" class="row m-0 pt-5 px-3 p-md-5">
        <div class="container">
            <div class="row">
                <?php if ( is_active_sidebar( 'footer-1' )) : ?>
                    <div id="footer-1" class="col-12 col-md-5 mb-4 mb-md-0"><?php dynamic_sidebar( 'footer-1' ); ?></div>
                <?php endif; ?>
                <?php if ( is_active_sidebar( 'footer-2' )) : ?>
                    <div id="footer-2"  class="col-12 col-md-3 mb-4 mb-md-0"><?php dynamic_sidebar( 'footer-2' ); ?></div>
                <?php endif; ?>
                <?php if ( is_active_sidebar( 'footer-3' )) : ?>
                    <div id="footer-3"  class="col-12 col-md-4 mb-4 mb-md-0"><?php dynamic_sidebar( 'footer-3' ); ?></div>
                <?php endif; ?>
                 <?php if ( is_active_sidebar( 'footer-4' )) : ?>
                    <div id="footer-4"  class="col-12 col-md-2 mb-4 mb-md-0 d-none"><?php dynamic_sidebar( 'footer-4' ); ?></div>
                <?php endif; ?>
            </div>
        </div>
    </div>
<?php endif; ?>