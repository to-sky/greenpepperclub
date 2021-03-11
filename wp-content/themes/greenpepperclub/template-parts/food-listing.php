<?php
/**
 * Template for listing food items
 */
?>


<div id="itemModal-<?php the_ID(); ?>" class="modal fade" role="dialog">
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
                <h3 class="text-center m-0 pb-3"><?php the_title(); ?></h3>
                <p class="mb-0"><?php the_post_thumbnail( 'large' ); ?></p>

                <div class="d-flex justify-content-center py-3 text-center">
                    <div class="border-right px-4">
						<span class="font-weight-light"><?php the_field( 'protein' ); ?></span>
                        <h6 class="my-0">Protein</h6>
                    </div>
                    <div class="border-right px-4">
						<span class="font-weight-light"><?php the_field( 'Calories' ); ?></span>
                        <h6 class="my-0">Calories</h6>
                    </div>
                    <div class="border-right px-4">
						<span class="font-weight-light"><?php the_field( 'carbs' ); ?></span>
                        <h6 class="my-0">Carbs</h6>
                    </div>
                    <div class="px-4">
						<span class="font-weight-light"><?php the_field( 'fats' ); ?></span>
                        <h6 class="my-0">Fats</h6>
                    </div>
                </div>

				<?php if ( $nutrientAndMinerals = get_field( 'nutrients_and_minerals' ) ) : ?>
                    <div class="border-top">
                        <h3 class="h5 mb-3">Nutrients & Minerals</h3>
                        <ul class="pl-4">
							<?php foreach ( $nutrientAndMinerals as $element ) : ?>
                                <li><?php echo $element['nutrient']; ?></li>
							<?php endforeach; ?>
                        </ul>
                    </div>
				<?php endif; ?>

				<?php if ( get_field( 'ingredients' ) ) : ?>
                    <div class="border-top">
                        <h3 class="h5 mb-3">Ingredients</h3>
                        <p class="font-weight-light"><?php the_field( 'ingredients' ); ?></p>
                    </div>
				<?php endif; ?>

				<?php if ( get_field( 'allergens' ) ) : ?>
                    <div class="border-top">
                        <h3 class="h5 mb-3">Allergens</h3>
                        <p class="font-weight-light"><?php the_field( 'allergens' ); ?></p>
                    </div>
				<?php endif; ?>

				<?php if ( get_the_excerpt() ) : ?>
                    <div class="border-top font-weight-bold pt-3"><?php the_excerpt(); ?></div>
				<?php endif; ?>
            </div>
        </div>
    </div>
</div>

<!-- Food item -->
<div class="col-6 col-md-3 mb-3">
    <div id="foodItem-<?php the_ID(); ?>" class="food-item" data-mh="food-item">
        <a href="javascript:void(0)" data-toggle="modal"
           data-target="#itemModal-<?php the_ID(); ?>">
            <p id="itemThumb-<?php the_ID(); ?>">
				<?php the_post_thumbnail( 'food_item' ); ?>
            </p>
        </a>

        <div class="d-flex justify-content-around align-items-center">
            <button id="minusBtn<?php the_ID(); ?>"
                    class="btn btn-primary gp-minus-btn"
                    data-action="minus" disabled
                    data-id="<?php the_ID(); ?>"
            >&minus;
            </button>

            <input class="fQty food-item-qty" type="text" id="qty-<?php the_ID(); ?>"
                   value="0" readonly/>

            <button id="plusBtn<?php the_ID(); ?>"
                    class="btn btn-primary gp-plus-btn"
                    data-action="plus"
                    data-id="<?php the_ID(); ?>"
            >&plus;
            </button>
        </div>

        <h3 class="food-item-title" id="itemName-<?php the_ID(); ?>">
            <?php the_title(); ?>
        </h3>
    </div>
</div>