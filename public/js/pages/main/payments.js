$(function() {
    $.ajax({
        type: "GET",
        url: "payment/getfinishedpayments"

    })
        .done(function( data ) {
            $("#finished_payments").html(data);
        });

});