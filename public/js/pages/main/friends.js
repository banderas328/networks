$(function() {

    $.ajax({
        type: "GET",
        url: "friends/getfriendlist",
    })
        .done(function( data ) {
            $("#friend_list").html(data);
            $('#message_to_user_from_user_list').hide();
            $(".friends_refresh").bind("click",function(){

                refresh_friends_list();
            });
        });

});
function refresh_friends_list(){
    $.ajax({
        type: "GET",
        url: "friends/getfriendlist",
        async:false

    })
        .done(function( data ) {
            $("#friend_list").html(data);
            $('#message_to_user_from_user_list').hide();
            $(".friends_refresh").bind("click",function(){

                refresh_friends_list();
            });
        });

}

