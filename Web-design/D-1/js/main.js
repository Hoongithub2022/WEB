 $(function(){
 // gnb
 $(".gnb").hover(
    function () {
      $(this).addClass("on");
      $(".sub").stop().fadeIn();
    },
    function () {
      $(this).removeClass("on");
      $(".sub").stop().fadeOut();
    }
  );

  // slider
  setInterval(function () {
    $(".slides").animate({ top: "-100%" }, function () {
      $(this).append($(".slide").eq(0)); // css => top = -100%
      $(this).css({ top: 0 });
    });
  }, 3000);

  // tab
  $(".tab_title h3").click(function () {
    var idx = $(this).index();
    $(".tab_title h3").removeClass("active");
    $(this).addClass("active");

    $(".tab_contents ul").hide();
    $(".tab_contents ul").eq(idx).show();
  });
 })