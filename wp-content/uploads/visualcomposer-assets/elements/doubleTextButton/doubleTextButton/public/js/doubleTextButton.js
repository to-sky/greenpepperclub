/* eslint-disable */
(function () {
  /**
   * Uses canvas.measureText to compute and return the width of the given text of given font in pixels.
   *
   * @param {String} text The text to be rendered.
   * @param {String} font The css font descriptor that text is to be rendered with (e.g. "bold 14px verdana").
   *
   * @see https://stackoverflow.com/questions/118241/calculate-text-width-with-javascript/21015393#21015393
   */
  function getTextWidth(text, font) {
    // re-use canvas object for better performance
    var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
    var context = canvas.getContext("2d");
    context.font = font;
    var metrics = context.measureText(text);
    return metrics.width;
  }

  vcv.on('ready', function () {
    var buttonContainers = Array.prototype.slice.call(document.querySelectorAll('.vce-double-text-button-container'));

    buttonContainers.forEach(function (buttonContainer) {
      var button = buttonContainer.querySelector('.vce-double-text-button-text');
      var buttonHover = buttonContainer.querySelector('.vce-double-text-button-text-hover');
      var buttonText = button.textContent;
      var buttonHoverText = buttonHover.textContent;

      if (buttonHoverText.length > buttonText.length) {
        var width = getTextWidth(buttonHoverText, window.getComputedStyle(buttonHover).font);
        var paddingLeft = parseInt(window.getComputedStyle(button).paddingLeft);
        var paddingRight = parseInt(window.getComputedStyle(button).paddingRight);
        button.style.width = Math.ceil(width) + paddingLeft + paddingRight + 'px';
      } else {
        button.removeAttribute('style');
      }
    });
  });
}());
/* eslint-enable */
