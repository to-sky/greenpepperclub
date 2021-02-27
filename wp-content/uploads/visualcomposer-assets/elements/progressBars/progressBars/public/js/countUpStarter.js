/* eslint-disable */
(function (window) {
  // Polyfill for Element.closest() method
  this.Element && function(ElementPrototype) {
    ElementPrototype.closest = ElementPrototype.closest ||
      function(selector) {
        var el = this;
        while (el.matches && !el.matches(selector)) el = el.parentNode;
        return el.matches ? el : null;
      }
  }(Element.prototype);

  var startBarAnimation = function (element) {
    if (element.closest('.vcvhelper')) {
      if (element.classList.contains('vce-progress-bar-play-animation')) {
        element.classList.remove('vce-progress-bar-play-animation')
      }
      var timeout = setTimeout(function() {
        element.classList.add('vce-progress-bar-play-animation')
        window.clearTimeout(timeout)
      }, 1)
    } else {
      element.classList.add('vce-progress-bar-play-animation')
    }
  }
  var startCountUp = function (countUp, valueElement, barElement) {
    var previousElementWaypoints = valueElement.vcvWaypoints
    if (previousElementWaypoints) {
      previousElementWaypoints.destroy()
    }
    var waypointObj = new window.Waypoint({
      element: valueElement,
      handler: function (a, b, c, d, e) {
        if (!countUp.error) {
          countUp.start();
          startBarAnimation(barElement);
        } else {
          console.error(countUp.error);
        }
        waypointObj.destroy()
      },
      offset: '95%'
    })
    valueElement.vcvWaypoints = waypointObj
  }

  var enableCountUp = function () {
    var counters = [];

    counters = [].slice.call(document.querySelectorAll('.vce-progress-bar-container'));

    counters.forEach(function(countUpElement) {
      var startValue = countUpElement.getAttribute('data-vce-count-up-start-value');
      var endValue = countUpElement.getAttribute('data-vce-count-up-end-value');
      var useGrouping = countUpElement.getAttribute('data-vce-count-up-grouping') === 'true';
      var separator = countUpElement.getAttribute('data-vce-count-up-separator');
      var duration = parseFloat(countUpElement.getAttribute('data-vce-count-up-duration'));
      var useEasing = countUpElement.getAttribute('data-vce-count-up-easing') === 'true';
      var decimalCount = endValue.split('.')[ 1 ] ? endValue.split('.')[ 1 ].length : 0;
      var countUpResult = countUpElement.querySelector('.vce-progress-bar-value-result');
      var countUpBar = countUpElement.querySelector('.vce-progress-bar-wrapper');

      var options = {
        useEasing: useEasing,
        useGrouping: useGrouping,
        separator: separator,
        decimal: '.',
        prefix: '',
        suffix: ''
      };
      var countUp = new window.vcCountUp(countUpResult, parseFloat(startValue), parseFloat(endValue), decimalCount, duration, options);
      startCountUp(countUp, countUpResult, countUpBar);
    });
  }

  window.vcv.on('ready', function (action, id, options) {
    var skipAttributes = ['designOptions', 'customClass', 'metaCustomId', 'alignment', 'font', 'colorType', 'color', 'gradientStart', 'gradientEnd', 'gradientAngle', 'fontSize', 'lineHeight', 'letterSpacing'];
    var skipCounter = action === 'merge' || (options && options.changedAttribute && (skipAttributes.indexOf(options.changedAttribute) > -1));

    if (!skipCounter) {
      // Delay for editor
      var delay = action ? 100 : 10;

      if (window.vcCountUp) {
        setTimeout(function () {
          enableCountUp();
        }, delay);
      } else {
        console.error('countUp library is not enqueued');
      }
    }
  });
}(window));
/* eslint-enable */
