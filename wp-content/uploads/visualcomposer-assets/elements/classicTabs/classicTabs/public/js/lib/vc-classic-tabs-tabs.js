/* =========================================================
 * vce-tabs.js v1.0.0
 * =========================================================
 * Copyright 2013 Wpbakery
 *
 * Visual composer Tabs
 * ========================================================= */
+function ($) {
  'use strict';

  var Tabs, old, clickHandler, changeHandler;

  /**
   * Tabs object definition
   * @param element
   * @constructor
   */
  Tabs = function (element, options) {
    this.$element = $(element);
    this.activeAttribute = 'data-vcv-active';
    this.tabSelector = '[data-vce-classic-tab]';

    // cached vars
    this.useCacheFlag = undefined;
    this.$target = undefined;
    this.selector = undefined;
    this.$targetTab = undefined;
    this.$relatedAccordion = undefined;
    this.$container = undefined;
  };

  /**
   * Is cache used
   * @returns {boolean}
   */
  Tabs.prototype.isCacheUsed = function () {
    var useCache, that;
    that = this;
    useCache = function () {
      return false !== that.$element.data('vceUseCache');
    };

    if ('undefined' === typeof(this.useCacheFlag)) {
      this.useCacheFlag = useCache();
    }

    return this.useCacheFlag;
  };

  /**
   * Get container
   * @returns {*|Number}
   */
  Tabs.prototype.getContainer = function () {
    if (!this.isCacheUsed()) {
      return this.findContainer();
    }

    if ('undefined' === typeof(this.$container)) {
      this.$container = this.findContainer();
    }

    return this.$container;
  };

  /**
   * Find container
   * @returns {window.jQuery}
   */
  Tabs.prototype.findContainer = function () {
    var $container;
    $container = this.$element.closest(this.$element.data('vceContainer'));
    if (!$container.length) {
      $container = $('body');
    }
    return $container;
  };

  /**
   * Get container accordions
   * @returns {*}
   */
  Tabs.prototype.getContainerAccordion = function () {
    return this.getContainer().find('[data-vce-classic-accordion]');
  };

  /**
   * Get selector
   * @returns {*}
   */
  Tabs.prototype.getSelector = function () {
    var findSelector, $this;

    $this = this.$element;
    findSelector = function () {
      var selector;

      selector = $this.data('vceTarget');
      if (!selector) {
        selector = $this.attr('href');
      }

      return selector;
    };

    if (!this.isCacheUsed()) {
      return findSelector();
    }

    if ('undefined' === typeof(this.selector)) {
      this.selector = findSelector();
    }

    return this.selector;
  };

  /**
   * Get target
   * @returns {*}
   */
  Tabs.prototype.getTarget = function () {
    var selector;
    selector = this.getSelector();

    if (!this.isCacheUsed()) {
      return this.getContainer().find(selector);
    }

    if ('undefined' === typeof(this.$target)) {
      this.$target = this.getContainer().find(selector);
    }

    return this.$target;
  };

  /**
   * Get related accordion
   * @returns {*}
   */
  Tabs.prototype.getRelatedAccordion = function () {
    var tab, filterElements;

    tab = this;

    filterElements = function () {
      var $elements;
      $elements = tab.getContainerAccordion().filter(function () {
        var $that, accordion;
        $that = $(this);

        accordion = $that.data('vce.classic.accordion');

        if ('undefined' === typeof(accordion)) {
          $that.vceClassicAccordion();
          accordion = $that.data('vce.classic.accordion');
        }
        return tab.getSelector() === accordion.getSelector();
      });
      if ($elements.length) {
        return $elements;
      }

      return undefined;
    };
    if (!this.isCacheUsed()) {
      return filterElements();
    }

    if ('undefined' === typeof(this.$relatedAccordion)) {
      this.$relatedAccordion = filterElements();
    }

    return this.$relatedAccordion;
  };

  /**
   * Trigger event
   * @param event
   */
  Tabs.prototype.triggerEvent = function (event) {
    var $event;
    if ('string' === typeof(event)) {
      $event = $.Event(event);
      this.$element.trigger($event);
    }
  };

  /**
   * Get target tab
   * @returns {*|Number}
   */
  Tabs.prototype.getTargetTab = function () {
    var $this;
    $this = this.$element;

    if (!this.isCacheUsed()) {
      return $this.closest(this.tabSelector);
    }

    if ('undefined' === typeof(this.$targetTab)) {
      this.$targetTab = $this.closest(this.tabSelector);
    }

    return this.$targetTab;
  };

  /**
   * Tab Clicked
   */
  Tabs.prototype.tabClick = function () {
    this.getRelatedAccordion().trigger('click');
  };

  /**
   * Get tab left position from related accordion
   */
  Tabs.prototype.getTabPosition = function (target) {
    var title = target.find('[class*="title"]');
    var tabs = this.getContainer().find(this.tabSelector);
    var accordions = this.getContainerAccordion();
    var activeTabIndex = tabs.index(target);
    var position = parseInt(title.css('marginLeft'));

    for (var i = 0; i < activeTabIndex; i++) {
      var $tab = $(tabs[i]).find('[class*="title"]');
      var $accordion = $(accordions[i]).find('span');
      var marginLeft = parseInt($tab.css('marginLeft'));
      var marginRight = (i - 1) === activeTabIndex ? 0 : parseInt($tab.css('marginRight'));
      var width = parseInt($accordion.width());
      position += marginLeft + width + marginRight;
    }

    return position;
  };

  /**
   * Tab Show
   */
  Tabs.prototype.show = function () {
    // if showed no need to do anything
    if (this.getTargetTab().attr(this.activeAttribute) === 'true') {
      return;
    }

    this.triggerEvent('show.vce.classicTab');
    this.getTargetTab().attr(this.activeAttribute, true);
  };

  /**
   * Tab Hide
   */
  Tabs.prototype.hide = function () {

    // if showed no need to do anything
    if (!this.getTargetTab().attr(this.activeAttribute) || this.getTargetTab().attr(this.activeAttribute) === 'false') {
      return;
    }

    this.triggerEvent('hide.vce.classicTab');
    this.getTargetTab().removeAttr(this.activeAttribute);
  };

  // Tabs plugin definition
  // ==========================
  function Plugin (action, options) {
    var args;

    args = Array.prototype.slice.call(arguments, 1);
    return this.each(function () {
      var $this, data;

      $this = $(this);
      data = $this.data('vce.classic.tabs');

      if (!data) {
        data = new Tabs($this, $.extend(true, {}, options));

        $this.data('vce.classic.tabs', data)
      }
      if ('string' === typeof(action)) {
        data[action].apply(data, args)
      }
    })
  }

  old = $.fn.vceClassicTabs;

  $.fn.vceClassicTabs = Plugin;
  $.fn.vceClassicTabs.Constructor = Tabs;

  // Tabs no conflict
  // ==========================
  $.fn.vceClassicTabs.noConflict = function () {
    $.fn.vceClassicTabs = old;
    return this;
  };

  // Tabs data-api
  // =================

  clickHandler = function (e) {
    var $this;
    $this = $(this);
    e.preventDefault();
    Plugin.call($this, 'tabClick');
  };

  changeHandler = function (e) {
    var caller;
    caller = $(e.target).data('vce.classic.accordion');

    if ('undefined' === typeof(caller.getRelatedTab)) {
      /**
       * Get related tab from accordion
       * @returns {*}
       */
      caller.getRelatedTab = function () {
        var findTargets;

        findTargets = function () {
          var $targets;
          $targets = caller.getContainer().find('[data-vce-classic-tabs]').filter(function () {
            var $this, tab;
            $this = $(this);

            tab = $this.data('vce.classic.accordion');
            if ('undefined' === typeof(tab)) {
              $this.vceClassicAccordion();
            }
            tab = $this.data('vce.classic.accordion');

            return tab.getSelector() === caller.getSelector();
          })

          return $targets;
        }

        if (!caller.isCacheUsed()) {
          return findTargets();
        }

        if ('undefined' === typeof(caller.relatedTab)) {
          caller.relatedTab = findTargets();
        }

        return caller.relatedTab;
      }
    }

    Plugin.call(caller.getRelatedTab(), e.type);
  };

  function setActiveTab (action, elementId) {
    var $tabs = $('.vce-classic-tabs');

    if (action !== undefined && action !== 'add' && action !== 'update') {
      return;
    }

    if (action === 'update') {
      var el = $('#el-' + elementId);

      if (el && el.hasClass('vce-global-element')) {
        $tabs = el.find('.vce-classic-tabs');
      } else {
        return;
      }
    }

    if (action && action === 'add' && elementId) {
      var id = '#el-' + elementId;
      $tabs = $(id + '.vce-classic-tabs');

      if (!$tabs.length) {
        id = '#el-' + elementId + '-temp';
        $tabs = $(id + '.vce-classic-tabs');
      }
    }

    $tabs && $tabs.each(function (index, element) {
      var $element = $(element);
      var activeTabIndex = parseInt($element.attr('data-active-tab'));
      var tabContainer = $element.find('.vce-classic-tabs-list')[0];
      var tabHeadings = $(tabContainer).find('> [data-vce-classic-tab]');
      var resizeContainer = element;
      var activeElem = null

      activeTabIndex = tabHeadings.length >= activeTabIndex ? activeTabIndex - 1 : 0;

      $(tabHeadings).each(function (i, elem) {
        if (i === activeTabIndex) {
          activeElem =  $(elem)
        }
      });

      if ($(element).find('> .vce-classic-tabs-resize-helper').length) {
        resizeContainer = $(element).find('> .vce-classic-tabs-resize-helper')[0]
      }

      addResizeListener(resizeContainer, checkOnResize, { activeTab: activeElem });
    })
  }

  function addResizeListener (element, fn, options) {
    var _this = this
    if ($(element).find('> object').length) {
      return;
    }
    var isIE = !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/Edge/));
    if (window.getComputedStyle(element).position === 'static') {
      element.style.position = 'relative';
    }
    var obj = element.__resizeTrigger__ = document.createElement('object');
    obj.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; opacity: 0; pointer-events: none; z-index: -1;');
    obj.__resizeElement__ = element;
    obj.onload = function () {
      obj.contentDocument.defaultView.addEventListener('resize', fn.bind(_this, element));
      fn(element);
      $(element).attr('data-vcv-initialized', true);
    };
    obj.type = 'text/html';
    if (isIE) {
      element.appendChild(obj);
    }
    obj.data = 'about:blank';
    if (!isIE) {
      element.appendChild(obj);
    }
  }

  function checkOnResize (element) {
    var $element = $(element);
    var tabContainer = $element.find('.vce-classic-tabs-list').first();
    var $tabs = $(tabContainer).find('> [data-vce-classic-tab]');
    var totalTabsWidth = 0;
    var tabContainerWidth = $element.outerWidth();

    $tabs.each(function (i, tab) {
      totalTabsWidth += $(tab).outerWidth(true);
    });

    // if container is bigger, make it tabs
    if (tabContainerWidth > totalTabsWidth) {
      $element.attr('data-vcv-tabs-state', 'tabs')
    } else { // make it accordion
      $element.attr('data-vcv-tabs-state', 'accordion')
    }
  }

  window.vcv ? window.vcv.on('ready', setActiveTab) : setActiveTab();
  $(document).on('click.vce.classicTabs.data-api', '[data-vce-classic-tabs]', clickHandler);
  $(document).on('show.vce.classicAccordion hide.vce.classicAccordion', changeHandler);
}(window.jQuery);
