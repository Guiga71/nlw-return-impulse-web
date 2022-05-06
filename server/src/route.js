"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const nodemailer_adapter_1 = require("./adapters/nodemailer/nodemailer-adapter");
const prisma_feedbacks_repository_1 = require("./repositories/prisma/prisma-feedbacks-repository");
const submit_feedback_1 = require("./use-cases/submit-feedback");
exports.routes = express_1.default.Router();
exports.routes.post('/feedbacks', async (req, res) => {
    const { type, comment, screenshot } = req.body;
    const prismaFeedbacksRepository = new prisma_feedbacks_repository_1.PrismaFeedbackRepository();
    const nodemailerAdapter = new nodemailer_adapter_1.NodemailerAdapter();
    const submitFeedbackUseCase = new submit_feedback_1.SubmitFeedbackUseCase(prismaFeedbacksRepository, nodemailerAdapter);
    await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot,
    });
    return res.status(201).send();
});
