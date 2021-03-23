jQuery( document ).ready(function($) {
    let maxItems = parseInt($('#maxItems').text());
    let qtyItemsIntoCart = 0;
    let foodItems = [];
    let addToCartBtn = $('#foodItems button[data-action="add-to-cart"]');

    // Get all item types from cart
    function getAllTypesFromCart(type) {
        return foodItems.map(el => el[type]);
    }

    // Get item index into foodItems array
    function getItemIndexIntoCart(id) {
        return foodItems.findIndex(el => el.id === id);
    }

    // Get qty items from cart by id
    function getQtyFromCartById(id, returnInteger = false) {
        let itemIndex = getItemIndexIntoCart(id);

        if (foodItems[itemIndex] === undefined) {
            return returnInteger ? 0 : false;
        }

        return foodItems[itemIndex].qty;
    }

    // Check if cart is full
    function checkCartIsFull() {
        return qtyItemsIntoCart === maxItems;
    }

    // Main actions
    $('body').on('click', '[data-action="plus"], [data-action="minus"], [data-action="delete"]', function (e) {
        buttonsHandler($(this).data('id'), $(this).data('action'));
    });

    // Get product from local storage if exists
    let productId = localStorage.getItem('product_id');

    if (productId !== null) {
        productId = parseInt(productId);

        $.when(
            buttonsHandler(productId, 'plus')
        ).then(function () {
            localStorage.removeItem('product_id');
        });
    }

    // Buttons handler
    function buttonsHandler(id, action) {
        switch(action) {
            case 'plus':
                addToCart(id);
                break;
            case 'minus':
                removeFromCart(id);
                break;
            case 'delete':
                deleteFromCart(id);
        }

        // Add qty value to current input
        $(`#qty-${id}`).val(getQtyFromCartById(id, true))

        // Set label with current qty into cart
        $('#totalQty').text(qtyItemsIntoCart);

        // When cart is full
        if (checkCartIsFull()) {
            $('button[data-action="plus"]').prop('disabled', true);

            $.when(
                fillHiddenInputs()
            ).then(function () {
                addToCartBtn.prop('disabled', false);
            });
        } else {
            addToCartBtn.prop('disabled', true);
            $('button[data-action="plus"]').prop('disabled', false);
        }

        console.log(foodItems);
    }

    // Click on "Add to cart" button
    addToCartBtn.click(function () {
        $(this).text('Please wait!');

        $('form button[name="add-to-cart"]').click();
    })

    // Fill hidden inputs
    function fillHiddenInputs() {
        $('#food_item_ids').val( JSON.stringify( getAllTypesFromCart('id') ));
        $('#food_item_names').val( JSON.stringify( getAllTypesFromCart('name') ) );
        $('#food_item_qty').val( JSON.stringify( getAllTypesFromCart('qty') ) );
    }

    // Add food item to cart
    function addToCart(id) {
        if (checkCartIsFull()) {
            return false;
        }

        if (!getQtyFromCartById(id)) {
            let itemName = $(`#itemName-${id}`).text();
            foodItems.push({
                id: id,
                qty: 1,
                name: itemName.trim()
            });

            // Add HTML block to cart items
            $('#cartItems').append(createCartItem(id));
        } else {
            foodItems[getItemIndexIntoCart(id)].qty++;

            $(`#cartItemQty-${id}`).text(foodItems[getItemIndexIntoCart(id)].qty);
        }

        setStatusForButtons(id, 'plus');

        // Update qty items into cart
        qtyItemsIntoCart++;

        return true;
    }

    // Remove food item from cart
    function removeFromCart(id) {
        let itemIndexIntoCart = getItemIndexIntoCart(id);

        if (qtyItemsIntoCart === 0 || itemIndexIntoCart === -1) {
            return false;
        }

        if (getQtyFromCartById(id) === 1) {
            foodItems.splice(itemIndexIntoCart, 1);

            removeHtmlItemFromCart(id);

            setStatusForButtons(id, 'remove');
        } else {
            foodItems[itemIndexIntoCart].qty--;

            $(`#cartItemQty-${id}`).text(foodItems[getItemIndexIntoCart(id)].qty);
        }

        // Update qty items into cart
        qtyItemsIntoCart--;

        return true;
    }

    // Remove from cart food item with all quantity
    function deleteFromCart(id) {
        let itemIndexIntoCart = getItemIndexIntoCart(id);

        qtyItemsIntoCart -= foodItems[itemIndexIntoCart].qty;

        foodItems.splice(itemIndexIntoCart, 1);

        removeHtmlItemFromCart(id);

        setStatusForButtons(id, 'delete');

        return true;
    }

    // Remove HTML element from cart, add animation
    function removeHtmlItemFromCart(id) {
        $(`#cartItem-${id}`).slideUp(function() {
            $(this).remove();

            let cartItems = $('#cartItems');

            if ($(cartItems).children().length === 0) {
                $(cartItems).hide();
            }
        });
    }

    // Set disabled status depending on exists item into cart
    function setStatusForButtons(id, action) {
        let foodItem = $(`#foodItem-${id}`);

        switch(action) {
            case 'plus':
                foodItem.addClass('active').find('button[data-action="minus"]').prop('disabled', false);
                break;
            case 'remove':
                foodItem.removeClass('active').find('button[data-action="minus"]').prop('disabled', true);
                break;
            case 'delete':
                foodItem.removeClass('active').find('button[data-action="minus"]').prop('disabled', true);
                foodItem.find('button[data-action="plus"]').prop('disabled', false);
        }
    }

    // Create HTML food item for cart block
    function createCartItem(id) {
        let itemThumbnail = $('#itemThumb-' + id).html();
        let itemName = $('#itemName-' + id).html();

        return `<div class="bg-white" id="cartItem-${id}">
                    <div class="d-flex justify-content-between  p-3">
                        <div class="col-1 d-flex align-items-center flex-column justify-content-around">
                            <button class="gp-plus-btn" type="button" data-action="plus" data-id="${id}">
                                <i class="fas fa-plus"></i>
                            </button>
                            <span id="cartItemQty-${id}" class="food-font18 food-font-w400">${getQtyFromCartById(id)}</span>
                            <button class="gp-minus-btn" type="button" data-action="minus" data-id="${id}">
                                <i class="fas fa-minus"></i>
                            </button>
                        </div>

                        <div class="col-3 cart-food-item-thumbnail">${itemThumbnail}</div>

                        <div class="col-8 d-flex p-0 align-items-center justify-content-between">
                            <span class="pr-3 d-inline-block food-font13">${itemName}</span>
                            <i class="fas fa-times gp-delete-btn" data-action="delete" data-id="${id}"></i>
                        </div>
                    </div>
                </div>`;
    }

    // Show food items into cart for mobile
    $('#cartQtyCounter').click(function (e) {
        let cartItems = $('#cartItems');

        if (window.screen.width >= 1024) {
            return false;
        }

        if ($(cartItems).children().length === 0) {
            return false;
        }

        $(cartItems).slideToggle('400', function () {
            let catItemsContainer = $('.cart-items-container');

            if ($('.cart-items').is(':visible')) {
                catItemsContainer.addClass('opened')
            } else {
                catItemsContainer.removeClass('opened');
            }
        });
    })
});
