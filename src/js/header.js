$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        //clearHeader, not clearheader - caps H
        $("#header").addClass("head-sticky");
    } else {
        $("#header").removeClass("head-sticky");
    }
});