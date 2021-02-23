var imeprezime = document.getElementById("imeprezime");
var email = document.getElementById("email");
var telefon = document.getElementById("telefon");
var poruka = document.getElementById("poruka");
var gumb = document.getElementById("my-form-button");

gumb.addEventListener("click", function () {
  if (imeprezime.value == "") {
    document.getElementById("greskaime").style.visibility = "visible";
  } else document.getElementById("greskaime").style.visibility = "hidden";
  if (email.value == "") {
    document.getElementById("greskamail").style.visibility = "visible";
  } else document.getElementById("greskamail").style.visibility = "hidden";
  if (telefon.value == "") {
    document.getElementById("greskatelefon").style.visibility = "visible";
  } else document.getElementById("greskatelefon").style.visibility = "hidden";
  if (poruka.value == "") {
    document.getElementById("greskaporuka").style.visibility = "visible";
  } else document.getElementById("greskaporuka").style.visibility = "hidden";
});
