function refresh_network() {
    $.ajax({
        type: "GET",
        url: "network/networkindex"

    })
        .done(function( data ) {
            $("#network_frame").html(data);
        });

}
$(function() {
    refresh_network();

});


