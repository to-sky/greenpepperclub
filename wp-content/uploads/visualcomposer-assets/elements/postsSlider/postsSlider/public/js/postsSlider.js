/* global vcv */
(function ($) {
  vcv.on('postsSliderReady', function () {
    var sliders = $('.vce-posts-slider-list')
    if (sliders.length) {
      sliders.each(function () {
        var slider = $(this)
        var sliderWrapper = slider.closest('.vce-posts-slider-wrapper')[0]
        var dots = slider.parent().find('.vce-posts-slider-dots')
        var prevArrow = slider.find('.vce-posts-slider-prev-arrow') || ''
        var nextArrow = slider.find('.vce-posts-slider-next-arrow') || ''
        var settings = {
          autoplay: sliderWrapper.dataset.slickAutoplay === 'on',
          autoplaySpeed: sliderWrapper.dataset.slickAutoplayDelay,
          fade: sliderWrapper.dataset.slickEffect === 'fade',
          arrows: sliderWrapper.dataset.slickArrows === 'on',
          prevArrow: prevArrow,
          nextArrow: nextArrow,
          appendDots: dots,
          dots: sliderWrapper.dataset.slickDots === 'on',
          initialSlide: 0,
          respondTo: 'slider',
          swipe: sliderWrapper.dataset.slickDisableSwipe !== 'on',
          swipeToSlide: sliderWrapper.dataset.slickDisableSwipe !== 'on',
          touchMove: sliderWrapper.dataset.slickDisableSwipe !== 'on'
        }
        if (slider.hasClass('slick-initialized')) {
          slider.vcSlick && slider.vcSlick('unslick')
        }
        slider.vcSlick && slider.vcSlick(settings)
      })
    }
  })

  vcv.on('ready', function () {
    $(function () {
      vcv.trigger('postsSliderReady')
    })
  })
})(window.jQuery)
