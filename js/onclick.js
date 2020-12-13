var $elem = $('#toggleButton');

function AnimateRotate(angle) {
  console.log("add");
  $({deg: 0}).animate({deg: angle}, {
      duration: 500,
      step: function(now) {
          $elem.css({
              transform: 'rotate(' + now + 'deg)'
          });
      }
  });
  $('.nav').animate({"margin-left": '+=100%'});
  document.getElementById("navigation").style.marginLeft = "0";
  $elem.css({
      transform: 'rotate(45deg)'
  });
}
