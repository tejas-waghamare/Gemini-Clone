import { useState } from 'react';
import { useId } from 'react'
import { IoSend } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addMessage, setMessages } from '../features/messagesSlice';
import { marked } from 'marked';
import { useEffect } from 'react';
import axios from 'axios';
import { createNewChat, setChats } from '../features/chatSlice';
import { createNewChatinDB, createNewMessageinDB, getChatsofUser, getGeminiResponse, getMessagesofChat } from '../services/servics';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

const DisplayMessages = () => {

    const newId = useId();
    const [formData, setFormData] = useState({
        userInput: ''
    })

    const token = useSelector(state => state.auth.token);
    const user = useSelector(state => state.auth.user);
    const messages = useSelector(state => state.messages.value);
    const dispatch = useDispatch();
    const { chatId } = useParams();
    const navigate = useNavigate();



    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        (async function () {
            const userChats = await getChatsofUser();
            dispatch(setChats(userChats))
            const userMessages = await getMessagesofChat(chatId);
            dispatch(setMessages(userMessages))
            // navigate('/new-chat')
        })();

    }, [chatId])



    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.userInput == "") return;

        if (chatId) {
            const newMessageUser = await createNewMessageinDB(
                formData.userInput,
                chatId,
                false);
            dispatch(addMessage(newMessageUser))
            setFormData({ userInput: "" });

            const answer = await getGeminiResponse(formData.userInput);
            const newMessageGemini = await createNewMessageinDB(answer, chatId, true);
            dispatch(addMessage(newMessageGemini));


        } else {
            const newChatObj = await createNewChatinDB(formData.userInput)
            dispatch(createNewChat(newChatObj))
            const newMessageUser = await createNewMessageinDB(
                formData.userInput,
                newChatObj._id,
                false
            );
            setFormData({ userInput: "" })
            const answer = await getGeminiResponse(formData.userInput);
            const newMessageGemini = await createNewMessageinDB(
                answer,
                newChatObj._id,
                true
            );

            navigate(`/${newChatObj._id}`);


        }


    };

    return (
        <div className='flex flex-col w-full h-[93%] bg-black '>
            <div className='h-4/5 max-h-4/5 w-4/5 mx-auto overflow-y-scroll mb-4 mt-2  rounded-2xl py-5 bg-white  items-center justify-center'>
                {
                    messages.length > 0 ?
                        messages.map(msg => {
                            return (
                                <div
                                    key={msg._id}
                                    className={`p-8 mb-2 text-xl text-left ${msg.geminiResponse ? 'text-start' : 'text-end'}`}
                                    dangerouslySetInnerHTML={{ __html: msg.text }}
                                />
                            );
                        })
                        :
                        <h2 className="text-center text-3xl font-semibold multicolor-text ">Hello, {user.name || 'user'}</h2>
                }




                {isLoading && (<h2 className="text-2xl">Loading...</h2>)}
            </div>

            <form className='flex items-center gap-4 w-3/4 mx-auto' onSubmit={handleSubmit}>
                <input type="text" name="userInput" id={newId} className='text-xl border-2 w-full p-3 rounded-4xl bg-gray-100 ' placeholder='Ask Gemini'
                    onChange={(e) => setFormData({

                        userInput: e.target.value
                    })}
                    value={formData.userInput} />

                <button type='submit' className='text-3xl cursor-pointer text-white'>
                    <IoSend />
                </button>
            </form>
        </div>
    )
}

export default DisplayMessages