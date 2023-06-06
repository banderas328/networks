$(function(){
    $.ajax({
        type: "GET",
        url: "paypal/showpayments"

    })
        .done(function( data ) {
            $("#complited_transactions").html(data);
        });
});
