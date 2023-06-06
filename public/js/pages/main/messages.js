$(function() {
    $('#close_messages').click(function(){
        $('#window_messages').hide();
    });
    $('#window_messages').draggable();
    $( "#messages_tabs" ).tabs();

    $.ajax({
            type: "GET",
            url: "messages/getListMessagesCounts"
        })
        .done(function(data) {
            $("#chats").html(data);
        });

});