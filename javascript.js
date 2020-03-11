newFunction();

function newFunction() {
    $("button").on("click", function () {
        console.log("we faded");
        $('div').fadeOut(1000, function () {
            $(this).remove();
        });
    });
}

