import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const mail = process.env.MAIL;
const password = process.env.MAIL_PASSWORD;
const mailTo = process.env.MAIL_TO;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  service: "gmail",
  auth: {
    user: mail,
    pass: password,
  },
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body;

  const mailOptions = {
    from: mail,
    to: mailTo,
    subject: `New Message from ${body.name}`,
    text: `Name: ${body.name}\nEmail: ${body.email}\nMessage: ${body.message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({ success: false });
    } else {
      res.status(200).json({ success: true });
    }
  });
}
