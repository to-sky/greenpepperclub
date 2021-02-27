(function ($) {
  window.vcv.on('ready', function () {
    var banners = $('.vce-banner-element')
    if (banners.length) {
      banners.each(function () {
        var banner = $(this)
        var images = banner.find('.vce-banner-element-image')
        if (images.hasClass('vcvhelper')) {
          return
        }
        if (images.length > 1) {
          images.css({
            'position': 'absolute',
            'visibility': 'hidden'
          })
          var randomIndex = Math.floor((Math.random() * images.length))
          var randomImage = $(images[ randomIndex ])
          randomImage.removeAttr('style')
        }
      })
    }
  })
})(window.jQuery)
