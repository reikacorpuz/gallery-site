$(function(){


// ハンバーガー  =============================================//
$(".hamburger-menu").click(function () {
    $(this).toggleClass('active');
});

$('nav a').on('click', function(){
    hamburger-menubar();
});

// Scroll  =============================================//
$('a[href^="#"]').click(function(){
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html': href);
    let position = target.offSet().top;
    $("html,body").animate({scrollTop:position}, 600, "swing");
    return false;
});


// Fade  =============================================//
$(".inview").on ("inview", function (event, isInView){
    if (isInView) {
        $
    }
})




});