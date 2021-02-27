jQuery(function ($) {
    var modal = $('.gp-modal-grid');
    var gridItem = $('.gp-about-grid-item');

    // Change modal image size
    function changeImageSize() {
        var modalImage = $('.gp-modal-grid-image');

        modalImage.removeAttr('style');

        var modalHeight = modal.height();
        var modalContent = $('.gp-modal-grid-content').height();

        if (modalContent > modalHeight) {
            modalImage.css({
                'height': Math.round(modalHeight * 0.8),
                'width': 'auto'
            });
        } else {
            modalImage.css({
                'height': 'auto',
                'width': '90%'
            });
        }
    }

    // Merge all data (image, header, description) to array
    var gridItems = [];
    gridItem.each(function (i, el) {
        gridItems.push({
            bgUrl: $(el).find('.vce-hoverbox-background').css('background-image').split(/"/)[1],
            header: $(el).find('.gp-about-grid-header').text(),
            description: $(el).find('.gp-about-grid-header').next('.vce-hoverbox-description').text(),
            position: ++i
        });
    });

    var modalImage = $('.gp-modal-grid-image');
    var modalHeader = $('.gp-modal-grid-header');
    var modalDescription = $('.gp-modal-grid-description');
    var modalPreviousIcon = $('#gpModalIconPrev');
    var modalNextIcon = $('#gpModalIconNext');
    var blockedIconClass = 'gp-icon-blocked';

    // Open modal and add data to modal
    gridItem.click(function () {
        modal.fadeIn();

        var header = $(this).find('.gp-about-grid-header').text()
        $.grep(gridItems, function (el) {
            if (el.header == header) {

                // Add current data to modal
                modalImage.attr('src', el.bgUrl);
                modalImage.removeAttr('style');
                modalHeader.text(el.header);
                modalDescription.text(el.description);

                // Update image size
                changeImageSize();

                // Clear blocked icon class
                $([modalPreviousIcon[0], modalNextIcon[0]]).removeClass(blockedIconClass);

                // Set position to prev and next icons
                var elPosition = el.position;
                if (elPosition === 1) {
                    modalPreviousIcon.addClass(blockedIconClass);
                    modalNextIcon.data('slide-position', ++elPosition);
                } else if (elPosition === gridItems.length) {
                    modalNextIcon.addClass(blockedIconClass);
                    modalPreviousIcon.data('slide-position', --elPosition);
                } else {
                    modalPreviousIcon.data('slide-position', elPosition - 1);
                    modalNextIcon.data('slide-position', elPosition + 1);
                }
            }
        });
    });

    var currentSlidePosition;

    // Click on previous slide
    modalPreviousIcon.click(function () {
        // If data not added (for first and last slide) return false
        if (!setDataToModal($(this))) {
            return false;
        }

        // Set position to prev and next icons
        if (currentSlidePosition === 1) {
            $(this).addClass(blockedIconClass);
            modalNextIcon.data('slide-position', 2);
        } else {
            modalNextIcon.removeClass(blockedIconClass)
            modalNextIcon.data('slide-position', currentSlidePosition + 1);
            modalPreviousIcon.data('slide-position', currentSlidePosition - 1);
        }
    });

    // Click on next slide
    modalNextIcon.click(function () {
        // If data not added (for first and last slide) return false
        if (!setDataToModal($(this))) {
            return false;
        }

        // Set position to prev and next icons
        if (currentSlidePosition === gridItems.length) {
            $(this).addClass(blockedIconClass);
            modalPreviousIcon.data('slide-position', gridItems.length - 1);
        } else {
            modalPreviousIcon.removeClass(blockedIconClass)
            modalPreviousIcon.data('slide-position', currentSlidePosition - 1);
            modalNextIcon.data('slide-position', currentSlidePosition + 1);
        }
    });

    // Add data to modal
    function setDataToModal(icon) {
        if (icon.hasClass(blockedIconClass)) {
            return false
        }

        // Get current slide position
        currentSlidePosition = icon.data('slide-position');

        // Insert data to modal
        modalImage.attr('src', gridItems[currentSlidePosition - 1].bgUrl).hide().fadeIn('slow');
        modalHeader.text(gridItems[currentSlidePosition - 1].header).hide().fadeIn('slow');
        modalDescription.text(gridItems[currentSlidePosition - 1].description).hide().fadeIn('slow');

        changeImageSize();

        return true;
    }

    // Close modal
    $('.gp-modal-grid-close').click(function () {
        modal.fadeOut();
    });
});