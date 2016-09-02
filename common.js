$(document).ready(function () {
    $(".top-menu").on("click", function () {
        var k = false;
        if (!k) {
            $(".icon-arrow").css("transmission", "url(img/arrow_up.png)");
            $(".icon-arrow").css("background-image", "url(img/arrow_up.png)");
            $(".ul-wrapper").slideDown("1000", function () {
                k = true;
            });
        }

        if (k) {
            $(".icon-arrow").css("background-image", "url(img/arrow_down.png)");
            $(".ul-wrapper").slideUp("1000", function () {
                k = false;
            });
        }
    });
});