$(function() {
    $.ajax({
        type: "GET",
        url: "chanels/indexPrivate"

    })
        .done(function( data ) {
            $("#private_chanels").html(data);
        });

});