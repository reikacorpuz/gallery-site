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

    // Logo & hamburger showing  ====//
    if (scroll > 520) {
        $('.logo').fadeIn(500);
        $('.hamburger-menu').fadeIn(500);
    } else {
        $('.logo').fadeOut(500);
        $('.hamburger-menu').fadeOut(500);
    }

    // Side button showing  ====//
    let gallery_position = $('#gallery').offSet().Top - $(window).height();
    let access_position = $('#access').offSet().Top - $(window).height();

    if (window.innerWidth > 900) {
        if (scroll > gallery_position) {
            if (scroll < access_position) {
                $('.side-btn').css({
                    'transform': 'rotate(-90deg) translateY(0)'
                });
        } else {
            $('.side-btn').css({
                'transform': 'rotate(-90deg) translateY(60px)'
        });
    }

        } else {
            $('.side-btn').css({
                'transform': 'rotate(-90deg) translateY(60px)'
            });
        }   
    }

// Show Access bg  =============================================//
let contact_position = $ ('#contact').offSet().top - $(window).height();
if (scroll > access_position){
    if(scroll < contact_position){
        $('.bg').fadeIn(500);
    }else {
        $('.bg').fadeOut(500);
    }
} else {
    $('.bg').fadeOut(500);
}

});// Window Scroll


// Event for window width and reading  =============================================//




}); // Original Function