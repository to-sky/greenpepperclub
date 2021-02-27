<?php
function ordinal($number) {
    $ends = array('th','st','nd','rd','th','th','th','th','th','th');
    if ((($number % 100) >= 11) && (($number%100) <= 13))
        return $number. '<sup>th</sup>';
    else
        return $number. '<sup>'.$ends[$number % 10].'</sup>';
}
// add the action 
add_action( 'woocommerce_before_add_to_cart_button', 'action_woocommerce_before_add_to_cart_button', 10, 0 );
// define the woocommerce_before_add_to_cart_button callback 
function action_woocommerce_before_add_to_cart_button() { ?> 
    <?php 
        
        $product_id = get_the_ID();
        
		
		$delivery_time_morning = get_field('delivery_time_morning',$product_id,true);
        $delivery_time_evening = get_field('delivery_time_evening',$product_id,true);
		
		
		
		
		/*
        $min_delivery_days = get_field('minimum_delivery_days',$product_id,true);
        $max_delivery_days = get_field('maximum_delivery_days',$product_id,true);
		
		$minimum_delivery_day = get_field('minimum_delivery_day',$product_id,true);
		$maximum_delivery_day = get_field('maximum_delivery_day',$product_id,true);
		
		
        
        
        
        
		
		
		$min_delivery_day = date('l', strtotime("+$min_delivery_days days"));
		
		if($min_delivery_day == $minimum_delivery_day){
			$delivery_days = (int)$min_delivery_days+7;
			$date1 = (date('l F d', strtotime("+$delivery_days days"))); 
            $date1display = strtoupper(explode(' ', $date1)[0]).' <span>'.explode(' ', $date1)[1].' '.ordinal(explode(' ', $date1)[2]).'</span>';
		}else{
			for($i=1;$i<=7;$i++){
				$delivery_days = (int)$min_delivery_days+$i;
				$min_delivery_day = date('l', strtotime("+$delivery_days days"));
				if($min_delivery_day == $minimum_delivery_day){
					$date1 = (date('l F d', strtotime("+$delivery_days days")));
                     $date1display = strtoupper(explode(' ', $date1)[0]).' <span>'.explode(' ', $date1)[1].' '.ordinal(explode(' ', $date1)[2]).'</span>';
					break;
				}
			}
		}
		
		$max_delivery_day = date('l', strtotime("+$max_delivery_days days"));
		if($max_delivery_day == $maximum_delivery_day){
			$delivery_days = (int)$max_delivery_days+7;
			$date2 = (date('l F d', strtotime("+$delivery_days days")));
             $date2display = strtoupper(explode(' ', $date2)[0]).' <span>'.explode(' ', $date2)[1].' '.ordinal(explode(' ', $date2)[2]).'</span>';
		}else{
			for($i=1;$i<=7;$i++){
				$delivery_days = (int)$max_delivery_days+$i;
				$max_delivery_day = date('l', strtotime("+$delivery_days days"));
				if($max_delivery_day == $maximum_delivery_day){
					$date2 = (date('l F d', strtotime("+$delivery_days days")));
                    $date2display = strtoupper(explode(' ', $date2)[0]).' <span>'.explode(' ', $date2)[1].' '.ordinal(explode(' ', $date2)[2]).'</span>';
					break;
				}
			}
		}
		*/
		//strtotime($date1).'<br>';
        //echo strtotime($date2);
		
		
		
    ?>
    <div class="row">
        <div class="col-md-12 col-12" >
            <h2 class="food-txt-uppercase text-center font-montserrat-semibold">Select a delivery date</h2>
        </div>
        
		
		
		<?php 
		$split_dates = '';
		$food_delivery_days = get_field('food_delivery_days',$product_id,true);
		//print_r($food_delivery_days);
		$datesInput = array();
		
		
		foreach($food_delivery_days as $keyyy => $f_delivery_days){
			$delivery_days = (int)$f_delivery_days['required_no_of_days'];
			$f_delivery_day = date('l', strtotime("+$delivery_days days"));
		
			if($f_delivery_day == $f_delivery_days['delivery_day']  ){
				$delivery_days = (int)$f_delivery_days['required_no_of_days']+7;
				$date1 = (date('l F d', strtotime("+$delivery_days days"))); 
				//$fdatedisplay = strtoupper(explode(' ', $date1)[0]).' <span>'.explode(' ', $date1)[1].' '.ordinal(explode(' ', $date1)[2]).'</span>';
			}else{
				for($i=1;$i<=7;$i++){
					$delivery_days = (int)$f_delivery_days['required_no_of_days']+$i;
					$f_delivery_day = date('l', strtotime("+$delivery_days days"));
					if($f_delivery_day == $f_delivery_days['delivery_day'] ){
						$date1 = (date('l F d', strtotime("+$delivery_days days")));
						 //$fdatedisplay = strtoupper(explode(' ', $date1)[0]).' <span>'.explode(' ', $date1)[1].' '.ordinal(explode(' ', $date1)[2]).'</span>';
						break;
					}
				}
			} 
			$datesInput[] = $date1;
		} 
	 
		usort($datesInput, function ($item1, $item2) {
			return strtotime($item1) <=> strtotime($item2);
		}); 
		
		foreach($datesInput as $keyyy => $dates){ 
			$fdatedisplay = strtoupper(explode(' ', $dates)[0]).' <span>'.explode(' ', $dates)[1].' '.ordinal(explode(' ', $dates)[2]).'</span>';
		?>
			<div class="col-md-12 col-12" style="">
                <div class="radiobox-full">
                <input id="date<?php echo $keyyy;?>" type="radio" name="date" value="<?php echo $dates; ?>" required onchange="enabledBtn()" />
				<label for="date<?php echo $keyyy;?>"  class="frmLbl"><p><?php echo $fdatedisplay; ?></p></label>
            </div>
			</div>
		<?php 
			$split_dates .=  $dates.' - ';
		}
		$split_dates = rtrim($split_dates,' - ');
		?>
		
		
		<?php /* if(strtotime($date1) < strtotime($date2)){ ?>
			<div class="col-md-12 col-12" style="">
                <div class="radiobox-full">
                <input id="date1" type="radio" name="date" value="<?php echo $date1; ?>" required onchange="enabledBtn()" />
				<label for="date1"  class="frmLbl"><p><?php echo $date2display; ?></p></label>
            </div>
			</div>
			<div class="col-md-12 col-12" style="">
               <div class="radiobox-full">
                <input id="date2" type="radio" name="date" value="<?php echo $date2; ?>" required onchange="enabledBtn()" />
				<label for="date2"  class="frmLbl"><p><?php echo $date1display; ?></p></label>
                </div>
			</div>
		<?php }else{  ?>
			<div class="col-md-12 col-12" style="">
                <div class="radiobox-full">
                <input id="date3" type="radio" name="date" value="<?php echo $date2; ?>" required onchange="enabledBtn()" />
				<label for="date3" class="frmLbl"><p><?php echo $date2display; ?></p></label>
             </div>
			</div>
			<div class="col-md-12 col-12" >
                <div class="radiobox-full">
                <input id="date4" type="radio" name="date" value="<?php echo $date1; ?>" required onchange="enabledBtn()" />
				<label for="date4" class="frmLbl"><p><?php echo $date1display; ?></p></label>
                </div>
			</div>
		<?php } */  ?>
		
		
		
		 <!--- <div class="col-md-12 col-12"> 
            <div class="radiobox-full">
                <input id="date9" type="radio" name="date" value="Friday" required onchange="enabledBtn()" />
                <label for="date9" class="frmLbl"><p><strong class="text-uppercase">Friday</strong> <span class="font-montserrat-regular food-font24">November 27th</span></p></label>
            </div>
        </div>-->
        <div class="col-md-12 col-12">
            
            <div class="radiobox-full">
            <?php /* ?>
			<input id="date5" type="radio" name="date" value="SPLIT :<?php echo $date1.' - '.$date2; ?>" required onchange="enabledBtn()" />
			<?php */ ?>
			
			<input id="date5" type="radio" name="date" value="SPLIT :<?php echo $split_dates; ?>" required onchange="enabledBtn()" />
			
              <label for="date5" class="frmLbl" style="padding: 0;"><p><span class="text-uppercase" style="font-family: 'Montserrat-SemiBold';">Chef’s Choice - Split Order</span> <span class="font-montserrat-regular food-font24"> + $5.99</span></p></label>
            </div>
        </div>
        <div class="col-md-12 col-12" >
            <h2 class="food-txt-uppercase text-center font-montserrat-semibold">Delivery time</h2>
        </div>
        <div class="col-md-12 col-12" style="">
             <div class="radiobox-full">
               <input id="date6" type="radio" name="time" value="<?php echo $delivery_time_morning; ?>" required onchange="enabledBtn()" />
               <label for="date6" class="frmLbl"><p><?php echo $delivery_time_morning; ?></p></label>
             </div>
        </div>
        <div class="col-md-12 col-12" >
           <div class="radiobox-full">
              <input id="date7" type="radio" name="time" value="<?php echo $delivery_time_evening;?>" required onchange="enabledBtn()" />
              <label for="date7" class="frmLbl"><p><?php echo $delivery_time_evening;?></p></label>
             </div>
        </div>
        <div class="col-md-12 col-12 hidden" >
            <label class="frmLbl"><input type="hidden" name="food_items_ids" id="food_item_ids" value="" onchange="enabledBtn()" />&nbsp;Food Items ID</label>
            <label class="frmLbl"><input type="hidden" name="food_items" id="food_items" value="" onchange="enabledBtn()" />&nbsp;Food Items</label>
            <label class="frmLbl"><input type="hidden" name="food_items_qty" id="food_items_qty" value="" onchange="enabledBtn()" />&nbsp;Food Items Qty</label>
        </div>
        <div class="col-md-12 col-12 food-mt20">
            <button class="btn btn-primary btn-block" type="button" onclick="ValidateForm(this)" disabled id="nextBtn">BUILD YOUR MENU</button>
        </div>
        <script>
            function enabledBtn(){
                var dateCheck = false;
                var timeCheck = false;
                var date = document.getElementsByName('date');
                var time = document.getElementsByName('time');
                
                for (var i=0; i<date.length; i++) {
                    if(date[i].checked){
                        dateCheck = true;
                        break;
                    }
                }
                for (var i=0; i<time.length; i++) {
                    if(time[i].checked){
                        timeCheck = true;
                        break;
                    }
                }
                
                if(dateCheck && timeCheck){
                    jQuery('#nextBtn').removeAttr('disabled');
                }                
            }
            function ValidateForm(obj){
			
                var dateCheck = false;
                var timeCheck = false;
                var date = document.getElementsByName('date');
                var time = document.getElementsByName('time');
                
                for (var i=0; i<date.length; i++) {
                    if(date[i].checked){
                        dateCheck = true;
                        break;
                    }
                }
                for (var i=0; i<time.length; i++) {
                    if(time[i].checked){
                        timeCheck = true;
                        break;
                    }
                }
                
                if(dateCheck && timeCheck){
                    
                    jQuery('form.cart').addClass('hidden');
                    jQuery('.foodItemsDiv').removeClass('hidden');
                    //jQuery([document.documentElement, document.body]).animate({scrollTop: jQuery('.food_item_listing').offset().top-100}, 500);
					if(product_id > 0){
						jQuery('#plusBtn'+product_id).click();
						localStorage.removeItem('product_id');
					}
                }
            }
            
            jQuery(document).ready(function(){
                jQuery('.fQty').each(function(){
                    jQuery(this).prop('readonly',false);
                    jQuery(this).val(0);
                    jQuery(this).prop('readonly',true);
                    jQuery(".cartBtn button").attr('disabled','disabled');
                });
            });
            

        </script>
    </div>
<?php }; 


/*add_action( 'woocommerce_after_add_to_cart_button', 'action_woocommerce_after_add_to_cart_button', 10, 0 );
// define the woocommerce_before_add_to_cart_button callback 
function action_woocommerce_after_add_to_cart_button() {
    echo 'sssssssssssssssssssssssssssssss';
}*/


add_shortcode('food_item_listing', 'food_item_listing'); 
function food_item_listing($atts) { 
    
    $atts = shortcode_atts(array('product_id'=>0,),$atts);
    
    $product_id=$atts['product_id'];
    $min_qty= get_post_meta($product_id,'product_minimum_quantity',true);
    
 $args = array(  
        'post_type' => 'food_items',
        'post_status' => 'publish',
        'posts_per_page' => -1, 
        'orderby' => 'ID', 
        'order' => 'ASC', 
    );

    $loop = new WP_Query( $args ); ?>
    <div class="row">    
        <?php while ( $loop->have_posts() ) : $loop->the_post(); 
                $thumb = get_field('thumb_image',get_the_ID(),true);
        ?>
        
        <div id="itemModal-<?php echo get_the_ID();?>" class="modal fade" role="dialog">
          <div class="modal-dialog modal-md">
        
            <!-- Modal content-->
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" style="position:absolute;right:20px;">&times;</button>
                <h4 class="modal-title food-mt0"><?php echo get_the_title();?></h4>
              </div>
              <div class="modal-body">
                <p><?php echo get_the_content();?></p>
                <p>
                    <?php 
                    $foodImage = get_the_post_thumbnail_url(get_the_ID(),'large');
                    $protein = get_field('protein',get_the_ID(),true);
                    
                    $calories = get_field('calories',get_the_ID(),true);
                    
                    $carbs = get_field('carbs',get_the_ID(),true);
					
					$fats = get_field('fats',get_the_ID(),true);
                    
                    $nutrients_and_minerals = get_field('nutrients_and_minerals',get_the_ID(),true);
                    
                    $ingredients = get_field('ingredients',get_the_ID(),true);
                    $allergens = get_field('allergens',get_the_ID(),true);
                    
                    ?> 
                    <img src="<?php echo $foodImage; ?>" />
                    <hr>
                </p>
                <div class="row text-center">
                    <div class="col col-3 "><?php echo $protein; ?><h4 class="food-mt0 food-mb0">Protein</h4></div>
                    <div class="col col-3"><?php echo $calories; ?><h4 class="food-mt0 food-mb0">Calories</h4></div>
                    <div class="col col-3"><?php echo $carbs; ?><h4 class="food-mt0 food-mb0">Carbs</h4></div>
					<div class="col col-3"><?php echo $fats; ?><h4 class="food-mt0 food-mb0">Fats</h4></div>
                </div>
                <p>
                    <hr>
                    <ul>
                        <?php 
                        foreach($nutrients_and_minerals as $Nvalue){ ?>
                            <li><?php echo $Nvalue['nutrient']; ?></li>
                        <?php } ?>
                    </ul>
                    <hr>
                </p>
                <p><?php echo $ingredients; ?><hr></p>
                <p><?php echo $allergens; ?><hr></p>
                <p><strong><?php echo get_the_excerpt(); ?></strong></p>
              </div>
              
              <!--<div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              </div>-->
            </div>
        
          </div>
        </div>
        
        <div class="col-md-3 col-12 col food-mb20">
            <div class="food-items">
                <a href="javascript:void(0)" data-toggle="modal" data-target="#itemModal-<?php echo get_the_ID();?>" ><p style="display: flex;width:100%;height:auto;" id="itemThumb-<?php echo get_the_ID();?>"><img src="<?php echo $thumb;?>" class="img-fluid" /></p></a>
                <div class="row no-gutters">
                    <div class="col col-2"><button id="minusBtn<?php echo get_the_ID();?>" class="btn btn-primary minus-btn" onclick="updateQty(this,<?php echo get_the_ID();?>,<?php echo $min_qty;?>,'<?php echo get_the_title();?>')">-</button></div>
                    <div class="col col-8"><input class="food-w-100 fQty" type="text" id="qty-<?php echo get_the_ID();?>" value="0" readonly /></div>
                    <div class="col col-2"><button id="plusBtn<?php echo get_the_ID();?>" class="btn btn-primary plus-btn" onclick="updateQty(this,<?php echo get_the_ID();?>,<?php echo $min_qty;?>,'<?php echo get_the_title();?>')">+</button></div>
                    
                    
                </div>
                <h3 class="text-center food-mt10 food-mb10 food-font14" id="itemName-<?php echo get_the_ID();?>"><?php echo get_the_title();?></h3></div>
        </div>
        <?php endwhile; ?>
        <script>
		
        var food_items = [];
        var food_items_ids = [];
        var qty = [];
			
			 var product_id = localStorage.getItem('product_id');			
			//
			
            function updateQty(obj,iItemId,min_qty,item){
                var currentQty= parseInt(jQuery('#qty-'+iItemId).val());
                var action=jQuery(obj).html();
                var fQty = 0;
                //jQuery('#food_items').val();
                var food_items_str = ''; 
                var food_items_ids_str = ''; 
                var qty_str = '';
                
                jQuery('.fQty').each(function(){
                    fQty += parseInt(jQuery(this).val());
                });
                
                var index = food_items.indexOf(item);
                
                if(action == '-' && currentQty>0){
                    currentQty = currentQty-1;
                    jQuery('#qty-'+iItemId).val(currentQty);
                    jQuery('#cartItemQty-'+iItemId).html(currentQty);

                    if(index > -1 && currentQty == 0){
                        food_items.splice(index, 1);
                        food_items.filter(val => val);
                        
                        qty.splice(index, 1);
                        qty.filter(val => val);
                        
                        food_items_ids.splice(index, 1);
                        food_items_ids.filter(val => val);
                        
                        jQuery('#cartItm'+iItemId).remove();
                        
                    }else{
                        qty[index] = currentQty;
                        qty.filter(val => val);
                    }
                }
                
                if(action == '+' && currentQty<min_qty && fQty<min_qty){
                    currentQty = currentQty+1;
                    jQuery('#qty-'+iItemId).val(currentQty);
                    
                    jQuery('#cartItemQty-'+iItemId).html(currentQty);
                    

                    if(index === -1){
                        food_items.push(item);
                        food_items.filter(val => val);
                        
                        food_items_ids.push(iItemId);
                        food_items_ids.filter(val => val);
                        
                        qty.push(currentQty);
                        qty.filter(val => val);
                        
                        var itemThumb = jQuery('#itemThumb-'+iItemId).html();
                        var itemName = jQuery('#itemName-'+iItemId).html();
                        
                        index = food_items.indexOf(item);
                        
                        jQuery('.cartItems').append('<div style="position:relative" class="food-bg-white food-mb10" id="cartItm'+iItemId+'"><span>'+itemThumb+'</span><span>'+itemName+'<a onclick="removeFromCart('+iItemId+','+index+','+min_qty+')" href="javascript:void(0);">X</a>'+'               <div class="row no-gutters crtQtyDiv"><div class="col col-4"><button class="btn btn-primary minus-btn"  onclick="updateQty(this,'+iItemId+','+min_qty+',\''+item+'\')">-</button></div><div class="col col-4"><span id="cartItemQty-'+iItemId+'">'+currentQty+'</span></div><div class="col col-4"><button class="btn btn-primary plus-btn" onclick="updateQty(this,'+iItemId+','+min_qty+',\''+item+'\')">+</button></div></div> </span>                                                  </div>');
                        
                        
                        
                    }else{ 
                        qty[index] = currentQty;
                        qty.filter(val => val);
                    };
                }
                
                food_items_str = food_items.toString().replace(/,\s*$/, "");
                food_items_ids_str = food_items_ids.toString().replace(/,\s*$/, "");
                qty_str = qty.toString().replace(/,\s*$/, "");
                
                //alert('index : '+index);
                
                //for(var a in qty){
                //    alert('index  :'+index+'@@@@@@'+a+':'+qty[a]);
                //}
                
                jQuery('#food_items').val(food_items_str);
                jQuery('#food_item_ids').val(food_items_ids_str);
                jQuery('#food_items_qty').val(qty_str);
                
                fQty = 0;
                jQuery('.fQty').each(function(){
                    fQty += parseInt(jQuery(this).val());
                });
                jQuery('#totalQty').html(fQty+' of '+min_qty);
                
                //jQuery("#cartBtn").addClass('hidden');
                jQuery(".cartBtn button").attr('disabled','disabled');
                if(fQty == min_qty){
                    jQuery(".cartBtn button").removeAttr('disabled');
                    jQuery([document.documentElement, document.body]).animate({
                        scrollTop: jQuery("#cartBtnDiv").offset().top-160
                    }, 500);    
                }
                
                if(currentQty > 0){
					jQuery(obj).closest('.food-items').addClass('active');
				}else{
					jQuery(obj).closest('.food-items').removeClass('active');
				}
            }
            
            function removeFromCart(iItemId,index,min_qty){
                jQuery('#cartItm'+iItemId).remove();
                jQuery('#qty-'+iItemId).prop('readonly',false).val(0).prop('readonly',true);
                
                jQuery('#cartItemQty-'+iItemId).html(0);
                
                var food_items_str = ''; 
                var food_items_ids_str = ''; 
                var qty_str = '';
                
                
                if(index > -1 ){
                    food_items.splice(index, 1);
                    food_items.filter(val => val);
                    
                    qty.splice(index, 1);
                    qty.filter(val => val);
                    
                    food_items_ids.splice(index, 1);
                    food_items_ids.filter(val => val);
                    
                    jQuery('#cartItm'+iItemId).remove();
                        
                }
                food_items_str = food_items.toString().replace(/,\s*$/, "");
                food_items_ids_str = food_items_ids.toString().replace(/,\s*$/, "");
                qty_str = qty.toString().replace(/,\s*$/, "");

                jQuery('#food_items').val(food_items_str);
                jQuery('#food_item_ids').val(food_items_ids_str);
                jQuery('#food_items_qty').val(qty_str);
                
                fQty = 0;
                jQuery('.fQty').each(function(){
                    fQty += parseInt(jQuery(this).val());
                });
                jQuery('#totalQty').html(fQty+' of '+min_qty);
                
                //jQuery("#cartBtn").addClass('hidden');
                jQuery(".cartBtn button").attr('disabled','disabled');
                if(fQty == min_qty){
                    //jQuery("#cartBtn").removeClass('hidden');
                    jQuery(".cartBtn button").removeAttr('disabled');
                    jQuery([document.documentElement, document.body]).animate({
                        scrollTop: jQuery("#cartBtn").offset().top-160
                    }, 500);    
                }
                
                
                
            }
            
        </script>
    </div>
<?php wp_reset_postdata(); 

}

// add the filter 
add_filter( 'woocommerce_add_cart_item_data', 'filter_woocommerce_add_cart_item_data', 10, 3 );

// define the woocommerce_add_cart_item_data callback 
function filter_woocommerce_add_cart_item_data( $cart_item_data, $product_id, $variation_id ) { 
    // make filter magic happen here... 
    $new_value['date'] = $_POST['date'];
    $new_value['time'] = $_POST['time'];
    $new_value['food_items_ids'] = $_POST['food_items_ids'];
    $new_value['food_items'] = $_POST['food_items'];
    $new_value['food_items_qty'] = $_POST['food_items_qty'];
    return array_merge($cart_item_data,$new_value);
}; 


add_filter( 'woocommerce_cart_item_name', 'spwc_show_cart_ordered_service_info', 10, 3 );
function spwc_show_cart_ordered_service_info( $name, $cart_item, $cart_item_key ) {
     if( isset( $cart_item['food_items'] ) ) {
         
        // print_r($cart_item);
         
         
         $aItems = explode(',',$cart_item['food_items']);
         $aIds = explode(',',$cart_item['food_items_ids']);
         $aQtys = explode(',',$cart_item['food_items_qty']);
         $name .='<table><tr><th>Meal</th><th>Name</th><th>Quantity</th></tr>';
         
         
         foreach($aItems as $key => $item){
            $itemSrc = get_the_post_thumbnail_url($aIds[$key],'thumbnail');
            $name .='<tr><td><img src="'.$itemSrc.'" style="width:50px" /></td><td>'.$item.'</td><td>'.$aQtys[$key].'</td></tr>';    
         }
         $name .='</table>'; 
         //$name .= sprintf( '<div class="sp-cartItemInfo"><b>Quantity: </b> %s</div>', esc_html( $cart_item['order_quantity'] ) );
     }
     return $name;
}

add_action( 'woocommerce_checkout_create_order_line_item', 'spwc_add_custom_service_data_to_order', 10, 4 );
function spwc_add_custom_service_data_to_order( $item, $cart_item_key, $values, $order ) {
     foreach( $item as $cart_item_key => $value ) {
         if( !empty( $value['food_items'] ) && !empty( $value['food_items_qty'] )   ) {
             
			 
			 $food_items = explode(',',$value['food_items']);
			 $food_items_qty = explode(',',$value['food_items_qty']);
			 $meta = '';
			 for($i=0;$i<count($food_items); $i++ ){
				 $meta .= $food_items[$i].' - '.$food_items_qty[$i].'<br>';
			 }
			 

			 $item->add_meta_data( __( 'Food Item Name', 'socialplanet' ),$meta, true );

			 
			 
			 
             
			 
             $item->add_meta_data( __( 'Delivery Date', 'socialplanet' ), $value['date'], true );
             $item->add_meta_data( __( 'Delivery Time', 'socialplanet' ), $value['time'], true );
         }
     }
}

//remove quantity from all over
add_filter( 'woocommerce_is_sold_individually', 'wc_remove_all_quantity_fields', 10, 2 );
function wc_remove_all_quantity_fields( $return, $product ) {
    return( true );
}

add_action( 'woocommerce_before_calculate_totals', 'wc_before_calculate_totals' );
function wc_before_calculate_totals( $cart_object ){
	// action...
	global $woocommerce;
	
	$cart_items = $cart_object->get_cart();
	$extra_shipping_cost = 0;
	
	foreach ( $cart_items as $key => $value ) {
        if(strpos($value['date'],'SPLIT') !== FALSE  ){
	        //$regular_price = $value['data']->get_price();
	        //$value['data']->set_price($regular_price+5.99);
	        $extra_shipping_cost = 5.99;
	    }    
	}
	
	if($extra_shipping_cost > 0){
	    $woocommerce->cart->add_fee( __('Shipping Cost', 'woocommerce'), $extra_shipping_cost );
	}
	
	return $cart_object;
}

add_filter( 'woocommerce_add_to_cart_redirect', 'wc_redirect_checkout_add_cart' );
function wc_redirect_checkout_add_cart() {
   return wc_get_checkout_url();
}

add_shortcode('food_item_menu', 'food_item_menu'); 
function food_item_menu($atts) { 
    
    $atts = shortcode_atts(array('product_id'=>0,),$atts);
    
    $product_id=$atts['product_id'];
    $min_qty= get_post_meta($product_id,'product_minimum_quantity',true);
    
 $args = array(  
        'post_type' => 'food_items',
        'post_status' => 'publish',
        'posts_per_page' => -1, 
        'orderby' => 'ID', 
        'order' => 'ASC', 
    );

    $loop = new WP_Query( $args ); ?>
    <div class="row">
		<?php while ( $loop->have_posts() ) : $loop->the_post(); 
					$thumb = get_field('thumb_image',get_the_ID(),true);
					
		?>
		<div class="col-md-3 col-12">
			<a href="javascript:void(0)" data-toggle="modal" data-target="#itemModal-<?php echo get_the_ID();?>" ><img src="<?php echo $thumb?>" style="width:100%;margin:0 5px;padding:10px;"  /></a>
			<a href="javascript:void(0)" data-toggle="modal" data-target="#itemModal-<?php echo get_the_ID();?>" ><h3 class="text-center food-font16 food-padding10 food-mt0"><?php echo get_the_title(); ?></h3></a>
		</div>
		
		<div id="itemModal-<?php echo get_the_ID();?>" class="modal fade" role="dialog">
          <div class="modal-dialog modal-md">
        
            <!-- Modal content-->
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" style="position:absolute;right:20px;">&times;</button>
                <h4 class="modal-title food-mt0"><?php echo get_the_title();?></h4>
              </div>
              <div class="modal-body">
                <p><?php echo get_the_content();?></p>
                <p>
                    <?php 
                    $foodImage = get_the_post_thumbnail_url(get_the_ID(),'large');
                    $protein = get_field('protein',get_the_ID(),true);
                    
                    $calories = get_field('calories',get_the_ID(),true);
                    
                    $carbs = get_field('carbs',get_the_ID(),true);
					
					$fats = get_field('fats',get_the_ID(),true);
                    
                    $nutrients_and_minerals = get_field('nutrients_and_minerals',get_the_ID(),true);
                    
                    $ingredients = get_field('ingredients',get_the_ID(),true);
                    $allergens = get_field('allergens',get_the_ID(),true);
                    
                    ?> 
                    <img src="<?php echo $foodImage; ?>" />
                    <hr>
                </p>
                <div class="row text-center">
                    <div class="col col-3 "><?php echo $protein; ?><h4 class="food-mt0 food-mb0">Protein</h4></div>
                    <div class="col col-3"><?php echo $calories; ?><h4 class="food-mt0 food-mb0">Calories</h4></div>
                    <div class="col col-3"><?php echo $carbs; ?><h4 class="food-mt0 food-mb0">Carbs</h4></div>
					<div class="col col-3"><?php echo $fats; ?><h4 class="food-mt0 food-mb0">Fats</h4></div>
                    
                </div>
                <p>
                    <hr>
                    <ul>
                        <?php 
                        foreach($nutrients_and_minerals as $Nvalue){ ?>
                            <li><?php echo $Nvalue['nutrient']; ?></li>
                        <?php } ?>
                    </ul>
                    <hr>
                </p>
                <p><?php echo $ingredients; ?><hr></p>
                <p><?php echo $allergens; ?><hr></p>
                <p><strong><?php echo get_the_excerpt(); ?></strong></p>
				
				<p><a onclick="localStorage.setItem('product_id',<?php echo get_the_ID();?>)" href="<?php echo site_url();?>/our-menu/" class="btn btn-primary btn-block">ORDER NOW</a></p>
              </div>
              
              <!--<div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              </div>-->
            </div>
        
          </div>
        </div>
		
		
		
		<?php endwhile;  ?>
	<script>
	/*jQuery(document).ready(function($){
		$('.food-carousel').slick({slidesToShow:4,slidesToScroll:1});
	});*/
	</script>
	</div>
<?php 	
}


add_shortcode('food_item_slider', 'food_item_slider'); 
function food_item_slider($atts) { 
    $atts = shortcode_atts(array('product_id'=>0,),$atts);
    
    $product_id=$atts['product_id'];
    $min_qty= get_post_meta($product_id,'product_minimum_quantity',true);
    
 $args = array(  
        'post_type' => 'food_items',
        'post_status' => 'publish',
        'posts_per_page' => -1, 
        'orderby' => 'ID', 
        'order' => 'ASC', 
    );

    $loop = new WP_Query( $args ); ?>
    <div class="row food-carousel">
		<?php while ( $loop->have_posts() ) : $loop->the_post(); 
					$thumb = get_field('thumb_image',get_the_ID(),true);
					
		?>
		<div>
			<a href="javascript:void(0)" data-toggle="modal" data-target="#itemModal-<?php echo get_the_ID();?>" ><img src="<?php echo $thumb?>" style="width:100%;margin:0 5px;padding:10px;"  /></a>
			<h3 class="text-center food-font16 food-padding10 food-mt0"><?php echo get_the_title(); ?></h3>
		</div>

		<?php endwhile;  ?>
		<?php wp_reset_postdata(); ?>		
	</div>		
		
	<script>
	jQuery(document).ready(function($){
		$('.food-carousel').slick(
			{
				slidesToShow:3,
				slidesToScroll:1,
				dots:false,
				arrows:true,
				//prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-arrow-left' aria-hidden='true'></i></button>",
				//nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-arrow-right' aria-hidden='true'></i></button>",
				responsive: [
					{
					  breakpoint: 1024,
					  settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
						infinite: true,
						dots: false,
						arrows:true,
					  }
					},
					{
					  breakpoint: 600,
					  settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						dots: false,
						arrows:true,
					  }
					},
					{
					  breakpoint: 480,
					  settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						dots: false,
						arrows:true,
					  }
					}
					]
			});
	});
	</script>
	<?php while ( $loop->have_posts() ) : $loop->the_post(); 
					$thumb = get_field('thumb_image',get_the_ID(),true);
					
	?>
	<div id="itemModal-<?php echo get_the_ID();?>" class="modal fade" role="dialog">
          <div class="modal-dialog modal-md">
        
            <!-- Modal content-->
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" style="position:absolute;right:20px;">&times;</button>
                <h4 class="modal-title food-mt0"><?php echo get_the_title();?></h4>
              </div>
              <div class="modal-body">
                <p><?php echo get_the_content();?></p>
                <p>
                    <?php 
                    $foodImage = get_the_post_thumbnail_url(get_the_ID(),'large');
                    $protein = get_field('protein',get_the_ID(),true);
                    
                    $calories = get_field('calories',get_the_ID(),true);
                    
                    $carbs = get_field('carbs',get_the_ID(),true);
					
					$fats = get_field('fats',get_the_ID(),true);
                    
                    $nutrients_and_minerals = get_field('nutrients_and_minerals',get_the_ID(),true);
                    
                    $ingredients = get_field('ingredients',get_the_ID(),true);
                    $allergens = get_field('allergens',get_the_ID(),true);
                    
                    ?> 
                    <img src="<?php echo $foodImage; ?>" />
                    <hr>
                </p>
                <div class="row text-center">
                    <div class="col col-3 "><?php echo $protein; ?><h4 class="food-mt0 food-mb0">Protein</h4></div>
                    <div class="col col-3"><?php echo $calories; ?><h4 class="food-mt0 food-mb0">Calories</h4></div>
                    <div class="col col-3"><?php echo $carbs; ?><h4 class="food-mt0 food-mb0">Carbs</h4></div>
					<div class="col col-3"><?php echo $fats; ?><h4 class="food-mt0 food-mb0">Fats</h4></div>
                    
                </div>
                <p>
                    <hr>
                    <ul>
                        <?php 
                        foreach($nutrients_and_minerals as $Nvalue){ ?>
                            <li><?php echo $Nvalue['nutrient']; ?></li>
                        <?php } ?>
                    </ul>
                    <hr>
                </p>
                <p><?php echo $ingredients; ?><hr></p>
                <p><?php echo $allergens; ?><hr></p>
                <p><strong><?php echo get_the_excerpt(); ?></strong></p>
				
				<p><a onclick="localStorage.setItem('product_id',<?php echo get_the_ID();?>)" href="<?php echo site_url();?>/our-menu/" class="btn btn-primary btn-block">ORDER NOW</a></p>
              </div>
              
              <!--<div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              </div>-->
            </div>
        
          </div>
        </div>
	
	<?php endwhile; ?>
	
	
	
	
	
<?php 	
}


add_shortcode('testimonial_slider', 'testimonial_slider'); 
function testimonial_slider() { 
     
 $args = array(  
        'post_type' => 'testimonial',
        'post_status' => 'publish',
        'posts_per_page' => 3, 
        'orderby' => 'ID', 
        'order' => 'ASC',  
    );

    $loop = new WP_Query( $args ); ?>
    <div class="row testimonial-carousel pt-5 pb-5">
		<?php while ( $loop->have_posts() ) : $loop->the_post(); 
					$thumb = get_the_post_thumbnail_url(get_the_ID(),'thumbnail');
					
		?>
		<div>
		  <img src="<?php echo $thumb?>" style="width:;margin:0 auto;padding:10px;"  />
          <p class="text-center food-font20 food-padding10 food-mt0 text-white font-montserrat-regular"><?php echo get_the_content(); ?></p>
		  <h3 class="text-center food-font40 food-padding10 food-mt0 text-white font-montserrat-semibold"> <?php echo get_the_title(); ?></h3>
			
		</div>

		<?php endwhile;  ?>
		<?php wp_reset_postdata(); ?>		
	</div>		
		
	<script>
	jQuery(document).ready(function($){
		$('.testimonial-carousel').slick(
			{
				slidesToShow:1,
				slidesToScroll:1,
				dots:true,
				arrows:true,
				//prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-arrow-left' aria-hidden='true'></i></button>",
				//nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-arrow-right' aria-hidden='true'></i></button>",
				responsive: [
					{
					  breakpoint: 1024,
					  settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true,
						dots: true,
						arrows:true,
					  }
					},
					{
					  breakpoint: 600,
					  settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						dots: true,
						arrows:true,
					  }
					},
					{
					  breakpoint: 480,
					  settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						dots: true,
						arrows:true,
					  }
					}
					]
			});
	});
	</script>
	
<?php 	
}




add_shortcode('notification_slider', 'notification_slider'); 
function notification_slider() { 
     
 $args = array(  
        'post_type' => 'notofication',
        'post_status' => 'publish',
        'posts_per_page' => -1, 
        'orderby' => 'ID', 
        'order' => 'ASC',  
    );

    $loop = new WP_Query( $args ); ?>
    <div id="notific1" class="notification1">
    <div class="grid-container">
    <div class="notification-carousel text-center" style="">
		<?php while ( $loop->have_posts() ) : $loop->the_post(); ?>
		<div class="text-center" style="width: 100%!important;">
            <div class="news-slide" style="width: 100%; display: inline-block;">
          <p class="food-font16 food-mt0 font-montserrat-semibold text-white" style="width: 100%!important;"><?php echo get_the_content(); ?></p>
		</div></div>

		<?php endwhile;  ?>
		<?php wp_reset_postdata(); ?>		
	</div>	</div>	</div>
		
	<script>
	jQuery(document).ready(function($){
		$('.notification-carousel').slick(
			{
                initialSlide: 0,
				slidesToShow:1,
				slidesToScroll:1,
                autoplay:true,
                margin:0,
				dots:false,
				arrows:true,
                centerMode: true,
                adaptiveHeight: true,
                infinite: true, 
                variableWidth: true,
                lazyLoad: 'ondemand',
				responsive: [
					{
					  breakpoint: 1024,
					  settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
                        centerMode: true,
                        variableWidth: true,
                        infinite: true 
						
					  }
					},
					{
					  breakpoint: 600,
					  settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
                        centerMode: true,
                        variableWidth: true,
                        infinite: true 
						
					  }
					},
					{
					  breakpoint: 480,
					  settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
                        centerMode: true,
                        variableWidth: true,
                        infinite: true 
                       
						
					  }
					}
					]
			});
	});
	</script>
    <script>


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("masthead").style.top = "0px";
    document.getElementById("masthead").style.background = "#8dc63f";
    document.getElementById("notific").style.visibility = "hidden";
    document.getElementById("navbar-toggler-icon").style.top = "26px";
    
  } else {
    document.getElementById("masthead").style.top = "50px";
    document.getElementById("masthead").style.position = "fixed";
    document.getElementById("masthead").style.background = "transparent";
    document.getElementById("notific").style.visibility = "visible";
    document.getElementById("navbar-toggler-icon").style.top = "26px";
    
  }
}
</script>

<!--- <script>

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("masthead").style.top = "50px";
    document.getElementById("masthead").style.background = "transparent";
     document.getElementById("notific").style.display = "block";
  } else {
    document.getElementById("masthead").style.top = "0px";
    document.getElementById("masthead").style.position = "fixed";
    document.getElementById("masthead").style.background = "#8dc63f";
    document.getElementById("notific").style.display = "none";
  }
  prevScrollpos = currentScrollPos;
}


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("notific").style.display = "block";
  } else {
    document.getElementById("notific").style.display = "none";
  }
  prevScrollpos = currentScrollPos;
}
</script>-->
	
<?php 	
}

