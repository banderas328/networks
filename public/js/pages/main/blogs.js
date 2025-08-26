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
            $(".c-blog__posts").html(data);
        });
    $.ajax({
        type: "POST",
        url: "blog/deleteblogs"

    })
        .done(function( data ) {
            $("#delete_blog").html(data);
        });

   });
