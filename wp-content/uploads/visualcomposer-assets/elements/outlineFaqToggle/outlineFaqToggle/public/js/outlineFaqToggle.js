/* global vcv */
(function ($) {
  vcv.on('ready', function () {
    $(function () {
      var collapsibleItems = $('.vce-outline-faq-toggle-inner')
      var settings = {
        titleSelector: '.vce-outline-faq-toggle-title',
        contentSelector: '.vce-outline-faq-toggle-text-block',
        activeClass: 'vce-outline-faq-toggle-state--opened'
      }
      collapsibleItems.each(function () {
        var item = $(this)
        !item.data('vcvCollapsible') && item.collapsible(settings)
      })
    })
  })
})(window.jQuery)
