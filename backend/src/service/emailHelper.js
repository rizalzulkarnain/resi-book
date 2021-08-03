const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

const send = (info) => {
  return new Promise(async (resolve, reject) => {
    try {
      // send mail with defined transport object
      let result = await transporter.sendMail(info);

      console.log('Message sent: %s', result.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

      // Preview only available when sending through an Ethereal account
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(result));
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
      resolve(result);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};

exports.emailProcessor = (email, pin) => {
  const info = {
    from: 'Resi Book Management',
    to: email,
    subject: 'Reset Password Pin',
    text: 'Here is your password reset pin:' + pin,
    html: `<b>Here is your password reset pin: ${pin} !.</b>`,
  };

  send(info);
};
