

import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserData } from '../features/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import { getChatsofUser } from '../services/servics';
import { setChats } from '../features/chatSlice';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Show loading animation

        // Post request to validate user
        try {
            const res = await axios.post('https://gemini-clone-backend-z3g9.onrender.com/api/v1/auth/login', formData);
            alert(res.data.message);
            if (res.data.status === 'success') {
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('user', JSON.stringify(res.data.data || {}));
                const userData = {
                    user: res.data.data,
                    token: res.data.token
                };
                dispatch(setUserData(userData));

                const userChats = await getChatsofUser();
                dispatch(setChats(userChats));

                navigate('/new-chat');
            } else {
                navigate('/login');
            }
        } catch (err) {
            alert('Error: Unable to login. Please check your network or try again later.');
            console.error('Login error:', err.message);
            navigate('/login');
        } finally {
            setIsLoading(false); // Hide loading animation
        }
    };

    return (
        <div className="relative flex justify-around mt-5 items-center rounded-2xl overflow-auto flex-wrap shadow-2xl p-7 py-10">
            {/* Loading Overlay */}
            {isLoading && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/60 bg-opacity-20 backdrop-blur-sm z-50">
                    <div className="flex items-center gap-15 justify-center">
                        <div className="w-12 h-12 border-4 border-t-transparent border-cyan-500 rounded-full animate-spin"></div>
                        <span className="ml-4 text-4xl bg-gradient-to-br from-green-400 via-amber-300 to-red-400 bg-clip-text text-transparent animate-pulse">Logging in...</span>
                    </div>
                </div>
            )}

            <div className='w-130'>
                <img src="https://img.freepik.com/free-vector/website-designer-concept-illustration_114360-4449.jpg?semt=ais_items_boosted&w=740" alt="" />
            </div>

            <form onSubmit={handleSubmitForm} className='p-7 py-10'>
                <h1 className="multicolor-text text-4xl p-2 text-center mb-7 font-bold font-serif">Login Form</h1>

                <div className="mb-5">
                    <label className="text-gray-400">Enter Email</label><br />
                    <input
                        type="email"
                        name="email"
                        className="text-xl border-2 rounded-lg p-2"
                        placeholder="abc@gmail.com"
                        onChange={handleChange}
                        value={formData.email}
                    />
                </div>
                <div className="mb-5">
                    <label className="text-gray-400">Enter Password</label><br />
                    <input
                        type="password"
                        name="password"
                        className="text-xl border-2 rounded-lg p-2"
                        placeholder="******"
                        onChange={handleChange}
                        value={formData.password}
                    />
                </div>

                <div className="mb-5 flex justify-center">
                    <button
                        type="submit"
                        className="bg-cyan-500 hover:bg-cyan-600 px-5 text-2xl rounded-lg cursor-pointer"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <div className="flex items-center justify-center">
                                <div className="w-6 h-6 border-4 border-t-transparent border-cyan-100 rounded-full animate-spin"></div>
                                <span className="ml-2">Logging in...</span>
                            </div>
                        ) : (
                            'Login'
                        )}
                    </button>
                </div>

                <p className='text-blue-600 cursor-pointer text-m hover:text-purple-600'>
                    <Link to="/register">Not a User? Sign Up...!</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;