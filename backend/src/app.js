const express = require("express");
const atob = require('atob');
const cors = require("cors");
const nodemailer = require('nodemailer');
const creds = require('./config');
const app = express();

app.use(cors());
app.use(express.json());


var transport = {
  name: 'hostgator',
  port: 465,
  host: 'mail.developer.inf.br',
  auth: {
    user: atob(creds.USER),
    pass: atob(creds.PASS)
  },
  tls: {
    rejectUnauthorized: false
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('All working fine. SMTP successfully connected.');
  }
});

app.post('/sendEmail', (req, res, next) => {
  const message = req.body.messageHtml


  var mail = {
    from: 'faleconosco@developer.inf.br',
    to: 'larissa_rodr@hotmail.com',  
    subject: `Contato através do site`,

    html: `${message}`
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'error'
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
})

module.exports = app;
