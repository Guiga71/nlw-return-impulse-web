"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodemailerAdapter = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const transport = nodemailer_1.default.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "a5b4a4d5bb0d83",
        pass: "f809b0496f22f8"
    }
});
class NodemailerAdapter {
    async sendMail({ subject, body }) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Guilherme Cardozo <guiga711n@gmail.com>',
            subject,
            html: body,
        });
    }
}
exports.NodemailerAdapter = NodemailerAdapter;
