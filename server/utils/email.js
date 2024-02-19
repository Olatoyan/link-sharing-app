const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  // 1) Create a transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // 2) Define the email options
  const mailOptions = {
    from: "George Olatoyan <golatoyan@gmail.com>",
    to: options.email,
    subject: options.subject,
    html: options.message,
  };

  // 3) Send the email
  await transporter.sendMail(mailOptions);
};
module.exports = sendEmail;
