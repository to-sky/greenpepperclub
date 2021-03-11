jQuery( document ).ready(function($) {
    let maxItems = parseInt($('#maxItems').text());
    let qtyItemsIntoCart = 0;
    let foodItems = [];

    // Get all item id's into cart
    function getAllIdsIntoCart() {
        return foodItems.map(el => el.id);
    }

    // Get item index into foodItems array
    function getItemIndexIntoCart(id) {
        return foodItems.findIndex(el => el.id === id);
    }

    // Get qty items into cart by id
    function getQtyFromCartById(id, returnInteger = false) {
        let itemIndex = getItemIndexIntoCart(id);

        if (foodItems[itemIndex] === undefined) {
            return returnInteger ? 0 : false;
        }

        return foodItems[itemIndex].qty;
    }

    // Update total quantity into "Your meals" block (cart label)
    function updateTotalQty() {
        $('#totalQty').text(qtyItemsIntoCart);
    }

    // Check if cart is full
    function checkCartIsFull() {
        return qtyItemsIntoCart === maxItems;
    }

    // Buttons handler
    $('body').on('click', '[data-action="plus"], [data-action="minus"], [data-action="delete"]', function (e) {
        let action = $(this).data('action');
        let id = $(this).data('id');
        let foodItem = $(`#foodItem-${id}`);
        let foodInput = $(`#qty-${id}`);

        // Run action add to cart or remove from cart
        if (action === 'plus') {
            addToCart(id);

            // Set active food item card and unblock minus button
            foodItem.addClass('active');
            foodItem.find('button[data-action="minus"]').prop('disabled', false);
        } else if (action === 'minus') {
            removeFromCart(id);
        } else if (action === 'delete') {
            dropFromCart(id);
        }

        // Add qty value to current input
        foodInput.val(getQtyFromCartById(id, true))

        // Set label with current qty into cart
        updateTotalQty();

        let cartBtn = $(".cartBtn button");

        // When cart is full
        if (checkCartIsFull()) {
            // Block all '+' buttons
            $('button[data-action="plus"]').prop('disabled', true);

            // Fill all hidden inputs
            fillHiddenInputs();

            // Enable 'Add to cart button'
            cartBtn.prop('disabled', false);
        } else {
            // Disable 'Add to cart button'
            cartBtn.prop('disabled', true);
            $('button[data-action="plus"]').prop('disabled', false);
        }

        console.log(foodItems, qtyItemsIntoCart)
    });


    function fillHiddenInputs() {
        //     food_items_str = food_items.toString().replace(/,\s*$/, "");
        //     food_items_ids_str = food_items_ids.toString().replace(/,\s*$/, "");
        //     qty_str = qty.toString().replace(/,\s*$/, "");

        // $('#food_item_ids').val(food_items_ids_str);
        // $('#food_items').val(food_items_str);
        // $('#food_items_qty').val(qty_str);
    }


    // Add food item to cart
    function addToCart(id) {
        if (checkCartIsFull()) {
            return false;
        }

        if (!getQtyFromCartById(id)) {
            foodItems.push({id: id, qty: 1});

            // Add HTML block to cart items
            $('#cartItems').append(createCartItem(id));
        } else {

            foodItems[getItemIndexIntoCart(id)].qty++;

            $(`#cartItemQty-${id}`).text(foodItems[getItemIndexIntoCart(id)].qty);
        }

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
            $(`#cartItem-${id}`).remove();

            let foodItem = $(`#foodItem-${id}`);
            foodItem.removeClass('active');
            foodItem.find('button[data-action="minus"]').prop('disabled', true);
            foodItem.find('button[data-action="plus"]').prop('disabled', false);
        } else {
            foodItems[itemIndexIntoCart].qty--;

            $(`#cartItemQty-${id}`).text(foodItems[getItemIndexIntoCart(id)].qty);
        }

        // Update qty items into cart
        qtyItemsIntoCart--;

        return true;
    }

    // Remove from cart food item with all quantity
    function dropFromCart(id) {
        let itemIndexIntoCart = getItemIndexIntoCart(id);

        qtyItemsIntoCart -= foodItems[itemIndexIntoCart].qty;

        foodItems.splice(itemIndexIntoCart, 1);

        $(`#cartItem-${id}`).remove();

        let foodItem = $(`#foodItem-${id}`);
        foodItem.removeClass('active');
        foodItem.find('button[data-action="minus"]').prop('disabled', true);

        return true;
    }

    // Create HTML food item for cart block
    function createCartItem(id) {
        let itemThumbnail = $('#itemThumb-' + id).html();
        let itemName = $('#itemName-' + id).html();

        return `<div class="d-flex p-3 justify-content-between bg-white border-top" id="cartItem-${id}">
                                <div class="d-flex flex-column-reverse justify-content-around align-items-center">
                                    <button class="btn btn-primary gp-minus-btn food-font14" data-action="minus" data-id="${id}">&minus;</button>
                                     <span id="cartItemQty-${id}" class="d-inline-block">${getQtyFromCartById(id)}</span>
                                    <button class="btn btn-primary gp-plus-btn food-font14" data-action="plus" data-id="${id}">&plus;</button>
                                </div>

                                <div class="w-25 px-3">${itemThumbnail}</div>

                                <div class="d-flex align-items-center flex-fill justify-content-between">
                                    <span class="pr-3 d-inline-block food-font14">${itemName}</span>
                                    <i class="fas fa-times gp-delete-btn" data-action="delete" data-id="${id}"></i>
                                </div>
                            </div>`;
    }
});