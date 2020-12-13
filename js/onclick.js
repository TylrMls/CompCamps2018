var $elem = $('#toggleButton');
function AnimateRotate(angle) {
  if (document.getElementById("navigation").style.marginLeft === "-100%") {
   $({deg: 0}).animate({deg: angle}, {
       duration: 500,
        step: function(now) {
           $elem.css({
               transform: 'rotate(' + now + 'deg)'
            });
       }
    });
    $('.nav').animate({"margin-left": '-=100%'});
    document.getElementById("navigation").style.marginLeft = "0%";
  } else {
   $('.nav').animate({"margin-left": '+=100%'});
   document.getElementById("navigation").style.marginLeft = "-100%";
   $elem.css({
       transform: 'rotate(45deg)'
   });
  }
}
