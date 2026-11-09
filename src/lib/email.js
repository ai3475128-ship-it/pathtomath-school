import nodemailer from "nodemailer";
import { smtpOptions } from "./smtp-options.js";

export function smtpConfigured() {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASSWORD);
}

export async function sendEmail({ to, subject, text }) {
  const transport = nodemailer.createTransport(await smtpOptions());
  try {
    await transport.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to,
      subject,
      text,
    });
  } finally {
    transport.close();
  }
}
