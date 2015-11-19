$(function() {
  var bg = $(".call-to-action-wrapper")
  $(window).scroll(function() {
    bg.css({
      backgroundPositionY: -window.pageYOffset/7
    })
  });

  $(".about-wrapper .columns").addClass("animated-underline");

  $("[data-scroll-to]").click(function() {
    $("html, body").animate({
      scrollTop: $($(this).data("scroll-to")).offset().top
    }, 300)
    return false;
  });
});
