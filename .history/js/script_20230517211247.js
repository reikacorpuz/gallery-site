$(function(){


// ハンバーガー  =============================================//
$(".hamburger-menu").click(function () {
    $(this).toggleClass('active');
});

$('nav a').on('click', function(){
    hamburger();
});

// Smooth scroll =============================================//
$('a[href^="#"]').click(function(){
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({scrollTop:position}, 600, "swing");
    return false;
    });

// Fade view =============================================//
$(".inview").on("inview", function (event, isInView) {
    if (isInView) {
        $(this).stop().addClass("show");
    }
});

// Scroll event  =============================================//
$(window).scroll(function() {
    let scroll = $(window).scrollTop();

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
    let gallery_position = $('#gallery').offset().top - $(window).height();
    let access_position = $('#access').offset().top - $(window).height();

    if (window.innerWidth > 900) {
        if(scroll > gallery_position){
            if(scroll < access_position){
            $('#side-btn').css({
                'transform': 'rotate(-90deg) translateY(0)'
            });
            } else {
            $('#side-btn').css({
                'transform': 'rotate(-90deg) translateY(60px)'
            });
            }
        } else {
            $('#side-btn').css({
            'transform': 'rotate(-90deg) translateY(60px)'
            });
        }
    }

// Show Access bg  =============================================//
let contact_position = $('#contact').offset().top - $(window).height();


    if(scroll > access_position){
        if(scroll < contact_position){
            $(this).addClass('fadeUp');
        } else {
            $(this).removeClass('fadeUp');
        }
    } else {
        $(this).removeClass('fadeUp');
    }

});// Window Scroll

function fadeAnime(){

    // ふわっ
    $('.fadeUpTrigger').each(function(){ //fadeUpTriggerというクラス名が
        var elemPos = $(this).offset().top-50;//要素より、50px上の
        $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
        }else{
        $(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
        }
        });
  
  // 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function (){
      fadeAnime();/* アニメーション用の関数を呼ぶ*/
    });


// Event for window width and screen reading  =============================================//
$(window).on('load resize', function(){
    let scroll = $(window).scrollTop();

    // main visual scaling ====//
    mv_scale(scroll);
});

}); // Original Function


// ハンバーガー Common operation =============================================//
function hamburger() {
    $('.hamburger-menu').toggleClass('active');
    if ($('.hamburger-menu').hasClass('active')) {
        $('.nav').addClass('active');
    } else {
        $('.nav').removeClass('active');
    }
}


// main visual scaling Common operation =============================================//
function mv_scale(scroll) {
    if (window.innerWidth > 900) {
        $('.l-main-visual-img').css({
            'width': 100/3 + scroll/10 + '%'
        });
    } else {
        $('.l-main-visual-img').css({
            'width': 100 - scroll/10 + '%'
        });
    }
}