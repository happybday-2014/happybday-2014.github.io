$.backstretch("img/bg.svg");
var $happybday = $('.happy-bday'),
    $page      = $('.page');
    $window    = $(window);

$happybday.css({
  top: $window.height()
});

$("img.lazy").show().lazyload({
    // effect : "fadeIn"
});

$window.on('resize', function(){
  $happybday.height($window.height());
});

$window.on('load', function(){
  $page.css({
    visibility: 'visible'
  });
  $happybday.transition({
    top: 0
  }, 2000);
  setTimeout(function() {
    $happybday.addClass('floating');
  }, 2000);
});


$window.trigger('resize');

