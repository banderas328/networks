$(function() {
    $('#close_users').click(function(){
        $('#window_users').hide();
    });
    $('#window_users').draggable();
    $( "#accordion_users" ).accordion();
    $.ajax({
        type: "GET",
        url: "friends/requests"

    })
        .done(function( data ) {
            $("#friends_requets").html(data);

            $(".friend_request").click(function(){
                var url = $(this).attr('href');
                $.ajax({
                    type: "GET",
                    url: url
                })
                    .done(function( ) {
                        refresh_friend_requests();
                    });
                return false;
            });
        });

});
function refresh_friend_requests(){
    $.ajax({
        type: "GET",
        url: "friends/requests"

    })
        .done(function( data ) {
            $("#friends_requets").html(data);
            $(".friend_request").click(function(){
                var url = $(this).attr('href');
                $.ajax({
                    type: "GET",
                    url: url
                })
                    .done(function( ) {
                        refresh_friend_requests();
                    });
                return false;
            });
        });

}
