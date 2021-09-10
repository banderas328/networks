function refresh_network() {
    $.ajax({
        type: "GET",
        url: "network/networkindex"

    })
        .done(function( data ) {
            $("#network").html(data);
        });

}
$(function() {
    refresh_network();

});


