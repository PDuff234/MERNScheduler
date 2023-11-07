// utils/sendEmail.js
const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  // Create a transporter
  const transporter = nodemailer.createTransport({
    // ... your SMTP settings
  });

  // Define email options
  const mailOptions = {
    from: 'Your Calendar Scheduler App <noreply@yourapp.com>',
    to: options.to,
    subject: options.subject,
    text: options.text,
    html: options.html, // if you want to send HTML formatted emails
  };

  // Send email
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
