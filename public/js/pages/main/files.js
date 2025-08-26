$(function() {

    $.ajax({
        type: "GET",
        url: "files/getDir"

    })
        .done(function( data ) {
            $("#hard_drive").html(data);
        });

});
