$(function () {
  "use strict";
  //   Adjust Slider Height
  const winH = $(window).height(),
    upperH = $(".upper-bar").innerHeight(),
    navH = $(".navbar").innerHeight();
  $(".slider, .carousel-item").height(winH - (upperH + navH));

  // Featured Work Shuffle
  $(".featured-work ul li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
    if ($(this).data("class") === "all") {
      $(".shuffle-imgs img").css("opacity", 1);
    } else {
      $(".shuffle-imgs img").css("opacity", ".08");
      $($(this).data("class")).css("opacity", "1");
    }
  });
});

const glightbox = GLightbox({
  selector: ".glightbox",
});