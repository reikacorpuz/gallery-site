$(function(){


// ハンバーガー  =============================================//
$(".hamburger-menu").click(function () {
    $(this).toggleClass('active');
});

$('nav a').on('click', function(){
    hamburger-menubar();
});

// Scroll view =============================================//
$('a[href^="#"]').click(function(){
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html': href);
    let position = target.offSet().top;
    $("html,body").animate({scrollTop:position}, 600, "swing");
    return false;
});


// Fade view =============================================//
$(".inview").on ("inview", function (event, isInView){
    if (isInView) {
        $(this).stop().addClass("show");
    }
});

// Scroll event  =============================================//
$(window).scroll(function(){
    let scroll = $ (window).scrollTop();
    mv_scale(scroll);

    // Logo & hamburger appear  ====//
    if (scroll > 520) {
        $('.logo').fadeIn(500);
        $('.hamburger-menu').fadeIn(500);
    } else {
        $('.logo').fadeOut(500);
        $('.hamburger-menu').fadeOut(500);
    }

    // Side button appear  ====//
    let gallery_position = $('#gallery').offSet().Top - $(window).height();
    let access_position = $('#access').offSet().Top - $(window).height();

    if (window)

})


});