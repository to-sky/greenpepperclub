<?php

if( !defined( 'ABSPATH' ) ) exit;  // Exit if accessed directly

global $wpdb;
$table_name = $wpdb->prefix . 'giftvouchers_template';

if ( !current_user_can( 'manage_options' ) )
{
	wp_die( 'You are not allowed to be on this page.' );
}

$notice = 0;
$pageTitle = __('Add New Template', 'gift-voucher');
$btnText = __('Add Template', 'gift-voucher' );
$options = (object) array();
$options->title = $options->image_style = $options->active = $options->action = $options->template_id = '';

if(isset($_REQUEST['template_id'])) {
	$template_id = sanitize_text_field($_REQUEST['template_id']);
	$pageTitle = __('Edit Template', 'gift-voucher');
	$btnText = __('Edit Template', 'gift-voucher');
   	$options->template_id = $template_id;
}
if(isset($_POST['title']) && $_REQUEST['action'] == 'edit_template')
{
	// Check that nonce field
	wp_verify_nonce( $_POST['new_template_verify'], 'new_template_verify' );

	$title 	= sanitize_text_field( $_POST['title'] );
	$active = sanitize_text_field( $_POST['active'] );

	$image_style = array();
	for ($i=0; $i < 3; $i++) { 
		$image_style[] = sanitize_text_field( $_POST['image'.$i] );
	}

	$wpdb->update(
		$table_name,
		array( 
			'title' 		=> stripslashes($title),
			'image_style' 	=> json_encode($image_style),
			'active' 		=> $active,
		),
		array('id'=>absint($_REQUEST['template_id']))
	);
	$notice = 1;
	$templateMsg = __('Template Updated Successfully!', 'gift-voucher' );
	$options = $wpdb->get_row( "SELECT * FROM $table_name WHERE id = $template_id" );
   	$options->action = 'edit_template';
   	$options->template_id = $template_id;
   	wpgv_get_image_url(json_encode($image_style));
} 
elseif ( isset($_POST['title']) ) 
{
	// Check that nonce field
	wp_verify_nonce( $_POST['new_template_verify'], 'new_template_verify' );

	$title 	= sanitize_text_field( $_POST['title'] );
	$active = sanitize_text_field( $_POST['active'] );

	$image_style = array();
	for ($i=0; $i < 3; $i++) { 
		$image_style[] = sanitize_text_field( $_POST['image'.$i] );
	}

	$wpdb->insert(
		$table_name,
		array( 
			'title' 			=> stripslashes($title),
			'image_style' 		=> json_encode($image_style),
			'templateadd_time'	=> current_time( 'mysql' ),
			'active' 			=> $active,
		),
		array('%s','%s','%s','%d')
	);
	$notice = 1;
	$templateMsg = __('Template Added Successfully!', 'gift-voucher' );
	$lastid = $wpdb->insert_id;
	$options = $wpdb->get_row( "SELECT * FROM $table_name WHERE id = $lastid" );
   	$options->action = 'edit_template';
   	$options->template_id = $template_id;
   	wpgv_get_image_url(json_encode($image_style));
} 
elseif (isset($_REQUEST['action']) && $_REQUEST['action'] == 'edit_template')
{
   	$options = $wpdb->get_row( "SELECT * FROM $table_name WHERE id = $template_id" );
   	$options->action = 'edit_template';
   	$options->template_id = $template_id;
   	wpgv_get_image_url($options->image_style);
}

if(function_exists( 'wp_enqueue_media' )){
    wp_enqueue_media();
} 
else
{
    wp_enqueue_style('thickbox');
    wp_enqueue_script('media-upload');
	wp_enqueue_script('thickbox');
}
?>
	<div class="wrap">
		<h1><?php echo $pageTitle; ?></a></h1>
		<?php if($notice) { ?>
		<div id="setting-error-settings_updated" class="updated settings-error notice is-dismissible">
			<p><strong><?php echo $templateMsg; ?></strong></p>
			<button type="button" class="notice-dismiss"><span class="screen-reader-text">Dismiss this notice.</span></button>
		</div>
		<?php } ?>
		<form method="post" name="new-template" id="new-template" action="<?php echo admin_url( 'admin.php' ); ?>?page=new-voucher-template">
			<input type="hidden" name="action" value="save_voucher_settings_option" />
			<?php $nonce = wp_create_nonce( 'new_template_verify' ); ?>
			<input type="hidden" name="new_template_verify" value="<?php echo($nonce); ?>">
			<input type="hidden" name="action" value="<?php echo $options->action; ?>">
			<input type="hidden" name="template_id" value="<?php echo $options->template_id; ?>">
			<table class="form-table">
				<tbody>
					<tr>
						<th scope="row">
							<label for="title"><?php echo __('Title', 'gift-voucher' ) ?> <span class="description">(required)</span></label>
						</th>
						<td>
							<input name="title" type="text" id="title" value="<?php echo $options->title; ?>" class="regular-text" aria-required="true" required="required">
						</td>
					</tr>
					<?php 
					$sizearr = array('1000px x 760px', '1000px x 1500px', '1000px x 750px');
					$images = $options->image_style ? json_decode($options->image_style) : ['','',''];
					foreach ($images as $i => $value) {
					?>
					<tr>
						<th scope="row">
							<label for="image"><?php echo __('Image', 'gift-voucher' ) ?> - Style <?php echo $i+1; ?></label>
							<p class="description">(Recommended: <?php echo $sizearr[$i] ?>)</p>
						</th>
						<td>
							<img class="image_src<?php echo $i; ?>" src="" width="100" style="display: none;" /><br>
							<input class="image_url<?php echo $i; ?>" type="hidden" name="image<?php echo $i; ?>" size="60" value="<?php echo $value; ?>">
 							<button type="button" class="upload_image<?php echo $i; ?> button"><?php echo __('Upload Image', 'gift-voucher' ) ?></button>
 							<button type="button" class="button button-primary remove_image<?php echo $i; ?>" style="display: none;"><?php echo __('Remove Image', 'gift-voucher') ?></button>
						</td>
					</tr>
					<?php } ?>
					<tr>
						<th scope="row">
							<label for="active"><?php echo __('Status', 'gift-voucher') ?></label>
						</th>
						<td>
							<select name="active" id="active">
								<option value="1" <?php echo ($options->active == 1) ? 'selected' : ''; ?>><?php echo __('Active', 'gift-voucher') ?></option>
								<option class="0" <?php echo ($options->active == 0) ? 'selected' : ''; ?>><?php echo __('Inactive', 'gift-voucher' ) ?></option>
							</select>
						</td>
					</tr>
				</tbody>
			</table>
			<p class="submit"><input type="submit" name="submit" id="submit" class="button button-primary" value="<?php echo $btnText; ?>"></p>
		</form>
	</div>
	<script>
    	jQuery(document).ready(function($) {
    		<?php for ($i=0; $i < 3; $i++) { ?>
        	$('.upload_image<?php echo $i; ?>').click(function(e) {
            	e.preventDefault();

            	var custom_uploader = wp.media({
                	title: 'Add Template Image',
                	button: {
                    	text: 'Upload Image'
                	},
                	multiple: false  // Set this to true to allow multiple files to be selected
            	})
            	.on('select', function() {
	                var attachment = custom_uploader.state().get('selection').first().toJSON();
    	            $('.image_src<?php echo $i; ?>').attr('src', attachment.url).show();
        	        $('.image_url<?php echo $i; ?>').val(attachment.id);
        	        $('.remove_image<?php echo $i; ?>').show();
            	})
            	.open();
        	});
        	$('.remove_image<?php echo $i; ?>').click(function () {
        		$('.image_src<?php echo $i; ?>').attr('src','').hide();
        		$('.image_url<?php echo $i; ?>').val('');
        	    $('.remove_image<?php echo $i; ?>').hide();
        	});
        	<?php } ?>
    	});
	</script>