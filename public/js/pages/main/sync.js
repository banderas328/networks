$(function() {

    setTimeout(sync, 10000);

});
function sync(){
    $.ajax({
        type: "GET",
        url: "sync/sync",
        dataType: 'json'
    })
        .done(function( data ) {
            setTimeout(sync, 3000);
        });

}

