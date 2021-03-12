jQuery(document).ready(function($) {
    $('#foodItemModal').on('show.bs.modal', function (event) {
        let modal = $(this);
        let button = $(event.relatedTarget);

        let id = button.data('id');
        let image = $(`#itemThumb-${id} img`).clone();

        modal.find('.food-modal-title').text(button.data('title'));
        modal.find('.food-modal-image').html(image);
        modal.find('.food-modal-protein').html(button.data('protein'));
        modal.find('.food-modal-calories').html(button.data('calories'));
        modal.find('.food-modal-carbs').html(button.data('carbs'));
        modal.find('.food-modal-fats').html(button.data('fats'));


        // Add nutrients
        let nutrients = button.data('nutrients');
        let nutrientsHtml = '';

        if (nutrients !== '') {
            let nutrientsList = '';
            $.each( nutrients, function( i, el ) {
                nutrientsList += `<li>${el.nutrient}</li>`;
            });

            nutrientsHtml = `<div class="border-top">
                                        <h3 class="h5 mb-3">Nutrients & Minerals</h3>
                                        <ul class="pl-4 font-weight-light">${nutrientsList}</ul>
                                    </div>`;
        }
        modal.find('.food-modal-nutrients').html(nutrientsHtml);


        // Add Ingredients
        let ingredientsHtml = '';
        let ingredients = button.data('ingredients');

        if (ingredients !== '') {
            ingredientsHtml = `<div class="border-top">
                                        <h3 class="h5 mb-3">Ingredients</h3>
                                        <p class="font-weight-light">${ingredients}</p>
                                    </div>`;
        }
        modal.find('.food-modal-ingredients').html(ingredientsHtml);


        // Add Allergens
        let allergensHtml = '';
        let allergens = button.data('allergens');

        if (allergens !== '') {
            allergensHtml = `<div class="border-top">
                                        <h3 class="h5 mb-3">Allergens</h3>
                                        <p class="font-weight-light">${allergens}</p>
                                    </div>`;
        }
        modal.find('.food-modal-allergens').html(allergensHtml);


        // Add Excerpt
        let excerptHtml = '';
        let excerpt = button.data('excerpt');

        if (excerpt !== '') {
            excerptHtml = `<div class="border-top font-weight-bold pt-3">${excerpt}</div>`;
        }
        modal.find('.food-modal-excerpt').html(excerptHtml);
    });
});