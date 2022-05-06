import express from 'express';
import { NodemailerAdapter } from './adapters/nodemailer/nodemailer-adapter';
import { PrismaFeedbackRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback';

export const routes = express.Router()


routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const prismaFeedbacksRepository = new PrismaFeedbackRepository()
  const nodemailerAdapter = new NodemailerAdapter()
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(prismaFeedbacksRepository, nodemailerAdapter)

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot,
  })

  

  return res.status(201).send();
})