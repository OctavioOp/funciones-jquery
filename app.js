//parte 1
$("#btn-ac").on("click", function () {
  $(".text-red").toggleClass("text-danger");
});
$("#btn-acw").on("click", function () {
  $(".text-red").toggleClass("text-warning");
});
$("#btn-acs").on("click", function () {
  $(".text-red").toggleClass("text-success");
});

//parte 2
$("#btn-hs").on("click", function () {
  $("#foto").toggle();
});

$("#btn-st").on("click", function () {
  $("#foto").slideToggle();
});

$("#btn-ft").on("click", function () {
  $("#foto").fadeToggle();
});

//parte 3
$("#btn-ap").on("click", function () {
  $("#text").append("<h3>Shrek is life, Shrek is love</h3>");
});

$("#btn-ht").on("click", function () {
  $("#text").html("<h3>Why did you press that button?</h3>");
});

//parte extra
$("#video").hide();

$("#magic").on("click", function () {
  $("#video").fadeIn();
  $("#magic").fadeOut(3000);
});

//extra 2
$("form #apellido").val('..last name?');
$("form button").after("<p>after the button</p>")
$("form button").before("<p>before the button</p>")


