$(function() {
    $('.lang').bind("click",function(){

        var lang = $(this).attr('lang');

        $.ajax({
            type: "POST",
            url: "sync/changeLang",
            dataType: 'json',
            data: {lang:lang}
        })
            .done(function() {
                location.reload();
            });

    });
});