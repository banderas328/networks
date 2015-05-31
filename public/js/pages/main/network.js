$(function() {
    $.ajax({
        type: "GET",
        url: "network/networkindex"

    })
        .done(function( data ) {
            $("#network").html(data);
        });

});