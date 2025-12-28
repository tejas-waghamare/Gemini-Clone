import axios from "axios";
import { GoogleGenAI } from "@google/genai";
import { marked } from "marked";


const GEMINI_API_KEY = "AIzaSyDZQh799pxWjxJxV89-S9w3g_7gR6fql_k";

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

export const getGeminiResponse = async (question) => {
    
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: question,
    });

    const parsedResponse = await marked.parse(response.text)
    return parsedResponse;
}

export const createNewChatinDB = async (name) => {
    let token = localStorage.getItem('token')
    let user = localStorage.getItem('user')
    if (!token || !user) return false;
    let config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    let data = {
        name,
        userId: user._id
    }

    try {
        // const res = await axios.post('http://localhost:3000/api/v1/chat/create-chat', data, config);
        const res = await axios.post('https://gemini-clone-backend-z3g9.onrender.com/api/v1/chat/create-chat', data, config);

        if (res.data.status == 'success') {
            return res.data.data;
        }
        else {
            console.log(res.data.message);
            return false;
        }
    } catch (err) {
        console.log('ERROR: ' + err.message)
        return false;
    }
}


export const createNewMessageinDB = async (text, chatId, isGeminiResponse) => {
    let token = localStorage.getItem('token')

    if (!token) return false;
    let config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    let data = { text, chatId, isGeminiResponse }


    try {
        // const res = await axios.post('http://localhost:3000/api/v1/message/create-message', data, config);
        const res = await axios.post('https://gemini-clone-backend-z3g9.onrender.com/api/v1/message/create-message', data, config);


        if (res.data.status == 'success') {
            return res.data.data;
        }
        else {
            console.log(res.data.message);
            return false;
        }
    } catch (err) {
        console.log('ERROR: ' + err.message)
        return false;
    }
}

export const getChatsofUser = async () => {
    let token = localStorage.getItem('token')
    if (!token) return false;
    let config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    try {
        // const res = await axios.get('http://localhost:3000/api/v1/chat/get-chats', config);
        const res = await axios.get('https://gemini-clone-backend-z3g9.onrender.com/api/v1/chat/get-chats', config);
        if (res.data.status == 'success') {
            return res.data.data
        }
        else {
            return false;

        }
    } catch (err) {
        console.log('ERROR: ' + err.message)
        return false;
    }
}

export const getMessagesofChat = async (chatId) => {
    let token = localStorage.getItem('token')
    if (!token) return false;
    let config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    try {
        // const res = await axios.get(`http://localhost:3000/api/v1/message/get-all-messages/${chatId}`, config);
        const res = await axios.get(`https://gemini-clone-backend-z3g9.onrender.com/api/v1/message/get-all-messages/${chatId}`, config);
        if (res.data.status == 'success') {
            return res.data.data;
        }
        else {
            console.log(res.data.message);
            return false;

        }
    } catch (err) {
        console.log('ERROR: ' + err.message)
        return false;
    }
}

// import axios from "axios";
// import { GoogleGenAI } from "@google/genai";
// import { marked } from "marked";

// // NOTE: It is generally unsafe to hardcode API keys in frontend code.
// // Use environment variables and a secure backend proxy in production.
// const GEMINI_API_KEY = "AIzaSyBo0LJ19qdChVKpkoFframmQCCHkJCuA8I";

// const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

// // Helper function for pausing execution
// const delay = ms => new Promise(res => setTimeout(res, ms));

// /**
//  * Gets a response from the Gemini model with exponential backoff retry logic.
//  * Corrected: Uses the proper contents array structure and handles 429 errors.
//  * * @param {string} question The user's prompt.
//  * @returns {Promise<string>} The marked-up HTML response.
//  */
// export const getGeminiResponse = async (question) => {
//     // Retry logic: try up to 3 times
//     const maxRetries = 3; 

//     for (let i = 0; i < maxRetries; i++) {
//         try {
//             // **CORRECTION 1: Use the recommended contents structure**
//             const response = await ai.models.generateContent({
//                 model: "gemini-2.5-flash", // Using the slightly more modern 2.5
//                 contents: [{ role: "user", parts: [{ text: question }] }],
//             });

//             const parsedResponse = await marked.parse(response.text);
//             return parsedResponse;

//         } catch (error) {
//             // Check for the rate limit error (status 429)
//             if (error.message && error.message.includes('429')) {
//                 console.warn(`Quota limit hit (Attempt ${i + 1}/${maxRetries}). Retrying in ${2 ** i} seconds...`);

//                 // If this was the last attempt, throw the error
//                 if (i === maxRetries - 1) {
//                     throw new Error("Maximum retries reached. Quota limit remains exceeded. Please wait or check your Google Cloud quota settings.");
//                 }

//                 // **Exponential Backoff:** Wait time increases with each failure (1s, 2s, 4s...)
//                 await delay(1000 * (2 ** i)); 
//             } else {
//                 // For any other errors (e.g., network, invalid key, model error), throw immediately
//                 throw error;
//             }
//         }
//     }
// }


// // --- AXIOS DB FUNCTIONS (No changes needed, included for completeness) ---

// export const createNewChatinDB = async (name) => {
//     let token = localStorage.getItem('token')
//     let user = localStorage.getItem('user')
//     if (!token || !user) return false;

//     // NOTE: In a real app, 'user' from localStorage is a string and needs to be parsed:
//     try {
//         user = JSON.parse(user); 
//     } catch (e) {
//         console.error("User data in localStorage is invalid.", e);
//         return false;
//     }
    
//     let config = {
//         headers: {
//             Authorization: `Bearer ${token}`,
//         },
//     }

//     let data = {
//         name,
//         userId: user._id
//     }

//     try {
//         // const res = await axios.post('http://localhost:3000/api/v1/chat/create-chat', data, config);
//         const res = await axios.post('https://gemini-clone-backend-z3g9.onrender.com/api/v1/chat/create-chat', data, config);

//         if (res.data.status == 'success') {
//             return res.data.data;
//         }
//         else {
//             console.log(res.data.message);
//             return false;
//         }
//     } catch (err) {
//         console.log('ERROR: ' + err.message)
//         return false;
//     }
// }


// export const createNewMessageinDB = async (text, chatId, isGeminiResponse) => {
//     let token = localStorage.getItem('token')

//     if (!token) return false;
//     let config = {
//         headers: {
//             Authorization: `Bearer ${token}`,
//         },
//     }

//     let data = { text, chatId, isGeminiResponse }


//     try {
//         // const res = await axios.post('http://localhost:3000/api/v1/message/create-message', data, config);
//         const res = await axios.post('https://gemini-clone-backend-z3g9.onrender.com/api/v1/message/create-message', data, config);


//         if (res.data.status == 'success') {
//             return res.data.data;
//         }
//         else {
//             console.log(res.data.message);
//             return false;
//         }
//     } catch (err) {
//         console.log('ERROR: ' + err.message)
//         return false;
//     }
// }

// export const getChatsofUser = async () => {
//     let token = localStorage.getItem('token')
//     if (!token) return false;
//     let config = {
//         headers: {
//             Authorization: `Bearer ${token}`,
//         },
//     }
//     try {
//         // const res = await axios.get('http://localhost:3000/api/v1/chat/get-chats', config);
//         const res = await axios.get('https://gemini-clone-backend-z3g9.onrender.com/api/v1/chat/get-chats', config);
//         if (res.data.status == 'success') {
//             return res.data.data
//         }
//         else {
//             return false;

//         }
//     } catch (err) {
//         console.log('ERROR: ' + err.message)
//         return false;
//     }
// }

// export const getMessagesofChat = async (chatId) => {
//     let token = localStorage.getItem('token')
//     if (!token) return false;
//     let config = {
//         headers: {
//             Authorization: `Bearer ${token}`,
//         },
//     }
//     try {
//         // const res = await axios.get(`http://localhost:3000/api/v1/message/get-all-messages/${chatId}`, config);
//         const res = await axios.get(`https://gemini-clone-backend-z3g9.onrender.com/api/v1/message/get-all-messages/${chatId}`, config);
//         if (res.data.status == 'success') {
//             return res.data.data;
//         }
//         else {
//             console.log(res.data.message);
//             return false;

//         }
//     } catch (err) {
//         console.log('ERROR: ' + err.message)
//         return false;
//     }
// }