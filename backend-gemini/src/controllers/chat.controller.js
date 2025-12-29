import Chat from "../models/chat.model.js";
import Message from "../models/message.model.js";

export const getChats = async (req, res) => {

    const userId = req.userId
    try {
        const chats = await Chat.find({ userId });

        res.status(200).json({
            data: chats,
            message: 'OK',
            status: 'success'
        })
    } catch (err) {
        console.log(err.message)
        res.json({
            status: 'error',
            message: err.message
        })
    }
}

export const createChat = async (req, res) => {

    const chat = {
        name: req.body.name,
        userId: req.userId
    }

    try {
        const newChat = await Chat.create(chat);

        if (!newChat) {
            res.status(400).json({
                status: 'error',
                message: 'Chat cannot be created!'
            })
        }

        res.status(201).json({
            data: newChat,
            message: 'New chat created!',
            status: 'success'
        })
    } catch (err) {
        res.status(400).json({
            status: 'error',
            message: err.message
        })
    }
}

export const deleteChat = async (req, res) => {

    const { chatId } = req.params;

    try {
        const isChatDeleted = await Chat.deleteOne({ _id: chatId });

        if (isChatDeleted.deletedCount === 0) {
            return res.status(400).json({
                status: 'error',
                message: 'Chat not found or cannot be deleted!'
            });
        }

        const isMessagesDeleted = await Message.deleteMany({ chatId });

        if (isMessagesDeleted.deletedCount === 0) {
            console.log('No messages to delete or unable to delete messages from the chat!');
        }

        res.status(200).json({
            status: 'success',
            message: 'Chat deleted successfully!'
        })
    } catch (err) {
        res.status(400).json({
            status: 'error',
            message: err.message
        })
    }
}