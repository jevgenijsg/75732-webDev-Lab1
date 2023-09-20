$(document).ready(function () {
    var scrollPosition = $(window).scrollTop();
    var $navbar = $(".w3-top");

    $(window).scroll(function() {
        var currentScrollPosition = $(window).scrollTop();

        if (currentScrollPosition > scrollPosition) {
            $navbar.addClass("modified-navbar-hidden");
        } else {
            $navbar.removeClass("modified-navbar-hidden");
        }
        scrollPosition = currentScrollPosition;
        setTimeout(function() {
            $navbar.removeClass('modified-navbar-hidden');
        }, 2000);
    });    


    $(".magnify-text").hover(
        function() {
            $(this).css("font-size", "20px");
        },
        function() {
            $(this).css("font-size", "")
        }
    );

    $("li").on("mouseenter", function () {
        $(this).css("background-color", "#FFFFFF");
        $(this).css("transform", "scale(1.1)");
    });

    $("li").on("mouseleave", function () {
        $(this).css("background-color", "");
        $(this).css("transform", "");
    });

    var $elementsToAnimate = $(".names");

    $($elementsToAnimate)
        .hide()
        .each(function (index) {
            $(this).delay(1000 * index).fadeIn(2000);
        });

    var scrollToTopButton = $(".scroll-to-top-button");

    scrollToTopButton.click(function () {
        $("html, body").animate({ scrollTop: 0 }, 500);
    });
});

