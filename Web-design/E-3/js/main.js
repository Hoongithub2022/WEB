$(function(){
    $(".gnb > li").hover(
        function () {
          $(this).find("ul").stop().fadeIn();
        },
        function () {
          $(this).find("ul").stop().fadeOut();
        }
      );

      setInterval(function () {
        $(".slides").animate({ top: "-100%" }, function () {
          var firstSlide = $(".slide").eq(0);
          $(this).append.$(firstSlide);
          $(this).css("top", 0);
        });
      }, 3000);

      var slide = $(".slide");
      var current = 0;
      slide.eq(0).show();

      setInterval(function () {
        var next = (current + 1) % slide.length;
        slide.eq(current).fadeOut();
        slide.eq(next).fadeIn();
        current = next;
      }, 3000);
})