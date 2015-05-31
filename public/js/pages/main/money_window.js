$(function() {
    $('#money_accordion').accordion();
    $.ajax({
        type: "GET",
        url: "paypal/paymentform"

    })
        .done(function( data ) {
            $("#money_transaction").html(data);
        });

});