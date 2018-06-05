$(document).ready(function() {

  // call the function when an element with the .guess_box class is clicked
  $(".guess_box").on('click', checkForCode);

  // Random number generator
  function getRandom(num) {
    var myNum = Math.floor(Math.random() * num);
    return myNum;
  }

  // Named function that hides the discount code
  var hideCode = function() {
    var numRand = getRandom(4);

    // .each handler that loops through each .guess_box
    // index refers to which item we are in the loop
    // value refers to the current object (.guess_box)
    // if the current .guess_box index mathces the random number in numRand, the discount gets appended with .append()
    $('.guess_box').each(function(index, value) {
      if(numRand == index) {
        $(this).append('<span id="has_discount"></span>');
        // console.log("discount added");

        // tells the loop to stop executing and move on
        return false;
      }
    });
  }

  // Call the function add #has_discount to a random .guess_box
  hideCode();

  // Another named function that tells you if you clicked the right .guess_box and what the discount is
  function checkForCode() {
    var discount;

    // Conditional logic to see if the user found the discount code
    // *this* refers to the current element, the one that called the function, in other words the .guess_box that was clicked
    // the *contains8 method looks to see if the .guess_box that was clicked has a child with an id of "has_discount"
    if($.contains(this, document.getElementById("has_discount"))) {
      var myNum = getRandom(5);
      discount = "<p>Your Discount is " + myNum + "%</p>";
    } else {
      discount = "<p>Sorry, no discount this time!</p>";
    }
    // Adds the discount message to the .guess_box that was clicked
    $(this).append(discount);
    // Ensures that the discount message is only shown once
    $('div.guess_box').each(function() {
      $(this).off('click');
    });
  }
});
