/* eslint-disable */
(function () {
  vcv.on('ready', function () {
    var sandwichMenus = document.querySelectorAll("[data-vce-vertical-sandwich-menu]");
    sandwichMenus = [].slice.call(sandwichMenus);
    var settings = {
      modalSelector: "[data-vce-vertical-sandwich-menu-modal]",
      openSelector: "[data-vce-vertical-sandwich-menu-open-button]",
      closeSelector: "[data-vce-vertical-sandwich-menu-close-button]",
      activeAttribute: "data-vcv-vertical-sandwich-menu-visible"
    };

    sandwichMenus.forEach(function(menu) {
      settings.container = menu;
      new window.vcvSandwichModal(settings);
    });
  });
})();
/* eslint-enable */
