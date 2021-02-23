const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require("path");
const nodemailer = require("nodemailer");

const app = express();

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

//Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Static mapa
app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index", { layout: false });
});

app.post("/send", (req, res) => {
  const output = `
  <h3>Detalji kontakta</h3>
  <p>Ime prezime: ${req.body.imeprezime} </p>
  <p>Email adresa: ${req.body.emailadresa} </p>
  <p>Broj mobitela: ${req.body.brojmobitela} </p>
  <h3>Poruka:</h3>
  <p>${req.body.poruka}</p>
  `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "antonio2.sumak@gmail.com",
      pass: "2YDYTK2M",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"ADDesign" <antonio2.sumak@gmail.com>', // sender address
    to: "sumakantonio@gmail.com", // list of receivers
    subject: "Node Contact Request", // Subject line
    text: "Hello world?", // plain text body
    html: output, // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    res.render("index", { msg: "Email has been sent" });
  });
});

app.listen(3000, () => console.log("Server starter..."));
