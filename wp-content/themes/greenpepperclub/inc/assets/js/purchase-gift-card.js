jQuery( function ( $ ) {
    $('#giftCardModal').on('hidden.bs.modal', function (event) {
        $('.modal-body', $(this)).html('').removeClass('p-0');
        $('.modal-dialog', $(this)).removeClass('modal-lg');
    });

    $('[id^="giftId"]').click(function (e) {
        let id = $(e.target).closest('[id^="giftId"]').attr('id').split('-')[1];

        $.post(gp_ajax.ajax_url, {
            id: id,
            action: 'get_gift_card'
        }, function(data) {
            $.when(
                $('#giftCardModal .modal-body').html(data)
            ).then(function () {
                if (id === 'custom') {
                    $('#giftCardModal .modal-dialog').addClass('modal-lg');
                    $.getScript($('#wpgv-voucher-script-js').attr('src'));
                } else {
                    $('#giftCardModal .modal-body').addClass('p-0');
                    $.getScript($('#wpgv-item-script-js').attr('src'));
                }

                $('#giftCardModal').modal('show');
            });
        });
    });
});