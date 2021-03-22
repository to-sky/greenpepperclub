<?php
/**
 * Modal for food item
 */
?>

<div id="foodItemModal" class="modal fade" role="dialog">
    <div class="modal-dialog modal-md">

        <!-- Modal content-->
        <div class="modal-content rounded-0">
            <!-- Modal header -->
            <div class="modal-header border-0 pb-2">
                <button type="button" class="close food-font30" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <!-- Modal body -->
            <div class="modal-body px-4 pt-0 px-4 mx-2">
                <h3 class="text-center m-0 pb-3 food-modal-title"></h3>
                <p class="mb-0 food-modal-image"></p>

                <div class="d-flex justify-content-center py-3 text-center food-modal-properties">
                    <div class="border-right px-4">
                        <span class="font-weight-light food-modal-protein"></span>
                        <h6 class="my-0">Protein</h6>
                    </div>
                    <div class="border-right px-4">
                        <span class="font-weight-light food-modal-calories"></span>
                        <h6 class="my-0">Calories</h6>
                    </div>
                    <div class="border-right px-4">
                        <span class="font-weight-light food-modal-carbs"></span>
                        <h6 class="my-0">Carbs</h6>
                    </div>
                    <div class="px-4">
                        <span class="font-weight-light food-modal-fats"></span>
                        <h6 class="my-0">Fats</h6>
                    </div>
                </div>

                <div class="food-modal-nutrients"></div>
                <div class="food-modal-ingredients"></div>
                <div class="food-modal-allergens"></div>
                <div class="food-modal-excerpt"></div>

	            <?php if( (int) $args['modal_order_button'] ) : ?>
                <div class="food-modal-order-link my-2 border-top pt-4">
                    <a id="foodOrderButton" href="<?php the_permalink(69); ?>" class="btn btn-primary d-block">Order now</a>
                </div>
	            <?php endif; ?>
            </div>
        </div>
    </div>
</div>
