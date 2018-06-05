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
});
