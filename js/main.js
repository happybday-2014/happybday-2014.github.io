$.backstretch("img/bg.svg");
var $happybday = $('.happy-bday'),
    $page      = $('.page'),
    $lazyImg   = $("img.lazy"),
    $preloader = $(".preloader"),
    $window    = $(window);

$happybday.css({
  top: $window.height()
});

$lazyImg.show().lazyload({
    'effect': "fadeIn",
    'event' : "custom"
});

$window.on('resize', function(){
  $happybday.height($window.height());
});

$window.on('load', function(){
  $lazyImg.trigger("custom");
  $page.css({
    visibility: 'visible'
  });
  $preloader.transition({
    top: -2000
  }, 2000);
  $happybday.transition({
    top: 0
  }, 2000);
  setTimeout(function() {
    $happybday.addClass('floating');
  }, 2000);
});


$window.trigger('resize');

