      // gnb
      $(function () {
        $(".gnb li").hover(
          function () {
            $(this).find(".sub").stop().slideDown();
          },
          function () {
            $(this).find(".sub").stop().slideUp();
          }
        );
        // 슬라이드
        var index = 0;
        $(".slide").eq(index).show();

        setInterval(function () {
          var nextIndex = (index + 1) % 3;

          $(".slide").eq(index).fadeOut();
          $(".slide").eq(nextIndex).fadeIn();
          index = nextIndex;
        }, 3000);

        //tab
        $(".tab_title h3").click(function () {
          $(".tab_title h3").removeClass("active");
          $(this).addClass("active");

          var idx = $(this).index();

          $(".tab_contents ul").hide();
          $(".tab_contents ul").eq(idx).show();
        });

        //modal
        $("#showModal").click(function () {
          $(".modal").show();
        });

        $("#closeModal").click(function () {
          $(".modal").hide();
        });
      });