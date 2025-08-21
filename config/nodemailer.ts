import nodemailer from "nodemailer";

const email = "kingvidoski@gmail.com";
const password = "pgvdxknzzbnnfxec";

export const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false, // Use TLS
  auth: {
    user: "954840001@smtp-brevo.com",
    pass: "IMYSPV68fQ3skXLO",
  },
});

export const mailOptions = {
  from: email,
  to: email,
};
