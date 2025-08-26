$(function() {
    $('#close_messages').click(function(){
        $('#window_messages').hide();
    });
    $('#window_messages').draggable();
    $( "#accordion_messages" ).accordion();
    $.ajax({
        type: "GET",
        url: "chanels/indexPublic"

    })
        .done(function( data ) {
            $("#chanels").html(data);
        });

});