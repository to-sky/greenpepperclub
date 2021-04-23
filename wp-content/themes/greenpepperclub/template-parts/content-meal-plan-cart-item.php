<?php
/**
 * Template for show meal plan food items data in the cart and checkout table
 */
?>

<table class="cart-meal-table">
	<tr>
		<th>Meal</th>
		<th>Name</th>
		<th>Quantity</th>
	</tr>

	<?php foreach ( $args['food_items'] as $food_item ) : ?>
		<tr>
			<td>
				<img src="<?php echo get_the_post_thumbnail_url( $food_item['id'], 'thumbnail' ); ?>" style="width:50px" />
			</td>
			<td><?php echo $food_item['name']; ?></td>
			<td><?php echo $food_item['qty']; ?></td>
		</tr>
	<?php endforeach; ?>

	<tr>
		<td colspan="3"><strong>Date: </strong><?php echo $args['date']; ?></td>
	</tr>

	<tr>
		<td colspan="3" class="border-bottom"><strong>Time: </strong><?php echo $args['time']; ?></td>
	</tr>
</table>

<span class="cart-meal-name"><?php echo $args['name'] ?></span>