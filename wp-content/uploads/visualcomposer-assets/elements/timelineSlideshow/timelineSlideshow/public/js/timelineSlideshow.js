(function ($) {
  var initSlider = function (sliders) {
    if (sliders.length) {
      sliders.each(function () {
        var slider = $(this)
        var settings = {
          autoplay: true,
          autoplaySpeed: slider[0].dataset.slickAutoplayDelay,
          fade: slider[0].dataset.slickEffect === 'fade',
          arrows: 'off',
          prevArrow: '',
          nextArrow: '',
          appendDots: false,
          dots: 'off',
          initialSlide: 0,
          respondTo: 'slider',
          swipe: 'off',
          swipeToSlide: 'off',
          touchMove: 'off',
          infinite: true,
          pauseOnHover: true
        }
        if (slider.hasClass('slick-initialized') && slider[0].slick && slider[0].slick.unslick) {
          slider.vcSlick && slider.vcSlick('unslick')
        }
        slider.vcSlick && slider.vcSlick(settings)
      })
    }
  };
  window.vcv.on('ready', function (action, id) {
    var sliders = '';
    if (id) {
      sliders = $('.vce-timeline-slideshow-container#el-' + id + ' .vce-timeline-slideshow-slider-list');
    } else {
      sliders = $('.vce-timeline-slideshow-slider-list');
    }
    initSlider(sliders);
  });
})(window.jQuery);
