/* global vcv */
(function ($) {
  var initSlider = function (sliders) {
    if (sliders.length) {
      sliders.each(function () {
        var slider = $(this)
        var sliderWrapper = slider.closest('.vce-post-slider-block-wrapper')[ 0 ]
        var prevArrow = slider.find('.vce-post-slider-block-prev-arrow') || ''
        var nextArrow = slider.find('.vce-post-slider-block-next-arrow') || ''
        var dots = slider.parent().find('.vce-post-slider-block-dots')
        var settings = {
          autoplay: sliderWrapper.dataset.slickAutoplay === 'on',
          autoplaySpeed: sliderWrapper.dataset.slickAutoplayDelay,
          arrows: sliderWrapper.dataset.slickArrows === 'on',
          prevArrow: prevArrow,
          nextArrow: nextArrow,
          infinite: sliderWrapper.dataset.slickInfinite === 'on',
          slidesToShow: 3,
          slidesToScroll: 3,
          respondTo: 'slider',
          appendDots: dots,
          dots: sliderWrapper.dataset.slickDots === 'on',
          responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 554,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        }

        var slidesToShow = sliderWrapper.dataset.slickSlidesToShow

        if (slidesToShow) {
          var slides = null
          var responsive = slidesToShow.split(' ')
          if (responsive.length === 1) {
            slides = parseInt(responsive[ 0 ])
            settings.slidesToShow = slides > 0 ? slides : 1
            settings.slidesToScroll = slides > 0 ? slides : 1
            delete settings.responsive
          } else if (responsive.length > 1) {
            for (var r = 0; r < responsive.length; r++) {
              slides = parseInt(responsive[ r ])
              if (r === 0) {
                settings.slidesToShow = slides > 0 ? slides : 1
                settings.slidesToScroll = slides > 0 ? slides : 1
              } else {
                settings.responsive[ r - 1 ].settings.slidesToShow = slides > 0 ? slides : 1
                settings.responsive[ r - 1 ].settings.slidesToScroll = slides > 0 ? slides : 1
              }
            }
          }
        }

        if (slider.hasClass('slick-initialized') && slider[ 0 ].slick && slider[ 0 ].slick.unslick) {
          slider.vcSlick && slider.vcSlick('unslick')
        }
        slider.vcSlick && slider.vcSlick(settings)
      })
    }
  }

  vcv.on('postSliderBlockReady', function (action, id) {
    var sliders = ''
    if (id) {
      sliders = $('.vce-post-slider-block-wrapper#el-' + id + ' .vce-post-slider-block-list')
    } else {
      sliders = $('.vce-post-slider-block-list')
    }

    initSlider(sliders)
  })

  window.vcv.on('ready', function (action, id) {
    $(function () {
      vcv.trigger('postSliderBlockReady', action, id)
    })
  })
})(window.jQuery)
