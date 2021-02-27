/* global vcv */
(function ($) {
  vcv.on('hoverImageReady', function () {
    var zoomItem = $('.vce-hover-image-zoom-container')
    zoomItem.each(function () {
      var $source = $(this)
      $source.trigger('zoom.destroy')
      var imgSrc = $source.find('.vce-hover-image').data('img-src')

      $source.find('.zoomImg').each(function () {
        $(this).remove()
      })

      $source.zoom({
        url: imgSrc
      })
    })
  })

  vcv.on('ready', function () {
    $(function () {
      vcv.trigger('hoverImageReady')
    })
  })
})(window.jQuery)
