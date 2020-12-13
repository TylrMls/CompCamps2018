var $elem = $('#toggleButton');
var nav = document.querySelector('.nav');
function AnimateRotate(angle) {
  var left_margin = window.getComputedStyle(nav).getPropertyValue("margin-left");
  if (left_margin == 100%) {
    console.log("add");
   $({deg: 0}).animate({deg: angle}, {
       duration: 500,
        step: function(now) {
           $elem.css({
               transform: 'rotate(' + now + 'deg)'
            });
       }
    });
  } else {
   $('.nav').animate({"margin-left": '+=100%'});
   document.getElementById("navigation").style.marginLeft = "0";
   $elem.css({
       transform: 'rotate(45deg)'
   });
  }
}
