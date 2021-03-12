/*
    Conditions

    1. Plus button
    add food item to cart
    if cart is full then block "+" buttons on all food items


    2. Minus button
    remove food item from cart
    if current product qty < 1 then remove from cart


    3. Remove from cart

    Need to get:
    - input $('#food_items') must be filled the Names of food items;
            - input $('#food_items_ids') must be filled the id's of food items;
    - input $('#food_items_qty') must be filled the qty of food items;
 */


jQuery(document).ready(function ($) {
    let maxItems = parseInt($('#maxItems').text());
    let qtyItemsIntoCart = 0;
    let foodItems = [];

    //  Get all item id's into cart
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

        // console.log(foodItems, qtyItemsIntoCart)
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
                            <button class="btn btn-primary gp-minus-btn gp-sm-btn" data-action="minus" data-id="${id}">&minus;</button>
                             <span id="cartItemQty-${id}" class="d-inline-block">${getQtyFromCartById(id)}</span>
                            <button class="btn btn-primary gp-plus-btn gp-sm-btn" data-action="plus" data-id="${id}">&plus;</button>
                        </div>

                        <div class="w-25 px-3">${itemThumbnail}</div>

                        <div class="d-flex align-items-center flex-fill justify-content-between">
                            <span class="pr-3 d-inline-block food-font14">${itemName}</span>
                            <i class="fas fa-times gp-delete-btn" data-action="delete" data-id="${id}"></i>
                        </div>
                    </div>`;
    }








    // Old code
    var food_items = [];
    var food_items_ids = [];
    var qty = [];


    function updateQty(obj, iItemId, min_qty, item) {
        var plusBtn = $('button[data-action="plus"]');

        // Current quantity of the food item into cart
        var currentQty = parseInt($('#qty-' + iItemId).val());
        var action = $(obj).data('action');
        var fQty = 0;
        var food_items_str = '';
        var food_items_ids_str = '';
        var qty_str = '';

        // Get all values from inputs
        $('.fQty').each(function () {
            fQty += parseInt($(this).val());
        });

        // Find current food name into food_items array
        var index = food_items.indexOf(item);

        // console.log(food_items)

        // Decrease
        if (action == 'minus' && currentQty > 0) {
            currentQty--;
            $('#qty-' + iItemId).val(currentQty);
            $('#cartItemQty-' + iItemId).html(currentQty);

            if (index > -1 && currentQty == 0) {
                food_items.splice(index, 1);
                food_items.filter(val => val);

                qty.splice(index, 1);
                qty.filter(val => val);

                food_items_ids.splice(index, 1);
                food_items_ids.filter(val => val);

                $('#cartItm' + iItemId).remove();

                var foodItem = $('#foodItem-' + iItemId);
                $(foodItem).removeClass('active');
                $(foodItem).find('.fQty').val(0);
                $(foodItem).find('button[data-action="minus"]').prop('disabled', true);
                $(foodItem).find('button[data-action="plus"]').prop('disabled', false);

            } else {
                qty[index] = currentQty;
                // qty.filter(val => val);
            }
        }

        // Increase
        if (action == 'plus' && currentQty < min_qty && fQty < min_qty) {
            currentQty++;
            $('#qty-' + iItemId).val(currentQty);
            $('#cartItemQty-' + iItemId).html(currentQty);

            console.log(food_items, index)

            // Check if food into food_items array
            // If food not exists, then add it to cart
            if (index === -1) {
                food_items.push(item);
                food_items_ids.push(iItemId);
                qty.push(currentQty);


                var itemThumb = $('#itemThumb-' + iItemId).html();
                var itemName = $('#itemName-' + iItemId).html();

                index = food_items.indexOf(item);


                $('.cartItems').append(
                    '<div style="position:relative" class="food-bg-white food-mb10" id="cartItm' + iItemId + '">' +
                    '<span>' + itemThumb + '</span>' +
                    '<span>' + itemName + '<a onclick="removeFromCart(' + iItemId + ',' + index + ',' + min_qty + ')" href="javascript:void(0);">&times;</a>' +
                    '<div class="row no-gutters crtQtyDiv">' +
                    '<div class="col col-4">' +
                    '<button class="btn btn-primary gp-minus-btn" data-action="minus" onclick="updateQty(this,' + iItemId + ',' + min_qty + ',\'' + item + '\')">&minus;</button>' +
                    '</div>' +
                    '<div class="col col-4">' +
                    '<span id="cartItemQty-' + iItemId + '">' + currentQty + '</span>' +
                    '</div><div class="col col-4">' +
                    '<button class="btn btn-primary gp-plus-btn" data-action="plus" onclick="updateQty(this,' + iItemId + ',' + min_qty + ',\'' + item + '\')">&plus;</button>' +
                    '</div>' +
                    '</div>' +
                    '</span>' +
                    '</div>'
                );
            } else {
                qty[index] = currentQty;
                // qty.filter(val => val);
            }
        }

        // console.log(qty.toString())
        // console.log(qty.toString().replace(/,\s*$/, ""))


        food_items_str = food_items.toString().replace(/,\s*$/, "");
        food_items_ids_str = food_items_ids.toString().replace(/,\s*$/, "");
        qty_str = qty.toString().replace(/,\s*$/, "");

        $('#food_items').val(food_items_str);
        $('#food_item_ids').val(food_items_ids_str);
        $('#food_items_qty').val(qty_str);

        fQty = 0;
        $('.fQty').each(function () {
            fQty += parseInt($(this).val());
        });
        $('#totalQty').html(fQty);

        $(".cartBtn button").attr('disabled', 'disabled');
        if (fQty == min_qty) {
            $(".cartBtn button").removeAttr('disabled');
            //     $([document.documentElement, document.body]).animate({
            //         scrollTop: $("#cartBtnDiv").offset().top - 160
            //     }, 500);
        }

        var plusBtnDisabled = false;
        if (fQty == min_qty) {
            plusBtnDisabled = true;
        }

        $(plusBtn).each(function (i, el) {
            $(el).prop('disabled', plusBtnDisabled);
        });

        var foodItem = $(obj).closest('.food-item');
        var foodItemMinusBtn = foodItem.find('button[data-action="minus"]')
        if (currentQty > 0) {
            foodItem.addClass('active');
            foodItemMinusBtn.prop('disabled', false)
        } else {
            foodItem.removeClass('active');
            foodItemMinusBtn.prop('disabled', true)
        }
    }


    function removeFromCart(iItemId, index, min_qty) {
        $('#cartItm' + iItemId).remove();
        $('#qty-' + iItemId).val(0);

        var food_items_str = '';
        var food_items_ids_str = '';
        var qty_str = '';

        if (index > -1) {
            food_items.splice(index, 1);
            qty.splice(index, 1);
            food_items_ids.splice(index, 1);

            var foodItem = $('#foodItem-' + iItemId);
            $(foodItem).removeClass('active');
            $(foodItem).find('button[data-action="minus"]').prop('disabled', true);
            $(foodItem).find('button[data-action="plus"]').prop('disabled', false);
        }

        food_items_str = food_items.toString().replace(/,\s*$/, "");
        food_items_ids_str = food_items_ids.toString().replace(/,\s*$/, "");
        qty_str = qty.toString().replace(/,\s*$/, "");

        $('#food_items').val(food_items_str);
        $('#food_item_ids').val(food_items_ids_str);
        $('#food_items_qty').val(qty_str);

        fQty = 0;
        $('.fQty').each(function () {
            fQty += parseInt($(this).val());
        });
        $('#totalQty').html(fQty);

        $(".cartBtn button").attr('disabled', 'disabled');
        if (fQty == min_qty) {
            $(".cartBtn button").removeAttr('disabled');
        }
    }

});