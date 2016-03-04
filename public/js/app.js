var people = {
  show: function(id) {
    this.hide()
    $(".background-wrap").show();
    $("#" + id).addClass("active")
  },
  hide: function() {
    $(".background-wrap").hide();
    $(".active").removeClass("active");
  }
};

window.onpopstate = function(event) {
  if (event.state && event.state.visible) {
    people.show(event.state.target);
  } else {
    people.hide();
  }
};

$(function() {
  var bg = $(".call-to-action-wrapper")
  $(window).scroll(function() {
    bg.css({
      backgroundPositionY: -window.pageYOffset/7
    })
    var offset = $(".our-process-wrapper").offset().top;
    if ($(window).scrollTop() > offset) {
      $(".bulletin").addClass("fixed")
    } else {
      $(".bulletin").removeClass("fixed")
    }
  });

  $(".person").click(unction() {
    var id = $(this).attr("id")
    history.pushState({target: $(this).attr("id"), visible: true}, id, "/");
    people.show(id);
  });

  $(".close-background").click(function() {
    history.pushState({}, "", "/");
    people.hide();
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
