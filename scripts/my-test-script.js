$(document).ready(function() {
  $("#btn1").click(function() {
    $("#header").addClass("hover");
    $("#header").removeClass("no-hover");
    console.log('clicked');
  });
  $("#btn2").click(function() {
    $("#header").removeClass("hover");
    $("#header").addClass("no-hover");
  });

  $(".guess_box").hover(
    function() {
      $("#header").addClass("hover");
      $("#header").removeClass("no-hover");
      console.log('mouse in');
    },
    function() {
      $("#header").removeClass("hover");
      $("#header").addClass("no-hover");
  });
});
