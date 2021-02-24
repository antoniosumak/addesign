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
      console.log("success", res.status);
    });
}
