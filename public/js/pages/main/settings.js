$(function() {
    $('#close_settings').click(function(){
        $('#window_settings').hide();
    });
    //$('#window_settings').draggable();
   // $( "#accordion" ).accordion();
    $.ajax({
        type: "GET",
        url: "settings/savesettings",

    })
        .done(function( data ) {
            $("#general-settings").html(data);
            $('#save_general_settings').click(function () {
             var data = $('#user_general_settings').serialize();
                save_general_settings(data);
                return false;
            });
        });

});

function save_general_settings(data) {
    $.ajax({
        type: "POST",
        url: "settings/savesettings",
        data:data
    })
        .done(function( data ) {
            $("#general-settings").html(data);
            $('#save_general_settings').click(function () {
                var data = $('#user_general_settings').serialize();
                save_general_settings(data);
                return false;
            });
        });


}