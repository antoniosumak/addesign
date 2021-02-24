function sendMail() {
  var tempParms = {
    imeprezime: document.getElementById("imeprezime").value,
    emailadresa: document.getElementById("emailadresa").value,
    brojmobitela: document.getElementById("brojmobitela").value,
    poruka: document.getElementById("poruka").value,
  };

  emailjs
    .send("service_c9gkc1c", "template_xrfnrle", tempParms)
    .then(function (res) {
      document.getElementById("potvrda").style.display = "block";
      document.getElementById("potvrdaikona").style.display = "block";
      console.log("success", res.status);
    });
}
