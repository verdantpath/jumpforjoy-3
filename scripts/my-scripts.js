$(document).ready(function() {
  $(".guess_box").on('click', checkForCode);
  function getRandom(num) {
    var myNum = Math.floor(Math.random() * num);
    return myNum;
  }
  var hideCode = function() {
    var numRand = getRandom(4);
    $('.guess_box').each(function(index, value) {
      if(numRand == index) {
        $(this).append('<span id="has_discount"></span>');
        console.log("discount added");
        return false;
      }
    });
  }
  hideCode();
  // $(".guess_box").click( checkForCode );
  function checkForCode() {
    var discount;
    if($.contains(this, document.getElementById("has_discount"))) {
      var myNum = getRandom(5);
      discount = "<p>Your Discount is " + myNum + "%</p>";
    } else {
      discount = "<p>Sorry, no discount this time!</p>";
    }

    $(this).append(discount);
    $('div.guess_box').each(function() {
      $(this).off('click');
    });
  }
});
