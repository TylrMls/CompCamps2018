function AnimateRotate(angle) {
    var $elem = $('#toggleButton');

    if (!isOpen) {
      $('.nav').animate({"margin-left": '-=100%'});
      isOpen = false;
      $({deg: angle}).animate({deg: 0}, {
          duration: 500,
          step: function(now) {
              $elem.css({
                  transform: 'rotate(' + now + 'deg)'
              });
          }
      });
      isOpen = true;
    } else {
      $({deg: 0}).animate({deg: angle}, {
          duration: 500,
          step: function(now) {
              $elem.css({
                  transform: 'rotate(' + now + 'deg)'
              });
          }
      });
      $('.nav').animate({"margin-left": '+=100%'});
      isOpen = false;
    }
}
function KeepOpen() {
  if (isOpen == true) {
    localStorage.setItem('keepTabOpen', true);
    console.log("1")
  } else {
    localStorage.setItem('keepTabOpen', false);
    console.log("2");
  }
}
var myElement = document.querySelector("#navigation");
if (localStorage.getItem('keepTabOpen')) {
  var isOpen = true;
  $(".nav").css("margin-left","0")
  console.log("1!");
} else {
  var isOpen = false;
  $(selector).css("margin-left","-100%")
  console.log("2!");
}
