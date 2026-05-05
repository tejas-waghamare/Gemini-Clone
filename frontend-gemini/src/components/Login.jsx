

// import axios from 'axios';
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { setUserData } from '../features/authSlice';
// import { Link, useNavigate } from 'react-router-dom';
// import { getChatsofUser } from '../services/servics';
// import { setChats } from '../features/chatSlice';

// const Login = () => {
//     const [formData, setFormData] = useState({
//         email: '',
//         password: ''
//     });
//     const [isLoading, setIsLoading] = useState(false);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmitForm = async (e) => {
//         e.preventDefault();
//         setIsLoading(true); // Show loading animation

//         // Post request to validate user
//         try {
//             const res = await axios.post('https://gemini-clone-backend-z3g9.onrender.com/api/v1/auth/login', formData);
//             alert(res.data.message);
//             if (res.data.status === 'success') {
//                 localStorage.setItem('token', res.data.token);
//                 localStorage.setItem('user', JSON.stringify(res.data.data || {}));
//                 const userData = {
//                     user: res.data.data,
//                     token: res.data.token
//                 };
//                 dispatch(setUserData(userData));

//                 const userChats = await getChatsofUser();
//                 dispatch(setChats(userChats));

//                 navigate('/new-chat');
//             } else {
//                 navigate('/login');
//             }
//         } catch (err) {
//             alert('Error: Unable to login. Please check your network or try again later.');
//             console.error('Login error:', err.message);
//             navigate('/login');
//         } finally {
//             setIsLoading(false); // Hide loading animation
//         }
//     };

//     return (
//         <div className="relative flex justify-around mt-5 items-center rounded-2xl overflow-auto flex-wrap shadow-2xl p-7 py-10">
//             {/* Loading Overlay */}
//             {isLoading && (
//                 <div className="fixed inset-0 flex items-center justify-center bg-black/60 bg-opacity-20 backdrop-blur-sm z-50">
//                     <div className="flex items-center gap-15 justify-center">
//                         <div className="w-12 h-12 border-4 border-t-transparent border-cyan-500 rounded-full animate-spin"></div>
//                         <span className="ml-4 text-4xl bg-gradient-to-br from-green-400 via-amber-300 to-red-400 bg-clip-text text-transparent animate-pulse">Logging in...</span>
//                     </div>
//                 </div>
//             )}

//             <div className='w-130'>
//                 <img src="https://img.freepik.com/free-vector/website-designer-concept-illustration_114360-4449.jpg?semt=ais_items_boosted&w=740" alt="" />
//             </div>

//             <form onSubmit={handleSubmitForm} className='p-7 py-10'>
//                 <h1 className="multicolor-text text-4xl p-2 text-center mb-7 font-bold font-serif">Login Form</h1>

//                 <div className="mb-5">
//                     <label className="text-gray-400">Enter Email</label><br />
//                     <input
//                         type="email"
//                         name="email"
//                         className="text-xl border-2 rounded-lg p-2"
//                         placeholder="abc@gmail.com"
//                         onChange={handleChange}
//                         value={formData.email}
//                     />
//                 </div>
//                 <div className="mb-5">
//                     <label className="text-gray-400">Enter Password</label><br />
//                     <input
//                         type="password"
//                         name="password"
//                         className="text-xl border-2 rounded-lg p-2"
//                         placeholder="******"
//                         onChange={handleChange}
//                         value={formData.password}
//                     />
//                 </div>

//                 <div className="mb-5 flex justify-center">
//                     <button
//                         type="submit"
//                         className="bg-cyan-500 hover:bg-cyan-600 px-5 text-2xl rounded-lg cursor-pointer"
//                         disabled={isLoading}
//                     >
//                         {isLoading ? (
//                             <div className="flex items-center justify-center">
//                                 <div className="w-6 h-6 border-4 border-t-transparent border-cyan-100 rounded-full animate-spin"></div>
//                                 <span className="ml-2">Logging in...</span>
//                             </div>
//                         ) : (
//                             'Login'
//                         )}
//                     </button>
//                 </div>

//                 <p className='text-blue-600 cursor-pointer text-m hover:text-purple-600'>
//                     <Link to="/register">Not a User? Sign Up...!</Link>
//                 </p>
//             </form>
//         </div>
//     );
// };

// export default Login;

// import axios from 'axios';
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { setUserData } from '../features/authSlice';
// import { Link, useNavigate } from 'react-router-dom';
// import { getChatsofUser } from '../services/servics';
// import { setChats } from '../features/chatSlice';
// import toast from 'react-hot-toast';

// const Login = () => {
//     const [formData, setFormData] = useState({
//         email: '',
//         password: ''
//     });
//     const [isLoading, setIsLoading] = useState(false);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmitForm = async (e) => {
//         e.preventDefault();
        
//         // Basic validation
//         if (!formData.email || !formData.password) {
//             toast.error('Please fill in all fields');
//             return;
//         }
        
//         setIsLoading(true);

//         // Post request to validate user
//         try {
//             const res = await axios.post('https://gemini-clone-backend-z3g9.onrender.com/api/v1/auth/login', formData);
            
//             if (res.data.status === 'success') {
//                 toast.success(res.data.message || 'Login successful!');
                
//                 localStorage.setItem('token', res.data.token);
//                 localStorage.setItem('user', JSON.stringify(res.data.data || {}));
//                 const userData = {
//                     user: res.data.data,
//                     token: res.data.token
//                 };
//                 dispatch(setUserData(userData));

//                 const userChats = await getChatsofUser();
//                 dispatch(setChats(userChats));

//                 navigate('/new-chat');
//             } else {
//                 toast.error(res.data.message || 'Login failed');
//                 navigate('/login');
//             }
//         } catch (err) {
//             if (err.response) {
//                 // Server responded with error status
//                 toast.error(err.response.data.message || 'Login failed. Please check your credentials.');
//             } else if (err.request) {
//                 // Request made but no response
//                 toast.error('Network error. Please check your connection.');
//             } else {
//                 // Something else happened
//                 toast.error('An error occurred. Please try again.');
//             }
//             console.error('Login error:', err.message);
//             navigate('/login');
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return (
//         <div className="relative flex justify-around mt-5 items-center rounded-2xl overflow-auto flex-wrap shadow-2xl p-7 py-10">
//             {/* Loading Overlay */}
//             {isLoading && (
//                 <div className="fixed inset-0 flex items-center justify-center bg-black/60 bg-opacity-20 backdrop-blur-sm z-50">
//                     <div className="flex items-center gap-15 justify-center">
//                         <div className="w-12 h-12 border-4 border-t-transparent border-cyan-500 rounded-full animate-spin"></div>
//                         <span className="ml-4 text-4xl bg-gradient-to-br from-green-400 via-amber-300 to-red-400 bg-clip-text text-transparent animate-pulse">Logging in...</span>
//                     </div>
//                 </div>
//             )}

//             <div className='w-130'>
//                 <img src="https://img.freepik.com/free-vector/website-designer-concept-illustration_114360-4449.jpg?semt=ais_items_boosted&w=740" alt="" />
//             </div>

//             <form onSubmit={handleSubmitForm} className='p-7 py-10'>
//                 <h1 className="multicolor-text text-4xl p-2 text-center mb-7 font-bold font-serif">Login Form</h1>

//                 <div className="mb-5">
//                     <label className="text-gray-400">Enter Email</label><br />
//                     <input
//                         type="email"
//                         name="email"
//                         className="text-xl border-2 rounded-lg p-2"
//                         placeholder="abc@gmail.com"
//                         onChange={handleChange}
//                         value={formData.email}
//                         required
//                     />
//                 </div>
//                 <div className="mb-5">
//                     <label className="text-gray-400">Enter Password</label><br />
//                     <input
//                         type="password"
//                         name="password"
//                         className="text-xl border-2 rounded-lg p-2"
//                         placeholder="******"
//                         onChange={handleChange}
//                         value={formData.password}
//                         required
//                     />
//                 </div>

//                 <div className="mb-5 flex justify-center">
//                     <button
//                         type="submit"
//                         className="bg-cyan-500 hover:bg-cyan-600 px-5 text-2xl rounded-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
//                         disabled={isLoading}
//                     >
//                         {isLoading ? (
//                             <div className="flex items-center justify-center">
//                                 <div className="w-6 h-6 border-4 border-t-transparent border-cyan-100 rounded-full animate-spin"></div>
//                                 <span className="ml-2">Logging in...</span>
//                             </div>
//                         ) : (
//                             'Login'
//                         )}
//                     </button>
//                 </div>

//                 <p className='text-blue-600 cursor-pointer text-m hover:text-purple-600'>
//                     <Link to="/register">Not a User? Sign Up...!</Link>
//                 </p>
//             </form>
//         </div>
//     );
// };

// export default Login;

import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserData } from '../features/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import { getChatsofUser } from '../services/servics';
import { setChats } from '../features/chatSlice';

// Custom toast function with beautiful designs
const showToast = (message, type = 'info', duration = 4000) => {
  // Remove any existing toast
  const existingToast = document.querySelector('.custom-toast');
  if (existingToast) existingToast.remove();

  // Create toast container
  const toast = document.createElement('div');
  toast.className = `custom-toast fixed top-6 right-6 z-50 transform transition-all duration-500 ease-out ${type === 'success' ? 'animate-slide-in' : type === 'error' ? 'animate-bounce-in' : 'animate-fade-in'}`;
  
  // Set toast content based on type
  let bgColor, icon, iconColor;
  
  switch(type) {
    case 'success':
      bgColor = 'bg-gradient-to-r from-emerald-500 to-green-400';
      icon = '✓';
      iconColor = 'text-white';
      break;
    case 'error':
      bgColor = 'bg-gradient-to-r from-rose-500 to-pink-400';
      icon = '✕';
      iconColor = 'text-white';
      break;
    case 'loading':
      bgColor = 'bg-gradient-to-r from-cyan-500 to-blue-400';
      icon = '⌛';
      iconColor = 'text-white animate-pulse';
      break;
    case 'warning':
      bgColor = 'bg-gradient-to-r from-amber-500 to-yellow-400';
      icon = '⚠';
      iconColor = 'text-white';
      break;
    default:
      bgColor = 'bg-gradient-to-r from-slate-600 to-slate-500';
      icon = 'ℹ';
      iconColor = 'text-white';
  }

  toast.innerHTML = `
    <div class="${bgColor} rounded-xl shadow-2xl p-4 min-w-80 backdrop-blur-sm bg-opacity-90 border border-white/20">
      <div class="flex items-center space-x-3">
        <div class="flex-shrink-0">
          <div class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <span class="${iconColor} text-lg font-bold">${icon}</span>
          </div>
        </div>
        <div class="flex-1">
          <p class="text-white font-medium text-sm">${message}</p>
        </div>
        <button onclick="this.parentElement.parentElement.parentElement.remove()" 
                class="text-white/70 hover:text-white transition-colors text-xl font-bold">
          ×
        </button>
      </div>
      ${type !== 'loading' ? `
        <div class="mt-2">
          <div class="h-1 bg-white/30 rounded-full overflow-hidden">
            <div class="h-full bg-white rounded-full animate-progress"></div>
          </div>
        </div>
      ` : ''}
    </div>
  `;

  document.body.appendChild(toast);

  // Auto remove after duration (except for loading toasts)
  if (type !== 'loading') {
    setTimeout(() => {
      toast.style.transform = 'translateX(100%)';
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 500);
    }, duration);
  }

  return toast; // Return toast element for manual removal
};

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
        
        // Basic validation
        if (!formData.email || !formData.password) {
            showToast('Please fill in all fields', 'error');
            return;
        }
        
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            showToast('Please enter a valid email address', 'warning');
            return;
        }
        
        setIsLoading(true);
        const loadingToast = showToast('Authenticating your credentials...', 'loading');

        // Post request to validate user
        try {
            const res = await axios.post('https://gemini-clone-backend-z3g9.onrender.com/api/v1/auth/login', formData);
            
            // Remove loading toast
            loadingToast.remove();
            
            if (res.data.status === 'success') {
                showToast('🎉 Login successful! Redirecting...', 'success');
                
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('user', JSON.stringify(res.data.data || {}));
                const userData = {
                    user: res.data.data,
                    token: res.data.token
                };
                dispatch(setUserData(userData));

                // Show loading toast for fetching chats
                const chatsToast = showToast('Loading your conversations...', 'loading');
                const userChats = await getChatsofUser();
                chatsToast.remove();
                
                dispatch(setChats(userChats));

                // Success toast before navigation
                showToast('Welcome back! Ready to chat?', 'success', 2000);
                
                setTimeout(() => {
                    navigate('/new-chat');
                }, 1500);
            } else {
                showToast(res.data.message || 'Login failed. Please try again.', 'error');
                navigate('/login');
            }
        } catch (err) {
            // Remove loading toast
            loadingToast?.remove();
            
            if (err.response) {
                const errorMsg = err.response.data.message || 'Invalid credentials';
                showToast(`🔐 ${errorMsg}`, 'error');
            } else if (err.request) {
                showToast('🌐 Network error. Please check your connection.', 'error');
            } else {
                showToast('⚠️ An unexpected error occurred. Please try again.', 'error');
            }
            console.error('Login error:', err.message);
            navigate('/login');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="relative flex justify-around items-center rounded-2xl overflow-auto flex-wrap shadow-2xl p-7 py-10 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">

            {/* Loading Overlay */}
            {isLoading && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-md z-40">
                    <div className="text-center">
                        <div className="center w-32 h-32 mx-auto relative">
                            <div className="w-24 h-24 border-4 border-transparent border-t-cyan-400 border-r-purple-400 border-b-pink-400 border-l-emerald-400 rounded-full animate-spin"></div>
                            {/* <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full animate-pulse"></div>
                            </div> */}
                        </div>
                        <span className="mt-6 text-2xl bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent font-bold animate-pulse">
                            Securely logging you in...
                        </span>
                        <p className="mt-3 text-gray-400">Please wait while we verify your credentials</p>
                    </div>
                </div>
            )}

            <div className='w-130 relative'>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
                <img 
                    src="https://img.freepik.com/free-vector/website-designer-concept-illustration_114360-4449.jpg?semt=ais_items_boosted&w=740" 
                    alt="Login Illustration" 
                    className="relative z-10 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
            </div>

            <form onSubmit={handleSubmitForm} className='p-7 py-10 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 shadow-2xl'>
                <div className="text-center mb-8">
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                        Welcome Back
                    </h1>
                    <p className="text-gray-300">Sign in to continue your conversations</p>
                </div>

                <div className="mb-6">
                    <label className="block text-gray-300 mb-2 text-sm font-semibold">Email Address</label>
                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                        <input
                            type="email"
                            name="email"
                            className="relative w-full text-lg bg-gray-900/80 border-2 border-gray-700 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                            placeholder="you@example.com"
                            onChange={handleChange}
                            value={formData.email}
                            required
                        />
                    </div>
                </div>
                
                <div className="mb-8">
                    <label className="block text-gray-300 mb-2 text-sm font-semibold">Password</label>
                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                        <input
                            type="password"
                            name="password"
                            className="relative w-full text-lg bg-gray-900/80 border-2 border-gray-700 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                            placeholder="••••••••"
                            onChange={handleChange}
                            value={formData.password}
                            required
                        />
                    </div>
                </div>

                <div className="mb-6 flex justify-center">
                    <button
                        type="submit"
                        className="group relative px-10 py-4 text-xl font-bold rounded-xl overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 active:scale-95"
                        disabled={isLoading}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span className="relative z-10 text-white">
                            {isLoading ? (
                                <div className="flex items-center justify-center">
                                    <div className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin mr-3"></div>
                                    Authenticating...
                                </div>
                            ) : (
                                'Sign In →'
                            )}
                        </span>
                    </button>
                </div>

                <div className="text-center pt-6 border-t border-gray-700/50">
                    <p className="text-gray-400">
                        Don't have an account?{' '}
                        <Link 
                            to="/register" 
                            className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-300 hover:underline"
                        >
                            Create Account
                        </Link>
                    </p>
                    <p className="text-gray-500 text-sm mt-3">
                        By signing in, you agree to our Terms & Privacy
                    </p>
                </div>

                <div className="mt-8 flex items-center justify-center space-x-4">
                    <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent flex-1"></div>
                    <span className="text-gray-500 text-sm">Secure Login</span>
                    <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent flex-1"></div>
                </div>
            </form>

            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
    );
};

export default Login;