(function (window) {
  var startCountUp = function (countUp, element) {
    var previousElementWaypoints = element.vcvWaypoints
    if (previousElementWaypoints) {
      previousElementWaypoints.destroy()
    }
    var waypointObj = new window.Waypoint({
      element: element,
      handler: function (a, b, c, d, e) {
        if (!countUp.error) {
          countUp.start();
        } else {
          console.error(countUp.error);
        }
        waypointObj.destroy()
      },
      offset: '95%'
    })
    element.vcvWaypoints = waypointObj
  }

  var enableCountUp = function (id) {
    var counters = [];

    if (id) {
      var counter = document.querySelector(`#el-${id}.vce-counter-up-container .vce-counter-up`);
      if (counter) {
        counters.push(counter);
      }
    } else {
      counters = [].slice.call(document.querySelectorAll('.vce-counter-up'));
    }

    counters.forEach(function(countUpElement) {
      var startValue = countUpElement.getAttribute('data-vce-count-up-start-value');
      var endValue = countUpElement.getAttribute('data-vce-count-up-end-value');
      var useGrouping = countUpElement.getAttribute('data-vce-count-up-grouping') === 'true';
      var separator = countUpElement.getAttribute('data-vce-count-up-separator');
      var duration = parseFloat(countUpElement.getAttribute('data-vce-count-up-duration'));
      var useEasing = countUpElement.getAttribute('data-vce-count-up-easing') === 'true';
      var decimalCount = endValue.split('.')[ 1 ] ? endValue.split('.')[ 1 ].length : 0;
      var countUpResult = countUpElement.querySelector('.vce-counter-up-result');

      var options = {
        useEasing: useEasing,
        useGrouping: useGrouping,
        separator: separator,
        decimal: '.',
        prefix: '',
        suffix: ''
      };
      var countUp = new window.vcCountUp(countUpResult, parseFloat(startValue), parseFloat(endValue), decimalCount, duration, options);
      startCountUp(countUp, countUpResult);
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
          enableCountUp(action && id ? id : '');
        }, delay);
      } else {
        console.error('countUp library is not enqueued');
      }
    }
  });
}(window));
