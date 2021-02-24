var imeprezime = document.getElementById("imeprezime");
var email = document.getElementById("email");
var telefon = document.getElementById("telefon");
var poruka = document.getElementById("poruka");
var gumb = document.getElementById("gumb");
const inputi = document.querySelector("form");

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

  Email.send({
    Host: "smtp.gmail.com",
    Username: "antonio2.sumak@gmail.com",
    Password: "2YDYTK2M",
    To: "sumakantonio@gmail.com",
    From: inputi.elements["emailadresa"].value,
    Subject: "This is the subject",
    Body:
      imeprezime.value +
      "<br>" +
      brojmobitela["brojmobitela"] +
      "<br>" +
      poruka["poruka"] +
      "<br>",
  }).then((msg) => alert("Email uspješno poslan!"));
});
