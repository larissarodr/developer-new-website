const atob = require('atob');
const nodemailer = require('nodemailer');
const creds = require('../utils/config');

var transport = {
  name: 'hostgator',
  port: 465,
  host: 'mail.developer.inf.br',
  auth: {
    user: atob(creds.EMAIL_USER),
    pass: atob(creds.EMAIL_PASS)
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

module.exports = {
  async sendEmail(req, res){
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
  }
};