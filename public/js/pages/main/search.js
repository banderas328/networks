$(function() {
    $('#google_search_button').bind("click",function(){

        var search_string = $("#google_search_input").val();
        window.open("http://www.google.com/search?q="+search_string, "_blank");
    });
    $('#close_search').click(function(){
        $('#window_search').hide();
    });
    $('#window_search').draggable();
    $( "#search_tabs" ).tabs();
    $.ajax({
        type: "GET",
        url: "user/usersearch"

    })
        .done(function( data ) {
            $("#user_search_div").html(data);
                $('#user_search').click(function () {
                    var data = $('#user_search_form').serialize();
                    search_user(data);
                    return false;
                });
        });

});
function search_user(data) {
    $.ajax({
        type: "POST",
        url:  "user/usersearch",
        data:data
    })
        .done(function( data ) {
            $("#user_search_div").html(data);
            $('#user_search').click(function () {
                var data = $('#user_search_form').serialize();
                search_user(data);
                return false;
            });
        });

  }
