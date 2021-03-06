jQuery( function ( $ ) {
    'use strict';
    // here for each comment reply link of WordPress
    $( '.comment-reply-link' ).addClass( 'btn btn-primary' );

    // here for the submit button of the comment reply form
    $( '#commentsubmit' ).addClass( 'btn btn-primary' );

    // The WordPress Default Widgets
    // Now we'll add some classes for the WordPress default widgets - let's go

    // the search widget
    $( '.widget_search input.search-field' ).addClass( 'form-control' );
    $( '.widget_search input.search-submit' ).addClass( 'btn btn-default' );
    $( '.variations_form .variations .value > select' ).addClass( 'form-control' );
    $( '.widget_rss ul' ).addClass( 'media-list' );

    $( '.widget_meta ul, .widget_recent_entries ul, .widget_archive ul, .widget_categories ul, .widget_nav_menu ul, .widget_pages ul, .widget_product_categories ul' ).addClass( 'nav flex-column' );
    $( '.widget_meta ul li, .widget_recent_entries ul li, .widget_archive ul li, .widget_categories ul li, .widget_nav_menu ul li, .widget_pages ul li, .widget_product_categories ul li' ).addClass( 'nav-item' );
    $( '.widget_meta ul li a, .widget_recent_entries ul li a, .widget_archive ul li a, .widget_categories ul li a, .widget_nav_menu ul li a, .widget_pages ul li a, .widget_product_categories ul li a' ).addClass( 'nav-link' );

    $( '.widget_recent_comments ul#recentcomments' ).css( 'list-style', 'none').css( 'padding-left', '0' );
    $( '.widget_recent_comments ul#recentcomments li' ).css( 'padding', '5px 15px');

    $( 'table#wp-calendar' ).addClass( 'table table-striped');

    // Adding Class to contact form 7 form
    $('.wpcf7-form-control').not(".wpcf7-submit, .wpcf7-acceptance, .wpcf7-file, .wpcf7-radio").addClass('form-control');
    $('.wpcf7-submit').addClass('btn btn-primary');

    // Adding Class to Woocommerce form
    $('.woocommerce-Input--text, .woocommerce-Input--email, .woocommerce-Input--password').addClass('form-control');
    $('.woocommerce-Button.button').addClass('btn btn-primary mt-2').removeClass('button');

    $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        $(this).parent().siblings().removeClass('open');
        $(this).parent().toggleClass('open');
    });

    // Fix woocommerce checkout layout
    $('#customer_details .col-1').addClass('col-12').removeClass('col-1');
    $('#customer_details .col-2').addClass('col-12').removeClass('col-2');
    $('.woocommerce-MyAccount-content .col-1').addClass('col-12').removeClass('col-1');
    $('.woocommerce-MyAccount-content .col-2').addClass('col-12').removeClass('col-2');

    // Add Option to add Fullwidth Section
    function fullWidthSection(){
        var screenWidth = $(window).width();
        if ($('.entry-content').length) {
            var leftoffset = $('.entry-content').offset().left;
        }else{
            var leftoffset = 0;
        }
        $('.full-bleed-section').css({
            'position': 'relative',
            'left': '-'+leftoffset+'px',
            'box-sizing': 'border-box',
            'width': screenWidth,
        });
    }
    fullWidthSection();
    $( window ).resize(function() {
        fullWidthSection();
    });

    // Allow smooth scroll
    $('.page-scroller').on('click', function (e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $('html, body').animate({
            'scrollTop': $target.offset().top
        }, 1000, 'swing');
    });


    let body = $('body');

    let slickParams = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        prevArrow: '<span class="gp-icon gp-icon-prev gp-icon-white gp-valign" style="left: -30px;""></span>',
        nextArrow: '<span class="gp-icon gp-icon-next gp-icon-white gp-valign" style="right: -30px;"></span>',
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    // Testimonials slider
    $('#gpTestimonialsSlider').slick(slickParams);

    // For Instagram feed plugin
    $('#sbi_images').hide('1', function() {
        let linkToInstagram = $('#sbi_load');
        let clonedLinkToInstagram = linkToInstagram.clone();

        linkToInstagram.remove();

        $(this).append(clonedLinkToInstagram).slick(
            Object.assign(slickParams, {autoplay: false, infinite: false})
        ).fadeIn();
    });

    // Slide effect for header dropdown
    $('.gp-menu-account-dropdown').on('show.bs.dropdown', function(e){
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
    }).on('hide.bs.dropdown', function(e){
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(300);
    });

    // Bootstrap validate form
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        let forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        let validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);

    // Bootstrap tooltip
    $("[data-toggle=tooltip]").tooltip();

    // Delivery form validation
    let date = false;
    let time = false;

    disableButtonBuildMenu();

    body.on('change', '#deliveryForm input[name="date"], #deliveryForm input[name="time"]', function (e) {
        disableButtonBuildMenu();
    });

    // Checks if date and time inputs was selected
    function disableButtonBuildMenu() {
        $.each($('#deliveryForm input[name="date"]'), function (i, el) {
            if ($(el).is(':checked')) {
                return date = true;
            }
        });

        $.each($('#deliveryForm input[name="time"]'), function (i, el) {
            if ($(el).is(':checked')) {
                return time = true;
            }
        });

        if (date && time) {
            $('#deliveryForm button[type="submit"]').prop('disabled', false);
        }
    }
}); // close main function


/* Global functions */

/**
 * Countdown timer
 * @param el
 * @param deadlineTime
 */
function runCountdownTimer(el, deadlineTime) {
    let clonedCountdownTimer = el.clone();

    el.flipTimer({
        direction: 'down',
        date: deadlineTime,
        callback: function () {
            jQuery.post(gp_ajax.ajax_url, {action: 'get_next_delivery_deadline'}, function (response) {
                jQuery('#countdownTimerContainer').html(clonedCountdownTimer);

                clonedCountdownTimer.flipTimer({
                    direction: 'down',
                    date: response,
                });
            });
        }
    });
}