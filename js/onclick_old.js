var $elem = $('#toggleButton');

function AnimateRotate(angle) {
    if (localStorage.getItem('keepTabOpen') == 'true') {
      console.log("sub")
      $('.nav').animate({"margin-left": '-=100%'});
      $({deg: angle}).animate({deg: 0}, {
          duration: 500,
          step: function(now) {
              $elem.css({
                  transform: 'rotate(' + now + 'deg)'
              });
          }
      });
      localStorage.setItem('keepTabOpen', 'false')
    } else {
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
      localStorage.setItem('keepTabOpen', 'true')
    }
}
if (localStorage.getItem('keepTabOpen') === 'false') {
  document.getElementById("navigation").style.marginLeft = "-100%";

} else {
  document.getElementById("navigation").style.marginLeft = "0";
  $elem.css({
      transform: 'rotate(45deg)'
  });
}
