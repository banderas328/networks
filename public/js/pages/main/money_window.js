$(function() {
    $('#money_tabs').tabs();
    $.ajax({
        type: "GET",
        url: "paypal/paymentform"

    })
        .done(function( data ) {
            $("#money_transaction").html(data);
        });

});