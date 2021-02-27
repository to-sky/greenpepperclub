(function ($) {
  var itemCount = null

  var setCountersHtml = function (data, counters) {
    if (counters && counters.length) {
      counters.each(function (index, item) {
        var countElement = item.querySelector('.vce-cart-icon-with-counter-count')
        item.setAttribute('data-vcv-cart-item-count', data)
        countElement.innerHTML = data
      })
    }
  }

  var setCartItemCount = function (counters) {
    var ajaxUrl = window.VCV_WP_CARTICONWITHCOUNTER_AJAX_URL && window.VCV_WP_CARTICONWITHCOUNTER_AJAX_URL()
    var nonce = window.VCV_WP_CARTICONWITHCOUNTER_USER_NONCE && window.VCV_WP_CARTICONWITHCOUNTER_USER_NONCE()

    if (ajaxUrl && nonce) {
      $.ajax({
        url: ajaxUrl + '&vcv-nonce=' + nonce,
        success: function (data) {
          try {
            var responseData = JSON.parse(data)
            if (responseData && responseData.status) {
              var count = responseData.count
              itemCount = count
              setCountersHtml(count, counters)
            } else {
              console.warn(responseData.message)
            }
          } catch (err) {
            console.warn(err)
          }
        }
      })
    }
  }

  var handleCartChange = function () {
    var counters = $('.vce-cart-icon-with-counter')
    setCartItemCount(counters)
  }

  var setCounterUrl = function (counters) {
    counters.each(function (index, item) {
      var linkElement = item.querySelector('.vce-cart-icon-with-counter-inner')
      if (linkElement) {
        linkElement.href = window.VCV_WP_CARTICONWITHCOUNTER_CART_URL ? window.VCV_WP_CARTICONWITHCOUNTER_CART_URL() : ''
      }
    })
  }

  $(document.body).on('added_to_cart removed_from_cart', handleCartChange)

  window.vcv.on('ready', function (action, id) {
    var counters = ''
    if (id) {
      counters = $('.vce-cart-icon-with-counter#el-' + id)
    } else {
      counters = $('.vce-cart-icon-with-counter')
    }
    if (counters && counters.length) {
      if (action && id) {
        if (action === 'add') {
          if (itemCount !== null) {
            setCountersHtml(itemCount, counters)
          } else {
            setCartItemCount(counters)
          }
        }
      } else {
        if (itemCount !== null) {
          setCountersHtml(itemCount, counters)
        } else {
          setCartItemCount(counters)
        }
        setCounterUrl(counters)
      }
    }
  })
})(window.jQuery)
