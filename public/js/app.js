$(function() {
  var bg = $(".call-to-action-wrapper")
  $(window).scroll(function() {
    bg.css({
      backgroundPositionY: -window.pageYOffset/7
    })
  });

  $(".person").click(function() {
    $(".background-wrap").fadeIn(100);
    $(this).addClass("active")
  });

  $(".close-background").click(function() {
    $(".background-wrap").fadeOut(100);
    $(".active").removeClass("active");
    return false;
  });

  $(".about-wrapper .columns").addClass("animated-underline");

  $("[data-scroll-to]").click(function() {
    $("html, body").animate({
      scrollTop: $($(this).data("scroll-to")).offset().top
    }, 300)
    return false;
  });
});
