$(function() {
    $.ajax({
        type: "GET",
        url: "tags/tagcloud"

    })
        .done(function( data ) {
            $("#tag_cloud").html(data);
        });

});