<?php
/**
 * Show all foods with description in modal
 */

$cartButtons = (int) $args['cart_buttons'];
?>

<div class="col-6 col-md-4 col-xl-3 mb-3">
    <div id="foodItem-<?php the_ID(); ?>" class="food-item" data-mh="food-item">
        <a href="javascript:void(0)"
           data-toggle="modal"
           data-target="#foodItemModal"
           data-id="<?php the_ID(); ?>"
           data-title="<?php the_title(); ?>"
           data-nutrients='<?php echo get_field( "nutrients_and_minerals" ) ? json_encode(get_field( "nutrients_and_minerals" )) : "";  ?>'
           data-protein="<?php the_field( 'protein' ); ?>"
           data-calories="<?php the_field( 'Calories' ); ?>"
           data-carbs="<?php the_field( 'carbs' ); ?>"
           data-fats="<?php the_field( 'fats' ); ?>"
           data-ingredients="<?php the_field( 'ingredients' ); ?>"
           data-allergens="<?php the_field( 'allergens' ); ?>"
           data-excerpt="<?php the_excerpt(); ?>"
        >
            <p id="itemThumb-<?php the_ID(); ?>" <?php echo $cartButtons ? '' : 'class="mb-0"'; ?>>
                <?php the_post_thumbnail( 'food_item' ); ?>
            </p>
        </a>

        <?php if( $cartButtons ) : ?>

        <div class="align-items-center d-flex justify-content-center justify-content-lg-around">
            <button id="minusBtn<?php the_ID(); ?>"
                    type="button"
                    class="btn btn-primary gp-minus-btn"
                    data-action="minus" disabled
                    data-id="<?php the_ID(); ?>"
            >&minus;</button>

            <input class="food-item-qty mx-4 mx-lg-0" type="text" id="qty-<?php the_ID(); ?>" value="0" readonly/>

            <button id="plusBtn<?php the_ID(); ?>"
                    type="button"
                    class="btn btn-primary gp-plus-btn"
                    data-action="plus"
                    data-id="<?php the_ID(); ?>"
            >&plus;</button>
        </div>

        <?php endif; ?>

        <h3 class="food-item-title" id="itemName-<?php the_ID(); ?>">
            <?php the_title(); ?>
        </h3>
    </div>
</div>