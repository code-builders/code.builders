$(function() {
  $("[data-scroll-to]").click(function() {
    $("html, body").animate({
      scrollTop: $($(this).data("scroll-to")).offset().top
    }, 300)
    return false;
  });
});
