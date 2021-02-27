(function ($) {
  function addResizeListener (element, fn) {
    var oldObj = $(element).find('> object')
    if (oldObj.length) {
      if (oldObj.attr('data-vcv-slick-resize-helper') === 'true') {
        return true;
      } else {
        oldObj.remove();
      }
    }
    var isIE = !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/Edge/));
    if (window.getComputedStyle(element).position === 'static') {
      element.style.position = 'relative';
    }
    var obj = element.__resizeTrigger__ = document.createElement('object');
    obj.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; opacity: 0; pointer-events: none; z-index: -1;');
    obj.__resizeElement__ = element;
    obj.onload = function () {
      obj.contentDocument.defaultView.addEventListener('resize', fn);
    };
    oldObj.attr('data-vcv-slick-resize-helper', 'true')
    obj.type = 'text/html';
    if (isIE) {
      element.appendChild(obj);
    }
    obj.data = 'about:blank';
    if (!isIE) {
      element.appendChild(obj);
    }
    return true;
  };

  vcv.on('ready', function (type, id, options, tag) {
    // Do actions only if updated pageableTab/container
    if (tag && [ 'pageableTab', 'pageableContainer' ].indexOf(tag) === -1) {
      return;
    }
    var sliders = [];
    var slider;
    if (tag === 'pageableContainer') {
      slider = document.querySelector('.vce-pageable-container[data-vcv-element="' + id + '"]');
      sliders.push(slider);
    } else if (tag === 'pageableTab') {
      var sliderTab = document.querySelector('.vce-pageable-tab[data-vcv-element="' + id + '"]');
      slider = sliderTab.closest('.vce-pageable-container');
      sliders.push(slider);
    } else {
      sliders = Array.prototype.slice.call(document.querySelectorAll('.vce-pageable-container'));
    }
    if (sliders.length) {
      sliders.forEach(function (slider) {
        var sliderId = slider.id;
        var slides = slider.querySelector('.vce-pageable-container-slides');
        var initialSlide = 0;
        var dots = $(slider).find('.vce-pageable-container-dots').last().get(0);
        var slideDotClasses = [];
        var slideItems = $(slides).find('.slick-track').first().children(':not(.slick-cloned)');
        slideItems.each(function (index, slide) {
          if (slider.dataset.vcvSlickKeepActiveSlide === 'true' && slide.classList.contains('slick-active')) {
            initialSlide = index;
          }
          var className = slide.dataset.vceSlickDotActive || '';
          slideDotClasses.push(className);
          slide.dataset.vceSlickSliderId = sliderId
        });
        var customPaging = function (slider, i) {
          return $('<button class="' + slideDotClasses[ i ] + '" type="button" data-role="none" role="button" tabindex="0" />').text(i + 1).on('click', function () {
            $(slides).vcSlick('slickPause');
          });
        }
        var autoplay = slider.dataset.vceSlickAutoplay === 'true'
        if (slider.dataset.hasOwnProperty('vcvSlickAutoplay')) {
          autoplay = false
        }
        var settings = {
          autoplay: autoplay,
          autoplaySpeed: slider.dataset.vceSlickAutoplayDelay || 10000,
          fade: slider.dataset.vceSlickEffect === 'fade',
          arrows: false,
          appendDots: dots,
          dots: true,
          customPaging: customPaging,
          initialSlide: initialSlide,
          respondTo: 'slider',
          swipe: true,
          swipeToSlide: true,
          touchMove: true,
          adaptiveHeight: true
        };
        slides = $(slides);
        if (slides.hasClass('slick-initialized')) {
          slides.vcSlick && slides.vcSlick('unslick');
          slides.removeClass('slick-initialized');
          slides.find('.vc-slick-item').each(function () {
            $(this).attr('style', '');
          });
        }
        if (slides.vcSlick && slides.vcSlick(settings) && slides.vcSlick('slickFilter', function () { return this.id && this.dataset.vceSlickSliderId === sliderId })
        ) {
          slideItems.each(function (index, slide) {
            addResizeListener(slide, function () {
              slides.vcSlick('setPosition')
            })
          });
          slider.setAttribute('data-vcv-slick-initialized', 'true');
        }
      });
    }
  });
})(window.jQuery)
