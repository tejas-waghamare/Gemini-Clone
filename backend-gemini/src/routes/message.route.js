import express from 'express'
import { createMessage, getAllMessages, getGeminiResponseController } from '../controllers/message.controller.js'
const messageRouter = express.Router()

messageRouter.post('/create-message', createMessage)
messageRouter.get('/get-all-messages/:chatId', getAllMessages)
messageRouter.post('/get-gemini-response', getGeminiResponseController)

export default messageRouter