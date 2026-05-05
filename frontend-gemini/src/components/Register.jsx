
// import axios from 'axios';
// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const Register = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password: '',
//         dob: '',
//         city: ''
//     });
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [isLoading, setIsLoading] = useState(false);
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmitForm = async (e) => {
//         e.preventDefault();

//         // Validation
//         if (formData.name === '' || formData.email === '' || formData.password === '' || formData.dob === '' || formData.city === '') {
//             alert('📌 Fill all the fields');
//             return;
//         }

//         if (formData.password !== confirmPassword) {
//             alert('❌ Password and confirm password should be same!');
//             return;
//         }

//         // Post request with Axios
//         try {
//             setIsLoading(true);
//             const res = await axios.post('https://gemini-clone-backend-z3g9.onrender.com/api/v1/auth/register', formData);
//             alert(res.data.message);
//             if (res.data.status === 'success') {
//                 navigate('/login');
//             }
//         } catch (err) {
//             alert('Error: Unable to register. Please check your network or try again later.');
//             console.error('Registration error:', err.message);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return (
//         <div className='relative flex flex-wrap justify-around items-center mt-5 overflow-auto rounded-2xl shadow-2xl border'>
//             {/* Loading Overlay */}
//             {isLoading && (
//                 <div className="fixed inset-0 flex items-center justify-center bg-black/30 bg-opacity-50 backdrop-blur-sm z-50">
//                     <div className="flex items-center justify-center">
//                         <div className="w-12 h-12  border-t-transparent bg-pink-700 rounded-full animate-bounce"></div>
//                         <span className="ml-4 bg-gradient-to-br font-bold font-mono from-red-800 via-indigo-800 to-red-600 bg-clip-text text-transparent p-2 text-5xl ">Registering...</span>
//                     </div>
//                 </div>
//             )}

//             <div className='w-170'>
//                 <img src="https://png.pngtree.com/png-clipart/20230814/original/pngtree-online-registration-or-sign-up-login-for-account-on-smartphone-app-picture-image_7929949.png" alt="" />
//             </div>
//             <form action="" onSubmit={handleSubmitForm} className='p-5'>
//                 <h1 className='multicolor-text text-3xl p-2 text-center mb-3 font-bold font-serif'>Create An Account</h1>

//                 <div className='mb-3'>
//                     <label htmlFor="" className='text-gray-400'>Enter Name</label><br />
//                     <input
//                         type="text"
//                         name="name"
//                         placeholder='Enter Name'
//                         className='text-xl border-2 rounded-lg px-6 p-1'
//                         onChange={handleChange}
//                         value={formData.name}
//                     />
//                 </div>

//                 <div className='mb-3'>
//                     <label htmlFor="" className='text-gray-400'>Enter Email</label><br />
//                     <input
//                         type="email"
//                         name="email"
//                         placeholder='Enter email'
//                         className='text-xl border-2 rounded-lg px-6 p-1'
//                         onChange={handleChange}
//                         value={formData.email}
//                     />
//                 </div>
//                 <div className='mb-3'>
//                     <label htmlFor="" className='text-gray-400'>Enter DOB</label><br />
//                     <input
//                         type="date"
//                         name="dob"
//                         placeholder='Enter DOB'
//                         className='text-xl border-2 rounded-lg px-6 p-1'
//                         onChange={handleChange}
//                         value={formData.dob}
//                     />
//                 </div>
//                 <div className='mb-3'>
//                     <label htmlFor="" className='text-gray-400'>Enter City</label><br />
//                     <input
//                         type="text"
//                         name="city"
//                         placeholder='Enter City'
//                         className='text-xl border-2 rounded-lg px-6 p-1'
//                         onChange={handleChange}
//                         value={formData.city}
//                     />
//                 </div>

//                 <div className='mb-3'>
//                     <label htmlFor="" className='text-gray-400'>Enter Password</label><br />
//                     <input
//                         type="password"
//                         name="password"
//                         placeholder='******'
//                         className='text-xl border-2 rounded-lg px-6 p-1'
//                         onChange={handleChange}
//                         value={formData.password}
//                     />
//                 </div>

//                 <div className='mb-3'>
//                     <label htmlFor="" className='text-gray-400'>Confirm Password</label><br />
//                     <input
//                         type="password"
//                         name="confirmPassword"
//                         placeholder='******'
//                         className='text-xl border-2 rounded-lg px-6 p-1'
//                         onChange={(e) => setConfirmPassword(e.target.value)}
//                         value={confirmPassword}
//                     />
//                 </div>

//                 <div className="mb-2 flex justify-center">
//                     <button
//                         type="submit"
//                         className='bg-cyan-500 hover:bg-cyan-600 px-5 text-xl rounded-lg cursor-pointer'
//                         disabled={isLoading}
//                     >
//                         {isLoading ? (
//                             <div className="flex items-center justify-center">
//                                 <div className="w-6 h-6 border-4 border-t-transparent border-cyan-200 rounded-full animate-spin"></div>
//                                 <span className="ml-2">Registering...</span>
//                             </div>
//                         ) : (
//                             'Register'
//                         )}
//                     </button>
//                 </div>

//                 <p className='text-blue-600 cursor-pointer text-m hover:text-purple-600'>
//                     <Link to="/login">Already an User ...? Sign in</Link>
//                 </p>
//             </form>
//         </div>
//     );
// };

// export default Register;

import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
      bgColor = 'bg-gradient-to-r from-emerald-500 via-green-400 to-teal-400';
      icon = '✓';
      iconColor = 'text-white';
      break;
    case 'error':
      bgColor = 'bg-gradient-to-r from-rose-500 via-pink-400 to-red-400';
      icon = '✕';
      iconColor = 'text-white';
      break;
    case 'loading':
      bgColor = 'bg-gradient-to-r from-indigo-500 via-purple-400 to-blue-400';
      icon = '⌛';
      iconColor = 'text-white animate-pulse';
      break;
    case 'warning':
      bgColor = 'bg-gradient-to-r from-amber-500 via-yellow-400 to-orange-400';
      icon = '⚠';
      iconColor = 'text-white';
      break;
    case 'info':
      bgColor = 'bg-gradient-to-r from-cyan-500 via-blue-400 to-indigo-400';
      icon = 'ℹ';
      iconColor = 'text-white';
      break;
    default:
      bgColor = 'bg-gradient-to-r from-slate-600 via-gray-500 to-slate-400';
      icon = '📝';
      iconColor = 'text-white';
  }

  toast.innerHTML = `
    <div class="${bgColor} rounded-xl shadow-2xl p-4 min-w-80 backdrop-blur-sm bg-opacity-90 border border-white/20">
      <div class="flex items-center space-x-3">
        <div class="flex-shrink-0">
          <div class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shadow-lg">
            <span class="${iconColor} text-lg font-bold">${icon}</span>
          </div>
        </div>
        <div class="flex-1">
          <p class="text-white font-medium text-sm">${message}</p>
        </div>
        <button onclick="this.parentElement.parentElement.parentElement.remove()" 
                class="text-white/70 hover:text-white transition-colors text-xl font-bold hover:scale-125 transform duration-200">
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

  return toast;
};

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        dob: '',
        city: ''
    });
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmitForm = async (e) => {
        e.preventDefault();

        // Validation with specific messages
        if (formData.name === '' || formData.email === '' || formData.password === '' || formData.dob === '' || formData.city === '') {
            showToast('📝 Please fill in all required fields', 'warning');
            return;
        }

        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            showToast('📧 Please enter a valid email address', 'warning');
            return;
        }

        if (formData.password.length < 6) {
            showToast('🔐 Password must be at least 6 characters long', 'warning');
            return;
        }

        if (formData.password !== confirmPassword) {
            showToast('🔑 Passwords do not match. Please try again!', 'error');
            return;
        }

        // Check if user is at least 13 years old
        // const dobDate = new Date(formData.dob);
        // const today = new Date();
        // const age = today.getFullYear() - dobDate.getFullYear();
        // const monthDiff = today.getMonth() - dobDate.getMonth();
        // if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) {
        //     age--;
        // }
        // if (age < 13) {
        //     showToast('👶 You must be at least 13 years old to register', 'warning');
        //     return;
        // }

        // Post request with Axios
        try {
            setIsLoading(true);
            const loadingToast = showToast('🚀 Creating your account...', 'loading');
            
            const res = await axios.post('https://gemini-clone-backend-z3g9.onrender.com/api/v1/auth/register', formData);
            
            loadingToast.remove();
            
            if (res.data.status === 'success') {
                showToast('🎉 Account created successfully! Redirecting to login...', 'success');
                
                // Success animation before navigation
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
            } else {
                showToast(res.data.message || 'Registration failed', 'error');
            }
        } catch (err) {
            if (err.response) {
                const errorMsg = err.response.data.message || 'Registration failed';
                if (errorMsg.includes('already exists')) {
                    showToast('📧 Email already registered. Try logging in!', 'warning');
                } else {
                    showToast(`❌ ${errorMsg}`, 'error');
                }
            } else if (err.request) {
                showToast('🌐 Network error. Please check your connection.', 'error');
            } else {
                showToast('⚠️ An unexpected error occurred. Please try again.', 'error');
            }
            console.error('Registration error:', err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="relative flex flex-wrap justify-around items-center  overflow-auto rounded-3xl shadow-2xl bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 border border-white/10">

            {/* Loading Overlay */}
            {isLoading && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-lg z-50">
                    <div className="text-center">
                        <div className="center w-32 h-32 mx-auto relative">
                            <div className="w-32 h-32 border-4 border-transparent border-t-purple-400 border-r-cyan-400 border-b-pink-400 border-l-indigo-400 rounded-full animate-spin"></div>
                            {/* <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 rounded-full animate-pulse"></div>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-white text-2xl font-bold">✨</span>
                            </div> */}
                        </div>
                        <span className="text-3xl bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent font-bold animate-pulse">
                            Creating Your Account
                        </span>
                        <p className="mt-4 text-gray-300 max-w-md">
                            Setting up your profile and securing your data...
                        </p>
                        <div className="mt-8 w-64 h-1 bg-gray-700 rounded-full overflow-hidden mx-auto">
                            <div className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 animate-pulse"></div>
                        </div>
                    </div>
                </div>
            )}

            <div className='w-170 relative animate-float'>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
                <img 
                    src="https://png.pngtree.com/png-clipart/20230814/original/pngtree-online-registration-or-sign-up-login-for-account-on-smartphone-app-picture-image_7929949.png" 
                    alt="Registration Illustration" 
                    className="relative z-10 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
            </div>

            <form onSubmit={handleSubmitForm} className='p-8 py-10 bg-white/5 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl'>
                <div className="text-center mb-10">
                    <h1 className='text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-3'>
                        Join Our Community
                    </h1>
                    <p className="text-gray-300">Create your account to start chatting</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="group">
                        <label className='block text-gray-300 mb-2 text-sm font-semibold'>Full Name</label>
                        <div className="relative">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                            <input
                                type="text"
                                name="name"
                                placeholder='John Doe'
                                className='relative w-full text-lg bg-gray-900/80 border-2 border-gray-700 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300'
                                onChange={handleChange}
                                value={formData.name}
                                required
                            />
                        </div>
                    </div>

                    <div className="group">
                        <label className='block text-gray-300 mb-2 text-sm font-semibold'>Email Address</label>
                        <div className="relative">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                            <input
                                type="email"
                                name="email"
                                placeholder='you@example.com'
                                className='relative w-full text-lg bg-gray-900/80 border-2 border-gray-700 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300'
                                onChange={handleChange}
                                value={formData.email}
                                required
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="group">
                        <label className='block text-gray-300 mb-2 text-sm font-semibold'>Date of Birth</label>
                        <div className="relative">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                            <input
                                type="date"
                                name="dob"
                                className='relative w-full text-lg bg-gray-900/80 border-2 border-gray-700 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300'
                                onChange={handleChange}
                                value={formData.dob}
                                required
                                max={new Date(new Date().setFullYear(new Date().getFullYear() - 13)).toISOString().split('T')[0]}
                            />
                        </div>
                    </div>

                    <div className="group">
                        <label className='block text-gray-300 mb-2 text-sm font-semibold'>City</label>
                        <div className="relative">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                            <input
                                type="text"
                                name="city"
                                placeholder='New York'
                                className='relative w-full text-lg bg-gray-900/80 border-2 border-gray-700 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300'
                                onChange={handleChange}
                                value={formData.city}
                                required
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="group">
                        <label className='block text-gray-300 mb-2 text-sm font-semibold'>Password</label>
                        <div className="relative">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                            <input
                                type="password"
                                name="password"
                                placeholder='••••••••'
                                className='relative w-full text-lg bg-gray-900/80 border-2 border-gray-700 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300'
                                onChange={handleChange}
                                value={formData.password}
                                required
                                minLength="6"
                            />
                            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
                                min. 6 chars
                            </span>
                        </div>
                    </div>

                    <div className="group">
                        <label className='block text-gray-300 mb-2 text-sm font-semibold'>Confirm Password</label>
                        <div className="relative">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder='••••••••'
                                className={`relative w-full text-lg bg-gray-900/80 border-2 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 ${confirmPassword && formData.password !== confirmPassword ? 'border-rose-500' : confirmPassword && formData.password === confirmPassword ? 'border-emerald-500' : 'border-gray-700'}`}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                value={confirmPassword}
                                required
                            />
                            {confirmPassword && (
                                <span className="absolute right-4 top-1/2 transform -translate-y-1/2">
                                    {formData.password === confirmPassword ? (
                                        <span className="text-emerald-400">✓</span>
                                    ) : (
                                        <span className="text-rose-400">✕</span>
                                    )}
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                <div className="mb-8">
                    <div className="flex items-center mb-4">
                        <input
                            type="checkbox"
                            id="terms"
                            className="w-4 h-4 text-cyan-500 bg-gray-800 border-gray-600 rounded focus:ring-cyan-500 focus:ring-2"
                            required
                        />
                        <label htmlFor="terms" className="ml-2 text-sm text-gray-300">
                            I agree to the{' '}
                            <span className="text-cyan-400 hover:text-cyan-300 cursor-pointer">Terms of Service</span>{' '}
                            and{' '}
                            <span className="text-cyan-400 hover:text-cyan-300 cursor-pointer">Privacy Policy</span>
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="group relative w-full py-4 text-xl font-bold rounded-xl overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-[1.02] active:scale-95"
                        disabled={isLoading}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span className="relative z-10 text-white flex items-center justify-center">
                            {isLoading ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin mr-3"></div>
                                    Creating Account...
                                </>
                            ) : (
                                <>
                                    Get Started
                                    <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </>
                            )}
                        </span>
                    </button>
                </div>

                <div className="text-center pt-6 border-t border-gray-700/50">
                    <p className="text-gray-400">
                        Already have an account?{' '}
                        <Link 
                            to="/login" 
                            className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-300 hover:underline"
                        >
                            Sign In Now
                        </Link>
                    </p>
                    <p className="text-gray-500 text-sm mt-3">
                        Your data is protected with end-to-end encryption
                    </p>
                </div>
            </form>

            {/* Background decorative elements */}
            <div className="absolute top-10 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-pink-500/5 rounded-full blur-2xl"></div>
        </div>
    );
};

export default Register;