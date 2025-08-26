$(function() {
    $.ajax({
        type: "GET",
        url: "chanels/indexDelete"

    })
        .done(function( data ) {
            $("#delete_chanel").html(data);
        });

});