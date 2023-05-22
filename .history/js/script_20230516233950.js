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


// Event for the window width and reading  =============================================//
$(window).on('load resize', function(){
    let scroll = $(window).scrollTop();

    // main visual scaling ====//
    mv_scale(scroll);
});



}); // Original Function



$(function(){

    /*=================================================
    ハンバーガ―メニュー
    ===================================================*/
    // ハンバーガーメニューをクリックした時
    $('.hamburger').on('click', function() {
      // ハンバーガーメニューの共通処理を呼び出す
      hamburger();
    });
    // メニューのリンクをクリックした時
    $('#navi a').on('click', function() {
      // ハンバーガーメニューの共通処理を呼び出す
      hamburger();
    });
  
    /*=================================================
    スムーススクロール
    ===================================================*/
    // ページ内リンクのイベント
    $('a[href^="#"]').click(function(){
      // リンクを取得
      let href= $(this).attr("href");
      // ジャンプ先のid名をセット
      let target = $(href == "#" || href == "" ? 'html' : href);
      // トップからジャンプ先の要素までの距離を取得
      let position = target.offset().top;
      // animateでスムーススクロールを行う
      // 600はスクロール速度で単位はミリ秒
      $("html, body").animate({scrollTop:position}, 600, "swing");
      return false;
    });
  
    /*=================================================
    フェード表示
    ===================================================*/
    $(".inview").on("inview", function (event, isInView) {
      if (isInView) {
        // 要素（inviewクラス）が表示されたらshowクラスを追加する
        $(this).stop().addClass("show");
      }
    });
  
    /*=================================================
    スクロール時のイベント
    ===================================================*/
    $(window).scroll(function() {
      // スクロール位置を取得
      let scroll = $(window).scrollTop();
  
      /*=================================================
      メインビジュアルの拡大・縮小
      ===================================================*/
      mv_scale(scroll);
  
      /*=================================================
      ロゴ、ハンバーガーメニューの表示
      ===================================================*/
      // スクロール位置が520pxを超えた場合
      if (scroll > 520) {
        // ロゴとハンバーガ―メニュをfadeInで表示する
        $('.logo').fadeIn(500);
        $('.hamburger').fadeIn(500);
      // スクロール位置が520px未満の場合
      } else {
        // ロゴとハンバーガ―メニュをfadeOutで非表示にする
        $('.logo').fadeOut(500);
        $('.hamburger').fadeOut(500);
      }
  
      /*=================================================
      サイドボタンを表示
      ===================================================*/
      // 画面下から#galleryまでの距離を取得
      let gallery_position = $('#gallery').offset().top - $(window).height();
      // 画面下から#accessまでの距離を取得
      let access_position = $('#access').offset().top - $(window).height();
  
      // window.innerWidthで画面幅を取得
      // PC表示の場合の処理（画面幅が900pxより大きい場合　※900pxはCSSのブレークポイントとあわせる）
      if (window.innerWidth > 900) {
        // #galleryが表示された場合（スクロール位置が、画面下から#galleryまでの距離を超えた場合）
        if(scroll > gallery_position){
          // #accessが表示されるまでの間は、#side-btnを横からスライドさせて表示する
          if(scroll < access_position){
            $('#side-btn').css({
              'transform': 'rotate(-90deg) translateY(0)'
            });
          // #accessが表示されたら、#side-btnをスライドさせて非表示にする
          } else {
            $('#side-btn').css({
              'transform': 'rotate(-90deg) translateY(60px)'
            });
          }
        // #galleryが表示される前は、#side-btnをスライドさせて非表示にする
        } else {
          $('#side-btn').css({
            'transform': 'rotate(-90deg) translateY(60px)'
          });
        }
      }
  
      /*=================================================
      Accessの背景画像を表示
      ===================================================*/
      // 画面下から#contactまでの距離を取得
      let contact_position = $('#contact').offset().top - $(window).height();
  
      // #accessが表示された場合
      if(scroll > access_position){
        // #contactが表示されるまでの間は、背景画像をfadeInで表示する
        if(scroll < contact_position){
          $('.bg').fadeIn(500);
        } else {
          $('.bg').fadeOut(500);
        }
      // #accessが表示される前の場合
      } else {
        // 背景画像を表示しない
        $('.bg').fadeOut(500);
      }
    });
  
    /*=================================================
    画面読み込み時と画面幅変更時のイベント
    ===================================================*/
    $(window).on('load resize', function() {
      // スクロール位置を取得
      let scroll = $(window).scrollTop();
  
      /*=================================================
      メインビジュアルの拡大・縮小
      ===================================================*/
      mv_scale(scroll);
    });
  });