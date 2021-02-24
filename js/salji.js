const inputi = document.querySelector("form");

function salji() {
  Email.send({
    Host: "smtp.mailtrap.io",
    Username: "98f4221afe9eee",
    Password: "5687a381648608",
    To: "sumakantonio@gmail.com",
    From: inputi.elements["emailadresa"].value,
    Subject: "This is the subject",
    Body:
      inputi.elements["imeprezime"].value +
      "<br>" +
      inputi.elements["brojmobitela"].value +
      "<br>" +
      inputi.elements["poruka"].value,
  }).then((message) => alert(message));
}
