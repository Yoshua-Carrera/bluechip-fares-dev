import { createTransport } from 'nodemailer'

export async function sendEmail(content: { to: string; subject: string; text: string }) {
  const transporter = createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  })

  await transporter.sendMail({
    from: `"Bluechip Fares" <${process.env.SMTP_USER}>`,
    to: content.to,
    subject: content.subject,
    text: content.text,
  })
}
