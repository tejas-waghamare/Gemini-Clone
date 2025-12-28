
// import { useState, useEffect, useRef } from 'react';
// import { useId } from 'react';
// import { IoSend } from "react-icons/io5";
// import { useSelector, useDispatch } from 'react-redux';
// import { addMessage, setMessages } from '../features/messagesSlice';
// import { marked } from 'marked';
// import {
//     createNewChatinDB,
//     createNewMessageinDB,
//     getChatsofUser,
//     getGeminiResponse,
//     getMessagesofChat
// } from '../services/servics';
// import { createNewChat, setChats } from '../features/chatSlice';
// import { useNavigate, useParams } from 'react-router-dom';

// const DisplayMessages = () => {
//     const newId = useId();
//     const [formData, setFormData] = useState({ userInput: '' });

//     const token = useSelector(state => state.auth.token);
//     const user = useSelector(state => state.auth.user);
//     const messages = useSelector(state => state.messages.value);
//     const dispatch = useDispatch();
//     const { chatId } = useParams();
//     const navigate = useNavigate();

//     const [isLoading, setIsLoading] = useState(false);
//     const messagesEndRef = useRef(null);
//     const messagesContainerRef = useRef(null);

//     useEffect(() => {
//         (async function () {
//             const userChats = await getChatsofUser();
//             dispatch(setChats(userChats));
//             const userMessages = await getMessagesofChat(chatId);
//             dispatch(setMessages(userMessages));
//         })();
//     }, [chatId]);

//     useEffect(() => {
//         if (messagesEndRef.current) {
//             messagesEndRef.current.scrollIntoView({ 
//                 behavior: "smooth",
//                 block: "nearest"
//             });
//         }
//     }, [messages, isLoading]);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (formData.userInput.trim() === "") return;

//         const input = formData.userInput;
//         setFormData({ userInput: "" });
//         setIsLoading(true);

//         try {
//             if (chatId) {
//                 const newMessageUser = await createNewMessageinDB(input, chatId, false);
//                 dispatch(addMessage(newMessageUser));

//                 const answer = await getGeminiResponse(input);
//                 const newMessageGemini = await createNewMessageinDB(answer, chatId, true);
//                 dispatch(addMessage(newMessageGemini));
//             } else {
//                 const newChatObj = await createNewChatinDB(input);
//                 dispatch(createNewChat(newChatObj));

//                 const newMessageUser = await createNewMessageinDB(input, newChatObj._id, false);
//                 dispatch(addMessage(newMessageUser));

//                 const answer = await getGeminiResponse(input);
//                 const newMessageGemini = await createNewMessageinDB(answer, newChatObj._id, true);
//                 dispatch(addMessage(newMessageGemini));

//                 navigate(`/${newChatObj._id}`);
//             }
//         } catch (error) {
//             console.error("Error while sending message: ", error);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return (
//         <div className='flex flex-col w-full h-[91dvh] md:h-[90%] bg-gray-900'>
//             {/* Messages Container */}
//             <div 
//                 ref={messagesContainerRef}
//                 className='h-[calc(100dvh-12rem)] md:h-4/5 max-h-[calc(100dvh-12rem)] md:max-h-4/5 w-full md:w-4/5 mx-auto overflow-y-auto mb-4 mt-3 md:mt-5 rounded-xl md:rounded-2xl py-3 md:py-5 bg-white flex flex-col'
//             >
//                 {
//                     messages.length > 0 ? messages.map(msg => (
//                         <div
//                             key={msg._id}
//                             className={`w-full flex ${msg.geminiResponse ? 'justify-start' : 'justify-end'} px-2 md:px-0`}
//                         >   
//                             <div
//                                 className={`p-3 md:p-4 m-1 md:m-2 border-1 text-base md:text-xl max-w-[90%] md:max-w-[95%] rounded-xl md:rounded-2xl break-words ${
//                                     msg.geminiResponse
//                                         ? 'bg-sky-200 text-black'
//                                         : 'bg-blue-100 text-black'
//                                 }`}
//                                 dangerouslySetInnerHTML={{ __html: marked.parse(msg.text) }}
//                             />
//                         </div>
//                     )) : (
//                         <div className="flex-1 flex items-center justify-center">
//                             <h2 className="text-center text-xl md:text-3xl font-semibold multicolor-text px-4">
//                                 Hello, {user.name || 'user'}
//                             </h2>
//                         </div>
//                     )
//                 }

//                 {isLoading && (
//                     <div className="flex justify-center items-center mt-2 md:mt-4 px-2 md:px-0">
//                         <div className="w-5 h-5 md:w-6 md:h-6 border-3 md:border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
//                         <span className="ml-2 md:ml-3 text-sm md:text-lg text-blue-600">Gemini is thinking...</span>
//                     </div>
//                 )}

//                 {/* Auto-scroll anchor */}
//                 <div ref={messagesEndRef} />
//             </div>

//             {/* Input Form */}
//             <form 
//                 className='flex items-center  gap-2 md:gap-4 w-full md:w-3/4 px-4 md:px-0 mx-auto mb-4 md:mb-0' 
//                 onSubmit={handleSubmit}
//             >
//                 <input
//                     type="text"
//                     name="userInput"
//                     id={newId}
//                     className='text-base md:text-xl border-2 w-full mt-1 p-3 md:p-3 rounded-3xl md:rounded-4xl bg-gray-100 focus:outline-none focus:border-blue-500'
//                     placeholder='Ask Gemini'
//                     onChange={(e) => setFormData({ userInput: e.target.value })}
//                     value={formData.userInput}
//                     disabled={isLoading}
//                 />

//                 <button 
//                     type='submit' 
//                     className='text-2xl md:text-3xl  cursor-pointer text-white flex-shrink-0 disabled:opacity-50'
//                     disabled={isLoading || formData.userInput.trim() === ""}
//                 >
//                     <IoSend />
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default DisplayMessages;



// import { useState, useEffect, useRef } from 'react';
// import { useId } from 'react';
// import { IoSend } from "react-icons/io5";
// import { FaRobot, FaUser } from "react-icons/fa";
// import { useSelector, useDispatch } from 'react-redux';
// import { addMessage, setMessages } from '../features/messagesSlice';
// import { marked } from 'marked';
// import {
//     createNewChatinDB,
//     createNewMessageinDB,
//     getChatsofUser,
//     getGeminiResponse,
//     getMessagesofChat
// } from '../services/servics';
// import { createNewChat, setChats } from '../features/chatSlice';
// import { useNavigate, useParams } from 'react-router-dom';

// const DisplayMessages = () => {
//     const newId = useId();
//     const [formData, setFormData] = useState({ userInput: '' });

//     const token = useSelector(state => state.auth.token);
//     const user = useSelector(state => state.auth.user);
//     const messages = useSelector(state => state.messages.value);
//     const dispatch = useDispatch();
//     const { chatId } = useParams();
//     const navigate = useNavigate();

//     const [isLoading, setIsLoading] = useState(false);
//     const messagesEndRef = useRef(null);
//     const messagesContainerRef = useRef(null);

//     useEffect(() => {
//         (async function () {
//             const userChats = await getChatsofUser();
//             dispatch(setChats(userChats));
//             const userMessages = await getMessagesofChat(chatId);
//             dispatch(setMessages(userMessages));
//         })();
//     }, [chatId]);

//     useEffect(() => {
//         if (messagesEndRef.current) {
//             messagesEndRef.current.scrollIntoView({ 
//                 behavior: "smooth",
//                 block: "end"
//             });
//         }
//     }, [messages, isLoading]);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (formData.userInput.trim() === "") return;

//         const input = formData.userInput;
//         setFormData({ userInput: "" });
//         setIsLoading(true);

//         try {
//             if (chatId) {
//                 const newMessageUser = await createNewMessageinDB(input, chatId, false);
//                 dispatch(addMessage(newMessageUser));

//                 const answer = await getGeminiResponse(input);
//                 const newMessageGemini = await createNewMessageinDB(answer, chatId, true);
//                 dispatch(addMessage(newMessageGemini));
//             } else {
//                 const newChatObj = await createNewChatinDB(input);
//                 dispatch(createNewChat(newChatObj));

//                 const newMessageUser = await createNewMessageinDB(input, newChatObj._id, false);
//                 dispatch(addMessage(newMessageUser));

//                 const answer = await getGeminiResponse(input);
//                 const newMessageGemini = await createNewMessageinDB(answer, newChatObj._id, true);
//                 dispatch(addMessage(newMessageGemini));

//                 navigate(`/${newChatObj._id}`);
//             }
//         } catch (error) {
//             console.error("Error while sending message: ", error);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return (
//         <div className='flex flex-col w-full h-[91dvh] md:h-[90%] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden'>
//             {/* Animated background elements */}
//             <div className="absolute inset-0 overflow-hidden">
//                 <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
//                 <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
//             </div>

//             {/* Messages Container */}
//             <div 
//                 ref={messagesContainerRef}
//                 className='relative h-[calc(100dvh-12rem)] md:h-4/5 max-h-[calc(100dvh-12rem)] md:max-h-4/5 w-full md:w-4/5 mx-auto overflow-y-auto mb-4 mt-3 md:mt-5 rounded-xl md:rounded-2xl py-3 md:py-5 bg-gradient-to-b from-white to-gray-50 flex flex-col backdrop-blur-sm border border-gray-200/30 shadow-2xl'
//             >
//                 {
//                     messages.length > 0 ? messages.map((msg, index) => (
//                         <div
//                             key={msg._id}
//                             className={`w-full flex ${msg.geminiResponse ? 'justify-start' : 'justify-end'} px-2 md:px-0 animate-fadeIn`}
//                             style={{ animationDelay: `${index * 50}ms` }}
//                         >   
//                             <div className={`flex ${msg.geminiResponse ? 'flex-row' : 'flex-row-reverse'} items-start gap-2 md:gap-3 max-w-[90%] md:max-w-[95%]`}>
//                                 <div className={`flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full shadow-lg ${msg.geminiResponse ? 'bg-gradient-to-br from-blue-500 to-cyan-400' : 'bg-gradient-to-br from-purple-500 to-pink-400'} flex-shrink-0 mt-1`}>
//                                     {msg.geminiResponse ? 
//                                         <FaRobot className="text-white text-sm md:text-base" /> : 
//                                         <FaUser className="text-white text-sm md:text-base" />
//                                     }
//                                 </div>
                                
//                                 <div
//                                     className={`p-3 md:p-4 m-1 md:m-2 border-1 text-base md:text-xl rounded-xl md:rounded-2xl break-words shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${
//                                         msg.geminiResponse
//                                             ? 'bg-gradient-to-br from-blue-50 to-cyan-50 text-gray-800 border-l-4 border-blue-400'
//                                             : 'bg-gradient-to-br from-purple-50 to-pink-50 text-gray-800 border-r-4 border-purple-400'
//                                     }`}
//                                     dangerouslySetInnerHTML={{ __html: marked.parse(msg.text) }}
//                                 />
//                             </div>
//                         </div>
//                     )) : (
//                         <div className="flex-1 flex flex-col items-center justify-center animate-fadeIn">
//                             <div className="relative mb-6">
//                                 <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center shadow-2xl animate-bounce-subtle">
//                                     <FaRobot className="text-white text-4xl md:text-5xl" />
//                                 </div>
//                                 <div className="absolute -top-2 -right-2 w-10 h-10 bg-purple-500 rounded-full animate-ping opacity-20"></div>
//                             </div>
//                             <h2 className="text-center text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent px-4 mb-2">
//                                 Hello, {user.name || 'User'}!
//                             </h2>
//                             <p className="text-gray-600 text-center text-lg md:text-xl max-w-md px-4">
//                                 I'm Gemini AI. How can I assist you today?
//                             </p>
//                             <div className="mt-6 flex space-x-2">
//                                 {[0, 1, 2].map((i) => (
//                                     <div 
//                                         key={i}
//                                         className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
//                                         style={{ animationDelay: `${i * 200}ms` }}
//                                     />
//                                 ))}
//                             </div>
//                         </div>
//                     )
//                 }

//                 {isLoading && (
//                     <div className="flex justify-start items-center mt-2 md:mt-4 px-2 md:px-0 animate-fadeIn">
//                         <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg flex-shrink-0">
//                             <FaRobot className="text-white text-sm md:text-base" />
//                         </div>
//                         <div className="p-3 md:p-4 m-1 md:m-2 rounded-xl md:rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-400 shadow-md">
//                             <div className="flex items-center space-x-2">
//                                 <div className="flex space-x-1">
//                                     {[0, 1, 2].map((i) => (
//                                         <div 
//                                             key={i}
//                                             className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"
//                                             style={{ animationDelay: `${i * 200}ms` }}
//                                         />
//                                     ))}
//                                 </div>
//                                 <span className="ml-2 text-sm md:text-lg bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent font-medium">
//                                     Thinking...
//                                 </span>
//                             </div>
//                         </div>
//                     </div>
//                 )}

//                 {/* Auto-scroll anchor */}
//                 <div ref={messagesEndRef} />
//             </div>

//             {/* Input Form */}
//             <form 
//                 className='relative flex items-center gap-2 md:gap-4 w-full md:w-3/4 px-4 md:px-0 mx-auto mb-4 md:mb-6 animate-fadeInUp' 
//                 onSubmit={handleSubmit}
//             >
//                 <div className="relative w-full">
//                     <input
//                         type="text"
//                         name="userInput"
//                         id={newId}
//                         className='text-base md:text-xl border-2 w-full mt-1 p-4 md:p-5 pl-6 pr-14 rounded-3xl md:rounded-4xl bg-white/90 backdrop-blur-sm focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200/50 shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-white'
//                         placeholder='Ask Gemini anything...'
//                         onChange={(e) => setFormData({ userInput: e.target.value })}
//                         value={formData.userInput}
//                         disabled={isLoading}
//                     />
//                     <div className="absolute right-4 top-1/2 -translate-y-1/2">
//                         <button 
//                             type='submit' 
//                             className={`p-2 md:p-3 rounded-full cursor-pointer transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-lg ${
//                                 formData.userInput.trim() === "" || isLoading 
//                                     ? 'bg-gray-300 cursor-not-allowed' 
//                                     : 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600'
//                             }`}
//                             disabled={isLoading || formData.userInput.trim() === ""}
//                         >
//                             <IoSend className="text-white text-xl md:text-2xl" />
//                         </button>
//                     </div>
//                 </div>
//             </form>

//             {/* Floating particles */}
//             <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30 animate-pulse"></div>
//         </div>
//     );
// };

// export default DisplayMessages;

// import { useState, useEffect, useRef } from 'react';
// import { useId } from 'react';
// import { IoSend } from "react-icons/io5";
// import { FaRobot, FaUser } from "react-icons/fa";
// import { useSelector, useDispatch } from 'react-redux';
// import { addMessage, setMessages } from '../features/messagesSlice';
// import { marked } from 'marked';
// import {
//     createNewChatinDB,
//     createNewMessageinDB,
//     getChatsofUser,
//     getGeminiResponse,
//     getMessagesofChat
// } from '../services/servics';
// import { createNewChat, setChats } from '../features/chatSlice';
// import { useNavigate, useParams } from 'react-router-dom';

// const DisplayMessages = () => {
//     const newId = useId();
//     const [formData, setFormData] = useState({ userInput: '' });

//     const token = useSelector(state => state.auth.token);
//     const user = useSelector(state => state.auth.user);
//     const messages = useSelector(state => state.messages.value);
//     const dispatch = useDispatch();
//     const { chatId } = useParams();
//     const navigate = useNavigate();

//     const [isLoading, setIsLoading] = useState(false);
//     const messagesEndRef = useRef(null);
//     const messagesContainerRef = useRef(null);

//     useEffect(() => {
//         (async function () {
//             const userChats = await getChatsofUser();
//             dispatch(setChats(userChats));
//             const userMessages = await getMessagesofChat(chatId);
//             dispatch(setMessages(userMessages));
//         })();
//     }, [chatId]);

//     useEffect(() => {
//         if (messagesEndRef.current) {
//             messagesEndRef.current.scrollIntoView({ 
//                 behavior: "smooth",
//                 block: "end"
//             });
//         }
//     }, [messages, isLoading]);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (formData.userInput.trim() === "") return;

//         const input = formData.userInput;
//         setFormData({ userInput: "" });
//         setIsLoading(true);

//         try {
//             if (chatId) {
//                 const newMessageUser = await createNewMessageinDB(input, chatId, false);
//                 dispatch(addMessage(newMessageUser));

//                 const answer = await getGeminiResponse(input);
//                 const newMessageGemini = await createNewMessageinDB(answer, chatId, true);
//                 dispatch(addMessage(newMessageGemini));
//             } else {
//                 const newChatObj = await createNewChatinDB(input);
//                 dispatch(createNewChat(newChatObj));

//                 const newMessageUser = await createNewMessageinDB(input, newChatObj._id, false);
//                 dispatch(addMessage(newMessageUser));

//                 const answer = await getGeminiResponse(input);
//                 const newMessageGemini = await createNewMessageinDB(answer, newChatObj._id, true);
//                 dispatch(addMessage(newMessageGemini));

//                 navigate(`/${newChatObj._id}`);
//             }
//         } catch (error) {
//             console.error("Error while sending message: ", error);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     // Test function to check layout
//     const testLayout = () => {
//         const testMessages = [
//             { _id: 'test1', text: '👨‍💻 <strong>Gemini AI:</strong> I should appear on the LEFT side with BLUE theme', geminiResponse: true },
//             { _id: 'test2', text: '👤 <strong>User:</strong> I should appear on the RIGHT side with PURPLE theme', geminiResponse: false },
//             { _id: 'test3', text: '👨‍💻 <strong>Gemini AI:</strong> Another response from me on the LEFT', geminiResponse: true },
//             { _id: 'test4', text: '👤 <strong>User:</strong> Another question from me on the RIGHT', geminiResponse: false }
//         ];
//         console.log('Setting test messages:', testMessages);
//         dispatch(setMessages(testMessages));
//     };

//     return (
//         <div className='flex flex-col w-full h-[91dvh] md:h-[90%] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden'>
//             {/* Test button for debugging */}
//             <button 
//                 onClick={testLayout}
//                 className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white p-2 px-4 rounded-lg z-50 shadow-lg transition-all transform hover:scale-105 active:scale-95 font-medium"
//             >
//                 Test Message Layout
//             </button>
            
//             {/* Animated background elements */}
//             <div className="absolute inset-0 overflow-hidden">
//                 <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
//                 <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
//             </div>

//             {/* Messages Container */}
//             <div 
//                 ref={messagesContainerRef}
//                 className='relative h-[calc(100dvh-12rem)] md:h-4/5 max-h-[calc(100dvh-12rem)] md:max-h-4/5 w-full md:w-4/5 mx-auto overflow-y-auto mb-4 mt-3 md:mt-5 rounded-xl md:rounded-2xl py-3 md:py-5 bg-gradient-to-b from-white to-gray-50 flex flex-col backdrop-blur-sm border border-gray-200/30 shadow-2xl'
//             >
//                 {
//                     messages.length > 0 ? messages.map((msg, index) => {
//                         // Check if this is REALLY a Gemini message
//                         // Make sure to use strict comparison and check the exact property name
//                         const isGemini = msg.geminiResponse === true;
                        
//                         console.log('Message debug:', {
//                             id: msg._id,
//                             text: msg.text?.substring(0, 30),
//                             geminiResponse: msg.geminiResponse,
//                             isGemini: isGemini,
//                             allProps: Object.keys(msg)
//                         });
                        
//                         return (
//                             <div
//                                 key={msg._id || index}
//                                 className={`w-full flex ${isGemini ? 'justify-start' : 'justify-end'} px-2 md:px-0 mb-3 animate-fadeIn`}
//                                 style={{ animationDelay: `${index * 50}ms` }}
//                             >   
//                                 {/* Gemini Message - Left Side with Blue Theme */}
//                                 {isGemini ? (
//                                     <div className="flex flex-row items-start gap-2 md:gap-3 max-w-[90%] md:max-w-[95%]">
//                                         <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full shadow-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex-shrink-0 mt-1">
//                                             <FaRobot className="text-white text-sm md:text-base" />
//                                         </div>
                                        
//                                         <div
//                                             className="p-3 md:p-4 m-1 md:m-2 border-1 text-base md:text-xl rounded-xl md:rounded-2xl break-words shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg bg-gradient-to-br from-blue-50 to-cyan-50 text-gray-800 border-l-4 border-blue-400"
//                                             dangerouslySetInnerHTML={{ __html: marked.parse(msg.text || '') }}
//                                         />
//                                     </div>
//                                 ) : (
//                                     /* User Message - Right Side with Purple Theme */
//                                     <div className="flex flex-row-reverse items-start gap-2 md:gap-3 max-w-[90%] md:max-w-[95%]">
//                                         <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full shadow-lg bg-gradient-to-br from-purple-500 to-pink-400 flex-shrink-0 mt-1">
//                                             <FaUser className="text-white text-sm md:text-base" />
//                                         </div>
                                        
//                                         <div
//                                             className="p-3 md:p-4 m-1 md:m-2 border-1 text-base md:text-xl rounded-xl md:rounded-2xl break-words shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg bg-gradient-to-br from-purple-50 to-pink-50 text-gray-800 border-r-4 border-purple-400"
//                                             dangerouslySetInnerHTML={{ __html: marked.parse(msg.text || '') }}
//                                         />
//                                     </div>
//                                 )}
//                             </div>
//                         );
//                     }) : (
//                         <div className="flex-1 flex flex-col items-center justify-center animate-fadeIn">
//                             <div className="relative mb-6">
//                                 <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center shadow-2xl animate-bounce-subtle">
//                                     <FaRobot className="text-white text-4xl md:text-5xl" />
//                                 </div>
//                                 <div className="absolute -top-2 -right-2 w-10 h-10 bg-purple-500 rounded-full animate-ping opacity-20"></div>
//                             </div>
//                             <h2 className="text-center text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent px-4 mb-2">
//                                 Hello, {user?.name || 'User'}!
//                             </h2>
//                             <p className="text-gray-600 text-center text-lg md:text-xl max-w-md px-4">
//                                 I'm Gemini AI. How can I assist you today?
//                             </p>
//                             <div className="mt-6 flex space-x-2">
//                                 {[0, 1, 2].map((i) => (
//                                     <div 
//                                         key={i}
//                                         className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
//                                         style={{ animationDelay: `${i * 200}ms` }}
//                                     />
//                                 ))}
//                             </div>
//                         </div>
//                     )
//                 }

//                 {/* Loading indicator - Shows as Gemini message on LEFT side */}
//                 {isLoading && (
//                     <div className="flex justify-start items-center mt-2 md:mt-4 px-2 md:px-0 mb-3 animate-fadeIn">
//                         <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg flex-shrink-0">
//                             <FaRobot className="text-white text-sm md:text-base" />
//                         </div>
//                         <div className="p-3 md:p-4 m-1 md:m-2 rounded-xl md:rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-400 shadow-md">
//                             <div className="flex items-center space-x-2">
//                                 <div className="flex space-x-1">
//                                     {[0, 1, 2].map((i) => (
//                                         <div 
//                                             key={i}
//                                             className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"
//                                             style={{ animationDelay: `${i * 200}ms` }}
//                                         />
//                                     ))}
//                                 </div>
//                                 <span className="ml-2 text-sm md:text-lg bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent font-medium">
//                                     Thinking...
//                                 </span>
//                             </div>
//                         </div>
//                     </div>
//                 )}

//                 {/* Auto-scroll anchor */}
//                 <div ref={messagesEndRef} />
//             </div>

//             {/* Input Form */}
//             <form 
//                 className='relative flex items-center gap-2 md:gap-4 w-full md:w-3/4 px-4 md:px-0 mx-auto mb-4 md:mb-6 animate-fadeInUp' 
//                 onSubmit={handleSubmit}
//             >
//                 <div className="relative w-full">
//                     <input
//                         type="text"
//                         name="userInput"
//                         id={newId}
//                         className='text-base md:text-xl border-2 w-full mt-1 p-4 md:p-5 pl-6 pr-14 rounded-3xl md:rounded-4xl bg-white/90 backdrop-blur-sm focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200/50 shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-white'
//                         placeholder='Ask Gemini anything...'
//                         onChange={(e) => setFormData({ userInput: e.target.value })}
//                         value={formData.userInput}
//                         disabled={isLoading}
//                     />
//                     <div className="absolute right-4 top-1/2 -translate-y-1/2">
//                         <button 
//                             type='submit' 
//                             className={`p-2 md:p-3 rounded-full cursor-pointer transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-lg ${
//                                 formData.userInput.trim() === "" || isLoading 
//                                     ? 'bg-gray-300 cursor-not-allowed' 
//                                     : 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600'
//                             }`}
//                             disabled={isLoading || formData.userInput.trim() === ""}
//                         >
//                             <IoSend className="text-white text-xl md:text-2xl" />
//                         </button>
//                     </div>
//                 </div>
//             </form>

//             {/* Floating particles */}
//             <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30 animate-pulse"></div>
//         </div>
//     );
// };

// export default DisplayMessages;




// import { useState, useEffect, useRef } from 'react';
// import { useId } from 'react';
// import { IoSend } from "react-icons/io5";
// import { FaRobot, FaUser } from "react-icons/fa";
// import { useSelector, useDispatch } from 'react-redux';
// import { addMessage, setMessages } from '../features/messagesSlice';
// import { marked } from 'marked';
// import {
//     createNewChatinDB,
//     createNewMessageinDB,
//     getChatsofUser,
//     getGeminiResponse,
//     getMessagesofChat
// } from '../services/servics';
// import { createNewChat, setChats } from '../features/chatSlice';
// import { useNavigate, useParams } from 'react-router-dom';

// const DisplayMessages = () => {
//     const newId = useId();
//     const [formData, setFormData] = useState({ userInput: '' });

//     const token = useSelector(state => state.auth.token);
//     const user = useSelector(state => state.auth.user);
//     const messages = useSelector(state => state.messages.value);
//     const dispatch = useDispatch();
//     const { chatId } = useParams();
//     const navigate = useNavigate();

//     const [isLoading, setIsLoading] = useState(false);
//     const messagesEndRef = useRef(null);
//     const messagesContainerRef = useRef(null);

//     useEffect(() => {
//         (async function () {
//             const userChats = await getChatsofUser();
//             dispatch(setChats(userChats));
//             const userMessages = await getMessagesofChat(chatId);
//             console.log('Messages from backend:', userMessages); // Debug log
//             dispatch(setMessages(userMessages));
//         })();
//     }, [chatId]);

//     useEffect(() => {
//         if (messagesEndRef.current) {
//             messagesEndRef.current.scrollIntoView({ 
//                 behavior: "smooth",
//                 block: "end"
//             });
//         }
//     }, [messages, isLoading]);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (formData.userInput.trim() === "") return;

//         const input = formData.userInput;
//         setFormData({ userInput: "" });
//         setIsLoading(true);

//         try {
//             if (chatId) {
//                 const newMessageUser = await createNewMessageinDB(input, chatId, false);
//                 console.log('USER Message object:', newMessageUser); // Debug
//                 dispatch(addMessage(newMessageUser));

//                 const answer = await getGeminiResponse(input);
//                 const newMessageGemini = await createNewMessageinDB(answer, chatId, true);
//                 console.log('GEMINI Message object:', newMessageGemini); // Debug
//                 dispatch(addMessage(newMessageGemini));
//             } else {
//                 const newChatObj = await createNewChatinDB(input);
//                 dispatch(createNewChat(newChatObj));

//                 const newMessageUser = await createNewMessageinDB(input, newChatObj._id, false);
//                 console.log('USER Message object:', newMessageUser); // Debug
//                 dispatch(addMessage(newMessageUser));

//                 const answer = await getGeminiResponse(input);
//                 const newMessageGemini = await createNewMessageinDB(answer, newChatObj._id, true);
//                 console.log('GEMINI Message object:', newMessageGemini); // Debug
//                 dispatch(addMessage(newMessageGemini));

//                 navigate(`/${newChatObj._id}`);
//             }
//         } catch (error) {
//             console.error("Error while sending message: ", error);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return (
//         <div className='flex flex-col w-full h-[91dvh] md:h-[90%] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden'>
            
            
//             {/* Animated background elements */}
//             <div className="absolute inset-0 overflow-hidden">
//                 <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
//                 <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
//             </div>

//             {/* Messages Container */}
//             <div 
//                 ref={messagesContainerRef}
//                 className='relative h-[calc(100dvh-12rem)] md:h-4/5 max-h-[calc(100dvh-12rem)] md:max-h-4/5 w-full md:w-4/5 mx-auto overflow-y-auto mb-4 mt-3 md:mt-5 rounded-xl md:rounded-2xl py-3 md:py-5 bg-gradient-to-b from-white to-gray-50 flex flex-col backdrop-blur-sm border border-gray-200/30 shadow-2xl'
//             >
//                 {
//                     messages.length > 0 ? messages.map((msg, index) => {
//                         // FIXED: Check for isGeminiResponse (not geminiResponse)
//                         const isGemini = msg.isGeminiResponse === true;
                        
//                         // Debug log
//                         console.log(`Message ${index}:`, {
//                             text: msg.text?.substring(0, 30),
//                             isGeminiResponse: msg.isGeminiResponse,
//                             geminiResponse: msg.geminiResponse, // This might be undefined
//                             isGemini: isGemini
//                         });
                        
//                         return (
//                             <div
//                                 key={msg._id || index}
//                                 className={`w-full flex ${isGemini ? 'justify-start' : 'justify-end'} px-2 md:px-0 mb-4`}
//                             >   
//                                 {isGemini ? (
//                                     // GEMINI MESSAGE - LEFT SIDE with BLUE THEME
//                                     <div className="flex items-start gap-2 md:gap-3 max-w-[90%] md:max-w-[95%]">
//                                         {/* Gemini Avatar */}
//                                         <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full shadow-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex-shrink-0">
//                                             <FaRobot className="text-white text-sm md:text-base" />
//                                         </div>
                                        
//                                         {/* Gemini Message Bubble */}
//                                         <div className="p-3 md:p-4 rounded-xl md:rounded-2xl break-words shadow-md bg-gradient-to-br from-blue-50 to-cyan-50 text-gray-800 border-l-4 border-blue-400">
//                                             <div dangerouslySetInnerHTML={{ __html: marked.parse(msg.text || '') }} />
//                                         </div>
//                                     </div>
//                                 ) : (
//                                     // USER MESSAGE - RIGHT SIDE with PURPLE THEME
//                                     <div className="flex items-start gap-2 md:gap-3 max-w-[90%] md:max-w-[95%]">
//                                         {/* User Message Bubble */}
//                                         <div className="p-3 md:p-4 rounded-xl md:rounded-2xl break-words shadow-md bg-gradient-to-br from-purple-50 to-pink-50 text-gray-800 border-r-4 border-purple-400">
//                                             <div dangerouslySetInnerHTML={{ __html: marked.parse(msg.text || '') }} />
//                                         </div>
                                        
//                                         {/* User Avatar */}
//                                         <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full shadow-lg bg-gradient-to-br from-purple-500 to-pink-400 flex-shrink-0">
//                                             <FaUser className="text-white text-sm md:text-base" />
//                                         </div>
//                                     </div>
//                                 )}
//                             </div>
//                         );
//                     }) : (
//                         <div className="flex-1 flex flex-col items-center justify-center">
//                             <div className="relative mb-6">
//                                 <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center shadow-2xl animate-bounce-subtle">
//                                     <FaRobot className="text-white text-4xl md:text-5xl" />
//                                 </div>
//                                 <div className="absolute -top-2 -right-2 w-10 h-10 bg-purple-500 rounded-full animate-ping opacity-20"></div>
//                             </div>
//                             <h2 className="text-center text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent px-4 mb-2">
//                                 Hello, {user?.name || 'User'}!
//                             </h2>
//                             <p className="text-gray-600 text-center text-lg md:text-xl max-w-md px-4">
//                                 I'm Gemini AI. How can I assist you today?
//                             </p>
//                             <div className="mt-6 flex space-x-2">
//                                 {[0, 1, 2].map((i) => (
//                                     <div 
//                                         key={i}
//                                         className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
//                                         style={{ animationDelay: `${i * 200}ms` }}
//                                     />
//                                 ))}
//                             </div>
//                         </div>
//                     )
//                 }

//                 {/* Loading indicator */}
//                 {isLoading && (
//                     <div className="flex justify-start items-center mb-4 px-2 md:px-0">
//                         <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg flex-shrink-0">
//                             <FaRobot className="text-white text-sm md:text-base" />
//                         </div>
//                         <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-400 shadow-md">
//                             <div className="flex items-center space-x-2">
//                                 <div className="flex space-x-1">
//                                     {[0, 1, 2].map((i) => (
//                                         <div 
//                                             key={i}
//                                             className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"
//                                             style={{ animationDelay: `${i * 200}ms` }}
//                                         />
//                                     ))}
//                                 </div>
//                                 <span className="ml-2 text-sm md:text-lg bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent font-medium">
//                                     Thinking...
//                                 </span>
//                             </div>
//                         </div>
//                     </div>
//                 )}

//                 <div ref={messagesEndRef} />
//             </div>

//             {/* Input Form */}
//             <form 
//                 className='relative flex items-center gap-2 md:gap-4 w-full md:w-3/4 px-4 md:px-0 mx-auto mb-4 md:mb-6' 
//                 onSubmit={handleSubmit}
//             >
//                 <div className="relative w-full">
//                     <input
//                         type="text"
//                         name="userInput"
//                         id={newId}
//                         className='text-base md:text-xl border-2 w-full mt-1 p-4 md:p-5 pl-6 pr-14 rounded-3xl md:rounded-4xl bg-white/90 backdrop-blur-sm focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200/50 shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-white'
//                         placeholder='Ask Gemini anything...'
//                         onChange={(e) => setFormData({ userInput: e.target.value })}
//                         value={formData.userInput}
//                         disabled={isLoading}
//                     />
//                     <div className="absolute right-4 top-1/2 -translate-y-1/2">
//                         <button 
//                             type='submit' 
//                             className={`p-2 md:p-3 rounded-full cursor-pointer transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-lg ${
//                                 formData.userInput.trim() === "" || isLoading 
//                                     ? 'bg-gray-300 cursor-not-allowed' 
//                                     : 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600'
//                             }`}
//                             disabled={isLoading || formData.userInput.trim() === ""}
//                         >
//                             <IoSend className="text-white text-xl md:text-2xl" />
//                         </button>
//                     </div>
//                 </div>
//             </form>

//             <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30 animate-pulse"></div>
//         </div>
//     );
// };

// export default DisplayMessages;

import { useState, useEffect, useRef } from 'react';
import { useId } from 'react';
import { IoSend } from "react-icons/io5";
import { FaRobot, FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { addMessage, setMessages } from '../features/messagesSlice';
import { marked } from 'marked';
import {
    createNewChatinDB,
    createNewMessageinDB,
    getChatsofUser,
    getGeminiResponse,
    getMessagesofChat
} from '../services/servics';
import { createNewChat, setChats } from '../features/chatSlice';
import { useNavigate, useParams } from 'react-router-dom';

const DisplayMessages = () => {
    const newId = useId();
    const [formData, setFormData] = useState({ userInput: '' });

    const token = useSelector(state => state.auth.token);
    const user = useSelector(state => state.auth.user);
    const messages = useSelector(state => state.messages.value);
    const dispatch = useDispatch();
    const { chatId } = useParams();
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);
    const messagesContainerRef = useRef(null);

    useEffect(() => {
        (async function () {
            const userChats = await getChatsofUser();
            dispatch(setChats(userChats));
            const userMessages = await getMessagesofChat(chatId);
            dispatch(setMessages(userMessages));
        })();
    }, [chatId]);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ 
                behavior: "smooth",
                block: "end"
            });
        }
    }, [messages, isLoading]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.userInput.trim() === "") return;

        const input = formData.userInput;
        setFormData({ userInput: "" });
        setIsLoading(true);

        try {
            if (chatId) {
                const newMessageUser = await createNewMessageinDB(input, chatId, false);
                dispatch(addMessage(newMessageUser));

                const answer = await getGeminiResponse(input);
                const newMessageGemini = await createNewMessageinDB(answer, chatId, true);
                dispatch(addMessage(newMessageGemini));
            } else {
                const newChatObj = await createNewChatinDB(input);
                dispatch(createNewChat(newChatObj));

                const newMessageUser = await createNewMessageinDB(input, newChatObj._id, false);
                dispatch(addMessage(newMessageUser));

                const answer = await getGeminiResponse(input);
                const newMessageGemini = await createNewMessageinDB(answer, newChatObj._id, true);
                dispatch(addMessage(newMessageGemini));

                navigate(`/${newChatObj._id}`);
            }
        } catch (error) {
            console.error("Error while sending message: ", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='flex flex-col w-full h-[91dvh] md:h-[90%] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden'>
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            {/* Messages Container */}
            <div 
                ref={messagesContainerRef}
                className='relative h-[calc(100dvh-12rem)] md:h-4/5 max-h-[calc(100dvh-12rem)] md:max-h-4/5 w-full md:w-4/5 mx-auto overflow-y-auto mb-4 mt-3 md:mt-5 rounded-xl md:rounded-2xl py-3 md:py-5 bg-gradient-to-b from-white to-gray-50 flex flex-col backdrop-blur-sm border border-gray-200/30 shadow-2xl'
            >
                {
                    messages.length > 0 ? messages.map((msg, index) => {
                        const isGemini = msg.isGeminiResponse === true;
                        
                        return (
                            <div
                                key={msg._id || index}
                                className={`w-full flex ${isGemini ? 'justify-start' : 'justify-end'} px-2 md:px-0 mb-4 animate-fadeIn`}
                                style={{ animationDelay: `${index * 50}ms` }}
                            >   
                                {isGemini ? (
                                    // GEMINI MESSAGE - LEFT SIDE with BLUE THEME
                                    <div className="flex items-start gap-2 md:gap-3 max-w-[90%] md:max-w-[95%]">
                                        {/* Gemini Avatar */}
                                        <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full shadow-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex-shrink-0">
                                            <FaRobot className="text-white text-sm md:text-base" />
                                        </div>
                                        
                                        {/* Gemini Message Bubble */}
                                        <div className="p-3 md:p-4 rounded-xl md:rounded-2xl break-words shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg bg-gradient-to-br from-blue-50 to-cyan-50 text-gray-800 border-l-4 border-blue-400">
                                            <div dangerouslySetInnerHTML={{ __html: marked.parse(msg.text || '') }} />
                                        </div>
                                    </div>
                                ) : (
                                    // USER MESSAGE - RIGHT SIDE with PURPLE THEME
                                    <div className="flex items-start gap-2 md:gap-3 max-w-[90%] md:max-w-[95%]">
                                        {/* User Message Bubble */}
                                        <div className="p-3 md:p-4 rounded-xl md:rounded-2xl break-words shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg bg-gradient-to-br from-purple-50 to-pink-50 text-gray-800 border-r-4 border-purple-400">
                                            <div dangerouslySetInnerHTML={{ __html: marked.parse(msg.text || '') }} />
                                        </div>
                                        
                                        {/* User Avatar */}
                                        <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full shadow-lg bg-gradient-to-br from-purple-500 to-pink-400 flex-shrink-0">
                                            <FaUser className="text-white text-sm md:text-base" />
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    }) : (
                        <div className="flex-1 flex flex-col items-center justify-center animate-fadeIn">
                            <div className="relative mb-6">
                                <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center shadow-2xl animate-bounce-subtle">
                                    <FaRobot className="text-white text-4xl md:text-5xl" />
                                </div>
                                <div className="absolute -top-2 -right-2 w-10 h-10 bg-purple-500 rounded-full animate-ping opacity-20"></div>
                            </div>
                            <h2 className="text-center text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent px-4 mb-2">
                                Hello, {user?.name || 'User'}!
                            </h2>
                            <p className="text-gray-600 text-center text-lg md:text-xl max-w-md px-4">
                                I'm Gemini AI. How can I assist you today?
                            </p>
                            <div className="mt-6 flex space-x-2">
                                {[0, 1, 2].map((i) => (
                                    <div 
                                        key={i}
                                        className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                                        style={{ animationDelay: `${i * 200}ms` }}
                                    />
                                ))}
                            </div>
                        </div>
                    )
                }

                {/* Loading indicator */}
                {isLoading && (
                    <div className="flex justify-start items-center mb-4 px-2 md:px-0 animate-fadeIn">
                        <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg flex-shrink-0">
                            <FaRobot className="text-white text-sm md:text-base" />
                        </div>
                        <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-400 shadow-md">
                            <div className="flex items-center space-x-2">
                                <div className="flex space-x-1">
                                    {[0, 1, 2].map((i) => (
                                        <div 
                                            key={i}
                                            className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"
                                            style={{ animationDelay: `${i * 200}ms` }}
                                        />
                                    ))}
                                </div>
                                <span className="ml-2 text-sm md:text-lg bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent font-medium">
                                    Thinking...
                                </span>
                            </div>
                        </div>
                    </div>
                )}

                <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form 
                className='relative flex items-center gap-2 md:gap-4 w-full md:w-3/4 px-4 md:px-0 mx-auto mb-4 md:mb-6 animate-fadeInUp' 
                onSubmit={handleSubmit}
            >
                <div className="relative w-full">
                    <input
                        type="text"
                        name="userInput"
                        id={newId}
                        className='text-base md:text-xl border-2 w-full mt-1 p-4 md:p-5 pl-6 pr-14 rounded-3xl md:rounded-4xl bg-white/90 backdrop-blur-sm focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200/50 shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-white'
                        placeholder='Ask Gemini anything...'
                        onChange={(e) => setFormData({ userInput: e.target.value })}
                        value={formData.userInput}
                        disabled={isLoading}
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                        <button 
                            type='submit' 
                            className={`p-2 md:p-3 rounded-full cursor-pointer transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-lg ${
                                formData.userInput.trim() === "" || isLoading 
                                    ? 'bg-gray-300 cursor-not-allowed' 
                                    : 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600'
                            }`}
                            disabled={isLoading || formData.userInput.trim() === ""}
                        >
                            <IoSend className="text-white text-xl md:text-2xl" />
                        </button>
                    </div>
                </div>
            </form>

            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30 animate-pulse"></div>
        </div>
    );
};

export default DisplayMessages;