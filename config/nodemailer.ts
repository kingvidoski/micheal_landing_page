import nodemailer from "nodemailer";

const email = "kingvidoski@gmail.com";

export const transporter = nodemailer.createTransport({
  host: process.env.NEXT_PUBLIC_HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.NEXT_PUBLIC_USER,
    pass: process.env.NEXT_PUBLIC_PASS,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};
