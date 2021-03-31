<?php
/**
 * Template part for displaying delivery days and times
 *
 */

$productId           = get_the_ID();
$deliveryTimeMorning = get_field( 'delivery_time_morning', $productId, true );
$deliveryTimeEvening = get_field( 'delivery_time_evening', $productId, true );
$deliveryData        = getSortedDeliveryDataForProduct( $productId, 'l F j' );
?>

<form action="<?php the_permalink(); ?>" method="get" class="my-5" id="deliveryForm">
    <input type="hidden" name="product-food-listing" value="1">

    <div class="delivery-dates">
        <h2 class="food-txt-uppercase text-center font-montserrat-semibold">Select a delivery date</h2>

        <div class="row">
			<?php foreach ( $deliveryData as $key => $date ) : ?>
                <div class="col-md-4 mb-2">
                    <div class="custom-control custom-radio gp-delivery-control">
                        <input id="date<?php echo $key; ?>" class="custom-control-input" type="radio" name="date"
                               value="<?php echo $date['day_formatted']; ?>" required>

                        <label for="date<?php echo $key; ?>" class="custom-control-label">
                            <span class="text-uppercase font-weight-bold"><?php echo $date['day']; ?></span>
                            <span class="px-2"><?php echo date( 'F', $date['day_timestamp'] ); ?></span>
                            <span><?php echo date( 'j', $date['day_timestamp'] ); ?></span>
                            <sup><?php echo date( 'S', $date['day_timestamp'] ); ?></sup>
                        </label>
                    </div>
                </div>
			<?php endforeach; ?>

			<?php if ( get_field( 'chef_choice' ) ) : ?>
            <?php
                $deliveryDays = array_column( $deliveryData, 'day_formatted' );
                $splitDates = implode( ' - ', array_slice($deliveryDays, 0, 2) );
            ?>
                <div class="col">
                    <div class="custom-control custom-radio gp-delivery-control">
                        <input id="splitDates" class="custom-control-input" type="radio" name="date"
                               value="SPLIT :<?php echo $splitDates; ?>"
                               required>

                        <label for="splitDates" class="custom-control-label">
                            <span class="text-uppercase font-montserrat-semibold">Chef’s Choice - Split Order</span>
                            <span class="font-montserrat-regular"> + $<?php the_field( 'chef_choice_cost' ); ?></span>
                            <button type="button" class="bg-transparent border-0 pl-2 text-info" data-toggle="tooltip" data-placement="top"
                                    title="only available for 6/8/12 meals.  - split your meals between two delivery days.">
                                <i class="fas fa-info"></i>
                            </button>
                        </label>
                    </div>
                </div>
			<?php endif; ?>
        </div>
    </div>

    <div class="delivery-times mt-5 mb-4">
        <h2 class="food-txt-uppercase text-center font-montserrat-semibold">Delivery time</h2>

        <div class="row">
            <div class="col-md-6 mb-2">
                <div class="custom-control custom-radio gp-delivery-control">
                    <input id="deliveryTimeMorning" class="custom-control-input" type="radio" name="time"
                           value="<?php echo $deliveryTimeMorning; ?>" required>
                    <label for="deliveryTimeMorning" class="custom-control-label">
						<?php echo $deliveryTimeMorning; ?>
                    </label>
                </div>
            </div>

            <div class="col-md-6">
                <div class="custom-control custom-radio gp-delivery-control">
                    <input id="deliveryTimeEvening" class="custom-control-input" type="radio" name="time"
                           value="<?php echo $deliveryTimeEvening; ?>" required>
                    <label for="deliveryTimeEvening" class="custom-control-label">
						<?php echo $deliveryTimeEvening; ?>
                    </label>
                </div>
            </div>
        </div>
    </div>

    <button class="btn btn-primary w-100" type="submit" disabled>
        BUILD YOUR MENU
    </button>
</form>
