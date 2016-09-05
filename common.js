$(document).ready(function () {
    $(".top-menu").on("click", function () {
        var k = false;
        var index = 0;
        if (!k) {
            var count_li = $(".ul-wrapper li").length;


            $(".icon-arrow").css("transmission", "url(img/arrow_up.png)");
            $(".icon-arrow").css("background-image", "url(img/arrow_up.png)");

            $(".ul-wrapper li:nth-child(n+6)").css("display", "none"); // hide all items except first 5 items


            if (count_li > 5) { // show item (5'th)
                $(".ul-wrapper ul").append("<div class = 'add_item'> Add item ... </div>");


                $(".add_item").on("click", function() {

                    $(".ul-wrapper li").each(function (i, el) {
                            if (el.style.display == "none") {
                                index++;
                                if (index < 6) {
                                    $(this).slideDown("1000", function () {});

                                }
                            }
                            if ($(".ul-wrapper li:last")[0].style.display == "") {
                                $(".add_item").fadeOut(300, function(){
                                    $(this).remove();
                                });

                               


                                $(".hide_item").on("click", function() {
                                    $(".icon-arrow").css("background-image", "url(img/arrow_down.png)");
                                    $(".ul-wrapper").slideUp("1000", function () {
                                        $(".hide_item").remove();
                                        k = false;
                                    });
                                });
                            }

                    })
                    index = 0;
                });

            }

            $(".ul-wrapper").slideDown("1000", function () {
                k = true;
            });
        }

        if (k) {
            $(".add_item").remove();
            $(".icon-arrow").css("background-image", "url(img/arrow_down.png)");
            $(".ul-wrapper").slideUp("1000", function () {
                k = false;
            });
        }
    });
});