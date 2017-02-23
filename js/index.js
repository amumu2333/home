$(window).ready(function () {

(function () {
  var now = 0;
  var part = $(".view .part");
  $(".nav_box a").each(function (i) {
      $(this).on("click",function () {
        console.log(now);
        if (i == now) {
          return;
        }
        part
        .eq(i)
          .css("transition","")
          .addClass("active")
        .siblings()
          .removeClass("active");
        now = i;
      })
  });

  var h = document.documentElement.clientHeight;
  $(".part .inner .item").css("height",h+"px");

  var i=0;
  var flag = true;

  $(".part").on("mousewheel",function (event, delta, deltaX, deltaY) {
    var top = parseInt($(".inner",this).css("margin-top"));
    var bottom = parseInt($(".inner",this).css("margin-bottom"));
    var max = $(".inner .item").length;
    if (flag) {
      flag = !flag;
      switch (delta) {
        case 1 :
          //xia
          top+=h;
          if (top>0) {
            top = 0;
          }
          $(".inner",this).css("margin-top",top+"px");

          break;
        case -1 :
          //shang
          top-=h;
          if (top<-h*(max-1)) {
            top = -h*(max-1);
          }
          $(".inner",this).css("margin-top",top+"px");
          break;
        default:

      }










      setTimeout(function () {
        flag = !flag
      },1000)
    }else {
      return
    }

  })


})();
























});//DOMContentLoaded
