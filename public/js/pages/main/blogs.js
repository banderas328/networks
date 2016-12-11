$(function() {
    $('#notes_tabs').tabs();

    $.ajax({
        type: "GET",
        url: "blog/blogform"

    })
        .done(function( data ) {
            $("#new_blog").html(data);
        });
    $.ajax({
        type: "POST",
        url: "blog/getblogs"

    })
        .done(function( data ) {
            $("#list_blogs").html(data);
        });

   });