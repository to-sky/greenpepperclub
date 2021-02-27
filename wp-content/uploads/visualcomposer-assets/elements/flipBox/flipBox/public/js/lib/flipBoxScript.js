(function ($) {
  if (typeof window.vceFlipBox !== 'undefined') {
    return
  }

  function setHoverBoxPerspective (hoverBox) {
    hoverBox.each(function () {
      var $this = $(this)
      var width = $this.width()
      var perspective = width * 4 + 'px'

      $this.css('perspective', perspective)
    })
  }

  function setHoverBoxHeight (hoverBox) {
    hoverBox.each(function () {
      var $this = $(this)
      var hoverBoxInner = $this.find('.vce-flip-box-inner')

      var frontHeight = $this.find('.vce-flip-box-front-inner').outerHeight()
      var backHeight = $this.find('.vce-flip-box-back-inner').outerHeight()
      var hoverBoxHeight = (frontHeight > backHeight) ? frontHeight : backHeight

      hoverBoxInner.css('min-height', (hoverBoxHeight || 0) + 'px')
    })
  }

  function prepareHoverBox () {
    var hoverBox = $('.vce-flip-box')

    if (hoverBox) {
      setHoverBoxHeight(hoverBox)
      setHoverBoxPerspective(hoverBox)
    }
  }

  prepareHoverBox()
  window.addEventListener('resize', prepareHoverBox)
  window.vceFlipBox = prepareHoverBox
})(window.jQuery)
