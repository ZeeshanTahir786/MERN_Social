const nodemailer = require("nodemailer");

exports.sendEmail = async (options) => {
  // via Mail Trap =>
  var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "4adfbe196e0b38",
      pass: "8a3cb913321357",
    },
  });
  // ============================
  //   // via Gmail =>
  //   const transport = nodemailer.createTransport({
  //     host: process.env.EMAIL_HOST,
  //     port: process.env.EMAIL_PORT,
  //     auth: {
  //       user: process.env.EMAIL_USER,
  //       pass: process.env.EMAIL_PASS,
  //     },
  //     service: process.env.EMAIL_SERVICE,
  //   });
  const { email, subject, message } = options;
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: email,
    subject,
    text: message,
  };

  await transport.sendMail(mailOptions);
};
