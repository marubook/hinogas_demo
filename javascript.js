$(function () {

  var navBox = $("#h__nav-sp");  // 変数の定義
  
  navBox.hide();   // 最初は隠しておく

  var TargetPos = 50; // スクロール量

  $(window).scroll( function() { //スクロールされた際に実行
    var ScrollPos = $(window).scrollTop();  // 現在のスクロール値を取得
    // console.log (TargetPos)
    if ( TargetPos < ScrollPos ){ // 現在のスクロール値と目的のスクロール値を比較
      // console.log( ScrollPos );
      navBox.fadeIn();  //表示
    } else {
      navBox.fadeOut(); // 非表示
    }
  });
});

$(function(){
  var navMenu = $("#h__menu-sp");
  var navHam = $("#h__hamburger");
  
  navHam.on('click',function(){
    
    navHam.toggleClass('is-active');
    navMenu.toggleClass('js-active');
  });
});

// jQuery('.header__hamburger').on('click', function (e) {
//   e.preventDefault(); //aタグなどクリック時の動作を初期化、クリックイベント作成時には必ずつける

//   jQuery('.header__hamburger').toggleClass('is-active');
//   jQuery('.header__menu-sp').toggleClass('js-active');
//   // jQuery('.drawer-background').toggleClass('is-active');


//   return false;//古いブラウザへの対処
// });
