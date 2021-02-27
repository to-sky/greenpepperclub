/* eslint-disable */
(function (window) {
  var setValues = function (timer, d, h, m, s) {
    timer.querySelector('.vce-countdown-value-days .vce-countdown-number .vce-countdown-number--value').textContent = d;
    timer.querySelector('.vce-countdown-value-hours .vce-countdown-number .vce-countdown-number--value').textContent = h;
    timer.querySelector('.vce-countdown-value-minutes .vce-countdown-number .vce-countdown-number--value').textContent = m;
    timer.querySelector('.vce-countdown-value-seconds .vce-countdown-number .vce-countdown-number--value').textContent = s;
    if (timer.dataset.customizeTitles === 'true') {
      const customTitles = JSON.parse(timer.dataset.customTitles)
      timer.querySelector('.vce-countdown-value-days .vce-countdown-title .vce-countdown-title--value').textContent = d === 1 ? customTitles.day : customTitles.days;
      timer.querySelector('.vce-countdown-value-hours .vce-countdown-title .vce-countdown-title--value').textContent = h === 1 ? customTitles.hour : customTitles.hours;
      timer.querySelector('.vce-countdown-value-minutes .vce-countdown-title .vce-countdown-title--value').textContent = m === 1 ? customTitles.minute : customTitles.minutes;
      timer.querySelector('.vce-countdown-value-seconds .vce-countdown-title .vce-countdown-title--value').textContent = s === 1 ? customTitles.second : customTitles.seconds;
    } else {
      timer.querySelector('.vce-countdown-value-days .vce-countdown-title .vce-countdown-title--value').textContent = d === 1 ? 'Day' : 'Days';
      timer.querySelector('.vce-countdown-value-hours .vce-countdown-title .vce-countdown-title--value').textContent = h === 1 ? 'Hour' : 'Hours';
      timer.querySelector('.vce-countdown-value-minutes .vce-countdown-title .vce-countdown-title--value').textContent = m === 1 ? 'Minute' : 'Minutes';
      timer.querySelector('.vce-countdown-value-seconds .vce-countdown-title .vce-countdown-title--value').textContent = s === 1 ? 'Second' : 'Seconds';
    }
  };

  var setupTimer = function (timer) {
    clearInterval(window[timer.id])
    var countDownDate = new Date(timer.dataset.countTil).getTime();
    window[timer.id] = setInterval(function() {
      // Get todays date and time
      var now = new Date().getTime();

      // Find the distance between now an the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setValues(timer, days, hours, minutes, seconds);
      if (distance < 0) {
        clearInterval(window[timer.id]);
        setValues(timer, 0, 0, 0, 0);
      }
    }, 1000);
  };

  var enableCountdown = function (action) {
    var coundownTimers = [].slice.call(document.querySelectorAll('.vce-countdown-container'));
    coundownTimers.forEach(function (timer) {
      setupTimer(timer, action);
    });
  };

  window.vcv.on('ready', function (action, id, options) {
    enableCountdown();
  });
}(window));
/* eslint-enable */
