$(document).ready(function() {
  // navgation bar picture
  $("#main-pic").attr("src", "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/21192400_1659415007426616_36548988407992831_n.jpg?_nc_cat=102&_nc_oc=AQlXfUFvOTfarpFBTX1QlZ1CtOUqDxQAyZIwOP4JAU9mbAhaWOGO2DIS2320EFDJXucwYjsRJQTshfqVTO3QA3ny&_nc_ht=scontent-sea1-1.xx&oh=256bdf6229f995a4032e33c167999adc&oe=5E98305A");
  // main picture
  $("#nav-pic").attr("src", "https://scontent-sea1-1.xx.fbcdn.net/v/t31.0-8/p960x960/12006472_1049073615127428_5637519699861230041_o.jpg?_nc_cat=110&_nc_oc=AQnEerYvZdDFwM---fIDh8opxiS3cVH1Qt4ssJPb_OYSVx4WVrxDctJa7dIQd-2vwxVmGpULGs_sO88ZogB5hhI_&_nc_ht=scontent-sea1-1.xx&oh=b17190c371e0a77d0e9201f11fc12399&oe=5EA91EAD");

  var $menu = $('.Menu-list'),
    $item = $('.Menu-list-item'),
    w = $(window).width(), //window width
    h = $(window).height(); //window height

  $("nav").on('mousemove', function(e) {
    var offsetX = 0.5 - e.pageX / w, //cursor position X
      offsetY = 0.5 - e.pageY / h, //cursor position Y
      dy = e.pageY - h / 2, //@h/2 = center of poster
      dx = e.pageX - w / 2, //@w/2 = center of poster
      theta = Math.atan2(dy, dx), //angle between cursor and center of poster in RAD
      angle = theta * 180 / Math.PI - 90, //convert rad in degrees
      offsetPoster = $menu.data('offset'),
      transformPoster = 'translate3d(0, ' + -offsetX * offsetPoster + 'px, 0) rotateX(' + (-offsetY * offsetPoster) + 'deg) rotateY(' + (offsetX * (offsetPoster * 2)) + 'deg)'; //poster transform

    //get angle between 0-360
    if (angle < 0) {
      angle = angle + 360;
    }

    //poster transform
    $menu.css('transform', transformPoster);

    //parallax for each layer
    $item.each(function() {
      var $this = $(this),
        offsetLayer = $this.data('offset') || 0,
        transformLayer = 'translate3d(' + offsetX * offsetLayer + 'px, ' + offsetY * offsetLayer + 'px, 20px)';
      $this.css('transform', transformLayer);
    });
  });

});
