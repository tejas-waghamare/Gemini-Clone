// import axios from "axios";

// export const getGeminiResponse = async (question) => {
//     let token = localStorage.getItem('token');
    
//     if (!token) {
//         return false;
//     }
    
//     let config = {
//         headers: {
//             Authorization: `Bearer ${token}`,
//         },
//     };
    
//     try {
//         const res = await axios.post('https://gemini-clone-backend-z3g9.onrender.com/api/v1/message/get-gemini-response', { question }, config);
        
//         if (res.data.status === 'success') {
//             return res.data.data;
//         } else {
//             console.error('Gemini response failed:', res.data.message);
//             return false;
//         }
//     } catch (err) {
//         console.error('ERROR getting Gemini response:', err.response?.data || err.message);
//         return false;
//     }
// }

// export const createNewChatinDB = async (name) => {
//     let token = localStorage.getItem('token')
//     let user = localStorage.getItem('user')
//     if (!token || !user) return false;
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

import axios from "axios";

export const getGeminiResponse = async (question) => {
    let token = localStorage.getItem('token');
    
    if (!token) {
        return false;
    }
    
    let config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    
    try {
        const res = await axios.post('https://gemini-clone-backend-z3g9.onrender.com/api/v1/message/get-gemini-response', { question }, config);
        
        if (res.data.status === 'success') {
            return res.data.data;
        } else {
            console.error('Gemini response failed:', res.data.message);
            return false;
        }
    } catch (err) {
        console.error('ERROR getting Gemini response:', err.response?.data || err.message);
        return false;
    }
}

export const createNewChatinDB = async (name) => {
    let token = localStorage.getItem('token')
    let user = localStorage.getItem('user')
    
    if (!token || !user) {
        console.error('No token or user found');
        return false;
    }
    
    let config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    let data = {
        name,
        userId: JSON.parse(user)._id
    }

    try {
        const res = await axios.post('https://gemini-clone-backend-z3g9.onrender.com/api/v1/chat/create-chat', data, config);
        
        if (res.data.status === 'success') {
            return res.data.data;
        } else {
            console.error('Create chat failed:', res.data.message);
            return false;
        }
    } catch (err) {
        console.error('ERROR creating chat:', err.message);
        return false;
    }
}

export const createNewMessageinDB = async (text, chatId, isGeminiResponse) => {
    let token = localStorage.getItem('token')

    if (!token) {
        console.error('No token found for creating message');
        return false;
    }
    
    let config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    let data = { text, chatId, isGeminiResponse }

    try {
        const res = await axios.post('https://gemini-clone-backend-z3g9.onrender.com/api/v1/message/create-message', data, config);

        if (res.data.status === 'success') {
            return res.data.data;
        } else {
            console.error('Create message failed:', res.data.message);
            return false;
        }
    } catch (err) {
        console.error('ERROR creating message:', err.message);
        return false;
    }
}

export const getChatsofUser = async () => {
    let token = localStorage.getItem('token')
    
    if (!token) {
        console.error('No token found for getting chats');
        return false;
    }
    
    let config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    
    try {
        const res = await axios.get('https://gemini-clone-backend-z3g9.onrender.com/api/v1/chat/get-chats', config);
        
        if (res.data.status === 'success') {
            return res.data.data;
        } else {
            console.error('Get chats failed:', res.data.message);
            return false;
        }
    } catch (err) {
        console.error('ERROR getting chats:', err.message);
        return false;
    }
}

export const getMessagesofChat = async (chatId) => {
    let token = localStorage.getItem('token')
    
    if (!token) {
        console.error('No token found for getting messages');
        return false;
    }
    
    let config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    
    try {
        const res = await axios.get(`https://gemini-clone-backend-z3g9.onrender.com/api/v1/message/get-all-messages/${chatId}`, config);
        
        if (res.data.status === 'success') {
            return res.data.data;
        } else {
            console.error('Get messages failed:', res.data.message);
            return false;
        }
    } catch (err) {
        console.error('ERROR getting messages:', err.message);
        return false;
    }
}

export const deleteChatFromDB = async (chatId) => {
    let token = localStorage.getItem('token');
    
    if (!token) {
        return false;
    }
    
    let config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    
    try {
        const res = await axios.delete(`https://gemini-clone-backend-z3g9.onrender.com/api/v1/chat/delete-chat/${chatId}`, config);
        
        if (res.data.status === 'success') {
            return res.data.data;
        } else {
            console.error('Delete failed:', res.data.message);
            return false;
        }
    } catch (err) {
        console.error('ERROR deleting chat:', err.response?.data || err.message);
        return false;
    }
}