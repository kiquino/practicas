$(document).ready(function () {
    //agarra clase owl-carousel y edita valores
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: false,
        autoWidth: true,
        dots: false
    });
    //

    //Agarra items articulos y agrega eventos de mouse
    $(".art").mouseenter(function () {

        $(this).find(".title-hover").prop("hidden", true);
        $(this).find(".text-container").prop("hidden", false);
        $(this).find(".text-container").animate({
            opacity: 1
        }, 200);

    });
    $(".art").mouseleave(function () {

        $(this).find(".title-hover").prop("hidden", false);
        $(this).find(".text-container").prop("hidden", true);
        $(this).find(".text-container").css("opacity", 0);
    });
    //

    //Crea Eventos para botones de navegacion mobile

    $(".menu-btn").click(function () {
        $(".menu").animate({
            left: 0,

        }, 200);
        $(".menu-btn").animate({
            opacity: 0
        }, 200, function () {
            $(".menu-btn").css({
                "display": "none"
            })
        });


    });
    $(".menu-close").click(function () {
        $(".menu").animate({
            left: -$(".menu").width()
        }, 200);
        $(".menu-btn").css({
            "display": "flex"
        })
        $(".menu-btn").animate({
            opacity: 1
        }, 200);

    });
    $(".nav-item").click(function () {
        $(".menu").animate({
            left: -$(".menu").width()
        }, 200);
        $(".menu-btn").animate({
            opacity: 1
        }, 200);
    });

    // FINN Eventos para botones de navegacion mobile

});
//Scroll Nav//
$(document).on('scroll', function () {
    let headerHeight = $("header").height();
    let scrollY = $(window).scrollTop();
    let scrollNav = $(".menu-btn");
    if (scrollY > headerHeight) {

        scrollNav.css({
            "width": "inherit",
            "justify-content": "inherit",
            "border-radius": "10px",
            "top": "2rem",
            "left": "2rem"
        });

    } else {
        scrollNav.css({
            "width": "100%",
            "justify-content": "space-between",
            "border-radius": "0px",
            "top": "0rem",
            "left": "0rem"
        });
    }

});