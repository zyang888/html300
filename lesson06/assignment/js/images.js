$(function() {

  $("#nav-placeholder").load("nav.html");

  $('[data-toggle="tooltip"]').tooltip();

// Gallery
  var selectedClass = "";
  $(".filter").click(function() {
    selectedClass = $(this).attr("data-rel");
    $("#gallery").fadeTo(100, 0.1);
    $("#gallery div").not("." + selectedClass).fadeOut().removeClass('animation');
    setTimeout(function() {
      $("." + selectedClass).fadeIn().addClass('animation');
      $("#gallery").fadeTo(300, 1);
    }, 300);
  });

});
