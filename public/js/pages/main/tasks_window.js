function refresh_boards() {

    $(function () {
        $.ajax({
            type: "GET",
            url: "projects/index"
        })
            .done(function (data) {
                $("#tasks_transaction").html(data);
            });

    });

}

refresh_boards();



