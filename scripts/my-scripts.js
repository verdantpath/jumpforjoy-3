$(document).ready(function() {
  function getRandomNumber(num) {
    var myNum = Math.floor(Math.random() * num);
    return myNum;
  }
  var hideCode = function() {
    var numRand = getRandom(4);
    $('.guess_box').each(function(index, value) {
      if(numRand == index) {
        $(this).append('<span id="has_discount"></span>');
        return false;
      }
    });
  }
  $(".guess_box").click( checkForCode );
  function checkForCode() {
    $(".guess_box p").remove();
    var myNum = Math.floor((Math.random()*5) + 5);
    var discount = "<p>Your Discount is "+myNum+"%</p>";
    $(this).append(discount);
    $('div.guess_box').each(function() {
      $(this).off('click');
    });
  }
});
