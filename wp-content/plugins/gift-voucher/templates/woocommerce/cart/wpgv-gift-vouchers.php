<?php

if( !defined( 'ABSPATH' ) ) exit;  // Exit if accessed directly

?>
<style>
    .wpgv-checkout-subtitle {
        line-height: 1.4;
        font-size: 80%;
        font-weight: 300;
    }
</style>
<?php

$session_data = (array) WC()->session->get( WPGIFT_SESSION_KEY );
if ( isset( $session_data['gift_voucher'] ) ) {

    foreach ( $session_data['gift_voucher'] as $voucher_code => $discount_amount ) {
        $gift_voucher = new WPGV_Gift_Voucher($voucher_code);
        if ( $gift_voucher->get_id() ) {
            $balance = wc_price( $gift_voucher->get_balance() - $discount_amount );
            ?>
            <tr class="cart-discount coupon-<?php echo esc_attr( sanitize_title( $voucher_code ) ); ?>">
                <th>
                    <?php _e( 'Gift Voucher', 'gift-voucher' ); ?>
                    <div class="wpgv-checkout-subtitle">
                        <?php _e( 'Code', 'gift-voucher' ); ?>: <b><?php echo $gift_voucher->get_number(); ?></b><br />
                        <?php echo sprintf( __( 'Remaining balance is %s', 'gift-voucher' ), $balance ); ?>
                        <?php
                            if ( $gift_voucher->has_expired() ) {
                                ?>
                                <br />
                                <span style="color: red; font-weight: 600;">
                                    <?php _e( 'Expired', 'gift-voucher' ); ?>
                                </span>
                                <?php
                            }
                        ?>
                    </div>
                </th>
                <td>
                    <?php echo wc_price( $discount_amount * -1 ); ?>
                    <a href="#" class="wpgv-remove-voucher" data-gift-voucher="<?php esc_attr_e( $voucher_code ); ?>"><?php _e( '[Remove]', 'gift-voucher' ); ?></a>
                </td>
            </tr>
            <?php
        }
    }
}