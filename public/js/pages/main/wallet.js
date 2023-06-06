$(function() {
    $.ajax({
        type: "GET",
        url: "payment/getwallet"

    })
        .done(function( data ) {
            $("#wallet").html(data);
        });

});