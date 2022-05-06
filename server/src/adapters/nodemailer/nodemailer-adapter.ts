import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "a5b4a4d5bb0d83",
    pass: "f809b0496f22f8"
  }
});


export class NodemailerAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Guilherme Cardozo <guiga711n@gmail.com>',
      subject,
      html: body,
    })
  }
}